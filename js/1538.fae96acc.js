"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[1538],{51538:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ye});var a=s(59835),l=s(60499),o=s(86970),i=s(65457),d=s(50977),c=s(49994),r=s(13331),m=s(44858);const n={class:"main-page",id:""},u={key:0,class:"page-section q-pa-md"},_={class:"container"},g={class:"row items-center q-col-gutter-md"},v={key:0,class:"col-auto"},w=(0,a._)("div",{class:"col col-md-auto"},[(0,a._)("div",{class:"text-h6 text-primary"}," Ver ")],-1),p={class:"page-section"},h={class:"container"},x={class:"row q-col-gutter-x-md"},y={class:"col comp-grid"},f={class:"q-mb-3 row q-col-gutter-md justify-start"},q={class:"col-12 col-md-4"},b={class:"row q-col-gutter-x-md items-center"},S={class:"col"},k=(0,a._)("div",{class:"text-grey text-weight-medium mb-1"},"Id Memo",-1),B={class:"text-bold"},U={class:"col-12 col-md-4"},D={class:"row q-col-gutter-x-md items-center"},W={class:"col"},C=(0,a._)("div",{class:"text-grey text-weight-medium mb-1"},"Fecha Memo",-1),z={class:"text-bold"},I={class:"col-12 col-md-4"},V={class:"row q-col-gutter-x-md items-center"},Z={class:"col"},F=(0,a._)("div",{class:"text-grey text-weight-medium mb-1"},"Fecha Inicio",-1),N={class:"text-bold"},P={class:"col-12 col-md-4"},Q={class:"row q-col-gutter-x-md items-center"},E={class:"col"},H=(0,a._)("div",{class:"text-grey text-weight-medium mb-1"},"Fecharegistro",-1),K={class:"text-bold"},M={class:"col-12 col-md-4"},j={class:"row q-col-gutter-x-md items-center"},R={class:"col"},$=(0,a._)("div",{class:"text-grey text-weight-medium mb-1"},"Cod Memo",-1),A={class:"text-bold"},G={class:"col-12 col-md-4"},L={class:"row q-col-gutter-x-md items-center"},Y={class:"col"},J=(0,a._)("div",{class:"text-grey text-weight-medium mb-1"},"Codusuario",-1),O={class:"text-bold"},T={class:"col-12 col-md-4"},X={class:"row q-col-gutter-x-md items-center"},ee={class:"col"},te=(0,a._)("div",{class:"text-grey text-weight-medium mb-1"},"Codgestion",-1),se={class:"text-bold"},ae={class:"col-12 col-md-4"},le={class:"row q-col-gutter-x-md items-center"},oe={class:"col"},ie=(0,a._)("div",{class:"text-grey text-weight-medium mb-1"},"Cite Descrip",-1),de={class:"text-bold"},ce={class:"row q-col-gutter-xs justify-start q-ma-md"},re={key:0},me={key:1},ne={key:1,style:{"min-height":"200px"},class:"q-pa-sm text-center relative-position"},ue={props:{id:[String,Number],primaryKey:{type:String,default:"id_memo"},pageName:{type:String,default:"memo_hv"},routeName:{type:String,default:"memo_hvview"},apiPath:{type:String,default:"memo_hv/view"},editButton:{type:Boolean,default:!0},deleteButton:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0}},setup(e){const t=e,s=(0,m.u)(t.pageName),ue=(0,d.q)(t),_e=(0,c.a)(),ge=(0,r.l)({store:s,props:t}),{currentRecord:ve}=(0,l.BK)(s.state),{loading:we,pageReady:pe}=(0,l.BK)(ge.state),he=ve,{load:xe,deleteItem:ye}=ge.methods;return(0,i.Z)((()=>({title:"Ver"}))),(0,a.bv)((()=>{xe()})),(t,s)=>{const i=(0,a.up)("q-icon"),d=(0,a.up)("q-btn"),c=(0,a.up)("q-card"),r=(0,a.up)("q-inner-loading");return(0,a.wg)(),(0,a.iD)("main",n,[(0,l.SU)(pe)?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.showHeader?((0,a.wg)(),(0,a.iD)("section",u,[(0,a._)("div",_,[(0,a._)("div",g,[e.isSubPage?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",v,[(0,a.Wm)(d,{onClick:s[0]||(s[0]=e=>t.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{name:"arrow_back"})])),_:1})])),w])])])):(0,a.kq)("",!0),(0,a._)("section",p,[(0,a._)("div",h,[(0,a._)("div",x,[(0,a._)("div",y,[(0,a._)("div",null,[(0,a._)("div",f,[(0,a._)("div",q,[(0,a.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",b,[(0,a._)("div",S,[k,(0,a._)("div",B,(0,o.zw)((0,l.SU)(he).id_memo),1)])])])),_:1})]),(0,a._)("div",U,[(0,a.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",D,[(0,a._)("div",W,[C,(0,a._)("div",z,(0,o.zw)((0,l.SU)(he).fecha_memo),1)])])])),_:1})]),(0,a._)("div",I,[(0,a.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",V,[(0,a._)("div",Z,[F,(0,a._)("div",N,(0,o.zw)((0,l.SU)(he).fecha_inicio),1)])])])),_:1})]),(0,a._)("div",P,[(0,a.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",Q,[(0,a._)("div",E,[H,(0,a._)("div",K,(0,o.zw)((0,l.SU)(he).fecharegistro),1)])])])),_:1})]),(0,a._)("div",M,[(0,a.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",j,[(0,a._)("div",R,[$,(0,a._)("div",A,(0,o.zw)((0,l.SU)(he).cod_memo),1)])])])),_:1})]),(0,a._)("div",G,[(0,a.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",L,[(0,a._)("div",Y,[J,(0,a._)("div",O,(0,o.zw)((0,l.SU)(he).codusuario),1)])])])),_:1})]),(0,a._)("div",T,[(0,a.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",X,[(0,a._)("div",ee,[te,(0,a._)("div",se,(0,o.zw)((0,l.SU)(he).codgestion),1)])])])),_:1})]),(0,a._)("div",ae,[(0,a.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,a.w5)((()=>[(0,a._)("div",le,[(0,a._)("div",oe,[ie,(0,a._)("div",de,(0,o.zw)((0,l.SU)(he).cite_descrip),1)])])])),_:1})])]),(0,a._)("div",ce,[(0,l.SU)(_e).canView("memo_hv/edit")?((0,a.wg)(),(0,a.iD)("div",re,[(0,a.Wm)(d,{icon:"edit",label:"Edit",glossy:"",flat:"",rounded:!1,"no-caps":"",unelevated:"",padding:"xs",color:"positive",title:"Editar",onClick:s[1]||(s[1]=e=>(0,l.SU)(ue).openPageDialog({page:"memo_hv/edit",url:`/memo_hv/edit/${(0,l.SU)(he).id_memo}`,closeBtn:!0}))})])):(0,a.kq)("",!0),(0,l.SU)(_e).canView("memo_hv/delete")?((0,a.wg)(),(0,a.iD)("div",me,[(0,a.Wm)(d,{icon:"delete_sweep",label:"Delete",glossy:"",flat:"",rounded:!1,"no-caps":"",unelevated:"",padding:"xs",color:"negative",title:"Borrar",onClick:s[2]||(s[2]=e=>(0,l.SU)(ye)((0,l.SU)(he).id_memo))})])):(0,a.kq)("",!0)])])])])])])],64)):(0,a.kq)("",!0),(0,l.SU)(we)?((0,a.wg)(),(0,a.iD)("div",ne,[(0,a.Wm)(r,{color:"primary",label:"Cargando...",showing:""})])):(0,a.kq)("",!0)])}}};var _e=s(68879),ge=s(22857),ve=s(44458),we=s(60854),pe=s(69984),he=s.n(pe);const xe=ue,ye=xe;he()(ue,"components",{QBtn:_e.Z,QIcon:ge.Z,QCard:ve.Z,QInnerLoading:we.Z})}}]);