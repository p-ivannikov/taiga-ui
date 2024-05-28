(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84542],{84542:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport type {AbstractControl, AsyncValidatorFn, FormGroup} from '@angular/forms';\nimport {ReactiveFormsModule, UntypedFormBuilder, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_E2E, TuiValidationError} from '@taiga-ui/cdk';\nimport {TuiErrorComponent} from '@taiga-ui/core';\nimport {TuiFieldErrorPipeModule} from '@taiga-ui/kit';\nimport {TuiInputModule} from '@taiga-ui/legacy';\nimport {delay, of} from 'rxjs';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nfunction asyncValidatorFn(isE2E: boolean): AsyncValidatorFn {\n    return (field: AbstractControl) =>\n        field.value && latinChars.test(field.value)\n            ? of(null)\n            : of({\n                  error: new TuiValidationError('Only latin letters allowed'),\n              }).pipe(isE2E ? delay(0) : delay(5000));\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent5\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputModule,\n        TuiErrorComponent,\n        TuiFieldErrorPipeModule,\n        AsyncPipe,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly fb = inject(UntypedFormBuilder);\n\n    protected readonly form: FormGroup;\n\n    constructor() {\n        this.form = this.fb.group({\n            text: ['русский текст', Validators.required],\n        });\n\n        this.form.controls['text'].setAsyncValidators(\n            asyncValidatorFn(inject(TUI_IS_E2E)),\n        );\n        this.form.controls['text'].markAsTouched();\n    }\n}\n"}}]);