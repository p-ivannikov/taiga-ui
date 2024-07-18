import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification, TuiSurface} from '@taiga-ui/core';
import {TuiAvatar, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiDataListWrapper,
        TuiNotification,
        TuiSelectModule,
        TuiSurface,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            icon: '@tui.eye',
            title: 'Show more',
            subtitle: 'Ctrl + Shift + M',
        },
        {
            icon: '@tui.mail',
            title: 'Send message',
            subtitle: 'Keep it short',
        },
        {
            icon: '@tui.lock',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];

    protected value = this.items[0];
}
