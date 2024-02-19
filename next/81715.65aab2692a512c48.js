(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[81715],{81715:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nconst getIcon: Record<string, string> = {\n    Calendar: 'tuiIconCalendarLarge',\n    Favorite: 'tuiIconStarLarge',\n    Messages: 'tuiIconMessageSquareLarge',\n    FAQ: 'tuiIconHelpCircleLarge',\n    Settings: 'tuiIconSettingsLarge',\n};\n\n@Component({\n    selector: 'tui-filter-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiFilterExample3 {\n    items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];\n\n    form = new FormGroup({\n        filters: new FormControl<string[]>([]),\n    });\n\n    getItemIcon(title: string): string {\n        return getIcon[title];\n    }\n}\n"}}]);