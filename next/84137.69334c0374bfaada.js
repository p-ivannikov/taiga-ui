(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84137],{84137:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiInputSliderModule:()=>at});var i=n(88692),o=n(69900),a=n(91795),r=n(64500),s=n(75526),u=n(42589),l=n(75695),c=n(64537),m=n(82880),p=n(98204),d=n(44056),g=n(54218),h=n(84848),f=n(83074),x=n(10977),C=n(62840),P=n(60404),y=n(43560),_=n(93525),M=n(38868),b=n(66596),T=n(79121),Z=n(64374),O=n(6707),v=n(68874),U=n(10200),k=n(3729),V=n(44998),q=n(89437);let A=(()=>{var t;class e{constructor(){this.min=5,this.max=20,this.sliderStep=1,this.steps=(this.max-this.min)/this.sliderStep,this.quantum=.01,this.hint=`Dragging slider change input by ${this.sliderStep}.\nBut you can type decimal number which is multiple of ${this.quantum}.`,this.control=new o.NI(6.5)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-input-slider-example-1"]],decls:2,vars:6,consts:[[3,"formControl","max","min","quantum","steps","tuiHintContent"]],template:function(t,e){1&t&&(c.TgZ(0,"tui-input-slider",0),c._uU(1," Select interest rate\n"),c.qZA()),2&t&&c.Q6J("formControl",e.control)("max",e.max)("min",e.min)("quantum",e.quantum)("steps",e.steps)("tuiHintContent",e.hint)},dependencies:[d.h,o.JJ,o.oH,h.bZ],encapsulation:2,changeDetection:0}),e})();var N=n(76189);let J=(()=>{var t;class e{constructor(){this.control=new o.NI(40),this.segments=5,this.max=100,this.min=0}increase(){var t,e;this.control.patchValue(Math.min((null!==(t=null===(e=this.control)||void 0===e?void 0:e.value)&&void 0!==t?t:0)+20,this.max))}decrease(){var t,e;this.control.patchValue(Math.max((null!==(t=null===(e=this.control)||void 0===e?void 0:e.value)&&void 0!==t?t:0)-20,this.min))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-input-slider-example-2"]],decls:15,vars:4,consts:[[3,"formControl","max","min","segments"],[1,"slider-ticks-labels"],["appearance","icon","icon","tuiIconThumbsDownLarge","size","xs","tuiIconButton","","type","button",3,"click"],["appearance","icon","icon","tuiIconThumbsUpLarge","size","xs","tuiIconButton","","type","button",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"tui-input-slider",0),c._uU(1," Rate your mind\n"),c.qZA(),c.TgZ(2,"div",1)(3,"span")(4,"button",2),c.NdJ("click",(function(){return e.decrease()})),c.qZA()(),c.TgZ(5,"span"),c._uU(6,"20%"),c.qZA(),c.TgZ(7,"span"),c._uU(8,"40%"),c.qZA(),c.TgZ(9,"span"),c._uU(10,"60%"),c.qZA(),c.TgZ(11,"span"),c._uU(12,"80%"),c.qZA(),c.TgZ(13,"span")(14,"button",3),c.NdJ("click",(function(){return e.increase()})),c.qZA()()()),2&t&&c.Q6J("formControl",e.control)("max",e.max)("min",e.min)("segments",5)},dependencies:[d.h,o.JJ,o.oH,N.v],styles:[".slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.5rem .375rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),e})();function w(t,e){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.Oqu(t)}}let S=(()=>{var t;class e{constructor(){this.control=new o.NI(1e4),this.max=1e6,this.min=0,this.totalSteps=100,this.ticksLabels=["0","10K","100K","500k","1000K"],this.keySteps=[[0,this.min],[25,1e4],[50,1e5],[75,5e5],[100,this.max]]}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-input-slider-example-3"]],decls:8,vars:8,consts:[[3,"formControl","keySteps","max","min","segments","steps"],[1,"slider-ticks-labels"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(c.TgZ(0,"tui-input-slider",0),c._uU(1," Not linear growing slider\n"),c.qZA(),c.TgZ(2,"div",1),c.YNc(3,w,2,1,"span",2),c.qZA(),c.TgZ(4,"p"),c._uU(5," Control value: "),c.TgZ(6,"code"),c._uU(7),c.qZA()()),2&t&&(c.Q6J("formControl",e.control)("keySteps",e.keySteps)("max",e.max)("min",e.min)("segments",e.ticksLabels.length-1)("steps",e.totalSteps),c.xp6(3),c.Q6J("ngForOf",e.ticksLabels),c.xp6(4),c.Oqu(e.control.value))},dependencies:[d.h,o.JJ,o.oH,i.sg],styles:[".slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.5rem .375rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),e})();var H=n(34880);function I(t,e){1&t&&c._UZ(0,"tui-svg",3)}function L(t,e){1&t&&c._UZ(0,"tui-svg",4)}let Q=(()=>{var t;class e{constructor(){this.userAnswer=2}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-input-slider-example-4"]],decls:6,vars:4,consts:[["tuiHintContent","Select the answer to see how the right custom content changes",3,"max","min","tuiTextfieldCustomContent","ngModel","ngModelChange"],["right",""],["wrong",""],["src","tuiIconCheckCircle",1,"success"],["src","tuiIconXCircle",1,"error"]],template:function(t,e){if(1&t&&(c.TgZ(0,"tui-input-slider",0),c.NdJ("ngModelChange",(function(t){return e.userAnswer=t})),c._uU(1," 2+2=?\n"),c.qZA(),c.YNc(2,I,1,0,"ng-template",null,1,c.W1O),c.YNc(4,L,1,0,"ng-template",null,2,c.W1O)),2&t){const t=c.MAs(3),n=c.MAs(5);c.Q6J("max",10)("min",0)("tuiTextfieldCustomContent",4===e.userAnswer?t:n)("ngModel",e.userAnswer)}},dependencies:[d.h,o.JJ,o.On,h.bZ,H.P,O.B],styles:[".success[_ngcontent-%COMP%]{color:var(--tui-success-fill)}.error[_ngcontent-%COMP%]{color:var(--tui-error-fill)}"],changeDetection:0}),e})(),D=(()=>{var t;class e{constructor(){this.max=100,this.min=0,this.smallControl=new o.NI(this.min),this.bigControl=new o.NI(this.max),this.customLabel=({$implicit:t})=>{switch(t){case this.max:return"Digits can't describe my love!";case this.min:return"Just a label for min value";case(this.max-this.min)/2:return"Middle";default:return t}}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-input-slider-example-5"]],decls:9,vars:10,consts:[[1,"control"],["tuiTextfieldSize","m",3,"formControl","max","min","segments","tuiTextfieldLabelOutside","valueContent"],[1,"slider-ticks-labels"],[1,"control",3,"formControl","max","min","valueContent"]],template:function(t,e){1&t&&(c.TgZ(0,"section",0),c._UZ(1,"tui-input-slider",1),c.TgZ(2,"div",2),c._UZ(3,"span"),c.TgZ(4,"span"),c._uU(5,"Custom label"),c.qZA(),c._UZ(6,"span"),c.qZA()(),c.TgZ(7,"tui-input-slider",3),c._uU(8," How much do you love Taiga UI?\n"),c.qZA()),2&t&&(c.xp6(1),c.Q6J("formControl",e.smallControl)("max",e.max)("min",e.min)("segments",2)("tuiTextfieldLabelOutside",!0)("valueContent",e.customLabel),c.xp6(6),c.Q6J("formControl",e.bigControl)("max",e.max)("min",e.min)("valueContent",e.customLabel))},dependencies:[d.h,o.JJ,o.oH,v.x,U.s],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;column-gap:3rem;row-gap:1rem}.control[_ngcontent-%COMP%]{flex:1;min-width:17rem}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .375rem 0;font:var(--tui-font-text-s)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),e})();function Y(t,e){1&t&&(c.TgZ(0,"p"),c._uU(1," Look into this example to understand difference between input-props "),c.TgZ(2,"code"),c._uU(3,"[steps]"),c.qZA(),c._uU(4," and "),c.TgZ(5,"code"),c._uU(6,"[quantum]"),c.qZA(),c._uU(7," . "),c.qZA())}function K(t,e){1&t&&(c.TgZ(0,"p"),c._uU(1," Pass "),c.TgZ(2,"a",12),c._uU(3," PolymorpheusContent "),c.qZA(),c._uU(4," into property "),c.TgZ(5,"code"),c._uU(6,"[valueContent]"),c.qZA(),c._uU(7," to create custom label for selected value. "),c.qZA())}function z(t,e){if(1&t&&(c.TgZ(0,"p"),c._uU(1,"Component to input a limited range"),c.qZA(),c.TgZ(2,"p"),c._uU(3," Number formatting can be customized by using "),c.TgZ(4,"a",2),c._uU(5," TUI_NUMBER_FORMAT "),c.qZA()(),c.TgZ(6,"tui-doc-example",3),c.YNc(7,Y,8,0,"ng-template",null,4,c.W1O),c._UZ(9,"tui-input-slider-example-1"),c.qZA(),c.TgZ(10,"tui-doc-example",5)(11,"tui-notification",6),c._uU(12," Use mixin "),c.TgZ(13,"code"),c._uU(14,"tui-slider-ticks-labels"),c.qZA(),c._uU(15," to arrange ticks' labels (it places them strictly below ticks). "),c.qZA(),c._UZ(16,"tui-input-slider-example-2"),c.qZA(),c.TgZ(17,"tui-doc-example",7)(18,"dl",8)(19,"dt")(20,"strong"),c._uU(21,"Key steps"),c.qZA()(),c.TgZ(22,"dd"),c._uU(23,"anchor points of non-uniform format between value and position"),c.qZA()(),c._UZ(24,"tui-input-slider-example-3"),c.qZA(),c.TgZ(25,"tui-doc-example",9),c._UZ(26,"tui-input-slider-example-4"),c.qZA(),c.TgZ(27,"tui-doc-example",10),c.YNc(28,K,8,0,"ng-template",null,11,c.W1O),c._UZ(30,"tui-input-slider-example-5"),c.qZA()),2&t){const t=c.MAs(8),e=c.MAs(29),n=c.oxw();c.xp6(6),c.Q6J("content",n.example1)("description",t),c.xp6(4),c.Q6J("content",n.example2),c.xp6(7),c.Q6J("content",n.example3),c.xp6(8),c.Q6J("content",n.example4),c.xp6(2),c.Q6J("content",n.example5)("description",e)}}function B(t,e){if(1&t&&(c.TgZ(0,"tui-input-slider",24),c._uU(1," Range "),c.qZA()),2&t){const t=c.oxw(2);c.Q6J("focusable",t.focusable)("formControl",t.control)("keySteps",t.keySteps)("max",t.max)("min",t.min)("postfix",t.postfix)("prefix",t.prefix)("pseudoActive",t.pseudoPressed)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoInvalid",t.pseudoInvalid)("quantum",t.quantum)("readOnly",t.readOnly)("segments",t.segments)("steps",t.steps)("tuiHintAppearance",t.hintAppearance)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldCustomContent",t.customContentSelected)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldPostfix",t.postfix)("tuiTextfieldPrefix",t.prefix)("tuiTextfieldSize",t.size)("valueContent",t.valueContent)}}function E(t,e){1&t&&(c._uU(0," Disabled state (use "),c.TgZ(1,"code"),c._uU(2,"formControl.disable()"),c.qZA(),c._uU(3," ) "))}function G(t,e){1&t&&c._uU(0," Min value ")}function F(t,e){1&t&&c._uU(0," Max value ")}function X(t,e){1&t&&c._uU(0," Minimum indivisible value ")}function R(t,e){1&t&&(c._uU(0," Number of actual discrete slider steps "),c.TgZ(1,"p"),c._uU(2," If property is not set (i.e. equals to default value "),c.TgZ(3,"strong"),c._uU(4,"0"),c.qZA(),c._uU(5," ), number of steps equals "),c.TgZ(6,"code"),c._uU(7,"(max - min) / quantum"),c.qZA()())}function W(t,e){1&t&&(c._uU(0," A number of visual segments (use "),c.TgZ(1,"code"),c._uU(2,"1"),c.qZA(),c._uU(3," for no ticks) "))}function $(t,e){1&t&&c._uU(0," Key steps to bind slider position and value ")}function j(t,e){1&t&&c._uU(0," A template for custom view of selected value. ")}function tt(t,e){1&t&&(c._uU(0," A prefix symbol, like currency. Use "),c.TgZ(1,"code"),c._uU(2,"tuiTextfieldPrefix"),c.qZA(),c._uU(3," instead "))}function et(t,e){1&t&&(c._uU(0," A postfix symbol, like currency. Use "),c.TgZ(1,"code"),c._uU(2,"tuiTextfieldPostfix"),c.qZA(),c._uU(3," instead "))}function nt(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tui-doc-demo",13),c.YNc(1,B,2,26,"ng-template"),c.qZA(),c.TgZ(2,"tui-doc-documentation"),c.YNc(3,E,4,0,"ng-template",14),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.disabled=e)})),c.YNc(4,G,1,0,"ng-template",15),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.min=e)})),c.YNc(5,F,1,0,"ng-template",16),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.max=e)})),c.YNc(6,X,1,0,"ng-template",17),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.quantum=e)})),c.YNc(7,R,8,0,"ng-template",18),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.steps=e)})),c.YNc(8,W,4,0,"ng-template",19),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.segments=e)})),c.YNc(9,$,1,0,"ng-template",20),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.keySteps=e)})),c.YNc(10,j,1,0,"ng-template",21),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.valueContent=e)})),c.YNc(11,tt,4,0,"ng-template",22),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.prefix=e)})),c.YNc(12,et,4,0,"ng-template",23),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.postfix=e)})),c.qZA(),c._UZ(13,"inherited-documentation")}if(2&t){const t=c.oxw();c.Q6J("control",t.control),c.xp6(3),c.Q6J("documentationPropertyValue",t.disabled),c.xp6(1),c.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),c.xp6(1),c.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),c.xp6(1),c.Q6J("documentationPropertyValues",t.quantumVariants)("documentationPropertyValue",t.quantum),c.xp6(1),c.Q6J("documentationPropertyValue",t.steps),c.xp6(1),c.Q6J("documentationPropertyValue",t.segments),c.xp6(1),c.Q6J("documentationPropertyValues",t.keyStepsVariants)("documentationPropertyValue",t.keySteps),c.xp6(1),c.Q6J("documentationPropertyValues",t.valueContentVariants)("documentationPropertyValue",t.valueContent),c.xp6(1),c.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.prefix),c.xp6(1),c.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",t.postfix)}}function it(t,e){if(1&t&&(c.TgZ(0,"ol",25)(1,"li")(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiInputSliderModule"),c.qZA(),c._uU(6," into a module where you want to use our component "),c.qZA(),c._UZ(7,"tui-doc-code",26),c.qZA(),c.TgZ(8,"li")(9,"p"),c._uU(10,"Add to the template:"),c.qZA(),c._UZ(11,"tui-doc-code",27),c.qZA()()),2&t){const t=c.oxw();c.xp6(7),c.Q6J("code",t.exampleModule),c.xp6(4),c.Q6J("code",t.exampleHtml)}}let ot=(()=>{var t;class e extends m.b{constructor(){super(...arguments),this.exampleModule=n.e(97832).then(n.t.bind(n,97832,17)),this.exampleHtml=n.e(66365).then(n.t.bind(n,66365,17)),this.example1={HTML:n.e(24331).then(n.t.bind(n,24331,17)),TypeScript:n.e(60989).then(n.t.bind(n,60989,17))},this.example2={HTML:n.e(42677).then(n.t.bind(n,42677,17)),LESS:n.e(29928).then(n.t.bind(n,28947,17)),TypeScript:n.e(80828).then(n.t.bind(n,80828,17))},this.example3={HTML:n.e(70093).then(n.t.bind(n,70093,17)),TypeScript:n.e(32174).then(n.t.bind(n,32174,17)),LESS:n.e(33438).then(n.t.bind(n,33438,17))},this.example4={HTML:n.e(53041).then(n.t.bind(n,53041,17)),TypeScript:n.e(8569).then(n.t.bind(n,8569,17)),LESS:n.e(80184).then(n.t.bind(n,80184,17))},this.example5={HTML:n.e(34856).then(n.t.bind(n,34856,17)),TypeScript:n.e(59388).then(n.t.bind(n,59388,17)),LESS:n.e(13568).then(n.t.bind(n,13568,17))},this.control=new o.NI(0),this.minVariants=[0,1,5,7.77,-10],this.min=this.minVariants[0],this.maxVariants=[10,100,1e4],this.max=this.maxVariants[0],this.segments=1,this.steps=0,this.quantumVariants=[1,.01,.001,1e-4,10,20,100],this.quantum=this.quantumVariants[0],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.valueContentVariants=["","TOP SECRET",({$implicit:t})=>t===this.max?"MAX":t,({$implicit:t})=>t===this.min?"MIN":t,({$implicit:t})=>5===t?"FIVE":t],this.valueContent=this.valueContentVariants[0],this.keyStepsVariants=[[[0,0],[50,1e3],[100,1e4]]],this.keySteps=null,this.customContentVariants=["","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0]}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=c.n5z(t)))(n||t)}}(),t.ɵcmp=c.Xpm({type:t,selectors:[["example-tui-input-slider"]],features:[c._Bn([{provide:p.x,useExisting:(0,c.Gpc)((()=>t))}]),c.qOj],decls:4,vars:0,consts:[["header","InputSlider","package","KIT","type","components"],["pageTab",""],["fragment","number-format","routerLink","/utils/tokens","tuiLink",""],["id","base","heading","Basic",3,"content","description"],["stepQuantumDescription",""],["id","slider-segments","heading","With slider segments + ticks labels",3,"content"],[1,"tui-space_bottom-8"],["id","key-steps","heading","KeySteps",3,"content"],[1,"tui-space_bottom-8","tui-space_top-0"],["id","right-label","heading","With right label",3,"content"],["id","min-max-labels","heading","With min and max labels",3,"content","description"],["valueContentDescription",""],["href","https://github.com/taiga-family/ng-polymorpheus","tuiLink",""],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","quantum","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","steps","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","segments","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","keySteps","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","valueContent","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","prefix","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","postfix","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],[3,"focusable","formControl","keySteps","max","min","postfix","prefix","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","quantum","readOnly","segments","steps","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize","valueContent"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,z,31,7,"ng-template",1),c.YNc(2,nt,14,18,"ng-template",1),c.YNc(3,it,12,2,"ng-template",1),c.qZA())},dependencies:[d.h,g.w,o.JJ,o.oH,h.bZ,f.c,x.F,C.z,P.B,y.q,_.n,M.f,b.V,T.L,Z.b,O.B,v.x,U.s,k.a,V.A,q.T,a.rH,A,J,S,Q,D],encapsulation:2,changeDetection:0}),e})(),at=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[u.TuiInputRangeModule,u.TuiInputSliderModule,l.f,o.UX,o.u5,i.ez,u.TuiRadioListModule,s.TuiButtonModule,s.TuiHintModule,r.fV,s.TuiLinkModule,s.TuiSvgModule,s.TuiNotificationModule,s.TuiTextfieldControllerModule,a.Bz.forChild((0,r.Ve)(ot))]}),e})()}}]);