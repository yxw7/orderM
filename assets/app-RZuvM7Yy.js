const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OrderManageView-CTqK8dam.js","./SearchPanel-ZEoD6n6-.js","./SearchExpandToggle-C0bFEGv_.js","./DataTable-C1Qiv8q1.js","./PaginationBar-BmnJSMeU.js","./DataTable-TwsiaAEU.css","./HoverTooltip-DPZPqOCU.js","./DropdownButton-CoCaPqN9.js","./order-DU5Ke22n.js","./orders-BwORIdUi.js","./current-librarian-ClwczVX4.js","./association-HuY_t4J-.js","./subscriber-manage-C4nsBCDe.js","./order-line-detail-C4Od39OG.js","./settled-list-BOMbvSXf.js","./marc-mapping-manage-DR0W9Ttw.js","./supplier-sources-COAuq8n2.js","./use-site-options-CpRtiY2v.js","./SiteMultiSelect-C-fYE3iY.js","./MarcTable-Prl8h72B.js","./FormModal-Cj4o3OpD.js","./ReasonSelect-DG6RCs6T.js","./SearchSelect-Cm10Zp0C.js","./shortage-DSUdH0Rm.js","./bib-order-form-cache-x1qklA2c.js","./import-template-manage-CZsp5zwI.js","./PrdSpecDrawer-DOZ8I1px.js","./PrdSpecDrawer-Ci5ThT7X.css","./OrderManageView-CkWKoGrf.css","./OrderLineDetailView-BxIt3kAd.js","./order-operation-log-BQ2hDm6I.js","./OrderLineDetailView-Dg9xnmTN.css","./BibQueryView-DQ-KXLip.js","./currency-manage-C6gvmfle.js","./BibQueryView-CSLWDhqa.css","./NewBibView-DYq8FlIk.js","./use-breadcrumb-back-Bw5hqSK9.js","./Z3950QueryView-BzmwAuv3.js","./AcceptanceManageView-eutdzN1V.js","./acceptance-list-CNPNjlMh.js","./AcceptanceSettlementModal-DrlL7wpo.js","./AcceptanceExportConfigModal-no5tOOmz.js","./delivery-import-B5X5OGkt.js","./receive-by-item-D08XE_YQ.js","./pre-accept-drafts-BLq4GbaE.js","./AcceptanceDetailView-BjwArwZb.js","./DeliveryImportTaskListView-BkOlh7uv.js","./delivery-import-tasks-Dm25Mpwk.js","./DeliveryImportTaskListView-C8ix_IVu.css","./DeliveryImportTaskDetailView-BV6e8PZi.js","./BarcodePreviewModal-CtmW8v6L.js","./DeliveryImportTaskDetailView-BSuCGUyz.css","./ReceiveByItemView-Dn7SBD6f.js","./exchange-manage-B0BE-DzI.js","./BatchAcceptanceView-C9HVmT8M.js","./ExchangeManageView-58tvXw3G.js","./ReturnManageView-BRRxp35B.js","./ShortageManageView-BQ-ypRB7.js","./ShortageCancelModal-DN9nPMdK.js","./ShortageDetailView-DiuZcDOM.js","./PendingSettlementView-iA_g7l0q.js","./SettledView-CzK_06jd.js","./settled-DLVpEtTD.js","./SettlementDetailView-BEWVZcfi.js","./SettlementListView-BKKBFSJ6.js","./FailSettlementView-DvcE2X-d.js","./SubscriberListView-BHZrZe5F.js","./LibrarianListView-BY33xefF.js","./CurrencyInfoView-DOGBWfDO.js","./ImportTemplateConfigView-EtWNOO9p.js","./StatusToggle-CD9fieYL.js","./ShortageConfigView-Bq5poFxW.js","./BarcodeSupplierView-By23tD7y.js","./BarcodeRuleView-JY2V5BeA.js","./MarcMappingView-gH0TKapL.js","./LocationManageView-HH_l5Ref.js","./ReasonParamsView-DdKpT7fS.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gn(t){const e=Object.create(null);for(const i of t.split(","))e[i]=1;return i=>i in e}const ct={},Xe=[],re=()=>{},Js=()=>!1,sl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),rl=t=>t.startsWith("onUpdate:"),Rt=Object.assign,mn=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},jo=Object.prototype.hasOwnProperty,nt=(t,e)=>jo.call(t,e),U=Array.isArray,Je=t=>ai(t)==="[object Map]",oi=t=>ai(t)==="[object Set]",Un=t=>ai(t)==="[object Date]",Ho=t=>ai(t)==="[object RegExp]",q=t=>typeof t=="function",dt=t=>typeof t=="string",jt=t=>typeof t=="symbol",st=t=>t!==null&&typeof t=="object",Qs=t=>(st(t)||q(t))&&q(t.then)&&q(t.catch),Zs=Object.prototype.toString,ai=t=>Zs.call(t),Ko=t=>ai(t).slice(8,-1),tr=t=>ai(t)==="[object Object]",ol=t=>dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vi=gn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),al=t=>{const e=Object.create(null);return(i=>e[i]||(e[i]=t(i)))},Uo=/-\w/g,Dt=al(t=>t.replace(Uo,e=>e.slice(1).toUpperCase())),Go=/\B([A-Z])/g,Pe=al(t=>t.replace(Go,"-$1").toLowerCase()),cl=al(t=>t.charAt(0).toUpperCase()+t.slice(1)),xl=al(t=>t?`on${cl(t)}`:""),se=(t,e)=>!Object.is(t,e),Qe=(t,...e)=>{for(let i=0;i<t.length;i++)t[i](...e)},er=(t,e,i,l=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:l,value:i})},ul=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gn;const dl=()=>Gn||(Gn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vn(t){if(U(t)){const e={};for(let i=0;i<t.length;i++){const l=t[i],n=dt(l)?zo(l):vn(l);if(n)for(const s in n)e[s]=n[s]}return e}else if(dt(t)||st(t))return t}const Wo=/;(?![^(]*\))/g,qo=/:([^]+)/,Yo=/\/\*[^]*?\*\//g;function zo(t){const e={};return t.replace(Yo,"").split(Wo).forEach(i=>{if(i){const l=i.split(qo);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function Ie(t){let e="";if(dt(t))e=t;else if(U(t))for(let i=0;i<t.length;i++){const l=Ie(t[i]);l&&(e+=l+" ")}else if(st(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const Xo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jo=gn(Xo);function ir(t){return!!t||t===""}function Qo(t,e){if(t.length!==e.length)return!1;let i=!0;for(let l=0;i&&l<t.length;l++)i=Ee(t[l],e[l]);return i}function Ee(t,e){if(t===e)return!0;let i=Un(t),l=Un(e);if(i||l)return i&&l?t.getTime()===e.getTime():!1;if(i=jt(t),l=jt(e),i||l)return t===e;if(i=U(t),l=U(e),i||l)return i&&l?Qo(t,e):!1;if(i=st(t),l=st(e),i||l){if(!i||!l)return!1;const n=Object.keys(t).length,s=Object.keys(e).length;if(n!==s)return!1;for(const r in t){const a=t.hasOwnProperty(r),c=e.hasOwnProperty(r);if(a&&!c||!a&&c||!Ee(t[r],e[r]))return!1}}return String(t)===String(e)}function bn(t,e){return t.findIndex(i=>Ee(i,e))}const lr=t=>!!(t&&t.__v_isRef===!0),ti=t=>dt(t)?t:t==null?"":U(t)||st(t)&&(t.toString===Zs||!q(t.toString))?lr(t)?ti(t.value):JSON.stringify(t,nr,2):String(t),nr=(t,e)=>lr(e)?nr(t,e.value):Je(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((i,[l,n],s)=>(i[Il(l,s)+" =>"]=n,i),{})}:oi(e)?{[`Set(${e.size})`]:[...e.values()].map(i=>Il(i))}:jt(e)?Il(e):st(e)&&!U(e)&&!tr(e)?String(e):e,Il=(t,e="")=>{var i;return jt(t)?`Symbol(${(i=t.description)!=null?i:e})`:t};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class sr{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&_t&&(_t.active?(this.parent=_t,this.index=(_t.scopes||(_t.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].pause();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].resume();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].resume()}}run(e){if(this._active){const i=_t;try{return _t=this,e()}finally{_t=i}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){if(this._on>0&&--this._on===0){if(_t===this)_t=this.prevScope;else{let e=_t;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let i,l;for(i=0,l=this.effects.length;i<l;i++)this.effects[i].stop();for(this.effects.length=0,i=0,l=this.cleanups.length;i<l;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,l=this.scopes.length;i<l;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function rr(t){return new sr(t)}function or(){return _t}function Zo(t,e=!1){_t&&_t.cleanups.push(t)}let ut;const wl=new WeakSet;class ar{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&(_t.active?_t.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wl.has(this)&&(wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ur(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wn(this),dr(this);const e=ut,i=Yt;ut=this,Yt=!0;try{return this.fn()}finally{fr(this),ut=e,Yt=i,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sn(e);this.deps=this.depsTail=void 0,Wn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wl(this)&&this.run()}get dirty(){return Wl(this)}}let cr=0,bi,_i;function ur(t,e=!1){if(t.flags|=8,e){t.next=_i,_i=t;return}t.next=bi,bi=t}function _n(){cr++}function yn(){if(--cr>0)return;if(_i){let e=_i;for(_i=void 0;e;){const i=e.next;e.next=void 0,e.flags&=-9,e=i}}let t;for(;bi;){let e=bi;for(bi=void 0;e;){const i=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(l){t||(t=l)}e=i}}if(t)throw t}function dr(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fr(t){let e,i=t.depsTail,l=i;for(;l;){const n=l.prevDep;l.version===-1?(l===i&&(i=n),Sn(l),ta(l)):e=l,l.dep.activeLink=l.prevActiveLink,l.prevActiveLink=void 0,l=n}t.deps=e,t.depsTail=i}function Wl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pr(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function pr(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ai)||(t.globalVersion=Ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wl(t))))return;t.flags|=2;const e=t.dep,i=ut,l=Yt;ut=t,Yt=!0;try{dr(t);const n=t.fn(t._value);(e.version===0||se(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(n){throw e.version++,n}finally{ut=i,Yt=l,fr(t),t.flags&=-3}}function Sn(t,e=!1){const{dep:i,prevSub:l,nextSub:n}=t;if(l&&(l.nextSub=n,t.prevSub=void 0),n&&(n.prevSub=l,t.nextSub=void 0),i.subs===t&&(i.subs=l,!l&&i.computed)){i.computed.flags&=-5;for(let s=i.computed.deps;s;s=s.nextDep)Sn(s,!0)}!e&&!--i.sc&&i.map&&i.map.delete(i.key)}function ta(t){const{prevDep:e,nextDep:i}=t;e&&(e.nextDep=i,t.prevDep=void 0),i&&(i.prevDep=e,t.nextDep=void 0)}let Yt=!0;const hr=[];function ae(){hr.push(Yt),Yt=!1}function ce(){const t=hr.pop();Yt=t===void 0?!0:t}function Wn(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const i=ut;ut=void 0;try{e()}finally{ut=i}}}let Ai=0;class ea{constructor(e,i){this.sub=e,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cn{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!Yt||ut===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==ut)i=this.activeLink=new ea(ut,this),ut.deps?(i.prevDep=ut.depsTail,ut.depsTail.nextDep=i,ut.depsTail=i):ut.deps=ut.depsTail=i,gr(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const l=i.nextDep;l.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=l),i.prevDep=ut.depsTail,i.nextDep=void 0,ut.depsTail.nextDep=i,ut.depsTail=i,ut.deps===i&&(ut.deps=l)}return i}trigger(e){this.version++,Ai++,this.notify(e)}notify(e){_n();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{yn()}}}function gr(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let l=e.deps;l;l=l.nextDep)gr(l)}const i=t.dep.subs;i!==t&&(t.prevSub=i,i&&(i.nextSub=t)),t.dep.subs=t}}const qi=new WeakMap,Ve=Symbol(""),ql=Symbol(""),xi=Symbol("");function It(t,e,i){if(Yt&&ut){let l=qi.get(t);l||qi.set(t,l=new Map);let n=l.get(i);n||(l.set(i,n=new Cn),n.map=l,n.key=i),n.track()}}function me(t,e,i,l,n,s){const r=qi.get(t);if(!r){Ai++;return}const a=c=>{c&&c.trigger()};if(_n(),e==="clear")r.forEach(a);else{const c=U(t),d=c&&ol(i);if(c&&i==="length"){const u=Number(l);r.forEach((p,g)=>{(g==="length"||g===xi||!jt(g)&&g>=u)&&a(p)})}else switch((i!==void 0||r.has(void 0))&&a(r.get(i)),d&&a(r.get(xi)),e){case"add":c?d&&a(r.get("length")):(a(r.get(Ve)),Je(t)&&a(r.get(ql)));break;case"delete":c||(a(r.get(Ve)),Je(t)&&a(r.get(ql)));break;case"set":Je(t)&&a(r.get(Ve));break}}yn()}function ia(t,e){const i=qi.get(t);return i&&i.get(e)}function Ge(t){const e=Z(t);return e===t?e:(It(e,"iterate",xi),Ft(t)?e:e.map(zt))}function fl(t){return It(t=Z(t),"iterate",xi),t}function le(t,e){return _e(t)?ei(oe(t)?zt(e):e):zt(e)}const la={__proto__:null,[Symbol.iterator](){return El(this,Symbol.iterator,t=>le(this,t))},concat(...t){return Ge(this).concat(...t.map(e=>U(e)?Ge(e):e))},entries(){return El(this,"entries",t=>(t[1]=le(this,t[1]),t))},every(t,e){return fe(this,"every",t,e,void 0,arguments)},filter(t,e){return fe(this,"filter",t,e,i=>i.map(l=>le(this,l)),arguments)},find(t,e){return fe(this,"find",t,e,i=>le(this,i),arguments)},findIndex(t,e){return fe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return fe(this,"findLast",t,e,i=>le(this,i),arguments)},findLastIndex(t,e){return fe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return fe(this,"forEach",t,e,void 0,arguments)},includes(...t){return Nl(this,"includes",t)},indexOf(...t){return Nl(this,"indexOf",t)},join(t){return Ge(this).join(t)},lastIndexOf(...t){return Nl(this,"lastIndexOf",t)},map(t,e){return fe(this,"map",t,e,void 0,arguments)},pop(){return ui(this,"pop")},push(...t){return ui(this,"push",t)},reduce(t,...e){return qn(this,"reduce",t,e)},reduceRight(t,...e){return qn(this,"reduceRight",t,e)},shift(){return ui(this,"shift")},some(t,e){return fe(this,"some",t,e,void 0,arguments)},splice(...t){return ui(this,"splice",t)},toReversed(){return Ge(this).toReversed()},toSorted(t){return Ge(this).toSorted(t)},toSpliced(...t){return Ge(this).toSpliced(...t)},unshift(...t){return ui(this,"unshift",t)},values(){return El(this,"values",t=>le(this,t))}};function El(t,e,i){const l=fl(t),n=l[e]();return l!==t&&!Ft(t)&&(n._next=n.next,n.next=()=>{const s=n._next();return s.done||(s.value=i(s.value)),s}),n}const na=Array.prototype;function fe(t,e,i,l,n,s){const r=fl(t),a=r!==t&&!Ft(t),c=r[e];if(c!==na[e]){const p=c.apply(t,s);return a?zt(p):p}let d=i;r!==t&&(a?d=function(p,g){return i.call(this,le(t,p),g,t)}:i.length>2&&(d=function(p,g){return i.call(this,p,g,t)}));const u=c.call(r,d,l);return a&&n?n(u):u}function qn(t,e,i,l){const n=fl(t),s=n!==t&&!Ft(t);let r=i,a=!1;n!==t&&(s?(a=l.length===0,r=function(d,u,p){return a&&(a=!1,d=le(t,d)),i.call(this,d,le(t,u),p,t)}):i.length>3&&(r=function(d,u,p){return i.call(this,d,u,p,t)}));const c=n[e](r,...l);return a?le(t,c):c}function Nl(t,e,i){const l=Z(t);It(l,"iterate",xi);const n=l[e](...i);return(n===-1||n===!1)&&pl(i[0])?(i[0]=Z(i[0]),l[e](...i)):n}function ui(t,e,i=[]){ae(),_n();const l=Z(t)[e].apply(t,i);return yn(),ce(),l}const sa=gn("__proto__,__v_isRef,__isVue"),mr=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt));function ra(t){jt(t)||(t=String(t));const e=Z(this);return It(e,"has",t),e.hasOwnProperty(t)}class vr{constructor(e=!1,i=!1){this._isReadonly=e,this._isShallow=i}get(e,i,l){if(i==="__v_skip")return e.__v_skip;const n=this._isReadonly,s=this._isShallow;if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return s;if(i==="__v_raw")return l===(n?s?ma:Sr:s?yr:_r).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(l)?e:void 0;const r=U(e);if(!n){let c;if(r&&(c=la[i]))return c;if(i==="hasOwnProperty")return ra}const a=Reflect.get(e,i,ht(e)?e:l);if((jt(i)?mr.has(i):sa(i))||(n||It(e,"get",i),s))return a;if(ht(a)){const c=r&&ol(i)?a:a.value;return n&&st(c)?zl(c):c}return st(a)?n?zl(a):Pi(a):a}}class br extends vr{constructor(e=!1){super(!1,e)}set(e,i,l,n){let s=e[i];const r=U(e)&&ol(i);if(!this._isShallow){const d=_e(s);if(!Ft(l)&&!_e(l)&&(s=Z(s),l=Z(l)),!r&&ht(s)&&!ht(l))return d||(s.value=l),!0}const a=r?Number(i)<e.length:nt(e,i),c=Reflect.set(e,i,l,ht(e)?e:n);return e===Z(n)&&c&&(a?se(l,s)&&me(e,"set",i,l):me(e,"add",i,l)),c}deleteProperty(e,i){const l=nt(e,i);e[i];const n=Reflect.deleteProperty(e,i);return n&&l&&me(e,"delete",i,void 0),n}has(e,i){const l=Reflect.has(e,i);return(!jt(i)||!mr.has(i))&&It(e,"has",i),l}ownKeys(e){return It(e,"iterate",U(e)?"length":Ve),Reflect.ownKeys(e)}}class oa extends vr{constructor(e=!1){super(!0,e)}set(e,i){return!0}deleteProperty(e,i){return!0}}const aa=new br,ca=new oa,ua=new br(!0);const Yl=t=>t,Bi=t=>Reflect.getPrototypeOf(t);function da(t,e,i){return function(...l){const n=this.__v_raw,s=Z(n),r=Je(s),a=t==="entries"||t===Symbol.iterator&&r,c=t==="keys"&&r,d=n[t](...l),u=i?Yl:e?ei:zt;return!e&&It(s,"iterate",c?ql:Ve),Rt(Object.create(d),{next(){const{value:p,done:g}=d.next();return g?{value:p,done:g}:{value:a?[u(p[0]),u(p[1])]:u(p),done:g}}})}}function Vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fa(t,e){const i={get(n){const s=this.__v_raw,r=Z(s),a=Z(n);t||(se(n,a)&&It(r,"get",n),It(r,"get",a));const{has:c}=Bi(r),d=e?Yl:t?ei:zt;if(c.call(r,n))return d(s.get(n));if(c.call(r,a))return d(s.get(a));s!==r&&s.get(n)},get size(){const n=this.__v_raw;return!t&&It(Z(n),"iterate",Ve),n.size},has(n){const s=this.__v_raw,r=Z(s),a=Z(n);return t||(se(n,a)&&It(r,"has",n),It(r,"has",a)),n===a?s.has(n):s.has(n)||s.has(a)},forEach(n,s){const r=this,a=r.__v_raw,c=Z(a),d=e?Yl:t?ei:zt;return!t&&It(c,"iterate",Ve),a.forEach((u,p)=>n.call(s,d(u),d(p),r))}};return Rt(i,t?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(n){const s=Z(this),r=Bi(s),a=Z(n),c=!e&&!Ft(n)&&!_e(n)?a:n;return r.has.call(s,c)||se(n,c)&&r.has.call(s,n)||se(a,c)&&r.has.call(s,a)||(s.add(c),me(s,"add",c,c)),this},set(n,s){!e&&!Ft(s)&&!_e(s)&&(s=Z(s));const r=Z(this),{has:a,get:c}=Bi(r);let d=a.call(r,n);d||(n=Z(n),d=a.call(r,n));const u=c.call(r,n);return r.set(n,s),d?se(s,u)&&me(r,"set",n,s):me(r,"add",n,s),this},delete(n){const s=Z(this),{has:r,get:a}=Bi(s);let c=r.call(s,n);c||(n=Z(n),c=r.call(s,n)),a&&a.call(s,n);const d=s.delete(n);return c&&me(s,"delete",n,void 0),d},clear(){const n=Z(this),s=n.size!==0,r=n.clear();return s&&me(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=da(n,t,e)}),i}function $n(t,e){const i=fa(t,e);return(l,n,s)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?l:Reflect.get(nt(i,n)&&n in l?i:l,n,s)}const pa={get:$n(!1,!1)},ha={get:$n(!1,!0)},ga={get:$n(!0,!1)};const _r=new WeakMap,yr=new WeakMap,Sr=new WeakMap,ma=new WeakMap;function va(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pi(t){return _e(t)?t:Tn(t,!1,aa,pa,_r)}function Cr(t){return Tn(t,!1,ua,ha,yr)}function zl(t){return Tn(t,!0,ca,ga,Sr)}function Tn(t,e,i,l,n){if(!st(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=n.get(t);if(s)return s;const r=va(Ko(t));if(r===0)return t;const a=new Proxy(t,r===2?l:i);return n.set(t,a),a}function oe(t){return _e(t)?oe(t.__v_raw):!!(t&&t.__v_isReactive)}function _e(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function pl(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Rn(t){return!nt(t,"__v_skip")&&Object.isExtensible(t)&&er(t,"__v_skip",!0),t}const zt=t=>st(t)?Pi(t):t,ei=t=>st(t)?zl(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function hl(t){return $r(t,!1)}function ba(t){return $r(t,!0)}function $r(t,e){return ht(t)?t:new _a(t,e)}class _a{constructor(e,i){this.dep=new Cn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?e:Z(e),this._value=i?e:zt(e),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(e){const i=this._rawValue,l=this.__v_isShallow||Ft(e)||_e(e);e=l?e:Z(e),se(e,i)&&(this._rawValue=e,this._value=l?e:zt(e),this.dep.trigger())}}function Ct(t){return ht(t)?t.value:t}const ya={get:(t,e,i)=>e==="__v_raw"?t:Ct(Reflect.get(t,e,i)),set:(t,e,i,l)=>{const n=t[e];return ht(n)&&!ht(i)?(n.value=i,!0):Reflect.set(t,e,i,l)}};function Tr(t){return oe(t)?t:new Proxy(t,ya)}function Sa(t){const e=U(t)?new Array(t.length):{};for(const i in t)e[i]=Rr(t,i);return e}class Ca{constructor(e,i,l){this._object=e,this._defaultValue=l,this.__v_isRef=!0,this._value=void 0,this._key=jt(i)?i:String(i),this._raw=Z(e);let n=!0,s=e;if(!U(e)||jt(this._key)||!ol(this._key))do n=!pl(s)||Ft(s);while(n&&(s=s.__v_raw));this._shallow=n}get value(){let e=this._object[this._key];return this._shallow&&(e=Ct(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&ht(this._raw[this._key])){const i=this._object[this._key];if(ht(i)){i.value=e;return}}this._object[this._key]=e}get dep(){return ia(this._raw,this._key)}}class $a{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ta(t,e,i){return ht(t)?t:q(t)?new $a(t):st(t)&&arguments.length>1?Rr(t,e,i):hl(t)}function Rr(t,e,i){return new Ca(t,e,i)}class Ra{constructor(e,i,l){this.fn=e,this.setter=i,this._value=void 0,this.dep=new Cn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=l}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return ur(this,!0),!0}get value(){const e=this.dep.track();return pr(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Aa(t,e,i=!1){let l,n;return q(t)?l=t:(l=t.get,n=t.set),new Ra(l,n,i)}const Fi={},Yi=new WeakMap;let Me;function xa(t,e=!1,i=Me){if(i){let l=Yi.get(i);l||Yi.set(i,l=[]),l.push(t)}}function Ia(t,e,i=ct){const{immediate:l,deep:n,once:s,scheduler:r,augmentJob:a,call:c}=i,d=$=>n?$:Ft($)||n===!1||n===0?ve($,1):ve($);let u,p,g,v,A=!1,R=!1;if(ht(t)?(p=()=>t.value,A=Ft(t)):oe(t)?(p=()=>d(t),A=!0):U(t)?(R=!0,A=t.some($=>oe($)||Ft($)),p=()=>t.map($=>{if(ht($))return $.value;if(oe($))return d($);if(q($))return c?c($,2):$()})):q(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){ae();try{g()}finally{ce()}}const $=Me;Me=u;try{return c?c(t,3,[v]):t(v)}finally{Me=$}}:p=re,e&&n){const $=p,j=n===!0?1/0:n;p=()=>ve($(),j)}const P=or(),L=()=>{u.stop(),P&&P.active&&mn(P.effects,u)};if(s&&e){const $=e;e=(...j)=>{const J=$(...j);return L(),J}}let b=R?new Array(t.length).fill(Fi):Fi;const x=$=>{if(!(!(u.flags&1)||!u.dirty&&!$))if(e){const j=u.run();if($||n||A||(R?j.some((J,k)=>se(J,b[k])):se(j,b))){g&&g();const J=Me;Me=u;try{const k=[j,b===Fi?void 0:R&&b[0]===Fi?[]:b,v];b=j,c?c(e,3,k):e(...k)}finally{Me=J}}}else u.run()};return a&&a(x),u=new ar(p),u.scheduler=r?()=>r(x,!1):x,v=$=>xa($,!1,u),g=u.onStop=()=>{const $=Yi.get(u);if($){if(c)c($,4);else for(const j of $)j();Yi.delete(u)}},e?l?x(!0):b=u.run():r?r(x.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function ve(t,e=1/0,i){if(e<=0||!st(t)||t.__v_skip||(i=i||new Map,(i.get(t)||0)>=e))return t;if(i.set(t,e),e--,ht(t))ve(t.value,e,i);else if(U(t))for(let l=0;l<t.length;l++)ve(t[l],e,i);else if(oi(t)||Je(t))t.forEach(l=>{ve(l,e,i)});else if(tr(t)){for(const l in t)ve(t[l],e,i);for(const l of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,l)&&ve(t[l],e,i)}return t}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(t,e,i,l){try{return l?t(...l):t()}catch(n){gl(n,e,i)}}function Xt(t,e,i,l){if(q(t)){const n=Oi(t,e,i,l);return n&&Qs(n)&&n.catch(s=>{gl(s,e,i)}),n}if(U(t)){const n=[];for(let s=0;s<t.length;s++)n.push(Xt(t[s],e,i,l));return n}}function gl(t,e,i,l=!0){const n=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||ct;if(e){let a=e.parent;const c=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${i}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,c,d)===!1)return}a=a.parent}if(s){ae(),Oi(s,null,10,[t,c,d]),ce();return}}wa(t,i,n,l,r)}function wa(t,e,i,l=!0,n=!1){if(n)throw t;console.error(t)}const Pt=[];let ie=-1;const Ze=[];let Ae=null,qe=0;const Ar=Promise.resolve();let zi=null;function ml(t){const e=zi||Ar;return t?e.then(this?t.bind(this):t):e}function Ea(t){let e=ie+1,i=Pt.length;for(;e<i;){const l=e+i>>>1,n=Pt[l],s=Ii(n);s<t||s===t&&n.flags&2?e=l+1:i=l}return e}function An(t){if(!(t.flags&1)){const e=Ii(t),i=Pt[Pt.length-1];!i||!(t.flags&2)&&e>=Ii(i)?Pt.push(t):Pt.splice(Ea(e),0,t),t.flags|=1,xr()}}function xr(){zi||(zi=Ar.then(wr))}function Na(t){U(t)?Ze.push(...t):Ae&&t.id===-1?Ae.splice(qe+1,0,t):t.flags&1||(Ze.push(t),t.flags|=1),xr()}function Yn(t,e,i=ie+1){for(;i<Pt.length;i++){const l=Pt[i];if(l&&l.flags&2){if(t&&l.id!==t.uid)continue;Pt.splice(i,1),i--,l.flags&4&&(l.flags&=-2),l(),l.flags&4||(l.flags&=-2)}}}function Ir(t){if(Ze.length){const e=[...new Set(Ze)].sort((i,l)=>Ii(i)-Ii(l));if(Ze.length=0,Ae){Ae.push(...e);return}for(Ae=e,qe=0;qe<Ae.length;qe++){const i=Ae[qe];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}Ae=null,qe=0}}const Ii=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wr(t){try{for(ie=0;ie<Pt.length;ie++){const e=Pt[ie];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Oi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ie<Pt.length;ie++){const e=Pt[ie];e&&(e.flags&=-2)}ie=-1,Pt.length=0,Ir(),zi=null,(Pt.length||Ze.length)&&wr()}}let Tt=null,Er=null;function Xi(t){const e=Tt;return Tt=t,Er=t&&t.type.__scopeId||null,e}function xn(t,e=Tt,i){if(!e||t._n)return t;const l=(...n)=>{l._d&&el(-1);const s=Xi(e);let r;try{r=t(...n)}finally{Xi(s),l._d&&el(1)}return r};return l._n=!0,l._c=!0,l._d=!0,l}function Pa(t,e){if(Tt===null)return t;const i=Sl(Tt),l=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[s,r,a,c=ct]=e[n];s&&(q(s)&&(s={mounted:s,updated:s}),s.deep&&ve(r),l.push({dir:s,instance:i,value:r,oldValue:void 0,arg:a,modifiers:c}))}return t}function De(t,e,i,l){const n=t.dirs,s=e&&e.dirs;for(let r=0;r<n.length;r++){const a=n[r];s&&(a.oldValue=s[r].value);let c=a.dir[l];c&&(ae(),Xt(c,i,8,[t.el,a,t,e]),ce())}}function Ui(t,e){if(wt){let i=wt.provides;const l=wt.parent&&wt.parent.provides;l===i&&(i=wt.provides=Object.create(l)),i[t]=e}}function Gt(t,e,i=!1){const l=On();if(l||je){let n=je?je._context.provides:l?l.parent==null||l.ce?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:void 0;if(n&&t in n)return n[t];if(arguments.length>1)return i&&q(e)?e.call(l&&l.proxy):e}}function Oa(){return!!(On()||je)}const Da=Symbol.for("v-scx"),ka=()=>Gt(Da);function Fe(t,e,i){return Nr(t,e,i)}function Nr(t,e,i=ct){const{immediate:l,deep:n,flush:s,once:r}=i,a=Rt({},i),c=e&&l||!e&&s!=="post";let d;if(Ei){if(s==="sync"){const v=ka();d=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=re,v.resume=re,v.pause=re,v}}const u=wt;a.call=(v,A,R)=>Xt(v,u,A,R);let p=!1;s==="post"?a.scheduler=v=>{yt(v,u&&u.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(v,A)=>{A?v():An(v)}),a.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const g=Ia(t,e,a);return Ei&&(d?d.push(g):c&&g()),g}function Ma(t,e,i){const l=this.proxy,n=dt(t)?t.includes(".")?Pr(l,t):()=>l[t]:t.bind(l,l);let s;q(e)?s=e:(s=e.handler,i=e);const r=Di(this),a=Nr(n,s.bind(l),i);return r(),a}function Pr(t,e){const i=e.split(".");return()=>{let l=t;for(let n=0;n<i.length&&l;n++)l=l[i[n]];return l}}const Te=new WeakMap,Or=Symbol("_vte"),La=t=>t.__isTeleport,Le=t=>t&&(t.disabled||t.disabled===""),Ba=t=>t&&(t.defer||t.defer===""),zn=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Xn=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Xl=(t,e)=>{const i=t&&t.to;return dt(i)?e?e(i):null:i},Va={name:"Teleport",__isTeleport:!0,process(t,e,i,l,n,s,r,a,c,d){const{mc:u,pc:p,pbc:g,o:{insert:v,querySelector:A,createText:R,createComment:P,parentNode:L}}=d,b=Le(e.props);let{dynamicChildren:x}=e;const $=(k,V,F)=>{k.shapeFlag&16&&u(k.children,V,F,n,s,r,a,c)},j=(k=e)=>{const V=Le(k.props),F=k.target=Xl(k.props,A),z=Jl(F,k,R,v);F&&(r!=="svg"&&zn(F)?r="svg":r!=="mathml"&&Xn(F)&&(r="mathml"),n&&n.isCE&&(n.ce._teleportTargets||(n.ce._teleportTargets=new Set)).add(F),V||($(k,F,z),pi(k,!1)))},J=k=>{const V=()=>{if(Te.get(k)===V){if(Te.delete(k),Le(k.props)){const F=L(k.el)||i;$(k,F,k.anchor),pi(k,!0)}j(k)}};Te.set(k,V),yt(V,s)};if(t==null){const k=e.el=R(""),V=e.anchor=R("");if(v(k,i,l),v(V,i,l),Ba(e.props)||s&&s.pendingBranch){J(e);return}b&&($(e,i,V),pi(e,!0)),j()}else{e.el=t.el;const k=e.anchor=t.anchor,V=Te.get(t);if(V){V.flags|=8,Te.delete(t),J(e);return}e.targetStart=t.targetStart;const F=e.target=t.target,z=e.targetAnchor=t.targetAnchor,ft=Le(t.props),At=ft?i:F,xt=ft?k:z;if(r==="svg"||zn(F)?r="svg":(r==="mathml"||Xn(F))&&(r="mathml"),x?(g(t.dynamicChildren,x,At,n,s,r,a),Pn(t,e,!0)):c||p(t,e,At,xt,n,s,r,a,!1),b)ft?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ji(e,i,k,d,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const qt=Xl(e.props,A);qt&&(e.target=qt,ji(e,qt,null,d,0))}else ft&&ji(e,F,z,d,1);pi(e,b)}},remove(t,e,i,{um:l,o:{remove:n}},s){const{shapeFlag:r,children:a,anchor:c,targetStart:d,targetAnchor:u,target:p,props:g}=t,v=Le(g),A=s||!v,R=Te.get(t);if(R&&(R.flags|=8,Te.delete(t)),p&&(n(d),n(u)),s&&n(c),!R&&(v||p)&&r&16)for(let P=0;P<a.length;P++){const L=a[P];l(L,e,i,A,!!L.dynamicChildren)}},move:ji,hydrate:Fa};function ji(t,e,i,{o:{insert:l},m:n},s=2){s===0&&l(t.targetAnchor,e,i);const{el:r,anchor:a,shapeFlag:c,children:d,props:u}=t,p=s===2;if(p&&l(r,e,i),!Te.has(t)&&(!p||Le(u))&&c&16)for(let g=0;g<d.length;g++)n(d[g],e,i,2);p&&l(a,e,i)}function Fa(t,e,i,l,n,s,{o:{nextSibling:r,parentNode:a,querySelector:c,insert:d,createText:u}},p){function g(P,L){let b=L;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,P._lpa=e.targetAnchor&&r(e.targetAnchor);break}}b=r(b)}}function v(P,L){L.anchor=p(r(P),L,a(P),i,l,n,s)}const A=e.target=Xl(e.props,c),R=Le(e.props);if(A){const P=A._lpa||A.firstChild;e.shapeFlag&16&&(R?(v(t,e),g(A,P),e.targetAnchor||Jl(A,e,u,d,a(t)===A?t:null)):(e.anchor=r(t),g(A,P),e.targetAnchor||Jl(A,e,u,d),p(P&&r(P),e,A,i,l,n,s))),pi(e,R)}else R&&e.shapeFlag&16&&(v(t,e),e.targetStart=t,e.targetAnchor=r(t));return e.anchor&&r(e.anchor)}const Jh=Va;function pi(t,e){const i=t.ctx;if(i&&i.ut){let l,n;for(e?(l=t.el,n=t.anchor):(l=t.targetStart,n=t.targetAnchor);l&&l!==n;)l.nodeType===1&&l.setAttribute("data-v-owner",i.uid),l=l.nextSibling;i.ut()}}function Jl(t,e,i,l,n=null){const s=e.targetStart=i(""),r=e.targetAnchor=i("");return s[Or]=r,t&&(l(s,t,n),l(r,t,n)),r}const Pl=Symbol("_leaveCb");function vl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dr(t,e){return q(t)?Rt({name:t.name},e,{setup:t}):t}function kr(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Jn(t,e){let i;return!!((i=Object.getOwnPropertyDescriptor(t,e))&&!i.configurable)}const Ji=new WeakMap;function yi(t,e,i,l,n=!1){if(U(t)){t.forEach((R,P)=>yi(R,e&&(U(e)?e[P]:e),i,l,n));return}if(we(l)&&!n){l.shapeFlag&512&&l.type.__asyncResolved&&l.component.subTree.component&&yi(t,e,i,l.component.subTree);return}const s=l.shapeFlag&4?Sl(l.component):l.el,r=n?null:s,{i:a,r:c}=t,d=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,p=a.setupState,g=Z(p),v=p===ct?Js:R=>Jn(u,R)?!1:nt(g,R),A=(R,P)=>!(P&&Jn(u,P));if(d!=null&&d!==c){if(Qn(e),dt(d))u[d]=null,v(d)&&(p[d]=null);else if(ht(d)){const R=e;A(d,R.k)&&(d.value=null),R.k&&(u[R.k]=null)}}if(q(c)){ae();try{Oi(c,a,12,[r,u])}finally{ce()}}else{const R=dt(c),P=ht(c);if(R||P){const L=()=>{if(t.f){const b=R?v(c)?p[c]:u[c]:A()||!t.k?c.value:u[t.k];if(n)U(b)&&mn(b,s);else if(U(b))b.includes(s)||b.push(s);else if(R)u[c]=[s],v(c)&&(p[c]=u[c]);else{const x=[s];A(c,t.k)&&(c.value=x),t.k&&(u[t.k]=x)}}else R?(u[c]=r,v(c)&&(p[c]=r)):P&&(A(c,t.k)&&(c.value=r),t.k&&(u[t.k]=r))};if(r){const b=()=>{L(),Ji.delete(t)};b.id=-1,Ji.set(t,b),yt(b,i)}else Qn(t),L()}}}function Qn(t){const e=Ji.get(t);e&&(e.flags|=8,Ji.delete(t))}dl().requestIdleCallback;dl().cancelIdleCallback;const we=t=>!!t.type.__asyncLoader,Mr=t=>t.type.__isKeepAlive,ja={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const i=On(),l=i.ctx;if(!l.renderer)return()=>{const b=e.default&&e.default();return b&&b.length===1?b[0]:b};const n=new Map,s=new Set;let r=null;const a=i.suspense,{renderer:{p:c,m:d,um:u,o:{createElement:p}}}=l,g=p("div");l.activate=(b,x,$,j,J)=>{const k=b.component;d(b,x,$,0,a),c(k.vnode,b,x,$,k,a,j,b.slotScopeIds,J),yt(()=>{k.isDeactivated=!1,k.a&&Qe(k.a);const V=b.props&&b.props.onVnodeMounted;V&&Kt(V,k.parent,b)},a)},l.deactivate=b=>{const x=b.component;Zi(x.m),Zi(x.a),d(b,g,null,1,a),yt(()=>{x.da&&Qe(x.da);const $=b.props&&b.props.onVnodeUnmounted;$&&Kt($,x.parent,b),x.isDeactivated=!0},a)};function v(b){Ol(b),u(b,i,a,!0)}function A(b){n.forEach((x,$)=>{const j=sn(we(x)?x.type.__asyncResolved||{}:x.type);j&&!b(j)&&R($)})}function R(b){const x=n.get(b);x&&(!r||!Ye(x,r))?v(x):r&&Ol(r),n.delete(b),s.delete(b)}Fe(()=>[t.include,t.exclude],([b,x])=>{b&&A($=>hi(b,$)),x&&A($=>!hi(x,$))},{flush:"post",deep:!0});let P=null;const L=()=>{P!=null&&(tl(i.subTree.type)?yt(()=>{n.set(P,Hi(i.subTree))},i.subTree.suspense):n.set(P,Hi(i.subTree)))};return In(L),Br(L),Vr(()=>{n.forEach(b=>{const{subTree:x,suspense:$}=i,j=Hi(x);if(b.type===j.type&&b.key===j.key){Ol(j);const J=j.component.da;J&&yt(J,$);return}v(b)})}),()=>{if(P=null,!e.default)return r=null;const b=e.default(),x=b[0];if(b.length>1)return r=null,b;if(!li(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return r=null,x;let $=Hi(x);if($.type===ue)return r=null,$;const j=$.type,J=sn(we($)?$.type.__asyncResolved||{}:j),{include:k,exclude:V,max:F}=t;if(k&&(!J||!hi(k,J))||V&&J&&hi(V,J))return $.shapeFlag&=-257,r=$,x;const z=$.key==null?j:$.key,ft=n.get(z);return $.el&&($=He($),x.shapeFlag&128&&(x.ssContent=$)),P=z,ft?($.el=ft.el,$.component=ft.component,$.transition&&vl($,$.transition),$.shapeFlag|=512,s.delete(z),s.add(z)):(s.add(z),F&&s.size>parseInt(F,10)&&R(s.values().next().value)),$.shapeFlag|=256,r=$,tl(x.type)?x:$}}},Ha=ja;function hi(t,e){return U(t)?t.some(i=>hi(i,e)):dt(t)?t.split(",").includes(e):Ho(t)?(t.lastIndex=0,t.test(e)):!1}function Ka(t,e){Lr(t,"a",e)}function Ua(t,e){Lr(t,"da",e)}function Lr(t,e,i=wt){const l=t.__wdc||(t.__wdc=()=>{let n=i;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(bl(e,l,i),i){let n=i.parent;for(;n&&n.parent;)Mr(n.parent.vnode)&&Ga(l,e,i,n),n=n.parent}}function Ga(t,e,i,l){const n=bl(e,t,l,!0);Fr(()=>{mn(l[e],n)},i)}function Ol(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Hi(t){return t.shapeFlag&128?t.ssContent:t}function bl(t,e,i=wt,l=!1){if(i){const n=i[t]||(i[t]=[]),s=e.__weh||(e.__weh=(...r)=>{ae();const a=Di(i),c=Xt(e,i,t,r);return a(),ce(),c});return l?n.unshift(s):n.push(s),s}}const ye=t=>(e,i=wt)=>{(!Ei||t==="sp")&&bl(t,(...l)=>e(...l),i)},Wa=ye("bm"),In=ye("m"),qa=ye("bu"),Br=ye("u"),Vr=ye("bum"),Fr=ye("um"),Ya=ye("sp"),za=ye("rtg"),Xa=ye("rtc");function Ja(t,e=wt){bl("ec",t,e)}const jr="components";function wn(t,e){return Kr(jr,t,!0,e)||t}const Hr=Symbol.for("v-ndc");function Qa(t){return dt(t)?Kr(jr,t,!1)||t:t||Hr}function Kr(t,e,i=!0,l=!1){const n=Tt||wt;if(n){const s=n.type;{const a=sn(s,!1);if(a&&(a===e||a===Dt(e)||a===cl(Dt(e))))return s}const r=Zn(n[t]||s[t],e)||Zn(n.appContext[t],e);return!r&&l?s:r}}function Zn(t,e){return t&&(t[e]||t[Dt(e)]||t[cl(Dt(e))])}function Ql(t,e,i,l){let n;const s=i,r=U(t);if(r||dt(t)){const a=r&&oe(t);let c=!1,d=!1;a&&(c=!Ft(t),d=_e(t),t=fl(t)),n=new Array(t.length);for(let u=0,p=t.length;u<p;u++)n[u]=e(c?d?ei(zt(t[u])):zt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){n=new Array(t);for(let a=0;a<t;a++)n[a]=e(a+1,a,void 0,s)}else if(st(t))if(t[Symbol.iterator])n=Array.from(t,(a,c)=>e(a,c,void 0,s));else{const a=Object.keys(t);n=new Array(a.length);for(let c=0,d=a.length;c<d;c++){const u=a[c];n[c]=e(t[u],u,c,s)}}else n=[];return n}function Qh(t,e,i={},l,n){if(Tt.ce||Tt.parent&&we(Tt.parent)&&Tt.parent.ce){const d=Object.keys(i).length>0;return e!=="default"&&(i.name=e),St(),ii(Ot,null,[vt("slot",i,l&&l())],d?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),St();const r=s&&Ur(s(i)),a=i.key||r&&r.key,c=ii(Ot,{key:(a&&!jt(a)?a:`_${e}`)+(!r&&l?"_fb":"")},r||(l?l():[]),r&&t._===1?64:-2);return!n&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),s&&s._c&&(s._d=!0),c}function Ur(t){return t.some(e=>li(e)?!(e.type===ue||e.type===Ot&&!Ur(e.children)):!0)?t:null}const Zl=t=>t?uo(t)?Sl(t):Zl(t.parent):null,Si=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zl(t.parent),$root:t=>Zl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wr(t),$forceUpdate:t=>t.f||(t.f=()=>{An(t.update)}),$nextTick:t=>t.n||(t.n=ml.bind(t.proxy)),$watch:t=>Ma.bind(t)}),Dl=(t,e)=>t!==ct&&!t.__isScriptSetup&&nt(t,e),Za={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:i,setupState:l,data:n,props:s,accessCache:r,type:a,appContext:c}=t;if(e[0]!=="$"){const g=r[e];if(g!==void 0)switch(g){case 1:return l[e];case 2:return n[e];case 4:return i[e];case 3:return s[e]}else{if(Dl(l,e))return r[e]=1,l[e];if(n!==ct&&nt(n,e))return r[e]=2,n[e];if(nt(s,e))return r[e]=3,s[e];if(i!==ct&&nt(i,e))return r[e]=4,i[e];tn&&(r[e]=0)}}const d=Si[e];let u,p;if(d)return e==="$attrs"&&It(t.attrs,"get",""),d(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(i!==ct&&nt(i,e))return r[e]=4,i[e];if(p=c.config.globalProperties,nt(p,e))return p[e]},set({_:t},e,i){const{data:l,setupState:n,ctx:s}=t;return Dl(n,e)?(n[e]=i,!0):l!==ct&&nt(l,e)?(l[e]=i,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:l,appContext:n,props:s,type:r}},a){let c;return!!(i[a]||t!==ct&&a[0]!=="$"&&nt(t,a)||Dl(e,a)||nt(s,a)||nt(l,a)||nt(Si,a)||nt(n.config.globalProperties,a)||(c=r.__cssModules)&&c[a])},defineProperty(t,e,i){return i.get!=null?t._.accessCache[e]=0:nt(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function ts(t){return U(t)?t.reduce((e,i)=>(e[i]=null,e),{}):t}let tn=!0;function tc(t){const e=Wr(t),i=t.proxy,l=t.ctx;tn=!1,e.beforeCreate&&es(e.beforeCreate,t,"bc");const{data:n,computed:s,methods:r,watch:a,provide:c,inject:d,created:u,beforeMount:p,mounted:g,beforeUpdate:v,updated:A,activated:R,deactivated:P,beforeDestroy:L,beforeUnmount:b,destroyed:x,unmounted:$,render:j,renderTracked:J,renderTriggered:k,errorCaptured:V,serverPrefetch:F,expose:z,inheritAttrs:ft,components:At,directives:xt,filters:qt}=e;if(d&&ec(d,l,null),r)for(const Y in r){const it=r[Y];q(it)&&(l[Y]=it.bind(i))}if(n){const Y=n.call(i,i);st(Y)&&(t.data=Pi(Y))}if(tn=!0,s)for(const Y in s){const it=s[Y],de=q(it)?it.bind(i,i):q(it.get)?it.get.bind(i,i):re,Ce=!q(it)&&q(it.set)?it.set.bind(i):re,Qt=Bt({get:de,set:Ce});Object.defineProperty(l,Y,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:kt=>Qt.value=kt})}if(a)for(const Y in a)Gr(a[Y],l,i,Y);if(c){const Y=q(c)?c.call(i):c;Reflect.ownKeys(Y).forEach(it=>{Ui(it,Y[it])})}u&&es(u,t,"c");function pt(Y,it){U(it)?it.forEach(de=>Y(de.bind(i))):it&&Y(it.bind(i))}if(pt(Wa,p),pt(In,g),pt(qa,v),pt(Br,A),pt(Ka,R),pt(Ua,P),pt(Ja,V),pt(Xa,J),pt(za,k),pt(Vr,b),pt(Fr,$),pt(Ya,F),U(z))if(z.length){const Y=t.exposed||(t.exposed={});z.forEach(it=>{Object.defineProperty(Y,it,{get:()=>i[it],set:de=>i[it]=de,enumerable:!0})})}else t.exposed||(t.exposed={});j&&t.render===re&&(t.render=j),ft!=null&&(t.inheritAttrs=ft),At&&(t.components=At),xt&&(t.directives=xt),F&&kr(t)}function ec(t,e,i=re){U(t)&&(t=en(t));for(const l in t){const n=t[l];let s;st(n)?"default"in n?s=Gt(n.from||l,n.default,!0):s=Gt(n.from||l):s=Gt(n),ht(s)?Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):e[l]=s}}function es(t,e,i){Xt(U(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,i)}function Gr(t,e,i,l){let n=l.includes(".")?Pr(i,l):()=>i[l];if(dt(t)){const s=e[t];q(s)&&Fe(n,s)}else if(q(t))Fe(n,t.bind(i));else if(st(t))if(U(t))t.forEach(s=>Gr(s,e,i,l));else{const s=q(t.handler)?t.handler.bind(i):e[t.handler];q(s)&&Fe(n,s,t)}}function Wr(t){const e=t.type,{mixins:i,extends:l}=e,{mixins:n,optionsCache:s,config:{optionMergeStrategies:r}}=t.appContext,a=s.get(e);let c;return a?c=a:!n.length&&!i&&!l?c=e:(c={},n.length&&n.forEach(d=>Qi(c,d,r,!0)),Qi(c,e,r)),st(e)&&s.set(e,c),c}function Qi(t,e,i,l=!1){const{mixins:n,extends:s}=e;s&&Qi(t,s,i,!0),n&&n.forEach(r=>Qi(t,r,i,!0));for(const r in e)if(!(l&&r==="expose")){const a=ic[r]||i&&i[r];t[r]=a?a(t[r],e[r]):e[r]}return t}const ic={data:is,props:ls,emits:ls,methods:gi,computed:gi,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:gi,directives:gi,watch:nc,provide:is,inject:lc};function is(t,e){return e?t?function(){return Rt(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function lc(t,e){return gi(en(t),en(e))}function en(t){if(U(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function gi(t,e){return t?Rt(Object.create(null),t,e):e}function ls(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Rt(Object.create(null),ts(t),ts(e??{})):e}function nc(t,e){if(!t)return e;if(!e)return t;const i=Rt(Object.create(null),t);for(const l in e)i[l]=Et(t[l],e[l]);return i}function qr(){return{app:null,config:{isNativeTag:Js,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sc=0;function rc(t,e){return function(l,n=null){q(l)||(l=Rt({},l)),n!=null&&!st(n)&&(n=null);const s=qr(),r=new WeakSet,a=[];let c=!1;const d=s.app={_uid:sc++,_component:l,_props:n,_container:null,_context:s,_instance:null,version:Lc,get config(){return s.config},set config(u){},use(u,...p){return r.has(u)||(u&&q(u.install)?(r.add(u),u.install(d,...p)):q(u)&&(r.add(u),u(d,...p))),d},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),d},component(u,p){return p?(s.components[u]=p,d):s.components[u]},directive(u,p){return p?(s.directives[u]=p,d):s.directives[u]},mount(u,p,g){if(!c){const v=d._ceVNode||vt(l,n);return v.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),t(v,u,g),c=!0,d._container=u,u.__vue_app__=d,Sl(v.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Xt(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(u,p){return s.provides[u]=p,d},runWithContext(u){const p=je;je=d;try{return u()}finally{je=p}}};return d}}let je=null;const oc=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Dt(e)}Modifiers`]||t[`${Pe(e)}Modifiers`];function ac(t,e,...i){if(t.isUnmounted)return;const l=t.vnode.props||ct;let n=i;const s=e.startsWith("update:"),r=s&&oc(l,e.slice(7));r&&(r.trim&&(n=i.map(u=>dt(u)?u.trim():u)),r.number&&(n=i.map(ul)));let a,c=l[a=xl(e)]||l[a=xl(Dt(e))];!c&&s&&(c=l[a=xl(Pe(e))]),c&&Xt(c,t,6,n);const d=l[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(d,t,6,n)}}const cc=new WeakMap;function Yr(t,e,i=!1){const l=i?cc:e.emitsCache,n=l.get(t);if(n!==void 0)return n;const s=t.emits;let r={},a=!1;if(!q(t)){const c=d=>{const u=Yr(d,e,!0);u&&(a=!0,Rt(r,u))};!i&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(st(t)&&l.set(t,null),null):(U(s)?s.forEach(c=>r[c]=null):Rt(r,s),st(t)&&l.set(t,r),r)}function _l(t,e){return!t||!sl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,Pe(e))||nt(t,e))}function ns(t){const{type:e,vnode:i,proxy:l,withProxy:n,propsOptions:[s],slots:r,attrs:a,emit:c,render:d,renderCache:u,props:p,data:g,setupState:v,ctx:A,inheritAttrs:R}=t,P=Xi(t);let L,b;try{if(i.shapeFlag&4){const $=n||l,j=$;L=ne(d.call(j,$,u,p,v,g,A)),b=a}else{const $=e;L=ne($.length>1?$(p,{attrs:a,slots:r,emit:c}):$(p,null)),b=e.props?a:uc(a)}}catch($){Ci.length=0,gl($,t,1),L=vt(ue)}let x=L;if(b&&R!==!1){const $=Object.keys(b),{shapeFlag:j}=x;$.length&&j&7&&(s&&$.some(rl)&&(b=dc(b,s)),x=He(x,b,!1,!0))}return i.dirs&&(x=He(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(i.dirs):i.dirs),i.transition&&vl(x,i.transition),L=x,Xi(P),L}const uc=t=>{let e;for(const i in t)(i==="class"||i==="style"||sl(i))&&((e||(e={}))[i]=t[i]);return e},dc=(t,e)=>{const i={};for(const l in t)(!rl(l)||!(l.slice(9)in e))&&(i[l]=t[l]);return i};function fc(t,e,i){const{props:l,children:n,component:s}=t,{props:r,children:a,patchFlag:c}=e,d=s.emitsOptions;if(e.dirs||e.transition)return!0;if(i&&c>=0){if(c&1024)return!0;if(c&16)return l?ss(l,r,d):!!r;if(c&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(zr(r,l,g)&&!_l(d,g))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:l===r?!1:l?r?ss(l,r,d):!0:!!r;return!1}function ss(t,e,i){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let n=0;n<l.length;n++){const s=l[n];if(zr(e,t,s)&&!_l(i,s))return!0}return!1}function zr(t,e,i){const l=t[i],n=e[i];return i==="style"&&st(l)&&st(n)?!Ee(l,n):l!==n}function pc({vnode:t,parent:e,suspense:i},l){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.suspense.vnode.el=n.el=l,t=n),n===t)(t=e.vnode).el=l,e=e.parent;else break}i&&i.activeBranch===t&&(i.vnode.el=l)}const Xr={},Jr=()=>Object.create(Xr),Qr=t=>Object.getPrototypeOf(t)===Xr;function hc(t,e,i,l=!1){const n={},s=Jr();t.propsDefaults=Object.create(null),Zr(t,e,n,s);for(const r in t.propsOptions[0])r in n||(n[r]=void 0);i?t.props=l?n:Cr(n):t.type.props?t.props=n:t.props=s,t.attrs=s}function gc(t,e,i,l){const{props:n,attrs:s,vnode:{patchFlag:r}}=t,a=Z(n),[c]=t.propsOptions;let d=!1;if((l||r>0)&&!(r&16)){if(r&8){const u=t.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(_l(t.emitsOptions,g))continue;const v=e[g];if(c)if(nt(s,g))v!==s[g]&&(s[g]=v,d=!0);else{const A=Dt(g);n[A]=ln(c,a,A,v,t,!1)}else v!==s[g]&&(s[g]=v,d=!0)}}}else{Zr(t,e,n,s)&&(d=!0);let u;for(const p in a)(!e||!nt(e,p)&&((u=Pe(p))===p||!nt(e,u)))&&(c?i&&(i[p]!==void 0||i[u]!==void 0)&&(n[p]=ln(c,a,p,void 0,t,!0)):delete n[p]);if(s!==a)for(const p in s)(!e||!nt(e,p))&&(delete s[p],d=!0)}d&&me(t.attrs,"set","")}function Zr(t,e,i,l){const[n,s]=t.propsOptions;let r=!1,a;if(e)for(let c in e){if(vi(c))continue;const d=e[c];let u;n&&nt(n,u=Dt(c))?!s||!s.includes(u)?i[u]=d:(a||(a={}))[u]=d:_l(t.emitsOptions,c)||(!(c in l)||d!==l[c])&&(l[c]=d,r=!0)}if(s){const c=Z(i),d=a||ct;for(let u=0;u<s.length;u++){const p=s[u];i[p]=ln(n,c,p,d[p],t,!nt(d,p))}}return r}function ln(t,e,i,l,n,s){const r=t[i];if(r!=null){const a=nt(r,"default");if(a&&l===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&q(c)){const{propsDefaults:d}=n;if(i in d)l=d[i];else{const u=Di(n);l=d[i]=c.call(null,e),u()}}else l=c;n.ce&&n.ce._setProp(i,l)}r[0]&&(s&&!a?l=!1:r[1]&&(l===""||l===Pe(i))&&(l=!0))}return l}const mc=new WeakMap;function to(t,e,i=!1){const l=i?mc:e.propsCache,n=l.get(t);if(n)return n;const s=t.props,r={},a=[];let c=!1;if(!q(t)){const u=p=>{c=!0;const[g,v]=to(p,e,!0);Rt(r,g),v&&a.push(...v)};!i&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return st(t)&&l.set(t,Xe),Xe;if(U(s))for(let u=0;u<s.length;u++){const p=Dt(s[u]);rs(p)&&(r[p]=ct)}else if(s)for(const u in s){const p=Dt(u);if(rs(p)){const g=s[u],v=r[p]=U(g)||q(g)?{type:g}:Rt({},g),A=v.type;let R=!1,P=!0;if(U(A))for(let L=0;L<A.length;++L){const b=A[L],x=q(b)&&b.name;if(x==="Boolean"){R=!0;break}else x==="String"&&(P=!1)}else R=q(A)&&A.name==="Boolean";v[0]=R,v[1]=P,(R||nt(v,"default"))&&a.push(p)}}const d=[r,a];return st(t)&&l.set(t,d),d}function rs(t){return t[0]!=="$"&&!vi(t)}const En=t=>t==="_"||t==="_ctx"||t==="$stable",Nn=t=>U(t)?t.map(ne):[ne(t)],vc=(t,e,i)=>{if(e._n)return e;const l=xn((...n)=>Nn(e(...n)),i);return l._c=!1,l},eo=(t,e,i)=>{const l=t._ctx;for(const n in t){if(En(n))continue;const s=t[n];if(q(s))e[n]=vc(n,s,l);else if(s!=null){const r=Nn(s);e[n]=()=>r}}},io=(t,e)=>{const i=Nn(e);t.slots.default=()=>i},lo=(t,e,i)=>{for(const l in e)(i||!En(l))&&(t[l]=e[l])},bc=(t,e,i)=>{const l=t.slots=Jr();if(t.vnode.shapeFlag&32){const n=e._;n?(lo(l,e,i),i&&er(l,"_",n,!0)):eo(e,l)}else e&&io(t,e)},_c=(t,e,i)=>{const{vnode:l,slots:n}=t;let s=!0,r=ct;if(l.shapeFlag&32){const a=e._;a?i&&a===1?s=!1:lo(n,e,i):(s=!e.$stable,eo(e,n)),r=e}else e&&(io(t,e),r={default:1});if(s)for(const a in n)!En(a)&&r[a]==null&&delete n[a]},yt=Tc;function yc(t){return Sc(t)}function Sc(t,e){const i=dl();i.__VUE__=!0;const{insert:l,remove:n,patchProp:s,createElement:r,createText:a,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:g,setScopeId:v=re,insertStaticContent:A}=t,R=(f,h,m,y=null,C=null,_=null,N=void 0,w=null,I=!!h.dynamicChildren)=>{if(f===h)return;f&&!Ye(f,h)&&(y=S(f),kt(f,C,_,!0),f=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:T,ref:G,shapeFlag:D}=h;switch(T){case yl:P(f,h,m,y);break;case ue:L(f,h,m,y);break;case Gi:f==null&&b(h,m,y,N);break;case Ot:At(f,h,m,y,C,_,N,w,I);break;default:D&1?j(f,h,m,y,C,_,N,w,I):D&6?xt(f,h,m,y,C,_,N,w,I):(D&64||D&128)&&T.process(f,h,m,y,C,_,N,w,I,H)}G!=null&&C?yi(G,f&&f.ref,_,h||f,!h):G==null&&f&&f.ref!=null&&yi(f.ref,null,_,f,!0)},P=(f,h,m,y)=>{if(f==null)l(h.el=a(h.children),m,y);else{const C=h.el=f.el;h.children!==f.children&&d(C,h.children)}},L=(f,h,m,y)=>{f==null?l(h.el=c(h.children||""),m,y):h.el=f.el},b=(f,h,m,y)=>{[f.el,f.anchor]=A(f.children,h,m,y,f.el,f.anchor)},x=({el:f,anchor:h},m,y)=>{let C;for(;f&&f!==h;)C=g(f),l(f,m,y),f=C;l(h,m,y)},$=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=g(f),n(f),f=m;n(h)},j=(f,h,m,y,C,_,N,w,I)=>{if(h.type==="svg"?N="svg":h.type==="math"&&(N="mathml"),f==null)J(h,m,y,C,_,N,w,I);else{const T=f.el&&f.el._isVueCE?f.el:null;try{T&&T._beginPatch(),F(f,h,C,_,N,w,I)}finally{T&&T._endPatch()}}},J=(f,h,m,y,C,_,N,w)=>{let I,T;const{props:G,shapeFlag:D,transition:K,dirs:W}=f;if(I=f.el=r(f.type,_,G&&G.is,G),D&8?u(I,f.children):D&16&&V(f.children,I,null,y,C,kl(f,_),N,w),W&&De(f,null,y,"created"),k(I,f,f.scopeId,N,y),G){for(const at in G)at!=="value"&&!vi(at)&&s(I,at,null,G[at],_,y);"value"in G&&s(I,"value",null,G.value,_),(T=G.onVnodeBeforeMount)&&Kt(T,y,f)}W&&De(f,null,y,"beforeMount");const Q=Cc(C,K);Q&&K.beforeEnter(I),l(I,h,m),((T=G&&G.onVnodeMounted)||Q||W)&&yt(()=>{try{T&&Kt(T,y,f),Q&&K.enter(I),W&&De(f,null,y,"mounted")}finally{}},C)},k=(f,h,m,y,C)=>{if(m&&v(f,m),y)for(let _=0;_<y.length;_++)v(f,y[_]);if(C){let _=C.subTree;if(h===_||tl(_.type)&&(_.ssContent===h||_.ssFallback===h)){const N=C.vnode;k(f,N,N.scopeId,N.slotScopeIds,C.parent)}}},V=(f,h,m,y,C,_,N,w,I=0)=>{for(let T=I;T<f.length;T++){const G=f[T]=w?ge(f[T]):ne(f[T]);R(null,G,h,m,y,C,_,N,w)}},F=(f,h,m,y,C,_,N)=>{const w=h.el=f.el;let{patchFlag:I,dynamicChildren:T,dirs:G}=h;I|=f.patchFlag&16;const D=f.props||ct,K=h.props||ct;let W;if(m&&ke(m,!1),(W=K.onVnodeBeforeUpdate)&&Kt(W,m,h,f),G&&De(h,f,m,"beforeUpdate"),m&&ke(m,!0),T&&(!f.dynamicChildren||f.dynamicChildren.length!==T.length)&&(I=0,N=!1,T=null),(D.innerHTML&&K.innerHTML==null||D.textContent&&K.textContent==null)&&u(w,""),T?z(f.dynamicChildren,T,w,m,y,kl(h,C),_):N||it(f,h,w,null,m,y,kl(h,C),_,!1),I>0){if(I&16)ft(w,D,K,m,C);else if(I&2&&D.class!==K.class&&s(w,"class",null,K.class,C),I&4&&s(w,"style",D.style,K.style,C),I&8){const Q=h.dynamicProps;for(let at=0;at<Q.length;at++){const rt=Q[at],mt=D[rt],$t=K[rt];($t!==mt||rt==="value")&&s(w,rt,mt,$t,C,m)}}I&1&&f.children!==h.children&&u(w,h.children)}else!N&&T==null&&ft(w,D,K,m,C);((W=K.onVnodeUpdated)||G)&&yt(()=>{W&&Kt(W,m,h,f),G&&De(h,f,m,"updated")},y)},z=(f,h,m,y,C,_,N)=>{for(let w=0;w<h.length;w++){const I=f[w],T=h[w],G=I.el&&(I.type===Ot||!Ye(I,T)||I.shapeFlag&198)?p(I.el):m;R(I,T,G,null,y,C,_,N,!0)}},ft=(f,h,m,y,C)=>{if(h!==m){if(h!==ct)for(const _ in h)!vi(_)&&!(_ in m)&&s(f,_,h[_],null,C,y);for(const _ in m){if(vi(_))continue;const N=m[_],w=h[_];N!==w&&_!=="value"&&s(f,_,w,N,C,y)}"value"in m&&s(f,"value",h.value,m.value,C)}},At=(f,h,m,y,C,_,N,w,I)=>{const T=h.el=f?f.el:a(""),G=h.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:K,slotScopeIds:W}=h;W&&(w=w?w.concat(W):W),f==null?(l(T,m,y),l(G,m,y),V(h.children||[],m,G,C,_,N,w,I)):D>0&&D&64&&K&&f.dynamicChildren&&f.dynamicChildren.length===K.length?(z(f.dynamicChildren,K,m,C,_,N,w),(h.key!=null||C&&h===C.subTree)&&Pn(f,h,!0)):it(f,h,m,G,C,_,N,w,I)},xt=(f,h,m,y,C,_,N,w,I)=>{h.slotScopeIds=w,f==null?h.shapeFlag&512?C.ctx.activate(h,m,y,N,I):qt(h,m,y,C,_,N,I):Se(f,h,I)},qt=(f,h,m,y,C,_,N)=>{const w=f.component=Nc(f,y,C);if(Mr(f)&&(w.ctx.renderer=H),Pc(w,!1,N),w.asyncDep){if(C&&C.registerDep(w,pt,N),!f.el){const I=w.subTree=vt(ue);L(null,I,h,m),f.placeholder=I.el}}else pt(w,f,h,m,C,_,N)},Se=(f,h,m)=>{const y=h.component=f.component;if(fc(f,h,m))if(y.asyncDep&&!y.asyncResolved){Y(y,h,m);return}else y.next=h,y.update();else h.el=f.el,y.vnode=h},pt=(f,h,m,y,C,_,N)=>{const w=()=>{if(f.isMounted){let{next:D,bu:K,u:W,parent:Q,vnode:at}=f;{const te=no(f);if(te){D&&(D.el=at.el,Y(f,D,N)),te.asyncDep.then(()=>{yt(()=>{f.isUnmounted||T()},C)});return}}let rt=D,mt;ke(f,!1),D?(D.el=at.el,Y(f,D,N)):D=at,K&&Qe(K),(mt=D.props&&D.props.onVnodeBeforeUpdate)&&Kt(mt,Q,D,at),ke(f,!0);const $t=ns(f),Zt=f.subTree;f.subTree=$t,R(Zt,$t,p(Zt.el),S(Zt),f,C,_),D.el=$t.el,rt===null&&pc(f,$t.el),W&&yt(W,C),(mt=D.props&&D.props.onVnodeUpdated)&&yt(()=>Kt(mt,Q,D,at),C)}else{let D;const{el:K,props:W}=h,{bm:Q,m:at,parent:rt,root:mt,type:$t}=f,Zt=we(h);ke(f,!1),Q&&Qe(Q),!Zt&&(D=W&&W.onVnodeBeforeMount)&&Kt(D,rt,h),ke(f,!0);{mt.ce&&mt.ce._hasShadowRoot()&&mt.ce._injectChildStyle($t,f.parent?f.parent.type:void 0);const te=f.subTree=ns(f);R(null,te,m,y,f,C,_),h.el=te.el}if(at&&yt(at,C),!Zt&&(D=W&&W.onVnodeMounted)){const te=h;yt(()=>Kt(D,rt,te),C)}(h.shapeFlag&256||rt&&we(rt.vnode)&&rt.vnode.shapeFlag&256)&&f.a&&yt(f.a,C),f.isMounted=!0,h=m=y=null}};f.scope.on();const I=f.effect=new ar(w);f.scope.off();const T=f.update=I.run.bind(I),G=f.job=I.runIfDirty.bind(I);G.i=f,G.id=f.uid,I.scheduler=()=>An(G),ke(f,!0),T()},Y=(f,h,m)=>{h.component=f;const y=f.vnode.props;f.vnode=h,f.next=null,gc(f,h.props,y,m),_c(f,h.children,m),ae(),Yn(f),ce()},it=(f,h,m,y,C,_,N,w,I=!1)=>{const T=f&&f.children,G=f?f.shapeFlag:0,D=h.children,{patchFlag:K,shapeFlag:W}=h;if(K>0){if(K&128){Ce(T,D,m,y,C,_,N,w,I);return}else if(K&256){de(T,D,m,y,C,_,N,w,I);return}}W&8?(G&16&&Ht(T,C,_),D!==T&&u(m,D)):G&16?W&16?Ce(T,D,m,y,C,_,N,w,I):Ht(T,C,_,!0):(G&8&&u(m,""),W&16&&V(D,m,y,C,_,N,w,I))},de=(f,h,m,y,C,_,N,w,I)=>{f=f||Xe,h=h||Xe;const T=f.length,G=h.length,D=Math.min(T,G);let K;for(K=0;K<D;K++){const W=h[K]=I?ge(h[K]):ne(h[K]);R(f[K],W,m,null,C,_,N,w,I)}T>G?Ht(f,C,_,!0,!1,D):V(h,m,y,C,_,N,w,I,D)},Ce=(f,h,m,y,C,_,N,w,I)=>{let T=0;const G=h.length;let D=f.length-1,K=G-1;for(;T<=D&&T<=K;){const W=f[T],Q=h[T]=I?ge(h[T]):ne(h[T]);if(Ye(W,Q))R(W,Q,m,null,C,_,N,w,I);else break;T++}for(;T<=D&&T<=K;){const W=f[D],Q=h[K]=I?ge(h[K]):ne(h[K]);if(Ye(W,Q))R(W,Q,m,null,C,_,N,w,I);else break;D--,K--}if(T>D){if(T<=K){const W=K+1,Q=W<G?h[W].el:y;for(;T<=K;)R(null,h[T]=I?ge(h[T]):ne(h[T]),m,Q,C,_,N,w,I),T++}}else if(T>K)for(;T<=D;)kt(f[T],C,_,!0),T++;else{const W=T,Q=T,at=new Map;for(T=Q;T<=K;T++){const Mt=h[T]=I?ge(h[T]):ne(h[T]);Mt.key!=null&&at.set(Mt.key,T)}let rt,mt=0;const $t=K-Q+1;let Zt=!1,te=0;const ci=new Array($t);for(T=0;T<$t;T++)ci[T]=0;for(T=W;T<=D;T++){const Mt=f[T];if(mt>=$t){kt(Mt,C,_,!0);continue}let ee;if(Mt.key!=null)ee=at.get(Mt.key);else for(rt=Q;rt<=K;rt++)if(ci[rt-Q]===0&&Ye(Mt,h[rt])){ee=rt;break}ee===void 0?kt(Mt,C,_,!0):(ci[ee-Q]=T+1,ee>=te?te=ee:Zt=!0,R(Mt,h[ee],m,null,C,_,N,w,I),mt++)}const jn=Zt?$c(ci):Xe;for(rt=jn.length-1,T=$t-1;T>=0;T--){const Mt=Q+T,ee=h[Mt],Hn=h[Mt+1],Kn=Mt+1<G?Hn.el||so(Hn):y;ci[T]===0?R(null,ee,m,Kn,C,_,N,w,I):Zt&&(rt<0||T!==jn[rt]?Qt(ee,m,Kn,2):rt--)}}},Qt=(f,h,m,y,C=null)=>{const{el:_,type:N,transition:w,children:I,shapeFlag:T}=f;if(T&6){Qt(f.component.subTree,h,m,y);return}if(T&128){f.suspense.move(h,m,y);return}if(T&64){N.move(f,h,m,H);return}if(N===Ot){l(_,h,m);for(let D=0;D<I.length;D++)Qt(I[D],h,m,y);l(f.anchor,h,m);return}if(N===Gi){x(f,h,m);return}if(y!==2&&T&1&&w)if(y===0)w.persisted&&!_[Pl]?l(_,h,m):(w.beforeEnter(_),l(_,h,m),yt(()=>w.enter(_),C));else{const{leave:D,delayLeave:K,afterLeave:W}=w,Q=()=>{f.ctx.isUnmounted?n(_):l(_,h,m)},at=()=>{const rt=_._isLeaving||!!_[Pl];_._isLeaving&&_[Pl](!0),w.persisted&&!rt?Q():D(_,()=>{Q(),W&&W()})};K?K(_,Q,at):at()}else l(_,h,m)},kt=(f,h,m,y=!1,C=!1)=>{const{type:_,props:N,ref:w,children:I,dynamicChildren:T,shapeFlag:G,patchFlag:D,dirs:K,cacheIndex:W,memo:Q}=f;if(D===-2&&(C=!1),w!=null&&(ae(),yi(w,null,m,f,!0),ce()),W!=null&&(h.renderCache[W]=void 0),G&256){h.ctx.deactivate(f);return}const at=G&1&&K,rt=!we(f);let mt;if(rt&&(mt=N&&N.onVnodeBeforeUnmount)&&Kt(mt,h,f),G&6)Oe(f.component,m,y);else{if(G&128){f.suspense.unmount(m,y);return}at&&De(f,null,h,"beforeUnmount"),G&64?f.type.remove(f,h,m,H,y):T&&!T.hasOnce&&(_!==Ot||D>0&&D&64)?Ht(T,h,m,!1,!0):(_===Ot&&D&384||!C&&G&16)&&Ht(I,h,m),y&&Ke(f)}const $t=Q!=null&&W==null;(rt&&(mt=N&&N.onVnodeUnmounted)||at||$t)&&yt(()=>{mt&&Kt(mt,h,f),at&&De(f,null,h,"unmounted"),$t&&(f.el=null)},m)},Ke=f=>{const{type:h,el:m,anchor:y,transition:C}=f;if(h===Ot){Ue(m,y);return}if(h===Gi){$(f);return}const _=()=>{n(m),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:N,delayLeave:w}=C,I=()=>N(m,_);w?w(f.el,_,I):I()}else _()},Ue=(f,h)=>{let m;for(;f!==h;)m=g(f),n(f),f=m;n(h)},Oe=(f,h,m)=>{const{bum:y,scope:C,job:_,subTree:N,um:w,m:I,a:T}=f;Zi(I),Zi(T),y&&Qe(y),C.stop(),_&&(_.flags|=8,kt(N,f,h,m)),w&&yt(w,h),yt(()=>{f.isUnmounted=!0},h)},Ht=(f,h,m,y=!1,C=!1,_=0)=>{for(let N=_;N<f.length;N++)kt(f[N],h,m,y,C)},S=f=>{if(f.shapeFlag&6)return S(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=g(f.anchor||f.el),m=h&&h[Or];return m?g(m):h};let M=!1;const O=(f,h,m)=>{let y;f==null?h._vnode&&(kt(h._vnode,null,null,!0),y=h._vnode.component):R(h._vnode||null,f,h,null,null,null,m),h._vnode=f,M||(M=!0,Yn(y),Ir(),M=!1)},H={p:R,um:kt,m:Qt,r:Ke,mt:qt,mc:V,pc:it,pbc:z,n:S,o:t};return{render:O,hydrate:void 0,createApp:rc(O)}}function kl({type:t,props:e},i){return i==="svg"&&t==="foreignObject"||i==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:i}function ke({effect:t,job:e},i){i?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Cc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pn(t,e,i=!1){const l=t.children,n=e.children;if(U(l)&&U(n))for(let s=0;s<l.length;s++){const r=l[s];let a=n[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[s]=ge(n[s]),a.el=r.el),!i&&a.patchFlag!==-2&&Pn(r,a)),a.type===yl&&(a.patchFlag===-1&&(a=n[s]=ge(a)),a.el=r.el),a.type===ue&&!a.el&&(a.el=r.el)}}function $c(t){const e=t.slice(),i=[0];let l,n,s,r,a;const c=t.length;for(l=0;l<c;l++){const d=t[l];if(d!==0){if(n=i[i.length-1],t[n]<d){e[l]=n,i.push(l);continue}for(s=0,r=i.length-1;s<r;)a=s+r>>1,t[i[a]]<d?s=a+1:r=a;d<t[i[s]]&&(s>0&&(e[l]=i[s-1]),i[s]=l)}}for(s=i.length,r=i[s-1];s-- >0;)i[s]=r,r=e[r];return i}function no(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:no(e)}function Zi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function so(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?so(e.subTree):null}const tl=t=>t.__isSuspense;function Tc(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Na(t)}const Ot=Symbol.for("v-fgt"),yl=Symbol.for("v-txt"),ue=Symbol.for("v-cmt"),Gi=Symbol.for("v-stc"),Ci=[];let Vt=null;function St(t=!1){Ci.push(Vt=t?null:[])}function Rc(){Ci.pop(),Vt=Ci[Ci.length-1]||null}let wi=1;function el(t,e=!1){wi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function ro(t){return t.dynamicChildren=wi>0?Vt||Xe:null,Rc(),wi>0&&Vt&&Vt.push(t),t}function Lt(t,e,i,l,n,s){return ro(tt(t,e,i,l,n,s,!0))}function ii(t,e,i,l,n){return ro(vt(t,e,i,l,n,!0))}function li(t){return t?t.__v_isVNode===!0:!1}function Ye(t,e){return t.type===e.type&&t.key===e.key}const oo=({key:t})=>t??null,Wi=({ref:t,ref_key:e,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?dt(t)||ht(t)||q(t)?{i:Tt,r:t,k:e,f:!!i}:t:null);function tt(t,e=null,i=null,l=0,n=null,s=t===Ot?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oo(e),ref:e&&Wi(e),scopeId:Er,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:l,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Tt};return a?(il(c,i),s&128&&t.normalize(c)):i&&(c.shapeFlag|=dt(i)?8:16),wi>0&&!r&&Vt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Vt.push(c),c}const vt=Ac;function Ac(t,e=null,i=null,l=0,n=null,s=!1){if((!t||t===Hr)&&(t=ue),li(t)){const a=He(t,e,!0);return i&&il(a,i),wi>0&&!s&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag=-2,a}if(Mc(t)&&(t=t.__vccOpts),e){e=xc(e);let{class:a,style:c}=e;a&&!dt(a)&&(e.class=Ie(a)),st(c)&&(pl(c)&&!U(c)&&(c=Rt({},c)),e.style=vn(c))}const r=dt(t)?1:tl(t)?128:La(t)?64:st(t)?4:q(t)?2:0;return tt(t,e,i,l,n,r,s,!0)}function xc(t){return t?pl(t)||Qr(t)?Rt({},t):t:null}function He(t,e,i=!1,l=!1){const{props:n,ref:s,patchFlag:r,children:a,transition:c}=t,d=e?Ic(n||{},e):n,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&oo(d),ref:e&&e.ref?i&&s?U(s)?s.concat(Wi(e)):[s,Wi(e)]:Wi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&He(t.ssContent),ssFallback:t.ssFallback&&He(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&l&&vl(u,c.clone(u)),u}function ao(t=" ",e=0){return vt(yl,null,t,e)}function Zh(t,e){const i=vt(Gi,null,t);return i.staticCount=e,i}function co(t="",e=!1){return e?(St(),ii(ue,null,t)):vt(ue,null,t)}function ne(t){return t==null||typeof t=="boolean"?vt(ue):U(t)?vt(Ot,null,t.slice()):li(t)?ge(t):vt(yl,null,String(t))}function ge(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:He(t)}function il(t,e){let i=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(U(e))i=16;else if(typeof e=="object")if(l&65){const n=e.default;n&&(n._c&&(n._d=!1),il(t,n()),n._c&&(n._d=!0));return}else{i=32;const n=e._;!n&&!Qr(e)?e._ctx=Tt:n===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(q(e)){if(l&65){il(t,{default:e});return}e={default:e,_ctx:Tt},i=32}else e=String(e),l&64?(i=16,e=[ao(e)]):i=8;t.children=e,t.shapeFlag|=i}function Ic(...t){const e={};for(let i=0;i<t.length;i++){const l=t[i];for(const n in l)if(n==="class")e.class!==l.class&&(e.class=Ie([e.class,l.class]));else if(n==="style")e.style=vn([e.style,l.style]);else if(sl(n)){const s=e[n],r=l[n];r&&s!==r&&!(U(s)&&s.includes(r))?e[n]=s?[].concat(s,r):r:r==null&&s==null&&!rl(n)&&(e[n]=r)}else n!==""&&(e[n]=l[n])}return e}function Kt(t,e,i,l=null){Xt(t,e,7,[i,l])}const wc=qr();let Ec=0;function Nc(t,e,i){const l=t.type,n=(e?e.appContext:t.appContext)||wc,s={uid:Ec++,vnode:t,type:l,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:to(l,n),emitsOptions:Yr(l,n),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:l.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ac.bind(null,s),t.ce&&t.ce(s),s}let wt=null;const On=()=>wt||Tt;let ll,nn;{const t=dl(),e=(i,l)=>{let n;return(n=t[i])||(n=t[i]=[]),n.push(l),s=>{n.length>1?n.forEach(r=>r(s)):n[0](s)}};ll=e("__VUE_INSTANCE_SETTERS__",i=>wt=i),nn=e("__VUE_SSR_SETTERS__",i=>Ei=i)}const Di=t=>{const e=wt;return ll(t),t.scope.on(),()=>{t.scope.off(),ll(e)}},os=()=>{wt&&wt.scope.off(),ll(null)};function uo(t){return t.vnode.shapeFlag&4}let Ei=!1;function Pc(t,e=!1,i=!1){e&&nn(e);const{props:l,children:n}=t.vnode,s=uo(t);hc(t,l,s,e),bc(t,n,i||e);const r=s?Oc(t,e):void 0;return e&&nn(!1),r}function Oc(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Za);const{setup:l}=i;if(l){ae();const n=t.setupContext=l.length>1?kc(t):null,s=Di(t),r=Oi(l,t,0,[t.props,n]),a=Qs(r);if(ce(),s(),(a||t.sp)&&!we(t)&&kr(t),a){if(r.then(os,os),e)return r.then(c=>{as(t,c)}).catch(c=>{gl(c,t,0)});t.asyncDep=r}else as(t,r)}else fo(t)}function as(t,e,i){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:st(e)&&(t.setupState=Tr(e)),fo(t)}function fo(t,e,i){const l=t.type;t.render||(t.render=l.render||re);{const n=Di(t);ae();try{tc(t)}finally{ce(),n()}}}const Dc={get(t,e){return It(t,"get",""),t[e]}};function kc(t){const e=i=>{t.exposed=i||{}};return{attrs:new Proxy(t.attrs,Dc),slots:t.slots,emit:t.emit,expose:e}}function Sl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Tr(Rn(t.exposed)),{get(e,i){if(i in e)return e[i];if(i in Si)return Si[i](t)},has(e,i){return i in e||i in Si}})):t.proxy}function sn(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Mc(t){return q(t)&&"__vccOpts"in t}const Bt=(t,e)=>Aa(t,e,Ei);function po(t,e,i){try{el(-1);const l=arguments.length;return l===2?st(e)&&!U(e)?li(e)?vt(t,null,[e]):vt(t,e):vt(t,null,e):(l>3?i=Array.prototype.slice.call(arguments,2):l===3&&li(i)&&(i=[i]),vt(t,e,i))}finally{el(1)}}const Lc="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;const cs=typeof window<"u"&&window.trustedTypes;if(cs)try{rn=cs.createPolicy("vue",{createHTML:t=>t})}catch{}const ho=rn?t=>rn.createHTML(t):t=>t,Bc="http://www.w3.org/2000/svg",Vc="http://www.w3.org/1998/Math/MathML",he=typeof document<"u"?document:null,us=he&&he.createElement("template"),Fc={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,l)=>{const n=e==="svg"?he.createElementNS(Bc,t):e==="mathml"?he.createElementNS(Vc,t):i?he.createElement(t,{is:i}):he.createElement(t);return t==="select"&&l&&l.multiple!=null&&n.setAttribute("multiple",l.multiple),n},createText:t=>he.createTextNode(t),createComment:t=>he.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>he.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,i,l,n,s){const r=i?i.previousSibling:e.lastChild;if(n&&(n===s||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),i),!(n===s||!(n=n.nextSibling)););else{us.innerHTML=ho(l==="svg"?`<svg>${t}</svg>`:l==="mathml"?`<math>${t}</math>`:t);const a=us.content;if(l==="svg"||l==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,i)}return[r?r.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}},jc=Symbol("_vtc");function Hc(t,e,i){const l=t[jc];l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}const nl=Symbol("_vod"),go=Symbol("_vsh"),Kc={name:"show",beforeMount(t,{value:e},{transition:i}){t[nl]=t.style.display==="none"?"":t.style.display,i&&e?i.beforeEnter(t):di(t,e)},mounted(t,{value:e},{transition:i}){i&&e&&i.enter(t)},updated(t,{value:e,oldValue:i},{transition:l}){!e!=!i&&(l?e?(l.beforeEnter(t),di(t,!0),l.enter(t)):l.leave(t,()=>{di(t,!1)}):di(t,e))},beforeUnmount(t,{value:e}){di(t,e)}};function di(t,e){t.style.display=e?t[nl]:"none",t[go]=!e}const Uc=Symbol(""),Gc=/(?:^|;)\s*display\s*:/;function Wc(t,e,i){const l=t.style,n=dt(i);let s=!1;if(i&&!n){if(e)if(dt(e))for(const r of e.split(";")){const a=r.slice(0,r.indexOf(":")).trim();i[a]==null&&mi(l,a,"")}else for(const r in e)i[r]==null&&mi(l,r,"");for(const r in i){r==="display"&&(s=!0);const a=i[r];a!=null?Yc(t,r,!dt(e)&&e?e[r]:void 0,a)||mi(l,r,a):mi(l,r,"")}}else if(n){if(e!==i){const r=l[Uc];r&&(i+=";"+r),l.cssText=i,s=Gc.test(i)}}else e&&t.removeAttribute("style");nl in t&&(t[nl]=s?l.display:"",t[go]&&(l.display="none"))}const ds=/\s*!important$/;function mi(t,e,i){if(U(i))i.forEach(l=>mi(t,e,l));else if(i==null&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const l=qc(t,e);ds.test(i)?t.setProperty(Pe(l),i.replace(ds,""),"important"):t[l]=i}}const fs=["Webkit","Moz","ms"],Ml={};function qc(t,e){const i=Ml[e];if(i)return i;let l=Dt(e);if(l!=="filter"&&l in t)return Ml[e]=l;l=cl(l);for(let n=0;n<fs.length;n++){const s=fs[n]+l;if(s in t)return Ml[e]=s}return e}function Yc(t,e,i,l){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&dt(l)&&i===l}const ps="http://www.w3.org/1999/xlink";function hs(t,e,i,l,n,s=Jo(e)){l&&e.startsWith("xlink:")?i==null?t.removeAttributeNS(ps,e.slice(6,e.length)):t.setAttributeNS(ps,e,i):i==null||s&&!ir(i)?t.removeAttribute(e):t.setAttribute(e,s?"":jt(i)?String(i):i)}function gs(t,e,i,l,n){if(e==="innerHTML"||e==="textContent"){i!=null&&(t[e]=e==="innerHTML"?ho(i):i);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=i==null?t.type==="checkbox"?"on":"":String(i);(a!==c||!("_value"in t))&&(t.value=c),i==null&&t.removeAttribute(e),t._value=i;return}let r=!1;if(i===""||i==null){const a=typeof t[e];a==="boolean"?i=ir(i):i==null&&a==="string"?(i="",r=!0):a==="number"&&(i=0,r=!0)}try{t[e]=i}catch{}r&&t.removeAttribute(n||e)}function be(t,e,i,l){t.addEventListener(e,i,l)}function zc(t,e,i,l){t.removeEventListener(e,i,l)}const ms=Symbol("_vei");function Xc(t,e,i,l,n=null){const s=t[ms]||(t[ms]={}),r=s[e];if(l&&r)r.value=l;else{const[a,c]=Zc(e);if(l){const d=s[e]=iu(l,n);be(t,a,d,c)}else r&&(zc(t,a,r,c),s[e]=void 0)}}const Jc=/(Once|Passive|Capture)$/,Qc=/^on:?(?:Once|Passive|Capture)$/;function Zc(t){let e,i;for(;(i=t.match(Jc))&&!Qc.test(t);)e||(e={}),t=t.slice(0,t.length-i[1].length),e[i[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Pe(t.slice(2)),e]}let Ll=0;const tu=Promise.resolve(),eu=()=>Ll||(tu.then(()=>Ll=0),Ll=Date.now());function iu(t,e){const i=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=i.attached)return;const n=i.value;if(U(n)){const s=l.stopImmediatePropagation;l.stopImmediatePropagation=()=>{s.call(l),l._stopped=!0};const r=n.slice(),a=[l];for(let c=0;c<r.length&&!l._stopped;c++){const d=r[c];d&&Xt(d,e,5,a)}}else Xt(n,e,5,[l])};return i.value=t,i.attached=eu(),i}const vs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lu=(t,e,i,l,n,s)=>{const r=n==="svg";e==="class"?Hc(t,l,r):e==="style"?Wc(t,i,l):sl(e)?rl(e)||Xc(t,e,i,l,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nu(t,e,l,r))?(gs(t,e,l),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hs(t,e,l,r,s,e!=="value")):t._isVueCE&&(su(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!dt(l)))?gs(t,Dt(e),l,s,e):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),hs(t,e,l,r))};function nu(t,e,i,l){if(l)return!!(e==="innerHTML"||e==="textContent"||e in t&&vs(e)&&q(i));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=t.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return vs(e)&&dt(i)?!1:e in t}function su(t,e){const i=t._def.props;if(!i)return!1;const l=Dt(e);return Array.isArray(i)?i.some(n=>Dt(n)===l):Object.keys(i).some(n=>Dt(n)===l)}const Ne=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?i=>Qe(e,i):e};function ru(t){t.target.composing=!0}function bs(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wt=Symbol("_assign");function _s(t,e,i){return e&&(t=t.trim()),i&&(t=ul(t)),t}const tg={created(t,{modifiers:{lazy:e,trim:i,number:l}},n){t[Wt]=Ne(n);const s=l||n.props&&n.props.type==="number";be(t,e?"change":"input",r=>{r.target.composing||t[Wt](_s(t.value,i,s))}),(i||s)&&be(t,"change",()=>{t.value=_s(t.value,i,s)}),e||(be(t,"compositionstart",ru),be(t,"compositionend",bs),be(t,"change",bs))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:i,modifiers:{lazy:l,trim:n,number:s}},r){if(t[Wt]=Ne(r),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?ul(t.value):t.value,c=e??"";if(a===c)return;const d=t.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===t&&t.type!=="range"&&(l&&e===i||n&&t.value.trim()===c)||(t.value=c)}},eg={deep:!0,created(t,e,i){t[Wt]=Ne(i),be(t,"change",()=>{const l=t._modelValue,n=ni(t),s=t.checked,r=t[Wt];if(U(l)){const a=bn(l,n),c=a!==-1;if(s&&!c)r(l.concat(n));else if(!s&&c){const d=[...l];d.splice(a,1),r(d)}}else if(oi(l)){const a=new Set(l);s?a.add(n):a.delete(n),r(a)}else r(mo(t,s))})},mounted:ys,beforeUpdate(t,e,i){t[Wt]=Ne(i),ys(t,e,i)}};function ys(t,{value:e,oldValue:i},l){t._modelValue=e;let n;if(U(e))n=bn(e,l.props.value)>-1;else if(oi(e))n=e.has(l.props.value);else{if(e===i)return;n=Ee(e,mo(t,!0))}t.checked!==n&&(t.checked=n)}const ig={created(t,{value:e},i){t.checked=Ee(e,i.props.value),t[Wt]=Ne(i),be(t,"change",()=>{t[Wt](ni(t))})},beforeUpdate(t,{value:e,oldValue:i},l){t[Wt]=Ne(l),e!==i&&(t.checked=Ee(e,l.props.value))}},lg={deep:!0,created(t,{value:e,modifiers:{number:i}},l){const n=oi(e);be(t,"change",()=>{const s=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>i?ul(ni(r)):ni(r));t[Wt](t.multiple?n?new Set(s):s:s[0]),t._assigning=!0,ml(()=>{t._assigning=!1})}),t[Wt]=Ne(l)},mounted(t,{value:e}){Ss(t,e)},beforeUpdate(t,e,i){t[Wt]=Ne(i)},updated(t,{value:e}){t._assigning||Ss(t,e)}};function Ss(t,e){const i=t.multiple,l=U(e);if(!(i&&!l&&!oi(e))){for(let n=0,s=t.options.length;n<s;n++){const r=t.options[n],a=ni(r);if(i)if(l){const c=typeof a;c==="string"||c==="number"?r.selected=e.some(d=>String(d)===String(a)):r.selected=bn(e,a)>-1}else r.selected=e.has(a);else if(Ee(ni(r),e)){t.selectedIndex!==n&&(t.selectedIndex=n);return}}!i&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ni(t){return"_value"in t?t._value:t.value}function mo(t,e){const i=e?"_trueValue":"_falseValue";return i in t?t[i]:e}const ou=["ctrl","shift","alt","meta"],au={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ou.some(i=>t[`${i}Key`]&&!e.includes(i))},cu=(t,e)=>{if(!t)return t;const i=t._withMods||(t._withMods={}),l=e.join(".");return i[l]||(i[l]=((n,...s)=>{for(let r=0;r<e.length;r++){const a=au[e[r]];if(a&&a(n,e))return}return t(n,...s)}))},uu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ng=(t,e)=>{const i=t._withKeys||(t._withKeys={}),l=e.join(".");return i[l]||(i[l]=(n=>{if(!("key"in n))return;const s=Pe(n.key);if(e.some(r=>r===s||uu[r]===s))return t(n)}))},du=Rt({patchProp:lu},Fc);let Cs;function fu(){return Cs||(Cs=yc(du))}const pu=((...t)=>{const e=fu().createApp(...t),{mount:i}=e;return e.mount=l=>{const n=gu(l);if(!n)return;const s=e._component;!q(s)&&!s.render&&!s.template&&(s.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=i(n,!1,hu(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e});function hu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gu(t){return dt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let vo;const Cl=t=>vo=t,bo=Symbol();function on(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($i||($i={}));function mu(){const t=rr(!0),e=t.run(()=>hl({}));let i=[],l=[];const n=Rn({install(s){Cl(n),n._a=s,s.provide(bo,n),s.config.globalProperties.$pinia=n,l.forEach(r=>i.push(r)),l=[]},use(s){return this._a?i.push(s):l.push(s),this},_p:i,_a:null,_e:t,_s:new Map,state:e});return n}const _o=()=>{};function $s(t,e,i,l=_o){t.add(e);const n=()=>{t.delete(e)&&l()};return!i&&or()&&Zo(n),n}function We(t,...e){t.forEach(i=>{i(...e)})}const vu=t=>t(),Ts=Symbol(),Bl=Symbol();function an(t,e){t instanceof Map&&e instanceof Map?e.forEach((i,l)=>t.set(l,i)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const i in e){if(!e.hasOwnProperty(i))continue;const l=e[i],n=t[i];on(n)&&on(l)&&t.hasOwnProperty(i)&&!ht(l)&&!oe(l)?t[i]=an(n,l):t[i]=l}return t}const bu=Symbol();function _u(t){return!on(t)||!Object.prototype.hasOwnProperty.call(t,bu)}const{assign:Re}=Object;function yu(t){return!!(ht(t)&&t.effect)}function Su(t,e,i,l){const{state:n,actions:s,getters:r}=e,a=i.state.value[t];let c;function d(){a||(i.state.value[t]=n?n():{});const u=Sa(i.state.value[t]);return Re(u,s,Object.keys(r||{}).reduce((p,g)=>(p[g]=Rn(Bt(()=>{Cl(i);const v=i._s.get(t);return r[g].call(v,v)})),p),{}))}return c=yo(t,d,e,i,l,!0),c}function yo(t,e,i={},l,n,s){let r;const a=Re({actions:{}},i),c={deep:!0};let d,u,p=new Set,g=new Set,v;const A=l.state.value[t];!s&&!A&&(l.state.value[t]={});let R;function P(V){let F;d=u=!1,typeof V=="function"?(V(l.state.value[t]),F={type:$i.patchFunction,storeId:t,events:v}):(an(l.state.value[t],V),F={type:$i.patchObject,payload:V,storeId:t,events:v});const z=R=Symbol();ml().then(()=>{R===z&&(d=!0)}),u=!0,We(p,F,l.state.value[t])}const L=s?function(){const{state:F}=i,z=F?F():{};this.$patch(ft=>{Re(ft,z)})}:_o;function b(){r.stop(),p.clear(),g.clear(),l._s.delete(t)}const x=(V,F="")=>{if(Ts in V)return V[Bl]=F,V;const z=function(){Cl(l);const ft=Array.from(arguments),At=new Set,xt=new Set;function qt(Y){At.add(Y)}function Se(Y){xt.add(Y)}We(g,{args:ft,name:z[Bl],store:j,after:qt,onError:Se});let pt;try{pt=V.apply(this&&this.$id===t?this:j,ft)}catch(Y){throw We(xt,Y),Y}return pt instanceof Promise?pt.then(Y=>(We(At,Y),Y)).catch(Y=>(We(xt,Y),Promise.reject(Y))):(We(At,pt),pt)};return z[Ts]=!0,z[Bl]=F,z},$={_p:l,$id:t,$onAction:$s.bind(null,g),$patch:P,$reset:L,$subscribe(V,F={}){const z=$s(p,V,F.detached,()=>ft()),ft=r.run(()=>Fe(()=>l.state.value[t],At=>{(F.flush==="sync"?u:d)&&V({storeId:t,type:$i.direct,events:v},At)},Re({},c,F)));return z},$dispose:b},j=Pi($);l._s.set(t,j);const k=(l._a&&l._a.runWithContext||vu)(()=>l._e.run(()=>(r=rr()).run(()=>e({action:x}))));for(const V in k){const F=k[V];if(ht(F)&&!yu(F)||oe(F))s||(A&&_u(F)&&(ht(F)?F.value=A[V]:an(F,A[V])),l.state.value[t][V]=F);else if(typeof F=="function"){const z=x(F,V);k[V]=z,a.actions[V]=F}}return Re(j,k),Re(Z(j),k),Object.defineProperty(j,"$state",{get:()=>l.state.value[t],set:V=>{P(F=>{Re(F,V)})}}),l._p.forEach(V=>{Re(j,r.run(()=>V({store:j,app:l._a,pinia:l,options:a})))}),A&&s&&i.hydrate&&i.hydrate(j.$state,A),d=!0,u=!0,j}/*! #__NO_SIDE_EFFECTS__ */function $l(t,e,i){let l;const n=typeof e=="function";l=n?i:e;function s(r,a){const c=Oa();return r=r||(c?Gt(bo,null):null),r&&Cl(r),r=vo,r._s.has(t)||(n?yo(t,e,l,r):Su(t,l,r)),r._s.get(t)}return s.$id=t,s}function sg(t){const e=Z(t),i={};for(const l in e){const n=e[l];n.effect?i[l]=Bt({get:()=>t[l],set(s){t[l]=s}}):(ht(n)||oe(n))&&(i[l]=Ta(t,l))}return i}const Cu=(t,e)=>{const i=t.__vccOpts||t;for(const[l,n]of e)i[l]=n;return i},$u={},Tu={class:"h-full"};function Ru(t,e){const i=wn("RouterView");return St(),Lt("div",Tu,[vt(i)])}const Au=Cu($u,[["render",Ru]]),xu="modulepreload",Iu=function(t,e){return new URL(t,e).href},Rs={},et=function(e,i,l){let n=Promise.resolve();if(i&&i.length>0){let r=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));n=r(i.map(u=>{if(u=Iu(u,l),u in Rs)return;Rs[u]=!0;const p=u.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!l)for(let R=a.length-1;R>=0;R--){const P=a[R];if(P.href===u&&(!p||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const A=document.createElement("link");if(A.rel=p?"stylesheet":xu,p||(A.as="script"),A.crossOrigin="",A.href=u,d&&A.setAttribute("nonce",d),document.head.appendChild(A),p)return new Promise((R,P)=>{A.addEventListener("load",R),A.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return n.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ze=typeof document<"u";function So(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&So(t.default)}const lt=Object.assign;function Vl(t,e){const i={};for(const l in e){const n=e[l];i[l]=Jt(n)?n.map(t):t(n)}return i}const Ti=()=>{},Jt=Array.isArray;function As(t,e){const i={};for(const l in t)i[l]=l in e?e[l]:t[l];return i}const Co=/#/g,Eu=/&/g,Nu=/\//g,Pu=/=/g,Ou=/\?/g,$o=/\+/g,Du=/%5B/g,ku=/%5D/g,To=/%5E/g,Mu=/%60/g,Ro=/%7B/g,Lu=/%7C/g,Ao=/%7D/g,Bu=/%20/g;function Dn(t){return t==null?"":encodeURI(""+t).replace(Lu,"|").replace(Du,"[").replace(ku,"]")}function Vu(t){return Dn(t).replace(Ro,"{").replace(Ao,"}").replace(To,"^")}function cn(t){return Dn(t).replace($o,"%2B").replace(Bu,"+").replace(Co,"%23").replace(Eu,"%26").replace(Mu,"`").replace(Ro,"{").replace(Ao,"}").replace(To,"^")}function Fu(t){return cn(t).replace(Pu,"%3D")}function ju(t){return Dn(t).replace(Co,"%23").replace(Ou,"%3F")}function Hu(t){return ju(t).replace(Nu,"%2F")}function Ni(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Ku=/\/$/,Uu=t=>t.replace(Ku,"");function Fl(t,e,i="/"){let l,n={},s="",r="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(l=e.slice(0,c),s=e.slice(c,a>0?a:e.length),n=t(s.slice(1))),a>=0&&(l=l||e.slice(0,a),r=e.slice(a,e.length)),l=Yu(l??e,i),{fullPath:l+s+r,path:l,query:n,hash:Ni(r)}}function Gu(t,e){const i=e.query?t(e.query):"";return e.path+(i&&"?")+i+(e.hash||"")}function xs(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Wu(t,e,i){const l=e.matched.length-1,n=i.matched.length-1;return l>-1&&l===n&&si(e.matched[l],i.matched[n])&&xo(e.params,i.params)&&t(e.query)===t(i.query)&&e.hash===i.hash}function si(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xo(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var i in t)if(!qu(t[i],e[i]))return!1;return!0}function qu(t,e){return Jt(t)?Is(t,e):Jt(e)?Is(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Is(t,e){return Jt(e)?t.length===e.length&&t.every((i,l)=>i===e[l]):t.length===1&&t[0]===e}function Yu(t,e){if(t.startsWith("/"))return t;if(!t)return e;const i=e.split("/"),l=t.split("/"),n=l[l.length-1];(n===".."||n===".")&&l.push("");let s=i.length-1,r,a;for(r=0;r<l.length;r++)if(a=l[r],a!==".")if(a==="..")s>1&&s--;else break;return i.slice(0,s).join("/")+"/"+l.slice(r).join("/")}const $e={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let un=(function(t){return t.pop="pop",t.push="push",t})({}),jl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function zu(t){if(!t)if(ze){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Uu(t)}const Xu=/^[^#]+#/;function Ju(t,e){return t.replace(Xu,"#")+e}function Qu(t,e){const i=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:e.behavior,left:l.left-i.left-(e.left||0),top:l.top-i.top-(e.top||0)}}const Tl=()=>({left:window.scrollX,top:window.scrollY});function Zu(t){let e;if("el"in t){const i=t.el,l=typeof i=="string"&&i.startsWith("#"),n=typeof i=="string"?l?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!n)return;e=Qu(n,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ws(t,e){return(history.state?history.state.position-e:-1)+t}const dn=new Map;function td(t,e){dn.set(t,e)}function ed(t){const e=dn.get(t);return dn.delete(t),e}function id(t){return typeof t=="string"||t&&typeof t=="object"}function Io(t){return typeof t=="string"||typeof t=="symbol"}let gt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const wo=Symbol("");gt.MATCHER_NOT_FOUND+"",gt.NAVIGATION_GUARD_REDIRECT+"",gt.NAVIGATION_ABORTED+"",gt.NAVIGATION_CANCELLED+"",gt.NAVIGATION_DUPLICATED+"";function ri(t,e){return lt(new Error,{type:t,[wo]:!0},e)}function pe(t,e){return t instanceof Error&&wo in t&&(e==null||!!(t.type&e))}const ld=["params","query","hash"];function nd(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const i of ld)i in t&&(e[i]=t[i]);return JSON.stringify(e,null,2)}function sd(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<i.length;++l){const n=i[l].replace($o," "),s=n.indexOf("="),r=Ni(s<0?n:n.slice(0,s)),a=s<0?null:Ni(n.slice(s+1));if(r in e){let c=e[r];Jt(c)||(c=e[r]=[c]),c.push(a)}else e[r]=a}return e}function Es(t){let e="";for(let i in t){const l=t[i];if(i=Fu(i),l==null){l!==void 0&&(e+=(e.length?"&":"")+i);continue}(Jt(l)?l.map(n=>n&&cn(n)):[l&&cn(l)]).forEach(n=>{n!==void 0&&(e+=(e.length?"&":"")+i,n!=null&&(e+="="+n))})}return e}function rd(t){const e={};for(const i in t){const l=t[i];l!==void 0&&(e[i]=Jt(l)?l.map(n=>n==null?null:""+n):l==null?l:""+l)}return e}const od=Symbol(""),Ns=Symbol(""),Rl=Symbol(""),kn=Symbol(""),fn=Symbol("");function fi(){let t=[];function e(l){return t.push(l),()=>{const n=t.indexOf(l);n>-1&&t.splice(n,1)}}function i(){t=[]}return{add:e,list:()=>t.slice(),reset:i}}function xe(t,e,i,l,n,s=r=>r()){const r=l&&(l.enterCallbacks[n]=l.enterCallbacks[n]||[]);return()=>new Promise((a,c)=>{const d=g=>{g===!1?c(ri(gt.NAVIGATION_ABORTED,{from:i,to:e})):g instanceof Error?c(g):id(g)?c(ri(gt.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(r&&l.enterCallbacks[n]===r&&typeof g=="function"&&r.push(g),a())},u=s(()=>t.call(l&&l.instances[n],e,i,d));let p=Promise.resolve(u);t.length<3&&(p=p.then(d)),p.catch(g=>c(g))})}function Hl(t,e,i,l,n=s=>s()){const s=[];for(const r of t)for(const a in r.components){let c=r.components[a];if(!(e!=="beforeRouteEnter"&&!r.instances[a]))if(So(c)){const d=(c.__vccOpts||c)[e];d&&s.push(xe(d,i,l,r,a,n))}else{let d=c();s.push(()=>d.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const p=wu(u)?u.default:u;r.mods[a]=u,r.components[a]=p;const g=(p.__vccOpts||p)[e];return g&&xe(g,i,l,r,a,n)()}))}}return s}function ad(t,e){const i=[],l=[],n=[],s=Math.max(e.matched.length,t.matched.length);for(let r=0;r<s;r++){const a=e.matched[r];a&&(t.matched.find(d=>si(d,a))?l.push(a):i.push(a));const c=t.matched[r];c&&(e.matched.find(d=>si(d,c))||n.push(c))}return[i,l,n]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let cd=()=>location.protocol+"//"+location.host;function Eo(t,e){const{pathname:i,search:l,hash:n}=e,s=t.indexOf("#");if(s>-1){let r=n.includes(t.slice(s))?t.slice(s).length:1,a=n.slice(r);return a[0]!=="/"&&(a="/"+a),xs(a,"")}return xs(i,t)+l+n}function ud(t,e,i,l){let n=[],s=[],r=null;const a=({state:g})=>{const v=Eo(t,location),A=i.value,R=e.value;let P=0;if(g){if(i.value=v,e.value=g,r&&r===A){r=null;return}P=R?g.position-R.position:0}else l(v);n.forEach(L=>{L(i.value,A,{delta:P,type:un.pop,direction:P?P>0?jl.forward:jl.back:jl.unknown})})};function c(){r=i.value}function d(g){n.push(g);const v=()=>{const A=n.indexOf(g);A>-1&&n.splice(A,1)};return s.push(v),v}function u(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(lt({},g.state,{scroll:Tl()}),"")}}function p(){for(const g of s)g();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:d,destroy:p}}function Ps(t,e,i,l=!1,n=!1){return{back:t,current:e,forward:i,replaced:l,position:window.history.length,scroll:n?Tl():null}}function dd(t){const{history:e,location:i}=window,l={value:Eo(t,i)},n={value:e.state};n.value||s(l.value,{back:null,current:l.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,d,u){const p=t.indexOf("#"),g=p>-1?(i.host&&document.querySelector("base")?t:t.slice(p))+c:cd()+t+c;try{e[u?"replaceState":"pushState"](d,"",g),n.value=d}catch(v){console.error(v),i[u?"replace":"assign"](g)}}function r(c,d){s(c,lt({},e.state,Ps(n.value.back,c,n.value.forward,!0),d,{position:n.value.position}),!0),l.value=c}function a(c,d){const u=lt({},n.value,e.state,{forward:c,scroll:Tl()});s(u.current,u,!0),s(c,lt({},Ps(l.value,c,null),{position:u.position+1},d),!1),l.value=c}return{location:l,state:n,push:a,replace:r}}function fd(t){t=zu(t);const e=dd(t),i=ud(t,e.state,e.location,e.replace);function l(s,r=!0){r||i.pauseListeners(),history.go(s)}const n=lt({location:"",base:t,go:l,createHref:Ju.bind(null,t)},e,i);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function pd(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),fd(t)}let Be=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var bt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(bt||{});const hd={type:Be.Static,value:""},gd=/[a-zA-Z0-9_]/;function md(t){if(!t)return[[]];if(t==="/")return[[hd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${i})/"${d}": ${v}`)}let i=bt.Static,l=i;const n=[];let s;function r(){s&&n.push(s),s=[]}let a=0,c,d="",u="";function p(){d&&(i===bt.Static?s.push({type:Be.Static,value:d}):i===bt.Param||i===bt.ParamRegExp||i===bt.ParamRegExpEnd?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Be.Param,value:d,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),d="")}function g(){d+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&i!==bt.ParamRegExp){l=i,i=bt.EscapeNext;continue}switch(i){case bt.Static:c==="/"?(d&&p(),r()):c===":"?(p(),i=bt.Param):g();break;case bt.EscapeNext:g(),i=l;break;case bt.Param:c==="("?i=bt.ParamRegExp:gd.test(c)?g():(p(),i=bt.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case bt.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:i=bt.ParamRegExpEnd:u+=c;break;case bt.ParamRegExpEnd:p(),i=bt.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return i===bt.ParamRegExp&&e(`Unfinished custom RegExp for param "${d}"`),p(),r(),n}const Os="[^/]+?",vd={sensitive:!1,strict:!1,start:!0,end:!0};var Nt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Nt||{});const bd=/[.+*?^${}()[\]/\\]/g;function _d(t,e){const i=lt({},vd,e),l=[];let n=i.start?"^":"";const s=[];for(const d of t){const u=d.length?[]:[Nt.Root];i.strict&&!d.length&&(n+="/");for(let p=0;p<d.length;p++){const g=d[p];let v=Nt.Segment+(i.sensitive?Nt.BonusCaseSensitive:0);if(g.type===Be.Static)p||(n+="/"),n+=g.value.replace(bd,"\\$&"),v+=Nt.Static;else if(g.type===Be.Param){const{value:A,repeatable:R,optional:P,regexp:L}=g;s.push({name:A,repeatable:R,optional:P});const b=L||Os;if(b!==Os){v+=Nt.BonusCustomRegExp;try{`${b}`}catch($){throw new Error(`Invalid custom RegExp for param "${A}" (${b}): `+$.message)}}let x=R?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;p||(x=P&&d.length<2?`(?:/${x})`:"/"+x),P&&(x+="?"),n+=x,v+=Nt.Dynamic,P&&(v+=Nt.BonusOptional),R&&(v+=Nt.BonusRepeatable),b===".*"&&(v+=Nt.BonusWildcard)}u.push(v)}l.push(u)}if(i.strict&&i.end){const d=l.length-1;l[d][l[d].length-1]+=Nt.BonusStrict}i.strict||(n+="/?"),i.end?n+="$":i.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const r=new RegExp(n,i.sensitive?"":"i");function a(d){const u=d.match(r),p={};if(!u)return null;for(let g=1;g<u.length;g++){const v=u[g]||"",A=s[g-1];p[A.name]=v&&A.repeatable?v.split("/"):v}return p}function c(d){let u="",p=!1;for(const g of t){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const v of g)if(v.type===Be.Static)u+=v.value;else if(v.type===Be.Param){const{value:A,repeatable:R,optional:P}=v,L=A in d?d[A]:"";if(Jt(L)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const b=Jt(L)?L.join("/"):L;if(!b)if(P)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${A}"`);u+=b}}return u||"/"}return{re:r,score:l,keys:s,parse:a,stringify:c}}function yd(t,e){let i=0;for(;i<t.length&&i<e.length;){const l=e[i]-t[i];if(l)return l;i++}return t.length<e.length?t.length===1&&t[0]===Nt.Static+Nt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Nt.Static+Nt.Segment?1:-1:0}function No(t,e){let i=0;const l=t.score,n=e.score;for(;i<l.length&&i<n.length;){const s=yd(l[i],n[i]);if(s)return s;i++}if(Math.abs(n.length-l.length)===1){if(Ds(l))return 1;if(Ds(n))return-1}return n.length-l.length}function Ds(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Sd={strict:!1,end:!0,sensitive:!1};function Cd(t,e,i){const l=_d(md(t.path),i),n=lt(l,{record:t,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function $d(t,e){const i=[],l=new Map;e=As(Sd,e);function n(p){return l.get(p)}function s(p,g,v){const A=!v,R=Ms(p);R.aliasOf=v&&v.record;const P=As(e,p),L=[R];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const j of $)L.push(Ms(lt({},R,{components:v?v.record.components:R.components,path:j,aliasOf:v?v.record:R})))}let b,x;for(const $ of L){const{path:j}=$;if(g&&j[0]!=="/"){const J=g.record.path,k=J[J.length-1]==="/"?"":"/";$.path=g.record.path+(j&&k+j)}if(b=Cd($,g,P),v?v.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),A&&p.name&&!Ls(b)&&r(p.name)),Po(b)&&c(b),R.children){const J=R.children;for(let k=0;k<J.length;k++)s(J[k],b,v&&v.children[k])}v=v||b}return x?()=>{r(x)}:Ti}function r(p){if(Io(p)){const g=l.get(p);g&&(l.delete(p),i.splice(i.indexOf(g),1),g.children.forEach(r),g.alias.forEach(r))}else{const g=i.indexOf(p);g>-1&&(i.splice(g,1),p.record.name&&l.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function a(){return i}function c(p){const g=Ad(p,i);i.splice(g,0,p),p.record.name&&!Ls(p)&&l.set(p.record.name,p)}function d(p,g){let v,A={},R,P;if("name"in p&&p.name){if(v=l.get(p.name),!v)throw ri(gt.MATCHER_NOT_FOUND,{location:p});P=v.record.name,A=lt(ks(g.params,v.keys.filter(x=>!x.optional).concat(v.parent?v.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&ks(p.params,v.keys.map(x=>x.name))),R=v.stringify(A)}else if(p.path!=null)R=p.path,v=i.find(x=>x.re.test(R)),v&&(A=v.parse(R),P=v.record.name);else{if(v=g.name?l.get(g.name):i.find(x=>x.re.test(g.path)),!v)throw ri(gt.MATCHER_NOT_FOUND,{location:p,currentLocation:g});P=v.record.name,A=lt({},g.params,p.params),R=v.stringify(A)}const L=[];let b=v;for(;b;)L.unshift(b.record),b=b.parent;return{name:P,path:R,params:A,matched:L,meta:Rd(L)}}t.forEach(p=>s(p));function u(){i.length=0,l.clear()}return{addRoute:s,resolve:d,removeRoute:r,clearRoutes:u,getRoutes:a,getRecordMatcher:n}}function ks(t,e){const i={};for(const l of e)l in t&&(i[l]=t[l]);return i}function Ms(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Td(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Td(t){const e={},i=t.props||!1;if("component"in t)e.default=i;else for(const l in t.components)e[l]=typeof i=="object"?i[l]:i;return e}function Ls(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rd(t){return t.reduce((e,i)=>lt(e,i.meta),{})}function Ad(t,e){let i=0,l=e.length;for(;i!==l;){const s=i+l>>1;No(t,e[s])<0?l=s:i=s+1}const n=xd(t);return n&&(l=e.lastIndexOf(n,l-1)),l}function xd(t){let e=t;for(;e=e.parent;)if(Po(e)&&No(t,e)===0)return e}function Po({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Bs(t){const e=Gt(Rl),i=Gt(kn),l=Bt(()=>{const c=Ct(t.to);return e.resolve(c)}),n=Bt(()=>{const{matched:c}=l.value,{length:d}=c,u=c[d-1],p=i.matched;if(!u||!p.length)return-1;const g=p.findIndex(si.bind(null,u));if(g>-1)return g;const v=Vs(c[d-2]);return d>1&&Vs(u)===v&&p[p.length-1].path!==v?p.findIndex(si.bind(null,c[d-2])):g}),s=Bt(()=>n.value>-1&&Pd(i.params,l.value.params)),r=Bt(()=>n.value>-1&&n.value===i.matched.length-1&&xo(i.params,l.value.params));function a(c={}){if(Nd(c)){const d=e[Ct(t.replace)?"replace":"push"](Ct(t.to)).catch(Ti);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:l,href:Bt(()=>l.value.href),isActive:s,isExactActive:r,navigate:a}}function Id(t){return t.length===1?t[0]:t}const wd=Dr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bs,setup(t,{slots:e}){const i=Pi(Bs(t)),{options:l}=Gt(Rl),n=Bt(()=>({[Fs(t.activeClass,l.linkActiveClass,"router-link-active")]:i.isActive,[Fs(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const s=e.default&&Id(e.default(i));return t.custom?s:po("a",{"aria-current":i.isExactActive?t.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:n.value},s)}}}),Ed=wd;function Nd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Pd(t,e){for(const i in e){const l=e[i],n=t[i];if(typeof l=="string"){if(l!==n)return!1}else if(!Jt(n)||n.length!==l.length||l.some((s,r)=>s.valueOf()!==n[r].valueOf()))return!1}return!0}function Vs(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fs=(t,e,i)=>t??e??i,Od=Dr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:i}){const l=Gt(fn),n=Bt(()=>t.route||l.value),s=Gt(Ns,0),r=Bt(()=>{let d=Ct(s);const{matched:u}=n.value;let p;for(;(p=u[d])&&!p.components;)d++;return d}),a=Bt(()=>n.value.matched[r.value]);Ui(Ns,Bt(()=>r.value+1)),Ui(od,a),Ui(fn,n);const c=hl();return Fe(()=>[c.value,a.value,t.name],([d,u,p],[g,v,A])=>{u&&(u.instances[p]=d,v&&v!==u&&d&&d===g&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),d&&u&&(!v||!si(u,v)||!g)&&(u.enterCallbacks[p]||[]).forEach(R=>R(d))},{flush:"post"}),()=>{const d=n.value,u=t.name,p=a.value,g=p&&p.components[u];if(!g)return js(i.default,{Component:g,route:d});const v=p.props[u],A=v?v===!0?d.params:typeof v=="function"?v(d):v:null,P=po(g,lt({},A,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[u]=null)},ref:c}));return js(i.default,{Component:P,route:d})||P}}});function js(t,e){if(!t)return null;const i=t(e);return i.length===1?i[0]:i}const Dd=Od;function kd(t){const e=$d(t.routes,t),i=t.parseQuery||sd,l=t.stringifyQuery||Es,n=t.history,s=fi(),r=fi(),a=fi(),c=ba($e);let d=$e;ze&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vl.bind(null,S=>""+S),p=Vl.bind(null,Hu),g=Vl.bind(null,Ni);function v(S,M){let O,H;return Io(S)?(O=e.getRecordMatcher(S),H=M):H=S,e.addRoute(H,O)}function A(S){const M=e.getRecordMatcher(S);M&&e.removeRoute(M)}function R(){return e.getRoutes().map(S=>S.record)}function P(S){return!!e.getRecordMatcher(S)}function L(S,M){if(M=lt({},M||c.value),typeof S=="string"){const m=Fl(i,S,M.path),y=e.resolve({path:m.path},M),C=n.createHref(m.fullPath);return lt(m,y,{params:g(y.params),hash:Ni(m.hash),redirectedFrom:void 0,href:C})}let O;if(S.path!=null)O=lt({},S,{path:Fl(i,S.path,M.path).path});else{const m=lt({},S.params);for(const y in m)m[y]==null&&delete m[y];O=lt({},S,{params:p(m)}),M.params=p(M.params)}const H=e.resolve(O,M),X=S.hash||"";H.params=u(g(H.params));const f=Gu(l,lt({},S,{hash:Vu(X),path:H.path})),h=n.createHref(f);return lt({fullPath:f,hash:X,query:l===Es?rd(S.query):S.query||{}},H,{redirectedFrom:void 0,href:h})}function b(S){return typeof S=="string"?Fl(i,S,c.value.path):lt({},S)}function x(S,M){if(d!==S)return ri(gt.NAVIGATION_CANCELLED,{from:M,to:S})}function $(S){return k(S)}function j(S){return $(lt(b(S),{replace:!0}))}function J(S,M){const O=S.matched[S.matched.length-1];if(O&&O.redirect){const{redirect:H}=O;let X=typeof H=="function"?H(S,M):H;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=b(X):{path:X},X.params={}),lt({query:S.query,hash:S.hash,params:X.path!=null?{}:S.params},X)}}function k(S,M){const O=d=L(S),H=c.value,X=S.state,f=S.force,h=S.replace===!0,m=J(O,H);if(m)return k(lt(b(m),{state:typeof m=="object"?lt({},X,m.state):X,force:f,replace:h}),M||O);const y=O;y.redirectedFrom=M;let C;return!f&&Wu(l,H,O)&&(C=ri(gt.NAVIGATION_DUPLICATED,{to:y,from:H}),Qt(H,H,!0,!1)),(C?Promise.resolve(C):z(y,H)).catch(_=>pe(_)?pe(_,gt.NAVIGATION_GUARD_REDIRECT)?_:Ce(_):it(_,y,H)).then(_=>{if(_){if(pe(_,gt.NAVIGATION_GUARD_REDIRECT))return k(lt({replace:h},b(_.to),{state:typeof _.to=="object"?lt({},X,_.to.state):X,force:f}),M||y)}else _=At(y,H,!0,h,X);return ft(y,H,_),_})}function V(S,M){const O=x(S,M);return O?Promise.reject(O):Promise.resolve()}function F(S){const M=Ue.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(S):S()}function z(S,M){let O;const[H,X,f]=ad(S,M);O=Hl(H.reverse(),"beforeRouteLeave",S,M);for(const m of H)m.leaveGuards.forEach(y=>{O.push(xe(y,S,M))});const h=V.bind(null,S,M);return O.push(h),Ht(O).then(()=>{O=[];for(const m of s.list())O.push(xe(m,S,M));return O.push(h),Ht(O)}).then(()=>{O=Hl(X,"beforeRouteUpdate",S,M);for(const m of X)m.updateGuards.forEach(y=>{O.push(xe(y,S,M))});return O.push(h),Ht(O)}).then(()=>{O=[];for(const m of f)if(m.beforeEnter)if(Jt(m.beforeEnter))for(const y of m.beforeEnter)O.push(xe(y,S,M));else O.push(xe(m.beforeEnter,S,M));return O.push(h),Ht(O)}).then(()=>(S.matched.forEach(m=>m.enterCallbacks={}),O=Hl(f,"beforeRouteEnter",S,M,F),O.push(h),Ht(O))).then(()=>{O=[];for(const m of r.list())O.push(xe(m,S,M));return O.push(h),Ht(O)}).catch(m=>pe(m,gt.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function ft(S,M,O){a.list().forEach(H=>F(()=>H(S,M,O)))}function At(S,M,O,H,X){const f=x(S,M);if(f)return f;const h=M===$e,m=ze?history.state:{};O&&(H||h?n.replace(S.fullPath,lt({scroll:h&&m&&m.scroll},X)):n.push(S.fullPath,X)),c.value=S,Qt(S,M,O,h),Ce()}let xt;function qt(){xt||(xt=n.listen((S,M,O)=>{if(!Oe.listening)return;const H=L(S),X=J(H,Oe.currentRoute.value);if(X){k(lt(X,{replace:!0,force:!0}),H).catch(Ti);return}d=H;const f=c.value;ze&&td(ws(f.fullPath,O.delta),Tl()),z(H,f).catch(h=>pe(h,gt.NAVIGATION_ABORTED|gt.NAVIGATION_CANCELLED)?h:pe(h,gt.NAVIGATION_GUARD_REDIRECT)?(k(lt(b(h.to),{force:!0}),H).then(m=>{pe(m,gt.NAVIGATION_ABORTED|gt.NAVIGATION_DUPLICATED)&&!O.delta&&O.type===un.pop&&n.go(-1,!1)}).catch(Ti),Promise.reject()):(O.delta&&n.go(-O.delta,!1),it(h,H,f))).then(h=>{h=h||At(H,f,!1),h&&(O.delta&&!pe(h,gt.NAVIGATION_CANCELLED)?n.go(-O.delta,!1):O.type===un.pop&&pe(h,gt.NAVIGATION_ABORTED|gt.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),ft(H,f,h)}).catch(Ti)}))}let Se=fi(),pt=fi(),Y;function it(S,M,O){Ce(S);const H=pt.list();return H.length?H.forEach(X=>X(S,M,O)):console.error(S),Promise.reject(S)}function de(){return Y&&c.value!==$e?Promise.resolve():new Promise((S,M)=>{Se.add([S,M])})}function Ce(S){return Y||(Y=!S,qt(),Se.list().forEach(([M,O])=>S?O(S):M()),Se.reset()),S}function Qt(S,M,O,H){const{scrollBehavior:X}=t;if(!ze||!X)return Promise.resolve();const f=!O&&ed(ws(S.fullPath,0))||(H||!O)&&history.state&&history.state.scroll||null;return ml().then(()=>X(S,M,f)).then(h=>h&&Zu(h)).catch(h=>it(h,S,M))}const kt=S=>n.go(S);let Ke;const Ue=new Set,Oe={currentRoute:c,listening:!0,addRoute:v,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:R,resolve:L,options:t,push:$,replace:j,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:s.add,beforeResolve:r.add,afterEach:a.add,onError:pt.add,isReady:de,install(S){S.component("RouterLink",Ed),S.component("RouterView",Dd),S.config.globalProperties.$router=Oe,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(c)}),ze&&!Ke&&c.value===$e&&(Ke=!0,$(n.location).catch(H=>{}));const M={};for(const H in $e)Object.defineProperty(M,H,{get:()=>c.value[H],enumerable:!0});S.provide(Rl,Oe),S.provide(kn,Cr(M)),S.provide(fn,c);const O=S.unmount;Ue.add(S),S.unmount=function(){Ue.delete(S),Ue.size<1&&(d=$e,xt&&xt(),xt=null,c.value=$e,Ke=!1,Y=!1),O()}}};function Ht(S){return S.reduce((M,O)=>M.then(()=>F(O)),Promise.resolve())}return Oe}function Mn(){return Gt(Rl)}function Md(t){return Gt(kn)}const Ri={appName:"订单管理",institution:"北京市公共图书馆",currentLibrarianAccount:"BIBQUERY01",currentSubscriber:"ceshi",viewableSubscribers:["ceshi"],z3950Servers:["北京大学","华盛顿大学"],sidebarHighlightMap:{"/bib-query/z3950":"/bib-query","/bib-query/new-bib":"/bib-query","/acceptance/delivery-import":"/acceptance/delivery-import/tasks","/acceptance/detail":"/acceptance","/shortage/detail":"/shortage","/orders/line":"/orders","/orders/lines":"/orders","/settled/detail":"/settled","/settled/list":"/settled"},sidebar:[{id:"order-mgmt",label:"订单管理",expanded:!0,children:[{label:"非连续出版物订单",route:"/orders"},{label:"书目查询",route:"/bib-query"}]},{id:"acceptance",label:"采访验收",expanded:!0,children:[{label:"验收单管理",route:"/acceptance"},{label:"逐条收货",route:"/receive"},{label:"批量验收",route:"/batch-acceptance"},{label:"换货管理",route:"/exchange"},{label:"退货管理",route:"/return"},{label:"催缺管理",route:"/shortage"}]},{id:"settlement",label:"采访结算",expanded:!1,children:[{label:"待结算",route:"/pending-settlement"},{label:"已结算",route:"/settled"},{label:"结算失败处理",route:"/settlement-fail"}]},{id:"subscriber",label:"订户管理",expanded:!1,children:[{label:"订户列表",route:"/subscribers"},{label:"馆员列表",route:"/librarians"}]},{id:"currency",label:"货币管理",expanded:!1,children:[{label:"货币信息",route:"/currency"}]},{id:"settings",label:"设置",expanded:!1,children:[{label:"退换撤订原因参数",route:"/reason-params"},{label:"催缺配置",route:"/shortage-config"},{label:"条码号供应商代码",route:"/barcode-supplier"},{label:"条码校验规则",route:"/barcode-rule"},{label:"订单与MARC类型映射关系",route:"/marc-mapping"},{label:"订单导入模板配置",route:"/import-template"},{label:"馆址管理",route:"/locations"}]}]},Hs={"/orders":"订单管理","/bib-query":"书目查询","/acceptance":"验收单管理","/receive":"逐条收货","/batch-acceptance":"批量验收","/exchange":"换货管理","/return":"退货管理","/shortage":"催缺管理","/shortage/detail":"催缺详情","/pending-settlement":"待结算","/settled":"已结算","/settled/detail":"结算详情","/settled/list":"结算清单","/settlement-fail":"结算失败处理","/subscribers":"订户列表","/librarians":"馆员列表","/currency":"货币信息","/reason-params":"退换撤订原因参数","/shortage-config":"催缺配置","/barcode-supplier":"条码号供应商代码","/barcode-rule":"条码校验规则","/marc-mapping":"订单与MARC类型映射关系","/import-template":"订单导入模板配置","/locations":"馆址管理","/bib-query/new-bib":"新建书目","/bib-query/z3950":"查Z3950","/acceptance/delivery-import":"导入任务","/acceptance/delivery-import/tasks":"导入任务","/acceptance/detail":"验收详情","/orders/line":"订单行详情"};function Oo(t){return Hs[t]?Hs[t]:t.startsWith("/acceptance/detail/")?"验收详情":t.startsWith("/shortage/detail/")?"催缺详情":t.startsWith("/acceptance/delivery-import/tasks/")?"导入任务详情":t.startsWith("/orders/line/")?"订单行详情":t.startsWith("/settled/detail/")?"结算详情":t.startsWith("/settled/list/")?"结算清单":t}function pn(t){if(Ri.sidebarHighlightMap[t])return Ri.sidebarHighlightMap[t];for(const[e,i]of Object.entries(Ri.sidebarHighlightMap))if(t.startsWith(`${e}/`)||e!==t&&t.startsWith(e))return i;return t}const Ks="orderm_spa_tabs",Al=$l("app",{state:()=>({config:Ri,tabs:[{route:"/orders",title:"订单管理"}],activeRoute:"/orders",expandedGroups:Ri.sidebar.filter(t=>t.expanded).map(t=>t.id)}),getters:{highlightRoute:t=>pn(t.activeRoute),currentAcceptance:t=>t._currentAcceptance},actions:{initFromStorage(){try{const t=sessionStorage.getItem(Ks);if(!t)return;const e=JSON.parse(t);Array.isArray(e.tabs)&&e.tabs.length&&(this.tabs=e.tabs,this.activeRoute=e.activeRoute||this.tabs[0].route)}catch{}},persistTabs(){sessionStorage.setItem(Ks,JSON.stringify({tabs:this.tabs,activeRoute:this.activeRoute}))},openTab(t,e){const i=e||Oo(t),l=this.tabs.find(n=>n.route===t);l?l.title=i:this.tabs.push({route:t,title:i}),this.activeRoute=t,this.persistTabs()},switchTab(t){this.activeRoute=t,this.persistTabs()},closeTab(t){if(this.tabs.length<=1)return;const e=this.tabs.findIndex(i=>i.route===t);if(e!==-1){if(this.tabs.splice(e,1),this.activeRoute===t){const i=this.tabs[Math.max(0,e-1)]||this.tabs[0];this.activeRoute=i.route}this.persistTabs()}},toggleGroup(t){const e=this.expandedGroups.indexOf(t);e>=0?this.expandedGroups.splice(e,1):this.expandedGroups.push(t)},isGroupExpanded(t,e){if(this.expandedGroups.includes(t))return!0;const i=this.config.sidebar.find(l=>l.id===t);return i==null?void 0:i.children.some(l=>pn(e)===l.route)}}}),Kl="orderm_current_acceptance",Ul="acceptanceDetailContext";function rg(t){return{no:t.no,id:t.acceptanceId,name:t.name,type:t.type,lang:t.lang,method:t.method,supplier:t.supplier,shipNo:t.shipNo,status:t.status,remarkText:t.remarkText||"",autoBarcode:t.autoBarcode,barcode:t.barcode}}const Ld=$l("acceptance",{state:()=>({current:null,detailContext:null}),getters:{hasCurrent:t=>!!t.current},actions:{initFromStorage(){try{const t=localStorage.getItem(Kl);this.current=t?JSON.parse(t):null}catch{this.current=null}this.loadDetailContext()},setCurrent(t){this.current=t,t?localStorage.setItem(Kl,JSON.stringify(t)):localStorage.removeItem(Kl)},clearCurrent(){this.setCurrent(null)},saveDetailContext(t){this.detailContext=t,sessionStorage.setItem(Ul,JSON.stringify(t))},loadDetailContext(){try{const t=sessionStorage.getItem(Ul);this.detailContext=t?JSON.parse(t):null}catch{this.detailContext=null}return this.detailContext},clearDetailContext(){this.detailContext=null,sessionStorage.removeItem(Ul)}}}),og={exchange:"换货原因",return:"退货原因",cancel:"撤订原因",revokeReceive:"撤销收货原因"},Us={exchange:[{id:"ex-1",content:"换货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:41",remark:""},{id:"ex-2",content:"残缺损",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:45:18",remark:""},{id:"ex-3",content:"缺页",status:"active",sort:3,creator:"赵付",created:"2026-05-22 08:56:00",remark:""},{id:"ex-4",content:"错页",status:"active",sort:4,creator:"赵付",created:"2026-05-22 08:56:01",remark:""},{id:"ex-5",content:"装订错误",status:"active",sort:5,creator:"赵付",created:"2026-05-22 08:56:02",remark:""},{id:"ex-6",content:"纸张破损",status:"active",sort:6,creator:"赵付",created:"2026-05-22 08:56:03",remark:""},{id:"ex-7",content:"装订不牢",status:"active",sort:7,creator:"赵付",created:"2026-05-22 08:56:04",remark:""},{id:"ex-8",content:"书脊开裂",status:"active",sort:8,creator:"赵付",created:"2026-05-22 08:56:05",remark:""},{id:"ex-9",content:"被污染或损坏",status:"active",sort:9,creator:"赵付",created:"2026-05-22 08:56:06",remark:""}],return:[{id:"rt-1",content:"退货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:48",remark:""},{id:"rt-2",content:"损坏退货",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:09",remark:""},{id:"rt-3",content:"缺页",status:"active",sort:3,creator:"赵付",created:"2026-05-22 08:56:10",remark:""},{id:"rt-4",content:"错页",status:"active",sort:4,creator:"赵付",created:"2026-05-22 08:56:11",remark:""},{id:"rt-5",content:"装订错误",status:"active",sort:5,creator:"赵付",created:"2026-05-22 08:56:12",remark:""},{id:"rt-6",content:"纸张破损",status:"active",sort:6,creator:"赵付",created:"2026-05-22 08:56:13",remark:""},{id:"rt-7",content:"装订不牢",status:"active",sort:7,creator:"赵付",created:"2026-05-22 08:56:14",remark:""},{id:"rt-8",content:"书脊开裂",status:"active",sort:8,creator:"赵付",created:"2026-05-22 08:56:15",remark:""},{id:"rt-9",content:"被污染或损坏",status:"active",sort:9,creator:"赵付",created:"2026-05-22 08:56:16",remark:""}],cancel:[{id:"ca-1",content:"撤订",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:56",remark:""},{id:"ca-2",content:"退订",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:27",remark:""}],revokeReceive:[{id:"rv-1",content:"录入错误",status:"active",sort:1,creator:"赵付",created:"2026-05-22 09:10:12",remark:""},{id:"rv-2",content:"重复收货",status:"active",sort:2,creator:"杨晓婉",created:"2026-05-22 09:11:05",remark:""},{id:"rv-3",content:"品相差",status:"active",sort:3,creator:"王二小",created:"2026-05-22 09:12:18",remark:""}]},ag=[{key:"content",label:"原因"},{key:"status",label:"状态",type:"select",options:["全部","使用中","已停用"]},{key:"createDate",label:"创建日期",type:"dateRange",startKey:"startDate",endKey:"endDate"},{key:"creator",label:"创建人",extra:!0}],cg={active:{text:"使用中",cls:"text-green-600"},disabled:{text:"已停用",cls:"text-red-500"}},Gs="orderm_reason_params";function Gl(t){return String(t??"").trim()}const Bd=$l("reasonParams",{state:()=>({data:structuredClone(Us)}),getters:{getByType:t=>e=>t.data[e]||[],getActiveByType:t=>e=>(t.data[e]||[]).filter(i=>i.status==="active").sort((i,l)=>(i.sort||0)-(l.sort||0))},actions:{initFromStorage(){try{const t=localStorage.getItem(Gs);t?this.data=JSON.parse(t):this.persist()}catch{this.data=structuredClone(Us)}},persist(){localStorage.setItem(Gs,JSON.stringify(this.data))},isDuplicate(t,e){const i=Gl(e);return i?(this.data[t]||[]).some(l=>Gl(l.content)===i):!1},nextSort(t){const e=this.data[t]||[];return e.length?Math.max(...e.map(i=>Number(i.sort)||0))+1:1},addReason(t,e){const i=Gl(e.content),l=this.data[t]||[],n=e.sort!=null?e.sort:this.nextSort(t),s={...e,content:i,sort:n,remark:e.remark??"",id:`${t}-${Date.now()}`,status:"active",creator:e.creator||"赵付",created:e.created||new Date().toISOString().slice(0,19).replace("T"," ")};return l.push(s),this.data[t]=l,this.persist(),s},updateReason(t,e,i){const l=this.data[t]||[],n=l.findIndex(s=>s.id===e);n>=0&&(l[n]={...l[n],...i},this.persist())},toggleStatus(t,e){const i=(this.data[t]||[]).find(l=>l.id===e);i&&(i.status=i.status==="active"?"disabled":"active",this.persist())}}}),ug={active:{text:"使用中",cls:"text-green-600"},inactive:{text:"已停用",cls:"text-gray-500"}},Vd=32,Fd=64,jd=200,Hd=32,Kd=64,Ud=200,Gd=32,Wd=64,qd=200,Yd=["ST001_C1","ST001_C2","ST001_C3","ST001_C4","ST001_C5","ST002_C1","ST002_C2","ST003_C1"],zd=["CL001","CL002","CL003","CL004","CL005","CL006","CL007","CL008","CL009","CL010","STD02","STE02","STG02","STK02","STB01","STC01","ST01","ST02","ST03","ST04","ST05","ST06","ST07","ST10","ST100","ST101","ST102"],Xd=["ST001","STD01","STE01","STEK1","STES1","STG01","STK01","STS01","STF01","ST029","ST002","ST003","ST004","ST005","ST006","ST007","ST008","ST009","ST010","ST011","ST012","ST013","ST014","ST015","ST018","ST019","ST020","ST021","ST024","ST025","ST026","ST030","ST031","ST032","ST033","ST034","ST044","ST047","STB01","STC01","STD02","STE02","STH01"],Jd={"site-1":["ST001","STD","STE","STG","STK","STS","STF"],"site-2":["ST029"],"site-3":["STB","STC"],"site-4":["ST002","ST003","ST004","ST005","ST006","ST007","ST008","ST009","ST010","ST011","ST012","ST013","ST014","ST015","ST018","ST019","ST020","ST021","ST024","ST025","ST026","ST030","ST031","ST032","ST033","ST034","ST044","ST047"]},Qd=[{id:"site-1",code:"ST001_C1",name:"首都华威桥馆",institutionId:"inst-1",status:"active",remark:"首都图书馆主馆文献借阅区域"},{id:"site-2",code:"ST001_C2",name:"首都大兴机场分馆",institutionId:"inst-1",status:"active",remark:""},{id:"site-3",code:"ST001_C3",name:"北京城市图书馆",institutionId:"inst-2",status:"active",remark:""},{id:"site-4",code:"ST001_C4",name:"其他馆址（首都图书馆）",institutionId:"inst-1",status:"active",remark:""},{id:"site-5",code:"",name:"测试停用馆址",institutionId:"inst-1",status:"inactive",remark:"编码为空示例"}],ki=[{id:"branch-6",siteId:"site-1",code:"ST001",name:"首都图书馆",status:"active",remark:""},{id:"branch-1",siteId:"site-1",code:"STD01",name:"首图地方文献",status:"active",remark:""},{id:"branch-2",siteId:"site-1",code:"STE01",name:"市少儿图书馆",status:"active",remark:""},{id:"branch-7",siteId:"site-1",code:"STEK1",name:"市少儿图书馆期刊分馆",status:"active",remark:""},{id:"branch-8",siteId:"site-1",code:"STES1",name:"市少儿图书馆视听分馆",status:"active",remark:""},{id:"branch-3",siteId:"site-1",code:"STG01",name:"首图古籍",status:"active",remark:""},{id:"branch-4",siteId:"site-1",code:"STK01",name:"首图期刊分馆",status:"active",remark:""},{id:"branch-9",siteId:"site-1",code:"STS01",name:"首图视听中心",status:"active",remark:""},{id:"branch-10",siteId:"site-2",code:"ST029",name:"首图大兴机场分馆",status:"active",remark:""},{id:"branch-11",siteId:"site-1",code:"STF01",name:"首图非遗文献分馆",status:"active",remark:""},{id:"branch-12",siteId:"site-4",code:"ST002",name:"首都图书馆月坛分馆",status:"active",remark:""},{id:"branch-13",siteId:"site-4",code:"ST003",name:"首都图书馆北工大分馆",status:"active",remark:""},{id:"branch-14",siteId:"site-4",code:"ST004",name:"首都图书馆东四分馆",status:"active",remark:""},{id:"branch-15",siteId:"site-4",code:"ST005",name:"首都图书馆小堡分馆",status:"active",remark:""},{id:"branch-16",siteId:"site-4",code:"ST006",name:"首都图书馆前门分馆",status:"active",remark:""},{id:"branch-17",siteId:"site-4",code:"ST007",name:"首都图书馆南邵分馆",status:"active",remark:""},{id:"branch-18",siteId:"site-4",code:"ST008",name:"首都图书馆东花市分馆",status:"active",remark:""},{id:"branch-19",siteId:"site-4",code:"ST009",name:"首都图书馆西长安街分馆",status:"active",remark:""},{id:"branch-20",siteId:"site-4",code:"ST010",name:"首都图书馆六里屯分馆",status:"active",remark:""},{id:"branch-21",siteId:"site-4",code:"ST011",name:"首都图书馆堡头分馆",status:"active",remark:""},{id:"branch-22",siteId:"site-4",code:"ST012",name:"首都图书馆首都机场分馆",status:"active",remark:""},{id:"branch-23",siteId:"site-4",code:"ST013",name:"首都图书馆西三旗分馆",status:"active",remark:""},{id:"branch-24",siteId:"site-4",code:"ST014",name:"首都图书馆社区活动",status:"active",remark:""},{id:"branch-25",siteId:"site-4",code:"ST015",name:"首都图书馆市财政局分馆",status:"active",remark:""},{id:"branch-26",siteId:"site-4",code:"ST018",name:"首都图书馆市人大分馆",status:"active",remark:""},{id:"branch-27",siteId:"site-4",code:"ST019",name:"亦庄开发区图书馆",status:"active",remark:""},{id:"branch-28",siteId:"site-4",code:"ST020",name:"北京市国际艺术学校分馆",status:"active",remark:""},{id:"branch-29",siteId:"site-4",code:"ST021",name:"国家图书馆",status:"active",remark:""},{id:"branch-30",siteId:"site-4",code:"ST024",name:"老干部局（怀柔）分馆",status:"active",remark:""},{id:"branch-31",siteId:"site-4",code:"ST025",name:"老干部局（东直门）分馆",status:"active",remark:""},{id:"branch-32",siteId:"site-4",code:"ST026",name:"首图耿丹学院分馆",status:"active",remark:""},{id:"branch-33",siteId:"site-4",code:"ST030",name:"首都图书馆酷车小镇分馆",status:"active",remark:""},{id:"branch-34",siteId:"site-4",code:"ST031",name:"首都图书馆天通苑分馆",status:"active",remark:""},{id:"branch-35",siteId:"site-4",code:"ST032",name:"首都图书馆体育分馆",status:"active",remark:""},{id:"branch-36",siteId:"site-4",code:"ST033",name:"首都图书馆南航分馆",status:"active",remark:""},{id:"branch-37",siteId:"site-4",code:"ST034",name:"首都图书馆火箭军分馆",status:"active",remark:""},{id:"branch-38",siteId:"site-4",code:"ST044",name:"首图北京政务中心分馆",status:"active",remark:""},{id:"branch-39",siteId:"site-4",code:"ST047",name:"首都图书馆沐林分馆",status:"active",remark:""},{id:"branch-5",siteId:"site-5",code:"",name:"测试停用分馆",status:"inactive",remark:""}],Zd=[{id:"col-1",branchId:"branch-1",code:"CL001",name:"北京地方文献阅览室",status:"active",remark:""},{id:"col-2",branchId:"branch-2",code:"CL002",name:"首少.少儿钢琴厂书库",status:"active",remark:""},{id:"col-3",branchId:"branch-3",code:"CL003",name:"历史文献阅览室",status:"active",remark:""},{id:"col-4",branchId:"branch-4",code:"CL004",name:"首图刊.中文报刊阅览室",status:"active",remark:""},{id:"col-st01",branchId:"branch-6",code:"ST01",name:"哲学社会科学图书借阅室 (4204)",status:"active",remark:""},{id:"col-st02",branchId:"branch-6",code:"ST02",name:"中文库本书库 (4)",status:"active",remark:""},{id:"col-st03",branchId:"branch-6",code:"ST03",name:"文学史地图书借阅室2106",status:"active",remark:""},{id:"col-st04",branchId:"branch-6",code:"ST04",name:"工具书阅览室 (5205)",status:"active",remark:""},{id:"col-st05",branchId:"branch-6",code:"ST05",name:"艺术文献阅览室 (5205)",status:"active",remark:""},{id:"col-st06",branchId:"branch-6",code:"ST06",name:"中文报刊外借室",status:"active",remark:""},{id:"col-st07",branchId:"branch-6",code:"ST07",name:"科技图书借阅室 (6204)",status:"active",remark:""},{id:"col-st10",branchId:"branch-6",code:"ST10",name:"综合图书借阅室 (7204)",status:"active",remark:""},{id:"col-st100",branchId:"branch-6",code:"ST100",name:"首图预约处",status:"active",remark:""},{id:"col-st101",branchId:"branch-6",code:"ST101",name:"B座二层新书刊",status:"active",remark:""},{id:"col-st102",branchId:"branch-6",code:"ST102",name:"B座三层文学图书",status:"active",remark:""},{id:"col-5",branchId:"branch-5",code:"",name:"测试停用馆藏地",status:"inactive",remark:""}],dg=[{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态",type:"select",options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],fg=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],pg=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称",extra:!0},{key:"code",label:"馆藏地编码",extra:!0},{key:"name",label:"馆藏地名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],hg=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"institutionCode",label:"机构编码"},{key:"institutionName",label:"机构名称"},{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],gg=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],mg=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称"},{key:"code",label:"馆藏地编码"},{key:"name",label:"馆藏地名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}];function Ut(t,e){return e?String(t||"").toLowerCase().includes(e.toLowerCase()):!0}function Do(t,e){return t.find(i=>i.id===e)}function Ln(t,e){return t.find(i=>i.id===e)}function vg(t,e){return t.find(i=>i.id===e)}function tf(t,e){const i=Do(e,t.siteId);return{...t,siteCode:(i==null?void 0:i.code)||"-",siteName:(i==null?void 0:i.name)||"-"}}function ef(t,e,i){const l=Ln(e,t.branchId),n=l?Do(i,l.siteId):null;return{...t,branchCode:(l==null?void 0:l.code)||"-",branchName:(l==null?void 0:l.name)||"-",siteCode:(n==null?void 0:n.code)||"-",siteName:(n==null?void 0:n.name)||"-"}}function ko(t){return[...t].filter(e=>e.status==="active").sort((e,i)=>e.name.localeCompare(i.name,"zh-CN"))}function Mo(t){return ko(t).map(e=>e.name)}function lf(t){return["全部",...Mo(t)]}const nf=new Set(["site","location"]);function bg(t,e){return t.map(i=>!nf.has(i.key)||i.type!=="select"?i:{...i,options:[...e]})}function _g(t,e){return t.filter(i=>i.siteId===e&&i.status==="active").sort((i,l)=>i.name.localeCompare(l.name,"zh-CN"))}function Bn(t){return[...t].filter(e=>e.status==="active"&&e.code).sort((e,i)=>e.code.localeCompare(i.code,"zh-CN"))}function Vn(t){return t?t.code?`${t.code} | ${t.name}`:t.name||"":""}function sf(t){return Bn(t).map(e=>({value:e.id,label:Vn(e),code:e.code,name:e.name}))}function yg(t){return Bn(t).map(e=>({value:e.code,label:Vn(e),code:e.code,name:e.name}))}function rf(t){return[...t].filter(e=>e.status==="active"&&e.code).sort((e,i)=>e.code.localeCompare(i.code,"zh-CN"))}function of(t){return t?t.code?`${t.code} | ${t.name}`:t.name||"":""}function Sg(t,e,i=""){let l=rf(t);const n=(Array.isArray(i)?i:[i]).map(s=>String(s||"").trim()).filter(Boolean);if(n.length){const s=new Set(e.filter(r=>r.status==="active"&&n.includes(r.code)).map(r=>r.id));if(!s.size)return[];l=l.filter(r=>s.has(r.branchId))}return l.map(s=>({value:s.code,label:of(s),code:s.code,name:s.name,branchId:s.branchId}))}function af(t){return Yd.includes(t.trim())}function cf(t){return zd.includes(t)}function uf(t,e){if(!Xd.includes(t))return!1;const i=Jd[e];return i?i.some(l=>t.startsWith(l)):!0}function df(t,e,i=null){return t.some(l=>l.id!==i&&l.code===e)}function ff(t,e,i=null){return t.some(l=>l.id!==i&&l.name===e)}function pf(t,e,i=null){return t.some(l=>l.id!==i&&l.code===e)}function hf(t,e,i,l=null){return t.some(n=>n.id!==l&&n.siteId===i&&n.name===e)}function gf(t,e,i=null){return t.some(l=>l.id!==i&&l.code===e)}function mf(t,e,i,l=null){return t.some(n=>n.id!==l&&n.branchId===i&&n.name===e)}function Cg(t,e,i){const l={},n=t.siteId||null,s=t.code.trim(),r=t.name.trim(),a=t.remark||"";return i||(s?s.length>Vd?l.code="馆址编码长度不能超过32个字符":af(s)?df(e,s,n)&&(l.code="馆址编码已存在，请修改"):l.code="馆址编码必须属于四级馆藏地现有编码":l.code="请输入馆址编码"),r?r.length>Fd?l.name="馆址名称长度不能超过64个字符":ff(e,r,n)&&(l.name="已存在同名馆址"):l.name="请输入馆址名称",a.length>jd&&(l.remark="备注长度不能超过200个字符"),{valid:Object.keys(l).length===0,errors:l}}function $g(t,e,i){const l={},n=t.branchId||null,s=t.siteId,r=t.code.trim(),a=t.name.trim(),c=t.remark||"";return s||(l.siteId="请选择所属馆址"),i||(r?r.length>Hd?l.code="分馆编码长度不能超过32个字符":s&&!uf(r,s)?l.code="分馆编码必须属于四级馆址编码范围内":pf(e,r,n)&&(l.code="分馆编码已存在，请修改"):l.code="请输入分馆编码"),a?a.length>Kd?l.name="分馆名称长度不能超过64个字符":s&&hf(e,a,s,n)&&(l.name="该馆址下已存在同名分馆"):l.name="请输入分馆名称",c.length>Ud&&(l.remark="备注长度不能超过200个字符"),{valid:Object.keys(l).length===0,errors:l}}function Tg(t,e,i){const l={},n=t.collectionId||null,s=t.branchId,r=t.code.trim(),a=t.name.trim(),c=t.remark||"";return t.siteId||(l.siteId="请选择所属馆址"),s||(l.branchId="请选择所属分馆"),i||(r?r.length>Gd?l.code="馆藏地编码长度不能超过32个字符":cf(r)?gf(e,r,n)&&(l.code="馆藏地编码已存在，请修改"):l.code="馆藏地编码必须属于四级馆藏地现有编码":l.code="请输入馆藏地编码"),a?a.length>Wd?l.name="馆藏地名称长度不能超过64个字符":s&&mf(e,a,s,n)&&(l.name="该分馆下已存在同名馆藏地"):l.name="请输入馆藏地名称",c.length>qd&&(l.remark="备注长度不能超过200个字符"),{valid:Object.keys(l).length===0,errors:l}}function Rg(t,e){return t.filter(i=>!(!Ut(i.code,e.code)||!Ut(i.name,e.name)||e.status&&i.status!==e.status))}function Ag(t,e,i){return t.map(l=>tf(l,e)).filter(l=>!(!Ut(l.siteCode,i.siteCode)||!Ut(l.siteName,i.siteName)||!Ut(l.code,i.code)||!Ut(l.name,i.name)||i.status&&l.status!==i.status))}function xg(t,e,i,l){return t.map(n=>ef(n,e,i)).filter(n=>!(!Ut(n.siteCode,l.siteCode)||!Ut(n.siteName,l.siteName)||!Ut(n.branchCode,l.branchCode)||!Ut(n.branchName,l.branchName)||!Ut(n.code,l.code)||!Ut(n.name,l.name)||l.status&&n.status!==l.status))}const Lo=[{id:"inst-1",code:"STLIB",name:"首都图书馆",status:"active"},{id:"inst-2",code:"BJCL",name:"北京城市图书馆",status:"active"}],Mi=[{id:"campus-1",institutionId:"inst-1",code:"HWQ",name:"华威桥馆区",status:"active",siteId:"site-1"},{id:"campus-2",institutionId:"inst-1",code:"DXJC",name:"大兴机场馆区",status:"active",siteId:"site-2"},{id:"campus-3",institutionId:"inst-1",code:"OTHER",name:"其他馆区",status:"active",siteId:"site-4"},{id:"campus-4",institutionId:"inst-2",code:"CITY",name:"城市图书馆馆区",status:"active",siteId:"site-3"}],Bo=Object.fromEntries(Mi.filter(t=>t.siteId).map(t=>[t.siteId,t.id]));function vf(t){return Lo.find(e=>e.id===t)||null}function Li(t){return Mi.find(e=>e.id===t)||null}function Ig(t){var e;return((e=vf(t))==null?void 0:e.name)||""}function wg(t){var e;return((e=Li(t))==null?void 0:e.name)||""}function bf(t,e=ki){const i=Ln(e,t);return i&&Bo[i.siteId]||""}function Eg(t,e=ki){var l;const i=bf(t,e);return((l=Li(i))==null?void 0:l.institutionId)||""}function _f(t,e=[]){var n;const i=(e||[]).find(s=>s.id===t);if(i!=null&&i.institutionId)return i.institutionId;const l=Bo[t];return((n=Li(l))==null?void 0:n.institutionId)||""}function Ng(t,e=[]){const i=new Set((t||[]).filter(Boolean));if(!i.size)return[];const l=Mi.filter(s=>i.has(s.institutionId)&&s.siteId).map(s=>s.siteId),n=(e||[]).filter(s=>i.has(s.institutionId)).map(s=>s.id);return[...new Set([...l,...n])]}function Vo(t){return t?t.code?`${t.code} | ${t.name}`:t.name||"":""}function Pg(t=[]){const e=new Set((t||[]).filter(Boolean));return Lo.filter(i=>i.status==="active"||e.has(i.id)).map(i=>({value:i.id,label:Vo(i),code:i.code,name:i.name}))}function Og(t,e=[]){if(!t)return[];const i=new Set((e||[]).filter(Boolean));return Mi.filter(l=>l.institutionId===t&&(l.status==="active"||i.has(l.id))).map(l=>({value:l.id,label:Vo(l),code:l.code,name:l.name}))}function Dg(t,e=ki,i=[]){if(!t)return[];const l=Li(t);if(!(l!=null&&l.siteId))return[];const n=new Set((i||[]).filter(Boolean));return(e||[]).filter(s=>s.siteId===l.siteId&&(s.status==="active"||n.has(s.id))).map(s=>({value:s.id,label:Vn(s),code:s.code,name:s.name}))}function kg(t,e=[],i=[]){if(!t)return[];const l=new Set((i||[]).filter(Boolean));return(e||[]).filter(n=>n.branchId===t&&(n.status==="active"||l.has(n.id))&&n.code).sort((n,s)=>String(n.code).localeCompare(String(s.code),"zh-CN")).map(n=>({value:n.id,label:n.code?`${n.code} | ${n.name}`:n.name||"",code:n.code,name:n.name}))}function Mg(t,e=ki){if(!t)return[];if(t.branchId){const i=Ln(e,t.branchId),l=String((i==null?void 0:i.code)||"").trim();return l?[l]:[]}if(t.campusId){const i=Li(t.campusId);return i!=null&&i.siteId?(e||[]).filter(l=>l.siteId===i.siteId&&l.status==="active"&&l.code).map(l=>String(l.code).trim()).filter(Boolean):[]}if(t.institutionId){const i=new Set(Mi.filter(l=>l.institutionId===t.institutionId).map(l=>l.siteId));return(e||[]).filter(l=>i.has(l.siteId)&&l.status==="active"&&l.code).map(l=>String(l.code).trim()).filter(Boolean)}return[]}const Ws="orderm_location_data";function hn(t){return(t||[]).map(e=>({...e,institutionId:e.institutionId||_f(e.id,t)||""}))}function Ki(){return{siteRows:hn(Qd.map(t=>({...t}))),branchRows:ki.map(t=>({...t})),collectionRows:Zd.map(t=>({...t}))}}const yf=$l("location",{state:()=>({initialized:!1,siteRows:[],branchRows:[],collectionRows:[]}),getters:{activeSites(t){return ko(t.siteRows)},activeSiteNames(t){return Mo(t.siteRows)},activeSiteFilterOptions(t){return lf(t.siteRows)},activeBranches(t){return Bn(t.branchRows)},activeBranchSelectOptions(t){return sf(t.branchRows)}},actions:{initFromStorage(){if(!this.initialized){try{const t=localStorage.getItem(Ws);if(t){const e=JSON.parse(t);this.siteRows=hn(Array.isArray(e.siteRows)?e.siteRows:Ki().siteRows),this.branchRows=Array.isArray(e.branchRows)?e.branchRows:Ki().branchRows,this.collectionRows=Array.isArray(e.collectionRows)?e.collectionRows:Ki().collectionRows,this.persist()}else this.resetToInitial()}catch{this.resetToInitial()}this.initialized=!0}},ensureInitialized(){this.initialized||this.initFromStorage()},resetToInitial(){const t=Ki();this.siteRows=t.siteRows,this.branchRows=t.branchRows,this.collectionRows=t.collectionRows,this.persist()},persist(){localStorage.setItem(Ws,JSON.stringify({siteRows:this.siteRows,branchRows:this.branchRows,collectionRows:this.collectionRows}))},replaceSiteRows(t){this.siteRows=hn(t),this.persist()},replaceBranchRows(t){this.branchRows=t,this.persist()},replaceCollectionRows(t){this.collectionRows=t,this.persist()}}}),Sf={class:"h-12 bg-slate-900 flex items-center justify-between px-4 shrink-0 z-20"},Cf={class:"flex items-center gap-2"},$f={class:"text-white font-medium text-sm"},Tf={class:"flex items-center gap-3 shrink-0"},Rf={class:"flex items-center gap-1 text-gray-300 text-xs"},Af={class:"text-white"},xf={__name:"AppHeader",setup(t){const e=Al();return(i,l)=>(St(),Lt("header",Sf,[tt("div",Cf,[l[0]||(l[0]=tt("div",{class:"w-7 h-7 bg-sky-500 rounded flex items-center justify-center"},[tt("svg",{class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[tt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})])],-1)),tt("span",$f,ti(Ct(e).config.appName),1)]),tt("div",Tf,[tt("div",Rf,[l[1]||(l[1]=tt("span",null,"当前机构",-1)),tt("span",Af,ti(Ct(e).config.institution),1),l[2]||(l[2]=tt("svg",{class:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[tt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),l[3]||(l[3]=tt("div",{class:"w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center"},[tt("svg",{class:"w-5 h-5 text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[tt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])],-1))])]))}},If={id:"sidebar-wrapper",class:"relative shrink-0 h-full"},wf={class:"flex-1 py-2"},Ef=["onClick"],Nf={__name:"AppSidebar",setup(t){const e=Mn(),i=Al(),l=hl(!1);function n(r){return pn(i.activeRoute)===r}function s(r,a){i.openTab(r,a),e.push(r)}return(r,a)=>{const c=wn("RouterLink");return St(),Lt("div",If,[tt("aside",{id:"sidebar",class:Ie(["h-full bg-slate-800 flex flex-col overflow-y-auto transition-[width] duration-200",l.value?"w-0 overflow-hidden":"w-52"])},[tt("nav",wf,[(St(!0),Lt(Ot,null,Ql(Ct(i).config.sidebar,d=>(St(),Lt("div",{key:d.id,class:"sidebar-group"},[tt("button",{type:"button",class:"sidebar-toggle w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-slate-700 transition-colors",onClick:u=>Ct(i).toggleGroup(d.id)},[tt("span",null,ti(d.label),1),(St(),Lt("svg",{class:Ie(["w-4 h-4 transition-transform",{"rotate-180":Ct(i).isGroupExpanded(d.id,Ct(i).activeRoute)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...a[2]||(a[2]=[tt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,Ef),tt("div",{class:Ie(["sidebar-children overflow-hidden transition-all duration-200",Ct(i).isGroupExpanded(d.id,Ct(i).activeRoute)?"max-h-[500px]":"max-h-0"])},[(St(!0),Lt(Ot,null,Ql(d.children,u=>(St(),ii(c,{key:u.route,to:u.route,class:Ie(["block pl-10 pr-4 py-2 text-sm transition-colors",n(u.route)?"bg-sky-600 text-white":"text-gray-400 hover:text-white hover:bg-slate-700"]),onClick:p=>s(u.route,u.label)},{default:xn(()=>[ao(ti(u.label),1)]),_:2},1032,["to","class","onClick"]))),128))],2)]))),128))]),tt("button",{type:"button",class:"p-3 border-t border-slate-700 text-gray-400 hover:text-white flex justify-center shrink-0",title:"收起菜单",onClick:a[0]||(a[0]=d=>l.value=!0)},[...a[3]||(a[3]=[tt("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[tt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})],-1)])])],2),Pa(tt("button",{type:"button",id:"sidebar-expand",class:"absolute bottom-0 left-0 z-10 w-10 p-3 border-t border-slate-700 bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex justify-center",title:"展开菜单",onClick:a[1]||(a[1]=d=>l.value=!1)},[...a[4]||(a[4]=[tt("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[tt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})],-1)])],512),[[Kc,l.value]])])}}},Pf={id:"page-tab-bar",class:"bg-white border-b border-gray-200 px-4 flex items-center gap-2 h-10 shrink-0 overflow-x-auto"},Of=["onClick"],Df=["onClick"],kf={__name:"TabBar",setup(t){const e=Mn(),i=Al();function l(s){i.switchTab(s),e.push(s)}function n(s){const r=i.activeRoute===s;i.closeTab(s),r&&e.push(i.activeRoute)}return(s,r)=>(St(),Lt("div",Pf,[(St(!0),Lt(Ot,null,Ql(Ct(i).tabs,a=>(St(),Lt("div",{key:a.route,class:Ie(["flex items-center gap-2 border rounded px-3 py-1 text-sm cursor-pointer whitespace-nowrap",a.route===Ct(i).activeRoute?"bg-sky-50 border-sky-200 text-sky-700":"bg-white border-gray-200 text-gray-600 hover:bg-gray-50"]),onClick:c=>l(a.route)},[tt("span",null,ti(a.title),1),Ct(i).tabs.length>1?(St(),Lt("button",{key:0,type:"button",class:"opacity-40 hover:opacity-100 text-xs leading-none",onClick:cu(c=>n(a.route),["stop"])},"×",8,Df)):co("",!0)],10,Of))),128))]))}},Mf={class:"flex flex-col h-screen overflow-hidden"},Lf={class:"flex flex-1 overflow-hidden"},Bf={class:"flex-1 flex flex-col overflow-hidden bg-gray-100"},Vf={class:"flex-1 min-h-0 overflow-hidden"},Ff={class:"h-full min-h-0 overflow-hidden p-4 flex flex-col"},jf={key:0,class:"flex flex-col flex-1 min-h-0 h-full overflow-hidden"},Hf={__name:"AppLayout",setup(t){const e=Md();Mn();const i=Al(),l=Ld(),n=Bd(),s=yf();In(()=>{i.initFromStorage(),l.initFromStorage(),n.initFromStorage(),s.initFromStorage(),r()}),Fe(()=>e.path,()=>r());function r(){const a=e.path,c=e.meta.title||Oo(a);i.openTab(a,c)}return(a,c)=>{const d=wn("RouterView");return St(),Lt("div",Mf,[vt(xf),tt("div",Lf,[vt(Nf),tt("main",Bf,[vt(kf),tt("div",Vf,[tt("div",Ff,[vt(d,null,{default:xn(({Component:u,route:p})=>[u?(St(),Lt("div",jf,[(St(),ii(Ha,{max:20},[(St(),ii(Qa(u),{key:p.fullPath}))],1024))])):co("",!0)]),_:1})])])])])])}}},Kf=[{path:"orders",name:"orders",component:()=>et(()=>import("./OrderManageView-CTqK8dam.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url),meta:{title:"订单管理",module:"order"}},{path:"orders/lines",redirect:{path:"/orders",query:{tab:"order-line"}}},{path:"orders/line/:lineNo?",name:"order-line-detail",component:()=>et(()=>import("./OrderLineDetailView-BxIt3kAd.js"),__vite__mapDeps([29,3,4,5,13,14,15,26,27,9,10,11,12,30,31]),import.meta.url),meta:{title:"订单行详情",module:"order"}},{path:"bib-query",name:"bib-query",component:()=>et(()=>import("./BibQueryView-DQ-KXLip.js"),__vite__mapDeps([32,3,4,5,19,2,13,14,15,33,9,10,11,12,24,8,16,20,18,17,26,27,6,34]),import.meta.url),meta:{title:"书目查询",module:"order"}},{path:"bib-query/new-bib",name:"new-bib",component:()=>et(()=>import("./NewBibView-DYq8FlIk.js"),__vite__mapDeps([35,36]),import.meta.url),meta:{title:"新建书目",module:"order"}},{path:"bib-query/z3950",name:"z3950",component:()=>et(()=>import("./Z3950QueryView-BzmwAuv3.js"),__vite__mapDeps([37,3,4,5,36]),import.meta.url),meta:{title:"查Z3950",module:"order"}}],Uf=[{path:"acceptance",name:"acceptance",component:()=>et(()=>import("./AcceptanceManageView-eutdzN1V.js"),__vite__mapDeps([38,1,2,3,4,5,7,26,27,20,39,9,10,11,12,13,14,15,16,24,40,41,6,42,43,44]),import.meta.url),meta:{title:"验收单管理",module:"acceptance"}},{path:"acceptance/detail/:acceptanceId",name:"acceptance-detail",component:()=>et(()=>import("./AcceptanceDetailView-BjwArwZb.js"),__vite__mapDeps([45,1,2,3,4,5,7,6,41,20,39,9,10,11,12,13,14,15,21,30,26,27,36]),import.meta.url),meta:{title:"验收详情",module:"acceptance"}},{path:"acceptance/delivery-import",redirect:"/acceptance/delivery-import/tasks"},{path:"acceptance/delivery-import/tasks",name:"delivery-import-tasks",component:()=>et(()=>import("./DeliveryImportTaskListView-BkOlh7uv.js"),__vite__mapDeps([46,3,4,5,42,43,47,39,9,10,11,12,13,14,15,6,48]),import.meta.url),meta:{title:"导入任务",module:"acceptance"}},{path:"acceptance/delivery-import/tasks/:id",name:"delivery-import-task-detail",component:()=>et(()=>import("./DeliveryImportTaskDetailView-BV6e8PZi.js"),__vite__mapDeps([49,4,36,42,43,50,6,20,21,39,9,10,11,12,13,14,15,47,51]),import.meta.url),meta:{title:"导入任务详情",module:"acceptance"}},{path:"receive",name:"receive",component:()=>et(()=>import("./ReceiveByItemView-Dn7SBD6f.js"),__vite__mapDeps([52,3,4,5,6,50,21,43,44,26,27,17,39,9,10,11,12,13,14,15,53]),import.meta.url),meta:{title:"逐条收货",module:"acceptance"}},{path:"batch-acceptance",name:"batch-acceptance",component:()=>et(()=>import("./BatchAcceptanceView-C9HVmT8M.js"),__vite__mapDeps([54,1,2,3,4,5,26,27,6,20,39,9,10,11,12,13,14,15,16,40,30]),import.meta.url),meta:{title:"批量验收",module:"acceptance"}},{path:"exchange",name:"exchange",component:()=>et(()=>import("./ExchangeManageView-58tvXw3G.js"),__vite__mapDeps([55,3,4,5,7,2,20,21,17,53]),import.meta.url),meta:{title:"换货管理",module:"acceptance"}},{path:"return",name:"return",component:()=>et(()=>import("./ReturnManageView-BRRxp35B.js"),__vite__mapDeps([56,3,4,5,7,2,17]),import.meta.url),meta:{title:"退货管理",module:"acceptance"}},{path:"shortage",name:"shortage",component:()=>et(()=>import("./ShortageManageView-BQ-ypRB7.js"),__vite__mapDeps([57,23,9,10,11,12,13,14,15,8,16,1,2,3,4,5,7,6,58,20,21,17]),import.meta.url),meta:{title:"催缺管理",module:"acceptance"}},{path:"shortage/detail/:shortageId",name:"shortage-detail",component:()=>et(()=>import("./ShortageDetailView-DiuZcDOM.js"),__vite__mapDeps([59,1,2,3,4,5,6,58,20,21,36,23,9,10,11,12,13,14,15,8,16]),import.meta.url),meta:{title:"催缺详情",module:"acceptance"}}],Gf=[{path:"pending-settlement",name:"pending-settlement",component:()=>et(()=>import("./PendingSettlementView-iA_g7l0q.js"),__vite__mapDeps([60,1,2,3,4,5,20]),import.meta.url),meta:{title:"待结算",module:"settlement"}},{path:"settled",name:"settled",component:()=>et(()=>import("./SettledView-CzK_06jd.js"),__vite__mapDeps([61,1,2,3,4,5,62]),import.meta.url),meta:{title:"已结算",module:"settlement"}},{path:"settled/detail/:settleId",name:"settlement-detail",component:()=>et(()=>import("./SettlementDetailView-BEWVZcfi.js"),__vite__mapDeps([63,36,62]),import.meta.url),meta:{title:"结算详情",module:"settlement"}},{path:"settled/list/:settleId",name:"settlement-list",component:()=>et(()=>import("./SettlementListView-BKKBFSJ6.js"),__vite__mapDeps([64,1,2,3,4,5,7,36,14]),import.meta.url),meta:{title:"结算清单",module:"settlement"}},{path:"settlement-fail",name:"settlement-fail",component:()=>et(()=>import("./FailSettlementView-DvcE2X-d.js"),__vite__mapDeps([65,1,2,3,4,5]),import.meta.url),meta:{title:"结算失败处理",module:"settlement"}}],Wf=[{path:"subscribers",name:"subscribers",component:()=>et(()=>import("./SubscriberListView-BHZrZe5F.js"),__vite__mapDeps([66,1,2,3,4,5,26,27,18,12,20,11]),import.meta.url),meta:{title:"订户列表",module:"subscriber"}},{path:"librarians",name:"librarians",component:()=>et(()=>import("./LibrarianListView-BY33xefF.js"),__vite__mapDeps([67,1,2,3,4,5,26,27,20,11,12]),import.meta.url),meta:{title:"馆员列表",module:"subscriber"}}],qf=[{path:"currency",name:"currency",component:()=>et(()=>import("./CurrencyInfoView-DOGBWfDO.js"),__vite__mapDeps([68,1,2,3,4,5,33,20]),import.meta.url),meta:{title:"货币信息",module:"currency"}}],Yf=[{path:"import-template",name:"import-template",component:()=>et(()=>import("./ImportTemplateConfigView-EtWNOO9p.js"),__vite__mapDeps([69,1,2,3,4,5,18,70,25,10,11,12,20,26,27]),import.meta.url),meta:{title:"订单导入模板配置",module:"import-template"}}],zf=[{path:"shortage-config",name:"shortage-config",component:()=>et(()=>import("./ShortageConfigView-Bq5poFxW.js"),__vite__mapDeps([71,1,2,3,4,5,26,27,18,17,9,10,11,12]),import.meta.url),meta:{title:"催缺配置",module:"shortage-config"}}],Xf=[{path:"barcode-supplier",name:"barcode-supplier",component:()=>et(()=>import("./BarcodeSupplierView-By23tD7y.js"),__vite__mapDeps([72,1,2,3,4,5,22,70,20]),import.meta.url),meta:{title:"条码号供应商代码",module:"barcode-supplier"}}],Jf=[{path:"barcode-rule",name:"barcode-rule",component:()=>et(()=>import("./BarcodeRuleView-JY2V5BeA.js"),__vite__mapDeps([73,1,2,3,4,5,26,27,22,70,12,20]),import.meta.url),meta:{title:"条码校验规则",module:"barcode-rule"}}],Qf=[{path:"marc-mapping",name:"marc-mapping",component:()=>et(()=>import("./MarcMappingView-gH0TKapL.js"),__vite__mapDeps([74,1,2,3,4,5,15]),import.meta.url),meta:{title:"订单与MARC类型映射关系",module:"marc-mapping"}}],Zf=[{path:"locations",name:"locations",component:()=>et(()=>import("./LocationManageView-HH_l5Ref.js"),__vite__mapDeps([75,1,2,3,4,5,70,11,12,26,27,10]),import.meta.url),meta:{title:"馆址管理",module:"location"}}],Fo=kd({history:pd(),routes:[{path:"/",component:Hf,redirect:"/orders",children:[...Kf,...Uf,...Gf,...Wf,...qf,...Yf,...zf,...Xf,...Jf,...Qf,...Zf,{path:"reason-params",name:"reason-params",component:()=>et(()=>import("./ReasonParamsView-DdKpT7fS.js"),__vite__mapDeps([76,1,2,3,4,5]),import.meta.url),meta:{title:"退换撤订原因参数"}},{path:"placeholder/:slug",name:"placeholder",component:()=>et(()=>import("./PlaceholderView-BVJwbe_X.js"),[],import.meta.url),meta:{title:"待迁移"}}]}]});Fo.beforeEach((t,e,i)=>{document.title=`${t.meta.title||"页面"} - 图书馆采选订单管理系统`,i()});function tp(t,e){return`<div class="prd-spec-header"><div class="prd-spec-header-title">[${t}] ${e}</div></div>`}function o(t,e){return`<p class="prd-spec-section-title">${e}</p>`}function ot(t){return`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${t};margin-right:6px;"></span>`}function B(t,e){const i=t.map(n=>`<th>${n}</th>`).join(""),l=e.map(n=>`<tr>${n.map(s=>`<td>${s}</td>`).join("")}</tr>`).join("");return`<table class="prd-spec-table"><thead><tr>${i}</tr></thead><tbody>${l}</tbody></table>`}function E(t,e,i){return`${tp(t,e)}${i}`}const ep=E("5.2.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>提供多维度组合检索条件，帮助用户快速定位目标订单。支持展开/收起：默认显示首行 3 列检索项，展开后显示全部条件。</p>
${o("","页面要素")}
<ul>
<li><strong>默认显示</strong>：订单号（文本）、采选方式（下拉）、供应商（下拉）</li>
<li><strong>展开后追加</strong>：发订人、订单状态、结算状态、订户、语种、发订时间（日期范围）、预算名称、资源类型、馆址</li>
<li><strong>操作按钮</strong>：「检索」触发过滤；「重置」清空条件并恢复全量列表</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>订单状态下拉选项：全部、待导入、待发订、已发订、处理中、已撤订、已完成</li>
<li>结算状态下拉：全部、未结算、已结算</li>
<li>语种下拉：全部、中文、外文；资源类型：全部、纸质书、视听资料</li>
<li>发订时间范围：左闭右闭，按日期（yyyy-MM-dd）比对订单 issueTime 字段</li>
<li>不同字段之间为 <strong>AND</strong> 关系；文本字段支持模糊包含匹配</li>
<li>检索后分页重置为第 1 页</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配数据时表格展示空列表，分页显示 0 条</li>
</ul>
</div>`),ip=E("5.2.5.2","数据表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>以表格形式展示订单列表，支持分页、行勾选及按订单状态动态显示操作按钮。</p>
${o("","表格列")}
<p>复选框列（始终固定列首最左）、序号、订户、馆址、订单号、采选方式、资源类型、语种、供应商、订单时间、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订户、馆址、订单号；列尾 — 操作。列展示自定义规则见 <strong>5.2.5.9</strong>。</p>
${o("","交互逻辑")}
<ul>
<li>订单号列：蓝色文字链，点击切换至「订单行列表」页签并带入订单号筛选</li>
<li>发订备注：有内容时显示蓝色「查看」（悬浮 title 展示全文）；无内容时灰色「查看」</li>
<li>列较多时表格可横向滚动；纵向滚动时表头吸顶；固定列横向滚动时不透出底层字段</li>
<li>勾选合法待发订订单后工具栏「发订」可用；勾选后工具栏「撤订」可用</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.2.5.9）</li>
<li>订单状态带颜色标识：${ot("#7c3aed")}待导入、${ot("#d97706")}待发订、${ot("#16a34a")}已发订、${ot("#2563eb")}处理中、${ot("#6b7280")}已撤订</li>
<li>分页：默认 10 条/页，底部显示总条数与页码切换</li>
</ul>
</div>
<div id="rules">
${o("","操作按钮规则（按订单状态）")}
${B(["订单状态","可用操作"],[["待发订 pending","发订、删除"],["待导入 pendingImport","导入订单"],["已发订 ordered","编辑、导出订单、撤订"],["处理中 processing","导出订单"],["已撤订 cancelled","导出订单、删除"]])}
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>导出订单（单行）：原型阶段 alert 提示演示</li>
</ul>
</div>`),lp=E("5.2.5.3","新建订单弹窗",`
<div id="overview">
${o("","功能描述")}
<p>通过工具栏「新建订单」按钮打开模态弹窗，填写订单头信息后创建新订单，初始状态为<strong>待导入</strong>。</p>
${o("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 订户、资源类型、采选方式、预算名称、语种、供应商、馆址（均为下拉，必填）</li>
<li>折扣（文本，非必填）</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>提交前校验全部必填项，未填时在字段下方显示红色提示并 alert 首条错误</li>
<li>新建成功后订单号自动生成，格式 PG001B{yyyyMMdd}{3位流水}</li>
<li>新建订单默认：发订册数/种数 0，码洋/实洋 0.00，结算状态「未结算」，发订时间为空</li>
<li>馆址选项来源于系统馆址配置（仅启用状态）</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>必填项未填：阻止提交，提示「请选择{字段名}」</li>
</ul>
</div>`),np=E("5.2.5.4","编辑订单弹窗",`
<div id="overview">
${o("","功能描述")}
<p>已发订订单可通过操作列「编辑」打开弹窗，修改预算名称、供应商、发订备注。</p>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>预算名称、供应商为必填下拉</li>
<li>发订备注为多行文本，非必填</li>
<li>保存后更新列表对应行（原型 alert「订单已保存」）</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>预算或供应商未选：alert 提示对应字段</li>
</ul>
</div>`),sp=E("5.2.5.5","发订",`
<div id="overview">
${o("","功能描述")}
<p>待发订订单可通过操作列「发订」或工具栏「发订」（勾选后批量）打开共用发订备注弹窗；确认后将订单及下属待发订订单行置为已发订。批量逐单提交，某一单失败不回滚已成功单。</p>
</div>
<div id="rules">
${o("","入口")}
<ul>
<li><strong>工具栏「发订」</strong>：位于「新建订单」右侧、「撤订」左侧</li>
<li><strong>操作列「发订」</strong>：仅待发订订单显示（现状）</li>
</ul>
${o("","工具栏启用条件（须全部满足，否则置灰）")}
<ul>
<li>至少勾选 1 条订单</li>
<li>勾选订单状态均为<strong>待发订（pending）</strong></li>
<li>每一个勾选订单下至少有 1 条行状态为「待发订」的订单行</li>
</ul>
${o("","业务规则")}
<ul>
<li>仅 <strong>待发订（pending）</strong> 状态订单可发订</li>
<li>订单下须至少有 1 条「待发订」订单行；否则不可发订（单笔点击 alert，批量按钮置灰）</li>
<li>发订后：订单状态 → 已发订；记录发订时间、发订人、发订备注</li>
<li>该订单下所有「待发订」订单行同步变为「已发订」，写入发订时间</li>
<li>发订备注弹窗：多行文本，可为空；标题「请填写发订备注：」；批量一次填写，同一备注写入每个<strong>成功</strong>发订的订单</li>
<li>批量按当前筛选列表自上而下顺序逐单发订；某一单失败不回滚已成功单，继续后续；成功后清空勾选并刷新列表</li>
</ul>
${o("","批量结果提示")}
<ul>
<li>全部成功：如「已发订 N 个订单」</li>
<li>部分成功：如「成功 N 个，失败 M 个：{订单号}（原因）；…」</li>
<li>全部失败：列出失败订单号与原因</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>非待发订订单发订：alert「仅待发订状态的订单可发订」</li>
<li>无待发订订单行（单笔）：alert「订单下无待发订订单行，无法发订」</li>
<li>提交时订单已变（并发）：该单记入失败明细，不中断整批</li>
</ul>
</div>`),rp=E("5.2.5.6","导入订单",`
<div id="overview">
${o("","功能描述")}
<p>待导入订单通过「导入订单」打开三步向导弹窗：选择模板并上传 → 查看解析结果 → 点「下一步」自动入库。</p>
${o("","步骤说明")}
<ol>
<li><strong>选择模板并上传</strong>：按订单资源类型/语种/供应商匹配可用导入模板；支持 xls/xlsx；可下载模板</li>
<li><strong>解析结果</strong>：展示总条数、成功/失败数；可下载解析结果；解析全部成功才可点「下一步」</li>
<li><strong>入库</strong>：第 2 步点「下一步」后进入本步并自动入库（显示 loading），成功后展示「入库成功」，订单状态变为待发订并写入订单行；本步不再单独点「入库」</li>
</ol>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>模板列表按当前订单属性从「导入模板管理」模块过滤</li>
<li>仅 1 个可用模板时自动选中</li>
<li>上传前校验：必须选择模板且已选文件</li>
<li>解析存在失败行时「下一步」按钮置灰</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配模板：提示「暂无与当前订单匹配的导入模板」</li>
<li>未选模板或文件：上传区显示红色校验信息</li>
<li>入库失败：展示「入库失败，请联系管理员」</li>
</ul>
</div>`),op=E("5.2.5.7","撤订与删除",`
<div id="overview">
${o("","功能描述")}
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」）、待发订/已撤订订单删除。</p>
</div>
<div id="rules">
${o("","撤订规则")}
<ul>
<li>撤订前弹出「请选择撤订原因」弹窗，原因来源于「设置 - 退换撤订原因参数」</li>
<li>订单撤订：订单状态 → 已撤订；其下所有订单行状态 → 已撤订，写入撤订原因至备注</li>
<li>批量撤订需先勾选订单，未勾选 alert「请先勾选要撤订的订单」</li>
</ul>
${o("","删除规则")}
<ul>
<li>仅<strong>待发订</strong>或<strong>已撤订</strong>订单可删除</li>
<li>删除前二次确认弹窗展示订单号</li>
<li>删除后移除订单及其全部订单行</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>未选择撤订原因：alert「请选择撤订原因」</li>
<li>无可用撤订原因：下拉为空并提示前往设置配置</li>
</ul>
</div>`),ap=E("5.2.5.8","批量导出",`
<div id="overview">
${o("","功能描述")}
<p>工具栏「批量导出」下拉提供「导出配置」「导出订单」。导出配置弹窗支持全选/取消及字段勾选。</p>
</div>
<div id="rules">
${o("","可导出字段")}
<p>订户、馆址、订单号、采选方式、资源类型、语种、供应商、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态</p>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>「导出订单」：原型阶段 alert 演示</li>
</ul>
</div>`),cp=E("5.2.5.9","列展示配置",`
<div id="overview">
${o("","功能描述")}
<p>工具栏右侧齿轮按钮打开「列展示」面板，支持列显隐、分区内拖拽排序、固定在列首或列尾；配置即时生效并持久化至浏览器本地。</p>
${o("","页面要素")}
<ul>
<li><strong>入口</strong>：工具栏最右侧齿轮图标，悬浮提示「列展示」</li>
<li><strong>面板顶栏</strong>：「列展示」全选复选框 + 「重置」按钮</li>
<li><strong>三区列表</strong>（自上而下）：固定在列首 → 不固定 → 固定在列尾</li>
<li><strong>列项行</strong>：拖拽手柄、显隐复选框、列名；悬停显示固定操作图标</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点击齿轮：打开/关闭面板；点击面板外区域关闭</li>
<li>顶栏复选框：全选/取消全部业务列；部分选中时为半选态</li>
<li>拖拽排序：仅在同一分区内调整顺序，不可跨区拖动</li>
<li><strong>固定操作</strong>（悬停列项时，随当前状态变化）：
<ul>
<li>不固定 → 可「固定在列首」或「固定在列尾」</li>
<li>列首固定 → 可「固定在列尾」或「不固定」</li>
<li>列尾固定 → 可「固定在列首」或「不固定」</li>
</ul></li>
<li>「重置」：恢复默认列顺序、固定位置及全部列可见</li>
</ul>
</div>
<div id="rules">
${o("","默认固定位置")}
${B(["固定位置","默认列"],[["列首固定","序号、订户、馆址、订单号"],["列尾固定","操作"]])}
${o("","业务规则")}
<ul>
<li>复选框列<strong>不参与</strong>列展示配置，始终显示且始终固定于列首最左侧</li>
<li>横向滚动时列首/列尾固定列保持可见，表头与表体同步固定，背景不透明</li>
<li>纵向滚动时表头吸顶</li>
<li>本地存储异常时自动回退默认配置</li>
</ul>
</div>`),up=E("5.3.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>支持基础条件 + 组合条件检索订单行，默认显示订单号、订单行号、行状态（多选）。</p>
${o("","页面要素")}
<ul>
<li><strong>默认行（收起可见）</strong>：订单号、订单行号、行状态（多选：待发订/已发订/处理中/已关闭；未选不过滤）</li>
<li><strong>展开后</strong>：组合条件（资源标识/正题名/作者/出版社 + 且/或逻辑链）、载体、验收状态、结算状态、是否催缺、书目记录号、馆址、<strong>馆藏重复</strong>、供应商（多选）、预算（多选）、<strong>订单重复</strong>、<strong>定价</strong>（位于订单重复之后）</li>
<li><strong>馆藏重复 / 订单重复</strong>：下拉选框，选项 <strong>全部 / 有 / 无</strong>，默认 <strong>全部</strong></li>
<li><strong>定价</strong>：下限 / 上限数字输入（可只填一端）</li>
<li>从订单列表点击订单号跳转时，自动带入订单号筛选</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>组合条件：同一链条内按 logicAfter（且/或）串联；字段值为空则跳过该条件</li>
<li>文本匹配为包含关系（includes）</li>
<li>验收状态「待验收」匹配行 acceptanceStatus 为「待验收」</li>
<li><strong>行状态 / 供应商 / 预算</strong>：未选不过滤；多选按「或」命中</li>
<li><strong>定价</strong>：对 price 数值闭区间比较（不区分币种）；只填下限为 ≥，只填上限为 ≤；下限大于上限时提示并不检索</li>
<li><strong>馆藏重复 / 订单重复</strong>：选「有」仅显示标识为有的行（holdingDuplicate / orderDuplicate 为 true；馆藏列文案可为「有（本馆/全市）」，筛选不解析括号数字）；选「无」仅显示标识为无的行；未查重（空白）不匹配「有」或「无」；两条件可同时使用（AND）</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<p>无匹配数据时展示空表格。定价下限大于上限时提示「定价下限不能大于上限」，不发起检索。</p>
</div>`),dp=E("5.3.5.2","数据表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>展示订单行明细，含序号列、馆藏/订单查重标识列及行级操作入口。</p>
${o("","主要列")}
<p>复选框列、序号、订单号、馆址、订单行号、书目记录号、正题名、资源标识、载体、作者、出版社、出版时间、分卷号、分卷名、定价、币种、套内册数、套数、行状态、验收状态、结算状态、是否催缺、发/收/换/退/撤订、发订时间、馆藏重复、订单重复、备注、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订单号、馆址、订单行号；列尾 — 操作。列展示规则见 <strong>5.3.5.11</strong>。</p>
${o("","书目记录号列")}
<ul>
<li>展示<strong>书目记录号</strong>（<code>bibRecordNo</code>）</li>
<li>若<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值）非空，且其中至少有一条与书目记录号不一致，则在旁显示「<strong>实</strong>」浅蓝徽章；规则详见 <strong>5.3.5.10</strong></li>
<li>悬停「实」：浮层逐条列出全部非空实际关联书目记录号，每条为可点击链接</li>
<li>若实际关联书目记录号为空，或全部与书目记录号相同，则不显示「实」标记</li>
</ul>
${o("","交互")}
<ul>
<li>订单行号：链接跳转订单行详情页 #/orders/line/{orderLineNo}</li>
<li>备注：有备注显示蓝色「查看」，否则「—」</li>
<li>列较多时可横向滚动；表头纵向吸顶；固定列不透底</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.3.5.11）</li>
<li>操作列：查重（条件显示）、编辑、撤订（<strong>不含详情按钮</strong>；详情通过订单行号列跳转）</li>
</ul>
</div>
<div id="rules">
${o("","分页")}
<p>默认 <strong>50</strong> 条/页，可选 <strong>50 / 100 / 200</strong> 条/页；底部显示总条数与页码切换；检索后分页重置为第 1 页。</p>
</div>`),fp=E("5.3.5.3","生成催缺单",`
<div id="overview">
${o("","功能描述")}
<p>对勾选的订单行批量生成催缺单：按订单号（orderId）分组，自动过滤验收状态不允许催缺的行，生成成功后将对应订单行是否催缺（isShortage）更新为「是」，并提示是否立即查看催缺模块。</p>
${o("","页面要素")}
<ul>
<li><strong>生成催缺单按钮</strong>：订单行列表工具栏（与「更换供应商」「查重」「撤订」相邻）</li>
<li><strong>成功确认弹窗</strong>：文案「催缺单生成成功，已自动过滤已收货书目」「是否立即查看？」；按钮：取消 / 确定</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ol>
<li>未满足启用条件时按钮置灰不可用</li>
<li>点击后按订单号分组生成催缺单，写入催缺管理列表</li>
<li>对本次实际纳入生成的订单行，将是否催缺（isShortage）更新为「是」</li>
<li>弹出成功确认框：取消关闭；确定则跳转至催缺单管理列表（不进入催缺详情）</li>
</ol>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li><strong>启用条件</strong>：至少勾选 1 行；行状态（lineStatus）均为「已发订」或「处理中」；验收状态（acceptanceStatus）均允许催缺</li>
<li><strong>允许催缺的验收状态</strong>：验收状态非空，且不为「收货完成」「已退货」（如待验收、部分收货、换货中等可参与）</li>
<li><strong>催缺套数</strong>：催缺单中每条订单行的催缺套数（shortageSets）= max(0, 发订套数 − 收货套数 − 退货套数)，取自该行发/收/换/退/撤订（flowStats）；催缺套数为 0 的行不纳入催缺单</li>
<li><strong>分组</strong>：按订单号（orderId）分组，每组一张催缺单；催缺单套数合计为组内各行催缺套数之和</li>
<li><strong>过滤</strong>：生成时再次按验收状态与催缺套数过滤；若过滤后无可生成行，则提示无法生成</li>
<li><strong>是否催缺</strong>：生成成功后，纳入催缺的订单行是否催缺（isShortage）=「是」</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>未勾选或不满足启用条件：按钮置灰</li>
<li>过滤后均不可生成：提示「所选订单行均已收货或已退货，无法生成催缺单」</li>
</ul>
</div>`),pp=E("5.3.5.4","查重操作入口",`
<div id="overview">
${o("","功能描述")}
<p>提供批量查重与单行查重两种操作入口，触发后弹出查重配置弹窗（见 5.3.5.5）。</p>
${o("","批量查重按钮")}
<ul>
<li>位置：订单行列表工具栏（与「生成催缺单」「更换供应商」「撤订」「导出订单行」相邻），文案「查重」</li>
<li>默认状态：置灰不可用</li>
<li>启用条件：同时满足以下条件时按钮高亮可点击：
<ol>
<li>至少勾选一条订单行</li>
<li>所勾选订单行数量<strong>不超过 50 条</strong></li>
<li>所勾选订单行均为<strong>待发订</strong>（以行状态为准）</li>
<li>所勾选订单行属于<strong>相同资源类型</strong>（以订单行上的资源类型为准：纸质书 / 视听资料）</li>
<li>所勾选订单行属于<strong>相同语种分类</strong>（以订单行上的语种为准：中文 / 外文）</li>
</ol></li>
<li>点击后：打开查重配置弹窗；弹窗内查重字段选项按勾选首行确定（优先取行上资源类型/语种，若为空则回落所属订单抬头）</li>
</ul>
${o("","单个查重文字链")}
<ul>
<li>位置：订单行列表操作列</li>
<li>显示条件：仅当该行行状态为<strong>待发订</strong>时显示</li>
<li>非待发订行：不显示查重文字链</li>
<li>点击后：以当前行为查重对象，打开查重配置弹窗（不受批量条数上限约束）</li>
</ul>
</div>
<div id="rules">
${o("","订单行状态（是否可查重）")}
${B(["状态","说明","是否可查重"],[[`${ot("#d97706")}待发订`,"订单/行尚未发订","是"],[`${ot("#16a34a")}已发订`,"已发订","否"],[`${ot("#2563eb")}处理中`,"处理中","否"],[`${ot("#6b7280")}已关闭`,"已关闭","否"],[`${ot("#6b7280")}已撤订`,"已撤订","否"]])}
${o("","批量查重按钮状态")}
${B(["状态","说明"],[["不可用（置灰）","未勾选行，或勾选超过 50 条，或不满足待发订 / 同资源类型 / 同语种条件"],["可用（高亮）","勾选行均满足批量查重全部启用条件"]])}
${o("","业务规则")}
<ul>
<li>仅当订单行行状态为待发订时可查重（不以所属订单状态放宽）</li>
<li>若批量勾选数量大于 50 条，则批量「查重」按钮置灰，不可打开查重配置</li>
<li>若批量勾选行的资源类型或语种分类不一致，则批量「查重」按钮置灰</li>
<li>单行查重不受批量勾选数量与「同资源类型 / 同语种」限制，但目标行须行状态为待发订</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已登录，且具备订单行列表查看权限</li>
<li><strong>后置</strong>：查重配置弹窗打开</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>若勾选超过 50 条仍触发批量查重，则提示「批量查重最多支持 50 条订单行」，不打开配置弹窗</li>
<li>若勾选含非待发订行仍触发批量查重，则提示「仅支持行状态为待发订的订单行进行查重」</li>
<li>若勾选不同资源类型或不同语种（中文/外文）混合仍触发批量查重，则提示「请勾选相同资源类型和语种（中文/外文）的待发订订单行进行查重」</li>
</ul>
</div>`),hp=E("5.3.5.5","查重配置弹窗",`
<div id="overview">
${o("","功能描述")}
<p>点击查重入口后弹出查重配置弹窗，用户选择重复类型与查重字段后执行查重。<strong>仅馆藏查重</strong>使用当前馆员关联订户在订户列表「编辑 → 查重配置 → 查重范围」中的合并结果（见 5.9）检索有无馆藏单件；<strong>订单查重不使用查重范围</strong>，仍按当前馆员关联订户下的订单行比对。弹窗内不再选择范围。</p>
${o("","页面要素")}
<ul>
<li><strong>显示样式</strong>：居中模态弹窗，标题「查重」；底部按钮：「取消」「确定」；点击遮罩或右上角 × 关闭弹窗</li>
<li><strong>重复类型</strong>：单选，默认「<strong>不限</strong>」
<ul>
<li><strong>不限</strong>：同时执行馆藏查重与订单查重</li>
<li><strong>订单查重</strong>：仅检查与其他订单行的重复（按关联订户，不带查重范围）</li>
<li><strong>馆藏查重</strong>：仅检查与馆藏书目的重复（按查重范围检索馆藏单件）</li>
</ul></li>
<li><strong>查重字段</strong>：按待查重订单行所属订单的<strong>资源类型</strong>与<strong>语种分类</strong>展示可选字段；顶部「<strong>全部</strong>」复选框联动全选/全不选；任一字段变更时同步「全部」勾选状态。</li>
</ul>
${B(["资源类型","语种分类","可选查重字段","默认选中"],[["纸质书","中文","全部、题名、资源标识、作者、出版社、出版年","资源标识"],["纸质书","外文","全部、题名、资源标识、作者、出版社、出版年","资源标识"],["视听资料","中文","全部、题名、载体","题名、载体（默认全选）"],["视听资料","外文","全部、商品条码、目录号","商品条码、目录号（默认全选）"]])}
<ul>
<li><strong>查重范围</strong>：弹窗内<strong>不展示</strong>。当重复类型为「不限」或「馆藏查重」时，提交携带按馆员关联订户顺序合并的所属分馆编码（branchCodes）与所属馆藏地编码（collectionCodes）（由各订户「查重配置 → 查重范围」解析；皆空表示不限）（规则见 5.9.5.3），用于馆藏单件检索。「订单查重」不带入范围。</li>
<li><strong>本馆 / 全市统计传参</strong>（仅馆藏查重）：若查重范围皆空，则传关联订户「所属组织 → 所属机构」下展开的<strong>所属馆合集</strong>；若查重范围非空，则传查重范围（<strong>馆藏地合集非空时以馆藏地为准</strong>，否则传分馆）。接口返回本馆/全市单件数。</li>
<li><strong>单件页签优先序</strong>：关联订户「所属组织 → 所属机构」合集仅用于结果「单件」页签<strong>一级馆藏树与单件列表</strong>优先排序（见 5.3.5.6）。</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>若勾选「全部」，则选中全部字段；若取消「全部」，则全部取消；若字段勾选状态变化，则同步「全部」勾选状态</li>
<li>若未选择任何查重字段，则点击「确定」阻止提交，并提示「请至少选择一个查重字段」</li>
<li>若已选查重字段在任一待查重订单行上为空，则点击「确定」阻止提交，并提示存在空字段的订单行号与字段名（请取消勾选空字段或补全数据后再查重）</li>
<li>点击「确定」：按钮进入<strong>加载中</strong>（「查重中...」+ 加载图标）；<strong>加载期间防抖</strong>，禁止重复点击，同时禁用取消、关闭及表单选项</li>
<li>查重完成后<strong>自动关闭弹窗</strong>，刷新列表馆藏重复（holdingDuplicate、holdingLocalItemCount、holdingCityItemCount）、订单重复（orderDuplicate）标识列；若本轮含馆藏查重，则按自动关联规则同步更新书目记录号（bibRecordNo）（见 5.3.5.6）</li>
<li>点击「取消」或关闭：不执行查重（加载中不可关闭）</li>
</ul>
${o("","业务规则")}
<ul>
<li>所选字段采用 <strong>AND（且）</strong> 逻辑：若全部已选字段的值均非空且相等，则判定为重复</li>
<li>若比对字段为资源标识，则忽略大小写及连字符（<code>-</code>）</li>
<li>其他字段比对时忽略大小写</li>
<li>馆藏查重范围来自订户「编辑 → 查重配置 → 查重范围」合并，<strong>仅馆藏查重</strong>用于检索有无馆藏单件；合并结果为空视为不限</li>
<li>订单查重<strong>不使用</strong>查重范围，按当前馆员关联订户下的订单行比对</li>
<li><strong>本馆 / 全市传参</strong>：查重范围空 → 所属机构下所属馆合集；查重范围非空 → 查重范围分馆/馆藏地（馆藏地优先）；单件显示范围不参与传参</li>
<li><strong>单件页签排序</strong>：所属机构合集仅影响一级树与单件列表优先序（见 5.3.5.6）</li>
<li>馆藏查重完成后写回：本馆单件数（holdingLocalItemCount）、全市单件数（holdingCityItemCount）、馆藏重复（holdingDuplicate，本馆 &gt; 0 为 true）</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已通过查重操作入口进入弹窗</li>
<li><strong>后置</strong>：执行查重并更新列表标识（及可能的书目记录号），或取消关闭弹窗</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>未选择任何查重字段：阻止提交，提示「请至少选择一个查重字段」</li>
<li>已选查重字段在待查重订单行中存在空值：阻止提交，提示空字段所在订单行号与字段名</li>
<li>查重请求失败：提示「查重失败，请稍后重试」，弹窗保持打开，恢复可编辑与可关闭状态</li>
</ul>
</div>`),gp=E("5.3.5.6","查重结果展示",`
<div id="overview">
${o("","功能描述")}
<p>查重完成后，在订单行列表展示重复标识；用户可点击馆藏重复文字链（全市单件数非 0）或订单重复「有」查看详细查重结果。</p>
${o("","列表重复标识列")}
<p>列表包含两列：<strong>馆藏重复</strong>（holdingDuplicate + holdingLocalItemCount / holdingCityItemCount）、<strong>订单重复</strong>（orderDuplicate）。</p>
${B(["状态","馆藏重复显示","可否打开面板"],[["未查重","空白","否"],["本馆 &gt; 0","蓝色文字链「有（本馆/全市）」","是"],["本馆 = 0 且全市 &gt; 0","蓝色文字链「无（本馆/全市）」","是"],["本馆 = 0 且全市 = 0","纯文本「无（0/0）」","否"]])}
<ul>
<li><strong>本馆单件数</strong>：按馆藏查重<strong>本馆/全市传参口径</strong>统计（查重范围空 → 所属机构下所属馆合集；非空 → 查重范围分馆/馆藏地，馆藏地优先）</li>
<li><strong>有 / 无</strong>：仅按本馆单件数判定；废除「匹配到书目即有」</li>
<li><strong>筛选</strong>：仍全部 / 有 / 无，只认 holdingDuplicate</li>
<li><strong>订单重复</strong>：仍为「有 / 无」文字链，不变</li>
</ul>
${o("","查重结果面板（顶部下拉）")}
<ul>
<li>从页面<strong>顶部向下滑出</strong>，全宽展示；默认高度约视口 <strong>75%</strong>；「MARC信息」「单件」约 <strong>88%</strong></li>
<li>面板结构：标题栏 → 摘要信息区 → 页签栏 → 结果内容区（可滚动）→ 分页栏（书目/订单有数据时；MARC / 单件不占位）</li>
<li>标题：统一为「<strong>查重结果</strong>」</li>
<li>摘要区一行：订单行号、查重字段、<strong>重复记录数：馆藏 M · 订单 N</strong></li>
<li>页签顺序：书目 → MARC信息 → 单件 → <strong>订单</strong>（文案固定，不带数量）</li>
<li>入口：馆藏重复可点文字链默认「书目」；订单重复「有」默认「订单」；打开后可自由切换</li>
<li>点击遮罩或右上角 × 关闭面板</li>
</ul>
${o("","馆藏：本馆有/无单件")}
${B(["维度","本馆 &gt; 0","本馆 = 0 且全市 &gt; 0","本馆 = 全市 = 0"],[["列表「馆藏重复」","有（本馆/全市）可点","无（本馆/全市）可点","无（0/0）不可点"],["书目「单件数量（本馆/全市）」","本馆/全市","0/全市","0/0"],["单件页签","全市单件 + 馆藏树","全市单件 + 馆藏树","暂无馆藏分布 / 暂无单件信息"]])}
<p><strong>单件数量</strong>为 <code>localItemCount/cityItemCount</code>。全市为该书目全部关联单件。「未关联馆藏地」挂载规则不变。</p>
${o("","书目页签")}
<ul>
<li>列顺序：<strong>单选</strong> → <strong>书目记录号</strong> → <strong>单件数量（本馆/全市）</strong>（单元格为 <code>本馆/全市</code>，如 <code>10/50</code>）→ 其余书目字段 → <strong>操作</strong></li>
<li>单选：默认选中当前页第一条；MARC / 单件始终展示当前单选书目</li>
<li>书目字段随资源类型 + 语种动态切换；统一列名「题名」（不再用「正题名」）；题名后固定含分卷号、分卷名（空值「—」）；<strong>不展示副题名</strong></li>
<li>操作：「关联」/「取消关联」</li>
</ul>
${B(["资源类型","语种","展示字段"],[["纸质书","中文","书目记录号、题名、分卷号、分卷名、ISBN、作者、出版社、出版年、版本"],["纸质书","外文","书目记录号、题名、分卷号、分卷名、ISBN、责任者、出版社、出版日期、语种"],["视听资料","中文","书目记录号、题名、分卷号、分卷名、载体、ISBN/ISRC、出版社、版本/格式、著者"],["视听资料","外文","书目记录号、ISRC、题名、分卷号、分卷名、载体、商品条码、目录号、出版方"]])}
${o("","MARC信息页签")}
<ul>
<li>左右分栏（默认各 50%，可拖拽，左侧约 20%–80%）：左订单行信息（表格列：字段名、字段内容），右当前单选书目 MARC</li>
<li>MARC <strong>不做语种过滤</strong>：接口返回哪些字段即展示哪些；无底部分页栏</li>
</ul>
${o("","单件页签")}
<ul>
<li>左右分栏：左侧馆藏树<strong>固定 20%</strong>（不可拖拽）；右单件列表；展示<strong>全市</strong>单件</li>
<li>一～三级点击仅展开/收起；四级叶子筛选右侧列表</li>
<li>列序：馆藏状态、条码号、所属馆、所属馆藏地、<strong>借阅次数</strong>、卷册描述、单件价格、借阅类型、装帧、索书号、排架标引分类、排架标引（删除所在馆、所在馆藏地、登到时间）</li>
<li><strong>借阅次数</strong>：外部接口；中台约每月更新；空值「—」</li>
<li><strong>单件显示范围</strong>：关联订户「查重配置 → 单件显示范围」分馆/馆藏地合集（去重保序）。皆空=不限；馆藏地合集非空时只按馆藏地过滤且未关联不展示；仅分馆合集时按所属馆分馆过滤。先筛单件再裁剪馆藏树；<strong>一级「未关联馆藏地」仅显示范围全空时可能出现</strong></li>
<li><strong>机构优先合集</strong>：关联订户「所属组织 → 所属机构」去重保序，仅用于一级树与单件列表优先</li>
<li><strong>馆藏树排序</strong>：仅一级按机构优先；二～四级不做机构类优先；同级按节点编码（code）字母+数字升序；一级「未关联馆藏地」置末；取消「首都图书馆」特殊置顶</li>
<li><strong>单件列表排序</strong>：按机构优先；同机构内再按所属馆 code、馆藏地 code 升序</li>
<li><strong>默认展开</strong>：排序后仅第一个一级节点默认展开，其余一级默认收起；切换书目重新套用</li>
</ul>
${o("","订单页签")}
<ul>
<li>列表上方统计栏：发订数量、收货数量、换货数量、退货数量、撤订数量</li>
<li>表格字段：订单行号、馆址、正题名、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、发订时间</li>
<li>默认 50 条/页，可选 50 / 100 / 200；无操作列</li>
</ul>
${o("","交互与分页")}
<ul>
<li>书目页签：默认 5 条/页，可选 5 / 10 / 20 / 50；有结果时展示分页栏</li>
<li>订单页签：默认 50 条/页，可选 50 / 100 / 200；有结果时展示分页栏</li>
<li>MARC / 单件不展示分页栏</li>
<li>书目 / 订单无数据时仅展示「暂无查重结果」，<strong>不展示</strong>分页栏</li>
<li>打开面板时按入口重置默认页签与对应分页</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>馆藏重复全市 ≠ 0 时可打开面板（默认书目）；无（0/0）与未查重不响应</li>
<li>订单重复「有」可打开（默认订单）；「无」或空白不响应</li>
<li>书目单选驱动 MARC / 单件内容；切换书目时单件四级筛选重置</li>
<li>单件树：一～三级仅展开收缩；四级叶子筛选右侧列表</li>
<li>打开结果面板时<strong>不再</strong>执行自动关联</li>
</ul>
${o("","业务规则")}
<ul>
<li><strong>订单查重</strong>比对范围：当前登录馆员<strong>关联订户</strong>下的其他订单行（不含当前行）；<strong>不使用</strong>查重范围</li>
<li><strong>馆藏查重</strong>比对范围：按订户「编辑 → 查重配置 → 查重范围」合并后的分馆/馆藏地编码范围检索；皆空则不限</li>
<li><strong>馆藏重复判定</strong>：本馆单件数（holdingLocalItemCount）&gt; 0 为「有」，否则已查为「无」；废除「匹配到书目即有」</li>
<li><strong>本馆/全市</strong>：书目行本馆单件数（localItemCount）/ 全市单件数（cityItemCount）；订单行求和为本馆单件数（holdingLocalItemCount）/ 全市单件数（holdingCityItemCount）；传参口径见 5.3.5.5；展示侧列表经单件显示范围过滤</li>
<li><strong>自动关联书目</strong>：若本轮执行馆藏查重，且订单行书目记录号（bibRecordNo）为空，且本行馆藏结果非空且第一条书目记录号有效，则静默写入结果第一条；若书目记录号已有值则不覆盖；批量逐行独立处理；仅订单查重或结果为空时不执行；打开结果面板不再重复自动关联</li>
<li><strong>单件 / 馆藏树排序</strong>：仅一级与单件列表按所属机构优先；同级按 code 升序；单件显示范围控制展示与树裁剪；首个一级默认展开</li>
<li><strong>未关联馆藏地挂载</strong>：所属馆与所属馆藏地皆空 → 一级根「未关联馆藏地」（仅单件显示范围全空时可能展示）；所属馆有值且所属馆藏地为空 → 匹配所属馆节点下的四级叶子；所属馆无法匹配时并入一级根</li>
<li>重复标识按本次查重配置的重复类型分别更新（若选择「不限」，则同时更新两列）</li>
<li>馆藏书目表格字段取自查重订单行的资源类型 / 语种（优先行上，否则所属订单）；MARC 字段不做语种过滤，按接口返回原样展示</li>
</ul>
<blockquote>详细规格见 docs/superpowers/specs/2026-09-11-dedup-result-display-scope-tree-sort-design.md；本馆/全市计数另见 2026-09-08-holding-dedup-local-city-count-design.md</blockquote>
${o("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：已执行查重操作，列表标识列已更新</li>
<li><strong>后置</strong>：查重结果面板展示详细查重结果；列表书目记录号（bibRecordNo）已按自动关联规则刷新（若适用）</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>馆藏重复全市为 0 或未查重、订单重复为「无」或未查重时，不打开结果面板</li>
<li>书目 / 订单页签无数据：展示「暂无查重结果」，且不展示底部分页栏</li>
<li>单件页签无馆藏分布或全市单件为 0：左侧「暂无馆藏分布」、右侧「暂无单件信息」</li>
<li>单件页签已选叶子但无匹配单件：展示「暂无单件信息」</li>
<li>MARC 页签无可用书目或无字段：展示「暂无MARC信息」</li>
<li>查重请求失败：见 5.3.5.5</li>
</ul>
</div>`),mp=E("5.3.5.7","编辑订单行",`
<div id="overview">
${o("","功能描述")}
<p>操作列「编辑」打开宽屏弹窗，修改书目及订购信息字段。</p>
${o("","可编辑字段")}
<p>ISBN、正题名、出版社、定价、币种、正文语种、载体、商品条码、目录号、套数、套内册数、书目记录号、卷数、丛编、出版地、出版年、备注</p>
</div>
<div id="rules">
<ul>
<li>币种下拉：人民币/美元/欧元</li>
<li>正文语种：日文、德文、西文、法文、俄文、英文、中文等</li>
<li>保存后更新列表行（原型 alert 演示）</li>
</ul>
</div>`),vp=E("5.3.5.8","撤订",`
<div id="overview">
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」），流程同订单撤订原因弹窗。</p>
</div>
<div id="rules">
<ul>
<li>撤订后行状态 → 已撤订，备注写入撤订原因</li>
<li>未勾选批量撤订：alert「请先勾选要撤订的订单行」</li>
</ul>
</div>`),bp=E("5.3.5.9","批量导出",`
<div id="overview">
<p>「导出订单行」下拉：导出配置 / 导出清单。导出配置字段含订单号、馆址、订单行号、正题名、ISBN、作者、出版社、行状态、验收状态、馆藏重复、订单重复等。</p>
</div>`),_p=E("5.3.5.10","实际关联书目记录号与书目详情浮动弹窗",`
<div id="overview">
${o("","功能描述")}
<p>当订单行的<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）与<strong>书目记录号</strong>（<code>bibRecordNo</code>）存在差异时，在「书目记录号」列通过「<strong>实</strong>」标记提供快捷入口：悬停浮层内点击某条记录号，以<strong>无遮罩可拖拽浮动弹窗</strong>展示该记录号的 MARC 与单件，支持多窗并排对比。</p>
</div>
<div id="ui">
${o("","「实」标记（书目记录号列旁）")}
${B(["要素","规则"],[["展示位置","订单行列表「书目记录号」列，书目记录号（bibRecordNo）旁"],["显示条件","同时满足：① 实际关联书目记录号（actualBibRecordNos）去空后至少有一条；② 其中至少有一条与书目记录号（bibRecordNo）不一致"],["不显示","实际关联书目记录号为空或均为空字符串；或全部条目均与书目记录号相同（例如仅含一条且等于书目记录号）"],["样式","浅蓝色小徽章「实」"]])}
${o("","「实」标记悬停浮层")}
<ul>
<li><strong>显示前提</strong>：已满足「实」标记显示条件（见上表）</li>
<li><strong>标题</strong>：「实际关联书目记录号」</li>
<li><strong>记录号</strong>：逐条列出全部非空实际关联书目记录号；每条为蓝色可点击链接；<strong>不提供「复制全部」</strong></li>
<li><strong>收起</strong>：鼠标离开约 0.12 秒后收起；点击记录号后不立即关闭，便于连续打开多个弹窗</li>
</ul>
${o("","书目详情浮动弹窗")}
${B(["要素","规则"],[["默认尺寸","宽 1024px × 高 520px"],["最小尺寸","宽 480px × 高 320px"],["遮罩","无；列表背景仍可操作"],["标题栏","书目记录号、订单行号（orderLineNo）、正题名（title）；可拖拽；× 关闭"],["Tab 顺序","<strong>MARC信息</strong>（默认）→ <strong>单件（N）</strong>"],["单件 Tab","N = 当前记录号在编目系统中的单件行数；无数据时为 单件（0）"],["调整尺寸","四边及四角共 8 个拖拽热区，可调整宽度与高度"]])}
</div>
<div id="interaction">
${o("","交互逻辑")}
<ol>
<li>悬停「实」→ 点击某条实际关联书目记录号 → 打开浮动弹窗，默认 MARC 页签</li>
<li>重复点击同一记录号：将已有弹窗置于最前并短暂高亮，不新建</li>
<li>同时最多 <strong>3</strong> 个不同记录号弹窗；第 4 个提示「最多同时打开 3 个书目详情弹窗，请先关闭部分弹窗」</li>
<li>每新开一窗，在上一窗基础上向右、向下各错开 32 像素</li>
<li>离开订单行列表页签时清空全部弹窗</li>
</ol>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li><strong>弹窗粒度</strong>：一次只展示用户所点的那一条实际关联书目记录号，不与同订单行其他记录号合并</li>
<li><strong>MARC 数据</strong>：按所点记录号，结合来源订单行书目信息，向编目系统查询 MARC 字段；展示规则同订单行详情「MARC信息」页签</li>
<li><strong>单件数据</strong>：按所点记录号向编目系统查询全部馆藏单件；表格列同订单行详情「单件（N）」页签</li>
<li><strong>单件 Tab 计数</strong>：N 为当前记录号查得的单件行数；无单件时显示「单件（0）」</li>
<li><strong>「实」标记显示</strong>：若实际关联书目记录号为空，或全部与书目记录号相同，则不展示「实」标记</li>
<li><strong>使用范围</strong>：仅订单行列表；不满足「实」标记显示条件时不提供本入口</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>编目无 MARC：MARC 页签展示「暂无 MARC 信息」</li>
<li>编目无单件：单件页签表格为空，Tab 为「单件（0）」</li>
<li>已有 3 个弹窗时再开新记录号：提示后拒绝新建</li>
</ul>
</div>`),yp=E("5.3.5.11","列展示配置",`
<div id="overview">
${o("","功能描述")}
<p>订单行列表工具栏右侧提供「列展示」配置，交互与订单列表一致（详见 <strong>5.2.5.9</strong>），默认固定列不同。</p>
</div>
<div id="rules">
${o("","默认固定位置")}
${B(["固定位置","默认列"],[["列首固定","序号、订单号、馆址、订单行号"],["列尾固定","操作"]])}
${o("","业务规则")}
<ul>
<li>复选框列不参与列展示，始终固定列首最左</li>
<li>序号（no）为当前页内连续序号，随分页变化</li>
<li>重置后恢复上表默认顺序与固定位置</li>
<li>其余显隐、拖拽、固定、滚动遮挡规则同 5.2.5.9</li>
</ul>
</div>`),Sp=E("5.3.5.12","更换供应商",`
<div id="overview">
${o("","功能描述")}
<p>将订单行的<strong>可迁出套数</strong>迁出，并指定新供应商、预算与撤订原因；原行对应套数记入发/收/换/退/撤订（flowStats）的撤订段。迁出目标支持两种模式（默认「新建订单」）：</p>
<ol>
<li><strong>新建订单</strong>：创建 1 条待发订新订单，并追加对应新订单行。</li>
<li><strong>加入订单</strong>：不新建订单头，向已选的待发订目标订单追加新订单行，并重算该订单种数/套数/册数/码洋。</li>
</ol>
<p>提供两个入口：</p>
<ol>
<li><strong>行内</strong>：操作列「更换供应商」——用户填写迁出套数（1～可迁出）；新建模式生成 1 新单 + 1 新行，加入模式向目标单追加 1 新行。</li>
<li><strong>工具栏批量</strong>：勾选多行后「更换供应商」——不填套数，每行按当前可迁出套数全量迁出；新建模式生成 1 新单 + N 新行，加入模式向目标单追加 N 新行。</li>
</ol>
<p>本入口<strong>不以是否催缺（isShortage）排除行</strong>；催缺管理侧更换供应商仍按催缺口径独立运作，两边互不替代。</p>
${o("","页面要素")}
<ul>
<li><strong>工具栏「更换供应商」</strong>：订单行列表工具栏；不满足启用条件时置灰</li>
<li><strong>行内「更换供应商」</strong>：操作列；仅满足显示条件时展示</li>
<li><strong>行内弹窗</strong>：标题「更换供应商」；最顶部只读展示「发订套数：N 已收货套数：N 已换货套数：N 已退货套数：N」；其下居中单选「新建订单 / 加入订单」（默认新建）；字段顺序：供应商 → 预算名称 → 订单名称 → 套数 → 原因 → 备注</li>
<li><strong>批量弹窗</strong>：同上但<strong>无套数</strong></li>
<li><strong>确认按钮文案</strong>：新建模式「生成新订单」；加入模式「加入订单」</li>
<li><strong>目标模式</strong>（targetMode）：切换时清空订单名称文本与已选目标订单号；供应商、预算、原因、备注保留</li>
<li><strong>订单名称</strong>（orderName，新建）：必填文本；最多 50 字符；预填「原名-n」；提交不校验重名</li>
<li><strong>订单名称</strong>（加入）：必填；可搜索单选下拉；展示「订单名称（订单号）」；绑定订单号（orderId）；无候选时提示「暂无符合条件的待发订订单，请调整供应商或预算」</li>
<li><strong>套数</strong>（仅行内）：必填；默认 = 可迁出；须为 1～可迁出的整数</li>
<li><strong>供应商</strong>（supplier）：必填；默认关联订单供应商；按采选方式过滤；加入模式参与目标筛选；变更清空已选目标</li>
<li><strong>预算名称</strong>（budget）：交换/捐赠可空；其余必填；加入模式参与目标筛选；变更清空已选目标</li>
<li><strong>原因</strong>：必填；撤订原因参数中使用中的原因</li>
<li><strong>备注</strong>：非必填；占位「填写后将追加至源订单行备注后」；提交时追加至<strong>源订单行</strong>备注后；目标订单抬头不写此备注</li>
<li><strong>成功确认</strong>：新建「已生成新订单 {订单号}…」；加入「已加入订单 {订单号}…」；批量多种另含种数/套数/册数；取消 / 确定</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<p><strong>行内</strong></p>
<ol>
<li>满足显示条件时操作列出现入口；点击打开弹窗，默认「新建订单」并预填</li>
<li>切换「加入订单」后订单名称改为可搜下拉；切回新建则恢复建议订单名</li>
<li>可改供应商、预算、订单名称/目标订单、套数、原因、备注；必填项字段下方即时校验</li>
<li>新建：「生成新订单」→ 校验 → 建待发订新单 + 1 新行 → 回写原行撤订（及备注追加）→ 成功确认</li>
<li>加入：「加入订单」→ 校验目标仍在候选内 → 向目标单追加 1 新行并重算抬头 → 回写原行 → 成功确认</li>
<li>成功确认：取消关闭；确定切换「订单列表」页签</li>
</ol>
<p><strong>工具栏批量</strong></p>
<ol>
<li>未满足启用条件时按钮置灰</li>
<li>打开批量弹窗（无套数），默认新建，预填首行关联订单建议名称、供应商、预算</li>
<li>目标模式与订单名称控件切换规则同行内</li>
<li>新建：校验范围与每行可迁出 ≥ 1 → 建 1 新单 + N 新行 → 回写各原行 → 成功确认（多种含种/套/册）</li>
<li>加入：向目标单追加 N 新行并重算抬头 → 回写各原行 → 成功确认</li>
<li>成功确认：取消关闭；确定切换「订单列表」页签</li>
</ol>
</div>
<div id="rules">
${o("","可迁出套数")}
<blockquote>可迁出套数 = max(0, 发订 − 已收 − 已退 − 已换)</blockquote>
<ul>
<li>已换、已收、已退套数不迁出</li>
<li>提交前重算；填写套数大于可迁出则提示「可迁出套数不足，请重新填写」并中止</li>
</ul>
${o("","默认订单名称（仅新建模式）")}
<ul>
<li>原名取关联订单订单名称（orderName）；空则用「新订单」</li>
<li>扫描全部已有订单中精确匹配「原名-数字」的名称，取最大序号 + 1；无匹配则为 1（不回填空洞）</li>
<li>示例：已有「专题采购-1」「专题采购-3」→ 建议「专题采购-4」</li>
<li>最终 ≤ 50 字符；提交不校验重名</li>
</ul>
${o("","加入订单候选筛选（须同时满足）")}
<ol>
<li>发订状态（orderStatus）为待发订</li>
<li>订户（subscriber）∈ 当前馆员可查看订户范围</li>
<li>资源类型、语种、采选方式与源订单行维度一致（行内取当前行；批量取勾选首行；不要求同一订单号）</li>
<li>供应商 = 弹窗所选供应商</li>
<li>预算名称 = 弹窗所选预算；交换/捐赠预算可空时，仅匹配预算也为空的待发订订单</li>
<li>未选供应商，或（预算必填时）未选预算 → 候选为空</li>
</ol>
${o("","行内显示条件（须全部满足）")}
<ol>
<li>行状态（lineStatus）为「已发订」或「处理中」</li>
<li>验收状态（acceptanceStatus）为「待验收」「部分收货」或「换货中」</li>
<li>可迁出套数 ≥ 1</li>
</ol>
<p>不因是否催缺隐藏入口。</p>
${o("","工具栏启用条件（须全部满足）")}
<ol>
<li>至少勾选 1 行</li>
<li>行状态均为「已发订」或「处理中」</li>
<li>订户、资源类型、语种、采选方式相同（订户/采选方式取自关联订单）</li>
</ol>
<p>不要求同一订单号；启用时不校验验收状态或可迁出；提交时若某行可迁出 &lt; 1 则报错中止（不跳过）。</p>
${o("","新建订单")}
<ul>
<li>每次操作生成恰好 1 条待发订新订单；抬头继承关联订单，覆盖弹窗中的名称/供应商/预算</li>
<li>行内：1 新行，套数 = 填写套数；批量：每勾选行 1 新行，套数 = 该行可迁出</li>
<li>新行状态待发订；是否催缺为「否」；书目字段自原行复制；供应商/预算等取自新订单抬头</li>
</ul>
${o("","加入订单")}
<ul>
<li>不新建订单头；目标须仍满足候选筛选</li>
<li>行内追加 1 行 / 批量追加 N 行；套数 = 填写套数或该行可迁出；供应商、预算、馆址等取自<strong>目标订单抬头</strong></li>
<li>追加后重算目标订单种数、套数、册数、码洋</li>
</ul>
${o("","备注与原行回写")}
<ul>
<li>若弹窗填写备注：追加至<strong>源订单行</strong>备注之后；未填写则不改；目标订单抬头不写此备注</li>
<li>原行撤订段累加迁出套数；原因 = 弹窗所选原因（不打开撤订原因弹窗）</li>
<li>若发订全部进入撤订 → 行状态「已撤订」；若仍有已收等 → 按更新后流转统计重算</li>
</ul>
${o("","与催缺更换供应商边界")}
${B(["入口","适用行","数量口径"],[["订单行列表行内 / 工具栏「更换供应商」","不按是否催缺排除","可迁出 = 发订 − 已收 − 已退 − 已换；行内可指定部分套数"],["催缺管理「更换供应商」/ 撤订","已催缺相关行","撤订套数 = max(催缺套数 − 到货套数, 0)"]])}
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>行不满足显示条件：操作列不展示入口</li>
<li>批量勾选范围不一致 / 行状态不符：工具栏按钮置灰</li>
<li>套数非法：字段提示「请填写合法套数（1～可迁出）」</li>
<li>新建未填订单名称：提示「请输入订单名称」</li>
<li>加入未选目标订单：提示「请选择待发订订单」</li>
<li>目标订单不可用：提示「目标订单不可用，请重新选择」</li>
<li>缺供应商 / 应填预算 / 原因：字段下方红色提示</li>
<li>某勾选行可迁出 = 0：提示该行无可迁出并中止（不部分成功）</li>
<li>未找到原订单 / 订单行不存在：提示无法生成</li>
<li>无可选撤订原因：下拉禁用并提示先在设置中配置</li>
</ul>
</div>`),Cp={title:"非连续出版物订单",tabs:{"order-list":{label:"订单列表",itemIds:["5.2.5.1","5.2.5.2","5.2.5.3","5.2.5.4","5.2.5.5","5.2.5.6","5.2.5.7","5.2.5.8","5.2.5.9"]},"order-line":{label:"订单行列表",itemIds:["5.3.5.1","5.3.5.2","5.3.5.3","5.3.5.4","5.3.5.5","5.3.5.6","5.3.5.7","5.3.5.8","5.3.5.9","5.3.5.10","5.3.5.11","5.3.5.12"]}},items:[{id:"5.2.5.1",title:"筛选查询",tab:"order-list",htmlContent:ep},{id:"5.2.5.2",title:"数据表格与行操作",tab:"order-list",htmlContent:ip},{id:"5.2.5.3",title:"新建订单弹窗",tab:"order-list",htmlContent:lp},{id:"5.2.5.4",title:"编辑订单弹窗",tab:"order-list",htmlContent:np},{id:"5.2.5.5",title:"发订",tab:"order-list",htmlContent:sp},{id:"5.2.5.6",title:"导入订单",tab:"order-list",htmlContent:rp},{id:"5.2.5.7",title:"撤订与删除",tab:"order-list",htmlContent:op},{id:"5.2.5.8",title:"批量导出",tab:"order-list",htmlContent:ap},{id:"5.2.5.9",title:"列展示配置",tab:"order-list",htmlContent:cp},{id:"5.3.5.1",title:"筛选查询",tab:"order-line",htmlContent:up},{id:"5.3.5.2",title:"数据表格与行操作",tab:"order-line",htmlContent:dp},{id:"5.3.5.3",title:"生成催缺单",tab:"order-line",htmlContent:fp},{id:"5.3.5.4",title:"查重操作入口",tab:"order-line",htmlContent:pp},{id:"5.3.5.5",title:"查重配置弹窗",tab:"order-line",htmlContent:hp},{id:"5.3.5.6",title:"查重结果展示",tab:"order-line",htmlContent:gp},{id:"5.3.5.7",title:"编辑订单行",tab:"order-line",htmlContent:mp},{id:"5.3.5.8",title:"撤订",tab:"order-line",htmlContent:vp},{id:"5.3.5.9",title:"批量导出",tab:"order-line",htmlContent:bp},{id:"5.3.5.10",title:"实际关联书目记录号与书目详情浮动弹窗",tab:"order-line",htmlContent:_p},{id:"5.3.5.11",title:"列展示配置",tab:"order-line",htmlContent:yp},{id:"5.3.5.12",title:"更换供应商",tab:"order-line",htmlContent:Sp}]};function $p(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-manage"]=Cp}const Tp=E("5.4.5.1","书目信息",`
<div id="overview">
${o("","功能描述")}
<p>页面顶部展示当前订单行书目信息，采用可折叠卡片布局，默认<strong>展开</strong>。左侧为封面占位区，右侧为<strong>三列网格</strong>展示书目字段；字段集合与顺序由<strong>资源类型 + 语种</strong>决定，全部字段均展示（值为空时显示空白）。</p>
${o("","页面要素")}
<ul>
<li><strong>折叠标题栏</strong>：左侧「书目信息」，右侧「收起/展开」文字链</li>
<li><strong>封面区</strong>：100×140px；有<strong>封面图地址</strong>（<code>coverUrl</code>）时展示图片，否则展示默认书籍 SVG 占位</li>
<li><strong>资源类型 / 语种</strong>：封面下方居中展示</li>
<li><strong>书目字段</strong>：三列网格；一般性附注、图书简介、备注、书评、作者简介、目次信息、馆藏信息等长文本字段占 3 列宽</li>
</ul>
</div>
<div id="fields">
${o("","字段展示规则（按资源类型 / 语种，顺序固定）")}
${o("","纸质书 · 中文")}
<p>正题名、ISBN、副题名、分卷号、分卷名、分类号、出版社、作者、出版年、定价、版本、丛编、主题词、读者对象、装帧形式、尺寸、正文语种、卷数、出版地、一般性附注、图书简介、备注</p>
${o("","纸质书 · 外文")}
<p>ISBN、学科大类、学科细分、中图分类号、中译名、题名、副题名、责任者、丛编、出版社、装帧形式、出版日期、版次、页数、币种、价格、主题词、读者对象、尺寸、语种、简介、精简装ISBN对照、馆藏信息、审读级别、获奖信息、目次信息、分卷号、分卷名、作者简介、书评、备注</p>
${o("","视听资料 · 中文")}
<p>ISBN、ISRC、题名、载体、出版社、版本/格式、著者、币种、码洋、彩胶颜色、限量编号、厂牌、系列名称、是否签名、是否老唱片、获奖信息、北京出版社、分类、盘号、老唱片品牌、剧种、年代、备注</p>
${o("","视听资料 · 外文")}
<p>ISRC、题名、载体、商品条码、目录号、外文原文题名、出版方、码洋、币种、备注、厂牌</p>
<blockquote>语种取自所属订单的<strong>语种</strong>字段（<code>language</code>，中文 / 外文）。</blockquote>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点击标题栏任意区域切换展开/收起</li>
</ul>
</div>`),Rp=E("5.4.5.2","业务 Tab 页签",`
<div id="overview">
${o("","功能描述")}
<p>书目信息下方为业务 Tab 容器，用于切换查看订单行关联业务数据。Tab 顺序固定，默认激活<strong>相关订单行（N）</strong>。详情页<strong>不含</strong>单件、MARC信息页签（单件/MARC 仍可在订单行列表「实」标记浮动弹窗查看，见 5.3.5.10）；原页签编号见 <strong>5.4.5.6 / 5.4.5.7【已废弃】</strong>。</p>
${o("","Tab 列表")}
<ol>
<li><strong>相关订单行（N）</strong>（默认）：N 为相关订单行表格总行数（含当前行），无数据时为 0</li>
<li><strong>验收记录（N）</strong>：N 为验收记录表格总行数，无数据时为 0</li>
<li><strong>结算记录（N）</strong>：N 为结算记录表格总行数，无数据时为 0</li>
<li><strong>订购日志</strong>（不加数量）</li>
</ol>
<p>可计数页签（相关订单行 / 验收记录 / 结算记录）的 N 随对应表格总行数自动刷新（与分页无关）；无数据时显示「名称（0）」。</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点击 Tab 按钮切换下方内容区，当前 Tab 高亮（底部蓝色边框）</li>
<li>切换 Tab 不刷新书目信息区；各 Tab 内分页状态独立保持</li>
</ul>
</div>`),Ap=E("5.4.5.3","相关订单行",`
<div id="overview">
${o("","功能描述")}
<p>展示与当前订单行<strong>书目匹配</strong>的其他订单行记录，<strong>包含当前订单行本身</strong>。数据范围限定为当前登录馆员<strong>关联订户可查看范围</strong>内的订单行，按发订时间倒序排列。</p>
${o("","表格列")}
<p>序号、订户、订单行号、采购方式、预算名称、供应商、折扣、发订人、发订时间</p>
</div>
<div id="rules">
${o("","书目匹配规则")}
${B(["资源类型","语种","匹配条件"],[["纸质书","—","资源标识（ISBN）<strong>且</strong> 正题名均相同"],["视听资料","中文","正题名 <strong>且</strong> 载体均相同"],["视听资料","外文","商品条码 <strong>且</strong> 目录号均相同"]])}
<ul>
<li>订户范围：取系统<strong>可查看订户范围</strong>配置（<code>viewableSubscribers</code>），仅展示馆员有权查看的订户订单行</li>
<li>发订人、发订时间为空时展示空白</li>
<li><strong>订单行号</strong>为普通文本，<strong>不可点击跳转</strong></li>
</ul>
</div>
<div id="interaction">
${o("","交互与分页")}
<ul>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
<li>无匹配数据时表格为空</li>
</ul>
</div>`),xp=E("5.4.5.4","验收记录",`
<div id="overview">
${o("","功能描述")}
<p>展示「相关订单行」页签中<strong>各订单行</strong>在验收模块按种维度匹配到的汇总记录（含当前行）。按<strong>订单行号</strong>（<code>orderLineNo</code>）逐条匹配；某一行无匹配则不占行；<strong>全部无匹配时表格展示「暂无数据」</strong>，不使用订单行字段构造。</p>
${o("","表格列")}
<p>序号、订单行号、ISBN（视听为 ISBN/ISRC）、正题名、作者、定价、币种、发/收/换/退套数、最近一次验收时间、最近一次验收人</p>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>匹配范围 = 当前页「相关订单行」列表中的全部订单行号（与书目匹配、订户范围一致）</li>
<li>发/收/换/退套数格式：<code>发订/收货/换货/退货</code>，数据来源于验收模块</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>默认每页 50 条；有数据时显示分页</li>
<li>表格不可勾选</li>
</ul>
</div>`),Ip=E("5.4.5.5","结算记录",`
<div id="overview">
${o("","功能描述")}
<p>展示「相关订单行」页签中<strong>各订单行</strong>在结算模块已结算数据中的明细（含当前行）。按<strong>订单行号</strong>（<code>orderLineNo</code>）精确匹配；某一行无匹配则不占行；<strong>全部无匹配时表格展示「暂无数据」</strong>，不使用订单行字段推算。</p>
${o("","表格列")}
<p>序号、订单行号（<code>orderLineNo</code>）、正题名、资源标识（<code>resourceId</code>）、作者、出版社、定价、币种、实洋（<code>actualPrice</code>）、套内册数（<code>volumesInSet</code>）、结算套数（<code>settledSets</code>）、结算册数（<code>settledVolumes</code>）、结算金额（<code>settlementAmount</code>）</p>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>匹配范围 = 当前页「相关订单行」列表中的全部订单行号</li>
<li>系统在已结算数据中按订单行号精确查找</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>默认每页 10 条；有数据时显示分页</li>
<li>表格不可勾选</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>`),wp=`
<details>
<summary style="cursor:pointer;color:#8c8c8c;">【5.4.5.6 单件（N）（已废弃）】</summary>
<div style="padding:8px 0 4px 12px;border-left:3px solid #d9d9d9;margin:8px 0;color:#595959;">
<p>详情页已去掉本页签；编目单件改由订单行列表「实」标记浮动弹窗查看（见 <strong>5.3.5.10</strong>）。<strong>禁止重用本编号。</strong></p>
${o("","原功能描述")}
<p>按<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）从编目系统查询单件并汇总展示。页签文案为 <strong>单件（N）</strong>，N 为合并后的单件总行数（表格一行计 1 条）。</p>
${o("","原表格列")}
<p>序号（01 格式）、条码号、索书号、所属馆、所属馆藏地、所在馆藏地、借阅类型、卷册描述、登到日期</p>
${o("","原查询逻辑")}
<ol>
<li>若存在实际关联书目记录号：逐条向编目查询并合并为一张表</li>
<li>否则使用书目记录号（<code>bibRecordNo</code>）查询</li>
<li>合并总行数即为页签 N；无单件时显示「单件（0）」</li>
</ol>
</div>
</details>
`,Ep=`
<details>
<summary style="cursor:pointer;color:#8c8c8c;">【5.4.5.7 MARC信息（已废弃）】</summary>
<div style="padding:8px 0 4px 12px;border-left:3px solid #d9d9d9;margin:8px 0;color:#595959;">
<p>详情页已去掉本页签；MARC 著录改由订单行列表「实」标记浮动弹窗查看（见 <strong>5.3.5.10</strong>）。<strong>禁止重用本编号。</strong></p>
${o("","原功能描述")}
<p>按实际关联书目记录号（为空则书目记录号）从编目系统查询 MARC；列表上方提供书目记录号下拉框，默认第一项，切换后刷新表格。</p>
${o("","原页面要素")}
<ul>
<li>下拉框标签「书目记录号」；MARC 表格列：字段名、指示符、字段内容（最大高度 480px 滚动）</li>
<li>无记录号或无 MARC：展示「暂无 MARC 信息」</li>
</ul>
${o("","原下拉规则")}
<ul>
<li>有实际关联书目记录号：列出全部有效记录号</li>
<li>否则仅含书目记录号一项（有值时）</li>
<li>进入详情或切换订单行时默认选中第一项</li>
</ul>
</div>
</details>
`,Np=E("5.4.5.8","订购日志",`
<div id="overview">
${o("","功能描述")}
<p>展示当前订单行全流程操作日志。查询范围：仅<strong>头表</strong>主体类型为订单行且主体单号为本行，不按明细反查。页签位于<strong>结算记录</strong>之后；文案固定为「订购日志」，<strong>不加</strong>括号数量。</p>
${o("","表格列")}
${B(["字段","说明"],[["操作时间（operateTime）","事件发生时间"],["操作人（operatorName）","操作人姓名"],["操作类型（action）","中文标签展示；列展示但不做下拉筛选"],["操作说明（summary）","文字摘要"]])}
<blockquote>关联单号、来源、参考单号、操作结果、关键变更字段仍落库，本页签不展示。本页签<strong>无</strong>操作类型等筛选。</blockquote>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>默认按操作时间倒序；分页默认 10 条/页，可选 10 / 20 / 50</li>
<li>切换订单行后分页重置为第 1 页</li>
<li>只读：无手写备注、无删除日志</li>
<li>无数据时居中展示「暂无订购日志」（无表格）</li>
</ul>
</div>
`),Pp={title:"订单行详情",tabs:{related:{label:"相关订单行（N）",itemIds:["5.4.5.1","5.4.5.2","5.4.5.3","5.4.5.6","5.4.5.7"]},acceptance:{label:"验收记录（N）",itemIds:["5.4.5.4"]},settlement:{label:"结算记录（N）",itemIds:["5.4.5.5"]},orderLog:{label:"订购日志",itemIds:["5.4.5.8"]}},items:[{id:"5.4.5.1",title:"书目信息",tab:"related",htmlContent:Tp},{id:"5.4.5.2",title:"业务 Tab 页签",tab:"related",htmlContent:Rp},{id:"5.4.5.3",title:"相关订单行",tab:"related",htmlContent:Ap},{id:"5.4.5.4",title:"验收记录",tab:"acceptance",htmlContent:xp},{id:"5.4.5.5",title:"结算记录",tab:"settlement",htmlContent:Ip},{id:"5.4.5.6",title:"单件（N）（已废弃）",tab:"related",htmlContent:wp},{id:"5.4.5.7",title:"MARC信息（已废弃）",tab:"related",htmlContent:Ep},{id:"5.4.5.8",title:"订购日志",tab:"orderLog",htmlContent:Np}]};function Op(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-line-detail"]=Pp}const Dp=E("5.5.5.1","关联订单行列表",`
<div id="overview">
${o("","功能描述")}
<p>在书目查询页下方单件区切换至<strong>关联订单行</strong>页签后，先校验当前登录馆员是否有关联订户；若已关联，则按当前选中书目的书目记录号（bibRecordNo）查询关联订单行——若订单行存在非空的实际关联书目记录号（actualBibRecordNos），则<strong>优先</strong>按实际关联书目记录号匹配，否则按书目记录号匹配——并仅展示当前馆员<strong>关联订户范围内</strong>、且行状态不为「已撤订」的结果，同时提供发/收/换/退/撤订数量汇总及「新建订单」「加入订单」入口。</p>
${o("","页面要素")}
<ul>
<li><strong>页签标题</strong>：关联订单行(N)，N 为当前书目在馆员关联订户范围内的关联订单行条数</li>
<li><strong>工具栏</strong>：新建订单、加入订单</li>
<li><strong>统计栏</strong>：发订数量、收货数量、换货数量、退货数量、撤订数量</li>
<li><strong>表格列</strong>：序号、订单号、馆址、订单行号、正题名、资源标识、载体、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、验收状态、结算状态、发订时间</li>
</ul>
${o("","交互逻辑")}
<ul>
<li>若用户从其他页签切换至「关联订单行」页签，则先校验当前登录馆员是否有关联订户；若未关联，则弹窗提示「您没有关联订户，无法查看数据」</li>
<li>若用户点击「新建订单」，则校验当前登录馆员是否有关联订户；若未关联，则提示「您没有关联订户，无法新建订单」，且不打开弹窗</li>
<li>若用户点击「加入订单」，则校验当前登录馆员是否有关联订户；若未关联，则提示「您没有关联订户，无法加入订单」，且不打开弹窗</li>
<li>若用户在书目列表切换选中行，且已通过订户校验，则关联订单行列表随当前书目刷新</li>
<li>若未选中书目，则表格展示「请先选中书目」</li>
<li>若已选中书目、已通过订户校验但无关联行，则展示「暂无关联订单行」</li>
<li>若当前登录馆员未关联订户，则列表展示「您没有关联订户，无法查看数据」，且不展示业务数据</li>
<li>若正题名、作者、出版社文本过长，则鼠标悬停展示全文</li>
<li>若发订时间（issueTime）为空，则单元格显示「—」</li>
</ul>
</div>
<div id="rules">
${o("","订户校验")}
<ul>
<li>若用户切换至「关联订单行」页签，则须校验当前登录馆员是否有关联订户</li>
<li>若当前登录馆员未关联任何订户，则弹窗提示「您没有关联订户，无法查看数据」，且不加载列表数据</li>
</ul>
${o("","数据范围")}
<ul>
<li>若当前登录馆员已关联订户，则以其关联订户作为本页数据范围</li>
<li>若用户选中书目且已通过订户校验，则按下列规则匹配订单行，且所属订单订户（subscriber）须落在馆员关联订户范围内，且行状态（lineStatus）不为「已撤订」：</li>
</ul>
<ol>
<li>若订单行的<strong>实际关联书目记录号</strong>（actualBibRecordNos）非空，则仅当其中任一条与当前选中书目的书目记录号（bibRecordNo）一致时纳入列表（<strong>不再</strong>按书目记录号匹配）</li>
<li>若实际关联书目记录号为空，则仅当订单行的书目记录号（bibRecordNo）与当前选中书目一致时纳入列表</li>
</ol>
${o("","行状态过滤")}
<ul>
<li>列表不展示行状态为「已撤订」的订单行</li>
</ul>
${o("","排序规则")}
<ol>
<li>若订单行无发订时间（issueTime），则排在列表<strong>最上方</strong></li>
<li>若订单行有发订时间，则按发订时间<strong>从新到旧</strong>排列</li>
<li>若发订时间相同，则按订单行号（orderLineNo）<strong>从小到大</strong>排列</li>
</ol>
<blockquote>上述排序规则与「非连续出版物订单-订单行列表」保持一致。</blockquote>
${o("","统计汇总")}
<p>发/收/换/退/撤订数量由各行流转统计（flowStats，格式为「发/收/换/退/撤」五段数字）分别累加得出。</p>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>若当前登录馆员未关联订户，则弹窗提示「您没有关联订户，无法查看数据」，列表展示相同空状态文案</li>
<li>若无书目选中，则展示空状态「请先选中书目」</li>
<li>若已选中书目但无符合范围的关联数据，则展示空状态「暂无关联订单行」</li>
</ul>
</div>`),kp=E("5.5.5.2","新建订单弹窗",`
<div id="overview">
${o("","功能描述")}
<p>在关联订单行页签点击<strong>新建订单</strong>，为当前选中书目创建订单。若用户选择多个馆址，则每个馆址各生成一个订单号。<strong>订户、资源类型、预算名称</strong>的可选范围受当前登录馆员关联订户约束。关闭弹窗后保留上次填写内容，再次打开时可恢复。</p>
${o("","表单字段")}
${B(["字段","必填","说明"],[["订单名称（orderName）","是","文本；最多 50 个字符；占位「请输入，50字符以内」"],["订户（subscriber）","是","下拉；可选范围为当前馆员关联订户（使用中）"],["资源类型（resourceType）","是","下拉；须先选订户；选项为所选订户主数据中的资源类型"],["采选方式（method）","是","下拉：捐赠/现采/政采/交存/交换/拍卖"],["预算名称（budget）","条件","须先选订户；选项为所选订户主数据中的预算名称；交换或捐赠时非必填且不可选"],["语种（language）","是","下拉；打开时按书目 MARC 格式预填：CNMARC 为中文，否则为外文"],["供应商（supplier）","是","下拉；随采选方式联动，见业务规则"],["折扣（discount）","否","文本；选择供应商后默认带出，可修改；若填写则须大于 0 且小于等于 1，最多两位小数"],["馆址（sites）","是","多选；至少选一个馆址"]])}
</div>
<div id="rules">
${o("","订户与字段范围")}
<ul>
<li>若当前登录馆员未关联任何订户，则点击「新建订单」时提示「您没有关联订户，无法新建订单」，且不打开弹窗</li>
<li>订单名称（orderName）必填；最多 50 个字符；未填提示「请输入订单名称」，超长提示「订单名称不能超过50个字符」</li>
<li>订户（subscriber）下拉仅展示当前馆员关联订户（使用中）</li>
<li>若用户已选订户，则资源类型（resourceType）下拉仅展示该订户主数据中配置的资源类型；未选订户时下拉禁用，提示「请先选择订户」</li>
<li>若用户已选订户，则预算名称（budget）下拉仅展示该订户主数据中配置的预算名称；未选订户时下拉禁用（交换或捐赠采选方式下仍禁用预算）</li>
<li>若用户切换订户，且已选资源类型或预算不在新订户允许范围内，则清空对应字段</li>
<li>若书目 MARC 格式为 CNMARC，则预填语种「中文」；否则预填「外文」；无法解析 MARC 格式时不预填</li>
</ul>
${o("","供应商与采选方式")}
<ul>
<li>若未选择采选方式，则供应商下拉禁用，提示「请先选择采选方式」</li>
<li>若用户切换采选方式，且当前供应商不在新列表中，则清空供应商（supplier）与折扣（discount）</li>
</ul>
${B(["采选方式","可选供应商范围"],[["现采","代理商应用中类型为书商且状态为使用中的供应商"],["政采","同现采（代理商应用中类型为书商且状态为使用中的供应商）"],["交存","出版社管理应用中状态为使用中的出版社"],["捐赠","个人管理中类型为捐赠的捐赠人，与资源商管理中类型为团体捐赠的单位，合并展示"],["交换","资源商管理应用中类型为交换且状态为使用中的单位"],["拍卖","代理商应用中类型为拍卖行且状态为使用中的供应商"]])}
${o("","预算名称")}
${B(["采选方式","预算名称（budget）"],[["交换 / 捐赠","非必填（隐藏必填星号）、下拉禁用；切换至该方式时清空已选值"],["其他采选方式","必填，可编辑"]])}
${o("","折扣")}
<ul>
<li>若用户选择供应商，则折扣（discount）默认取该供应商在主数据中配置的默认值</li>
<li>用户可手动修改折扣；若再次切换供应商，则折扣更新为新供应商的默认值</li>
<li>若用户填写折扣，则须为大于 0 且小于等于 1 的数值，最多两位小数；若不满足则提示并阻止提交</li>
<li>若从上次关闭时的缓存恢复表单，则保留用户已修改的折扣，不因恢复而覆盖</li>
<li>若供应商为捐赠类，则默认折扣可为空</li>
</ul>
${o("","提交与订单号")}
<ul>
<li>若订单名称（orderName）未填，则提示「请输入订单名称」；若超过 50 个字符，则提示「订单名称不能超过50个字符」</li>
<li>若当前馆员未关联订户，或所选订户/资源类型/预算名称不在允许范围内，则提示并阻止提交</li>
<li>若采选方式为交换或捐赠，则提交时不校验预算名称（budget）</li>
<li>若馆址（sites）未选，则提示「请选择馆址」并阻止提交</li>
<li>若必填项缺失，则提示对应字段名称并阻止提交</li>
<li>提交成功后提示所生成的订单号列表并关闭弹窗；订单号格式为 PG001B+日期+流水号，多馆址各生成一单</li>
<li>新建订单默认状态为待发订；来源（source）标记为「元数据」</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>若当前登录馆员未关联订户，则提示「您没有关联订户，无法新建订单」</li>
<li>若订单名称未填，则提示「请输入订单名称」</li>
<li>若订单名称超过 50 个字符，则提示「订单名称不能超过50个字符」</li>
<li>若缓存中的订户、资源类型或预算不在当前馆员允许范围内，则恢复时清空无效字段</li>
<li>若缓存中的供应商与当前采选方式不匹配，则恢复时清空供应商与折扣</li>
<li>若缓存中的采选方式为交换或捐赠，则恢复时清空预算名称</li>
</ul>
</div>`),Mp=E("5.5.5.3","加入订单弹窗",`
<div id="overview">
${o("","功能描述")}
<p>将当前选中书目加入一个或多个<strong>待发订</strong>订单；一次提交为每条勾选订单各生成一条订单行（原型以提示框演示）。弹窗自上而下分三区：检索与订单列表、馆址分配、共用字段（币种 / 定价 / 套内册数 / 备注）。</p>
${o("","前置条件")}
<ul>
<li>用户已选中书目；未选中时提示「请先选中书目」</li>
<li>若当前登录馆员未关联任何订户，则提示「您没有关联订户，无法加入订单」，且不打开弹窗</li>
</ul>
</div>
<div id="candidates">
${o("","候选订单范围")}
<ul>
<li>仅包含订单状态为<strong>待发订</strong>、且订户（subscriber）落在馆员关联订户范围内的订单</li>
<li>若书目可映射出语种（language），则候选订单还须与映射语种一致；若无法映射语种，则不按语种过滤，默认展示上述范围内的全部待发订订单</li>
</ul>
</div>
<div id="search">
${o("","检索区")}
${B(["控件","规则"],[["订单名称（orderName）","文本；占位「模糊查询」；若输入订单名称，则与列表订单名称做不区分大小写的包含匹配；条件变更不自动检索，须点击「检索」"],["采选方式（method）","下拉：全部 / 捐赠 / 现采 / 政采 / 交存 / 交换 / 拍卖（不含征订目录）"],["供应商（supplier）","下拉：全部，或当前候选订单列表中出现过的供应商"],["检索","点击后按上述条件过滤列表"],["重置","清空三个条件并恢复全量候选列表"]])}
<p>列表默认按订单创建时间（createTime）<strong>从新到旧</strong>排列。</p>
</div>
<div id="list">
${o("","订单列表（上区）")}
<ul>
<li>支持多选；选中行以浅黄色背景高亮</li>
<li>若勾选多条订单，则须为相同资源类型（resourceType）与语种（language）；否则提示「请勾选相同资源类型和语种的待发订订单」，且不勾选该订单</li>
<li>表头固定，列表区域可纵向滚动；列较多时可横向滚动</li>
<li>列表<strong>不含套数列</strong>；套数仅在中区馆址行填写</li>
</ul>
${B(["列","说明"],[["勾选","绑定订单号（orderId）"],["订单号（orderId）","只读展示"],["订单名称（orderName）","只读；过长时截断，悬停展示全文；为空时展示「—」"],["订户 / 馆址 / 采选方式 / 资源类型 / 语种 / 供应商","只读展示"],["预算名称（budget）","过长时截断，悬停展示全文"],["折扣（discount）","只读"],["发订状态","展示待发订等状态文案"],["创建时间（createTime）","只读；列表按此字段倒序"]])}
${o("","空状态")}
<ul>
<li>若无任何候选订单，则展示「暂无匹配的待发订订单」</li>
<li>若检索后无匹配结果，则展示「未找到符合条件的订单」</li>
</ul>
</div>
<div id="site">
${o("","馆址分配（中区）")}
<ul>
<li>若未勾选任何订单，则展示「请先在上方的列表中选择订单」</li>
<li>若勾选 N 条订单，则展示 N 行馆址行；馆址（site）只读，取自对应订单；下方灰色小字展示订单号（orderId）</li>
<li>套数（sets）为大于等于 0 的整数输入，默认 1，可修改；馆址行顺序与上方列表一致（按创建时间从新到旧）</li>
<li>若取消勾选某订单，则移除对应馆址行；若再次勾选，则套数优先从上次关闭时的缓存恢复</li>
</ul>
</div>
<div id="form">
${o("","共用表单（下区）")}
${B(["字段","必填","规则"],[["币种（currency）","条件","下拉选项取自【货币信息】中状态为「使用中」的货币代码（展示货币代码）；默认优先 CNY（若仍为使用中），否则取第一项使用中货币；若所选订单为纸质书且语种为外文，则必填；其他情况选填；<strong>参与缓存</strong>"],["定价（price）","条件","若所选订单为纸质书且语种为外文，则必填，须为有效数值且最多两位小数；其他情况选填，若填写则格式同上；<strong>不参与缓存</strong>，每次打开由 MARC 带入或留空"],["套内册数（copiesInSet）","否","正整数，默认 1；若填写则须为正整数；<strong>不参与缓存</strong>，每次打开重置为 1"],["备注（remark）","否","多行文本，最多 500 个字符；<strong>参与缓存</strong>"]])}
<p>币种、定价、套内册数、备注一次填写，作用于全部勾选订单中套数大于 0 的记录。</p>
</div>
<div id="marc">
${o("","MARC 元数据预填（CNMARC）")}
<ul>
<li>若当前选中书目的 MARC 格式为 CNMARC，则弹窗打开后从 MARC <strong>010$d</strong> 子字段读取定价信息，预填币种（currency）与定价（price）</li>
<li>010$d 格式：先 3 位币种代码，再跟金额，无分隔符，例如 <code>CNY10.00</code></li>
<li>预填在缓存恢复<strong>之后</strong>执行，覆盖当次币种与定价</li>
<li>若解析发生回退，则在共用字段上方以<span style="color:#d48806;">琥珀色小字</span>展示提示文案</li>
</ul>
${o("","010$d 解析与回退")}
${B(["010$d 情况","币种","定价","提示"],[["格式正确，如 CNY10.00","解析出的币种代码","解析出的金额","无"],["仅有金额，如 10.00","默认 CNY","解析出的金额","「010$d 未含币种，已默认 CNY」"],["缺失或格式无效","默认 CNY","留空","「010$d 定价未解析，请手动填写定价」"],["解析币种不在使用中列表","回退默认使用中货币（优先 CNY）","仍带入已解析金额","「解析币种 XXX 不可用，已回退为 YYY」"]])}
</div>
<div id="cache">
${o("","缓存恢复")}
<ul>
<li>打开弹窗时恢复：检索条件、勾选订单、馆址套数，以及共用字段中的<strong>币种（currency）、备注（remark）</strong></li>
<li><strong>定价（price）、套内册数（copiesInSet）不参与缓存</strong>；套内册数每次重置为 1，定价留空后由 CNMARC 010$d 带入</li>
<li>若缓存中的采选方式不在可选范围内（如含征订目录），则回退为「全部」</li>
<li>若缓存中的币种已停用或不在使用中列表，则回退为默认使用中货币代码</li>
<li>关闭弹窗时保存检索、勾选、馆址套数、币种与备注；<strong>不保存定价与套内册数</strong></li>
</ul>
</div>
<div id="rules">
${o("","提交校验")}
<ol>
<li>若未勾选任何订单，则提示「请至少选择一个订单」</li>
<li>若勾选订单的资源类型或语种不一致，则提示「请勾选相同资源类型和语种的待发订订单」</li>
<li>若所选订单为纸质书且语种为外文，则币种（currency）与定价（price）必填；定价未填或格式无效时提示「请输入定价」或「定价须为有效数值，最多两位小数」；币种未选时提示「请选择币种」</li>
<li>若任一行套数（sets）不是大于等于 0 的整数，则提示「请为每个馆址填写有效套数」</li>
<li>若所有行套数均为 0，则提示「请至少为一个馆址填写大于0的套数」</li>
<li>若套内册数（copiesInSet）已填但不是正整数，则提示「套内册数须为正整数」</li>
<li>若备注（remark）超过 500 个字符，则提示「备注最多500个字符」</li>
</ol>
${o("","提交结果")}
<ul>
<li>校验通过后，为每条勾选且套数大于 0 的订单各生成一条关联订单行（当前原型以提示框演示）</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>未选中书目：「请先选中书目」</li>
<li>未关联订户：「您没有关联订户，无法加入订单」</li>
<li>无候选订单：「暂无匹配的待发订订单」</li>
<li>检索无结果：「未找到符合条件的订单」</li>
<li>未选订单即提交：「请至少选择一个订单」</li>
<li>勾选资源类型或语种不一致：「请勾选相同资源类型和语种的待发订订单」</li>
<li>套数无效：「请为每个馆址填写有效套数」或「请至少为一个馆址填写大于0的套数」</li>
<li>套内册数无效：「套内册数须为正整数」</li>
<li>纸质书·外文未选币种：「请选择币种」</li>
<li>定价格式无效：「定价须为有效数值，最多两位小数」或「请输入定价」</li>
<li>备注超长：「备注最多500个字符」</li>
<li>CNMARC 010$d 无法解析：币种回退 CNY，定价留空；提示「010$d 定价未解析，请手动填写定价」，不阻断打开弹窗</li>
<li>CNMARC 010$d 无币种仅有金额：币种默认 CNY；提示「010$d 未含币种，已默认 CNY」</li>
<li>解析币种不可用：币种回退默认使用中货币；提示「解析币种 XXX 不可用，已回退为 YYY」</li>
</ul>
</div>`),Lp={title:"书目查询",tabs:{"related-order":{label:"关联订单行",itemIds:["5.5.5.1","5.5.5.2","5.5.5.3"]}},items:[{id:"5.5.5.1",title:"关联订单行列表",tab:"related-order",htmlContent:Dp},{id:"5.5.5.2",title:"新建订单弹窗",tab:"related-order",htmlContent:kp},{id:"5.5.5.3",title:"加入订单弹窗",tab:"related-order",htmlContent:Mp}]};function Bp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["bib-query"]=Lp}const qs=E("5.6.5.1","验收单头信息",`
<div id="overview">
${o("","功能描述")}
<p>页面顶部展示当前验收单摘要信息，含基础属性与汇总指标。嵌入抽屉打开时布局与独立页一致（无面包屑）。</p>
${o("","页面要素")}
<ul>
<li>网格展示字段：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）、语种（language）、发货单号（shipNo）、供应商（supplier）</li>
<li>验收备注（acceptanceRemark）单独占满一行</li>
<li>汇总行：总种数（totalSpecies）、总册数（totalVolumes）、总码洋（totalListPrice）、总实洋（totalNetPrice）</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li><strong>总种数</strong>（totalSpecies）：取当前验收单按种明细行数（按<strong>实际验收</strong>阶段口径）</li>
<li><strong>总册数</strong>（totalVolumes）：Σ（收货套数 × 套内册数/件数）；套内册数/件数缺失时默认按 1</li>
<li><strong>总码洋</strong>（totalListPrice）：Σ（收货套数 × 定价/码洋）；定价缺失时该行贡献为 0</li>
<li><strong>总实洋</strong>（totalNetPrice）：Σ（收货套数 × 实洋）；实洋缺失时该行贡献为 0</li>
<li>头信息汇总<strong>不因</strong>「切换预验收」勾选状态改变</li>
<li>无验收单上下文时，头信息使用默认占位值</li>
</ul>
</div>
`),Ys=E("5.6.5.2","按种 / 按册页签与切换预验收",`
<div id="overview">
${o("","功能描述")}
<p>头信息下方提供「按种」「按册」两个页签；页签行右侧提供复选框「切换预验收」，用于在预验收 / 实际验收种册数据间切换展示。</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>默认进入<strong>按种</strong>；URL 带 <code>view=volume</code> 时进入按册</li>
<li>切换页签更新表格列、筛选字段、导出按钮文案与导出配置字段集；分页回到第 1 页</li>
<li>按册工具栏旁提示文案：「仅提供收货详情」</li>
<li>页签行右侧：复选框<strong>切换预验收</strong>（showPreAcceptance）</li>
<li>默认<strong>不勾选</strong>：按种 / 按册展示实际验收阶段（itemPhase=actual）数据</li>
<li><strong>勾选</strong>：展示预验收阶段（itemPhase=pre）种册数据</li>
<li>两页签共用同一勾选状态；切换按种 / 按册<strong>不重置</strong>勾选；仅更换验收单时重置为不勾选</li>
<li>底层同一套单册记录，禁止复制两套物理行</li>
</ul>
</div>
`),zs=E("5.6.5.3","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>按当前页签与资源类型展示检索条件；支持检索、重置与展开附加条件。</p>
</div>
<div id="fields">
${o("","按种 · 纸质书")}
<p>组合检索（ISBN / 作者 / 正题名 / 订单行号）+ 验收人 + 验收时间（开始/结束日期）</p>
${o("","按种 · 视听资料")}
<p>组合检索（ISBN/ISRC / 题名 / 作者 / 商品条码 / 目录号 / 载体 / 订单行号）+ 验收人 + 验收时间（开始/结束日期）</p>
${o("","按册 · 纸质书")}
<p>组合检索（条码号 / ISBN / 作者 / 正题名）+ 收货人 + 收货时间（开始/结束日期）</p>
${o("","按册 · 视听资料")}
<p>组合检索（条码号 / ISBN/ISRC / 题名 / 作者 / 商品条码 / 目录号 / 载体）+ 收货人 + 收货时间（开始/结束日期）</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点击「检索」按条件过滤当前页签明细并回到第 1 页</li>
<li>点击「重置」清空条件并恢复当前页签全量明细</li>
</ul>
</div>
`),Vp=E("5.6.5.4","按种明细表格与操作",`
<div id="overview">
${o("","功能描述")}
<p>按种维度展示验收汇总行；验收单状态为<strong>进行中</strong>时可对行执行撤销收货 / 撤销换货 / 撤销退货。</p>
${o("","表格列（纸质书）")}
<p>序号、订单行号、ISBN、正题名、作者、定价、币种、发/收/换/退数、最近一次验收时间、最近一次验收人、换/退/撤销收货原因、操作</p>
${o("","表格列（视听资料）")}
<p>在纸质书基础上增加载体、商品条码、目录号、套内件数等视听字段（以页面列为准）</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>换/退/撤销原因为空或不可用时显示「—」；有内容时「查看」悬停展示全文</li>
<li>仅当验收单状态为进行中且页签为按种时显示操作：有收货套数可「撤销收货」；有换货套数可「撤销换货」；有退货套数可「撤销退货」；均无则「—」</li>
<li>撤销换货 / 退货：确认后清零对应套数并刷新原因文案</li>
<li>撤销收货：打开撤销收货弹窗（见 5.6.5.7）</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
`),Fp=E("5.6.5.5","按册明细表格",`
<div id="overview">
${o("","功能描述")}
<p>按册（收货单件）维度展示收货明细；本页签<strong>不提供</strong>撤销收货/换货/退货操作。</p>
${o("","表格列（纸质书）")}
<p>序号、条码号、ISBN、正题名、作者、定价、币种、实洋、单册定价、套内册数、收货人、收货时间</p>
${o("","表格列（视听资料）")}
<p>序号、条码号、ISBN/ISRC、载体、题名、商品条码、目录号、作者、定价、实洋、币种、套内件数、收货人、收货时间</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>操作列固定展示「—」</li>
<li>分页规则同按种</li>
</ul>
</div>
`),Xs=E("5.6.5.6","导出明细与导出配置",`
<div id="overview">
${o("","功能描述")}
<p>工具栏下拉提供「导出明细」「导出配置」。按种按钮文案为「导出验收明细」，按册为「导出收货明细」。按种与按册为<strong>两套独立导出配置</strong>；配置弹窗仅展示<strong>当前验收单资源类型</strong>（纸质书或视听资料）对应字段，左侧类型标签不可切换另一类型。</p>
</div>
<div id="ui">
${o("","导出配置弹窗 UI")}
<ul>
<li>左侧：当前资源类型标签（高亮）</li>
<li>右侧：全选；上方为验收单头字段；分隔线下方为明细字段；六列网格勾选</li>
<li>打开时默认全选当前类型全部字段；确定保存勾选结果（原型提示已保存字段数）</li>
</ul>
</div>
<div id="header-fields">
${o("","共用头字段（按种 / 按册 · 纸质书 / 视听）")}
<p>验收单号、验收单名称、资源类型、语种、供应商、发货单号、总码洋、总实洋、折扣率、总种数、总册数、创建人、创建时间、验收备注</p>
</div>
<div id="species-detail">
${o("","按种 · 纸质书明细字段")}
<p>订单行号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、套内册数、发订套数、收货套数、<strong>收货册数</strong>、换货套数、退货套数</p>
${o("","按种 · 视听资料明细字段")}
<p>ISBN、ISRC、商品条码、目录号、载体、题名、著者、码洋、币种、实洋、出版社、版本/格式、彩胶颜色、厂牌、限量编号、套内件数、发订套数、收货套数、<strong>收货件数</strong>、换货套数、退货套数</p>
</div>
<div id="volume-detail">
${o("","按册 · 纸质书明细字段")}
<p>条码号、订单行号、订单号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、套内册数、单册定价、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、收货人、验收时间、收货备注</p>
${o("","按册 · 视听资料明细字段")}
<p>条码号、订单行号、载体、ISBN、ISRC、商品条码、目录号、题名、著者、码洋、币种、实洋、套内件数、单册定价、收货人、验收时间、验收备注</p>
</div>
<div id="rules">
${o("","导出计算规则")}
${B(["字段","资源类型","计算规则"],[["收货册数（receiveVolumes）","纸质书·按种","若套内册数（copiesInSet）为空，则收货册数为空；否则收货册数 = 收货套数（receiveSets） × 套内册数"],["收货件数（receivePieces）","视听资料·按种","若套内件数（piecesInSet）为空，则收货件数为空；否则收货件数 = 收货套数（receiveSets） × 套内件数"]])}
<ul>
<li>导出明细：若当前筛选结果为空，提示暂无可导出明细；否则提示已导出及文件名（验收单号_验收明细 / 收货明细）</li>
</ul>
</div>
`),jp=E("5.6.5.7","撤销收货",`
<div id="overview">
${o("","功能描述")}
<p>按种明细在进行中状态下，对已收货行可打开「撤销收货」弹窗，填写原因后清零收货套数。</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>确认后更新该行发/收/换/退数中的收货套数为 0，记录撤销原因，刷新原因列，提示「撤销收货成功」</li>
<li>取消关闭弹窗不改数据</li>
</ul>
</div>
`),Hp={title:"验收单详情",tabs:{species:{label:"按种"},volume:{label:"按册"}},items:[{id:"5.6.5.1",title:"验收单头信息",tab:"species",htmlContent:qs},{id:"5.6.5.2",title:"按种 / 按册页签与切换预验收",tab:"species",htmlContent:Ys},{id:"5.6.5.3",title:"筛选查询",tab:"species",htmlContent:zs},{id:"5.6.5.4",title:"按种明细表格与操作",tab:"species",htmlContent:Vp},{id:"5.6.5.6",title:"导出明细与导出配置",tab:"species",htmlContent:Xs},{id:"5.6.5.7",title:"撤销收货",tab:"species",htmlContent:jp},{id:"5.6.5.1",title:"验收单头信息",tab:"volume",htmlContent:qs},{id:"5.6.5.2",title:"按种 / 按册页签与切换预验收",tab:"volume",htmlContent:Ys},{id:"5.6.5.3",title:"筛选查询",tab:"volume",htmlContent:zs},{id:"5.6.5.5",title:"按册明细表格",tab:"volume",htmlContent:Fp},{id:"5.6.5.6",title:"导出明细与导出配置",tab:"volume",htmlContent:Xs}]};function Kp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["acceptance-detail"]=Hp}const Up=E("5.7.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>提供多条件检索，帮助用户定位目标验收单。支持展开附加条件。</p>
${o("","页面要素")}
<ul>
<li><strong>默认显示</strong>：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）</li>
<li><strong>展开后追加</strong>：验收单状态（status）、供应商（supplier）、创建人（creator）、创建时间（createTime）</li>
<li>操作：「检索」过滤列表；「重置」清空条件并恢复全量</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>资源类型（resourceType）选项：全部、纸质书、视听资料</li>
<li>验收单状态（status）选项：全部、未开始、进行中、已结束</li>
<li>供应商（supplier）选项：全部 + 列表中出现过的供应商</li>
<li>验收单号、验收单名称、创建人为文本包含匹配；创建时间按日期（yyyy-MM-dd）与创建时间（time）的日期部分精确匹配</li>
<li>各条件之间为 <strong>AND</strong> 关系；检索后分页回到第 1 页</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配时表格为空，分页显示 0 条</li>
</ul>
</div>
`),Gp=E("5.7.5.2","列表表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>以表格展示验收单列表，支持多选、分页、设为当前工作验收单，并按验收单状态（status）展示行操作。</p>
${o("","表格列")}
<p>复选框、序号（no）、验收单号（acceptanceId）、设为验收单（defaultAccept）、验收单名称（name）、资源类型（type）、语种（lang）、采选方式（method）、供应商（supplier）、发货单号（shipNo）、验收单状态（status）、收/换/退书数（counts）、验收备注（remark）、分配条码（barcode）、创建时间（time）、创建人（creator）、结算状态（settlement）、操作</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>验收单号：蓝色链接，点击进入验收单详情（见 5.6）</li>
<li>设为验收单：单选；已结束（finished）行不可选。选中后将该单设为当前工作验收单（静默，无提示）</li>
<li>验收单状态色：${ot("#6b7280")}未开始、${ot("#0284c7")}进行中、${ot("#4b5563")}已结束</li>
<li>结算状态色：${ot("#6b7280")}未申请、${ot("#d97706")}待结算、${ot("#059669")}已结算</li>
<li>验收备注：有内容时蓝色「查看」悬停全文；无内容时灰色「查看」不可点</li>
<li>分页：默认 10 条/页；工具栏右侧展示已选条数</li>
</ul>
${o("","操作列规则")}
${B(["验收单状态","可用操作"],[["未开始（notStarted）","编辑、删除"],["进行中（inProgress）","编辑、结束验收"],["已结束（finished）","—"]])}
<ul>
<li>删除：确认文案「确定删除验收单「名称」？」；若该单为当前工作验收单则清除当前工作验收单</li>
<li>结束验收：确认后状态改为已结束；若为当前工作验收单则取消设为验收单并清除当前工作验收单</li>
</ul>
</div>
`),Wp=E("5.7.5.3","新增 / 编辑验收单弹窗",`
<div id="overview">
${o("","功能描述")}
<p>工具栏「新增验收单」或行内「编辑」打开表单弹窗，维护验收单头信息。</p>
${o("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 验收单名称（name）、资源类型（resourceType）、语种（language）、采选方式（method）、供应商（supplier）</li>
<li>发货单号（shipNo）、验收备注（remark）</li>
<li>勾选：设为当前工作验收单（setCurrent）；是否支持自动分配条码号（autoBarcode）</li>
<li>若开启自动分配条码：<span style="color:#ef4444">*</span> 条码号类型（barcodeType）、初始条码号（initialBarcode）</li>
<li>采选方式含政采（与系统枚举一致）；供应商随采选方式联动（规则同订单创建）；未选采选方式时供应商下拉禁用</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>新增默认勾选「设为当前工作验收单」「是否支持自动分配条码号」</li>
<li>新增条码号类型可选：小语种成人图书、地方文献、全部语种；编辑可选另含「成人视听」</li>
<li>若验收单状态为<strong>进行中</strong>，则资源类型、语种、采选方式、供应商、自动分配条码相关字段只读锁定；验收单名称、发货单号、备注、设为当前工作验收单仍可改</li>
<li>若用户切换采选方式，且当前供应商不在新列表中，则清空供应商</li>
<li>提交前校验必填；缺项提示「请填写{字段}」；开启自动条码但未填类型/初始号时提示「请填写条码号类型和初始条码号」</li>
<li>新增成功：生成验收单号（acceptanceId），状态为未开始，结算状态为未申请，收/换/退为 0/0/0；提示「验收单已创建」</li>
<li>编辑成功提示「验收单已保存」；勾选设为当前则写入当前工作验收单，取消勾选且原为当前则清除</li>
</ul>
</div>
`),qp=E("5.7.5.4","预验收向导",`
<div id="overview">
${o("","功能描述")}
<p>工具栏「预验收」打开<strong>四步</strong>向导：①上传文件 → ②字段映射 → ③数据解析 → ④数据入库。核对发货单与可收货订单行；通过行写入<strong>预验收草稿</strong>（验收单号 + 订单行号），<strong>不执行收货</strong>。真正收货在逐条收货处置弹窗确认。验收单管理工具栏<strong>已移除批验收</strong>。</p>
${o("","入口前置")}
<ul>
<li>须当前登录馆员已关联订户；否则提示「您没有关联订户，无操作权限」，不打开向导</li>
<li>须勾选<strong>恰好 1 条</strong>验收单状态为未开始或进行中的验收单；否则按钮禁用或提示「请先在列表中勾选一条未开始或进行中的验收单」</li>
<li>打开前将该验收单设为当前工作验收单</li>
</ul>
${o("","向导壳")}
<ul>
<li>标题：「预验收」；右上角关闭（校验/入库进度中禁用）</li>
<li>顶部步骤条：1 上传文件 → 2 字段映射 → 3 数据解析 → 4 数据入库（当前及已过步骤高亮）</li>
<li>底栏随步骤变化（见各步说明）</li>
</ul>
</div>

<div id="step1">
${o("","第 1 步：上传文件")}
${o("","页面要素")}
<ul>
<li><span style="color:#ef4444">*</span> 文件上传（file）：「上传文件」按钮；隐藏文件选择器，accept 为 .xls/.xlsx</li>
<li>已选文件：展示文件名（fileName）+ 清除（×）</li>
<li>提示：「支持类型：xls、xlsx」；校验失败时红色错误文案</li>
</ul>
${o("","交互逻辑")}
<ul>
<li>点「上传文件」打开系统文件选择；选中后校验扩展名并解析为矩阵（原型 Mock）</li>
<li>清除文件：清空已选文件与错误提示</li>
<li>底栏：「取消」关闭向导；主按钮文案「上传」——已选合法文件且解析成功后可点，进入第 2 步</li>
<li>进入第 2 步时<strong>不</strong>自动读取表头</li>
</ul>
${o("","业务规则")}
<ul>
<li>仅允许扩展名 xls、xlsx；其它格式提示「请上传 xls/xlsx 格式文件」，不可进入下一步</li>
</ul>
${o("","异常处理")}
<ul>
<li>未选文件或解析为空：主按钮不可用</li>
<li>类型非法：展示红色错误，不可进入下一步</li>
</ul>
</div>

<div id="step2">
${o("","第 2 步：字段映射")}
${o("","页面要素")}
<ul>
<li>工具栏<strong>同一行</strong>（可换行）：映射模板（下拉，默认「选择模板」）→ <span style="color:#ef4444">*</span> 表头行号（headerRow）→「读取表头」→「保存模板」→「删除模板」</li>
<li>表头错误/变更提示：无效行号红色；已读过又改行号未再读时琥珀色提示「表头行号已变更，请点击「读取表头」后继续」</li>
<li>说明文案：将文件列映射到系统字段（标 * 为必填）</li>
<li>未读表头时灰色提示：请填写表头行号后点击「读取表头」，再进行列映射</li>
<li>列映射表（读表头后出现）三列：文件列名、系统字段（表头与下拉<strong>居中</strong>）、是否校验（复选框；列名旁有「i」信息标签，悬停展示系统校验规则全文）</li>
</ul>
${o("","「是否校验」旁「i」浮窗文案（原文）")}
<ol>
<li>字段校验：勾选后，映射字段与订单行数据不一致则校验失败；未勾选允许数据不同。</li>
<li>强制校验：订单行号、收货套数默认开启且不可取消。
  <ul>
  <li>行号用于订单匹配；</li>
  <li>收货套数≤0 标记【套数非法】；套数超出待收数量不失败，按订单行待收数量存储并归入异常数据导出。</li>
  </ul>
</li>
<li>ISBN、ISRC 比对：系统自动去除发货单字段内空格、「-」后匹配。</li>
<li>数据错误：订单行号为空，或定价 / 码洋、实洋、收货套数、套内册数（件数）无法解析。</li>
<li>未匹配：关联订户下无可收货的对应订单行。</li>
<li>验收单不匹配：订单行的资源类型、语种、采选方式、供应商与验收单信息不一致。</li>
</ol>
${o("","交互逻辑")}
<ul>
<li>底栏：「取消」｜「上一步」（回第 1 步）｜「下一步」。下一步可用条件：已成功读取表头且行号未变更未再读、有解析行数据（不要求必填已映完）</li>
<li>点「下一步」时才校验必填标准字段是否已映射；未齐则提示（如「请映射「订单行号」字段」）并停留本步。点「下一步」<strong>不</strong>静默写模板</li>
</ul>
${o("","映射模板交互")}
${B(["操作","行为"],[["下拉默认","首项「选择模板」；其余为已保存模板名称"],["选用某一模板","若有表头行号（headerRow）则写入输入框并按该行重新读取表头；按文件列名对齐写入列映射（columnMapping）；标准字段按当前验收单资源类型×语种清洗；恢复是否校验（mustMatchFields，缺省用默认勾选集）；订单行号/收货套数映射列「是否校验」仍强制勾选"],["切回「选择模板」","清空列映射与是否校验（列名保留时各列改为不映射、不勾选）；不清空表头行号与已读列名"],["「读取表头」","表头行号必填。未填、非正整数或超出文件总行数：红色提示「表头行号无效」，不生成列。按 Excel 物理行号（从 1 起）将该行单元格作为文件列名（空单元格记为「列N」；重名加 _2、_3…）；无原始文件预览。该行下方无数据行：红色提示「表头行下方无数据行」。成功后展示列映射表，该行号视为已应用。首次读取（尚无已映射列）：按列名生成默认列映射并套用默认「是否校验」。再次读取（已有映射）：尽量保留能对上当前列名的映射与勾选。不写入模板、不改变当前选中模板"],["「保存模板」（未选）","表头行号必填，未填提示「请填写表头行号」。须已读表头，否则「请先读取表头后再保存模板」；行号已变更未再读则提示先读取。必填字段未映射则提示（如「请映射「订单行号」字段」）并中止。弹「请输入模板名称」；取消中止；空名提示「请输入模板名称」；重名确认是否覆盖；成功提示「模板已保存」并选中该名称"],["「保存模板」（已选）","表头行号必填。须已读表头且行号未变更未再读。必填字段未映射则提示并中止。覆盖当前模板的表头行号 + 列映射 + 是否校验列表；提示「模板已更新」（不再弹名称）"],["「删除模板」","未选时禁用。已选确认「确定删除模板「名称」？」；删除后下拉回到「选择模板」；不自动清空当前列映射"]])}
<p>模板落库字段：表头行号（headerRow）+ 列映射（columnMapping）+ 是否校验字段列表（mustMatchFields，可勾选的标准字段 key）。</p>
${o("","业务规则")}
<ul>
<li>系统字段按验收单<strong>资源类型（resourceType）× 语种（language，中文/外文分档）</strong>四套；下拉扁平，必填项标签带 *</li>
<li><strong>纸质书必填*</strong>：订单行号（orderLine）、收货套数（receiveQty）、套内册数（volCount）、实洋（netPrice）、定价（price）</li>
<li><strong>视听必填*</strong>：订单行号、收货套数、套内件数（volCount）、实洋、码洋（listPrice）</li>
<li>订单行号、收货套数「是否校验」<strong>默认勾选且不可取消</strong>（强制校验）</li>
<li><strong>默认可取消勾选「是否校验」</strong>：实洋、套内册数/件数、定价（纸质）/码洋（视听）；其余默认不勾</li>
<li>同一标准字段被多列映射时：任一列勾选即计入该字段须校验（按标准字段 key 去重）</li>
</ul>
${o("","异常处理")}
<ul>
<li>表头行号未填、非正整数或超出文件总行数：提示「表头行号无效」，不生成列</li>
<li>表头行下方无数据行：提示「表头行下方无数据行」</li>
<li>行号已变更未再读：不可进入第 3 步；点下一步时提示先读取表头</li>
<li>保存模板时表头行号未填：提示「请填写表头行号」</li>
<li>未读表头就保存模板：提示「请先读取表头后再保存模板」</li>
<li>保存模板时必填未映射：提示「请映射「{字段}」字段」，不保存</li>
<li>新建模板名称为空：「请输入模板名称」</li>
</ul>
</div>

<div id="step3">
${o("","第 3 步：数据解析")}
${o("","页面要素")}
<ul>
<li>进行中：文案「正在校验，请稍候…」+ 进度条 + 百分比</li>
<li>完成后：汇总「共校验到 N 条数据，其中 X 条成功，Y 条失败」（成功绿色、失败有值时红色）；当超收数 M &gt; 0 时成功侧为「X 条成功（含 M 条超收）」</li>
<li>计数：X = 校验结果为「通过」的行数（含超收）；M = 通过且套数超出待收的行数；Y = 非通过行数</li>
<li>橙色提示：「点击「下一步」按钮，只导入成功行，不导入失败行。」</li>
<li>灰色提示：「「下载解析结果」会一并导出超收行。」</li>
<li>当 Y &gt; 0 或 M &gt; 0（存在失败或超收导出行）时展示「下载解析结果」按钮</li>
</ul>
${o("","交互逻辑")}
<ul>
<li>从第 2 步进入后自动开始校验（展示进度），完成后展示汇总</li>
<li>底栏（完成后）：「取消」｜「下一步」。成功条数 X = 0 时「下一步」置灰</li>
<li>「下载解析结果」：导出校验失败行 + 超收（仍通过）行；Excel（.xls）= 原发货单全部列（原顺序）+ 失败原因；超收原因示例「套数大于待收（发货单 n/待收 m）」；原列保留发货单原始套数</li>
<li>校验/入库进度中不可关闭向导</li>
</ul>
${o("","业务规则（校验）")}
<p>匹配池：当前馆员关联订户范围内的可收货订单行。若关联订户下当前无任何可匹配订单行，仍完成解析；各发货单行按<strong>未匹配</strong>计失败（失败原因「无对应可收货订单行」），不单独弹「无关联订户 / 无可收货订单行」类阻断提示。</p>
<p>按行判定顺序与结果类型：</p>
${B(["结果类型","判定条件","失败原因（示例）"],[["数据错误","订单行号为空；或必填金额未解析出有效值（纸质须定价或码洋、视听须码洋；且须实洋）；或收货套数 / 套内册数（件数）无法解析为有效数量","数据解析失败"],["未匹配","能解析出订单行号，但在关联订户可收货订单行中找不到该订单行号","无对应可收货订单行"],["验收单不匹配","找到对应订单行，但其资源类型、语种（中/外分档）、采选方式、供应商与当前验收单头不一致","如「资源类型不一致（验收单 …/订单行 …）」等，多条用「；」拼接"],["套数非法","已匹配且头属性一致后：收货套数 ≤0","套数 ≤ 0"],["不一致","仅对勾选「是否校验」且已映射的标准字段与订单行不等（收货套数不走本类）。ISBN、ISRC 比对前先去掉发货单映射值中的空格与「-」（订单行侧同样去空格/横线后比较）",'「"{字段}"订单行 …/发货单…」'],["通过","未命中以上失败；收货套数＞0（含大于待收）","—"]])}
<ul>
<li>收货套数＞该订单行待收：<strong>不记校验失败</strong>，该行仍为通过（计入 X，并计入 M）；草稿收货套数按<strong>待收套数</strong>存储；失败数据仍导出该发货单行，失败原因为「套数大于待收（发货单 n/待收 m）」（可与其它失败原因用「；」拼接）</li>
<li>允许部分成功：仅「通过」行可进入第 4 步入库（含超收）</li>
<li>未勾选「是否校验」的已映射字段即使与订单行不同，也不记「不一致」</li>
</ul>
${o("","异常处理")}
<ul>
<li>全部失败（含全部未匹配）：仅可取消或下载解析结果，不可入库；「下一步」置灰</li>
</ul>
</div>

<div id="step4">
${o("","第 4 步：数据入库")}
${o("","页面要素")}
<ul>
<li>进行中：文案「正在入库，请稍候…」+ 进度条 + 百分比</li>
<li>成功：${ot("#22c55e")}绿色圆标 ✓ + 文案「入库成功」（样式对齐订单导入向导）</li>
<li>失败：${ot("#ef4444")}红色圆标 × + 文案「入库失败，请联系管理员」</li>
</ul>
${o("","交互逻辑")}
<ul>
<li>第 3 步点「下一步」后进入本步并自动写入通过行草稿（含超收行，展示入库进度）</li>
<li>入库过程中不可关闭；完成后底栏仅「关闭」，退出向导</li>
<li>本步不可返回上一步改映射</li>
</ul>
${o("","业务规则（草稿）")}
<ul>
<li>维度：验收单号（acceptanceId）+ 订单行号（orderLine）</li>
<li>内容：通过行已映射发货单值（含未勾选「是否校验」的差异字段），供逐条收货带入；若发货单收货套数大于待收，草稿收货套数存待收套数</li>
<li>同订单行再次预验收成功入库 → <strong>覆盖已有草稿</strong>（不改订单行本身）</li>
<li>不改变验收单状态；不执行收货</li>
<li>逐条收货打开处置弹窗时带入收货套数、定价/码洋、实洋、套内册数/件数，收货区显示「已带入预验收数据」；确认收货成功后清除该行草稿</li>
</ul>
${o("","异常处理")}
<ul>
<li>入库失败（含无验收单号、写入条数为 0 等）：红色圆标结果页，不写或写不全草稿；用户可关闭后重试</li>
</ul>
</div>
`),Yp=E("5.7.5.5","批验收（已移除）",`
<div id="overview">
${o("","功能描述")}
<p>验收单管理工具栏「批验收」及导入即收货向导已移除；差异核对与草稿落库统一走「预验收」，真正收货在逐条收货中确认。</p>
</div>
`),zp=E("5.7.5.6","申请结算",`
<div id="overview">
${o("","功能描述")}
<p>工具栏「申请结算」对勾选验收单提交结算申请。</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>未勾选时提示「请先勾选验收单」</li>
<li>打开确认弹窗：「确认为所选 N 条验收单申请结算？」</li>
<li>确定后：所选行中结算状态为未申请（notApplied）的改为待结算（pending）；提示「已为 N 条验收单提交结算申请」</li>
</ul>
</div>
`),Xp=E("5.7.5.7","导出列表与导出配置",`
<div id="overview">
${o("","功能描述")}
<p>工具栏「导出列表」下拉提供「导出配置」「导出清单」。</p>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>导出配置：弹窗勾选列表导出字段；打开时基于配置字段集；确定后提示「导出配置已保存（N 个字段）」</li>
<li>可配置字段：验收单号、验收单名称、资源类型、语种、采选方式、供应商、发货单号、验收单状态、收/换/退书数、验收备注、分配条码、创建时间、创建人、结算状态</li>
<li>导出清单：原型阶段提示演示文案</li>
</ul>
</div>
`),Jp={title:"验收单管理",items:[{id:"5.7.5.1",title:"筛选查询",htmlContent:Up},{id:"5.7.5.2",title:"列表表格与行操作",htmlContent:Gp},{id:"5.7.5.3",title:"新增 / 编辑验收单弹窗",htmlContent:Wp},{id:"5.7.5.4",title:"预验收向导",htmlContent:qp},{id:"5.7.5.5",title:"批验收（已移除）",htmlContent:Yp},{id:"5.7.5.6",title:"申请结算",htmlContent:zp},{id:"5.7.5.7",title:"导出列表与导出配置",htmlContent:Xp}]};function Qp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["acceptance-manage"]=Jp}const Zp=E("5.8.5.1","当前工作验收单头信息",`
<div id="overview">
${o("","功能描述")}
<p>页面顶部展示当前工作验收单的头信息与本单累计收/换/退套数，并提供跳转验收单详情入口。</p>
${o("","页面要素")}
<ul>
<li>验收单号（acceptanceId）：有值时蓝色链接，点击进入验收单详情（按种视角）</li>
<li>验收单名称（name）、供应商（supplier）、语种（lang）、发货单号（shipNo）</li>
<li>总种数、总册数、总码洋、总实洋（随验收明细汇总刷新）</li>
<li>收货套数、换货套数、退货套数（本验收单按种累计）</li>
<li>若无当前工作验收单：对应字段显示「—」，并提示先在验收单管理设为当前工作验收单</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>语种有值时以红色强调展示</li>
<li>头信息只读；切换当前工作验收单后本页检索结果与选中行清空</li>
</ul>
</div>
`),th=E("5.8.5.2","订单行检索",`
<div id="overview">
${o("","功能描述")}
<p>按当前验收单资源类型提供检索字段与馆址过滤，点击「检索」加载可处置的订单行。</p>
${o("","页面要素")}
<ul>
<li>检索字段下拉 + 关键字输入 + 「检索」按钮</li>
<li>馆址（location）下拉：含「全部」与使用中馆址选项</li>
<li>若资源类型为视听资料：额外展示载体（carrier）下拉</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
${B(["资源类型","检索字段选项"],[["纸质书","ISBN（isbn）、订单行号（orderLine）、正题名（title）"],["视听资料","资源标识（resourceId）、订单行号（orderLine）、题名（title）"]])}
<ul>
<li>无当前工作验收单时：检索控件禁用，占位提示「请先选择验收单」；点击检索提示「请先在验收单管理中选择当前工作验收单」</li>
<li>检索后分页回到第 1 页；清空原选中行并关闭处置弹窗（除非结果仅 1 条，见 5.8.5.3）</li>
<li>各条件与馆址、载体为组合过滤（AND）</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>未检索前表格空态：「请输入检索条件后点击检索」</li>
<li>无当前验收单空态：「请先在验收单管理中选择当前工作验收单」</li>
<li>检索无数据：「暂无数据」</li>
</ul>
</div>
`),eh=E("5.8.5.3","订单行列表与选行打开",`
<div id="overview">
${o("","功能描述")}
<p>以表格展示检索结果；选中一行即打开「逐条收货/换货/退货」处置弹窗。页面<strong>不再</strong>提供底栏独立「收货 / 换货 / 退货」按钮。</p>
${o("","表格列")}
<p><strong>纸质书</strong>：单选、馆址（location）、订单行号（orderLine）、正题名（title）、ISBN（isbn）、作者（author）、出版社（publisher）、版本（edition）、定价（price）、币种（currency）、套内册数（copies）、发/收/换/退/撤订（counts）、备注（remark）、发订人（orderer）、发订时间（orderTime）</p>
<p><strong>视听资料</strong>：单选、馆址、订单行号、载体（carrier）、ISBN、商品条码（barcode）、目录号（catalogNo）、题名（title）、版本/格式（format）、著者（author）、码洋（price）、币种、套内件数（copies）、发/收/换/退/撤订、备注、发订人、发订时间</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点击行或点行首单选：选中该行并<strong>自动打开</strong>处置弹窗（内容区自上而下展示收货、换货、退货）</li>
<li>若检索结果<strong>仅 1 条</strong>：检索完成后自动选中并打开处置弹窗</li>
<li>订单行号：蓝色链接，点击跳转订单行详情（不触发行选中打开，使用 stop）</li>
<li>备注：有内容时蓝色「查看」悬停全文</li>
<li>分页：默认 <strong>10</strong> 条/页，可选 5 / 10 / 20</li>
<li>处置弹窗打开期间全屏遮罩，列表与检索区不可点；换行须先关闭弹窗再选另一行</li>
<li>再次检索或切换当前验收单导致选中行不在结果中：关闭弹窗并清空选中</li>
</ul>
</div>
`),ih=E("5.8.5.4","逐条收货/换货/退货处置弹窗",`
<div id="overview">
${o("","功能描述")}
<p>合并处置弹窗标题为「逐条收货/换货/退货」，<strong>无页签</strong>；内容区纵向三段「收货 → 换货 → 退货」可上下滚动；底栏统一「确定」，一次提交已填处置。弹窗固定高度，顶栏 / 统计条 / 底栏固定。若订单行已换货套数 &gt; 0，收货时可选择是否优先对换货记录收货，并按规则拆分普通收货与换货冲销。</p>
${o("","壳与布局")}
<ul>
<li>顶栏：标题「逐条收货/换货/退货」+ 关闭（<strong>不含</strong>订单行号）</li>
<li>统计条（只读）：发订套数、已收货套数、已换货套数、已退货套数、<strong>待收货套数</strong>、订单行备注（过长截断，悬停全文）</li>
<li>内容区：分区标题「收货」「换货」「退货」；若存在预验收草稿，收货标题旁展示标签「已带入预验收数据」；窄屏表单单列</li>
<li>底栏：「关闭」+ 纸质且需分配条码时「预览」+ 统一「确定」</li>
<li>点遮罩或关闭：关弹窗，不提交草稿；行选中可保留，再次点该行可再打开</li>
</ul>
</div>
<div id="pending">
${o("","待收货套数与一次提交")}
<p><strong>待收货套数（pendingSets）</strong> = max(0, 发订套数 − 已收货套数 − 已退货套数)。<strong>不含</strong>已换货套数——已有换货仍可继续收货。</p>
<p><strong>可普通收货容量（normalCap）</strong> = max(0, 待收货套数 − 已换货套数)。</p>
<ul>
<li>点「确定」：数量为有效正数的区块参与提交；空或 0 跳过且不校验该块原因/收货必填</li>
<li>收、换、退均无有效数量 → 提示「请至少填写一种验收套数」，不写库、不关弹窗</li>
<li><strong>收货套数 + 换货数量 + 退货数量 ≤ 提交时刻待收货套数</strong>；否则提示「验收套数合计不能大于待收套数（当前待收 N）」</li>
<li>校验通过后按 <strong>收货 → 换货 → 退货</strong> 依次写库；收货段先按下方规则拆分再写库；成功提示「提交成功」，刷新列表与头信息后<strong>一律关闭弹窗</strong>（不按待收是否为 0 决定）</li>
</ul>
</div>
<div id="receive">
${o("","收货分区")}
<p>按当前验收单资源类型展示完整收货表单。</p>
${B(["资源类型","主要字段","必填要点（有收货套数时）"],[["纸质书","ISBN、作者、正题名、定价、币种、实洋、套内册数、收货套数、条码初始号、收货备注（receiveRemark）","正题名、定价、实洋、套内册数；若验收单开启自动分配条码则条码初始号必填"],["视听资料","ISBN、ISRC、商品条码、目录号、载体、版本/格式、题名、著者、码洋、币种、实洋、彩胶颜色、厂牌、限量编号、系列名称（seriesName）、是否签名（isSigned）、是否老唱片（isOldRecord）、获奖信息（award）、北京出版社（bjPublisher）、分类（category）、盘号（discNo）、老唱片品牌（oldRecordBrand）、剧种（operaType）、年代（era）、套内件数、收货套数、收货备注（receiveRemark）","载体、题名、码洋、实洋、套内件数"]])}
<ul>
<li>外文语种验收单：定价/码洋可带出原币价，币种默认外币；中文则按行内定价与币种预填</li>
<li>收货套数默认带出当前待收货套数（可改）</li>
<li><strong>收货备注</strong>为本面板唯一备注输入（纸质/视听均最多 <strong>500</strong> 字）；即使收货套数为空未参与提交，该输入框仍展示</li>
<li>若存在预验收草稿：打开时带入收货套数、定价/码洋、实洋、套内册数/件数；视听另可带入系列名称、是否签名、是否老唱片、获奖信息、北京出版社、分类、盘号、老唱片品牌、剧种、年代（草稿非空才覆盖）；收货区标题旁显示「已带入预验收数据」；换货/退货不带入；本次含收货且收货写库成功后清除该行草稿</li>
</ul>
${o("","优先对换货记录收货")}
<ul>
<li>显示条件：订单行<strong>已换货套数 &gt; 0</strong>（不论换货记录是否已到货）；= 0 时不展示、不占位</li>
<li>位置：收货备注下方；文案「优先对换货记录收货」；打开弹窗时默认<strong>不勾选</strong></li>
<li>本次无有效收货套数时，忽略勾选状态（不参与拆分）</li>
<li>仅作用于本处置弹窗；发货单导入等其他收货入口不适用</li>
</ul>
${B(["勾选状态","普通收货量（normal）","换货冲销量（offset）"],[["否（普通优先）","min(收货套数 R, 可普通收货容量 normalCap)","R − normal"],["是（换货优先）","R − offset","min(R, 已换货套数 E)"]])}
<p>示例（发订 10 / 已收 0 / 已换 3 / 已退 0 → 待收 10，normalCap 7）：</p>
${B(["勾选","收货套数 R","normal","offset"],[["否","5","5","0"],["否","9","7","2"],["是","2","0","2"],["是","9","6","3"]])}
${o("","写回规则")}
<ul>
<li><strong>普通部分</strong>（normal &gt; 0）：订单行 / 验收按种已收货套数增加 normal；不改已换货套数；不改换货记录表</li>
<li><strong>换货冲销部分</strong>（offset &gt; 0）：已收货套数增加 offset，已换货套数减少 offset（不低于 0）；换货记录表按该订单行、状态「未到货」、换货时间由早到晚依次冲销（已撤销跳过）；累加到货套数，到货批次 = 当前工作验收单号；剩余未到货归零时状态变为「已到货」</li>
<li>勾选时写库顺序：先冲销部分，再普通部分；不勾选时：先普通部分，再冲销部分</li>
</ul>
${o("","条码预览与分配结果（纸质 · 需分配条码时）")}
<ul>
<li>「预览」：根据条码初始号、收货套数、套内册数展示预分配/未分配区间；约 3 秒自动关闭，也可点「已知晓」提前关闭（不视为提交）</li>
<li>「确定」且本次含收货：先展示已分配/未分配结果；约 3 秒自动「已知晓」并完成整单确定，亦可手动点「已知晓」；若有空条码提示「注意：本次收货有空条码」</li>
</ul>
</div>
<div id="exchange-return">
${o("","换货分区")}
<p>换货数量与换货原因同一行展示；标签前不展示必填标识；<strong>不展示</strong>换货备注输入框。换货数量不为空且不为 0 时，换货原因必填。</p>
${B(["字段","必填","说明"],[["换货数量（exchangeQty）","有换货数量时是","正数；与收/退合计 ≤ 待收货套数"],["换货原因（exchangeReason）","有换货数量时是","选项：换货、残缺损"],["换货备注","—","界面不展示；写库时取收货备注（receiveRemark）"]])}
${o("","退货分区")}
<p>退货数量与退货原因同一行展示；标签前不展示必填标识；<strong>不展示</strong>退货备注输入框。退货数量不为空且不为 0 时，退货原因必填。</p>
${B(["字段","必填","说明"],[["退货数量（returnQty）","有退货数量时是","正数；与收/换合计 ≤ 待收货套数"],["退货原因（returnReason）","有退货数量时是","选项：退货、损坏退货"],["退货备注","—","界面不展示；写库时取收货备注（receiveRemark）"]])}
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>三种处置均无有效数量：「请至少填写一种验收套数」</li>
<li>收货缺必填：对应提示（如「请填写正题名」「请选择载体」等）</li>
<li>换/退有数量缺原因：提示请选择换货/退货原因</li>
<li>合计超待收：「验收套数合计不能大于待收套数（当前待收 N）」；不写库、不关弹窗</li>
<li>单流套数无效或超过待收：「操作失败：套数无效」或「超过待收货套数（当前待收 N）」</li>
<li>预览前未填条码初始号/有效收货套数/套内册数：对应提示，不打开预览</li>
<li>换货记录可冲销量不足：提示「换货记录可冲销量不足（已冲 X，缺口 Y），已按实际可冲量更新」；按实际可冲量更新换货记录与订单行已换扣减</li>
</ul>
</div>
`),lh={title:"逐条收货",items:[{id:"5.8.5.1",title:"当前工作验收单头信息",htmlContent:Zp},{id:"5.8.5.2",title:"订单行检索",htmlContent:th},{id:"5.8.5.3",title:"订单行列表与选行打开",htmlContent:eh},{id:"5.8.5.4",title:"逐条收货/换货/退货处置弹窗",htmlContent:ih}]};function nh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["receive-by-item"]=lh}const sh=E("5.9.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>多条件检索订户列表，支持展开更多条件。</p>
${o("","页面要素")}
${B(["字段","控件","说明"],[["订户名称（name）","文本","模糊匹配"],["所属机构（institutionName）","文本","模糊匹配订户所属机构展示名"],["资源类型（resourceType）","下拉","全部 / 纸质书 / 视听资料"],["预算名称（budget）","文本","模糊匹配订户已配预算"],["订户状态（status）","下拉（展开）","全部 / 使用中 / 已停用"],["创建日期（createDate）","日期范围（展开）","起止日期"]])}
<ul>
<li>「检索」「重置」；布局约 3 列</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>点「检索」按当前条件过滤并回到第 1 页</li>
<li>点「重置」清空条件并恢复全量列表</li>
</ul>
${o("","业务规则")}
<ul>
<li>各已填条件为 AND 组合</li>
<li>资源类型、预算按订户已配置业务范围字段匹配；所属机构按展示名模糊匹配</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：表格展示过滤结果</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配：表格空态「暂无数据」</li>
</ul>
</div>
`),rh=E("5.9.5.2","数据表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>分页展示订户；提供新增、编辑、启停、删除及查看馆员入口。</p>
${o("","页面要素")}
<ul>
<li>工具栏：「新增订户」</li>
<li>表格列：序号、订户名称、所属机构、资源类型、预算名称、订户状态、馆员列表、创建日期、操作</li>
<li>订户名称：蓝色链接，点开查看详情</li>
<li>订户状态：<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#52c41a;margin-right:6px;"></span>使用中（绿色）/ <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff4d4f;margin-right:6px;"></span>已停用（红色）</li>
<li>馆员列表：有数据且可查看时蓝色「查看」；否则灰色「查看」不可点</li>
<li>操作列：编辑；使用中另有停用、删除；已停用另有启用、删除（无独立「权限配置」）</li>
<li>创建日期列头可切换升/降序（默认降序）</li>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点「新增订户」打开完整表单弹窗（新增模式）</li>
<li>点「编辑」打开完整表单弹窗（编辑模式）</li>
<li>点状态操作打开对应确认弹窗</li>
<li>点馆员「查看」打开馆员名单弹窗</li>
</ul>
${o("","业务规则")}
<ul>
<li>列表「所属机构 / 资源类型 / 预算名称」取自该订户编辑保存字段；所属机构未填时展示「—」</li>
<li>新增订户默认状态为使用中；基本信息与三页签字段在新增/编辑弹窗中一次维护</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：行操作结果即时反映到列表</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无数据：表格空态（前端 Mock）</li>
</ul>
</div>
`),oh=E("5.9.5.3","新增/编辑订户",`
<div id="overview">
${o("","功能描述")}
<p>新增与编辑共用同一弹窗：上半基本信息（订户名称、备注）；备注下方三个横向页签——<strong>业务范围</strong>、<strong>查重配置</strong>、<strong>所属组织</strong>。一次提交保存全部字段。本版无独立「权限配置」入口、无「添加操作许可」、无数据归属。</p>
${o("","页面要素")}
<ul>
<li>标题：新增订户 / 编辑订户；内容区可纵向滚动；底栏取消 / 提交（新增）或 取消 / 保存（编辑）</li>
<li>上半：订户名称、备注</li>
<li>下半页签（默认「业务范围」）：业务范围 / 查重配置 / 所属组织</li>
<li><strong>查重配置</strong>页签内分两块：<strong>查重范围</strong>、<strong>单件显示范围</strong>；每块均含所属分馆、所属馆藏地</li>
</ul>
${B(["页签","字段","必填","控件","说明"],[["业务范围","资源类型（types）","是","可搜索多选","至少 1 项"],["业务范围","预算管理（budgets）","是","可搜索多选","至少 1 项；界面标签为「预算管理」"],["业务范围","条码号类型（barcodeTypes）","是","可搜索多选","至少 1 项"],["查重配置 · 查重范围","所属分馆（dedupBranchCodes）","否","可搜索多选","空表示馆藏查重不限分馆"],["查重配置 · 查重范围","所属馆藏地（dedupCollectionCodes）","否","可搜索多选","已选分馆 → 仅下级并集；未选分馆 → 全部；变更分馆后剔除不合法项"],["查重配置 · 单件显示范围","所属分馆（displayBranchCodes）","否","可搜索多选","空表示未限定；仅影响单件展示侧配置"],["查重配置 · 单件显示范围","所属馆藏地（displayCollectionCodes）","否","可搜索多选","已选分馆 → 仅下级并集；未选分馆 → 全部；变更分馆后剔除不合法项"],["所属组织","所属机构（institutionId）","是","可搜索单选","展示编码 | 名称"],["所属组织","所属馆区（campusId）","否","可搜索单选","依赖已选机构；未选机构时禁用；变更机构清空馆区及以下"],["所属组织","所属馆（branchId）","否","可搜索单选","依赖已选馆区；未选馆区时禁用；变更馆区清空所属馆及馆藏地"],["所属组织","所属馆藏地（collectionId）","否","可搜索单选","依赖已选所属馆；未选所属馆时禁用；变更所属馆清空"]])}
${B(["基本字段","必填","控件","说明"],[["订户名称（name）","是","文本","去首尾空格；最长 50；不可与其他订户重名"],["备注（remark）","否","多行文本","最长 500"]])}
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>打开时带入当前订户已存数据（编辑）或空表（新增）；默认选中「业务范围」页签</li>
<li>变更所属机构 → 清空所属馆区、所属馆、所属馆藏地</li>
<li>变更所属馆区 → 清空所属馆、所属馆藏地</li>
<li>变更所属馆 → 清空所属馆藏地</li>
<li>变更「查重范围」或「单件显示范围」中的所属分馆后，分别剔除对应块中不再合法的所属馆藏地选项</li>
<li>校验失败时字段下展示错误文案，不关闭弹窗，并自动切到首个失败字段所在页签</li>
<li>提交成功后关闭弹窗并刷新列表</li>
</ul>
${o("","业务规则")}
<ul>
<li>所属组织：所属机构必填；所属馆区、所属馆、所属馆藏地可空</li>
<li>查重配置四字段均可空；查重范围与单件显示范围相互独立</li>
<li>停用节点：编辑时已选项仍可展示</li>
<li><strong>馆员多订户合并（供馆藏查重提交）</strong>：按馆员关联订户先后顺序，合并各订户「查重配置 → 查重范围」的分馆编码与馆藏地编码（首次出现保留）；见 5.3.5.5</li>
<li>订单查重不使用本范围</li>
<li>单件显示范围用于查重结果「单件」页签过滤与馆藏树裁剪（见 5.3.5.6），不参与馆藏查重检索合并与本馆/全市传参</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：编辑时已选中目标订户</li>
<li>后置：新增行插入列表顶部；编辑更新全部表单字段</li>
</ul>
${o("","异常处理")}
${B(["场景","提示"],[["名称为空","请输入"],["名称超长","已超字符限制"],["名称重复","已存在"],["备注超长","已超字符限制"],["资源类型/预算管理/条码类型/所属机构未选","请选择"]])}
</div>
`),ah=`
<details>
<summary style="cursor:pointer;color:#8c8c8c;">【5.9.5.4 配置弹窗（已废弃）】</summary>
<div style="padding:8px 0 4px 12px;border-left:3px solid #d9d9d9;margin:8px 0;color:#595959;">
<p>原独立「配置」弹窗已合并至 <strong>5.9.5.3 新增/编辑订户</strong>；列表不再提供「配置」入口。业务范围、查重配置、所属组织在新增/编辑弹窗页签内一次维护。</p>
</div>
</details>
`,ch=E("5.9.5.5","查看订户详情",`
<div id="overview">
${o("","功能描述")}
<p>只读展示订户基本信息与权限范围（含业务、查重配置、所属组织相关字段）。</p>
${o("","页面要素")}
<ul>
<li>标题：查看订户；页签：基本信息 / 权限范围</li>
<li>基本信息：订户名称、订户状态、创建日期、备注</li>
<li>权限范围：资源类型、预算管理、条码号类型、查重范围·分馆、查重范围·馆藏地、单件显示·分馆、单件显示·馆藏地、所属机构、所属馆区、所属馆、所属馆藏地（空则「—」）</li>
<li>底部：关闭</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点订户名称打开；默认基本信息页签；关闭不修改数据</li>
</ul>
${o("","业务规则")}
<ul>
<li>只读；与列表当前行数据一致</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：列表存在目标订户</li>
<li>后置：无</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无</li>
</ul>
</div>
`),uh=E("5.9.5.6","停用 / 启用 / 删除",`
<div id="overview">
${o("","功能描述")}
<p>对订户执行停用、启用或删除；弹窗标题随操作为「停用订户 / 启用订户 / 删除订户」。</p>
${o("","页面要素")}
<ul>
<li>展示当前订户名称、编码（序号）及备注输入（原型字段；确认即执行状态变更或删除）</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>确认后：停用 → 状态已停用；启用 → 使用中；删除 → 从列表移除</li>
<li>取消或关闭不变更</li>
</ul>
${o("","业务规则")}
<ul>
<li>使用中可停用/删除；已停用可启用/删除</li>
<li>删除为物理移除列表行（原型）；正式环境是否软删由后端约定</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：已选中目标订户</li>
<li>后置：列表刷新</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无（前端 Mock）</li>
</ul>
</div>
`),dh=E("5.9.5.7","馆员列表查看",`
<div id="overview">
${o("","功能描述")}
<p>查看已关联到该订户的馆员姓名列表。</p>
${o("","页面要素")}
<ul>
<li>弹窗表格列：序号、馆员姓名；支持关键字检索与重置；底部关闭</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>仅当订户已关联馆员且当前用户具备查看权限时，「查看」可点</li>
</ul>
${o("","业务规则")}
<ul>
<li>关联关系来自馆员-订户关联维护（馆员列表模块）；本弹窗只读</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：订户存在关联馆员且可查看</li>
<li>后置：无</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无关联或无权限：列表展示灰色不可点「查看」</li>
</ul>
</div>
`),fh={title:"订户管理-订户列表",items:[{id:"5.9.5.1",title:"筛选查询",htmlContent:sh},{id:"5.9.5.2",title:"数据表格与行操作",htmlContent:rh},{id:"5.9.5.3",title:"新增/编辑订户",htmlContent:oh},{id:"5.9.5.4",title:"配置弹窗（已废弃）",htmlContent:ah},{id:"5.9.5.5",title:"查看订户详情",htmlContent:ch},{id:"5.9.5.6",title:"停用 / 启用 / 删除",htmlContent:uh},{id:"5.9.5.7",title:"馆员列表查看",htmlContent:dh}]};function ph(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["subscriber-manage"]=fh}const hh=E("5.13.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>多条件检索馆员列表，支持按账号、姓名、订户名称与关联日期过滤。</p>
${o("","页面要素")}
${B(["字段","控件","说明"],[["馆员账号（account）","文本","包含匹配"],["馆员姓名（name）","文本","包含匹配"],["订户名称（subscriberName）","文本","模糊匹配已关联订户名称展示串"],["关联日期（associateDate）","日期范围","起止日期；匹配行上的关联日期"]])}
<ul>
<li>「检索」「重置」；约 3 列布局</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>点「检索」按当前条件过滤并回到第 1 页</li>
<li>点「重置」清空条件并恢复全量列表</li>
</ul>
${o("","业务规则")}
<ul>
<li>各已填条件为 AND 组合</li>
<li>筛选项<strong>不含</strong>所属馆、所属机构（两列仅列表只读展示）</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：表格展示过滤结果</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配：表格空态「暂无数据」</li>
</ul>
</div>
`),gh=E("5.13.5.2","数据表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>分页展示馆员及其关联订户；工具栏提供「订户关联馆员」；行内可取消关联。列表只读展示所属馆、所属机构（来自馆员主数据同步落库，OMS 不提供编辑）。</p>
${o("","页面要素")}
<ul>
<li>工具栏：「订户关联馆员」</li>
<li>表格列：序号、馆员账号、馆员姓名、<strong>所属馆</strong>、<strong>所属机构</strong>、订户名称、关联日期、操作</li>
<li>所属馆：只读；展示分馆「编码 | 名称」；空值「—」</li>
<li>所属机构：只读；展示机构名称；空值「—」</li>
<li>订户名称：展示该馆员已关联订户名称（多值以逗号/顿号分隔）</li>
<li>操作列：「取消关联」</li>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点「订户关联馆员」打开关联弹窗</li>
<li>点「取消关联」打开确认弹窗</li>
</ul>
${o("","业务规则")}
<ul>
<li><strong>所属馆（branchId）</strong>：业务中台同步写入；列表只读；OMS 无编辑入口</li>
<li><strong>所属机构（institutionId）</strong>：同步所属馆时，按<strong>四级馆藏地</strong>中对应分馆节点上的机构一次写入并落库；列表只读；OMS 无编辑入口</li>
<li>若同步时无所属馆，则所属馆与所属机构皆空，单元格展示「—」</li>
<li>若有所属馆但四级馆藏地找不到对应分馆，则只落所属馆，所属机构为空</li>
<li>列表以已关联订户的馆员为主展示（原型可含演示行）；关联关系变更后即时刷新订户名称列</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：关联/取消关联结果即时反映到列表</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无数据：表格空态</li>
</ul>
</div>
`),mh=E("5.13.5.3","订户关联馆员",`
<div id="overview">
${o("","功能描述")}
<p>为选定订户维护关联馆员账号集合：选择订户后，通过穿梭框从馆员账号池勾选/取消，提交后覆盖该订户下的关联关系并回写馆员列表的订户名称。</p>
${o("","页面要素")}
<ul>
<li>弹窗标题：「订户关联馆员」</li>
<li>订户名称（subscriber）：必填下拉；选项为使用中的订户</li>
<li>穿梭框：左侧可按馆员账号检索；右侧为已选账号</li>
<li>底栏：取消 / 提交</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>打开时订户为空、已选为空</li>
<li>切换订户时，右侧已选恢复为该订户当前已关联账号</li>
<li>未选订户点提交：订户旁红字「请选择」，不关闭弹窗</li>
<li>提交成功：关闭弹窗并刷新列表</li>
</ul>
${o("","业务规则")}
<ul>
<li>提交以所选订户为准，用当前右侧账号列表<strong>覆盖</strong>该订户原有关联馆员</li>
<li>本弹窗<strong>不</strong>编辑所属馆、所属机构</li>
<li>新出现在关联关系中、此前不在列表中的馆员账号：写入列表时关联日期取当天；所属馆/所属机构留空直至下次同步</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：存在可选订户</li>
<li>后置：订户—馆员关联与列表订户名称列更新</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>订户未选：提示「请选择」</li>
</ul>
</div>
`),vh=E("5.13.5.4","取消关联",`
<div id="overview">
${o("","功能描述")}
<p>取消指定馆员与其全部订户的关联关系。</p>
${o("","页面要素")}
<ul>
<li>弹窗标题：「取消关联」</li>
<li>文案：确定取消馆员「{馆员姓名}」与订户的关联关系？</li>
<li>底栏：取消 / 确定</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>点行内「取消关联」打开确认弹窗</li>
<li>点「确定」清除该馆员在所有订户下的关联，刷新列表订户名称列</li>
<li>点「取消」或关闭：无变更</li>
</ul>
${o("","业务规则")}
<ul>
<li>取消关联<strong>不</strong>清除所属馆、所属机构落库字段</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：已选中一行馆员</li>
<li>后置：该馆员订户名称列变为空（或离开业务可见列表，视列表过滤策略）</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>取消确认：无变更</li>
</ul>
</div>
`),bh={title:"馆员列表",items:[{id:"5.13.5.1",title:"筛选查询",htmlContent:hh},{id:"5.13.5.2",title:"数据表格与行操作",htmlContent:gh},{id:"5.13.5.3",title:"订户关联馆员",htmlContent:mh},{id:"5.13.5.4",title:"取消关联",htmlContent:vh}]};function _h(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["librarian-list"]=bh}const yh=E("5.10.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>按所属机构、条码号类型、规则代码、状态检索条码校验规则列表。</p>
${o("","页面要素")}
${B(["字段","控件","说明"],[["所属机构（institutionId）","下拉","全部 / 机构字典（含园区馆演示项）"],["条码号类型（barcodeType）","下拉","全部 / 与订户「条码号类型」字典一致"],["规则代码（ruleCode）","文本","首行展示，不默认收起；模糊匹配"],["状态（status）","下拉（展开）","全部 / 使用中 / 已停用"]])}
<ul>
<li>「检索」「重置」；约 3 列布局</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>点「检索」按当前条件过滤并回到第 1 页</li>
<li>点「重置」清空条件并恢复全量列表</li>
</ul>
${o("","业务规则")}
<ul>
<li>各已填条件为 AND 组合</li>
<li>所属机构、条码号类型、状态为精确匹配；规则代码为包含匹配</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：表格展示过滤结果</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配：表格空态「暂无数据」</li>
</ul>
</div>
`),Sh=E("5.10.5.2","数据表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>分页展示条码校验规则；支持新增、编辑、启停与删除（仅已停用可删）。</p>
${o("","页面要素")}
<ul>
<li>工具栏：「新增规则」</li>
<li>表格列：序号、所属机构、规则代码、条码号类型、组成摘要、总长度、状态、创建人、创建日期、操作</li>
<li>状态：<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#52c41a;margin-right:6px;"></span>使用中（绿色）/ <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff4d4f;margin-right:6px;"></span>已停用（红色）</li>
<li>组成摘要：由有序分段只读拼接，如「前缀001 | 固定T | 年份yy | 馆配商 | 流水5补零」</li>
<li>操作列：编辑；使用中另有停用；已停用另有启用、删除</li>
<li>分页：默认 20 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点「新增规则」打开新增/编辑弹窗（新增模式）</li>
<li>点「编辑」打开弹窗（编辑模式）</li>
<li>点停用/启用/删除打开对应确认弹窗</li>
</ul>
${o("","业务规则")}
<ul>
<li>同一所属机构下可同时存在多条「使用中」规则（对应不同规则代码 / 条码号类型）</li>
<li>仅「已停用」行展示删除；使用中须先停用</li>
<li>组成摘要、所属机构名称由规则数据派生展示</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：行操作结果即时反映到列表</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>删除使用中：提示「请先停用再删除」</li>
</ul>
</div>
`),Ch=E("5.10.5.3","新增/编辑规则弹窗",`
<div id="overview">
${o("","功能描述")}
<p>维护规则头信息与有序分段组成方式；保存前校验唯一性、段序与段长之和；提供实时预览。校验前剥离扫描头尾为后续迭代，本期不做。</p>
${o("","页面要素 · 头信息")}
${B(["字段（英文字段名）","必填","控件","说明"],[["所属机构（institutionId）","是","可搜索下拉","选项同订户所属机构，另含园区馆演示机构"],["规则代码（ruleCode）","是","文本","如 01、02；同机构唯一"],["条码号类型（barcodeType）","是","可搜索下拉","取自条码号类型字典（同订户业务范围）"],["总长度（totalLength）","是","正整数","规则级可变；首图演示 13、园区 10"],["状态（status）","是","启停开关","使用中 / 已停用；新增默认使用中"],["样例（sample）","否","文本","可手填；可用预览一键填充"],["备注（remark）","否","多行文本","—"]])}
${o("","页面要素 · 组成方式（segments）")}
${B(["段类型（type）","参数","说明"],[["前缀（prefix）","字面量 value","须连续排在最前；如 001、003、YQ"],["固定字符（fixed）","字面量 value","用于中间定值；如 T、TG、D"],["后缀（suffix）","字面量 value","须连续排在最后"],["年份代码（year）","下拉 format","日历两位年（yy）默认 / 日历四位年（yyyy）；切换长度 2/4"],["馆配商代码（supplier）","下拉 source","取自「条码号供应商代码」（默认）；至多一段"],["流水号（serial）","下拉 padMode","左侧补零（默认）"],["枚举代码（enum）","名称 + 选项文本","每项「代码|说明」，多项英文分号 ; 分隔；代码长度=段长"]])}
<ul>
<li>有序分段表列：序号、段类型、长度、参数、操作（↑ ↓ 红色 ×）</li>
<li>「+ 添加分段」；至少保留 1 段；新增默认段类型为前缀</li>
<li>校验前剥离扫描头尾：<strong>后续迭代（本期不做）</strong></li>
<li>实时预览：按当前分段生成示例条码，展示「当前合计长度 / 总长度」；可「用预览填充样例」</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>前缀 / 固定字符 / 后缀输入字面量时，长度随字面量自动同步</li>
<li>段类型变更时重置该段默认参数</li>
<li>点「用预览填充样例」将预览结果写入样例</li>
<li>校验失败：字段下红字 + Toast「提交失败」；成功：关闭弹窗 + Toast「提交成功」并刷新列表</li>
</ul>
${o("","业务规则")}
<ul>
<li>各段长度须为正整数；段长之和必须等于总长度（totalLength）</li>
<li>前缀须连续在最前；后缀须连续在最后；否则提示对应段序错误</li>
<li>前缀 / 固定字符 / 后缀的字面量（value）长度必须等于该段长度</li>
<li>馆配商代码段至多 1 段；是否含馆配商由是否配置该段推导，无独立头字段</li>
<li>同一所属机构下规则代码（ruleCode）、条码号类型（barcodeType）均不可重复</li>
<li>本期仅配置管理与预览；验收业务的校验/自动分配、扫描头尾剥离不在本弹窗接入</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：新增无选中行；编辑须有目标行</li>
<li>后置：列表展示最新规则；组成摘要同步更新</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
${B(["场景","提示"],[["缺必填","请填写{字段} / 请选择条码号类型"],["同机构规则代码重复","该机构下规则代码已存在"],["同机构条码号类型重复","该机构下条码号类型已存在"],["段长之和 ≠ 总长度","各分段长度之和须等于总长度"],["前缀/后缀位置错误","前缀段须连续放在组成方式最前面 / 后缀段须连续放在组成方式最后面"],["字面量长度不符","前缀/固定字符/后缀长度须与分段长度一致"],["枚举不合法","请检查枚举代码（空、长度不符或重复）"]])}
</div>
`),$h=E("5.10.5.4","停用 / 启用 / 删除",`
<div id="overview">
${o("","功能描述")}
<p>对单条规则执行停用、启用或删除确认。</p>
${o("","页面要素")}
<ul>
<li>确认弹窗标题：停用/启用/删除条码校验规则</li>
<li>只读展示：所属机构、规则代码、条码号类型</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>确认后更新状态或从列表移除，并 Toast 成功</li>
<li>取消关闭弹窗不改数据</li>
</ul>
${o("","业务规则")}
<ul>
<li>停用 ↔ 启用可互转；同机构允许多条使用中并存</li>
<li>仅已停用可删除</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：已选中目标行</li>
<li>后置：列表状态/行数更新</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>对使用中执行删除：提示「请先停用再删除」</li>
</ul>
</div>
`),Th={title:"设置-条码校验规则",items:[{id:"5.10.5.1",title:"筛选查询",htmlContent:yh},{id:"5.10.5.2",title:"数据表格与行操作",htmlContent:Sh},{id:"5.10.5.3",title:"新增/编辑规则弹窗",htmlContent:Ch},{id:"5.10.5.4",title:"停用 / 启用 / 删除",htmlContent:$h}]};function Rh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["barcode-rule"]=Th}const Ah=E("5.11.5.1","页签切换与筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>在馆址、分馆、馆藏地三页签间切换，并按页签提供组合检索。</p>
${o("","页面要素")}
<ul>
<li>顶部页签：馆址列表 / 分馆列表 / 馆藏地列表</li>
</ul>
<p><strong>馆址页签检索</strong></p>
${B(["字段","控件","说明"],[["馆址编码（code）","文本","模糊匹配"],["馆址名称（name）","文本","模糊匹配"],["状态（status）","下拉","全部 / 使用中 / 已停用"]])}
<p><strong>分馆页签检索</strong></p>
${B(["字段","控件","说明"],[["馆址编码（siteCode）","文本","模糊匹配所属馆址编码"],["馆址名称（siteName）","文本","模糊匹配所属馆址名称"],["分馆编码（code）","文本","模糊匹配"],["分馆名称（name）","文本（展开）","模糊匹配"],["状态（status）","下拉（展开）","全部 / 使用中 / 已停用"]])}
<p><strong>馆藏地页签检索</strong></p>
${B(["字段","控件","说明"],[["馆址编码（siteCode）","文本","模糊匹配"],["馆址名称（siteName）","文本","模糊匹配"],["分馆编码（branchCode）","文本","模糊匹配"],["分馆名称（branchName）","文本（展开）","模糊匹配"],["馆藏地编码（code）","文本（展开）","模糊匹配"],["馆藏地名称（name）","文本（展开）","模糊匹配"],["状态（status）","下拉（展开）","全部 / 使用中 / 已停用"]])}
<ul>
<li>「检索」「重置」；约 3 列布局，部分字段在展开区</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>切换页签：清空检索与勾选，回到第 1 页</li>
<li>点「检索」过滤并回到第 1 页；点「重置」清空条件</li>
</ul>
${o("","业务规则")}
<ul>
<li>条件 AND；文本包含匹配；状态精确匹配</li>
<li>先机构权限过滤，再套用检索</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：表格展示过滤结果</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配：空态「未检索到结果」</li>
</ul>
</div>
`),xh=E("5.11.5.2","数据表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>分页展示当前页签主数据；支持编辑、启停、删除与备注查看。原「新增」「批量导入」已隐藏。</p>
${o("","页面要素")}
<ul>
<li>工具栏：「从四级馆藏地加入」（见 5.11.5.3）；无机构权限时禁用</li>
<li>馆址列：序号、机构编码、机构名称、馆址编码、馆址名称、状态、备注、操作</li>
<li>分馆列：序号、馆址编码/名称、分馆编码/名称、状态、备注、操作</li>
<li>馆藏地列：序号、馆址、分馆、馆藏地编码/名称、状态、备注、操作</li>
<li>状态：${ot("#52c41a")}使用中 / ${ot("#9ca3af")}已停用</li>
<li>备注有值「查看」；操作：编辑、停用/启用、删除</li>
<li>分页默认 10，可选 10/20/50/100</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>编辑打开对应弹窗（编码只读；馆址不可改机构）</li>
<li>启停直接切换状态并 Toast；删除移除行并 Toast</li>
</ul>
${o("","业务规则")}
<ul>
<li>机构编码/名称由所属机构（institutionId）派生；编辑不可改</li>
<li>编码在当前页签内唯一；跨页签允许同码</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：行在权限可见范围内</li>
<li>后置：列表即时更新</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无权限机构：列表空；加入按钮禁用</li>
</ul>
</div>
`),Ih=E("5.11.5.3","从四级馆藏地加入",`
<div id="overview">
${o("","功能描述")}
<p>三页签共用弹窗：从四级馆藏地树勾选节点，按<strong>当前页签类型</strong>写入列表（身份可换）。所属馆址/分馆为可选筛选项，仅收窄树展示。</p>
${o("","页面要素")}
${B(["区域","说明"],[["所属馆址 + 所属分馆","同一行；均可选，默认全部；选项取自四级接口，展示「编码 | 名称」"],["搜索","按编码/名称过滤当前树"],["快捷按钮","全选馆址 / 全选分馆 / 全选馆藏地（旁注数量）"],["四级树","多选；名称、编码、原层级标签"],["底部摘要","已选 N 条 → 写入当前页签列表"],["操作","取消 / 提交"]])}
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>打开弹窗重置筛选、搜索与勾选</li>
<li>变更馆址筛选清空分馆，并取消越界勾选</li>
<li>勾选仅选自身，不级联下级</li>
<li>快捷按钮切换全选/取消全选当前展示对应类型；已全选时实心选中态与「取消全选…」文案</li>
<li>未勾选提交：提示至少一条；提交后 Toast 成功/跳过</li>
</ul>
${o("","业务规则")}
<ul>
<li><strong>身份</strong>：落库类型=当前页签；编码/名称取自节点；状态默认使用中</li>
<li><strong>分馆上级</strong>：优先筛选馆址编码匹配本地；否则树祖先馆址编码；无法解析则跳过</li>
<li><strong>馆藏地上级</strong>：优先筛选分馆编码匹配本地；否则树祖先分馆编码；无法解析则跳过</li>
<li>同批编码去重；与当前页签已有编码冲突则跳过；跨页签同码允许</li>
<li>不自动创建缺失本地上级；树与筛选项按机构权限裁剪</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：馆员关联订户存在所属机构</li>
<li>后置：成功行插入对应列表</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无机构权限：入口禁用</li>
<li>全部跳过：Toast 说明原因</li>
<li>筛选无节点：树空态</li>
</ul>
</div>
`),wh=E("5.11.5.4","编辑弹窗",`
<div id="overview">
${o("","功能描述")}
<p>编辑已有馆址/分馆/馆藏地的名称、状态与备注；编码只读。不开放手填新增。</p>
${o("","页面要素")}
${B(["字段","馆址","分馆","馆藏地"],[["所属馆址","—","只读","只读"],["所属分馆","—","—","只读"],["编码","只读","只读","只读"],["名称","可改必填","可改必填","可改必填"],["状态","启停","启停","启停"],["备注","可选","可选","可选"],["机构","不可改","—","—"]])}
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>校验通过写回列表并 Toast；取消不改数据</li>
</ul>
${o("","业务规则")}
<ul>
<li>名称长度与同名规则：馆址全局、分馆同馆址下、馆藏地同分馆下</li>
<li>新增仅走「从四级馆藏地加入」</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：已选中可编辑行</li>
<li>后置：列表字段更新</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>校验失败：字段红字 + Toast 失败</li>
</ul>
</div>
`),Eh={title:"设置-馆址管理",items:[{id:"5.11.5.1",title:"页签切换与筛选查询",htmlContent:Ah},{id:"5.11.5.2",title:"数据表格与行操作",htmlContent:xh},{id:"5.11.5.3",title:"从四级馆藏地加入",htmlContent:Ih},{id:"5.11.5.4",title:"编辑弹窗",htmlContent:wh}]};function Nh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP.locations=Eh}const Ph=E("5.12.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>按关联订户、采访资源类型、语种、状态检索订单导入模板列表。</p>
${o("","页面要素")}
${B(["字段","控件","展示区域","说明"],[["采访资源类型（resourceType）","下拉","收起区","全部 / 纸质图书 / 视听资料；匹配模板的资源类型筛选值（resourceTypeFilter）"],["语种（language）","下拉","收起区","全部 / 中文 / 外文"],["关联订户（subscriber）","文本","收起区","位于语种之后；模糊匹配关联订户名称"],["状态（status）","下拉","展开区","全部 / 使用中 / 已停用；默认收起不可见"]])}
<ul>
<li>「检索」「重置」；3 列布局（一行最多 3 个检索条件），标签宽约 7rem；默认收起，点「展开」显示状态</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>点「检索」按当前条件过滤列表并回到第 1 页</li>
<li>点「重置」清空条件并恢复全量列表</li>
</ul>
${o("","业务规则")}
<ul>
<li>各已填条件为 AND 组合</li>
<li>若填写关联订户，则仅展示至少有一个关联订户名称包含检索词（不区分大小写）的模板；<strong>关联订户为空的通用模板不参与订户筛选命中</strong></li>
<li>采访资源类型、语种、状态为精确匹配</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：表格展示过滤结果</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配：表格空态</li>
</ul>
</div>
`),Oh=E("5.12.5.2","数据表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>分页展示订单导入模板；支持新增、编辑、字段配置、查重规则及启停/删除。</p>
${o("","页面要素")}
<ul>
<li>工具栏：「新增」</li>
<li>表格列：序号、采访资源类型、语种、模板名称、关联订户、状态、操作</li>
<li>模板名称：超长省略显示，悬停展示完整名称</li>
<li>关联订户：多个以顿号分隔；无关联时展示「—」</li>
<li>状态：<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#52c41a;margin-right:6px;"></span>使用中（绿色）/ <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff4d4f;margin-right:6px;"></span>已停用（红色）</li>
<li>操作列：编辑、字段配置、查重规则；使用中另有停用；已停用另有启用；删除（红色，任意状态均可见）</li>
<li>分页：默认 50 条/页，可选 10 / 20 / 50；单位「条记录」</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点「新增」打开新增导入模板弹窗</li>
<li>点「编辑」打开编辑弹窗并带入当前行</li>
<li>点「字段配置」打开字段配置弹窗</li>
<li>点「查重规则」打开查重规则弹窗</li>
<li>点「停用」「启用」直接切换状态；点「删除」弹出浏览器二次确认</li>
<li>操作成功后顶部 Toast 提示（默认「提交成功」）</li>
</ul>
${o("","业务规则")}
<ul>
<li>列表按检索结果分页展示；新增记录插入列表顶部</li>
<li>采访资源类型列展示业务类型名称（如「图书」「视听资料」），与筛选项「纸质图书/视听资料」口径不同</li>
<li>列表与导入侧均按<strong>模板可见性</strong>过滤：模板关联订户为空则全部用户可见；非空则仅关联了其中任一订户的账号可见</li>
<li>配置好的模板供「非连续出版物订单-导入订单」按订单资源类型、语种、关联订户匹配可用模板；仅「使用中」且资源类型/语种匹配且在可见范围内的模板可选；关联订户为空视为通用模板</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：行操作结果即时反映到列表</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>表单校验失败：Toast「提交失败」</li>
</ul>
</div>
`),Dh=E("5.12.5.3","新增/编辑导入模板弹窗",`
<div id="overview">
${o("","功能描述")}
<p>维护导入模板基本信息：采访资源类型、语种、名称、关联订户、状态与备注。</p>
${o("","页面要素")}
${B(["字段","必填","控件","说明"],[["采访资源类型（resourceType）","是","下拉","纸质图书 / 视听资料"],["语种（language）","是","下拉","中文 / 外文"],["模板名称（templateName）","是","文本","最多 64 个字符；输入框 maxlength 限制；全局唯一"],["关联订户（subscribers）","否","多选下拉","候选为当前登录馆员关联订户；不选则全部用户可见该模板"],["状态（status）","是","启停开关","开启=使用中，关闭=已停用；新增默认使用中"],["备注（remark）","否","多行文本","最多 500 字"]])}
<ul>
<li>标题：新增时为「新增导入模板」，编辑时为「编辑导入模板」</li>
<li>底部：取消 / 确定</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点遮罩或右上角 × 或「取消」关闭，不保存</li>
<li>点「确定」校验通过后关闭并刷新列表</li>
<li>校验失败：字段下红字提示，并触发失败 Toast</li>
</ul>
${o("","业务规则")}
<ul>
<li>若选择「纸质图书」，则保存为采访资源类型（resourceType）= 图书、资源类型筛选值（resourceTypeFilter）= 纸质图书</li>
<li>若选择「视听资料」，则保存为采访资源类型 = 视听资料、资源类型筛选值 = 视听资料</li>
<li>模板名称（templateName）trim 后不可为空，长度不超过 64 个字符，且不可与已有模板重名（编辑时排除自身）</li>
<li>关联订户（subscribers）候选列表为当前登录馆员关联订户范围；所选订户须落在该范围内</li>
<li>关联订户为空：模板对<strong>全部用户</strong>可见；非空：仅关联了其中任一订户的账号可见（列表与订单导入均适用）</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：编辑须已选中目标行</li>
<li>后置：列表展示最新模板信息</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
${B(["场景","提示"],[["采访资源类型未选","请选择"],["语种未选","请选择"],["模板名称为空","请输入"],["模板名称超长","已超字符限制"],["模板名称重复","模板名称已存在"],["关联订户超出账号范围","关联订户超出当前账号范围"],["备注超长","已超字符限制"]])}
</div>
`),kh=E("5.12.5.4","字段配置",`
<div id="overview">
${o("","功能描述")}
<p>为指定导入模板维护字段清单：从系统预设字段池勾选添加，编辑显示名/必填/默认值/排序，删除未被查重规则引用的字段。</p>
${o("","页面要素 · 主弹窗")}
<ul>
<li>标题：「字段配置」；宽屏弹窗（约 max-w-6xl）</li>
<li>工具栏：「添加字段」</li>
<li>表格列：序号、字段代码、字段名称、显示名、是否必填、默认值、排序值、操作（编辑/删除）</li>
<li>字段列表默认按排序值（sortValue）正序排列；默认分页 20 条/页，可选 5 / 10 / 20</li>
<li>底部：取消 / 提交</li>
</ul>
${o("","页面要素 · 检索区")}
${B(["字段","控件","说明"],[["字段代码（fieldCode）","文本","默认为空；模糊匹配"],["字段名称（fieldName）","文本","默认为空；模糊匹配"],["显示名（displayName）","文本","默认为空；模糊匹配"],["是否必填（required）","下拉","默认「全部」；取值：全部 / 是 / 否"]])}
<ul>
<li>「检索」「重置」；4 列布局；各已填条件为 AND 组合</li>
</ul>
${o("","页面要素 · 添加字段子弹窗")}
<ul>
<li>标题下方展示当前标准字段池标签（如「纸质书 · 中文」），随模板采访资源类型 + 语种动态切换</li>
<li>候选字段的字段代码、字段名称、字段说明及是否必填等校验规则均为系统预设，用户仅勾选添加</li>
<li>支持字段代码、字段名称模糊检索；表头复选框可全选/取消当前可见行</li>
<li>已存在于当前模板的字段代码在提交时自动跳过</li>
<li>新加字段：显示名默认取字段名，默认值为空，排序值在现有最大值基础上递增，默认未参与查重</li>
</ul>
${o("","标准字段池（按资源类型 + 语种）")}
<p><strong>1. 纸质书 · 中文</strong>：套内册数、套数、正题名、ISBN、副题名、分卷号、分卷名、分类号、出版社、作者、出版年、定价、版本、丛编、主题词、读者对象、装帧形式、尺寸、正文语种、一般性附注、图书简介、备注、卷数、出版地</p>
<p><strong>2. 纸质书 · 外文</strong>：全套册数、套数、ISBN、学科大类、学科细分、中图分类号、中译名、题名、副题名、责任者、丛编、出版社、装帧形式、出版日期、版次、页数、币种、定价、主题词、读者对象、尺寸、语种、简介、精简装ISBN对照、馆藏信息、审读级别、获奖信息、目次信息、分卷号、分卷名、作者简介、书评、备注</p>
<p><strong>3. 视听资料 · 中文</strong>：套内件数、套数、ISBN、ISRC、题名、载体、出版社、版本/格式、著者、币种、码洋、彩胶颜色、限量编号、厂牌、系列名称、是否签名、是否老唱片、获奖信息、北京出版社、分类、盘号、老唱片品牌、剧种、年代、备注</p>
<p><strong>4. 视听资料 · 外文</strong>：套内件数、套数、ISRC、题名、载体、商品条码、目录号、外文原文题名、出版方、码洋、币种、备注、厂牌</p>
${o("","页面要素 · 编辑字段子弹窗")}
${B(["字段","必填","说明"],[["字段代码（fieldCode）","—","只读"],["字段名称（fieldName）","—","只读"],["显示名（displayName）","是","最多 32 个字符；仅支持中文、英文字母、数字、下划线或横杠；导入列头展示名"],["是否必填（required）","否","是 / 否"],["默认值（defaultValue）","否","最多 64 个字符；输入框 maxlength 限制；可为空"],["排序值（sortValue）","是","正整数，决定导入列顺序"]])}
${o("","页面要素 · 删除字段")}
<ul>
<li>点操作列「删除」：若字段属于查重规则字段组合，则不打开确认弹窗，Toast 提示「请先在查重规则中删除该字段」</li>
<li>否则打开确认弹窗，文案：确定删除字段「{显示名}」吗？</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>打开弹窗时加载当前模板字段；若无配置则带入默认字段集（含书目记录号、ISBN、正题名等 8 项）</li>
<li>点「检索」按条件过滤并回到第 1 页；点「重置」清空条件恢复全量</li>
<li>添加/编辑/删除字段在弹窗内即时生效，添加成功有 Toast</li>
<li>点「删除」前先判断是否参与查重规则；参与则 Toast 阻断，不参与则打开确认弹窗</li>
<li>点主弹窗「提交」写回模板字段，并清理查重规则中已不存在字段代码的引用</li>
<li>点「取消」关闭主弹窗，不提交字段变更（子弹窗内已操作的数据随主弹窗关闭丢弃）</li>
</ul>
${o("","业务规则")}
<ul>
<li>添加字段时的标准字段池按模板 resourceTypeFilter + language 四档切换（纸质书/视听资料 × 中文/外文），详见上文字段池清单</li>
<li>添加时至少勾选一条；未勾选时 Toast「请勾选至少一条数据」</li>
<li>删除字段后，若查重规则仍引用已删字段，则在主弹窗提交时自动从查重字段组合中移除</li>
<li>字段是否参与查重（usedInDedupRule）由查重规则字段组合派生，不在编辑弹窗直接修改</li>
<li>编辑字段时，显示名（displayName）trim 后非空、不超过 32 个字符，且仅允许中文、英文字母、数字、下划线（_）或横杠（-）</li>
<li>默认值（defaultValue）可为空，trim 后不超过 64 个字符</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：须从列表选中模板并点「字段配置」</li>
<li>后置：提交后主弹窗关闭并 Toast 成功；模板字段与查重引用保持一致</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
${B(["场景","提示"],[["筛选无结果","未检索到结果"],["添加未勾选","请勾选至少一条数据"],["编辑显示名为空","请输入"],["编辑显示名超长","已超字符限制"],["编辑显示名含非法字符","格式不正确"],["编辑默认值超长","已超字符限制"],["编辑排序值无效","请输入"],["删除查重规则中的字段","请先在查重规则中删除该字段"]])}
</div>
`),Mh=E("5.12.5.5","查重规则配置",`
<div id="overview">
${o("","功能描述")}
<p>为指定导入模板配置订单行导入时的查重规则：规则名称与参与查重的字段组合。</p>
${o("","页面要素")}
${B(["字段","必填","控件","说明"],[["规则名称（ruleName）","是","文本","最多 64 个字符；输入框 maxlength 限制；仅允许中文、英文字母、数字及 + - / & *"],["字段组合（fieldCodes）","是","多选下拉","从当前模板已配置字段中选取，至少 1 个；已选项以标签展示，可 × 移除"]])}
<ul>
<li>首次打开若无配置，默认规则名「ISBN&amp;正题名」，字段组合为 ISBN + 正题名</li>
<li>下拉仅展示尚未选中的模板字段，按排序值升序</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点字段组合区域展开下拉；点选项追加字段；点标签 × 移除</li>
<li>点页面其他区域收起下拉</li>
<li>确定校验通过后写回模板查重规则，并同步各字段的查重引用标记</li>
</ul>
${o("","业务规则")}
<ul>
<li>字段组合仅可从当前模板字段清单中选择；模板字段变更后，无效字段代码会在字段配置提交或查重打开时自动剔除</li>
<li>规则名称 trim 后不可为空，长度不超过 64 个字符</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：须从列表选中模板并点「查重规则」</li>
<li>后置：关闭弹窗并 Toast 成功；字段配置列表中参与查重的字段标记同步更新</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
${B(["场景","提示"],[["规则名称为空","请输入"],["规则名称超长","已超字符限制"],["规则名称格式不符","格式不正确"],["未选字段组合","请选择"],["无可选字段","下拉展示「无可选字段」"]])}
</div>
`),Lh=E("5.12.5.6","停用 / 启用 / 删除",`
<div id="overview">
${o("","功能描述")}
<p>对单条导入模板执行停用、启用或删除；无独立确认弹窗。</p>
${o("","页面要素")}
<ul>
<li>操作列文字链：停用 / 启用 / 删除</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点「停用」：状态立即变为已停用，Toast 成功</li>
<li>点「启用」：状态立即变为使用中，Toast 成功</li>
<li>点「删除」：浏览器二次确认「确定删除模板「{模板名称}」吗？」；确认后从列表移除并 Toast 成功；取消则不操作</li>
</ul>
${o("","业务规则")}
<ul>
<li>使用中与已停用可互相切换</li>
<li>删除不限制当前状态（使用中亦可删除）</li>
<li>已停用模板不会在订单导入时作为可选模板</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：已选中目标行</li>
<li>后置：列表状态或行数更新</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>删除二次确认点「取消」：无变更</li>
</ul>
</div>
`),Bh={title:"设置-订单导入模板配置",items:[{id:"5.12.5.1",title:"筛选查询",htmlContent:Ph},{id:"5.12.5.2",title:"数据表格与行操作",htmlContent:Oh},{id:"5.12.5.3",title:"新增/编辑导入模板弹窗",htmlContent:Dh},{id:"5.12.5.4",title:"字段配置",htmlContent:kh},{id:"5.12.5.5",title:"查重规则配置",htmlContent:Mh},{id:"5.12.5.6",title:"停用 / 启用 / 删除",htmlContent:Lh}]};function Vh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["import-template"]=Bh}const Fh=E("5.14.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>按订户、催缺状态、创建日期范围检索催缺配置列表。</p>
${o("","页面要素")}
${B(["字段","控件","说明"],[["订户（subscriber）","文本","模糊匹配订户名称"],["催缺状态（status）","下拉","全部 / 使用中 / 已停用"],["创建日期（created）","日期范围","按创建日期（created）的日期部分过滤；起止均可选"]])}
<ul>
<li>「检索」「重置」；约 3 列布局，标签宽约 4rem</li>
</ul>
</div>
<div id="rules">
${o("","交互逻辑")}
<ul>
<li>点「检索」按当前条件过滤并回到第 1 页</li>
<li>点「重置」清空条件并恢复全量列表</li>
</ul>
${o("","业务规则")}
<ul>
<li>各已填条件为 AND 组合</li>
<li>订户为包含匹配（不区分大小写）；催缺状态精确匹配；创建日期按日比较起止</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：表格展示过滤结果</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配：表格空态「暂无数据」</li>
</ul>
</div>
`),jh=E("5.14.5.2","数据表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>分页展示催缺配置；支持新增、查看、编辑与行内排序上移/下移。<strong>配置不可删除</strong>，列表不提供删除入口。</p>
${o("","页面要素")}
<ul>
<li>工具栏：「新增配置」</li>
<li>表格列：序号、订户、催缺状态、触发条件、创建日期、操作、排序（上移/下移）</li>
<li>催缺状态：${ot("#52c41a")}使用中（绿色）/ ${ot("#ff4d4f")}已停用（红色）；由是否启用自动催缺映射</li>
<li>触发条件列：若触发类型为发订天数，展示「N，N天」；若为发订日期区间，展示「开始日期 ~ 结束日期」；无有效值时「—」</li>
<li>订户列：蓝色文字链，点击打开查看配置（只读）</li>
<li>操作列：仅「编辑」（无删除）</li>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>点「新增配置」打开新增弹窗</li>
<li>点订户名称打开查看配置弹窗（只读）</li>
<li>点「编辑」打开编辑配置弹窗（订户可改）</li>
<li>点上移/下移交换相邻行排序序号；首行不可上移、末行不可下移（禁用态）</li>
</ul>
${o("","业务规则")}
<ul>
<li>同一订户仅允许一条配置（新增/编辑提交时校验）</li>
<li><strong>不支持删除</strong>；停用通过关闭「是否启用」实现（催缺状态变为已停用）</li>
<li>列表<strong>不展示</strong>馆址/供应商/订单号范围摘要列；范围仅在弹窗中维护与查看</li>
<li>列表默认按排序序号升序</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：新增/编辑成功后刷新列表并提示「提交成功」；校验失败提示「提交失败」</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>表单校验失败：关闭弹窗不落库，顶部红色「提交失败」</li>
</ul>
</div>
`),Hh=E("5.14.5.3","新增 / 编辑 / 查看配置弹窗",`
<div id="overview">
${o("","功能描述")}
<p>维护某订户的自动催缺规则：可选范围（馆址、供应商、订单号）、是否启用、触发条件与备注。新增与编辑共用弹窗；查看为只读。</p>
${o("","页面要素")}
${B(["字段","控件","必填","说明"],[["订户（subscriber）","下拉","是","候选为使用中订户；新增与编辑均可改；查看只读"],["馆址（sites）","多选","否","候选为馆址管理中已启用馆址名称；未选=不限制馆址"],["供应商（suppliers）","多选","否","候选与订单表单供应商一致；未选=不限制供应商"],["订单号（orderId）","单行文本","否","单个订单号；空=不限制订单号；placeholder「请输入订单号」"],["是否启用系统催缺 / 是否启用自动生成（autoEnabled）","开关","否","新增文案为「是否启用系统催缺」，编辑为「是否启用自动生成」；默认启用；旁注「启用后将根据规则自动生成催缺单」"],["触发条件（triggerType）","单选","是","二选一：① 订单发订 N 天未到货；② 发订日期区间未到货"],["发订天数（triggerDays）","文本（数字）","条件","仅选触发条件1时可编辑，须为正整数"],["发订开始/结束日期（triggerStartDate / triggerEndDate）","日期","条件","仅选触发条件2时可编辑；结束不得早于开始"],["备注（remark）","多行文本","否","自由填写"]])}
<ul>
<li>字段顺序：订户 → 馆址 → 供应商 → 订单号 → 是否启用 → 触发条件 → 备注</li>
<li>查看模式：全部只读；馆址/供应商/订单号空值展示「—」；底栏仅「关闭」</li>
<li>新增/编辑底栏：取消 / 提交</li>
</ul>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>打开新增：空表单，启用默认开，触发条件默认「发订天数」</li>
<li>打开编辑/查看：回填当前行；编辑时订户可下拉更换</li>
<li>切换触发条件单选时清空对应侧校验错误；未选中侧天数/日期控件禁用</li>
<li>点「提交」统一校验；通过则回写列表（启用→使用中，关闭→已停用）并关闭弹窗</li>
</ul>
${o("","业务规则")}
<ul>
<li>订户必选；若其他配置已占用该订户（编辑排除自身），提示「订户配置已存在」</li>
<li>触发条件1：天数必填且为正整数，否则「请输入」/「请输入有效天数」</li>
<li>触发条件2：起止日期必选；结束早于开始则「结束日期不能早于开始日期」</li>
<li>订单号为空：跳过订单校验</li>
<li>订单号有值且订户已选：须在订单主数据中存在，否则「订单号不存在」；存在但订户不一致则「订单号不属于当前订户」</li>
<li>订单号校验通过后交叉冲突：若已选馆址且订单馆址不在列表中 →「订单号与所选馆址不匹配」；若已选供应商且订单供应商不在列表中 →「订单号与所选供应商不匹配」；两侧可同时报错</li>
<li>仅馆址+供应商、无订单号：不做交叉冲突校验</li>
<li>范围匹配语义（供自动生成）：未填不限制；已填的馆址/供应商/订单号与触发条件、订户、启用状态全体 AND。本期仅落配置与匹配语义，不接线定时任务</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：新增无；编辑/查看已选中一行</li>
<li>后置：提交成功列表即时更新；查看关闭无变更</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>校验失败：字段旁红字提示，顶部「提交失败」，不关闭弹窗</li>
<li>订户未选时已填订单号：优先报订户错误，订单号校验在订户有效后再执行</li>
</ul>
</div>
`),Kh={title:"设置-催缺配置",items:[{id:"5.14.5.1",title:"筛选查询",htmlContent:Fh},{id:"5.14.5.2",title:"数据表格与行操作",htmlContent:jh},{id:"5.14.5.3",title:"新增/编辑/查看配置弹窗",htmlContent:Hh}]};function Uh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["shortage-config"]=Kh}const Gh=E("5.15.5.1","筛选查询",`
<div id="overview">
${o("","功能描述")}
<p>提供多条件检索，定位批量验收单。支持展开附加条件。</p>
${o("","页面要素")}
${B(["字段","控件","说明"],[["验收单号（acceptanceId）","文本","默认显示；包含匹配"],["验收单名称（name）","文本","默认显示；包含匹配"],["资源类型（resourceType）","下拉","默认显示；全部 / 纸质书 / 视听资料"],["验收状态（acceptanceStatus）","下拉","展开后；全部 / 未开始 / 进行中 / 已结束"],["供应商（supplier）","下拉","展开后；全部 + 常见供应商"],["创建人（creator）","文本","展开后；包含匹配"]])}
<ul>
<li>操作：「检索」过滤列表；「重置」清空条件并恢复全量；检索后分页回到第 1 页</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>各已填条件为 <strong>AND</strong> 组合</li>
<li>新建验收单成功后清空当前检索条件，保证新建行可见</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>无匹配时表格为空，分页显示 0 个项目</li>
</ul>
</div>
`),Wh=E("5.15.5.2","列表表格与行操作",`
<div id="overview">
${o("","功能描述")}
<p>分页展示批量验收单；支持多选申请结算、跳转详情，以及按状态展示「收货 / 重启验收 / 申请结算」。</p>
${o("","工具栏")}
<ul>
<li>「新增验收单」：打开新建弹窗（见 5.15.5.3）</li>
<li>「申请结算」：对勾选行发起结算申请（见下方规则）</li>
</ul>
${o("","表格列")}
<p>复选框、序号（no）、验收单号（acceptanceId）、验收单名称（name）、资源类型（type）、订单号（orderNo）、采选方式（method）、供应商（supplier）、发货单号（shipNo）、单册生成方式（itemGenMode）、验收状态（status）、收货册数（receivedCount）、验收备注（remark）、创建时间（time）、创建人（creator）、结算状态（settlement）、操作</p>
</div>
<div id="interaction">
${o("","交互逻辑")}
<ul>
<li>验收单号：蓝色链接，点击进入验收单详情（见 5.6）；携带本单明细上下文</li>
<li>单册生成方式文案：收货后不生成单册 / 收货后生成单册 / 预验收生成虚拟单册</li>
<li>验收状态色：${ot("#6b7280")}未开始、${ot("#0284c7")}进行中、${ot("#4b5563")}已结束</li>
<li>结算状态色：${ot("#6b7280")}未申请、${ot("#d97706")}待结算、${ot("#059669")}已结算</li>
<li>验收备注：有内容时蓝色「查看」悬停全文；无内容时灰色「查看」不可点</li>
<li>分页：默认 10 条/页；单位「个项目」</li>
</ul>
${o("","操作列规则")}
${B(["条件","可用操作"],[["验收状态为未开始或进行中","收货（打开收货窗，见 5.15.5.4）"],["结算状态为未申请且验收状态为已结束","重启验收、申请结算"],["其余","—（若同时无可操作项）"]])}
<ul>
<li>收货：三种单册生成方式均展示；「预验收生成虚拟单册」语义为确认实际收货</li>
<li>重启验收：确认后状态改为进行中，收货册数清零</li>
<li>工具栏/行内申请结算：未勾选时提示「请先勾选验收单」；确认后勾选行结算状态改为待结算</li>
</ul>
</div>
<div id="rules">
${o("","业务规则")}
<ul>
<li>列表数据本地持久化；刷新页面后新建单仍保留</li>
<li>同一订单号若已存在未开始/进行中的批量验收单，则不允许再建（见新建校验）</li>
</ul>
</div>
`),qh=E("5.15.5.3","新增验收单弹窗",`
<div id="overview">
${o("","功能描述")}
<p>工具栏「新增验收单」打开表单，创建绑定订单号的批量验收单头，并按单册生成方式决定是否立即灌入验收行与虚拟单册。</p>
${o("","表单字段")}
${B(["字段","必填","说明"],[["验收单名称（name）","是","文本"],["资源类型（resourceType）","是","纸质书 / 视听资料"],["采选方式（method）","是","联动供应商候选"],["供应商（supplier）","是","须与订单一致；未选采选方式时禁用"],["发货单号（shipNo）","否","文本"],["订单号（orderNo）","是","整单键；须存在"],["单册生成方式（itemGenMode）","是","单选，见下表；默认「收货后不生成单册」"],["验收备注（remark）","否","多行；显示字数"]])}
<p>不加：语种、设为当前工作验收单、自动分配条码开关。</p>
${o("","单册生成方式（itemGenMode）")}
${B(["值","界面文案","新建时行为"],[["none","收货后不生成单册","仅创建验收单头；无验收行、无单册"],["actual","收货后生成单册","仅创建验收单头；单册在列表「收货」时生成"],["virtual","预验收生成虚拟单册","新建成功后立即按整单可验收行生成验收行 + 虚拟单册（单册阶段为预验收）"]])}
</div>
<div id="rules">
${o("","提交校验")}
<ol>
<li>必填项完整</li>
<li>订单号须存在</li>
<li>订单与资源类型、采选方式、供应商一致（不校验语种）</li>
<li>同一订单号若已存在未结束（未开始/进行中）的批量验收单，则拒绝并提示</li>
</ol>
${o("","预验收生成虚拟单册细则")}
<ul>
<li>取该订单下订单行状态为<strong>已发订 / 处理中</strong>且待收货套数 &gt; 0 的行</li>
<li>每行一条验收行；收货套数取待收货套数</li>
<li>虚拟单册册数 = 待收货套数 × 套内册数；单册阶段（itemPhase）= 预验收（pre）；系统预分配全局不重复虚拟条码号</li>
<li>灌虚拟单册<strong>不改变</strong>订单行待收与行状态；不视为业务已收货完成</li>
<li>若无可灌入订单行：提示「该订单下没有可灌入的已发订/处理中订单行」，不建单</li>
<li>成功提示含已生成虚拟单册册数</li>
</ul>
${o("","前置/后置条件")}
<ul>
<li>前置：无</li>
<li>后置：成功后关闭弹窗、列表首行插入新单、清空检索、持久化列表与明细</li>
</ul>
</div>
<div id="exception">
${o("","异常处理")}
<ul>
<li>表单缺项：字段级提示（如请输入验收单名称）</li>
<li>订单不存在或不一致、重复未结束单：弹窗提示，不关闭表单、不落库</li>
</ul>
</div>
`),Yh=E("5.15.5.4","收货弹窗",`
<div id="overview">
${o("","功能描述")}
<p>列表操作「收货」打开弹窗，勾选本验收单绑定订单下可操作订单行并确认。标题在「预验收生成虚拟单册」时为「确认实际收货」，其余为「收货」。</p>
${o("","页面要素")}
<ul>
<li>头区：订单号、单册生成方式文案</li>
<li>表格：多选、订单行号、正题名、行状态、待收货套数、套内册数；表头支持全选</li>
<li>底部：取消 / 确定</li>
</ul>
</div>
<div id="rules">
${o("","可选订单行")}
<ul>
<li>收货后不生成单册 / 收货后生成单册：待收货套数 &gt; 0 且行状态为已发订或处理中</li>
<li>预验收生成虚拟单册：仍存在预验收阶段单册的订单行</li>
</ul>
${o("","确认后行为（按单册生成方式）")}
${B(["方式","行为"],[["收货后不生成单册（none）","按勾选行待收货套数写入/更新验收行；不生成单册"],["收货后生成单册（actual）","写入/更新验收行，并生成实际验收阶段单册（itemPhase=actual）；本期条码可空"],["预验收生成虚拟单册（virtual）","将对应行下仍为预验收的单册原地改为实际验收（不复制）；可保留原虚拟条码；更新验收行与验收单状态"]])}
<ul>
<li>确认后验收单状态变为进行中；回写收货册数；提示「收货成功」</li>
<li>未勾选任何行：提示「请至少选择一条订单行」</li>
</ul>
</div>
`),zh={title:"采访验收-批量验收",items:[{id:"5.15.5.1",title:"筛选查询",htmlContent:Gh},{id:"5.15.5.2",title:"列表表格与行操作",htmlContent:Wh},{id:"5.15.5.3",title:"新增验收单弹窗",htmlContent:qh},{id:"5.15.5.4",title:"收货弹窗",htmlContent:Yh}]};function Xh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["batch-acceptance"]=zh}$p();Op();Bp();Kp();Qp();nh();ph();_h();Rh();Nh();Vh();Uh();Xh();const Fn=pu(Au);Fn.use(mu());Fn.use(Fo);Fn.mount("#app");export{bf as $,po as A,Vr as B,vn as C,ml as D,Pi as E,Ot as F,Mn as G,Kc as H,lg as I,Fr as J,ig as K,Gt as L,wn as M,Ui as N,Ri as O,Ld as P,Ka as Q,og as R,rg as S,Jh as T,ng as U,$l as V,Qh as W,Al as X,yf as Y,sg as Z,Cu as _,tt as a,Sg as a0,yg as a1,Pg as a2,Og as a3,Dg as a4,kg as a5,bg as a6,Mg as a7,Zd as a8,ki as a9,hg as aA,Ng as aB,pf as aC,gf as aD,Vn as aE,wg as aF,Eg as aa,Lo as ab,Mi as ac,vf as ad,Li as ae,Ig as af,Cg as ag,Vd as ah,af as ai,df as aj,$g as ak,ko as al,Ln as am,Tg as an,_g as ao,Rg as ap,Ag as aq,xg as ar,ug as as,Do as at,vg as au,pg as av,fg as aw,dg as ax,mg as ay,gg as az,Ct as b,Lt as c,vt as d,ag as e,xn as f,cu as g,ao as h,Pa as i,co as j,hl as k,Bt as l,St as m,Ie as n,In as o,cg as p,Md as q,Ql as r,ii as s,ti as t,Bd as u,tg as v,Fe as w,Zh as x,eg as y,Qa as z};
