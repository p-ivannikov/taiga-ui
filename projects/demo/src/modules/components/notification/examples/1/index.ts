import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLink, TuiNotification, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiLink, TuiNotification, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
