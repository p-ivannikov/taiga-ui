(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[12513],{12513:(t,e,n)=>{n.r(e),n.d(e,{IconsModule:()=>pt});var o=n(88692),i=n(69900),c=n(91795),r=n(11693),u=n(64206),s=n(94356),a=n(78129),l=n(20995),p=n(98497),d=n(51927),g=n(27969),m=n(64537),h=n(69676);const f=["tuiIconRedo","tuiIconRefresh","tuiIconRefreshLarge","tuiIconSortUp","tuiIconSortDown","tuiIconUndo"],y=["tuiIconElectron","tuiIconElectronMono","tuiIconCirrus","tuiIconMaestro","tuiIconMaestroMono","tuiIconMastercard","tuiIconMastercardMono","tuiIconMir","tuiIconMirMono","tuiIconVisa","tuiIconVisaMono","tuiIconUnionPay","tuiIconJCB","tuiIconPayPal","tuiIconAmex","tuiIconDinersClub","tuiIconDiscover","tuiIconHumo","tuiIconRuPay","tuiIconUzcard","tuiIconVerve"],I=["tuiIconApplePay","tuiIconGooglePay","tuiIconSamsungPay","tuiIconWorldPay","tuiIconAliPay","tuiIconAmazonPay","tuiIconAndroidPay"],T=(0,s.tuiCreateTokenFromFactory)((()=>(t=>{const{LARGE:e,NORMAL:n}=function(){const t=[],e=[],n=new Set([...y,...I]);for(const[o]of Object.entries(h))n.has(o)||"tuiCoreIcons"===o||"tuiKitIcons"===o||(o.includes("Large")?t.push(o):o.includes("Outline")||e.push(o));return{LARGE:t,NORMAL:e}}();return{"Description and examples":{"Normal / 16px":n.filter((e=>!t(e)&&!f.includes(e))),"Large / 24px":e.filter((e=>!t(e)&&!f.includes(e))),"Payment systems":y,"Payment services":I}}})((0,m.f3M)(a.TUI_SVG_OPTIONS).deprecated)));var v=n(79121),x=n(66596),M=n(34880),b=n(76189),w=n(83074),P=n(62840),Z=n(60404),C=n(43560),A=n(93525),O=n(24580),_=n(42147),U=n(83151),k=n(74970),L=n(13528);let q=(()=>{var t;class e{constructor(t){this.template=t}}return(t=e).ɵfac=function(e){return new(e||t)(m.Y36(m.Rgc))},t.ɵdir=m.lG2({type:t,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"}}),e})();var J=n(77027),N=n(41360),S=n(88964),F=n(84848),V=n(64374),Y=n(68874),G=n(10200),Q=n(20986),z=n(68165),H=n(47305);function E(t,e){1&t&&(m.TgZ(0,"p",9),m._uU(1," Nothing found "),m.qZA())}const $=function(){return{isIntersecting:!1}},R=function(t,e,n,o){return{icon:t,group:e,copyPath:n,entry:o}};function B(t,e){if(1&t&&m.GkF(0,10),2&t){const t=e.$implicit,n=m.oxw(2).$implicit,o=m.oxw();m.Q6J("ngTemplateOutlet",(null==o.iconGroup?null:o.iconGroup.template)||null)("ngTemplateOutletContext",m.l5B(3,R,t,n,o.copyPath,m.DdM(2,$)))}}function D(t,e){if(1&t&&(m.ynx(0),m.TgZ(1,"div",4)(2,"h2",0),m._uU(3),m.qZA(),m.TgZ(4,"tui-badge",5),m._uU(5),m.qZA()(),m.YNc(6,E,2,0,"p",6),m.TgZ(7,"div",7),m.YNc(8,B,1,8,"ng-container",8),m.qZA(),m.BQk()),2&t){const t=e.ngIf,n=m.oxw().$implicit,o=m.oxw();m.xp6(3),m.hij(" ",n," "),m.xp6(1),m.Q6J("appearance",t.length?"success":"error"),m.xp6(1),m.hij(" ",t.length.toString()," "),m.xp6(1),m.Q6J("ngIf",!t.length),m.xp6(1),m.Udp("--tui-text-01-night",o.color)("--tui-text-01",o.color),m.xp6(1),m.Q6J("ngForOf",t)}}function j(t,e){if(1&t&&(m.ynx(0),m.YNc(1,D,9,9,"ng-container",3),m.ALo(2,"tuiFilter"),m.ALo(3,"async"),m.BQk()),2&t){const t=e.$implicit,n=m.oxw();let o;m.xp6(1),m.Q6J("ngIf",m.Dn7(2,1,n.icons[t],n.matcher,null!==(o=m.lcZ(3,5,n.search$))&&void 0!==o?o:""))}}const K=["*"];let W,X,tt=(()=>{var t;class e{constructor(t,e,n,o,c){this.clipboard=t,this.alerts=e,this.route=n,this.router=o,this.destroy$=c,this.icons={},this.color=null,this.matcher=s.TUI_DEFAULT_MATCHER,this.control=new i.NI(""),this.search$=this.route.queryParams.pipe((0,g.U)((t=>{var e;return null!==(e=t.search)&&void 0!==e?e:""})),(0,_.x)()),this.copyPath=t=>{this.clipboard.copy(t),this.alerts.open(`The name ${t} copied`,{status:"success"}).subscribe()}}ngOnInit(){var t;this.control.patchValue(null!==(t=this.route.snapshot.queryParams.search)&&void 0!==t?t:""),this.control.valueChanges.pipe((0,U.b)(500),(0,g.U)((t=>t||"")),(0,k.h)((t=>t.length>2||0===t.length)),(0,L.R)(this.destroy$)).subscribe((t=>{this.router.navigate([],{queryParams:{search:t}})}))}}return(t=e).ɵfac=function(e){return new(e||t)(m.Y36(O.TU),m.Y36(a.TuiAlertService),m.Y36(c.gz),m.Y36(c.F0),m.Y36(s.TuiDestroyService,2))},t.ɵcmp=m.Xpm({type:t,selectors:[["icons-group"]],contentQueries:function(t,e,n){if(1&t&&m.Suo(n,q,5),2&t){let t;m.iGM(t=m.CRH())&&(e.iconGroup=t.first)}},inputs:{icons:"icons",color:"color"},features:[m._Bn([s.TuiDestroyService])],ngContentSelectors:K,decls:7,vars:6,consts:[[1,"title"],["tuiAutoFocus","","tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"formControl","tuiTextfieldCleaner","tuiTextfieldLabelOutside"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"header-group"],["size","m",1,"badge",3,"appearance"],["class","nothing",4,"ngIf"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[1,"nothing"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(m.F$t(),m.TgZ(0,"h2",0),m._uU(1,"Search by name"),m.qZA(),m.TgZ(2,"tui-input",1),m._uU(3," Input icon name to highlight\n"),m.qZA(),m.Hsn(4),m.YNc(5,j,4,7,"ng-container",2),m.ALo(6,"tuiKeys")),2&t&&(m.xp6(2),m.Q6J("formControl",e.control)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),m.xp6(3),m.Q6J("ngForOf",m.lcZ(6,4,e.icons)))},dependencies:[o.sg,o.O5,o.tP,J.K,N.w,S.z,F.bZ,V.b,Y.x,G.s,i.JJ,i.oH,Q.k,o.Ov,z.R,H.S],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem;justify-content:center}.nothing[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem;justify-content:center}"],changeDetection:0}),e})(),et=t=>t;function nt(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"button",11),m.NdJ("click",(function(){m.CHM(t);const e=m.oxw(),n=e.icon,o=e.copyPath;return m.KtG(o(n))})),m.qZA()}if(2&t){const t=m.oxw().icon;m.Q6J("icon",t),m.uIk("aria-label",t)}}function ot(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"div",9),m.NdJ("waIntersectionObservee",(function(e){const n=m.CHM(t).entry,o=m.oxw(3);return m.KtG(n.isIntersecting=n.isIntersecting||o.onIntersection(e))})),m.YNc(1,nt,1,2,"button",10),m.qZA()}if(2&t){const t=e.entry;m.xp6(1),m.Q6J("ngIf",t.isIntersecting)}}function it(t,e){if(1&t&&(m.TgZ(0,"tui-notification"),m._uU(1," Open source theme for Taiga UI uses processed "),m.TgZ(2,"a",4),m._uU(3," Feather Icons "),m.qZA(),m._uU(4," as its icon pack with some custom made icons. "),m.qZA(),m.TgZ(5,"p"),m._uU(6," These icons can be used by name in "),m.TgZ(7,"a",5),m._uU(8," Svg "),m.qZA(),m._uU(9," component and all Taiga UI component accepting icons as input. If you use unsafe icons or inline SVG with linear gradient you need to provide "),m.TgZ(10,"a",6),m._uU(11," TUI_SANITIZER "),m.qZA(),m._uU(12," token, which is responsible for removing malicious code from the svg. "),m.qZA(),m.TgZ(13,"icons-group",7),m.YNc(14,ot,2,1,"ng-template",8),m.qZA()),2&t){const t=m.oxw().$implicit,e=m.oxw();m.xp6(13),m.Q6J("icons",e.icons[t])}}function ct(t,e){if(1&t&&m.YNc(0,it,15,1,"ng-template",3),2&t){const t=e.$implicit;m.Q6J("pageTab",t)}}function rt(t,e){1&t&&m._uU(0," SVG image code, link to a file, link to a segment or icon name. If you use name or segment, set icon size with CSS ")}function ut(t,e){1&t&&m._uU(0," CustomEvent of loading error ")}function st(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"div",12)(1,"tui-svg",13),m.NdJ("tui-icon-error",(function(e){m.CHM(t);const n=m.MAs(5);return m.KtG(n.emitEvent(e))})),m.qZA()(),m.TgZ(2,"tui-doc-documentation"),m.YNc(3,rt,1,0,"ng-template",14),m.NdJ("documentationPropertyValueChange",(function(e){m.CHM(t);const n=m.oxw();return m.KtG(n.icon=e)})),m.YNc(4,ut,1,0,"ng-template",15,16,m.W1O),m.qZA(),m.TgZ(6,"ol",17)(7,"li")(8,"p"),m._uU(9," Import "),m.TgZ(10,"code"),m._uU(11,"TuiSvgModule"),m.qZA(),m._uU(12," into a module where you want to use our component "),m.qZA(),m._UZ(13,"tui-doc-code",18),m.qZA(),m.TgZ(14,"li")(15,"p"),m._uU(16,"Add to the template:"),m.qZA(),m._UZ(17,"tui-doc-code",19),m.qZA()()}if(2&t){const t=m.oxw();m.xp6(1),m.Q6J("src",t.icon),m.xp6(2),m.Q6J("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon),m.xp6(10),m.Q6J("code",t.exampleModule),m.xp6(4),m.Q6J("code",t.exampleHtml)}}let at=(()=>{var t;class e{constructor(t,e){this.icons=t,this.mode=e,this.keys=Object.keys(this.icons),this.exampleModule=n.e(33309).then(n.t.bind(n,33309,17)),this.exampleHtml=n.e(8019).then(n.t.bind(n,8019,17)),this.iconVariants=["https://ng-web-apis.github.io/dist/assets/images/web-api.svg","tuiIconHelpCircle",'<svg xmlns="http://www.w3.org/2000/svg"\n             width="24px"\n             height="24px"\n             viewBox="0 0 24 24">\n            <path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n                c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n                s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n        </svg>',(0,p.L)(W||(W=et`/images/ts.svg#ts`)),(0,p.L)(X||(X=et`/images/undefined.svg`))],this.icon=this.iconVariants[0],this.mode$=this.mode.change$.pipe((0,d.O)(null),(0,g.U)((()=>this.mode.mode||"onLight")))}onIntersection(t){var e,n;return null!==(e=null===(n=t[t.length-1])||void 0===n?void 0:n.isIntersecting)&&void 0!==e&&e}}return(t=e).ɵfac=function(e){return new(e||t)(m.Y36(T),m.Y36(a.TuiModeDirective))},t.ɵcmp=m.Xpm({type:t,selectors:[["icons"]],decls:3,vars:1,consts:[["header","Icons"],[4,"ngFor","ngForOf"],["pageTab","Component"],[3,"pageTab"],["href","https://feathericons.com/","rel","noreferrer","target","_blank","tuiLink",""],["routerLink","/icons/overview","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["waIntersectionObserver","","waIntersectionThreshold","0.5",3,"icons"],["iconGroup",""],[1,"icon-place",3,"waIntersectionObservee"],["appearance","icon","size","m","title","Copy","tuiIconButton","","type","button","class","icon",3,"icon","click",4,"ngIf"],["appearance","icon","size","m","title","Copy","tuiIconButton","","type","button",1,"icon",3,"icon","click"],[1,"b-full-width"],[3,"src","tui-icon-error"],["documentationPropertyMode","input","documentationPropertyName","src","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","tui-icon-error","documentationPropertyType","CustomEvent<TuiIconError>"],["documentationPropertyIconErrorChange","documentationProperty"],[1,"b-demo-steps","tui-space_top-12"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,ct,1,1,null,1),m.YNc(2,st,18,5,"ng-template",2),m.qZA()),2&t&&(m.xp6(1),m.Q6J("ngForOf",e.keys))},dependencies:[o.sg,o.O5,v.L,x.V,M.P,b.v,w.c,P.z,Z.B,C.q,A.n,tt,q,c.rH,r.Z7,r.AY],styles:[".icon-place[_ngcontent-%COMP%]{min-width:4.25rem;min-height:4.25rem;display:flex;align-items:center;justify-content:center;padding:.125rem}.icon[_ngcontent-%COMP%]{transition:all .5s ease-in;border:1px solid var(--tui-base-03);box-shadow:0 .05rem .5rem #3333;will-change:transform,box-shadow;border-radius:.625rem}.icon[_ngcontent-%COMP%]:hover{transform:scale(1.5);background:var(--tui-base-01);z-index:1}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]:hover{transition:.5s}.icon[_ngcontent-%COMP%]:not(.t-appearance)     [tuiWrapper][data-appearance=icon]{opacity:1!important}"],changeDetection:0}),e})(),lt=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=m.oAB({type:t}),t.ɵinj=m.cJS({imports:[o.ez,l.TuiInputModule,s.TuiKeysPipeModule,s.TuiFilterPipeModule,a.TuiHintModule,a.TuiTextfieldControllerModule,i.UX,s.TuiLetModule,s.TuiAutoFocusModule]}),e})(),pt=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=m.oAB({type:t}),t.ɵinj=m.cJS({imports:[o.ez,i.u5,a.TuiNotificationModule,a.TuiLinkModule,a.TuiSvgModule,a.TuiButtonModule,u.fV,lt,c.Bz.forChild((0,u.Ve)(at)),l.TuiCheckboxLabeledModule,s.TuiActiveZoneModule,r.$v]}),e})()}}]);