import {NgTemplateOutlet} from '@angular/common';
import {Component} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTreeItemContent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgTemplateOutlet, TuiIcon],
    template: `
        <tui-icon
            class="tui-space_right-2"
            [icon]="icon"
        ></tui-icon>
        <ng-container [ngTemplateOutlet]="context.template"></ng-container>
    `,
    styleUrls: ['content.less'],
    host: {
        '(click)': 'onClick()',
    },
})
export class Folders extends TuiTreeItemContent {
    protected get icon(): string {
        return this.isExpandable ? '@tui.folder' : '@tui.file';
    }
}
