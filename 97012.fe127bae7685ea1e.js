(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97012],{97012:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHintDirective} from '@taiga-ui/core';\nimport {TuiLineClamp} from '@taiga-ui/kit';\n\ninterface User {\n    email: string;\n    firstName: string;\n    id: string;\n    lastName: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [TuiLineClamp, TuiHintDirective],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly user: User = {\n        id: '5a006cb3-2b69-4b23',\n        email: 'extremely.long.information@example.com',\n        firstName: 'John',\n        lastName: 'Doe',\n    };\n}\n"}}]);