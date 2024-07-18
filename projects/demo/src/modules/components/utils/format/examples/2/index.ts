import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce';
import {tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiDataListWrapper, TuiSelectModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'USD',
        'RUB',
        '643',
        'KZT',
        '051',
        'KRW',
        'CHF',
        'EUR',
        'GBP',
    ];

    protected parametersForm = new FormGroup({
        currency: new FormControl<TuiCurrencyVariants>(null),
    });

    protected get currency(): string | null {
        const {currency} = this.parametersForm.value;

        return currency ? tuiGetCurrencySymbol(currency) : null;
    }
}
