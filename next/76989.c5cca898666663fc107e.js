"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[76989],{

/***/ 76989:
/***/ ((module) => {

module.exports = "<tui-input-range\n    [min]=\"0\"\n    [max]=\"10\"\n    [leftValueContent]=\"valueContent\"\n    [rightValueContent]=\"valueContent\"\n    [pluralize]=\"pluralize\"\n    [formControl]=\"control\"\n>\n    Desired departure day\n</tui-input-range>\n\n<ng-template\n    #valueContent\n    let-value\n>\n    <ng-container [ngSwitch]=\"value\">\n        <span *ngSwitchCase=\"0\">Today</span>\n        <span *ngSwitchCase=\"1\">Tomorrow</span>\n        <span *ngSwitchCase=\"7\">In a week</span>\n        <span *ngSwitchDefault>{{ value }}&nbsp;{{ value | i18nPlural: pluralize }}</span>\n    </ng-container>\n</ng-template>\n";

/***/ })

}]);