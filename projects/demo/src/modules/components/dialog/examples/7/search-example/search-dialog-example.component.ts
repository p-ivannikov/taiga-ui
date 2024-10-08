import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiTextfield} from '@taiga-ui/core';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiAutoFocus, TuiTextfield],
    templateUrl: './search-dialog-example.template.html',
    styleUrls: ['./search-dialog-example.component.less'],
    changeDetection,
})
export class SearchDialogExample {
    private readonly context = injectContext<TuiDialogContext<boolean>>();

    protected close(): void {
        this.context.completeWith(false);
    }
}
