"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[3711],{13711:(e,a,l)=>{l.r(a),l.d(a,{default:()=>G});var t=l(59835),o=l(60499),r=l(61957),s=l(86970),i=l(80339),d=l(44858),n=l(65457),c=l(50977),u=l(82844);const m={class:"main-page",id:""},p={key:0,class:"page-section q-pa-md"},g={class:"container"},f={class:"row items-center q-col-gutter-md"},S={key:0,class:"col-auto"},v=(0,t._)("div",{class:"col col-md-auto"},[(0,t._)("div",{class:"text-h6 text-primary"}," Agregar nuevo ")],-1),_={class:"page-section"},b={class:"container"},w={class:"row q-col-gutter-x-md"},y={class:"col-md-9 col-12 comp-grid"},U={class:"row q-col-gutter-x-md"},h={class:"col-12"},q={class:"row"},k=(0,t._)("div",{class:"col-sm-3 col-12"}," Dependencia ",-1),D={class:"col-sm-9 col-12"},V={class:"col-12"},B={class:"row"},W=(0,t._)("div",{class:"col-sm-3 col-12"}," Detalle ",-1),x={class:"col-sm-9 col-12"},Z={class:"col-12"},F={class:"row"},Q=(0,t._)("div",{class:"col-sm-3 col-12"}," Sigla ",-1),C={class:"col-sm-9 col-12"},E={key:0,class:"text-center q-my-md"},M={props:{pageName:{type:String,default:"entidad"},routeName:{type:String,default:"entidadadd"},apiPath:{type:String,default:"entidad/add"},submitButtonLabel:{type:String,default:"Guardar"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},msgTitle:{type:String,default:"Crear registro"},msgAfterSave:{type:String,default:"Grabar agregado exitosamente"},msgBeforeSave:{type:String,default:""},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},pageData:{type:Object,default:()=>{}}},setup(e,{expose:a}){const l=e,M=(0,d.u)(l.pageName),P=(0,c.q)(),A={dependencia:"",detalle:"",sigla:""},O=(0,o.qj)({...A}),H=(0,t.Fl)((()=>({dependencia:{numeric:i.uR}}))),I=(0,u.b)({store:M,props:l,formData:O,rules:H,beforeSubmit:L,afterSubmit:N});function L(){return!0}function N(e){P.flashMsg(l.msgTitle,l.msgAfterSave),I.setFormDefaultValues(),P.isDialogOpen()?P.closeDialogs():l.redirect&&P.navigateTo("/entidad")}const{saving:T,pageReady:j}=(0,o.BK)(I.state),{submitForm:z,isFieldValid:G,getFieldError:R,mapOptionField:$}=I.methods;return(0,n.Z)((()=>({title:"Agregar nuevo"}))),a({page:I}),(a,l)=>{const i=(0,t.up)("q-icon"),d=(0,t.up)("q-btn"),n=(0,t.up)("q-select"),c=(0,t.up)("api-data-source"),u=(0,t.up)("q-input"),M=(0,t.up)("q-spinner-oval"),P=(0,t.up)("q-card"),A=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("main",m,[(0,o.SU)(j)?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[e.showHeader?((0,t.wg)(),(0,t.iD)("section",p,[(0,t._)("div",g,[(0,t._)("div",f,[e.isSubPage?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",S,[(0,t.Wm)(d,{onClick:l[0]||(l[0]=e=>a.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{name:"arrow_back"})])),_:1})])),v])])])):(0,t.kq)("",!0),(0,t._)("section",_,[(0,t._)("div",b,[(0,t._)("div",w,[(0,t._)("div",y,[(0,t._)("div",null,[(0,t.Wm)(A,{ref:"observer",onSubmit:l[5]||(l[5]=(0,r.iM)((e=>(0,o.SU)(z)()),["prevent"]))},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,t.w5)((()=>[(0,t._)("div",U,[(0,t._)("div",h,[(0,t._)("div",q,[k,(0,t._)("div",D,[(0,t.Wm)(c,{onLoaded:l[2]||(l[2]=e=>(0,o.SU)($)(e,"dependencia")),"api-path":"components_data/dependencia_option_list"},{default:(0,t.w5)((e=>[(0,t.Wm)(n,{loading:e.loading,ref:"ctrldependencia","emit-value":"","map-options":"",modelValue:(0,o.SU)(O).dependencia,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,o.SU)(O).dependencia=e),options:e.response,label:"Dependencia",error:(0,o.SU)(G)("dependencia"),"error-message":(0,o.SU)(R)("dependencia")},null,8,["loading","modelValue","options","error","error-message"])])),_:1})])])]),(0,t._)("div",V,[(0,t._)("div",B,[W,(0,t._)("div",x,[(0,t.Wm)(u,{ref:"ctrldetalle",modelValue:(0,o.SU)(O).detalle,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,o.SU)(O).detalle=e),modelModifiers:{trim:!0},label:"Detalle",type:"text",placeholder:"Escribir Detalle",class:"",error:(0,o.SU)(G)("detalle"),"error-message":(0,o.SU)(R)("detalle")},null,8,["modelValue","error","error-message"])])])]),(0,t._)("div",Z,[(0,t._)("div",F,[Q,(0,t._)("div",C,[(0,t.Wm)(u,{ref:"ctrlsigla",modelValue:(0,o.SU)(O).sigla,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,o.SU)(O).sigla=e),modelModifiers:{trim:!0},label:"Sigla",type:"text",placeholder:"Escribir Sigla",class:"",error:(0,o.SU)(G)("sigla"),"error-message":(0,o.SU)(R)("sigla")},null,8,["modelValue","error","error-message"])])])])]),e.showSubmitButton?((0,t.wg)(),(0,t.iD)("div",E,[(0,t.Wm)(d,{type:"submit",rounded:!1,color:"primary","no-caps":"",unelevated:"","icon-right":"send",loading:(0,o.SU)(T)},{loading:(0,t.w5)((()=>[(0,t.Wm)(M)])),default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,t.kq)("",!0)])),_:1},8,["flat"])])),_:1},512),(0,t.WI)(a.$slots,"default",{submit:(0,o.SU)(z),saving:(0,o.SU)(T)})])])])])])],64)):(0,t.kq)("",!0)])}}};var P=l(68879),A=l(22857),O=l(8326),H=l(44458),I=l(32259),L=l(66611),N=l(62470),T=l(69984),j=l.n(T);const z=M,G=z;j()(M,"components",{QBtn:P.Z,QIcon:A.Z,QForm:O.Z,QCard:H.Z,QSelect:I.Z,QInput:L.Z,QSpinnerOval:N.Z})}}]);