(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36581],{36581:(e,t,n)=>{n.r(t),n.d(t,{ExampleMiscellaneousModule:()=>Q});var r=n(88692),o=n(69900),i=n(91795),a=n(64206),s=n(78129),l=n(20995),u=n(64537),c=n(83074),m=n(43560),p=n(93525),d=n(38868),f=n(94356);let h=(()=>{var e;class t{get assertResult(){return 5===(new Date).getDay()?"Nothing in console":'There is a console assert: <br> "Today is not a friday"'}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-miscellaneous-example-1"]],decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(e,t){1&e&&u._UZ(0,"p",0),2&e&&u.Q6J("innerHTML",t.assertResult,u.oJD)},encapsulation:2,changeDetection:0}),t})(),g=(()=>{var e;class t{get flatted(){return(0,f.tuiFlatLength)([[1,2],[3,4],[5,6]])}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-miscellaneous-example-2"]],decls:2,vars:1,template:function(e,t){1&e&&(u.TgZ(0,"p"),u._uU(1),u.qZA()),2&e&&(u.xp6(1),u.hij("",t.flatted," = flatLength([[1, 2], [3, 4], [5, 6]]);"))},encapsulation:2,changeDetection:0}),t})();var Z=n(21218),x=n(50170),y=n(1414),T=n(52219),w=n(50020);function v(e,t){if(1&e&&u._UZ(0,"tui-data-list-wrapper",4),2&e){const e=u.oxw();u.Q6J("items",e.items)}}let A=(()=>{var e;class t{constructor(){this.items=["6734567890123456","5536567890123456","2202567890123456","4405567890123456","4000567890123456"],this.parametersForm=new o.cw({cardNumber:new o.NI("")})}get paymentSystem(){const{cardNumber:e}=this.parametersForm.value;return(0,Z.tuiGetPaymentSystem)(null!=e?e:"")}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-miscellaneous-example-4"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","cardNumber",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(u._uU(0),u.TgZ(1,"form",0)(2,"div",1)(3,"tui-select",2),u._uU(4," Choose card number "),u.YNc(5,v,1,1,"tui-data-list-wrapper",3),u.qZA()()()),2&e&&(u.hij("'",t.paymentSystem,"' = getPaymentSystem(cardNumber); "),u.xp6(1),u.Q6J("formGroup",t.parametersForm))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,x.u,y.O,T.g,w.e],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})();function _(e,t){if(1&e&&u._UZ(0,"tui-data-list-wrapper",4),2&e){const e=u.oxw();u.Q6J("items",e.items)}}let b=(()=>{var e;class t{constructor(){this.items=["String","null","undefined"],this.parametersForm=new o.cw({value:new o.NI(null)})}get isPresent(){const{value:e}=this.parametersForm.value,t=this.objectifyValue(null!=e?e:"");return(0,f.tuiIsPresent)(t)}objectifyValue(e){return"null"===e?null:"undefined"!==e?e:void 0}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-miscellaneous-example-5"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(u._uU(0),u.TgZ(1,"form",0)(2,"div",1)(3,"tui-select",2),u._uU(4," value "),u.YNc(5,_,1,1,"tui-data-list-wrapper",3),u.qZA()()()),2&e&&(u.hij("",t.isPresent," = isPresent(value); "),u.xp6(1),u.Q6J("formGroup",t.parametersForm))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,x.u,y.O,T.g,w.e],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),t})();var C=n(77027),L=n(41360),J=n(36951),N=n(7114);const q=function(){return[]};let U=(()=>{var e;class t{constructor(){this.userDetailsForm=new o.cw({name:new o.NI("",o.kI.required),address:new o.cw({street:new o.NI("",o.kI.required),city:new o.NI("",o.kI.required),zipCode:new o.NI("",o.kI.required)})})}ngOnInit(){(0,f.tuiMarkControlAsTouchedAndValidate)(this.userDetailsForm)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["tui-miscellaneous-example-6"]],decls:26,vars:25,consts:[[1,"b-form",3,"formGroup"],["formControlName","name"],["formControlName","name",3,"error"],["formGroupName","address"],["formControlName","street"],["formControlName","street",3,"error"],["formControlName","zipCode"],["formControlName","zipCode",3,"error"],["formControlName","city"],["formControlName","city",3,"error"]],template:function(e,t){1&e&&(u.TgZ(0,"form",0)(1,"p")(2,"tui-input",1),u._uU(3,"Name"),u.qZA(),u._UZ(4,"tui-error",2),u.ALo(5,"async"),u.ALo(6,"tuiFieldError"),u.qZA(),u.TgZ(7,"div",3)(8,"p")(9,"tui-input",4),u._uU(10,"Street"),u.qZA(),u._UZ(11,"tui-error",5),u.ALo(12,"async"),u.ALo(13,"tuiFieldError"),u.qZA(),u.TgZ(14,"p")(15,"tui-input",6),u._uU(16,"Zip code"),u.qZA(),u._UZ(17,"tui-error",7),u.ALo(18,"async"),u.ALo(19,"tuiFieldError"),u.qZA(),u.TgZ(20,"p")(21,"tui-input",8),u._uU(22,"City"),u.qZA(),u._UZ(23,"tui-error",9),u.ALo(24,"async"),u.ALo(25,"tuiFieldError"),u.qZA()()()),2&e&&(u.Q6J("formGroup",t.userDetailsForm),u.xp6(4),u.Q6J("error",u.lcZ(5,5,u.lcZ(6,7,u.DdM(21,q)))),u.xp6(7),u.Q6J("error",u.lcZ(12,9,u.lcZ(13,11,u.DdM(22,q)))),u.xp6(6),u.Q6J("error",u.lcZ(18,13,u.lcZ(19,15,u.DdM(23,q)))),u.xp6(6),u.Q6J("error",u.lcZ(24,17,u.lcZ(25,19,u.DdM(24,q)))))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,o.x0,C.K,L.w,J.v,r.Ov,N.A],encapsulation:2,changeDetection:0}),t})();function M(e,t){if(1&e&&(u.TgZ(0,"p"),u._uU(1,"Some utils to simplify the development process"),u.qZA(),u.TgZ(2,"tui-doc-example",3),u._UZ(3,"tui-miscellaneous-example-1"),u.qZA(),u.TgZ(4,"tui-doc-example",4),u._UZ(5,"tui-miscellaneous-example-2"),u.qZA(),u.TgZ(6,"tui-doc-example",5),u._UZ(7,"tui-miscellaneous-example-4"),u.qZA(),u.TgZ(8,"tui-doc-example",6),u._UZ(9,"tui-miscellaneous-example-5"),u.qZA(),u.TgZ(10,"tui-doc-example",7),u._UZ(11,"tui-miscellaneous-example-6"),u.qZA()),2&e){const e=u.oxw();u.xp6(2),u.Q6J("content",e.example1),u.xp6(2),u.Q6J("content",e.example2),u.xp6(2),u.Q6J("content",e.example4),u.xp6(2),u.Q6J("content",e.example5),u.xp6(2),u.Q6J("content",e.example6)}}function D(e,t){if(1&e&&(u.TgZ(0,"ol",8)(1,"li")(2,"p"),u._uU(3,"Import into component and use:"),u.qZA(),u._UZ(4,"tui-doc-code",9),u.qZA()()),2&e){const e=u.oxw();u.xp6(4),u.Q6J("code",e.importComponentExample)}}let S=(()=>{var e;class t{constructor(){this.importComponentExample=n.e(47152).then(n.t.bind(n,47152,17)),this.example1={TypeScript:n.e(33654).then(n.t.bind(n,33654,17)),HTML:n.e(1342).then(n.t.bind(n,1342,17))},this.example2={TypeScript:n.e(34569).then(n.t.bind(n,34569,17)),HTML:n.e(71006).then(n.t.bind(n,71006,17))},this.example4={TypeScript:n.e(99460).then(n.t.bind(n,99460,17)),HTML:n.e(34715).then(n.t.bind(n,34715,17)),LESS:n.e(96101).then(n.t.bind(n,96101,17))},this.example5={TypeScript:n.e(94146).then(n.t.bind(n,94146,17)),HTML:n.e(21162).then(n.t.bind(n,21162,17)),LESS:n.e(9307).then(n.t.bind(n,9307,17))},this.example6={TypeScript:n.e(34461).then(n.t.bind(n,34461,17)),HTML:n.e(33610).then(n.t.bind(n,33610,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.Xpm({type:e,selectors:[["example-format"]],decls:3,vars:0,consts:[["header","Miscellaneous","package","CDK","type","utils"],["pageTab",""],["pageTab","Setup"],["id","assert","description","Logs assert into console in dev mode","heading","assert",3,"content"],["id","flat-length","description","Calculates a length of elements of two dimensional array","heading","flatLength",3,"content"],["id","get-payment-system","description","Card number to its payment system","heading","getPaymentSystem",3,"content"],["id","is-present","description","Checks value not to be null or undefined","heading","isPresent",3,"content"],["id","mark-control-as-touched-and-validate","description","Recursively marks form control as touched and triggers validation","heading","markControlAsTouchedAndValidate",3,"content"],[1,"b-demo-steps"],["filename","my.component.ts",3,"code"]],template:function(e,t){1&e&&(u.TgZ(0,"tui-doc-page",0),u.YNc(1,M,12,5,"ng-template",1),u.YNc(2,D,5,1,"ng-template",2),u.qZA())},dependencies:[c.c,m.q,p.n,d.f,h,g,A,b,U],encapsulation:2,changeDetection:0}),t})(),Q=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({imports:[r.ez,o.u5,o.UX,l.TuiSelectModule,s.TuiDataListModule,l.TuiDataListWrapperModule,l.TuiInputModule,s.TuiErrorModule,l.TuiFieldErrorPipeModule,a.fV,i.Bz.forChild((0,a.Ve)(S))]}),t})()}}]);