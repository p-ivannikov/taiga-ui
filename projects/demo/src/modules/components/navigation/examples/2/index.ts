import {DOCUMENT} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiChevron, TuiFade, TuiSwitch, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiDropdown,
        TuiFade,
        TuiHeader,
        TuiIcon,
        TuiNavigation,
        TuiRepeatTimes,
        TuiSurface,
        TuiSwitch,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly doc = inject(DOCUMENT);

    protected color = false;

    protected readonly initial =
        this.doc.head
            .querySelector('meta[name="theme-color"]')
            ?.getAttribute('content') || '';

    protected onColor(color: boolean): void {
        this.color = color;
        this.doc.body.style.setProperty('--tui-theme-color', color ? 'purple' : 'black');
        this.doc.head
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', color ? 'purple' : this.initial);
    }
}
