import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiHint} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAutoColorPipe, TuiAvatar, TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
