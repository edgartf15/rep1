"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[5250],{45250:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var o=a(59835),i=a(60499),l=a(86970),s=a(65457),d=a(50977),r=a(49994),c=a(13331),n=a(44858);const p={class:"main-page",id:""},g={key:0,class:"page-section q-pa-md"},u={class:"container"},m={class:"row items-center q-col-gutter-md"},v={key:0,class:"col-auto"},w=(0,o._)("div",{class:"col col-md-auto"},[(0,o._)("div",{class:"text-h6 text-primary"}," Ver ")],-1),y={class:"page-section"},_={class:"container"},f={class:"row q-col-gutter-x-md"},q={class:"col comp-grid"},x={class:"q-mb-3 row q-col-gutter-md justify-start"},k={class:"col-12 col-md-4"},S={class:"row q-col-gutter-x-md items-center"},h={class:"col"},b=(0,o._)("div",{class:"text-grey text-weight-medium mb-1"},"Idpoa",-1),B={class:"text-bold"},D={class:"col-12 col-md-4"},U={class:"row q-col-gutter-x-md items-center"},C={class:"col"},W=(0,o._)("div",{class:"text-grey text-weight-medium mb-1"},"Detalle",-1),I={class:"text-bold"},P={class:"col-12 col-md-4"},V={class:"row q-col-gutter-x-md items-center"},Z={class:"col"},z=(0,o._)("div",{class:"text-grey text-weight-medium mb-1"},"Codgestion",-1),N={class:"text-bold"},Q=(0,o.Uk)(" Gestion Detail "),j={class:"row q-col-gutter-xs justify-start q-ma-md"},E={key:0},H={key:1},K={key:1,style:{"min-height":"200px"},class:"q-pa-sm text-center relative-position"},$={props:{id:[String,Number],primaryKey:{type:String,default:"idpoa"},pageName:{type:String,default:"poa"},routeName:{type:String,default:"poaview"},apiPath:{type:String,default:"poa/view"},editButton:{type:Boolean,default:!0},deleteButton:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0}},setup(e){const t=e,a=(0,n.u)(t.pageName),$=(0,d.q)(t),G=(0,r.a)(),R=(0,c.l)({store:a,props:t}),{currentRecord:A}=(0,i.BK)(a.state),{loading:F,pageReady:L}=(0,i.BK)(R.state),Y=A,{load:J,deleteItem:M}=R.methods;return(0,s.Z)((()=>({title:"Ver"}))),(0,o.bv)((()=>{J()})),(t,a)=>{const s=(0,o.up)("q-icon"),d=(0,o.up)("q-btn"),r=(0,o.up)("q-card"),c=(0,o.up)("q-inner-loading");return(0,o.wg)(),(0,o.iD)("main",p,[(0,i.SU)(L)?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[e.showHeader?((0,o.wg)(),(0,o.iD)("section",g,[(0,o._)("div",u,[(0,o._)("div",m,[e.isSubPage?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",v,[(0,o.Wm)(d,{onClick:a[0]||(a[0]=e=>t.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"arrow_back"})])),_:1})])),w])])])):(0,o.kq)("",!0),(0,o._)("section",y,[(0,o._)("div",_,[(0,o._)("div",f,[(0,o._)("div",q,[(0,o._)("div",null,[(0,o._)("div",x,[(0,o._)("div",k,[(0,o.Wm)(r,{class:"q-pa-md nice-shadow-16"},{default:(0,o.w5)((()=>[(0,o._)("div",S,[(0,o._)("div",h,[b,(0,o._)("div",B,(0,l.zw)((0,i.SU)(Y).idpoa),1)])])])),_:1})]),(0,o._)("div",D,[(0,o.Wm)(r,{class:"q-pa-md nice-shadow-16"},{default:(0,o.w5)((()=>[(0,o._)("div",U,[(0,o._)("div",C,[W,(0,o._)("div",I,(0,l.zw)((0,i.SU)(Y).detalle),1)])])])),_:1})]),(0,o._)("div",P,[(0,o.Wm)(r,{class:"q-pa-md nice-shadow-16"},{default:(0,o.w5)((()=>[(0,o._)("div",V,[(0,o._)("div",Z,[z,(0,o._)("div",N,[(0,i.SU)(Y).codgestion?((0,o.wg)(),(0,o.j4)(d,{key:0,onClick:a[1]||(a[1]=e=>(0,i.SU)($).openPageDialog({page:"gestion/view",url:`/gestion/view/${(0,i.SU)(Y).codgestion}`,closeBtn:!0})),padding:"xs",flat:"",color:"primary","no-caps":""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"visibility",size:"xs",class:"q-mr-xs"}),Q])),_:1})):(0,o.kq)("",!0)])])])])),_:1})])]),(0,o._)("div",j,[(0,i.SU)(G).canView("poa/edit")?((0,o.wg)(),(0,o.iD)("div",E,[(0,o.Wm)(d,{icon:"edit",label:"Edit",glossy:"",flat:"",rounded:!1,"no-caps":"",unelevated:"",padding:"xs",color:"positive",title:"Editar",onClick:a[2]||(a[2]=e=>(0,i.SU)($).openPageDialog({page:"poa/edit",url:`/poa/edit/${(0,i.SU)(Y).idpoa}`,closeBtn:!0}))})])):(0,o.kq)("",!0),(0,i.SU)(G).canView("poa/delete")?((0,o.wg)(),(0,o.iD)("div",H,[(0,o.Wm)(d,{icon:"delete_sweep",label:"Delete",glossy:"",flat:"",rounded:!1,"no-caps":"",unelevated:"",padding:"xs",color:"negative",title:"Borrar",onClick:a[3]||(a[3]=e=>(0,i.SU)(M)((0,i.SU)(Y).idpoa))})])):(0,o.kq)("",!0)])])])])])])],64)):(0,o.kq)("",!0),(0,i.SU)(F)?((0,o.wg)(),(0,o.iD)("div",K,[(0,o.Wm)(c,{color:"primary",label:"Cargando...",showing:""})])):(0,o.kq)("",!0)])}}};var G=a(68879),R=a(22857),A=a(44458),F=a(60854),L=a(69984),Y=a.n(L);const J=$,M=J;Y()($,"components",{QBtn:G.Z,QIcon:R.Z,QCard:A.Z,QInnerLoading:F.Z})}}]);