(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[5969],{25969:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>te});i(40702);var u=i(59835),t=i(86970),l=i(60499),o=i(61957),s=i(19302),d=i(50977),v=i(49994),n=i(37804),r=i(45004);const c=(0,u._)("img",{src:"images/logo.png",alt:"logo",class:"my-5"},null,-1),p=(0,u.Uk)("Mi cuenta"),m=(0,u.Uk)("Cerrar sesión"),w=(0,u._)("div",{class:"absolute-full text-h2 text-bold flex flex-center bg-grey-3 text-grey-8"},"!",-1),_=(0,u.Uk)("Mi cuenta"),g=(0,u.Uk)("Cerrar sesión"),f={class:"text-bold text-center text-capitalize q-pa-sm"},h={key:0,class:"text-capitalize text-grey text-bold"},b=(0,u._)("img",{src:"images/logo.png",alt:"logo",class:"my-5"},null,-1),k={class:"text-grey text-center"},x=["src"],y={class:"q-ml-sm"},W=(0,u._)("div",{class:"text-weight-bold text-negative"},"No se puede completar la solicitud.",-1),U={setup(e){const a=(0,s.Z)(),U=(0,d.q)(),q=(0,v.a)(),S=(0,n.q)(),{pageDialog:j,imageDialog:D,leftDrawer:Z,leftDrawerMini:Q,rightDrawer:z,pageErrors:C,fullScreenLoading:V,fullScreenLoadingMsg:$}=(0,l.BK)(S),H=(0,u.Fl)((()=>j.value.showDialog&&j.value.pageComponent?(0,u.RC)((()=>i(22385)(`./${j.value.pageComponent}.vue`))):null)),L=(0,u.Fl)((()=>z.value.showDrawer&&z.value.pageComponent?(0,u.RC)((()=>i(22385)(`./${z.value.pageComponent}.vue`))):null)),Y=(0,u.Fl)({get(){return C.value.length>0},set(e){C.value=[]}});function I(){q.logout(),location.href="/"}function K(){Z.value&&Q.value?Z.value=!1:Z.value&&!Q.value?Q.value=!0:(Z.value=!0,Q.value=!1)}const T=U.menus.navbarSideLeftItems.filter((e=>q.canView(e.path))),N=U.menus.navbarTopLeftItems.filter((e=>q.canView(e.path))),R=U.menus.navbarTopRightItems.filter((e=>q.canView(e.path)));function F(){r.s.axios().interceptors.request.use((e=>(C.value=[],e)),(e=>Promise.reject(e)))}return F(),Z.value=a.platform.is.desktop,F(),(e,a)=>{const i=(0,u.up)("q-btn"),s=(0,u.up)("q-avatar"),d=(0,u.up)("q-toolbar-title"),v=(0,u.up)("q-separator"),n=(0,u.up)("q-item-section"),r=(0,u.up)("q-item-label"),U=(0,u.up)("q-item"),q=(0,u.up)("q-list"),S=(0,u.up)("q-btn-dropdown"),V=(0,u.up)("q-space"),$=(0,u.up)("q-toolbar"),F=(0,u.up)("q-header"),M=(0,u.up)("q-menu"),P=(0,u.up)("q-img"),B=(0,u.up)("q-icon"),E=(0,u.up)("q-tooltip"),O=(0,u.up)("q-expansion-item"),A=(0,u.up)("q-scroll-area"),G=(0,u.up)("q-drawer"),J=(0,u.up)("q-footer"),X=(0,u.up)("router-view"),ee=(0,u.up)("q-page-container"),ae=(0,u.up)("q-card"),ie=(0,u.up)("q-dialog"),ue=(0,u.up)("q-carousel-slide"),te=(0,u.up)("q-carousel"),le=(0,u.up)("q-card-section"),oe=(0,u.up)("q-layout"),se=(0,u.Q2)("ripple"),de=(0,u.Q2)("close-popup");return(0,u.wg)(),(0,u.j4)(oe,{view:"hHh LpR lfr"},{default:(0,u.w5)((()=>[e.$auth.isLoggedIn?((0,u.wg)(),(0,u.iD)(u.HY,{key:0},[(0,u.Wm)(F,{elevated:""},{default:(0,u.w5)((()=>[(0,u.Wm)($,{class:"glossy"},{default:(0,u.w5)((()=>[(0,u.Wm)(i,{flat:"",onClick:K,round:"",dense:"",icon:"menu"}),(0,u.Wm)(i,{"no-caps":"",flat:"",stretch:"",to:"/home",class:"q-mr-lg"},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{square:"",size:"36"},{default:(0,u.w5)((()=>[c])),_:1}),(0,u.Wm)(d,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.$appName),1)])),_:1})])),_:1}),(0,u.Wm)(v,{inset:"",dark:"",vertical:""}),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,l.SU)(N),((e,a)=>((0,u.wg)(),(0,u.iD)(u.HY,{key:`topleftmenubtn-${a}`},[e.submenu.length?((0,u.wg)(),(0,u.j4)(S,{"no-caps":"",icon:e.icon,stretch:"",flat:"",label:e.label,key:`topleftmenudrop-${a}`},{default:(0,u.w5)((()=>[(0,u.Wm)(q,{dense:""},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.submenu,((e,a)=>(0,u.wy)(((0,u.wg)(),(0,u.j4)(U,{key:`topleftsubmenu-${a}`,clickable:"",to:e.path},{default:(0,u.w5)((()=>[e.icon?((0,u.wg)(),(0,u.j4)(n,{key:0,avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:e.icon},null,8,["icon"])])),_:2},1024)):(0,u.kq)("",!0),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(r,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])),[[se]]))),128))])),_:2},1024)])),_:2},1032,["icon","label"])):((0,u.wg)(),(0,u.j4)(i,{key:0,"no-caps":"",icon:e.icon,stretch:"",flat:"",label:e.label,to:e.path},null,8,["icon","label","to"]))],64)))),128)),(0,u.Wm)(V),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,l.SU)(R),((e,a)=>((0,u.wg)(),(0,u.iD)(u.HY,{key:`toprightmenu-${a}`},[e.submenu.length?((0,u.wg)(),(0,u.j4)(S,{"no-caps":"",icon:e.icon,stretch:"",flat:"",label:e.label,key:`toprightmenudrop-${a}`},{default:(0,u.w5)((()=>[(0,u.Wm)(q,{dense:""},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.submenu,((e,a)=>(0,u.wy)(((0,u.wg)(),(0,u.j4)(U,{key:`toprightsubmenu-${a}`,clickable:"",to:e.path},{default:(0,u.w5)((()=>[e.icon?((0,u.wg)(),(0,u.j4)(n,{key:0,avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:e.icon},null,8,["icon"])])),_:2},1024)):(0,u.kq)("",!0),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(r,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])),[[se]]))),128))])),_:2},1024)])),_:2},1032,["icon","label"])):((0,u.wg)(),(0,u.j4)(i,{key:0,"no-caps":"",icon:e.icon,stretch:"",flat:"",label:e.label,to:e.path},null,8,["icon","label","to"]))],64)))),128)),(0,u.Wm)(S,{"no-caps":"",stretch:"",unelevated:"",icon:"account_circle"},{default:(0,u.w5)((()=>[(0,u.Wm)(q,{dense:"",style:{"min-width":"200px"}},{default:(0,u.w5)((()=>[(0,u.wy)(((0,u.wg)(),(0,u.j4)(U,{clickable:"",to:"/account"},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:"account_box"})])),_:1}),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(r,null,{default:(0,u.w5)((()=>[p])),_:1})])),_:1})])),_:1})),[[se]]),(0,u.wy)(((0,u.wg)(),(0,u.j4)(U,{clickable:"",onClick:a[0]||(a[0]=e=>I())},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:"exit_to_app"})])),_:1}),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(r,null,{default:(0,u.w5)((()=>[m])),_:1})])),_:1})])),_:1})),[[se]])])),_:1})])),_:1})])),_:1})])),_:1}),(0,u.Wm)(G,{modelValue:(0,l.SU)(Z),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,l.dq)(Z)?Z.value=e:null),"show-if-above":"",width:250,breakpoint:500,bordered:"",elevated:"",mini:(0,l.SU)(Q)},{default:(0,u.w5)((()=>[(0,u.Wm)(A,{class:"fit"},{default:(0,u.w5)((()=>[(0,u.Wm)(P,{class:"img-fluid",ratio:16/9,src:e.$utils.setImgUrl(e.$auth.userPhoto,"medium")},{error:(0,u.w5)((()=>[w])),default:(0,u.w5)((()=>[(0,u.Wm)(M,{"auto-close":"","touch-position":""},{default:(0,u.w5)((()=>[(0,u.Wm)(q,{dense:"",style:{"min-width":"100px"}},{default:(0,u.w5)((()=>[(0,u.wy)(((0,u.wg)(),(0,u.j4)(U,{clickable:"",to:"/account"},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:"account_box"})])),_:1}),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(r,null,{default:(0,u.w5)((()=>[_])),_:1})])),_:1})])),_:1})),[[se]]),(0,u.wy)(((0,u.wg)(),(0,u.j4)(U,{clickable:"",onClick:a[1]||(a[1]=e=>I())},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{icon:"exit_to_app"})])),_:1}),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(r,null,{default:(0,u.w5)((()=>[g])),_:1})])),_:1})])),_:1})),[[se]])])),_:1})])),_:1})])),_:1},8,["src"]),(0,u.wy)((0,u._)("div",f,[(0,u.Uk)(" Hola "+(0,t.zw)(e.$auth.userName)+" ",1),e.$auth.userRole?((0,u.wg)(),(0,u.iD)("div",h,(0,t.zw)(e.$auth.userRole),1)):(0,u.kq)("",!0)],512),[[o.F8,!(0,l.SU)(Q)]]),(0,u.Wm)(v),(0,u.Wm)(q,null,{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,l.SU)(T),((e,a)=>((0,u.wg)(),(0,u.iD)(u.HY,{key:`sideleftmenu-${a}`},[e.submenu.length?((0,u.wg)(),(0,u.j4)(O,{"expand-separator":"","content-inset-level":.5,group:"leftmenu",key:`sideleftmenudrop-${a}`},{header:(0,u.w5)((()=>[e.icon?((0,u.wg)(),(0,u.j4)(n,{key:0,avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(B,{color:e.iconcolor||"primary",name:e.icon},null,8,["color","name"]),(0,l.SU)(Q)?((0,u.wg)(),(0,u.j4)(E,{key:0,"transition-show":"scale","transition-hide":"scale","content-class":"bg-accent",anchor:"center right",self:"center left",offset:[10,10]},{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.label),1)])),_:2},1024)):(0,u.kq)("",!0)])),_:2},1024)):(0,u.kq)("",!0),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.label),1)])),_:2},1024)])),default:(0,u.w5)((()=>[(0,u.Wm)(q,{dense:""},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.submenu,((e,a)=>((0,u.wg)(),(0,u.j4)(U,{to:e.path,clickable:"","q-ripple":"",key:`sideleftsubmenubtn-${a}`},{default:(0,u.w5)((()=>[e.icon?((0,u.wg)(),(0,u.j4)(n,{key:0,avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(B,{color:e.iconcolor||"primary",name:e.icon},null,8,["color","name"])])),_:2},1024)):(0,u.kq)("",!0),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.label),1)])),_:2},1024)])),_:2},1032,["to"])))),128))])),_:2},1024)])),_:2},1032,["content-inset-level"])):((0,u.wg)(),(0,u.j4)(U,{key:0,clickable:"","q-ripple":"",to:e.path},{default:(0,u.w5)((()=>[e.icon?((0,u.wg)(),(0,u.j4)(n,{key:0,avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(B,{color:e.iconcolor||"primary",name:e.icon},null,8,["color","name"]),(0,l.SU)(Q)?((0,u.wg)(),(0,u.j4)(E,{key:0,"transition-show":"scale","transition-hide":"scale","content-class":"bg-accent",anchor:"center right",self:"center left",offset:[10,10]},{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.label),1)])),_:2},1024)):(0,u.kq)("",!0)])),_:2},1024)):(0,u.kq)("",!0),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.label),1)])),_:2},1024)])),_:2},1032,["to"]))],64)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue","mini"])],64)):((0,u.wg)(),(0,u.j4)(F,{key:1,elevated:""},{default:(0,u.w5)((()=>[(0,u.Wm)($,{class:"glossy"},{default:(0,u.w5)((()=>[(0,u.Wm)(i,{"no-caps":"",flat:"",stretch:"",to:"/home"},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{square:"",size:"36"},{default:(0,u.w5)((()=>[b])),_:1}),(0,u.Wm)(d,null,{default:(0,u.w5)((()=>[(0,u.Uk)((0,t.zw)(e.$appName),1)])),_:1})])),_:1})])),_:1})])),_:1})),(0,u.Wm)(G,{"no-swipe-open":!(0,l.SU)(L),side:"right",modelValue:(0,l.SU)(z).showDrawer,"onUpdate:modelValue":a[4]||(a[4]=e=>(0,l.SU)(z).showDrawer=e),width:(0,l.SU)(z).width,breakpoint:500,overlay:"",elevated:""},{default:(0,u.w5)((()=>[(0,l.SU)(z).showDrawer?((0,u.wg)(),(0,u.j4)((0,u.LL)((0,l.SU)(L)),{key:0,"is-sub-page":"","api-path":(0,l.SU)(z).pageUrl,"page-data":(0,l.SU)(z).pageData},null,8,["api-path","page-data"])):(0,u.kq)("",!0),(0,u.Wm)(i,{style:{position:"absolute",top:"2px",right:"2px"},unelevated:"",dense:"",round:"",color:"grey-1","text-color":"grey",icon:"close",onClick:a[3]||(a[3]=e=>(0,l.SU)(z).showDrawer=!1)})])),_:1},8,["no-swipe-open","modelValue","width"]),(0,u.Wm)(J,null,{default:(0,u.w5)((()=>[(0,u.Wm)($,{class:"bg-grey-3 text-dark justify-between"},{default:(0,u.w5)((()=>[(0,u._)("div",k," © 2022 "+(0,t.zw)(e.$appName)+". Todos los derechos reservados ",1)])),_:1})])),_:1}),(0,u.Wm)(ee,null,{default:(0,u.w5)((()=>[(0,u.Wm)(X)])),_:1}),(0,u.Wm)(ie,{seamless:(0,l.SU)(j).seamless,maximized:(0,l.SU)(j).maximized,persistent:(0,l.SU)(j).persistent,position:(0,l.SU)(j).position,modelValue:(0,l.SU)(j).showDialog,"onUpdate:modelValue":a[5]||(a[5]=e=>(0,l.SU)(j).showDialog=e)},{default:(0,u.w5)((()=>[(0,u.Wm)(ae,{style:(0,t.j5)({width:(0,l.SU)(j).width,maxWidth:(0,l.SU)(j).maxWidth})},{default:(0,u.w5)((()=>[(0,l.SU)(j).showDialog?((0,u.wg)(),(0,u.j4)((0,u.LL)((0,l.SU)(H)),{key:0,"is-sub-page":"","api-path":(0,l.SU)(j).pageUrl,"page-data":(0,l.SU)(j).pageData},null,8,["api-path","page-data"])):(0,u.kq)("",!0),(0,l.SU)(j).closeBtn?(0,u.wy)(((0,u.wg)(),(0,u.j4)(i,{key:1,style:{position:"absolute",top:"10px",right:"10px"},icon:"close",color:"grey",flat:"",round:"",dense:""},null,512)),[[de]]):(0,u.kq)("",!0)])),_:1},8,["style"])])),_:1},8,["seamless","maximized","persistent","position","modelValue"]),(0,u.Wm)(ie,{modelValue:(0,l.SU)(D).showDialog,"onUpdate:modelValue":a[7]||(a[7]=e=>(0,l.SU)(D).showDialog=e)},{default:(0,u.w5)((()=>[(0,u.Wm)(te,{"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-type":"unelevated","control-color":"primary",modelValue:(0,l.SU)(D).currentSlide,"onUpdate:modelValue":a[6]||(a[6]=e=>(0,l.SU)(D).currentSlide=e),navigation:!1,arrows:(0,l.SU)(D).images.length>1,infinite:"",padding:!1,height:"auto",class:"bg-dark rounded-borders"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,l.SU)(D).images,((e,a)=>((0,u.wg)(),(0,u.j4)(ue,{class:"no-padding",key:a,name:a},{default:(0,u.w5)((()=>[(0,u._)("img",{style:{"max-width":"100%","max-height":"100%"},src:e},null,8,x)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue","arrows"])])),_:1},8,["modelValue"]),(0,u.Wm)(ie,{modelValue:(0,l.SU)(Y),"onUpdate:modelValue":a[8]||(a[8]=e=>(0,l.dq)(Y)?Y.value=e:null),position:"top"},{default:(0,u.w5)((()=>[(0,u.Wm)(ae,{style:{"min-width":"300px","max-width":"95vw"}},{default:(0,u.w5)((()=>[(0,u.Wm)(le,{class:"row items-center align-start"},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{"text-color":"negative",size:"40px","font-size":"36px",icon:"error"}),(0,u._)("div",y,[W,(0,u.Wm)(v,{class:"q-my-sm"}),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,l.SU)(C),((e,a)=>((0,u.wg)(),(0,u.iD)("div",{class:"text-capitalize",key:a},(0,t.zw)(e),1)))),128))]),(0,u.Wm)(V),(0,u.wy)((0,u.Wm)(i,{icon:"close",flat:"",round:"",dense:""},null,512),[[de]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}}};var q=i(20249),S=i(16602),j=i(51663),D=i(68879),Z=i(61357),Q=i(81973),z=i(50926),C=i(32045),V=i(13246),$=i(490),H=i(76749),L=i(33115),Y=i(90136),I=i(10906),K=i(66663),T=i(70335),N=i(56362),R=i(22857),F=i(46858),M=i(61123),P=i(71378),B=i(12133),E=i(32074),O=i(44458),A=i(97052),G=i(41694),J=i(63190),X=i(51136),ee=i(62146),ae=i(69984),ie=i.n(ae);const ue=U,te=ue;ie()(U,"components",{QLayout:q.Z,QHeader:S.Z,QToolbar:j.Z,QBtn:D.Z,QAvatar:Z.Z,QToolbarTitle:Q.Z,QSeparator:z.Z,QBtnDropdown:C.Z,QList:V.Z,QItem:$.Z,QItemSection:H.Z,QItemLabel:L.Z,QSpace:Y.Z,QDrawer:I.Z,QScrollArea:K.Z,QImg:T.Z,QMenu:N.Z,QIcon:R.Z,QTooltip:F.Z,QExpansionItem:M.Z,QFooter:P.Z,QPageContainer:B.Z,QDialog:E.Z,QCard:O.Z,QCarousel:A.Z,QCarouselSlide:G.Z,QCardSection:J.Z}),ie()(U,"directives",{Ripple:X.Z,ClosePopup:ee.Z})},22385:(e,a,i)=>{var u={"./account/accountedit.vue":[7289,4736,3064],"./account/accountview.vue":[54332,4736,3064],"./account/changepassword.vue":[30411,4736,3064],"./antiguedad/add.vue":[6496,4736,3064],"./antiguedad/edit.vue":[87702,4736,3064],"./antiguedad/list.vue":[79780,4736,3064],"./antiguedad/view.vue":[44726,4736,3064,4726],"./archivos/add.vue":[41886,4736,3064],"./archivos/edit.vue":[7527,4736,3064],"./archivos/list.vue":[63993,4736,3064,3993],"./archivos/view.vue":[9140,4736,3064,9140],"./bandeja_eval_curricular/add.vue":[29871,4736,3064,9871],"./bandeja_eval_curricular/detail-pages.vue":[91769,4736,3064],"./bandeja_eval_curricular/edit.vue":[60788,4736,3064,788],"./bandeja_eval_curricular/list.vue":[68696,4736,3064,8696],"./bandeja_eval_curricular/view.vue":[20972,4736,3064,972],"./basicoshv/add.vue":[32871,4736,3064,2871],"./basicoshv/edit.vue":[59473,4736,3064,9473],"./basicoshv/list.vue":[84043,4736,3064,4043],"./basicoshv/view.vue":[41831,4736,3064,1831],"./cas/add.vue":[11474,4736,3064],"./cas/detail-pages.vue":[23489,4736,3064],"./cas/edit.vue":[61752,4736,3064],"./cas/list.vue":[72498,4736,3064],"./cas/view.vue":[83523,4736,3064,3523],"./categoria/add.vue":[17841,4736,3064,7841],"./categoria/edit.vue":[84543,4736,3064,4543],"./categoria/list.vue":[52115,4736,3064,2115],"./categoria/view.vue":[96909,4736,3064,6909],"./categoria_escala/add.vue":[57665,4736,3064,7665],"./categoria_escala/edit.vue":[79417,4736,3064,9417],"./categoria_escala/list.vue":[56352,4736,3064,6352],"./categoria_escala/view.vue":[14347,4736,3064,4347],"./comunicados/add.vue":[80433,4736,3064],"./comunicados/edit.vue":[39786,4736,3064],"./comunicados/list.vue":[63325,4736,3064,3325],"./comunicados/view.vue":[18618,4736,3064,8618],"./configuracion/add.vue":[99906,4736,3064,9906],"./configuracion/edit.vue":[99413,4736,3064,9413],"./configuracion/list.vue":[73555,4736,3064,3555],"./configuracion/view.vue":[69703,4736,3064,9703],"./cursos/add.vue":[82103,4736,3064,2103],"./cursos/edit.vue":[71855,4736,3064,1855],"./cursos/list.vue":[64751,4736,3064],"./cursos/view.vue":[63853,4736,3064,3853],"./cursosbasicosestudios/add.vue":[23496,4736,3064,3496],"./cursosbasicosestudios/edit.vue":[63449,4736,3064,3449],"./cursosbasicosestudios/list.vue":[44141,4736,3064,4141],"./cursosbasicosestudios/view.vue":[94958,4736,3064,4958],"./decjurada/add.vue":[35722,4736,3064],"./decjurada/edit.vue":[58993,4736,3064],"./decjurada/list.vue":[98676,4736,3064,8676],"./decjurada/view.vue":[11541,4736,3064,1541],"./declaracion_pregunta_usuario/add.vue":[53402,4736,3064],"./declaracion_pregunta_usuario/edit.vue":[91157,4736,3064],"./declaracion_pregunta_usuario/list.vue":[4446,4736,3064],"./declaracion_pregunta_usuario/view.vue":[54176,4736,3064,4176],"./declaraciones/add.vue":[8755,4736,3064],"./declaraciones/detail-pages.vue":[31499,4736,3064],"./declaraciones/edit.vue":[39602,4736,3064],"./declaraciones/list.vue":[91006,4736,3064,1006],"./declaraciones/view.vue":[78534,4736,3064,8534],"./denominacion/add.vue":[10019,4736,3064,19],"./denominacion/edit.vue":[99239,4736,3064,9239],"./denominacion/list.vue":[94873,4736,3064,4873],"./denominacion/view.vue":[40847,4736,3064,847],"./denominacion/vista.vue":[59269,4736,3064,9269],"./denominacion/vistainte.vue":[55986,4736,3064,5986],"./denominacion_eo/add.vue":[81817,4736,3064],"./denominacion_eo/edit.vue":[65520,4736,3064],"./denominacion_eo/list.vue":[56913,4736,3064,6913],"./denominacion_eo/view.vue":[34436,4736,3064,4436],"./detboleta/add.vue":[4419,4736,3064,4419],"./detboleta/detail-pages.vue":[84936,4736,3064],"./detboleta/edit.vue":[98790,4736,3064,8790],"./detboleta/list.vue":[6719,4736,3064,6719],"./detboleta/view.vue":[9287,4736,3064,9287],"./detescala/add.vue":[19432,4736,3064,9432],"./detescala/edit.vue":[31118,4736,3064,1118],"./detescala/list.vue":[89842,4736,3064],"./detescala/view.vue":[51717,4736,3064,1717],"./detitem/add.vue":[7105,4736,3064],"./detitem/detail-pages.vue":[77056,4736,3064],"./detitem/edit.vue":[28126,4736,3064],"./detitem/list.vue":[48780,4736,3064,9842],"./detitem/view.vue":[77239,4736,3064,7239],"./dotacion_movilidad/add.vue":[95032,4736,3064],"./dotacion_movilidad/edit.vue":[56169,4736,3064],"./dotacion_movilidad/list.vue":[13692,4736,3064,3692],"./dotacion_movilidad/view.vue":[90849,4736,3064,849],"./entidad/add.vue":[13711,4736,3064,3711],"./entidad/detail-pages.vue":[73518,4736,3064],"./entidad/edit.vue":[14137,4736,3064,4137],"./entidad/list.vue":[68731,4736,3064],"./entidad/view.vue":[90113,4736,3064,113],"./eo_maestra/add.vue":[54345,4736,3064],"./eo_maestra/edit.vue":[32621,4736,3064],"./eo_maestra/list.vue":[69293,4736,3064,9293],"./eo_maestra/view.vue":[57722,4736,3064,7722],"./equivcursoshv/add.vue":[64800,4736,3064,4800],"./equivcursoshv/edit.vue":[23685,4736,3064,3685],"./equivcursoshv/list.vue":[40622,4736,3064,622],"./equivcursoshv/view.vue":[96465,4736,3064,6465],"./errors/forbidden.vue":[33303,3303],"./errors/pagenotfound.vue":[30259,259],"./escala/add.vue":[49319,4736,3064,9319],"./escala/edicion.vue":[94355,4736,3064,4355],"./escala/edit.vue":[8014,4736,3064,8014],"./escala/list.vue":[39818,4736,3064],"./escala/listado.vue":[11682,4736,3064,1682],"./escala/view.vue":[91142,4736,3064,1142],"./estadocivil/add.vue":[81850,4736,3064,1850],"./estadocivil/edit.vue":[28791,4736,3064,8791],"./estadocivil/list.vue":[46680,4736,3064,6680],"./estadocivil/view.vue":[17668,4736,3064,7668],"./estructura_org/add.vue":[67627,4736,3064,7627],"./estructura_org/agregarorg.vue":[91375,4736,3064,1375],"./estructura_org/edicionorg.vue":[6488,4736,3064,863],"./estructura_org/edit.vue":[45038,4736,3064,5038],"./estructura_org/list.vue":[46776,4736,3064,6776],"./estructura_org/view.vue":[6343,4736,3064,6343],"./estructura_org/vista.vue":[2592,4736,3064,2592],"./estudios/add.vue":[15597,4736,3064,5597],"./estudios/edit.vue":[93029,4736,3064,3029],"./estudios/list.vue":[47283,4736,3064],"./estudios/view.vue":[23126,4736,3064,3126],"./eval_curric/add.vue":[10515,4736,3064,515],"./eval_curric/edit.vue":[67325,4736,3064,7325],"./eval_curric/list.vue":[90308,4736,3064,308],"./eval_curric/view.vue":[48338,4736,3064,8338],"./eval_temp_grid/add - copia.vue":[96405,4736,3064,6405],"./eval_temp_grid/add.vue":[13035,4736,3064,3035],"./eval_temp_grid/add_mientras.vue":[35816,4736,3064,5816],"./eval_temp_grid/add_origen_24may.vue":[60279,4736,3064,279],"./eval_temp_grid/edit.vue":[74409,4736,3064,4409],"./eval_temp_grid/list.vue":[45481,4736,3064,5481],"./eval_temp_grid/listnoselecc.vue":[76884,4736,3064,6884],"./eval_temp_grid/view.vue":[73161,4736,3064,3161],"./evalcurricular/add.vue":[44010,4736,3064,4010],"./evalcurricular/edit.vue":[14779,4736,3064,4779],"./evalcurricular/list.vue":[30456,4736,3064,456],"./evalcurricular/view.vue":[78297,4736,3064,8297],"./evaluacion/add.vue":[88340,4736,3064,8340],"./evaluacion/detail-pages.vue":[50673,4736,3064],"./evaluacion/edit.vue":[4303,4736,3064,4303],"./evaluacion/list.vue":[91566,4736,3064,1566],"./evaluacion/view.vue":[43454,4736,3064,3454],"./evaluacion_perfil/add.vue":[22701,4736,3064,2701],"./evaluacion_perfil/edit.vue":[53047,4736,3064,3047],"./evaluacion_perfil/list.vue":[47663,4736,3064,7663],"./evaluacion_perfil/view.vue":[55528,4736,3064,5528],"./eventuales/add.vue":[71844,4736,3064],"./eventuales/edit.vue":[48536,4736,3064],"./eventuales/list.vue":[79988,4736,3064],"./eventuales/view.vue":[78652,4736,3064,8652],"./experiencia/add.vue":[77758,4736,3064],"./experiencia/edit.vue":[47170,4736,3064],"./experiencia/list.vue":[51800,4736,3064],"./experiencia/view.vue":[57111,4736,3064,7111],"./experiencia_especifica/add.vue":[8663,4736,3064,8663],"./experiencia_especifica/edit.vue":[92011,4736,3064,2011],"./experiencia_especifica/list.vue":[84540,4736,3064,4540],"./experiencia_especifica/view.vue":[64783,4736,3064,4783],"./experienciahv/add.vue":[67320,4736,3064],"./experienciahv/edit.vue":[8196,4736,3064],"./experienciahv/list.vue":[37820,4736,3064],"./experienciahv/view.vue":[48891,4736,3064,8891],"./formacion_guia/add.vue":[69645,4736,3064,9645],"./formacion_guia/edit.vue":[27485,4736,3064,7485],"./formacion_guia/list.vue":[53591,4736,3064,3591],"./formacion_guia/view.vue":[648,4736,3064,648],"./formestudios3/add.vue":[74943,4736,3064,4943],"./formestudios3/edit.vue":[34749,4736,3064,4749],"./formestudios3/list.vue":[38234,4736,3064],"./formestudios3/view.vue":[72688,4736,3064,2688],"./formestudiossup3/add.vue":[61906,4736,3064,1906],"./formestudiossup3/edit.vue":[20033,4736,3064,33],"./formestudiossup3/list.vue":[73230,4736,3064],"./formestudiossup3/vhojavida.vue":[3090,4736,3064,3090],"./formestudiossup3/view.vue":[973,4736,3064,973],"./formidiomas2/add.vue":[93261,4736,3064],"./formidiomas2/edit.vue":[41658,4736,3064],"./formidiomas2/list.vue":[4534,4736,3064],"./formidiomas2/view.vue":[73051,4736,3064,3051],"./fuente/add.vue":[8964,4736,3064,8964],"./fuente/edit.vue":[83127,4736,3064,3127],"./fuente/list.vue":[6679,4736,3064,6679],"./fuente/view.vue":[18501,4736,3064,8501],"./genero/add.vue":[38166,4736,3064,8166],"./genero/edit.vue":[95992,4736,3064,5992],"./genero/list.vue":[61450,4736,3064,1450],"./genero/view.vue":[28988,4736,3064,8988],"./gestion/add.vue":[76533,4736,3064,6533],"./gestion/detail-pages.vue":[31434,4736,3064],"./gestion/edit.vue":[98489,4736,3064,8489],"./gestion/editar.vue":[32447,4736,3064,2447],"./gestion/list.vue":[68844,4736,3064,8844],"./gestion/view.vue":[11980,4736,3064,1980],"./grado_univhv/add.vue":[59219,4736,3064,9219],"./grado_univhv/edit.vue":[87649,4736,3064,7649],"./grado_univhv/list.vue":[72716,4736,3064,2716],"./grado_univhv/view.vue":[25948,4736,3064,5948],"./hojavida/add.vue":[10411,4736,3064],"./hojavida/detail-pages.vue":[38369,4736,3064],"./hojavida/edit.vue":[59837,4736,3064],"./hojavida/list.vue":[40235,4736,3064,235],"./hojavida/view.vue":[89684,4736,3064,9684],"./home/home.vue":[28777,4736,8777],"./index/accountblocked.vue":[76829,6829],"./index/accountcreated.vue":[66840,6840],"./index/accountinactive.vue":[26388,6388],"./index/accountpending.vue":[98010,8010],"./index/emailverified.vue":[3380,3380],"./index/forgotpassword.vue":[92985,4736,2985],"./index/index.vue":[73536,4736,3536],"./index/resetpassword.vue":[5552,4736,3064,5552],"./index/resetpassword_completed.vue":[25811,5811],"./index/userregister.vue":[63396,4736,3064],"./index/verifyemail.vue":[26626,4736,6626],"./index/verifyotp.vue":[94618,4736,4618],"./infouser/add.vue":[83865,4736,3064],"./infouser/edit.vue":[79554,4736,3064],"./infouser/list.vue":[49777,4736,3064,9777],"./infouser/view.vue":[56489,4736,3064,6489],"./inst_bas_hv/add.vue":[45002,4736,3064,5002],"./inst_bas_hv/edit.vue":[45591,4736,3064,5591],"./inst_bas_hv/list.vue":[47467,4736,3064,7467],"./inst_bas_hv/view.vue":[64116,4736,3064,4116],"./item_escala/add.vue":[11795,4736,3064,1795],"./item_escala/edit.vue":[78765,4736,3064,8765],"./item_escala/list.vue":[5149,4736,3064,5149],"./item_escala/view.vue":[77711,4736,3064,7711],"./log_reportes/add.vue":[62123,4736,3064],"./log_reportes/edit.vue":[46283,4736,3064],"./log_reportes/list.vue":[90282,4736,3064,282],"./log_reportes/view.vue":[92656,4736,3064,2656],"./medida/add.vue":[3428,4736,3064,3428],"./medida/edit.vue":[5746,4736,3064,5746],"./medida/list.vue":[47998,4736,3064,7998],"./medida/view.vue":[25523,4736,3064,5523],"./memo_hv/add.vue":[87134,4736,3064],"./memo_hv/edit.vue":[60847,4736,3064],"./memo_hv/list.vue":[60455,4736,3064,455],"./memo_hv/view.vue":[51538,4736,3064,1538],"./movilidad_acciones/add.vue":[4991,4736,3064,4991],"./movilidad_acciones/edit.vue":[28948,4736,3064,8948],"./movilidad_acciones/list.vue":[26509,4736,3064,6509],"./movilidad_acciones/view.vue":[83174,4736,3064,3174],"./nivel_eo/add.vue":[16146,4736,3064,6146],"./nivel_eo/edit.vue":[34385,4736,3064,4385],"./nivel_eo/list.vue":[71327,4736,3064,1327],"./nivel_eo/view.vue":[23428,4736,3064,8483],"./nivel_escala/add.vue":[82473,4736,3064,2473],"./nivel_escala/edit.vue":[1657,4736,3064,1657],"./nivel_escala/list.vue":[54224,4736,3064,4224],"./nivel_escala/view.vue":[73321,4736,3064,3321],"./parametros_definicion/add.vue":[18278,4736,3064],"./parametros_definicion/edit.vue":[35520,4736,3064],"./parametros_definicion/list.vue":[4877,4736,3064,4877],"./parametros_definicion/view.vue":[57966,4736,3064,7966],"./parentesco/add.vue":[14290,4736,3064],"./parentesco/edit.vue":[6551,4736,3064],"./parentesco/list.vue":[38028,4736,3064,8028],"./parentesco/view.vue":[39089,4736,3064,9089],"./perfilreferencial/add.vue":[2157,4736,3064,2157],"./perfilreferencial/edit.vue":[49387,4736,3064,9387],"./perfilreferencial/evalist.vue":[68545,4736,3064],"./perfilreferencial/list.vue":[82914,4736,3064,2914],"./perfilreferencial/prlist.vue":[32109,4736,3064,2109],"./perfilreferencial/view.vue":[63068,4736,3064,3068],"./permanente/add.vue":[21789,4736,3064],"./permanente/detail-pages.vue":[96045,4736,3064],"./permanente/edit.vue":[54406,4736,3064],"./permanente/list.vue":[57590,4736,3064],"./permanente/view.vue":[21458,4736,3064,1458],"./permisos/add.vue":[57611,4736,3064],"./permisos/edit.vue":[20726,4736,3064],"./permisos/list.vue":[82669,4736,3064],"./permisos/view.vue":[68659,4736,3064,8659],"./permissions/add.vue":[47693,4736,3064,7693],"./permissions/edit.vue":[50184,4736,3064,184],"./permissions/list.vue":[93373,4736,3064],"./permissions/view.vue":[15888,4736,3064,5888],"./pexterno/add.vue":[92325,4736,3064],"./pexterno/edit.vue":[38007,4736,3064],"./pexterno/list.vue":[26053,4736,3064,6053],"./pexterno/view.vue":[59622,4736,3064,9622],"./planilla_presupuestaria/add.vue":[19187,4736,3064,9187],"./planilla_presupuestaria/agregar.vue":[40014,4736,3064,14],"./planilla_presupuestaria/edit.vue":[14511,4736,3064,4511],"./planilla_presupuestaria/editar.vue":[49095,4736,3064,9095],"./planilla_presupuestaria/list.vue":[10254,4736,3064,4792],"./planilla_presupuestaria/listeval.vue":[7022,4736,3064],"./planilla_presupuestaria/view.vue":[26192,4736,3064,6192],"./planillas/add.vue":[16856,4736,3064],"./planillas/edit.vue":[48735,4736,3064],"./planillas/list.vue":[19929,4736,3064,9929],"./planillas/view.vue":[52811,4736,3064,2176],"./planillatemporal/add.vue":[13906,4736,3064],"./planillatemporal/edit.vue":[74571,4736,3064],"./planillatemporal/list.vue":[79028,4736,3064,9028],"./planillatemporal/view.vue":[6202,4736,3064,6202],"./plant_general_uo/add.vue":[47618,4736,3064,7618],"./plant_general_uo/edit.vue":[84895,4736,3064,4895],"./plant_general_uo/list.vue":[76779,4736,3064,6779],"./plant_general_uo/view.vue":[93887,4736,3064,3887],"./plantilla_estructura_org/add.vue":[99115,4736,3064,9115],"./plantilla_estructura_org/edit.vue":[42149,4736,3064,2149],"./plantilla_estructura_org/list.vue":[53841,4736,3064,3841],"./plantilla_estructura_org/view.vue":[97963,4736,3064,7963],"./plantillauo/add.vue":[54850,4736,3064,4850],"./plantillauo/edit.vue":[13528,4736,3064,3528],"./plantillauo/list.vue":[52448,4736,3064,2448],"./plantillauo/view.vue":[38118,4736,3064,8118],"./plasalario/add.vue":[84208,4736,3064,4208],"./plasalario/edit.vue":[19256,4736,3064,9256],"./plasalario/list.vue":[78630,4736,3064,8630],"./plasalario/view.vue":[93562,4736,3064,3562],"./poa/add.vue":[24741,4736,3064,4741],"./poa/edit.vue":[88994,4736,3064,8994],"./poa/list.vue":[30572,4736,3064],"./poa/view.vue":[45250,4736,3064,5250],"./roles/add.vue":[73156,4736,3064,3156],"./roles/detail-pages.vue":[73333,4736,3064],"./roles/edit.vue":[22836,4736,3064,2836],"./roles/list.vue":[19292,4736,3064,9292],"./roles/view.vue":[83260,4736,3064,3260],"./salario_min/add.vue":[4149,4736,3064],"./salario_min/edit.vue":[89708,4736,3064],"./salario_min/list.vue":[95697,4736,3064],"./salario_min/view.vue":[32364,4736,3064,2364],"./stock/add.vue":[50290,4736,3064],"./stock/edit.vue":[46488,4736,3064],"./stock/list.vue":[4498,4736,3064,4498],"./stock/view.vue":[50443,4736,3064,443],"./tab_esc/add.vue":[58702,4736,3064,8702],"./tab_esc/edit.vue":[20729,4736,3064,729],"./tab_esc/list.vue":[99904,4736,3064,9904],"./tab_esc/view.vue":[50452,4736,3064,452],"./unidad/add.vue":[68029,4736,3064,8029],"./unidad/detail-pages.vue":[22308,4736,3064],"./unidad/edit.vue":[38818,4736,3064,8818],"./unidad/list.vue":[12299,4736,3064],"./unidad/view.vue":[11121,4736,3064,1121],"./users/add.vue":[9352,4736,3064],"./users/detail-pages.vue":[85452,4736,3064],"./users/edit.vue":[62104,4736,3064],"./users/evalusersv.vue":[44792,4736,3064],"./users/lhojavida.vue":[96871,4736,3064,6871],"./users/liseval.vue":[13785,4736,3064,3785],"./users/list.vue":[92158,4736,3064],"./users/vhojavida.vue":[56643,4736,3064,6643],"./users/view.vue":[37702,4736,3064,7702],"./usuarios/add.vue":[42811,4736,3064,2811],"./usuarios/detail-pages.vue":[71892,4736,3064],"./usuarios/edit.vue":[7384,4736,3064,7384],"./usuarios/list.vue":[38407,4736,3064,8407],"./usuarios/view.vue":[34001,4736,3064,4001],"./v_escalaimpr/detail-pages.vue":[48195,4736,3064],"./v_escalaimpr/list.vue":[50206,4736,3064,206],"./v_npermanente/list.vue":[94011,4736,3064,4011],"./vacaciones/add.vue":[33951,4736,3064],"./vacaciones/edit.vue":[62556,4736,3064],"./vacaciones/list.vue":[9516,4736,3064,9516],"./vacaciones/view.vue":[36593,4736,3064,6593]};function t(e){if(!i.o(u,e))return Promise.resolve().then((()=>{var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=u[e],t=a[0];return Promise.all(a.slice(1).map(i.e)).then((()=>i(t)))}t.keys=()=>Object.keys(u),t.id=22385,e.exports=t}}]);