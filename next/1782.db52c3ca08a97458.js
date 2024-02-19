(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1782],{1782:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-alerts-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAlertExampleComponent1 {\n    private readonly alerts = inject(TuiAlertService);\n\n    showNotification(): void {\n        this.alerts\n            .open('Basic <strong>HTML</strong>', {label: 'With a heading!'})\n            .subscribe();\n    }\n}\n"}}]);