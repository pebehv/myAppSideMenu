"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4869],{4869:(M,l,s)=>{s.r(l),s.d(l,{CitiesPPageModule:()=>v});var g=s(6814),p=s(95),n=s(5548),u=s(4248),d=s(5861),m=s(7398),t=s(6689),P=s(9862);function h(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"ion-col",4)(1,"ion-card",5),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.presentAlert())}),t._UZ(2,"img",6),t.TgZ(3,"div",7),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()()()}if(2&e){const o=r.$implicit;t.xp6(2),t.MGl("src","assets/img/customer/",o.img,"",t.LSH),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.hij("",o.description," ")}}const C=[{path:"",component:(()=>{var e;class r{constructor(i,a,c){this.http=i,this.toastController=a,this.alertController=c,this.cities=[]}ngOnInit(){this.getCities().subscribe(i=>{console.log("mis datos ",i),this.cities=i})}getCities(){return this.http.get("assets/files/cities.json").pipe((0,m.U)(i=>i.data))}presentTostil(){var i=this;return(0,d.Z)(function*(){(yield i.toastController.create({message:"Ciudad Seleccionada",duration:2e3,position:"bottom"})).present()})()}presentAlert(){var i=this;return(0,d.Z)(function*(){const a=yield i.alertController.create({header:"Borrar ciudad",message:"Se ha borrado la ciudad seleccionada",buttons:["OK"]});yield a.present();let c=yield a.onDidDismiss();console.log("result",c)})()}}return(e=r).\u0275fac=function(i){return new(i||e)(t.Y36(P.eN),t.Y36(n.yF),t.Y36(n.Br))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cities-p"]],decls:7,vars:3,consts:[[3,"translucent"],["color","mycolor"],[3,"fullscreen"],["sizeXs","12","sizeMd","6","sizeLg","6",4,"ngFor","ngForOf"],["sizeXs","12","sizeMd","6","sizeLg","6"],[3,"click"],["alt","",1,"img_size",3,"src"],[1,"card-title"]],template:function(i,a){1&i&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),t._uU(3,"cities_p"),t.qZA()()(),t.TgZ(4,"ion-content",2)(5,"ion-row"),t.YNc(6,h,7,3,"ion-col",3),t.qZA()()),2&i&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngForOf",a.cities))},dependencies:[g.sg,n.PM,n.wI,n.W2,n.Gu,n.Nd,n.wd,n.sr],styles:["ion-toolbar[_ngcontent-%COMP%]{background-color:var(--ion-color-mycolor)}ion-card[_ngcontent-%COMP%]{position:relative;text-align:center;width:100%;height:100%;border-radius:15px}.card-title[_ngcontent-%COMP%]{font-size:23px;font-weight:700;margin-top:9px;margin-bottom:9px}img[_ngcontent-%COMP%]{width:100%;height:400px}ion-col[_ngcontent-%COMP%]{width:100%;height:100%}"]}),r})()}];let f=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(C),u.Bz]}),r})(),v=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,p.u5,n.Pc,f]}),r})()}}]);