(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82584],{82584:n=>{n.exports='<tui-pie-chart\n    [tuiHintContent]="content"\n    [value]="value"\n></tui-pie-chart>\n\n<ng-template\n    #content\n    let-index\n>\n    <span>{{ value[index] | tuiAmount: \'RUB\' | async }}</span>\n    <div>{{ labels[index] }}</div>\n</ng-template>\n'}}]);