(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[87214],{87214:(t,e,i)=>{i.r(e),i.d(e,{ExampleTuiBreadcrumbsModule:()=>j});var n=i(12057),o=i(24751),u=i(33982),c=i(73961),a=i(58196),r=i(74950),s=i(62689),p=i(74788),m=i(43560),l=i(93525),d=i(33772),g=i(98389),f=i(82707),h=i(66596);function x(t,e){if(1&t&&(p.TgZ(0,"a",3),p._uU(1),p.qZA()),2&t){const t=p.oxw().$implicit;p.Q6J("routerLink",t.routerLink),p.xp6(1),p.hij(" ",t.caption," ")}}function Z(t,e){1&t&&(p.ynx(0),p.YNc(1,x,2,2,"a",2),p.BQk())}function T(t,e){if(1&t&&(p.TgZ(0,"a",3),p._uU(1),p.qZA()),2&t){const t=p.oxw().$implicit;p.Q6J("routerLink",t.routerLink),p.xp6(1),p.hij(" ",t.caption," ")}}function b(t,e){1&t&&(p.ynx(0),p.YNc(1,T,2,2,"a",2),p.BQk())}let k=(()=>{class t{constructor(){this.items=[{caption:"Selects",routerLink:"/components/select"},{caption:"Multi",routerLink:"/components/multi-select"},{caption:"With tags",routerLink:"/components/multi-select"},{caption:"Current",routerLink:"/navigation/breadcrumbs",routerLinkActiveOptions:{exact:!0}}]}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-breadcrumbs-example-1"]],decls:4,vars:2,consts:[[4,"ngFor","ngForOf"],["size","l",1,"tui-space_top-2"],["tuiLink","",3,"routerLink",4,"tuiItem"],["tuiLink","",3,"routerLink"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-breadcrumbs"),p.YNc(1,Z,2,0,"ng-container",0),p.qZA(),p.TgZ(2,"tui-breadcrumbs",1),p.YNc(3,b,2,0,"ng-container",0),p.qZA()),2&t&&(p.xp6(1),p.Q6J("ngForOf",e.items),p.xp6(2),p.Q6J("ngForOf",e.items))},directives:[g.l,n.sg,f.w,h.V,u.yS],encapsulation:2,changeDetection:0}),t})();var L=i(36097),A=i(16753),q=i(13735),w=i(62939),y=i(76189),M=i(20933),_=i(35065);function J(t,e){if(1&t&&(p.TgZ(0,"a",7),p._uU(1),p.qZA()),2&t){const t=e.$implicit,i=p.oxw(3);p.Q6J("href",i.items[t].link,p.LSH),p.xp6(1),p.hij(" ",i.items[t].caption," ")}}function Q(t,e){if(1&t&&(p.TgZ(0,"tui-data-list"),p.YNc(1,J,2,2,"a",6),p.qZA()),2&t){const t=p.oxw(2);p.xp6(1),p.Q6J("tuiRepeatTimesOf",t.items.length-t.max)}}function N(t,e){if(1&t&&(p.TgZ(0,"tui-hosted-dropdown",3),p._UZ(1,"button",4),p.YNc(2,Q,2,1,"ng-template",null,5,p.W1O),p.qZA()),2&t){const t=p.MAs(3);p.Q6J("content",t)}}function z(t,e){if(1&t&&(p.TgZ(0,"a",9),p._uU(1),p.qZA()),2&t){const t=p.oxw().$implicit,e=p.oxw();p.Q6J("href",e.items[t+e.items.length-e.max].link,p.LSH),p.xp6(1),p.hij(" ",e.items[t+e.items.length-e.max].caption," ")}}function U(t,e){1&t&&(p.ynx(0),p.YNc(1,z,2,2,"a",8),p.BQk())}let v=(()=>{class t{constructor(){this.items=[{caption:"Open Source",link:"https://github.com"},{caption:"Angular",link:"https://github.com/topics/angular"},{caption:"Tinkoff",link:"https://github.com/tinkoff"},{caption:"Taiga UI",link:"https://github.com/tinkoff/taiga-ui"},{caption:"Components",link:"https://taiga-ui.dev"},{caption:"Breadcrumbs",link:"https://taiga-ui.dev/navigation/breadcrumbs"}],this.max=4}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-breadcrumbs-example-2"]],features:[p._Bn([(0,s.tuiBreadcrumbsOptionsProvider)({icon:"tuiIconArrowRight",mode:null,size:"l"})])],decls:6,vars:7,consts:[[3,"content",4,"tuiItem"],[4,"tuiRepeatTimes","tuiRepeatTimesOf"],[1,"b-form",3,"min","max","step","ngModel","ngModelChange"],[3,"content"],["tuiIconButton","","icon","tuiIconMoreHorizontal","size","xs","appearance","secondary","title","More"],["content",""],["tuiOption","",3,"href",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["tuiOption","",3,"href"],["tuiLink","",3,"href",4,"tuiItem"],["tuiLink","",3,"href"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-breadcrumbs"),p.YNc(1,N,4,1,"tui-hosted-dropdown",0),p.YNc(2,U,2,0,"ng-container",1),p.qZA(),p.TgZ(3,"p"),p.TgZ(4,"tui-input-number",2),p.NdJ("ngModelChange",(function(t){return e.max=t})),p._uU(5," Max tabs "),p.qZA(),p.qZA()),2&t&&(p.Udp("color","red"),p.xp6(2),p.Q6J("tuiRepeatTimesOf",e.max),p.xp6(2),p.Q6J("min",2)("max",4)("step",1)("ngModel",e.max))},directives:[g.l,f.w,L.X,A.q,q.g,o.JJ,o.On,w.o,y.v,M.q,_.v,h.V],encapsulation:2,changeDetection:0}),t})();var B=i(10977),O=i(51192),V=i(60404),Y=i(83074);function C(t,e){if(1&t&&(p.TgZ(0,"p"),p._uU(1,"Navigation element that shows a path from root page to the current"),p.qZA(),p.TgZ(2,"tui-doc-example",2),p._UZ(3,"tui-breadcrumbs-example-1"),p.qZA(),p.TgZ(4,"tui-doc-example",3),p._UZ(5,"tui-breadcrumbs-example-2"),p.qZA()),2&t){const t=p.oxw();p.xp6(2),p.Q6J("content",t.example1),p.xp6(2),p.Q6J("content",t.example2)}}function I(t,e){if(1&t&&(p.TgZ(0,"a",8),p._uU(1),p.qZA()),2&t){const t=p.oxw().$implicit;p.Q6J("routerLink",t.routerLink),p.xp6(1),p.hij(" ",t.caption," ")}}function S(t,e){1&t&&(p.ynx(0),p.YNc(1,I,2,2,"a",7),p.BQk())}function P(t,e){1&t&&p._uU(0," Text size ")}function F(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"tui-doc-demo"),p.TgZ(1,"tui-breadcrumbs",4),p.YNc(2,S,2,0,"ng-container",5),p.qZA(),p.qZA(),p.TgZ(3,"tui-doc-documentation"),p.YNc(4,P,1,0,"ng-template",6),p.NdJ("documentationPropertyValueChange",(function(e){return p.CHM(t),p.oxw().size=e})),p.qZA()}if(2&t){const t=p.oxw();p.xp6(1),p.Q6J("size",t.size),p.xp6(1),p.Q6J("ngForOf",t.items),p.xp6(2),p.Q6J("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size)}}function H(t,e){if(1&t&&(p.TgZ(0,"ol",9),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiBreadcrumbsModule"),p.qZA(),p._uU(6," into a module where you want to use our component "),p.qZA(),p._UZ(7,"tui-doc-code",10),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",11),p.qZA(),p.qZA()),2&t){const t=p.oxw();p.xp6(7),p.Q6J("code",t.exampleModule),p.xp6(4),p.Q6J("code",t.exampleHtml)}}let R=(()=>{class t{constructor(){this.exampleModule=i.e(66534).then(i.t.bind(i,66534,17)),this.exampleHtml=i.e(30419).then(i.t.bind(i,30419,17)),this.example1={TypeScript:i.e(30917).then(i.t.bind(i,30917,17)),HTML:i.e(83713).then(i.t.bind(i,83713,17))},this.example2={TypeScript:i.e(72012).then(i.t.bind(i,72012,17)),HTML:i.e(97671).then(i.t.bind(i,97671,17))},this.itemsVariants=[[{caption:"Select",routerLink:"/tui-select"},{caption:"MultiSelect",routerLink:"/tui-multi-select"},{caption:"InputTag",routerLink:"/tui-input-tag"},{caption:"Current",routerLink:"/tui-breadcrumbs"}]],this.items=this.itemsVariants[0],this.sizeVariants=["m","l"],this.size=this.sizeVariants[0]}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["example-breadcrumbs"]],decls:4,vars:0,consts:[["header","Breadcrumbs","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","more","heading","More button","description","Plus using DI options",3,"content"],[3,"size"],[4,"ngFor","ngForOf"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiLink","",3,"routerLink",4,"tuiItem"],["tuiLink","",3,"routerLink"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,C,6,2,"ng-template",1),p.YNc(2,F,5,4,"ng-template",1),p.YNc(3,H,12,2,"ng-template",1),p.qZA())},directives:[m.q,l.n,d.f,k,v,B.F,g.l,n.sg,O.z,V.B,f.w,h.V,u.yS,Y.c],encapsulation:2,changeDetection:0}),t})(),j=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[[n.ez,o.u5,s.TuiBreadcrumbsModule,r.TuiLinkModule,c.fV,r.TuiHostedDropdownModule,r.TuiButtonModule,r.TuiDataListModule,s.TuiInputNumberModule,a.TuiRepeatTimesModule,u.Bz.forChild((0,c.Ve)(R))]]}),t})()}}]);