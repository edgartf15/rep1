"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[5948],{25948:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var i=a(59835),o=a(60499),l=a(86970),d=a(65457),s=a(50977),r=a(49994),n=a(13331),c=a(44858);const u={class:"main-page",id:""},g={key:0,class:"page-section q-pa-md"},v={class:"container"},m={class:"row items-center q-col-gutter-md"},p={key:0,class:"col-auto"},_=(0,i._)("div",{class:"col col-md-auto"},[(0,i._)("div",{class:"text-h6 text-primary"}," Ver ")],-1),w={class:"page-section"},y={class:"container"},h={class:"row q-col-gutter-x-md"},f={class:"col comp-grid"},q={class:"q-mb-3 row q-col-gutter-md justify-start"},b={class:"col-12 col-md-4"},x={class:"row q-col-gutter-x-md items-center"},S={class:"col"},k=(0,i._)("div",{class:"text-grey text-weight-medium mb-1"},"Idgraduniv",-1),B={class:"text-bold"},D={class:"col-12 col-md-4"},U={class:"row q-col-gutter-x-md items-center"},W={class:"col"},C=(0,i._)("div",{class:"text-grey text-weight-medium mb-1"},"Nombregrado Hv",-1),H={class:"text-bold"},I={class:"col-12 col-md-4"},N={class:"row q-col-gutter-x-md items-center"},V={class:"col"},Z=(0,i._)("div",{class:"text-grey text-weight-medium mb-1"},"Abrev Hv",-1),z={class:"text-bold"},P={class:"row q-col-gutter-xs justify-start q-ma-md"},Q={key:0},E={key:1},K={key:1,style:{"min-height":"200px"},class:"q-pa-sm text-center relative-position"},j={props:{id:[String,Number],primaryKey:{type:String,default:"idgraduniv"},pageName:{type:String,default:"grado_univhv"},routeName:{type:String,default:"grado_univhvview"},apiPath:{type:String,default:"grado_univhv/view"},editButton:{type:Boolean,default:!0},deleteButton:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0}},setup(e){const t=e,a=(0,c.u)(t.pageName),j=(0,s.q)(t),A=(0,r.a)(),R=(0,n.l)({store:a,props:t}),{currentRecord:$}=(0,o.BK)(a.state),{loading:F,pageReady:G}=(0,o.BK)(R.state),L=$,{load:Y,deleteItem:J}=R.methods;return(0,d.Z)((()=>({title:"Ver"}))),(0,i.bv)((()=>{Y()})),(t,a)=>{const d=(0,i.up)("q-icon"),s=(0,i.up)("q-btn"),r=(0,i.up)("q-card"),n=(0,i.up)("q-inner-loading");return(0,i.wg)(),(0,i.iD)("main",u,[(0,o.SU)(G)?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[e.showHeader?((0,i.wg)(),(0,i.iD)("section",g,[(0,i._)("div",v,[(0,i._)("div",m,[e.isSubPage?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(s,{onClick:a[0]||(a[0]=e=>t.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{name:"arrow_back"})])),_:1})])),_])])])):(0,i.kq)("",!0),(0,i._)("section",w,[(0,i._)("div",y,[(0,i._)("div",h,[(0,i._)("div",f,[(0,i._)("div",null,[(0,i._)("div",q,[(0,i._)("div",b,[(0,i.Wm)(r,{class:"q-pa-md nice-shadow-16"},{default:(0,i.w5)((()=>[(0,i._)("div",x,[(0,i._)("div",S,[k,(0,i._)("div",B,(0,l.zw)((0,o.SU)(L).idgraduniv),1)])])])),_:1})]),(0,i._)("div",D,[(0,i.Wm)(r,{class:"q-pa-md nice-shadow-16"},{default:(0,i.w5)((()=>[(0,i._)("div",U,[(0,i._)("div",W,[C,(0,i._)("div",H,(0,l.zw)((0,o.SU)(L).nombregrado_hv),1)])])])),_:1})]),(0,i._)("div",I,[(0,i.Wm)(r,{class:"q-pa-md nice-shadow-16"},{default:(0,i.w5)((()=>[(0,i._)("div",N,[(0,i._)("div",V,[Z,(0,i._)("div",z,(0,l.zw)((0,o.SU)(L).abrev_hv),1)])])])),_:1})])]),(0,i._)("div",P,[(0,o.SU)(A).canView("grado_univhv/edit")?((0,i.wg)(),(0,i.iD)("div",Q,[(0,i.Wm)(s,{icon:"edit",label:"Edit",glossy:"",flat:"",rounded:!1,"no-caps":"",unelevated:"",padding:"xs",color:"positive",title:"Editar",onClick:a[1]||(a[1]=e=>(0,o.SU)(j).openPageDialog({page:"grado_univhv/edit",url:`/grado_univhv/edit/${(0,o.SU)(L).idgraduniv}`,closeBtn:!0}))})])):(0,i.kq)("",!0),(0,o.SU)(A).canView("grado_univhv/delete")?((0,i.wg)(),(0,i.iD)("div",E,[(0,i.Wm)(s,{icon:"delete_sweep",label:"Delete",glossy:"",flat:"",rounded:!1,"no-caps":"",unelevated:"",padding:"xs",color:"negative",title:"Borrar",onClick:a[2]||(a[2]=e=>(0,o.SU)(J)((0,o.SU)(L).idgraduniv))})])):(0,i.kq)("",!0)])])])])])])],64)):(0,i.kq)("",!0),(0,o.SU)(F)?((0,i.wg)(),(0,i.iD)("div",K,[(0,i.Wm)(n,{color:"primary",label:"Cargando...",showing:""})])):(0,i.kq)("",!0)])}}};var A=a(68879),R=a(22857),$=a(44458),F=a(60854),G=a(69984),L=a.n(G);const Y=j,J=Y;L()(j,"components",{QBtn:A.Z,QIcon:R.Z,QCard:$.Z,QInnerLoading:F.Z})}}]);