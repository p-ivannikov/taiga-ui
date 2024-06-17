(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[41825],{41825:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService, TuiButton, TuiIconComponent} from '@taiga-ui/core';\nimport {TuiPushComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiPushComponent, TuiIconComponent, TuiButton],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly alert = inject(TuiAlertService);\n\n    protected onClose(): void {\n        this.alert\n            .open('Close button is visible when you subscribe to (close) output')\n            .subscribe();\n    }\n}\n"}}]);