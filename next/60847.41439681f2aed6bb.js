(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60847,61386,99503,50517,11820,71674,61505,99781,55904,42709,35402,21769,50023],{10882:(t,i,e)=>{e.d(i,{Fb:()=>l,UR:()=>r,bM:()=>n});var a=e(87882);const r={currency:null,currencyAlign:"right",sign:"negative-only"},n=(0,a.tuiCreateToken)(r);function l(t){return(0,a.tuiProvideOptions)(n,t,r)}},61386:(t,i,e)=>{e.d(i,{E:()=>o});var a=e(20755),r=e(93517),n=e(87882),l=e(17628),s=e(92425),u=e(10882);let o=(()=>{var t;class i{constructor(){this.options=(0,a.f3M)(u.bM),this.format=(0,a.f3M)(l.TUI_NUMBER_FORMAT)}transform(t,i=this.options.currency,e=this.options.currencyAlign){return this.format.pipe((0,s.U)((a=>{const s=(0,r.$v)(t,this.options.sign),u=(0,r.BP)(i),o=(0,l.tuiFormatNumber)(Math.abs(t),{...a,precision:Number.isNaN(a.precision)?2:a.precision}),d=u?.length>1||"right"===e?n.CHAR_NO_BREAK_SPACE:"";return"right"===e?`${s}${o}${d}${u}`:`${s}${u}${d}${o}`})))}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵpipe=a.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),i})()},71674:(t,i,e)=>{e.d(i,{V:()=>s,S:()=>l});var a=e(87882),r=e(20755);let n=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-card"],standalone:!0,features:[r.jDz],decls:0,vars:0,template:function(t,i){},styles:["[tuiCardMedium],[tuiCardLarge]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;position:relative;display:flex;align-items:flex-start;flex-shrink:0;text-decoration:none;overscroll-behavior:contain}[tuiCardMedium][tuiTitle],[tuiCardLarge][tuiTitle],[tuiCardMedium] [tuiTitle]:not([tuiCell] *),[tuiCardLarge] [tuiTitle]:not([tuiCell] *){font-weight:700}[tuiCardMedium] [tuiTitle],[tuiCardLarge] [tuiTitle],[tuiCardMedium] [tuiSubtitle],[tuiCardLarge] [tuiSubtitle]{max-width:100%}[tuiCardMedium]>*,[tuiCardLarge]>*{scrollbar-width:none;-ms-overflow-style:none}[tuiCardMedium]>*::-webkit-scrollbar,[tuiCardLarge]>*::-webkit-scrollbar,[tuiCardMedium]>*::-webkit-scrollbar-thumb,[tuiCardLarge]>*::-webkit-scrollbar-thumb{display:none}[tuiCardMedium]{width:8.75rem;height:8.75rem;flex-direction:column;justify-content:space-between;padding:.75rem;border-radius:var(--tui-radius-l);box-sizing:border-box}[tuiCardMedium][tuiTitle]{padding:.625rem .75rem}[tuiCardMedium] [tuiTitle]{margin:-.125rem 0}[tuiCardMedium] [tuiSubtitle]{color:var(--tui-text-01)}[tuiCardLarge][data-space]{--t-gap: .75rem;--t-radius: var(--tui-radius-l);--t-comp: -.25rem;--t-padding: .75rem;--t-dim: calc(var(--t-padding) + var(--t-comp));font:var(--tui-font-text-m);padding:var(--t-padding);border-radius:var(--t-radius);box-sizing:border-box}[tuiCardLarge][data-space][data-space=normal]{--t-radius: 1.5rem;--t-padding: 1.5rem;--t-gap: 1.5rem}[tuiCardLarge][data-space][data-space=compact]{--t-radius: 1rem;--t-padding: 1.25rem;--t-gap: 1.25rem}[tuiCardLarge][data-space]:not([tuiCell],[tuiHeader]){flex-direction:column;gap:var(--t-gap);align-items:stretch}[tuiCardLarge][data-space]:not([tuiCell],[tuiHeader])>:last-child:not([tuiCell]){margin-top:auto}[tuiCardLarge][data-space][tuiHeader]{padding:var(--t-dim) var(--t-dim) var(--t-dim) var(--t-padding)}[tuiCardLarge][data-space][tuiHeader] [tuiLink]:last-child{margin-right:calc(-1 * var(--t-comp))}[tuiCardLarge][data-space]>[tuiHeader]{margin:var(--t-comp) var(--t-comp) calc(1.5 * var(--t-comp)) 0}[tuiCardLarge][data-space]>[tuiHeader] [tuiLink]:last-child{margin-right:calc(-1 * var(--t-comp))}[tuiCardLarge][data-space] [tuiCell]{width:-webkit-fill-available;width:-moz-available;width:stretch;padding:.5rem;margin:-.5rem -.5rem -.75rem;border-radius:var(--tui-radius-l)}[tuiCardLarge][data-space]>[tuiLink]:last-child{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:var(--t-comp)}\n"],encapsulation:2,changeDetection:0}),i})(),l=(()=>{var t;class i{constructor(){this.nothing=(0,a.tuiWithStyles)(n)}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵdir=r.lG2({type:t,selectors:[["","tuiCardMedium",""]],hostAttrs:["tuiCardMedium",""],standalone:!0}),i})(),s=(()=>{var t;class i{constructor(){this.space="normal",this.nothing=(0,a.tuiWithStyles)(n)}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵdir=r.lG2({type:t,selectors:[["","tuiCardLarge",""]],hostAttrs:["tuiCardLarge",""],hostVars:1,hostBindings:function(t,i){2&t&&r.uIk("data-space",i.space||"normal")},inputs:{space:["tuiCardLarge","space"]},standalone:!0}),i})()},47306:(t,i,e)=>{e.d(i,{B:()=>u});var a=e(87882),r=e(17628),n=e(97733),l=e(20755);let s=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-cell"],decls:0,vars:0,template:function(t,i){},styles:["[tuiCell]{--tui-height: calc(var(--tui-height-s) - .5rem);--t-padding: .125rem 1rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;box-sizing:content-box;isolation:isolate;color:var(--tui-text-01);padding:var(--t-padding);min-height:var(--t-height)}[tuiCell]:disabled{pointer-events:none}[tuiCell] [tuiAccessories]{position:relative;display:flex;max-height:var(--t-height);align-items:center;align-self:stretch}[tuiCell] [tuiCellActions]{position:absolute;right:0;z-index:1;padding-right:inherit}[tuiCell] [tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell] [tuiCellActions] button,[tuiCell] [tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell] [tuiCellActions] button:focus-visible,[tuiCell] [tuiCellActions] a:focus-visible{opacity:1}[tuiCell] [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-02)}[tuiCell] [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:left}[tuiCell] [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:right;align-items:flex-end}[tuiCell] [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell] tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);left:-.625rem}[tuiCell][data-size=s]{--t-height: calc(var(--tui-height-s) - .5rem);--t-padding: .125rem 1rem}[tuiCell][data-size=s] [tuiTitle]{max-height:100%;font:var(--tui-font-text-s-2);gap:0}[tuiCell][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs-s)}[tuiCell][data-size=s]>*:not(:first-child),[tuiCell][data-size=s]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.5rem}[tuiCell][data-size=s]>tui-avatar,[tuiCell][data-size=s]>tui-avatar-stack tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 1.5rem}[tuiCell][data-size=m]{--t-height: calc(var(--tui-height-m) - .75rem);--t-padding: .375rem 1rem}[tuiCell][data-size=m] [tuiTitle]{font:var(--tui-font-text-s-2);gap:.125rem}[tuiCell][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-xs-2)}[tuiCell][data-size=m]>*:not(:first-child),[tuiCell][data-size=m]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.75rem}[tuiCell][data-size=m]>tui-avatar,[tuiCell][data-size=m]>tui-avatar-stack tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2rem}[tuiCell][data-size=l]{--t-height: calc(var(--tui-height-l) - 1rem);--t-padding: .5rem 1rem}[tuiCell][data-size=l]>*:not(:first-child),[tuiCell][data-size=l]>[tuiAccessories]>*:not(:first-child){margin-inline-start:1rem}[tuiCell][data-size=l]>tui-avatar,[tuiCell][data-size=l]>tui-avatar-stack tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2.5rem}[tuiCell]:hover [tuiCellActions]~*{opacity:0}[tuiCell]:hover [tuiCellActions] button,[tuiCell]:hover [tuiCellActions] a{opacity:1}[tuiOption] [tuiCell],tui-primitive-textfield [tuiCell]{padding:0}@media (hover: hover) and (pointer: fine){a[tuiCell]:not([tuiSurface]):hover,button[tuiCell]:not([tuiSurface]):hover{background:var(--tui-clear);cursor:pointer}}\n"],encapsulation:2,changeDetection:0}),i})(),u=(()=>{var t;class i{constructor(){this.size="l",this.nothing=(0,a.tuiWithStyles)(s)}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵdir=l.lG2({type:t,selectors:[["","tuiCell","",5,"ng-template"]],hostAttrs:["tuiCell",""],hostVars:1,hostBindings:function(t,i){2&t&&l.uIk("data-size",i.size||"l")},inputs:{size:["tuiCell","size"]},standalone:!0,features:[l._Bn([(0,n.tuiAvatarOptionsProvider)({size:"s"}),(0,r.tuiButtonOptionsProvider)({size:"s"})])]}),i})()}}]);