"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37034],{

/***/ 37034:
/***/ ((module) => {

module.exports = "import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {TuiEditorImagePreviewModule} from '@taiga-ui/addon-editor';\nimport {TuiPreviewModule} from '@taiga-ui/addon-preview';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\n\nimport {ImagePreviewExampleComponent} from './image-preview.component';\n\n@NgModule({\n    imports: [\n        CommonModule,\n        TuiPreviewModule,\n        TuiButtonModule,\n        PolymorpheusModule,\n        TuiEditorImagePreviewModule,\n    ],\n    exports: [\n        TuiEditorImagePreviewModule,\n        TuiEditorImagePreviewModule,\n        ImagePreviewExampleComponent,\n    ],\n    declarations: [ImagePreviewExampleComponent],\n})\nexport class ImagePreviewExampleModule {}\n";

/***/ })

}]);