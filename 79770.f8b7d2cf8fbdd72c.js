(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79770],{79770:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCeil, tuiFloor, tuiRound} from '@taiga-ui/cdk';\nimport {TuiNumberFormat} from '@taiga-ui/core';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [ReactiveFormsModule, TuiInputNumberModule, TuiNumberFormat],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected parametersForm = new FormGroup({\n        value: new FormControl(1.005),\n        precision: new FormControl(2),\n    });\n\n    protected get rounded(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return tuiRound(value ?? 1.005, precision ?? 2);\n    }\n\n    protected get floored(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return tuiFloor(value ?? 1.005, precision ?? 2);\n    }\n\n    protected get ceiled(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return tuiCeil(value ?? 1.005, precision ?? 2);\n    }\n}\n"}}]);