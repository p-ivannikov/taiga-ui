"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72627],{

/***/ 72627:
/***/ ((module) => {

module.exports = "<input\n    tuiSlider\n    type=\"range\"\n    [keySteps]=\"keySteps\"\n    [max]=\"10 * segments\"\n    [segments]=\"segments\"\n    [formControl]=\"formControl\"\n/>\n\n<div class=\"ticks-labels\">\n    <span *ngFor=\"let label of labels\">{{ label }}</span>\n</div>\n\n<p automation-id=\"key-steps-example-control-value\">\n    Control value:\n    <code>{{ formControl.value | number }}</code>\n</p>\n";

/***/ })

}]);