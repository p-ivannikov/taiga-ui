import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiExpand,
    TuiIcon,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiChevron,
    TuiFade,
    TuiTabs,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiBadgeNotification,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiExpand,
        TuiFade,
        TuiHeader,
        TuiIcon,
        TuiNavigation,
        TuiRepeatTimes,
        TuiSurface,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected expanded = false;
    protected submenu = false;
    protected readonly routes = DemoRoute;
}
