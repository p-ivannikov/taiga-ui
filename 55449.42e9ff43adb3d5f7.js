(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55449],{55449:n=>{n.exports='<div\n    tuiCardLarge\n    tuiSurface="elevated"\n>\n    <header tuiHeader>\n        <h1 tuiTitle>\n            Title\n            <span tuiSubtitle>Subtitle</span>\n        </h1>\n    </header>\n\n    <button\n        *tuiRepeatTimes="let index of 3"\n        tuiCell="l"\n        tuiDropdownAlign="right"\n        tuiDropdownOpen\n        [tuiDropdown]="dropdown"\n        [tuiDropdownSided]="true"\n    >\n        <tui-avatar\n            appearance="primary"\n            src="@tui.star"\n        />\n\n        <div tuiTitle>\n            Title\n            <div tuiSubtitle>Description</div>\n        </div>\n\n        <tui-icon\n            icon="@tui.chevron-right"\n            tuiAppearance="icon"\n        />\n    </button>\n\n    <button\n        tuiLink\n        type="button"\n    >\n        Show all\n    </button>\n</div>\n\n<ng-template\n    #dropdown\n    let-close\n>\n    <tui-data-list>\n        <tui-opt-group>\n            <button\n                *ngFor="let item of [\'Edit\', \'Download\', \'Rename\', \'Delete\']"\n                tuiOption\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group>\n            <button\n                tuiOption\n                (click)="close()"\n            >\n                Nevermind\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'}}]);