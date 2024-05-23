(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17584],{17584:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiInputPhoneInternationalModule:()=>L});var n=o(4594),i=o(66094),u=o(77113),r=o(75311),a=o(48266),d=o(81470),c=o(38934),l=o(57218),p=o(94344),s=o(64757),m=o(35548),f=o(90685),h=o(78106),y=o(29329),x=o(63708),T=o(38264),g=o(9148),C=o(75447),Z=o(70254),I=o(82215),P=o(28402),_=o(70288),U=o(33701),A=o(55836),b=o(31136),w=o(72187),H=o(34962),q=o(61091),M=o(99369),V=o(88542),D=o(30639);function J(e,t){if(1&e&&(m.TgZ(0,"p"),m._uU(1,"Allows to input phone number in international format"),m.qZA(),m.TgZ(2,"tui-doc-example",2),m._UZ(3,"tui-input-phone-international-example-1"),m.qZA(),m.TgZ(4,"tui-doc-example",3)(5,"tui-notification",4),m._uU(6," Use "),m.TgZ(7,"code"),m._uU(8,"SortCountries"),m.qZA(),m._uU(9," pipe from "),m.TgZ(10,"code"),m._uU(11,"TuiSortCountriesPipeModule"),m.qZA(),m._uU(12," to sort countries according to your current language. "),m.qZA(),m._UZ(13,"tui-input-phone-international-example-2"),m.qZA()),2&e){const e=m.oxw();m.xp6(2),m.Q6J("content",e.example1),m.xp6(2),m.Q6J("content",e.example2)}}function N(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"tui-input-phone-international",9),m.NdJ("countryIsoCodeChange",(function(t){m.CHM(e);const o=m.oxw(2);return m.KtG(o.countryIsoCode=t)})),m._uU(1," Type a phone number "),m.qZA()}if(2&e){const e=m.oxw(2);m.Q6J("countries",e.countries)("focusable",e.focusable)("formControl",e.control)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownOffset",e.dropdownOffset)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldFiller",e.filler)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldPostfix",e.postfix)("tuiTextfieldPrefix",e.prefix)("tuiTextfieldSize",e.size)("countryIsoCode",e.countryIsoCode)}}function S(e,t){1&e&&(m._uU(0," Disabled state (use "),m.TgZ(1,"code"),m._uU(2,"formControl.disable()"),m.qZA(),m._uU(3," ) "))}function O(e,t){1&e&&m._uU(0," Array of ISO-codes of countries to choose ")}function v(e,t){1&e&&m._uU(0," ISO-code of selected country ")}function F(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"tui-doc-demo",5),m.YNc(1,N,2,21,"ng-template"),m.qZA(),m.TgZ(2,"tui-doc-documentation"),m.YNc(3,S,4,0,"ng-template",6),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const o=m.oxw();return m.KtG(o.disabled=t)})),m.YNc(4,O,1,0,"ng-template",7),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const o=m.oxw();return m.KtG(o.countries=t)})),m.YNc(5,v,1,0,"ng-template",8),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const o=m.oxw();return m.KtG(o.countryIsoCode=t)})),m.qZA(),m._UZ(6,"inherited-documentation")}if(2&e){const e=m.oxw();m.Q6J("control",e.control),m.xp6(3),m.Q6J("documentationPropertyValue",e.disabled),m.xp6(1),m.Q6J("documentationPropertyValues",e.countriesVariants)("documentationPropertyValue",e.countries),m.xp6(1),m.Q6J("documentationPropertyValues",e.countryIsoCodeVariants)("documentationPropertyValue",e.countryIsoCode)}}function Q(e,t){if(1&e&&(m.TgZ(0,"ol",10)(1,"li",11)(2,"p"),m._uU(3," Import an Angular module for forms and "),m.TgZ(4,"code"),m._uU(5,"TuiInputPhoneInternationalModule"),m.qZA(),m._uU(6," in the same module where you want to use our component: "),m.qZA(),m._UZ(7,"tui-doc-code",12),m.qZA(),m.TgZ(8,"li",11)(9,"p"),m._uU(10," Declare a form ( "),m.TgZ(11,"code"),m._uU(12,"FormGroup"),m.qZA(),m._uU(13," ) or a control ( "),m.TgZ(14,"code"),m._uU(15,"FormControl"),m.qZA(),m._uU(16," ) in your component: "),m.qZA(),m._UZ(17,"tui-doc-code",13),m.qZA(),m.TgZ(18,"li",11)(19,"p"),m._uU(20,"Add to the template:"),m.qZA(),m._UZ(21,"tui-doc-code",14),m.qZA()()),2&e){const e=m.oxw();m.xp6(7),m.Q6J("code",e.exampleModule),m.xp6(10),m.Q6J("code",e.exampleForm),m.xp6(4),m.Q6J("code",e.exampleHtml)}}let E=(()=>{var e;class t extends p.b{constructor(){super(...arguments),this.cleaner=!1,this.labelOutside=!0,this.control=new i.NI("",[i.kI.required,i.kI.minLength(9)]),this.exampleForm=o.e(67698).then(o.t.bind(o,67698,17)),this.exampleModule=o.e(84308).then(o.t.bind(o,84308,17)),this.exampleHtml=o.e(18164).then(o.t.bind(o,18164,17)),this.example1={TypeScript:o.e(7390).then(o.t.bind(o,7390,17)),HTML:o.e(62125).then(o.t.bind(o,62125,17)),LESS:o.e(48065).then(o.t.bind(o,48065,17))},this.example2={TypeScript:o.e(77494).then(o.t.bind(o,77494,17)),HTML:o.e(13763).then(o.t.bind(o,13763,17)),LESS:o.e(20244).then(o.t.bind(o,20244,17))},this.countriesVariants=[["RU","KZ","UA","BY"],d.TUI_ALL_COUNTRIES_ISO_CODES],this.countries=this.countriesVariants[0],this.countryIsoCodeVariants=["RU","KZ","UA","BY"],this.countryIsoCode=this.countryIsoCodeVariants[0]}}return(e=t).ɵfac=function(){let t;return function(o){return(t||(t=m.n5z(e)))(o||e)}}(),e.ɵcmp=m.Xpm({type:e,selectors:[["example-tui-input-phone-international"]],features:[m._Bn([(0,l.tuiProvide)(s.x,e)]),m.qOj],decls:4,vars:0,consts:[["header","InputPhoneInternational","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","all-countries","heading","All available countries",3,"content"],[1,"tui-space_bottom-3"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","countries","documentationPropertyType","ReadonlyArray<TuiCountryIsoCode>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","countryIsoCode","documentationPropertyType","TuiCountryIsoCode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"countries","focusable","formControl","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiDropdownDirection","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldFiller","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize","countryIsoCode","countryIsoCodeChange"],[1,"tui-list","tui-list_ordered"],[1,"tui-list__item"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,J,14,2,"ng-template",1),m.YNc(2,F,7,6,"ng-template",1),m.YNc(3,Q,22,3,"ng-template",1),m.qZA())},dependencies:[i.JJ,i.oH,f.Q,h.w,y.b,x.x,T.s,g.A,C.T,Z.k,I.Ek,P.bZ,_.c,U.F,A.z,b.B,w.f,H.q,q.n,M.L,V.TuiInputPhoneExample1,D.TuiInputPhoneExample2],encapsulation:2,changeDetection:0}),t})(),L=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=m.oAB({type:e}),e.ɵinj=m.cJS({imports:[n.ez,i.u5,i.UX,d.TuiInputPhoneInternationalModule,c.f,a.TuiTextfieldControllerModule,a.TuiDropdownModule,a.TuiHint,r.az,d.TuiSortCountriesPipeModule,a.TuiNotificationComponent,u.Bz.forChild((0,r.Ve)(E))]}),t})()}}]);