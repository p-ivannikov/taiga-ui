"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[10490],{10490:(R,m,e)=>{e.r(m),e.d(m,{DialogsModule:()=>N});var d=e(12057),g=e(12021),p=e(78697),i=e(66187),u=e(91068),t=e(74788),S=e(88331),f=e(57068),O=e(43190),r=e(68393),E=e(76189),T=e(44124);function M(n,l){1&n&&(t.\u0275\u0275elementStart(0,"div",4),t.\u0275\u0275element(1,"tui-avatar",5),t.\u0275\u0275text(2," \xabChoose wisely\xbb "),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("rounded",!0))}function C(n,l){1&n&&(t.\u0275\u0275elementStart(0,"div",4),t.\u0275\u0275element(1,"tui-avatar",6),t.\u0275\u0275text(2," \xabYou chose poorly\xbb "),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("rounded",!0))}function v(n,l){1&n&&(t.\u0275\u0275elementStart(0,"div",4),t.\u0275\u0275text(1," \xabYou have chosen wisely\xbb "),t.\u0275\u0275element(2,"tui-avatar",7),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(2),t.\u0275\u0275property("rounded",!0))}let D=(()=>{class n{constructor(o,s){this.alertService=o,this.promptService=s}onClick(o,s,a){this.promptService.open(o,{heading:"Taiga UI is the best",buttons:["Absolutely!","No way!"]}).pipe((0,O.w)(c=>c?this.alertService.open(a,{status:"success"}):this.alertService.open(s,{status:"error"}))).subscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.\u0275\u0275directiveInject(i.J9F),t.\u0275\u0275directiveInject(r.l))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["tui-dialogs-example-1"]],decls:8,vars:0,consts:[["tuiButton","",3,"click"],["choose",""],["poorly",""],["wisely",""],[1,"wrapper"],["avatarUrl","assets/images/choose.png","size","l",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/poorly.png",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/wisely.png",1,"tui-space_left-1",3,"rounded"]],template:function(o,s){if(1&o){const a=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",0),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(a);const A=t.\u0275\u0275reference(3),x=t.\u0275\u0275reference(5),L=t.\u0275\u0275reference(7);return s.onClick(A,x,L)}),t.\u0275\u0275text(1," Show prompt\n"),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(2,M,3,1,"ng-template",null,1,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275template(4,C,3,1,"ng-template",null,2,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275template(6,v,3,1,"ng-template",null,3,t.\u0275\u0275templateRefExtractor)}},directives:[E.v,T.J],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),n})(),h=(()=>{class n{constructor(){this.example1={TypeScript:e.e(12662).then(e.t.bind(e,12662,17)),HTML:e.e(28503).then(e.t.bind(e,28503,17)),LESS:e.e(25196).then(e.t.bind(e,25196,17)),"prompt/prompt.service.ts":e.e(65385).then(e.t.bind(e,65385,17)),"prompt/prompt-options.ts":e.e(47877).then(e.t.bind(e,47877,17)),"prompt/prompt.component.ts":e.e(28198).then(e.t.bind(e,28198,17)),"prompt/prompt.template.html":e.e(96381).then(e.t.bind(e,96381,17)),"prompt/prompt.style.less":e.e(68148).then(e.t.bind(e,68148,17)),"prompt/prompt.module.ts":e.e(95425).then(e.t.bind(e,95425,17))}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["dialogs"]],decls:5,vars:1,consts:function(){let l,o,s;return l=$localize`:␟9d6e1408c0a40d04f5eeb6f5d16b8706aded4261␟8564515230059500750:Dialogs`,o=$localize`:␟b3386f18bd4651b9452168426edf7f122d7f1fc1␟4814027570249937937: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. `,s=$localize`:␟bd9aa8d13320476087ef2b67437c8078fbb05a07␟2620483019814878192:Custom dialog`,[["header",l],o,["id","custom-dialog","heading",s,3,"content"]]},template:function(o,s){1&o&&(t.\u0275\u0275elementStart(0,"tui-doc-page",0),t.\u0275\u0275elementStart(1,"p"),t.\u0275\u0275i18n(2,1),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"tui-doc-example",2),t.\u0275\u0275element(4,"tui-dialogs-example-1"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275advance(3),t.\u0275\u0275property("content",s.example1))},directives:[S.q,f.f,D],encapsulation:2,changeDetection:0}),n})();var y=e(89570);let I=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({providers:[r.B],imports:[[i.fNO,y.wq,d.ez]]}),n})(),N=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[d.ez,I,i.fNO,u.JmR,p.fV,g.Bz.forChild((0,p.Ve)(h))]]}),n})()}}]);