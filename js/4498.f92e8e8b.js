"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[4498],{4498:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ke});var o=a(59835),l=a(60499),s=a(86970),i=a(61957),r=a(65457),d=a(50977),n=a(49994),c=a(55621),u=a(44858);const p={class:"main-page",id:""},m={key:0,class:"page-section q-pa-md"},w={class:"container-fluid"},k={class:"row justify-between items-center q-col-gutter-md"},g=(0,o._)("div",{class:"col col-md-auto"},[(0,o._)("div",{class:"text-h6 text-primary"}," Stock ")],-1),y={class:"col-md-auto col-12"},f=(0,o.Uk)(" Agregar nuevo "),q={class:"col-md-auto col-12"},_={class:"page-section"},S={class:"container-fluid"},U={class:"row q-col-gutter-x-md"},b={class:"col comp-grid"},h={class:"row q-mb-md q-gutter-sm"},v={key:0,class:"q-px-sm nice-shadow-16"},W=(0,o.Uk)(" Buscar: "),x=(0,o.Uk)(" Gestion "),B={class:"row q-col-gutter-xs justify-end"},Z=(0,o.Uk)("View"),Q=(0,o.Uk)("Edit"),z=(0,o.Uk)("Delete"),V={class:"row justify-center"},j=(0,o._)("div",{class:"text-grey text-h6 text-center"}," ningún record fue encontrado ",-1),C={key:3,class:""},D={class:"q-pa-md"},I={class:"row items-center justify-between"},P={class:"row items-center q-col-gutter-md"},R={key:0},T=(0,o.Uk)("Delete Selected Items"),$={key:0,class:"row items-center justify-between"},N={class:"col-auto"},K={key:0},E={props:{primaryKey:{type:String,default:"idstock"},pageName:{type:String,default:"stock"},routeName:{type:String,default:"stocklist"},apiPath:{type:String,default:"stock/index"},paginate:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!1},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:"desc"}},setup(e){const t=e,a=(0,d.q)(),E=(0,n.a)(),F={filters:{},pagination:{page:t.page,rowsPerPage:t.limit,rowsNumber:0,sortBy:t.sortBy,descending:"desc"==t.sortType},searchText:t.search,primaryKey:t.primaryKey},A=(0,u.u)(t.pageName,F),H=(0,c.s)({store:A,props:t}),{records:L,filters:G,totalRecords:M,selectedItems:J,expandedRows:O,pagination:X}=(0,l.BK)(A.state),{pageReady:Y,loading:ee,searchText:te}=(0,l.BK)(H.state),{totalPages:ae,recordsPosition:oe}=H.computedProps,{load:le,clearSearch:se,setPagination:ie,deleteItem:re,isCurrentRecord:de}=H.methods,ne=(0,o.Fl)({get:function(){return"Stock"}});return(0,r.Z)((()=>({title:ne.value}))),(0,o.bv)((()=>{le()})),(t,r)=>{const d=(0,o.up)("q-icon"),n=(0,o.up)("q-btn"),c=(0,o.up)("q-input"),u=(0,o.up)("q-chip"),F=(0,o.up)("q-breadcrumbs-el"),A=(0,o.up)("q-breadcrumbs"),H=(0,o.up)("q-checkbox"),G=(0,o.up)("q-td"),O=(0,o.up)("q-item-section"),le=(0,o.up)("q-item"),ne=(0,o.up)("q-list"),ce=(0,o.up)("q-menu"),ue=(0,o.up)("q-tr"),pe=(0,o.up)("q-table"),me=(0,o.up)("q-spinner"),we=(0,o.up)("q-inner-loading"),ke=(0,o.up)("q-card-section"),ge=(0,o.up)("q-card"),ye=(0,o.up)("q-separator"),fe=(0,o.up)("q-tooltip"),qe=(0,o.up)("q-pagination"),_e=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.iD)("main",p,[e.showHeader?((0,o.wg)(),(0,o.iD)("section",m,[(0,o._)("div",w,[(0,o._)("div",k,[g,(0,o._)("div",y,[(0,l.SU)(E).canView("/stock/add")?((0,o.wg)(),(0,o.j4)(n,{key:0,rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",to:"/stock/add",class:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{name:"add"}),f])),_:1})):(0,o.kq)("",!0)]),(0,o._)("div",q,[(0,o.Wm)(c,{debounce:"1000",placeholder:"Buscar",modelValue:(0,l.SU)(te),"onUpdate:modelValue":r[0]||(r[0]=e=>(0,l.dq)(te)?te.value=e:null)},{append:(0,o.w5)((()=>[(0,o.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])])])])])):(0,o.kq)("",!0),(0,o._)("section",_,[(0,o._)("div",S,[(0,o._)("div",U,[(0,o._)("div",b,[(0,o._)("div",h,[(0,l.SU)(te)?((0,o.wg)(),(0,o.iD)("div",v,[W,(0,o.Wm)(u,{icon:"search",removable:"",onRemove:r[1]||(r[1]=e=>(0,l.SU)(se)()),label:(0,l.SU)(te)},null,8,["label"])])):(0,o.kq)("",!0)]),(0,o._)("div",null,[e.showBreadcrumbs&&t.$route.query.tag?((0,o.wg)(),(0,o.j4)(A,{key:0,class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(F,{icon:"arrow_back",class:"text-capitalize",label:t.$route.query.tag,to:"/stock"},null,8,["label"]),(0,o.Wm)(F,{label:t.$route.query.label},null,8,["label"])])),_:1})):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o.Wm)(pe,{flat:!0,"table-header-class":"text-h4 bg-grey-2",bordered:!1,columns:(0,l.SU)(a).menus.StockListHeaderItems,rows:(0,l.SU)(L),"binary-state-sort":!0,separator:"horizontal",dense:!0,selected:(0,l.SU)(J),"onUpdate:selected":r[2]||(r[2]=e=>(0,l.dq)(J)?J.value=e:null),selection:"multiple","row-key":"idstock",pagination:(0,l.SU)(X),"onUpdate:pagination":r[3]||(r[3]=e=>(0,l.dq)(X)?X.value=e:null),"hide-bottom":"",onRequest:(0,l.SU)(ie),loading:(0,l.SU)(ee)},{body:(0,o.w5)((e=>[(0,o.Wm)(ue,{class:(0,s.C_)({selected:(0,l.SU)(de)(e.row)}),props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{dense:"",modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,o.Wm)(G,{key:"idstock",props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{padding:"xs",rounded:!1,color:"primary","no-caps":"",unelevated:"",flat:"",to:`/stock/view/${e.row.idstock}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.idstock),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"inicial",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.inicial),1)])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"cantidad",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.cantidad),1)])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"precio",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.precio),1)])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"fechaup",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.fechaup),1)])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"habilitado",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.habilitado),1)])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"codalmacen",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.codalmacen),1)])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"codmaterial",props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.codmaterial),1)])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"codgestion",props:e},{default:(0,o.w5)((()=>[e.row.codgestion?((0,o.wg)(),(0,o.j4)(n,{key:0,onClick:t=>(0,l.SU)(a).openPageDialog({page:"gestion/view",url:`/gestion/view/${e.row.codgestion}`,closeBtn:!0}),padding:"xs",flat:"",color:"primary","no-caps":""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{name:"visibility",size:"xs",class:"q-mr-xs"}),x])),_:2},1032,["onClick"])):(0,o.kq)("",!0)])),_:2},1032,["props"]),(0,o.Wm)(G,{key:"btnactions",props:e,"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",B,[(0,o.Wm)(n,{icon:"menu",padding:"xs",round:"",flat:"",color:"grey"},{default:(0,o.w5)((()=>[(0,o.Wm)(ce,{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left",self:"center middle",anchor:"center middle"},{default:(0,o.w5)((()=>[(0,o.Wm)(ne,{dense:"",rounded:"",nav:""},{default:(0,o.w5)((()=>[(0,l.SU)(E).canView("stock/view")?(0,o.wy)(((0,o.wg)(),(0,o.j4)(le,{key:0,link:"",clickable:"",to:`/stock/view/${e.row.idstock}`},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{color:"primary",size:"sm",name:"visibility"})])),_:1}),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[Z])),_:1})])),_:2},1032,["to"])),[[_e]]):(0,o.kq)("",!0),(0,l.SU)(E).canView("stock/edit")?(0,o.wy)(((0,o.wg)(),(0,o.j4)(le,{key:1,link:"",clickable:"",to:`/stock/edit/${e.row.idstock}`},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{color:"positive",size:"sm",name:"edit"})])),_:1}),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[Q])),_:1})])),_:2},1032,["to"])),[[_e]]):(0,o.kq)("",!0),(0,l.SU)(E).canView("stock/delete")?(0,o.wy)(((0,o.wg)(),(0,o.j4)(le,{key:2,link:"",clickable:"",onClick:t=>(0,l.SU)(re)(e.row.idstock)},{default:(0,o.w5)((()=>[(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{color:"negative",size:"sm",name:"delete_sweep"})])),_:1}),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[z])),_:1})])),_:2},1032,["onClick"])),[[_e]]):(0,o.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["columns","rows","selected","pagination","onRequest","loading"]),(0,o._)("div",V,[(0,o.Wm)(G)])]),(0,l.SU)(ee)?((0,o.wg)(),(0,o.j4)(we,{key:1,showing:(0,l.SU)(ee)},{default:(0,o.w5)((()=>[(0,o.Wm)(me,{color:"primary",size:"30px"})])),_:1},8,["showing"])):(0,o.kq)("",!0),(0,l.SU)(Y)&&!(0,l.SU)(L).length?((0,o.wg)(),(0,o.j4)(ge,{key:2,flat:t.$q.screen.gt.md},{default:(0,o.w5)((()=>[(0,o.Wm)(ke,null,{default:(0,o.w5)((()=>[j])),_:1})])),_:1},8,["flat"])):(0,o.kq)("",!0),e.showFooter?((0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(ye),(0,o.wy)((0,o._)("div",D,[(0,o._)("div",I,[(0,o._)("div",P,[(0,l.SU)(E).canView("stock/delete")?((0,o.wg)(),(0,o.iD)("div",R,[(0,l.SU)(J).length?((0,o.wg)(),(0,o.j4)(n,{key:0,round:"",flat:"","no-caps":"",unelevated:"",color:"negative",onClick:r[4]||(r[4]=e=>(0,l.SU)(re)((0,l.SU)(J))),icon:"delete_sweep",class:"q-my-xs",title:"Eliminar seleccionado"},{default:(0,o.w5)((()=>[(0,o.Wm)(fe,null,{default:(0,o.w5)((()=>[T])),_:1})])),_:1})):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),e.paginate&&(0,l.SU)(M)>0?((0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",N,[(0,o.Wm)(u,{square:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Archivos "+(0,s.zw)((0,l.SU)(oe))+" de "+(0,s.zw)((0,l.SU)(M)),1)])),_:1})]),(0,l.SU)(ae)>1?((0,o.wg)(),(0,o.iD)("div",K,[(0,o.Wm)(qe,{color:"primary",modelValue:(0,l.SU)(X).page,"onUpdate:modelValue":r[5]||(r[5]=e=>(0,l.SU)(X).page=e),"direction-links":!0,"boundary-links":!0,"max-pages":5,"boundary-numbers":!0,max:(0,l.SU)(ae)},null,8,["modelValue","max"])])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])],512),[[i.F8,(0,l.SU)(Y)]])])):(0,o.kq)("",!0)])])])])])])}}};var F=a(68879),A=a(22857),H=a(66611),L=a(57691),G=a(72605),M=a(28052),J=a(81463),O=a(31233),X=a(67220),Y=a(11221),ee=a(56362),te=a(13246),ae=a(490),oe=a(76749),le=a(60854),se=a(13902),ie=a(44458),re=a(63190),de=a(50926),ne=a(46858),ce=a(80996),ue=a(51136),pe=a(69984),me=a.n(pe);const we=E,ke=we;me()(E,"components",{QBtn:F.Z,QIcon:A.Z,QInput:H.Z,QChip:L.Z,QBreadcrumbs:G.Z,QBreadcrumbsEl:M.Z,QTable:J.Z,QTr:O.Z,QTd:X.Z,QCheckbox:Y.Z,QMenu:ee.Z,QList:te.Z,QItem:ae.Z,QItemSection:oe.Z,QInnerLoading:le.Z,QSpinner:se.Z,QCard:ie.Z,QCardSection:re.Z,QSeparator:de.Z,QTooltip:ne.Z,QPagination:ce.Z}),me()(E,"directives",{Ripple:ue.Z})}}]);