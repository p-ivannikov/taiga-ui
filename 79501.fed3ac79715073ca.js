(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79501],{79501:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiTime} from '@taiga-ui/cdk';\nimport {tuiDateFormatProvider} from '@taiga-ui/core';\nimport {TuiInputDateTimeModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiInputDateTimeModule, ReactiveFormsModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [tuiDateFormatProvider({mode: 'YMD', separator: '/'})],\n})\nexport default class Example {\n    protected readonly control = new FormControl([\n        new TuiDay(2017, 2, 15),\n        new TuiTime(12, 30),\n    ]);\n}\n"}}]);