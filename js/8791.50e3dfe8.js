"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[8791],{28791:(e,i,t)=>{t.r(i),t.d(i,{default:()=>K});var a=t(59835),r=t(60499),l=t(61957),s=t(86970),o=t(80339),c=t(65457),d=t(50977),n=t(29601),m=t(44858);const u={class:"main-page",id:""},v={key:0,class:"page-section q-pa-md"},p={class:"container"},g={class:"row items-center q-col-gutter-md"},b={key:0,class:"col-auto"},f=(0,a._)("div",{class:"col col-md-auto"},[(0,a._)("div",{class:"text-h6 text-primary"}," Editar ")],-1),S={class:"page-section"},y={class:"container"},w={class:"row q-col-gutter-x-md"},_={class:"col-md-9 col-12 comp-grid"},h={class:"row q-col-gutter-x-md"},q={class:"col-12"},U={class:"row"},k=(0,a._)("div",{class:"col-sm-3 col-12"}," Idestcivil * ",-1),B={class:"col-sm-9 col-12"},V={class:"col-12"},W={class:"row"},x=(0,a._)("div",{class:"col-sm-3 col-12"}," Nombrestciv ",-1),D={class:"col-sm-9 col-12"},E={class:"col-12"},Z={class:"row"},A=(0,a._)("div",{class:"col-sm-3 col-12"}," Abrevciv ",-1),C={class:"col-sm-9 col-12"},I={key:0,class:"text-center q-my-md"},N={key:1,style:{"min-height":"200px"},class:"q-pa-sm text-center relative-position"},Q={props:{id:[String,Number],pageName:{type:String,default:"estadocivil"},routeName:{type:String,default:"estadociviledit"},pagePath:{type:String,default:"estadocivil/edit"},apiPath:{type:String,default:"estadocivil/edit"},submitButtonLabel:{type:String,default:"Actualizar"},msgTitle:{type:String,default:"Actualizar registro"},msgBeforeSave:{type:String,default:""},msgAfterSave:{type:String,default:"Registro actualizado con éxito"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1}},setup(e){const i=e,t=(0,m.u)(i.pageName),Q=(0,d.q)(),M=Object.assign({idestcivil:"",nombrestciv:"",abrevciv:""},i.pageData),P=(0,r.qj)({...M});function z(e){Q.flashMsg(i.msgTitle,i.msgAfterSave),Q.isDialogOpen()?Q.closeDialogs():i.redirect&&Q.navigateTo("/estadocivil")}const F=(0,a.Fl)((()=>({idestcivil:{required:o.C1,numeric:o.uR}}))),R=(0,n.C)({store:t,props:i,formData:P,rules:F,afterSubmit:z}),{saving:H,loading:L,pageReady:O}=(0,r.BK)(R.state),{currentRecord:T}=(0,r.BK)(t.state),{load:j,submitForm:K,isFieldValid:$,getFieldError:Y}=R.methods;return(0,c.Z)((()=>({title:"Editar"}))),(0,a.bv)((()=>{j()})),(i,t)=>{const o=(0,a.up)("q-icon"),c=(0,a.up)("q-btn"),d=(0,a.up)("q-input"),n=(0,a.up)("q-spinner-oval"),m=(0,a.up)("q-form"),Q=(0,a.up)("q-card"),M=(0,a.up)("q-inner-loading");return(0,a.wg)(),(0,a.iD)("main",u,[(0,r.SU)(O)?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.showHeader?((0,a.wg)(),(0,a.iD)("section",v,[(0,a._)("div",p,[(0,a._)("div",g,[e.isSubPage?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(c,{onClick:t[0]||(t[0]=e=>i.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{name:"arrow_back"})])),_:1})])),f])])])):(0,a.kq)("",!0),(0,a._)("section",S,[(0,a._)("div",y,[(0,a._)("div",w,[(0,a._)("div",_,[(0,a._)("div",null,[(0,a.Wm)(Q,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{ref:"observer",onSubmit:t[4]||(t[4]=(0,l.iM)((e=>(0,r.SU)(K)()),["prevent"]))},{default:(0,a.w5)((()=>[(0,a._)("div",h,[(0,a._)("div",q,[(0,a._)("div",U,[k,(0,a._)("div",B,[(0,a.Wm)(d,{ref:"ctrlidestcivil",modelValue:(0,r.SU)(P).idestcivil,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,r.SU)(P).idestcivil=e),modelModifiers:{trim:!0},label:"Idestcivil",type:"number",placeholder:"Escribir Idestcivil",step:"any",class:"",error:(0,r.SU)($)("idestcivil"),"error-message":(0,r.SU)(Y)("idestcivil")},null,8,["modelValue","error","error-message"])])])]),(0,a._)("div",V,[(0,a._)("div",W,[x,(0,a._)("div",D,[(0,a.Wm)(d,{ref:"ctrlnombrestciv",modelValue:(0,r.SU)(P).nombrestciv,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,r.SU)(P).nombrestciv=e),modelModifiers:{trim:!0},label:"Nombrestciv",type:"text",placeholder:"Escribir Nombrestciv",class:"",error:(0,r.SU)($)("nombrestciv"),"error-message":(0,r.SU)(Y)("nombrestciv")},null,8,["modelValue","error","error-message"])])])]),(0,a._)("div",E,[(0,a._)("div",Z,[A,(0,a._)("div",C,[(0,a.Wm)(d,{ref:"ctrlabrevciv",modelValue:(0,r.SU)(P).abrevciv,"onUpdate:modelValue":t[3]||(t[3]=e=>(0,r.SU)(P).abrevciv=e),modelModifiers:{trim:!0},label:"Abrevciv",type:"text",placeholder:"Escribir Abrevciv",class:"",error:(0,r.SU)($)("abrevciv"),"error-message":(0,r.SU)(Y)("abrevciv")},null,8,["modelValue","error","error-message"])])])])]),e.showSubmitButton?((0,a.wg)(),(0,a.iD)("div",I,[(0,a.Wm)(c,{rounded:!1,color:"primary","no-caps":"",unelevated:"",type:"submit","icon-right":"send",loading:(0,r.SU)(H)},{loading:(0,a.w5)((()=>[(0,a.Wm)(n)])),default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,a.kq)("",!0)])),_:1},512),(0,a.WI)(i.$slots,"default",{submit:(0,r.SU)(K),saving:(0,r.SU)(H)})])),_:3},8,["flat"])])])])])])],64)):(0,a.kq)("",!0),(0,r.SU)(L)?((0,a.wg)(),(0,a.iD)("div",N,[(0,a.Wm)(M,{color:"primary",label:"Cargando...",showing:""})])):(0,a.kq)("",!0)])}}};var M=t(68879),P=t(22857),z=t(44458),F=t(8326),R=t(66611),H=t(62470),L=t(60854),O=t(69984),T=t.n(O);const j=Q,K=j;T()(Q,"components",{QBtn:M.Z,QIcon:P.Z,QCard:z.Z,QForm:F.Z,QInput:R.Z,QSpinnerOval:H.Z,QInnerLoading:L.Z})}}]);