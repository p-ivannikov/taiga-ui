"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[62772],{

/***/ 62772:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-lazy-loading-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLazyLoadingExample1 {\n    readonly array = Array.from(\n        {length: 100},\n        (_, i) => `https://picsum.photos/${250 + i}/200`,\n    );\n}\n";

/***/ })

}]);