(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76396],{76396:n=>{n.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiPopover} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';\nimport type {TuiPdfViewerOptions} from '@taiga-ui/kit';\nimport {TuiPdfViewerService} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {switchMap} from 'rxjs';\n\nimport {ActionsContentComponent} from './actions-content';\nimport {PdfContentComponent} from './pdf-content';\n\nexport type Buttons = ReadonlyArray<\n    Readonly<{\n        onClick(context: TuiPopover<TuiPdfViewerOptions<Buttons>, string>): void;\n        text: string;\n    }>\n>;\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly alerts = inject(TuiAlertService);\n    private readonly pdfService = inject(TuiPdfViewerService);\n\n    protected show(): void {\n        const options: TuiPdfViewerOptions<Buttons> = {\n            label: 'Taiga UI',\n            actions: new PolymorpheusComponent(ActionsContentComponent),\n            data: [\n                {\n                    text: 'Sign',\n                    onClick: context => context.completeWith('Document signed'),\n                },\n                {\n                    text: 'Deny',\n                    onClick: context => context.completeWith('Document denied'),\n                },\n            ],\n        };\n\n        this.pdfService\n            .open<string>(new PolymorpheusComponent(PdfContentComponent), options)\n            .pipe(switchMap(response => this.alerts.open(response)))\n            .subscribe();\n    }\n}\n"}}]);