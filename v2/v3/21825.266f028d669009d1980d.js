"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[21825],{21825:e=>{e.exports='<tui-tree\n    [tuiTreeController]="false"\n    [map]="map"\n    [value]="service.data$ | async"\n    [childrenHandler]="childrenHandler"\n    [content]="content"\n    (toggled)="onToggled($event)"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    <tui-loader\n        *ngIf="item === loading; else text"\n        class="loader"\n    ></tui-loader>\n    <ng-template #text>{{ item.text }}</ng-template>\n</ng-template>\n'}}]);