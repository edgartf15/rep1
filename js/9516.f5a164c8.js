"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[9516],{9516:(e,a,o)=>{o.r(a),o.d(a,{default:()=>fe});var t=o(59835),l=o(60499),i=o(86970),s=o(61957),r=o(65457),n=o(50977),d=o(49994),c=o(55621),u=o(44858);const p={class:"main-page",id:""},m={key:0,class:"page-section q-pa-md"},w={class:"container-fluid"},f={class:"row justify-between items-center q-col-gutter-md"},g=(0,t._)("div",{class:"col col-md-auto"},[(0,t._)("div",{class:"text-h6 text-primary"}," Vacaciones ")],-1),y={class:"col-md-auto col-12"},k=(0,t.Uk)(" Agregar nuevo "),_={class:"col-md-auto col-12"},v={class:"page-section"},q={class:"container-fluid"},U={class:"row q-col-gutter-x-md"},h={class:"col comp-grid"},b={class:"row q-mb-md q-gutter-sm"},S={key:0,class:"q-px-sm nice-shadow-16"},W=(0,t.Uk)(" Buscar: "),x=(0,t.Uk)(" Usuarios "),B={class:"row q-col-gutter-xs justify-end"},z=(0,t.Uk)("View"),Z=(0,t.Uk)("Edit"),Q=(0,t.Uk)("Delete"),V={class:"row justify-center"},j=(0,t._)("div",{class:"text-grey text-h6 text-center"}," ningún record fue encontrado ",-1),C={key:3,class:""},D={class:"q-pa-md"},I={class:"row items-center justify-between"},P={class:"row items-center q-col-gutter-md"},R={key:0},T=(0,t.Uk)("Delete Selected Items"),$={key:0,class:"row items-center justify-between"},N={class:"col-auto"},K={key:0},E={props:{primaryKey:{type:String,default:"idvacacion"},pageName:{type:String,default:"vacaciones"},routeName:{type:String,default:"vacacioneslist"},apiPath:{type:String,default:"vacaciones/index"},paginate:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!1},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:"desc"}},setup(e){const a=e,o=(0,n.q)(),E=(0,d.a)(),F={filters:{},pagination:{page:a.page,rowsPerPage:a.limit,rowsNumber:0,sortBy:a.sortBy,descending:"desc"==a.sortType},searchText:a.search,primaryKey:a.primaryKey},A=(0,u.u)(a.pageName,F),H=(0,c.s)({store:A,props:a}),{records:L,filters:M,totalRecords:G,selectedItems:J,expandedRows:O,pagination:X}=(0,l.BK)(A.state),{pageReady:Y,loading:ee,searchText:ae}=(0,l.BK)(H.state),{totalPages:oe,recordsPosition:te}=H.computedProps,{load:le,clearSearch:ie,setPagination:se,deleteItem:re,isCurrentRecord:ne}=H.methods,de=(0,t.Fl)({get:function(){return"Vacaciones"}});return(0,r.Z)((()=>({title:de.value}))),(0,t.bv)((()=>{le()})),(a,r)=>{const n=(0,t.up)("q-icon"),d=(0,t.up)("q-btn"),c=(0,t.up)("q-input"),u=(0,t.up)("q-chip"),F=(0,t.up)("q-breadcrumbs-el"),A=(0,t.up)("q-breadcrumbs"),H=(0,t.up)("q-checkbox"),M=(0,t.up)("q-td"),O=(0,t.up)("q-item-section"),le=(0,t.up)("q-item"),de=(0,t.up)("q-list"),ce=(0,t.up)("q-menu"),ue=(0,t.up)("q-tr"),pe=(0,t.up)("q-table"),me=(0,t.up)("q-spinner"),we=(0,t.up)("q-inner-loading"),fe=(0,t.up)("q-card-section"),ge=(0,t.up)("q-card"),ye=(0,t.up)("q-separator"),ke=(0,t.up)("q-tooltip"),_e=(0,t.up)("q-pagination"),ve=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.iD)("main",p,[e.showHeader?((0,t.wg)(),(0,t.iD)("section",m,[(0,t._)("div",w,[(0,t._)("div",f,[g,(0,t._)("div",y,[(0,l.SU)(E).canView("/vacaciones/add")?((0,t.wg)(),(0,t.j4)(d,{key:0,rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",to:"/vacaciones/add",class:""},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{name:"add"}),k])),_:1})):(0,t.kq)("",!0)]),(0,t._)("div",_,[(0,t.Wm)(c,{debounce:"1000",placeholder:"Buscar",modelValue:(0,l.SU)(ae),"onUpdate:modelValue":r[0]||(r[0]=e=>(0,l.dq)(ae)?ae.value=e:null)},{append:(0,t.w5)((()=>[(0,t.Wm)(n,{name:"search"})])),_:1},8,["modelValue"])])])])])):(0,t.kq)("",!0),(0,t._)("section",v,[(0,t._)("div",q,[(0,t._)("div",U,[(0,t._)("div",h,[(0,t._)("div",b,[(0,l.SU)(ae)?((0,t.wg)(),(0,t.iD)("div",S,[W,(0,t.Wm)(u,{icon:"search",removable:"",onRemove:r[1]||(r[1]=e=>(0,l.SU)(ie)()),label:(0,l.SU)(ae)},null,8,["label"])])):(0,t.kq)("",!0)]),(0,t._)("div",null,[e.showBreadcrumbs&&a.$route.query.tag?((0,t.wg)(),(0,t.j4)(A,{key:0,class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{icon:"arrow_back",class:"text-capitalize",label:a.$route.query.tag,to:"/vacaciones"},null,8,["label"]),(0,t.Wm)(F,{label:a.$route.query.label},null,8,["label"])])),_:1})):(0,t.kq)("",!0),(0,t._)("div",null,[(0,t.Wm)(pe,{flat:!0,"table-header-class":"text-h4 bg-grey-2",bordered:!1,columns:(0,l.SU)(o).menus.VacacionesListHeaderItems,rows:(0,l.SU)(L),"binary-state-sort":!0,separator:"horizontal",dense:!0,selected:(0,l.SU)(J),"onUpdate:selected":r[2]||(r[2]=e=>(0,l.dq)(J)?J.value=e:null),selection:"multiple","row-key":"idvacacion",pagination:(0,l.SU)(X),"onUpdate:pagination":r[3]||(r[3]=e=>(0,l.dq)(X)?X.value=e:null),"hide-bottom":"",onRequest:(0,l.SU)(se),loading:(0,l.SU)(ee)},{body:(0,t.w5)((e=>[(0,t.Wm)(ue,{class:(0,i.C_)({selected:(0,l.SU)(ne)(e.row)}),props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{dense:"",modelValue:e.selected,"onUpdate:modelValue":a=>e.selected=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(M,{key:"fecha_eliminacion",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.fecha_eliminacion),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"fecha",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.fecha),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"fini",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.fini),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"ffin",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.ffin),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"fres",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.fres),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"medio",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.medio),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"sqlid",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.sqlid),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"fecha_creacion",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.fecha_creacion),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"fecha_modificacion",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.fecha_modificacion),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"codusuario",props:e},{default:(0,t.w5)((()=>[e.row.codusuario?((0,t.wg)(),(0,t.j4)(d,{key:0,onClick:a=>(0,l.SU)(o).openPageDialog({page:"usuarios/view",url:`/usuarios/view/${e.row.codusuario}`,closeBtn:!0}),padding:"xs",flat:"",color:"primary","no-caps":""},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{name:"visibility",size:"xs",class:"q-mr-xs"}),x])),_:2},1032,["onClick"])):(0,t.kq)("",!0)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"usuario_creacion",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.usuario_creacion),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"usuario_modificacion",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.usuario_modificacion),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"usuario_eliminacion",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.usuario_eliminacion),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"glosa",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.glosa),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"estado",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.estado),1)])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"idvacacion",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{padding:"xs",rounded:!1,color:"primary","no-caps":"",unelevated:"",flat:"",to:`/vacaciones/view/${e.row.idvacacion}`},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.idvacacion),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,t.Wm)(M,{key:"btnactions",props:e,"auto-width":""},{default:(0,t.w5)((()=>[(0,t._)("div",B,[(0,t.Wm)(d,{icon:"menu",padding:"xs",round:"",flat:"",color:"grey"},{default:(0,t.w5)((()=>[(0,t.Wm)(ce,{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left",self:"center middle",anchor:"center middle"},{default:(0,t.w5)((()=>[(0,t.Wm)(de,{dense:"",rounded:"",nav:""},{default:(0,t.w5)((()=>[(0,l.SU)(E).canView("vacaciones/view")?(0,t.wy)(((0,t.wg)(),(0,t.j4)(le,{key:0,link:"",clickable:"",to:`/vacaciones/view/${e.row.idvacacion}`},{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,{color:"primary",size:"sm",name:"visibility"})])),_:1}),(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[z])),_:1})])),_:2},1032,["to"])),[[ve]]):(0,t.kq)("",!0),(0,l.SU)(E).canView("vacaciones/edit")?(0,t.wy)(((0,t.wg)(),(0,t.j4)(le,{key:1,link:"",clickable:"",to:`/vacaciones/edit/${e.row.idvacacion}`},{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,{color:"positive",size:"sm",name:"edit"})])),_:1}),(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[Z])),_:1})])),_:2},1032,["to"])),[[ve]]):(0,t.kq)("",!0),(0,l.SU)(E).canView("vacaciones/delete")?(0,t.wy)(((0,t.wg)(),(0,t.j4)(le,{key:2,link:"",clickable:"",onClick:a=>(0,l.SU)(re)(e.row.idvacacion)},{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,{color:"negative",size:"sm",name:"delete_sweep"})])),_:1}),(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[Q])),_:1})])),_:2},1032,["onClick"])),[[ve]]):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["columns","rows","selected","pagination","onRequest","loading"]),(0,t._)("div",V,[(0,t.Wm)(M)])]),(0,l.SU)(ee)?((0,t.wg)(),(0,t.j4)(we,{key:1,showing:(0,l.SU)(ee)},{default:(0,t.w5)((()=>[(0,t.Wm)(me,{color:"primary",size:"30px"})])),_:1},8,["showing"])):(0,t.kq)("",!0),(0,l.SU)(Y)&&!(0,l.SU)(L).length?((0,t.wg)(),(0,t.j4)(ge,{key:2,flat:a.$q.screen.gt.md},{default:(0,t.w5)((()=>[(0,t.Wm)(fe,null,{default:(0,t.w5)((()=>[j])),_:1})])),_:1},8,["flat"])):(0,t.kq)("",!0),e.showFooter?((0,t.wg)(),(0,t.iD)("div",C,[(0,t.Wm)(ye),(0,t.wy)((0,t._)("div",D,[(0,t._)("div",I,[(0,t._)("div",P,[(0,l.SU)(E).canView("vacaciones/delete")?((0,t.wg)(),(0,t.iD)("div",R,[(0,l.SU)(J).length?((0,t.wg)(),(0,t.j4)(d,{key:0,round:"",flat:"","no-caps":"",unelevated:"",color:"negative",onClick:r[4]||(r[4]=e=>(0,l.SU)(re)((0,l.SU)(J))),icon:"delete_sweep",class:"q-my-xs",title:"Eliminar seleccionado"},{default:(0,t.w5)((()=>[(0,t.Wm)(ke,null,{default:(0,t.w5)((()=>[T])),_:1})])),_:1})):(0,t.kq)("",!0)])):(0,t.kq)("",!0)]),e.paginate&&(0,l.SU)(G)>0?((0,t.wg)(),(0,t.iD)("div",$,[(0,t._)("div",N,[(0,t.Wm)(u,{square:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Archivos "+(0,i.zw)((0,l.SU)(te))+" de "+(0,i.zw)((0,l.SU)(G)),1)])),_:1})]),(0,l.SU)(oe)>1?((0,t.wg)(),(0,t.iD)("div",K,[(0,t.Wm)(_e,{color:"primary",modelValue:(0,l.SU)(X).page,"onUpdate:modelValue":r[5]||(r[5]=e=>(0,l.SU)(X).page=e),"direction-links":!0,"boundary-links":!0,"max-pages":5,"boundary-numbers":!0,max:(0,l.SU)(oe)},null,8,["modelValue","max"])])):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])],512),[[s.F8,(0,l.SU)(Y)]])])):(0,t.kq)("",!0)])])])])])])}}};var F=o(68879),A=o(22857),H=o(66611),L=o(57691),M=o(72605),G=o(28052),J=o(81463),O=o(31233),X=o(67220),Y=o(11221),ee=o(56362),ae=o(13246),oe=o(490),te=o(76749),le=o(60854),ie=o(13902),se=o(44458),re=o(63190),ne=o(50926),de=o(46858),ce=o(80996),ue=o(51136),pe=o(69984),me=o.n(pe);const we=E,fe=we;me()(E,"components",{QBtn:F.Z,QIcon:A.Z,QInput:H.Z,QChip:L.Z,QBreadcrumbs:M.Z,QBreadcrumbsEl:G.Z,QTable:J.Z,QTr:O.Z,QTd:X.Z,QCheckbox:Y.Z,QMenu:ee.Z,QList:ae.Z,QItem:oe.Z,QItemSection:te.Z,QInnerLoading:le.Z,QSpinner:ie.Z,QCard:se.Z,QCardSection:re.Z,QSeparator:ne.Z,QTooltip:de.Z,QPagination:ce.Z}),me()(E,"directives",{Ripple:ue.Z})}}]);