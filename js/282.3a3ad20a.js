"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[282],{90282:(e,t,o)=>{o.r(t),o.d(t,{default:()=>we});var a=o(59835),l=o(60499),r=o(86970),s=o(61957),d=o(65457),i=o(50977),n=o(49994),p=o(55621),u=o(44858);const c={class:"main-page",id:""},m={key:0,class:"page-section q-pa-md"},w={class:"container-fluid"},g={class:"row justify-between items-center q-col-gutter-md"},_=(0,a._)("div",{class:"col col-md-auto"},[(0,a._)("div",{class:"text-h6 text-primary"}," Log Reportes ")],-1),f={class:"col-md-auto col-12"},y=(0,a.Uk)(" Agregar nuevo "),k={class:"col-md-auto col-12"},U={class:"page-section"},b={class:"container-fluid"},q={class:"row q-col-gutter-x-md"},v={class:"col comp-grid"},h={class:"row q-mb-md q-gutter-sm"},S={key:0,class:"q-px-sm nice-shadow-16"},W=(0,a.Uk)(" Buscar: "),x={class:"row q-col-gutter-xs justify-end"},B=(0,a.Uk)("View"),z=(0,a.Uk)("Edit"),Z=(0,a.Uk)("Delete"),Q={class:"row justify-center"},V=(0,a._)("div",{class:"text-grey text-h6 text-center"}," ningún record fue encontrado ",-1),j={key:3,class:""},R={class:"q-pa-md"},C={class:"row items-center justify-between"},D={class:"row items-center q-col-gutter-md"},I={key:0},P=(0,a.Uk)("Delete Selected Items"),T={key:0,class:"row items-center justify-between"},N={class:"col-auto"},$={key:0},L={props:{primaryKey:{type:String,default:"id_log_reporte"},pageName:{type:String,default:"log_reportes"},routeName:{type:String,default:"log_reporteslist"},apiPath:{type:String,default:"log_reportes/index"},paginate:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!1},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:"desc"}},setup(e){const t=e,o=(0,i.q)(),L=(0,n.a)(),K={filters:{},pagination:{page:t.page,rowsPerPage:t.limit,rowsNumber:0,sortBy:t.sortBy,descending:"desc"==t.sortType},searchText:t.search,primaryKey:t.primaryKey},E=(0,u.u)(t.pageName,K),F=(0,p.s)({store:E,props:t}),{records:A,filters:H,totalRecords:M,selectedItems:G,expandedRows:J,pagination:O}=(0,l.BK)(E.state),{pageReady:X,loading:Y,searchText:ee}=(0,l.BK)(F.state),{totalPages:te,recordsPosition:oe}=F.computedProps,{load:ae,clearSearch:le,setPagination:re,deleteItem:se,isCurrentRecord:de}=F.methods,ie=(0,a.Fl)({get:function(){return"Log Reportes"}});return(0,d.Z)((()=>({title:ie.value}))),(0,a.bv)((()=>{ae()})),(t,d)=>{const i=(0,a.up)("q-icon"),n=(0,a.up)("q-btn"),p=(0,a.up)("q-input"),u=(0,a.up)("q-chip"),K=(0,a.up)("q-breadcrumbs-el"),E=(0,a.up)("q-breadcrumbs"),F=(0,a.up)("q-checkbox"),H=(0,a.up)("q-td"),J=(0,a.up)("q-item-section"),ae=(0,a.up)("q-item"),ie=(0,a.up)("q-list"),ne=(0,a.up)("q-menu"),pe=(0,a.up)("q-tr"),ue=(0,a.up)("q-table"),ce=(0,a.up)("q-spinner"),me=(0,a.up)("q-inner-loading"),we=(0,a.up)("q-card-section"),ge=(0,a.up)("q-card"),_e=(0,a.up)("q-separator"),fe=(0,a.up)("q-tooltip"),ye=(0,a.up)("q-pagination"),ke=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.iD)("main",c,[e.showHeader?((0,a.wg)(),(0,a.iD)("section",m,[(0,a._)("div",w,[(0,a._)("div",g,[_,(0,a._)("div",f,[(0,l.SU)(L).canView("/log_reportes/add")?((0,a.wg)(),(0,a.j4)(n,{key:0,rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",to:"/log_reportes/add",class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{name:"add"}),y])),_:1})):(0,a.kq)("",!0)]),(0,a._)("div",k,[(0,a.Wm)(p,{debounce:"1000",placeholder:"Buscar",modelValue:(0,l.SU)(ee),"onUpdate:modelValue":d[0]||(d[0]=e=>(0,l.dq)(ee)?ee.value=e:null)},{append:(0,a.w5)((()=>[(0,a.Wm)(i,{name:"search"})])),_:1},8,["modelValue"])])])])])):(0,a.kq)("",!0),(0,a._)("section",U,[(0,a._)("div",b,[(0,a._)("div",q,[(0,a._)("div",v,[(0,a._)("div",h,[(0,l.SU)(ee)?((0,a.wg)(),(0,a.iD)("div",S,[W,(0,a.Wm)(u,{icon:"search",removable:"",onRemove:d[1]||(d[1]=e=>(0,l.SU)(le)()),label:(0,l.SU)(ee)},null,8,["label"])])):(0,a.kq)("",!0)]),(0,a._)("div",null,[e.showBreadcrumbs&&t.$route.query.tag?((0,a.wg)(),(0,a.j4)(E,{key:0,class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{icon:"arrow_back",class:"text-capitalize",label:t.$route.query.tag,to:"/log_reportes"},null,8,["label"]),(0,a.Wm)(K,{label:t.$route.query.label},null,8,["label"])])),_:1})):(0,a.kq)("",!0),(0,a._)("div",null,[(0,a.Wm)(ue,{flat:!0,"table-header-class":"text-h4 bg-grey-2",bordered:!1,columns:(0,l.SU)(o).menus.LogReportesListHeaderItems,rows:(0,l.SU)(A),"binary-state-sort":!0,separator:"horizontal",dense:!0,selected:(0,l.SU)(G),"onUpdate:selected":d[2]||(d[2]=e=>(0,l.dq)(G)?G.value=e:null),selection:"multiple","row-key":"id_log_reporte",pagination:(0,l.SU)(O),"onUpdate:pagination":d[3]||(d[3]=e=>(0,l.dq)(O)?O.value=e:null),"hide-bottom":"",onRequest:(0,l.SU)(re),loading:(0,l.SU)(Y)},{body:(0,a.w5)((e=>[(0,a.Wm)(pe,{class:(0,r.C_)({selected:(0,l.SU)(de)(e.row)}),props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{"auto-width":""},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{dense:"",modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,a.Wm)(H,{key:"feccumple",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.feccumple),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"vacaciones",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.vacaciones),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"cviajes",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.cviajes),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"bmedicas",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.bmedicas),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"singocehaber",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.singocehaber),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"id_log_reporte",props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{padding:"xs",rounded:!1,color:"primary","no-caps":"",unelevated:"",flat:"",to:`/log_reportes/view/${e.row.id_log_reporte}`},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.id_log_reporte),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"fecha_reporte",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.fecha_reporte),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"falta",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.falta),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"abandono",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.abandono),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"atraso",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.atraso),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"clave",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.clave),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"usuario_reporte",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.usuario_reporte),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"fecha_reporte_cadena",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.fecha_reporte_cadena),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"documento_identidad",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.documento_identidad),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"nombre_completo",props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.row.nombre_completo),1)])),_:2},1032,["props"]),(0,a.Wm)(H,{key:"btnactions",props:e,"auto-width":""},{default:(0,a.w5)((()=>[(0,a._)("div",x,[(0,a.Wm)(n,{icon:"menu",padding:"xs",round:"",flat:"",color:"grey"},{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left",self:"center middle",anchor:"center middle"},{default:(0,a.w5)((()=>[(0,a.Wm)(ie,{dense:"",rounded:"",nav:""},{default:(0,a.w5)((()=>[(0,l.SU)(L).canView("log_reportes/view")?(0,a.wy)(((0,a.wg)(),(0,a.j4)(ae,{key:0,link:"",clickable:"",to:`/log_reportes/view/${e.row.id_log_reporte}`},{default:(0,a.w5)((()=>[(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{color:"primary",size:"sm",name:"visibility"})])),_:1}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[B])),_:1})])),_:2},1032,["to"])),[[ke]]):(0,a.kq)("",!0),(0,l.SU)(L).canView("log_reportes/edit")?(0,a.wy)(((0,a.wg)(),(0,a.j4)(ae,{key:1,link:"",clickable:"",to:`/log_reportes/edit/${e.row.id_log_reporte}`},{default:(0,a.w5)((()=>[(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{color:"positive",size:"sm",name:"edit"})])),_:1}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[z])),_:1})])),_:2},1032,["to"])),[[ke]]):(0,a.kq)("",!0),(0,l.SU)(L).canView("log_reportes/delete")?(0,a.wy)(((0,a.wg)(),(0,a.j4)(ae,{key:2,link:"",clickable:"",onClick:t=>(0,l.SU)(se)(e.row.id_log_reporte)},{default:(0,a.w5)((()=>[(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{color:"negative",size:"sm",name:"delete_sweep"})])),_:1}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[Z])),_:1})])),_:2},1032,["onClick"])),[[ke]]):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["columns","rows","selected","pagination","onRequest","loading"]),(0,a._)("div",Q,[(0,a.Wm)(H)])]),(0,l.SU)(Y)?((0,a.wg)(),(0,a.j4)(me,{key:1,showing:(0,l.SU)(Y)},{default:(0,a.w5)((()=>[(0,a.Wm)(ce,{color:"primary",size:"30px"})])),_:1},8,["showing"])):(0,a.kq)("",!0),(0,l.SU)(X)&&!(0,l.SU)(A).length?((0,a.wg)(),(0,a.j4)(ge,{key:2,flat:t.$q.screen.gt.md},{default:(0,a.w5)((()=>[(0,a.Wm)(we,null,{default:(0,a.w5)((()=>[V])),_:1})])),_:1},8,["flat"])):(0,a.kq)("",!0),e.showFooter?((0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(_e),(0,a.wy)((0,a._)("div",R,[(0,a._)("div",C,[(0,a._)("div",D,[(0,l.SU)(L).canView("log_reportes/delete")?((0,a.wg)(),(0,a.iD)("div",I,[(0,l.SU)(G).length?((0,a.wg)(),(0,a.j4)(n,{key:0,round:"",flat:"","no-caps":"",unelevated:"",color:"negative",onClick:d[4]||(d[4]=e=>(0,l.SU)(se)((0,l.SU)(G))),icon:"delete_sweep",class:"q-my-xs",title:"Eliminar seleccionado"},{default:(0,a.w5)((()=>[(0,a.Wm)(fe,null,{default:(0,a.w5)((()=>[P])),_:1})])),_:1})):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),e.paginate&&(0,l.SU)(M)>0?((0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",N,[(0,a.Wm)(u,{square:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Archivos "+(0,r.zw)((0,l.SU)(oe))+" de "+(0,r.zw)((0,l.SU)(M)),1)])),_:1})]),(0,l.SU)(te)>1?((0,a.wg)(),(0,a.iD)("div",$,[(0,a.Wm)(ye,{color:"primary",modelValue:(0,l.SU)(O).page,"onUpdate:modelValue":d[5]||(d[5]=e=>(0,l.SU)(O).page=e),"direction-links":!0,"boundary-links":!0,"max-pages":5,"boundary-numbers":!0,max:(0,l.SU)(te)},null,8,["modelValue","max"])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])],512),[[s.F8,(0,l.SU)(X)]])])):(0,a.kq)("",!0)])])])])])])}}};var K=o(68879),E=o(22857),F=o(66611),A=o(57691),H=o(72605),M=o(28052),G=o(81463),J=o(31233),O=o(67220),X=o(11221),Y=o(56362),ee=o(13246),te=o(490),oe=o(76749),ae=o(60854),le=o(13902),re=o(44458),se=o(63190),de=o(50926),ie=o(46858),ne=o(80996),pe=o(51136),ue=o(69984),ce=o.n(ue);const me=L,we=me;ce()(L,"components",{QBtn:K.Z,QIcon:E.Z,QInput:F.Z,QChip:A.Z,QBreadcrumbs:H.Z,QBreadcrumbsEl:M.Z,QTable:G.Z,QTr:J.Z,QTd:O.Z,QCheckbox:X.Z,QMenu:Y.Z,QList:ee.Z,QItem:te.Z,QItemSection:oe.Z,QInnerLoading:ae.Z,QSpinner:le.Z,QCard:re.Z,QCardSection:se.Z,QSeparator:de.Z,QTooltip:ie.Z,QPagination:ne.Z}),ce()(L,"directives",{Ripple:pe.Z})}}]);