import {Location} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    Host,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    ViewChild,
} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from '@angular/forms';
import {Params, UrlSerializer, UrlTree} from '@angular/router';
import {TuiDemoParams} from '@taiga-ui/addon-doc/interfaces';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';
import {TUI_DOC_DEMO_TEXTS, TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {tuiCoerceValueIsTrue} from '@taiga-ui/addon-doc/utils';
import {
    TUI_IS_MOBILE,
    tuiClamp,
    tuiCleanObject,
    TuiDestroyService,
    tuiPure,
    tuiPx,
    TuiResizeableDirective,
    TuiStringHandler,
    tuiToInteger,
} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {TUI_ARROW, TUI_ARROW_OPTIONS, TuiArrowOptions} from '@taiga-ui/kit';
import {Observable, Subject} from 'rxjs';

const MIN_WIDTH = 160;

@Component({
    selector: 'tui-doc-demo',
    templateUrl: './demo.template.html',
    styleUrls: ['./demo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        {
            provide: TuiModeDirective,
            useExisting: forwardRef(() => TuiDocDemoComponent),
        },
    ],
})
export class TuiDocDemoComponent {
    @ViewChild('content')
    private readonly content?: ElementRef<HTMLElement>;

    @ViewChild('resizer')
    private readonly resizer?: ElementRef<HTMLElement>;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    private _resizeable?: ElementRef<HTMLElement>;

    @Input()
    sticky = true;

    readonly updateOnVariants = ['change', 'blur', 'submit'] as const;

    updateOn: 'blur' | 'change' | 'submit' =
        this.params.updateOn || this.updateOnVariants[0];

    opaque = tuiCoerceValueIsTrue(this.params.sandboxOpaque ?? true);
    expanded = tuiCoerceValueIsTrue(this.params.sandboxExpanded ?? false);
    mode: TuiBrightness | null = this.params.tuiMode || null;
    sandboxWidth = tuiToInteger(this.params.sandboxWidth);

    activeItemIndex = 0;

    optionsDropdownOpen = false;

    readonly arrow = TUI_ARROW;

    readonly change$ = new Subject<void>();
    readonly items: ReadonlyArray<TuiBrightness | null> = [null, 'onLight', 'onDark'];

    constructor(
        @Inject(TUI_ARROW_OPTIONS) readonly options: TuiArrowOptions,
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(Location) private readonly locationRef: Location,
        @Inject(UrlSerializer) private readonly urlSerializer: UrlSerializer,
        @Inject(TUI_DOC_DEMO_TEXTS) readonly texts: [string, string, string],
        @Inject(TUI_DOC_URL_STATE_HANDLER)
        private readonly urlStateHandler: TuiStringHandler<UrlTree>,
        @Inject(TuiApiHostService)
        @Optional()
        private readonly apiHostService: TuiApiHostService | null,
        @Inject(ControlContainer)
        @Optional()
        @Host()
        readonly controlContainer: ControlContainer | null,
    ) {}

    get code$(): Observable<string> | undefined {
        return this.apiHostService?.code$;
    }

    @HostBinding('class._sticky')
    get isSticky(): boolean {
        return this.sticky && this.activeItemIndex === 0;
    }

    @ViewChild(TuiResizeableDirective)
    private set resizeable(value: ElementRef<HTMLElement> | undefined) {
        this._resizeable = value;
        this.updateWidth(this.sandboxWidth + this.delta);
    }

    private get resizeable(): ElementRef<HTMLElement> | undefined {
        return this._resizeable;
    }

    @HostListener('window:resize')
    onResize(): void {
        this.updateWidth();
        this.onMouseUp();
    }

    @HostListener('document:mouseup.silent')
    onMouseUp(): void {
        this.updateUrl({sandboxWidth: this.sandboxWidth});
    }

    onModeChange(mode: TuiBrightness | null): void {
        this.mode = mode;
        this.updateUrl({sandboxWidth: this.sandboxWidth});
        this.change$.next();
    }

    toggleDetails(): void {
        this.expanded = !this.expanded;
        this.updateUrl({sandboxExpanded: this.expanded});
    }

    changeOpaque(opaque: boolean): void {
        this.opaque = opaque;
        this.updateUrl({sandboxOpaque: this.opaque});
    }

    updateOnChange(updateOn: 'blur' | 'change' | 'submit'): void {
        this.updateOn = updateOn;
        this.updateUrl({updateOn});

        const formDirective = this.controlContainer?.formDirective;

        if (formDirective instanceof FormGroupDirective) {
            const {form} = formDirective;

            formDirective.form = new FormGroup(form.controls, {
                validators: form.validator,
                asyncValidators: form.asyncValidator,
                updateOn,
            });
        }
    }

    updateWidth(width: number = NaN): void {
        if (!this.resizer || !this.resizeable || !this.content) {
            return;
        }

        const safe = width || this.resizeable.nativeElement.clientWidth;
        const total = this.el.nativeElement.clientWidth;
        const clamped = Math.round(tuiClamp(safe, MIN_WIDTH, total)) - this.delta;
        const validated = safe < total ? clamped : NaN;

        this.resizer.nativeElement.textContent = String(clamped || '-');
        this.resizeable.nativeElement.style.width = validated ? tuiPx(safe) : '';
        this.sandboxWidth = validated;
    }

    private get delta(): number {
        return this.resizeable && this.content
            ? this.resizeable.nativeElement.clientWidth -
                  this.content.nativeElement.clientWidth
            : 0;
    }

    @tuiPure
    private updateUrl(params: TuiDemoParams): void {
        const tree = this.getUrlTree();
        const {queryParams} = tree;

        delete queryParams.sandboxWidth;
        delete queryParams.tuiMode;

        tree.queryParams = {
            ...queryParams,
            ...tuiCleanObject({tuiMode: this.mode, ...params}),
        };

        this.locationRef.go(this.urlStateHandler(tree));
    }

    private getUrlTree(): UrlTree {
        return this.urlSerializer.parse(this.locationRef.path());
    }

    private get params(): Params | TuiDemoParams {
        return this.getUrlTree().queryParams;
    }
}
