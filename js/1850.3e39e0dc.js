"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[1850],{81850:(e,r,t)=>{t.r(r),t.d(r,{default:()=>L});var a=t(59835),i=t(60499),l=t(61957),s=t(86970),o=t(80339),c=t(44858),d=t(65457),n=t(50977),m=t(82844);const u={class:"main-page",id:""},v={key:0,class:"page-section q-pa-md"},p={class:"container"},g={class:"row items-center q-col-gutter-md"},b={key:0,class:"col-auto"},f=(0,a._)("div",{class:"col col-md-auto"},[(0,a._)("div",{class:"text-h6 text-primary"}," Agregar nuevo ")],-1),S={class:"page-section"},y={class:"container"},_={class:"row q-col-gutter-x-md"},w={class:"col-md-9 col-12 comp-grid"},U={class:"row q-col-gutter-x-md"},h={class:"col-12"},q={class:"row"},k=(0,a._)("div",{class:"col-sm-3 col-12"}," Idestcivil * ",-1),V={class:"col-sm-9 col-12"},B={class:"col-12"},D={class:"row"},W=(0,a._)("div",{class:"col-sm-3 col-12"}," Nombrestciv ",-1),x={class:"col-sm-9 col-12"},A={class:"col-12"},E={class:"row"},F=(0,a._)("div",{class:"col-sm-3 col-12"}," Abrevciv ",-1),Z={class:"col-sm-9 col-12"},C={key:0,class:"text-center q-my-md"},I={props:{pageName:{type:String,default:"estadocivil"},routeName:{type:String,default:"estadociviladd"},apiPath:{type:String,default:"estadocivil/add"},submitButtonLabel:{type:String,default:"Entregar"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},msgTitle:{type:String,default:"Crear registro"},msgAfterSave:{type:String,default:"Grabar agregado exitosamente"},msgBeforeSave:{type:String,default:""},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},pageData:{type:Object,default:()=>{}}},setup(e,{expose:r}){const t=e,I=(0,c.u)(t.pageName),M=(0,n.q)(),N={idestcivil:"",nombrestciv:"",abrevciv:""},Q=(0,i.qj)({...N}),P=(0,a.Fl)((()=>({idestcivil:{required:o.C1,numeric:o.uR}}))),O=(0,m.b)({store:I,props:t,formData:Q,rules:P,beforeSubmit:H,afterSubmit:T});function H(){return!0}function T(e){M.flashMsg(t.msgTitle,t.msgAfterSave),O.setFormDefaultValues(),M.isDialogOpen()?M.closeDialogs():t.redirect&&M.navigateTo("/estadocivil")}const{saving:j,pageReady:z}=(0,i.BK)(O.state),{submitForm:L,isFieldValid:R,getFieldError:$,mapOptionField:G}=O.methods;return(0,d.Z)((()=>({title:"Agregar nuevo"}))),r({page:O}),(r,t)=>{const o=(0,a.up)("q-icon"),c=(0,a.up)("q-btn"),d=(0,a.up)("q-input"),n=(0,a.up)("q-spinner-oval"),m=(0,a.up)("q-card"),I=(0,a.up)("q-form");return(0,a.wg)(),(0,a.iD)("main",u,[(0,i.SU)(z)?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.showHeader?((0,a.wg)(),(0,a.iD)("section",v,[(0,a._)("div",p,[(0,a._)("div",g,[e.isSubPage?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(c,{onClick:t[0]||(t[0]=e=>r.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{name:"arrow_back"})])),_:1})])),f])])])):(0,a.kq)("",!0),(0,a._)("section",S,[(0,a._)("div",y,[(0,a._)("div",_,[(0,a._)("div",w,[(0,a._)("div",null,[(0,a.Wm)(I,{ref:"observer",onSubmit:t[4]||(t[4]=(0,l.iM)((e=>(0,i.SU)(L)()),["prevent"]))},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",U,[(0,a._)("div",h,[(0,a._)("div",q,[k,(0,a._)("div",V,[(0,a.Wm)(d,{ref:"ctrlidestcivil",modelValue:(0,i.SU)(Q).idestcivil,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,i.SU)(Q).idestcivil=e),modelModifiers:{trim:!0},label:"Idestcivil",type:"number",placeholder:"Escribir Idestcivil",step:"any",class:"",error:(0,i.SU)(R)("idestcivil"),"error-message":(0,i.SU)($)("idestcivil")},null,8,["modelValue","error","error-message"])])])]),(0,a._)("div",B,[(0,a._)("div",D,[W,(0,a._)("div",x,[(0,a.Wm)(d,{ref:"ctrlnombrestciv",modelValue:(0,i.SU)(Q).nombrestciv,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,i.SU)(Q).nombrestciv=e),modelModifiers:{trim:!0},label:"Nombrestciv",type:"text",placeholder:"Escribir Nombrestciv",class:"",error:(0,i.SU)(R)("nombrestciv"),"error-message":(0,i.SU)($)("nombrestciv")},null,8,["modelValue","error","error-message"])])])]),(0,a._)("div",A,[(0,a._)("div",E,[F,(0,a._)("div",Z,[(0,a.Wm)(d,{ref:"ctrlabrevciv",modelValue:(0,i.SU)(Q).abrevciv,"onUpdate:modelValue":t[3]||(t[3]=e=>(0,i.SU)(Q).abrevciv=e),modelModifiers:{trim:!0},label:"Abrevciv",type:"text",placeholder:"Escribir Abrevciv",class:"",error:(0,i.SU)(R)("abrevciv"),"error-message":(0,i.SU)($)("abrevciv")},null,8,["modelValue","error","error-message"])])])])]),e.showSubmitButton?((0,a.wg)(),(0,a.iD)("div",C,[(0,a.Wm)(c,{type:"submit",rounded:!1,color:"primary","no-caps":"",unelevated:"","icon-right":"send",loading:(0,i.SU)(j)},{loading:(0,a.w5)((()=>[(0,a.Wm)(n)])),default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,a.kq)("",!0)])),_:1},8,["flat"])])),_:1},512),(0,a.WI)(r.$slots,"default",{submit:(0,i.SU)(L),saving:(0,i.SU)(j)})])])])])])],64)):(0,a.kq)("",!0)])}}};var M=t(68879),N=t(22857),Q=t(8326),P=t(44458),O=t(66611),H=t(62470),T=t(69984),j=t.n(T);const z=I,L=z;j()(I,"components",{QBtn:M.Z,QIcon:N.Z,QForm:Q.Z,QCard:P.Z,QInput:O.Z,QSpinnerOval:H.Z})}}]);