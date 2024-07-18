import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputCard, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiCheckbox,
        TuiInputCard,
        TuiTextfield,
        TuiThumbnailCard,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected card = '1234123412341234';
}
