"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[38979],{

/***/ 38979:
/***/ ((module) => {

module.exports = "<button\n    tuiButton\n    appearance=\"outline\"\n    size=\"xs\"\n    class=\"switch\"\n    (click)=\"isOpen = !isOpen\"\n>\n    {{ isOpen ? 'ON' : 'OFF' }}\n</button>\n\n<div\n    *ngIf=\"isOpen\"\n    class=\"plasma\"\n    [@tuiWidthCollapse]=\"getAnimation(speed)\"\n></div>\n";

/***/ })

}]);