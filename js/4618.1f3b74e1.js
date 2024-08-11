"use strict";(self["webpackChunkrrhh20"]=self["webpackChunkrrhh20"]||[]).push([[4618],{94618:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var o=n(59835),s=n(86970),a=n(61957);const r={class:"container"},i={class:"row justify-center"},l={class:"col-md-5 col-12"},d={class:"row justify-between q-col-gutter-md"},c=(0,o._)("div",{class:"col"},[(0,o._)("div",{class:"text-h6 text-bold"},"Verificación OTP")],-1),u={class:"col-auto"},p={class:"text-h6 text-bold text-info"},v=(0,o._)("div",{class:"text-body2 text-grey-6"},"Se ha enviado OTP a su número de teléfono a través de SMS",-1),h={class:"row justify-between q-col-gutter-md"},m={class:"col"},g={class:"col-auto"},w=(0,o.Uk)(" Verificar "),f={class:"row justify-between q-col-gutter-md q-mt-xs"},_=(0,o._)("div",{class:"col"},[(0,o._)("span",{class:"text-grey"},"Didn't receive OTP"),(0,o.Uk)(" ? ")],-1),y={class:"col-auto"},b=(0,o.Uk)(" Resend... ");function q(e,t,n,q,k,x){const C=(0,o.up)("q-icon"),M=(0,o.up)("q-banner"),O=(0,o.up)("q-input"),W=(0,o.up)("q-btn"),D=(0,o.up)("q-form"),I=(0,o.up)("q-card-section"),S=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",i,[(0,o._)("div",l,[(0,o.Wm)(S,{class:"q-my-lg no-shadow"},{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(M,null,{avatar:(0,o.w5)((()=>[(0,o.Wm)(C,{color:"positive",size:"40px",name:"check_circle"})])),default:(0,o.w5)((()=>[(0,o._)("div",d,[c,(0,o._)("div",u,[(0,o._)("div",p,(0,s.zw)(e.countDown),1)])]),v])),_:1}),(0,o.Wm)(D,{ref:"observer",onSubmit:t[3]||(t[3]=(0,a.iM)((e=>x.startOtpValidation()),["prevent"]))},{default:(0,o.w5)((()=>[(0,o._)("div",h,[(0,o._)("div",m,[(0,o.Wm)(O,{dense:"",class:"text-center",outlined:"",placeholder:"Ingresar OTP",modelValue:e.otpCode,"onUpdate:modelValue":t[0]||(t[0]=t=>e.otpCode=t),required:"required",type:"text","input-class":"text-center text-left otp-input"},null,8,["modelValue"])]),(0,o._)("div",g,[(0,o.Wm)(W,{unelevated:"",loading:e.loading,color:"positive","no-caps":"",type:"submit"},{default:(0,o.w5)((()=>[w])),_:1},8,["loading"])])]),(0,o.Wm)(a.uT,{appear:"","enter-active-class":"animated bounceIn","leave-active-class":"animated fadeOut"},{default:(0,o.w5)((()=>[e.errorMsg?((0,o.wg)(),(0,o.j4)(M,{key:0,dense:"","inline-actions":"",rounded:"",class:"bg-red-1"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(C,{color:"red",name:"error"})])),action:(0,o.w5)((()=>[(0,o.Wm)(W,{onClick:t[1]||(t[1]=t=>e.errorMsg=null),dense:"",flat:"",icon:"close"})])),default:(0,o.w5)((()=>[(0,o.Uk)(" "+(0,s.zw)(e.errorMsg.toString())+" ",1)])),_:1})):(0,o.kq)("",!0)])),_:1}),(0,o._)("div",f,[_,(0,o._)("div",y,[(0,o.Wm)(W,{unelevated:"",color:"blue-1","text-color":"blue",disabled:!e.canResend,loading:e.resending,onClick:t[2]||(t[2]=e=>x.resendOtp()),"no-caps":"",type:"button"},{default:(0,o.w5)((()=>[b])),_:1},8,["disabled","loading"])])])])),_:1},512)])),_:1})])),_:1})])])])}var k=n(96928);const x={setup(){const e=(0,k.t)();return{store:e}},data:function(){return{otpCode:"",loading:!1,resending:!1,canResend:!1,errorMsg:"",countDown:"00:00"}},methods:{async startOtpValidation(){this.loading=!0,this.errorMsg="";let e={otp_code:this.otpCode,token:this.$route.query.token},t=!1,n="/auth/validateotp",o={formData:e,rememberUser:t,url:n};try{const e=await this.store.login(o);e.token?window.location="/":this.$router.push(e.nextpage)}catch(a){var s;this.errorMsg=(null===a||void 0===a||null===(s=a.response)||void 0===s?void 0:s.data)||"Unable to validate otp"}finally{this.loading=!1}},async resendOtp(){this.resending=!0,this.errorMsg="";let e={token:this.$route.query.token},t="/auth/resendotp";try{await this.$api.post(t,e),this.canResend=!1,this.startCountDown(),this.$q.notify({message:"OTP Sent Successfully",type:"positive"})}catch(o){var n;this.errorMsg=(null===o||void 0===o||null===(n=o.response)||void 0===n?void 0:n.data)||"Unable to resend otp"}finally{this.resending=!1}},startCountDown(){let e,t=parseInt(this.$route.query.duration)||5,n=60*t,o=n;var s=this;const a=setInterval((function(){n=parseInt(o/60,10),e=parseInt(o%60,10),n=n<10?"0"+n:n,e=e<10?"0"+e:e,s.countDown=n+":"+e,--o<0&&(clearInterval(a),s.errorMsg="OTP has expired",s.canResend=!0)}),1e3)}},mounted(){this.startCountDown()}};var C=n(11639),M=n(44458),O=n(63190),W=n(47128),D=n(22857),I=n(8326),S=n(66611),U=n(68879),Z=n(69984),Q=n.n(Z);const T=(0,C.Z)(x,[["render",q]]),V=T;Q()(x,"components",{QCard:M.Z,QCardSection:O.Z,QBanner:W.Z,QIcon:D.Z,QForm:I.Z,QInput:S.Z,QBtn:U.Z})}}]);