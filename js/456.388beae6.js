"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[456],{30456:(e,a,l)=>{l.r(a),l.d(a,{default:()=>we});var t=l(59835),r=l(60499),o=l(86970),i=l(61957),s=l(65457),c=l(50977),d=l(49994),n=l(55621),u=l(44858);const p={class:"main-page",id:""},m={key:0,class:"page-section q-pa-md"},w={class:"container-fluid"},g={class:"row justify-between items-center q-col-gutter-md"},f=(0,t._)("div",{class:"col col-md-auto"},[(0,t._)("div",{class:"text-h6 text-primary"}," Evalcurricular ")],-1),y={class:"col-md-auto col-12"},k=(0,t.Uk)(" Agregar nuevo "),v={class:"col-md-auto col-12"},_={class:"page-section"},q={class:"container-fluid"},U={class:"row q-col-gutter-x-md"},b={class:"col comp-grid"},S={class:"row q-mb-md q-gutter-sm"},h={key:0,class:"q-px-sm nice-shadow-16"},W=(0,t.Uk)(" Buscar: "),x={class:"row q-col-gutter-xs justify-end"},B=(0,t.Uk)("View"),Z=(0,t.Uk)("Edit"),Q=(0,t.Uk)("Delete"),z={class:"row justify-center"},V=(0,t._)("div",{class:"text-grey text-h6 text-center"}," ningún record fue encontrado ",-1),j={key:3,class:""},C={class:"q-pa-md"},D={class:"row items-center justify-between"},I={class:"row items-center q-col-gutter-md"},R={key:0},P=(0,t.Uk)("Delete Selected Items"),T={key:0,class:"row items-center justify-between"},E={class:"col-auto"},N={key:0},$={props:{primaryKey:{type:String,default:"idec"},pageName:{type:String,default:"evalcurricular"},routeName:{type:String,default:"evalcurricularlist"},apiPath:{type:String,default:"evalcurricular/index"},paginate:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!1},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:"desc"}},setup(e){const a=e,l=(0,c.q)(),$=(0,d.a)(),K={filters:{},pagination:{page:a.page,rowsPerPage:a.limit,rowsNumber:0,sortBy:a.sortBy,descending:"desc"==a.sortType},searchText:a.search,primaryKey:a.primaryKey},F=(0,u.u)(a.pageName,K),A=(0,n.s)({store:F,props:a}),{records:H,filters:L,totalRecords:M,selectedItems:G,expandedRows:J,pagination:O}=(0,r.BK)(F.state),{pageReady:X,loading:Y,searchText:ee}=(0,r.BK)(A.state),{totalPages:ae,recordsPosition:le}=A.computedProps,{load:te,clearSearch:re,setPagination:oe,deleteItem:ie,isCurrentRecord:se}=A.methods,ce=(0,t.Fl)({get:function(){return"Evalcurricular"}});return(0,s.Z)((()=>({title:ce.value}))),(0,t.bv)((()=>{te()})),(a,s)=>{const c=(0,t.up)("q-icon"),d=(0,t.up)("q-btn"),n=(0,t.up)("q-input"),u=(0,t.up)("q-chip"),K=(0,t.up)("q-breadcrumbs-el"),F=(0,t.up)("q-breadcrumbs"),A=(0,t.up)("q-checkbox"),L=(0,t.up)("q-td"),J=(0,t.up)("q-item-section"),te=(0,t.up)("q-item"),ce=(0,t.up)("q-list"),de=(0,t.up)("q-menu"),ne=(0,t.up)("q-tr"),ue=(0,t.up)("q-table"),pe=(0,t.up)("q-spinner"),me=(0,t.up)("q-inner-loading"),we=(0,t.up)("q-card-section"),ge=(0,t.up)("q-card"),fe=(0,t.up)("q-separator"),ye=(0,t.up)("q-tooltip"),ke=(0,t.up)("q-pagination"),ve=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.iD)("main",p,[e.showHeader?((0,t.wg)(),(0,t.iD)("section",m,[(0,t._)("div",w,[(0,t._)("div",g,[f,(0,t._)("div",y,[(0,r.SU)($).canView("/evalcurricular/add")?((0,t.wg)(),(0,t.j4)(d,{key:0,rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",to:"/evalcurricular/add",class:""},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"add"}),k])),_:1})):(0,t.kq)("",!0)]),(0,t._)("div",v,[(0,t.Wm)(n,{debounce:"1000",placeholder:"Buscar",modelValue:(0,r.SU)(ee),"onUpdate:modelValue":s[0]||(s[0]=e=>(0,r.dq)(ee)?ee.value=e:null)},{append:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"search"})])),_:1},8,["modelValue"])])])])])):(0,t.kq)("",!0),(0,t._)("section",_,[(0,t._)("div",q,[(0,t._)("div",U,[(0,t._)("div",b,[(0,t._)("div",S,[(0,r.SU)(ee)?((0,t.wg)(),(0,t.iD)("div",h,[W,(0,t.Wm)(u,{icon:"search",removable:"",onRemove:s[1]||(s[1]=e=>(0,r.SU)(re)()),label:(0,r.SU)(ee)},null,8,["label"])])):(0,t.kq)("",!0)]),(0,t._)("div",null,[e.showBreadcrumbs&&a.$route.query.tag?((0,t.wg)(),(0,t.j4)(F,{key:0,class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{icon:"arrow_back",class:"text-capitalize",label:a.$route.query.tag,to:"/evalcurricular"},null,8,["label"]),(0,t.Wm)(K,{label:a.$route.query.label},null,8,["label"])])),_:1})):(0,t.kq)("",!0),(0,t._)("div",null,[(0,t.Wm)(ue,{flat:!0,"table-header-class":"text-h4 bg-grey-2",bordered:!1,columns:(0,r.SU)(l).menus.EvalcurricularListHeaderItems,rows:(0,r.SU)(H),"binary-state-sort":!0,separator:"horizontal",dense:!0,selected:(0,r.SU)(G),"onUpdate:selected":s[2]||(s[2]=e=>(0,r.dq)(G)?G.value=e:null),selection:"multiple","row-key":"idec",pagination:(0,r.SU)(O),"onUpdate:pagination":s[3]||(s[3]=e=>(0,r.dq)(O)?O.value=e:null),"hide-bottom":"",onRequest:(0,r.SU)(oe),loading:(0,r.SU)(Y)},{body:(0,t.w5)((e=>[(0,t.Wm)(ne,{class:(0,o.C_)({selected:(0,r.SU)(se)(e.row)}),props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{dense:"",modelValue:e.selected,"onUpdate:modelValue":a=>e.selected=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(L,{key:"idec",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{padding:"xs",rounded:!1,color:"primary","no-caps":"",unelevated:"",flat:"",to:`/evalcurricular/view/${e.row.idec}`},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.idec),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"nivelec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.nivelec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"denominacionec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.denominacionec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"haberbasicoec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.haberbasicoec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"formacadec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.formacadec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"ageneralec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.ageneralec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"mgeneralec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.mgeneralec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"aespecificaec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.aespecificaec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"mespecificaec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.mespecificaec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"ciec",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.ciec),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"codgestion",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.codgestion),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"btnactions",props:e,"auto-width":""},{default:(0,t.w5)((()=>[(0,t._)("div",x,[(0,t.Wm)(d,{icon:"menu",padding:"xs",round:"",flat:"",color:"grey"},{default:(0,t.w5)((()=>[(0,t.Wm)(de,{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left",self:"center middle",anchor:"center middle"},{default:(0,t.w5)((()=>[(0,t.Wm)(ce,{dense:"",rounded:"",nav:""},{default:(0,t.w5)((()=>[(0,r.SU)($).canView("evalcurricular/view")?(0,t.wy)(((0,t.wg)(),(0,t.j4)(te,{key:0,link:"",clickable:"",to:`/evalcurricular/view/${e.row.idec}`},{default:(0,t.w5)((()=>[(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{color:"primary",size:"sm",name:"visibility"})])),_:1}),(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[B])),_:1})])),_:2},1032,["to"])),[[ve]]):(0,t.kq)("",!0),(0,r.SU)($).canView("evalcurricular/edit")?(0,t.wy)(((0,t.wg)(),(0,t.j4)(te,{key:1,link:"",clickable:"",to:`/evalcurricular/edit/${e.row.idec}`},{default:(0,t.w5)((()=>[(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{color:"positive",size:"sm",name:"edit"})])),_:1}),(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[Z])),_:1})])),_:2},1032,["to"])),[[ve]]):(0,t.kq)("",!0),(0,r.SU)($).canView("evalcurricular/delete")?(0,t.wy)(((0,t.wg)(),(0,t.j4)(te,{key:2,link:"",clickable:"",onClick:a=>(0,r.SU)(ie)(e.row.idec)},{default:(0,t.w5)((()=>[(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{color:"negative",size:"sm",name:"delete_sweep"})])),_:1}),(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[Q])),_:1})])),_:2},1032,["onClick"])),[[ve]]):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["columns","rows","selected","pagination","onRequest","loading"]),(0,t._)("div",z,[(0,t.Wm)(L)])]),(0,r.SU)(Y)?((0,t.wg)(),(0,t.j4)(me,{key:1,showing:(0,r.SU)(Y)},{default:(0,t.w5)((()=>[(0,t.Wm)(pe,{color:"primary",size:"30px"})])),_:1},8,["showing"])):(0,t.kq)("",!0),(0,r.SU)(X)&&!(0,r.SU)(H).length?((0,t.wg)(),(0,t.j4)(ge,{key:2,flat:a.$q.screen.gt.md},{default:(0,t.w5)((()=>[(0,t.Wm)(we,null,{default:(0,t.w5)((()=>[V])),_:1})])),_:1},8,["flat"])):(0,t.kq)("",!0),e.showFooter?((0,t.wg)(),(0,t.iD)("div",j,[(0,t.Wm)(fe),(0,t.wy)((0,t._)("div",C,[(0,t._)("div",D,[(0,t._)("div",I,[(0,r.SU)($).canView("evalcurricular/delete")?((0,t.wg)(),(0,t.iD)("div",R,[(0,r.SU)(G).length?((0,t.wg)(),(0,t.j4)(d,{key:0,round:"",flat:"","no-caps":"",unelevated:"",color:"negative",onClick:s[4]||(s[4]=e=>(0,r.SU)(ie)((0,r.SU)(G))),icon:"delete_sweep",class:"q-my-xs",title:"Eliminar seleccionado"},{default:(0,t.w5)((()=>[(0,t.Wm)(ye,null,{default:(0,t.w5)((()=>[P])),_:1})])),_:1})):(0,t.kq)("",!0)])):(0,t.kq)("",!0)]),e.paginate&&(0,r.SU)(M)>0?((0,t.wg)(),(0,t.iD)("div",T,[(0,t._)("div",E,[(0,t.Wm)(u,{square:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Archivos "+(0,o.zw)((0,r.SU)(le))+" de "+(0,o.zw)((0,r.SU)(M)),1)])),_:1})]),(0,r.SU)(ae)>1?((0,t.wg)(),(0,t.iD)("div",N,[(0,t.Wm)(ke,{color:"primary",modelValue:(0,r.SU)(O).page,"onUpdate:modelValue":s[5]||(s[5]=e=>(0,r.SU)(O).page=e),"direction-links":!0,"boundary-links":!0,"max-pages":5,"boundary-numbers":!0,max:(0,r.SU)(ae)},null,8,["modelValue","max"])])):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])],512),[[i.F8,(0,r.SU)(X)]])])):(0,t.kq)("",!0)])])])])])])}}};var K=l(68879),F=l(22857),A=l(66611),H=l(57691),L=l(72605),M=l(28052),G=l(81463),J=l(31233),O=l(67220),X=l(11221),Y=l(56362),ee=l(13246),ae=l(490),le=l(76749),te=l(60854),re=l(13902),oe=l(44458),ie=l(63190),se=l(50926),ce=l(46858),de=l(80996),ne=l(51136),ue=l(69984),pe=l.n(ue);const me=$,we=me;pe()($,"components",{QBtn:K.Z,QIcon:F.Z,QInput:A.Z,QChip:H.Z,QBreadcrumbs:L.Z,QBreadcrumbsEl:M.Z,QTable:G.Z,QTr:J.Z,QTd:O.Z,QCheckbox:X.Z,QMenu:Y.Z,QList:ee.Z,QItem:ae.Z,QItemSection:le.Z,QInnerLoading:te.Z,QSpinner:re.Z,QCard:oe.Z,QCardSection:ie.Z,QSeparator:se.Z,QTooltip:ce.Z,QPagination:de.Z}),pe()($,"directives",{Ripple:ne.Z})}}]);