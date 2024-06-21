(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[40386],{40386:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport type {TuiContext, TuiHandler} from '@taiga-ui/cdk';\nimport {TUI_DEFAULT_MATCHER, tuiIsNumber, TuiLet} from '@taiga-ui/cdk';\nimport {TuiDataList} from '@taiga-ui/core';\nimport {TuiDataListWrapper} from '@taiga-ui/kit';\nimport {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\nimport type {Observable} from 'rxjs';\nimport {map, shareReplay, startWith, Subject, switchMap, timer} from 'rxjs';\n\nconst DICTIONARY = [\n    {id: 1, name: 'Luke Skywalker'},\n    {id: 2, name: 'Princess Leia'},\n    {id: 3, name: 'Darth Vader'},\n    {id: 4, name: 'Han Solo'},\n    {id: 5, name: 'Obi-Wan Kenobi'},\n    {id: 6, name: 'Yoda'},\n];\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [\n        TuiMultiSelectModule,\n        TuiLet,\n        AsyncPipe,\n        ReactiveFormsModule,\n        TuiTextfieldControllerModule,\n        TuiDataListWrapper,\n        TuiDataList,\n    ],\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport default class Example {\n    // Server request emulation\n    private readonly server$ = timer(5000).pipe(\n        map(() => DICTIONARY),\n        shareReplay({bufferSize: 1, refCount: true}),\n    );\n\n    private readonly search$ = new Subject<string>();\n\n    // Items only hold IDs\n    protected readonly items$ = this.search$.pipe(\n        startWith(''),\n        switchMap(search =>\n            this.server$.pipe(\n                map(items =>\n                    items\n                        .filter(({name}) => TUI_DEFAULT_MATCHER(name, search))\n                        .map(({id}) => id),\n                ),\n            ),\n        ),\n        startWith(null), // <-- loading\n    );\n\n    // Stringify mapper that turns IDs to names\n    protected readonly stringify$: Observable<\n        TuiHandler<TuiContext<number> | number, string>\n    > = this.server$.pipe(\n        map(items => new Map(items.map<[number, string]>(({id, name}) => [id, name]))),\n        startWith(new Map()),\n        map(\n            map => (id: TuiContext<number> | number) =>\n                (tuiIsNumber(id) ? map.get(id) : map.get(id.$implicit)) || 'Loading...',\n        ),\n    );\n\n    protected readonly control = new FormControl([2, 3]);\n\n    protected onSearch(search: string | null): void {\n        this.search$.next(search || '');\n    }\n}\n"}}]);