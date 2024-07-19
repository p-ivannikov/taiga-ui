import type {OnChanges, OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    HostBinding,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiIsString, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons, TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_NOTIFICATION_OPTIONS} from './notification.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./notification.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-notification',
    },
})
class TuiNotificationStyles {}

@Directive({
    standalone: true,
    selector: 'tui-notification,a[tuiNotification],button[tuiNotification]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS),
        tuiLinkOptionsProvider({
            appearance: '',
            pseudo: true,
        }),
        tuiButtonOptionsProvider({
            appearance: 'whiteblock',
            size: 's',
        }),
    ],
    hostDirectives: [TuiWithIcons, TuiWithAppearance],
})
export class TuiNotification implements OnChanges, OnInit {
    protected readonly nothing = tuiWithStyles(TuiNotificationStyles);
    protected readonly icons = inject(TuiIcons);

    @Input()
    public appearance = inject(TUI_NOTIFICATION_OPTIONS).appearance;

    @Input()
    public icon = inject(TUI_NOTIFICATION_OPTIONS).icon;

    @Input()
    @HostBinding('attr.data-size')
    public size = inject(TUI_NOTIFICATION_OPTIONS).size;

    public ngOnInit(): void {
        this.refresh();
    }

    public ngOnChanges(): void {
        this.refresh();
    }

    private refresh(): void {
        this.icons.iconStart = tuiIsString(this.icon)
            ? this.icon
            : this.icon(this.appearance);
    }
}
