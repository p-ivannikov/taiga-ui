"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[34943],{34943:n=>{n.exports='<tui-primitive-textfield\n    [tuiTextfieldIcon]="iconContent"\n    [invalid]="computedInvalid"\n    [focusable]="focusable"\n    [disabled]="disabled"\n    [readOnly]="readOnly"\n    [value]="value"\n    (valueChange)="onValueChange($event)"\n    (focusedChange)="onFocused($event)"\n>\n    <ng-content></ng-content>\n    <input\n        tuiTextfield\n        [type]="inputType"\n    />\n</tui-primitive-textfield>\n\n<ng-template #iconContent>\n    <tui-svg\n        class="icon"\n        [tuiHint]="hintContent"\n        [src]="icon"\n        (click)="togglePasswordVisibility()"\n    ></tui-svg>\n</ng-template>\n\n<ng-template #hintContent>{{ hint }}</ng-template>\n'}}]);