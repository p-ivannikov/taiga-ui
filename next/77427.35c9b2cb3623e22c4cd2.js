"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[77427],{

/***/ 77427:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-validator-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiValidatorExample1 {\n    readonly items = [`Email`, `Phone`];\n\n    type = this.items[0];\n\n    readonly group = new FormGroup({\n        name: new FormControl(``, Validators.required),\n        contact: new FormControl(``, Validators.required),\n    });\n\n    readonly validator = Validators.email;\n}\n";

/***/ })

}]);