"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[20392],{20392:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCurrencyVariants, tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-format-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample3 {\n    readonly items = [`USD`, `RUB`, `643`, `KZT`, `051`, `KRW`, `CHF`, `EUR`, `GBP`];\n\n    parametersForm = new FormGroup({\n        currency: new FormControl(null),\n    });\n\n    get currency(): string | null {\n        const {currency} = this.parametersForm.value;\n\n        return tuiGetCurrencySymbol(currency as unknown as TuiCurrencyVariants);\n    }\n}\n"}}]);