"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[36867],{

/***/ 36867:
/***/ ((module) => {

module.exports = "```ts\nimport './polyfills';\n\nimport {platformBrowserDynamic} from '@angular/platform-browser-dynamic';\n\nimport {AppModule} from './app/app.module';\n\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule)\n  .then(ref => {\n    // Stackblitz: Ensure Angular destroys itself on hot reloads.\n    if (window['ngRef']) {\n      window['ngRef'].destroy();\n    }\n\n    window['ngRef'] = ref;\n\n    // Otherwise, log the boot error\n  })\n  .catch(err => console.error(err));\n```\n";

/***/ })

}]);