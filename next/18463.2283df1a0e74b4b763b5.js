"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[18463],{

/***/ 18463:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiSum} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-ring-chart-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRingChartExample2 {\n    private readonly labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `other`];\n    readonly value = [13769, 12367, 10172, 3018, 2592];\n    readonly total = tuiSum(...this.value);\n\n    index = NaN;\n\n    get sum(): number {\n        return isNaN(this.index) ? this.total : this.value[this.index];\n    }\n\n    get label(): string {\n        return isNaN(this.index) ? `Total` : this.labels[this.index];\n    }\n}\n";

/***/ })

}]);