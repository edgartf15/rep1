"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[8702],{58702:(e,r,a)=>{a.r(r),a.d(r,{default:()=>oe});var l=a(59835),o=a(60499),t=a(61957),s=a(86970),i=a(80339),d=a(44858),c=a(65457),m=a(50977),n=a(82844);const u={class:"main-page",id:""},_={key:0,class:"page-section q-pa-md"},p={class:"container"},g={class:"row items-center q-col-gutter-md"},v={key:0,class:"col-auto"},b=(0,l._)("div",{class:"col col-md-auto"},[(0,l._)("div",{class:"text-h6 text-primary"}," Agregar nuevo ")],-1),f={class:"page-section"},S={class:"container"},U={class:"row q-col-gutter-x-md"},y={class:"col-md-9 col-12 comp-grid"},h={class:"row q-col-gutter-x-md"},w={class:"col-12"},V={class:"row"},T=(0,l._)("div",{class:"col-sm-3 col-12"}," Id T E * ",-1),q={class:"col-sm-9 col-12"},k={class:"col-12"},B={class:"row"},D=(0,l._)("div",{class:"col-sm-3 col-12"}," Nivel Te ",-1),W={class:"col-sm-9 col-12"},E={class:"col-12"},x={class:"row"},C=(0,l._)("div",{class:"col-sm-3 col-12"}," Nro Item Te ",-1),I={class:"col-sm-9 col-12"},M={class:"col-12"},N={class:"row"},F=(0,l._)("div",{class:"col-sm-3 col-12"}," Haber B Te ",-1),Z={class:"col-sm-9 col-12"},H={class:"col-12"},Q={class:"row"},P=(0,l._)("div",{class:"col-sm-3 col-12"}," Categoria Te ",-1),R={class:"col-sm-9 col-12"},A={class:"col-12"},O={class:"row"},j=(0,l._)("div",{class:"col-sm-3 col-12"}," Denom Te ",-1),z={class:"col-sm-9 col-12"},G={key:0,class:"text-center q-my-md"},L={props:{pageName:{type:String,default:"tab_esc"},routeName:{type:String,default:"tab_escadd"},apiPath:{type:String,default:"tab_esc/add"},submitButtonLabel:{type:String,default:"Guardar"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},msgTitle:{type:String,default:"Crear registro"},msgAfterSave:{type:String,default:"Grabar agregado exitosamente"},msgBeforeSave:{type:String,default:""},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},pageData:{type:Object,default:()=>{}}},setup(e,{expose:r}){const a=e,L=(0,d.u)(a.pageName),$=(0,m.q)(),K={id_t_e:"",nivel_te:"",nro_item_te:"",haber_b_te:"",categoria_te:"",denom_te:""},Y=(0,o.qj)({...K}),J=(0,l.Fl)((()=>({id_t_e:{required:i.C1,numeric:i.uR},nivel_te:{numeric:i.uR},nro_item_te:{numeric:i.uR},haber_b_te:{numeric:i.uR}}))),X=(0,n.b)({store:L,props:a,formData:Y,rules:J,beforeSubmit:ee,afterSubmit:re});function ee(){return!0}function re(e){$.flashMsg(a.msgTitle,a.msgAfterSave),X.setFormDefaultValues(),$.isDialogOpen()?$.closeDialogs():a.redirect&&$.navigateTo("/tab_esc")}const{saving:ae,pageReady:le}=(0,o.BK)(X.state),{submitForm:oe,isFieldValid:te,getFieldError:se,mapOptionField:ie}=X.methods;return(0,c.Z)((()=>({title:"Agregar nuevo"}))),r({page:X}),(r,a)=>{const i=(0,l.up)("q-icon"),d=(0,l.up)("q-btn"),c=(0,l.up)("q-input"),m=(0,l.up)("q-spinner-oval"),n=(0,l.up)("q-card"),L=(0,l.up)("q-form");return(0,l.wg)(),(0,l.iD)("main",u,[(0,o.SU)(le)?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[e.showHeader?((0,l.wg)(),(0,l.iD)("section",_,[(0,l._)("div",p,[(0,l._)("div",g,[e.isSubPage?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",v,[(0,l.Wm)(d,{onClick:a[0]||(a[0]=e=>r.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{name:"arrow_back"})])),_:1})])),b])])])):(0,l.kq)("",!0),(0,l._)("section",f,[(0,l._)("div",S,[(0,l._)("div",U,[(0,l._)("div",y,[(0,l._)("div",null,[(0,l.Wm)(L,{ref:"observer",onSubmit:a[7]||(a[7]=(0,t.iM)((e=>(0,o.SU)(oe)()),["prevent"]))},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{flat:e.isSubPage,class:"q-pa-md nice-shadow-16"},{default:(0,l.w5)((()=>[(0,l._)("div",h,[(0,l._)("div",w,[(0,l._)("div",V,[T,(0,l._)("div",q,[(0,l.Wm)(c,{ref:"ctrlid_t_e",modelValue:(0,o.SU)(Y).id_t_e,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,o.SU)(Y).id_t_e=e),modelModifiers:{trim:!0},label:"Id T E",type:"number",placeholder:"Escribir Id T E",step:"any",class:"",error:(0,o.SU)(te)("id_t_e"),"error-message":(0,o.SU)(se)("id_t_e")},null,8,["modelValue","error","error-message"])])])]),(0,l._)("div",k,[(0,l._)("div",B,[D,(0,l._)("div",W,[(0,l.Wm)(c,{ref:"ctrlnivel_te",modelValue:(0,o.SU)(Y).nivel_te,"onUpdate:modelValue":a[2]||(a[2]=e=>(0,o.SU)(Y).nivel_te=e),modelModifiers:{trim:!0},label:"Nivel Te",type:"number",placeholder:"Escribir Nivel Te",step:"any",class:"",error:(0,o.SU)(te)("nivel_te"),"error-message":(0,o.SU)(se)("nivel_te")},null,8,["modelValue","error","error-message"])])])]),(0,l._)("div",E,[(0,l._)("div",x,[C,(0,l._)("div",I,[(0,l.Wm)(c,{ref:"ctrlnro_item_te",modelValue:(0,o.SU)(Y).nro_item_te,"onUpdate:modelValue":a[3]||(a[3]=e=>(0,o.SU)(Y).nro_item_te=e),modelModifiers:{trim:!0},label:"Nro Item Te",type:"number",placeholder:"Escribir Nro Item Te",step:"any",class:"",error:(0,o.SU)(te)("nro_item_te"),"error-message":(0,o.SU)(se)("nro_item_te")},null,8,["modelValue","error","error-message"])])])]),(0,l._)("div",M,[(0,l._)("div",N,[F,(0,l._)("div",Z,[(0,l.Wm)(c,{ref:"ctrlhaber_b_te",modelValue:(0,o.SU)(Y).haber_b_te,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,o.SU)(Y).haber_b_te=e),modelModifiers:{trim:!0},label:"Haber B Te",type:"number",placeholder:"Escribir Haber B Te",step:"any",class:"",error:(0,o.SU)(te)("haber_b_te"),"error-message":(0,o.SU)(se)("haber_b_te")},null,8,["modelValue","error","error-message"])])])]),(0,l._)("div",H,[(0,l._)("div",Q,[P,(0,l._)("div",R,[(0,l.Wm)(c,{ref:"ctrlcategoria_te",modelValue:(0,o.SU)(Y).categoria_te,"onUpdate:modelValue":a[5]||(a[5]=e=>(0,o.SU)(Y).categoria_te=e),modelModifiers:{trim:!0},label:"Categoria Te",type:"text",placeholder:"Escribir Categoria Te",class:"",error:(0,o.SU)(te)("categoria_te"),"error-message":(0,o.SU)(se)("categoria_te")},null,8,["modelValue","error","error-message"])])])]),(0,l._)("div",A,[(0,l._)("div",O,[j,(0,l._)("div",z,[(0,l.Wm)(c,{ref:"ctrldenom_te",modelValue:(0,o.SU)(Y).denom_te,"onUpdate:modelValue":a[6]||(a[6]=e=>(0,o.SU)(Y).denom_te=e),modelModifiers:{trim:!0},label:"Denom Te",type:"text",placeholder:"Escribir Denom Te",class:"",error:(0,o.SU)(te)("denom_te"),"error-message":(0,o.SU)(se)("denom_te")},null,8,["modelValue","error","error-message"])])])])]),e.showSubmitButton?((0,l.wg)(),(0,l.iD)("div",G,[(0,l.Wm)(d,{type:"submit",rounded:!1,color:"primary","no-caps":"",unelevated:"","icon-right":"send",loading:(0,o.SU)(ae)},{loading:(0,l.w5)((()=>[(0,l.Wm)(m)])),default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.submitButtonLabel)+" ",1)])),_:1},8,["loading"])])):(0,l.kq)("",!0)])),_:1},8,["flat"])])),_:1},512),(0,l.WI)(r.$slots,"default",{submit:(0,o.SU)(oe),saving:(0,o.SU)(ae)})])])])])])],64)):(0,l.kq)("",!0)])}}};var $=a(68879),K=a(22857),Y=a(8326),J=a(44458),X=a(66611),ee=a(62470),re=a(69984),ae=a.n(re);const le=L,oe=le;ae()(L,"components",{QBtn:$.Z,QIcon:K.Z,QForm:Y.Z,QCard:J.Z,QInput:X.Z,QSpinnerOval:ee.Z})}}]);