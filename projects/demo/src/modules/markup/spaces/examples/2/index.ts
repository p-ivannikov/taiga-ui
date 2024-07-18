import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCopy, TuiDocText} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [ClipboardModule, TuiDocCopy, TuiDocText],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
