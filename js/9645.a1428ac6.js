"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[9645],{69645:(e,o,r)=>{r.r(o),r.d(o,{default:()=>K});var a=r(59835),l=r(60499),s=r(61957),i=r(86970),t=r(80339),d=r(44858),c=r(65457),n=r(50977),g=r(82844);const m={class:"main-page",id:""},u={key:0,class:"page-section q-pa-md"},f={class:"container"},p={class:"row items-center q-col-gutter-md"},v={key:0,class:"col-auto"},S=(0,a._)("div",{class:"col col-md-auto"},[(0,a._)("div",{class:"text-h6 text-primary"}," Agregar nuevo ")],-1),_={class:"page-section"},b={class:"container"},y={class:"row q-col-gutter-x-md"},w={class:"col-md-9 col-12 comp-grid"},U={class:"row q-col-gutter-x-md"},h={class:"col-12"},q={class:"row"},V=(0,a._)("div",{class:"col-sm-3 col-12"}," Idfg * ",-1),k={class:"col-sm-9 col-12"},D={class:"col-12"},B={class:"row"},W=(0,a._)("div",{class:"col-sm-3 col-12"}," Valorfg ",-1),x={class:"col-sm-9 col-12"},C={class:"col-12"},E={class:"row"},F=(0,a._)("div",{class:"col-sm-3 col-12"}," Descripciofg ",-1),M={class:"col-sm-9 col-12"},Z={class:"col-12"},I={class:"row"},Q=(0,a._)("div",{class:"col-sm-3 col-12"}," Codgestion ",-1),P={class:"col-sm-9 col-12"},A={key:0,class:"text-center q-my-md"},O={props:{pageName:{type:String,default:"formacion_guia"},routeName:{type:String,default:"formacion_guiaadd"},apiPath:{type:String,default:"formacion_guia/add"},submitButtonLabel:{type:String,default:"Guardar"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},msgTitle:{type:String,default:"Crear registro"},msgAfterSave:{type:String,default:"Grabar agregado exitosamente"},msgBeforeSave:{type:String,default:""},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},pageData:{type:Object,default:()=>{}}},setup(e,{expose:o}){const r=e,O=(0,d.u)(r.pageName),H=(0,n.q)(),N={idfg:"",valorfg:"",descripciofg:"",codgestion:""},R=(0,l.qj)({...N}),T=(0,a.Fl)((()=>({idfg:{required:t.C1,numeric:t.uR},valorfg:{numeric:t.uR}}))),j=(0,g.b)({store:O,props:r,formData:R,rules:T,beforeSubmit:z,afterSubmit:G});function z(){return!0}function G(e){H.flashMsg(r.msgTitle,r.msgAfterSave),j.setFormDefaultValues(),H.isDialogOpen()?H.closeDialogs():r.redirect&&H.navigateTo("/formacion_guia")}const{saving:L,pageReady:$}=(0,l.BK)(j.state),{submitForm:K,isFieldValid:Y,getFieldError:J,mapOptionField:X}=j.methods;return(0,c.Z)((()=>({title:"Agregar nuevo"}))),o({page:j}),(o,r)=>{const t=(0,a.up)("q-icon"),d=(0,a.up)("q-btn"),c=(0,a.up)("q-input"),n=(0,a.up)("q-spinner-oval"),g=(0,a.up)("q-card"),O=(0,a.up)("q-form");return(0,a.wg)(),(0,a.iD)("main",m,[(0,l.SU)($)?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.showHeader?((0,a.wg)(),(0,a.iD)("section",u,[(0,a._)("div",f,[(0,a._)("div",p,[e.isSubPage?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",v,[(0,a.Wm)(d,{onClick:r[0]||(r[0]=e=>o.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{name:"arrow_back"})])),_:1})])),S])])])):(0,a.kq)("",!0),(0,a._)("section",_,[(0,a._)("div",b,[(0,a._)("div",y,[(0,a._)("div",w,[(0,a._)("div",null,[(0,a.Wm)(O,{ref:"observer",onSubmit:r[5]||(r[5]=(0,s.iM)((e=>(0,l.SU)(K)()),["prevent"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",U,[(0,a._)("div",h,[(0,a._)("div",q,[V,(0,a._)("div",k,[(0,a.Wm)(c,{ref:"ctrlidfg",modelValue:(0,l.SU)(R).idfg,"onUpdate:modelValue":r[1]||(r[1]=e=>(0,l.SU)(R).idfg=e),modelModifiers:{trim:!0},label:"Idfg",type:"number",placeholder:"Escribir Idfg",step:"any",class:"",error:(0,l.SU)(Y)("idfg"),"error-message":(0,l.SU)(J)("idfg")},null,8,["modelValue","error","error-message"])])])]),(0,a._)("div",D,[(0,a._)("div",B,[W,(0,a._)("div",x,[(0,a.Wm)(c,{ref:"ctrlvalorfg",modelValue:(0,l.SU)(R).valorfg,"onUpdate:modelValue":r[2]||(r[2]=e=>(0,l.SU)(R).valorfg=e),modelModifiers:{trim:!0},label:"Valorfg",type:"number",placeholder:"Escribir Valorfg",step:"any",class:"",error:(0,l.SU)(Y)("valorfg"),"error-message":(0,l.SU)(J)("valorfg")},null,8,["modelValue","error","error-message"])])])]),(0,a._)("div",C,[(0,a._)("div",E,[F,(0,a._)("div",M,[(0,a.Wm)(c,{ref:"ctrldescripciofg",modelValue:(0,l.SU)(R).descripciofg,"onUpdate:modelValue":r[3]||(r[3]=e=>(0,l.SU)(R).descripciofg=e),modelModifiers:{trim:!0},label:"Descripciofg",type:"text",placeholder:"Escribir Descripciofg",class:"",error:(0,l.SU)(Y)("descripciofg"),"error-message":(0,l.SU)(J)("descripciofg")},null,8,["modelValue","error","error-message"])])])]),(0,a._)("div",Z,[(0,a._)("div",I,[Q,(0,a._)("div",P,[(0,a.Wm)(c,{ref:"ctrlcodgestion",modelValue:(0,l.SU)(R).codgestion,"onUpdate:modelValue":r[4]||(r[4]=e=>(0,l.SU)(R).codgestion=e),modelModifiers:{trim:!0},label:"Codgestion",type:"text",placeholder:"Escribir Codgestion",class:"",error:(0,l.SU)(Y)("codgestion"),"error-message":(0,l.SU)(J)("codgestion")},null,8,["modelValue","error","error-message"])])])])]),e.showSubmitButton?((0,a.wg)(),(0,a.iD)("div",A,[(0,a.Wm)(d,{type:"submit",rounded:!1,color:"primary","no-caps":"",unelevated:"","icon-right":"send",loading:(0,l.SU)(L)},{loading:(0,a.w5)((()=>[(0,a.Wm)(n)])),default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,a.kq)("",!0)])),_:1},8,["flat"])])),_:1},512),(0,a.WI)(o.$slots,"default",{submit:(0,l.SU)(K),saving:(0,l.SU)(L)})])])])])])],64)):(0,a.kq)("",!0)])}}};var H=r(68879),N=r(22857),R=r(8326),T=r(44458),j=r(66611),z=r(62470),G=r(69984),L=r.n(G);const $=O,K=$;L()(O,"components",{QBtn:H.Z,QIcon:N.Z,QForm:R.Z,QCard:T.Z,QInput:j.Z,QSpinnerOval:z.Z})}}]);