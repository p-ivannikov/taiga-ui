"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[1425],{

/***/ 1425:
/***/ ((module) => {

module.exports = "<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <p i18n>\n        If a field is optional, but unfinished field should be marked as invalid, use\n        <code>tuiUnfinishedValidator</code>\n        directive\n    </p>\n    <tui-input-date-range\n        tuiUnfinishedValidator=\"Finish filling the field\"\n        formControlName=\"testValue\"\n        [min]=\"min\"\n        [max]=\"max\"\n    >\n        Choose dates\n        <input\n            tuiTextfield\n            placeholder=\"From - To\"\n        />\n    </tui-input-date-range>\n</form>\n";

/***/ })

}]);