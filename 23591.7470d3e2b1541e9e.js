(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23591],{23591:(t,e,o)=>{o.r(e),o.d(e,{default:()=>m});var n=o(4594),i=o(35548),u=o(26856),s=o(42436),a=o(68018);const c=["withdrawTemplate"],p=["depositTemplate"];function l(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"p"),i._uU(1,"Notifications can be shown with template"),i.qZA(),i.TgZ(2,"p"),i._uU(3," Your balance: "),i.TgZ(4,"span"),i._uU(5),i.ALo(6,"async"),i.ALo(7,"tuiAmount"),i.qZA()(),i.TgZ(8,"button",5),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.withdraw())})),i._uU(9," Withdraw  "),i.TgZ(10,"span"),i._uU(11),i.ALo(12,"async"),i.ALo(13,"tuiAmount"),i.qZA()()}if(2&t){const t=i.oxw();i.xp6(5),i.Oqu(i.lcZ(6,2,i.xi3(7,4,t.money,"RUB"))),i.xp6(6),i.Oqu(i.lcZ(12,7,i.xi3(13,9,100,"RUB")))}}function r(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"p"),i._uU(1," If there are many templates, you can use "),i.TgZ(2,"code"),i._uU(3,"ViewChildren"),i.qZA(),i._uU(4," instead of "),i.TgZ(5,"code"),i._uU(6,"ViewChild"),i.qZA(),i._uU(7,' or set them IDs with "#" (see code of this sample) '),i.qZA(),i.TgZ(8,"p"),i._uU(9," Your balance: "),i.TgZ(10,"span"),i._uU(11),i.ALo(12,"async"),i.ALo(13,"tuiAmount"),i.qZA()(),i.TgZ(14,"button",5),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.deposit())})),i.TgZ(15,"span"),i._uU(16," Add  "),i.TgZ(17,"span"),i._uU(18),i.ALo(19,"async"),i.ALo(20,"tuiAmount"),i.qZA()()()}if(2&t){const t=i.oxw();i.xp6(11),i.Oqu(i.lcZ(12,2,i.xi3(13,4,t.money,"RUB"))),i.xp6(7),i.Oqu(i.lcZ(19,7,i.xi3(20,9,100,"RUB")))}}const m=(()=>{var t;class e{constructor(){this.alerts=(0,i.f3M)(s.TuiAlertService),this.money=1e3}showWithdrawAlert(){this.alerts.open(this.withdrawTemplate||"",{label:"A template sample",status:"warning",autoClose:0}).subscribe()}showDepositAlert(){this.alerts.open(this.depositTemplate||"",{label:"A template sample",status:"success",autoClose:0}).subscribe()}withdraw(){this.money-=100}deposit(){this.money+=100}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(i.Gf(c,5),i.Gf(p,5)),2&t){let t;i.iGM(t=i.CRH())&&(e.withdrawTemplate=t.first),i.iGM(t=i.CRH())&&(e.depositTemplate=t.first)}},standalone:!0,exportAs:"Example2",features:[i.jDz],decls:21,vars:12,consts:[["size","m","tuiButton","","type","button",1,"tui-space_right-3",3,"click"],["size","m","tuiButton","","type","button",3,"click"],["polymorpheus",""],["withdrawTemplate","polymorpheus"],["depositTemplate","polymorpheus"],["appearance","whiteblock","size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"p"),i._uU(1," Your balance: "),i.TgZ(2,"span"),i._uU(3),i.ALo(4,"async"),i.ALo(5,"tuiAmount"),i.qZA()(),i.TgZ(6,"button",0),i.NdJ("click",(function(){return e.showWithdrawAlert()})),i._uU(7," Withdraw\n"),i.qZA(),i.TgZ(8,"button",0),i.NdJ("click",(function(){return e.showDepositAlert()})),i._uU(9," Add\n"),i.qZA(),i.TgZ(10,"p")(11,"button",1),i.NdJ("click",(function(){return e.withdraw()})),i._uU(12," Withdraw  "),i.TgZ(13,"span"),i._uU(14),i.ALo(15,"async"),i.ALo(16,"tuiAmount"),i.qZA()()(),i.YNc(17,l,14,12,"ng-template",2,3,i.W1O),i.YNc(19,r,21,12,"ng-template",2,4,i.W1O)),2&t&&(i.xp6(3),i.Oqu(i.lcZ(4,2,i.xi3(5,4,e.money,"RUB"))),i.xp6(11),i.Oqu(i.lcZ(15,7,i.xi3(16,9,100,"RUB"))))},dependencies:[n.Ov,s.TuiButton,u.TuiAmountPipe,a.GL],encapsulation:2,changeDetection:0}),e})()}}]);