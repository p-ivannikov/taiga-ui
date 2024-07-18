import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar, TuiButtonVertical} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiButton, TuiButtonVertical],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
