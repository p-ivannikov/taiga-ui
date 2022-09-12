"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[31739],{

/***/ 31739:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-table-filters-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableFiltersExample1 {\n    readonly form = new FormGroup({\n        balance: new FormControl(0),\n    });\n\n    readonly data = [\n        {name: `Alex Inkin`, balance: 1323525},\n        {name: `Roman Sedov`, balance: 523242},\n        {name: `Vladimir Potekhin`, balance: 645465},\n        {name: `Nikita Barsukov`, balance: 468468},\n        {name: `Maxim Ivanov`, balance: 498654},\n    ] as const;\n\n    readonly columns = Object.keys(this.data[0]);\n\n    readonly filter = (item: number, value: number): boolean => item >= value;\n\n    onToggle(enabled: boolean): void {\n        if (enabled) {\n            this.form.enable();\n        } else {\n            this.form.disable();\n        }\n    }\n}\n";

/***/ })

}]);