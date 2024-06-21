(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44546],{44546:e=>{e.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport type {TemplateRef} from '@angular/core';\nimport {Component, inject, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiIsPresent} from '@taiga-ui/cdk';\nimport type {TuiDialogContext} from '@taiga-ui/core';\nimport {TuiButton, TuiIcon, TuiLoader} from '@taiga-ui/core';\nimport {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';\nimport type {Observable} from 'rxjs';\nimport {BehaviorSubject, filter, map, of, startWith, switchMap, timer} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [TuiButton, TuiPreview, AsyncPipe, NgIf, TuiIcon, TuiLoader],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly previewDialogService = inject(TuiPreviewDialogService);\n\n    @ViewChild('preview')\n    protected readonly preview?: TemplateRef<TuiDialogContext>;\n\n    protected readonly items = [\n        {\n            title: 'some table.xlsx',\n            hasPreview: false,\n        },\n        {\n            title: 'Content #2',\n            hasPreview: true,\n        },\n    ];\n\n    protected readonly index$$ = new BehaviorSubject<number>(0);\n\n    protected readonly item$ = this.index$$.pipe(\n        map(index => this.items[index]),\n        filter(tuiIsPresent),\n    );\n\n    protected readonly title$ = this.item$.pipe(map(item => item.title));\n\n    protected readonly contentUnavailable$ = this.item$.pipe(\n        map(item => !item.hasPreview),\n    );\n\n    protected readonly imageSrc$ = this.item$.pipe(\n        switchMap(item =>\n            item.hasPreview ? this.emulateBackendRequest().pipe(startWith('')) : of(null),\n        ),\n    );\n\n    protected readonly loading$ = this.imageSrc$.pipe(map(src => src === ''));\n\n    protected show(): void {\n        this.previewDialogService.open(this.preview || '').subscribe();\n    }\n\n    protected download(): void {\n        console.info('downloading...');\n    }\n\n    protected emulateBackendRequest(): Observable<string> {\n        return timer(1500).pipe(\n            map(() => 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg'),\n        );\n    }\n}\n"}}]);