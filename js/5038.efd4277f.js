"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[5038],{45038:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var r=a(59835),o=a(60499),i=a(61957),s=a(86970),l=(a(80339),a(65457)),n=a(50977),u=a(29601),d=a(44858);const c={class:"main-page",id:""},g={key:0,class:"page-section q-pa-md"},m={class:"container"},p={class:"row items-center q-col-gutter-md"},f={key:0,class:"col-auto"},v=(0,r._)("div",{class:"col col-md-auto"},[(0,r._)("div",{class:"text-h6 text-primary"}," Editar ")],-1),S={class:"page-section"},y={class:"container"},b={class:"row q-col-gutter-x-md"},w={class:"col-md-9 col-12 comp-grid"},h=(0,r._)("div",{class:"row q-col-gutter-x-md"},null,-1),q={key:0,class:"text-center q-my-md"},_={key:1,style:{"min-height":"200px"},class:"q-pa-sm text-center relative-position"},k={props:{id:[String,Number],pageName:{type:String,default:"estructura_org"},routeName:{type:String,default:"estructura_orgedit"},pagePath:{type:String,default:"estructura_org/edit"},apiPath:{type:String,default:"estructura_org/edit"},submitButtonLabel:{type:String,default:"Grabar"},msgTitle:{type:String,default:"Actualizar registro"},msgBeforeSave:{type:String,default:""},msgAfterSave:{type:String,default:"Registro actualizado con éxito"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1}},setup(e){const t=e,a=(0,d.u)(t.pageName),k=(0,n.q)(),B=Object.assign({},t.pageData),D=(0,o.qj)({...B});function x(e){k.flashMsg(t.msgTitle,t.msgAfterSave),k.isDialogOpen()?k.closeDialogs():t.redirect&&k.navigateTo("/estructura_org")}const W=(0,r.Fl)((()=>({}))),U=(0,u.C)({store:a,props:t,formData:D,rules:W,afterSubmit:x}),{saving:Z,loading:C,pageReady:P}=(0,o.BK)(U.state),{currentRecord:Q}=(0,o.BK)(a.state),{load:z,submitForm:E}=U.methods;return(0,l.Z)((()=>({title:"Editar"}))),(0,r.bv)((()=>{z()})),(t,a)=>{const l=(0,r.up)("q-icon"),n=(0,r.up)("q-btn"),u=(0,r.up)("q-spinner-oval"),d=(0,r.up)("q-form"),k=(0,r.up)("q-card"),B=(0,r.up)("q-inner-loading");return(0,r.wg)(),(0,r.iD)("main",c,[(0,o.SU)(P)?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[e.showHeader?((0,r.wg)(),(0,r.iD)("section",g,[(0,r._)("div",m,[(0,r._)("div",p,[e.isSubPage?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(n,{onClick:a[0]||(a[0]=e=>t.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{name:"arrow_back"})])),_:1})])),v])])])):(0,r.kq)("",!0),(0,r._)("section",S,[(0,r._)("div",y,[(0,r._)("div",b,[(0,r._)("div",w,[(0,r._)("div",null,[(0,r.Wm)(k,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{ref:"observer",onSubmit:a[1]||(a[1]=(0,i.iM)((e=>(0,o.SU)(E)()),["prevent"]))},{default:(0,r.w5)((()=>[h,e.showSubmitButton?((0,r.wg)(),(0,r.iD)("div",q,[(0,r.Wm)(n,{rounded:!1,color:"primary","no-caps":"",unelevated:"",type:"submit","icon-right":"send",loading:(0,o.SU)(Z)},{loading:(0,r.w5)((()=>[(0,r.Wm)(u)])),default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,r.kq)("",!0)])),_:1},512),(0,r.WI)(t.$slots,"default",{submit:(0,o.SU)(E),saving:(0,o.SU)(Z)})])),_:3},8,["flat"])])])])])])],64)):(0,r.kq)("",!0),(0,o.SU)(C)?((0,r.wg)(),(0,r.iD)("div",_,[(0,r.Wm)(B,{color:"primary",label:"Cargando...",showing:""})])):(0,r.kq)("",!0)])}}};var B=a(68879),D=a(22857),x=a(44458),W=a(8326),U=a(62470),Z=a(60854),C=a(69984),P=a.n(C);const Q=k,z=Q;P()(k,"components",{QBtn:B.Z,QIcon:D.Z,QCard:x.Z,QForm:W.Z,QSpinnerOval:U.Z,QInnerLoading:Z.Z})}}]);