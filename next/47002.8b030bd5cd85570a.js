(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[47002],{47002:e=>{e.exports="import {Component} from '@angular/core';\nimport {RouterLink, RouterLinkActive} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiRepeatTimesDirective} from '@taiga-ui/cdk';\nimport {\n    TuiAppearanceDirective,\n    TuiButtonDirective,\n    TuiDataListComponent,\n    TuiDropdownDirective,\n    TuiDropdownOpenDirective,\n    TuiDropdownPositionSidedDirective,\n    TuiExpand,\n    TuiIconComponent,\n    TuiOptionComponent,\n    TuiSurfaceDirective,\n    TuiTitleDirective,\n} from '@taiga-ui/core';\nimport {TuiNavigationModule} from '@taiga-ui/experimental';\nimport {\n    TuiAvatarComponent,\n    TuiBadgeDirective,\n    TuiBadgeNotificationComponent,\n    TuiChevronDirective,\n    TuiFadeDirective,\n    TuiTabDirective,\n    TuiTabsHorizontalDirective,\n} from '@taiga-ui/kit';\nimport {TuiCardLargeDirective, TuiHeaderDirective} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiNavigationModule,\n        TuiButtonDirective,\n        TuiIconComponent,\n        TuiChevronDirective,\n        TuiDropdownOpenDirective,\n        TuiDropdownDirective,\n        TuiFadeDirective,\n        TuiDataListComponent,\n        TuiOptionComponent,\n        TuiBadgeNotificationComponent,\n        TuiAvatarComponent,\n        RouterLink,\n        RouterLinkActive,\n        TuiAppearanceDirective,\n        TuiDropdownPositionSidedDirective,\n        TuiExpand,\n        TuiBadgeDirective,\n        TuiTabsHorizontalDirective,\n        TuiTabDirective,\n        TuiRepeatTimesDirective,\n        TuiCardLargeDirective,\n        TuiHeaderDirective,\n        TuiSurfaceDirective,\n        TuiTitleDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected open = false;\n    protected expanded = false;\n    protected submenu = false;\n}\n"}}]);