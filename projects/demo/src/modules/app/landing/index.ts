import {NgIf} from '@angular/common';
import type {OnInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    ViewChildren,
} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {
    INTERSECTION_ROOT,
    IntersectionObserverModule,
} from '@ng-web-apis/intersection-observer';
import {EMPTY_QUERY, TuiAutoFocus, tuiProvide, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, tuiFadeIn} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        IntersectionObserverModule,
        NgIf,
        RouterLink,
        TuiAutoFocus,
        TuiButton,
        TuiRepeatTimes,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(INTERSECTION_ROOT, ElementRef)],
    animations: [tuiFadeIn],
    host: {
        '[class._hide]': 'hidden',
    },
})
export default class Page implements OnInit {
    @ViewChildren('block', {read: ElementRef})
    private readonly blocks: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    protected readonly storage = inject(LOCAL_STORAGE);
    protected readonly routes = DemoRoute;

    protected current = 0;

    protected intersected = false;

    public async ngOnInit(): Promise<void> {
        await this.clearQueryParams();
    }

    @HostBinding('style.background')
    protected get background(): string {
        return this.current ? '#5f6ed0' : '#3dc67c';
    }

    protected get hidden(): boolean {
        return !!this.storage.getItem('env');
    }

    protected onIntersection(
        [{isIntersecting, target}]: IntersectionObserverEntry[],
        index: number,
    ): void {
        if (isIntersecting) {
            this.current = index;
            target.scrollIntoView({behavior: 'smooth'});
        }
    }

    protected onClick(): void {
        this.blocks.forEach(({nativeElement}, index) => {
            if (index === this.current + 1) {
                nativeElement.scrollIntoView({behavior: 'smooth'});
            }
        });
    }

    private async clearQueryParams(): Promise<void> {
        await this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParamsHandling: '',
            queryParams: {},
        });
    }
}
