"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[56451],{

/***/ 56451:
/***/ ((module) => {

module.exports = "<tui-editor\n    class=\"editor\"\n    [formControl]=\"control\"\n    [tools]=\"builtInTools\"\n></tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket\n    [content]=\"control.value || ''\"\n    (imagePreview)=\"preview.showImage($event)\"\n>\n    <image-preview-example #preview></image-preview-example>\n</tui-editor-socket>\n";

/***/ })

}]);