(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19574],{19574:e=>{e.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiSizeL} from '@taiga-ui/core';\nimport {TuiBreakpointService, TuiButton} from '@taiga-ui/core';\nimport {TuiBlockStatus} from '@taiga-ui/layout';\nimport type {Observable} from 'rxjs';\nimport {map} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [NgIf, AsyncPipe, TuiBlockStatus, TuiButton],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly breakpointService = inject(TuiBreakpointService);\n\n    protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(\n        map(key => (key === 'mobile' ? 'm' : 'l')),\n    );\n}\n"}}]);