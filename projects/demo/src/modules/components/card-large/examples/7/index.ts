import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiLink,
    TuiSurface,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiAsideItemDirective, TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        TuiAppearance,
        TuiAsideItemDirective,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiDataList,
        TuiDropdown,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiRepeatTimes,
        TuiSurface,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
