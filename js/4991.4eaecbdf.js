"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[4991],{4991:(e,a,o)=>{o.r(a),o.d(a,{default:()=>H});var r=o(59835),i=o(60499),t=o(61957),l=o(86970),s=(o(80339),o(44858)),d=o(65457),m=o(50977),n=o(82844);const c={class:"main-page",id:""},u={key:0,class:"page-section q-pa-md"},v={class:"container"},p={class:"row items-center q-col-gutter-md"},g={key:0,class:"col-auto"},b=(0,r._)("div",{class:"col col-md-auto"},[(0,r._)("div",{class:"text-h6 text-primary"}," Agregar nuevo ")],-1),f={class:"page-section"},_={class:"container"},S={class:"row q-col-gutter-x-md"},y={class:"col-md-9 col-12 comp-grid"},w={class:"row q-col-gutter-x-md"},h={class:"col-12"},q={class:"row"},U=(0,r._)("div",{class:"col-sm-3 col-12"}," Nombre Movilidad ",-1),k={class:"col-sm-9 col-12"},B={class:"col-12"},M={class:"row"},D=(0,r._)("div",{class:"col-sm-3 col-12"}," Observ Moviidad ",-1),V={class:"col-sm-9 col-12"},x={key:0,class:"text-center q-my-md"},W={props:{pageName:{type:String,default:"movilidad_acciones"},routeName:{type:String,default:"movilidad_accionesadd"},apiPath:{type:String,default:"movilidad_acciones/add"},submitButtonLabel:{type:String,default:"Guardar"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},msgTitle:{type:String,default:"Crear registro"},msgAfterSave:{type:String,default:"Grabar agregado exitosamente"},msgBeforeSave:{type:String,default:""},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},pageData:{type:Object,default:()=>{}}},setup(e,{expose:a}){const o=e,W=(0,s.u)(o.pageName),F=(0,m.q)(),O={nombre_movilidad:"",observ_moviidad:""},Z=(0,i.qj)({...O}),N=(0,r.Fl)((()=>({}))),Q=(0,n.b)({store:W,props:o,formData:Z,rules:N,beforeSubmit:C,afterSubmit:E});function C(){return!0}function E(e){F.flashMsg(o.msgTitle,o.msgAfterSave),Q.setFormDefaultValues(),F.isDialogOpen()?F.closeDialogs():o.redirect&&F.navigateTo("/movilidad_acciones")}const{saving:P,pageReady:A}=(0,i.BK)(Q.state),{submitForm:H,isFieldValid:I,getFieldError:T,mapOptionField:j}=Q.methods;return(0,d.Z)((()=>({title:"Agregar nuevo"}))),a({page:Q}),(a,o)=>{const s=(0,r.up)("q-icon"),d=(0,r.up)("q-btn"),m=(0,r.up)("q-input"),n=(0,r.up)("q-spinner-oval"),W=(0,r.up)("q-card"),F=(0,r.up)("q-form");return(0,r.wg)(),(0,r.iD)("main",c,[(0,i.SU)(A)?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[e.showHeader?((0,r.wg)(),(0,r.iD)("section",u,[(0,r._)("div",v,[(0,r._)("div",p,[e.isSubPage?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",g,[(0,r.Wm)(d,{onClick:o[0]||(o[0]=e=>a.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{name:"arrow_back"})])),_:1})])),b])])])):(0,r.kq)("",!0),(0,r._)("section",f,[(0,r._)("div",_,[(0,r._)("div",S,[(0,r._)("div",y,[(0,r._)("div",null,[(0,r.Wm)(F,{ref:"observer",onSubmit:o[3]||(o[3]=(0,t.iM)((e=>(0,i.SU)(H)()),["prevent"]))},{default:(0,r.w5)((()=>[(0,r.Wm)(W,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,r.w5)((()=>[(0,r._)("div",w,[(0,r._)("div",h,[(0,r._)("div",q,[U,(0,r._)("div",k,[(0,r.Wm)(m,{ref:"ctrlnombre_movilidad",modelValue:(0,i.SU)(Z).nombre_movilidad,"onUpdate:modelValue":o[1]||(o[1]=e=>(0,i.SU)(Z).nombre_movilidad=e),modelModifiers:{trim:!0},label:"Nombre Movilidad",type:"text",placeholder:"Escribir Nombre Movilidad",class:"",error:(0,i.SU)(I)("nombre_movilidad"),"error-message":(0,i.SU)(T)("nombre_movilidad")},null,8,["modelValue","error","error-message"])])])]),(0,r._)("div",B,[(0,r._)("div",M,[D,(0,r._)("div",V,[(0,r.Wm)(m,{ref:"ctrlobserv_moviidad",modelValue:(0,i.SU)(Z).observ_moviidad,"onUpdate:modelValue":o[2]||(o[2]=e=>(0,i.SU)(Z).observ_moviidad=e),modelModifiers:{trim:!0},label:"Observ Moviidad",type:"text",placeholder:"Escribir Observ Moviidad",class:"",error:(0,i.SU)(I)("observ_moviidad"),"error-message":(0,i.SU)(T)("observ_moviidad")},null,8,["modelValue","error","error-message"])])])])]),e.showSubmitButton?((0,r.wg)(),(0,r.iD)("div",x,[(0,r.Wm)(d,{type:"submit",rounded:!1,color:"primary","no-caps":"",unelevated:"","icon-right":"send",loading:(0,i.SU)(P)},{loading:(0,r.w5)((()=>[(0,r.Wm)(n)])),default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,r.kq)("",!0)])),_:1},8,["flat"])])),_:1},512),(0,r.WI)(a.$slots,"default",{submit:(0,i.SU)(H),saving:(0,i.SU)(P)})])])])])])],64)):(0,r.kq)("",!0)])}}};var F=o(68879),O=o(22857),Z=o(8326),N=o(44458),Q=o(66611),C=o(62470),E=o(69984),P=o.n(E);const A=W,H=A;P()(W,"components",{QBtn:F.Z,QIcon:O.Z,QForm:Z.Z,QCard:N.Z,QInput:Q.Z,QSpinnerOval:C.Z})}}]);