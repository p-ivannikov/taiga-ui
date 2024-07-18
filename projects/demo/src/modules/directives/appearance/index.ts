import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiInteractiveState} from '@taiga-ui/core';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected appearances = ['primary', 'secondary', 'flat'];
    protected appearance = this.appearances[0];

    protected states: readonly TuiInteractiveState[] = ['hover', 'active', 'disabled'];
    protected state: TuiInteractiveState | null = null;

    protected focus: boolean | null = null;
}
