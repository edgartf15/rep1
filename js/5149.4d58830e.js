"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[5149],{5149:(e,t,a)=>{a.r(t),a.d(t,{default:()=>we});var l=a(59835),o=a(60499),i=a(86970),s=a(61957),r=a(65457),d=a(50977),n=a(49994),u=a(55621),c=a(44858);const m={class:"main-page",id:""},p={key:0,class:"page-section q-pa-md"},w={class:"container-fluid"},_={class:"row justify-between items-center q-col-gutter-md"},g=(0,l._)("div",{class:"col col-md-auto"},[(0,l._)("div",{class:"text-h6 text-primary"}," Item Escala ")],-1),y={class:"col-md-auto col-12"},f=(0,l.Uk)(" Agregar nuevo "),k={class:"col-md-auto col-12"},q={class:"page-section"},b={class:"container-fluid"},S={class:"row q-col-gutter-x-md"},U={class:"col comp-grid"},h={class:"row q-mb-md q-gutter-sm"},v={key:0,class:"q-px-sm nice-shadow-16"},W=(0,l.Uk)(" Buscar: "),x={class:"row q-col-gutter-xs justify-end"},B=(0,l.Uk)("View"),Z=(0,l.Uk)("Edit"),Q=(0,l.Uk)("Delete"),V={class:"row justify-center"},z=(0,l._)("div",{class:"text-grey text-h6 text-center"}," ningún record fue encontrado ",-1),j={key:3,class:""},I={class:"q-pa-md"},C={class:"row items-center justify-between"},D={class:"row items-center q-col-gutter-md"},R={key:0},P=(0,l.Uk)("Delete Selected Items"),T={key:0,class:"row items-center justify-between"},E={class:"col-auto"},N={key:0},$={props:{primaryKey:{type:String,default:"id_item_denom"},pageName:{type:String,default:"item_escala"},routeName:{type:String,default:"item_escalalist"},apiPath:{type:String,default:"item_escala/index"},paginate:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!1},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:"desc"}},setup(e){const t=e,a=(0,d.q)(),$=(0,n.a)(),K={filters:{},pagination:{page:t.page,rowsPerPage:t.limit,rowsNumber:0,sortBy:t.sortBy,descending:"desc"==t.sortType},searchText:t.search,primaryKey:t.primaryKey},F=(0,c.u)(t.pageName,K),A=(0,u.s)({store:F,props:t}),{records:H,filters:L,totalRecords:M,selectedItems:G,expandedRows:J,pagination:O}=(0,o.BK)(F.state),{pageReady:X,loading:Y,searchText:ee}=(0,o.BK)(A.state),{totalPages:te,recordsPosition:ae}=A.computedProps,{load:le,clearSearch:oe,setPagination:ie,deleteItem:se,isCurrentRecord:re}=A.methods,de=(0,l.Fl)({get:function(){return"Item Escala"}});return(0,r.Z)((()=>({title:de.value}))),(0,l.bv)((()=>{le()})),(t,r)=>{const d=(0,l.up)("q-icon"),n=(0,l.up)("q-btn"),u=(0,l.up)("q-input"),c=(0,l.up)("q-chip"),K=(0,l.up)("q-breadcrumbs-el"),F=(0,l.up)("q-breadcrumbs"),A=(0,l.up)("q-checkbox"),L=(0,l.up)("q-td"),J=(0,l.up)("q-item-section"),le=(0,l.up)("q-item"),de=(0,l.up)("q-list"),ne=(0,l.up)("q-menu"),ue=(0,l.up)("q-tr"),ce=(0,l.up)("q-table"),me=(0,l.up)("q-spinner"),pe=(0,l.up)("q-inner-loading"),we=(0,l.up)("q-card-section"),_e=(0,l.up)("q-card"),ge=(0,l.up)("q-separator"),ye=(0,l.up)("q-tooltip"),fe=(0,l.up)("q-pagination"),ke=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.iD)("main",m,[e.showHeader?((0,l.wg)(),(0,l.iD)("section",p,[(0,l._)("div",w,[(0,l._)("div",_,[g,(0,l._)("div",y,[(0,o.SU)($).canView("/item_escala/add")?((0,l.wg)(),(0,l.j4)(n,{key:0,rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",to:"/item_escala/add",class:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"add"}),f])),_:1})):(0,l.kq)("",!0)]),(0,l._)("div",k,[(0,l.Wm)(u,{debounce:"1000",placeholder:"Buscar",modelValue:(0,o.SU)(ee),"onUpdate:modelValue":r[0]||(r[0]=e=>(0,o.dq)(ee)?ee.value=e:null)},{append:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])])])])])):(0,l.kq)("",!0),(0,l._)("section",q,[(0,l._)("div",b,[(0,l._)("div",S,[(0,l._)("div",U,[(0,l._)("div",h,[(0,o.SU)(ee)?((0,l.wg)(),(0,l.iD)("div",v,[W,(0,l.Wm)(c,{icon:"search",removable:"",onRemove:r[1]||(r[1]=e=>(0,o.SU)(oe)()),label:(0,o.SU)(ee)},null,8,["label"])])):(0,l.kq)("",!0)]),(0,l._)("div",null,[e.showBreadcrumbs&&t.$route.query.tag?((0,l.wg)(),(0,l.j4)(F,{key:0,class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{icon:"arrow_back",class:"text-capitalize",label:t.$route.query.tag,to:"/item_escala"},null,8,["label"]),(0,l.Wm)(K,{label:t.$route.query.label},null,8,["label"])])),_:1})):(0,l.kq)("",!0),(0,l._)("div",null,[(0,l.Wm)(ce,{flat:!0,"table-header-class":"text-h4 bg-grey-2",bordered:!1,columns:(0,o.SU)(a).menus.ItemEscalaListHeaderItems,rows:(0,o.SU)(H),"binary-state-sort":!0,separator:"horizontal",dense:!0,selected:(0,o.SU)(G),"onUpdate:selected":r[2]||(r[2]=e=>(0,o.dq)(G)?G.value=e:null),selection:"multiple","row-key":"id_item_denom",pagination:(0,o.SU)(O),"onUpdate:pagination":r[3]||(r[3]=e=>(0,o.dq)(O)?O.value=e:null),"hide-bottom":"",onRequest:(0,o.SU)(ie),loading:(0,o.SU)(Y)},{body:(0,l.w5)((e=>[(0,l.Wm)(ue,{class:(0,i.C_)({selected:(0,o.SU)(re)(e.row)}),props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{"auto-width":""},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{dense:"",modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.Wm)(L,{key:"btnactions",props:e,"auto-width":""},{default:(0,l.w5)((()=>[(0,l._)("div",x,[(0,l.Wm)(n,{icon:"menu",padding:"xs",round:"",flat:"",color:"grey"},{default:(0,l.w5)((()=>[(0,l.Wm)(ne,{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left",self:"center middle",anchor:"center middle"},{default:(0,l.w5)((()=>[(0,l.Wm)(de,{dense:"",rounded:"",nav:""},{default:(0,l.w5)((()=>[(0,o.SU)($).canView("item_escala/view")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(le,{key:0,link:"",clickable:"",to:`/item_escala/view/${e.row.id_item_denom}`},{default:(0,l.w5)((()=>[(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"primary",size:"sm",name:"visibility"})])),_:1}),(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[B])),_:1})])),_:2},1032,["to"])),[[ke]]):(0,l.kq)("",!0),(0,o.SU)($).canView("item_escala/edit")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(le,{key:1,link:"",clickable:"",to:`/item_escala/edit/${e.row.id_item_denom}`},{default:(0,l.w5)((()=>[(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"positive",size:"sm",name:"edit"})])),_:1}),(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[Z])),_:1})])),_:2},1032,["to"])),[[ke]]):(0,l.kq)("",!0),(0,o.SU)($).canView("item_escala/delete")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(le,{key:2,link:"",clickable:"",onClick:t=>(0,o.SU)(se)(e.row.id_item_denom)},{default:(0,l.w5)((()=>[(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"negative",size:"sm",name:"delete_sweep"})])),_:1}),(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[Q])),_:1})])),_:2},1032,["onClick"])),[[ke]]):(0,l.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"id_item",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.id_item),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"h_b_item",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.h_b_item),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"id_item_denom",props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{padding:"xs",rounded:!1,color:"primary","no-caps":"",unelevated:"",flat:"",to:`/item_escala/view/${e.row.id_item_denom}`},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.id_item_denom),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"nro_items",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.nro_items),1)])),_:2},1032,["props"]),(0,l.Wm)(L,{key:"descripcion_item",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.descripcion_item),1)])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["columns","rows","selected","pagination","onRequest","loading"]),(0,l._)("div",V,[(0,l.Wm)(L)])]),(0,o.SU)(Y)?((0,l.wg)(),(0,l.j4)(pe,{key:1,showing:(0,o.SU)(Y)},{default:(0,l.w5)((()=>[(0,l.Wm)(me,{color:"primary",size:"30px"})])),_:1},8,["showing"])):(0,l.kq)("",!0),(0,o.SU)(X)&&!(0,o.SU)(H).length?((0,l.wg)(),(0,l.j4)(_e,{key:2,flat:t.$q.screen.gt.md},{default:(0,l.w5)((()=>[(0,l.Wm)(we,null,{default:(0,l.w5)((()=>[z])),_:1})])),_:1},8,["flat"])):(0,l.kq)("",!0),e.showFooter?((0,l.wg)(),(0,l.iD)("div",j,[(0,l.Wm)(ge),(0,l.wy)((0,l._)("div",I,[(0,l._)("div",C,[(0,l._)("div",D,[(0,o.SU)($).canView("item_escala/delete")?((0,l.wg)(),(0,l.iD)("div",R,[(0,o.SU)(G).length?((0,l.wg)(),(0,l.j4)(n,{key:0,round:"",flat:"","no-caps":"",unelevated:"",color:"negative",onClick:r[4]||(r[4]=e=>(0,o.SU)(se)((0,o.SU)(G))),icon:"delete_sweep",class:"q-my-xs",title:"Eliminar seleccionado"},{default:(0,l.w5)((()=>[(0,l.Wm)(ye,null,{default:(0,l.w5)((()=>[P])),_:1})])),_:1})):(0,l.kq)("",!0)])):(0,l.kq)("",!0)]),e.paginate&&(0,o.SU)(M)>0?((0,l.wg)(),(0,l.iD)("div",T,[(0,l._)("div",E,[(0,l.Wm)(c,{square:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Archivos "+(0,i.zw)((0,o.SU)(ae))+" de "+(0,i.zw)((0,o.SU)(M)),1)])),_:1})]),(0,o.SU)(te)>1?((0,l.wg)(),(0,l.iD)("div",N,[(0,l.Wm)(fe,{color:"primary",modelValue:(0,o.SU)(O).page,"onUpdate:modelValue":r[5]||(r[5]=e=>(0,o.SU)(O).page=e),"direction-links":!0,"boundary-links":!0,"max-pages":5,"boundary-numbers":!0,max:(0,o.SU)(te)},null,8,["modelValue","max"])])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])],512),[[s.F8,(0,o.SU)(X)]])])):(0,l.kq)("",!0)])])])])])])}}};var K=a(68879),F=a(22857),A=a(66611),H=a(57691),L=a(72605),M=a(28052),G=a(81463),J=a(31233),O=a(67220),X=a(11221),Y=a(56362),ee=a(13246),te=a(490),ae=a(76749),le=a(60854),oe=a(13902),ie=a(44458),se=a(63190),re=a(50926),de=a(46858),ne=a(80996),ue=a(51136),ce=a(69984),me=a.n(ce);const pe=$,we=pe;me()($,"components",{QBtn:K.Z,QIcon:F.Z,QInput:A.Z,QChip:H.Z,QBreadcrumbs:L.Z,QBreadcrumbsEl:M.Z,QTable:G.Z,QTr:J.Z,QTd:O.Z,QCheckbox:X.Z,QMenu:Y.Z,QList:ee.Z,QItem:te.Z,QItemSection:ae.Z,QInnerLoading:le.Z,QSpinner:oe.Z,QCard:ie.Z,QCardSection:se.Z,QSeparator:re.Z,QTooltip:de.Z,QPagination:ne.Z}),me()($,"directives",{Ripple:ue.Z})}}]);