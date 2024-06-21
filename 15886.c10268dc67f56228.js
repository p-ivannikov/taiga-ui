(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[15886],{15886:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSidebar} from '@taiga-ui/addon-mobile';\nimport {TuiActiveZone} from '@taiga-ui/cdk';\nimport {TuiButton, TuiLink} from '@taiga-ui/core';\nimport {TuiAccordion} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [TuiButton, TuiActiveZone, TuiSidebar, TuiAccordion, NgForOf, TuiLink],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n\n    protected readonly webApis = [\n        'Common',\n        'Audio',\n        'Canvas',\n        'Geolocation',\n        'MIDI',\n        'Workers',\n    ];\n\n    protected readonly taigaFamilyProducts = [\n        'Taiga-UI',\n        'ng-event-plugins',\n        'ng-polymorpheus',\n        'ng-dompurify',\n    ];\n\n    protected toggle(open: boolean): void {\n        this.open = open;\n    }\n}\n"}}]);