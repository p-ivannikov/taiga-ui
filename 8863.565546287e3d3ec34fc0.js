"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[8863],{

/***/ 8863:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk';\nimport {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-mobile-calendar-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        {\n            provide: TUI_FIRST_DAY_OF_WEEK,\n            useValue: TuiDayOfWeek.Sunday,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMobileCalendarExample3 {\n    min = TuiDay.currentLocal();\n}\n";

/***/ })

}]);