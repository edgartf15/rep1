"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[8818],{38818:(e,a,l)=>{l.r(a),l.d(a,{default:()=>ve});var o=l(59835),s=l(60499),d=l(61957),i=l(86970),r=l(80339),t=l(65457),c=l(50977),n=l(29601),m=l(44858);const u={class:"main-page",id:""},p={key:0,class:"page-section q-pa-md"},g={class:"container"},v={class:"row items-center q-col-gutter-md"},S={key:0,class:"col-auto"},_=(0,o._)("div",{class:"col col-md-auto"},[(0,o._)("div",{class:"text-h6 text-primary"}," Editar ")],-1),f={class:"page-section"},U={class:"container"},b={class:"row q-col-gutter-x-md"},w={class:"col-md-9 col-12 comp-grid"},y={class:"row q-col-gutter-x-md"},h={class:"col-12"},V={class:"row"},q=(0,o._)("div",{class:"col-sm-3 col-12"}," Codalmacen ",-1),W={class:"col-sm-9 col-12"},k={class:"col-12"},D={class:"row"},C=(0,o._)("div",{class:"col-sm-3 col-12"}," Dependencia ",-1),x={class:"col-sm-9 col-12"},B={class:"col-12"},E={class:"row"},Z=(0,o._)("div",{class:"col-sm-3 col-12"}," Codentidad ",-1),M={class:"col-sm-9 col-12"},Q={class:"col-12"},N={class:"row"},R=(0,o._)("div",{class:"col-sm-3 col-12"}," Nivel ",-1),F={class:"col-sm-9 col-12"},L={class:"col-12"},P={class:"row"},z=(0,o._)("div",{class:"col-sm-3 col-12"}," Detalle ",-1),I={class:"col-sm-9 col-12"},O={class:"col-12"},A={class:"row"},H=(0,o._)("div",{class:"col-sm-3 col-12"}," Soa ",-1),T={class:"col-sm-9 col-12"},j={class:"col-12"},K={class:"row"},$=(0,o._)("div",{class:"col-sm-3 col-12"}," Sigla ",-1),G={class:"col-sm-9 col-12"},Y={class:"col-12"},J={class:"row"},X=(0,o._)("div",{class:"col-sm-3 col-12"}," Codgestion ",-1),ee={class:"col-sm-9 col-12"},ae={key:0,class:"text-center q-my-md"},le={key:1,style:{"min-height":"200px"},class:"q-pa-sm text-center relative-position"},oe={props:{id:[String,Number],pageName:{type:String,default:"unidad"},routeName:{type:String,default:"unidadedit"},pagePath:{type:String,default:"unidad/edit"},apiPath:{type:String,default:"unidad/edit"},submitButtonLabel:{type:String,default:"Grabar"},msgTitle:{type:String,default:"Actualizar registro"},msgBeforeSave:{type:String,default:""},msgAfterSave:{type:String,default:"Registro actualizado con éxito"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1}},setup(e){const a=e,l=(0,m.u)(a.pageName),oe=(0,c.q)(),se=Object.assign({codalmacen:"",dependencia:"",codentidad:"",nivel:"",detalle:"",soa:"",sigla:"",codgestion:""},a.pageData),de=(0,s.qj)({...se});function ie(e){oe.flashMsg(a.msgTitle,a.msgAfterSave),oe.isDialogOpen()?oe.closeDialogs():a.redirect&&oe.navigateTo("/unidad")}const re=(0,o.Fl)((()=>({codalmacen:{numeric:r.uR},dependencia:{numeric:r.uR},codentidad:{numeric:r.uR},nivel:{numeric:r.uR}}))),te=(0,n.C)({store:l,props:a,formData:de,rules:re,afterSubmit:ie}),{saving:ce,loading:ne,pageReady:me}=(0,s.BK)(te.state),{currentRecord:ue}=(0,s.BK)(l.state),{load:pe,submitForm:ge,isFieldValid:ve,getFieldError:Se,mapOptionField:_e}=te.methods;return(0,t.Z)((()=>({title:"Editar"}))),(0,o.bv)((()=>{pe()})),(a,l)=>{const r=(0,o.up)("q-icon"),t=(0,o.up)("q-btn"),c=(0,o.up)("q-select"),n=(0,o.up)("api-data-source"),m=(0,o.up)("q-input"),oe=(0,o.up)("q-spinner-oval"),se=(0,o.up)("q-form"),ie=(0,o.up)("q-card"),re=(0,o.up)("q-inner-loading");return(0,o.wg)(),(0,o.iD)("main",u,[(0,s.SU)(me)?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[e.showHeader?((0,o.wg)(),(0,o.iD)("section",p,[(0,o._)("div",g,[(0,o._)("div",v,[e.isSubPage?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",S,[(0,o.Wm)(t,{onClick:l[0]||(l[0]=e=>a.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{name:"arrow_back"})])),_:1})])),_])])])):(0,o.kq)("",!0),(0,o._)("section",f,[(0,o._)("div",U,[(0,o._)("div",b,[(0,o._)("div",w,[(0,o._)("div",null,[(0,o.Wm)(ie,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,o.w5)((()=>[(0,o.Wm)(se,{ref:"observer",onSubmit:l[12]||(l[12]=(0,d.iM)((e=>(0,s.SU)(ge)()),["prevent"]))},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o._)("div",h,[(0,o._)("div",V,[q,(0,o._)("div",W,[(0,o.Wm)(n,{onLoaded:l[2]||(l[2]=e=>(0,s.SU)(_e)(e,"codalmacen")),"api-path":"components_data/codalmacen_option_list"},{default:(0,o.w5)((e=>[(0,o.Wm)(c,{loading:e.loading,ref:"ctrlcodalmacen","emit-value":"","map-options":"",modelValue:(0,s.SU)(de).codalmacen,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,s.SU)(de).codalmacen=e),options:e.response,label:"Codalmacen",error:(0,s.SU)(ve)("codalmacen"),"error-message":(0,s.SU)(Se)("codalmacen")},null,8,["loading","modelValue","options","error","error-message"])])),_:1})])])]),(0,o._)("div",k,[(0,o._)("div",D,[C,(0,o._)("div",x,[(0,o.Wm)(n,{onLoaded:l[4]||(l[4]=e=>(0,s.SU)(_e)(e,"dependencia")),"api-path":"components_data/codunidad_option_list"},{default:(0,o.w5)((e=>[(0,o.Wm)(c,{loading:e.loading,ref:"ctrldependencia","emit-value":"","map-options":"",modelValue:(0,s.SU)(de).dependencia,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,s.SU)(de).dependencia=e),options:e.response,label:"Dependencia",error:(0,s.SU)(ve)("dependencia"),"error-message":(0,s.SU)(Se)("dependencia")},null,8,["loading","modelValue","options","error","error-message"])])),_:1})])])]),(0,o._)("div",B,[(0,o._)("div",E,[Z,(0,o._)("div",M,[(0,o.Wm)(n,{onLoaded:l[6]||(l[6]=e=>(0,s.SU)(_e)(e,"codentidad")),"api-path":"components_data/dependencia_option_list"},{default:(0,o.w5)((e=>[(0,o.Wm)(c,{loading:e.loading,ref:"ctrlcodentidad","emit-value":"","map-options":"",modelValue:(0,s.SU)(de).codentidad,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,s.SU)(de).codentidad=e),options:e.response,label:"Codentidad",error:(0,s.SU)(ve)("codentidad"),"error-message":(0,s.SU)(Se)("codentidad")},null,8,["loading","modelValue","options","error","error-message"])])),_:1})])])]),(0,o._)("div",Q,[(0,o._)("div",N,[R,(0,o._)("div",F,[(0,o.Wm)(m,{ref:"ctrlnivel",modelValue:(0,s.SU)(de).nivel,"onUpdate:modelValue":l[7]||(l[7]=e=>(0,s.SU)(de).nivel=e),modelModifiers:{trim:!0},label:"Nivel",type:"number",placeholder:"Escribir Nivel",step:"any",class:"",error:(0,s.SU)(ve)("nivel"),"error-message":(0,s.SU)(Se)("nivel")},null,8,["modelValue","error","error-message"])])])]),(0,o._)("div",L,[(0,o._)("div",P,[z,(0,o._)("div",I,[(0,o.Wm)(m,{ref:"ctrldetalle",modelValue:(0,s.SU)(de).detalle,"onUpdate:modelValue":l[8]||(l[8]=e=>(0,s.SU)(de).detalle=e),modelModifiers:{trim:!0},label:"Detalle",type:"text",placeholder:"Escribir Detalle",class:"",error:(0,s.SU)(ve)("detalle"),"error-message":(0,s.SU)(Se)("detalle")},null,8,["modelValue","error","error-message"])])])]),(0,o._)("div",O,[(0,o._)("div",A,[H,(0,o._)("div",T,[(0,o.Wm)(m,{ref:"ctrlsoa",modelValue:(0,s.SU)(de).soa,"onUpdate:modelValue":l[9]||(l[9]=e=>(0,s.SU)(de).soa=e),modelModifiers:{trim:!0},label:"Soa",type:"text",placeholder:"Escribir Soa",class:"",error:(0,s.SU)(ve)("soa"),"error-message":(0,s.SU)(Se)("soa")},null,8,["modelValue","error","error-message"])])])]),(0,o._)("div",j,[(0,o._)("div",K,[$,(0,o._)("div",G,[(0,o.Wm)(m,{ref:"ctrlsigla",modelValue:(0,s.SU)(de).sigla,"onUpdate:modelValue":l[10]||(l[10]=e=>(0,s.SU)(de).sigla=e),modelModifiers:{trim:!0},label:"Sigla",type:"text",placeholder:"Escribir Sigla",class:"",error:(0,s.SU)(ve)("sigla"),"error-message":(0,s.SU)(Se)("sigla")},null,8,["modelValue","error","error-message"])])])]),(0,o._)("div",Y,[(0,o._)("div",J,[X,(0,o._)("div",ee,[(0,o.Wm)(m,{ref:"ctrlcodgestion",modelValue:(0,s.SU)(de).codgestion,"onUpdate:modelValue":l[11]||(l[11]=e=>(0,s.SU)(de).codgestion=e),modelModifiers:{trim:!0},label:"Codgestion",type:"text",placeholder:"Escribir Codgestion",class:"",error:(0,s.SU)(ve)("codgestion"),"error-message":(0,s.SU)(Se)("codgestion")},null,8,["modelValue","error","error-message"])])])])]),e.showSubmitButton?((0,o.wg)(),(0,o.iD)("div",ae,[(0,o.Wm)(t,{rounded:!1,color:"primary","no-caps":"",unelevated:"",type:"submit","icon-right":"send",loading:(0,s.SU)(ce)},{loading:(0,o.w5)((()=>[(0,o.Wm)(oe)])),default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,o.kq)("",!0)])),_:1},512),(0,o.WI)(a.$slots,"default",{submit:(0,s.SU)(ge),saving:(0,s.SU)(ce)})])),_:3},8,["flat"])])])])])])],64)):(0,o.kq)("",!0),(0,s.SU)(ne)?((0,o.wg)(),(0,o.iD)("div",le,[(0,o.Wm)(re,{color:"primary",label:"Cargando...",showing:""})])):(0,o.kq)("",!0)])}}};var se=l(68879),de=l(22857),ie=l(44458),re=l(8326),te=l(32259),ce=l(66611),ne=l(62470),me=l(60854),ue=l(69984),pe=l.n(ue);const ge=oe,ve=ge;pe()(oe,"components",{QBtn:se.Z,QIcon:de.Z,QCard:ie.Z,QForm:re.Z,QSelect:te.Z,QInput:ce.Z,QSpinnerOval:ne.Z,QInnerLoading:me.Z})}}]);