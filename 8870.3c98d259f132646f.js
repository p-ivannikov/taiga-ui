(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8870],{8870:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(4594),a=n(35548),i=n(66094),s=n(47167),r=n(90339),c=n(77798),l=n(6017),u=n(68018),p=n(29963),d=n(51160);const h=(()=>{var e;class t{constructor(){this.dialogs=(0,a.f3M)(c.TuiDialogService),this.injector=(0,a.f3M)(a.gxx),this.months$=(0,a.f3M)(c.TUI_MONTHS),this.control=new i.NI(null),this.dialog$=this.dialogs.open(new u.Al(s.TuiMobileCalendarDropdown,a.zs3.create({providers:[{provide:l.TUI_CALENDAR_DATE_STREAM,useValue:(0,r.tuiControlValue)(this.control)}],parent:this.injector})),{size:"fullscreen",closeable:!1,data:{single:!0,min:r.TuiDay.currentLocal()}}),this.date$=(0,p.a)([(0,r.tuiControlValue)(this.control),this.months$]).pipe((0,d.U)((([e,t])=>e?`${t[e.month]} ${e.day}, ${e.year}`:"Choose a date")))}get empty(){return!this.control.value}onClick(){this.dialog$.subscribe((e=>this.control.setValue(e)))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent1",features:[a.jDz],decls:6,vars:7,consts:[[1,"wrapper"],["appearance","secondary","iconLeft","@tui.calendar","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0)(1,"button",1),a.NdJ("click",(function(){return t.onClick()})),a._uU(2," Choose a date "),a.qZA(),a.TgZ(3,"span",2),a._uU(4),a.ALo(5,"async"),a.qZA()()),2&e&&(a.xp6(1),a.Udp("border-radius",100,"%"),a.xp6(2),a.ekj("date_empty",t.empty),a.xp6(1),a.hij(" ",a.lcZ(5,5,t.date$)," "))},dependencies:[c.TuiButton,o.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),t})()}}]);