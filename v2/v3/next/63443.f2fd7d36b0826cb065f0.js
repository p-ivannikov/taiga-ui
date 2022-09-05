"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[63443],{63443:(te,E,n)=>{n.r(E),n.d(E,{ExampleTuiInputMonthRangeModule:()=>ee});var f=n(12057),l=n(23738),S=n(12021),_=n(78697),s=n(66187),h=n(91068),R=n(75695),e=n(74788),d=n(40287),P=n(82880),D=n(98204),x=n(88331),I=n(37159),y=n(57068),A=n(79121),p=n(12571),T=n(10638),N=n(64374),G=n(91030);let v=(()=>{class o{constructor(){this.control=new l.FormControl}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-month-range-example-1"]],decls:3,vars:2,consts:[[1,"b-form",3,"formControl","tuiTextfieldCleaner"],["tuiTextfield","","placeholder","3 months or more"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-input-month-range",0),e.\u0275\u0275text(1," Choose a range of months "),e.\u0275\u0275element(2,"input",1),e.\u0275\u0275elementEnd()),2&t&&e.\u0275\u0275property("formControl",i.control)("tuiTextfieldCleaner",!0)},directives:[p.X,T.K,l.NgControlStatus,l.FormControlDirective,N.b,G.M],encapsulation:2,changeDetection:0}),o})();var M=n(10200);let $=(()=>{class o{constructor(){this.testForm=new l.FormGroup({testValue:new l.FormControl(null)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-month-range-example-2"]],decls:7,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",1,"tui-space_bottom-2"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_vertical-4"],["formControlName","testValue"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"tui-input-month-range",1),e.\u0275\u0275text(2," Choose a range of months "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-input-month-range",2),e.\u0275\u0275text(4," Choose a range of months "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-input-month-range",3),e.\u0275\u0275text(6,"Choose a range of months"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&e.\u0275\u0275property("formGroup",i.testForm)},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,p.X,T.K,l.NgControlStatus,l.FormControlName,M.s],encapsulation:2,changeDetection:0}),o})(),H=(()=>{class o{constructor(){this.testForm=new l.FormGroup({testValue:new l.FormControl(null)}),this.disabledItemHandler=(t,i)=>!!i&&!!i.value&&i.value instanceof d.dtp&&!!i.value.isSingleMonth&&t.month<i.value.from.month+2}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-month-range-example-3"]],decls:6,vars:2,consts:function(){let a;return a=$localize`:␟7d001062311f184e8efdbff81e0be00c597c0496␟524318922497344790: A sample with ${"\ufffd#2\ufffd"}:START_TAG_CODE:disabledItemHandler${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: when selecting a left value of range changes available right value: a range no more than one month
`,[a,[1,"b-form",3,"formGroup"],["formControlName","testValue",1,"tui-space_bottom-2",3,"disabledItemHandler"]]},template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,0),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"form",1),e.\u0275\u0275elementStart(4,"tui-input-month-range",2),e.\u0275\u0275text(5," Choose a range of months "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",i.testForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabledItemHandler",i.disabledItemHandler))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,p.X,T.K,l.NgControlStatus,l.FormControlName],encapsulation:2,changeDetection:0}),o})();var U=n(31823),L=n(44051),V=n(17023),b=n(54218),X=n(3729),z=n(68874),J=n(84848),B=n(76349);function K(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275elementStart(3,"tui-notification",4),e.\u0275\u0275text(4," If you need to set some attributes or listen to events on native "),e.\u0275\u0275elementStart(5,"code"),e.\u0275\u0275text(6,"input"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(7," , you can put it inside with "),e.\u0275\u0275elementStart(8,"code"),e.\u0275\u0275text(9,"Textfield"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(10," directive as shown below "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-input-month-range-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"tui-doc-example",5),e.\u0275\u0275element(13,"tui-input-month-range-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-example",6),e.\u0275\u0275element(15,"tui-input-month-range-example-3"),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(10),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3)}}function j(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"tui-input-month-range",12),e.\u0275\u0275text(1," Months "),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formControl",t.control)("min",t.min)("max",t.max)("focusable",t.focusable)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)("tuiTextfieldCleaner",t.cleaner)("readOnly",t.readOnly)("pseudoInvalid",t.pseudoInvalid)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoActive",t.pseudoPressed)("disabledItemHandler",t.disabledItemHandler)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintAppearance",t.hintAppearance)}}function W(o,a){1&o&&(e.\u0275\u0275i18nStart(0,13),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function Q(o,a){1&o&&(e.\u0275\u0275i18nStart(0,14),e.\u0275\u0275element(1,"div"),e.\u0275\u0275element(2,"strong"),e.\u0275\u0275i18nEnd())}function Y(o,a){1&o&&e.\u0275\u0275i18n(0,15)}function Z(o,a){1&o&&e.\u0275\u0275i18n(0,16)}function w(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo",7),e.\u0275\u0275template(1,j,2,18,"ng-template"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,W,2,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabled=m}),e.\u0275\u0275template(4,Q,3,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabledItemHandler=m}),e.\u0275\u0275template(5,Y,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().min=m}),e.\u0275\u0275template(6,Z,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().max=m}),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"inherited-documentation")}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("control",t.control),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValue",t.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max)}}function k(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",17),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,18),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,20),e.\u0275\u0275element(9,"code"),e.\u0275\u0275element(10,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-doc-code",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"li"),e.\u0275\u0275text(13," Use "),e.\u0275\u0275elementStart(14,"code"),e.\u0275\u0275text(15,"TuiInputMonthComponent"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(16," in template: "),e.\u0275\u0275element(17,"tui-doc-code",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleForm),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleHtml)}}let q=(()=>{class o extends P.b{constructor(){super(...arguments),this.exampleForm=n.e(45722).then(n.t.bind(n,45722,17)),this.exampleModule=n.e(22580).then(n.t.bind(n,22580,17)),this.exampleHtml=n.e(82082).then(n.t.bind(n,82082,17)),this.example1={TypeScript:n.e(11176).then(n.t.bind(n,11176,17)),HTML:n.e(57536).then(n.t.bind(n,57536,17))},this.example2={TypeScript:n.e(46649).then(n.t.bind(n,46649,17)),HTML:n.e(62394).then(n.t.bind(n,62394,17))},this.example3={TypeScript:n.e(59990).then(n.t.bind(n,59990,17)),HTML:n.e(5748).then(n.t.bind(n,5748,17))},this.minVariants=[d.nNo,new d.qld(2019,2),new d.qld(2007,0)],this.maxVariants=[d.OyN,new d.qld(2020,2),new d.qld(2023,0)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[d.IyD,({month:t})=>t%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.cleaner=!1,this.control=new l.FormControl(null,l.Validators.required)}}return o.\u0275fac=function(){let a;return function(i){return(a||(a=e.\u0275\u0275getInheritedFactory(o)))(i||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-input-month-range"]],features:[e.\u0275\u0275ProvidersFeature([{provide:D.x,useExisting:(0,e.forwardRef)(()=>o)}]),e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:0,consts:function(){let a,t,i,m,r,g,C,F,O,c;return a=$localize`:␟2f97016068f46347a787d20f1d43451ccec5ed5d␟7600412415333750041:Component to input a range of months`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,m=$localize`:␟792a3526674c0e6247dd50b0d67e6f89d2580185␟8131541999290053051:With a context usage in disabledItemHandler`,r=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,g=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,C=$localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `,F=$localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `,O=$localize`:␟68f05b078a893528095914c11e82a34e214bdf59␟7892161855673473900: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputMonthRangeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,c=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,c=e.\u0275\u0275i18nPostprocess(c),[["header","InputMonthRange","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",t,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","sizes","heading",i,3,"content"],["id","context","heading",m,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","focusable","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","readOnly","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","disabledItemHandler","tuiHintContent","tuiHintDirection","tuiHintAppearance"],r,g,C,F,[1,"b-demo-steps"],O,["filename","myComponent.module.ts",3,"code"],c,["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]]},template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,K,16,3,"ng-template",1),e.\u0275\u0275template(2,w,8,8,"ng-template",1),e.\u0275\u0275template(3,k,18,3,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[x.q,I.n,y.f,A.L,v,$,H,U.F,L.z,V.B,b.w,p.X,T.K,l.NgControlStatus,l.FormControlDirective,X.aR,N.b,z.x,M.s,J.b,B.c],encapsulation:2,changeDetection:0}),o})(),ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[_.fV,R.f,l.ReactiveFormsModule,l.FormsModule,f.ez,s.jzK,s.fNO,h.qC6,s.cnw,s.goS,s.HiG,S.Bz.forChild((0,_.Ve)(q))]]}),o})()}}]);