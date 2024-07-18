import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiAccordion, TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'demo-home',
    imports: [TuiAccordion, TuiDemo, TuiTabs],
    templateUrl: './home.template.html',
    styleUrls: ['./home.style.less'],
    encapsulation,
    changeDetection,
})
export class Home {
    protected readonly angularJsonStyles = import(
        './examples/angular-json-styles.md?raw'
    );

    protected readonly projectJsonStyles = import(
        './examples/project-json-styles.md?raw'
    );

    protected readonly angularJsonGlobalSingleStyles = import(
        './examples/angular-json-global-single-styles.md?raw'
    );

    protected readonly stylesLess = import('./examples/styles.less.md?raw');
    protected readonly appTemplate = import('./examples/app-template.md?raw');
    protected readonly assets = import('./examples/assets.md?raw');
    protected readonly nxAssets = import('./examples/nx-assets.md?raw');
    protected readonly componentsStyles = import('./examples/components-styles.md?raw');
    protected readonly importLocalLess = import('./examples/import-local-less.md?raw');
    protected readonly main = import('./examples/main.md?raw');
    protected readonly addons = import('./examples/addons.md?raw');
    protected readonly nxAdd = import('./examples/nx-add.md?raw');
    protected readonly nxMigrate = import('./examples/nx-migrate.md?raw');
    protected readonly standalone = import('./examples/app-standalone.md?raw');
    protected readonly standaloneMain = import('./examples/main-standalone.md?raw');

    protected readonly customGlobalStyle = import(
        '../../../../../styles/taiga-ui-global.less?raw'
    ).then(({default: content}) => ({
        default: content
            // eslint-disable-next-line @typescript-eslint/quotes
            .replaceAll("@import '", `@import '@taiga-ui/styles/`)
            .replace('@taiga-ui/styles/@taiga-ui/core', '@taiga-ui/core'),
    }));
}
