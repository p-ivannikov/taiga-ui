"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[95994],{

/***/ 95994:
/***/ ((module) => {

module.exports = "```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n// ...\n\nexport class MyComponent {\n  constructor(\n    @Inject(TuiDialogService)\n    private readonly dialogService: TuiDialogService,\n  ) {}\n\n  // ...\n\n  open() {\n    this.dialogService.open('Hello!').subscribe();\n  }\n}\n```\n";

/***/ })

}]);