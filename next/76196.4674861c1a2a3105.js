(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76196],{76196:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-items-with-more-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiItemsWithMoreExample2 {\n    readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    value = this.items.map(ALWAYS_FALSE_HANDLER) as boolean[];\n\n    onModelChange(index: number): void {\n        this.value[index] = !this.value[index];\n    }\n}\n"}}]);