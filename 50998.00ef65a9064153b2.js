(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[50998],{50998:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var n=i(35548),c=i(66094),o=i(90339),p=i(77798),u=i(6017);function a(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"tui-chip",5),n._uU(1),n.TgZ(2,"input",6),n.NdJ("ngModelChange",(function(t){const i=n.CHM(e).$implicit,c=n.oxw();return n.KtG(c.checked[i]=t)})),n.qZA()()}if(2&e){const e=t.$implicit,i=n.oxw();n.xp6(1),n.hij(" Checkbox ",e+1," "),n.xp6(1),n.Q6J("ngModel",i.checked[e])}}function l(e,t){if(1&e&&(n.TgZ(0,"tui-chip",5),n._uU(1),n._UZ(2,"input",7),n.qZA()),2&e){const e=t.$implicit;n.xp6(1),n.hij(" Radio ",e+1," "),n.xp6(1),n.Q6J("value",e)}}function s(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"label",8)(1,"input",9),n.NdJ("ngModelChange",(function(t){const i=n.CHM(e).$implicit,c=n.oxw();return n.KtG(c.checked[i]=t)})),n.qZA(),n._uU(2),n.qZA()}if(2&e){const e=t.$implicit,i=n.oxw();n.xp6(1),n.Q6J("ngModel",i.checked[e]),n.xp6(1),n.hij(" Label ",e+1," ")}}function h(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"label",10)(1,"input",11),n.NdJ("ngModelChange",(function(t){const i=n.CHM(e).$implicit,c=n.oxw();return n.KtG(c.checked[i]=t)})),n.qZA(),n._uU(2),n.qZA()}if(2&e){const e=t.$implicit,i=n.oxw();n.Q6J("appearance",i.checked[e]?"accent":"neutral"),n.xp6(1),n.Q6J("ngModel",i.checked[e]),n.xp6(1),n.hij(" Label ",e+1," ")}}function g(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"button",12),n.NdJ("click",(function(){const t=n.CHM(e).$implicit,i=n.oxw();return n.KtG(i.onChip(t))})),n._uU(1),n.TgZ(2,"button",13),n.NdJ("click.stop",(function(){const t=n.CHM(e).$implicit,i=n.oxw();return n.KtG(i.onX(t))})),n._uU(3," Remove "),n.qZA()()}if(2&e){const e=t.$implicit;n.xp6(1),n.hij(" Button ",e+1," ")}}function r(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"tui-chip",5),n._uU(1),n.TgZ(2,"input",14),n.NdJ("ngModelChange",(function(t){const i=n.CHM(e).$implicit,c=n.oxw();return n.KtG(c.values[i]=t)})),n.qZA()()}if(2&e){const e=t.$implicit,i=n.oxw();n.Udp("color","transparent"),n.xp6(1),n.hij(" ",i.values[e]," "),n.xp6(1),n.Q6J("ngModel",i.values[e])}}const d=(()=>{var e;class t{constructor(){this.alerts=(0,n.f3M)(p.TuiAlertService),this.checked=[!0,!1,!0],this.values=["test","Some text","WOW!"]}onChip(e){this.alerts.open(`Clicked chip ${e+1}`).subscribe()}onX(e){this.alerts.open(`Removed chip ${e+1}`,{status:"error"}).subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=n.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent3",features:[n.jDz],decls:24,vars:6,consts:[["appearance","",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["appearance","whiteblock","tuiChip","",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["tuiChip","",3,"appearance",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["tuiChip","",3,"click",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["appearance","",3,"color",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["appearance",""],["appearance","whiteblock","tuiChip","","type","checkbox",3,"ngModel","ngModelChange"],["appearance","whiteblock","name","radio","tuiChip","","type","radio",3,"value"],["appearance","whiteblock","tuiChip",""],["tuiCheckbox","","type","checkbox",3,"ngModel","ngModelChange"],["tuiChip","",3,"appearance"],["hidden","","type","checkbox",3,"ngModel","ngModelChange"],["tuiChip","",3,"click"],["iconLeft","@tui.x","tuiIconButton","",3,"click.stop"],["tuiChip","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(n.TgZ(0,"h3"),n._uU(1,"Checkbox"),n.qZA(),n.TgZ(2,"section"),n.YNc(3,a,3,2,"tui-chip",0),n.qZA(),n.TgZ(4,"h3"),n._uU(5,"Radio"),n.qZA(),n.TgZ(6,"section"),n.YNc(7,l,3,2,"tui-chip",0),n.qZA(),n.TgZ(8,"h3"),n._uU(9,"Label whiteblock"),n.qZA(),n.TgZ(10,"section"),n.YNc(11,s,3,2,"label",1),n.qZA(),n.TgZ(12,"h3"),n._uU(13,"Label accent"),n.qZA(),n.TgZ(14,"section"),n.YNc(15,h,3,3,"label",2),n.qZA(),n.TgZ(16,"h3"),n._uU(17,"Button"),n.qZA(),n.TgZ(18,"section"),n.YNc(19,g,4,1,"button",3),n.qZA(),n.TgZ(20,"h3"),n._uU(21,"Input"),n.qZA(),n.TgZ(22,"section"),n.YNc(23,r,3,4,"tui-chip",4),n.qZA()),2&e&&(n.xp6(3),n.Q6J("tuiRepeatTimesOf",t.checked.length),n.xp6(4),n.Q6J("tuiRepeatTimesOf",3),n.xp6(4),n.Q6J("tuiRepeatTimesOf",t.checked.length),n.xp6(4),n.Q6J("tuiRepeatTimesOf",t.checked.length),n.xp6(4),n.Q6J("tuiRepeatTimesOf",3),n.xp6(4),n.Q6J("tuiRepeatTimesOf",t.values.length))},dependencies:[u.TuiChip,o.TuiRepeatTimes,c.u5,c.Fj,c.Wl,c.JJ,c.On,p.TuiButton,u.TuiCheckbox],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}h3[_ngcontent-%COMP%]{margin:0}section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}"],changeDetection:0}),t})()}}]);