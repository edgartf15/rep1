"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[8483],{23428:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ee});var l=i(59835),o=i(60499),a=i(86970),s=i(65457),d=i(50977),c=i(49994),r=i(13331),n=i(44858);const m={class:"main-page",id:""},u={key:0,class:"page-section q-pa-md"},g={class:"container"},p={class:"row items-center q-col-gutter-md"},v={key:0,class:"col-auto"},_=(0,l._)("div",{class:"col col-md-auto"},[(0,l._)("div",{class:"text-h6 text-primary"}," Ver ")],-1),w={class:"page-section"},y={class:"container"},f={class:"row q-col-gutter-x-md"},q={class:"col comp-grid"},x={class:"q-mb-3 row q-col-gutter-md justify-start"},b={class:"col-12 col-md-4"},h={class:"row q-col-gutter-x-md items-center"},S={class:"col"},k=(0,l._)("div",{class:"text-grey text-weight-medium mb-1"},"Id Niv Eo",-1),B={class:"text-bold"},D={class:"col-12 col-md-4"},U={class:"row q-col-gutter-x-md items-center"},W={class:"col"},C=(0,l._)("div",{class:"text-grey text-weight-medium mb-1"},"Nombre Nivel",-1),N={class:"text-bold"},z={class:"col-12 col-md-4"},I={class:"row q-col-gutter-x-md items-center"},V={class:"col"},Z=(0,l._)("div",{class:"text-grey text-weight-medium mb-1"},"Descripcion",-1),E={class:"text-bold"},P={class:"col-12 col-md-4"},Q={class:"row q-col-gutter-x-md items-center"},H={class:"col"},K=(0,l._)("div",{class:"text-grey text-weight-medium mb-1"},"Cod Gestion",-1),j={class:"text-bold"},G={class:"row q-col-gutter-xs justify-start q-ma-md"},R={key:0},$={key:1},A={key:1,style:{"min-height":"200px"},class:"q-pa-sm text-center relative-position"},F={props:{id:[String,Number],primaryKey:{type:String,default:"id_niv_eo"},pageName:{type:String,default:"nivel_eo"},routeName:{type:String,default:"nivel_eoview"},apiPath:{type:String,default:"nivel_eo/view"},editButton:{type:Boolean,default:!0},deleteButton:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0}},setup(e){const t=e,i=(0,n.u)(t.pageName),F=(0,d.q)(t),L=(0,c.a)(),Y=(0,r.l)({store:i,props:t}),{currentRecord:J}=(0,o.BK)(i.state),{loading:M,pageReady:O}=(0,o.BK)(Y.state),T=J,{load:X,deleteItem:ee}=Y.methods;return(0,s.Z)((()=>({title:"Ver"}))),(0,l.bv)((()=>{X()})),(t,i)=>{const s=(0,l.up)("q-icon"),d=(0,l.up)("q-btn"),c=(0,l.up)("q-card"),r=(0,l.up)("q-inner-loading");return(0,l.wg)(),(0,l.iD)("main",m,[(0,o.SU)(O)?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[e.showHeader?((0,l.wg)(),(0,l.iD)("section",u,[(0,l._)("div",g,[(0,l._)("div",p,[e.isSubPage?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",v,[(0,l.Wm)(d,{onClick:i[0]||(i[0]=e=>t.$router.go(-1)),flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",class:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"arrow_back"})])),_:1})])),_])])])):(0,l.kq)("",!0),(0,l._)("section",w,[(0,l._)("div",y,[(0,l._)("div",f,[(0,l._)("div",q,[(0,l._)("div",null,[(0,l._)("div",x,[(0,l._)("div",b,[(0,l.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,l.w5)((()=>[(0,l._)("div",h,[(0,l._)("div",S,[k,(0,l._)("div",B,(0,a.zw)((0,o.SU)(T).id_niv_eo),1)])])])),_:1})]),(0,l._)("div",D,[(0,l.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,l.w5)((()=>[(0,l._)("div",U,[(0,l._)("div",W,[C,(0,l._)("div",N,(0,a.zw)((0,o.SU)(T).nombre_nivel),1)])])])),_:1})]),(0,l._)("div",z,[(0,l.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,l.w5)((()=>[(0,l._)("div",I,[(0,l._)("div",V,[Z,(0,l._)("div",E,(0,a.zw)((0,o.SU)(T).descripcion),1)])])])),_:1})]),(0,l._)("div",P,[(0,l.Wm)(c,{class:"q-pa-md nice-shadow-16"},{default:(0,l.w5)((()=>[(0,l._)("div",Q,[(0,l._)("div",H,[K,(0,l._)("div",j,(0,a.zw)((0,o.SU)(T).cod_gestion),1)])])])),_:1})])]),(0,l._)("div",G,[(0,o.SU)(L).canView("nivel_eo/edit")?((0,l.wg)(),(0,l.iD)("div",R,[(0,l.Wm)(d,{icon:"edit",label:"Edit",glossy:"",flat:"",rounded:!1,"no-caps":"",unelevated:"",padding:"xs",color:"positive",title:"Editar",onClick:i[1]||(i[1]=e=>(0,o.SU)(F).openPageDialog({page:"nivel_eo/edit",url:`/nivel_eo/edit/${(0,o.SU)(T).id_niv_eo}`,closeBtn:!0}))})])):(0,l.kq)("",!0),(0,o.SU)(L).canView("nivel_eo/delete")?((0,l.wg)(),(0,l.iD)("div",$,[(0,l.Wm)(d,{icon:"delete_sweep",label:"Delete",glossy:"",flat:"",rounded:!1,"no-caps":"",unelevated:"",padding:"xs",color:"negative",title:"Borrar",onClick:i[2]||(i[2]=e=>(0,o.SU)(ee)((0,o.SU)(T).id_niv_eo))})])):(0,l.kq)("",!0)])])])])])])],64)):(0,l.kq)("",!0),(0,o.SU)(M)?((0,l.wg)(),(0,l.iD)("div",A,[(0,l.Wm)(r,{color:"primary",label:"Cargando...",showing:""})])):(0,l.kq)("",!0)])}}};var L=i(68879),Y=i(22857),J=i(44458),M=i(60854),O=i(69984),T=i.n(O);const X=F,ee=X;T()(F,"components",{QBtn:L.Z,QIcon:Y.Z,QCard:J.Z,QInnerLoading:M.Z})}}]);