(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[80732],{80732:e=>{e.exports="import {NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon, TuiLink} from '@taiga-ui/core';\nimport type {TuiFileLike} from '@taiga-ui/kit';\nimport {TuiAvatar, TuiFiles} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent5\",\n    imports: [ReactiveFormsModule, NgIf, TuiAvatar, TuiLink, TuiFiles, TuiIcon],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly control = new FormControl<TuiFileLike | null>(null);\n\n    protected readonly file: TuiFileLike = {\n        name: 'custom.txt',\n    };\n}\n"}}]);