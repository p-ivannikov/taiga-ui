"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[99247],{

/***/ 99247:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiPushService} from '@taiga-ui/kit';\nimport {switchMap, take} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-push-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPushExample2 {\n    constructor(\n        @Inject(TuiPushService) protected readonly push: TuiPushService,\n        @Inject(TuiAlertService) protected readonly alert: TuiAlertService,\n    ) {}\n\n    onClick(): void {\n        this.push\n            .open(`This is heavy!`, {\n                heading: `Great Scott!`,\n                type: `Quote`,\n                icon: `tuiIconVideoLarge`,\n                buttons: [`Roads?`, `1.21 Gigawatts!?!`],\n            })\n            .pipe(\n                take(1),\n                switchMap(button => this.alert.open(button)),\n            )\n            .subscribe();\n    }\n}\n";

/***/ })

}]);