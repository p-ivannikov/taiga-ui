"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[68853],{

/***/ 68853:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-data-list-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListExample1 {\n    readonly arrow = TUI_ARROW;\n\n    readonly groups = [\n        {\n            label: $localize`Components`,\n            items: [\n                {\n                    label: `Input`,\n                    routerLink: `/components/input`,\n                },\n                {\n                    label: `Select`,\n                    routerLink: `/components/select`,\n                },\n                {\n                    label: `DataList`,\n                    routerLink: `/components/data-list`,\n                },\n            ],\n        },\n        {\n            label: $localize`Styles`,\n            items: [\n                {\n                    label: $localize`Icons`,\n                    routerLink: `/icons`,\n                },\n                {\n                    label: $localize`Typography`,\n                    routerLink: `/typography`,\n                },\n            ],\n        },\n        {\n            label: ``,\n            items: [\n                {\n                    label: $localize`Changelog`,\n                    routerLink: `/changelog`,\n                },\n            ],\n        },\n    ];\n}\n";

/***/ })

}]);