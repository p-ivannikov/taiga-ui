(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[73256],{73256:n=>{n.exports='<h3>Long mobile dialog with filters</h3>\n<button\n    size="m"\n    tuiButton\n    type="button"\n    class="tui-space_right-3 tui-space_bottom-2"\n    (click)="showDialog(long, button)"\n>\n    Show\n</button>\n\n<ng-template #button>\n    <button\n        *ngIf="!filters"\n        tuiButton\n        type="button"\n        class="portal"\n        (click)="onFilterClick()"\n        (touchmove.prevent.silent)="(0)"\n    >\n        Filters\n    </button>\n</ng-template>\n\n<ng-template #long>\n    <div class="background"></div>\n    <header\n        class="header"\n        [style.transform]="transform"\n        [style.width]="width"\n        (tuiElasticSticky)="onElastic($event)"\n    >\n        <section class="logo">\n            <label class="date">8 March, 23:51</label>\n            <tui-marker-icon\n                src="tuiIconChevronDownLarge"\n                class="icon"\n            ></tui-marker-icon>\n        </section>\n        <div class="wrapper">\n            <p class="description">Card payment</p>\n            <h3 class="title">Sushi</h3>\n            <tui-money\n                decimal="always"\n                class="money"\n                [value]="300"\n            ></tui-money>\n        </div>\n    </header>\n    <blockquote>\n        <h1>Additional information</h1>\n        <p>\n            In user interface design for computer applications, a modal window is a graphical control element\n            subordinate to an application\'s main window. A modal window creates a mode that disables the main window but\n            keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal\n            window before they can return to the parent application. This avoids interrupting the workflow on the main\n            window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a\n            dialog box.\n        </p>\n    </blockquote>\n    <blockquote>\n        <h2>Additional information</h2>\n        <p>\n            In user interface design for computer applications, a modal window is a graphical control element\n            subordinate to an application\'s main window. A modal window creates a mode that disables the main window but\n            keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal\n            window before they can return to the parent application. This avoids interrupting the workflow on the main\n            window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a\n            dialog box.\n        </p>\n    </blockquote>\n</ng-template>\n'}}]);