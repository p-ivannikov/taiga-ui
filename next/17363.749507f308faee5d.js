(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17363],{17363:n=>{n.exports="```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {Injector} from '@angular/core';\n\nimport {CustomNotificationComponent} from './custom-notification.component';\n\n//...\nexport class MyComponent {\n  constructor(\n    @Inject(Injector) private injector: Injector,\n    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,\n  ) {\n    //...\n    this.alerts\n      .open(new PolymorpheusComponent(CustomNotificationComponent, this.injector), {label: 'Heading'})\n      .subscribe();\n  }\n  //...\n}\n```\n"}}]);