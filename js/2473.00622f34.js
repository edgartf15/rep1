"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[2473],{82473:(e,a,l)=>{l.r(a),l.d(a,{default:()=>I});var r=l(59835),o=l(60499),i=l(61957),t=l(86970),s=l(80339),n=l(44858),c=l(65457),d=l(50977),u=l(82844);const m={class:"main-page",id:""},p={key:0,class:"page-section q-pa-md"},v={class:"container"},g={class:"row items-center q-col-gutter-md"},f={key:0,class:"col-auto"},_=(0,r._)("div",{class:"col col-md-auto"},[(0,r._)("div",{class:"text-h6 text-primary"}," Agregar nuevo ")],-1),S={class:"page-section"},b={class:"container"},y={class:"row q-col-gutter-x-md"},w={class:"col-md-9 col-12 comp-grid"},h={class:"row q-col-gutter-x-md"},q={class:"col-12"},U={class:"row"},k=(0,r._)("div",{class:"col-sm-3 col-12"}," Valor Nivel ",-1),D={class:"col-sm-9 col-12"},V={class:"col-12"},B={class:"row"},N=(0,r._)("div",{class:"col-sm-3 col-12"}," Descripcion Niv ",-1),W={class:"col-sm-9 col-12"},x={key:0,class:"text-center q-my-md"},F={props:{pageName:{type:String,default:"nivel_escala"},routeName:{type:String,default:"nivel_escalaadd"},apiPath:{type:String,default:"nivel_escala/add"},submitButtonLabel:{type:String,default:"Guardar"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},msgTitle:{type:String,default:"Crear registro"},msgAfterSave:{type:String,default:"Grabar agregado exitosamente"},msgBeforeSave:{type:String,default:""},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},pageData:{type:Object,default:()=>{}}},setup(e,{expose:a}){const l=e,F=(0,n.u)(l.pageName),Z=(0,d.q)(),Q={valor_nivel:"",descripcion_niv:""},C=(0,o.qj)({...Q}),E=(0,r.Fl)((()=>({valor_nivel:{numeric:s.uR}}))),M=(0,u.b)({store:F,props:l,formData:C,rules:E,beforeSubmit:P,afterSubmit:A});function P(){return!0}function A(e){Z.flashMsg(l.msgTitle,l.msgAfterSave),M.setFormDefaultValues(),Z.isDialogOpen()?Z.closeDialogs():l.redirect&&Z.navigateTo("/nivel_escala")}const{saving:O,pageReady:H}=(0,o.BK)(M.state),{submitForm:I,isFieldValid:T,getFieldError:j,mapOptionField:z}=M.methods;return(0,c.Z)((()=>({title:"Agregar nuevo"}))),a({page:M}),(a,l)=>{const s=(0,r.up)("q-icon"),n=(0,r.up)("q-btn"),c=(0,r.up)("q-input"),d=(0,r.up)("q-spinner-oval"),u=(0,r.up)("q-card"),F=(0,r.up)("q-form");return(0,r.wg)(),(0,r.iD)("main",m,[(0,o.SU)(H)?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[e.showHeader?((0,r.wg)(),(0,r.iD)("section",p,[(0,r._)("div",v,[(0,r._)("div",g,[e.isSubPage?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(n,{onClick:l[0]||(l[0]=e=>a.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{name:"arrow_back"})])),_:1})])),_])])])):(0,r.kq)("",!0),(0,r._)("section",S,[(0,r._)("div",b,[(0,r._)("div",y,[(0,r._)("div",w,[(0,r._)("div",null,[(0,r.Wm)(F,{ref:"observer",onSubmit:l[3]||(l[3]=(0,i.iM)((e=>(0,o.SU)(I)()),["prevent"]))},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,r.w5)((()=>[(0,r._)("div",h,[(0,r._)("div",q,[(0,r._)("div",U,[k,(0,r._)("div",D,[(0,r.Wm)(c,{ref:"ctrlvalor_nivel",modelValue:(0,o.SU)(C).valor_nivel,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,o.SU)(C).valor_nivel=e),modelModifiers:{trim:!0},label:"Valor Nivel",type:"number",placeholder:"Escribir Valor Nivel",step:"any",class:"",error:(0,o.SU)(T)("valor_nivel"),"error-message":(0,o.SU)(j)("valor_nivel")},null,8,["modelValue","error","error-message"])])])]),(0,r._)("div",V,[(0,r._)("div",B,[N,(0,r._)("div",W,[(0,r.Wm)(c,{ref:"ctrldescripcion_niv",modelValue:(0,o.SU)(C).descripcion_niv,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,o.SU)(C).descripcion_niv=e),modelModifiers:{trim:!0},label:"Descripcion Niv",type:"text",placeholder:"Escribir Descripcion Niv",class:"",error:(0,o.SU)(T)("descripcion_niv"),"error-message":(0,o.SU)(j)("descripcion_niv")},null,8,["modelValue","error","error-message"])])])])]),e.showSubmitButton?((0,r.wg)(),(0,r.iD)("div",x,[(0,r.Wm)(n,{type:"submit",rounded:!1,color:"primary","no-caps":"",unelevated:"","icon-right":"send",loading:(0,o.SU)(O)},{loading:(0,r.w5)((()=>[(0,r.Wm)(d)])),default:(0,r.w5)((()=>[(0,r.Uk)((0,t.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,r.kq)("",!0)])),_:1},8,["flat"])])),_:1},512),(0,r.WI)(a.$slots,"default",{submit:(0,o.SU)(I),saving:(0,o.SU)(O)})])])])])])],64)):(0,r.kq)("",!0)])}}};var Z=l(68879),Q=l(22857),C=l(8326),E=l(44458),M=l(66611),P=l(62470),A=l(69984),O=l.n(A);const H=F,I=H;O()(F,"components",{QBtn:Z.Z,QIcon:Q.Z,QForm:C.Z,QCard:E.Z,QInput:M.Z,QSpinnerOval:P.Z})}}]);