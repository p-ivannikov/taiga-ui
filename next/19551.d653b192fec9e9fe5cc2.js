"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[19551],{

/***/ 19551:
/***/ ((module) => {

module.exports = "# `@stackblitz`-folder description\n\n## DON'T USE THIS APPROACH FOR YOUR APPLICATION!\n\nStackblitz has a lot of limitations. All files inside this folder are a workaround for stackblitz only. They are awful\nand must not exist in real-world applications.\n\n## Problem descriptions\n\n### `styles`-folder\n\nSome our examples use less-imports from `@taiga-ui/core`-package. Unfortunately, Stackblitz can't properly run this file\n\n**app.style.less**:\n\n```less\n@import '~@taiga-ui/core/styles/taiga-ui-local';\n```\n\n### `all-taiga-modules.ts`\n\nWe don't have a nice way to import only required modules for every stackblitz-example. That is why we import all of\nthem. We understand that it's a bad practice, and we don't recommend you to do the same. But it easy workaround to keep\nall examples up-to-date without time-consuming manual efforts.\n";

/***/ })

}]);