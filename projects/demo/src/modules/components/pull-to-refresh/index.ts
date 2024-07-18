import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiScrollbar} from '@taiga-ui/core';
import {
    PolymorpheusComponent,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [PolymorpheusOutlet, PolymorpheusTemplate, TuiDemo, TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly example1 = import('./examples/1').then(
        ({default: component}) => new PolymorpheusComponent(component),
    );

    protected readonly example2 = import('./examples/2').then(
        ({default: component}) => new PolymorpheusComponent(component),
    );
}
