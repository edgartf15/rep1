"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[3785],{13785:(e,a,o)=>{o.r(a),o.d(a,{default:()=>fe});var t=o(59835),r=o(60499),l=o(86970),s=o(61957),i=o(65457),n=o(50977),d=o(49994),p=o(55621),u=o(44858);const c={class:"main-page",id:""},m={key:0,class:"page-section q-pa-md"},w={class:"container-fluid"},f={class:"row justify-between items-center q-col-gutter-md"},g=(0,t._)("div",{class:"col col-md-auto"},[(0,t._)("div",{class:"text-h6 text-primary"}," Users ")],-1),k={class:"col-md-auto col-12"},y=(0,t.Uk)(" Agregar nuevo "),_={class:"col-md-auto col-12"},U={class:"page-section"},q={class:"container-fluid"},b={class:"row q-col-gutter-x-md"},v={class:"col comp-grid"},W={class:"row q-mb-md q-gutter-sm"},h={key:0,class:"q-px-sm nice-shadow-16"},S=(0,t.Uk)(" Buscar: "),z=(0,t.Uk)(" Roles "),x={class:"row q-col-gutter-xs justify-end"},B=(0,t.Uk)("View"),Z=(0,t.Uk)("Edit"),Q=(0,t.Uk)("Delete"),j={class:"row justify-center"},V=(0,t._)("div",{class:"text-grey text-h6 text-center"}," ningún record fue encontrado ",-1),C={key:3,class:""},D={class:"q-pa-md"},R={class:"row items-center justify-between"},I={class:"row items-center q-col-gutter-md"},P={key:0},T=(0,t.Uk)("Delete Selected Items"),N={key:0,class:"row items-center justify-between"},$={class:"col-auto"},K={key:0},E={props:{primaryKey:{type:String,default:"id"},pageName:{type:String,default:"users"},routeName:{type:String,default:"usersliseval"},apiPath:{type:String,default:"users/liseval"},paginate:{type:Boolean,default:!0},scrollIntoView:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!1},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:"desc"}},setup(e){const a=e,o=(0,n.q)(),E=(0,d.a)(),F={filters:{},pagination:{page:a.page,rowsPerPage:a.limit,rowsNumber:0,sortBy:a.sortBy,descending:"desc"==a.sortType},searchText:a.search,primaryKey:a.primaryKey},M=(0,u.u)(a.pageName,F),A=(0,p.s)({store:M,props:a}),{records:H,filters:L,totalRecords:G,selectedItems:J,expandedRows:O,pagination:X}=(0,r.BK)(M.state),{pageReady:Y,loading:ee,searchText:ae}=(0,r.BK)(A.state),{totalPages:oe,recordsPosition:te}=A.computedProps,{load:re,clearSearch:le,setPagination:se,deleteItem:ie,isCurrentRecord:ne}=A.methods,de=(0,t.Fl)({get:function(){return"Users"}});return(0,i.Z)((()=>({title:de.value}))),(0,t.bv)((()=>{re()})),(a,i)=>{const n=(0,t.up)("q-icon"),d=(0,t.up)("q-btn"),p=(0,t.up)("q-input"),u=(0,t.up)("q-chip"),F=(0,t.up)("q-breadcrumbs-el"),M=(0,t.up)("q-breadcrumbs"),A=(0,t.up)("q-checkbox"),L=(0,t.up)("q-td"),O=(0,t.up)("image-viewer"),re=(0,t.up)("q-item-section"),de=(0,t.up)("q-item"),pe=(0,t.up)("q-list"),ue=(0,t.up)("q-menu"),ce=(0,t.up)("q-tr"),me=(0,t.up)("q-table"),we=(0,t.up)("q-spinner"),fe=(0,t.up)("q-inner-loading"),ge=(0,t.up)("q-card-section"),ke=(0,t.up)("q-card"),ye=(0,t.up)("q-separator"),_e=(0,t.up)("q-tooltip"),Ue=(0,t.up)("q-pagination"),qe=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.iD)("main",c,[e.showHeader?((0,t.wg)(),(0,t.iD)("section",m,[(0,t._)("div",w,[(0,t._)("div",f,[g,(0,t._)("div",k,[(0,r.SU)(E).canView("/users/add")?((0,t.wg)(),(0,t.j4)(d,{key:0,rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",to:"/users/add",class:""},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{name:"add"}),y])),_:1})):(0,t.kq)("",!0)]),(0,t._)("div",_,[(0,t.Wm)(p,{debounce:"1000",placeholder:"Buscar",modelValue:(0,r.SU)(ae),"onUpdate:modelValue":i[0]||(i[0]=e=>(0,r.dq)(ae)?ae.value=e:null)},{append:(0,t.w5)((()=>[(0,t.Wm)(n,{name:"search"})])),_:1},8,["modelValue"])])])])])):(0,t.kq)("",!0),(0,t._)("section",U,[(0,t._)("div",q,[(0,t._)("div",b,[(0,t._)("div",v,[(0,t._)("div",W,[(0,r.SU)(ae)?((0,t.wg)(),(0,t.iD)("div",h,[S,(0,t.Wm)(u,{icon:"search",removable:"",onRemove:i[1]||(i[1]=e=>(0,r.SU)(le)()),label:(0,r.SU)(ae)},null,8,["label"])])):(0,t.kq)("",!0)]),(0,t._)("div",null,[e.showBreadcrumbs&&a.$route.query.tag?((0,t.wg)(),(0,t.j4)(M,{key:0,class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{icon:"arrow_back",class:"text-capitalize",label:a.$route.query.tag,to:"/users"},null,8,["label"]),(0,t.Wm)(F,{label:a.$route.query.label},null,8,["label"])])),_:1})):(0,t.kq)("",!0),(0,t._)("div",null,[(0,t.Wm)(me,{flat:!0,"table-header-class":"text-h4 bg-grey-2",bordered:!1,columns:(0,r.SU)(o).menus.UsersLisevalHeaderItems,rows:(0,r.SU)(H),"binary-state-sort":!0,separator:"horizontal",dense:!0,selected:(0,r.SU)(J),"onUpdate:selected":i[2]||(i[2]=e=>(0,r.dq)(J)?J.value=e:null),selection:"multiple","row-key":"id",pagination:(0,r.SU)(X),"onUpdate:pagination":i[3]||(i[3]=e=>(0,r.dq)(X)?X.value=e:null),"hide-bottom":"",onRequest:(0,r.SU)(se),loading:(0,r.SU)(ee)},{body:(0,t.w5)((e=>[(0,t.Wm)(ce,{class:(0,l.C_)({selected:(0,r.SU)(ne)(e.row)}),props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{dense:"",modelValue:e.selected,"onUpdate:modelValue":a=>e.selected=a},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(L,{key:"permisos",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.permisos),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"user_role_id",props:e},{default:(0,t.w5)((()=>[e.row.user_role_id?((0,t.wg)(),(0,t.j4)(d,{key:0,onClick:a=>(0,r.SU)(o).openPageDialog({page:"roles/view",url:`/roles/view/${e.row.user_role_id}`,closeBtn:!0}),padding:"xs",flat:"",color:"primary","no-caps":""},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{name:"visibility",size:"xs",class:"q-mr-xs"}),z])),_:2},1032,["onClick"])):(0,t.kq)("",!0)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"jsonunidad",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.jsonunidad),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"apmaterno",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.apmaterno),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"usuario",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.usuario),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"foto",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{"image-size":"small","image-preview-size":"large",src:e.row.foto,width:"50px",height:"50px","num-display":1},null,8,["src"])])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"email",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{padding:"xs",flat:"",rounded:!1,size:"",color:"primary","no-caps":"",unelevated:"",type:"a",href:"mailto:"+e.row.email},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.email),1)])),_:2},1032,["href"])])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"telefono",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.telefono),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"carnet",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.carnet),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"expedido",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.expedido),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"appaterno",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.appaterno),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"libreta_militar_gestion",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.libreta_militar_gestion),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"fecha_nacimiento",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.fecha_nacimiento),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"nombre1",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.nombre1),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"nombre2",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.nombre2),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"ci_alf",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.ci_alf),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"genero",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.genero),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"afp",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.afp),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"grupo_sanguineo",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.grupo_sanguineo),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"licencia_conducir_nro",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.licencia_conducir_nro),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"licencia_conducir_cat",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.licencia_conducir_cat),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"cv_checkb1",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.cv_checkb1),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"estado",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.estado),1)])),_:2},1032,["props"]),(0,t.Wm)(L,{key:"btnactions",props:e,"auto-width":""},{default:(0,t.w5)((()=>[(0,t._)("div",x,[(0,t.Wm)(d,{icon:"menu",padding:"xs",round:"",flat:"",color:"grey"},{default:(0,t.w5)((()=>[(0,t.Wm)(ue,{"auto-close":"","transition-show":"flip-right","transition-hide":"flip-left",self:"center middle",anchor:"center middle"},{default:(0,t.w5)((()=>[(0,t.Wm)(pe,{dense:"",rounded:"",nav:""},{default:(0,t.w5)((()=>[(0,r.SU)(E).canView("users/view")?(0,t.wy)(((0,t.wg)(),(0,t.j4)(de,{key:0,link:"",clickable:"",to:`/users/view/${e.row.id}`},{default:(0,t.w5)((()=>[(0,t.Wm)(re,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,{color:"primary",size:"sm",name:"visibility"})])),_:1}),(0,t.Wm)(re,null,{default:(0,t.w5)((()=>[B])),_:1})])),_:2},1032,["to"])),[[qe]]):(0,t.kq)("",!0),(0,r.SU)(E).canManage("users/edit",e.row.id)?(0,t.wy)(((0,t.wg)(),(0,t.j4)(de,{key:1,link:"",clickable:"",to:`/users/edit/${e.row.id}`},{default:(0,t.w5)((()=>[(0,t.Wm)(re,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,{color:"positive",size:"sm",name:"edit"})])),_:1}),(0,t.Wm)(re,null,{default:(0,t.w5)((()=>[Z])),_:1})])),_:2},1032,["to"])),[[qe]]):(0,t.kq)("",!0),(0,r.SU)(E).canManage("users/delete",e.row.id)?(0,t.wy)(((0,t.wg)(),(0,t.j4)(de,{key:2,link:"",clickable:"",onClick:a=>(0,r.SU)(ie)(e.row.id)},{default:(0,t.w5)((()=>[(0,t.Wm)(re,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,{color:"negative",size:"sm",name:"delete_sweep"})])),_:1}),(0,t.Wm)(re,null,{default:(0,t.w5)((()=>[Q])),_:1})])),_:2},1032,["onClick"])),[[qe]]):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["columns","rows","selected","pagination","onRequest","loading"]),(0,t._)("div",j,[(0,t.Wm)(L)])]),(0,r.SU)(ee)?((0,t.wg)(),(0,t.j4)(fe,{key:1,showing:(0,r.SU)(ee)},{default:(0,t.w5)((()=>[(0,t.Wm)(we,{color:"primary",size:"30px"})])),_:1},8,["showing"])):(0,t.kq)("",!0),(0,r.SU)(Y)&&!(0,r.SU)(H).length?((0,t.wg)(),(0,t.j4)(ke,{key:2,flat:a.$q.screen.gt.md},{default:(0,t.w5)((()=>[(0,t.Wm)(ge,null,{default:(0,t.w5)((()=>[V])),_:1})])),_:1},8,["flat"])):(0,t.kq)("",!0),e.showFooter?((0,t.wg)(),(0,t.iD)("div",C,[(0,t.Wm)(ye),(0,t.wy)((0,t._)("div",D,[(0,t._)("div",R,[(0,t._)("div",I,[(0,r.SU)(E).canView("users/delete")?((0,t.wg)(),(0,t.iD)("div",P,[(0,r.SU)(J).length?((0,t.wg)(),(0,t.j4)(d,{key:0,round:"",flat:"","no-caps":"",unelevated:"",color:"negative",onClick:i[4]||(i[4]=e=>(0,r.SU)(ie)((0,r.SU)(J))),icon:"delete_sweep",class:"q-my-xs",title:"Eliminar seleccionado"},{default:(0,t.w5)((()=>[(0,t.Wm)(_e,null,{default:(0,t.w5)((()=>[T])),_:1})])),_:1})):(0,t.kq)("",!0)])):(0,t.kq)("",!0)]),e.paginate&&(0,r.SU)(G)>0?((0,t.wg)(),(0,t.iD)("div",N,[(0,t._)("div",$,[(0,t.Wm)(u,{square:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Archivos "+(0,l.zw)((0,r.SU)(te))+" de "+(0,l.zw)((0,r.SU)(G)),1)])),_:1})]),(0,r.SU)(oe)>1?((0,t.wg)(),(0,t.iD)("div",K,[(0,t.Wm)(Ue,{color:"primary",modelValue:(0,r.SU)(X).page,"onUpdate:modelValue":i[5]||(i[5]=e=>(0,r.SU)(X).page=e),"direction-links":!0,"boundary-links":!0,"max-pages":5,"boundary-numbers":!0,max:(0,r.SU)(oe)},null,8,["modelValue","max"])])):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])],512),[[s.F8,(0,r.SU)(Y)]])])):(0,t.kq)("",!0)])])])])])])}}};var F=o(68879),M=o(22857),A=o(66611),H=o(57691),L=o(72605),G=o(28052),J=o(81463),O=o(31233),X=o(67220),Y=o(11221),ee=o(56362),ae=o(13246),oe=o(490),te=o(76749),re=o(60854),le=o(13902),se=o(44458),ie=o(63190),ne=o(50926),de=o(46858),pe=o(80996),ue=o(51136),ce=o(69984),me=o.n(ce);const we=E,fe=we;me()(E,"components",{QBtn:F.Z,QIcon:M.Z,QInput:A.Z,QChip:H.Z,QBreadcrumbs:L.Z,QBreadcrumbsEl:G.Z,QTable:J.Z,QTr:O.Z,QTd:X.Z,QCheckbox:Y.Z,QMenu:ee.Z,QList:ae.Z,QItem:oe.Z,QItemSection:te.Z,QInnerLoading:re.Z,QSpinner:le.Z,QCard:se.Z,QCardSection:ie.Z,QSeparator:ne.Z,QTooltip:de.Z,QPagination:pe.Z}),me()(E,"directives",{Ripple:ue.Z})}}]);