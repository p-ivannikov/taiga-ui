(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13034],{13034:(t,n,i)=>{i.r(n),i.d(n,{default:()=>I});var e=i(4594),o=i(66094),a=i(71810),u=i(90339),c=i(77798),r=i(2004),s=i(35548),l=i(49237),p=i(28598),d=i(29655),g=i(59756),h=i(74922),x=i(19709),T=i(75183),m=i(6017),f=i(65259),w=i(62077);function y(t,n){1&t&&(s.TgZ(0,"th",15),s._uU(1," Name "),s.qZA()),2&t&&s.Q6J("sorter",null)("sticky",!0)}function M(t,n){1&t&&(s.TgZ(0,"th",16),s._uU(1," Price, $ "),s.qZA()),2&t&&s.Q6J("sticky",!0)}function C(t,n){1&t&&(s.TgZ(0,"th",17),s._uU(1," Purchase "),s.qZA()),2&t&&s.Q6J("sorter",null)}function b(t,n){1&t&&s.GkF(0)}function Z(t,n){1&t&&(s.TgZ(0,"th",18),s._uU(1," Date "),s.qZA())}function J(t,n){if(1&t&&(s.TgZ(0,"th",19),s._uU(1," Total "),s.qZA()),2&t){const t=s.oxw();s.Q6J("sorter",t.totalSorter)}}function Q(t,n){1&t&&(s.TgZ(0,"th",20),s._uU(1," Quantity "),s.qZA())}function q(t,n){1&t&&(s.TgZ(0,"th",21),s._uU(1," Units "),s.qZA())}function N(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"th",29)(1,"tui-textarea",30),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"name",i,e.pythons))})),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.Q6J("colSpan",t.price>1e3?2:0),s.xp6(1),s.Q6J("expandable",!0)("ngModel",t.name)("ngModelOptions",n.options)}}function A(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"th",32)(1,"tui-input-number",33),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw(2).$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"price",i,e.pythons))})),s.qZA()()}if(2&t){const t=s.oxw(2).$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("ngModel",t.price)("ngModelOptions",n.options)("tuiValidator",n.minPrice)}}function O(t,n){if(1&t&&(s.ynx(0),s.YNc(1,A,2,3,"th",31),s.BQk()),2&t){const t=s.oxw().$implicit;s.xp6(1),s.Q6J("ngIf",t.price<=1e3)}}function H(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"td",34)(1,"tui-input-number",35),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"quantity",i,e.pythons))})),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("ngModel",t.quantity)("ngModelOptions",n.options)}}function Y(t,n){if(1&t&&s._UZ(0,"tui-data-list-wrapper",38),2&t){const t=s.oxw(4);s.Q6J("items",t.units)}}function $(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"td",34)(1,"tui-select",36),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"unit",i,e.pythons))})),s.YNc(2,Y,1,1,"tui-data-list-wrapper",37),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("ngModel",t.unit)("ngModelOptions",n.options)}}function _(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"td",34)(1,"tui-input-date",39),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"date",i,e.pythons))})),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("ngModel",t.date)("ngModelOptions",n.options)}}function F(t,n){if(1&t&&(s.TgZ(0,"td",40),s._uU(1),s.ALo(2,"async"),s.ALo(3,"tuiFormatNumber"),s.qZA()),2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.hij(" ",s.lcZ(2,1,s.lcZ(3,3,n.getTotal(t)))," ")}}function L(t,n){1&t&&(s.TgZ(0,"tr",24),s.YNc(1,N,2,4,"th",25),s.YNc(2,O,2,1,"ng-container",26),s.YNc(3,H,2,2,"td",27),s.YNc(4,$,3,2,"td",27),s.YNc(5,_,2,2,"td",27),s.YNc(6,F,4,5,"td",28),s.qZA()),2&t&&(s.xp6(1),s.Q6J("tuiCell","name"),s.xp6(1),s.Q6J("tuiCell","price"),s.xp6(1),s.Q6J("tuiCell","quantity"),s.xp6(1),s.Q6J("tuiCell","unit"),s.xp6(1),s.Q6J("tuiCell","date"),s.xp6(1),s.Q6J("tuiCell","total"))}function k(t,n){if(1&t&&(s.TgZ(0,"tbody",22),s.YNc(1,L,7,6,"tr",23),s.qZA()),2&t){const t=n.tuiLet,i=s.oxw();s.Q6J("data",t),s.xp6(1),s.Q6J("ngForOf",t)("ngForTrackBy",i.trackByIndex)}}function P(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"th",34)(1,"tui-textarea",30),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"name",i,e.starwars))})),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("expandable",!0)("ngModel",t.name)("ngModelOptions",n.options)}}function D(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"th",32)(1,"tui-input-number",43),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"price",i,e.starwars))})),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("ngModel",t.price)("ngModelOptions",n.options)("tuiValidator",n.minPrice)}}function V(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"td",34)(1,"tui-input-number",35),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"quantity",i,e.starwars))})),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("ngModel",t.quantity)("ngModelOptions",n.options)}}function S(t,n){if(1&t&&s._UZ(0,"tui-data-list-wrapper",38),2&t){const t=s.oxw(4);s.Q6J("items",t.units)}}function v(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"td",34)(1,"tui-select",36),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"unit",i,e.starwars))})),s.YNc(2,S,1,1,"tui-data-list-wrapper",37),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("ngModel",t.unit)("ngModelOptions",n.options)}}function G(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"td",34)(1,"tui-input-date",39),s.NdJ("ngModelChange",(function(n){s.CHM(t);const i=s.oxw().$implicit,e=s.oxw(2);return s.KtG(e.onValueChange(n,"date",i,e.starwars))})),s.qZA()()}if(2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("ngModel",t.date)("ngModelOptions",n.options)}}function U(t,n){if(1&t&&(s.TgZ(0,"td",40),s._uU(1),s.ALo(2,"async"),s.ALo(3,"tuiFormatNumber"),s.qZA()),2&t){const t=s.oxw().$implicit,n=s.oxw(2);s.xp6(1),s.hij(" ",s.lcZ(2,1,s.lcZ(3,3,n.getTotal(t)))," ")}}function E(t,n){1&t&&(s.TgZ(0,"tr",24),s.YNc(1,P,2,3,"th",27),s.YNc(2,D,2,3,"th",42),s.YNc(3,V,2,2,"td",27),s.YNc(4,v,3,2,"td",27),s.YNc(5,G,2,2,"td",27),s.YNc(6,U,4,5,"td",28),s.qZA()),2&t&&(s.xp6(1),s.Q6J("tuiCell","name"),s.xp6(1),s.Q6J("tuiCell","price"),s.xp6(1),s.Q6J("tuiCell","quantity"),s.xp6(1),s.Q6J("tuiCell","unit"),s.xp6(1),s.Q6J("tuiCell","date"),s.xp6(1),s.Q6J("tuiCell","total"))}function K(t,n){if(1&t&&(s.TgZ(0,"tbody",41),s.YNc(1,E,7,6,"tr",23),s.qZA()),2&t){const t=n.tuiLet,i=s.oxw(),e=s.MAs(18);s.Q6J("data",t)("heading",e),s.xp6(1),s.Q6J("ngForOf",t)("ngForTrackBy",i.trackByIndex)}}function B(t,n){1&t&&(s._UZ(0,"tui-icon",44),s._uU(1," Star Wars\n"))}const I=(()=>{var t;class n{constructor(){this.options={updateOn:"blur"},this.units=["items","kg","m"],this.pythons=[{name:"Holy Grail",price:999999,quantity:1,unit:this.units[0],date:u.TuiDay.currentLocal()},{name:"Foot",price:29.95,quantity:5,unit:this.units[2],date:u.TuiDay.currentLocal().append({day:-42})},{name:"Shed",price:499,quantity:2,unit:this.units[0],date:u.TuiDay.currentLocal().append({day:-237})}],this.starwars=[{name:"Lightsaber",price:4999,quantity:3,unit:this.units[0],date:u.TuiDay.currentLocal()},{name:"Spaceship",price:19999,quantity:1,unit:this.units[0],date:u.TuiDay.currentLocal().append({day:-237})},{name:"Stormtrooper helmet",price:14.95,quantity:5,unit:this.units[0],date:u.TuiDay.currentLocal().append({day:-42})}],this.columns=["name","price","quantity","unit","total"],this.minPrice=({value:t})=>t>400?null:{minPrice:"Price must be above $400"},this.totalSorter=(t,n)=>(0,u.tuiDefaultSort)(t.price*t.quantity,n.price*n.quantity)}trackByIndex(t){return t}getTotal({price:t,quantity:n}){return t*n}onValueChange(t,n,i,e){const o={...i,[n]:t};this.pythons=e===this.pythons?this.pythons.map((t=>t===i?o:t)):this.pythons,this.starwars=e===this.starwars?this.starwars.map((t=>t===i?o:t)):this.starwars}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=s.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent3",features:[s.jDz],decls:19,vars:18,consts:[["waIntersectionRoot","",1,"scrollbar",3,"hidden"],["size","l","tuiTable","",1,"table",3,"columns","direction","sorter"],["tuiThead",""],["tuiThGroup",""],["rowspan","2","tuiTh","","class","first",3,"sorter","sticky",4,"tuiHead"],["rowspan","2","tuiTh","","class","number second",3,"sticky",4,"tuiHead"],["colspan","2","tuiTh","",3,"sorter",4,"tuiHead"],[4,"tuiHead"],["rowspan","2","tuiTh","",4,"tuiHead"],["rowspan","2","tuiTh","","class","number",3,"sorter",4,"tuiHead"],["tuiTh","","class","number border",4,"tuiHead"],["tuiTh","",4,"tuiHead"],["heading","Monty Python","tuiTbody","",3,"data",4,"tuiLet"],["tuiTbody","",3,"data","heading",4,"tuiLet"],["template",""],["rowspan","2","tuiTh","",1,"first",3,"sorter","sticky"],["rowspan","2","tuiTh","",1,"number","second",3,"sticky"],["colspan","2","tuiTh","",3,"sorter"],["rowspan","2","tuiTh",""],["rowspan","2","tuiTh","",1,"number",3,"sorter"],["tuiTh","",1,"number","border"],["tuiTh",""],["heading","Monty Python","tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf","ngForTrackBy"],["tuiTr",""],["tuiTd","",3,"colSpan",4,"tuiCell"],[4,"tuiCell"],["tuiTd","",4,"tuiCell"],["tuiTd","","class","number text",4,"tuiCell"],["tuiTd","",3,"colSpan"],[1,"textarea",3,"expandable","ngModel","ngModelOptions","ngModelChange"],["tuiTd","","class","second",4,"ngIf"],["tuiTd","",1,"second"],[1,"number",3,"ngModel","ngModelOptions","tuiValidator","ngModelChange"],["tuiTd",""],["decimal","never",3,"ngModel","ngModelOptions","ngModelChange"],[1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"],[3,"ngModel","ngModelOptions","ngModelChange"],["tuiTd","",1,"number","text"],["tuiTbody","",3,"data","heading"],["tuiTd","","class","second",4,"tuiCell"],[3,"ngModel","ngModelOptions","tuiValidator","ngModelChange"],["icon","@tui.star",1,"tui-space_right-3"]],template:function(t,n){1&t&&(s.TgZ(0,"tui-scrollbar",0)(1,"table",1)(2,"thead",2)(3,"tr",3),s.YNc(4,y,2,2,"th",4),s.YNc(5,M,2,1,"th",5),s.YNc(6,C,2,1,"th",6),s.YNc(7,b,1,0,"ng-container",7),s.YNc(8,Z,2,0,"th",8),s.YNc(9,J,2,1,"th",9),s.qZA(),s.TgZ(10,"tr",3),s.YNc(11,Q,2,0,"th",10),s.YNc(12,q,2,0,"th",11),s.qZA()(),s.YNc(13,k,2,3,"tbody",12),s.ALo(14,"tuiTableSort"),s.YNc(15,K,2,4,"tbody",13),s.ALo(16,"tuiTableSort"),s.qZA()(),s.YNc(17,B,2,0,"ng-template",null,14,s.W1O)),2&t&&(s.Q6J("hidden",!0),s.xp6(1),s.Q6J("columns",n.columns)("direction",-1)("sorter",n.totalSorter),s.xp6(3),s.Q6J("tuiHead","name"),s.xp6(1),s.Q6J("tuiHead","price"),s.xp6(1),s.Q6J("tuiHead","quantity"),s.xp6(1),s.Q6J("tuiHead","unit"),s.xp6(1),s.Q6J("tuiHead","date"),s.xp6(1),s.Q6J("tuiHead","total"),s.xp6(2),s.Q6J("tuiHead","quantity"),s.xp6(1),s.Q6J("tuiHead","unit"),s.xp6(1),s.Q6J("tuiLet",s.lcZ(14,14,n.pythons)),s.xp6(2),s.Q6J("tuiLet",s.lcZ(16,16,n.starwars)))},dependencies:[l.TuiTableDirective,l.TuiTableTbody,l.TuiTableThGroup,l.TuiTableTh,l.TuiTableTd,l.TuiTableTr,l.TuiTableCell,l.TuiTableHead,l.TuiTableThead,l.TuiTableSortPipe,a.$v,a.Q7,r.MuE,p.FC,d.B,o.u5,o.JJ,o.On,r._Hh,g.q,h.g,e.O5,u.TuiValidatorDirective,r.hr9,x.j,T.k,m.TuiDataListWrapperComponent,c.TuiDataListDirective,r.Jyo,f.u,w.O,e.sg,u.TuiLet,c.TuiScrollbar,c.TuiFormatNumberPipe,e.Ov,c.TuiIcon],styles:[".table[_ngcontent-%COMP%]{table-layout:fixed}.textarea[_ngcontent-%COMP%]{min-height:var(--tui-height-l)}.number[_ngcontent-%COMP%]{text-align:right;flex-direction:row-reverse}.first[_ngcontent-%COMP%]{min-width:11.25rem;max-width:11.25rem}.second[_ngcontent-%COMP%]{left:11.25rem}.text[_ngcontent-%COMP%]{vertical-align:top;padding-top:1rem}.border[_ngcontent-%COMP%]{border-left:none}.select[_ngcontent-%COMP%]{width:6.25rem}.scrollbar[_ngcontent-%COMP%]{max-height:18.75rem}"],changeDetection:0}),n})()}}]);