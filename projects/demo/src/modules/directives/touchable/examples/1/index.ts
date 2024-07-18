import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTouchable} from '@taiga-ui/addon-mobile';
import {TuiSurface} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiCardLarge, TuiSurface, TuiTouchable],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
