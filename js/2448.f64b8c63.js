"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[2448],{52448:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ge});var l=t(59835),o=t(60499),r=t(86970),i=t(61957),n=t(65457),d=t(50977),s=t(49994),u=t(55621),p=t(44858);const c={class:"main-page",id:""},m={key:0,class:"page-section q-pa-md"},w={class:"container-fluid"},g={class:"row justify-between items-center q-col-gutter-md"},f=(0,l._)("div",{class:"col col-md-auto"},[(0,l._)("div",{class:"text-h6 text-primary"}," Plantilla Unidad Organizacional ")],-1),y={class:"col-md-auto col-12"},k=(0,l.Uk)(" Agregar nuevo "),_={class:"col-md-auto col-12"},q={class:"page-section"},U={class:"container-fluid"},b={class:"row q-col-gutter-x-md"},S={class:"col comp-grid"},h={class:"row q-mb-md q-gutter-sm"},v={key:0,class:"q-px-sm nice-shadow-16"},W=(0,l.Uk)(" Buscar: "),x={class:"row q-col-gutter-xs justify-end"},B=(0,l.Uk)("View"),Z=(0,l.Uk)("Edit"),Q=(0,l.Uk)("Delete"),z={class:"row justify-center"},V=(0,l._)("div",{class:"text-grey text-h6 text-center"}," ningún record fue encontrado ",-1),C={key:3,class:""},D={class:"q-pa-md"},j={class:"row items-center justify-between"},I={class:"row items-center q-col-gutter-md"},P={key:0},R=(0,l.Uk)("Delete Selected Items"),T={key:1},N={key:0,class:"row items-center justify-between"},$={class:"col-auto"},E={key:0},K={props:{primaryKey:{type:String,default:"idpuo"},pageName:{type:String,default:"plantillauo"},routeName:{type:String,default:"plantillauolist"},apiPath:{type:String,default:"plantillauo/index"},paginate:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!0},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:"desc"}},setup(e){const a=e,t=(0,d.q)(),K=(0,s.a)(),F={filters:{},pagination:{page:a.page,rowsPerPage:a.limit,rowsNumber:0,sortBy:a.sortBy,descending:"desc"==a.sortType},searchText:a.search,primaryKey:a.primaryKey},A=(0,p.u)(a.pageName,F),H=(0,u.s)({store:A,props:a}),{records:L,filters:M,totalRecords:O,selectedItems:G,expandedRows:J,pagination:X}=(0,o.BK)(A.state),{pageReady:Y,loading:ee,searchText:ae}=(0,o.BK)(H.state),{totalPages:te,recordsPosition:le}=H.computedProps,{load:oe,clearSearch:re,setPagination:ie,deleteItem:ne,isCurrentRecord:de,importComplete:se}=H.methods,ue=(0,l.Fl)({get:function(){return"Estructura Organizacional"}});return(0,n.Z)((()=>({title:ue.value}))),(0,l.bv)((()=>{oe()})),(a,n)=>{const d=(0,l.up)("q-icon"),s=(0,l.up)("q-btn"),u=(0,l.up)("q-input"),p=(0,l.up)("q-chip"),F=(0,l.up)("q-breadcrumbs-el"),A=(0,l.up)("q-breadcrumbs"),H=(0,l.up)("q-checkbox"),M=(0,l.up)("q-td"),J=(0,l.up)("q-item-section"),oe=(0,l.up)("q-item"),ue=(0,l.up)("q-list"),pe=(0,l.up)("q-menu"),ce=(0,l.up)("q-tr"),me=(0,l.up)("q-table"),we=(0,l.up)("q-spinner"),ge=(0,l.up)("q-inner-loading"),fe=(0,l.up)("q-card-section"),ye=(0,l.up)("q-card"),ke=(0,l.up)("q-separator"),_e=(0,l.up)("q-tooltip"),qe=(0,l.up)("import-data"),Ue=(0,l.up)("q-pagination"),be=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.iD)("main",c,[e.showHeader?((0,l.wg)(),(0,l.iD)("section",m,[(0,l._)("div",w,[(0,l._)("div",g,[f,(0,l._)("div",y,[(0,o.SU)(K).canView("/plantillauo/add")?((0,l.wg)(),(0,l.j4)(s,{key:0,rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",to:"/plantillauo/add",class:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"add"}),k])),_:1})):(0,l.kq)("",!0)]),(0,l._)("div",_,[(0,l.Wm)(u,{debounce:"1000",placeholder:"Buscar",modelValue:(0,o.SU)(ae),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,o.dq)(ae)?ae.value=e:null)},{append:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])])])])])):(0,l.kq)("",!0),(0,l._)("section",q,[(0,l._)("div",U,[(0,l._)("div",b,[(0,l._)("div",S,[(0,l._)("div",h,[(0,o.SU)(ae)?((0,l.wg)(),(0,l.iD)("div",v,[W,(0,l.Wm)(p,{icon:"search",removable:"",onRemove:n[1]||(n[1]=e=>(0,o.SU)(re)()),label:(0,o.SU)(ae)},null,8,["label"])])):(0,l.kq)("",!0)]),(0,l._)("div",null,[e.showBreadcrumbs&&a.$route.query.tag?((0,l.wg)(),(0,l.j4)(A,{key:0,class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{icon:"arrow_back",class:"text-capitalize",label:a.$route.query.tag,to:"/plantillauo"},null,8,["label"]),(0,l.Wm)(F,{label:a.$route.query.label},null,8,["label"])])),_:1})):(0,l.kq)("",!0),(0,l._)("div",null,[(0,l.Wm)(me,{flat:!0,"table-header-class":"text-h4 bg-grey-2",bordered:!1,columns:(0,o.SU)(t).menus.PlantillauoListHeaderItems,rows:(0,o.SU)(L),"binary-state-sort":!0,separator:"horizontal",dense:!0,selected:(0,o.SU)(G),"onUpdate:selected":n[2]||(n[2]=e=>(0,o.dq)(G)?G.value=e:null),selection:"multiple","row-key":"idpuo",pagination:(0,o.SU)(X),"onUpdate:pagination":n[3]||(n[3]=e=>(0,o.dq)(X)?X.value=e:null),"hide-bottom":"",onRequest:(0,o.SU)(ie),loading:(0,o.SU)(ee)},{body:(0,l.w5)((e=>[(0,l.Wm)(ce,{class:(0,r.C_)({selected:(0,o.SU)(de)(e.row)}),props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{"auto-width":""},{default:(0,l.w5)((()=>[(0,l.Wm)(H,{dense:"",modelValue:e.selected,"onUpdate:modelValue":a=>e.selected=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.Wm)(M,{key:"btnactions",props:e,"auto-width":""},{default:(0,l.w5)((()=>[(0,l._)("div",x,[(0,l.Wm)(s,{icon:"menu",padding:"xs",round:"",flat:"",color:"grey"},{default:(0,l.w5)((()=>[(0,l.Wm)(pe,{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left",self:"center middle",anchor:"center middle"},{default:(0,l.w5)((()=>[(0,l.Wm)(ue,{dense:"",rounded:"",nav:""},{default:(0,l.w5)((()=>[(0,o.SU)(K).canView("plantillauo/view")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(oe,{key:0,link:"",clickable:"",to:`/plantillauo/view/${e.row.idpuo}`},{default:(0,l.w5)((()=>[(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"primary",size:"sm",name:"visibility"})])),_:1}),(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[B])),_:1})])),_:2},1032,["to"])),[[be]]):(0,l.kq)("",!0),(0,o.SU)(K).canView("plantillauo/edit")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(oe,{key:1,link:"",clickable:"",to:`/plantillauo/edit/${e.row.idpuo}`},{default:(0,l.w5)((()=>[(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"positive",size:"sm",name:"edit"})])),_:1}),(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[Z])),_:1})])),_:2},1032,["to"])),[[be]]):(0,l.kq)("",!0),(0,o.SU)(K).canView("plantillauo/delete")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(oe,{key:2,link:"",clickable:"",onClick:a=>(0,o.SU)(ne)(e.row.idpuo)},{default:(0,l.w5)((()=>[(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"negative",size:"sm",name:"delete_sweep"})])),_:1}),(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[Q])),_:1})])),_:2},1032,["onClick"])),[[be]]):(0,l.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"nombreuo",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.nombreuo),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"codn1",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.codn1),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"codn2",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.codn2),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"codn3",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.codn3),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"codn4",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.codn4),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"codn5",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.codn5),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"codn6",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.codn6),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"clasificacionuo",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.clasificacionuo),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"sigla",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.sigla),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"soa_nombre",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.row.soa_nombre),1)])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["columns","rows","selected","pagination","onRequest","loading"]),(0,l._)("div",z,[(0,l.Wm)(M)])]),(0,o.SU)(ee)?((0,l.wg)(),(0,l.j4)(ge,{key:1,showing:(0,o.SU)(ee)},{default:(0,l.w5)((()=>[(0,l.Wm)(we,{color:"primary",size:"30px"})])),_:1},8,["showing"])):(0,l.kq)("",!0),(0,o.SU)(Y)&&!(0,o.SU)(L).length?((0,l.wg)(),(0,l.j4)(ye,{key:2,flat:a.$q.screen.gt.md},{default:(0,l.w5)((()=>[(0,l.Wm)(fe,null,{default:(0,l.w5)((()=>[V])),_:1})])),_:1},8,["flat"])):(0,l.kq)("",!0),e.showFooter?((0,l.wg)(),(0,l.iD)("div",C,[(0,l.Wm)(ke),(0,l.wy)((0,l._)("div",D,[(0,l._)("div",j,[(0,l._)("div",I,[(0,o.SU)(K).canView("plantillauo/delete")?((0,l.wg)(),(0,l.iD)("div",P,[(0,o.SU)(G).length?((0,l.wg)(),(0,l.j4)(s,{key:0,round:"",flat:"","no-caps":"",unelevated:"",color:"negative",onClick:n[4]||(n[4]=e=>(0,o.SU)(ne)((0,o.SU)(G))),icon:"delete_sweep",class:"q-my-xs",title:"Eliminar seleccionado"},{default:(0,l.w5)((()=>[(0,l.Wm)(_e,null,{default:(0,l.w5)((()=>[R])),_:1})])),_:1})):(0,l.kq)("",!0)])):(0,l.kq)("",!0),(0,o.SU)(K).canView("plantillauo/importdata")?((0,l.wg)(),(0,l.iD)("div",T,[(0,l.Wm)(qe,{label:"Seleccione un archivo para importar",ref:"dataimport","upload-path":"plantillauo/importdata",onImportComplete:(0,o.SU)(se)},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"q-my-xs",onClick:n[5]||(n[5]=e=>a.$refs.dataimport.openDialog()),icon:"import_export",rounded:!1,"no-caps":"",unelevated:"",color:"accent",label:"Datos de importacion"})])),_:1},8,["onImportComplete"])])):(0,l.kq)("",!0)]),e.paginate&&(0,o.SU)(O)>0?((0,l.wg)(),(0,l.iD)("div",N,[(0,l._)("div",$,[(0,l.Wm)(p,{square:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Archivos "+(0,r.zw)((0,o.SU)(le))+" de "+(0,r.zw)((0,o.SU)(O)),1)])),_:1})]),(0,o.SU)(te)>1?((0,l.wg)(),(0,l.iD)("div",E,[(0,l.Wm)(Ue,{color:"primary",modelValue:(0,o.SU)(X).page,"onUpdate:modelValue":n[6]||(n[6]=e=>(0,o.SU)(X).page=e),"direction-links":!0,"boundary-links":!0,"max-pages":5,"boundary-numbers":!0,max:(0,o.SU)(te)},null,8,["modelValue","max"])])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])],512),[[i.F8,(0,o.SU)(Y)]])])):(0,l.kq)("",!0)])])])])])])}}};var F=t(68879),A=t(22857),H=t(66611),L=t(57691),M=t(72605),O=t(28052),G=t(81463),J=t(31233),X=t(67220),Y=t(11221),ee=t(56362),ae=t(13246),te=t(490),le=t(76749),oe=t(60854),re=t(13902),ie=t(44458),ne=t(63190),de=t(50926),se=t(46858),ue=t(80996),pe=t(51136),ce=t(69984),me=t.n(ce);const we=K,ge=we;me()(K,"components",{QBtn:F.Z,QIcon:A.Z,QInput:H.Z,QChip:L.Z,QBreadcrumbs:M.Z,QBreadcrumbsEl:O.Z,QTable:G.Z,QTr:J.Z,QTd:X.Z,QCheckbox:Y.Z,QMenu:ee.Z,QList:ae.Z,QItem:te.Z,QItemSection:le.Z,QInnerLoading:oe.Z,QSpinner:re.Z,QCard:ie.Z,QCardSection:ne.Z,QSeparator:de.Z,QTooltip:se.Z,QPagination:ue.Z}),me()(K,"directives",{Ripple:pe.Z})}}]);