"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[98146],{

/***/ 70995:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-present-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPresentExample1 {\n    counterCSS = 0;\n\n    counterIf = 0;\n\n    hovered = false;\n\n    onHovered(hovered: boolean): void {\n        this.hovered = hovered;\n    }\n\n    onCSS(visible: boolean): void {\n        this.counterCSS += visible ? 1 : -1;\n    }\n\n    onIf(visible: boolean): void {\n        this.counterIf += visible ? 1 : -1;\n    }\n}\n";

/***/ })

}]);