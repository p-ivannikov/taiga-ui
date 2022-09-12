"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[70827],{

/***/ 70827:
/***/ ((module) => {

module.exports = "```ts\nimport {NgModule} from '@angular/core';\nimport {TUI_ICONS_PATH, tuiIconsPathFactory, TUI_SANITIZER} from '@taiga-ui/core';\nimport {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';\n\nimport {ALL_TAIGA_UI_MODULES} from './@stackblitz/all-taiga-modules';\nimport {AppComponent} from './app.component';\n\n@NgModule({\n  /**\n   * Don't use this approach,\n   * it's a workaround for stackblitz\n   */\n  imports: ALL_TAIGA_UI_MODULES,\n  declarations: [AppComponent],\n  bootstrap: [AppComponent],\n  providers: [\n    // A workaround because StackBlitz does not support assets\n    {\n      provide: TUI_ICONS_PATH,\n      useValue: tuiIconsPathFactory('https://taiga-ui.dev/assets/taiga-ui/icons'),\n    },\n    /**\n     * If you use unsafe icons or have kind of WYSISYG editor in your app\n     *\n     * Take a look at: https://github.com/tinkoff/ng-dompurify\n     *\n     * This library implements DOMPurify as Angular Sanitizer or Pipe.\n     * It delegates sanitizing to DOMPurify and supports the same configuration.\n     */\n    {\n      provide: TUI_SANITIZER,\n      useClass: NgDompurifySanitizer,\n    },\n  ],\n})\nexport class AppModule {}\n```\n";

/***/ })

}]);