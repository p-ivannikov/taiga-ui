"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[38912],{

/***/ 38912:
/***/ ((module) => {

module.exports = "```html\n<tui-data-list role=\"menu\">\n  <tui-opt-group\n    *ngFor=\"let group of groups\"\n    [label]=\"group.label\"\n  >\n    <a\n      *ngFor=\"let item of group.items\"\n      tuiOption\n      role=\"menuitem\"\n      [routerLink]=\"item.routerLink\"\n    >\n      {{item.label}}\n    </a>\n  </tui-opt-group>\n</tui-data-list>\n```\n";

/***/ })

}]);