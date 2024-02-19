(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6014],{6014:n=>{n.exports="import {Injectable} from '@angular/core';\nimport {AbstractTuiValueTransformer, TuiDay, TuiTime} from '@taiga-ui/cdk';\n\n@Injectable()\nexport class ExampleDateTimeTransformer extends AbstractTuiValueTransformer<\n    [TuiDay | null, TuiTime | null],\n    string\n> {\n    private readonly separator = ', ';\n\n    fromControlValue(controlValue: string): [TuiDay | null, TuiTime | null] {\n        const [day, time = ''] = controlValue.split(this.separator);\n\n        return day\n            ? [TuiDay.normalizeParse(day), time ? TuiTime.fromString(time) : null]\n            : [null, null];\n    }\n\n    toControlValue([day, time]: [TuiDay | null, TuiTime | null]): string {\n        return day\n            ? day.toString() + (time ? `${this.separator}${time.toString()}` : '')\n            : '';\n    }\n}\n"}}]);