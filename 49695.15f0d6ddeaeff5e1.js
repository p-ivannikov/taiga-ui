(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49695],{49695:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService, TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';\nimport type {TuiConfirmData} from '@taiga-ui/kit';\nimport {TUI_CONFIRM} from '@taiga-ui/kit';\nimport {switchMap} from 'rxjs';\n\n@Component({\n    standalone: true,\n    imports: [TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly dialogs = inject(TuiDialogService);\n    private readonly alerts = inject(TuiAlertService);\n\n    protected onClick(): void {\n        const data: TuiConfirmData = {\n            content:\n                'This is <code>PolymorpheusContent</code> so it can be template too!',\n            yes: 'That is great!',\n            no: 'Who cares?',\n        };\n\n        this.dialogs\n            .open<boolean>(TUI_CONFIRM, {\n                label: 'Do you like Taiga UI?',\n                size: 's',\n                data,\n            })\n            .pipe(switchMap(response => this.alerts.open(String(response))))\n            .subscribe();\n    }\n}\n"}}]);