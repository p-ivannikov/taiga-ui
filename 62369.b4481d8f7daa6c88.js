(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[62369],{55664:e=>{e.exports='<form>\n    <tui-select [formControl]="itemStringControl">\n        Character\n        <select\n            tuiSelect\n            [items]="items"\n        ></select>\n    </tui-select>\n\n    <tui-select\n        class="tui-space_top-4"\n        [formControl]="itemGroupControl"\n        [tuiTextfieldCleaner]="true"\n    >\n        Food\n        <select\n            tuiSelect\n            [disabledItemHandler]="disabledItemHandler"\n            [items]="groupItems"\n            [labels]="labels"\n        ></select>\n\n        <input\n            placeholder="Make a choice"\n            tuiTextfieldLegacy\n        />\n    </tui-select>\n\n    <tui-select\n        class="tui-space_top-4"\n        [formControl]="itemControl"\n        [stringify]="stringify"\n    >\n        Character\n        <select\n            tuiSelect\n            [items]="customItems"\n        ></select>\n    </tui-select>\n</form>\n'}}]);