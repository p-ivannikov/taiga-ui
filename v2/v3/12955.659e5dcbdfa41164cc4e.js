"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[12955],{12955:(o,i,e)=>{e.r(i),e.d(i,{Image:()=>a,default:()=>a,inputRegex:()=>r});var n=e(40256);const r=/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,a=n.Node.create({name:"image",addOptions:()=>({inline:!1,allowBase64:!1,HTMLAttributes:{}}),inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes:()=>({src:{default:null},alt:{default:null},title:{default:null}}),parseHTML(){return[{tag:this.options.allowBase64?"img[src]":'img[src]:not([src^="data:"])'}]},renderHTML({HTMLAttributes:t}){return["img",(0,n.mergeAttributes)(this.options.HTMLAttributes,t)]},addCommands(){return{setImage:t=>({commands:s})=>s.insertContent({type:this.name,attrs:t})}},addInputRules(){return[(0,n.nodeInputRule)({find:r,type:this.type,getAttributes:t=>{const[,,s,u,l]=t;return{src:u,alt:s,title:l}}})]}})}}]);