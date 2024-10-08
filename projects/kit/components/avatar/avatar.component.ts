import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiImgLazyLoading} from '@taiga-ui/kit/directives';

import {TUI_AVATAR_OPTIONS} from './avatar.options';

@Component({
    standalone: true,
    selector: 'tui-avatar,button[tuiAvatar],a[tuiAvatar]',
    imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, TuiIcon, TuiImgLazyLoading],
    templateUrl: './avatar.template.html',
    styleUrls: ['./avatar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
    hostDirectives: [TuiWithAppearance],
    host: {
        '[attr.data-size]': 'size',
        '[attr.data-type]': 'type',
        '[class._round]': 'round',
        '[class._svg]': 'svg',
    },
})
export class TuiAvatar {
    private readonly options = inject(TUI_AVATAR_OPTIONS);

    @Input()
    public size = this.options.size;

    @Input()
    public round = this.options.round;

    @Input()
    public src?: SafeResourceUrl | string | null;

    protected get safeSrc(): string {
        return this.src?.toString() ?? '';
    }

    protected get value(): SafeResourceUrl | string {
        return this.src || '';
    }

    protected get svg(): boolean {
        return tuiIsString(this.value) && this.value.endsWith('.svg');
    }

    protected get type(): 'content' | 'icon' | 'img' | 'text' {
        if (this.value && !tuiIsString(this.value)) {
            return 'img';
        }

        if (this.value.startsWith('@tui.')) {
            return 'icon';
        }

        if (this.value.length > 0 && this.value.length < 3) {
            return 'text';
        }

        return this.value.length ? 'img' : 'content';
    }
}
