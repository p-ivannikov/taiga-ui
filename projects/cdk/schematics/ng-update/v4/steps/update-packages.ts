/// <reference lib="es2021" />
import {peerDependencies} from '@taiga-ui/cdk/package.json';
import type {DevkitFileSystem} from 'ng-morph';
import {
    addPackageJsonDependency,
    getPackageJsonDependency,
    removePackageJsonDependency,
} from 'ng-morph';

import {TUI_VERSION} from '../../../../constants/version';
import type {TuiSchema} from '../../../ng-add/schema';
import {replacePackageName} from '../../steps';

export function updatePackages({tree}: DevkitFileSystem, _: TuiSchema): void {
    const packagesToRemove = ['@taiga-ui/addon-tablebars', '@taiga-ui/addon-preview'];

    packagesToRemove.forEach((pkg) => {
        removePackageJsonDependency(tree, pkg);
    });

    addPackageJsonDependency(tree, {
        name: '@taiga-ui/legacy',
        version: TUI_VERSION,
    });

    replacePackageName(
        '@tinkoff/ng-polymorpheus',
        {
            name: '@taiga-ui/polymorpheus',
            version: peerDependencies['@taiga-ui/polymorpheus'],
        },
        tree,
    );
    replacePackageName(
        '@tinkoff/ng-event-plugins',
        {
            name: '@taiga-ui/event-plugins',
            version: peerDependencies['@taiga-ui/event-plugins'],
        },
        tree,
    );
    replacePackageName(
        '@tinkoff/tui-editor',
        {
            name: '@taiga-ui/editor',
            version: '^2.0.0',
        },
        tree,
    );

    if (!getPackageJsonDependency(tree, '@taiga-ui/event-plugins')) {
        addPackageJsonDependency(tree, {
            name: '@taiga-ui/event-plugins',
            version: peerDependencies['@taiga-ui/event-plugins'],
        });
    }
}
