const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OrderManageView-BoywBFM_.js","./SearchPanel-LHDHG8ZL.js","./SearchExpandToggle-BdrXbkOa.js","./DataTable-xBn2EFpz.js","./PaginationBar-DhF4Y8y7.js","./DataTable-TwsiaAEU.css","./HoverTooltip-D1jGnCqt.js","./DropdownButton-DCkVbJnq.js","./order-iodICnA-.js","./order-line-detail-B1OlSK4x.js","./acquisition-methods-Qch6MY5a.js","./acceptance-detail-B3_6wdUN.js","./settled-list-BOMbvSXf.js","./marc-mapping-manage-C0qr4aln.js","./use-site-options-Cnh8Zb7Z.js","./bib-order-form-cache-BP1Bz7f_.js","./association-BIZYHBxV.js","./subscriber-manage-CRHojgaA.js","./SiteMultiSelect-DlC9KMZf.js","./MarcTable-CICSjx4O.js","./FormModal-BGtLW_n4.js","./ReasonSelect-CO87Y6ZB.js","./shortage-BnovsJau.js","./import-template-manage-CqXZMuHR.js","./PrdSpecDrawer--Fea1pgR.js","./PrdSpecDrawer-Ci5ThT7X.css","./OrderManageView-DgUQ4oiQ.css","./OrderLineDetailView-CEAMXflY.js","./OrderLineDetailView-Dg9xnmTN.css","./BibQueryView-BcEEDS20.js","./currency-manage-C6gvmfle.js","./BibQueryView-d50iNJal.css","./NewBibView-VcTClDvd.js","./use-breadcrumb-back-Bc_fh-Cs.js","./Z3950QueryView-DgpLCnsf.js","./AcceptanceManageView-ZIMSTfOZ.js","./acceptance-list-BmVsIhHc.js","./AcceptanceSettlementModal-C6bFXoZ0.js","./AcceptanceExportConfigModal-D4PVGrVU.js","./delivery-import-0G_53WYp.js","./receive-by-item-DLtDoVJ7.js","./pre-accept-drafts-CxzKsy_O.js","./AcceptanceDetailView-BuPdDoT4.js","./DeliveryImportTaskListView-Bkq_qMKF.js","./delivery-import-tasks-D4ITqv-0.js","./DeliveryImportTaskListView-C8ix_IVu.css","./DeliveryImportTaskDetailView-BiT2rqiq.js","./BarcodePreviewModal-BjyycRx5.js","./DeliveryImportTaskDetailView-BSuCGUyz.css","./ReceiveByItemView-CmM3mlQA.js","./BatchAcceptanceView-CRG_TvM1.js","./ExchangeManageView-D2F9ANXs.js","./ReturnManageView-DvdC05JU.js","./ShortageManageView-DB4VnaN2.js","./ShortageCancelModal-_3m9hkAh.js","./ShortageDetailView-BKYSF1Gp.js","./PendingSettlementView-CJ4tbwfc.js","./SettledView-B-vTZXTg.js","./settled-DLVpEtTD.js","./SettlementDetailView-BoSm625K.js","./SettlementListView-CEe1hguD.js","./FailSettlementView-D_f56udN.js","./SubscriberListView-DSsqYf85.js","./LibrarianListView-AekfhjmL.js","./CurrencyInfoView-htq6GIzX.js","./ImportTemplateConfigView-hqJ_Mv7j.js","./StatusToggle-CgSDgE_f.js","./ShortageConfigView-Bam2kxp6.js","./BarcodeSupplierView-JCWi0XkR.js","./MarcMappingView-DXcYRCBl.js","./LocationManageView-DvvTX_nV.js","./ReasonParamsView-CycHPyHO.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pr(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}const ce={},Yt=[],lt=()=>{},Js=()=>!1,sn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ln=e=>e.startsWith("onUpdate:"),Ae=Object.assign,hr=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},Jo=Object.prototype.hasOwnProperty,ie=(e,t)=>Jo.call(e,t),H=Array.isArray,Qt=e=>ui(e)==="[object Map]",ai=e=>ui(e)==="[object Set]",Ur=e=>ui(e)==="[object Date]",Yo=e=>ui(e)==="[object RegExp]",W=e=>typeof e=="function",ue=e=>typeof e=="string",je=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",Ys=e=>(re(e)||W(e))&&W(e.then)&&W(e.catch),Qs=Object.prototype.toString,ui=e=>Qs.call(e),Qo=e=>ui(e).slice(8,-1),Zs=e=>ui(e)==="[object Object]",on=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_i=pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cn=e=>{const t=Object.create(null);return(i=>t[i]||(t[i]=e(i)))},Zo=/-\w/g,Pe=cn(e=>e.replace(Zo,t=>t.slice(1).toUpperCase())),ec=/\B([A-Z])/g,kt=cn(e=>e.replace(ec,"-$1").toLowerCase()),an=cn(e=>e.charAt(0).toUpperCase()+e.slice(1)),En=cn(e=>e?`on${an(e)}`:""),st=(e,t)=>!Object.is(e,t),Zt=(e,...t)=>{for(let i=0;i<e.length;i++)e[i](...t)},el=(e,t,i,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:i})},un=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Kr;const dn=()=>Kr||(Kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gr(e){if(H(e)){const t={};for(let i=0;i<e.length;i++){const n=e[i],r=ue(n)?rc(n):gr(n);if(r)for(const s in r)t[s]=r[s]}return t}else if(ue(e)||re(e))return e}const tc=/;(?![^(]*\))/g,ic=/:([^]+)/,nc=/\/\*[^]*?\*\//g;function rc(e){const t={};return e.replace(nc,"").split(tc).forEach(i=>{if(i){const n=i.split(ic);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function It(e){let t="";if(ue(e))t=e;else if(H(e))for(let i=0;i<e.length;i++){const n=It(e[i]);n&&(t+=n+" ")}else if(re(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lc=pr(sc);function tl(e){return!!e||e===""}function oc(e,t){if(e.length!==t.length)return!1;let i=!0;for(let n=0;i&&n<e.length;n++)i=Nt(e[n],t[n]);return i}function Nt(e,t){if(e===t)return!0;let i=Ur(e),n=Ur(t);if(i||n)return i&&n?e.getTime()===t.getTime():!1;if(i=je(e),n=je(t),i||n)return e===t;if(i=H(e),n=H(t),i||n)return i&&n?oc(e,t):!1;if(i=re(e),n=re(t),i||n){if(!i||!n)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const l in e){const o=e.hasOwnProperty(l),c=t.hasOwnProperty(l);if(o&&!c||!o&&c||!Nt(e[l],t[l]))return!1}}return String(e)===String(t)}function mr(e,t){return e.findIndex(i=>Nt(i,t))}const il=e=>!!(e&&e.__v_isRef===!0),ii=e=>ue(e)?e:e==null?"":H(e)||re(e)&&(e.toString===Qs||!W(e.toString))?il(e)?ii(e.value):JSON.stringify(e,nl,2):String(e),nl=(e,t)=>il(t)?nl(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[n,r],s)=>(i[In(n,s)+" =>"]=r,i),{})}:ai(t)?{[`Set(${t.size})`]:[...t.values()].map(i=>In(i))}:je(t)?In(t):re(t)&&!H(t)&&!Zs(t)?String(t):t,In=(e,t="")=>{var i;return je(e)?`Symbol(${(i=e.description)!=null?i:t})`:e};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class rl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&be&&(be.active?(this.parent=be,this.index=(be.scopes||(be.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].pause();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].resume();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].resume()}}run(t){if(this._active){const i=be;try{return be=this,t()}finally{be=i}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){if(this._on>0&&--this._on===0){if(be===this)be=this.prevScope;else{let t=be;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function sl(e){return new rl(e)}function ll(){return be}function cc(e,t=!1){be&&be.cleanups.push(e)}let ae;const wn=new WeakSet;class ol{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&(be.active?be.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wn.has(this)&&(wn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||al(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gr(this),ul(this);const t=ae,i=ze;ae=this,ze=!0;try{return this.fn()}finally{dl(this),ae=t,ze=i,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_r(t);this.deps=this.depsTail=void 0,Gr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wn(this)&&this.run()}get dirty(){return Wn(this)}}let cl=0,Si,yi;function al(e,t=!1){if(e.flags|=8,t){e.next=yi,yi=e;return}e.next=Si,Si=e}function vr(){cl++}function br(){if(--cl>0)return;if(yi){let t=yi;for(yi=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;Si;){let t=Si;for(Si=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function ul(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function dl(e){let t,i=e.depsTail,n=i;for(;n;){const r=n.prevDep;n.version===-1?(n===i&&(i=r),_r(n),ac(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=i}function Wn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(fl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function fl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ii)||(e.globalVersion=Ii,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wn(e))))return;e.flags|=2;const t=e.dep,i=ae,n=ze;ae=e,ze=!0;try{ul(e);const r=e.fn(e._value);(t.version===0||st(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ae=i,ze=n,dl(e),e.flags&=-3}}function _r(e,t=!1){const{dep:i,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let s=i.computed.deps;s;s=s.nextDep)_r(s,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function ac(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}let ze=!0;const pl=[];function ct(){pl.push(ze),ze=!1}function at(){const e=pl.pop();ze=e===void 0?!0:e}function Gr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=ae;ae=void 0;try{t()}finally{ae=i}}}let Ii=0;class uc{constructor(t,i){this.sub=t,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ae||!ze||ae===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==ae)i=this.activeLink=new uc(ae,this),ae.deps?(i.prevDep=ae.depsTail,ae.depsTail.nextDep=i,ae.depsTail=i):ae.deps=ae.depsTail=i,hl(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=ae.depsTail,i.nextDep=void 0,ae.depsTail.nextDep=i,ae.depsTail=i,ae.deps===i&&(ae.deps=n)}return i}trigger(t){this.version++,Ii++,this.notify(t)}notify(t){vr();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{br()}}}function hl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)hl(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subs=e}}const Wi=new WeakMap,Vt=Symbol(""),qn=Symbol(""),wi=Symbol("");function Ie(e,t,i){if(ze&&ae){let n=Wi.get(e);n||Wi.set(e,n=new Map);let r=n.get(i);r||(n.set(i,r=new Sr),r.map=n,r.key=i),r.track()}}function mt(e,t,i,n,r,s){const l=Wi.get(e);if(!l){Ii++;return}const o=c=>{c&&c.trigger()};if(vr(),t==="clear")l.forEach(o);else{const c=H(e),u=c&&on(i);if(c&&i==="length"){const a=Number(n);l.forEach((p,g)=>{(g==="length"||g===wi||!je(g)&&g>=a)&&o(p)})}else switch((i!==void 0||l.has(void 0))&&o(l.get(i)),u&&o(l.get(wi)),t){case"add":c?u&&o(l.get("length")):(o(l.get(Vt)),Qt(e)&&o(l.get(qn)));break;case"delete":c||(o(l.get(Vt)),Qt(e)&&o(l.get(qn)));break;case"set":Qt(e)&&o(l.get(Vt));break}}br()}function dc(e,t){const i=Wi.get(e);return i&&i.get(t)}function Gt(e){const t=Q(e);return t===e?t:(Ie(t,"iterate",wi),Fe(e)?t:t.map(Xe))}function fn(e){return Ie(e=Q(e),"iterate",wi),e}function nt(e,t){return _t(e)?ni(ot(e)?Xe(t):t):Xe(t)}const fc={__proto__:null,[Symbol.iterator](){return Nn(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return Gt(this).concat(...e.map(t=>H(t)?Gt(t):t))},entries(){return Nn(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return ft(this,"every",e,t,void 0,arguments)},filter(e,t){return ft(this,"filter",e,t,i=>i.map(n=>nt(this,n)),arguments)},find(e,t){return ft(this,"find",e,t,i=>nt(this,i),arguments)},findIndex(e,t){return ft(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ft(this,"findLast",e,t,i=>nt(this,i),arguments)},findLastIndex(e,t){return ft(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ft(this,"forEach",e,t,void 0,arguments)},includes(...e){return $n(this,"includes",e)},indexOf(...e){return $n(this,"indexOf",e)},join(e){return Gt(this).join(e)},lastIndexOf(...e){return $n(this,"lastIndexOf",e)},map(e,t){return ft(this,"map",e,t,void 0,arguments)},pop(){return fi(this,"pop")},push(...e){return fi(this,"push",e)},reduce(e,...t){return Wr(this,"reduce",e,t)},reduceRight(e,...t){return Wr(this,"reduceRight",e,t)},shift(){return fi(this,"shift")},some(e,t){return ft(this,"some",e,t,void 0,arguments)},splice(...e){return fi(this,"splice",e)},toReversed(){return Gt(this).toReversed()},toSorted(e){return Gt(this).toSorted(e)},toSpliced(...e){return Gt(this).toSpliced(...e)},unshift(...e){return fi(this,"unshift",e)},values(){return Nn(this,"values",e=>nt(this,e))}};function Nn(e,t,i){const n=fn(e),r=n[t]();return n!==e&&!Fe(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=i(s.value)),s}),r}const pc=Array.prototype;function ft(e,t,i,n,r,s){const l=fn(e),o=l!==e&&!Fe(e),c=l[t];if(c!==pc[t]){const p=c.apply(e,s);return o?Xe(p):p}let u=i;l!==e&&(o?u=function(p,g){return i.call(this,nt(e,p),g,e)}:i.length>2&&(u=function(p,g){return i.call(this,p,g,e)}));const a=c.call(l,u,n);return o&&r?r(a):a}function Wr(e,t,i,n){const r=fn(e),s=r!==e&&!Fe(e);let l=i,o=!1;r!==e&&(s?(o=n.length===0,l=function(u,a,p){return o&&(o=!1,u=nt(e,u)),i.call(this,u,nt(e,a),p,e)}):i.length>3&&(l=function(u,a,p){return i.call(this,u,a,p,e)}));const c=r[t](l,...n);return o?nt(e,c):c}function $n(e,t,i){const n=Q(e);Ie(n,"iterate",wi);const r=n[t](...i);return(r===-1||r===!1)&&pn(i[0])?(i[0]=Q(i[0]),n[t](...i)):r}function fi(e,t,i=[]){ct(),vr();const n=Q(e)[t].apply(e,i);return br(),at(),n}const hc=pr("__proto__,__v_isRef,__isVue"),gl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(je));function gc(e){je(e)||(e=String(e));const t=Q(this);return Ie(t,"has",e),t.hasOwnProperty(e)}class ml{constructor(t=!1,i=!1){this._isReadonly=t,this._isShallow=i}get(t,i,n){if(i==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return s;if(i==="__v_raw")return n===(r?s?Ac:Sl:s?_l:bl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const l=H(t);if(!r){let c;if(l&&(c=fc[i]))return c;if(i==="hasOwnProperty")return gc}const o=Reflect.get(t,i,pe(t)?t:n);if((je(i)?gl.has(i):hc(i))||(r||Ie(t,"get",i),s))return o;if(pe(o)){const c=l&&on(i)?o:o.value;return r&&re(c)?Xn(c):c}return re(o)?r?Xn(o):Pi(o):o}}class vl extends ml{constructor(t=!1){super(!1,t)}set(t,i,n,r){let s=t[i];const l=H(t)&&on(i);if(!this._isShallow){const u=_t(s);if(!Fe(n)&&!_t(n)&&(s=Q(s),n=Q(n)),!l&&pe(s)&&!pe(n))return u||(s.value=n),!0}const o=l?Number(i)<t.length:ie(t,i),c=Reflect.set(t,i,n,pe(t)?t:r);return t===Q(r)&&c&&(o?st(n,s)&&mt(t,"set",i,n):mt(t,"add",i,n)),c}deleteProperty(t,i){const n=ie(t,i);t[i];const r=Reflect.deleteProperty(t,i);return r&&n&&mt(t,"delete",i,void 0),r}has(t,i){const n=Reflect.has(t,i);return(!je(i)||!gl.has(i))&&Ie(t,"has",i),n}ownKeys(t){return Ie(t,"iterate",H(t)?"length":Vt),Reflect.ownKeys(t)}}class mc extends ml{constructor(t=!1){super(!0,t)}set(t,i){return!0}deleteProperty(t,i){return!0}}const vc=new vl,bc=new mc,_c=new vl(!0);const zn=e=>e,Li=e=>Reflect.getPrototypeOf(e);function Sc(e,t,i){return function(...n){const r=this.__v_raw,s=Q(r),l=Qt(s),o=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,u=r[e](...n),a=i?zn:t?ni:Xe;return!t&&Ie(s,"iterate",c?qn:Vt),Ae(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:o?[a(p[0]),a(p[1])]:a(p),done:g}}})}}function Bi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function yc(e,t){const i={get(r){const s=this.__v_raw,l=Q(s),o=Q(r);e||(st(r,o)&&Ie(l,"get",r),Ie(l,"get",o));const{has:c}=Li(l),u=t?zn:e?ni:Xe;if(c.call(l,r))return u(s.get(r));if(c.call(l,o))return u(s.get(o));s!==l&&s.get(r)},get size(){const r=this.__v_raw;return!e&&Ie(Q(r),"iterate",Vt),r.size},has(r){const s=this.__v_raw,l=Q(s),o=Q(r);return e||(st(r,o)&&Ie(l,"has",r),Ie(l,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const l=this,o=l.__v_raw,c=Q(o),u=t?zn:e?ni:Xe;return!e&&Ie(c,"iterate",Vt),o.forEach((a,p)=>r.call(s,u(a),u(p),l))}};return Ae(i,e?{add:Bi("add"),set:Bi("set"),delete:Bi("delete"),clear:Bi("clear")}:{add(r){const s=Q(this),l=Li(s),o=Q(r),c=!t&&!Fe(r)&&!_t(r)?o:r;return l.has.call(s,c)||st(r,c)&&l.has.call(s,r)||st(o,c)&&l.has.call(s,o)||(s.add(c),mt(s,"add",c,c)),this},set(r,s){!t&&!Fe(s)&&!_t(s)&&(s=Q(s));const l=Q(this),{has:o,get:c}=Li(l);let u=o.call(l,r);u||(r=Q(r),u=o.call(l,r));const a=c.call(l,r);return l.set(r,s),u?st(s,a)&&mt(l,"set",r,s):mt(l,"add",r,s),this},delete(r){const s=Q(this),{has:l,get:o}=Li(s);let c=l.call(s,r);c||(r=Q(r),c=l.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return c&&mt(s,"delete",r,void 0),u},clear(){const r=Q(this),s=r.size!==0,l=r.clear();return s&&mt(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Sc(r,e,t)}),i}function yr(e,t){const i=yc(e,t);return(n,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(ie(i,r)&&r in n?i:n,r,s)}const Cc={get:yr(!1,!1)},Tc={get:yr(!1,!0)},Rc={get:yr(!0,!1)};const bl=new WeakMap,_l=new WeakMap,Sl=new WeakMap,Ac=new WeakMap;function xc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pi(e){return _t(e)?e:Cr(e,!1,vc,Cc,bl)}function yl(e){return Cr(e,!1,_c,Tc,_l)}function Xn(e){return Cr(e,!0,bc,Rc,Sl)}function Cr(e,t,i,n,r){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=r.get(e);if(s)return s;const l=xc(Qo(e));if(l===0)return e;const o=new Proxy(e,l===2?n:i);return r.set(e,o),o}function ot(e){return _t(e)?ot(e.__v_raw):!!(e&&e.__v_isReactive)}function _t(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function pn(e){return e?!!e.__v_raw:!1}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Tr(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&el(e,"__v_skip",!0),e}const Xe=e=>re(e)?Pi(e):e,ni=e=>re(e)?Xn(e):e;function pe(e){return e?e.__v_isRef===!0:!1}function hn(e){return Cl(e,!1)}function Ec(e){return Cl(e,!0)}function Cl(e,t){return pe(e)?e:new Ic(e,t)}class Ic{constructor(t,i){this.dep=new Sr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?t:Q(t),this._value=i?t:Xe(t),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(t){const i=this._rawValue,n=this.__v_isShallow||Fe(t)||_t(t);t=n?t:Q(t),st(t,i)&&(this._rawValue=t,this._value=n?t:Xe(t),this.dep.trigger())}}function ye(e){return pe(e)?e.value:e}const wc={get:(e,t,i)=>t==="__v_raw"?e:ye(Reflect.get(e,t,i)),set:(e,t,i,n)=>{const r=e[t];return pe(r)&&!pe(i)?(r.value=i,!0):Reflect.set(e,t,i,n)}};function Tl(e){return ot(e)?e:new Proxy(e,wc)}function Nc(e){const t=H(e)?new Array(e.length):{};for(const i in e)t[i]=Rl(e,i);return t}class $c{constructor(t,i,n){this._object=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=je(i)?i:String(i),this._raw=Q(t);let r=!0,s=t;if(!H(t)||je(this._key)||!on(this._key))do r=!pn(s)||Fe(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let t=this._object[this._key];return this._shallow&&(t=ye(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&pe(this._raw[this._key])){const i=this._object[this._key];if(pe(i)){i.value=t;return}}this._object[this._key]=t}get dep(){return dc(this._raw,this._key)}}class kc{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Oc(e,t,i){return pe(e)?e:W(e)?new kc(e):re(e)&&arguments.length>1?Rl(e,t,i):hn(e)}function Rl(e,t,i){return new $c(e,t,i)}class Pc{constructor(t,i,n){this.fn=t,this.setter=i,this._value=void 0,this.dep=new Sr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return al(this,!0),!0}get value(){const t=this.dep.track();return fl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Mc(e,t,i=!1){let n,r;return W(e)?n=e:(n=e.get,r=e.set),new Pc(n,r,i)}const Vi={},qi=new WeakMap;let Dt;function Dc(e,t=!1,i=Dt){if(i){let n=qi.get(i);n||qi.set(i,n=[]),n.push(e)}}function Lc(e,t,i=ce){const{immediate:n,deep:r,once:s,scheduler:l,augmentJob:o,call:c}=i,u=_=>r?_:Fe(_)||r===!1||r===0?vt(_,1):vt(_);let a,p,g,m,R=!1,S=!1;if(pe(e)?(p=()=>e.value,R=Fe(e)):ot(e)?(p=()=>u(e),R=!0):H(e)?(S=!0,R=e.some(_=>ot(_)||Fe(_)),p=()=>e.map(_=>{if(pe(_))return _.value;if(ot(_))return u(_);if(W(_))return c?c(_,2):_()})):W(e)?t?p=c?()=>c(e,2):e:p=()=>{if(g){ct();try{g()}finally{at()}}const _=Dt;Dt=a;try{return c?c(e,3,[m]):e(m)}finally{Dt=_}}:p=lt,t&&r){const _=p,M=r===!0?1/0:r;p=()=>vt(_(),M)}const I=ll(),k=()=>{a.stop(),I&&I.active&&hr(I.effects,a)};if(s&&t){const _=t;t=(...M)=>{const z=_(...M);return k(),z}}let b=S?new Array(e.length).fill(Vi):Vi;const y=_=>{if(!(!(a.flags&1)||!a.dirty&&!_))if(t){const M=a.run();if(_||r||R||(S?M.some((z,D)=>st(z,b[D])):st(M,b))){g&&g();const z=Dt;Dt=a;try{const D=[M,b===Vi?void 0:S&&b[0]===Vi?[]:b,m];b=M,c?c(t,3,D):t(...D)}finally{Dt=z}}}else a.run()};return o&&o(y),a=new ol(p),a.scheduler=l?()=>l(y,!1):y,m=_=>Dc(_,!1,a),g=a.onStop=()=>{const _=qi.get(a);if(_){if(c)c(_,4);else for(const M of _)M();qi.delete(a)}},t?n?y(!0):b=a.run():l?l(y.bind(null,!0),!0):a.run(),k.pause=a.pause.bind(a),k.resume=a.resume.bind(a),k.stop=k,k}function vt(e,t=1/0,i){if(t<=0||!re(e)||e.__v_skip||(i=i||new Map,(i.get(e)||0)>=t))return e;if(i.set(e,t),t--,pe(e))vt(e.value,t,i);else if(H(e))for(let n=0;n<e.length;n++)vt(e[n],t,i);else if(ai(e)||Qt(e))e.forEach(n=>{vt(n,t,i)});else if(Zs(e)){for(const n in e)vt(e[n],t,i);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&vt(e[n],t,i)}return e}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(e,t,i,n){try{return n?e(...n):e()}catch(r){gn(r,t,i)}}function Je(e,t,i,n){if(W(e)){const r=Mi(e,t,i,n);return r&&Ys(r)&&r.catch(s=>{gn(s,t,i)}),r}if(H(e)){const r=[];for(let s=0;s<e.length;s++)r.push(Je(e[s],t,i,n));return r}}function gn(e,t,i,n=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||ce;if(t){let o=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${i}`;for(;o;){const a=o.ec;if(a){for(let p=0;p<a.length;p++)if(a[p](e,c,u)===!1)return}o=o.parent}if(s){ct(),Mi(s,null,10,[e,c,u]),at();return}}Bc(e,i,r,n,l)}function Bc(e,t,i,n=!0,r=!1){if(r)throw e;console.error(e)}const ke=[];let it=-1;const ei=[];let xt=null,qt=0;const Al=Promise.resolve();let zi=null;function mn(e){const t=zi||Al;return e?t.then(this?e.bind(this):e):t}function Vc(e){let t=it+1,i=ke.length;for(;t<i;){const n=t+i>>>1,r=ke[n],s=Ni(r);s<e||s===e&&r.flags&2?t=n+1:i=n}return t}function Rr(e){if(!(e.flags&1)){const t=Ni(e),i=ke[ke.length-1];!i||!(e.flags&2)&&t>=Ni(i)?ke.push(e):ke.splice(Vc(t),0,e),e.flags|=1,xl()}}function xl(){zi||(zi=Al.then(Il))}function Fc(e){H(e)?ei.push(...e):xt&&e.id===-1?xt.splice(qt+1,0,e):e.flags&1||(ei.push(e),e.flags|=1),xl()}function qr(e,t,i=it+1){for(;i<ke.length;i++){const n=ke[i];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ke.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function El(e){if(ei.length){const t=[...new Set(ei)].sort((i,n)=>Ni(i)-Ni(n));if(ei.length=0,xt){xt.push(...t);return}for(xt=t,qt=0;qt<xt.length;qt++){const i=xt[qt];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}xt=null,qt=0}}const Ni=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Il(e){try{for(it=0;it<ke.length;it++){const t=ke[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;it<ke.length;it++){const t=ke[it];t&&(t.flags&=-2)}it=-1,ke.length=0,El(),zi=null,(ke.length||ei.length)&&Il()}}let Re=null,wl=null;function Xi(e){const t=Re;return Re=e,wl=e&&e.type.__scopeId||null,t}function Ar(e,t=Re,i){if(!t||e._n)return e;const n=(...r)=>{n._d&&en(-1);const s=Xi(t);let l;try{l=e(...r)}finally{Xi(s),n._d&&en(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function jc(e,t){if(Re===null)return e;const i=yn(Re),n=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,l,o,c=ce]=t[r];s&&(W(s)&&(s={mounted:s,updated:s}),s.deep&&vt(l),n.push({dir:s,instance:i,value:l,oldValue:void 0,arg:o,modifiers:c}))}return e}function Pt(e,t,i,n){const r=e.dirs,s=t&&t.dirs;for(let l=0;l<r.length;l++){const o=r[l];s&&(o.oldValue=s[l].value);let c=o.dir[n];c&&(ct(),Je(c,i,8,[e.el,o,e,t]),at())}}function Ui(e,t){if(we){let i=we.provides;const n=we.parent&&we.parent.provides;n===i&&(i=we.provides=Object.create(n)),i[e]=t}}function Ge(e,t,i=!1){const n=$r();if(n||jt){let r=jt?jt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return i&&W(t)?t.call(n&&n.proxy):t}}function Hc(){return!!($r()||jt)}const Uc=Symbol.for("v-scx"),Kc=()=>Ge(Uc);function Ft(e,t,i){return Nl(e,t,i)}function Nl(e,t,i=ce){const{immediate:n,deep:r,flush:s,once:l}=i,o=Ae({},i),c=t&&n||!t&&s!=="post";let u;if(ki){if(s==="sync"){const m=Kc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=lt,m.resume=lt,m.pause=lt,m}}const a=we;o.call=(m,R,S)=>Je(m,a,R,S);let p=!1;s==="post"?o.scheduler=m=>{_e(m,a&&a.suspense)}:s!=="sync"&&(p=!0,o.scheduler=(m,R)=>{R?m():Rr(m)}),o.augmentJob=m=>{t&&(m.flags|=4),p&&(m.flags|=2,a&&(m.id=a.uid,m.i=a))};const g=Lc(e,t,o);return ki&&(u?u.push(g):c&&g()),g}function Gc(e,t,i){const n=this.proxy,r=ue(e)?e.includes(".")?$l(n,e):()=>n[e]:e.bind(n,n);let s;W(t)?s=t:(s=t.handler,i=t);const l=Di(this),o=Nl(r,s.bind(n),i);return l(),o}function $l(e,t){const i=t.split(".");return()=>{let n=e;for(let r=0;r<i.length&&n;r++)n=n[i[r]];return n}}const Rt=new WeakMap,kl=Symbol("_vte"),Wc=e=>e.__isTeleport,Lt=e=>e&&(e.disabled||e.disabled===""),qc=e=>e&&(e.defer||e.defer===""),zr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Xr=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Jn=(e,t)=>{const i=e&&e.to;return ue(i)?t?t(i):null:i},zc={name:"Teleport",__isTeleport:!0,process(e,t,i,n,r,s,l,o,c,u){const{mc:a,pc:p,pbc:g,o:{insert:m,querySelector:R,createText:S,createComment:I,parentNode:k}}=u,b=Lt(t.props);let{dynamicChildren:y}=t;const _=(D,B,V)=>{D.shapeFlag&16&&a(D.children,B,V,r,s,l,o,c)},M=(D=t)=>{const B=Lt(D.props),V=D.target=Jn(D.props,R),X=Yn(V,D,S,m);V&&(l!=="svg"&&zr(V)?l="svg":l!=="mathml"&&Xr(V)&&(l="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(V),B||(_(D,V,X),gi(D,!1)))},z=D=>{const B=()=>{if(Rt.get(D)===B){if(Rt.delete(D),Lt(D.props)){const V=k(D.el)||i;_(D,V,D.anchor),gi(D,!0)}M(D)}};Rt.set(D,B),_e(B,s)};if(e==null){const D=t.el=S(""),B=t.anchor=S("");if(m(D,i,n),m(B,i,n),qc(t.props)||s&&s.pendingBranch){z(t);return}b&&(_(t,i,B),gi(t,!0)),M()}else{t.el=e.el;const D=t.anchor=e.anchor,B=Rt.get(e);if(B){B.flags|=8,Rt.delete(e),z(t);return}t.targetStart=e.targetStart;const V=t.target=e.target,X=t.targetAnchor=e.targetAnchor,de=Lt(e.props),xe=de?i:V,Ee=de?D:X;if(l==="svg"||zr(V)?l="svg":(l==="mathml"||Xr(V))&&(l="mathml"),y?(g(e.dynamicChildren,y,xe,r,s,l,o),Nr(e,t,!0)):c||p(e,t,xe,Ee,r,s,l,o,!1),b)de?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Fi(t,i,D,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const qe=Jn(t.props,R);qe&&(t.target=qe,Fi(t,qe,null,u,0))}else de&&Fi(t,V,X,u,1);gi(t,b)}},remove(e,t,i,{um:n,o:{remove:r}},s){const{shapeFlag:l,children:o,anchor:c,targetStart:u,targetAnchor:a,target:p,props:g}=e,m=Lt(g),R=s||!m,S=Rt.get(e);if(S&&(S.flags|=8,Rt.delete(e)),p&&(r(u),r(a)),s&&r(c),!S&&(m||p)&&l&16)for(let I=0;I<o.length;I++){const k=o[I];n(k,t,i,R,!!k.dynamicChildren)}},move:Fi,hydrate:Xc};function Fi(e,t,i,{o:{insert:n},m:r},s=2){s===0&&n(e.targetAnchor,t,i);const{el:l,anchor:o,shapeFlag:c,children:u,props:a}=e,p=s===2;if(p&&n(l,t,i),!Rt.has(e)&&(!p||Lt(a))&&c&16)for(let g=0;g<u.length;g++)r(u[g],t,i,2);p&&n(o,t,i)}function Xc(e,t,i,n,r,s,{o:{nextSibling:l,parentNode:o,querySelector:c,insert:u,createText:a}},p){function g(I,k){let b=k;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")t.targetStart=b;else if(b.data==="teleport anchor"){t.targetAnchor=b,I._lpa=t.targetAnchor&&l(t.targetAnchor);break}}b=l(b)}}function m(I,k){k.anchor=p(l(I),k,o(I),i,n,r,s)}const R=t.target=Jn(t.props,c),S=Lt(t.props);if(R){const I=R._lpa||R.firstChild;t.shapeFlag&16&&(S?(m(e,t),g(R,I),t.targetAnchor||Yn(R,t,a,u,o(e)===R?e:null)):(t.anchor=l(e),g(R,I),t.targetAnchor||Yn(R,t,a,u),p(I&&l(I),t,R,i,n,r,s))),gi(t,S)}else S&&t.shapeFlag&16&&(m(e,t),t.targetStart=e,t.targetAnchor=l(e));return t.anchor&&l(t.anchor)}const ih=zc;function gi(e,t){const i=e.ctx;if(i&&i.ut){let n,r;for(t?(n=e.el,r=e.anchor):(n=e.targetStart,r=e.targetAnchor);n&&n!==r;)n.nodeType===1&&n.setAttribute("data-v-owner",i.uid),n=n.nextSibling;i.ut()}}function Yn(e,t,i,n,r=null){const s=t.targetStart=i(""),l=t.targetAnchor=i("");return s[kl]=l,e&&(n(s,e,r),n(l,e,r)),l}const kn=Symbol("_leaveCb");function vn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,vn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ol(e,t){return W(e)?Ae({name:e.name},t,{setup:e}):e}function Pl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Jr(e,t){let i;return!!((i=Object.getOwnPropertyDescriptor(e,t))&&!i.configurable)}const Ji=new WeakMap;function Ci(e,t,i,n,r=!1){if(H(e)){e.forEach((S,I)=>Ci(S,t&&(H(t)?t[I]:t),i,n,r));return}if(wt(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ci(e,t,i,n.component.subTree);return}const s=n.shapeFlag&4?yn(n.component):n.el,l=r?null:s,{i:o,r:c}=e,u=t&&t.r,a=o.refs===ce?o.refs={}:o.refs,p=o.setupState,g=Q(p),m=p===ce?Js:S=>Jr(a,S)?!1:ie(g,S),R=(S,I)=>!(I&&Jr(a,I));if(u!=null&&u!==c){if(Yr(t),ue(u))a[u]=null,m(u)&&(p[u]=null);else if(pe(u)){const S=t;R(u,S.k)&&(u.value=null),S.k&&(a[S.k]=null)}}if(W(c)){ct();try{Mi(c,o,12,[l,a])}finally{at()}}else{const S=ue(c),I=pe(c);if(S||I){const k=()=>{if(e.f){const b=S?m(c)?p[c]:a[c]:R()||!e.k?c.value:a[e.k];if(r)H(b)&&hr(b,s);else if(H(b))b.includes(s)||b.push(s);else if(S)a[c]=[s],m(c)&&(p[c]=a[c]);else{const y=[s];R(c,e.k)&&(c.value=y),e.k&&(a[e.k]=y)}}else S?(a[c]=l,m(c)&&(p[c]=l)):I&&(R(c,e.k)&&(c.value=l),e.k&&(a[e.k]=l))};if(l){const b=()=>{k(),Ji.delete(e)};b.id=-1,Ji.set(e,b),_e(b,i)}else Yr(e),k()}}}function Yr(e){const t=Ji.get(e);t&&(t.flags|=8,Ji.delete(e))}dn().requestIdleCallback;dn().cancelIdleCallback;const wt=e=>!!e.type.__asyncLoader,Ml=e=>e.type.__isKeepAlive,Jc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const i=$r(),n=i.ctx;if(!n.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const r=new Map,s=new Set;let l=null;const o=i.suspense,{renderer:{p:c,m:u,um:a,o:{createElement:p}}}=n,g=p("div");n.activate=(b,y,_,M,z)=>{const D=b.component;u(b,y,_,0,o),c(D.vnode,b,y,_,D,o,M,b.slotScopeIds,z),_e(()=>{D.isDeactivated=!1,D.a&&Zt(D.a);const B=b.props&&b.props.onVnodeMounted;B&&Ue(B,D.parent,b)},o)},n.deactivate=b=>{const y=b.component;Qi(y.m),Qi(y.a),u(b,g,null,1,o),_e(()=>{y.da&&Zt(y.da);const _=b.props&&b.props.onVnodeUnmounted;_&&Ue(_,y.parent,b),y.isDeactivated=!0},o)};function m(b){On(b),a(b,i,o,!0)}function R(b){r.forEach((y,_)=>{const M=rr(wt(y)?y.type.__asyncResolved||{}:y.type);M&&!b(M)&&S(_)})}function S(b){const y=r.get(b);y&&(!l||!zt(y,l))?m(y):l&&On(l),r.delete(b),s.delete(b)}Ft(()=>[e.include,e.exclude],([b,y])=>{b&&R(_=>mi(b,_)),y&&R(_=>!mi(y,_))},{flush:"post",deep:!0});let I=null;const k=()=>{I!=null&&(Zi(i.subTree.type)?_e(()=>{r.set(I,ji(i.subTree))},i.subTree.suspense):r.set(I,ji(i.subTree)))};return xr(k),Ll(k),Bl(()=>{r.forEach(b=>{const{subTree:y,suspense:_}=i,M=ji(y);if(b.type===M.type&&b.key===M.key){On(M);const z=M.component.da;z&&_e(z,_);return}m(b)})}),()=>{if(I=null,!t.default)return l=null;const b=t.default(),y=b[0];if(b.length>1)return l=null,b;if(!si(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return l=null,y;let _=ji(y);if(_.type===ut)return l=null,_;const M=_.type,z=rr(wt(_)?_.type.__asyncResolved||{}:M),{include:D,exclude:B,max:V}=e;if(D&&(!z||!mi(D,z))||B&&z&&mi(B,z))return _.shapeFlag&=-257,l=_,y;const X=_.key==null?M:_.key,de=r.get(X);return _.el&&(_=Ht(_),y.shapeFlag&128&&(y.ssContent=_)),I=X,de?(_.el=de.el,_.component=de.component,_.transition&&vn(_,_.transition),_.shapeFlag|=512,s.delete(X),s.add(X)):(s.add(X),V&&s.size>parseInt(V,10)&&S(s.values().next().value)),_.shapeFlag|=256,l=_,Zi(y.type)?y:_}}},Yc=Jc;function mi(e,t){return H(e)?e.some(i=>mi(i,t)):ue(e)?e.split(",").includes(t):Yo(e)?(e.lastIndex=0,e.test(t)):!1}function Qc(e,t){Dl(e,"a",t)}function Zc(e,t){Dl(e,"da",t)}function Dl(e,t,i=we){const n=e.__wdc||(e.__wdc=()=>{let r=i;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(bn(t,n,i),i){let r=i.parent;for(;r&&r.parent;)Ml(r.parent.vnode)&&ea(n,t,i,r),r=r.parent}}function ea(e,t,i,n){const r=bn(t,e,n,!0);Vl(()=>{hr(n[t],r)},i)}function On(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ji(e){return e.shapeFlag&128?e.ssContent:e}function bn(e,t,i=we,n=!1){if(i){const r=i[e]||(i[e]=[]),s=t.__weh||(t.__weh=(...l)=>{ct();const o=Di(i),c=Je(t,i,e,l);return o(),at(),c});return n?r.unshift(s):r.push(s),s}}const St=e=>(t,i=we)=>{(!ki||e==="sp")&&bn(e,(...n)=>t(...n),i)},ta=St("bm"),xr=St("m"),ia=St("bu"),Ll=St("u"),Bl=St("bum"),Vl=St("um"),na=St("sp"),ra=St("rtg"),sa=St("rtc");function la(e,t=we){bn("ec",e,t)}const Fl="components";function Er(e,t){return Hl(Fl,e,!0,t)||e}const jl=Symbol.for("v-ndc");function oa(e){return ue(e)?Hl(Fl,e,!1)||e:e||jl}function Hl(e,t,i=!0,n=!1){const r=Re||we;if(r){const s=r.type;{const o=rr(s,!1);if(o&&(o===t||o===Pe(t)||o===an(Pe(t))))return s}const l=Qr(r[e]||s[e],t)||Qr(r.appContext[e],t);return!l&&n?s:l}}function Qr(e,t){return e&&(e[t]||e[Pe(t)]||e[an(Pe(t))])}function Qn(e,t,i,n){let r;const s=i,l=H(e);if(l||ue(e)){const o=l&&ot(e);let c=!1,u=!1;o&&(c=!Fe(e),u=_t(e),e=fn(e)),r=new Array(e.length);for(let a=0,p=e.length;a<p;a++)r[a]=t(c?u?ni(Xe(e[a])):Xe(e[a]):e[a],a,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,s)}else if(re(e))if(e[Symbol.iterator])r=Array.from(e,(o,c)=>t(o,c,void 0,s));else{const o=Object.keys(e);r=new Array(o.length);for(let c=0,u=o.length;c<u;c++){const a=o[c];r[c]=t(e[a],a,c,s)}}else r=[];return r}function nh(e,t,i={},n,r){if(Re.ce||Re.parent&&wt(Re.parent)&&Re.parent.ce){const u=Object.keys(i).length>0;return t!=="default"&&(i.name=t),Se(),ri(Oe,null,[me("slot",i,n&&n())],u?-2:64)}let s=e[t];s&&s._c&&(s._d=!1),Se();const l=s&&Ul(s(i)),o=i.key||l&&l.key,c=ri(Oe,{key:(o&&!je(o)?o:`_${t}`)+(!l&&n?"_fb":"")},l||(n?n():[]),l&&e._===1?64:-2);return!r&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),s&&s._c&&(s._d=!0),c}function Ul(e){return e.some(t=>si(t)?!(t.type===ut||t.type===Oe&&!Ul(t.children)):!0)?e:null}const Zn=e=>e?ao(e)?yn(e):Zn(e.parent):null,Ti=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zn(e.parent),$root:e=>Zn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Gl(e),$forceUpdate:e=>e.f||(e.f=()=>{Rr(e.update)}),$nextTick:e=>e.n||(e.n=mn.bind(e.proxy)),$watch:e=>Gc.bind(e)}),Pn=(e,t)=>e!==ce&&!e.__isScriptSetup&&ie(e,t),ca={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:i,setupState:n,data:r,props:s,accessCache:l,type:o,appContext:c}=e;if(t[0]!=="$"){const g=l[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return r[t];case 4:return i[t];case 3:return s[t]}else{if(Pn(n,t))return l[t]=1,n[t];if(r!==ce&&ie(r,t))return l[t]=2,r[t];if(ie(s,t))return l[t]=3,s[t];if(i!==ce&&ie(i,t))return l[t]=4,i[t];er&&(l[t]=0)}}const u=Ti[t];let a,p;if(u)return t==="$attrs"&&Ie(e.attrs,"get",""),u(e);if((a=o.__cssModules)&&(a=a[t]))return a;if(i!==ce&&ie(i,t))return l[t]=4,i[t];if(p=c.config.globalProperties,ie(p,t))return p[t]},set({_:e},t,i){const{data:n,setupState:r,ctx:s}=e;return Pn(r,t)?(r[t]=i,!0):n!==ce&&ie(n,t)?(n[t]=i,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:n,appContext:r,props:s,type:l}},o){let c;return!!(i[o]||e!==ce&&o[0]!=="$"&&ie(e,o)||Pn(t,o)||ie(s,o)||ie(n,o)||ie(Ti,o)||ie(r.config.globalProperties,o)||(c=l.__cssModules)&&c[o])},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:ie(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function Zr(e){return H(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let er=!0;function aa(e){const t=Gl(e),i=e.proxy,n=e.ctx;er=!1,t.beforeCreate&&es(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:l,watch:o,provide:c,inject:u,created:a,beforeMount:p,mounted:g,beforeUpdate:m,updated:R,activated:S,deactivated:I,beforeDestroy:k,beforeUnmount:b,destroyed:y,unmounted:_,render:M,renderTracked:z,renderTriggered:D,errorCaptured:B,serverPrefetch:V,expose:X,inheritAttrs:de,components:xe,directives:Ee,filters:qe}=t;if(u&&ua(u,n,null),l)for(const q in l){const ee=l[q];W(ee)&&(n[q]=ee.bind(i))}if(r){const q=r.call(i,i);re(q)&&(e.data=Pi(q))}if(er=!0,s)for(const q in s){const ee=s[q],dt=W(ee)?ee.bind(i,i):W(ee.get)?ee.get.bind(i,i):lt,Ct=!W(ee)&&W(ee.set)?ee.set.bind(i):lt,Qe=Be({get:dt,set:Ct});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Me=>Qe.value=Me})}if(o)for(const q in o)Kl(o[q],n,i,q);if(c){const q=W(c)?c.call(i):c;Reflect.ownKeys(q).forEach(ee=>{Ui(ee,q[ee])})}a&&es(a,e,"c");function fe(q,ee){H(ee)?ee.forEach(dt=>q(dt.bind(i))):ee&&q(ee.bind(i))}if(fe(ta,p),fe(xr,g),fe(ia,m),fe(Ll,R),fe(Qc,S),fe(Zc,I),fe(la,B),fe(sa,z),fe(ra,D),fe(Bl,b),fe(Vl,_),fe(na,V),H(X))if(X.length){const q=e.exposed||(e.exposed={});X.forEach(ee=>{Object.defineProperty(q,ee,{get:()=>i[ee],set:dt=>i[ee]=dt,enumerable:!0})})}else e.exposed||(e.exposed={});M&&e.render===lt&&(e.render=M),de!=null&&(e.inheritAttrs=de),xe&&(e.components=xe),Ee&&(e.directives=Ee),V&&Pl(e)}function ua(e,t,i=lt){H(e)&&(e=tr(e));for(const n in e){const r=e[n];let s;re(r)?"default"in r?s=Ge(r.from||n,r.default,!0):s=Ge(r.from||n):s=Ge(r),pe(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[n]=s}}function es(e,t,i){Je(H(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,i)}function Kl(e,t,i,n){let r=n.includes(".")?$l(i,n):()=>i[n];if(ue(e)){const s=t[e];W(s)&&Ft(r,s)}else if(W(e))Ft(r,e.bind(i));else if(re(e))if(H(e))e.forEach(s=>Kl(s,t,i,n));else{const s=W(e.handler)?e.handler.bind(i):t[e.handler];W(s)&&Ft(r,s,e)}}function Gl(e){const t=e.type,{mixins:i,extends:n}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:l}}=e.appContext,o=s.get(t);let c;return o?c=o:!r.length&&!i&&!n?c=t:(c={},r.length&&r.forEach(u=>Yi(c,u,l,!0)),Yi(c,t,l)),re(t)&&s.set(t,c),c}function Yi(e,t,i,n=!1){const{mixins:r,extends:s}=t;s&&Yi(e,s,i,!0),r&&r.forEach(l=>Yi(e,l,i,!0));for(const l in t)if(!(n&&l==="expose")){const o=da[l]||i&&i[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const da={data:ts,props:is,emits:is,methods:vi,computed:vi,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:vi,directives:vi,watch:pa,provide:ts,inject:fa};function ts(e,t){return t?e?function(){return Ae(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function fa(e,t){return vi(tr(e),tr(t))}function tr(e){if(H(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function vi(e,t){return e?Ae(Object.create(null),e,t):t}function is(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Ae(Object.create(null),Zr(e),Zr(t??{})):t}function pa(e,t){if(!e)return t;if(!t)return e;const i=Ae(Object.create(null),e);for(const n in t)i[n]=Ne(e[n],t[n]);return i}function Wl(){return{app:null,config:{isNativeTag:Js,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ha=0;function ga(e,t){return function(n,r=null){W(n)||(n=Ae({},n)),r!=null&&!re(r)&&(r=null);const s=Wl(),l=new WeakSet,o=[];let c=!1;const u=s.app={_uid:ha++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Wa,get config(){return s.config},set config(a){},use(a,...p){return l.has(a)||(a&&W(a.install)?(l.add(a),a.install(u,...p)):W(a)&&(l.add(a),a(u,...p))),u},mixin(a){return s.mixins.includes(a)||s.mixins.push(a),u},component(a,p){return p?(s.components[a]=p,u):s.components[a]},directive(a,p){return p?(s.directives[a]=p,u):s.directives[a]},mount(a,p,g){if(!c){const m=u._ceVNode||me(n,r);return m.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),e(m,a,g),c=!0,u._container=a,a.__vue_app__=u,yn(m.component)}},onUnmount(a){o.push(a)},unmount(){c&&(Je(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(a,p){return s.provides[a]=p,u},runWithContext(a){const p=jt;jt=u;try{return a()}finally{jt=p}}};return u}}let jt=null;const ma=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Pe(t)}Modifiers`]||e[`${kt(t)}Modifiers`];function va(e,t,...i){if(e.isUnmounted)return;const n=e.vnode.props||ce;let r=i;const s=t.startsWith("update:"),l=s&&ma(n,t.slice(7));l&&(l.trim&&(r=i.map(a=>ue(a)?a.trim():a)),l.number&&(r=i.map(un)));let o,c=n[o=En(t)]||n[o=En(Pe(t))];!c&&s&&(c=n[o=En(kt(t))]),c&&Je(c,e,6,r);const u=n[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Je(u,e,6,r)}}const ba=new WeakMap;function ql(e,t,i=!1){const n=i?ba:t.emitsCache,r=n.get(e);if(r!==void 0)return r;const s=e.emits;let l={},o=!1;if(!W(e)){const c=u=>{const a=ql(u,t,!0);a&&(o=!0,Ae(l,a))};!i&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(re(e)&&n.set(e,null),null):(H(s)?s.forEach(c=>l[c]=null):Ae(l,s),re(e)&&n.set(e,l),l)}function _n(e,t){return!e||!sn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,kt(t))||ie(e,t))}function ns(e){const{type:t,vnode:i,proxy:n,withProxy:r,propsOptions:[s],slots:l,attrs:o,emit:c,render:u,renderCache:a,props:p,data:g,setupState:m,ctx:R,inheritAttrs:S}=e,I=Xi(e);let k,b;try{if(i.shapeFlag&4){const _=r||n,M=_;k=rt(u.call(M,_,a,p,m,g,R)),b=o}else{const _=t;k=rt(_.length>1?_(p,{attrs:o,slots:l,emit:c}):_(p,null)),b=t.props?o:_a(o)}}catch(_){Ri.length=0,gn(_,e,1),k=me(ut)}let y=k;if(b&&S!==!1){const _=Object.keys(b),{shapeFlag:M}=y;_.length&&M&7&&(s&&_.some(ln)&&(b=Sa(b,s)),y=Ht(y,b,!1,!0))}return i.dirs&&(y=Ht(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(i.dirs):i.dirs),i.transition&&vn(y,i.transition),k=y,Xi(I),k}const _a=e=>{let t;for(const i in e)(i==="class"||i==="style"||sn(i))&&((t||(t={}))[i]=e[i]);return t},Sa=(e,t)=>{const i={};for(const n in e)(!ln(n)||!(n.slice(9)in t))&&(i[n]=e[n]);return i};function ya(e,t,i){const{props:n,children:r,component:s}=e,{props:l,children:o,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&c>=0){if(c&1024)return!0;if(c&16)return n?rs(n,l,u):!!l;if(c&8){const a=t.dynamicProps;for(let p=0;p<a.length;p++){const g=a[p];if(zl(l,n,g)&&!_n(u,g))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===l?!1:n?l?rs(n,l,u):!0:!!l;return!1}function rs(e,t,i){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(zl(t,e,s)&&!_n(i,s))return!0}return!1}function zl(e,t,i){const n=e[i],r=t[i];return i==="style"&&re(n)&&re(r)?!Nt(n,r):n!==r}function Ca({vnode:e,parent:t,suspense:i},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=n,e=r),r===e)(e=t.vnode).el=n,t=t.parent;else break}i&&i.activeBranch===e&&(i.vnode.el=n)}const Xl={},Jl=()=>Object.create(Xl),Yl=e=>Object.getPrototypeOf(e)===Xl;function Ta(e,t,i,n=!1){const r={},s=Jl();e.propsDefaults=Object.create(null),Ql(e,t,r,s);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);i?e.props=n?r:yl(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function Ra(e,t,i,n){const{props:r,attrs:s,vnode:{patchFlag:l}}=e,o=Q(r),[c]=e.propsOptions;let u=!1;if((n||l>0)&&!(l&16)){if(l&8){const a=e.vnode.dynamicProps;for(let p=0;p<a.length;p++){let g=a[p];if(_n(e.emitsOptions,g))continue;const m=t[g];if(c)if(ie(s,g))m!==s[g]&&(s[g]=m,u=!0);else{const R=Pe(g);r[R]=ir(c,o,R,m,e,!1)}else m!==s[g]&&(s[g]=m,u=!0)}}}else{Ql(e,t,r,s)&&(u=!0);let a;for(const p in o)(!t||!ie(t,p)&&((a=kt(p))===p||!ie(t,a)))&&(c?i&&(i[p]!==void 0||i[a]!==void 0)&&(r[p]=ir(c,o,p,void 0,e,!0)):delete r[p]);if(s!==o)for(const p in s)(!t||!ie(t,p))&&(delete s[p],u=!0)}u&&mt(e.attrs,"set","")}function Ql(e,t,i,n){const[r,s]=e.propsOptions;let l=!1,o;if(t)for(let c in t){if(_i(c))continue;const u=t[c];let a;r&&ie(r,a=Pe(c))?!s||!s.includes(a)?i[a]=u:(o||(o={}))[a]=u:_n(e.emitsOptions,c)||(!(c in n)||u!==n[c])&&(n[c]=u,l=!0)}if(s){const c=Q(i),u=o||ce;for(let a=0;a<s.length;a++){const p=s[a];i[p]=ir(r,c,p,u[p],e,!ie(u,p))}}return l}function ir(e,t,i,n,r,s){const l=e[i];if(l!=null){const o=ie(l,"default");if(o&&n===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&W(c)){const{propsDefaults:u}=r;if(i in u)n=u[i];else{const a=Di(r);n=u[i]=c.call(null,t),a()}}else n=c;r.ce&&r.ce._setProp(i,n)}l[0]&&(s&&!o?n=!1:l[1]&&(n===""||n===kt(i))&&(n=!0))}return n}const Aa=new WeakMap;function Zl(e,t,i=!1){const n=i?Aa:t.propsCache,r=n.get(e);if(r)return r;const s=e.props,l={},o=[];let c=!1;if(!W(e)){const a=p=>{c=!0;const[g,m]=Zl(p,t,!0);Ae(l,g),m&&o.push(...m)};!i&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!s&&!c)return re(e)&&n.set(e,Yt),Yt;if(H(s))for(let a=0;a<s.length;a++){const p=Pe(s[a]);ss(p)&&(l[p]=ce)}else if(s)for(const a in s){const p=Pe(a);if(ss(p)){const g=s[a],m=l[p]=H(g)||W(g)?{type:g}:Ae({},g),R=m.type;let S=!1,I=!0;if(H(R))for(let k=0;k<R.length;++k){const b=R[k],y=W(b)&&b.name;if(y==="Boolean"){S=!0;break}else y==="String"&&(I=!1)}else S=W(R)&&R.name==="Boolean";m[0]=S,m[1]=I,(S||ie(m,"default"))&&o.push(p)}}const u=[l,o];return re(e)&&n.set(e,u),u}function ss(e){return e[0]!=="$"&&!_i(e)}const Ir=e=>e==="_"||e==="_ctx"||e==="$stable",wr=e=>H(e)?e.map(rt):[rt(e)],xa=(e,t,i)=>{if(t._n)return t;const n=Ar((...r)=>wr(t(...r)),i);return n._c=!1,n},eo=(e,t,i)=>{const n=e._ctx;for(const r in e){if(Ir(r))continue;const s=e[r];if(W(s))t[r]=xa(r,s,n);else if(s!=null){const l=wr(s);t[r]=()=>l}}},to=(e,t)=>{const i=wr(t);e.slots.default=()=>i},io=(e,t,i)=>{for(const n in t)(i||!Ir(n))&&(e[n]=t[n])},Ea=(e,t,i)=>{const n=e.slots=Jl();if(e.vnode.shapeFlag&32){const r=t._;r?(io(n,t,i),i&&el(n,"_",r,!0)):eo(t,n)}else t&&to(e,t)},Ia=(e,t,i)=>{const{vnode:n,slots:r}=e;let s=!0,l=ce;if(n.shapeFlag&32){const o=t._;o?i&&o===1?s=!1:io(r,t,i):(s=!t.$stable,eo(t,r)),l=t}else t&&(to(e,t),l={default:1});if(s)for(const o in r)!Ir(o)&&l[o]==null&&delete r[o]},_e=Oa;function wa(e){return Na(e)}function Na(e,t){const i=dn();i.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:l,createText:o,createComment:c,setText:u,setElementText:a,parentNode:p,nextSibling:g,setScopeId:m=lt,insertStaticContent:R}=e,S=(d,h,v,T=null,x=null,C=null,$=void 0,N=null,w=!!h.dynamicChildren)=>{if(d===h)return;d&&!zt(d,h)&&(T=A(d),Me(d,x,C,!0),d=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:E,ref:U,shapeFlag:P}=h;switch(E){case Sn:I(d,h,v,T);break;case ut:k(d,h,v,T);break;case Ki:d==null&&b(h,v,T,$);break;case Oe:xe(d,h,v,T,x,C,$,N,w);break;default:P&1?M(d,h,v,T,x,C,$,N,w):P&6?Ee(d,h,v,T,x,C,$,N,w):(P&64||P&128)&&E.process(d,h,v,T,x,C,$,N,w,F)}U!=null&&x?Ci(U,d&&d.ref,C,h||d,!h):U==null&&d&&d.ref!=null&&Ci(d.ref,null,C,d,!0)},I=(d,h,v,T)=>{if(d==null)n(h.el=o(h.children),v,T);else{const x=h.el=d.el;h.children!==d.children&&u(x,h.children)}},k=(d,h,v,T)=>{d==null?n(h.el=c(h.children||""),v,T):h.el=d.el},b=(d,h,v,T)=>{[d.el,d.anchor]=R(d.children,h,v,T,d.el,d.anchor)},y=({el:d,anchor:h},v,T)=>{let x;for(;d&&d!==h;)x=g(d),n(d,v,T),d=x;n(h,v,T)},_=({el:d,anchor:h})=>{let v;for(;d&&d!==h;)v=g(d),r(d),d=v;r(h)},M=(d,h,v,T,x,C,$,N,w)=>{if(h.type==="svg"?$="svg":h.type==="math"&&($="mathml"),d==null)z(h,v,T,x,C,$,N,w);else{const E=d.el&&d.el._isVueCE?d.el:null;try{E&&E._beginPatch(),V(d,h,x,C,$,N,w)}finally{E&&E._endPatch()}}},z=(d,h,v,T,x,C,$,N)=>{let w,E;const{props:U,shapeFlag:P,transition:j,dirs:G}=d;if(w=d.el=l(d.type,C,U&&U.is,U),P&8?a(w,d.children):P&16&&B(d.children,w,null,T,x,Mn(d,C),$,N),G&&Pt(d,null,T,"created"),D(w,d,d.scopeId,$,T),U){for(const oe in U)oe!=="value"&&!_i(oe)&&s(w,oe,null,U[oe],C,T);"value"in U&&s(w,"value",null,U.value,C),(E=U.onVnodeBeforeMount)&&Ue(E,T,d)}G&&Pt(d,null,T,"beforeMount");const Y=$a(x,j);Y&&j.beforeEnter(w),n(w,h,v),((E=U&&U.onVnodeMounted)||Y||G)&&_e(()=>{try{E&&Ue(E,T,d),Y&&j.enter(w),G&&Pt(d,null,T,"mounted")}finally{}},x)},D=(d,h,v,T,x)=>{if(v&&m(d,v),T)for(let C=0;C<T.length;C++)m(d,T[C]);if(x){let C=x.subTree;if(h===C||Zi(C.type)&&(C.ssContent===h||C.ssFallback===h)){const $=x.vnode;D(d,$,$.scopeId,$.slotScopeIds,x.parent)}}},B=(d,h,v,T,x,C,$,N,w=0)=>{for(let E=w;E<d.length;E++){const U=d[E]=N?gt(d[E]):rt(d[E]);S(null,U,h,v,T,x,C,$,N)}},V=(d,h,v,T,x,C,$)=>{const N=h.el=d.el;let{patchFlag:w,dynamicChildren:E,dirs:U}=h;w|=d.patchFlag&16;const P=d.props||ce,j=h.props||ce;let G;if(v&&Mt(v,!1),(G=j.onVnodeBeforeUpdate)&&Ue(G,v,h,d),U&&Pt(h,d,v,"beforeUpdate"),v&&Mt(v,!0),E&&(!d.dynamicChildren||d.dynamicChildren.length!==E.length)&&(w=0,$=!1,E=null),(P.innerHTML&&j.innerHTML==null||P.textContent&&j.textContent==null)&&a(N,""),E?X(d.dynamicChildren,E,N,v,T,Mn(h,x),C):$||ee(d,h,N,null,v,T,Mn(h,x),C,!1),w>0){if(w&16)de(N,P,j,v,x);else if(w&2&&P.class!==j.class&&s(N,"class",null,j.class,x),w&4&&s(N,"style",P.style,j.style,x),w&8){const Y=h.dynamicProps;for(let oe=0;oe<Y.length;oe++){const se=Y[oe],ge=P[se],Te=j[se];(Te!==ge||se==="value")&&s(N,se,ge,Te,x,v)}}w&1&&d.children!==h.children&&a(N,h.children)}else!$&&E==null&&de(N,P,j,v,x);((G=j.onVnodeUpdated)||U)&&_e(()=>{G&&Ue(G,v,h,d),U&&Pt(h,d,v,"updated")},T)},X=(d,h,v,T,x,C,$)=>{for(let N=0;N<h.length;N++){const w=d[N],E=h[N],U=w.el&&(w.type===Oe||!zt(w,E)||w.shapeFlag&198)?p(w.el):v;S(w,E,U,null,T,x,C,$,!0)}},de=(d,h,v,T,x)=>{if(h!==v){if(h!==ce)for(const C in h)!_i(C)&&!(C in v)&&s(d,C,h[C],null,x,T);for(const C in v){if(_i(C))continue;const $=v[C],N=h[C];$!==N&&C!=="value"&&s(d,C,N,$,x,T)}"value"in v&&s(d,"value",h.value,v.value,x)}},xe=(d,h,v,T,x,C,$,N,w)=>{const E=h.el=d?d.el:o(""),U=h.anchor=d?d.anchor:o("");let{patchFlag:P,dynamicChildren:j,slotScopeIds:G}=h;G&&(N=N?N.concat(G):G),d==null?(n(E,v,T),n(U,v,T),B(h.children||[],v,U,x,C,$,N,w)):P>0&&P&64&&j&&d.dynamicChildren&&d.dynamicChildren.length===j.length?(X(d.dynamicChildren,j,v,x,C,$,N),(h.key!=null||x&&h===x.subTree)&&Nr(d,h,!0)):ee(d,h,v,U,x,C,$,N,w)},Ee=(d,h,v,T,x,C,$,N,w)=>{h.slotScopeIds=N,d==null?h.shapeFlag&512?x.ctx.activate(h,v,T,$,w):qe(h,v,T,x,C,$,w):yt(d,h,w)},qe=(d,h,v,T,x,C,$)=>{const N=d.component=Fa(d,T,x);if(Ml(d)&&(N.ctx.renderer=F),ja(N,!1,$),N.asyncDep){if(x&&x.registerDep(N,fe,$),!d.el){const w=N.subTree=me(ut);k(null,w,h,v),d.placeholder=w.el}}else fe(N,d,h,v,x,C,$)},yt=(d,h,v)=>{const T=h.component=d.component;if(ya(d,h,v))if(T.asyncDep&&!T.asyncResolved){q(T,h,v);return}else T.next=h,T.update();else h.el=d.el,T.vnode=h},fe=(d,h,v,T,x,C,$)=>{const N=()=>{if(d.isMounted){let{next:P,bu:j,u:G,parent:Y,vnode:oe}=d;{const et=no(d);if(et){P&&(P.el=oe.el,q(d,P,$)),et.asyncDep.then(()=>{_e(()=>{d.isUnmounted||E()},x)});return}}let se=P,ge;Mt(d,!1),P?(P.el=oe.el,q(d,P,$)):P=oe,j&&Zt(j),(ge=P.props&&P.props.onVnodeBeforeUpdate)&&Ue(ge,Y,P,oe),Mt(d,!0);const Te=ns(d),Ze=d.subTree;d.subTree=Te,S(Ze,Te,p(Ze.el),A(Ze),d,x,C),P.el=Te.el,se===null&&Ca(d,Te.el),G&&_e(G,x),(ge=P.props&&P.props.onVnodeUpdated)&&_e(()=>Ue(ge,Y,P,oe),x)}else{let P;const{el:j,props:G}=h,{bm:Y,m:oe,parent:se,root:ge,type:Te}=d,Ze=wt(h);Mt(d,!1),Y&&Zt(Y),!Ze&&(P=G&&G.onVnodeBeforeMount)&&Ue(P,se,h),Mt(d,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(Te,d.parent?d.parent.type:void 0);const et=d.subTree=ns(d);S(null,et,v,T,d,x,C),h.el=et.el}if(oe&&_e(oe,x),!Ze&&(P=G&&G.onVnodeMounted)){const et=h;_e(()=>Ue(P,se,et),x)}(h.shapeFlag&256||se&&wt(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&_e(d.a,x),d.isMounted=!0,h=v=T=null}};d.scope.on();const w=d.effect=new ol(N);d.scope.off();const E=d.update=w.run.bind(w),U=d.job=w.runIfDirty.bind(w);U.i=d,U.id=d.uid,w.scheduler=()=>Rr(U),Mt(d,!0),E()},q=(d,h,v)=>{h.component=d;const T=d.vnode.props;d.vnode=h,d.next=null,Ra(d,h.props,T,v),Ia(d,h.children,v),ct(),qr(d),at()},ee=(d,h,v,T,x,C,$,N,w=!1)=>{const E=d&&d.children,U=d?d.shapeFlag:0,P=h.children,{patchFlag:j,shapeFlag:G}=h;if(j>0){if(j&128){Ct(E,P,v,T,x,C,$,N,w);return}else if(j&256){dt(E,P,v,T,x,C,$,N,w);return}}G&8?(U&16&&He(E,x,C),P!==E&&a(v,P)):U&16?G&16?Ct(E,P,v,T,x,C,$,N,w):He(E,x,C,!0):(U&8&&a(v,""),G&16&&B(P,v,T,x,C,$,N,w))},dt=(d,h,v,T,x,C,$,N,w)=>{d=d||Yt,h=h||Yt;const E=d.length,U=h.length,P=Math.min(E,U);let j;for(j=0;j<P;j++){const G=h[j]=w?gt(h[j]):rt(h[j]);S(d[j],G,v,null,x,C,$,N,w)}E>U?He(d,x,C,!0,!1,P):B(h,v,T,x,C,$,N,w,P)},Ct=(d,h,v,T,x,C,$,N,w)=>{let E=0;const U=h.length;let P=d.length-1,j=U-1;for(;E<=P&&E<=j;){const G=d[E],Y=h[E]=w?gt(h[E]):rt(h[E]);if(zt(G,Y))S(G,Y,v,null,x,C,$,N,w);else break;E++}for(;E<=P&&E<=j;){const G=d[P],Y=h[j]=w?gt(h[j]):rt(h[j]);if(zt(G,Y))S(G,Y,v,null,x,C,$,N,w);else break;P--,j--}if(E>P){if(E<=j){const G=j+1,Y=G<U?h[G].el:T;for(;E<=j;)S(null,h[E]=w?gt(h[E]):rt(h[E]),v,Y,x,C,$,N,w),E++}}else if(E>j)for(;E<=P;)Me(d[E],x,C,!0),E++;else{const G=E,Y=E,oe=new Map;for(E=Y;E<=j;E++){const De=h[E]=w?gt(h[E]):rt(h[E]);De.key!=null&&oe.set(De.key,E)}let se,ge=0;const Te=j-Y+1;let Ze=!1,et=0;const di=new Array(Te);for(E=0;E<Te;E++)di[E]=0;for(E=G;E<=P;E++){const De=d[E];if(ge>=Te){Me(De,x,C,!0);continue}let tt;if(De.key!=null)tt=oe.get(De.key);else for(se=Y;se<=j;se++)if(di[se-Y]===0&&zt(De,h[se])){tt=se;break}tt===void 0?Me(De,x,C,!0):(di[tt-Y]=E+1,tt>=et?et=tt:Ze=!0,S(De,h[tt],v,null,x,C,$,N,w),ge++)}const Fr=Ze?ka(di):Yt;for(se=Fr.length-1,E=Te-1;E>=0;E--){const De=Y+E,tt=h[De],jr=h[De+1],Hr=De+1<U?jr.el||ro(jr):T;di[E]===0?S(null,tt,v,Hr,x,C,$,N,w):Ze&&(se<0||E!==Fr[se]?Qe(tt,v,Hr,2):se--)}}},Qe=(d,h,v,T,x=null)=>{const{el:C,type:$,transition:N,children:w,shapeFlag:E}=d;if(E&6){Qe(d.component.subTree,h,v,T);return}if(E&128){d.suspense.move(h,v,T);return}if(E&64){$.move(d,h,v,F);return}if($===Oe){n(C,h,v);for(let P=0;P<w.length;P++)Qe(w[P],h,v,T);n(d.anchor,h,v);return}if($===Ki){y(d,h,v);return}if(T!==2&&E&1&&N)if(T===0)N.persisted&&!C[kn]?n(C,h,v):(N.beforeEnter(C),n(C,h,v),_e(()=>N.enter(C),x));else{const{leave:P,delayLeave:j,afterLeave:G}=N,Y=()=>{d.ctx.isUnmounted?r(C):n(C,h,v)},oe=()=>{const se=C._isLeaving||!!C[kn];C._isLeaving&&C[kn](!0),N.persisted&&!se?Y():P(C,()=>{Y(),G&&G()})};j?j(C,Y,oe):oe()}else n(C,h,v)},Me=(d,h,v,T=!1,x=!1)=>{const{type:C,props:$,ref:N,children:w,dynamicChildren:E,shapeFlag:U,patchFlag:P,dirs:j,cacheIndex:G,memo:Y}=d;if(P===-2&&(x=!1),N!=null&&(ct(),Ci(N,null,v,d,!0),at()),G!=null&&(h.renderCache[G]=void 0),U&256){h.ctx.deactivate(d);return}const oe=U&1&&j,se=!wt(d);let ge;if(se&&(ge=$&&$.onVnodeBeforeUnmount)&&Ue(ge,h,d),U&6)Ot(d.component,v,T);else{if(U&128){d.suspense.unmount(v,T);return}oe&&Pt(d,null,h,"beforeUnmount"),U&64?d.type.remove(d,h,v,F,T):E&&!E.hasOnce&&(C!==Oe||P>0&&P&64)?He(E,h,v,!1,!0):(C===Oe&&P&384||!x&&U&16)&&He(w,h,v),T&&Ut(d)}const Te=Y!=null&&G==null;(se&&(ge=$&&$.onVnodeUnmounted)||oe||Te)&&_e(()=>{ge&&Ue(ge,h,d),oe&&Pt(d,null,h,"unmounted"),Te&&(d.el=null)},v)},Ut=d=>{const{type:h,el:v,anchor:T,transition:x}=d;if(h===Oe){Kt(v,T);return}if(h===Ki){_(d);return}const C=()=>{r(v),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:$,delayLeave:N}=x,w=()=>$(v,C);N?N(d.el,C,w):w()}else C()},Kt=(d,h)=>{let v;for(;d!==h;)v=g(d),r(d),d=v;r(h)},Ot=(d,h,v)=>{const{bum:T,scope:x,job:C,subTree:$,um:N,m:w,a:E}=d;Qi(w),Qi(E),T&&Zt(T),x.stop(),C&&(C.flags|=8,Me($,d,h,v)),N&&_e(N,h),_e(()=>{d.isUnmounted=!0},h)},He=(d,h,v,T=!1,x=!1,C=0)=>{for(let $=C;$<d.length;$++)Me(d[$],h,v,T,x)},A=d=>{if(d.shapeFlag&6)return A(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=g(d.anchor||d.el),v=h&&h[kl];return v?g(v):h};let L=!1;const O=(d,h,v)=>{let T;d==null?h._vnode&&(Me(h._vnode,null,null,!0),T=h._vnode.component):S(h._vnode||null,d,h,null,null,null,v),h._vnode=d,L||(L=!0,qr(T),El(),L=!1)},F={p:S,um:Me,m:Qe,r:Ut,mt:qe,mc:B,pc:ee,pbc:X,n:A,o:e};return{render:O,hydrate:void 0,createApp:ga(O)}}function Mn({type:e,props:t},i){return i==="svg"&&e==="foreignObject"||i==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:i}function Mt({effect:e,job:t},i){i?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function $a(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Nr(e,t,i=!1){const n=e.children,r=t.children;if(H(n)&&H(r))for(let s=0;s<n.length;s++){const l=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=gt(r[s]),o.el=l.el),!i&&o.patchFlag!==-2&&Nr(l,o)),o.type===Sn&&(o.patchFlag===-1&&(o=r[s]=gt(o)),o.el=l.el),o.type===ut&&!o.el&&(o.el=l.el)}}function ka(e){const t=e.slice(),i=[0];let n,r,s,l,o;const c=e.length;for(n=0;n<c;n++){const u=e[n];if(u!==0){if(r=i[i.length-1],e[r]<u){t[n]=r,i.push(n);continue}for(s=0,l=i.length-1;s<l;)o=s+l>>1,e[i[o]]<u?s=o+1:l=o;u<e[i[s]]&&(s>0&&(t[n]=i[s-1]),i[s]=n)}}for(s=i.length,l=i[s-1];s-- >0;)i[s]=l,l=t[l];return i}function no(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:no(t)}function Qi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ro(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ro(t.subTree):null}const Zi=e=>e.__isSuspense;function Oa(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Fc(e)}const Oe=Symbol.for("v-fgt"),Sn=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Ki=Symbol.for("v-stc"),Ri=[];let Ve=null;function Se(e=!1){Ri.push(Ve=e?null:[])}function Pa(){Ri.pop(),Ve=Ri[Ri.length-1]||null}let $i=1;function en(e,t=!1){$i+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function so(e){return e.dynamicChildren=$i>0?Ve||Yt:null,Pa(),$i>0&&Ve&&Ve.push(e),e}function Le(e,t,i,n,r,s){return so(Z(e,t,i,n,r,s,!0))}function ri(e,t,i,n,r){return so(me(e,t,i,n,r,!0))}function si(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const lo=({key:e})=>e??null,Gi=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||pe(e)||W(e)?{i:Re,r:e,k:t,f:!!i}:e:null);function Z(e,t=null,i=null,n=0,r=null,s=e===Oe?0:1,l=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lo(t),ref:t&&Gi(t),scopeId:wl,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Re};return o?(tn(c,i),s&128&&e.normalize(c)):i&&(c.shapeFlag|=ue(i)?8:16),$i>0&&!l&&Ve&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ve.push(c),c}const me=Ma;function Ma(e,t=null,i=null,n=0,r=null,s=!1){if((!e||e===jl)&&(e=ut),si(e)){const o=Ht(e,t,!0);return i&&tn(o,i),$i>0&&!s&&Ve&&(o.shapeFlag&6?Ve[Ve.indexOf(e)]=o:Ve.push(o)),o.patchFlag=-2,o}if(Ga(e)&&(e=e.__vccOpts),t){t=Da(t);let{class:o,style:c}=t;o&&!ue(o)&&(t.class=It(o)),re(c)&&(pn(c)&&!H(c)&&(c=Ae({},c)),t.style=gr(c))}const l=ue(e)?1:Zi(e)?128:Wc(e)?64:re(e)?4:W(e)?2:0;return Z(e,t,i,n,r,l,s,!0)}function Da(e){return e?pn(e)||Yl(e)?Ae({},e):e:null}function Ht(e,t,i=!1,n=!1){const{props:r,ref:s,patchFlag:l,children:o,transition:c}=e,u=t?La(r||{},t):r,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&lo(u),ref:t&&t.ref?i&&s?H(s)?s.concat(Gi(t)):[s,Gi(t)]:Gi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&vn(a,c.clone(a)),a}function oo(e=" ",t=0){return me(Sn,null,e,t)}function rh(e,t){const i=me(Ki,null,e);return i.staticCount=t,i}function co(e="",t=!1){return t?(Se(),ri(ut,null,e)):me(ut,null,e)}function rt(e){return e==null||typeof e=="boolean"?me(ut):H(e)?me(Oe,null,e.slice()):si(e)?gt(e):me(Sn,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function tn(e,t){let i=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(H(t))i=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),tn(e,r()),r._c&&(r._d=!0));return}else{i=32;const r=t._;!r&&!Yl(t)?t._ctx=Re:r===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(W(t)){if(n&65){tn(e,{default:t});return}t={default:t,_ctx:Re},i=32}else t=String(t),n&64?(i=16,t=[oo(t)]):i=8;e.children=t,e.shapeFlag|=i}function La(...e){const t={};for(let i=0;i<e.length;i++){const n=e[i];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=It([t.class,n.class]));else if(r==="style")t.style=gr([t.style,n.style]);else if(sn(r)){const s=t[r],l=n[r];l&&s!==l&&!(H(s)&&s.includes(l))?t[r]=s?[].concat(s,l):l:l==null&&s==null&&!ln(r)&&(t[r]=l)}else r!==""&&(t[r]=n[r])}return t}function Ue(e,t,i,n=null){Je(e,t,7,[i,n])}const Ba=Wl();let Va=0;function Fa(e,t,i){const n=e.type,r=(t?t.appContext:e.appContext)||Ba,s={uid:Va++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zl(n,r),emitsOptions:ql(n,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:n.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=va.bind(null,s),e.ce&&e.ce(s),s}let we=null;const $r=()=>we||Re;let nn,nr;{const e=dn(),t=(i,n)=>{let r;return(r=e[i])||(r=e[i]=[]),r.push(n),s=>{r.length>1?r.forEach(l=>l(s)):r[0](s)}};nn=t("__VUE_INSTANCE_SETTERS__",i=>we=i),nr=t("__VUE_SSR_SETTERS__",i=>ki=i)}const Di=e=>{const t=we;return nn(e),e.scope.on(),()=>{e.scope.off(),nn(t)}},ls=()=>{we&&we.scope.off(),nn(null)};function ao(e){return e.vnode.shapeFlag&4}let ki=!1;function ja(e,t=!1,i=!1){t&&nr(t);const{props:n,children:r}=e.vnode,s=ao(e);Ta(e,n,s,t),Ea(e,r,i||t);const l=s?Ha(e,t):void 0;return t&&nr(!1),l}function Ha(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ca);const{setup:n}=i;if(n){ct();const r=e.setupContext=n.length>1?Ka(e):null,s=Di(e),l=Mi(n,e,0,[e.props,r]),o=Ys(l);if(at(),s(),(o||e.sp)&&!wt(e)&&Pl(e),o){if(l.then(ls,ls),t)return l.then(c=>{os(e,c)}).catch(c=>{gn(c,e,0)});e.asyncDep=l}else os(e,l)}else uo(e)}function os(e,t,i){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=Tl(t)),uo(e)}function uo(e,t,i){const n=e.type;e.render||(e.render=n.render||lt);{const r=Di(e);ct();try{aa(e)}finally{at(),r()}}}const Ua={get(e,t){return Ie(e,"get",""),e[t]}};function Ka(e){const t=i=>{e.exposed=i||{}};return{attrs:new Proxy(e.attrs,Ua),slots:e.slots,emit:e.emit,expose:t}}function yn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Tl(Tr(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in Ti)return Ti[i](e)},has(t,i){return i in t||i in Ti}})):e.proxy}function rr(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Ga(e){return W(e)&&"__vccOpts"in e}const Be=(e,t)=>Mc(e,t,ki);function fo(e,t,i){try{en(-1);const n=arguments.length;return n===2?re(t)&&!H(t)?si(t)?me(e,null,[t]):me(e,t):me(e,null,t):(n>3?i=Array.prototype.slice.call(arguments,2):n===3&&si(i)&&(i=[i]),me(e,t,i))}finally{en(1)}}const Wa="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sr;const cs=typeof window<"u"&&window.trustedTypes;if(cs)try{sr=cs.createPolicy("vue",{createHTML:e=>e})}catch{}const po=sr?e=>sr.createHTML(e):e=>e,qa="http://www.w3.org/2000/svg",za="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,as=ht&&ht.createElement("template"),Xa={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,n)=>{const r=t==="svg"?ht.createElementNS(qa,e):t==="mathml"?ht.createElementNS(za,e):i?ht.createElement(e,{is:i}):ht.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,n,r,s){const l=i?i.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),i),!(r===s||!(r=r.nextSibling)););else{as.innerHTML=po(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=as.content;if(n==="svg"||n==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,i)}return[l?l.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},Ja=Symbol("_vtc");function Ya(e,t,i){const n=e[Ja];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const rn=Symbol("_vod"),ho=Symbol("_vsh"),Qa={name:"show",beforeMount(e,{value:t},{transition:i}){e[rn]=e.style.display==="none"?"":e.style.display,i&&t?i.beforeEnter(e):pi(e,t)},mounted(e,{value:t},{transition:i}){i&&t&&i.enter(e)},updated(e,{value:t,oldValue:i},{transition:n}){!t!=!i&&(n?t?(n.beforeEnter(e),pi(e,!0),n.enter(e)):n.leave(e,()=>{pi(e,!1)}):pi(e,t))},beforeUnmount(e,{value:t}){pi(e,t)}};function pi(e,t){e.style.display=t?e[rn]:"none",e[ho]=!t}const Za=Symbol(""),eu=/(?:^|;)\s*display\s*:/;function tu(e,t,i){const n=e.style,r=ue(i);let s=!1;if(i&&!r){if(t)if(ue(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();i[o]==null&&bi(n,o,"")}else for(const l in t)i[l]==null&&bi(n,l,"");for(const l in i){l==="display"&&(s=!0);const o=i[l];o!=null?nu(e,l,!ue(t)&&t?t[l]:void 0,o)||bi(n,l,o):bi(n,l,"")}}else if(r){if(t!==i){const l=n[Za];l&&(i+=";"+l),n.cssText=i,s=eu.test(i)}}else t&&e.removeAttribute("style");rn in e&&(e[rn]=s?n.display:"",e[ho]&&(n.display="none"))}const us=/\s*!important$/;function bi(e,t,i){if(H(i))i.forEach(n=>bi(e,t,n));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const n=iu(e,t);us.test(i)?e.setProperty(kt(n),i.replace(us,""),"important"):e[n]=i}}const ds=["Webkit","Moz","ms"],Dn={};function iu(e,t){const i=Dn[t];if(i)return i;let n=Pe(t);if(n!=="filter"&&n in e)return Dn[t]=n;n=an(n);for(let r=0;r<ds.length;r++){const s=ds[r]+n;if(s in e)return Dn[t]=s}return t}function nu(e,t,i,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ue(n)&&i===n}const fs="http://www.w3.org/1999/xlink";function ps(e,t,i,n,r,s=lc(t)){n&&t.startsWith("xlink:")?i==null?e.removeAttributeNS(fs,t.slice(6,t.length)):e.setAttributeNS(fs,t,i):i==null||s&&!tl(i)?e.removeAttribute(t):e.setAttribute(t,s?"":je(i)?String(i):i)}function hs(e,t,i,n,r){if(t==="innerHTML"||t==="textContent"){i!=null&&(e[t]=t==="innerHTML"?po(i):i);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,c=i==null?e.type==="checkbox"?"on":"":String(i);(o!==c||!("_value"in e))&&(e.value=c),i==null&&e.removeAttribute(t),e._value=i;return}let l=!1;if(i===""||i==null){const o=typeof e[t];o==="boolean"?i=tl(i):i==null&&o==="string"?(i="",l=!0):o==="number"&&(i=0,l=!0)}try{e[t]=i}catch{}l&&e.removeAttribute(r||t)}function bt(e,t,i,n){e.addEventListener(t,i,n)}function ru(e,t,i,n){e.removeEventListener(t,i,n)}const gs=Symbol("_vei");function su(e,t,i,n,r=null){const s=e[gs]||(e[gs]={}),l=s[t];if(n&&l)l.value=n;else{const[o,c]=cu(t);if(n){const u=s[t]=du(n,r);bt(e,o,u,c)}else l&&(ru(e,o,l,c),s[t]=void 0)}}const lu=/(Once|Passive|Capture)$/,ou=/^on:?(?:Once|Passive|Capture)$/;function cu(e){let t,i;for(;(i=e.match(lu))&&!ou.test(e);)t||(t={}),e=e.slice(0,e.length-i[1].length),t[i[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):kt(e.slice(2)),t]}let Ln=0;const au=Promise.resolve(),uu=()=>Ln||(au.then(()=>Ln=0),Ln=Date.now());function du(e,t){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;const r=i.value;if(H(r)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const l=r.slice(),o=[n];for(let c=0;c<l.length&&!n._stopped;c++){const u=l[c];u&&Je(u,t,5,o)}}else Je(r,t,5,[n])};return i.value=e,i.attached=uu(),i}const ms=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,fu=(e,t,i,n,r,s)=>{const l=r==="svg";t==="class"?Ya(e,n,l):t==="style"?tu(e,i,n):sn(t)?ln(t)||su(e,t,i,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):pu(e,t,n,l))?(hs(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ps(e,t,n,l,s,t!=="value")):e._isVueCE&&(hu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ue(n)))?hs(e,Pe(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),ps(e,t,n,l))};function pu(e,t,i,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&ms(t)&&W(i));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ms(t)&&ue(i)?!1:t in e}function hu(e,t){const i=e._def.props;if(!i)return!1;const n=Pe(t);return Array.isArray(i)?i.some(r=>Pe(r)===n):Object.keys(i).some(r=>Pe(r)===n)}const $t=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?i=>Zt(t,i):t};function gu(e){e.target.composing=!0}function vs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const We=Symbol("_assign");function bs(e,t,i){return t&&(e=e.trim()),i&&(e=un(e)),e}const sh={created(e,{modifiers:{lazy:t,trim:i,number:n}},r){e[We]=$t(r);const s=n||r.props&&r.props.type==="number";bt(e,t?"change":"input",l=>{l.target.composing||e[We](bs(e.value,i,s))}),(i||s)&&bt(e,"change",()=>{e.value=bs(e.value,i,s)}),t||(bt(e,"compositionstart",gu),bt(e,"compositionend",vs),bt(e,"change",vs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:i,modifiers:{lazy:n,trim:r,number:s}},l){if(e[We]=$t(l),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?un(e.value):e.value,c=t??"";if(o===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(n&&t===i||r&&e.value.trim()===c)||(e.value=c)}},lh={deep:!0,created(e,t,i){e[We]=$t(i),bt(e,"change",()=>{const n=e._modelValue,r=li(e),s=e.checked,l=e[We];if(H(n)){const o=mr(n,r),c=o!==-1;if(s&&!c)l(n.concat(r));else if(!s&&c){const u=[...n];u.splice(o,1),l(u)}}else if(ai(n)){const o=new Set(n);s?o.add(r):o.delete(r),l(o)}else l(go(e,s))})},mounted:_s,beforeUpdate(e,t,i){e[We]=$t(i),_s(e,t,i)}};function _s(e,{value:t,oldValue:i},n){e._modelValue=t;let r;if(H(t))r=mr(t,n.props.value)>-1;else if(ai(t))r=t.has(n.props.value);else{if(t===i)return;r=Nt(t,go(e,!0))}e.checked!==r&&(e.checked=r)}const oh={created(e,{value:t},i){e.checked=Nt(t,i.props.value),e[We]=$t(i),bt(e,"change",()=>{e[We](li(e))})},beforeUpdate(e,{value:t,oldValue:i},n){e[We]=$t(n),t!==i&&(e.checked=Nt(t,n.props.value))}},ch={deep:!0,created(e,{value:t,modifiers:{number:i}},n){const r=ai(t);bt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>i?un(li(l)):li(l));e[We](e.multiple?r?new Set(s):s:s[0]),e._assigning=!0,mn(()=>{e._assigning=!1})}),e[We]=$t(n)},mounted(e,{value:t}){Ss(e,t)},beforeUpdate(e,t,i){e[We]=$t(i)},updated(e,{value:t}){e._assigning||Ss(e,t)}};function Ss(e,t){const i=e.multiple,n=H(t);if(!(i&&!n&&!ai(t))){for(let r=0,s=e.options.length;r<s;r++){const l=e.options[r],o=li(l);if(i)if(n){const c=typeof o;c==="string"||c==="number"?l.selected=t.some(u=>String(u)===String(o)):l.selected=mr(t,o)>-1}else l.selected=t.has(o);else if(Nt(li(l),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!i&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function li(e){return"_value"in e?e._value:e.value}function go(e,t){const i=t?"_trueValue":"_falseValue";return i in e?e[i]:t}const mu=["ctrl","shift","alt","meta"],vu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>mu.some(i=>e[`${i}Key`]&&!t.includes(i))},bu=(e,t)=>{if(!e)return e;const i=e._withMods||(e._withMods={}),n=t.join(".");return i[n]||(i[n]=((r,...s)=>{for(let l=0;l<t.length;l++){const o=vu[t[l]];if(o&&o(r,t))return}return e(r,...s)}))},_u={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ah=(e,t)=>{const i=e._withKeys||(e._withKeys={}),n=t.join(".");return i[n]||(i[n]=(r=>{if(!("key"in r))return;const s=kt(r.key);if(t.some(l=>l===s||_u[l]===s))return e(r)}))},Su=Ae({patchProp:fu},Xa);let ys;function yu(){return ys||(ys=wa(Su))}const Cu=((...e)=>{const t=yu().createApp(...e),{mount:i}=t;return t.mount=n=>{const r=Ru(n);if(!r)return;const s=t._component;!W(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=i(r,!1,Tu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t});function Tu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ru(e){return ue(e)?document.querySelector(e):e}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let mo;const Cn=e=>mo=e,vo=Symbol();function lr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ai;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ai||(Ai={}));function Au(){const e=sl(!0),t=e.run(()=>hn({}));let i=[],n=[];const r=Tr({install(s){Cn(r),r._a=s,s.provide(vo,r),s.config.globalProperties.$pinia=r,n.forEach(l=>i.push(l)),n=[]},use(s){return this._a?i.push(s):n.push(s),this},_p:i,_a:null,_e:e,_s:new Map,state:t});return r}const bo=()=>{};function Cs(e,t,i,n=bo){e.add(t);const r=()=>{e.delete(t)&&n()};return!i&&ll()&&cc(r),r}function Wt(e,...t){e.forEach(i=>{i(...t)})}const xu=e=>e(),Ts=Symbol(),Bn=Symbol();function or(e,t){e instanceof Map&&t instanceof Map?t.forEach((i,n)=>e.set(n,i)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const i in t){if(!t.hasOwnProperty(i))continue;const n=t[i],r=e[i];lr(r)&&lr(n)&&e.hasOwnProperty(i)&&!pe(n)&&!ot(n)?e[i]=or(r,n):e[i]=n}return e}const Eu=Symbol();function Iu(e){return!lr(e)||!Object.prototype.hasOwnProperty.call(e,Eu)}const{assign:At}=Object;function wu(e){return!!(pe(e)&&e.effect)}function Nu(e,t,i,n){const{state:r,actions:s,getters:l}=t,o=i.state.value[e];let c;function u(){o||(i.state.value[e]=r?r():{});const a=Nc(i.state.value[e]);return At(a,s,Object.keys(l||{}).reduce((p,g)=>(p[g]=Tr(Be(()=>{Cn(i);const m=i._s.get(e);return l[g].call(m,m)})),p),{}))}return c=_o(e,u,t,i,n,!0),c}function _o(e,t,i={},n,r,s){let l;const o=At({actions:{}},i),c={deep:!0};let u,a,p=new Set,g=new Set,m;const R=n.state.value[e];!s&&!R&&(n.state.value[e]={});let S;function I(B){let V;u=a=!1,typeof B=="function"?(B(n.state.value[e]),V={type:Ai.patchFunction,storeId:e,events:m}):(or(n.state.value[e],B),V={type:Ai.patchObject,payload:B,storeId:e,events:m});const X=S=Symbol();mn().then(()=>{S===X&&(u=!0)}),a=!0,Wt(p,V,n.state.value[e])}const k=s?function(){const{state:V}=i,X=V?V():{};this.$patch(de=>{At(de,X)})}:bo;function b(){l.stop(),p.clear(),g.clear(),n._s.delete(e)}const y=(B,V="")=>{if(Ts in B)return B[Bn]=V,B;const X=function(){Cn(n);const de=Array.from(arguments),xe=new Set,Ee=new Set;function qe(q){xe.add(q)}function yt(q){Ee.add(q)}Wt(g,{args:de,name:X[Bn],store:M,after:qe,onError:yt});let fe;try{fe=B.apply(this&&this.$id===e?this:M,de)}catch(q){throw Wt(Ee,q),q}return fe instanceof Promise?fe.then(q=>(Wt(xe,q),q)).catch(q=>(Wt(Ee,q),Promise.reject(q))):(Wt(xe,fe),fe)};return X[Ts]=!0,X[Bn]=V,X},_={_p:n,$id:e,$onAction:Cs.bind(null,g),$patch:I,$reset:k,$subscribe(B,V={}){const X=Cs(p,B,V.detached,()=>de()),de=l.run(()=>Ft(()=>n.state.value[e],xe=>{(V.flush==="sync"?a:u)&&B({storeId:e,type:Ai.direct,events:m},xe)},At({},c,V)));return X},$dispose:b},M=Pi(_);n._s.set(e,M);const D=(n._a&&n._a.runWithContext||xu)(()=>n._e.run(()=>(l=sl()).run(()=>t({action:y}))));for(const B in D){const V=D[B];if(pe(V)&&!wu(V)||ot(V))s||(R&&Iu(V)&&(pe(V)?V.value=R[B]:or(V,R[B])),n.state.value[e][B]=V);else if(typeof V=="function"){const X=y(V,B);D[B]=X,o.actions[B]=V}}return At(M,D),At(Q(M),D),Object.defineProperty(M,"$state",{get:()=>n.state.value[e],set:B=>{I(V=>{At(V,B)})}}),n._p.forEach(B=>{At(M,l.run(()=>B({store:M,app:n._a,pinia:n,options:o})))}),R&&s&&i.hydrate&&i.hydrate(M.$state,R),u=!0,a=!0,M}/*! #__NO_SIDE_EFFECTS__ */function Tn(e,t,i){let n;const r=typeof t=="function";n=r?i:t;function s(l,o){const c=Hc();return l=l||(c?Ge(vo,null):null),l&&Cn(l),l=mo,l._s.has(e)||(r?_o(e,t,n,l):Nu(e,n,l)),l._s.get(e)}return s.$id=e,s}function uh(e){const t=Q(e),i={};for(const n in t){const r=t[n];r.effect?i[n]=Be({get:()=>e[n],set(s){e[n]=s}}):(pe(r)||ot(r))&&(i[n]=Oc(e,n))}return i}const $u=(e,t)=>{const i=e.__vccOpts||e;for(const[n,r]of t)i[n]=r;return i},ku={},Ou={class:"h-full"};function Pu(e,t){const i=Er("RouterView");return Se(),Le("div",Ou,[me(i)])}const Mu=$u(ku,[["render",Pu]]),Du="modulepreload",Lu=function(e,t){return new URL(e,t).href},Rs={},ne=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){let l=function(a){return Promise.all(a.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=l(i.map(a=>{if(a=Lu(a,n),a in Rs)return;Rs[a]=!0;const p=a.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!n)for(let S=o.length-1;S>=0;S--){const I=o[S];if(I.href===a&&(!p||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${g}`))return;const R=document.createElement("link");if(R.rel=p?"stylesheet":Du,p||(R.as="script"),R.crossOrigin="",R.href=a,u&&R.setAttribute("nonce",u),document.head.appendChild(R),p)return new Promise((S,I)=>{R.addEventListener("load",S),R.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return r.then(l=>{for(const o of l||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Xt=typeof document<"u";function So(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Bu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&So(e.default)}const te=Object.assign;function Vn(e,t){const i={};for(const n in t){const r=t[n];i[n]=Ye(r)?r.map(e):e(r)}return i}const xi=()=>{},Ye=Array.isArray;function As(e,t){const i={};for(const n in e)i[n]=n in t?t[n]:e[n];return i}const yo=/#/g,Vu=/&/g,Fu=/\//g,ju=/=/g,Hu=/\?/g,Co=/\+/g,Uu=/%5B/g,Ku=/%5D/g,To=/%5E/g,Gu=/%60/g,Ro=/%7B/g,Wu=/%7C/g,Ao=/%7D/g,qu=/%20/g;function kr(e){return e==null?"":encodeURI(""+e).replace(Wu,"|").replace(Uu,"[").replace(Ku,"]")}function zu(e){return kr(e).replace(Ro,"{").replace(Ao,"}").replace(To,"^")}function cr(e){return kr(e).replace(Co,"%2B").replace(qu,"+").replace(yo,"%23").replace(Vu,"%26").replace(Gu,"`").replace(Ro,"{").replace(Ao,"}").replace(To,"^")}function Xu(e){return cr(e).replace(ju,"%3D")}function Ju(e){return kr(e).replace(yo,"%23").replace(Hu,"%3F")}function Yu(e){return Ju(e).replace(Fu,"%2F")}function Oi(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Qu=/\/$/,Zu=e=>e.replace(Qu,"");function Fn(e,t,i="/"){let n,r={},s="",l="";const o=t.indexOf("#");let c=t.indexOf("?");return c=o>=0&&c>o?-1:c,c>=0&&(n=t.slice(0,c),s=t.slice(c,o>0?o:t.length),r=e(s.slice(1))),o>=0&&(n=n||t.slice(0,o),l=t.slice(o,t.length)),n=nd(n??t,i),{fullPath:n+s+l,path:n,query:r,hash:Oi(l)}}function ed(e,t){const i=t.query?e(t.query):"";return t.path+(i&&"?")+i+(t.hash||"")}function xs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function td(e,t,i){const n=t.matched.length-1,r=i.matched.length-1;return n>-1&&n===r&&oi(t.matched[n],i.matched[r])&&xo(t.params,i.params)&&e(t.query)===e(i.query)&&t.hash===i.hash}function oi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var i in e)if(!id(e[i],t[i]))return!1;return!0}function id(e,t){return Ye(e)?Es(e,t):Ye(t)?Es(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Es(e,t){return Ye(t)?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function nd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const i=t.split("/"),n=e.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=i.length-1,l,o;for(l=0;l<n.length;l++)if(o=n[l],o!==".")if(o==="..")s>1&&s--;else break;return i.slice(0,s).join("/")+"/"+n.slice(l).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ar=(function(e){return e.pop="pop",e.push="push",e})({}),jn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function rd(e){if(!e)if(Xt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Zu(e)}const sd=/^[^#]+#/;function ld(e,t){return e.replace(sd,"#")+t}function od(e,t){const i=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-i.left-(t.left||0),top:n.top-i.top-(t.top||0)}}const Rn=()=>({left:window.scrollX,top:window.scrollY});function cd(e){let t;if("el"in e){const i=e.el,n=typeof i=="string"&&i.startsWith("#"),r=typeof i=="string"?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!r)return;t=od(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Is(e,t){return(history.state?history.state.position-t:-1)+e}const ur=new Map;function ad(e,t){ur.set(e,t)}function ud(e){const t=ur.get(e);return ur.delete(e),t}function dd(e){return typeof e=="string"||e&&typeof e=="object"}function Eo(e){return typeof e=="string"||typeof e=="symbol"}let he=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Io=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function ci(e,t){return te(new Error,{type:e,[Io]:!0},t)}function pt(e,t){return e instanceof Error&&Io in e&&(t==null||!!(e.type&t))}const fd=["params","query","hash"];function pd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const i of fd)i in e&&(t[i]=e[i]);return JSON.stringify(t,null,2)}function hd(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<i.length;++n){const r=i[n].replace(Co," "),s=r.indexOf("="),l=Oi(s<0?r:r.slice(0,s)),o=s<0?null:Oi(r.slice(s+1));if(l in t){let c=t[l];Ye(c)||(c=t[l]=[c]),c.push(o)}else t[l]=o}return t}function ws(e){let t="";for(let i in e){const n=e[i];if(i=Xu(i),n==null){n!==void 0&&(t+=(t.length?"&":"")+i);continue}(Ye(n)?n.map(r=>r&&cr(r)):[n&&cr(n)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+i,r!=null&&(t+="="+r))})}return t}function gd(e){const t={};for(const i in e){const n=e[i];n!==void 0&&(t[i]=Ye(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return t}const md=Symbol(""),Ns=Symbol(""),An=Symbol(""),Or=Symbol(""),dr=Symbol("");function hi(){let e=[];function t(n){return e.push(n),()=>{const r=e.indexOf(n);r>-1&&e.splice(r,1)}}function i(){e=[]}return{add:t,list:()=>e.slice(),reset:i}}function Et(e,t,i,n,r,s=l=>l()){const l=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,c)=>{const u=g=>{g===!1?c(ci(he.NAVIGATION_ABORTED,{from:i,to:t})):g instanceof Error?c(g):dd(g)?c(ci(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(l&&n.enterCallbacks[r]===l&&typeof g=="function"&&l.push(g),o())},a=s(()=>e.call(n&&n.instances[r],t,i,u));let p=Promise.resolve(a);e.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Hn(e,t,i,n,r=s=>s()){const s=[];for(const l of e)for(const o in l.components){let c=l.components[o];if(!(t!=="beforeRouteEnter"&&!l.instances[o]))if(So(c)){const u=(c.__vccOpts||c)[t];u&&s.push(Et(u,i,n,l,o,r))}else{let u=c();s.push(()=>u.then(a=>{if(!a)throw new Error(`Couldn't resolve component "${o}" at "${l.path}"`);const p=Bu(a)?a.default:a;l.mods[o]=a,l.components[o]=p;const g=(p.__vccOpts||p)[t];return g&&Et(g,i,n,l,o,r)()}))}}return s}function vd(e,t){const i=[],n=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let l=0;l<s;l++){const o=t.matched[l];o&&(e.matched.find(u=>oi(u,o))?n.push(o):i.push(o));const c=e.matched[l];c&&(t.matched.find(u=>oi(u,c))||r.push(c))}return[i,n,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bd=()=>location.protocol+"//"+location.host;function wo(e,t){const{pathname:i,search:n,hash:r}=t,s=e.indexOf("#");if(s>-1){let l=r.includes(e.slice(s))?e.slice(s).length:1,o=r.slice(l);return o[0]!=="/"&&(o="/"+o),xs(o,"")}return xs(i,e)+n+r}function _d(e,t,i,n){let r=[],s=[],l=null;const o=({state:g})=>{const m=wo(e,location),R=i.value,S=t.value;let I=0;if(g){if(i.value=m,t.value=g,l&&l===R){l=null;return}I=S?g.position-S.position:0}else n(m);r.forEach(k=>{k(i.value,R,{delta:I,type:ar.pop,direction:I?I>0?jn.forward:jn.back:jn.unknown})})};function c(){l=i.value}function u(g){r.push(g);const m=()=>{const R=r.indexOf(g);R>-1&&r.splice(R,1)};return s.push(m),m}function a(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(te({},g.state,{scroll:Rn()}),"")}}function p(){for(const g of s)g();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",a),document.removeEventListener("visibilitychange",a)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",a),document.addEventListener("visibilitychange",a),{pauseListeners:c,listen:u,destroy:p}}function $s(e,t,i,n=!1,r=!1){return{back:e,current:t,forward:i,replaced:n,position:window.history.length,scroll:r?Rn():null}}function Sd(e){const{history:t,location:i}=window,n={value:wo(e,i)},r={value:t.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,u,a){const p=e.indexOf("#"),g=p>-1?(i.host&&document.querySelector("base")?e:e.slice(p))+c:bd()+e+c;try{t[a?"replaceState":"pushState"](u,"",g),r.value=u}catch(m){console.error(m),i[a?"replace":"assign"](g)}}function l(c,u){s(c,te({},t.state,$s(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),n.value=c}function o(c,u){const a=te({},r.value,t.state,{forward:c,scroll:Rn()});s(a.current,a,!0),s(c,te({},$s(n.value,c,null),{position:a.position+1},u),!1),n.value=c}return{location:n,state:r,push:o,replace:l}}function yd(e){e=rd(e);const t=Sd(e),i=_d(e,t.state,t.location,t.replace);function n(s,l=!0){l||i.pauseListeners(),history.go(s)}const r=te({location:"",base:e,go:n,createHref:ld.bind(null,e)},t,i);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Cd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),yd(e)}let Bt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ve||{});const Td={type:Bt.Static,value:""},Rd=/[a-zA-Z0-9_]/;function Ad(e){if(!e)return[[]];if(e==="/")return[[Td]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${i})/"${u}": ${m}`)}let i=ve.Static,n=i;const r=[];let s;function l(){s&&r.push(s),s=[]}let o=0,c,u="",a="";function p(){u&&(i===ve.Static?s.push({type:Bt.Static,value:u}):i===ve.Param||i===ve.ParamRegExp||i===ve.ParamRegExpEnd?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Bt.Param,value:u,regexp:a,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&i!==ve.ParamRegExp){n=i,i=ve.EscapeNext;continue}switch(i){case ve.Static:c==="/"?(u&&p(),l()):c===":"?(p(),i=ve.Param):g();break;case ve.EscapeNext:g(),i=n;break;case ve.Param:c==="("?i=ve.ParamRegExp:Rd.test(c)?g():(p(),i=ve.Static,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case ve.ParamRegExp:c===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+c:i=ve.ParamRegExpEnd:a+=c;break;case ve.ParamRegExpEnd:p(),i=ve.Static,c!=="*"&&c!=="?"&&c!=="+"&&o--,a="";break;default:t("Unknown state");break}}return i===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),l(),r}const ks="[^/]+?",xd={sensitive:!1,strict:!1,start:!0,end:!0};var $e=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})($e||{});const Ed=/[.+*?^${}()[\]/\\]/g;function Id(e,t){const i=te({},xd,t),n=[];let r=i.start?"^":"";const s=[];for(const u of e){const a=u.length?[]:[$e.Root];i.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const g=u[p];let m=$e.Segment+(i.sensitive?$e.BonusCaseSensitive:0);if(g.type===Bt.Static)p||(r+="/"),r+=g.value.replace(Ed,"\\$&"),m+=$e.Static;else if(g.type===Bt.Param){const{value:R,repeatable:S,optional:I,regexp:k}=g;s.push({name:R,repeatable:S,optional:I});const b=k||ks;if(b!==ks){m+=$e.BonusCustomRegExp;try{`${b}`}catch(_){throw new Error(`Invalid custom RegExp for param "${R}" (${b}): `+_.message)}}let y=S?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;p||(y=I&&u.length<2?`(?:/${y})`:"/"+y),I&&(y+="?"),r+=y,m+=$e.Dynamic,I&&(m+=$e.BonusOptional),S&&(m+=$e.BonusRepeatable),b===".*"&&(m+=$e.BonusWildcard)}a.push(m)}n.push(a)}if(i.strict&&i.end){const u=n.length-1;n[u][n[u].length-1]+=$e.BonusStrict}i.strict||(r+="/?"),i.end?r+="$":i.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const l=new RegExp(r,i.sensitive?"":"i");function o(u){const a=u.match(l),p={};if(!a)return null;for(let g=1;g<a.length;g++){const m=a[g]||"",R=s[g-1];p[R.name]=m&&R.repeatable?m.split("/"):m}return p}function c(u){let a="",p=!1;for(const g of e){(!p||!a.endsWith("/"))&&(a+="/"),p=!1;for(const m of g)if(m.type===Bt.Static)a+=m.value;else if(m.type===Bt.Param){const{value:R,repeatable:S,optional:I}=m,k=R in u?u[R]:"";if(Ye(k)&&!S)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const b=Ye(k)?k.join("/"):k;if(!b)if(I)g.length<2&&(a.endsWith("/")?a=a.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);a+=b}}return a||"/"}return{re:l,score:n,keys:s,parse:o,stringify:c}}function wd(e,t){let i=0;for(;i<e.length&&i<t.length;){const n=t[i]-e[i];if(n)return n;i++}return e.length<t.length?e.length===1&&e[0]===$e.Static+$e.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$e.Static+$e.Segment?1:-1:0}function No(e,t){let i=0;const n=e.score,r=t.score;for(;i<n.length&&i<r.length;){const s=wd(n[i],r[i]);if(s)return s;i++}if(Math.abs(r.length-n.length)===1){if(Os(n))return 1;if(Os(r))return-1}return r.length-n.length}function Os(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Nd={strict:!1,end:!0,sensitive:!1};function $d(e,t,i){const n=Id(Ad(e.path),i),r=te(n,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function kd(e,t){const i=[],n=new Map;t=As(Nd,t);function r(p){return n.get(p)}function s(p,g,m){const R=!m,S=Ms(p);S.aliasOf=m&&m.record;const I=As(t,p),k=[S];if("alias"in p){const _=typeof p.alias=="string"?[p.alias]:p.alias;for(const M of _)k.push(Ms(te({},S,{components:m?m.record.components:S.components,path:M,aliasOf:m?m.record:S})))}let b,y;for(const _ of k){const{path:M}=_;if(g&&M[0]!=="/"){const z=g.record.path,D=z[z.length-1]==="/"?"":"/";_.path=g.record.path+(M&&D+M)}if(b=$d(_,g,I),m?m.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),R&&p.name&&!Ds(b)&&l(p.name)),$o(b)&&c(b),S.children){const z=S.children;for(let D=0;D<z.length;D++)s(z[D],b,m&&m.children[D])}m=m||b}return y?()=>{l(y)}:xi}function l(p){if(Eo(p)){const g=n.get(p);g&&(n.delete(p),i.splice(i.indexOf(g),1),g.children.forEach(l),g.alias.forEach(l))}else{const g=i.indexOf(p);g>-1&&(i.splice(g,1),p.record.name&&n.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function o(){return i}function c(p){const g=Md(p,i);i.splice(g,0,p),p.record.name&&!Ds(p)&&n.set(p.record.name,p)}function u(p,g){let m,R={},S,I;if("name"in p&&p.name){if(m=n.get(p.name),!m)throw ci(he.MATCHER_NOT_FOUND,{location:p});I=m.record.name,R=te(Ps(g.params,m.keys.filter(y=>!y.optional).concat(m.parent?m.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),p.params&&Ps(p.params,m.keys.map(y=>y.name))),S=m.stringify(R)}else if(p.path!=null)S=p.path,m=i.find(y=>y.re.test(S)),m&&(R=m.parse(S),I=m.record.name);else{if(m=g.name?n.get(g.name):i.find(y=>y.re.test(g.path)),!m)throw ci(he.MATCHER_NOT_FOUND,{location:p,currentLocation:g});I=m.record.name,R=te({},g.params,p.params),S=m.stringify(R)}const k=[];let b=m;for(;b;)k.unshift(b.record),b=b.parent;return{name:I,path:S,params:R,matched:k,meta:Pd(k)}}e.forEach(p=>s(p));function a(){i.length=0,n.clear()}return{addRoute:s,resolve:u,removeRoute:l,clearRoutes:a,getRoutes:o,getRecordMatcher:r}}function Ps(e,t){const i={};for(const n of t)n in e&&(i[n]=e[n]);return i}function Ms(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Od(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Od(e){const t={},i=e.props||!1;if("component"in e)t.default=i;else for(const n in e.components)t[n]=typeof i=="object"?i[n]:i;return t}function Ds(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pd(e){return e.reduce((t,i)=>te(t,i.meta),{})}function Md(e,t){let i=0,n=t.length;for(;i!==n;){const s=i+n>>1;No(e,t[s])<0?n=s:i=s+1}const r=Dd(e);return r&&(n=t.lastIndexOf(r,n-1)),n}function Dd(e){let t=e;for(;t=t.parent;)if($o(t)&&No(e,t)===0)return t}function $o({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ls(e){const t=Ge(An),i=Ge(Or),n=Be(()=>{const c=ye(e.to);return t.resolve(c)}),r=Be(()=>{const{matched:c}=n.value,{length:u}=c,a=c[u-1],p=i.matched;if(!a||!p.length)return-1;const g=p.findIndex(oi.bind(null,a));if(g>-1)return g;const m=Bs(c[u-2]);return u>1&&Bs(a)===m&&p[p.length-1].path!==m?p.findIndex(oi.bind(null,c[u-2])):g}),s=Be(()=>r.value>-1&&jd(i.params,n.value.params)),l=Be(()=>r.value>-1&&r.value===i.matched.length-1&&xo(i.params,n.value.params));function o(c={}){if(Fd(c)){const u=t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(xi);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:n,href:Be(()=>n.value.href),isActive:s,isExactActive:l,navigate:o}}function Ld(e){return e.length===1?e[0]:e}const Bd=Ol({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ls,setup(e,{slots:t}){const i=Pi(Ls(e)),{options:n}=Ge(An),r=Be(()=>({[Vs(e.activeClass,n.linkActiveClass,"router-link-active")]:i.isActive,[Vs(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const s=t.default&&Ld(t.default(i));return e.custom?s:fo("a",{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:r.value},s)}}}),Vd=Bd;function Fd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jd(e,t){for(const i in t){const n=t[i],r=e[i];if(typeof n=="string"){if(n!==r)return!1}else if(!Ye(r)||r.length!==n.length||n.some((s,l)=>s.valueOf()!==r[l].valueOf()))return!1}return!0}function Bs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Vs=(e,t,i)=>e??t??i,Hd=Ol({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){const n=Ge(dr),r=Be(()=>e.route||n.value),s=Ge(Ns,0),l=Be(()=>{let u=ye(s);const{matched:a}=r.value;let p;for(;(p=a[u])&&!p.components;)u++;return u}),o=Be(()=>r.value.matched[l.value]);Ui(Ns,Be(()=>l.value+1)),Ui(md,o),Ui(dr,r);const c=hn();return Ft(()=>[c.value,o.value,e.name],([u,a,p],[g,m,R])=>{a&&(a.instances[p]=u,m&&m!==a&&u&&u===g&&(a.leaveGuards.size||(a.leaveGuards=m.leaveGuards),a.updateGuards.size||(a.updateGuards=m.updateGuards))),u&&a&&(!m||!oi(a,m)||!g)&&(a.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=r.value,a=e.name,p=o.value,g=p&&p.components[a];if(!g)return Fs(i.default,{Component:g,route:u});const m=p.props[a],R=m?m===!0?u.params:typeof m=="function"?m(u):m:null,I=fo(g,te({},R,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(p.instances[a]=null)},ref:c}));return Fs(i.default,{Component:I,route:u})||I}}});function Fs(e,t){if(!e)return null;const i=e(t);return i.length===1?i[0]:i}const Ud=Hd;function Kd(e){const t=kd(e.routes,e),i=e.parseQuery||hd,n=e.stringifyQuery||ws,r=e.history,s=hi(),l=hi(),o=hi(),c=Ec(Tt);let u=Tt;Xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=Vn.bind(null,A=>""+A),p=Vn.bind(null,Yu),g=Vn.bind(null,Oi);function m(A,L){let O,F;return Eo(A)?(O=t.getRecordMatcher(A),F=L):F=A,t.addRoute(F,O)}function R(A){const L=t.getRecordMatcher(A);L&&t.removeRoute(L)}function S(){return t.getRoutes().map(A=>A.record)}function I(A){return!!t.getRecordMatcher(A)}function k(A,L){if(L=te({},L||c.value),typeof A=="string"){const v=Fn(i,A,L.path),T=t.resolve({path:v.path},L),x=r.createHref(v.fullPath);return te(v,T,{params:g(T.params),hash:Oi(v.hash),redirectedFrom:void 0,href:x})}let O;if(A.path!=null)O=te({},A,{path:Fn(i,A.path,L.path).path});else{const v=te({},A.params);for(const T in v)v[T]==null&&delete v[T];O=te({},A,{params:p(v)}),L.params=p(L.params)}const F=t.resolve(O,L),J=A.hash||"";F.params=a(g(F.params));const d=ed(n,te({},A,{hash:zu(J),path:F.path})),h=r.createHref(d);return te({fullPath:d,hash:J,query:n===ws?gd(A.query):A.query||{}},F,{redirectedFrom:void 0,href:h})}function b(A){return typeof A=="string"?Fn(i,A,c.value.path):te({},A)}function y(A,L){if(u!==A)return ci(he.NAVIGATION_CANCELLED,{from:L,to:A})}function _(A){return D(A)}function M(A){return _(te(b(A),{replace:!0}))}function z(A,L){const O=A.matched[A.matched.length-1];if(O&&O.redirect){const{redirect:F}=O;let J=typeof F=="function"?F(A,L):F;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=b(J):{path:J},J.params={}),te({query:A.query,hash:A.hash,params:J.path!=null?{}:A.params},J)}}function D(A,L){const O=u=k(A),F=c.value,J=A.state,d=A.force,h=A.replace===!0,v=z(O,F);if(v)return D(te(b(v),{state:typeof v=="object"?te({},J,v.state):J,force:d,replace:h}),L||O);const T=O;T.redirectedFrom=L;let x;return!d&&td(n,F,O)&&(x=ci(he.NAVIGATION_DUPLICATED,{to:T,from:F}),Qe(F,F,!0,!1)),(x?Promise.resolve(x):X(T,F)).catch(C=>pt(C)?pt(C,he.NAVIGATION_GUARD_REDIRECT)?C:Ct(C):ee(C,T,F)).then(C=>{if(C){if(pt(C,he.NAVIGATION_GUARD_REDIRECT))return D(te({replace:h},b(C.to),{state:typeof C.to=="object"?te({},J,C.to.state):J,force:d}),L||T)}else C=xe(T,F,!0,h,J);return de(T,F,C),C})}function B(A,L){const O=y(A,L);return O?Promise.reject(O):Promise.resolve()}function V(A){const L=Kt.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(A):A()}function X(A,L){let O;const[F,J,d]=vd(A,L);O=Hn(F.reverse(),"beforeRouteLeave",A,L);for(const v of F)v.leaveGuards.forEach(T=>{O.push(Et(T,A,L))});const h=B.bind(null,A,L);return O.push(h),He(O).then(()=>{O=[];for(const v of s.list())O.push(Et(v,A,L));return O.push(h),He(O)}).then(()=>{O=Hn(J,"beforeRouteUpdate",A,L);for(const v of J)v.updateGuards.forEach(T=>{O.push(Et(T,A,L))});return O.push(h),He(O)}).then(()=>{O=[];for(const v of d)if(v.beforeEnter)if(Ye(v.beforeEnter))for(const T of v.beforeEnter)O.push(Et(T,A,L));else O.push(Et(v.beforeEnter,A,L));return O.push(h),He(O)}).then(()=>(A.matched.forEach(v=>v.enterCallbacks={}),O=Hn(d,"beforeRouteEnter",A,L,V),O.push(h),He(O))).then(()=>{O=[];for(const v of l.list())O.push(Et(v,A,L));return O.push(h),He(O)}).catch(v=>pt(v,he.NAVIGATION_CANCELLED)?v:Promise.reject(v))}function de(A,L,O){o.list().forEach(F=>V(()=>F(A,L,O)))}function xe(A,L,O,F,J){const d=y(A,L);if(d)return d;const h=L===Tt,v=Xt?history.state:{};O&&(F||h?r.replace(A.fullPath,te({scroll:h&&v&&v.scroll},J)):r.push(A.fullPath,J)),c.value=A,Qe(A,L,O,h),Ct()}let Ee;function qe(){Ee||(Ee=r.listen((A,L,O)=>{if(!Ot.listening)return;const F=k(A),J=z(F,Ot.currentRoute.value);if(J){D(te(J,{replace:!0,force:!0}),F).catch(xi);return}u=F;const d=c.value;Xt&&ad(Is(d.fullPath,O.delta),Rn()),X(F,d).catch(h=>pt(h,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?h:pt(h,he.NAVIGATION_GUARD_REDIRECT)?(D(te(b(h.to),{force:!0}),F).then(v=>{pt(v,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!O.delta&&O.type===ar.pop&&r.go(-1,!1)}).catch(xi),Promise.reject()):(O.delta&&r.go(-O.delta,!1),ee(h,F,d))).then(h=>{h=h||xe(F,d,!1),h&&(O.delta&&!pt(h,he.NAVIGATION_CANCELLED)?r.go(-O.delta,!1):O.type===ar.pop&&pt(h,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),de(F,d,h)}).catch(xi)}))}let yt=hi(),fe=hi(),q;function ee(A,L,O){Ct(A);const F=fe.list();return F.length?F.forEach(J=>J(A,L,O)):console.error(A),Promise.reject(A)}function dt(){return q&&c.value!==Tt?Promise.resolve():new Promise((A,L)=>{yt.add([A,L])})}function Ct(A){return q||(q=!A,qe(),yt.list().forEach(([L,O])=>A?O(A):L()),yt.reset()),A}function Qe(A,L,O,F){const{scrollBehavior:J}=e;if(!Xt||!J)return Promise.resolve();const d=!O&&ud(Is(A.fullPath,0))||(F||!O)&&history.state&&history.state.scroll||null;return mn().then(()=>J(A,L,d)).then(h=>h&&cd(h)).catch(h=>ee(h,A,L))}const Me=A=>r.go(A);let Ut;const Kt=new Set,Ot={currentRoute:c,listening:!0,addRoute:m,removeRoute:R,clearRoutes:t.clearRoutes,hasRoute:I,getRoutes:S,resolve:k,options:e,push:_,replace:M,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:l.add,afterEach:o.add,onError:fe.add,isReady:dt,install(A){A.component("RouterLink",Vd),A.component("RouterView",Ud),A.config.globalProperties.$router=Ot,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),Xt&&!Ut&&c.value===Tt&&(Ut=!0,_(r.location).catch(F=>{}));const L={};for(const F in Tt)Object.defineProperty(L,F,{get:()=>c.value[F],enumerable:!0});A.provide(An,Ot),A.provide(Or,yl(L)),A.provide(dr,c);const O=A.unmount;Kt.add(A),A.unmount=function(){Kt.delete(A),Kt.size<1&&(u=Tt,Ee&&Ee(),Ee=null,c.value=Tt,Ut=!1,q=!1),O()}}};function He(A){return A.reduce((L,O)=>L.then(()=>V(O)),Promise.resolve())}return Ot}function Pr(){return Ge(An)}function Gd(e){return Ge(Or)}const Ei={appName:"订单管理",institution:"北京市公共图书馆",currentLibrarianAccount:"BIBQUERY01",currentSubscriber:"ceshi",viewableSubscribers:["ceshi"],z3950Servers:["北京大学","华盛顿大学"],sidebarHighlightMap:{"/bib-query/z3950":"/bib-query","/bib-query/new-bib":"/bib-query","/acceptance/delivery-import":"/acceptance/delivery-import/tasks","/acceptance/detail":"/acceptance","/shortage/detail":"/shortage","/orders/line":"/orders","/orders/lines":"/orders","/settled/detail":"/settled","/settled/list":"/settled"},sidebar:[{id:"order-mgmt",label:"订单管理",expanded:!0,children:[{label:"非连续出版物订单",route:"/orders"},{label:"书目查询",route:"/bib-query"}]},{id:"acceptance",label:"采访验收",expanded:!0,children:[{label:"验收单管理",route:"/acceptance"},{label:"逐条收货",route:"/receive"},{label:"批量验收",route:"/batch-acceptance"},{label:"换货管理",route:"/exchange"},{label:"退货管理",route:"/return"},{label:"催缺管理",route:"/shortage"}]},{id:"settlement",label:"采访结算",expanded:!1,children:[{label:"待结算",route:"/pending-settlement"},{label:"已结算",route:"/settled"},{label:"结算失败处理",route:"/settlement-fail"}]},{id:"subscriber",label:"订户管理",expanded:!1,children:[{label:"订户列表",route:"/subscribers"},{label:"馆员列表",route:"/librarians"}]},{id:"currency",label:"货币管理",expanded:!1,children:[{label:"货币信息",route:"/currency"}]},{id:"settings",label:"设置",expanded:!1,children:[{label:"退换撤订原因参数",route:"/reason-params"},{label:"催缺配置",route:"/shortage-config"},{label:"条码号供应商代码",route:"/barcode-supplier"},{label:"订单与MARC类型映射关系",route:"/marc-mapping"},{label:"订单导入模板配置",route:"/import-template"},{label:"馆址管理",route:"/locations"}]}]},js={"/orders":"订单管理","/bib-query":"书目查询","/acceptance":"验收单管理","/receive":"逐条收货","/batch-acceptance":"批量验收","/exchange":"换货管理","/return":"退货管理","/shortage":"催缺管理","/shortage/detail":"催缺详情","/pending-settlement":"待结算","/settled":"已结算","/settled/detail":"结算详情","/settled/list":"结算清单","/settlement-fail":"结算失败处理","/subscribers":"订户列表","/librarians":"馆员列表","/currency":"货币信息","/reason-params":"退换撤订原因参数","/shortage-config":"催缺配置","/barcode-supplier":"条码号供应商代码","/marc-mapping":"订单与MARC类型映射关系","/import-template":"订单导入模板配置","/locations":"馆址管理","/bib-query/new-bib":"新建书目","/bib-query/z3950":"查Z3950","/acceptance/delivery-import":"导入任务","/acceptance/delivery-import/tasks":"导入任务","/acceptance/detail":"验收详情","/orders/line":"订单行详情"};function ko(e){return js[e]?js[e]:e.startsWith("/acceptance/detail/")?"验收详情":e.startsWith("/shortage/detail/")?"催缺详情":e.startsWith("/acceptance/delivery-import/tasks/")?"导入任务详情":e.startsWith("/orders/line/")?"订单行详情":e.startsWith("/settled/detail/")?"结算详情":e.startsWith("/settled/list/")?"结算清单":e}function fr(e){if(Ei.sidebarHighlightMap[e])return Ei.sidebarHighlightMap[e];for(const[t,i]of Object.entries(Ei.sidebarHighlightMap))if(e.startsWith(`${t}/`)||t!==e&&e.startsWith(t))return i;return e}const Hs="orderm_spa_tabs",xn=Tn("app",{state:()=>({config:Ei,tabs:[{route:"/orders",title:"订单管理"}],activeRoute:"/orders",expandedGroups:Ei.sidebar.filter(e=>e.expanded).map(e=>e.id)}),getters:{highlightRoute:e=>fr(e.activeRoute),currentAcceptance:e=>e._currentAcceptance},actions:{initFromStorage(){try{const e=sessionStorage.getItem(Hs);if(!e)return;const t=JSON.parse(e);Array.isArray(t.tabs)&&t.tabs.length&&(this.tabs=t.tabs,this.activeRoute=t.activeRoute||this.tabs[0].route)}catch{}},persistTabs(){sessionStorage.setItem(Hs,JSON.stringify({tabs:this.tabs,activeRoute:this.activeRoute}))},openTab(e,t){const i=t||ko(e),n=this.tabs.find(r=>r.route===e);n?n.title=i:this.tabs.push({route:e,title:i}),this.activeRoute=e,this.persistTabs()},switchTab(e){this.activeRoute=e,this.persistTabs()},closeTab(e){if(this.tabs.length<=1)return;const t=this.tabs.findIndex(i=>i.route===e);if(t!==-1){if(this.tabs.splice(t,1),this.activeRoute===e){const i=this.tabs[Math.max(0,t-1)]||this.tabs[0];this.activeRoute=i.route}this.persistTabs()}},toggleGroup(e){const t=this.expandedGroups.indexOf(e);t>=0?this.expandedGroups.splice(t,1):this.expandedGroups.push(e)},isGroupExpanded(e,t){if(this.expandedGroups.includes(e))return!0;const i=this.config.sidebar.find(n=>n.id===e);return i==null?void 0:i.children.some(n=>fr(t)===n.route)}}}),Un="orderm_current_acceptance",Kn="acceptanceDetailContext";function dh(e){return{no:e.no,id:e.acceptanceId,name:e.name,type:e.type,lang:e.lang,method:e.method,supplier:e.supplier,shipNo:e.shipNo,status:e.status,remarkText:e.remarkText||"",autoBarcode:e.autoBarcode,barcode:e.barcode}}const Wd=Tn("acceptance",{state:()=>({current:null,detailContext:null}),getters:{hasCurrent:e=>!!e.current},actions:{initFromStorage(){try{const e=localStorage.getItem(Un);this.current=e?JSON.parse(e):null}catch{this.current=null}this.loadDetailContext()},setCurrent(e){this.current=e,e?localStorage.setItem(Un,JSON.stringify(e)):localStorage.removeItem(Un)},clearCurrent(){this.setCurrent(null)},saveDetailContext(e){this.detailContext=e,sessionStorage.setItem(Kn,JSON.stringify(e))},loadDetailContext(){try{const e=sessionStorage.getItem(Kn);this.detailContext=e?JSON.parse(e):null}catch{this.detailContext=null}return this.detailContext},clearDetailContext(){this.detailContext=null,sessionStorage.removeItem(Kn)}}}),fh={exchange:"换货原因",return:"退货原因",cancel:"撤订原因",revokeReceive:"撤销收货原因"},Us={exchange:[{id:"ex-1",content:"换货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:41",remark:""},{id:"ex-2",content:"残缺损",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:45:18",remark:""},{id:"ex-3",content:"缺页",status:"active",sort:3,creator:"赵付",created:"2026-05-22 08:56:00",remark:""},{id:"ex-4",content:"错页",status:"active",sort:4,creator:"赵付",created:"2026-05-22 08:56:01",remark:""},{id:"ex-5",content:"装订错误",status:"active",sort:5,creator:"赵付",created:"2026-05-22 08:56:02",remark:""},{id:"ex-6",content:"纸张破损",status:"active",sort:6,creator:"赵付",created:"2026-05-22 08:56:03",remark:""},{id:"ex-7",content:"装订不牢",status:"active",sort:7,creator:"赵付",created:"2026-05-22 08:56:04",remark:""},{id:"ex-8",content:"书脊开裂",status:"active",sort:8,creator:"赵付",created:"2026-05-22 08:56:05",remark:""},{id:"ex-9",content:"被污染或损坏",status:"active",sort:9,creator:"赵付",created:"2026-05-22 08:56:06",remark:""}],return:[{id:"rt-1",content:"退货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:48",remark:""},{id:"rt-2",content:"损坏退货",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:09",remark:""},{id:"rt-3",content:"缺页",status:"active",sort:3,creator:"赵付",created:"2026-05-22 08:56:10",remark:""},{id:"rt-4",content:"错页",status:"active",sort:4,creator:"赵付",created:"2026-05-22 08:56:11",remark:""},{id:"rt-5",content:"装订错误",status:"active",sort:5,creator:"赵付",created:"2026-05-22 08:56:12",remark:""},{id:"rt-6",content:"纸张破损",status:"active",sort:6,creator:"赵付",created:"2026-05-22 08:56:13",remark:""},{id:"rt-7",content:"装订不牢",status:"active",sort:7,creator:"赵付",created:"2026-05-22 08:56:14",remark:""},{id:"rt-8",content:"书脊开裂",status:"active",sort:8,creator:"赵付",created:"2026-05-22 08:56:15",remark:""},{id:"rt-9",content:"被污染或损坏",status:"active",sort:9,creator:"赵付",created:"2026-05-22 08:56:16",remark:""}],cancel:[{id:"ca-1",content:"撤订",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:56",remark:""},{id:"ca-2",content:"退订",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:27",remark:""}],revokeReceive:[{id:"rv-1",content:"录入错误",status:"active",sort:1,creator:"赵付",created:"2026-05-22 09:10:12",remark:""},{id:"rv-2",content:"重复收货",status:"active",sort:2,creator:"杨晓婉",created:"2026-05-22 09:11:05",remark:""},{id:"rv-3",content:"品相差",status:"active",sort:3,creator:"王二小",created:"2026-05-22 09:12:18",remark:""}]},ph=[{key:"content",label:"原因"},{key:"status",label:"状态",type:"select",options:["全部","使用中","已停用"]},{key:"createDate",label:"创建日期",type:"dateRange",startKey:"startDate",endKey:"endDate"},{key:"creator",label:"创建人",extra:!0}],hh={active:{text:"使用中",cls:"text-green-600"},disabled:{text:"已停用",cls:"text-red-500"}},Ks="orderm_reason_params";function Gn(e){return String(e??"").trim()}const qd=Tn("reasonParams",{state:()=>({data:structuredClone(Us)}),getters:{getByType:e=>t=>e.data[t]||[],getActiveByType:e=>t=>(e.data[t]||[]).filter(i=>i.status==="active").sort((i,n)=>(i.sort||0)-(n.sort||0))},actions:{initFromStorage(){try{const e=localStorage.getItem(Ks);e?this.data=JSON.parse(e):this.persist()}catch{this.data=structuredClone(Us)}},persist(){localStorage.setItem(Ks,JSON.stringify(this.data))},isDuplicate(e,t){const i=Gn(t);return i?(this.data[e]||[]).some(n=>Gn(n.content)===i):!1},nextSort(e){const t=this.data[e]||[];return t.length?Math.max(...t.map(i=>Number(i.sort)||0))+1:1},addReason(e,t){const i=Gn(t.content),n=this.data[e]||[],r=t.sort!=null?t.sort:this.nextSort(e),s={...t,content:i,sort:r,remark:t.remark??"",id:`${e}-${Date.now()}`,status:"active",creator:t.creator||"赵付",created:t.created||new Date().toISOString().slice(0,19).replace("T"," ")};return n.push(s),this.data[e]=n,this.persist(),s},updateReason(e,t,i){const n=this.data[e]||[],r=n.findIndex(s=>s.id===t);r>=0&&(n[r]={...n[r],...i},this.persist())},toggleStatus(e,t){const i=(this.data[e]||[]).find(n=>n.id===t);i&&(i.status=i.status==="active"?"disabled":"active",this.persist())}}}),gh={active:{text:"使用中",cls:"text-green-600"},inactive:{text:"已停用",cls:"text-gray-500"}},zd=32,Xd=64,Jd=200,Oo=32,Mr=64,Po=200,Mo=32,Dr=64,Do=200,Yd=["ST001_C1","ST001_C2","ST001_C3","ST001_C4","ST001_C5","ST002_C1","ST002_C2","ST003_C1"],Qd=["CL001","CL002","CL003","CL004","CL005","CL006","CL007","CL008","CL009","CL010","STD02","STE02","STG02","STK02","STB01","STC01","ST01","ST02","ST03","ST04","ST05","ST06","ST07","ST10","ST100","ST101","ST102"],Zd=["ST001","STD01","STE01","STEK1","STES1","STG01","STK01","STS01","STF01","ST029","ST002","ST003","ST004","ST005","ST006","ST007","ST008","ST009","ST010","ST011","ST012","ST013","ST014","ST015","ST018","ST019","ST020","ST021","ST024","ST025","ST026","ST030","ST031","ST032","ST033","ST034","ST044","ST047","STB01","STC01","STD02","STE02","STH01"],ef={"site-1":["ST001","STD","STE","STG","STK","STS","STF"],"site-2":["ST029"],"site-3":["STB","STC"],"site-4":["ST002","ST003","ST004","ST005","ST006","ST007","ST008","ST009","ST010","ST011","ST012","ST013","ST014","ST015","ST018","ST019","ST020","ST021","ST024","ST025","ST026","ST030","ST031","ST032","ST033","ST034","ST044","ST047"]},Lo=["馆址编码","馆址名称","状态","备注"],Bo=["馆址编码","馆址名称","分馆编码","分馆名称","状态","备注"],Vo=["馆址编码","馆址名称","分馆编码","分馆名称","馆藏地编码","馆藏地名称","状态","备注"],tf=[{id:"site-1",code:"ST001_C1",name:"首都华威桥馆",status:"active",remark:"首都图书馆主馆文献借阅区域"},{id:"site-2",code:"ST001_C2",name:"首都大兴机场分馆",status:"active",remark:""},{id:"site-3",code:"ST001_C3",name:"北京城市图书馆",status:"active",remark:""},{id:"site-4",code:"ST001_C4",name:"其他馆址（首都图书馆）",status:"active",remark:""},{id:"site-5",code:"",name:"测试停用馆址",status:"inactive",remark:"编码为空示例"}],nf=[{id:"branch-6",siteId:"site-1",code:"ST001",name:"首都图书馆",status:"active",remark:""},{id:"branch-1",siteId:"site-1",code:"STD01",name:"首图地方文献",status:"active",remark:""},{id:"branch-2",siteId:"site-1",code:"STE01",name:"市少儿图书馆",status:"active",remark:""},{id:"branch-7",siteId:"site-1",code:"STEK1",name:"市少儿图书馆期刊分馆",status:"active",remark:""},{id:"branch-8",siteId:"site-1",code:"STES1",name:"市少儿图书馆视听分馆",status:"active",remark:""},{id:"branch-3",siteId:"site-1",code:"STG01",name:"首图古籍",status:"active",remark:""},{id:"branch-4",siteId:"site-1",code:"STK01",name:"首图期刊分馆",status:"active",remark:""},{id:"branch-9",siteId:"site-1",code:"STS01",name:"首图视听中心",status:"active",remark:""},{id:"branch-10",siteId:"site-2",code:"ST029",name:"首图大兴机场分馆",status:"active",remark:""},{id:"branch-11",siteId:"site-1",code:"STF01",name:"首图非遗文献分馆",status:"active",remark:""},{id:"branch-12",siteId:"site-4",code:"ST002",name:"首都图书馆月坛分馆",status:"active",remark:""},{id:"branch-13",siteId:"site-4",code:"ST003",name:"首都图书馆北工大分馆",status:"active",remark:""},{id:"branch-14",siteId:"site-4",code:"ST004",name:"首都图书馆东四分馆",status:"active",remark:""},{id:"branch-15",siteId:"site-4",code:"ST005",name:"首都图书馆小堡分馆",status:"active",remark:""},{id:"branch-16",siteId:"site-4",code:"ST006",name:"首都图书馆前门分馆",status:"active",remark:""},{id:"branch-17",siteId:"site-4",code:"ST007",name:"首都图书馆南邵分馆",status:"active",remark:""},{id:"branch-18",siteId:"site-4",code:"ST008",name:"首都图书馆东花市分馆",status:"active",remark:""},{id:"branch-19",siteId:"site-4",code:"ST009",name:"首都图书馆西长安街分馆",status:"active",remark:""},{id:"branch-20",siteId:"site-4",code:"ST010",name:"首都图书馆六里屯分馆",status:"active",remark:""},{id:"branch-21",siteId:"site-4",code:"ST011",name:"首都图书馆堡头分馆",status:"active",remark:""},{id:"branch-22",siteId:"site-4",code:"ST012",name:"首都图书馆首都机场分馆",status:"active",remark:""},{id:"branch-23",siteId:"site-4",code:"ST013",name:"首都图书馆西三旗分馆",status:"active",remark:""},{id:"branch-24",siteId:"site-4",code:"ST014",name:"首都图书馆社区活动",status:"active",remark:""},{id:"branch-25",siteId:"site-4",code:"ST015",name:"首都图书馆市财政局分馆",status:"active",remark:""},{id:"branch-26",siteId:"site-4",code:"ST018",name:"首都图书馆市人大分馆",status:"active",remark:""},{id:"branch-27",siteId:"site-4",code:"ST019",name:"亦庄开发区图书馆",status:"active",remark:""},{id:"branch-28",siteId:"site-4",code:"ST020",name:"北京市国际艺术学校分馆",status:"active",remark:""},{id:"branch-29",siteId:"site-4",code:"ST021",name:"国家图书馆",status:"active",remark:""},{id:"branch-30",siteId:"site-4",code:"ST024",name:"老干部局（怀柔）分馆",status:"active",remark:""},{id:"branch-31",siteId:"site-4",code:"ST025",name:"老干部局（东直门）分馆",status:"active",remark:""},{id:"branch-32",siteId:"site-4",code:"ST026",name:"首图耿丹学院分馆",status:"active",remark:""},{id:"branch-33",siteId:"site-4",code:"ST030",name:"首都图书馆酷车小镇分馆",status:"active",remark:""},{id:"branch-34",siteId:"site-4",code:"ST031",name:"首都图书馆天通苑分馆",status:"active",remark:""},{id:"branch-35",siteId:"site-4",code:"ST032",name:"首都图书馆体育分馆",status:"active",remark:""},{id:"branch-36",siteId:"site-4",code:"ST033",name:"首都图书馆南航分馆",status:"active",remark:""},{id:"branch-37",siteId:"site-4",code:"ST034",name:"首都图书馆火箭军分馆",status:"active",remark:""},{id:"branch-38",siteId:"site-4",code:"ST044",name:"首图北京政务中心分馆",status:"active",remark:""},{id:"branch-39",siteId:"site-4",code:"ST047",name:"首都图书馆沐林分馆",status:"active",remark:""},{id:"branch-5",siteId:"site-5",code:"",name:"测试停用分馆",status:"inactive",remark:""}],rf=[{id:"col-1",branchId:"branch-1",code:"CL001",name:"北京地方文献阅览室",status:"active",remark:""},{id:"col-2",branchId:"branch-2",code:"CL002",name:"首少.少儿钢琴厂书库",status:"active",remark:""},{id:"col-3",branchId:"branch-3",code:"CL003",name:"历史文献阅览室",status:"active",remark:""},{id:"col-4",branchId:"branch-4",code:"CL004",name:"首图刊.中文报刊阅览室",status:"active",remark:""},{id:"col-st01",branchId:"branch-6",code:"ST01",name:"哲学社会科学图书借阅室 (4204)",status:"active",remark:""},{id:"col-st02",branchId:"branch-6",code:"ST02",name:"中文库本书库 (4)",status:"active",remark:""},{id:"col-st03",branchId:"branch-6",code:"ST03",name:"文学史地图书借阅室2106",status:"active",remark:""},{id:"col-st04",branchId:"branch-6",code:"ST04",name:"工具书阅览室 (5205)",status:"active",remark:""},{id:"col-st05",branchId:"branch-6",code:"ST05",name:"艺术文献阅览室 (5205)",status:"active",remark:""},{id:"col-st06",branchId:"branch-6",code:"ST06",name:"中文报刊外借室",status:"active",remark:""},{id:"col-st07",branchId:"branch-6",code:"ST07",name:"科技图书借阅室 (6204)",status:"active",remark:""},{id:"col-st10",branchId:"branch-6",code:"ST10",name:"综合图书借阅室 (7204)",status:"active",remark:""},{id:"col-st100",branchId:"branch-6",code:"ST100",name:"首图预约处",status:"active",remark:""},{id:"col-st101",branchId:"branch-6",code:"ST101",name:"B座二层新书刊",status:"active",remark:""},{id:"col-st102",branchId:"branch-6",code:"ST102",name:"B座三层文学图书",status:"active",remark:""},{id:"col-5",branchId:"branch-5",code:"",name:"测试停用馆藏地",status:"inactive",remark:""}],mh=[{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态",type:"select",options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],vh=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],bh=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称",extra:!0},{key:"code",label:"馆藏地编码",extra:!0},{key:"name",label:"馆藏地名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],_h=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],Sh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],yh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称"},{key:"code",label:"馆藏地编码"},{key:"name",label:"馆藏地名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}];function Ke(e,t){return t?String(e||"").toLowerCase().includes(t.toLowerCase()):!0}function Fo(e,t){return e.find(i=>i.id===t)}function Jt(e,t){return e.find(i=>i.code===t)}function sf(e,t){return e.find(i=>i.id===t)}function Ch(e,t){return e.find(i=>i.id===t)}function lf(e,t){const i=Fo(t,e.siteId);return{...e,siteCode:(i==null?void 0:i.code)||"-",siteName:(i==null?void 0:i.name)||"-"}}function of(e,t,i){const n=sf(t,e.branchId),r=n?Fo(i,n.siteId):null;return{...e,branchCode:(n==null?void 0:n.code)||"-",branchName:(n==null?void 0:n.name)||"-",siteCode:(r==null?void 0:r.code)||"-",siteName:(r==null?void 0:r.name)||"-"}}function jo(e){return[...e].filter(t=>t.status==="active").sort((t,i)=>t.name.localeCompare(i.name,"zh-CN"))}function Ho(e){return jo(e).map(t=>t.name)}function cf(e){return["全部",...Ho(e)]}const af=new Set(["site","location"]);function Th(e,t){return e.map(i=>!af.has(i.key)||i.type!=="select"?i:{...i,options:[...t]})}function Rh(e,t){return e.filter(i=>i.siteId===t&&i.status==="active").sort((i,n)=>i.name.localeCompare(n.name,"zh-CN"))}function Lr(e){return[...e].filter(t=>t.status==="active"&&t.code).sort((t,i)=>t.code.localeCompare(i.code,"zh-CN"))}function Uo(e){return e?e.code?`${e.code} | ${e.name}`:e.name||"":""}function uf(e){return Lr(e).map(t=>({value:t.id,label:Uo(t),code:t.code,name:t.name}))}function Ah(e){return Lr(e).map(t=>({value:t.code,label:Uo(t),code:t.code,name:t.name}))}function df(e){return[...e].filter(t=>t.status==="active"&&t.code).sort((t,i)=>t.code.localeCompare(i.code,"zh-CN"))}function ff(e){return e?e.code?`${e.code} | ${e.name}`:e.name||"":""}function xh(e,t,i=""){let n=df(e);const r=(Array.isArray(i)?i:[i]).map(s=>String(s||"").trim()).filter(Boolean);if(r.length){const s=new Set(t.filter(l=>l.status==="active"&&r.includes(l.code)).map(l=>l.id));if(!s.size)return[];n=n.filter(l=>s.has(l.branchId))}return n.map(s=>({value:s.code,label:ff(s),code:s.code,name:s.name,branchId:s.branchId}))}function pf(e){return Yd.includes(e.trim())}function Ko(e){return Qd.includes(e)}function Br(e,t){if(!Zd.includes(e))return!1;const i=ef[t];return i?i.some(n=>e.startsWith(n)):!0}function hf(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function gf(e,t,i=null){return e.some(n=>n.id!==i&&n.name===t)}function Go(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function Wo(e,t,i,n=null){return e.some(r=>r.id!==n&&r.siteId===i&&r.name===t)}function qo(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function zo(e,t,i,n=null){return e.some(r=>r.id!==n&&r.branchId===i&&r.name===t)}function Eh(e,t,i){const n={},r=e.siteId||null,s=e.code.trim(),l=e.name.trim(),o=e.remark||"";return i||(s?s.length>zd?n.code="馆址编码长度不能超过32个字符":pf(s)?hf(t,s,r)&&(n.code="馆址编码已存在，请修改"):n.code="馆址编码必须属于四级馆藏地现有编码":n.code="请输入馆址编码"),l?l.length>Xd?n.name="馆址名称长度不能超过64个字符":gf(t,l,r)&&(n.name="已存在同名馆址"):n.name="请输入馆址名称",o.length>Jd&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function Ih(e,t,i){const n={},r=e.branchId||null,s=e.siteId,l=e.code.trim(),o=e.name.trim(),c=e.remark||"";return s||(n.siteId="请选择所属馆址"),i||(l?l.length>Oo?n.code="分馆编码长度不能超过32个字符":s&&!Br(l,s)?n.code="分馆编码必须属于四级馆址编码范围内":Go(t,l,r)&&(n.code="分馆编码已存在，请修改"):n.code="请输入分馆编码"),o?o.length>Mr?n.name="分馆名称长度不能超过64个字符":s&&Wo(t,o,s,r)&&(n.name="该馆址下已存在同名分馆"):n.name="请输入分馆名称",c.length>Po&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function wh(e,t,i){const n={},r=e.collectionId||null,s=e.branchId,l=e.code.trim(),o=e.name.trim(),c=e.remark||"";return e.siteId||(n.siteId="请选择所属馆址"),s||(n.branchId="请选择所属分馆"),i||(l?l.length>Mo?n.code="馆藏地编码长度不能超过32个字符":Ko(l)?qo(t,l,r)&&(n.code="馆藏地编码已存在，请修改"):n.code="馆藏地编码必须属于四级馆藏地现有编码":n.code="请输入馆藏地编码"),o?o.length>Dr?n.name="馆藏地名称长度不能超过64个字符":s&&zo(t,o,s,r)&&(n.name="该分馆下已存在同名馆藏地"):n.name="请输入馆藏地名称",c.length>Do&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function Nh(e,t){return e.filter(i=>!(!Ke(i.code,t.code)||!Ke(i.name,t.name)||t.status&&i.status!==t.status))}function $h(e,t,i){return e.map(n=>lf(n,t)).filter(n=>!(!Ke(n.siteCode,i.siteCode)||!Ke(n.siteName,i.siteName)||!Ke(n.code,i.code)||!Ke(n.name,i.name)||i.status&&n.status!==i.status))}function kh(e,t,i,n){return e.map(r=>of(r,t,i)).filter(r=>!(!Ke(r.siteCode,n.siteCode)||!Ke(r.siteName,n.siteName)||!Ke(r.branchCode,n.branchCode)||!Ke(r.branchName,n.branchName)||!Ke(r.code,n.code)||!Ke(r.name,n.name)||n.status&&r.status!==n.status))}function mf(e){return/\.(xls|xlsx)$/i.test(e)}function ti(e,t,i){const n=i.map(o=>o.map(c=>`"${String(c||"").replace(/"/g,'""')}"`).join(",")),r=`\uFEFF${t.join(",")}
${n.join(`
`)}
`,s=new Blob([r],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a");l.href=URL.createObjectURL(s),l.download=e,l.click(),URL.revokeObjectURL(l.href)}function Oh(e){e==="site"?ti("馆址导入模板.csv",Lo,[["ST001_C5","示例馆址名称","使用中","示例备注"]]):e==="branch"?ti("分馆导入模板.csv",Bo,[["ST001_C1","首都华威桥馆","STF01","示例分馆名称","使用中","示例备注"]]):ti("馆藏地导入模板.csv",Vo,[["ST001_C1","首都华威桥馆","STD01","首图地方文献","CL005","示例馆藏地名称","使用中","示例备注"]])}function Ph(e,t){if(!(t!=null&&t.length))return;const i=new Date().toISOString().replace(/[-:T]/g,"").slice(0,14);e==="site"?ti(`馆址导入解析错误文件_${i}.csv`,[...Lo,"错误原因"],t.map(n=>[n.code,n.name,n.statusText,n.remark,n.errorReason])):e==="branch"?ti(`分馆导入解析错误文件_${i}.csv`,[...Bo,"错误原因"],t.map(n=>[n.siteCode,n.siteName,n.branchCode,n.branchName,n.statusText,n.remark,n.errorReason])):ti(`馆藏地导入解析错误文件_${i}.csv`,[...Vo,"错误原因"],t.map(n=>[n.siteCode,n.siteName,n.branchCode,n.branchName,n.collectionCode,n.collectionName,n.statusText,n.remark,n.errorReason]))}function vf(e,t,i,n){const r=String(e.siteCode||"").trim(),s=String(e.branchCode||"").trim(),l=String(e.branchName||"").trim(),o=String(e.remark||"");if(!r)return"馆址编码不能为空";if(!s)return"分馆编码不能为空";if(!l)return"分馆名称不能为空";if(s.length>Oo)return"分馆编码长度不能超过32个字符";if(l.length>Mr)return"分馆名称长度不能超过64个字符";if(o.length>Po)return"备注长度不能超过200个字符";const c=Jt(i,r);return c?n.has(s)||Go(t,s)?"分馆编码重复":Br(s,c.id)?Wo(t,l,c.id)?"同馆址下已存在同名分馆":(n.add(s),null):"分馆编码不属于当前馆址编码":"馆址编码不存在"}function bf(e,t,i,n,r){const s=String(e.siteCode||"").trim(),l=String(e.branchCode||"").trim(),o=String(e.collectionCode||"").trim(),c=String(e.collectionName||"").trim(),u=String(e.remark||"");if(!s)return"馆址编码不能为空";if(!l)return"分馆编码不能为空";if(!o)return"馆藏地编码不能为空";if(!c)return"馆藏地名称不能为空";if(o.length>Mo)return"馆藏地编码长度不能超过32个字符";if(c.length>Dr)return"馆藏地名称长度不能超过64个字符";if(u.length>Do)return"备注长度不能超过200个字符";const a=Jt(n,s);if(!a)return"馆址编码不存在";const p=i.find(g=>g.siteId===a.id&&g.code===l);return p?r.has(o)||qo(t,o)?"馆藏地编码重复":Ko(o)?zo(t,c,p.id)?"同分馆下已存在同名馆藏地":(r.add(o),null):"馆藏地编码不属于四级馆藏地现有编码":"分馆编码不存在"}function Mh(e,t,{siteRows:i,branchRows:n,collectionRows:r}){const s=t.name.toLowerCase();if(!mf(t.name))return{ok:!1,message:"导入文件格式不符"};if(s.includes("header")||s.includes("表头"))return{ok:!1,message:"模板的表头更改了"};if(s.includes("2000")||s.includes("超限"))return{ok:!1,message:"数据记录超过2000条"};if(e==="site"){const g=new Set(i.map(y=>y.code).filter(Boolean)),m=new Set(i.map(y=>y.name));if(s.includes("success")||s.includes("全部成功")){const _=["ST002_C1","ST002_C2","ST003_C1"].filter(M=>!g.has(M)).map((M,z)=>({code:M,name:`批量导入馆址${z+1}`,status:"active",remark:""}));return{ok:!0,result:{total:_.length,success:_.length,fail:0,successRows:_,errorRows:[]}}}const R=100,S=10,I=["馆址编码重复","馆址编码不属于四级馆藏地现有编码","馆址名称长度不能超过64个字符","已存在同名馆址"],k=Array.from({length:S},(y,_)=>({code:_===0?"ST001_C1":`INVALID_${_}`,name:_===3?"首都华威桥馆":`失败馆址${_+1}`,statusText:"使用中",remark:"",errorReason:I[_%I.length]})),b=Array.from({length:R-S},(y,_)=>({code:`ST002_C${String(_+10).padStart(2,"0")}`,name:`导入馆址${_+1}`,status:"active",remark:_%4===0?"批量导入":""})).filter(y=>!g.has(y.code)&&!m.has(y.name));return{ok:!0,result:{total:R,success:R-S,fail:S,successRows:b,errorRows:k}}}if(e==="branch"){const g=new Set(n.map(b=>b.code).filter(Boolean));if(s.includes("success")||s.includes("全部成功")){const b=Jt(i,"ST001_C1")||i.find(M=>M.code),_=["STF01","STH01","STD02"].filter(M=>!g.has(M)&&b&&Br(M,b.id)).map((M,z)=>({siteCode:(b==null?void 0:b.code)||"ST001_C1",siteName:(b==null?void 0:b.name)||"首都华威桥馆",siteId:(b==null?void 0:b.id)||"site-1",branchCode:M,branchName:`批量导入分馆${z+1}`,status:"active",remark:""}));return{ok:!0,result:{total:_.length,success:_.length,fail:0,successRows:_,errorRows:[]}}}const m=100,R=10,S=["分馆编码重复","分馆编码不属于当前馆址编码","分馆名称长度不能超过64个字符","馆址编码不存在","同馆址下已存在同名分馆"],I=Array.from({length:R},(b,y)=>({siteCode:y===3?"INVALID_SITE":"ST001_C1",siteName:y===3?"不存在馆址":"首都华威桥馆",branchCode:y===0?"STD01":`INVALID_${y}`,branchName:y===2?"A".repeat(Mr+1):y===4?"首图地方文献":`失败分馆${y+1}`,statusText:"使用中",remark:"",errorReason:S[y%S.length]})),k=Array.from({length:m-R},(b,y)=>{const _=Jt(i,"ST001_C1")||i[0],M=`STF${String(y+10).padStart(2,"0")}`;return{siteCode:(_==null?void 0:_.code)||"ST001_C1",siteName:(_==null?void 0:_.name)||"首都华威桥馆",siteId:(_==null?void 0:_.id)||"site-1",branchCode:M,branchName:`导入分馆${y+1}`,status:"active",remark:y%4===0?"批量导入":""}}).filter(b=>!g.has(b.branchCode)&&vf(b,n,i,new Set)===null);return{ok:!0,result:{total:m,success:m-R,fail:R,successRows:k,errorRows:I}}}const l=new Set(r.map(g=>g.code).filter(Boolean));if(s.includes("success")||s.includes("全部成功")){const g=Jt(i,"ST001_C1")||i[0],m=n.find(I=>I.siteId===(g==null?void 0:g.id)&&I.code==="STD01")||n[0],S=["CL005","CL006","CL007"].filter(I=>!l.has(I)).map((I,k)=>({siteCode:(g==null?void 0:g.code)||"ST001_C1",siteName:(g==null?void 0:g.name)||"首都华威桥馆",branchCode:(m==null?void 0:m.code)||"STD01",branchName:(m==null?void 0:m.name)||"首图地方文献",branchId:(m==null?void 0:m.id)||"branch-1",collectionCode:I,collectionName:`批量导入馆藏地${k+1}`,status:"active",remark:""}));return{ok:!0,result:{total:S.length,success:S.length,fail:0,successRows:S,errorRows:[]}}}const o=100,c=10,u=["馆藏地编码重复","馆藏地编码不属于四级馆藏地现有编码","馆藏地名称长度不能超过64个字符","馆址编码不存在","分馆编码不存在","同分馆下已存在同名馆藏地"],a=Array.from({length:c},(g,m)=>({siteCode:m===3?"INVALID_SITE":"ST001_C1",siteName:m===3?"不存在馆址":"首都华威桥馆",branchCode:m===4?"INVALID_BRANCH":"STD01",branchName:m===4?"不存在分馆":"首图地方文献",collectionCode:m===0?"CL001":`INVALID_${m}`,collectionName:m===2?"A".repeat(Dr+1):m===5?"北京地方文献阅览室":`失败馆藏地${m+1}`,statusText:"使用中",remark:"",errorReason:u[m%u.length]})),p=Array.from({length:o-c},(g,m)=>{const R=Jt(i,"ST001_C1")||i[0],S=n.find(k=>k.siteId===(R==null?void 0:R.id)&&k.code==="STD01")||n[0],I=`CL${String(m+20).padStart(3,"0")}`;return{siteCode:(R==null?void 0:R.code)||"ST001_C1",siteName:(R==null?void 0:R.name)||"首都华威桥馆",branchCode:(S==null?void 0:S.code)||"STD01",branchName:(S==null?void 0:S.name)||"首图地方文献",branchId:(S==null?void 0:S.id)||"branch-1",collectionCode:I,collectionName:`导入馆藏地${m+1}`,status:"active",remark:m%4===0?"批量导入":""}}).filter(g=>!l.has(g.collectionCode)&&bf(g,r,n,i,new Set)===null);return{ok:!0,result:{total:o,success:o-c,fail:c,successRows:p,errorRows:a}}}function Dh(e,t){t.forEach(i=>{e.some(n=>n.code===i.code)||e.unshift({id:`site-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,code:i.code,name:i.name,status:i.status,remark:i.remark||""})})}function Lh(e,t){t.forEach(i=>{e.some(n=>n.code===i.branchCode)||e.unshift({id:`branch-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,siteId:i.siteId,code:i.branchCode,name:i.branchName,status:i.status,remark:i.remark||""})})}function Bh(e,t){t.forEach(i=>{e.some(n=>n.code===i.collectionCode)||e.unshift({id:`col-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,branchId:i.branchId,code:i.collectionCode,name:i.collectionName,status:i.status,remark:i.remark||""})})}const Gs="orderm_location_data";function Hi(){return{siteRows:tf.map(e=>({...e})),branchRows:nf.map(e=>({...e})),collectionRows:rf.map(e=>({...e}))}}const _f=Tn("location",{state:()=>({initialized:!1,siteRows:[],branchRows:[],collectionRows:[]}),getters:{activeSites(e){return jo(e.siteRows)},activeSiteNames(e){return Ho(e.siteRows)},activeSiteFilterOptions(e){return cf(e.siteRows)},activeBranches(e){return Lr(e.branchRows)},activeBranchSelectOptions(e){return uf(e.branchRows)}},actions:{initFromStorage(){if(!this.initialized){try{const e=localStorage.getItem(Gs);if(e){const t=JSON.parse(e);this.siteRows=Array.isArray(t.siteRows)?t.siteRows:Hi().siteRows,this.branchRows=Array.isArray(t.branchRows)?t.branchRows:Hi().branchRows,this.collectionRows=Array.isArray(t.collectionRows)?t.collectionRows:Hi().collectionRows}else this.resetToInitial()}catch{this.resetToInitial()}this.initialized=!0}},ensureInitialized(){this.initialized||this.initFromStorage()},resetToInitial(){const e=Hi();this.siteRows=e.siteRows,this.branchRows=e.branchRows,this.collectionRows=e.collectionRows,this.persist()},persist(){localStorage.setItem(Gs,JSON.stringify({siteRows:this.siteRows,branchRows:this.branchRows,collectionRows:this.collectionRows}))},replaceSiteRows(e){this.siteRows=e,this.persist()},replaceBranchRows(e){this.branchRows=e,this.persist()},replaceCollectionRows(e){this.collectionRows=e,this.persist()}}}),Sf={class:"h-12 bg-slate-900 flex items-center justify-between px-4 shrink-0 z-20"},yf={class:"flex items-center gap-2"},Cf={class:"text-white font-medium text-sm"},Tf={class:"flex items-center gap-3 shrink-0"},Rf={class:"flex items-center gap-1 text-gray-300 text-xs"},Af={class:"text-white"},xf={__name:"AppHeader",setup(e){const t=xn();return(i,n)=>(Se(),Le("header",Sf,[Z("div",yf,[n[0]||(n[0]=Z("div",{class:"w-7 h-7 bg-sky-500 rounded flex items-center justify-center"},[Z("svg",{class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})])],-1)),Z("span",Cf,ii(ye(t).config.appName),1)]),Z("div",Tf,[Z("div",Rf,[n[1]||(n[1]=Z("span",null,"当前机构",-1)),Z("span",Af,ii(ye(t).config.institution),1),n[2]||(n[2]=Z("svg",{class:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),n[3]||(n[3]=Z("div",{class:"w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center"},[Z("svg",{class:"w-5 h-5 text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])],-1))])]))}},Ef={id:"sidebar-wrapper",class:"relative shrink-0 h-full"},If={class:"flex-1 py-2"},wf=["onClick"],Nf={__name:"AppSidebar",setup(e){const t=Pr(),i=xn(),n=hn(!1);function r(l){return fr(i.activeRoute)===l}function s(l,o){i.openTab(l,o),t.push(l)}return(l,o)=>{const c=Er("RouterLink");return Se(),Le("div",Ef,[Z("aside",{id:"sidebar",class:It(["h-full bg-slate-800 flex flex-col overflow-y-auto transition-[width] duration-200",n.value?"w-0 overflow-hidden":"w-52"])},[Z("nav",If,[(Se(!0),Le(Oe,null,Qn(ye(i).config.sidebar,u=>(Se(),Le("div",{key:u.id,class:"sidebar-group"},[Z("button",{type:"button",class:"sidebar-toggle w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-slate-700 transition-colors",onClick:a=>ye(i).toggleGroup(u.id)},[Z("span",null,ii(u.label),1),(Se(),Le("svg",{class:It(["w-4 h-4 transition-transform",{"rotate-180":ye(i).isGroupExpanded(u.id,ye(i).activeRoute)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...o[2]||(o[2]=[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,wf),Z("div",{class:It(["sidebar-children overflow-hidden transition-all duration-200",ye(i).isGroupExpanded(u.id,ye(i).activeRoute)?"max-h-[500px]":"max-h-0"])},[(Se(!0),Le(Oe,null,Qn(u.children,a=>(Se(),ri(c,{key:a.route,to:a.route,class:It(["block pl-10 pr-4 py-2 text-sm transition-colors",r(a.route)?"bg-sky-600 text-white":"text-gray-400 hover:text-white hover:bg-slate-700"]),onClick:p=>s(a.route,a.label)},{default:Ar(()=>[oo(ii(a.label),1)]),_:2},1032,["to","class","onClick"]))),128))],2)]))),128))]),Z("button",{type:"button",class:"p-3 border-t border-slate-700 text-gray-400 hover:text-white flex justify-center shrink-0",title:"收起菜单",onClick:o[0]||(o[0]=u=>n.value=!0)},[...o[3]||(o[3]=[Z("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})],-1)])])],2),jc(Z("button",{type:"button",id:"sidebar-expand",class:"absolute bottom-0 left-0 z-10 w-10 p-3 border-t border-slate-700 bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex justify-center",title:"展开菜单",onClick:o[1]||(o[1]=u=>n.value=!1)},[...o[4]||(o[4]=[Z("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})],-1)])],512),[[Qa,n.value]])])}}},$f={id:"page-tab-bar",class:"bg-white border-b border-gray-200 px-4 flex items-center gap-2 h-10 shrink-0 overflow-x-auto"},kf=["onClick"],Of=["onClick"],Pf={__name:"TabBar",setup(e){const t=Pr(),i=xn();function n(s){i.switchTab(s),t.push(s)}function r(s){const l=i.activeRoute===s;i.closeTab(s),l&&t.push(i.activeRoute)}return(s,l)=>(Se(),Le("div",$f,[(Se(!0),Le(Oe,null,Qn(ye(i).tabs,o=>(Se(),Le("div",{key:o.route,class:It(["flex items-center gap-2 border rounded px-3 py-1 text-sm cursor-pointer whitespace-nowrap",o.route===ye(i).activeRoute?"bg-sky-50 border-sky-200 text-sky-700":"bg-white border-gray-200 text-gray-600 hover:bg-gray-50"]),onClick:c=>n(o.route)},[Z("span",null,ii(o.title),1),ye(i).tabs.length>1?(Se(),Le("button",{key:0,type:"button",class:"opacity-40 hover:opacity-100 text-xs leading-none",onClick:bu(c=>r(o.route),["stop"])},"×",8,Of)):co("",!0)],10,kf))),128))]))}},Mf={class:"flex flex-col h-screen overflow-hidden"},Df={class:"flex flex-1 overflow-hidden"},Lf={class:"flex-1 flex flex-col overflow-hidden bg-gray-100"},Bf={class:"flex-1 min-h-0 overflow-hidden"},Vf={class:"h-full min-h-0 overflow-hidden p-4 flex flex-col"},Ff={key:0,class:"flex flex-col flex-1 min-h-0 h-full overflow-hidden"},jf={__name:"AppLayout",setup(e){const t=Gd();Pr();const i=xn(),n=Wd(),r=qd(),s=_f();xr(()=>{i.initFromStorage(),n.initFromStorage(),r.initFromStorage(),s.initFromStorage(),l()}),Ft(()=>t.path,()=>l());function l(){const o=t.path,c=t.meta.title||ko(o);i.openTab(o,c)}return(o,c)=>{const u=Er("RouterView");return Se(),Le("div",Mf,[me(xf),Z("div",Df,[me(Nf),Z("main",Lf,[me(Pf),Z("div",Bf,[Z("div",Vf,[me(u,null,{default:Ar(({Component:a,route:p})=>[a?(Se(),Le("div",Ff,[(Se(),ri(Yc,{max:20},[(Se(),ri(oa(a),{key:p.fullPath}))],1024))])):co("",!0)]),_:1})])])])])])}}},Hf=[{path:"orders",name:"orders",component:()=>ne(()=>import("./OrderManageView-BoywBFM_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url),meta:{title:"订单管理",module:"order"}},{path:"orders/lines",redirect:{path:"/orders",query:{tab:"order-line"}}},{path:"orders/line/:lineNo?",name:"order-line-detail",component:()=>ne(()=>import("./OrderLineDetailView-CEAMXflY.js"),__vite__mapDeps([27,3,4,5,9,10,11,12,13,19,24,25,28]),import.meta.url),meta:{title:"订单行详情",module:"order"}},{path:"bib-query",name:"bib-query",component:()=>ne(()=>import("./BibQueryView-BcEEDS20.js"),__vite__mapDeps([29,3,4,5,19,2,9,10,11,12,13,30,15,16,17,8,20,18,14,24,25,6,31]),import.meta.url),meta:{title:"书目查询",module:"order"}},{path:"bib-query/new-bib",name:"new-bib",component:()=>ne(()=>import("./NewBibView-VcTClDvd.js"),__vite__mapDeps([32,33]),import.meta.url),meta:{title:"新建书目",module:"order"}},{path:"bib-query/z3950",name:"z3950",component:()=>ne(()=>import("./Z3950QueryView-DgpLCnsf.js"),__vite__mapDeps([34,3,4,5,33]),import.meta.url),meta:{title:"查Z3950",module:"order"}}],Uf=[{path:"acceptance",name:"acceptance",component:()=>ne(()=>import("./AcceptanceManageView-ZIMSTfOZ.js"),__vite__mapDeps([35,1,2,3,4,5,7,24,25,20,36,10,15,16,17,37,38,39,40,41,6]),import.meta.url),meta:{title:"验收单管理",module:"acceptance"}},{path:"acceptance/detail/:acceptanceId",name:"acceptance-detail",component:()=>ne(()=>import("./AcceptanceDetailView-BuPdDoT4.js"),__vite__mapDeps([42,1,2,3,4,5,7,6,38,20,36,10,21,24,25,11,33]),import.meta.url),meta:{title:"验收详情",module:"acceptance"}},{path:"acceptance/delivery-import",redirect:"/acceptance/delivery-import/tasks"},{path:"acceptance/delivery-import/tasks",name:"delivery-import-tasks",component:()=>ne(()=>import("./DeliveryImportTaskListView-Bkq_qMKF.js"),__vite__mapDeps([43,3,4,5,39,40,44,36,10,6,45]),import.meta.url),meta:{title:"导入任务",module:"acceptance"}},{path:"acceptance/delivery-import/tasks/:id",name:"delivery-import-task-detail",component:()=>ne(()=>import("./DeliveryImportTaskDetailView-BiT2rqiq.js"),__vite__mapDeps([46,4,33,39,40,47,6,20,21,36,10,44,48]),import.meta.url),meta:{title:"导入任务详情",module:"acceptance"}},{path:"receive",name:"receive",component:()=>ne(()=>import("./ReceiveByItemView-CmM3mlQA.js"),__vite__mapDeps([49,3,4,5,6,47,21,40,41,24,25,14,36,10,11]),import.meta.url),meta:{title:"逐条收货",module:"acceptance"}},{path:"batch-acceptance",name:"batch-acceptance",component:()=>ne(()=>import("./BatchAcceptanceView-CRG_TvM1.js"),__vite__mapDeps([50,1,2,3,4,5,6,20,36,10,37]),import.meta.url),meta:{title:"批量验收",module:"acceptance"}},{path:"exchange",name:"exchange",component:()=>ne(()=>import("./ExchangeManageView-D2F9ANXs.js"),__vite__mapDeps([51,3,4,5,7,2,20,21,14]),import.meta.url),meta:{title:"换货管理",module:"acceptance"}},{path:"return",name:"return",component:()=>ne(()=>import("./ReturnManageView-DvdC05JU.js"),__vite__mapDeps([52,3,4,5,7,2,14]),import.meta.url),meta:{title:"退货管理",module:"acceptance"}},{path:"shortage",name:"shortage",component:()=>ne(()=>import("./ShortageManageView-DB4VnaN2.js"),__vite__mapDeps([53,22,9,10,11,12,13,8,1,2,3,4,5,7,6,54,20,21,14]),import.meta.url),meta:{title:"催缺管理",module:"acceptance"}},{path:"shortage/detail/:shortageId",name:"shortage-detail",component:()=>ne(()=>import("./ShortageDetailView-BKYSF1Gp.js"),__vite__mapDeps([55,1,2,3,4,5,6,54,20,21,33,22,9,10,11,12,13,8]),import.meta.url),meta:{title:"催缺详情",module:"acceptance"}}],Kf=[{path:"pending-settlement",name:"pending-settlement",component:()=>ne(()=>import("./PendingSettlementView-CJ4tbwfc.js"),__vite__mapDeps([56,1,2,3,4,5,20]),import.meta.url),meta:{title:"待结算",module:"settlement"}},{path:"settled",name:"settled",component:()=>ne(()=>import("./SettledView-B-vTZXTg.js"),__vite__mapDeps([57,1,2,3,4,5,58]),import.meta.url),meta:{title:"已结算",module:"settlement"}},{path:"settled/detail/:settleId",name:"settlement-detail",component:()=>ne(()=>import("./SettlementDetailView-BoSm625K.js"),__vite__mapDeps([59,33,58]),import.meta.url),meta:{title:"结算详情",module:"settlement"}},{path:"settled/list/:settleId",name:"settlement-list",component:()=>ne(()=>import("./SettlementListView-CEe1hguD.js"),__vite__mapDeps([60,1,2,3,4,5,7,33,12]),import.meta.url),meta:{title:"结算清单",module:"settlement"}},{path:"settlement-fail",name:"settlement-fail",component:()=>ne(()=>import("./FailSettlementView-D_f56udN.js"),__vite__mapDeps([61,1,2,3,4,5]),import.meta.url),meta:{title:"结算失败处理",module:"settlement"}}],Gf=[{path:"subscribers",name:"subscribers",component:()=>ne(()=>import("./SubscriberListView-DSsqYf85.js"),__vite__mapDeps([62,1,2,3,4,5,18,17,20,16]),import.meta.url),meta:{title:"订户列表",module:"subscriber"}},{path:"librarians",name:"librarians",component:()=>ne(()=>import("./LibrarianListView-AekfhjmL.js"),__vite__mapDeps([63,1,2,3,4,5,20,16,17]),import.meta.url),meta:{title:"馆员列表",module:"subscriber"}}],Wf=[{path:"currency",name:"currency",component:()=>ne(()=>import("./CurrencyInfoView-htq6GIzX.js"),__vite__mapDeps([64,1,2,3,4,5,30,20]),import.meta.url),meta:{title:"货币信息",module:"currency"}}],qf=[{path:"import-template",name:"import-template",component:()=>ne(()=>import("./ImportTemplateConfigView-hqJ_Mv7j.js"),__vite__mapDeps([65,1,2,3,4,5,18,66,23,20]),import.meta.url),meta:{title:"订单导入模板配置",module:"import-template"}}],zf=[{path:"shortage-config",name:"shortage-config",component:()=>ne(()=>import("./ShortageConfigView-Bam2kxp6.js"),__vite__mapDeps([67,1,2,3,4,5,17,20]),import.meta.url),meta:{title:"催缺配置",module:"shortage-config"}}],Xf=[{path:"barcode-supplier",name:"barcode-supplier",component:()=>ne(()=>import("./BarcodeSupplierView-JCWi0XkR.js"),__vite__mapDeps([68,1,2,3,4,5,66,20]),import.meta.url),meta:{title:"条码号供应商代码",module:"barcode-supplier"}}],Jf=[{path:"marc-mapping",name:"marc-mapping",component:()=>ne(()=>import("./MarcMappingView-DXcYRCBl.js"),__vite__mapDeps([69,1,2,3,4,5,13]),import.meta.url),meta:{title:"订单与MARC类型映射关系",module:"marc-mapping"}}],Yf=[{path:"locations",name:"locations",component:()=>ne(()=>import("./LocationManageView-DvvTX_nV.js"),__vite__mapDeps([70,1,2,3,4,5,66]),import.meta.url),meta:{title:"馆址管理",module:"location"}}],Xo=Kd({history:Cd(),routes:[{path:"/",component:jf,redirect:"/orders",children:[...Hf,...Uf,...Kf,...Gf,...Wf,...qf,...zf,...Xf,...Jf,...Yf,{path:"reason-params",name:"reason-params",component:()=>ne(()=>import("./ReasonParamsView-CycHPyHO.js"),__vite__mapDeps([71,1,2,3,4,5]),import.meta.url),meta:{title:"退换撤订原因参数"}},{path:"placeholder/:slug",name:"placeholder",component:()=>ne(()=>import("./PlaceholderView-BbyN6Pcq.js"),[],import.meta.url),meta:{title:"待迁移"}}]}]});Xo.beforeEach((e,t,i)=>{document.title=`${e.meta.title||"页面"} - 图书馆采选订单管理系统`,i()});function Qf(e,t){return`<div class="prd-spec-header"><div class="prd-spec-header-title">[${e}] ${t}</div></div>`}function f(e,t){return`<p class="prd-spec-section-title">${t}</p>`}function Ce(e){return`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};margin-right:6px;"></span>`}function le(e,t){const i=e.map(r=>`<th>${r}</th>`).join(""),n=t.map(r=>`<tr>${r.map(s=>`<td>${s}</td>`).join("")}</tr>`).join("");return`<table class="prd-spec-table"><thead><tr>${i}</tr></thead><tbody>${n}</tbody></table>`}function K(e,t,i){return`${Qf(e,t)}${i}`}const Zf=K("5.2.5.1","筛选查询",`
<div id="overview">
${f("","功能描述")}
<p>提供多维度组合检索条件，帮助用户快速定位目标订单。支持展开/收起：默认显示首行 3 列检索项，展开后显示全部条件。</p>
${f("","页面要素")}
<ul>
<li><strong>默认显示</strong>：订单号（文本）、采选方式（下拉）、供应商（下拉）</li>
<li><strong>展开后追加</strong>：发订人、订单状态、结算状态、订户、语种、发订时间（日期范围）、预算名称、资源类型、馆址</li>
<li><strong>操作按钮</strong>：「检索」触发过滤；「重置」清空条件并恢复全量列表</li>
</ul>
</div>
<div id="rules">
${f("","业务规则")}
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
${f("","异常处理")}
<ul>
<li>无匹配数据时表格展示空列表，分页显示 0 条</li>
</ul>
</div>`),ep=K("5.2.5.2","数据表格与行操作",`
<div id="overview">
${f("","功能描述")}
<p>以表格形式展示订单列表，支持分页、行勾选及按订单状态动态显示操作按钮。</p>
${f("","表格列")}
<p>复选框列（始终固定列首最左）、序号、订户、馆址、订单号、采选方式、资源类型、语种、供应商、订单时间、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订户、馆址、订单号；列尾 — 操作。列展示自定义规则见 <strong>5.2.5.9</strong>。</p>
${f("","交互逻辑")}
<ul>
<li>订单号列：蓝色文字链，点击切换至「订单行列表」页签并带入订单号筛选</li>
<li>发订备注：有内容时显示蓝色「查看」（悬浮 title 展示全文）；无内容时灰色「查看」</li>
<li>列较多时表格可横向滚动；纵向滚动时表头吸顶；固定列横向滚动时不透出底层字段</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.2.5.9）</li>
<li>订单状态带颜色标识：${Ce("#7c3aed")}待导入、${Ce("#d97706")}待发订、${Ce("#16a34a")}已发订、${Ce("#2563eb")}处理中、${Ce("#6b7280")}已撤订</li>
<li>分页：默认 10 条/页，底部显示总条数与页码切换</li>
</ul>
</div>
<div id="rules">
${f("","操作按钮规则（按订单状态）")}
${le(["订单状态","可用操作"],[["待发订 pending","发订、删除"],["待导入 pendingImport","导入订单"],["已发订 ordered","编辑、导出订单、撤订"],["处理中 processing","导出订单"],["已撤订 cancelled","导出订单、删除"]])}
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>导出订单（单行）：原型阶段 alert 提示演示</li>
</ul>
</div>`),tp=K("5.2.5.3","新建订单弹窗",`
<div id="overview">
${f("","功能描述")}
<p>通过工具栏「新建订单」按钮打开模态弹窗，填写订单头信息后创建新订单，初始状态为<strong>待导入</strong>。</p>
${f("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 订户、资源类型、采选方式、预算名称、语种、供应商、馆址（均为下拉，必填）</li>
<li>折扣（文本，非必填）</li>
</ul>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>提交前校验全部必填项，未填时在字段下方显示红色提示并 alert 首条错误</li>
<li>新建成功后订单号自动生成，格式 PG001B{yyyyMMdd}{3位流水}</li>
<li>新建订单默认：发订册数/种数 0，码洋/实洋 0.00，结算状态「未结算」，发订时间为空</li>
<li>馆址选项来源于系统馆址配置（仅启用状态）</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>必填项未填：阻止提交，提示「请选择{字段名}」</li>
</ul>
</div>`),ip=K("5.2.5.4","编辑订单弹窗",`
<div id="overview">
${f("","功能描述")}
<p>已发订订单可通过操作列「编辑」打开弹窗，修改预算名称、供应商、发订备注。</p>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>预算名称、供应商为必填下拉</li>
<li>发订备注为多行文本，非必填</li>
<li>保存后更新列表对应行（原型 alert「订单已保存」）</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>预算或供应商未选：alert 提示对应字段</li>
</ul>
</div>`),np=K("5.2.5.5","发订",`
<div id="overview">
${f("","功能描述")}
<p>待发订订单通过操作列「发订」打开发订备注弹窗，确认后将订单及下属待发订订单行置为已发订。</p>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>仅 <strong>待发订（pending）</strong> 状态订单可发订</li>
<li>发订后：订单状态 → 已发订；记录发订时间、发订人、发订备注</li>
<li>该订单下所有「待发订」订单行同步变为「已发订」，写入发订时间</li>
<li>发订备注弹窗：多行文本，可为空；标题「请填写发订备注：」</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>非待发订订单发订：alert「仅待发订状态的订单可发订」</li>
</ul>
</div>`),rp=K("5.2.5.6","导入订单",`
<div id="overview">
${f("","功能描述")}
<p>待导入订单通过「导入订单」打开三步向导弹窗：选择模板并上传 → 查看解析结果 → 点「下一步」自动入库。</p>
${f("","步骤说明")}
<ol>
<li><strong>选择模板并上传</strong>：按订单资源类型/语种/供应商匹配可用导入模板；支持 xls/xlsx；可下载模板</li>
<li><strong>解析结果</strong>：展示总条数、成功/失败数；可下载解析结果；解析全部成功才可点「下一步」</li>
<li><strong>入库</strong>：第 2 步点「下一步」后进入本步并自动入库（显示 loading），成功后展示「入库成功」，订单状态变为待发订并写入订单行；本步不再单独点「入库」</li>
</ol>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>模板列表按当前订单属性从「导入模板管理」模块过滤</li>
<li>仅 1 个可用模板时自动选中</li>
<li>上传前校验：必须选择模板且已选文件</li>
<li>解析存在失败行时「下一步」按钮置灰</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>无匹配模板：提示「暂无与当前订单匹配的导入模板」</li>
<li>未选模板或文件：上传区显示红色校验信息</li>
<li>入库失败：展示「入库失败，请联系管理员」</li>
</ul>
</div>`),sp=K("5.2.5.7","撤订与删除",`
<div id="overview">
${f("","功能描述")}
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」）、待发订/已撤订订单删除。</p>
</div>
<div id="rules">
${f("","撤订规则")}
<ul>
<li>撤订前弹出「请选择撤订原因」弹窗，原因来源于「设置 - 退换撤订原因参数」</li>
<li>订单撤订：订单状态 → 已撤订；其下所有订单行状态 → 已撤订，写入撤订原因至备注</li>
<li>批量撤订需先勾选订单，未勾选 alert「请先勾选要撤订的订单」</li>
</ul>
${f("","删除规则")}
<ul>
<li>仅<strong>待发订</strong>或<strong>已撤订</strong>订单可删除</li>
<li>删除前二次确认弹窗展示订单号</li>
<li>删除后移除订单及其全部订单行</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>未选择撤订原因：alert「请选择撤订原因」</li>
<li>无可用撤订原因：下拉为空并提示前往设置配置</li>
</ul>
</div>`),lp=K("5.2.5.8","批量导出",`
<div id="overview">
${f("","功能描述")}
<p>工具栏「批量导出」下拉提供「导出配置」「导出订单」。导出配置弹窗支持全选/取消及字段勾选。</p>
</div>
<div id="rules">
${f("","可导出字段")}
<p>订户、馆址、订单号、采选方式、资源类型、语种、供应商、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态</p>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>「导出订单」：原型阶段 alert 演示</li>
</ul>
</div>`),op=K("5.2.5.9","列展示配置",`
<div id="overview">
${f("","功能描述")}
<p>工具栏右侧齿轮按钮打开「列展示」面板，支持列显隐、分区内拖拽排序、固定在列首或列尾；配置即时生效并持久化至浏览器本地。</p>
${f("","页面要素")}
<ul>
<li><strong>入口</strong>：工具栏最右侧齿轮图标，悬浮提示「列展示」</li>
<li><strong>面板顶栏</strong>：「列展示」全选复选框 + 「重置」按钮</li>
<li><strong>三区列表</strong>（自上而下）：固定在列首 → 不固定 → 固定在列尾</li>
<li><strong>列项行</strong>：拖拽手柄、显隐复选框、列名；悬停显示固定操作图标</li>
</ul>
</div>
<div id="interaction">
${f("","交互逻辑")}
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
${f("","默认固定位置")}
${le(["固定位置","默认列"],[["列首固定","序号、订户、馆址、订单号"],["列尾固定","操作"]])}
${f("","业务规则")}
<ul>
<li>复选框列<strong>不参与</strong>列展示配置，始终显示且始终固定于列首最左侧</li>
<li>横向滚动时列首/列尾固定列保持可见，表头与表体同步固定，背景不透明</li>
<li>纵向滚动时表头吸顶</li>
<li>本地存储异常时自动回退默认配置</li>
</ul>
</div>`),cp=K("5.3.5.1","筛选查询",`
<div id="overview">
${f("","功能描述")}
<p>支持基础条件 + 组合条件检索订单行，默认显示订单号、订单行号、行状态（多选）。</p>
${f("","页面要素")}
<ul>
<li><strong>默认行（收起可见）</strong>：订单号、订单行号、行状态（多选：待发订/已发订/处理中/已关闭；未选不过滤）</li>
<li><strong>展开后</strong>：组合条件（资源标识/正题名/作者/出版社 + 且/或逻辑链）、载体、验收状态、结算状态、是否催缺、书目记录号、馆址、<strong>馆藏重复</strong>、供应商（多选）、预算（多选）、<strong>订单重复</strong>、<strong>定价</strong>（位于订单重复之后）</li>
<li><strong>馆藏重复 / 订单重复</strong>：下拉选框，选项 <strong>全部 / 有 / 无</strong>，默认 <strong>全部</strong></li>
<li><strong>定价</strong>：下限 / 上限数字输入（可只填一端）</li>
<li>从订单列表点击订单号跳转时，自动带入订单号筛选</li>
</ul>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>组合条件：同一链条内按 logicAfter（且/或）串联；字段值为空则跳过该条件</li>
<li>文本匹配为包含关系（includes）</li>
<li>验收状态「待验收」匹配行 acceptanceStatus 为「待验收」</li>
<li><strong>行状态 / 供应商 / 预算</strong>：未选不过滤；多选按「或」命中</li>
<li><strong>定价</strong>：对 price 数值闭区间比较（不区分币种）；只填下限为 ≥，只填上限为 ≤；下限大于上限时提示并不检索</li>
<li><strong>馆藏重复 / 订单重复</strong>：选「有」仅显示标识为有的行；选「无」仅显示标识为无的行；未查重（空白）不匹配「有」或「无」；两条件可同时使用（AND）</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<p>无匹配数据时展示空表格。定价下限大于上限时提示「定价下限不能大于上限」，不发起检索。</p>
</div>`),ap=K("5.3.5.2","数据表格与行操作",`
<div id="overview">
${f("","功能描述")}
<p>展示订单行明细，含序号列、馆藏/订单查重标识列及行级操作入口。</p>
${f("","主要列")}
<p>复选框列、序号、订单号、馆址、订单行号、书目记录号、正题名、资源标识、载体、作者、出版社、出版时间、分卷号、分卷名、定价、币种、套内册数、套数、行状态、验收状态、结算状态、是否催缺、发/收/换/退/撤订、发订时间、馆藏重复、订单重复、备注、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订单号、馆址、订单行号；列尾 — 操作。列展示规则见 <strong>5.3.5.11</strong>。</p>
${f("","书目记录号列")}
<ul>
<li>展示<strong>书目记录号</strong>（<code>bibRecordNo</code>）</li>
<li>若<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值）非空，且其中至少有一条与书目记录号不一致，则在旁显示「<strong>实</strong>」浅蓝徽章；规则详见 <strong>5.3.5.10</strong></li>
<li>悬停「实」：浮层逐条列出全部非空实际关联书目记录号，每条为可点击链接</li>
<li>若实际关联书目记录号为空，或全部与书目记录号相同，则不显示「实」标记</li>
</ul>
${f("","交互")}
<ul>
<li>订单行号：链接跳转订单行详情页 #/orders/line/{orderLineNo}</li>
<li>备注：有备注显示蓝色「查看」，否则「—」</li>
<li>列较多时可横向滚动；表头纵向吸顶；固定列不透底</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.3.5.11）</li>
<li>操作列：查重（条件显示）、编辑、撤订（<strong>不含详情按钮</strong>；详情通过订单行号列跳转）</li>
</ul>
</div>
<div id="rules">
${f("","分页")}
<p>默认 <strong>50</strong> 条/页，可选 <strong>50 / 100 / 200</strong> 条/页；底部显示总条数与页码切换；检索后分页重置为第 1 页。</p>
</div>`),up=K("5.3.5.3","生成催缺单",`
<div id="overview">
${f("","功能描述")}
<p>对勾选的订单行批量生成催缺单：按订单号（orderId）分组，自动过滤验收状态不允许催缺的行，生成成功后将对应订单行是否催缺（isShortage）更新为「是」，并提示是否立即查看催缺模块。</p>
${f("","页面要素")}
<ul>
<li><strong>生成催缺单按钮</strong>：订单行列表工具栏（与「更换供应商」「查重」「撤订」相邻）</li>
<li><strong>成功确认弹窗</strong>：文案「催缺单生成成功，已自动过滤已收货书目」「是否立即查看？」；按钮：取消 / 确定</li>
</ul>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ol>
<li>未满足启用条件时按钮置灰不可用</li>
<li>点击后按订单号分组生成催缺单，写入催缺管理列表</li>
<li>对本次实际纳入生成的订单行，将是否催缺（isShortage）更新为「是」</li>
<li>弹出成功确认框：取消关闭；确定则跳转至催缺单管理列表（不进入催缺详情）</li>
</ol>
</div>
<div id="rules">
${f("","业务规则")}
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
${f("","异常处理")}
<ul>
<li>未勾选或不满足启用条件：按钮置灰</li>
<li>过滤后均不可生成：提示「所选订单行均已收货或已退货，无法生成催缺单」</li>
</ul>
</div>`),dp=K("5.3.5.4","查重操作入口",`
<div id="overview">
${f("","功能描述")}
<p>提供批量查重与单行查重两种操作入口，触发后弹出查重配置弹窗（见 5.3.5.5）。</p>
${f("","批量查重按钮")}
<ul>
<li>位置：订单行列表工具栏（与「生成催缺单」「更换供应商」「撤订」「导出订单行」相邻），文案「查重」</li>
<li>默认状态：置灰不可用</li>
<li>启用条件：同时满足以下条件时按钮高亮可点击：
<ol>
<li>至少勾选一条订单行</li>
<li>所勾选订单行数量<strong>不超过 50 条</strong></li>
<li>所勾选订单行均为<strong>待发订</strong>（以行状态为准）</li>
<li>所勾选订单行属于<strong>相同资源类型</strong>（取自所属订单：纸质书 / 视听资料）</li>
<li>所勾选订单行属于<strong>相同语种分类</strong>（取自所属订单：中文 / 外文）</li>
</ol></li>
<li>点击后：打开查重配置弹窗</li>
</ul>
${f("","单个查重文字链")}
<ul>
<li>位置：订单行列表操作列</li>
<li>显示条件：仅当该行行状态为<strong>待发订</strong>时显示</li>
<li>非待发订行：不显示查重文字链</li>
<li>点击后：以当前行为查重对象，打开查重配置弹窗（不受批量条数上限约束）</li>
</ul>
</div>
<div id="rules">
${f("","订单行状态（是否可查重）")}
${le(["状态","说明","是否可查重"],[[`${Ce("#d97706")}待发订`,"订单/行尚未发订","是"],[`${Ce("#16a34a")}已发订`,"已发订","否"],[`${Ce("#2563eb")}处理中`,"处理中","否"],[`${Ce("#6b7280")}已关闭`,"已关闭","否"],[`${Ce("#6b7280")}已撤订`,"已撤订","否"]])}
${f("","批量查重按钮状态")}
${le(["状态","说明"],[["不可用（置灰）","未勾选行，或勾选超过 50 条，或不满足待发订 / 同资源类型 / 同语种条件"],["可用（高亮）","勾选行均满足批量查重全部启用条件"]])}
${f("","业务规则")}
<ul>
<li>仅当订单行行状态为待发订时可查重（不以所属订单状态放宽）</li>
<li>若批量勾选数量大于 50 条，则批量「查重」按钮置灰，不可打开查重配置</li>
<li>若批量勾选行的资源类型或语种分类不一致，则批量「查重」按钮置灰</li>
<li>单行查重不受批量勾选数量与「同资源类型 / 同语种」限制，但目标行须行状态为待发订</li>
</ul>
${f("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已登录，且具备订单行列表查看权限</li>
<li><strong>后置</strong>：查重配置弹窗打开</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>若勾选超过 50 条仍触发批量查重，则提示「批量查重最多支持 50 条订单行」，不打开配置弹窗</li>
<li>若勾选含非待发订行仍触发批量查重，则提示「仅支持行状态为待发订的订单行进行查重」</li>
<li>若勾选不同资源类型或不同语种（中文/外文）混合仍触发批量查重，则提示「请勾选相同资源类型和语种（中文/外文）的待发订订单行进行查重」</li>
</ul>
</div>`),fp=K("5.3.5.5","查重配置弹窗",`
<div id="overview">
${f("","功能描述")}
<p>点击查重入口后弹出查重配置弹窗，用户选择重复类型、查重字段与查重范围后执行查重。</p>
${f("","页面要素")}
<ul>
<li><strong>显示样式</strong>：居中模态弹窗，标题「查重」；底部按钮：「取消」「确定」；点击遮罩或右上角 × 关闭弹窗</li>
<li><strong>重复类型</strong>：单选，默认「<strong>不限</strong>」
<ul>
<li><strong>不限</strong>：同时执行馆藏查重与订单查重</li>
<li><strong>订单查重</strong>：仅检查与其他订单行的重复</li>
<li><strong>馆藏查重</strong>：仅检查与馆藏书目的重复</li>
</ul></li>
<li><strong>查重字段</strong>：按待查重订单行所属订单的<strong>资源类型</strong>与<strong>语种分类</strong>展示可选字段；顶部「<strong>全部</strong>」复选框联动全选/全不选；任一字段变更时同步「全部」勾选状态。</li>
</ul>
${le(["资源类型","语种分类","可选查重字段","默认选中"],[["纸质书","中文","全部、题名、资源标识、作者、出版社、出版年","资源标识"],["纸质书","外文","全部、题名、资源标识、作者、出版社、出版年","资源标识"],["视听资料","中文","全部、题名、载体","题名、载体（默认全选）"],["视听资料","外文","全部、商品条码、目录号","商品条码、目录号（默认全选）"]])}
<ul>
<li><strong>查重范围</strong>（位于查重字段下方；<strong>仅当重复类型为「不限」或「馆藏查重」时显示</strong>；选择「订单查重」时隐藏且不提交范围）
<ul>
<li>标题旁标注：「（未选择时按不限范围查重）」</li>
<li><strong>所属分馆</strong>（branchCodes）：可搜索多选；选项来自<strong>四级馆藏地</strong>使用中分馆；展示「分馆编码 | 分馆名称」；支持全选/反选（当前过滤结果）；已选标签超出约三行高度时触发器内纵向滚动；可清空</li>
<li><strong>所属馆藏地</strong>（collectionCodes）：可搜索多选；选项来自四级馆藏地使用中馆藏地；展示「馆藏地编码 | 馆藏地名称」；已选分馆时仅展示这些分馆下馆藏地并集；<strong>未选分馆时展示全部馆藏地</strong>；变更分馆后剔除无效馆藏地；支持全选/反选与标签区滚动</li>
<li>打开弹窗时两字段默认空；均未选时按<strong>不限范围</strong>查重</li>
</ul></li>
</ul>
</div>
<div id="rules">
${f("","交互逻辑")}
<ul>
<li>选择重复类型后立即生效：切换为「订单查重」时隐藏查重范围；切换回「不限」或「馆藏查重」时重新显示（已选分馆/馆藏地保留）</li>
<li>若勾选「全部」，则选中全部字段；若取消「全部」，则全部取消；若字段勾选状态变化，则同步「全部」勾选状态</li>
<li>查重范围：支持关键字联想过滤；点选后下拉保持打开以便连续多选；未选仍允许提交；仅「不限」「馆藏查重」提交所属分馆（branchCodes）、所属馆藏地（collectionCodes）数组</li>
<li>若未选择任何查重字段，则点击「确定」阻止提交，并提示「请至少选择一个查重字段」</li>
<li>若已选查重字段在任一待查重订单行上为空，则点击「确定」阻止提交，并提示存在空字段的订单行号与字段名（请取消勾选空字段或补全数据后再查重）</li>
<li>点击「确定」：按钮进入<strong>加载中</strong>（「查重中...」+ 加载图标）；<strong>加载期间防抖</strong>，禁止重复点击，同时禁用取消、关闭及表单选项</li>
<li>查重完成后<strong>自动关闭弹窗</strong>，刷新列表馆藏重复（holdingDuplicate）、订单重复（orderDuplicate）标识列；若本轮含馆藏查重，则按自动关联规则同步更新书目记录号（bibRecordNo）（见 5.3.5.6）</li>
<li>点击「取消」或关闭：不执行查重（加载中不可关闭）</li>
</ul>
${f("","业务规则")}
<ul>
<li>所选字段采用 <strong>AND（且）</strong> 逻辑：若全部已选字段的值均非空且相等，则判定为重复</li>
<li>若比对字段为资源标识，则忽略大小写及连字符（<code>-</code>）</li>
<li>其他字段比对时忽略大小写</li>
<li>查重范围未选所属分馆与所属馆藏地时视为不限；已选值随查重配置一并提交</li>
</ul>
${f("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已通过查重操作入口进入弹窗</li>
<li><strong>后置</strong>：执行查重并更新列表标识（及可能的书目记录号），或取消关闭弹窗</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>未选择任何查重字段：阻止提交，提示「请至少选择一个查重字段」</li>
<li>已选查重字段在待查重订单行中存在空值：阻止提交，提示空字段所在订单行号与字段名</li>
<li>查重请求失败：提示「查重失败，请稍后重试」，弹窗保持打开，恢复可编辑与可关闭状态</li>
</ul>
</div>`),pp=K("5.3.5.6","查重结果展示",`
<div id="overview">
${f("","功能描述")}
<p>查重完成后，在订单行列表展示重复标识；用户可点击「有」查看详细查重结果。</p>
${f("","列表重复标识列")}
<p>列表包含两列：<strong>馆藏重复</strong>（holdingDuplicate）、<strong>订单重复</strong>（orderDuplicate）。</p>
${le(["状态","显示"],[["未查重","空白"],["无重复","「无」"],["有重复","蓝色文字链「有」，点击打开查重结果面板"]])}
${f("","查重结果面板（顶部下拉）")}
<ul>
<li>从页面<strong>顶部向下滑出</strong>，全宽展示；默认高度约视口 <strong>75%</strong>；「MARC信息」「单件」约 <strong>88%</strong></li>
<li>面板结构：标题栏 → 摘要信息区 → 页签栏 → 结果内容区（可滚动）→ 分页栏（书目/订单；MARC / 单件不占位）</li>
<li>标题：统一为「<strong>查重结果</strong>」</li>
<li>摘要区一行：订单行号、查重字段、<strong>重复记录数：馆藏 M · 订单 N</strong></li>
<li>页签顺序：书目 → MARC信息 → 单件 → <strong>订单</strong>（文案固定，不带数量）</li>
<li>入口：点馆藏重复「有」默认「书目」；点订单重复「有」默认「订单」；打开后可自由切换</li>
<li>点击遮罩或右上角 × 关闭面板</li>
</ul>
${f("","馆藏：有单件与无单件")}
<blockquote>馆藏查重比对馆藏书目库。若匹配到书目记录，则列表馆藏重复显示「有」，与单件数量是否为 0 无关。</blockquote>
${le(["维度","有单件（单件数量 &gt; 0）","无单件（单件数量 = 0）"],[["列表「馆藏重复」","有","有"],["书目列表","展示","展示"],["单件数量列","蓝色徽章「N本」","灰色徽章「0本」"],["单件页签左侧树","四层馆藏树 + 未关联馆藏（如有）","「暂无馆藏分布」"],["单件页签右侧列表","全部或按四级叶子过滤","「暂无单件信息」"],["MARC / 关联","可用","可用"]])}
<p><strong>单件数量</strong>与该书目全部关联单件数一致。未分配馆藏地单件归入「<strong>未关联馆藏</strong>」叶子。</p>
${f("","书目页签")}
<ul>
<li>列顺序：<strong>单选</strong> → <strong>单件数量</strong> → 书目字段 → <strong>操作</strong>（无行展开/馆藏树）</li>
<li>单选：默认选中当前页第一条；MARC / 单件始终展示当前单选书目</li>
<li>书目字段随资源类型 + 语种动态切换（见下表）</li>
<li>操作：「关联」/「取消关联」（通过单选 + 切换页签查看 MARC / 单件）</li>
</ul>
${le(["资源类型","语种","展示字段"],[["纸质书","中文","书目记录号、正题名、ISBN、作者、出版社、出版年、版本"],["纸质书","外文","书目记录号、题名、ISBN、责任者、出版社、出版日期、语种"],["视听资料","中文","书目记录号、题名、载体、ISBN/ISRC、出版社、版本/格式、著者"],["视听资料","外文","书目记录号、ISRC、题名、载体、商品条码、目录号、出版方"]])}
${f("","MARC信息页签")}
<ul>
<li>左右分栏（默认各 50%，可拖拽）：左订单行信息（表格列：字段名、字段内容），右当前单选书目 MARC</li>
<li>MARC 字段随语种过滤；无底部分页栏</li>
</ul>
${le(["语种","展示 MARC 字段"],[["中文","010、2XX、3XX、6XX、7XX"],["外文","020、1XX、2XX、3XX、093"]])}
${f("","单件页签")}
<ul>
<li>左右分栏：左侧馆藏树<strong>固定 20%</strong>（不可拖拽）；宽度不足时左侧出现横向滚动条；右单件列表</li>
<li>一～三级点击仅展开/收起；四级馆藏地或「未关联馆藏」点击后右侧过滤对应单件</li>
<li>未选四级叶子时右侧显示该书目全部单件；无底部分页栏</li>
<li>列：馆藏状态、条码号、索书号、所属馆、所属馆藏地、所在馆、所在馆藏地、借阅类型、卷册描述、装帧（精装/平装）、排架标引分类、排架标引、登到时间</li>
<li>馆藏状态枚举示例：编目中、已外借、订购中、剔除、损坏、在架、阅览等</li>
</ul>
${f("","订单页签")}
<ul>
<li>列表上方统计栏：发订数量、收货数量、换货数量、退货数量、撤订数量（对各结果行 flowStats 求和，与书目查询关联订单行一致）</li>
<li>表格字段：订单行号、馆址、正题名、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、发订时间</li>
<li>默认 50 条/页，可选 50 / 100 / 200；无操作列</li>
</ul>
${f("","交互与分页")}
<ul>
<li>书目页签：默认 5 条/页，可选 5 / 10 / 20 / 50</li>
<li>订单页签：默认 50 条/页，可选 50 / 100 / 200</li>
<li>MARC / 单件不展示分页栏</li>
<li>打开面板时按入口重置默认页签与对应分页</li>
</ul>
</div>
<div id="rules">
${f("","交互逻辑")}
<ul>
<li>点「有」打开统一查重结果面板（入口决定默认页签）；「无」或空白不响应</li>
<li>书目单选驱动 MARC / 单件内容；切换书目时单件四级筛选重置</li>
<li>单件树：一～三级仅展开收缩；四级叶子筛选右侧列表</li>
<li>打开结果面板时<strong>不再</strong>执行自动关联（自动关联仅在查重返回落库时处理）</li>
</ul>
${f("","业务规则")}
<ul>
<li><strong>订单查重</strong>比对范围：当前登录馆员<strong>关联订户</strong>下全部订单行（不含当前行）</li>
<li><strong>馆藏查重</strong>比对范围：馆藏书目库</li>
<li>若匹配到馆藏书目记录，则馆藏重复（holdingDuplicate）为「有」，与单件数量是否为 0 无关</li>
<li>单件数量与该书目全部关联单件数一致；若为 0，则展示灰色「0本」，单件页签左侧「暂无馆藏分布」、右侧「暂无单件信息」</li>
<li>若单件数量 &gt; 0，则单件页签展示馆藏树与单件明细；若为 0，则书目仍列在结果中，可查看 MARC 与关联</li>
<li><strong>自动关联书目</strong>：若本轮执行馆藏查重，且订单行书目记录号（bibRecordNo）为空，且本行馆藏结果非空且第一条书目记录号有效，则静默写入结果第一条；若书目记录号已有值则不覆盖；批量逐行独立处理；仅订单查重或结果为空时不执行；打开结果面板不再重复自动关联；取消关联后再查重且有结果时将再次自动关联</li>
<li>重复标识按本次查重配置的重复类型分别更新（若选择「不限」，则同时更新两列）</li>
<li>馆藏书目表格字段与 MARC 展示字段均取自查重订单行所属订单的资源类型 / 语种</li>
</ul>
<blockquote>查重与查重结果均受订户数据隔离约束，仅比对当前用户所属订户可见范围内的订单行与馆藏数据。</blockquote>
${f("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：已执行查重操作，列表标识列已更新</li>
<li><strong>后置</strong>：查重结果面板展示详细查重结果；列表书目记录号（bibRecordNo）已按自动关联规则刷新（若适用）</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>重复标识为「无」或未查重时，不响应「有」链接点击</li>
<li>结果为空时显示「暂无查重结果」，分页显示第 1/1 页</li>
<li>若点击「有」但后端数据异常，则提示「查重结果数据不存在」</li>
<li>单件页签无馆藏分布或单件数量为 0：左侧「暂无馆藏分布」、右侧「暂无单件信息」</li>
<li>单件页签已选叶子但无匹配单件：展示「暂无单件信息」</li>
<li>MARC 页签无可用书目或过滤后无字段：展示「暂无MARC信息」</li>
</ul>
</div>`),hp=K("5.3.5.7","编辑订单行",`
<div id="overview">
${f("","功能描述")}
<p>操作列「编辑」打开宽屏弹窗，修改书目及订购信息字段。</p>
${f("","可编辑字段")}
<p>ISBN、正题名、出版社、定价、币种、正文语种、载体、商品条码、目录号、套数、套内册数、书目记录号、卷数、丛编、出版地、出版年、备注</p>
</div>
<div id="rules">
<ul>
<li>币种下拉：人民币/美元/欧元</li>
<li>正文语种：日文、德文、西文、法文、俄文、英文、中文等</li>
<li>保存后更新列表行（原型 alert 演示）</li>
</ul>
</div>`),gp=K("5.3.5.8","撤订",`
<div id="overview">
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」），流程同订单撤订原因弹窗。</p>
</div>
<div id="rules">
<ul>
<li>撤订后行状态 → 已撤订，备注写入撤订原因</li>
<li>未勾选批量撤订：alert「请先勾选要撤订的订单行」</li>
</ul>
</div>`),mp=K("5.3.5.9","批量导出",`
<div id="overview">
<p>「导出订单行」下拉：导出配置 / 导出清单。导出配置字段含订单号、馆址、订单行号、正题名、ISBN、作者、出版社、行状态、验收状态、馆藏重复、订单重复等。</p>
</div>`),vp=K("5.3.5.10","实际关联书目记录号与书目详情浮动弹窗",`
<div id="overview">
${f("","功能描述")}
<p>当订单行的<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）与<strong>书目记录号</strong>（<code>bibRecordNo</code>）存在差异时，在「书目记录号」列通过「<strong>实</strong>」标记提供快捷入口：悬停浮层内点击某条记录号，以<strong>无遮罩可拖拽浮动弹窗</strong>展示该记录号的 MARC 与单件，支持多窗并排对比。</p>
</div>
<div id="ui">
${f("","「实」标记（书目记录号列旁）")}
${le(["要素","规则"],[["展示位置","订单行列表「书目记录号」列，书目记录号（bibRecordNo）旁"],["显示条件","同时满足：① 实际关联书目记录号（actualBibRecordNos）去空后至少有一条；② 其中至少有一条与书目记录号（bibRecordNo）不一致"],["不显示","实际关联书目记录号为空或均为空字符串；或全部条目均与书目记录号相同（例如仅含一条且等于书目记录号）"],["样式","浅蓝色小徽章「实」"]])}
${f("","「实」标记悬停浮层")}
<ul>
<li><strong>显示前提</strong>：已满足「实」标记显示条件（见上表）</li>
<li><strong>标题</strong>：「实际关联书目记录号」</li>
<li><strong>记录号</strong>：逐条列出全部非空实际关联书目记录号；每条为蓝色可点击链接；<strong>不提供「复制全部」</strong></li>
<li><strong>收起</strong>：鼠标离开约 0.12 秒后收起；点击记录号后不立即关闭，便于连续打开多个弹窗</li>
</ul>
${f("","书目详情浮动弹窗")}
${le(["要素","规则"],[["默认尺寸","宽 1024px × 高 520px"],["最小尺寸","宽 480px × 高 320px"],["遮罩","无；列表背景仍可操作"],["标题栏","书目记录号、订单行号（orderLineNo）、正题名（title）；可拖拽；× 关闭"],["Tab 顺序","<strong>MARC信息</strong>（默认）→ <strong>单件（N）</strong>"],["单件 Tab","N = 当前记录号在编目系统中的单件行数；无数据时为 单件（0）"],["调整尺寸","四边及四角共 8 个拖拽热区，可调整宽度与高度"]])}
</div>
<div id="interaction">
${f("","交互逻辑")}
<ol>
<li>悬停「实」→ 点击某条实际关联书目记录号 → 打开浮动弹窗，默认 MARC 页签</li>
<li>重复点击同一记录号：将已有弹窗置于最前并短暂高亮，不新建</li>
<li>同时最多 <strong>3</strong> 个不同记录号弹窗；第 4 个提示「最多同时打开 3 个书目详情弹窗，请先关闭部分弹窗」</li>
<li>每新开一窗，在上一窗基础上向右、向下各错开 32 像素</li>
<li>离开订单行列表页签时清空全部弹窗</li>
</ol>
</div>
<div id="rules">
${f("","业务规则")}
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
${f("","异常处理")}
<ul>
<li>编目无 MARC：MARC 页签展示「暂无 MARC 信息」</li>
<li>编目无单件：单件页签表格为空，Tab 为「单件（0）」</li>
<li>已有 3 个弹窗时再开新记录号：提示后拒绝新建</li>
</ul>
</div>`),bp=K("5.3.5.11","列展示配置",`
<div id="overview">
${f("","功能描述")}
<p>订单行列表工具栏右侧提供「列展示」配置，交互与订单列表一致（详见 <strong>5.2.5.9</strong>），默认固定列不同。</p>
</div>
<div id="rules">
${f("","默认固定位置")}
${le(["固定位置","默认列"],[["列首固定","序号、订单号、馆址、订单行号"],["列尾固定","操作"]])}
${f("","业务规则")}
<ul>
<li>复选框列不参与列展示，始终固定列首最左</li>
<li>序号（no）为当前页内连续序号，随分页变化</li>
<li>重置后恢复上表默认顺序与固定位置</li>
<li>其余显隐、拖拽、固定、滚动遮挡规则同 5.2.5.9</li>
</ul>
</div>`),_p=K("5.3.5.12","更换供应商",`
<div id="overview">
${f("","功能描述")}
<p>将订单行的<strong>可迁出套数</strong>迁出，生成一条待发订新订单（可同时指定新供应商、预算与撤订原因）；原行对应套数记入发/收/换/退/撤订（flowStats）的撤订段。提供两个入口：</p>
<ol>
<li><strong>行内</strong>：操作列「更换供应商」——用户填写迁出套数（1～可迁出），生成 1 条新订单 + 1 条新订单行。</li>
<li><strong>工具栏批量</strong>：勾选多行后「更换供应商」——不填套数，每行按当前可迁出套数全量迁出，生成 1 条新订单 + N 条新订单行。</li>
</ol>
<p>本入口<strong>不以是否催缺（isShortage）排除行</strong>；催缺管理侧更换供应商仍按催缺口径独立运作，两边互不替代。</p>
${f("","页面要素")}
<ul>
<li><strong>工具栏「更换供应商」</strong>：订单行列表工具栏；不满足启用条件时置灰</li>
<li><strong>行内「更换供应商」</strong>：操作列；仅满足显示条件时展示</li>
<li><strong>行内弹窗</strong>：标题「更换供应商」；确认「生成新订单」；订单名称上方只读展示「发订套数：N 已收货套数：N 已换货套数：N 已退货套数：N」；字段：订单名称、套数、供应商、预算名称、原因、备注</li>
<li><strong>批量弹窗</strong>：同上但<strong>无套数</strong></li>
<li><strong>订单名称</strong>（orderName）：必填；最多 50 字符；预填「原名-n」（见业务规则）；提交不校验重名</li>
<li><strong>套数</strong>（仅行内）：必填；默认 = 可迁出；须为 1～可迁出的整数</li>
<li><strong>供应商</strong>（supplier）：必填；默认关联订单供应商；按采选方式过滤</li>
<li><strong>预算名称</strong>（budget）：交换/捐赠可空；其余必填</li>
<li><strong>原因</strong>：必填；撤订原因参数中使用中的原因</li>
<li><strong>备注</strong>：非必填；行内默认带入原行备注</li>
<li><strong>成功确认</strong>：行内「已生成新订单 {订单号}，原行对应套数已撤订，是否立即查看？」；批量另含种数/套数/册数；取消 / 确定</li>
</ul>
</div>
<div id="interaction">
${f("","交互逻辑")}
<p><strong>行内</strong></p>
<ol>
<li>满足显示条件时操作列出现入口；点击打开弹窗并预填</li>
<li>可改订单名称、套数、供应商、预算、原因、备注；必填项字段下方即时校验</li>
<li>「生成新订单」：校验 → 建待发订新单 + 1 新行 → 回写原行撤订 → 成功确认</li>
<li>成功确认：取消关闭；确定切换「订单列表」页签</li>
</ol>
<p><strong>工具栏批量</strong></p>
<ol>
<li>未满足启用条件时按钮置灰</li>
<li>打开批量弹窗（无套数），预填首行关联订单建议名称、供应商、预算</li>
<li>「生成新订单」：校验范围与每行可迁出 ≥ 1 → 建 1 新单 + N 新行 → 回写各原行 → 成功确认（含种/套/册）</li>
<li>成功确认：取消关闭；确定切换「订单列表」页签</li>
</ol>
</div>
<div id="rules">
${f("","可迁出套数")}
<blockquote>可迁出套数 = max(0, 发订 − 已收 − 已退 − 已换)</blockquote>
<ul>
<li>已换、已收、已退套数不迁出</li>
<li>提交前重算；填写套数大于可迁出则提示「可迁出套数不足，请重新填写」并中止</li>
</ul>
${f("","默认订单名称")}
<ul>
<li>原名取关联订单订单名称（orderName）；空则用「新订单」</li>
<li>扫描全部已有订单中精确匹配「原名-数字」的名称，取最大序号 + 1；无匹配则为 1（不回填空洞）</li>
<li>示例：已有「专题采购-1」「专题采购-3」→ 建议「专题采购-4」</li>
<li>最终 ≤ 50 字符；提交不校验重名</li>
</ul>
${f("","行内显示条件（须全部满足）")}
<ol>
<li>行状态（lineStatus）为「已发订」或「处理中」</li>
<li>验收状态（acceptanceStatus）为「待验收」「部分收货」或「换货中」</li>
<li>可迁出套数 ≥ 1</li>
</ol>
<p>不因是否催缺隐藏入口。</p>
${f("","工具栏启用条件（须全部满足）")}
<ol>
<li>至少勾选 1 行</li>
<li>行状态均为「已发订」或「处理中」</li>
<li>订户、资源类型、语种、采选方式相同（订户/采选方式取自关联订单）</li>
</ol>
<p>不要求同一订单号；启用时不校验验收状态或可迁出；提交时若某行可迁出 &lt; 1 则报错中止（不跳过）。</p>
${f("","新订单与原行")}
<ul>
<li>每次操作生成恰好 1 条待发订新订单；抬头继承关联订单，覆盖弹窗中的名称/供应商/预算/备注</li>
<li>行内：1 新行，套数 = 填写套数；批量：每勾选行 1 新行，套数 = 该行可迁出</li>
<li>新行状态待发订；是否催缺为「否」；书目字段自原行复制</li>
<li>原行撤订段累加迁出套数；原因 = 弹窗所选原因（不打开撤订原因弹窗）</li>
<li>若发订全部进入撤订 → 行状态「已撤订」；若仍有已收等 → 按更新后流转统计重算</li>
</ul>
${f("","与催缺更换供应商边界")}
${le(["入口","适用行","数量口径"],[["订单行列表行内 / 工具栏「更换供应商」","不按是否催缺排除","可迁出 = 发订 − 已收 − 已退 − 已换；行内可指定部分套数"],["催缺管理「更换供应商」/ 撤订","已催缺相关行","撤订套数 = max(催缺套数 − 到货套数, 0)"]])}
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>行不满足显示条件：操作列不展示入口</li>
<li>批量勾选范围不一致 / 行状态不符：工具栏按钮置灰</li>
<li>套数非法：字段提示「请填写合法套数（1～可迁出）」</li>
<li>缺订单名称 / 供应商 / 应填预算 / 原因：字段下方红色提示</li>
<li>某勾选行可迁出 = 0：提示该行无可迁出并中止（不部分成功）</li>
<li>未找到原订单 / 订单行不存在：提示无法生成</li>
<li>无可选撤订原因：下拉禁用并提示先在设置中配置</li>
</ul>
</div>`),Sp={title:"非连续出版物订单",tabs:{"order-list":{label:"订单列表",itemIds:["5.2.5.1","5.2.5.2","5.2.5.3","5.2.5.4","5.2.5.5","5.2.5.6","5.2.5.7","5.2.5.8","5.2.5.9"]},"order-line":{label:"订单行列表",itemIds:["5.3.5.1","5.3.5.2","5.3.5.3","5.3.5.4","5.3.5.5","5.3.5.6","5.3.5.7","5.3.5.8","5.3.5.9","5.3.5.10","5.3.5.11","5.3.5.12"]}},items:[{id:"5.2.5.1",title:"筛选查询",tab:"order-list",htmlContent:Zf},{id:"5.2.5.2",title:"数据表格与行操作",tab:"order-list",htmlContent:ep},{id:"5.2.5.3",title:"新建订单弹窗",tab:"order-list",htmlContent:tp},{id:"5.2.5.4",title:"编辑订单弹窗",tab:"order-list",htmlContent:ip},{id:"5.2.5.5",title:"发订",tab:"order-list",htmlContent:np},{id:"5.2.5.6",title:"导入订单",tab:"order-list",htmlContent:rp},{id:"5.2.5.7",title:"撤订与删除",tab:"order-list",htmlContent:sp},{id:"5.2.5.8",title:"批量导出",tab:"order-list",htmlContent:lp},{id:"5.2.5.9",title:"列展示配置",tab:"order-list",htmlContent:op},{id:"5.3.5.1",title:"筛选查询",tab:"order-line",htmlContent:cp},{id:"5.3.5.2",title:"数据表格与行操作",tab:"order-line",htmlContent:ap},{id:"5.3.5.3",title:"生成催缺单",tab:"order-line",htmlContent:up},{id:"5.3.5.4",title:"查重操作入口",tab:"order-line",htmlContent:dp},{id:"5.3.5.5",title:"查重配置弹窗",tab:"order-line",htmlContent:fp},{id:"5.3.5.6",title:"查重结果展示",tab:"order-line",htmlContent:pp},{id:"5.3.5.7",title:"编辑订单行",tab:"order-line",htmlContent:hp},{id:"5.3.5.8",title:"撤订",tab:"order-line",htmlContent:gp},{id:"5.3.5.9",title:"批量导出",tab:"order-line",htmlContent:mp},{id:"5.3.5.10",title:"实际关联书目记录号与书目详情浮动弹窗",tab:"order-line",htmlContent:vp},{id:"5.3.5.11",title:"列展示配置",tab:"order-line",htmlContent:bp},{id:"5.3.5.12",title:"更换供应商",tab:"order-line",htmlContent:_p}]};function yp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-manage"]=Sp}const Cp=K("5.4.5.1","书目信息",`
<div id="overview">
${f("","功能描述")}
<p>页面顶部展示当前订单行书目信息，采用可折叠卡片布局，默认<strong>展开</strong>。左侧为封面占位区，右侧为<strong>三列网格</strong>展示书目字段；字段集合与顺序由<strong>资源类型 + 语种</strong>决定，全部字段均展示（值为空时显示空白）。</p>
${f("","页面要素")}
<ul>
<li><strong>折叠标题栏</strong>：左侧「书目信息」，右侧「收起/展开」文字链</li>
<li><strong>封面区</strong>：100×140px；有<strong>封面图地址</strong>（<code>coverUrl</code>）时展示图片，否则展示默认书籍 SVG 占位</li>
<li><strong>资源类型 / 语种</strong>：封面下方居中展示</li>
<li><strong>书目字段</strong>：三列网格；一般性附注、图书简介、备注、书评、作者简介、目次信息、馆藏信息等长文本字段占 3 列宽</li>
</ul>
</div>
<div id="fields">
${f("","字段展示规则（按资源类型 / 语种，顺序固定）")}
${f("","纸质书 · 中文")}
<p>正题名、ISBN、副题名、分卷号、分卷名、分类号、出版社、作者、出版年、定价、版本、丛编、主题词、读者对象、装帧形式、尺寸、正文语种、卷数、出版地、一般性附注、图书简介、备注</p>
${f("","纸质书 · 外文")}
<p>ISBN、学科大类、学科细分、中图分类号、中译名、题名、副题名、责任者、丛编、出版社、装帧形式、出版日期、版次、页数、币种、价格、主题词、读者对象、尺寸、语种、简介、精简装ISBN对照、馆藏信息、审读级别、获奖信息、目次信息、分卷号、分卷名、作者简介、书评、备注</p>
${f("","视听资料 · 中文")}
<p>ISBN、ISRC、题名、载体、出版社、版本/格式、著者、币种、码洋、彩胶颜色、限量编号、厂牌、系列名称、是否签名、是否老唱片、获奖信息、北京出版社、分类、盘号、老唱片品牌、剧种、年代、备注</p>
${f("","视听资料 · 外文")}
<p>ISRC、题名、载体、商品条码、目录号、外文原文题名、出版方、码洋、币种、备注、厂牌</p>
<blockquote>语种取自所属订单的<strong>语种</strong>字段（<code>language</code>，中文 / 外文）。</blockquote>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>点击标题栏任意区域切换展开/收起</li>
</ul>
</div>`),Tp=K("5.4.5.2","业务 Tab 页签",`
<div id="overview">
${f("","功能描述")}
<p>书目信息下方为业务 Tab 容器，用于切换查看订单行关联业务数据。Tab 顺序固定，默认激活<strong>相关订单行（N）</strong>。</p>
${f("","Tab 列表")}
<ol>
<li><strong>相关订单行（N）</strong>（默认）：N 为相关订单行表格总行数（含当前行），无数据时为 0</li>
<li><strong>验收记录（N）</strong>：N 为验收记录表格总行数，无数据时为 0</li>
<li><strong>结算记录（N）</strong>：N 为结算记录表格总行数，无数据时为 0</li>
<li><strong>单件（N）</strong>：N 为合并后单件总行数，无数据时为 0</li>
<li><strong>MARC信息</strong>（不加数量）</li>
</ol>
<p>前四个页签的 N 随对应表格总行数自动刷新（与分页无关）；无数据时显示「名称（0）」。</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>点击 Tab 按钮切换下方内容区，当前 Tab 高亮（底部蓝色边框）</li>
<li>切换 Tab 不刷新书目信息区；各 Tab 内分页状态独立保持</li>
</ul>
</div>`),Rp=K("5.4.5.3","相关订单行",`
<div id="overview">
${f("","功能描述")}
<p>展示与当前订单行<strong>书目匹配</strong>的其他订单行记录，<strong>包含当前订单行本身</strong>。数据范围限定为当前登录馆员<strong>关联订户可查看范围</strong>内的订单行，按发订时间倒序排列。</p>
${f("","表格列")}
<p>序号、订户、订单行号、采购方式、预算名称、供应商、折扣、发订人、发订时间</p>
</div>
<div id="rules">
${f("","书目匹配规则")}
${le(["资源类型","语种","匹配条件"],[["纸质书","—","资源标识（ISBN）<strong>且</strong> 正题名均相同"],["视听资料","中文","正题名 <strong>且</strong> 载体均相同"],["视听资料","外文","商品条码 <strong>且</strong> 目录号均相同"]])}
<ul>
<li>订户范围：取系统<strong>可查看订户范围</strong>配置（<code>viewableSubscribers</code>），仅展示馆员有权查看的订户订单行</li>
<li>发订人、发订时间为空时展示空白</li>
<li><strong>订单行号</strong>为普通文本，<strong>不可点击跳转</strong></li>
</ul>
</div>
<div id="interaction">
${f("","交互与分页")}
<ul>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
<li>无匹配数据时表格为空</li>
</ul>
</div>`),Ap=K("5.4.5.4","验收记录",`
<div id="overview">
${f("","功能描述")}
<p>展示当前订单行关联的验收汇总记录（按种维度）。从验收模块按订单行号匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段构造。</p>
${f("","表格列")}
<p>序号、订单行号、ISBN（视听为 ISBN/ISRC）、正题名、作者、定价、币种、发/收/换/退套数、最近一次验收时间、最近一次验收人</p>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>发/收/换/退套数格式：<code>发订/收货/换货/退货</code>，数据来源于验收模块</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>默认每页 50 条；有数据时显示分页，通常仅 1 条记录</li>
<li>表格不可勾选</li>
</ul>
</div>`),xp=K("5.4.5.5","结算记录",`
<div id="overview">
${f("","功能描述")}
<p>展示当前订单行结算明细。从结算模块按<strong>订单行号</strong>（<code>orderLineNo</code>）匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段推算。</p>
${f("","表格列")}
<p>复用「已结算」列表字段：序号、订单行号、正题名、资源标识、作者、出版社、定价、币种、实洋、套内册数、结算套数、结算册数、结算金额等。</p>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>系统在结算模块已结算数据中，按订单行号精确查找当前行的结算记录</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>`),Ep=K("5.4.5.6","单件（N）",`
<div id="overview">
${f("","功能描述")}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询单件（馆藏件）并汇总展示。页签文案为 <strong>单件（N）</strong>，N 为合并后的单件总行数（表格一行计 1 条）。</p>
${f("","Tab 标签规则")}
<ul>
<li>页签文案为「单件（N）」，N 等于下方单件表格的总行数</li>
<li>编目无单件时显示 <strong>单件（0）</strong></li>
<li>切换订单行或编目数据变化时，N 随最新查询结果自动刷新</li>
</ul>
${f("","表格列")}
<p>序号（01 格式）、条码号、索书号、所属馆、所属馆藏地、所在馆藏地、借阅类型、卷册描述、登到日期</p>
</div>
<div id="rules">
${f("","单件查询逻辑")}
<ol>
<li>若订单行存在<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值），则逐条向编目系统查询单件，合并为一张表格（一般用于多卷书各卷记录）。</li>
<li>若不存在实际关联书目记录号，则使用<strong>书目记录号</strong>（<code>bibRecordNo</code>）作为唯一条件查询单件。</li>
<li>合并后的总行数即为页签 N，例如 10 行则显示「单件（10）」。</li>
</ol>
${f("","展示规则")}
<ul>
<li>所在馆藏地、卷册描述为空时单元格留空</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
<li>无单件数据时表格为空，页签仍为「单件（0）」</li>
</ul>
</div>
<div id="interaction">
${f("","交互与分页")}
<ul>
<li>切换至本 Tab 时按上述规则加载/刷新单件列表</li>
<li>分页切换不影响页签 N（N 为全部合并结果的总行数，非当前页条数）</li>
</ul>
</div>`),Ip=K("5.4.5.7","MARC信息",`
<div id="overview">
${f("","功能描述")}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询 MARC 字段；无实际关联时回退<strong>书目记录号</strong>。列表上方提供书目记录号下拉框，默认选中第一个，切换后刷新 MARC 表格。</p>
${f("","页面要素")}
<ul>
<li><strong>书目记录号下拉框</strong>：位于 MARC 表格上方；选项为可查询的书目记录号列表</li>
<li><strong>MARC 表格</strong>：列「字段名」「指示符」「字段内容」，最大高度 480px 可滚动</li>
<li>无可用书目记录号或无 MARC 数据时居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="rules">
${f("","书目记录号下拉框规则")}
<ul>
<li>若存在<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）：下拉框列出其全部有效记录号，供切换查看各卷 MARC</li>
<li>若不存在实际关联书目记录号，但<strong>书目记录号</strong>（<code>bibRecordNo</code>）有值：下拉框仅含书目记录号一项</li>
<li>进入详情或切换订单行时，下拉框默认选中<strong>第一项</strong>，并据此刷新 MARC 表格</li>
</ul>
<blockquote>下拉框标签文案为「书目记录号」，选项值为实际用于查编目的记录号（含实际关联书目记录号）。</blockquote>
${f("","MARC 展示规则")}
<ul>
<li>切换下拉选项后，下方 MARC 表格即时刷新，无需额外确认</li>
<li>展示格式与书目查询页 MARC 详情一致（如 010、200、210 等 CNMARC 字段）</li>
<li>无可用记录号或无 MARC 数据时，居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>用户切换下拉选项即可查看对应记录号的 MARC 著录</li>
</ul>
</div>`),wp={title:"订单行详情",tabs:{related:{label:"相关订单行（N）",itemIds:["5.4.5.1","5.4.5.2","5.4.5.3"]},acceptance:{label:"验收记录（N）",itemIds:["5.4.5.4"]},settlement:{label:"结算记录（N）",itemIds:["5.4.5.5"]},items:{label:"单件（N）",itemIds:["5.4.5.6"]},marc:{label:"MARC信息",itemIds:["5.4.5.7"]}},items:[{id:"5.4.5.1",title:"书目信息",tab:"related",htmlContent:Cp},{id:"5.4.5.2",title:"业务 Tab 页签",tab:"related",htmlContent:Tp},{id:"5.4.5.3",title:"相关订单行",tab:"related",htmlContent:Rp},{id:"5.4.5.4",title:"验收记录",tab:"acceptance",htmlContent:Ap},{id:"5.4.5.5",title:"结算记录",tab:"settlement",htmlContent:xp},{id:"5.4.5.6",title:"单件（N）",tab:"items",htmlContent:Ep},{id:"5.4.5.7",title:"MARC信息",tab:"marc",htmlContent:Ip}]};function Np(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-line-detail"]=wp}const $p=K("5.5.5.1","关联订单行列表",`
<div id="overview">
${f("","功能描述")}
<p>在书目查询页下方单件区切换至<strong>关联订单行</strong>页签后，先校验当前登录馆员是否有关联订户；若已关联，则按当前选中书目的书目记录号（bibRecordNo）查询关联订单行——若订单行存在非空的实际关联书目记录号（actualBibRecordNos），则<strong>优先</strong>按实际关联书目记录号匹配，否则按书目记录号匹配——并仅展示当前馆员<strong>关联订户范围内</strong>、且行状态不为「已撤订」的结果，同时提供发/收/换/退/撤订数量汇总及「新建订单」「加入订单」入口。</p>
${f("","页面要素")}
<ul>
<li><strong>页签标题</strong>：关联订单行(N)，N 为当前书目在馆员关联订户范围内的关联订单行条数</li>
<li><strong>工具栏</strong>：新建订单、加入订单</li>
<li><strong>统计栏</strong>：发订数量、收货数量、换货数量、退货数量、撤订数量</li>
<li><strong>表格列</strong>：序号、订单号、馆址、订单行号、正题名、资源标识、载体、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、验收状态、结算状态、发订时间</li>
</ul>
${f("","交互逻辑")}
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
${f("","订户校验")}
<ul>
<li>若用户切换至「关联订单行」页签，则须校验当前登录馆员是否有关联订户</li>
<li>若当前登录馆员未关联任何订户，则弹窗提示「您没有关联订户，无法查看数据」，且不加载列表数据</li>
</ul>
${f("","数据范围")}
<ul>
<li>若当前登录馆员已关联订户，则以其关联订户作为本页数据范围</li>
<li>若用户选中书目且已通过订户校验，则按下列规则匹配订单行，且所属订单订户（subscriber）须落在馆员关联订户范围内，且行状态（lineStatus）不为「已撤订」：</li>
</ul>
<ol>
<li>若订单行的<strong>实际关联书目记录号</strong>（actualBibRecordNos）非空，则仅当其中任一条与当前选中书目的书目记录号（bibRecordNo）一致时纳入列表（<strong>不再</strong>按书目记录号匹配）</li>
<li>若实际关联书目记录号为空，则仅当订单行的书目记录号（bibRecordNo）与当前选中书目一致时纳入列表</li>
</ol>
${f("","行状态过滤")}
<ul>
<li>列表不展示行状态为「已撤订」的订单行</li>
</ul>
${f("","排序规则")}
<ol>
<li>若订单行无发订时间（issueTime），则排在列表<strong>最上方</strong></li>
<li>若订单行有发订时间，则按发订时间<strong>从新到旧</strong>排列</li>
<li>若发订时间相同，则按订单行号（orderLineNo）<strong>从小到大</strong>排列</li>
</ol>
<blockquote>上述排序规则与「非连续出版物订单-订单行列表」保持一致。</blockquote>
${f("","统计汇总")}
<p>发/收/换/退/撤订数量由各行流转统计（flowStats，格式为「发/收/换/退/撤」五段数字）分别累加得出。</p>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>若当前登录馆员未关联订户，则弹窗提示「您没有关联订户，无法查看数据」，列表展示相同空状态文案</li>
<li>若无书目选中，则展示空状态「请先选中书目」</li>
<li>若已选中书目但无符合范围的关联数据，则展示空状态「暂无关联订单行」</li>
</ul>
</div>`),kp=K("5.5.5.2","新建订单弹窗",`
<div id="overview">
${f("","功能描述")}
<p>在关联订单行页签点击<strong>新建订单</strong>，为当前选中书目创建订单。若用户选择多个馆址，则每个馆址各生成一个订单号。<strong>订户、资源类型、预算名称</strong>的可选范围受当前登录馆员关联订户约束。关闭弹窗后保留上次填写内容，再次打开时可恢复。</p>
${f("","表单字段")}
${le(["字段","必填","说明"],[["订单名称（orderName）","是","文本；最多 50 个字符；占位「请输入，50字符以内」"],["订户（subscriber）","是","下拉；可选范围为当前馆员关联订户（使用中）"],["资源类型（resourceType）","是","下拉；须先选订户；选项为所选订户主数据中的资源类型"],["采选方式（method）","是","下拉：捐赠/现采/交存/交换/拍卖"],["预算名称（budget）","条件","须先选订户；选项为所选订户主数据中的预算名称；交换或捐赠时非必填且不可选"],["语种（language）","是","下拉；打开时按书目 MARC 格式预填：CNMARC 为中文，否则为外文"],["供应商（supplier）","是","下拉；随采选方式联动，见业务规则"],["折扣（discount）","否","文本；选择供应商后默认带出，可修改；若填写则须大于 0 且小于等于 1，最多两位小数"],["馆址（sites）","是","多选；至少选一个馆址"]])}
</div>
<div id="rules">
${f("","订户与字段范围")}
<ul>
<li>若当前登录馆员未关联任何订户，则点击「新建订单」时提示「您没有关联订户，无法新建订单」，且不打开弹窗</li>
<li>订单名称（orderName）必填；最多 50 个字符；未填提示「请输入订单名称」，超长提示「订单名称不能超过50个字符」</li>
<li>订户（subscriber）下拉仅展示当前馆员关联订户（使用中）</li>
<li>若用户已选订户，则资源类型（resourceType）下拉仅展示该订户主数据中配置的资源类型；未选订户时下拉禁用，提示「请先选择订户」</li>
<li>若用户已选订户，则预算名称（budget）下拉仅展示该订户主数据中配置的预算名称；未选订户时下拉禁用（交换或捐赠采选方式下仍禁用预算）</li>
<li>若用户切换订户，且已选资源类型或预算不在新订户允许范围内，则清空对应字段</li>
<li>若书目 MARC 格式为 CNMARC，则预填语种「中文」；否则预填「外文」；无法解析 MARC 格式时不预填</li>
</ul>
${f("","供应商与采选方式")}
<ul>
<li>若未选择采选方式，则供应商下拉禁用，提示「请先选择采选方式」</li>
<li>若用户切换采选方式，且当前供应商不在新列表中，则清空供应商（supplier）与折扣（discount）</li>
</ul>
${le(["采选方式","可选供应商范围"],[["现采","代理商应用中类型为书商且状态为使用中的供应商"],["交存","出版社管理应用中状态为使用中的出版社"],["捐赠","个人管理中类型为捐赠的捐赠人，与资源商管理中类型为团体捐赠的单位，合并展示"],["交换","资源商管理应用中类型为交换且状态为使用中的单位"],["拍卖","代理商应用中类型为拍卖行且状态为使用中的供应商"]])}
${f("","预算名称")}
${le(["采选方式","预算名称（budget）"],[["交换 / 捐赠","非必填（隐藏必填星号）、下拉禁用；切换至该方式时清空已选值"],["其他采选方式","必填，可编辑"]])}
${f("","折扣")}
<ul>
<li>若用户选择供应商，则折扣（discount）默认取该供应商在主数据中配置的默认值</li>
<li>用户可手动修改折扣；若再次切换供应商，则折扣更新为新供应商的默认值</li>
<li>若用户填写折扣，则须为大于 0 且小于等于 1 的数值，最多两位小数；若不满足则提示并阻止提交</li>
<li>若从上次关闭时的缓存恢复表单，则保留用户已修改的折扣，不因恢复而覆盖</li>
<li>若供应商为捐赠类，则默认折扣可为空</li>
</ul>
${f("","提交与订单号")}
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
${f("","异常处理")}
<ul>
<li>若当前登录馆员未关联订户，则提示「您没有关联订户，无法新建订单」</li>
<li>若订单名称未填，则提示「请输入订单名称」</li>
<li>若订单名称超过 50 个字符，则提示「订单名称不能超过50个字符」</li>
<li>若缓存中的订户、资源类型或预算不在当前馆员允许范围内，则恢复时清空无效字段</li>
<li>若缓存中的供应商与当前采选方式不匹配，则恢复时清空供应商与折扣</li>
<li>若缓存中的采选方式为交换或捐赠，则恢复时清空预算名称</li>
</ul>
</div>`),Op=K("5.5.5.3","加入订单弹窗",`
<div id="overview">
${f("","功能描述")}
<p>将当前选中书目加入一个或多个<strong>待发订</strong>订单；一次提交为每条勾选订单各生成一条订单行（原型以提示框演示）。弹窗自上而下分三区：检索与订单列表、馆址分配、共用字段（币种 / 定价 / 套内册数 / 备注）。</p>
${f("","前置条件")}
<ul>
<li>用户已选中书目；未选中时提示「请先选中书目」</li>
<li>若当前登录馆员未关联任何订户，则提示「您没有关联订户，无法加入订单」，且不打开弹窗</li>
</ul>
</div>
<div id="candidates">
${f("","候选订单范围")}
<ul>
<li>仅包含订单状态为<strong>待发订</strong>、且订户（subscriber）落在馆员关联订户范围内的订单</li>
<li>若书目可映射出语种（language），则候选订单还须与映射语种一致；若无法映射语种，则不按语种过滤，默认展示上述范围内的全部待发订订单</li>
</ul>
</div>
<div id="search">
${f("","检索区")}
${le(["控件","规则"],[["订单号（orderId）","文本；占位「精确匹配」；若输入订单号，则与列表订单号做精确匹配（不区分大小写）；条件变更不自动检索，须点击「检索」"],["采选方式（method）","下拉：全部 / 捐赠 / 现采 / 交存 / 交换 / 拍卖（不含征订目录）"],["供应商（supplier）","下拉：全部，或当前候选订单列表中出现过的供应商"],["检索","点击后按上述条件过滤列表"],["重置","清空三个条件并恢复全量候选列表"]])}
<p>列表默认按订单创建时间（createTime）<strong>从新到旧</strong>排列。</p>
</div>
<div id="list">
${f("","订单列表（上区）")}
<ul>
<li>支持多选；选中行以浅黄色背景高亮</li>
<li>若勾选多条订单，则须为相同资源类型（resourceType）与语种（language）；否则提示「请勾选相同资源类型和语种的待发订订单」，且不勾选该订单</li>
<li>表头固定，列表区域可纵向滚动；列较多时可横向滚动</li>
<li>列表<strong>不含套数列</strong>；套数仅在中区馆址行填写</li>
</ul>
${le(["列","说明"],[["勾选","绑定订单号（orderId）"],["订单号（orderId）","只读展示"],["订单名称（orderName）","只读；过长时截断，悬停展示全文；为空时展示「—」"],["订户 / 馆址 / 采选方式 / 资源类型 / 语种 / 供应商","只读展示"],["预算名称（budget）","过长时截断，悬停展示全文"],["折扣（discount）","只读"],["发订状态","展示待发订等状态文案"],["创建时间（createTime）","只读；列表按此字段倒序"]])}
${f("","空状态")}
<ul>
<li>若无任何候选订单，则展示「暂无匹配的待发订订单」</li>
<li>若检索后无匹配结果，则展示「未找到符合条件的订单」</li>
</ul>
</div>
<div id="site">
${f("","馆址分配（中区）")}
<ul>
<li>若未勾选任何订单，则展示「请先在上方的列表中选择订单」</li>
<li>若勾选 N 条订单，则展示 N 行馆址行；馆址（site）只读，取自对应订单；下方灰色小字展示订单号（orderId）</li>
<li>套数（sets）为大于等于 0 的整数输入，默认 1，可修改；馆址行顺序与上方列表一致（按创建时间从新到旧）</li>
<li>若取消勾选某订单，则移除对应馆址行；若再次勾选，则套数优先从上次关闭时的缓存恢复</li>
</ul>
</div>
<div id="form">
${f("","共用表单（下区）")}
${le(["字段","必填","规则"],[["币种（currency）","条件","下拉选项取自【货币信息】中状态为「使用中」的货币代码（展示货币代码）；默认优先 CNY（若仍为使用中），否则取第一项使用中货币；若所选订单为纸质书且语种为外文，则必填；其他情况选填"],["定价（price）","条件","若所选订单为纸质书且语种为外文，则必填，须为有效数值且最多两位小数；其他情况选填，若填写则格式同上"],["套内册数（copiesInSet）","否","正整数，默认 1；若填写则须为正整数"],["备注（remark）","否","多行文本，最多 500 个字符"]])}
<p>币种、定价、套内册数、备注一次填写，作用于全部勾选订单中套数大于 0 的记录。</p>
</div>
<div id="cache">
${f("","缓存恢复")}
<ul>
<li>打开弹窗时恢复上次检索条件、勾选订单、馆址套数及共用字段</li>
<li>若缓存中的采选方式不在可选范围内（如含征订目录），则回退为「全部」</li>
<li>若缓存中的币种已停用或不存在，则回退为默认使用中货币代码</li>
<li>关闭弹窗时保存上述内容，供下次打开恢复</li>
</ul>
</div>
<div id="rules">
${f("","提交校验")}
<ol>
<li>若未勾选任何订单，则提示「请至少选择一个订单」</li>
<li>若勾选订单的资源类型或语种不一致，则提示「请勾选相同资源类型和语种的待发订订单」</li>
<li>若所选订单为纸质书且语种为外文，则币种（currency）与定价（price）必填；定价未填或格式无效时提示「请输入定价」或「定价须为有效数值，最多两位小数」；币种未选时提示「请选择币种」</li>
<li>若任一行套数（sets）不是大于等于 0 的整数，则提示「请为每个馆址填写有效套数」</li>
<li>若所有行套数均为 0，则提示「请至少为一个馆址填写大于0的套数」</li>
<li>若套内册数（copiesInSet）已填但不是正整数，则提示「套内册数须为正整数」</li>
<li>若备注（remark）超过 500 个字符，则提示「备注最多500个字符」</li>
</ol>
${f("","提交结果")}
<ul>
<li>校验通过后，为每条勾选且套数大于 0 的订单各生成一条关联订单行（当前原型以提示框演示）</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
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
</ul>
</div>`),Pp={title:"书目查询",tabs:{"related-order":{label:"关联订单行",itemIds:["5.5.5.1","5.5.5.2","5.5.5.3"]}},items:[{id:"5.5.5.1",title:"关联订单行列表",tab:"related-order",htmlContent:$p},{id:"5.5.5.2",title:"新建订单弹窗",tab:"related-order",htmlContent:kp},{id:"5.5.5.3",title:"加入订单弹窗",tab:"related-order",htmlContent:Op}]};function Mp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["bib-query"]=Pp}const Ws=K("5.6.5.1","验收单头信息",`
<div id="overview">
${f("","功能描述")}
<p>页面顶部展示当前验收单摘要信息，含基础属性与汇总指标。嵌入抽屉打开时布局与独立页一致（无面包屑）。</p>
${f("","页面要素")}
<ul>
<li>网格展示字段：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）、语种（language）、发货单号（shipNo）、供应商（supplier）</li>
<li>验收备注（acceptanceRemark）单独占满一行</li>
<li>汇总行：总种数（totalSpecies）、总册数（totalVolumes）、总码洋（totalListPrice）、总实洋（totalNetPrice）</li>
</ul>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li><strong>总种数</strong>（totalSpecies）：取当前验收单按种明细行数</li>
<li><strong>总册数 / 总码洋 / 总实洋</strong>：按资源类型展示（纸质书与视听资料分别有对应汇总值；原型阶段为按类型固定展示，与页面实现一致）</li>
<li>无验收单上下文时，头信息使用默认占位值</li>
</ul>
</div>
`),qs=K("5.6.5.2","按种 / 按册页签",`
<div id="overview">
${f("","功能描述")}
<p>头信息下方提供「按种」「按册」两个页签，切换明细视角与导出配置。</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>默认进入<strong>按种</strong>；URL 带 <code>view=volume</code> 时进入按册</li>
<li>切换页签更新表格列、筛选字段、导出按钮文案与导出配置字段集；分页回到第 1 页</li>
<li>按册工具栏旁提示文案：「仅提供收货详情」</li>
</ul>
</div>
`),zs=K("5.6.5.3","筛选查询",`
<div id="overview">
${f("","功能描述")}
<p>按当前页签与资源类型展示检索条件；支持检索、重置与展开附加条件。</p>
</div>
<div id="fields">
${f("","按种 · 纸质书")}
<p>组合检索（ISBN / 作者 / 正题名 / 订单行号）+ 验收人 + 验收时间（开始/结束日期）</p>
${f("","按种 · 视听资料")}
<p>组合检索（ISBN/ISRC / 题名 / 作者 / 商品条码 / 目录号 / 载体 / 订单行号）+ 验收人 + 验收时间（开始/结束日期）</p>
${f("","按册 · 纸质书")}
<p>组合检索（条码号 / ISBN / 作者 / 正题名）+ 收货人 + 收货时间（开始/结束日期）</p>
${f("","按册 · 视听资料")}
<p>组合检索（条码号 / ISBN/ISRC / 题名 / 作者 / 商品条码 / 目录号 / 载体）+ 收货人 + 收货时间（开始/结束日期）</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>点击「检索」按条件过滤当前页签明细并回到第 1 页</li>
<li>点击「重置」清空条件并恢复当前页签全量明细</li>
</ul>
</div>
`),Dp=K("5.6.5.4","按种明细表格与操作",`
<div id="overview">
${f("","功能描述")}
<p>按种维度展示验收汇总行；验收单状态为<strong>进行中</strong>时可对行执行撤销收货 / 撤销换货 / 撤销退货。</p>
${f("","表格列（纸质书）")}
<p>序号、订单行号、ISBN、正题名、作者、定价、币种、发/收/换/退数、最近一次验收时间、最近一次验收人、换/退/撤销收货原因、操作</p>
${f("","表格列（视听资料）")}
<p>在纸质书基础上增加载体、商品条码、目录号、套内件数等视听字段（以页面列为准）</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>换/退/撤销原因为空或不可用时显示「—」；有内容时「查看」悬停展示全文</li>
<li>仅当验收单状态为进行中且页签为按种时显示操作：有收货套数可「撤销收货」；有换货套数可「撤销换货」；有退货套数可「撤销退货」；均无则「—」</li>
<li>撤销换货 / 退货：确认后清零对应套数并刷新原因文案</li>
<li>撤销收货：打开撤销收货弹窗（见 5.6.5.7）</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
`),Lp=K("5.6.5.5","按册明细表格",`
<div id="overview">
${f("","功能描述")}
<p>按册（收货单件）维度展示收货明细；本页签<strong>不提供</strong>撤销收货/换货/退货操作。</p>
${f("","表格列（纸质书）")}
<p>序号、条码号、ISBN、正题名、作者、定价、币种、实洋、单册定价、套内册数、收货人、收货时间</p>
${f("","表格列（视听资料）")}
<p>序号、条码号、ISBN/ISRC、载体、题名、商品条码、目录号、作者、定价、实洋、币种、套内件数、收货人、收货时间</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>操作列固定展示「—」</li>
<li>分页规则同按种</li>
</ul>
</div>
`),Xs=K("5.6.5.6","导出明细与导出配置",`
<div id="overview">
${f("","功能描述")}
<p>工具栏下拉提供「导出明细」「导出配置」。按种按钮文案为「导出验收明细」，按册为「导出收货明细」。按种与按册为<strong>两套独立导出配置</strong>；配置弹窗仅展示<strong>当前验收单资源类型</strong>（纸质书或视听资料）对应字段，左侧类型标签不可切换另一类型。</p>
</div>
<div id="ui">
${f("","导出配置弹窗 UI")}
<ul>
<li>左侧：当前资源类型标签（高亮）</li>
<li>右侧：全选；上方为验收单头字段；分隔线下方为明细字段；六列网格勾选</li>
<li>打开时默认全选当前类型全部字段；确定保存勾选结果（原型提示已保存字段数）</li>
</ul>
</div>
<div id="header-fields">
${f("","共用头字段（按种 / 按册 · 纸质书 / 视听）")}
<p>验收单号、验收单名称、资源类型、语种、供应商、发货单号、总码洋、总实洋、折扣率、总种数、总册数、创建人、创建时间、验收备注</p>
</div>
<div id="species-detail">
${f("","按种 · 纸质书明细字段")}
<p>订单行号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、套内册数、发订套数、收货套数、<strong>收货册数</strong>、换货套数、退货套数</p>
${f("","按种 · 视听资料明细字段")}
<p>ISBN、ISRC、商品条码、目录号、载体、题名、著者、码洋、币种、实洋、出版社、版本/格式、彩胶颜色、厂牌、限量编号、套内件数、发订套数、收货套数、<strong>收货件数</strong>、换货套数、退货套数</p>
</div>
<div id="volume-detail">
${f("","按册 · 纸质书明细字段")}
<p>条码号、订单行号、订单号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、套内册数、单册定价、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、收货人、验收时间、收货备注</p>
${f("","按册 · 视听资料明细字段")}
<p>条码号、订单行号、载体、ISBN、ISRC、商品条码、目录号、题名、著者、码洋、币种、实洋、套内件数、单册定价、收货人、验收时间、验收备注</p>
</div>
<div id="rules">
${f("","导出计算规则")}
${le(["字段","资源类型","计算规则"],[["收货册数（receiveVolumes）","纸质书·按种","若套内册数（copiesInSet）为空，则收货册数为空；否则收货册数 = 收货套数（receiveSets） × 套内册数"],["收货件数（receivePieces）","视听资料·按种","若套内件数（piecesInSet）为空，则收货件数为空；否则收货件数 = 收货套数（receiveSets） × 套内件数"]])}
<ul>
<li>导出明细：若当前筛选结果为空，提示暂无可导出明细；否则提示已导出及文件名（验收单号_验收明细 / 收货明细）</li>
</ul>
</div>
`),Bp=K("5.6.5.7","撤销收货",`
<div id="overview">
${f("","功能描述")}
<p>按种明细在进行中状态下，对已收货行可打开「撤销收货」弹窗，填写原因后清零收货套数。</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>确认后更新该行发/收/换/退数中的收货套数为 0，记录撤销原因，刷新原因列，提示「撤销收货成功」</li>
<li>取消关闭弹窗不改数据</li>
</ul>
</div>
`),Vp={title:"验收单详情",tabs:{species:{label:"按种"},volume:{label:"按册"}},items:[{id:"5.6.5.1",title:"验收单头信息",tab:"species",htmlContent:Ws},{id:"5.6.5.2",title:"按种 / 按册页签",tab:"species",htmlContent:qs},{id:"5.6.5.3",title:"筛选查询",tab:"species",htmlContent:zs},{id:"5.6.5.4",title:"按种明细表格与操作",tab:"species",htmlContent:Dp},{id:"5.6.5.6",title:"导出明细与导出配置",tab:"species",htmlContent:Xs},{id:"5.6.5.7",title:"撤销收货",tab:"species",htmlContent:Bp},{id:"5.6.5.1",title:"验收单头信息",tab:"volume",htmlContent:Ws},{id:"5.6.5.2",title:"按种 / 按册页签",tab:"volume",htmlContent:qs},{id:"5.6.5.3",title:"筛选查询",tab:"volume",htmlContent:zs},{id:"5.6.5.5",title:"按册明细表格",tab:"volume",htmlContent:Lp},{id:"5.6.5.6",title:"导出明细与导出配置",tab:"volume",htmlContent:Xs}]};function Fp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["acceptance-detail"]=Vp}const jp=K("5.7.5.1","筛选查询",`
<div id="overview">
${f("","功能描述")}
<p>提供多条件检索，帮助用户定位目标验收单。支持展开附加条件。</p>
${f("","页面要素")}
<ul>
<li><strong>默认显示</strong>：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）</li>
<li><strong>展开后追加</strong>：验收单状态（status）、供应商（supplier）、创建人（creator）、创建时间（createTime）</li>
<li>操作：「检索」过滤列表；「重置」清空条件并恢复全量</li>
</ul>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>资源类型（resourceType）选项：全部、纸质书、视听资料</li>
<li>验收单状态（status）选项：全部、未开始、进行中、已结束</li>
<li>供应商（supplier）选项：全部 + 列表中出现过的供应商</li>
<li>验收单号、验收单名称、创建人为文本包含匹配；创建时间按日期（yyyy-MM-dd）与创建时间（time）的日期部分精确匹配</li>
<li>各条件之间为 <strong>AND</strong> 关系；检索后分页回到第 1 页</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>无匹配时表格为空，分页显示 0 条</li>
</ul>
</div>
`),Hp=K("5.7.5.2","列表表格与行操作",`
<div id="overview">
${f("","功能描述")}
<p>以表格展示验收单列表，支持多选、分页、设为当前工作验收单，并按验收单状态（status）展示行操作。</p>
${f("","表格列")}
<p>复选框、序号（no）、验收单号（acceptanceId）、设为验收单（defaultAccept）、验收单名称（name）、资源类型（type）、语种（lang）、采选方式（method）、供应商（supplier）、发货单号（shipNo）、验收单状态（status）、收/换/退书数（counts）、验收备注（remark）、分配条码（barcode）、创建时间（time）、创建人（creator）、结算状态（settlement）、操作</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>验收单号：蓝色链接，点击进入验收单详情（见 5.6）</li>
<li>设为验收单：单选；已结束（finished）行不可选。选中后将该单设为当前工作验收单（静默，无提示）</li>
<li>验收单状态色：${Ce("#6b7280")}未开始、${Ce("#0284c7")}进行中、${Ce("#4b5563")}已结束</li>
<li>结算状态色：${Ce("#6b7280")}未申请、${Ce("#d97706")}待结算、${Ce("#059669")}已结算</li>
<li>验收备注：有内容时蓝色「查看」悬停全文；无内容时灰色「查看」不可点</li>
<li>分页：默认 10 条/页；工具栏右侧展示已选条数</li>
</ul>
${f("","操作列规则")}
${le(["验收单状态","可用操作"],[["未开始（notStarted）","编辑、删除"],["进行中（inProgress）","编辑、结束验收"],["已结束（finished）","—"]])}
<ul>
<li>删除：确认文案「确定删除验收单「名称」？」；若该单为当前工作验收单则清除当前工作验收单</li>
<li>结束验收：确认后状态改为已结束；若为当前工作验收单则取消设为验收单并清除当前工作验收单</li>
</ul>
</div>
`),Up=K("5.7.5.3","新增 / 编辑验收单弹窗",`
<div id="overview">
${f("","功能描述")}
<p>工具栏「新增验收单」或行内「编辑」打开表单弹窗，维护验收单头信息。</p>
${f("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 验收单名称（name）、资源类型（resourceType）、语种（language）、采选方式（method）、供应商（supplier）</li>
<li>发货单号（shipNo）、验收备注（remark）</li>
<li>勾选：设为当前工作验收单（setCurrent）；是否支持自动分配条码号（autoBarcode）</li>
<li>若开启自动分配条码：<span style="color:#ef4444">*</span> 条码号类型（barcodeType）、初始条码号（initialBarcode）</li>
</ul>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>新增默认勾选「设为当前工作验收单」「是否支持自动分配条码号」</li>
<li>新增条码号类型可选：小语种成人图书、地方文献、全部语种；编辑可选另含「成人视听」</li>
<li>若验收单状态为<strong>进行中</strong>，则资源类型、语种、采选方式、供应商、自动分配条码相关字段只读锁定；验收单名称、发货单号、备注、设为当前工作验收单仍可改</li>
<li>提交前校验必填；缺项提示「请填写{字段}」；开启自动条码但未填类型/初始号时提示「请填写条码号类型和初始条码号」</li>
<li>新增成功：生成验收单号（acceptanceId），状态为未开始，结算状态为未申请，收/换/退为 0/0/0；提示「验收单已创建」</li>
<li>编辑成功提示「验收单已保存」；勾选设为当前则写入当前工作验收单，取消勾选且原为当前则清除</li>
</ul>
</div>
`),Kp=K("5.7.5.4","预验收向导",`
<div id="overview">
${f("","功能描述")}
<p>工具栏「预验收」打开<strong>四步</strong>向导：①上传文件 → ②字段映射 → ③数据解析 → ④数据入库。核对发货单与可收货订单行；通过行写入<strong>预验收草稿</strong>（验收单号 + 订单行号），<strong>不执行收货</strong>。真正收货在逐条收货处置弹窗确认。验收单管理工具栏<strong>已移除批验收</strong>。</p>
${f("","入口前置")}
<ul>
<li>须当前登录馆员已关联订户；否则提示「您没有关联订户，无操作权限」，不打开向导</li>
<li>须勾选<strong>恰好 1 条</strong>验收单状态为未开始或进行中的验收单；否则按钮禁用或提示「请先在列表中勾选一条未开始或进行中的验收单」</li>
<li>打开前将该验收单设为当前工作验收单</li>
</ul>
${f("","向导壳")}
<ul>
<li>标题：「预验收」；右上角关闭（校验/入库进度中禁用）</li>
<li>顶部步骤条：1 上传文件 → 2 字段映射 → 3 数据解析 → 4 数据入库（当前及已过步骤高亮）</li>
<li>底栏随步骤变化（见各步说明）</li>
</ul>
</div>

<div id="step1">
${f("","第 1 步：上传文件")}
${f("","页面要素")}
<ul>
<li><span style="color:#ef4444">*</span> 文件上传（file）：「上传文件」按钮；隐藏文件选择器，accept 为 .xls/.xlsx</li>
<li>已选文件：展示文件名（fileName）+ 清除（×）</li>
<li>提示：「支持类型：xls、xlsx」；校验失败时红色错误文案</li>
</ul>
${f("","交互逻辑")}
<ul>
<li>点「上传文件」打开系统文件选择；选中后校验扩展名并解析为矩阵（原型 Mock）</li>
<li>清除文件：清空已选文件与错误提示</li>
<li>底栏：「取消」关闭向导；主按钮文案「上传」——已选合法文件且解析成功后可点，进入第 2 步</li>
<li>进入第 2 步时<strong>不</strong>自动读取表头</li>
</ul>
${f("","业务规则")}
<ul>
<li>仅允许扩展名 xls、xlsx；其它格式提示「请上传 xls/xlsx 格式文件」，不可进入下一步</li>
</ul>
${f("","异常处理")}
<ul>
<li>未选文件或解析为空：主按钮不可用</li>
<li>类型非法：展示红色错误，不可进入下一步</li>
</ul>
</div>

<div id="step2">
${f("","第 2 步：字段映射")}
${f("","页面要素")}
<ul>
<li>工具栏<strong>同一行</strong>（可换行）：映射模板（下拉，默认「选择模板」）→ <span style="color:#ef4444">*</span> 表头行号（headerRow）→「读取表头」→「保存模板」→「删除模板」</li>
<li>表头错误/变更提示：无效行号红色；已读过又改行号未再读时琥珀色提示「表头行号已变更，请点击「读取表头」后继续」</li>
<li>说明文案：将文件列映射到系统标准字段（标 * 为必填；勾选「是否校验」的字段与订单行不等则失败）</li>
<li>未读表头时灰色提示：请填写表头行号后点击「读取表头」，再进行列映射</li>
<li>列映射表（读表头后出现）三列：文件列名、系统标准字段（下拉）、是否校验（复选框）</li>
</ul>
${f("","交互逻辑")}
<ul>
<li>「读取表头」：按表头行号（Excel <strong>物理行号</strong>，从 1 起）生成文件列名；无原始文件预览。首次读取可带出默认列映射并套用默认「是否校验」；已有映射时尽量保留能对上的列与勾选</li>
<li>映射变更：映射到默认可校验字段时默认勾选；「不映射」或不可校验字段时取消勾选并禁用复选框。同一标准字段多列映射时勾选状态同步</li>
<li>底栏：「取消」｜「上一步」（回第 1 步）｜「下一步」。下一步可用条件：已成功读取表头且行号未变更未再读、有解析行数据（不要求必填已映完）</li>
<li>点「下一步」时才校验必填标准字段是否已映射；未齐则提示（如「请映射「订单行号」字段」）并停留本步。点「下一步」<strong>不</strong>静默写模板</li>
</ul>
${f("","映射模板交互")}
${le(["操作","行为"],[["下拉默认","首项「选择模板」；其余为已保存模板名称"],["选用某一模板","若有表头行号（headerRow）则写入输入框并按该行重新读取表头；按文件列名对齐写入列映射（columnMapping）；标准字段按当前验收单资源类型×语种清洗；恢复是否校验（mustMatchFields，缺省用默认勾选集）"],["切回「选择模板」","清空列映射与是否校验（列名保留时各列改为不映射、不勾选）；不清空表头行号与已读列名"],["「保存模板」（未选）","须已读表头，否则「请先读取表头后再保存模板」。弹「请输入模板名称」；取消中止；空名提示「请输入模板名称」；重名确认是否覆盖；成功提示「模板已保存」并选中该名称"],["「保存模板」（已选）","须已读表头。覆盖当前模板的表头行号 + 列映射 + 是否校验列表；提示「模板已更新」（不再弹名称）"],["「删除模板」","未选时禁用。已选确认「确定删除模板「名称」？」；删除后下拉回到「选择模板」；不自动清空当前列映射"]])}
<p>模板落库字段：表头行号（headerRow）+ 列映射（columnMapping）+ 是否校验字段列表（mustMatchFields，标准字段 key）。</p>
${f("","业务规则")}
<ul>
<li>系统标准字段按验收单<strong>资源类型（resourceType）× 语种（language，中文/外文分档）</strong>四套；下拉扁平，必填项标签带 *</li>
<li><strong>纸质书必填*</strong>：订单行号（orderLine）、收货套数（receiveQty）、套内册数（volCount）、实洋（netPrice）、定价（price）</li>
<li><strong>视听必填*</strong>：订单行号、收货套数、套内件数（volCount）、实洋、码洋（listPrice）</li>
<li>订单行号、收货套数不可勾「是否校验」</li>
<li><strong>默认勾选「是否校验」</strong>：实洋、套内册数/件数、定价（纸质）/码洋（视听）；其余默认不勾</li>
<li>同一标准字段被多列映射时：任一列勾选即计入该字段须校验（按标准字段 key 去重）</li>
</ul>
${f("","异常处理")}
<ul>
<li>表头行号无效：提示「表头行号无效」，不生成列</li>
<li>行号已变更未再读：不可进入第 3 步；点下一步时提示先读取表头</li>
<li>未读表头就保存模板：提示「请先读取表头后再保存模板」</li>
<li>新建模板名称为空：「请输入模板名称」</li>
</ul>
</div>

<div id="step3">
${f("","第 3 步：数据解析")}
${f("","页面要素")}
<ul>
<li>进行中：文案「正在校验，请稍候…」+ 进度条 + 百分比</li>
<li>完成后：汇总「共校验到 N 条数据，其中 X 条成功，Y 条失败」（成功绿色、失败有值时红色）</li>
<li>橙色提示：「点击「下一步」按钮，只导入成功行，不导入失败行。」</li>
<li>失败数 &gt; 0 时展示「下载失败数据」按钮</li>
</ul>
${f("","交互逻辑")}
<ul>
<li>从第 2 步进入后自动开始校验（展示进度），完成后展示汇总</li>
<li>底栏（完成后）：「取消」｜「下一步」。成功条数 = 0 时「下一步」置灰</li>
<li>「下载失败数据」：仅导出失败行；Excel（.xls）= 原发货单全部列（原顺序）+ 失败原因</li>
<li>校验/入库进度中不可关闭向导</li>
</ul>
${f("","业务规则（校验）")}
<p>匹配池：当前馆员关联订户范围内的可收货订单行。若关联订户下当前无任何可匹配订单行，仍完成解析；各发货单行按<strong>未匹配</strong>计失败（失败原因「无对应可收货订单行」），不单独弹「无关联订户 / 无可收货订单行」类阻断提示。</p>
<p>按行判定顺序与结果类型：</p>
${le(["结果类型","判定条件","失败原因（示例）"],[["数据错误","订单行号为空；或必填金额未解析出有效值（纸质须定价或码洋、视听须码洋；且须实洋）；或收货套数 / 套内册数（件数）无法解析为有效数量","数据解析失败"],["未匹配","能解析出订单行号，但在关联订户可收货订单行中找不到该订单行号","无对应可收货订单行"],["验收单不匹配","找到对应订单行，但其资源类型、语种（中/外分档）、采选方式、供应商与当前验收单头不一致","如「资源类型不一致（验收单 …/订单行 …）」等，多条用「；」拼接"],["套数非法","已匹配且头属性一致后：收货套数 ≤0，或 ＞该订单行待收货套数","套数 ≤ 0 / 套数大于待收"],["不一致","仅对勾选「是否校验」且已映射的标准字段与订单行不等（收货套数不走本类）",'「"{字段}"订单行 …/发货单…」'],["通过","未命中以上失败；套数满足 0＜收货套数≤待收","—"]])}
<ul>
<li>允许部分成功：仅「通过」行可进入第 4 步入库</li>
<li>未勾选「是否校验」的已映射字段即使与订单行不同，也不记「不一致」</li>
</ul>
${f("","异常处理")}
<ul>
<li>全部失败（含全部未匹配）：仅可取消或下载失败数据，不可入库；「下一步」置灰</li>
</ul>
</div>

<div id="step4">
${f("","第 4 步：数据入库")}
${f("","页面要素")}
<ul>
<li>进行中：文案「正在入库，请稍候…」+ 进度条 + 百分比</li>
<li>成功：${Ce("#22c55e")}绿色圆标 ✓ + 文案「入库成功」（样式对齐订单导入向导）</li>
<li>失败：${Ce("#ef4444")}红色圆标 × + 文案「入库失败，请联系管理员」</li>
</ul>
${f("","交互逻辑")}
<ul>
<li>第 3 步点「下一步」后进入本步并自动写入通过行草稿（展示入库进度）</li>
<li>入库过程中不可关闭；完成后底栏仅「关闭」，退出向导</li>
<li>本步不可返回上一步改映射</li>
</ul>
${f("","业务规则（草稿）")}
<ul>
<li>维度：验收单号（acceptanceId）+ 订单行号（orderLine）</li>
<li>内容：通过行已映射发货单值（含未勾选「是否校验」的差异字段），供逐条收货带入</li>
<li>同订单行再次预验收成功入库 → <strong>覆盖已有草稿</strong>（不改订单行本身）</li>
<li>不改变验收单状态；不执行收货</li>
<li>逐条收货打开处置弹窗时带入收货套数、定价/码洋、实洋、套内册数/件数，收货区显示「已带入预验收数据」；确认收货成功后清除该行草稿</li>
</ul>
${f("","异常处理")}
<ul>
<li>入库失败（含无验收单号、写入条数为 0 等）：红色圆标结果页，不写或写不全草稿；用户可关闭后重试</li>
</ul>
</div>
`),Gp=K("5.7.5.5","批验收（已移除）",`
<div id="overview">
${f("","功能描述")}
<p>验收单管理工具栏「批验收」及导入即收货向导已移除；差异核对与草稿落库统一走「预验收」，真正收货在逐条收货中确认。</p>
</div>
`),Wp=K("5.7.5.6","申请结算",`
<div id="overview">
${f("","功能描述")}
<p>工具栏「申请结算」对勾选验收单提交结算申请。</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
<ul>
<li>未勾选时提示「请先勾选验收单」</li>
<li>打开确认弹窗：「确认为所选 N 条验收单申请结算？」</li>
<li>确定后：所选行中结算状态为未申请（notApplied）的改为待结算（pending）；提示「已为 N 条验收单提交结算申请」</li>
</ul>
</div>
`),qp=K("5.7.5.7","导出列表与导出配置",`
<div id="overview">
${f("","功能描述")}
<p>工具栏「导出列表」下拉提供「导出配置」「导出清单」。</p>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>导出配置：弹窗勾选列表导出字段；打开时基于配置字段集；确定后提示「导出配置已保存（N 个字段）」</li>
<li>可配置字段：验收单号、验收单名称、资源类型、语种、采选方式、供应商、发货单号、验收单状态、收/换/退书数、验收备注、分配条码、创建时间、创建人、结算状态</li>
<li>导出清单：原型阶段提示演示文案</li>
</ul>
</div>
`),zp={title:"验收单管理",items:[{id:"5.7.5.1",title:"筛选查询",htmlContent:jp},{id:"5.7.5.2",title:"列表表格与行操作",htmlContent:Hp},{id:"5.7.5.3",title:"新增 / 编辑验收单弹窗",htmlContent:Up},{id:"5.7.5.4",title:"预验收向导",htmlContent:Kp},{id:"5.7.5.5",title:"批验收（已移除）",htmlContent:Gp},{id:"5.7.5.6",title:"申请结算",htmlContent:Wp},{id:"5.7.5.7",title:"导出列表与导出配置",htmlContent:qp}]};function Xp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["acceptance-manage"]=zp}const Jp=K("5.8.5.1","当前工作验收单头信息",`
<div id="overview">
${f("","功能描述")}
<p>页面顶部展示当前工作验收单的头信息与本单累计收/换/退套数，并提供跳转验收单详情入口。</p>
${f("","页面要素")}
<ul>
<li>验收单号（acceptanceId）：有值时蓝色链接，点击进入验收单详情（按种视角）</li>
<li>验收单名称（name）、供应商（supplier）、语种（lang）、发货单号（shipNo）</li>
<li>总种数、总册数、总码洋、总实洋（随验收明细汇总刷新）</li>
<li>收货套数、换货套数、退货套数（本验收单按种累计）</li>
<li>若无当前工作验收单：对应字段显示「—」，并提示先在验收单管理设为当前工作验收单</li>
</ul>
</div>
<div id="rules">
${f("","业务规则")}
<ul>
<li>语种有值时以红色强调展示</li>
<li>头信息只读；切换当前工作验收单后本页检索结果与选中行清空</li>
</ul>
</div>
`),Yp=K("5.8.5.2","订单行检索",`
<div id="overview">
${f("","功能描述")}
<p>按当前验收单资源类型提供检索字段与馆址过滤，点击「检索」加载可处置的订单行。</p>
${f("","页面要素")}
<ul>
<li>检索字段下拉 + 关键字输入 + 「检索」按钮</li>
<li>馆址（location）下拉：含「全部」与使用中馆址选项</li>
<li>若资源类型为视听资料：额外展示载体（carrier）下拉</li>
</ul>
</div>
<div id="rules">
${f("","业务规则")}
${le(["资源类型","检索字段选项"],[["纸质书","ISBN（isbn）、订单行号（orderLine）、正题名（title）"],["视听资料","资源标识（resourceId）、订单行号（orderLine）、题名（title）"]])}
<ul>
<li>无当前工作验收单时：检索控件禁用，占位提示「请先选择验收单」；点击检索提示「请先在验收单管理中选择当前工作验收单」</li>
<li>检索后分页回到第 1 页；清空原选中行并关闭处置弹窗（除非结果仅 1 条，见 5.8.5.3）</li>
<li>各条件与馆址、载体为组合过滤（AND）</li>
</ul>
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>未检索前表格空态：「请输入检索条件后点击检索」</li>
<li>无当前验收单空态：「请先在验收单管理中选择当前工作验收单」</li>
<li>检索无数据：「暂无数据」</li>
</ul>
</div>
`),Qp=K("5.8.5.3","订单行列表与选行打开",`
<div id="overview">
${f("","功能描述")}
<p>以表格展示检索结果；选中一行即打开「逐条收货/换货/退货」处置弹窗。页面<strong>不再</strong>提供底栏独立「收货 / 换货 / 退货」按钮。</p>
${f("","表格列")}
<p><strong>纸质书</strong>：单选、馆址（location）、订单行号（orderLine）、正题名（title）、ISBN（isbn）、作者（author）、出版社（publisher）、版本（edition）、定价（price）、币种（currency）、套内册数（copies）、发/收/换/退/撤订（counts）、备注（remark）、发订人（orderer）、发订时间（orderTime）</p>
<p><strong>视听资料</strong>：单选、馆址、订单行号、载体（carrier）、ISBN、商品条码（barcode）、目录号（catalogNo）、题名（title）、版本/格式（format）、著者（author）、码洋（price）、币种、套内件数（copies）、发/收/换/退/撤订、备注、发订人、发订时间</p>
</div>
<div id="interaction">
${f("","交互逻辑")}
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
`),Zp=K("5.8.5.4","逐条收货/换货/退货处置弹窗",`
<div id="overview">
${f("","功能描述")}
<p>合并处置弹窗标题为「逐条收货/换货/退货」，<strong>无页签</strong>；内容区纵向三段「收货 → 换货 → 退货」可上下滚动；底栏统一「确定」，一次提交已填处置。弹窗固定高度，顶栏 / 统计条 / 底栏固定。</p>
${f("","壳与布局")}
<ul>
<li>顶栏：标题「逐条收货/换货/退货」+ 关闭（<strong>不含</strong>订单行号）</li>
<li>统计条（只读）：发订套数、已收货套数、已换货套数、已退货套数、<strong>待收货套数</strong>、订单行备注（过长截断，悬停全文）</li>
<li>内容区：分区标题「收货」「换货」「退货」；若存在预验收草稿，收货标题旁展示标签「已带入预验收数据」；窄屏表单单列</li>
<li>底栏：「关闭」+ 纸质且需分配条码时「预览」+ 统一「确定」</li>
<li>点遮罩或关闭：关弹窗，不提交草稿；行选中可保留，再次点该行可再打开</li>
</ul>
</div>
<div id="pending">
${f("","待收货套数与一次提交")}
<p><strong>待收货套数（pendingSets）</strong> = max(0, 发订套数 − 已收货套数 − 已退货套数)。<strong>不含</strong>已换货套数——已有换货仍可继续收货。</p>
<ul>
<li>点「确定」：数量为有效正数的区块参与提交；空或 0 跳过且不校验该块原因/收货必填</li>
<li>收、换、退均无有效数量 → 提示「请至少填写一种处置套数」，不写库、不关弹窗</li>
<li><strong>收货套数 + 换货数量 + 退货数量 ≤ 提交时刻待收货套数</strong>；否则提示「处置套数合计不能大于待收套数（当前待收 N）」</li>
<li>校验通过后按 <strong>收货 → 换货 → 退货</strong> 依次写库；成功提示「提交成功」，刷新列表与头信息后<strong>一律关闭弹窗</strong>（不按待收是否为 0 决定）</li>
</ul>
</div>
<div id="receive">
${f("","收货分区")}
<p>按当前验收单资源类型展示完整收货表单。</p>
${le(["资源类型","主要字段","必填要点（有收货套数时）"],[["纸质书","ISBN、作者、正题名、定价、币种、实洋、套内册数、收货套数、条码初始号、收货备注（receiveRemark）","正题名、定价、实洋、套内册数；若验收单开启自动分配条码则条码初始号必填"],["视听资料","ISBN、ISRC、商品条码、目录号、载体、版本/格式、题名、著者、码洋、币种、实洋、彩胶颜色、厂牌、限量编号、套内件数、收货套数、收货备注（receiveRemark）","载体、题名、码洋、实洋、套内件数"]])}
<ul>
<li>外文语种验收单：定价/码洋可带出原币价，币种默认外币；中文则按行内定价与币种预填</li>
<li>收货套数默认带出当前待收货套数（可改）</li>
<li><strong>收货备注</strong>为本面板唯一备注输入（纸质/视听均最多 <strong>500</strong> 字）；即使收货套数为空未参与提交，该输入框仍展示</li>
<li>若存在预验收草稿：打开时带入收货套数、定价/码洋、实洋、套内册数/件数；收货区标题旁显示「已带入预验收数据」；换货/退货不带入；本次含收货且收货写库成功后清除该行草稿</li>
</ul>
${f("","条码预览与分配结果（纸质 · 需分配条码时）")}
<ul>
<li>「预览」：根据条码初始号、收货套数、套内册数展示预分配/未分配区间；约 3 秒自动关闭，也可点「已知晓」提前关闭（不视为提交）</li>
<li>「确定」且本次含收货：先展示已分配/未分配结果；约 3 秒自动「已知晓」并完成整单确定，亦可手动点「已知晓」；若有空条码提示「注意：本次收货有空条码」</li>
</ul>
</div>
<div id="exchange-return">
${f("","换货分区")}
<p>换货数量与换货原因同一行展示；标签前带红色必填标识 <span style="color:#ef4444">*</span>；<strong>不展示</strong>换货备注输入框。</p>
${le(["字段","必填","说明"],[["换货数量（exchangeQty）","有换货数量时是","正数；与收/退合计 ≤ 待收货套数"],["换货原因（exchangeReason）","有换货数量时是","选项：换货、残缺损"],["换货备注","—","界面不展示；写库时取收货备注（receiveRemark）"]])}
${f("","退货分区")}
<p>退货数量与退货原因同一行展示；标签前带红色必填标识 <span style="color:#ef4444">*</span>；<strong>不展示</strong>退货备注输入框。</p>
${le(["字段","必填","说明"],[["退货数量（returnQty）","有退货数量时是","正数；与收/换合计 ≤ 待收货套数"],["退货原因（returnReason）","有退货数量时是","选项：退货、损坏退货"],["退货备注","—","界面不展示；写库时取收货备注（receiveRemark）"]])}
</div>
<div id="exception">
${f("","异常处理")}
<ul>
<li>三种处置均无有效数量：「请至少填写一种处置套数」</li>
<li>收货缺必填：对应提示（如「请填写正题名」「请选择载体」等）</li>
<li>换/退有数量缺原因：提示请选择换货/退货原因</li>
<li>合计超待收：「处置套数合计不能大于待收套数（当前待收 N）」；不写库、不关弹窗</li>
<li>单流套数无效或超过待收：「操作失败：套数无效」或「超过待收货套数（当前待收 N）」</li>
<li>预览前未填条码初始号/有效收货套数/套内册数：对应提示，不打开预览</li>
</ul>
</div>
`),eh={title:"逐条收货",items:[{id:"5.8.5.1",title:"当前工作验收单头信息",htmlContent:Jp},{id:"5.8.5.2",title:"订单行检索",htmlContent:Yp},{id:"5.8.5.3",title:"订单行列表与选行打开",htmlContent:Qp},{id:"5.8.5.4",title:"逐条收货/换货/退货处置弹窗",htmlContent:Zp}]};function th(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["receive-by-item"]=eh}yp();Np();Mp();Fp();Xp();th();const Vr=Cu(Mu);Vr.use(Au());Vr.use(Xo);Vr.mount("#app");export{Tn as $,fo as A,Bl as B,gr as C,mn as D,Pi as E,Oe as F,Pr as G,Qa as H,ch as I,Vl as J,ah as K,_f as L,oh as M,xh as N,Ah as O,Ge as P,Er as Q,fh as R,Ui as S,ih as T,Ei as U,Wd as V,Qc as W,dh as X,uh as Y,Th as Z,$u as _,Z as a,nh as a0,xn as a1,Uo as a2,sf as a3,Eh as a4,zd as a5,pf as a6,hf as a7,Ih as a8,jo as a9,wh as aa,Rh as ab,Oh as ac,Ph as ad,Mh as ae,Nh as af,$h as ag,kh as ah,gh as ai,Fo as aj,Ch as ak,Dh as al,Lh as am,Bh as an,bh as ao,vh as ap,mh as aq,yh as ar,Sh as as,_h as at,ye as b,Le as c,me as d,ph as e,Ar as f,bu as g,oo as h,jc as i,co as j,hn as k,Be as l,Se as m,It as n,xr as o,hh as p,Gd as q,Qn as r,ri as s,ii as t,qd as u,sh as v,Ft as w,rh as x,lh as y,oa as z};
