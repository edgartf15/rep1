"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[6053],{26053:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var o=a(59835),l=a(60499),r=a(86970),n=a(61957),i=a(65457),s=a(50977),d=a(49994),p=a(55621),u=a(44858);const c={class:"main-page",id:""},m={key:0,class:"page-section q-pa-md"},w={class:"container-fluid"},g={class:"row justify-between items-center q-col-gutter-md"},f=(0,o._)("div",{class:"col col-md-auto"},[(0,o._)("div",{class:"text-h6 text-primary"}," Pexterno ")],-1),y={class:"col-md-auto col-12"},k=(0,o.Uk)(" Agregar nuevo "),q={class:"col-md-auto col-12"},_={class:"page-section"},U={class:"container-fluid"},x={class:"row q-col-gutter-x-md"},b={class:"col comp-grid"},v={class:"row q-mb-md q-gutter-sm"},S={key:0,class:"q-px-sm nice-shadow-16"},h=(0,o.Uk)(" Buscar: "),W=(0,o.Uk)(" Usuarios "),B={class:"row q-col-gutter-xs justify-end"},Z=(0,o.Uk)("View"),Q=(0,o.Uk)("Edit"),z=(0,o.Uk)("Delete"),V={class:"row justify-center"},j=(0,o._)("div",{class:"text-grey text-h6 text-center"}," ningún record fue encontrado ",-1),C={key:3,class:""},D={class:"q-pa-md"},P={class:"row items-center justify-between"},I={class:"row items-center q-col-gutter-md"},R={key:0},T=(0,o.Uk)("Delete Selected Items"),$={key:0,class:"row items-center justify-between"},N={class:"col-auto"},K={key:0},E={props:{primaryKey:{type:String,default:"idpexterno"},pageName:{type:String,default:"pexterno"},routeName:{type:String,default:"pexternolist"},apiPath:{type:String,default:"pexterno/index"},paginate:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!1},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:"desc"}},setup(e){const t=e,a=(0,s.q)(),E=(0,d.a)(),F={filters:{},pagination:{page:t.page,rowsPerPage:t.limit,rowsNumber:0,sortBy:t.sortBy,descending:"desc"==t.sortType},searchText:t.search,primaryKey:t.primaryKey},A=(0,u.u)(t.pageName,F),H=(0,p.s)({store:A,props:t}),{records:L,filters:M,totalRecords:G,selectedItems:J,expandedRows:O,pagination:X}=(0,l.BK)(A.state),{pageReady:Y,loading:ee,searchText:te}=(0,l.BK)(H.state),{totalPages:ae,recordsPosition:oe}=H.computedProps,{load:le,clearSearch:re,setPagination:ne,deleteItem:ie,isCurrentRecord:se}=H.methods,de=(0,o.Fl)({get:function(){return"Pexterno"}});return(0,i.Z)((()=>({title:de.value}))),(0,o.bv)((()=>{le()})),(t,i)=>{const s=(0,o.up)("q-icon"),d=(0,o.up)("q-btn"),p=(0,o.up)("q-input"),u=(0,o.up)("q-chip"),F=(0,o.up)("q-breadcrumbs-el"),A=(0,o.up)("q-breadcrumbs"),H=(0,o.up)("q-checkbox"),M=(0,o.up)("q-td"),O=(0,o.up)("q-item-section"),le=(0,o.up)("q-item"),de=(0,o.up)("q-list"),pe=(0,o.up)("q-menu"),ue=(0,o.up)("q-tr"),ce=(0,o.up)("q-table"),me=(0,o.up)("q-spinner"),we=(0,o.up)("q-inner-loading"),ge=(0,o.up)("q-card-section"),fe=(0,o.up)("q-card"),ye=(0,o.up)("q-separator"),ke=(0,o.up)("q-tooltip"),qe=(0,o.up)("q-pagination"),_e=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.iD)("main",c,[e.showHeader?((0,o.wg)(),(0,o.iD)("section",m,[(0,o._)("div",w,[(0,o._)("div",g,[f,(0,o._)("div",y,[(0,l.SU)(E).canView("/pexterno/add")?((0,o.wg)(),(0,o.j4)(d,{key:0,rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",to:"/pexterno/add",class:""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"add"}),k])),_:1})):(0,o.kq)("",!0)]),(0,o._)("div",q,[(0,o.Wm)(p,{debounce:"1000",placeholder:"Buscar",modelValue:(0,l.SU)(te),"onUpdate:modelValue":i[0]||(i[0]=e=>(0,l.dq)(te)?te.value=e:null)},{append:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"search"})])),_:1},8,["modelValue"])])])])])):(0,o.kq)("",!0),(0,o._)("section",_,[(0,o._)("div",U,[(0,o._)("div",x,[(0,o._)("div",b,[(0,o._)("div",v,[(0,l.SU)(te)?((0,o.wg)(),(0,o.iD)("div",S,[h,(0,o.Wm)(u,{icon:"search",removable:"",onRemove:i[1]||(i[1]=e=>(0,l.SU)(re)()),label:(0,l.SU)(te)},null,8,["label"])])):(0,o.kq)("",!0)]),(0,o._)("div",null,[e.showBreadcrumbs&&t.$route.query.tag?((0,o.wg)(),(0,o.j4)(A,{key:0,class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(F,{icon:"arrow_back",class:"text-capitalize",label:t.$route.query.tag,to:"/pexterno"},null,8,["label"]),(0,o.Wm)(F,{label:t.$route.query.label},null,8,["label"])])),_:1})):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o.Wm)(ce,{flat:!0,"table-header-class":"text-h4 bg-grey-2",bordered:!1,columns:(0,l.SU)(a).menus.PexternoListHeaderItems,rows:(0,l.SU)(L),"binary-state-sort":!0,separator:"horizontal",dense:!0,selected:(0,l.SU)(J),"onUpdate:selected":i[2]||(i[2]=e=>(0,l.dq)(J)?J.value=e:null),selection:"multiple","row-key":"idpexterno",pagination:(0,l.SU)(X),"onUpdate:pagination":i[3]||(i[3]=e=>(0,l.dq)(X)?X.value=e:null),"hide-bottom":"",onRequest:(0,l.SU)(ne),loading:(0,l.SU)(ee)},{body:(0,o.w5)((e=>[(0,o.Wm)(ue,{class:(0,r.C_)({selected:(0,l.SU)(se)(e.row)}),props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{dense:"",modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,o.Wm)(M,{key:"idpexterno",props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{padding:"xs",rounded:!1,color:"primary","no-caps":"",unelevated:"",flat:"",to:`/pexterno/view/${e.row.idpexterno}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.idpexterno),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"fechaini",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.fechaini),1)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"fechafin",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.fechafin),1)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"vigente",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.vigente),1)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"codusuario",props:e},{default:(0,o.w5)((()=>[e.row.codusuario?((0,o.wg)(),(0,o.j4)(d,{key:0,onClick:t=>(0,l.SU)(a).openPageDialog({page:"usuarios/view",url:`/usuarios/view/${e.row.codusuario}`,closeBtn:!0}),padding:"xs",flat:"",color:"primary","no-caps":""},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"visibility",size:"xs",class:"q-mr-xs"}),W])),_:2},1032,["onClick"])):(0,o.kq)("",!0)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"glosa",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.glosa),1)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"tipo",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.tipo),1)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"cargo",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.cargo),1)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"dependencia",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.dependencia),1)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"departamento",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.departamento),1)])),_:2},1032,["props"]),(0,o.Wm)(M,{key:"btnactions",props:e,"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",B,[(0,o.Wm)(d,{icon:"menu",padding:"xs",round:"",flat:"",color:"grey"},{default:(0,o.w5)((()=>[(0,o.Wm)(pe,{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left",self:"center middle",anchor:"center middle"},{default:(0,o.w5)((()=>[(0,o.Wm)(de,{dense:"",rounded:"",nav:""},{default:(0,o.w5)((()=>[(0,l.SU)(E).canView("pexterno/view")?(0,o.wy)(((0,o.wg)(),(0,o.j4)(le,{key:0,link:"",clickable:"",to:`/pexterno/view/${e.row.idpexterno}`},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{color:"primary",size:"sm",name:"visibility"})])),_:1}),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[Z])),_:1})])),_:2},1032,["to"])),[[_e]]):(0,o.kq)("",!0),(0,l.SU)(E).canView("pexterno/edit")?(0,o.wy)(((0,o.wg)(),(0,o.j4)(le,{key:1,link:"",clickable:"",to:`/pexterno/edit/${e.row.idpexterno}`},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{color:"positive",size:"sm",name:"edit"})])),_:1}),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[Q])),_:1})])),_:2},1032,["to"])),[[_e]]):(0,o.kq)("",!0),(0,l.SU)(E).canView("pexterno/delete")?(0,o.wy)(((0,o.wg)(),(0,o.j4)(le,{key:2,link:"",clickable:"",onClick:t=>(0,l.SU)(ie)(e.row.idpexterno)},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{color:"negative",size:"sm",name:"delete_sweep"})])),_:1}),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[z])),_:1})])),_:2},1032,["onClick"])),[[_e]]):(0,o.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["columns","rows","selected","pagination","onRequest","loading"]),(0,o._)("div",V,[(0,o.Wm)(M)])]),(0,l.SU)(ee)?((0,o.wg)(),(0,o.j4)(we,{key:1,showing:(0,l.SU)(ee)},{default:(0,o.w5)((()=>[(0,o.Wm)(me,{color:"primary",size:"30px"})])),_:1},8,["showing"])):(0,o.kq)("",!0),(0,l.SU)(Y)&&!(0,l.SU)(L).length?((0,o.wg)(),(0,o.j4)(fe,{key:2,flat:t.$q.screen.gt.md},{default:(0,o.w5)((()=>[(0,o.Wm)(ge,null,{default:(0,o.w5)((()=>[j])),_:1})])),_:1},8,["flat"])):(0,o.kq)("",!0),e.showFooter?((0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(ye),(0,o.wy)((0,o._)("div",D,[(0,o._)("div",P,[(0,o._)("div",I,[(0,l.SU)(E).canView("pexterno/delete")?((0,o.wg)(),(0,o.iD)("div",R,[(0,l.SU)(J).length?((0,o.wg)(),(0,o.j4)(d,{key:0,round:"",flat:"","no-caps":"",unelevated:"",color:"negative",onClick:i[4]||(i[4]=e=>(0,l.SU)(ie)((0,l.SU)(J))),icon:"delete_sweep",class:"q-my-xs",title:"Eliminar seleccionado"},{default:(0,o.w5)((()=>[(0,o.Wm)(ke,null,{default:(0,o.w5)((()=>[T])),_:1})])),_:1})):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),e.paginate&&(0,l.SU)(G)>0?((0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",N,[(0,o.Wm)(u,{square:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Archivos "+(0,r.zw)((0,l.SU)(oe))+" de "+(0,r.zw)((0,l.SU)(G)),1)])),_:1})]),(0,l.SU)(ae)>1?((0,o.wg)(),(0,o.iD)("div",K,[(0,o.Wm)(qe,{color:"primary",modelValue:(0,l.SU)(X).page,"onUpdate:modelValue":i[5]||(i[5]=e=>(0,l.SU)(X).page=e),"direction-links":!0,"boundary-links":!0,"max-pages":5,"boundary-numbers":!0,max:(0,l.SU)(ae)},null,8,["modelValue","max"])])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])],512),[[n.F8,(0,l.SU)(Y)]])])):(0,o.kq)("",!0)])])])])])])}}};var F=a(68879),A=a(22857),H=a(66611),L=a(57691),M=a(72605),G=a(28052),J=a(81463),O=a(31233),X=a(67220),Y=a(11221),ee=a(56362),te=a(13246),ae=a(490),oe=a(76749),le=a(60854),re=a(13902),ne=a(44458),ie=a(63190),se=a(50926),de=a(46858),pe=a(80996),ue=a(51136),ce=a(69984),me=a.n(ce);const we=E,ge=we;me()(E,"components",{QBtn:F.Z,QIcon:A.Z,QInput:H.Z,QChip:L.Z,QBreadcrumbs:M.Z,QBreadcrumbsEl:G.Z,QTable:J.Z,QTr:O.Z,QTd:X.Z,QCheckbox:Y.Z,QMenu:ee.Z,QList:te.Z,QItem:ae.Z,QItemSection:oe.Z,QInnerLoading:le.Z,QSpinner:re.Z,QCard:ne.Z,QCardSection:ie.Z,QSeparator:se.Z,QTooltip:de.Z,QPagination:pe.Z}),me()(E,"directives",{Ripple:ue.Z})}}]);