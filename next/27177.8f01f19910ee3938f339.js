"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[27177],{

/***/ 27177:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-dialog-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDialogExampleComponent1 {\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    showDialog(): void {\n        this.dialogService\n            .open(`This is a plain string dialog`, {label: `Heading`, size: `s`})\n            .subscribe();\n    }\n\n    showDialogWithCustomButton(): void {\n        this.dialogService\n            .open(`Good, Anakin, Good!`, {\n                label: `Star wars. Episode III`,\n                size: `s`,\n                data: {button: `Do it!`},\n            })\n            .subscribe();\n    }\n}\n";

/***/ })

}]);