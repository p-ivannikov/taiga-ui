(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{XqIW:function(n,t,e){"use strict";e.r(t),t.default='<p class="text">\n    Your balance:\n    <tui-money [value]="data"></tui-money>\n</p>\n\n<tui-input\n    tuiTextfieldSize="m"\n    tuiAutoFocus\n    [(ngModel)]="name"\n>\n    Type a name\n</tui-input>\n\n<tui-select\n    tuiTextfieldSize="m"\n    class="tui-space_top-3 tui-space_bottom-5"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="value"\n>\n    Select a sum\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items"\n    ></tui-data-list-wrapper>\n</tui-select>\n<button\n    tuiButton\n    type="button"\n    size="m"\n    [disabled]="!hasValue"\n    (click)="submit()"\n>\n    Submit\n</button>\n\n<p>\n    <button\n        tuiButton\n        type="button"\n        size="m"\n        (click)="showDialog(template)"\n    >\n        Show one more dialog\n    </button>\n</p>\n\n<ng-template #template>\n    <div class="dialog">\n        <p>This one is a template dialog</p>\n    </div>\n</ng-template>\n'}}]);