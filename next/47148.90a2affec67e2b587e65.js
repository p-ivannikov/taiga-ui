"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47148],{

/***/ 47148:
/***/ ((module) => {

module.exports = "<label\n    *ngIf=\"value$ | async as value\"\n    tuiProgressLabel\n>\n    <span class=\"text\">COMPLETED</span>\n    <span class=\"percent\">{{ value }}%</span>\n\n    <tui-progress-circle\n        size=\"xl\"\n        [max]=\"max\"\n        [value]=\"value\"\n    ></tui-progress-circle>\n</label>\n";

/***/ })

}]);