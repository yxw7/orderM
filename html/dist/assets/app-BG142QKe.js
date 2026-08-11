const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OrderManageView-C8tP8A4M.js","./SearchPanel-CLEiH9OE.js","./SearchExpandToggle-6Yh0n8_9.js","./DataTable-BotCDbr9.js","./PaginationBar-BI68y-wT.js","./DataTable-TwsiaAEU.css","./HoverTooltip-V3QOdfUq.js","./DropdownButton-DaJOPdn0.js","./order-BD0FMBuO.js","./order-line-detail-DE5ckluR.js","./acquisition-methods-Qch6MY5a.js","./acceptance-detail-B-TL9b5o.js","./settled-list-BOMbvSXf.js","./marc-mapping-manage-C0qr4aln.js","./use-site-options-BmLsl-rz.js","./bib-order-form-cache-D4GAxmPe.js","./association-DrRvj45V.js","./subscriber-manage-DtaTzAwt.js","./SiteMultiSelect-3vhf47EE.js","./MarcTable-Cz5DfRoi.js","./FormModal-C2ZUl7eY.js","./shortage-C6WaNH3V.js","./import-template-manage-CqXZMuHR.js","./PrdSpecDrawer-bjl1Fl3Y.js","./PrdSpecDrawer-Ci5ThT7X.css","./OrderManageView-DgUQ4oiQ.css","./OrderLineDetailView-Bme2GeQ0.js","./OrderLineDetailView-Dg9xnmTN.css","./BibQueryView-CBIdphjS.js","./currency-manage-C6gvmfle.js","./BibQueryView-d50iNJal.css","./NewBibView-D91JzOu3.js","./use-breadcrumb-back-Cie-mQRe.js","./Z3950QueryView-BNOr-xcP.js","./AcceptanceManageView-ticC9oa7.js","./acceptance-list-BmVsIhHc.js","./AcceptanceSettlementModal-BTa0o3Y0.js","./AcceptanceExportConfigModal-csOcxD4p.js","./delivery-import-vL-tp2Pe.js","./receive-by-item-BbWjglbO.js","./pre-accept-drafts-CxzKsy_O.js","./AcceptanceDetailView-BP-VuGGL.js","./DeliveryImportTaskListView-f3qOwE6h.js","./delivery-import-tasks-4lSIo0zo.js","./DeliveryImportTaskListView-C8ix_IVu.css","./DeliveryImportTaskDetailView-BqQ5agUu.js","./BarcodePreviewModal-BvbWWd_m.js","./DeliveryImportTaskDetailView-BSuCGUyz.css","./ReceiveByItemView-CMFd-cJ1.js","./BatchAcceptanceView-B-03zdv7.js","./ExchangeManageView-DiBKYPsc.js","./ReturnManageView-NTJtAwb8.js","./ShortageManageView-B7R4UtjZ.js","./ShortageCancelModal-CvOvHDxz.js","./ShortageDetailView-Bl_0760r.js","./PendingSettlementView-fj8qWAMp.js","./SettledView-BpyRnjLS.js","./settled-DLVpEtTD.js","./SettlementDetailView-DNb7m77b.js","./SettlementListView-D62Abr6E.js","./FailSettlementView-CZwDP6QT.js","./SubscriberListView-Bfj_XKOt.js","./LibrarianListView-SO5RenKx.js","./CurrencyInfoView-FdTOxE5k.js","./ImportTemplateConfigView-Cu1uq_IU.js","./StatusToggle-DhUrgLey.js","./ShortageConfigView-mHBzhkFv.js","./BarcodeSupplierView-DMiM0TdV.js","./MarcMappingView-C3Tizsht.js","./LocationManageView-bgsDzNak.js","./ReasonParamsView-Cll58Baq.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}const ce={},Yt=[],lt=()=>{},Xr=()=>!1,rn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ln=e=>e.startsWith("onUpdate:"),Ae=Object.assign,ps=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},Xo=Object.prototype.hasOwnProperty,ie=(e,t)=>Xo.call(e,t),H=Array.isArray,Qt=e=>ui(e)==="[object Map]",ai=e=>ui(e)==="[object Set]",Hs=e=>ui(e)==="[object Date]",Jo=e=>ui(e)==="[object RegExp]",W=e=>typeof e=="function",ue=e=>typeof e=="string",je=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",Jr=e=>(se(e)||W(e))&&W(e.then)&&W(e.catch),Yr=Object.prototype.toString,ui=e=>Yr.call(e),Yo=e=>ui(e).slice(8,-1),Qr=e=>ui(e)==="[object Object]",on=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_i=ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cn=e=>{const t=Object.create(null);return(i=>t[i]||(t[i]=e(i)))},Qo=/-\w/g,ke=cn(e=>e.replace(Qo,t=>t.slice(1).toUpperCase())),Zo=/\B([A-Z])/g,Ot=cn(e=>e.replace(Zo,"-$1").toLowerCase()),an=cn(e=>e.charAt(0).toUpperCase()+e.slice(1)),xn=cn(e=>e?`on${an(e)}`:""),rt=(e,t)=>!Object.is(e,t),Zt=(e,...t)=>{for(let i=0;i<e.length;i++)e[i](...t)},Zr=(e,t,i,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:i})},un=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Us;const fn=()=>Us||(Us=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hs(e){if(H(e)){const t={};for(let i=0;i<e.length;i++){const n=e[i],s=ue(n)?nc(n):hs(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(ue(e)||se(e))return e}const ec=/;(?![^(]*\))/g,tc=/:([^]+)/,ic=/\/\*[^]*?\*\//g;function nc(e){const t={};return e.replace(ic,"").split(ec).forEach(i=>{if(i){const n=i.split(tc);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function It(e){let t="";if(ue(e))t=e;else if(H(e))for(let i=0;i<e.length;i++){const n=It(e[i]);n&&(t+=n+" ")}else if(se(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rc=ds(sc);function el(e){return!!e||e===""}function lc(e,t){if(e.length!==t.length)return!1;let i=!0;for(let n=0;i&&n<e.length;n++)i=Nt(e[n],t[n]);return i}function Nt(e,t){if(e===t)return!0;let i=Hs(e),n=Hs(t);if(i||n)return i&&n?e.getTime()===t.getTime():!1;if(i=je(e),n=je(t),i||n)return e===t;if(i=H(e),n=H(t),i||n)return i&&n?lc(e,t):!1;if(i=se(e),n=se(t),i||n){if(!i||!n)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const l in e){const o=e.hasOwnProperty(l),c=t.hasOwnProperty(l);if(o&&!c||!o&&c||!Nt(e[l],t[l]))return!1}}return String(e)===String(t)}function gs(e,t){return e.findIndex(i=>Nt(i,t))}const tl=e=>!!(e&&e.__v_isRef===!0),ii=e=>ue(e)?e:e==null?"":H(e)||se(e)&&(e.toString===Yr||!W(e.toString))?tl(e)?ii(e.value):JSON.stringify(e,il,2):String(e),il=(e,t)=>tl(t)?il(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[n,s],r)=>(i[In(n,r)+" =>"]=s,i),{})}:ai(t)?{[`Set(${t.size})`]:[...t.values()].map(i=>In(i))}:je(t)?In(t):se(t)&&!H(t)&&!Qr(t)?String(t):t,In=(e,t="")=>{var i;return je(e)?`Symbol(${(i=e.description)!=null?i:t})`:e};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class nl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&be&&(be.active?(this.parent=be,this.index=(be.scopes||(be.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].pause();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].resume();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].resume()}}run(t){if(this._active){const i=be;try{return be=this,t()}finally{be=i}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){if(this._on>0&&--this._on===0){if(be===this)be=this.prevScope;else{let t=be;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function sl(e){return new nl(e)}function rl(){return be}function oc(e,t=!1){be&&be.cleanups.push(e)}let ae;const wn=new WeakSet;class ll{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&(be.active?be.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wn.has(this)&&(wn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ks(this),al(this);const t=ae,i=ze;ae=this,ze=!0;try{return this.fn()}finally{ul(this),ae=t,ze=i,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)bs(t);this.deps=this.depsTail=void 0,Ks(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gn(this)&&this.run()}get dirty(){return Gn(this)}}let ol=0,Si,yi;function cl(e,t=!1){if(e.flags|=8,t){e.next=yi,yi=e;return}e.next=Si,Si=e}function ms(){ol++}function vs(){if(--ol>0)return;if(yi){let t=yi;for(yi=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;Si;){let t=Si;for(Si=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function al(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ul(e){let t,i=e.depsTail,n=i;for(;n;){const s=n.prevDep;n.version===-1?(n===i&&(i=s),bs(n),cc(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=i}function Gn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(fl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function fl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ii)||(e.globalVersion=Ii,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Gn(e))))return;e.flags|=2;const t=e.dep,i=ae,n=ze;ae=e,ze=!0;try{al(e);const s=e.fn(e._value);(t.version===0||rt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ae=i,ze=n,ul(e),e.flags&=-3}}function bs(e,t=!1){const{dep:i,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let r=i.computed.deps;r;r=r.nextDep)bs(r,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function cc(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}let ze=!0;const dl=[];function ct(){dl.push(ze),ze=!1}function at(){const e=dl.pop();ze=e===void 0?!0:e}function Ks(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=ae;ae=void 0;try{t()}finally{ae=i}}}let Ii=0;class ac{constructor(t,i){this.sub=t,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _s{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ae||!ze||ae===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==ae)i=this.activeLink=new ac(ae,this),ae.deps?(i.prevDep=ae.depsTail,ae.depsTail.nextDep=i,ae.depsTail=i):ae.deps=ae.depsTail=i,pl(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=ae.depsTail,i.nextDep=void 0,ae.depsTail.nextDep=i,ae.depsTail=i,ae.deps===i&&(ae.deps=n)}return i}trigger(t){this.version++,Ii++,this.notify(t)}notify(t){ms();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{vs()}}}function pl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)pl(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subs=e}}const Wi=new WeakMap,Vt=Symbol(""),Wn=Symbol(""),wi=Symbol("");function Ie(e,t,i){if(ze&&ae){let n=Wi.get(e);n||Wi.set(e,n=new Map);let s=n.get(i);s||(n.set(i,s=new _s),s.map=n,s.key=i),s.track()}}function mt(e,t,i,n,s,r){const l=Wi.get(e);if(!l){Ii++;return}const o=c=>{c&&c.trigger()};if(ms(),t==="clear")l.forEach(o);else{const c=H(e),u=c&&on(i);if(c&&i==="length"){const a=Number(n);l.forEach((p,g)=>{(g==="length"||g===wi||!je(g)&&g>=a)&&o(p)})}else switch((i!==void 0||l.has(void 0))&&o(l.get(i)),u&&o(l.get(wi)),t){case"add":c?u&&o(l.get("length")):(o(l.get(Vt)),Qt(e)&&o(l.get(Wn)));break;case"delete":c||(o(l.get(Vt)),Qt(e)&&o(l.get(Wn)));break;case"set":Qt(e)&&o(l.get(Vt));break}}vs()}function uc(e,t){const i=Wi.get(e);return i&&i.get(t)}function Gt(e){const t=Q(e);return t===e?t:(Ie(t,"iterate",wi),Fe(e)?t:t.map(Xe))}function dn(e){return Ie(e=Q(e),"iterate",wi),e}function nt(e,t){return _t(e)?ni(ot(e)?Xe(t):t):Xe(t)}const fc={__proto__:null,[Symbol.iterator](){return Nn(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return Gt(this).concat(...e.map(t=>H(t)?Gt(t):t))},entries(){return Nn(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return dt(this,"every",e,t,void 0,arguments)},filter(e,t){return dt(this,"filter",e,t,i=>i.map(n=>nt(this,n)),arguments)},find(e,t){return dt(this,"find",e,t,i=>nt(this,i),arguments)},findIndex(e,t){return dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return dt(this,"findLast",e,t,i=>nt(this,i),arguments)},findLastIndex(e,t){return dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return $n(this,"includes",e)},indexOf(...e){return $n(this,"indexOf",e)},join(e){return Gt(this).join(e)},lastIndexOf(...e){return $n(this,"lastIndexOf",e)},map(e,t){return dt(this,"map",e,t,void 0,arguments)},pop(){return di(this,"pop")},push(...e){return di(this,"push",e)},reduce(e,...t){return Gs(this,"reduce",e,t)},reduceRight(e,...t){return Gs(this,"reduceRight",e,t)},shift(){return di(this,"shift")},some(e,t){return dt(this,"some",e,t,void 0,arguments)},splice(...e){return di(this,"splice",e)},toReversed(){return Gt(this).toReversed()},toSorted(e){return Gt(this).toSorted(e)},toSpliced(...e){return Gt(this).toSpliced(...e)},unshift(...e){return di(this,"unshift",e)},values(){return Nn(this,"values",e=>nt(this,e))}};function Nn(e,t,i){const n=dn(e),s=n[t]();return n!==e&&!Fe(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=i(r.value)),r}),s}const dc=Array.prototype;function dt(e,t,i,n,s,r){const l=dn(e),o=l!==e&&!Fe(e),c=l[t];if(c!==dc[t]){const p=c.apply(e,r);return o?Xe(p):p}let u=i;l!==e&&(o?u=function(p,g){return i.call(this,nt(e,p),g,e)}:i.length>2&&(u=function(p,g){return i.call(this,p,g,e)}));const a=c.call(l,u,n);return o&&s?s(a):a}function Gs(e,t,i,n){const s=dn(e),r=s!==e&&!Fe(e);let l=i,o=!1;s!==e&&(r?(o=n.length===0,l=function(u,a,p){return o&&(o=!1,u=nt(e,u)),i.call(this,u,nt(e,a),p,e)}):i.length>3&&(l=function(u,a,p){return i.call(this,u,a,p,e)}));const c=s[t](l,...n);return o?nt(e,c):c}function $n(e,t,i){const n=Q(e);Ie(n,"iterate",wi);const s=n[t](...i);return(s===-1||s===!1)&&pn(i[0])?(i[0]=Q(i[0]),n[t](...i)):s}function di(e,t,i=[]){ct(),ms();const n=Q(e)[t].apply(e,i);return vs(),at(),n}const pc=ds("__proto__,__v_isRef,__isVue"),hl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(je));function hc(e){je(e)||(e=String(e));const t=Q(this);return Ie(t,"has",e),t.hasOwnProperty(e)}class gl{constructor(t=!1,i=!1){this._isReadonly=t,this._isShallow=i}get(t,i,n){if(i==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(i==="__v_isReactive")return!s;if(i==="__v_isReadonly")return s;if(i==="__v_isShallow")return r;if(i==="__v_raw")return n===(s?r?Rc:_l:r?bl:vl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const l=H(t);if(!s){let c;if(l&&(c=fc[i]))return c;if(i==="hasOwnProperty")return hc}const o=Reflect.get(t,i,pe(t)?t:n);if((je(i)?hl.has(i):pc(i))||(s||Ie(t,"get",i),r))return o;if(pe(o)){const c=l&&on(i)?o:o.value;return s&&se(c)?zn(c):c}return se(o)?s?zn(o):ki(o):o}}class ml extends gl{constructor(t=!1){super(!1,t)}set(t,i,n,s){let r=t[i];const l=H(t)&&on(i);if(!this._isShallow){const u=_t(r);if(!Fe(n)&&!_t(n)&&(r=Q(r),n=Q(n)),!l&&pe(r)&&!pe(n))return u||(r.value=n),!0}const o=l?Number(i)<t.length:ie(t,i),c=Reflect.set(t,i,n,pe(t)?t:s);return t===Q(s)&&c&&(o?rt(n,r)&&mt(t,"set",i,n):mt(t,"add",i,n)),c}deleteProperty(t,i){const n=ie(t,i);t[i];const s=Reflect.deleteProperty(t,i);return s&&n&&mt(t,"delete",i,void 0),s}has(t,i){const n=Reflect.has(t,i);return(!je(i)||!hl.has(i))&&Ie(t,"has",i),n}ownKeys(t){return Ie(t,"iterate",H(t)?"length":Vt),Reflect.ownKeys(t)}}class gc extends gl{constructor(t=!1){super(!0,t)}set(t,i){return!0}deleteProperty(t,i){return!0}}const mc=new ml,vc=new gc,bc=new ml(!0);const qn=e=>e,Li=e=>Reflect.getPrototypeOf(e);function _c(e,t,i){return function(...n){const s=this.__v_raw,r=Q(s),l=Qt(r),o=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,u=s[e](...n),a=i?qn:t?ni:Xe;return!t&&Ie(r,"iterate",c?Wn:Vt),Ae(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:o?[a(p[0]),a(p[1])]:a(p),done:g}}})}}function Bi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Sc(e,t){const i={get(s){const r=this.__v_raw,l=Q(r),o=Q(s);e||(rt(s,o)&&Ie(l,"get",s),Ie(l,"get",o));const{has:c}=Li(l),u=t?qn:e?ni:Xe;if(c.call(l,s))return u(r.get(s));if(c.call(l,o))return u(r.get(o));r!==l&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Ie(Q(s),"iterate",Vt),s.size},has(s){const r=this.__v_raw,l=Q(r),o=Q(s);return e||(rt(s,o)&&Ie(l,"has",s),Ie(l,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const l=this,o=l.__v_raw,c=Q(o),u=t?qn:e?ni:Xe;return!e&&Ie(c,"iterate",Vt),o.forEach((a,p)=>s.call(r,u(a),u(p),l))}};return Ae(i,e?{add:Bi("add"),set:Bi("set"),delete:Bi("delete"),clear:Bi("clear")}:{add(s){const r=Q(this),l=Li(r),o=Q(s),c=!t&&!Fe(s)&&!_t(s)?o:s;return l.has.call(r,c)||rt(s,c)&&l.has.call(r,s)||rt(o,c)&&l.has.call(r,o)||(r.add(c),mt(r,"add",c,c)),this},set(s,r){!t&&!Fe(r)&&!_t(r)&&(r=Q(r));const l=Q(this),{has:o,get:c}=Li(l);let u=o.call(l,s);u||(s=Q(s),u=o.call(l,s));const a=c.call(l,s);return l.set(s,r),u?rt(r,a)&&mt(l,"set",s,r):mt(l,"add",s,r),this},delete(s){const r=Q(this),{has:l,get:o}=Li(r);let c=l.call(r,s);c||(s=Q(s),c=l.call(r,s)),o&&o.call(r,s);const u=r.delete(s);return c&&mt(r,"delete",s,void 0),u},clear(){const s=Q(this),r=s.size!==0,l=s.clear();return r&&mt(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=_c(s,e,t)}),i}function Ss(e,t){const i=Sc(e,t);return(n,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(ie(i,s)&&s in n?i:n,s,r)}const yc={get:Ss(!1,!1)},Cc={get:Ss(!1,!0)},Tc={get:Ss(!0,!1)};const vl=new WeakMap,bl=new WeakMap,_l=new WeakMap,Rc=new WeakMap;function Ac(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ki(e){return _t(e)?e:ys(e,!1,mc,yc,vl)}function Sl(e){return ys(e,!1,bc,Cc,bl)}function zn(e){return ys(e,!0,vc,Tc,_l)}function ys(e,t,i,n,s){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=s.get(e);if(r)return r;const l=Ac(Yo(e));if(l===0)return e;const o=new Proxy(e,l===2?n:i);return s.set(e,o),o}function ot(e){return _t(e)?ot(e.__v_raw):!!(e&&e.__v_isReactive)}function _t(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function pn(e){return e?!!e.__v_raw:!1}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Cs(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&Zr(e,"__v_skip",!0),e}const Xe=e=>se(e)?ki(e):e,ni=e=>se(e)?zn(e):e;function pe(e){return e?e.__v_isRef===!0:!1}function hn(e){return yl(e,!1)}function Ec(e){return yl(e,!0)}function yl(e,t){return pe(e)?e:new xc(e,t)}class xc{constructor(t,i){this.dep=new _s,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?t:Q(t),this._value=i?t:Xe(t),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(t){const i=this._rawValue,n=this.__v_isShallow||Fe(t)||_t(t);t=n?t:Q(t),rt(t,i)&&(this._rawValue=t,this._value=n?t:Xe(t),this.dep.trigger())}}function ye(e){return pe(e)?e.value:e}const Ic={get:(e,t,i)=>t==="__v_raw"?e:ye(Reflect.get(e,t,i)),set:(e,t,i,n)=>{const s=e[t];return pe(s)&&!pe(i)?(s.value=i,!0):Reflect.set(e,t,i,n)}};function Cl(e){return ot(e)?e:new Proxy(e,Ic)}function wc(e){const t=H(e)?new Array(e.length):{};for(const i in e)t[i]=Tl(e,i);return t}class Nc{constructor(t,i,n){this._object=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=je(i)?i:String(i),this._raw=Q(t);let s=!0,r=t;if(!H(t)||je(this._key)||!on(this._key))do s=!pn(r)||Fe(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=ye(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&pe(this._raw[this._key])){const i=this._object[this._key];if(pe(i)){i.value=t;return}}this._object[this._key]=t}get dep(){return uc(this._raw,this._key)}}class $c{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Oc(e,t,i){return pe(e)?e:W(e)?new $c(e):se(e)&&arguments.length>1?Tl(e,t,i):hn(e)}function Tl(e,t,i){return new Nc(e,t,i)}class Pc{constructor(t,i,n){this.fn=t,this.setter=i,this._value=void 0,this.dep=new _s(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return cl(this,!0),!0}get value(){const t=this.dep.track();return fl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function kc(e,t,i=!1){let n,s;return W(e)?n=e:(n=e.get,s=e.set),new Pc(n,s,i)}const Vi={},qi=new WeakMap;let Dt;function Mc(e,t=!1,i=Dt){if(i){let n=qi.get(i);n||qi.set(i,n=[]),n.push(e)}}function Dc(e,t,i=ce){const{immediate:n,deep:s,once:r,scheduler:l,augmentJob:o,call:c}=i,u=_=>s?_:Fe(_)||s===!1||s===0?vt(_,1):vt(_);let a,p,g,m,R=!1,S=!1;if(pe(e)?(p=()=>e.value,R=Fe(e)):ot(e)?(p=()=>u(e),R=!0):H(e)?(S=!0,R=e.some(_=>ot(_)||Fe(_)),p=()=>e.map(_=>{if(pe(_))return _.value;if(ot(_))return u(_);if(W(_))return c?c(_,2):_()})):W(e)?t?p=c?()=>c(e,2):e:p=()=>{if(g){ct();try{g()}finally{at()}}const _=Dt;Dt=a;try{return c?c(e,3,[m]):e(m)}finally{Dt=_}}:p=lt,t&&s){const _=p,M=s===!0?1/0:s;p=()=>vt(_(),M)}const I=rl(),O=()=>{a.stop(),I&&I.active&&ps(I.effects,a)};if(r&&t){const _=t;t=(...M)=>{const z=_(...M);return O(),z}}let b=S?new Array(e.length).fill(Vi):Vi;const y=_=>{if(!(!(a.flags&1)||!a.dirty&&!_))if(t){const M=a.run();if(_||s||R||(S?M.some((z,D)=>rt(z,b[D])):rt(M,b))){g&&g();const z=Dt;Dt=a;try{const D=[M,b===Vi?void 0:S&&b[0]===Vi?[]:b,m];b=M,c?c(t,3,D):t(...D)}finally{Dt=z}}}else a.run()};return o&&o(y),a=new ll(p),a.scheduler=l?()=>l(y,!1):y,m=_=>Mc(_,!1,a),g=a.onStop=()=>{const _=qi.get(a);if(_){if(c)c(_,4);else for(const M of _)M();qi.delete(a)}},t?n?y(!0):b=a.run():l?l(y.bind(null,!0),!0):a.run(),O.pause=a.pause.bind(a),O.resume=a.resume.bind(a),O.stop=O,O}function vt(e,t=1/0,i){if(t<=0||!se(e)||e.__v_skip||(i=i||new Map,(i.get(e)||0)>=t))return e;if(i.set(e,t),t--,pe(e))vt(e.value,t,i);else if(H(e))for(let n=0;n<e.length;n++)vt(e[n],t,i);else if(ai(e)||Qt(e))e.forEach(n=>{vt(n,t,i)});else if(Qr(e)){for(const n in e)vt(e[n],t,i);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&vt(e[n],t,i)}return e}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(e,t,i,n){try{return n?e(...n):e()}catch(s){gn(s,t,i)}}function Je(e,t,i,n){if(W(e)){const s=Mi(e,t,i,n);return s&&Jr(s)&&s.catch(r=>{gn(r,t,i)}),s}if(H(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Je(e[r],t,i,n));return s}}function gn(e,t,i,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||ce;if(t){let o=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${i}`;for(;o;){const a=o.ec;if(a){for(let p=0;p<a.length;p++)if(a[p](e,c,u)===!1)return}o=o.parent}if(r){ct(),Mi(r,null,10,[e,c,u]),at();return}}Lc(e,i,s,n,l)}function Lc(e,t,i,n=!0,s=!1){if(s)throw e;console.error(e)}const Oe=[];let it=-1;const ei=[];let Et=null,qt=0;const Rl=Promise.resolve();let zi=null;function mn(e){const t=zi||Rl;return e?t.then(this?e.bind(this):e):t}function Bc(e){let t=it+1,i=Oe.length;for(;t<i;){const n=t+i>>>1,s=Oe[n],r=Ni(s);r<e||r===e&&s.flags&2?t=n+1:i=n}return t}function Ts(e){if(!(e.flags&1)){const t=Ni(e),i=Oe[Oe.length-1];!i||!(e.flags&2)&&t>=Ni(i)?Oe.push(e):Oe.splice(Bc(t),0,e),e.flags|=1,Al()}}function Al(){zi||(zi=Rl.then(xl))}function Vc(e){H(e)?ei.push(...e):Et&&e.id===-1?Et.splice(qt+1,0,e):e.flags&1||(ei.push(e),e.flags|=1),Al()}function Ws(e,t,i=it+1){for(;i<Oe.length;i++){const n=Oe[i];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Oe.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function El(e){if(ei.length){const t=[...new Set(ei)].sort((i,n)=>Ni(i)-Ni(n));if(ei.length=0,Et){Et.push(...t);return}for(Et=t,qt=0;qt<Et.length;qt++){const i=Et[qt];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}Et=null,qt=0}}const Ni=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xl(e){try{for(it=0;it<Oe.length;it++){const t=Oe[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;it<Oe.length;it++){const t=Oe[it];t&&(t.flags&=-2)}it=-1,Oe.length=0,El(),zi=null,(Oe.length||ei.length)&&xl()}}let Re=null,Il=null;function Xi(e){const t=Re;return Re=e,Il=e&&e.type.__scopeId||null,t}function Rs(e,t=Re,i){if(!t||e._n)return e;const n=(...s)=>{n._d&&en(-1);const r=Xi(t);let l;try{l=e(...s)}finally{Xi(r),n._d&&en(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function Fc(e,t){if(Re===null)return e;const i=yn(Re),n=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,l,o,c=ce]=t[s];r&&(W(r)&&(r={mounted:r,updated:r}),r.deep&&vt(l),n.push({dir:r,instance:i,value:l,oldValue:void 0,arg:o,modifiers:c}))}return e}function kt(e,t,i,n){const s=e.dirs,r=t&&t.dirs;for(let l=0;l<s.length;l++){const o=s[l];r&&(o.oldValue=r[l].value);let c=o.dir[n];c&&(ct(),Je(c,i,8,[e.el,o,e,t]),at())}}function Ui(e,t){if(we){let i=we.provides;const n=we.parent&&we.parent.provides;n===i&&(i=we.provides=Object.create(n)),i[e]=t}}function Ge(e,t,i=!1){const n=Ns();if(n||jt){let s=jt?jt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return i&&W(t)?t.call(n&&n.proxy):t}}function jc(){return!!(Ns()||jt)}const Hc=Symbol.for("v-scx"),Uc=()=>Ge(Hc);function Ft(e,t,i){return wl(e,t,i)}function wl(e,t,i=ce){const{immediate:n,deep:s,flush:r,once:l}=i,o=Ae({},i),c=t&&n||!t&&r!=="post";let u;if(Oi){if(r==="sync"){const m=Uc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=lt,m.resume=lt,m.pause=lt,m}}const a=we;o.call=(m,R,S)=>Je(m,a,R,S);let p=!1;r==="post"?o.scheduler=m=>{_e(m,a&&a.suspense)}:r!=="sync"&&(p=!0,o.scheduler=(m,R)=>{R?m():Ts(m)}),o.augmentJob=m=>{t&&(m.flags|=4),p&&(m.flags|=2,a&&(m.id=a.uid,m.i=a))};const g=Dc(e,t,o);return Oi&&(u?u.push(g):c&&g()),g}function Kc(e,t,i){const n=this.proxy,s=ue(e)?e.includes(".")?Nl(n,e):()=>n[e]:e.bind(n,n);let r;W(t)?r=t:(r=t.handler,i=t);const l=Di(this),o=wl(s,r.bind(n),i);return l(),o}function Nl(e,t){const i=t.split(".");return()=>{let n=e;for(let s=0;s<i.length&&n;s++)n=n[i[s]];return n}}const Rt=new WeakMap,$l=Symbol("_vte"),Gc=e=>e.__isTeleport,Lt=e=>e&&(e.disabled||e.disabled===""),Wc=e=>e&&(e.defer||e.defer===""),qs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,zs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Xn=(e,t)=>{const i=e&&e.to;return ue(i)?t?t(i):null:i},qc={name:"Teleport",__isTeleport:!0,process(e,t,i,n,s,r,l,o,c,u){const{mc:a,pc:p,pbc:g,o:{insert:m,querySelector:R,createText:S,createComment:I,parentNode:O}}=u,b=Lt(t.props);let{dynamicChildren:y}=t;const _=(D,B,V)=>{D.shapeFlag&16&&a(D.children,B,V,s,r,l,o,c)},M=(D=t)=>{const B=Lt(D.props),V=D.target=Xn(D.props,R),X=Jn(V,D,S,m);V&&(l!=="svg"&&qs(V)?l="svg":l!=="mathml"&&zs(V)&&(l="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(V),B||(_(D,V,X),gi(D,!1)))},z=D=>{const B=()=>{if(Rt.get(D)===B){if(Rt.delete(D),Lt(D.props)){const V=O(D.el)||i;_(D,V,D.anchor),gi(D,!0)}M(D)}};Rt.set(D,B),_e(B,r)};if(e==null){const D=t.el=S(""),B=t.anchor=S("");if(m(D,i,n),m(B,i,n),Wc(t.props)||r&&r.pendingBranch){z(t);return}b&&(_(t,i,B),gi(t,!0)),M()}else{t.el=e.el;const D=t.anchor=e.anchor,B=Rt.get(e);if(B){B.flags|=8,Rt.delete(e),z(t);return}t.targetStart=e.targetStart;const V=t.target=e.target,X=t.targetAnchor=e.targetAnchor,fe=Lt(e.props),Ee=fe?i:V,xe=fe?D:X;if(l==="svg"||qs(V)?l="svg":(l==="mathml"||zs(V))&&(l="mathml"),y?(g(e.dynamicChildren,y,Ee,s,r,l,o),ws(e,t,!0)):c||p(e,t,Ee,xe,s,r,l,o,!1),b)fe?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Fi(t,i,D,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const qe=Xn(t.props,R);qe&&(t.target=qe,Fi(t,qe,null,u,0))}else fe&&Fi(t,V,X,u,1);gi(t,b)}},remove(e,t,i,{um:n,o:{remove:s}},r){const{shapeFlag:l,children:o,anchor:c,targetStart:u,targetAnchor:a,target:p,props:g}=e,m=Lt(g),R=r||!m,S=Rt.get(e);if(S&&(S.flags|=8,Rt.delete(e)),p&&(s(u),s(a)),r&&s(c),!S&&(m||p)&&l&16)for(let I=0;I<o.length;I++){const O=o[I];n(O,t,i,R,!!O.dynamicChildren)}},move:Fi,hydrate:zc};function Fi(e,t,i,{o:{insert:n},m:s},r=2){r===0&&n(e.targetAnchor,t,i);const{el:l,anchor:o,shapeFlag:c,children:u,props:a}=e,p=r===2;if(p&&n(l,t,i),!Rt.has(e)&&(!p||Lt(a))&&c&16)for(let g=0;g<u.length;g++)s(u[g],t,i,2);p&&n(o,t,i)}function zc(e,t,i,n,s,r,{o:{nextSibling:l,parentNode:o,querySelector:c,insert:u,createText:a}},p){function g(I,O){let b=O;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")t.targetStart=b;else if(b.data==="teleport anchor"){t.targetAnchor=b,I._lpa=t.targetAnchor&&l(t.targetAnchor);break}}b=l(b)}}function m(I,O){O.anchor=p(l(I),O,o(I),i,n,s,r)}const R=t.target=Xn(t.props,c),S=Lt(t.props);if(R){const I=R._lpa||R.firstChild;t.shapeFlag&16&&(S?(m(e,t),g(R,I),t.targetAnchor||Jn(R,t,a,u,o(e)===R?e:null)):(t.anchor=l(e),g(R,I),t.targetAnchor||Jn(R,t,a,u),p(I&&l(I),t,R,i,n,s,r))),gi(t,S)}else S&&t.shapeFlag&16&&(m(e,t),t.targetStart=e,t.targetAnchor=l(e));return t.anchor&&l(t.anchor)}const th=qc;function gi(e,t){const i=e.ctx;if(i&&i.ut){let n,s;for(t?(n=e.el,s=e.anchor):(n=e.targetStart,s=e.targetAnchor);n&&n!==s;)n.nodeType===1&&n.setAttribute("data-v-owner",i.uid),n=n.nextSibling;i.ut()}}function Jn(e,t,i,n,s=null){const r=t.targetStart=i(""),l=t.targetAnchor=i("");return r[$l]=l,e&&(n(r,e,s),n(l,e,s)),l}const On=Symbol("_leaveCb");function vn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,vn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ol(e,t){return W(e)?Ae({name:e.name},t,{setup:e}):e}function Pl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xs(e,t){let i;return!!((i=Object.getOwnPropertyDescriptor(e,t))&&!i.configurable)}const Ji=new WeakMap;function Ci(e,t,i,n,s=!1){if(H(e)){e.forEach((S,I)=>Ci(S,t&&(H(t)?t[I]:t),i,n,s));return}if(wt(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ci(e,t,i,n.component.subTree);return}const r=n.shapeFlag&4?yn(n.component):n.el,l=s?null:r,{i:o,r:c}=e,u=t&&t.r,a=o.refs===ce?o.refs={}:o.refs,p=o.setupState,g=Q(p),m=p===ce?Xr:S=>Xs(a,S)?!1:ie(g,S),R=(S,I)=>!(I&&Xs(a,I));if(u!=null&&u!==c){if(Js(t),ue(u))a[u]=null,m(u)&&(p[u]=null);else if(pe(u)){const S=t;R(u,S.k)&&(u.value=null),S.k&&(a[S.k]=null)}}if(W(c)){ct();try{Mi(c,o,12,[l,a])}finally{at()}}else{const S=ue(c),I=pe(c);if(S||I){const O=()=>{if(e.f){const b=S?m(c)?p[c]:a[c]:R()||!e.k?c.value:a[e.k];if(s)H(b)&&ps(b,r);else if(H(b))b.includes(r)||b.push(r);else if(S)a[c]=[r],m(c)&&(p[c]=a[c]);else{const y=[r];R(c,e.k)&&(c.value=y),e.k&&(a[e.k]=y)}}else S?(a[c]=l,m(c)&&(p[c]=l)):I&&(R(c,e.k)&&(c.value=l),e.k&&(a[e.k]=l))};if(l){const b=()=>{O(),Ji.delete(e)};b.id=-1,Ji.set(e,b),_e(b,i)}else Js(e),O()}}}function Js(e){const t=Ji.get(e);t&&(t.flags|=8,Ji.delete(e))}fn().requestIdleCallback;fn().cancelIdleCallback;const wt=e=>!!e.type.__asyncLoader,kl=e=>e.type.__isKeepAlive,Xc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const i=Ns(),n=i.ctx;if(!n.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const s=new Map,r=new Set;let l=null;const o=i.suspense,{renderer:{p:c,m:u,um:a,o:{createElement:p}}}=n,g=p("div");n.activate=(b,y,_,M,z)=>{const D=b.component;u(b,y,_,0,o),c(D.vnode,b,y,_,D,o,M,b.slotScopeIds,z),_e(()=>{D.isDeactivated=!1,D.a&&Zt(D.a);const B=b.props&&b.props.onVnodeMounted;B&&Ue(B,D.parent,b)},o)},n.deactivate=b=>{const y=b.component;Qi(y.m),Qi(y.a),u(b,g,null,1,o),_e(()=>{y.da&&Zt(y.da);const _=b.props&&b.props.onVnodeUnmounted;_&&Ue(_,y.parent,b),y.isDeactivated=!0},o)};function m(b){Pn(b),a(b,i,o,!0)}function R(b){s.forEach((y,_)=>{const M=ns(wt(y)?y.type.__asyncResolved||{}:y.type);M&&!b(M)&&S(_)})}function S(b){const y=s.get(b);y&&(!l||!zt(y,l))?m(y):l&&Pn(l),s.delete(b),r.delete(b)}Ft(()=>[e.include,e.exclude],([b,y])=>{b&&R(_=>mi(b,_)),y&&R(_=>!mi(y,_))},{flush:"post",deep:!0});let I=null;const O=()=>{I!=null&&(Zi(i.subTree.type)?_e(()=>{s.set(I,ji(i.subTree))},i.subTree.suspense):s.set(I,ji(i.subTree)))};return As(O),Dl(O),Ll(()=>{s.forEach(b=>{const{subTree:y,suspense:_}=i,M=ji(y);if(b.type===M.type&&b.key===M.key){Pn(M);const z=M.component.da;z&&_e(z,_);return}m(b)})}),()=>{if(I=null,!t.default)return l=null;const b=t.default(),y=b[0];if(b.length>1)return l=null,b;if(!ri(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return l=null,y;let _=ji(y);if(_.type===ut)return l=null,_;const M=_.type,z=ns(wt(_)?_.type.__asyncResolved||{}:M),{include:D,exclude:B,max:V}=e;if(D&&(!z||!mi(D,z))||B&&z&&mi(B,z))return _.shapeFlag&=-257,l=_,y;const X=_.key==null?M:_.key,fe=s.get(X);return _.el&&(_=Ht(_),y.shapeFlag&128&&(y.ssContent=_)),I=X,fe?(_.el=fe.el,_.component=fe.component,_.transition&&vn(_,_.transition),_.shapeFlag|=512,r.delete(X),r.add(X)):(r.add(X),V&&r.size>parseInt(V,10)&&S(r.values().next().value)),_.shapeFlag|=256,l=_,Zi(y.type)?y:_}}},Jc=Xc;function mi(e,t){return H(e)?e.some(i=>mi(i,t)):ue(e)?e.split(",").includes(t):Jo(e)?(e.lastIndex=0,e.test(t)):!1}function Yc(e,t){Ml(e,"a",t)}function Qc(e,t){Ml(e,"da",t)}function Ml(e,t,i=we){const n=e.__wdc||(e.__wdc=()=>{let s=i;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(bn(t,n,i),i){let s=i.parent;for(;s&&s.parent;)kl(s.parent.vnode)&&Zc(n,t,i,s),s=s.parent}}function Zc(e,t,i,n){const s=bn(t,e,n,!0);Bl(()=>{ps(n[t],s)},i)}function Pn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ji(e){return e.shapeFlag&128?e.ssContent:e}function bn(e,t,i=we,n=!1){if(i){const s=i[e]||(i[e]=[]),r=t.__weh||(t.__weh=(...l)=>{ct();const o=Di(i),c=Je(t,i,e,l);return o(),at(),c});return n?s.unshift(r):s.push(r),r}}const St=e=>(t,i=we)=>{(!Oi||e==="sp")&&bn(e,(...n)=>t(...n),i)},ea=St("bm"),As=St("m"),ta=St("bu"),Dl=St("u"),Ll=St("bum"),Bl=St("um"),ia=St("sp"),na=St("rtg"),sa=St("rtc");function ra(e,t=we){bn("ec",e,t)}const Vl="components";function Es(e,t){return jl(Vl,e,!0,t)||e}const Fl=Symbol.for("v-ndc");function la(e){return ue(e)?jl(Vl,e,!1)||e:e||Fl}function jl(e,t,i=!0,n=!1){const s=Re||we;if(s){const r=s.type;{const o=ns(r,!1);if(o&&(o===t||o===ke(t)||o===an(ke(t))))return r}const l=Ys(s[e]||r[e],t)||Ys(s.appContext[e],t);return!l&&n?r:l}}function Ys(e,t){return e&&(e[t]||e[ke(t)]||e[an(ke(t))])}function Yn(e,t,i,n){let s;const r=i,l=H(e);if(l||ue(e)){const o=l&&ot(e);let c=!1,u=!1;o&&(c=!Fe(e),u=_t(e),e=dn(e)),s=new Array(e.length);for(let a=0,p=e.length;a<p;a++)s[a]=t(c?u?ni(Xe(e[a])):Xe(e[a]):e[a],a,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r)}else if(se(e))if(e[Symbol.iterator])s=Array.from(e,(o,c)=>t(o,c,void 0,r));else{const o=Object.keys(e);s=new Array(o.length);for(let c=0,u=o.length;c<u;c++){const a=o[c];s[c]=t(e[a],a,c,r)}}else s=[];return s}function ih(e,t,i={},n,s){if(Re.ce||Re.parent&&wt(Re.parent)&&Re.parent.ce){const u=Object.keys(i).length>0;return t!=="default"&&(i.name=t),Se(),si(Pe,null,[me("slot",i,n&&n())],u?-2:64)}let r=e[t];r&&r._c&&(r._d=!1),Se();const l=r&&Hl(r(i)),o=i.key||l&&l.key,c=si(Pe,{key:(o&&!je(o)?o:`_${t}`)+(!l&&n?"_fb":"")},l||(n?n():[]),l&&e._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Hl(e){return e.some(t=>ri(t)?!(t.type===ut||t.type===Pe&&!Hl(t.children)):!0)?e:null}const Qn=e=>e?co(e)?yn(e):Qn(e.parent):null,Ti=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qn(e.parent),$root:e=>Qn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Kl(e),$forceUpdate:e=>e.f||(e.f=()=>{Ts(e.update)}),$nextTick:e=>e.n||(e.n=mn.bind(e.proxy)),$watch:e=>Kc.bind(e)}),kn=(e,t)=>e!==ce&&!e.__isScriptSetup&&ie(e,t),oa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:i,setupState:n,data:s,props:r,accessCache:l,type:o,appContext:c}=e;if(t[0]!=="$"){const g=l[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return s[t];case 4:return i[t];case 3:return r[t]}else{if(kn(n,t))return l[t]=1,n[t];if(s!==ce&&ie(s,t))return l[t]=2,s[t];if(ie(r,t))return l[t]=3,r[t];if(i!==ce&&ie(i,t))return l[t]=4,i[t];Zn&&(l[t]=0)}}const u=Ti[t];let a,p;if(u)return t==="$attrs"&&Ie(e.attrs,"get",""),u(e);if((a=o.__cssModules)&&(a=a[t]))return a;if(i!==ce&&ie(i,t))return l[t]=4,i[t];if(p=c.config.globalProperties,ie(p,t))return p[t]},set({_:e},t,i){const{data:n,setupState:s,ctx:r}=e;return kn(s,t)?(s[t]=i,!0):n!==ce&&ie(n,t)?(n[t]=i,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:n,appContext:s,props:r,type:l}},o){let c;return!!(i[o]||e!==ce&&o[0]!=="$"&&ie(e,o)||kn(t,o)||ie(r,o)||ie(n,o)||ie(Ti,o)||ie(s.config.globalProperties,o)||(c=l.__cssModules)&&c[o])},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:ie(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function Qs(e){return H(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let Zn=!0;function ca(e){const t=Kl(e),i=e.proxy,n=e.ctx;Zn=!1,t.beforeCreate&&Zs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:l,watch:o,provide:c,inject:u,created:a,beforeMount:p,mounted:g,beforeUpdate:m,updated:R,activated:S,deactivated:I,beforeDestroy:O,beforeUnmount:b,destroyed:y,unmounted:_,render:M,renderTracked:z,renderTriggered:D,errorCaptured:B,serverPrefetch:V,expose:X,inheritAttrs:fe,components:Ee,directives:xe,filters:qe}=t;if(u&&aa(u,n,null),l)for(const q in l){const ee=l[q];W(ee)&&(n[q]=ee.bind(i))}if(s){const q=s.call(i,i);se(q)&&(e.data=ki(q))}if(Zn=!0,r)for(const q in r){const ee=r[q],ft=W(ee)?ee.bind(i,i):W(ee.get)?ee.get.bind(i,i):lt,Ct=!W(ee)&&W(ee.set)?ee.set.bind(i):lt,Qe=Be({get:ft,set:Ct});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Me=>Qe.value=Me})}if(o)for(const q in o)Ul(o[q],n,i,q);if(c){const q=W(c)?c.call(i):c;Reflect.ownKeys(q).forEach(ee=>{Ui(ee,q[ee])})}a&&Zs(a,e,"c");function de(q,ee){H(ee)?ee.forEach(ft=>q(ft.bind(i))):ee&&q(ee.bind(i))}if(de(ea,p),de(As,g),de(ta,m),de(Dl,R),de(Yc,S),de(Qc,I),de(ra,B),de(sa,z),de(na,D),de(Ll,b),de(Bl,_),de(ia,V),H(X))if(X.length){const q=e.exposed||(e.exposed={});X.forEach(ee=>{Object.defineProperty(q,ee,{get:()=>i[ee],set:ft=>i[ee]=ft,enumerable:!0})})}else e.exposed||(e.exposed={});M&&e.render===lt&&(e.render=M),fe!=null&&(e.inheritAttrs=fe),Ee&&(e.components=Ee),xe&&(e.directives=xe),V&&Pl(e)}function aa(e,t,i=lt){H(e)&&(e=es(e));for(const n in e){const s=e[n];let r;se(s)?"default"in s?r=Ge(s.from||n,s.default,!0):r=Ge(s.from||n):r=Ge(s),pe(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[n]=r}}function Zs(e,t,i){Je(H(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,i)}function Ul(e,t,i,n){let s=n.includes(".")?Nl(i,n):()=>i[n];if(ue(e)){const r=t[e];W(r)&&Ft(s,r)}else if(W(e))Ft(s,e.bind(i));else if(se(e))if(H(e))e.forEach(r=>Ul(r,t,i,n));else{const r=W(e.handler)?e.handler.bind(i):t[e.handler];W(r)&&Ft(s,r,e)}}function Kl(e){const t=e.type,{mixins:i,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,o=r.get(t);let c;return o?c=o:!s.length&&!i&&!n?c=t:(c={},s.length&&s.forEach(u=>Yi(c,u,l,!0)),Yi(c,t,l)),se(t)&&r.set(t,c),c}function Yi(e,t,i,n=!1){const{mixins:s,extends:r}=t;r&&Yi(e,r,i,!0),s&&s.forEach(l=>Yi(e,l,i,!0));for(const l in t)if(!(n&&l==="expose")){const o=ua[l]||i&&i[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const ua={data:er,props:tr,emits:tr,methods:vi,computed:vi,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:vi,directives:vi,watch:da,provide:er,inject:fa};function er(e,t){return t?e?function(){return Ae(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function fa(e,t){return vi(es(e),es(t))}function es(e){if(H(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function vi(e,t){return e?Ae(Object.create(null),e,t):t}function tr(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Ae(Object.create(null),Qs(e),Qs(t??{})):t}function da(e,t){if(!e)return t;if(!t)return e;const i=Ae(Object.create(null),e);for(const n in t)i[n]=Ne(e[n],t[n]);return i}function Gl(){return{app:null,config:{isNativeTag:Xr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pa=0;function ha(e,t){return function(n,s=null){W(n)||(n=Ae({},n)),s!=null&&!se(s)&&(s=null);const r=Gl(),l=new WeakSet,o=[];let c=!1;const u=r.app={_uid:pa++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Ga,get config(){return r.config},set config(a){},use(a,...p){return l.has(a)||(a&&W(a.install)?(l.add(a),a.install(u,...p)):W(a)&&(l.add(a),a(u,...p))),u},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),u},component(a,p){return p?(r.components[a]=p,u):r.components[a]},directive(a,p){return p?(r.directives[a]=p,u):r.directives[a]},mount(a,p,g){if(!c){const m=u._ceVNode||me(n,s);return m.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),e(m,a,g),c=!0,u._container=a,a.__vue_app__=u,yn(m.component)}},onUnmount(a){o.push(a)},unmount(){c&&(Je(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(a,p){return r.provides[a]=p,u},runWithContext(a){const p=jt;jt=u;try{return a()}finally{jt=p}}};return u}}let jt=null;const ga=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ke(t)}Modifiers`]||e[`${Ot(t)}Modifiers`];function ma(e,t,...i){if(e.isUnmounted)return;const n=e.vnode.props||ce;let s=i;const r=t.startsWith("update:"),l=r&&ga(n,t.slice(7));l&&(l.trim&&(s=i.map(a=>ue(a)?a.trim():a)),l.number&&(s=i.map(un)));let o,c=n[o=xn(t)]||n[o=xn(ke(t))];!c&&r&&(c=n[o=xn(Ot(t))]),c&&Je(c,e,6,s);const u=n[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Je(u,e,6,s)}}const va=new WeakMap;function Wl(e,t,i=!1){const n=i?va:t.emitsCache,s=n.get(e);if(s!==void 0)return s;const r=e.emits;let l={},o=!1;if(!W(e)){const c=u=>{const a=Wl(u,t,!0);a&&(o=!0,Ae(l,a))};!i&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!o?(se(e)&&n.set(e,null),null):(H(r)?r.forEach(c=>l[c]=null):Ae(l,r),se(e)&&n.set(e,l),l)}function _n(e,t){return!e||!rn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Ot(t))||ie(e,t))}function ir(e){const{type:t,vnode:i,proxy:n,withProxy:s,propsOptions:[r],slots:l,attrs:o,emit:c,render:u,renderCache:a,props:p,data:g,setupState:m,ctx:R,inheritAttrs:S}=e,I=Xi(e);let O,b;try{if(i.shapeFlag&4){const _=s||n,M=_;O=st(u.call(M,_,a,p,m,g,R)),b=o}else{const _=t;O=st(_.length>1?_(p,{attrs:o,slots:l,emit:c}):_(p,null)),b=t.props?o:ba(o)}}catch(_){Ri.length=0,gn(_,e,1),O=me(ut)}let y=O;if(b&&S!==!1){const _=Object.keys(b),{shapeFlag:M}=y;_.length&&M&7&&(r&&_.some(ln)&&(b=_a(b,r)),y=Ht(y,b,!1,!0))}return i.dirs&&(y=Ht(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(i.dirs):i.dirs),i.transition&&vn(y,i.transition),O=y,Xi(I),O}const ba=e=>{let t;for(const i in e)(i==="class"||i==="style"||rn(i))&&((t||(t={}))[i]=e[i]);return t},_a=(e,t)=>{const i={};for(const n in e)(!ln(n)||!(n.slice(9)in t))&&(i[n]=e[n]);return i};function Sa(e,t,i){const{props:n,children:s,component:r}=e,{props:l,children:o,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&c>=0){if(c&1024)return!0;if(c&16)return n?nr(n,l,u):!!l;if(c&8){const a=t.dynamicProps;for(let p=0;p<a.length;p++){const g=a[p];if(ql(l,n,g)&&!_n(u,g))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===l?!1:n?l?nr(n,l,u):!0:!!l;return!1}function nr(e,t,i){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(ql(t,e,r)&&!_n(i,r))return!0}return!1}function ql(e,t,i){const n=e[i],s=t[i];return i==="style"&&se(n)&&se(s)?!Nt(n,s):n!==s}function ya({vnode:e,parent:t,suspense:i},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=n,e=s),s===e)(e=t.vnode).el=n,t=t.parent;else break}i&&i.activeBranch===e&&(i.vnode.el=n)}const zl={},Xl=()=>Object.create(zl),Jl=e=>Object.getPrototypeOf(e)===zl;function Ca(e,t,i,n=!1){const s={},r=Xl();e.propsDefaults=Object.create(null),Yl(e,t,s,r);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);i?e.props=n?s:Sl(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ta(e,t,i,n){const{props:s,attrs:r,vnode:{patchFlag:l}}=e,o=Q(s),[c]=e.propsOptions;let u=!1;if((n||l>0)&&!(l&16)){if(l&8){const a=e.vnode.dynamicProps;for(let p=0;p<a.length;p++){let g=a[p];if(_n(e.emitsOptions,g))continue;const m=t[g];if(c)if(ie(r,g))m!==r[g]&&(r[g]=m,u=!0);else{const R=ke(g);s[R]=ts(c,o,R,m,e,!1)}else m!==r[g]&&(r[g]=m,u=!0)}}}else{Yl(e,t,s,r)&&(u=!0);let a;for(const p in o)(!t||!ie(t,p)&&((a=Ot(p))===p||!ie(t,a)))&&(c?i&&(i[p]!==void 0||i[a]!==void 0)&&(s[p]=ts(c,o,p,void 0,e,!0)):delete s[p]);if(r!==o)for(const p in r)(!t||!ie(t,p))&&(delete r[p],u=!0)}u&&mt(e.attrs,"set","")}function Yl(e,t,i,n){const[s,r]=e.propsOptions;let l=!1,o;if(t)for(let c in t){if(_i(c))continue;const u=t[c];let a;s&&ie(s,a=ke(c))?!r||!r.includes(a)?i[a]=u:(o||(o={}))[a]=u:_n(e.emitsOptions,c)||(!(c in n)||u!==n[c])&&(n[c]=u,l=!0)}if(r){const c=Q(i),u=o||ce;for(let a=0;a<r.length;a++){const p=r[a];i[p]=ts(s,c,p,u[p],e,!ie(u,p))}}return l}function ts(e,t,i,n,s,r){const l=e[i];if(l!=null){const o=ie(l,"default");if(o&&n===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&W(c)){const{propsDefaults:u}=s;if(i in u)n=u[i];else{const a=Di(s);n=u[i]=c.call(null,t),a()}}else n=c;s.ce&&s.ce._setProp(i,n)}l[0]&&(r&&!o?n=!1:l[1]&&(n===""||n===Ot(i))&&(n=!0))}return n}const Ra=new WeakMap;function Ql(e,t,i=!1){const n=i?Ra:t.propsCache,s=n.get(e);if(s)return s;const r=e.props,l={},o=[];let c=!1;if(!W(e)){const a=p=>{c=!0;const[g,m]=Ql(p,t,!0);Ae(l,g),m&&o.push(...m)};!i&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!r&&!c)return se(e)&&n.set(e,Yt),Yt;if(H(r))for(let a=0;a<r.length;a++){const p=ke(r[a]);sr(p)&&(l[p]=ce)}else if(r)for(const a in r){const p=ke(a);if(sr(p)){const g=r[a],m=l[p]=H(g)||W(g)?{type:g}:Ae({},g),R=m.type;let S=!1,I=!0;if(H(R))for(let O=0;O<R.length;++O){const b=R[O],y=W(b)&&b.name;if(y==="Boolean"){S=!0;break}else y==="String"&&(I=!1)}else S=W(R)&&R.name==="Boolean";m[0]=S,m[1]=I,(S||ie(m,"default"))&&o.push(p)}}const u=[l,o];return se(e)&&n.set(e,u),u}function sr(e){return e[0]!=="$"&&!_i(e)}const xs=e=>e==="_"||e==="_ctx"||e==="$stable",Is=e=>H(e)?e.map(st):[st(e)],Aa=(e,t,i)=>{if(t._n)return t;const n=Rs((...s)=>Is(t(...s)),i);return n._c=!1,n},Zl=(e,t,i)=>{const n=e._ctx;for(const s in e){if(xs(s))continue;const r=e[s];if(W(r))t[s]=Aa(s,r,n);else if(r!=null){const l=Is(r);t[s]=()=>l}}},eo=(e,t)=>{const i=Is(t);e.slots.default=()=>i},to=(e,t,i)=>{for(const n in t)(i||!xs(n))&&(e[n]=t[n])},Ea=(e,t,i)=>{const n=e.slots=Xl();if(e.vnode.shapeFlag&32){const s=t._;s?(to(n,t,i),i&&Zr(n,"_",s,!0)):Zl(t,n)}else t&&eo(e,t)},xa=(e,t,i)=>{const{vnode:n,slots:s}=e;let r=!0,l=ce;if(n.shapeFlag&32){const o=t._;o?i&&o===1?r=!1:to(s,t,i):(r=!t.$stable,Zl(t,s)),l=t}else t&&(eo(e,t),l={default:1});if(r)for(const o in s)!xs(o)&&l[o]==null&&delete s[o]},_e=Oa;function Ia(e){return wa(e)}function wa(e,t){const i=fn();i.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:l,createText:o,createComment:c,setText:u,setElementText:a,parentNode:p,nextSibling:g,setScopeId:m=lt,insertStaticContent:R}=e,S=(f,h,v,T=null,E=null,C=null,$=void 0,N=null,w=!!h.dynamicChildren)=>{if(f===h)return;f&&!zt(f,h)&&(T=A(f),Me(f,E,C,!0),f=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:x,ref:U,shapeFlag:k}=h;switch(x){case Sn:I(f,h,v,T);break;case ut:O(f,h,v,T);break;case Ki:f==null&&b(h,v,T,$);break;case Pe:Ee(f,h,v,T,E,C,$,N,w);break;default:k&1?M(f,h,v,T,E,C,$,N,w):k&6?xe(f,h,v,T,E,C,$,N,w):(k&64||k&128)&&x.process(f,h,v,T,E,C,$,N,w,F)}U!=null&&E?Ci(U,f&&f.ref,C,h||f,!h):U==null&&f&&f.ref!=null&&Ci(f.ref,null,C,f,!0)},I=(f,h,v,T)=>{if(f==null)n(h.el=o(h.children),v,T);else{const E=h.el=f.el;h.children!==f.children&&u(E,h.children)}},O=(f,h,v,T)=>{f==null?n(h.el=c(h.children||""),v,T):h.el=f.el},b=(f,h,v,T)=>{[f.el,f.anchor]=R(f.children,h,v,T,f.el,f.anchor)},y=({el:f,anchor:h},v,T)=>{let E;for(;f&&f!==h;)E=g(f),n(f,v,T),f=E;n(h,v,T)},_=({el:f,anchor:h})=>{let v;for(;f&&f!==h;)v=g(f),s(f),f=v;s(h)},M=(f,h,v,T,E,C,$,N,w)=>{if(h.type==="svg"?$="svg":h.type==="math"&&($="mathml"),f==null)z(h,v,T,E,C,$,N,w);else{const x=f.el&&f.el._isVueCE?f.el:null;try{x&&x._beginPatch(),V(f,h,E,C,$,N,w)}finally{x&&x._endPatch()}}},z=(f,h,v,T,E,C,$,N)=>{let w,x;const{props:U,shapeFlag:k,transition:j,dirs:G}=f;if(w=f.el=l(f.type,C,U&&U.is,U),k&8?a(w,f.children):k&16&&B(f.children,w,null,T,E,Mn(f,C),$,N),G&&kt(f,null,T,"created"),D(w,f,f.scopeId,$,T),U){for(const oe in U)oe!=="value"&&!_i(oe)&&r(w,oe,null,U[oe],C,T);"value"in U&&r(w,"value",null,U.value,C),(x=U.onVnodeBeforeMount)&&Ue(x,T,f)}G&&kt(f,null,T,"beforeMount");const Y=Na(E,j);Y&&j.beforeEnter(w),n(w,h,v),((x=U&&U.onVnodeMounted)||Y||G)&&_e(()=>{try{x&&Ue(x,T,f),Y&&j.enter(w),G&&kt(f,null,T,"mounted")}finally{}},E)},D=(f,h,v,T,E)=>{if(v&&m(f,v),T)for(let C=0;C<T.length;C++)m(f,T[C]);if(E){let C=E.subTree;if(h===C||Zi(C.type)&&(C.ssContent===h||C.ssFallback===h)){const $=E.vnode;D(f,$,$.scopeId,$.slotScopeIds,E.parent)}}},B=(f,h,v,T,E,C,$,N,w=0)=>{for(let x=w;x<f.length;x++){const U=f[x]=N?gt(f[x]):st(f[x]);S(null,U,h,v,T,E,C,$,N)}},V=(f,h,v,T,E,C,$)=>{const N=h.el=f.el;let{patchFlag:w,dynamicChildren:x,dirs:U}=h;w|=f.patchFlag&16;const k=f.props||ce,j=h.props||ce;let G;if(v&&Mt(v,!1),(G=j.onVnodeBeforeUpdate)&&Ue(G,v,h,f),U&&kt(h,f,v,"beforeUpdate"),v&&Mt(v,!0),x&&(!f.dynamicChildren||f.dynamicChildren.length!==x.length)&&(w=0,$=!1,x=null),(k.innerHTML&&j.innerHTML==null||k.textContent&&j.textContent==null)&&a(N,""),x?X(f.dynamicChildren,x,N,v,T,Mn(h,E),C):$||ee(f,h,N,null,v,T,Mn(h,E),C,!1),w>0){if(w&16)fe(N,k,j,v,E);else if(w&2&&k.class!==j.class&&r(N,"class",null,j.class,E),w&4&&r(N,"style",k.style,j.style,E),w&8){const Y=h.dynamicProps;for(let oe=0;oe<Y.length;oe++){const re=Y[oe],ge=k[re],Te=j[re];(Te!==ge||re==="value")&&r(N,re,ge,Te,E,v)}}w&1&&f.children!==h.children&&a(N,h.children)}else!$&&x==null&&fe(N,k,j,v,E);((G=j.onVnodeUpdated)||U)&&_e(()=>{G&&Ue(G,v,h,f),U&&kt(h,f,v,"updated")},T)},X=(f,h,v,T,E,C,$)=>{for(let N=0;N<h.length;N++){const w=f[N],x=h[N],U=w.el&&(w.type===Pe||!zt(w,x)||w.shapeFlag&198)?p(w.el):v;S(w,x,U,null,T,E,C,$,!0)}},fe=(f,h,v,T,E)=>{if(h!==v){if(h!==ce)for(const C in h)!_i(C)&&!(C in v)&&r(f,C,h[C],null,E,T);for(const C in v){if(_i(C))continue;const $=v[C],N=h[C];$!==N&&C!=="value"&&r(f,C,N,$,E,T)}"value"in v&&r(f,"value",h.value,v.value,E)}},Ee=(f,h,v,T,E,C,$,N,w)=>{const x=h.el=f?f.el:o(""),U=h.anchor=f?f.anchor:o("");let{patchFlag:k,dynamicChildren:j,slotScopeIds:G}=h;G&&(N=N?N.concat(G):G),f==null?(n(x,v,T),n(U,v,T),B(h.children||[],v,U,E,C,$,N,w)):k>0&&k&64&&j&&f.dynamicChildren&&f.dynamicChildren.length===j.length?(X(f.dynamicChildren,j,v,E,C,$,N),(h.key!=null||E&&h===E.subTree)&&ws(f,h,!0)):ee(f,h,v,U,E,C,$,N,w)},xe=(f,h,v,T,E,C,$,N,w)=>{h.slotScopeIds=N,f==null?h.shapeFlag&512?E.ctx.activate(h,v,T,$,w):qe(h,v,T,E,C,$,w):yt(f,h,w)},qe=(f,h,v,T,E,C,$)=>{const N=f.component=Va(f,T,E);if(kl(f)&&(N.ctx.renderer=F),Fa(N,!1,$),N.asyncDep){if(E&&E.registerDep(N,de,$),!f.el){const w=N.subTree=me(ut);O(null,w,h,v),f.placeholder=w.el}}else de(N,f,h,v,E,C,$)},yt=(f,h,v)=>{const T=h.component=f.component;if(Sa(f,h,v))if(T.asyncDep&&!T.asyncResolved){q(T,h,v);return}else T.next=h,T.update();else h.el=f.el,T.vnode=h},de=(f,h,v,T,E,C,$)=>{const N=()=>{if(f.isMounted){let{next:k,bu:j,u:G,parent:Y,vnode:oe}=f;{const et=io(f);if(et){k&&(k.el=oe.el,q(f,k,$)),et.asyncDep.then(()=>{_e(()=>{f.isUnmounted||x()},E)});return}}let re=k,ge;Mt(f,!1),k?(k.el=oe.el,q(f,k,$)):k=oe,j&&Zt(j),(ge=k.props&&k.props.onVnodeBeforeUpdate)&&Ue(ge,Y,k,oe),Mt(f,!0);const Te=ir(f),Ze=f.subTree;f.subTree=Te,S(Ze,Te,p(Ze.el),A(Ze),f,E,C),k.el=Te.el,re===null&&ya(f,Te.el),G&&_e(G,E),(ge=k.props&&k.props.onVnodeUpdated)&&_e(()=>Ue(ge,Y,k,oe),E)}else{let k;const{el:j,props:G}=h,{bm:Y,m:oe,parent:re,root:ge,type:Te}=f,Ze=wt(h);Mt(f,!1),Y&&Zt(Y),!Ze&&(k=G&&G.onVnodeBeforeMount)&&Ue(k,re,h),Mt(f,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(Te,f.parent?f.parent.type:void 0);const et=f.subTree=ir(f);S(null,et,v,T,f,E,C),h.el=et.el}if(oe&&_e(oe,E),!Ze&&(k=G&&G.onVnodeMounted)){const et=h;_e(()=>Ue(k,re,et),E)}(h.shapeFlag&256||re&&wt(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&_e(f.a,E),f.isMounted=!0,h=v=T=null}};f.scope.on();const w=f.effect=new ll(N);f.scope.off();const x=f.update=w.run.bind(w),U=f.job=w.runIfDirty.bind(w);U.i=f,U.id=f.uid,w.scheduler=()=>Ts(U),Mt(f,!0),x()},q=(f,h,v)=>{h.component=f;const T=f.vnode.props;f.vnode=h,f.next=null,Ta(f,h.props,T,v),xa(f,h.children,v),ct(),Ws(f),at()},ee=(f,h,v,T,E,C,$,N,w=!1)=>{const x=f&&f.children,U=f?f.shapeFlag:0,k=h.children,{patchFlag:j,shapeFlag:G}=h;if(j>0){if(j&128){Ct(x,k,v,T,E,C,$,N,w);return}else if(j&256){ft(x,k,v,T,E,C,$,N,w);return}}G&8?(U&16&&He(x,E,C),k!==x&&a(v,k)):U&16?G&16?Ct(x,k,v,T,E,C,$,N,w):He(x,E,C,!0):(U&8&&a(v,""),G&16&&B(k,v,T,E,C,$,N,w))},ft=(f,h,v,T,E,C,$,N,w)=>{f=f||Yt,h=h||Yt;const x=f.length,U=h.length,k=Math.min(x,U);let j;for(j=0;j<k;j++){const G=h[j]=w?gt(h[j]):st(h[j]);S(f[j],G,v,null,E,C,$,N,w)}x>U?He(f,E,C,!0,!1,k):B(h,v,T,E,C,$,N,w,k)},Ct=(f,h,v,T,E,C,$,N,w)=>{let x=0;const U=h.length;let k=f.length-1,j=U-1;for(;x<=k&&x<=j;){const G=f[x],Y=h[x]=w?gt(h[x]):st(h[x]);if(zt(G,Y))S(G,Y,v,null,E,C,$,N,w);else break;x++}for(;x<=k&&x<=j;){const G=f[k],Y=h[j]=w?gt(h[j]):st(h[j]);if(zt(G,Y))S(G,Y,v,null,E,C,$,N,w);else break;k--,j--}if(x>k){if(x<=j){const G=j+1,Y=G<U?h[G].el:T;for(;x<=j;)S(null,h[x]=w?gt(h[x]):st(h[x]),v,Y,E,C,$,N,w),x++}}else if(x>j)for(;x<=k;)Me(f[x],E,C,!0),x++;else{const G=x,Y=x,oe=new Map;for(x=Y;x<=j;x++){const De=h[x]=w?gt(h[x]):st(h[x]);De.key!=null&&oe.set(De.key,x)}let re,ge=0;const Te=j-Y+1;let Ze=!1,et=0;const fi=new Array(Te);for(x=0;x<Te;x++)fi[x]=0;for(x=G;x<=k;x++){const De=f[x];if(ge>=Te){Me(De,E,C,!0);continue}let tt;if(De.key!=null)tt=oe.get(De.key);else for(re=Y;re<=j;re++)if(fi[re-Y]===0&&zt(De,h[re])){tt=re;break}tt===void 0?Me(De,E,C,!0):(fi[tt-Y]=x+1,tt>=et?et=tt:Ze=!0,S(De,h[tt],v,null,E,C,$,N,w),ge++)}const Vs=Ze?$a(fi):Yt;for(re=Vs.length-1,x=Te-1;x>=0;x--){const De=Y+x,tt=h[De],Fs=h[De+1],js=De+1<U?Fs.el||no(Fs):T;fi[x]===0?S(null,tt,v,js,E,C,$,N,w):Ze&&(re<0||x!==Vs[re]?Qe(tt,v,js,2):re--)}}},Qe=(f,h,v,T,E=null)=>{const{el:C,type:$,transition:N,children:w,shapeFlag:x}=f;if(x&6){Qe(f.component.subTree,h,v,T);return}if(x&128){f.suspense.move(h,v,T);return}if(x&64){$.move(f,h,v,F);return}if($===Pe){n(C,h,v);for(let k=0;k<w.length;k++)Qe(w[k],h,v,T);n(f.anchor,h,v);return}if($===Ki){y(f,h,v);return}if(T!==2&&x&1&&N)if(T===0)N.persisted&&!C[On]?n(C,h,v):(N.beforeEnter(C),n(C,h,v),_e(()=>N.enter(C),E));else{const{leave:k,delayLeave:j,afterLeave:G}=N,Y=()=>{f.ctx.isUnmounted?s(C):n(C,h,v)},oe=()=>{const re=C._isLeaving||!!C[On];C._isLeaving&&C[On](!0),N.persisted&&!re?Y():k(C,()=>{Y(),G&&G()})};j?j(C,Y,oe):oe()}else n(C,h,v)},Me=(f,h,v,T=!1,E=!1)=>{const{type:C,props:$,ref:N,children:w,dynamicChildren:x,shapeFlag:U,patchFlag:k,dirs:j,cacheIndex:G,memo:Y}=f;if(k===-2&&(E=!1),N!=null&&(ct(),Ci(N,null,v,f,!0),at()),G!=null&&(h.renderCache[G]=void 0),U&256){h.ctx.deactivate(f);return}const oe=U&1&&j,re=!wt(f);let ge;if(re&&(ge=$&&$.onVnodeBeforeUnmount)&&Ue(ge,h,f),U&6)Pt(f.component,v,T);else{if(U&128){f.suspense.unmount(v,T);return}oe&&kt(f,null,h,"beforeUnmount"),U&64?f.type.remove(f,h,v,F,T):x&&!x.hasOnce&&(C!==Pe||k>0&&k&64)?He(x,h,v,!1,!0):(C===Pe&&k&384||!E&&U&16)&&He(w,h,v),T&&Ut(f)}const Te=Y!=null&&G==null;(re&&(ge=$&&$.onVnodeUnmounted)||oe||Te)&&_e(()=>{ge&&Ue(ge,h,f),oe&&kt(f,null,h,"unmounted"),Te&&(f.el=null)},v)},Ut=f=>{const{type:h,el:v,anchor:T,transition:E}=f;if(h===Pe){Kt(v,T);return}if(h===Ki){_(f);return}const C=()=>{s(v),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:$,delayLeave:N}=E,w=()=>$(v,C);N?N(f.el,C,w):w()}else C()},Kt=(f,h)=>{let v;for(;f!==h;)v=g(f),s(f),f=v;s(h)},Pt=(f,h,v)=>{const{bum:T,scope:E,job:C,subTree:$,um:N,m:w,a:x}=f;Qi(w),Qi(x),T&&Zt(T),E.stop(),C&&(C.flags|=8,Me($,f,h,v)),N&&_e(N,h),_e(()=>{f.isUnmounted=!0},h)},He=(f,h,v,T=!1,E=!1,C=0)=>{for(let $=C;$<f.length;$++)Me(f[$],h,v,T,E)},A=f=>{if(f.shapeFlag&6)return A(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=g(f.anchor||f.el),v=h&&h[$l];return v?g(v):h};let L=!1;const P=(f,h,v)=>{let T;f==null?h._vnode&&(Me(h._vnode,null,null,!0),T=h._vnode.component):S(h._vnode||null,f,h,null,null,null,v),h._vnode=f,L||(L=!0,Ws(T),El(),L=!1)},F={p:S,um:Me,m:Qe,r:Ut,mt:qe,mc:B,pc:ee,pbc:X,n:A,o:e};return{render:P,hydrate:void 0,createApp:ha(P)}}function Mn({type:e,props:t},i){return i==="svg"&&e==="foreignObject"||i==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:i}function Mt({effect:e,job:t},i){i?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Na(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ws(e,t,i=!1){const n=e.children,s=t.children;if(H(n)&&H(s))for(let r=0;r<n.length;r++){const l=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=gt(s[r]),o.el=l.el),!i&&o.patchFlag!==-2&&ws(l,o)),o.type===Sn&&(o.patchFlag===-1&&(o=s[r]=gt(o)),o.el=l.el),o.type===ut&&!o.el&&(o.el=l.el)}}function $a(e){const t=e.slice(),i=[0];let n,s,r,l,o;const c=e.length;for(n=0;n<c;n++){const u=e[n];if(u!==0){if(s=i[i.length-1],e[s]<u){t[n]=s,i.push(n);continue}for(r=0,l=i.length-1;r<l;)o=r+l>>1,e[i[o]]<u?r=o+1:l=o;u<e[i[r]]&&(r>0&&(t[n]=i[r-1]),i[r]=n)}}for(r=i.length,l=i[r-1];r-- >0;)i[r]=l,l=t[l];return i}function io(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:io(t)}function Qi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function no(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?no(t.subTree):null}const Zi=e=>e.__isSuspense;function Oa(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Vc(e)}const Pe=Symbol.for("v-fgt"),Sn=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Ki=Symbol.for("v-stc"),Ri=[];let Ve=null;function Se(e=!1){Ri.push(Ve=e?null:[])}function Pa(){Ri.pop(),Ve=Ri[Ri.length-1]||null}let $i=1;function en(e,t=!1){$i+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function so(e){return e.dynamicChildren=$i>0?Ve||Yt:null,Pa(),$i>0&&Ve&&Ve.push(e),e}function Le(e,t,i,n,s,r){return so(Z(e,t,i,n,s,r,!0))}function si(e,t,i,n,s){return so(me(e,t,i,n,s,!0))}function ri(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const ro=({key:e})=>e??null,Gi=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||pe(e)||W(e)?{i:Re,r:e,k:t,f:!!i}:e:null);function Z(e,t=null,i=null,n=0,s=null,r=e===Pe?0:1,l=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ro(t),ref:t&&Gi(t),scopeId:Il,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return o?(tn(c,i),r&128&&e.normalize(c)):i&&(c.shapeFlag|=ue(i)?8:16),$i>0&&!l&&Ve&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ve.push(c),c}const me=ka;function ka(e,t=null,i=null,n=0,s=null,r=!1){if((!e||e===Fl)&&(e=ut),ri(e)){const o=Ht(e,t,!0);return i&&tn(o,i),$i>0&&!r&&Ve&&(o.shapeFlag&6?Ve[Ve.indexOf(e)]=o:Ve.push(o)),o.patchFlag=-2,o}if(Ka(e)&&(e=e.__vccOpts),t){t=Ma(t);let{class:o,style:c}=t;o&&!ue(o)&&(t.class=It(o)),se(c)&&(pn(c)&&!H(c)&&(c=Ae({},c)),t.style=hs(c))}const l=ue(e)?1:Zi(e)?128:Gc(e)?64:se(e)?4:W(e)?2:0;return Z(e,t,i,n,s,l,r,!0)}function Ma(e){return e?pn(e)||Jl(e)?Ae({},e):e:null}function Ht(e,t,i=!1,n=!1){const{props:s,ref:r,patchFlag:l,children:o,transition:c}=e,u=t?Da(s||{},t):s,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ro(u),ref:t&&t.ref?i&&r?H(r)?r.concat(Gi(t)):[r,Gi(t)]:Gi(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&vn(a,c.clone(a)),a}function lo(e=" ",t=0){return me(Sn,null,e,t)}function nh(e,t){const i=me(Ki,null,e);return i.staticCount=t,i}function oo(e="",t=!1){return t?(Se(),si(ut,null,e)):me(ut,null,e)}function st(e){return e==null||typeof e=="boolean"?me(ut):H(e)?me(Pe,null,e.slice()):ri(e)?gt(e):me(Sn,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function tn(e,t){let i=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(H(t))i=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),tn(e,s()),s._c&&(s._d=!0));return}else{i=32;const s=t._;!s&&!Jl(t)?t._ctx=Re:s===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(W(t)){if(n&65){tn(e,{default:t});return}t={default:t,_ctx:Re},i=32}else t=String(t),n&64?(i=16,t=[lo(t)]):i=8;e.children=t,e.shapeFlag|=i}function Da(...e){const t={};for(let i=0;i<e.length;i++){const n=e[i];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=It([t.class,n.class]));else if(s==="style")t.style=hs([t.style,n.style]);else if(rn(s)){const r=t[s],l=n[s];l&&r!==l&&!(H(r)&&r.includes(l))?t[s]=r?[].concat(r,l):l:l==null&&r==null&&!ln(s)&&(t[s]=l)}else s!==""&&(t[s]=n[s])}return t}function Ue(e,t,i,n=null){Je(e,t,7,[i,n])}const La=Gl();let Ba=0;function Va(e,t,i){const n=e.type,s=(t?t.appContext:e.appContext)||La,r={uid:Ba++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ql(n,s),emitsOptions:Wl(n,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:n.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ma.bind(null,r),e.ce&&e.ce(r),r}let we=null;const Ns=()=>we||Re;let nn,is;{const e=fn(),t=(i,n)=>{let s;return(s=e[i])||(s=e[i]=[]),s.push(n),r=>{s.length>1?s.forEach(l=>l(r)):s[0](r)}};nn=t("__VUE_INSTANCE_SETTERS__",i=>we=i),is=t("__VUE_SSR_SETTERS__",i=>Oi=i)}const Di=e=>{const t=we;return nn(e),e.scope.on(),()=>{e.scope.off(),nn(t)}},rr=()=>{we&&we.scope.off(),nn(null)};function co(e){return e.vnode.shapeFlag&4}let Oi=!1;function Fa(e,t=!1,i=!1){t&&is(t);const{props:n,children:s}=e.vnode,r=co(e);Ca(e,n,r,t),Ea(e,s,i||t);const l=r?ja(e,t):void 0;return t&&is(!1),l}function ja(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,oa);const{setup:n}=i;if(n){ct();const s=e.setupContext=n.length>1?Ua(e):null,r=Di(e),l=Mi(n,e,0,[e.props,s]),o=Jr(l);if(at(),r(),(o||e.sp)&&!wt(e)&&Pl(e),o){if(l.then(rr,rr),t)return l.then(c=>{lr(e,c)}).catch(c=>{gn(c,e,0)});e.asyncDep=l}else lr(e,l)}else ao(e)}function lr(e,t,i){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=Cl(t)),ao(e)}function ao(e,t,i){const n=e.type;e.render||(e.render=n.render||lt);{const s=Di(e);ct();try{ca(e)}finally{at(),s()}}}const Ha={get(e,t){return Ie(e,"get",""),e[t]}};function Ua(e){const t=i=>{e.exposed=i||{}};return{attrs:new Proxy(e.attrs,Ha),slots:e.slots,emit:e.emit,expose:t}}function yn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Cl(Cs(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in Ti)return Ti[i](e)},has(t,i){return i in t||i in Ti}})):e.proxy}function ns(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Ka(e){return W(e)&&"__vccOpts"in e}const Be=(e,t)=>kc(e,t,Oi);function uo(e,t,i){try{en(-1);const n=arguments.length;return n===2?se(t)&&!H(t)?ri(t)?me(e,null,[t]):me(e,t):me(e,null,t):(n>3?i=Array.prototype.slice.call(arguments,2):n===3&&ri(i)&&(i=[i]),me(e,t,i))}finally{en(1)}}const Ga="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ss;const or=typeof window<"u"&&window.trustedTypes;if(or)try{ss=or.createPolicy("vue",{createHTML:e=>e})}catch{}const fo=ss?e=>ss.createHTML(e):e=>e,Wa="http://www.w3.org/2000/svg",qa="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,cr=ht&&ht.createElement("template"),za={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,n)=>{const s=t==="svg"?ht.createElementNS(Wa,e):t==="mathml"?ht.createElementNS(qa,e):i?ht.createElement(e,{is:i}):ht.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,n,s,r){const l=i?i.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),i),!(s===r||!(s=s.nextSibling)););else{cr.innerHTML=fo(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=cr.content;if(n==="svg"||n==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,i)}return[l?l.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},Xa=Symbol("_vtc");function Ja(e,t,i){const n=e[Xa];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const sn=Symbol("_vod"),po=Symbol("_vsh"),Ya={name:"show",beforeMount(e,{value:t},{transition:i}){e[sn]=e.style.display==="none"?"":e.style.display,i&&t?i.beforeEnter(e):pi(e,t)},mounted(e,{value:t},{transition:i}){i&&t&&i.enter(e)},updated(e,{value:t,oldValue:i},{transition:n}){!t!=!i&&(n?t?(n.beforeEnter(e),pi(e,!0),n.enter(e)):n.leave(e,()=>{pi(e,!1)}):pi(e,t))},beforeUnmount(e,{value:t}){pi(e,t)}};function pi(e,t){e.style.display=t?e[sn]:"none",e[po]=!t}const Qa=Symbol(""),Za=/(?:^|;)\s*display\s*:/;function eu(e,t,i){const n=e.style,s=ue(i);let r=!1;if(i&&!s){if(t)if(ue(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();i[o]==null&&bi(n,o,"")}else for(const l in t)i[l]==null&&bi(n,l,"");for(const l in i){l==="display"&&(r=!0);const o=i[l];o!=null?iu(e,l,!ue(t)&&t?t[l]:void 0,o)||bi(n,l,o):bi(n,l,"")}}else if(s){if(t!==i){const l=n[Qa];l&&(i+=";"+l),n.cssText=i,r=Za.test(i)}}else t&&e.removeAttribute("style");sn in e&&(e[sn]=r?n.display:"",e[po]&&(n.display="none"))}const ar=/\s*!important$/;function bi(e,t,i){if(H(i))i.forEach(n=>bi(e,t,n));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const n=tu(e,t);ar.test(i)?e.setProperty(Ot(n),i.replace(ar,""),"important"):e[n]=i}}const ur=["Webkit","Moz","ms"],Dn={};function tu(e,t){const i=Dn[t];if(i)return i;let n=ke(t);if(n!=="filter"&&n in e)return Dn[t]=n;n=an(n);for(let s=0;s<ur.length;s++){const r=ur[s]+n;if(r in e)return Dn[t]=r}return t}function iu(e,t,i,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ue(n)&&i===n}const fr="http://www.w3.org/1999/xlink";function dr(e,t,i,n,s,r=rc(t)){n&&t.startsWith("xlink:")?i==null?e.removeAttributeNS(fr,t.slice(6,t.length)):e.setAttributeNS(fr,t,i):i==null||r&&!el(i)?e.removeAttribute(t):e.setAttribute(t,r?"":je(i)?String(i):i)}function pr(e,t,i,n,s){if(t==="innerHTML"||t==="textContent"){i!=null&&(e[t]=t==="innerHTML"?fo(i):i);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,c=i==null?e.type==="checkbox"?"on":"":String(i);(o!==c||!("_value"in e))&&(e.value=c),i==null&&e.removeAttribute(t),e._value=i;return}let l=!1;if(i===""||i==null){const o=typeof e[t];o==="boolean"?i=el(i):i==null&&o==="string"?(i="",l=!0):o==="number"&&(i=0,l=!0)}try{e[t]=i}catch{}l&&e.removeAttribute(s||t)}function bt(e,t,i,n){e.addEventListener(t,i,n)}function nu(e,t,i,n){e.removeEventListener(t,i,n)}const hr=Symbol("_vei");function su(e,t,i,n,s=null){const r=e[hr]||(e[hr]={}),l=r[t];if(n&&l)l.value=n;else{const[o,c]=ou(t);if(n){const u=r[t]=uu(n,s);bt(e,o,u,c)}else l&&(nu(e,o,l,c),r[t]=void 0)}}const ru=/(Once|Passive|Capture)$/,lu=/^on:?(?:Once|Passive|Capture)$/;function ou(e){let t,i;for(;(i=e.match(ru))&&!lu.test(e);)t||(t={}),e=e.slice(0,e.length-i[1].length),t[i[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ot(e.slice(2)),t]}let Ln=0;const cu=Promise.resolve(),au=()=>Ln||(cu.then(()=>Ln=0),Ln=Date.now());function uu(e,t){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;const s=i.value;if(H(s)){const r=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{r.call(n),n._stopped=!0};const l=s.slice(),o=[n];for(let c=0;c<l.length&&!n._stopped;c++){const u=l[c];u&&Je(u,t,5,o)}}else Je(s,t,5,[n])};return i.value=e,i.attached=au(),i}const gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,fu=(e,t,i,n,s,r)=>{const l=s==="svg";t==="class"?Ja(e,n,l):t==="style"?eu(e,i,n):rn(t)?ln(t)||su(e,t,i,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):du(e,t,n,l))?(pr(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&dr(e,t,n,l,r,t!=="value")):e._isVueCE&&(pu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ue(n)))?pr(e,ke(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),dr(e,t,n,l))};function du(e,t,i,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&gr(t)&&W(i));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gr(t)&&ue(i)?!1:t in e}function pu(e,t){const i=e._def.props;if(!i)return!1;const n=ke(t);return Array.isArray(i)?i.some(s=>ke(s)===n):Object.keys(i).some(s=>ke(s)===n)}const $t=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?i=>Zt(t,i):t};function hu(e){e.target.composing=!0}function mr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const We=Symbol("_assign");function vr(e,t,i){return t&&(e=e.trim()),i&&(e=un(e)),e}const sh={created(e,{modifiers:{lazy:t,trim:i,number:n}},s){e[We]=$t(s);const r=n||s.props&&s.props.type==="number";bt(e,t?"change":"input",l=>{l.target.composing||e[We](vr(e.value,i,r))}),(i||r)&&bt(e,"change",()=>{e.value=vr(e.value,i,r)}),t||(bt(e,"compositionstart",hu),bt(e,"compositionend",mr),bt(e,"change",mr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:i,modifiers:{lazy:n,trim:s,number:r}},l){if(e[We]=$t(l),e.composing)return;const o=(r||e.type==="number")&&!/^0\d/.test(e.value)?un(e.value):e.value,c=t??"";if(o===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(n&&t===i||s&&e.value.trim()===c)||(e.value=c)}},rh={deep:!0,created(e,t,i){e[We]=$t(i),bt(e,"change",()=>{const n=e._modelValue,s=li(e),r=e.checked,l=e[We];if(H(n)){const o=gs(n,s),c=o!==-1;if(r&&!c)l(n.concat(s));else if(!r&&c){const u=[...n];u.splice(o,1),l(u)}}else if(ai(n)){const o=new Set(n);r?o.add(s):o.delete(s),l(o)}else l(ho(e,r))})},mounted:br,beforeUpdate(e,t,i){e[We]=$t(i),br(e,t,i)}};function br(e,{value:t,oldValue:i},n){e._modelValue=t;let s;if(H(t))s=gs(t,n.props.value)>-1;else if(ai(t))s=t.has(n.props.value);else{if(t===i)return;s=Nt(t,ho(e,!0))}e.checked!==s&&(e.checked=s)}const lh={created(e,{value:t},i){e.checked=Nt(t,i.props.value),e[We]=$t(i),bt(e,"change",()=>{e[We](li(e))})},beforeUpdate(e,{value:t,oldValue:i},n){e[We]=$t(n),t!==i&&(e.checked=Nt(t,n.props.value))}},oh={deep:!0,created(e,{value:t,modifiers:{number:i}},n){const s=ai(t);bt(e,"change",()=>{const r=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>i?un(li(l)):li(l));e[We](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,mn(()=>{e._assigning=!1})}),e[We]=$t(n)},mounted(e,{value:t}){_r(e,t)},beforeUpdate(e,t,i){e[We]=$t(i)},updated(e,{value:t}){e._assigning||_r(e,t)}};function _r(e,t){const i=e.multiple,n=H(t);if(!(i&&!n&&!ai(t))){for(let s=0,r=e.options.length;s<r;s++){const l=e.options[s],o=li(l);if(i)if(n){const c=typeof o;c==="string"||c==="number"?l.selected=t.some(u=>String(u)===String(o)):l.selected=gs(t,o)>-1}else l.selected=t.has(o);else if(Nt(li(l),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!i&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function li(e){return"_value"in e?e._value:e.value}function ho(e,t){const i=t?"_trueValue":"_falseValue";return i in e?e[i]:t}const gu=["ctrl","shift","alt","meta"],mu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>gu.some(i=>e[`${i}Key`]&&!t.includes(i))},vu=(e,t)=>{if(!e)return e;const i=e._withMods||(e._withMods={}),n=t.join(".");return i[n]||(i[n]=((s,...r)=>{for(let l=0;l<t.length;l++){const o=mu[t[l]];if(o&&o(s,t))return}return e(s,...r)}))},bu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ch=(e,t)=>{const i=e._withKeys||(e._withKeys={}),n=t.join(".");return i[n]||(i[n]=(s=>{if(!("key"in s))return;const r=Ot(s.key);if(t.some(l=>l===r||bu[l]===r))return e(s)}))},_u=Ae({patchProp:fu},za);let Sr;function Su(){return Sr||(Sr=Ia(_u))}const yu=((...e)=>{const t=Su().createApp(...e),{mount:i}=t;return t.mount=n=>{const s=Tu(n);if(!s)return;const r=t._component;!W(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=i(s,!1,Cu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t});function Cu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Tu(e){return ue(e)?document.querySelector(e):e}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let go;const Cn=e=>go=e,mo=Symbol();function rs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ai;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ai||(Ai={}));function Ru(){const e=sl(!0),t=e.run(()=>hn({}));let i=[],n=[];const s=Cs({install(r){Cn(s),s._a=r,r.provide(mo,s),r.config.globalProperties.$pinia=s,n.forEach(l=>i.push(l)),n=[]},use(r){return this._a?i.push(r):n.push(r),this},_p:i,_a:null,_e:e,_s:new Map,state:t});return s}const vo=()=>{};function yr(e,t,i,n=vo){e.add(t);const s=()=>{e.delete(t)&&n()};return!i&&rl()&&oc(s),s}function Wt(e,...t){e.forEach(i=>{i(...t)})}const Au=e=>e(),Cr=Symbol(),Bn=Symbol();function ls(e,t){e instanceof Map&&t instanceof Map?t.forEach((i,n)=>e.set(n,i)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const i in t){if(!t.hasOwnProperty(i))continue;const n=t[i],s=e[i];rs(s)&&rs(n)&&e.hasOwnProperty(i)&&!pe(n)&&!ot(n)?e[i]=ls(s,n):e[i]=n}return e}const Eu=Symbol();function xu(e){return!rs(e)||!Object.prototype.hasOwnProperty.call(e,Eu)}const{assign:At}=Object;function Iu(e){return!!(pe(e)&&e.effect)}function wu(e,t,i,n){const{state:s,actions:r,getters:l}=t,o=i.state.value[e];let c;function u(){o||(i.state.value[e]=s?s():{});const a=wc(i.state.value[e]);return At(a,r,Object.keys(l||{}).reduce((p,g)=>(p[g]=Cs(Be(()=>{Cn(i);const m=i._s.get(e);return l[g].call(m,m)})),p),{}))}return c=bo(e,u,t,i,n,!0),c}function bo(e,t,i={},n,s,r){let l;const o=At({actions:{}},i),c={deep:!0};let u,a,p=new Set,g=new Set,m;const R=n.state.value[e];!r&&!R&&(n.state.value[e]={});let S;function I(B){let V;u=a=!1,typeof B=="function"?(B(n.state.value[e]),V={type:Ai.patchFunction,storeId:e,events:m}):(ls(n.state.value[e],B),V={type:Ai.patchObject,payload:B,storeId:e,events:m});const X=S=Symbol();mn().then(()=>{S===X&&(u=!0)}),a=!0,Wt(p,V,n.state.value[e])}const O=r?function(){const{state:V}=i,X=V?V():{};this.$patch(fe=>{At(fe,X)})}:vo;function b(){l.stop(),p.clear(),g.clear(),n._s.delete(e)}const y=(B,V="")=>{if(Cr in B)return B[Bn]=V,B;const X=function(){Cn(n);const fe=Array.from(arguments),Ee=new Set,xe=new Set;function qe(q){Ee.add(q)}function yt(q){xe.add(q)}Wt(g,{args:fe,name:X[Bn],store:M,after:qe,onError:yt});let de;try{de=B.apply(this&&this.$id===e?this:M,fe)}catch(q){throw Wt(xe,q),q}return de instanceof Promise?de.then(q=>(Wt(Ee,q),q)).catch(q=>(Wt(xe,q),Promise.reject(q))):(Wt(Ee,de),de)};return X[Cr]=!0,X[Bn]=V,X},_={_p:n,$id:e,$onAction:yr.bind(null,g),$patch:I,$reset:O,$subscribe(B,V={}){const X=yr(p,B,V.detached,()=>fe()),fe=l.run(()=>Ft(()=>n.state.value[e],Ee=>{(V.flush==="sync"?a:u)&&B({storeId:e,type:Ai.direct,events:m},Ee)},At({},c,V)));return X},$dispose:b},M=ki(_);n._s.set(e,M);const D=(n._a&&n._a.runWithContext||Au)(()=>n._e.run(()=>(l=sl()).run(()=>t({action:y}))));for(const B in D){const V=D[B];if(pe(V)&&!Iu(V)||ot(V))r||(R&&xu(V)&&(pe(V)?V.value=R[B]:ls(V,R[B])),n.state.value[e][B]=V);else if(typeof V=="function"){const X=y(V,B);D[B]=X,o.actions[B]=V}}return At(M,D),At(Q(M),D),Object.defineProperty(M,"$state",{get:()=>n.state.value[e],set:B=>{I(V=>{At(V,B)})}}),n._p.forEach(B=>{At(M,l.run(()=>B({store:M,app:n._a,pinia:n,options:o})))}),R&&r&&i.hydrate&&i.hydrate(M.$state,R),u=!0,a=!0,M}/*! #__NO_SIDE_EFFECTS__ */function Tn(e,t,i){let n;const s=typeof t=="function";n=s?i:t;function r(l,o){const c=jc();return l=l||(c?Ge(mo,null):null),l&&Cn(l),l=go,l._s.has(e)||(s?bo(e,t,n,l):wu(e,n,l)),l._s.get(e)}return r.$id=e,r}function ah(e){const t=Q(e),i={};for(const n in t){const s=t[n];s.effect?i[n]=Be({get:()=>e[n],set(r){e[n]=r}}):(pe(s)||ot(s))&&(i[n]=Oc(e,n))}return i}const Nu=(e,t)=>{const i=e.__vccOpts||e;for(const[n,s]of t)i[n]=s;return i},$u={},Ou={class:"h-full"};function Pu(e,t){const i=Es("RouterView");return Se(),Le("div",Ou,[me(i)])}const ku=Nu($u,[["render",Pu]]),Mu="modulepreload",Du=function(e,t){return new URL(e,t).href},Tr={},ne=function(t,i,n){let s=Promise.resolve();if(i&&i.length>0){let l=function(a){return Promise.all(a.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=l(i.map(a=>{if(a=Du(a,n),a in Tr)return;Tr[a]=!0;const p=a.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!n)for(let S=o.length-1;S>=0;S--){const I=o[S];if(I.href===a&&(!p||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${g}`))return;const R=document.createElement("link");if(R.rel=p?"stylesheet":Mu,p||(R.as="script"),R.crossOrigin="",R.href=a,u&&R.setAttribute("nonce",u),document.head.appendChild(R),p)return new Promise((S,I)=>{R.addEventListener("load",S),R.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return s.then(l=>{for(const o of l||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Xt=typeof document<"u";function _o(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Lu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&_o(e.default)}const te=Object.assign;function Vn(e,t){const i={};for(const n in t){const s=t[n];i[n]=Ye(s)?s.map(e):e(s)}return i}const Ei=()=>{},Ye=Array.isArray;function Rr(e,t){const i={};for(const n in e)i[n]=n in t?t[n]:e[n];return i}const So=/#/g,Bu=/&/g,Vu=/\//g,Fu=/=/g,ju=/\?/g,yo=/\+/g,Hu=/%5B/g,Uu=/%5D/g,Co=/%5E/g,Ku=/%60/g,To=/%7B/g,Gu=/%7C/g,Ro=/%7D/g,Wu=/%20/g;function $s(e){return e==null?"":encodeURI(""+e).replace(Gu,"|").replace(Hu,"[").replace(Uu,"]")}function qu(e){return $s(e).replace(To,"{").replace(Ro,"}").replace(Co,"^")}function os(e){return $s(e).replace(yo,"%2B").replace(Wu,"+").replace(So,"%23").replace(Bu,"%26").replace(Ku,"`").replace(To,"{").replace(Ro,"}").replace(Co,"^")}function zu(e){return os(e).replace(Fu,"%3D")}function Xu(e){return $s(e).replace(So,"%23").replace(ju,"%3F")}function Ju(e){return Xu(e).replace(Vu,"%2F")}function Pi(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Yu=/\/$/,Qu=e=>e.replace(Yu,"");function Fn(e,t,i="/"){let n,s={},r="",l="";const o=t.indexOf("#");let c=t.indexOf("?");return c=o>=0&&c>o?-1:c,c>=0&&(n=t.slice(0,c),r=t.slice(c,o>0?o:t.length),s=e(r.slice(1))),o>=0&&(n=n||t.slice(0,o),l=t.slice(o,t.length)),n=nf(n??t,i),{fullPath:n+r+l,path:n,query:s,hash:Pi(l)}}function Zu(e,t){const i=t.query?e(t.query):"";return t.path+(i&&"?")+i+(t.hash||"")}function Ar(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ef(e,t,i){const n=t.matched.length-1,s=i.matched.length-1;return n>-1&&n===s&&oi(t.matched[n],i.matched[s])&&Ao(t.params,i.params)&&e(t.query)===e(i.query)&&t.hash===i.hash}function oi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ao(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var i in e)if(!tf(e[i],t[i]))return!1;return!0}function tf(e,t){return Ye(e)?Er(e,t):Ye(t)?Er(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Er(e,t){return Ye(t)?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function nf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const i=t.split("/"),n=e.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=i.length-1,l,o;for(l=0;l<n.length;l++)if(o=n[l],o!==".")if(o==="..")r>1&&r--;else break;return i.slice(0,r).join("/")+"/"+n.slice(l).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let cs=(function(e){return e.pop="pop",e.push="push",e})({}),jn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function sf(e){if(!e)if(Xt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Qu(e)}const rf=/^[^#]+#/;function lf(e,t){return e.replace(rf,"#")+t}function of(e,t){const i=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-i.left-(t.left||0),top:n.top-i.top-(t.top||0)}}const Rn=()=>({left:window.scrollX,top:window.scrollY});function cf(e){let t;if("el"in e){const i=e.el,n=typeof i=="string"&&i.startsWith("#"),s=typeof i=="string"?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!s)return;t=of(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function xr(e,t){return(history.state?history.state.position-t:-1)+e}const as=new Map;function af(e,t){as.set(e,t)}function uf(e){const t=as.get(e);return as.delete(e),t}function ff(e){return typeof e=="string"||e&&typeof e=="object"}function Eo(e){return typeof e=="string"||typeof e=="symbol"}let he=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const xo=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function ci(e,t){return te(new Error,{type:e,[xo]:!0},t)}function pt(e,t){return e instanceof Error&&xo in e&&(t==null||!!(e.type&t))}const df=["params","query","hash"];function pf(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const i of df)i in e&&(t[i]=e[i]);return JSON.stringify(t,null,2)}function hf(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<i.length;++n){const s=i[n].replace(yo," "),r=s.indexOf("="),l=Pi(r<0?s:s.slice(0,r)),o=r<0?null:Pi(s.slice(r+1));if(l in t){let c=t[l];Ye(c)||(c=t[l]=[c]),c.push(o)}else t[l]=o}return t}function Ir(e){let t="";for(let i in e){const n=e[i];if(i=zu(i),n==null){n!==void 0&&(t+=(t.length?"&":"")+i);continue}(Ye(n)?n.map(s=>s&&os(s)):[n&&os(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+i,s!=null&&(t+="="+s))})}return t}function gf(e){const t={};for(const i in e){const n=e[i];n!==void 0&&(t[i]=Ye(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return t}const mf=Symbol(""),wr=Symbol(""),An=Symbol(""),Os=Symbol(""),us=Symbol("");function hi(){let e=[];function t(n){return e.push(n),()=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)}}function i(){e=[]}return{add:t,list:()=>e.slice(),reset:i}}function xt(e,t,i,n,s,r=l=>l()){const l=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const u=g=>{g===!1?c(ci(he.NAVIGATION_ABORTED,{from:i,to:t})):g instanceof Error?c(g):ff(g)?c(ci(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(l&&n.enterCallbacks[s]===l&&typeof g=="function"&&l.push(g),o())},a=r(()=>e.call(n&&n.instances[s],t,i,u));let p=Promise.resolve(a);e.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Hn(e,t,i,n,s=r=>r()){const r=[];for(const l of e)for(const o in l.components){let c=l.components[o];if(!(t!=="beforeRouteEnter"&&!l.instances[o]))if(_o(c)){const u=(c.__vccOpts||c)[t];u&&r.push(xt(u,i,n,l,o,s))}else{let u=c();r.push(()=>u.then(a=>{if(!a)throw new Error(`Couldn't resolve component "${o}" at "${l.path}"`);const p=Lu(a)?a.default:a;l.mods[o]=a,l.components[o]=p;const g=(p.__vccOpts||p)[t];return g&&xt(g,i,n,l,o,s)()}))}}return r}function vf(e,t){const i=[],n=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let l=0;l<r;l++){const o=t.matched[l];o&&(e.matched.find(u=>oi(u,o))?n.push(o):i.push(o));const c=e.matched[l];c&&(t.matched.find(u=>oi(u,c))||s.push(c))}return[i,n,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bf=()=>location.protocol+"//"+location.host;function Io(e,t){const{pathname:i,search:n,hash:s}=t,r=e.indexOf("#");if(r>-1){let l=s.includes(e.slice(r))?e.slice(r).length:1,o=s.slice(l);return o[0]!=="/"&&(o="/"+o),Ar(o,"")}return Ar(i,e)+n+s}function _f(e,t,i,n){let s=[],r=[],l=null;const o=({state:g})=>{const m=Io(e,location),R=i.value,S=t.value;let I=0;if(g){if(i.value=m,t.value=g,l&&l===R){l=null;return}I=S?g.position-S.position:0}else n(m);s.forEach(O=>{O(i.value,R,{delta:I,type:cs.pop,direction:I?I>0?jn.forward:jn.back:jn.unknown})})};function c(){l=i.value}function u(g){s.push(g);const m=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return r.push(m),m}function a(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(te({},g.state,{scroll:Rn()}),"")}}function p(){for(const g of r)g();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",a),document.removeEventListener("visibilitychange",a)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",a),document.addEventListener("visibilitychange",a),{pauseListeners:c,listen:u,destroy:p}}function Nr(e,t,i,n=!1,s=!1){return{back:e,current:t,forward:i,replaced:n,position:window.history.length,scroll:s?Rn():null}}function Sf(e){const{history:t,location:i}=window,n={value:Io(e,i)},s={value:t.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,a){const p=e.indexOf("#"),g=p>-1?(i.host&&document.querySelector("base")?e:e.slice(p))+c:bf()+e+c;try{t[a?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),i[a?"replace":"assign"](g)}}function l(c,u){r(c,te({},t.state,Nr(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),n.value=c}function o(c,u){const a=te({},s.value,t.state,{forward:c,scroll:Rn()});r(a.current,a,!0),r(c,te({},Nr(n.value,c,null),{position:a.position+1},u),!1),n.value=c}return{location:n,state:s,push:o,replace:l}}function yf(e){e=sf(e);const t=Sf(e),i=_f(e,t.state,t.location,t.replace);function n(r,l=!0){l||i.pauseListeners(),history.go(r)}const s=te({location:"",base:e,go:n,createHref:lf.bind(null,e)},t,i);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Cf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),yf(e)}let Bt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ve||{});const Tf={type:Bt.Static,value:""},Rf=/[a-zA-Z0-9_]/;function Af(e){if(!e)return[[]];if(e==="/")return[[Tf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${i})/"${u}": ${m}`)}let i=ve.Static,n=i;const s=[];let r;function l(){r&&s.push(r),r=[]}let o=0,c,u="",a="";function p(){u&&(i===ve.Static?r.push({type:Bt.Static,value:u}):i===ve.Param||i===ve.ParamRegExp||i===ve.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Bt.Param,value:u,regexp:a,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&i!==ve.ParamRegExp){n=i,i=ve.EscapeNext;continue}switch(i){case ve.Static:c==="/"?(u&&p(),l()):c===":"?(p(),i=ve.Param):g();break;case ve.EscapeNext:g(),i=n;break;case ve.Param:c==="("?i=ve.ParamRegExp:Rf.test(c)?g():(p(),i=ve.Static,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case ve.ParamRegExp:c===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+c:i=ve.ParamRegExpEnd:a+=c;break;case ve.ParamRegExpEnd:p(),i=ve.Static,c!=="*"&&c!=="?"&&c!=="+"&&o--,a="";break;default:t("Unknown state");break}}return i===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),l(),s}const $r="[^/]+?",Ef={sensitive:!1,strict:!1,start:!0,end:!0};var $e=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})($e||{});const xf=/[.+*?^${}()[\]/\\]/g;function If(e,t){const i=te({},Ef,t),n=[];let s=i.start?"^":"";const r=[];for(const u of e){const a=u.length?[]:[$e.Root];i.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let m=$e.Segment+(i.sensitive?$e.BonusCaseSensitive:0);if(g.type===Bt.Static)p||(s+="/"),s+=g.value.replace(xf,"\\$&"),m+=$e.Static;else if(g.type===Bt.Param){const{value:R,repeatable:S,optional:I,regexp:O}=g;r.push({name:R,repeatable:S,optional:I});const b=O||$r;if(b!==$r){m+=$e.BonusCustomRegExp;try{`${b}`}catch(_){throw new Error(`Invalid custom RegExp for param "${R}" (${b}): `+_.message)}}let y=S?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;p||(y=I&&u.length<2?`(?:/${y})`:"/"+y),I&&(y+="?"),s+=y,m+=$e.Dynamic,I&&(m+=$e.BonusOptional),S&&(m+=$e.BonusRepeatable),b===".*"&&(m+=$e.BonusWildcard)}a.push(m)}n.push(a)}if(i.strict&&i.end){const u=n.length-1;n[u][n[u].length-1]+=$e.BonusStrict}i.strict||(s+="/?"),i.end?s+="$":i.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const l=new RegExp(s,i.sensitive?"":"i");function o(u){const a=u.match(l),p={};if(!a)return null;for(let g=1;g<a.length;g++){const m=a[g]||"",R=r[g-1];p[R.name]=m&&R.repeatable?m.split("/"):m}return p}function c(u){let a="",p=!1;for(const g of e){(!p||!a.endsWith("/"))&&(a+="/"),p=!1;for(const m of g)if(m.type===Bt.Static)a+=m.value;else if(m.type===Bt.Param){const{value:R,repeatable:S,optional:I}=m,O=R in u?u[R]:"";if(Ye(O)&&!S)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const b=Ye(O)?O.join("/"):O;if(!b)if(I)g.length<2&&(a.endsWith("/")?a=a.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);a+=b}}return a||"/"}return{re:l,score:n,keys:r,parse:o,stringify:c}}function wf(e,t){let i=0;for(;i<e.length&&i<t.length;){const n=t[i]-e[i];if(n)return n;i++}return e.length<t.length?e.length===1&&e[0]===$e.Static+$e.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$e.Static+$e.Segment?1:-1:0}function wo(e,t){let i=0;const n=e.score,s=t.score;for(;i<n.length&&i<s.length;){const r=wf(n[i],s[i]);if(r)return r;i++}if(Math.abs(s.length-n.length)===1){if(Or(n))return 1;if(Or(s))return-1}return s.length-n.length}function Or(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Nf={strict:!1,end:!0,sensitive:!1};function $f(e,t,i){const n=If(Af(e.path),i),s=te(n,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Of(e,t){const i=[],n=new Map;t=Rr(Nf,t);function s(p){return n.get(p)}function r(p,g,m){const R=!m,S=kr(p);S.aliasOf=m&&m.record;const I=Rr(t,p),O=[S];if("alias"in p){const _=typeof p.alias=="string"?[p.alias]:p.alias;for(const M of _)O.push(kr(te({},S,{components:m?m.record.components:S.components,path:M,aliasOf:m?m.record:S})))}let b,y;for(const _ of O){const{path:M}=_;if(g&&M[0]!=="/"){const z=g.record.path,D=z[z.length-1]==="/"?"":"/";_.path=g.record.path+(M&&D+M)}if(b=$f(_,g,I),m?m.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),R&&p.name&&!Mr(b)&&l(p.name)),No(b)&&c(b),S.children){const z=S.children;for(let D=0;D<z.length;D++)r(z[D],b,m&&m.children[D])}m=m||b}return y?()=>{l(y)}:Ei}function l(p){if(Eo(p)){const g=n.get(p);g&&(n.delete(p),i.splice(i.indexOf(g),1),g.children.forEach(l),g.alias.forEach(l))}else{const g=i.indexOf(p);g>-1&&(i.splice(g,1),p.record.name&&n.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function o(){return i}function c(p){const g=Mf(p,i);i.splice(g,0,p),p.record.name&&!Mr(p)&&n.set(p.record.name,p)}function u(p,g){let m,R={},S,I;if("name"in p&&p.name){if(m=n.get(p.name),!m)throw ci(he.MATCHER_NOT_FOUND,{location:p});I=m.record.name,R=te(Pr(g.params,m.keys.filter(y=>!y.optional).concat(m.parent?m.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),p.params&&Pr(p.params,m.keys.map(y=>y.name))),S=m.stringify(R)}else if(p.path!=null)S=p.path,m=i.find(y=>y.re.test(S)),m&&(R=m.parse(S),I=m.record.name);else{if(m=g.name?n.get(g.name):i.find(y=>y.re.test(g.path)),!m)throw ci(he.MATCHER_NOT_FOUND,{location:p,currentLocation:g});I=m.record.name,R=te({},g.params,p.params),S=m.stringify(R)}const O=[];let b=m;for(;b;)O.unshift(b.record),b=b.parent;return{name:I,path:S,params:R,matched:O,meta:kf(O)}}e.forEach(p=>r(p));function a(){i.length=0,n.clear()}return{addRoute:r,resolve:u,removeRoute:l,clearRoutes:a,getRoutes:o,getRecordMatcher:s}}function Pr(e,t){const i={};for(const n of t)n in e&&(i[n]=e[n]);return i}function kr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Pf(e){const t={},i=e.props||!1;if("component"in e)t.default=i;else for(const n in e.components)t[n]=typeof i=="object"?i[n]:i;return t}function Mr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kf(e){return e.reduce((t,i)=>te(t,i.meta),{})}function Mf(e,t){let i=0,n=t.length;for(;i!==n;){const r=i+n>>1;wo(e,t[r])<0?n=r:i=r+1}const s=Df(e);return s&&(n=t.lastIndexOf(s,n-1)),n}function Df(e){let t=e;for(;t=t.parent;)if(No(t)&&wo(e,t)===0)return t}function No({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Dr(e){const t=Ge(An),i=Ge(Os),n=Be(()=>{const c=ye(e.to);return t.resolve(c)}),s=Be(()=>{const{matched:c}=n.value,{length:u}=c,a=c[u-1],p=i.matched;if(!a||!p.length)return-1;const g=p.findIndex(oi.bind(null,a));if(g>-1)return g;const m=Lr(c[u-2]);return u>1&&Lr(a)===m&&p[p.length-1].path!==m?p.findIndex(oi.bind(null,c[u-2])):g}),r=Be(()=>s.value>-1&&jf(i.params,n.value.params)),l=Be(()=>s.value>-1&&s.value===i.matched.length-1&&Ao(i.params,n.value.params));function o(c={}){if(Ff(c)){const u=t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(Ei);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:n,href:Be(()=>n.value.href),isActive:r,isExactActive:l,navigate:o}}function Lf(e){return e.length===1?e[0]:e}const Bf=Ol({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Dr,setup(e,{slots:t}){const i=ki(Dr(e)),{options:n}=Ge(An),s=Be(()=>({[Br(e.activeClass,n.linkActiveClass,"router-link-active")]:i.isActive,[Br(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const r=t.default&&Lf(t.default(i));return e.custom?r:uo("a",{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:s.value},r)}}}),Vf=Bf;function Ff(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jf(e,t){for(const i in t){const n=t[i],s=e[i];if(typeof n=="string"){if(n!==s)return!1}else if(!Ye(s)||s.length!==n.length||n.some((r,l)=>r.valueOf()!==s[l].valueOf()))return!1}return!0}function Lr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Br=(e,t,i)=>e??t??i,Hf=Ol({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){const n=Ge(us),s=Be(()=>e.route||n.value),r=Ge(wr,0),l=Be(()=>{let u=ye(r);const{matched:a}=s.value;let p;for(;(p=a[u])&&!p.components;)u++;return u}),o=Be(()=>s.value.matched[l.value]);Ui(wr,Be(()=>l.value+1)),Ui(mf,o),Ui(us,s);const c=hn();return Ft(()=>[c.value,o.value,e.name],([u,a,p],[g,m,R])=>{a&&(a.instances[p]=u,m&&m!==a&&u&&u===g&&(a.leaveGuards.size||(a.leaveGuards=m.leaveGuards),a.updateGuards.size||(a.updateGuards=m.updateGuards))),u&&a&&(!m||!oi(a,m)||!g)&&(a.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,a=e.name,p=o.value,g=p&&p.components[a];if(!g)return Vr(i.default,{Component:g,route:u});const m=p.props[a],R=m?m===!0?u.params:typeof m=="function"?m(u):m:null,I=uo(g,te({},R,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[a]=null)},ref:c}));return Vr(i.default,{Component:I,route:u})||I}}});function Vr(e,t){if(!e)return null;const i=e(t);return i.length===1?i[0]:i}const Uf=Hf;function Kf(e){const t=Of(e.routes,e),i=e.parseQuery||hf,n=e.stringifyQuery||Ir,s=e.history,r=hi(),l=hi(),o=hi(),c=Ec(Tt);let u=Tt;Xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=Vn.bind(null,A=>""+A),p=Vn.bind(null,Ju),g=Vn.bind(null,Pi);function m(A,L){let P,F;return Eo(A)?(P=t.getRecordMatcher(A),F=L):F=A,t.addRoute(F,P)}function R(A){const L=t.getRecordMatcher(A);L&&t.removeRoute(L)}function S(){return t.getRoutes().map(A=>A.record)}function I(A){return!!t.getRecordMatcher(A)}function O(A,L){if(L=te({},L||c.value),typeof A=="string"){const v=Fn(i,A,L.path),T=t.resolve({path:v.path},L),E=s.createHref(v.fullPath);return te(v,T,{params:g(T.params),hash:Pi(v.hash),redirectedFrom:void 0,href:E})}let P;if(A.path!=null)P=te({},A,{path:Fn(i,A.path,L.path).path});else{const v=te({},A.params);for(const T in v)v[T]==null&&delete v[T];P=te({},A,{params:p(v)}),L.params=p(L.params)}const F=t.resolve(P,L),J=A.hash||"";F.params=a(g(F.params));const f=Zu(n,te({},A,{hash:qu(J),path:F.path})),h=s.createHref(f);return te({fullPath:f,hash:J,query:n===Ir?gf(A.query):A.query||{}},F,{redirectedFrom:void 0,href:h})}function b(A){return typeof A=="string"?Fn(i,A,c.value.path):te({},A)}function y(A,L){if(u!==A)return ci(he.NAVIGATION_CANCELLED,{from:L,to:A})}function _(A){return D(A)}function M(A){return _(te(b(A),{replace:!0}))}function z(A,L){const P=A.matched[A.matched.length-1];if(P&&P.redirect){const{redirect:F}=P;let J=typeof F=="function"?F(A,L):F;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=b(J):{path:J},J.params={}),te({query:A.query,hash:A.hash,params:J.path!=null?{}:A.params},J)}}function D(A,L){const P=u=O(A),F=c.value,J=A.state,f=A.force,h=A.replace===!0,v=z(P,F);if(v)return D(te(b(v),{state:typeof v=="object"?te({},J,v.state):J,force:f,replace:h}),L||P);const T=P;T.redirectedFrom=L;let E;return!f&&ef(n,F,P)&&(E=ci(he.NAVIGATION_DUPLICATED,{to:T,from:F}),Qe(F,F,!0,!1)),(E?Promise.resolve(E):X(T,F)).catch(C=>pt(C)?pt(C,he.NAVIGATION_GUARD_REDIRECT)?C:Ct(C):ee(C,T,F)).then(C=>{if(C){if(pt(C,he.NAVIGATION_GUARD_REDIRECT))return D(te({replace:h},b(C.to),{state:typeof C.to=="object"?te({},J,C.to.state):J,force:f}),L||T)}else C=Ee(T,F,!0,h,J);return fe(T,F,C),C})}function B(A,L){const P=y(A,L);return P?Promise.reject(P):Promise.resolve()}function V(A){const L=Kt.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(A):A()}function X(A,L){let P;const[F,J,f]=vf(A,L);P=Hn(F.reverse(),"beforeRouteLeave",A,L);for(const v of F)v.leaveGuards.forEach(T=>{P.push(xt(T,A,L))});const h=B.bind(null,A,L);return P.push(h),He(P).then(()=>{P=[];for(const v of r.list())P.push(xt(v,A,L));return P.push(h),He(P)}).then(()=>{P=Hn(J,"beforeRouteUpdate",A,L);for(const v of J)v.updateGuards.forEach(T=>{P.push(xt(T,A,L))});return P.push(h),He(P)}).then(()=>{P=[];for(const v of f)if(v.beforeEnter)if(Ye(v.beforeEnter))for(const T of v.beforeEnter)P.push(xt(T,A,L));else P.push(xt(v.beforeEnter,A,L));return P.push(h),He(P)}).then(()=>(A.matched.forEach(v=>v.enterCallbacks={}),P=Hn(f,"beforeRouteEnter",A,L,V),P.push(h),He(P))).then(()=>{P=[];for(const v of l.list())P.push(xt(v,A,L));return P.push(h),He(P)}).catch(v=>pt(v,he.NAVIGATION_CANCELLED)?v:Promise.reject(v))}function fe(A,L,P){o.list().forEach(F=>V(()=>F(A,L,P)))}function Ee(A,L,P,F,J){const f=y(A,L);if(f)return f;const h=L===Tt,v=Xt?history.state:{};P&&(F||h?s.replace(A.fullPath,te({scroll:h&&v&&v.scroll},J)):s.push(A.fullPath,J)),c.value=A,Qe(A,L,P,h),Ct()}let xe;function qe(){xe||(xe=s.listen((A,L,P)=>{if(!Pt.listening)return;const F=O(A),J=z(F,Pt.currentRoute.value);if(J){D(te(J,{replace:!0,force:!0}),F).catch(Ei);return}u=F;const f=c.value;Xt&&af(xr(f.fullPath,P.delta),Rn()),X(F,f).catch(h=>pt(h,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?h:pt(h,he.NAVIGATION_GUARD_REDIRECT)?(D(te(b(h.to),{force:!0}),F).then(v=>{pt(v,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===cs.pop&&s.go(-1,!1)}).catch(Ei),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ee(h,F,f))).then(h=>{h=h||Ee(F,f,!1),h&&(P.delta&&!pt(h,he.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===cs.pop&&pt(h,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),fe(F,f,h)}).catch(Ei)}))}let yt=hi(),de=hi(),q;function ee(A,L,P){Ct(A);const F=de.list();return F.length?F.forEach(J=>J(A,L,P)):console.error(A),Promise.reject(A)}function ft(){return q&&c.value!==Tt?Promise.resolve():new Promise((A,L)=>{yt.add([A,L])})}function Ct(A){return q||(q=!A,qe(),yt.list().forEach(([L,P])=>A?P(A):L()),yt.reset()),A}function Qe(A,L,P,F){const{scrollBehavior:J}=e;if(!Xt||!J)return Promise.resolve();const f=!P&&uf(xr(A.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return mn().then(()=>J(A,L,f)).then(h=>h&&cf(h)).catch(h=>ee(h,A,L))}const Me=A=>s.go(A);let Ut;const Kt=new Set,Pt={currentRoute:c,listening:!0,addRoute:m,removeRoute:R,clearRoutes:t.clearRoutes,hasRoute:I,getRoutes:S,resolve:O,options:e,push:_,replace:M,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:l.add,afterEach:o.add,onError:de.add,isReady:ft,install(A){A.component("RouterLink",Vf),A.component("RouterView",Uf),A.config.globalProperties.$router=Pt,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),Xt&&!Ut&&c.value===Tt&&(Ut=!0,_(s.location).catch(F=>{}));const L={};for(const F in Tt)Object.defineProperty(L,F,{get:()=>c.value[F],enumerable:!0});A.provide(An,Pt),A.provide(Os,Sl(L)),A.provide(us,c);const P=A.unmount;Kt.add(A),A.unmount=function(){Kt.delete(A),Kt.size<1&&(u=Tt,xe&&xe(),xe=null,c.value=Tt,Ut=!1,q=!1),P()}}};function He(A){return A.reduce((L,P)=>L.then(()=>V(P)),Promise.resolve())}return Pt}function Ps(){return Ge(An)}function Gf(e){return Ge(Os)}const xi={appName:"订单管理",institution:"北京市公共图书馆",currentLibrarianAccount:"BIBQUERY01",currentSubscriber:"ceshi",viewableSubscribers:["ceshi"],z3950Servers:["北京大学","华盛顿大学"],sidebarHighlightMap:{"/bib-query/z3950":"/bib-query","/bib-query/new-bib":"/bib-query","/acceptance/delivery-import":"/acceptance/delivery-import/tasks","/acceptance/detail":"/acceptance","/shortage/detail":"/shortage","/orders/line":"/orders","/orders/lines":"/orders","/settled/detail":"/settled","/settled/list":"/settled"},sidebar:[{id:"order-mgmt",label:"订单管理",expanded:!0,children:[{label:"非连续出版物订单",route:"/orders"},{label:"书目查询",route:"/bib-query"}]},{id:"acceptance",label:"采访验收",expanded:!0,children:[{label:"验收单管理",route:"/acceptance"},{label:"逐条收货",route:"/receive"},{label:"批量验收",route:"/batch-acceptance"},{label:"换货管理",route:"/exchange"},{label:"退货管理",route:"/return"},{label:"催缺管理",route:"/shortage"}]},{id:"settlement",label:"采访结算",expanded:!1,children:[{label:"待结算",route:"/pending-settlement"},{label:"已结算",route:"/settled"},{label:"结算失败处理",route:"/settlement-fail"}]},{id:"subscriber",label:"订户管理",expanded:!1,children:[{label:"订户列表",route:"/subscribers"},{label:"馆员列表",route:"/librarians"}]},{id:"currency",label:"货币管理",expanded:!1,children:[{label:"货币信息",route:"/currency"}]},{id:"settings",label:"设置",expanded:!1,children:[{label:"退换撤订原因参数",route:"/reason-params"},{label:"催缺配置",route:"/shortage-config"},{label:"条码号供应商代码",route:"/barcode-supplier"},{label:"订单与MARC类型映射关系",route:"/marc-mapping"},{label:"订单导入模板配置",route:"/import-template"},{label:"馆址管理",route:"/locations"}]}]},Fr={"/orders":"订单管理","/bib-query":"书目查询","/acceptance":"验收单管理","/receive":"逐条收货","/batch-acceptance":"批量验收","/exchange":"换货管理","/return":"退货管理","/shortage":"催缺管理","/shortage/detail":"催缺详情","/pending-settlement":"待结算","/settled":"已结算","/settled/detail":"结算详情","/settled/list":"结算清单","/settlement-fail":"结算失败处理","/subscribers":"订户列表","/librarians":"馆员列表","/currency":"货币信息","/reason-params":"退换撤订原因参数","/shortage-config":"催缺配置","/barcode-supplier":"条码号供应商代码","/marc-mapping":"订单与MARC类型映射关系","/import-template":"订单导入模板配置","/locations":"馆址管理","/bib-query/new-bib":"新建书目","/bib-query/z3950":"查Z3950","/acceptance/delivery-import":"导入任务","/acceptance/delivery-import/tasks":"导入任务","/acceptance/detail":"验收详情","/orders/line":"订单行详情"};function $o(e){return Fr[e]?Fr[e]:e.startsWith("/acceptance/detail/")?"验收详情":e.startsWith("/shortage/detail/")?"催缺详情":e.startsWith("/acceptance/delivery-import/tasks/")?"导入任务详情":e.startsWith("/orders/line/")?"订单行详情":e.startsWith("/settled/detail/")?"结算详情":e.startsWith("/settled/list/")?"结算清单":e}function fs(e){if(xi.sidebarHighlightMap[e])return xi.sidebarHighlightMap[e];for(const[t,i]of Object.entries(xi.sidebarHighlightMap))if(e.startsWith(`${t}/`)||t!==e&&e.startsWith(t))return i;return e}const jr="orderm_spa_tabs",En=Tn("app",{state:()=>({config:xi,tabs:[{route:"/orders",title:"订单管理"}],activeRoute:"/orders",expandedGroups:xi.sidebar.filter(e=>e.expanded).map(e=>e.id)}),getters:{highlightRoute:e=>fs(e.activeRoute),currentAcceptance:e=>e._currentAcceptance},actions:{initFromStorage(){try{const e=sessionStorage.getItem(jr);if(!e)return;const t=JSON.parse(e);Array.isArray(t.tabs)&&t.tabs.length&&(this.tabs=t.tabs,this.activeRoute=t.activeRoute||this.tabs[0].route)}catch{}},persistTabs(){sessionStorage.setItem(jr,JSON.stringify({tabs:this.tabs,activeRoute:this.activeRoute}))},openTab(e,t){const i=t||$o(e),n=this.tabs.find(s=>s.route===e);n?n.title=i:this.tabs.push({route:e,title:i}),this.activeRoute=e,this.persistTabs()},switchTab(e){this.activeRoute=e,this.persistTabs()},closeTab(e){if(this.tabs.length<=1)return;const t=this.tabs.findIndex(i=>i.route===e);if(t!==-1){if(this.tabs.splice(t,1),this.activeRoute===e){const i=this.tabs[Math.max(0,t-1)]||this.tabs[0];this.activeRoute=i.route}this.persistTabs()}},toggleGroup(e){const t=this.expandedGroups.indexOf(e);t>=0?this.expandedGroups.splice(t,1):this.expandedGroups.push(e)},isGroupExpanded(e,t){if(this.expandedGroups.includes(e))return!0;const i=this.config.sidebar.find(n=>n.id===e);return i==null?void 0:i.children.some(n=>fs(t)===n.route)}}}),Un="orderm_current_acceptance",Kn="acceptanceDetailContext";function uh(e){return{no:e.no,id:e.acceptanceId,name:e.name,type:e.type,lang:e.lang,method:e.method,supplier:e.supplier,shipNo:e.shipNo,status:e.status,remarkText:e.remarkText||"",autoBarcode:e.autoBarcode,barcode:e.barcode}}const Wf=Tn("acceptance",{state:()=>({current:null,detailContext:null}),getters:{hasCurrent:e=>!!e.current},actions:{initFromStorage(){try{const e=localStorage.getItem(Un);this.current=e?JSON.parse(e):null}catch{this.current=null}this.loadDetailContext()},setCurrent(e){this.current=e,e?localStorage.setItem(Un,JSON.stringify(e)):localStorage.removeItem(Un)},clearCurrent(){this.setCurrent(null)},saveDetailContext(e){this.detailContext=e,sessionStorage.setItem(Kn,JSON.stringify(e))},loadDetailContext(){try{const e=sessionStorage.getItem(Kn);this.detailContext=e?JSON.parse(e):null}catch{this.detailContext=null}return this.detailContext},clearDetailContext(){this.detailContext=null,sessionStorage.removeItem(Kn)}}}),fh={exchange:"换货原因",return:"退货原因",cancel:"撤订原因",revokeReceive:"撤销收货原因"},Hr={exchange:[{id:"ex-1",content:"换货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:41",remark:""},{id:"ex-2",content:"残缺损",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:45:18",remark:""}],return:[{id:"rt-1",content:"退货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:48",remark:""},{id:"rt-2",content:"损坏退货",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:09",remark:""}],cancel:[{id:"ca-1",content:"撤订",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:56",remark:""},{id:"ca-2",content:"退订",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:27",remark:""}],revokeReceive:[{id:"rv-1",content:"录入错误",status:"active",sort:1,creator:"赵付",created:"2026-05-22 09:10:12",remark:""},{id:"rv-2",content:"重复收货",status:"active",sort:2,creator:"杨晓婉",created:"2026-05-22 09:11:05",remark:""},{id:"rv-3",content:"品相差",status:"active",sort:3,creator:"王二小",created:"2026-05-22 09:12:18",remark:""}]},dh=[{key:"content",label:"原因"},{key:"status",label:"状态",type:"select",options:["全部","使用中","已停用"]},{key:"createDate",label:"创建日期",type:"dateRange",startKey:"startDate",endKey:"endDate"},{key:"creator",label:"创建人",extra:!0}],ph={active:{text:"使用中",cls:"text-green-600"},disabled:{text:"已停用",cls:"text-red-500"}},Ur="orderm_reason_params",qf=Tn("reasonParams",{state:()=>({data:structuredClone(Hr)}),getters:{getByType:e=>t=>e.data[t]||[],getActiveByType:e=>t=>(e.data[t]||[]).filter(i=>i.status==="active").sort((i,n)=>(i.sort||0)-(n.sort||0))},actions:{initFromStorage(){try{const e=localStorage.getItem(Ur);e?this.data=JSON.parse(e):this.persist()}catch{this.data=structuredClone(Hr)}},persist(){localStorage.setItem(Ur,JSON.stringify(this.data))},addReason(e,t){const i=this.data[e]||[];i.push({...t,id:`${e}-${Date.now()}`,status:"active",creator:t.creator||"赵付",created:t.created||new Date().toISOString().slice(0,19).replace("T"," ")}),this.data[e]=i,this.persist()},updateReason(e,t,i){const n=this.data[e]||[],s=n.findIndex(r=>r.id===t);s>=0&&(n[s]={...n[s],...i},this.persist())},toggleStatus(e,t){const i=(this.data[e]||[]).find(n=>n.id===t);i&&(i.status=i.status==="active"?"disabled":"active",this.persist())}}}),hh={active:{text:"使用中",cls:"text-green-600"},inactive:{text:"已停用",cls:"text-gray-500"}},zf=32,Xf=64,Jf=200,Oo=32,ks=64,Po=200,ko=32,Ms=64,Mo=200,Yf=["ST001_C1","ST001_C2","ST001_C3","ST001_C4","ST001_C5","ST002_C1","ST002_C2","ST003_C1"],Qf=["CL001","CL002","CL003","CL004","CL005","CL006","CL007","CL008","CL009","CL010","STD02","STE02","STG02","STK02","STB01","STC01","ST01","ST02","ST03","ST04","ST05","ST06","ST07","ST10","ST100","ST101","ST102"],Zf=["ST001","STD01","STE01","STEK1","STES1","STG01","STK01","STS01","STF01","ST029","ST002","ST003","ST004","ST005","ST006","ST007","ST008","ST009","ST010","ST011","ST012","ST013","ST014","ST015","ST018","ST019","ST020","ST021","ST024","ST025","ST026","ST030","ST031","ST032","ST033","ST034","ST044","ST047","STB01","STC01","STD02","STE02","STH01"],ed={"site-1":["ST001","STD","STE","STG","STK","STS","STF"],"site-2":["ST029"],"site-3":["STB","STC"],"site-4":["ST002","ST003","ST004","ST005","ST006","ST007","ST008","ST009","ST010","ST011","ST012","ST013","ST014","ST015","ST018","ST019","ST020","ST021","ST024","ST025","ST026","ST030","ST031","ST032","ST033","ST034","ST044","ST047"]},Do=["馆址编码","馆址名称","状态","备注"],Lo=["馆址编码","馆址名称","分馆编码","分馆名称","状态","备注"],Bo=["馆址编码","馆址名称","分馆编码","分馆名称","馆藏地编码","馆藏地名称","状态","备注"],td=[{id:"site-1",code:"ST001_C1",name:"首都华威桥馆",status:"active",remark:"首都图书馆主馆文献借阅区域"},{id:"site-2",code:"ST001_C2",name:"首都大兴机场分馆",status:"active",remark:""},{id:"site-3",code:"ST001_C3",name:"北京城市图书馆",status:"active",remark:""},{id:"site-4",code:"ST001_C4",name:"其他馆址（首都图书馆）",status:"active",remark:""},{id:"site-5",code:"",name:"测试停用馆址",status:"inactive",remark:"编码为空示例"}],id=[{id:"branch-6",siteId:"site-1",code:"ST001",name:"首都图书馆",status:"active",remark:""},{id:"branch-1",siteId:"site-1",code:"STD01",name:"首图地方文献",status:"active",remark:""},{id:"branch-2",siteId:"site-1",code:"STE01",name:"市少儿图书馆",status:"active",remark:""},{id:"branch-7",siteId:"site-1",code:"STEK1",name:"市少儿图书馆期刊分馆",status:"active",remark:""},{id:"branch-8",siteId:"site-1",code:"STES1",name:"市少儿图书馆视听分馆",status:"active",remark:""},{id:"branch-3",siteId:"site-1",code:"STG01",name:"首图古籍",status:"active",remark:""},{id:"branch-4",siteId:"site-1",code:"STK01",name:"首图期刊分馆",status:"active",remark:""},{id:"branch-9",siteId:"site-1",code:"STS01",name:"首图视听中心",status:"active",remark:""},{id:"branch-10",siteId:"site-2",code:"ST029",name:"首图大兴机场分馆",status:"active",remark:""},{id:"branch-11",siteId:"site-1",code:"STF01",name:"首图非遗文献分馆",status:"active",remark:""},{id:"branch-12",siteId:"site-4",code:"ST002",name:"首都图书馆月坛分馆",status:"active",remark:""},{id:"branch-13",siteId:"site-4",code:"ST003",name:"首都图书馆北工大分馆",status:"active",remark:""},{id:"branch-14",siteId:"site-4",code:"ST004",name:"首都图书馆东四分馆",status:"active",remark:""},{id:"branch-15",siteId:"site-4",code:"ST005",name:"首都图书馆小堡分馆",status:"active",remark:""},{id:"branch-16",siteId:"site-4",code:"ST006",name:"首都图书馆前门分馆",status:"active",remark:""},{id:"branch-17",siteId:"site-4",code:"ST007",name:"首都图书馆南邵分馆",status:"active",remark:""},{id:"branch-18",siteId:"site-4",code:"ST008",name:"首都图书馆东花市分馆",status:"active",remark:""},{id:"branch-19",siteId:"site-4",code:"ST009",name:"首都图书馆西长安街分馆",status:"active",remark:""},{id:"branch-20",siteId:"site-4",code:"ST010",name:"首都图书馆六里屯分馆",status:"active",remark:""},{id:"branch-21",siteId:"site-4",code:"ST011",name:"首都图书馆堡头分馆",status:"active",remark:""},{id:"branch-22",siteId:"site-4",code:"ST012",name:"首都图书馆首都机场分馆",status:"active",remark:""},{id:"branch-23",siteId:"site-4",code:"ST013",name:"首都图书馆西三旗分馆",status:"active",remark:""},{id:"branch-24",siteId:"site-4",code:"ST014",name:"首都图书馆社区活动",status:"active",remark:""},{id:"branch-25",siteId:"site-4",code:"ST015",name:"首都图书馆市财政局分馆",status:"active",remark:""},{id:"branch-26",siteId:"site-4",code:"ST018",name:"首都图书馆市人大分馆",status:"active",remark:""},{id:"branch-27",siteId:"site-4",code:"ST019",name:"亦庄开发区图书馆",status:"active",remark:""},{id:"branch-28",siteId:"site-4",code:"ST020",name:"北京市国际艺术学校分馆",status:"active",remark:""},{id:"branch-29",siteId:"site-4",code:"ST021",name:"国家图书馆",status:"active",remark:""},{id:"branch-30",siteId:"site-4",code:"ST024",name:"老干部局（怀柔）分馆",status:"active",remark:""},{id:"branch-31",siteId:"site-4",code:"ST025",name:"老干部局（东直门）分馆",status:"active",remark:""},{id:"branch-32",siteId:"site-4",code:"ST026",name:"首图耿丹学院分馆",status:"active",remark:""},{id:"branch-33",siteId:"site-4",code:"ST030",name:"首都图书馆酷车小镇分馆",status:"active",remark:""},{id:"branch-34",siteId:"site-4",code:"ST031",name:"首都图书馆天通苑分馆",status:"active",remark:""},{id:"branch-35",siteId:"site-4",code:"ST032",name:"首都图书馆体育分馆",status:"active",remark:""},{id:"branch-36",siteId:"site-4",code:"ST033",name:"首都图书馆南航分馆",status:"active",remark:""},{id:"branch-37",siteId:"site-4",code:"ST034",name:"首都图书馆火箭军分馆",status:"active",remark:""},{id:"branch-38",siteId:"site-4",code:"ST044",name:"首图北京政务中心分馆",status:"active",remark:""},{id:"branch-39",siteId:"site-4",code:"ST047",name:"首都图书馆沐林分馆",status:"active",remark:""},{id:"branch-5",siteId:"site-5",code:"",name:"测试停用分馆",status:"inactive",remark:""}],nd=[{id:"col-1",branchId:"branch-1",code:"CL001",name:"北京地方文献阅览室",status:"active",remark:""},{id:"col-2",branchId:"branch-2",code:"CL002",name:"首少.少儿钢琴厂书库",status:"active",remark:""},{id:"col-3",branchId:"branch-3",code:"CL003",name:"历史文献阅览室",status:"active",remark:""},{id:"col-4",branchId:"branch-4",code:"CL004",name:"首图刊.中文报刊阅览室",status:"active",remark:""},{id:"col-st01",branchId:"branch-6",code:"ST01",name:"哲学社会科学图书借阅室 (4204)",status:"active",remark:""},{id:"col-st02",branchId:"branch-6",code:"ST02",name:"中文库本书库 (4)",status:"active",remark:""},{id:"col-st03",branchId:"branch-6",code:"ST03",name:"文学史地图书借阅室2106",status:"active",remark:""},{id:"col-st04",branchId:"branch-6",code:"ST04",name:"工具书阅览室 (5205)",status:"active",remark:""},{id:"col-st05",branchId:"branch-6",code:"ST05",name:"艺术文献阅览室 (5205)",status:"active",remark:""},{id:"col-st06",branchId:"branch-6",code:"ST06",name:"中文报刊外借室",status:"active",remark:""},{id:"col-st07",branchId:"branch-6",code:"ST07",name:"科技图书借阅室 (6204)",status:"active",remark:""},{id:"col-st10",branchId:"branch-6",code:"ST10",name:"综合图书借阅室 (7204)",status:"active",remark:""},{id:"col-st100",branchId:"branch-6",code:"ST100",name:"首图预约处",status:"active",remark:""},{id:"col-st101",branchId:"branch-6",code:"ST101",name:"B座二层新书刊",status:"active",remark:""},{id:"col-st102",branchId:"branch-6",code:"ST102",name:"B座三层文学图书",status:"active",remark:""},{id:"col-5",branchId:"branch-5",code:"",name:"测试停用馆藏地",status:"inactive",remark:""}],gh=[{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态",type:"select",options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],mh=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],vh=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称",extra:!0},{key:"code",label:"馆藏地编码",extra:!0},{key:"name",label:"馆藏地名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],bh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],_h=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],Sh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称"},{key:"code",label:"馆藏地编码"},{key:"name",label:"馆藏地名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}];function Ke(e,t){return t?String(e||"").toLowerCase().includes(t.toLowerCase()):!0}function Vo(e,t){return e.find(i=>i.id===t)}function Jt(e,t){return e.find(i=>i.code===t)}function sd(e,t){return e.find(i=>i.id===t)}function yh(e,t){return e.find(i=>i.id===t)}function rd(e,t){const i=Vo(t,e.siteId);return{...e,siteCode:(i==null?void 0:i.code)||"-",siteName:(i==null?void 0:i.name)||"-"}}function ld(e,t,i){const n=sd(t,e.branchId),s=n?Vo(i,n.siteId):null;return{...e,branchCode:(n==null?void 0:n.code)||"-",branchName:(n==null?void 0:n.name)||"-",siteCode:(s==null?void 0:s.code)||"-",siteName:(s==null?void 0:s.name)||"-"}}function Fo(e){return[...e].filter(t=>t.status==="active").sort((t,i)=>t.name.localeCompare(i.name,"zh-CN"))}function jo(e){return Fo(e).map(t=>t.name)}function od(e){return["全部",...jo(e)]}const cd=new Set(["site","location"]);function Ch(e,t){return e.map(i=>!cd.has(i.key)||i.type!=="select"?i:{...i,options:[...t]})}function Th(e,t){return e.filter(i=>i.siteId===t&&i.status==="active").sort((i,n)=>i.name.localeCompare(n.name,"zh-CN"))}function Ds(e){return[...e].filter(t=>t.status==="active"&&t.code).sort((t,i)=>t.code.localeCompare(i.code,"zh-CN"))}function Ho(e){return e?e.code?`${e.code} | ${e.name}`:e.name||"":""}function ad(e){return Ds(e).map(t=>({value:t.id,label:Ho(t),code:t.code,name:t.name}))}function Rh(e){return Ds(e).map(t=>({value:t.code,label:Ho(t),code:t.code,name:t.name}))}function ud(e){return[...e].filter(t=>t.status==="active"&&t.code).sort((t,i)=>t.code.localeCompare(i.code,"zh-CN"))}function fd(e){return e?e.code?`${e.code} | ${e.name}`:e.name||"":""}function Ah(e,t,i=""){let n=ud(e);const s=(Array.isArray(i)?i:[i]).map(r=>String(r||"").trim()).filter(Boolean);if(s.length){const r=new Set(t.filter(l=>l.status==="active"&&s.includes(l.code)).map(l=>l.id));if(!r.size)return[];n=n.filter(l=>r.has(l.branchId))}return n.map(r=>({value:r.code,label:fd(r),code:r.code,name:r.name,branchId:r.branchId}))}function dd(e){return Yf.includes(e.trim())}function Uo(e){return Qf.includes(e)}function Ls(e,t){if(!Zf.includes(e))return!1;const i=ed[t];return i?i.some(n=>e.startsWith(n)):!0}function pd(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function hd(e,t,i=null){return e.some(n=>n.id!==i&&n.name===t)}function Ko(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function Go(e,t,i,n=null){return e.some(s=>s.id!==n&&s.siteId===i&&s.name===t)}function Wo(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function qo(e,t,i,n=null){return e.some(s=>s.id!==n&&s.branchId===i&&s.name===t)}function Eh(e,t,i){const n={},s=e.siteId||null,r=e.code.trim(),l=e.name.trim(),o=e.remark||"";return i||(r?r.length>zf?n.code="馆址编码长度不能超过32个字符":dd(r)?pd(t,r,s)&&(n.code="馆址编码已存在，请修改"):n.code="馆址编码必须属于四级馆藏地现有编码":n.code="请输入馆址编码"),l?l.length>Xf?n.name="馆址名称长度不能超过64个字符":hd(t,l,s)&&(n.name="已存在同名馆址"):n.name="请输入馆址名称",o.length>Jf&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function xh(e,t,i){const n={},s=e.branchId||null,r=e.siteId,l=e.code.trim(),o=e.name.trim(),c=e.remark||"";return r||(n.siteId="请选择所属馆址"),i||(l?l.length>Oo?n.code="分馆编码长度不能超过32个字符":r&&!Ls(l,r)?n.code="分馆编码必须属于四级馆址编码范围内":Ko(t,l,s)&&(n.code="分馆编码已存在，请修改"):n.code="请输入分馆编码"),o?o.length>ks?n.name="分馆名称长度不能超过64个字符":r&&Go(t,o,r,s)&&(n.name="该馆址下已存在同名分馆"):n.name="请输入分馆名称",c.length>Po&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function Ih(e,t,i){const n={},s=e.collectionId||null,r=e.branchId,l=e.code.trim(),o=e.name.trim(),c=e.remark||"";return e.siteId||(n.siteId="请选择所属馆址"),r||(n.branchId="请选择所属分馆"),i||(l?l.length>ko?n.code="馆藏地编码长度不能超过32个字符":Uo(l)?Wo(t,l,s)&&(n.code="馆藏地编码已存在，请修改"):n.code="馆藏地编码必须属于四级馆藏地现有编码":n.code="请输入馆藏地编码"),o?o.length>Ms?n.name="馆藏地名称长度不能超过64个字符":r&&qo(t,o,r,s)&&(n.name="该分馆下已存在同名馆藏地"):n.name="请输入馆藏地名称",c.length>Mo&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function wh(e,t){return e.filter(i=>!(!Ke(i.code,t.code)||!Ke(i.name,t.name)||t.status&&i.status!==t.status))}function Nh(e,t,i){return e.map(n=>rd(n,t)).filter(n=>!(!Ke(n.siteCode,i.siteCode)||!Ke(n.siteName,i.siteName)||!Ke(n.code,i.code)||!Ke(n.name,i.name)||i.status&&n.status!==i.status))}function $h(e,t,i,n){return e.map(s=>ld(s,t,i)).filter(s=>!(!Ke(s.siteCode,n.siteCode)||!Ke(s.siteName,n.siteName)||!Ke(s.branchCode,n.branchCode)||!Ke(s.branchName,n.branchName)||!Ke(s.code,n.code)||!Ke(s.name,n.name)||n.status&&s.status!==n.status))}function gd(e){return/\.(xls|xlsx)$/i.test(e)}function ti(e,t,i){const n=i.map(o=>o.map(c=>`"${String(c||"").replace(/"/g,'""')}"`).join(",")),s=`\uFEFF${t.join(",")}
${n.join(`
`)}
`,r=new Blob([s],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a");l.href=URL.createObjectURL(r),l.download=e,l.click(),URL.revokeObjectURL(l.href)}function Oh(e){e==="site"?ti("馆址导入模板.csv",Do,[["ST001_C5","示例馆址名称","使用中","示例备注"]]):e==="branch"?ti("分馆导入模板.csv",Lo,[["ST001_C1","首都华威桥馆","STF01","示例分馆名称","使用中","示例备注"]]):ti("馆藏地导入模板.csv",Bo,[["ST001_C1","首都华威桥馆","STD01","首图地方文献","CL005","示例馆藏地名称","使用中","示例备注"]])}function Ph(e,t){if(!(t!=null&&t.length))return;const i=new Date().toISOString().replace(/[-:T]/g,"").slice(0,14);e==="site"?ti(`馆址导入解析错误文件_${i}.csv`,[...Do,"错误原因"],t.map(n=>[n.code,n.name,n.statusText,n.remark,n.errorReason])):e==="branch"?ti(`分馆导入解析错误文件_${i}.csv`,[...Lo,"错误原因"],t.map(n=>[n.siteCode,n.siteName,n.branchCode,n.branchName,n.statusText,n.remark,n.errorReason])):ti(`馆藏地导入解析错误文件_${i}.csv`,[...Bo,"错误原因"],t.map(n=>[n.siteCode,n.siteName,n.branchCode,n.branchName,n.collectionCode,n.collectionName,n.statusText,n.remark,n.errorReason]))}function md(e,t,i,n){const s=String(e.siteCode||"").trim(),r=String(e.branchCode||"").trim(),l=String(e.branchName||"").trim(),o=String(e.remark||"");if(!s)return"馆址编码不能为空";if(!r)return"分馆编码不能为空";if(!l)return"分馆名称不能为空";if(r.length>Oo)return"分馆编码长度不能超过32个字符";if(l.length>ks)return"分馆名称长度不能超过64个字符";if(o.length>Po)return"备注长度不能超过200个字符";const c=Jt(i,s);return c?n.has(r)||Ko(t,r)?"分馆编码重复":Ls(r,c.id)?Go(t,l,c.id)?"同馆址下已存在同名分馆":(n.add(r),null):"分馆编码不属于当前馆址编码":"馆址编码不存在"}function vd(e,t,i,n,s){const r=String(e.siteCode||"").trim(),l=String(e.branchCode||"").trim(),o=String(e.collectionCode||"").trim(),c=String(e.collectionName||"").trim(),u=String(e.remark||"");if(!r)return"馆址编码不能为空";if(!l)return"分馆编码不能为空";if(!o)return"馆藏地编码不能为空";if(!c)return"馆藏地名称不能为空";if(o.length>ko)return"馆藏地编码长度不能超过32个字符";if(c.length>Ms)return"馆藏地名称长度不能超过64个字符";if(u.length>Mo)return"备注长度不能超过200个字符";const a=Jt(n,r);if(!a)return"馆址编码不存在";const p=i.find(g=>g.siteId===a.id&&g.code===l);return p?s.has(o)||Wo(t,o)?"馆藏地编码重复":Uo(o)?qo(t,c,p.id)?"同分馆下已存在同名馆藏地":(s.add(o),null):"馆藏地编码不属于四级馆藏地现有编码":"分馆编码不存在"}function kh(e,t,{siteRows:i,branchRows:n,collectionRows:s}){const r=t.name.toLowerCase();if(!gd(t.name))return{ok:!1,message:"导入文件格式不符"};if(r.includes("header")||r.includes("表头"))return{ok:!1,message:"模板的表头更改了"};if(r.includes("2000")||r.includes("超限"))return{ok:!1,message:"数据记录超过2000条"};if(e==="site"){const g=new Set(i.map(y=>y.code).filter(Boolean)),m=new Set(i.map(y=>y.name));if(r.includes("success")||r.includes("全部成功")){const _=["ST002_C1","ST002_C2","ST003_C1"].filter(M=>!g.has(M)).map((M,z)=>({code:M,name:`批量导入馆址${z+1}`,status:"active",remark:""}));return{ok:!0,result:{total:_.length,success:_.length,fail:0,successRows:_,errorRows:[]}}}const R=100,S=10,I=["馆址编码重复","馆址编码不属于四级馆藏地现有编码","馆址名称长度不能超过64个字符","已存在同名馆址"],O=Array.from({length:S},(y,_)=>({code:_===0?"ST001_C1":`INVALID_${_}`,name:_===3?"首都华威桥馆":`失败馆址${_+1}`,statusText:"使用中",remark:"",errorReason:I[_%I.length]})),b=Array.from({length:R-S},(y,_)=>({code:`ST002_C${String(_+10).padStart(2,"0")}`,name:`导入馆址${_+1}`,status:"active",remark:_%4===0?"批量导入":""})).filter(y=>!g.has(y.code)&&!m.has(y.name));return{ok:!0,result:{total:R,success:R-S,fail:S,successRows:b,errorRows:O}}}if(e==="branch"){const g=new Set(n.map(b=>b.code).filter(Boolean));if(r.includes("success")||r.includes("全部成功")){const b=Jt(i,"ST001_C1")||i.find(M=>M.code),_=["STF01","STH01","STD02"].filter(M=>!g.has(M)&&b&&Ls(M,b.id)).map((M,z)=>({siteCode:(b==null?void 0:b.code)||"ST001_C1",siteName:(b==null?void 0:b.name)||"首都华威桥馆",siteId:(b==null?void 0:b.id)||"site-1",branchCode:M,branchName:`批量导入分馆${z+1}`,status:"active",remark:""}));return{ok:!0,result:{total:_.length,success:_.length,fail:0,successRows:_,errorRows:[]}}}const m=100,R=10,S=["分馆编码重复","分馆编码不属于当前馆址编码","分馆名称长度不能超过64个字符","馆址编码不存在","同馆址下已存在同名分馆"],I=Array.from({length:R},(b,y)=>({siteCode:y===3?"INVALID_SITE":"ST001_C1",siteName:y===3?"不存在馆址":"首都华威桥馆",branchCode:y===0?"STD01":`INVALID_${y}`,branchName:y===2?"A".repeat(ks+1):y===4?"首图地方文献":`失败分馆${y+1}`,statusText:"使用中",remark:"",errorReason:S[y%S.length]})),O=Array.from({length:m-R},(b,y)=>{const _=Jt(i,"ST001_C1")||i[0],M=`STF${String(y+10).padStart(2,"0")}`;return{siteCode:(_==null?void 0:_.code)||"ST001_C1",siteName:(_==null?void 0:_.name)||"首都华威桥馆",siteId:(_==null?void 0:_.id)||"site-1",branchCode:M,branchName:`导入分馆${y+1}`,status:"active",remark:y%4===0?"批量导入":""}}).filter(b=>!g.has(b.branchCode)&&md(b,n,i,new Set)===null);return{ok:!0,result:{total:m,success:m-R,fail:R,successRows:O,errorRows:I}}}const l=new Set(s.map(g=>g.code).filter(Boolean));if(r.includes("success")||r.includes("全部成功")){const g=Jt(i,"ST001_C1")||i[0],m=n.find(I=>I.siteId===(g==null?void 0:g.id)&&I.code==="STD01")||n[0],S=["CL005","CL006","CL007"].filter(I=>!l.has(I)).map((I,O)=>({siteCode:(g==null?void 0:g.code)||"ST001_C1",siteName:(g==null?void 0:g.name)||"首都华威桥馆",branchCode:(m==null?void 0:m.code)||"STD01",branchName:(m==null?void 0:m.name)||"首图地方文献",branchId:(m==null?void 0:m.id)||"branch-1",collectionCode:I,collectionName:`批量导入馆藏地${O+1}`,status:"active",remark:""}));return{ok:!0,result:{total:S.length,success:S.length,fail:0,successRows:S,errorRows:[]}}}const o=100,c=10,u=["馆藏地编码重复","馆藏地编码不属于四级馆藏地现有编码","馆藏地名称长度不能超过64个字符","馆址编码不存在","分馆编码不存在","同分馆下已存在同名馆藏地"],a=Array.from({length:c},(g,m)=>({siteCode:m===3?"INVALID_SITE":"ST001_C1",siteName:m===3?"不存在馆址":"首都华威桥馆",branchCode:m===4?"INVALID_BRANCH":"STD01",branchName:m===4?"不存在分馆":"首图地方文献",collectionCode:m===0?"CL001":`INVALID_${m}`,collectionName:m===2?"A".repeat(Ms+1):m===5?"北京地方文献阅览室":`失败馆藏地${m+1}`,statusText:"使用中",remark:"",errorReason:u[m%u.length]})),p=Array.from({length:o-c},(g,m)=>{const R=Jt(i,"ST001_C1")||i[0],S=n.find(O=>O.siteId===(R==null?void 0:R.id)&&O.code==="STD01")||n[0],I=`CL${String(m+20).padStart(3,"0")}`;return{siteCode:(R==null?void 0:R.code)||"ST001_C1",siteName:(R==null?void 0:R.name)||"首都华威桥馆",branchCode:(S==null?void 0:S.code)||"STD01",branchName:(S==null?void 0:S.name)||"首图地方文献",branchId:(S==null?void 0:S.id)||"branch-1",collectionCode:I,collectionName:`导入馆藏地${m+1}`,status:"active",remark:m%4===0?"批量导入":""}}).filter(g=>!l.has(g.collectionCode)&&vd(g,s,n,i,new Set)===null);return{ok:!0,result:{total:o,success:o-c,fail:c,successRows:p,errorRows:a}}}function Mh(e,t){t.forEach(i=>{e.some(n=>n.code===i.code)||e.unshift({id:`site-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,code:i.code,name:i.name,status:i.status,remark:i.remark||""})})}function Dh(e,t){t.forEach(i=>{e.some(n=>n.code===i.branchCode)||e.unshift({id:`branch-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,siteId:i.siteId,code:i.branchCode,name:i.branchName,status:i.status,remark:i.remark||""})})}function Lh(e,t){t.forEach(i=>{e.some(n=>n.code===i.collectionCode)||e.unshift({id:`col-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,branchId:i.branchId,code:i.collectionCode,name:i.collectionName,status:i.status,remark:i.remark||""})})}const Kr="orderm_location_data";function Hi(){return{siteRows:td.map(e=>({...e})),branchRows:id.map(e=>({...e})),collectionRows:nd.map(e=>({...e}))}}const bd=Tn("location",{state:()=>({initialized:!1,siteRows:[],branchRows:[],collectionRows:[]}),getters:{activeSites(e){return Fo(e.siteRows)},activeSiteNames(e){return jo(e.siteRows)},activeSiteFilterOptions(e){return od(e.siteRows)},activeBranches(e){return Ds(e.branchRows)},activeBranchSelectOptions(e){return ad(e.branchRows)}},actions:{initFromStorage(){if(!this.initialized){try{const e=localStorage.getItem(Kr);if(e){const t=JSON.parse(e);this.siteRows=Array.isArray(t.siteRows)?t.siteRows:Hi().siteRows,this.branchRows=Array.isArray(t.branchRows)?t.branchRows:Hi().branchRows,this.collectionRows=Array.isArray(t.collectionRows)?t.collectionRows:Hi().collectionRows}else this.resetToInitial()}catch{this.resetToInitial()}this.initialized=!0}},ensureInitialized(){this.initialized||this.initFromStorage()},resetToInitial(){const e=Hi();this.siteRows=e.siteRows,this.branchRows=e.branchRows,this.collectionRows=e.collectionRows,this.persist()},persist(){localStorage.setItem(Kr,JSON.stringify({siteRows:this.siteRows,branchRows:this.branchRows,collectionRows:this.collectionRows}))},replaceSiteRows(e){this.siteRows=e,this.persist()},replaceBranchRows(e){this.branchRows=e,this.persist()},replaceCollectionRows(e){this.collectionRows=e,this.persist()}}}),_d={class:"h-12 bg-slate-900 flex items-center justify-between px-4 shrink-0 z-20"},Sd={class:"flex items-center gap-2"},yd={class:"text-white font-medium text-sm"},Cd={class:"flex items-center gap-3 shrink-0"},Td={class:"flex items-center gap-1 text-gray-300 text-xs"},Rd={class:"text-white"},Ad={__name:"AppHeader",setup(e){const t=En();return(i,n)=>(Se(),Le("header",_d,[Z("div",Sd,[n[0]||(n[0]=Z("div",{class:"w-7 h-7 bg-sky-500 rounded flex items-center justify-center"},[Z("svg",{class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})])],-1)),Z("span",yd,ii(ye(t).config.appName),1)]),Z("div",Cd,[Z("div",Td,[n[1]||(n[1]=Z("span",null,"当前机构",-1)),Z("span",Rd,ii(ye(t).config.institution),1),n[2]||(n[2]=Z("svg",{class:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),n[3]||(n[3]=Z("div",{class:"w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center"},[Z("svg",{class:"w-5 h-5 text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])],-1))])]))}},Ed={id:"sidebar-wrapper",class:"relative shrink-0 h-full"},xd={class:"flex-1 py-2"},Id=["onClick"],wd={__name:"AppSidebar",setup(e){const t=Ps(),i=En(),n=hn(!1);function s(l){return fs(i.activeRoute)===l}function r(l,o){i.openTab(l,o),t.push(l)}return(l,o)=>{const c=Es("RouterLink");return Se(),Le("div",Ed,[Z("aside",{id:"sidebar",class:It(["h-full bg-slate-800 flex flex-col overflow-y-auto transition-[width] duration-200",n.value?"w-0 overflow-hidden":"w-52"])},[Z("nav",xd,[(Se(!0),Le(Pe,null,Yn(ye(i).config.sidebar,u=>(Se(),Le("div",{key:u.id,class:"sidebar-group"},[Z("button",{type:"button",class:"sidebar-toggle w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-slate-700 transition-colors",onClick:a=>ye(i).toggleGroup(u.id)},[Z("span",null,ii(u.label),1),(Se(),Le("svg",{class:It(["w-4 h-4 transition-transform",{"rotate-180":ye(i).isGroupExpanded(u.id,ye(i).activeRoute)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...o[2]||(o[2]=[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,Id),Z("div",{class:It(["sidebar-children overflow-hidden transition-all duration-200",ye(i).isGroupExpanded(u.id,ye(i).activeRoute)?"max-h-[500px]":"max-h-0"])},[(Se(!0),Le(Pe,null,Yn(u.children,a=>(Se(),si(c,{key:a.route,to:a.route,class:It(["block pl-10 pr-4 py-2 text-sm transition-colors",s(a.route)?"bg-sky-600 text-white":"text-gray-400 hover:text-white hover:bg-slate-700"]),onClick:p=>r(a.route,a.label)},{default:Rs(()=>[lo(ii(a.label),1)]),_:2},1032,["to","class","onClick"]))),128))],2)]))),128))]),Z("button",{type:"button",class:"p-3 border-t border-slate-700 text-gray-400 hover:text-white flex justify-center shrink-0",title:"收起菜单",onClick:o[0]||(o[0]=u=>n.value=!0)},[...o[3]||(o[3]=[Z("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})],-1)])])],2),Fc(Z("button",{type:"button",id:"sidebar-expand",class:"absolute bottom-0 left-0 z-10 w-10 p-3 border-t border-slate-700 bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex justify-center",title:"展开菜单",onClick:o[1]||(o[1]=u=>n.value=!1)},[...o[4]||(o[4]=[Z("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})],-1)])],512),[[Ya,n.value]])])}}},Nd={id:"page-tab-bar",class:"bg-white border-b border-gray-200 px-4 flex items-center gap-2 h-10 shrink-0 overflow-x-auto"},$d=["onClick"],Od=["onClick"],Pd={__name:"TabBar",setup(e){const t=Ps(),i=En();function n(r){i.switchTab(r),t.push(r)}function s(r){const l=i.activeRoute===r;i.closeTab(r),l&&t.push(i.activeRoute)}return(r,l)=>(Se(),Le("div",Nd,[(Se(!0),Le(Pe,null,Yn(ye(i).tabs,o=>(Se(),Le("div",{key:o.route,class:It(["flex items-center gap-2 border rounded px-3 py-1 text-sm cursor-pointer whitespace-nowrap",o.route===ye(i).activeRoute?"bg-sky-50 border-sky-200 text-sky-700":"bg-white border-gray-200 text-gray-600 hover:bg-gray-50"]),onClick:c=>n(o.route)},[Z("span",null,ii(o.title),1),ye(i).tabs.length>1?(Se(),Le("button",{key:0,type:"button",class:"opacity-40 hover:opacity-100 text-xs leading-none",onClick:vu(c=>s(o.route),["stop"])},"×",8,Od)):oo("",!0)],10,$d))),128))]))}},kd={class:"flex flex-col h-screen overflow-hidden"},Md={class:"flex flex-1 overflow-hidden"},Dd={class:"flex-1 flex flex-col overflow-hidden bg-gray-100"},Ld={class:"flex-1 min-h-0 overflow-hidden"},Bd={class:"h-full min-h-0 overflow-hidden p-4 flex flex-col"},Vd={key:0,class:"flex flex-col flex-1 min-h-0 h-full overflow-hidden"},Fd={__name:"AppLayout",setup(e){const t=Gf();Ps();const i=En(),n=Wf(),s=qf(),r=bd();As(()=>{i.initFromStorage(),n.initFromStorage(),s.initFromStorage(),r.initFromStorage(),l()}),Ft(()=>t.path,()=>l());function l(){const o=t.path,c=t.meta.title||$o(o);i.openTab(o,c)}return(o,c)=>{const u=Es("RouterView");return Se(),Le("div",kd,[me(Ad),Z("div",Md,[me(wd),Z("main",Dd,[me(Pd),Z("div",Ld,[Z("div",Bd,[me(u,null,{default:Rs(({Component:a,route:p})=>[a?(Se(),Le("div",Vd,[(Se(),si(Jc,{max:20},[(Se(),si(la(a),{key:p.fullPath}))],1024))])):oo("",!0)]),_:1})])])])])])}}},jd=[{path:"orders",name:"orders",component:()=>ne(()=>import("./OrderManageView-C8tP8A4M.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url),meta:{title:"订单管理",module:"order"}},{path:"orders/lines",redirect:{path:"/orders",query:{tab:"order-line"}}},{path:"orders/line/:lineNo?",name:"order-line-detail",component:()=>ne(()=>import("./OrderLineDetailView-Bme2GeQ0.js"),__vite__mapDeps([26,3,4,5,9,10,11,12,13,19,23,24,27]),import.meta.url),meta:{title:"订单行详情",module:"order"}},{path:"bib-query",name:"bib-query",component:()=>ne(()=>import("./BibQueryView-CBIdphjS.js"),__vite__mapDeps([28,3,4,5,19,2,9,10,11,12,13,29,15,16,17,8,20,18,14,23,24,6,30]),import.meta.url),meta:{title:"书目查询",module:"order"}},{path:"bib-query/new-bib",name:"new-bib",component:()=>ne(()=>import("./NewBibView-D91JzOu3.js"),__vite__mapDeps([31,32]),import.meta.url),meta:{title:"新建书目",module:"order"}},{path:"bib-query/z3950",name:"z3950",component:()=>ne(()=>import("./Z3950QueryView-BNOr-xcP.js"),__vite__mapDeps([33,3,4,5,32]),import.meta.url),meta:{title:"查Z3950",module:"order"}}],Hd=[{path:"acceptance",name:"acceptance",component:()=>ne(()=>import("./AcceptanceManageView-ticC9oa7.js"),__vite__mapDeps([34,1,2,3,4,5,7,23,24,20,35,10,15,16,17,36,37,38,39,40,6]),import.meta.url),meta:{title:"验收单管理",module:"acceptance"}},{path:"acceptance/detail/:acceptanceId",name:"acceptance-detail",component:()=>ne(()=>import("./AcceptanceDetailView-BP-VuGGL.js"),__vite__mapDeps([41,1,2,3,4,5,7,6,37,20,35,10,23,24,11,32]),import.meta.url),meta:{title:"验收详情",module:"acceptance"}},{path:"acceptance/delivery-import",redirect:"/acceptance/delivery-import/tasks"},{path:"acceptance/delivery-import/tasks",name:"delivery-import-tasks",component:()=>ne(()=>import("./DeliveryImportTaskListView-f3qOwE6h.js"),__vite__mapDeps([42,3,4,5,38,39,43,35,10,6,44]),import.meta.url),meta:{title:"导入任务",module:"acceptance"}},{path:"acceptance/delivery-import/tasks/:id",name:"delivery-import-task-detail",component:()=>ne(()=>import("./DeliveryImportTaskDetailView-BqQ5agUu.js"),__vite__mapDeps([45,4,32,38,39,46,6,20,35,10,43,47]),import.meta.url),meta:{title:"导入任务详情",module:"acceptance"}},{path:"receive",name:"receive",component:()=>ne(()=>import("./ReceiveByItemView-CMFd-cJ1.js"),__vite__mapDeps([48,3,4,5,6,46,39,40,23,24,14,35,10,11]),import.meta.url),meta:{title:"逐条收货",module:"acceptance"}},{path:"batch-acceptance",name:"batch-acceptance",component:()=>ne(()=>import("./BatchAcceptanceView-B-03zdv7.js"),__vite__mapDeps([49,1,2,3,4,5,6,20,35,10,36]),import.meta.url),meta:{title:"批量验收",module:"acceptance"}},{path:"exchange",name:"exchange",component:()=>ne(()=>import("./ExchangeManageView-DiBKYPsc.js"),__vite__mapDeps([50,3,4,5,7,2,20,39,14]),import.meta.url),meta:{title:"换货管理",module:"acceptance"}},{path:"return",name:"return",component:()=>ne(()=>import("./ReturnManageView-NTJtAwb8.js"),__vite__mapDeps([51,3,4,5,7,2,14]),import.meta.url),meta:{title:"退货管理",module:"acceptance"}},{path:"shortage",name:"shortage",component:()=>ne(()=>import("./ShortageManageView-B7R4UtjZ.js"),__vite__mapDeps([52,21,9,10,11,12,13,8,1,2,3,4,5,7,6,53,20,14]),import.meta.url),meta:{title:"催缺管理",module:"acceptance"}},{path:"shortage/detail/:shortageId",name:"shortage-detail",component:()=>ne(()=>import("./ShortageDetailView-Bl_0760r.js"),__vite__mapDeps([54,1,2,3,4,5,6,53,20,21,9,10,11,12,13,8,32]),import.meta.url),meta:{title:"催缺详情",module:"acceptance"}}],Ud=[{path:"pending-settlement",name:"pending-settlement",component:()=>ne(()=>import("./PendingSettlementView-fj8qWAMp.js"),__vite__mapDeps([55,1,2,3,4,5,20]),import.meta.url),meta:{title:"待结算",module:"settlement"}},{path:"settled",name:"settled",component:()=>ne(()=>import("./SettledView-BpyRnjLS.js"),__vite__mapDeps([56,1,2,3,4,5,57]),import.meta.url),meta:{title:"已结算",module:"settlement"}},{path:"settled/detail/:settleId",name:"settlement-detail",component:()=>ne(()=>import("./SettlementDetailView-DNb7m77b.js"),__vite__mapDeps([58,32,57]),import.meta.url),meta:{title:"结算详情",module:"settlement"}},{path:"settled/list/:settleId",name:"settlement-list",component:()=>ne(()=>import("./SettlementListView-D62Abr6E.js"),__vite__mapDeps([59,1,2,3,4,5,7,32,12]),import.meta.url),meta:{title:"结算清单",module:"settlement"}},{path:"settlement-fail",name:"settlement-fail",component:()=>ne(()=>import("./FailSettlementView-CZwDP6QT.js"),__vite__mapDeps([60,1,2,3,4,5]),import.meta.url),meta:{title:"结算失败处理",module:"settlement"}}],Kd=[{path:"subscribers",name:"subscribers",component:()=>ne(()=>import("./SubscriberListView-Bfj_XKOt.js"),__vite__mapDeps([61,1,2,3,4,5,18,17,20,16]),import.meta.url),meta:{title:"订户列表",module:"subscriber"}},{path:"librarians",name:"librarians",component:()=>ne(()=>import("./LibrarianListView-SO5RenKx.js"),__vite__mapDeps([62,1,2,3,4,5,20,16,17]),import.meta.url),meta:{title:"馆员列表",module:"subscriber"}}],Gd=[{path:"currency",name:"currency",component:()=>ne(()=>import("./CurrencyInfoView-FdTOxE5k.js"),__vite__mapDeps([63,1,2,3,4,5,29,20]),import.meta.url),meta:{title:"货币信息",module:"currency"}}],Wd=[{path:"import-template",name:"import-template",component:()=>ne(()=>import("./ImportTemplateConfigView-Cu1uq_IU.js"),__vite__mapDeps([64,1,2,3,4,5,18,65,22,20]),import.meta.url),meta:{title:"订单导入模板配置",module:"import-template"}}],qd=[{path:"shortage-config",name:"shortage-config",component:()=>ne(()=>import("./ShortageConfigView-mHBzhkFv.js"),__vite__mapDeps([66,1,2,3,4,5,17,20]),import.meta.url),meta:{title:"催缺配置",module:"shortage-config"}}],zd=[{path:"barcode-supplier",name:"barcode-supplier",component:()=>ne(()=>import("./BarcodeSupplierView-DMiM0TdV.js"),__vite__mapDeps([67,1,2,3,4,5,65,20]),import.meta.url),meta:{title:"条码号供应商代码",module:"barcode-supplier"}}],Xd=[{path:"marc-mapping",name:"marc-mapping",component:()=>ne(()=>import("./MarcMappingView-C3Tizsht.js"),__vite__mapDeps([68,1,2,3,4,5,13]),import.meta.url),meta:{title:"订单与MARC类型映射关系",module:"marc-mapping"}}],Jd=[{path:"locations",name:"locations",component:()=>ne(()=>import("./LocationManageView-bgsDzNak.js"),__vite__mapDeps([69,1,2,3,4,5,65]),import.meta.url),meta:{title:"馆址管理",module:"location"}}],zo=Kf({history:Cf(),routes:[{path:"/",component:Fd,redirect:"/orders",children:[...jd,...Hd,...Ud,...Kd,...Gd,...Wd,...qd,...zd,...Xd,...Jd,{path:"reason-params",name:"reason-params",component:()=>ne(()=>import("./ReasonParamsView-Cll58Baq.js"),__vite__mapDeps([70,1,2,3,4,5]),import.meta.url),meta:{title:"退换撤订原因参数"}},{path:"placeholder/:slug",name:"placeholder",component:()=>ne(()=>import("./PlaceholderView-DxESbtYJ.js"),[],import.meta.url),meta:{title:"待迁移"}}]}]});zo.beforeEach((e,t,i)=>{document.title=`${e.meta.title||"页面"} - 图书馆采选订单管理系统`,i()});function Yd(e,t){return`<div class="prd-spec-header"><div class="prd-spec-header-title">[${e}] ${t}</div></div>`}function d(e,t){return`<p class="prd-spec-section-title">${t}</p>`}function Ce(e){return`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};margin-right:6px;"></span>`}function le(e,t){const i=e.map(s=>`<th>${s}</th>`).join(""),n=t.map(s=>`<tr>${s.map(r=>`<td>${r}</td>`).join("")}</tr>`).join("");return`<table class="prd-spec-table"><thead><tr>${i}</tr></thead><tbody>${n}</tbody></table>`}function K(e,t,i){return`${Yd(e,t)}${i}`}const Qd=K("5.2.5.1","筛选查询",`
<div id="overview">
${d("","功能描述")}
<p>提供多维度组合检索条件，帮助用户快速定位目标订单。支持展开/收起：默认显示首行 3 列检索项，展开后显示全部条件。</p>
${d("","页面要素")}
<ul>
<li><strong>默认显示</strong>：订单号（文本）、采选方式（下拉）、供应商（下拉）</li>
<li><strong>展开后追加</strong>：发订人、订单状态、结算状态、订户、语种、发订时间（日期范围）、预算名称、资源类型、馆址</li>
<li><strong>操作按钮</strong>：「检索」触发过滤；「重置」清空条件并恢复全量列表</li>
</ul>
</div>
<div id="rules">
${d("","业务规则")}
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
${d("","异常处理")}
<ul>
<li>无匹配数据时表格展示空列表，分页显示 0 条</li>
</ul>
</div>`),Zd=K("5.2.5.2","数据表格与行操作",`
<div id="overview">
${d("","功能描述")}
<p>以表格形式展示订单列表，支持分页、行勾选及按订单状态动态显示操作按钮。</p>
${d("","表格列")}
<p>复选框列（始终固定列首最左）、序号、订户、馆址、订单号、采选方式、资源类型、语种、供应商、订单时间、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订户、馆址、订单号；列尾 — 操作。列展示自定义规则见 <strong>5.2.5.9</strong>。</p>
${d("","交互逻辑")}
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
${d("","操作按钮规则（按订单状态）")}
${le(["订单状态","可用操作"],[["待发订 pending","发订、删除"],["待导入 pendingImport","导入订单"],["已发订 ordered","编辑、导出订单、撤订"],["处理中 processing","导出订单"],["已撤订 cancelled","导出订单、删除"]])}
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>导出订单（单行）：原型阶段 alert 提示演示</li>
</ul>
</div>`),ep=K("5.2.5.3","新建订单弹窗",`
<div id="overview">
${d("","功能描述")}
<p>通过工具栏「新建订单」按钮打开模态弹窗，填写订单头信息后创建新订单，初始状态为<strong>待导入</strong>。</p>
${d("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 订户、资源类型、采选方式、预算名称、语种、供应商、馆址（均为下拉，必填）</li>
<li>折扣（文本，非必填）</li>
</ul>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>提交前校验全部必填项，未填时在字段下方显示红色提示并 alert 首条错误</li>
<li>新建成功后订单号自动生成，格式 PG001B{yyyyMMdd}{3位流水}</li>
<li>新建订单默认：发订册数/种数 0，码洋/实洋 0.00，结算状态「未结算」，发订时间为空</li>
<li>馆址选项来源于系统馆址配置（仅启用状态）</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>必填项未填：阻止提交，提示「请选择{字段名}」</li>
</ul>
</div>`),tp=K("5.2.5.4","编辑订单弹窗",`
<div id="overview">
${d("","功能描述")}
<p>已发订订单可通过操作列「编辑」打开弹窗，修改预算名称、供应商、发订备注。</p>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>预算名称、供应商为必填下拉</li>
<li>发订备注为多行文本，非必填</li>
<li>保存后更新列表对应行（原型 alert「订单已保存」）</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>预算或供应商未选：alert 提示对应字段</li>
</ul>
</div>`),ip=K("5.2.5.5","发订",`
<div id="overview">
${d("","功能描述")}
<p>待发订订单通过操作列「发订」打开发订备注弹窗，确认后将订单及下属待发订订单行置为已发订。</p>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>仅 <strong>待发订（pending）</strong> 状态订单可发订</li>
<li>发订后：订单状态 → 已发订；记录发订时间、发订人、发订备注</li>
<li>该订单下所有「待发订」订单行同步变为「已发订」，写入发订时间</li>
<li>发订备注弹窗：多行文本，可为空；标题「请填写发订备注：」</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>非待发订订单发订：alert「仅待发订状态的订单可发订」</li>
</ul>
</div>`),np=K("5.2.5.6","导入订单",`
<div id="overview">
${d("","功能描述")}
<p>待导入订单通过「导入订单」打开三步向导弹窗：选择模板并上传 → 查看解析结果 → 点「下一步」自动入库。</p>
${d("","步骤说明")}
<ol>
<li><strong>选择模板并上传</strong>：按订单资源类型/语种/供应商匹配可用导入模板；支持 xls/xlsx；可下载模板</li>
<li><strong>解析结果</strong>：展示总条数、成功/失败数；可下载解析结果；解析全部成功才可点「下一步」</li>
<li><strong>入库</strong>：第 2 步点「下一步」后进入本步并自动入库（显示 loading），成功后展示「入库成功」，订单状态变为待发订并写入订单行；本步不再单独点「入库」</li>
</ol>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>模板列表按当前订单属性从「导入模板管理」模块过滤</li>
<li>仅 1 个可用模板时自动选中</li>
<li>上传前校验：必须选择模板且已选文件</li>
<li>解析存在失败行时「下一步」按钮置灰</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>无匹配模板：提示「暂无与当前订单匹配的导入模板」</li>
<li>未选模板或文件：上传区显示红色校验信息</li>
<li>入库失败：展示「入库失败，请联系管理员」</li>
</ul>
</div>`),sp=K("5.2.5.7","撤订与删除",`
<div id="overview">
${d("","功能描述")}
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」）、待发订/已撤订订单删除。</p>
</div>
<div id="rules">
${d("","撤订规则")}
<ul>
<li>撤订前弹出「请选择撤订原因」弹窗，原因来源于「设置 - 退换撤订原因参数」</li>
<li>订单撤订：订单状态 → 已撤订；其下所有订单行状态 → 已撤订，写入撤订原因至备注</li>
<li>批量撤订需先勾选订单，未勾选 alert「请先勾选要撤订的订单」</li>
</ul>
${d("","删除规则")}
<ul>
<li>仅<strong>待发订</strong>或<strong>已撤订</strong>订单可删除</li>
<li>删除前二次确认弹窗展示订单号</li>
<li>删除后移除订单及其全部订单行</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>未选择撤订原因：alert「请选择撤订原因」</li>
<li>无可用撤订原因：下拉为空并提示前往设置配置</li>
</ul>
</div>`),rp=K("5.2.5.8","批量导出",`
<div id="overview">
${d("","功能描述")}
<p>工具栏「批量导出」下拉提供「导出配置」「导出订单」。导出配置弹窗支持全选/取消及字段勾选。</p>
</div>
<div id="rules">
${d("","可导出字段")}
<p>订户、馆址、订单号、采选方式、资源类型、语种、供应商、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态</p>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>「导出订单」：原型阶段 alert 演示</li>
</ul>
</div>`),lp=K("5.2.5.9","列展示配置",`
<div id="overview">
${d("","功能描述")}
<p>工具栏右侧齿轮按钮打开「列展示」面板，支持列显隐、分区内拖拽排序、固定在列首或列尾；配置即时生效并持久化至浏览器本地。</p>
${d("","页面要素")}
<ul>
<li><strong>入口</strong>：工具栏最右侧齿轮图标，悬浮提示「列展示」</li>
<li><strong>面板顶栏</strong>：「列展示」全选复选框 + 「重置」按钮</li>
<li><strong>三区列表</strong>（自上而下）：固定在列首 → 不固定 → 固定在列尾</li>
<li><strong>列项行</strong>：拖拽手柄、显隐复选框、列名；悬停显示固定操作图标</li>
</ul>
</div>
<div id="interaction">
${d("","交互逻辑")}
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
${d("","默认固定位置")}
${le(["固定位置","默认列"],[["列首固定","序号、订户、馆址、订单号"],["列尾固定","操作"]])}
${d("","业务规则")}
<ul>
<li>复选框列<strong>不参与</strong>列展示配置，始终显示且始终固定于列首最左侧</li>
<li>横向滚动时列首/列尾固定列保持可见，表头与表体同步固定，背景不透明</li>
<li>纵向滚动时表头吸顶</li>
<li>本地存储异常时自动回退默认配置</li>
</ul>
</div>`),op=K("5.3.5.1","筛选查询",`
<div id="overview">
${d("","功能描述")}
<p>支持基础条件 + 组合条件检索订单行，默认显示订单号、订单行号、行状态（多选）。</p>
${d("","页面要素")}
<ul>
<li><strong>默认行（收起可见）</strong>：订单号、订单行号、行状态（多选：待发订/已发订/处理中/已关闭；未选不过滤）</li>
<li><strong>展开后</strong>：组合条件（资源标识/正题名/作者/出版社 + 且/或逻辑链）、载体、验收状态、结算状态、是否催缺、书目记录号、馆址、<strong>馆藏重复</strong>、供应商（多选）、预算（多选）、<strong>订单重复</strong>、<strong>定价</strong>（位于订单重复之后）</li>
<li><strong>馆藏重复 / 订单重复</strong>：下拉选框，选项 <strong>全部 / 有 / 无</strong>，默认 <strong>全部</strong></li>
<li><strong>定价</strong>：下限 / 上限数字输入（可只填一端）</li>
<li>从订单列表点击订单号跳转时，自动带入订单号筛选</li>
</ul>
</div>
<div id="rules">
${d("","业务规则")}
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
${d("","异常处理")}
<p>无匹配数据时展示空表格。定价下限大于上限时提示「定价下限不能大于上限」，不发起检索。</p>
</div>`),cp=K("5.3.5.2","数据表格与行操作",`
<div id="overview">
${d("","功能描述")}
<p>展示订单行明细，含序号列、馆藏/订单查重标识列及行级操作入口。</p>
${d("","主要列")}
<p>复选框列、序号、订单号、馆址、订单行号、书目记录号、正题名、资源标识、载体、作者、出版社、出版时间、分卷号、分卷名、定价、币种、套内册数、套数、行状态、验收状态、结算状态、是否催缺、发/收/换/退/撤订、发订时间、馆藏重复、订单重复、备注、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订单号、馆址、订单行号；列尾 — 操作。列展示规则见 <strong>5.3.5.11</strong>。</p>
${d("","书目记录号列")}
<ul>
<li>展示<strong>书目记录号</strong>（<code>bibRecordNo</code>）</li>
<li>若<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值）非空，且其中至少有一条与书目记录号不一致，则在旁显示「<strong>实</strong>」浅蓝徽章；规则详见 <strong>5.3.5.10</strong></li>
<li>悬停「实」：浮层逐条列出全部非空实际关联书目记录号，每条为可点击链接</li>
<li>若实际关联书目记录号为空，或全部与书目记录号相同，则不显示「实」标记</li>
</ul>
${d("","交互")}
<ul>
<li>订单行号：链接跳转订单行详情页 #/orders/line/{orderLineNo}</li>
<li>备注：有备注显示蓝色「查看」，否则「—」</li>
<li>列较多时可横向滚动；表头纵向吸顶；固定列不透底</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.3.5.11）</li>
<li>操作列：查重（条件显示）、编辑、撤订（<strong>不含详情按钮</strong>；详情通过订单行号列跳转）</li>
</ul>
</div>
<div id="rules">
${d("","分页")}
<p>默认 <strong>50</strong> 条/页，可选 <strong>50 / 100 / 200</strong> 条/页；底部显示总条数与页码切换；检索后分页重置为第 1 页。</p>
</div>`),ap=K("5.3.5.3","生成催缺单",`
<div id="overview">
${d("","功能描述")}
<p>对勾选的订单行批量生成催缺单：按订单号（orderId）分组，自动过滤验收状态不允许催缺的行，生成成功后将对应订单行是否催缺（isShortage）更新为「是」，并提示是否立即查看催缺模块。</p>
${d("","页面要素")}
<ul>
<li><strong>生成催缺单按钮</strong>：订单行列表工具栏（与「更换供应商」「查重」「撤订」相邻）</li>
<li><strong>成功确认弹窗</strong>：文案「催缺单生成成功，已自动过滤已收货书目」「是否立即查看？」；按钮：取消 / 确定</li>
</ul>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ol>
<li>未满足启用条件时按钮置灰不可用</li>
<li>点击后按订单号分组生成催缺单，写入催缺管理列表</li>
<li>对本次实际纳入生成的订单行，将是否催缺（isShortage）更新为「是」</li>
<li>弹出成功确认框：取消关闭；确定则跳转至催缺单管理列表（不进入催缺详情）</li>
</ol>
</div>
<div id="rules">
${d("","业务规则")}
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
${d("","异常处理")}
<ul>
<li>未勾选或不满足启用条件：按钮置灰</li>
<li>过滤后均不可生成：提示「所选订单行均已收货或已退货，无法生成催缺单」</li>
</ul>
</div>`),up=K("5.3.5.4","查重操作入口",`
<div id="overview">
${d("","功能描述")}
<p>提供批量查重与单行查重两种操作入口，触发后弹出查重配置弹窗（见 5.3.5.5）。</p>
${d("","批量查重按钮")}
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
${d("","单个查重文字链")}
<ul>
<li>位置：订单行列表操作列</li>
<li>显示条件：仅当该行行状态为<strong>待发订</strong>时显示</li>
<li>非待发订行：不显示查重文字链</li>
<li>点击后：以当前行为查重对象，打开查重配置弹窗（不受批量条数上限约束）</li>
</ul>
</div>
<div id="rules">
${d("","订单行状态（是否可查重）")}
${le(["状态","说明","是否可查重"],[[`${Ce("#d97706")}待发订`,"订单/行尚未发订","是"],[`${Ce("#16a34a")}已发订`,"已发订","否"],[`${Ce("#2563eb")}处理中`,"处理中","否"],[`${Ce("#6b7280")}已关闭`,"已关闭","否"],[`${Ce("#6b7280")}已撤订`,"已撤订","否"]])}
${d("","批量查重按钮状态")}
${le(["状态","说明"],[["不可用（置灰）","未勾选行，或勾选超过 50 条，或不满足待发订 / 同资源类型 / 同语种条件"],["可用（高亮）","勾选行均满足批量查重全部启用条件"]])}
${d("","业务规则")}
<ul>
<li>仅当订单行行状态为待发订时可查重（不以所属订单状态放宽）</li>
<li>若批量勾选数量大于 50 条，则批量「查重」按钮置灰，不可打开查重配置</li>
<li>若批量勾选行的资源类型或语种分类不一致，则批量「查重」按钮置灰</li>
<li>单行查重不受批量勾选数量与「同资源类型 / 同语种」限制，但目标行须行状态为待发订</li>
</ul>
${d("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已登录，且具备订单行列表查看权限</li>
<li><strong>后置</strong>：查重配置弹窗打开</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>若勾选超过 50 条仍触发批量查重，则提示「批量查重最多支持 50 条订单行」，不打开配置弹窗</li>
<li>若勾选含非待发订行仍触发批量查重，则提示「仅支持行状态为待发订的订单行进行查重」</li>
<li>若勾选不同资源类型或不同语种（中文/外文）混合仍触发批量查重，则提示「请勾选相同资源类型和语种（中文/外文）的待发订订单行进行查重」</li>
</ul>
</div>`),fp=K("5.3.5.5","查重配置弹窗",`
<div id="overview">
${d("","功能描述")}
<p>点击查重入口后弹出查重配置弹窗，用户选择重复类型、查重字段与查重范围后执行查重。</p>
${d("","页面要素")}
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
${d("","交互逻辑")}
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
${d("","业务规则")}
<ul>
<li>所选字段采用 <strong>AND（且）</strong> 逻辑：若全部已选字段的值均非空且相等，则判定为重复</li>
<li>若比对字段为资源标识，则忽略大小写及连字符（<code>-</code>）</li>
<li>其他字段比对时忽略大小写</li>
<li>查重范围未选所属分馆与所属馆藏地时视为不限；已选值随查重配置一并提交</li>
</ul>
${d("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已通过查重操作入口进入弹窗</li>
<li><strong>后置</strong>：执行查重并更新列表标识（及可能的书目记录号），或取消关闭弹窗</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>未选择任何查重字段：阻止提交，提示「请至少选择一个查重字段」</li>
<li>已选查重字段在待查重订单行中存在空值：阻止提交，提示空字段所在订单行号与字段名</li>
<li>查重请求失败：提示「查重失败，请稍后重试」，弹窗保持打开，恢复可编辑与可关闭状态</li>
</ul>
</div>`),dp=K("5.3.5.6","查重结果展示",`
<div id="overview">
${d("","功能描述")}
<p>查重完成后，在订单行列表展示重复标识；用户可点击「有」查看详细查重结果。</p>
${d("","列表重复标识列")}
<p>列表包含两列：<strong>馆藏重复</strong>（holdingDuplicate）、<strong>订单重复</strong>（orderDuplicate）。</p>
${le(["状态","显示"],[["未查重","空白"],["无重复","「无」"],["有重复","蓝色文字链「有」，点击打开查重结果面板"]])}
${d("","查重结果面板（顶部下拉）")}
<ul>
<li>从页面<strong>顶部向下滑出</strong>，全宽展示；默认高度约视口 <strong>75%</strong>；「MARC信息」「单件」约 <strong>88%</strong></li>
<li>面板结构：标题栏 → 摘要信息区 → 页签栏 → 结果内容区（可滚动）→ 分页栏（书目/订单；MARC / 单件不占位）</li>
<li>标题：统一为「<strong>查重结果</strong>」</li>
<li>摘要区一行：订单行号、查重字段、<strong>重复记录数：馆藏 M · 订单 N</strong></li>
<li>页签顺序：书目 → MARC信息 → 单件 → <strong>订单</strong>（文案固定，不带数量）</li>
<li>入口：点馆藏重复「有」默认「书目」；点订单重复「有」默认「订单」；打开后可自由切换</li>
<li>点击遮罩或右上角 × 关闭面板</li>
</ul>
${d("","馆藏：有单件与无单件")}
<blockquote>馆藏查重比对馆藏书目库。若匹配到书目记录，则列表馆藏重复显示「有」，与单件数量是否为 0 无关。</blockquote>
${le(["维度","有单件（单件数量 &gt; 0）","无单件（单件数量 = 0）"],[["列表「馆藏重复」","有","有"],["书目列表","展示","展示"],["单件数量列","蓝色徽章「N本」","灰色徽章「0本」"],["单件页签左侧树","四层馆藏树 + 未关联馆藏（如有）","「暂无馆藏分布」"],["单件页签右侧列表","全部或按四级叶子过滤","「暂无单件信息」"],["MARC / 关联","可用","可用"]])}
<p><strong>单件数量</strong>与该书目全部关联单件数一致。未分配馆藏地单件归入「<strong>未关联馆藏</strong>」叶子。</p>
${d("","书目页签")}
<ul>
<li>列顺序：<strong>单选</strong> → <strong>单件数量</strong> → 书目字段 → <strong>操作</strong>（无行展开/馆藏树）</li>
<li>单选：默认选中当前页第一条；MARC / 单件始终展示当前单选书目</li>
<li>书目字段随资源类型 + 语种动态切换（见下表）</li>
<li>操作：「关联」/「取消关联」（通过单选 + 切换页签查看 MARC / 单件）</li>
</ul>
${le(["资源类型","语种","展示字段"],[["纸质书","中文","书目记录号、正题名、ISBN、作者、出版社、出版年、版本"],["纸质书","外文","书目记录号、题名、ISBN、责任者、出版社、出版日期、语种"],["视听资料","中文","书目记录号、题名、载体、ISBN/ISRC、出版社、版本/格式、著者"],["视听资料","外文","书目记录号、ISRC、题名、载体、商品条码、目录号、出版方"]])}
${d("","MARC信息页签")}
<ul>
<li>左右分栏（默认各 50%，可拖拽）：左订单行信息（表格列：字段名、字段内容），右当前单选书目 MARC</li>
<li>MARC 字段随语种过滤；无底部分页栏</li>
</ul>
${le(["语种","展示 MARC 字段"],[["中文","010、2XX、3XX、6XX、7XX"],["外文","020、1XX、2XX、3XX、093"]])}
${d("","单件页签")}
<ul>
<li>左右分栏：左侧馆藏树<strong>固定 20%</strong>（不可拖拽）；宽度不足时左侧出现横向滚动条；右单件列表</li>
<li>一～三级点击仅展开/收起；四级馆藏地或「未关联馆藏」点击后右侧过滤对应单件</li>
<li>未选四级叶子时右侧显示该书目全部单件；无底部分页栏</li>
<li>列：馆藏状态、条码号、索书号、所属馆、所属馆藏地、所在馆、所在馆藏地、借阅类型、卷册描述、装帧（精装/平装）、排架标引分类、排架标引、登到时间</li>
<li>馆藏状态枚举示例：编目中、已外借、订购中、剔除、损坏、在架、阅览等</li>
</ul>
${d("","订单页签")}
<ul>
<li>列表上方统计栏：发订数量、收货数量、换货数量、退货数量、撤订数量（对各结果行 flowStats 求和，与书目查询关联订单行一致）</li>
<li>表格字段：订单行号、馆址、正题名、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、发订时间</li>
<li>默认 50 条/页，可选 50 / 100 / 200；无操作列</li>
</ul>
${d("","交互与分页")}
<ul>
<li>书目页签：默认 5 条/页，可选 5 / 10 / 20 / 50</li>
<li>订单页签：默认 50 条/页，可选 50 / 100 / 200</li>
<li>MARC / 单件不展示分页栏</li>
<li>打开面板时按入口重置默认页签与对应分页</li>
</ul>
</div>
<div id="rules">
${d("","交互逻辑")}
<ul>
<li>点「有」打开统一查重结果面板（入口决定默认页签）；「无」或空白不响应</li>
<li>书目单选驱动 MARC / 单件内容；切换书目时单件四级筛选重置</li>
<li>单件树：一～三级仅展开收缩；四级叶子筛选右侧列表</li>
<li>打开结果面板时<strong>不再</strong>执行自动关联（自动关联仅在查重返回落库时处理）</li>
</ul>
${d("","业务规则")}
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
${d("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：已执行查重操作，列表标识列已更新</li>
<li><strong>后置</strong>：查重结果面板展示详细查重结果；列表书目记录号（bibRecordNo）已按自动关联规则刷新（若适用）</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>重复标识为「无」或未查重时，不响应「有」链接点击</li>
<li>结果为空时显示「暂无查重结果」，分页显示第 1/1 页</li>
<li>若点击「有」但后端数据异常，则提示「查重结果数据不存在」</li>
<li>单件页签无馆藏分布或单件数量为 0：左侧「暂无馆藏分布」、右侧「暂无单件信息」</li>
<li>单件页签已选叶子但无匹配单件：展示「暂无单件信息」</li>
<li>MARC 页签无可用书目或过滤后无字段：展示「暂无MARC信息」</li>
</ul>
</div>`),pp=K("5.3.5.7","编辑订单行",`
<div id="overview">
${d("","功能描述")}
<p>操作列「编辑」打开宽屏弹窗，修改书目及订购信息字段。</p>
${d("","可编辑字段")}
<p>ISBN、正题名、出版社、定价、币种、正文语种、载体、商品条码、目录号、套数、套内册数、书目记录号、卷数、丛编、出版地、出版年、备注</p>
</div>
<div id="rules">
<ul>
<li>币种下拉：人民币/美元/欧元</li>
<li>正文语种：日文、德文、西文、法文、俄文、英文、中文等</li>
<li>保存后更新列表行（原型 alert 演示）</li>
</ul>
</div>`),hp=K("5.3.5.8","撤订",`
<div id="overview">
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」），流程同订单撤订原因弹窗。</p>
</div>
<div id="rules">
<ul>
<li>撤订后行状态 → 已撤订，备注写入撤订原因</li>
<li>未勾选批量撤订：alert「请先勾选要撤订的订单行」</li>
</ul>
</div>`),gp=K("5.3.5.9","批量导出",`
<div id="overview">
<p>「导出订单行」下拉：导出配置 / 导出清单。导出配置字段含订单号、馆址、订单行号、正题名、ISBN、作者、出版社、行状态、验收状态、馆藏重复、订单重复等。</p>
</div>`),mp=K("5.3.5.10","实际关联书目记录号与书目详情浮动弹窗",`
<div id="overview">
${d("","功能描述")}
<p>当订单行的<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）与<strong>书目记录号</strong>（<code>bibRecordNo</code>）存在差异时，在「书目记录号」列通过「<strong>实</strong>」标记提供快捷入口：悬停浮层内点击某条记录号，以<strong>无遮罩可拖拽浮动弹窗</strong>展示该记录号的 MARC 与单件，支持多窗并排对比。</p>
</div>
<div id="ui">
${d("","「实」标记（书目记录号列旁）")}
${le(["要素","规则"],[["展示位置","订单行列表「书目记录号」列，书目记录号（bibRecordNo）旁"],["显示条件","同时满足：① 实际关联书目记录号（actualBibRecordNos）去空后至少有一条；② 其中至少有一条与书目记录号（bibRecordNo）不一致"],["不显示","实际关联书目记录号为空或均为空字符串；或全部条目均与书目记录号相同（例如仅含一条且等于书目记录号）"],["样式","浅蓝色小徽章「实」"]])}
${d("","「实」标记悬停浮层")}
<ul>
<li><strong>显示前提</strong>：已满足「实」标记显示条件（见上表）</li>
<li><strong>标题</strong>：「实际关联书目记录号」</li>
<li><strong>记录号</strong>：逐条列出全部非空实际关联书目记录号；每条为蓝色可点击链接；<strong>不提供「复制全部」</strong></li>
<li><strong>收起</strong>：鼠标离开约 0.12 秒后收起；点击记录号后不立即关闭，便于连续打开多个弹窗</li>
</ul>
${d("","书目详情浮动弹窗")}
${le(["要素","规则"],[["默认尺寸","宽 1024px × 高 520px"],["最小尺寸","宽 480px × 高 320px"],["遮罩","无；列表背景仍可操作"],["标题栏","书目记录号、订单行号（orderLineNo）、正题名（title）；可拖拽；× 关闭"],["Tab 顺序","<strong>MARC信息</strong>（默认）→ <strong>单件（N）</strong>"],["单件 Tab","N = 当前记录号在编目系统中的单件行数；无数据时为 单件（0）"],["调整尺寸","四边及四角共 8 个拖拽热区，可调整宽度与高度"]])}
</div>
<div id="interaction">
${d("","交互逻辑")}
<ol>
<li>悬停「实」→ 点击某条实际关联书目记录号 → 打开浮动弹窗，默认 MARC 页签</li>
<li>重复点击同一记录号：将已有弹窗置于最前并短暂高亮，不新建</li>
<li>同时最多 <strong>3</strong> 个不同记录号弹窗；第 4 个提示「最多同时打开 3 个书目详情弹窗，请先关闭部分弹窗」</li>
<li>每新开一窗，在上一窗基础上向右、向下各错开 32 像素</li>
<li>离开订单行列表页签时清空全部弹窗</li>
</ol>
</div>
<div id="rules">
${d("","业务规则")}
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
${d("","异常处理")}
<ul>
<li>编目无 MARC：MARC 页签展示「暂无 MARC 信息」</li>
<li>编目无单件：单件页签表格为空，Tab 为「单件（0）」</li>
<li>已有 3 个弹窗时再开新记录号：提示后拒绝新建</li>
</ul>
</div>`),vp=K("5.3.5.11","列展示配置",`
<div id="overview">
${d("","功能描述")}
<p>订单行列表工具栏右侧提供「列展示」配置，交互与订单列表一致（详见 <strong>5.2.5.9</strong>），默认固定列不同。</p>
</div>
<div id="rules">
${d("","默认固定位置")}
${le(["固定位置","默认列"],[["列首固定","序号、订单号、馆址、订单行号"],["列尾固定","操作"]])}
${d("","业务规则")}
<ul>
<li>复选框列不参与列展示，始终固定列首最左</li>
<li>序号（no）为当前页内连续序号，随分页变化</li>
<li>重置后恢复上表默认顺序与固定位置</li>
<li>其余显隐、拖拽、固定、滚动遮挡规则同 5.2.5.9</li>
</ul>
</div>`),bp=K("5.3.5.12","更换供应商",`
<div id="overview">
${d("","功能描述")}
<p>将订单行的<strong>可迁出套数</strong>迁出，生成一条待发订新订单（可同时指定新供应商、预算与撤订原因）；原行对应套数记入发/收/换/退/撤订（flowStats）的撤订段。提供两个入口：</p>
<ol>
<li><strong>行内</strong>：操作列「更换供应商」——用户填写迁出套数（1～可迁出），生成 1 条新订单 + 1 条新订单行。</li>
<li><strong>工具栏批量</strong>：勾选多行后「更换供应商」——不填套数，每行按当前可迁出套数全量迁出，生成 1 条新订单 + N 条新订单行。</li>
</ol>
<p>本入口<strong>不以是否催缺（isShortage）排除行</strong>；催缺管理侧更换供应商仍按催缺口径独立运作，两边互不替代。</p>
${d("","页面要素")}
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
${d("","交互逻辑")}
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
${d("","可迁出套数")}
<blockquote>可迁出套数 = max(0, 发订 − 已收 − 已退 − 已换)</blockquote>
<ul>
<li>已换、已收、已退套数不迁出</li>
<li>提交前重算；填写套数大于可迁出则提示「可迁出套数不足，请重新填写」并中止</li>
</ul>
${d("","默认订单名称")}
<ul>
<li>原名取关联订单订单名称（orderName）；空则用「新订单」</li>
<li>扫描全部已有订单中精确匹配「原名-数字」的名称，取最大序号 + 1；无匹配则为 1（不回填空洞）</li>
<li>示例：已有「专题采购-1」「专题采购-3」→ 建议「专题采购-4」</li>
<li>最终 ≤ 50 字符；提交不校验重名</li>
</ul>
${d("","行内显示条件（须全部满足）")}
<ol>
<li>行状态（lineStatus）为「已发订」或「处理中」</li>
<li>验收状态（acceptanceStatus）为「待验收」「部分收货」或「换货中」</li>
<li>可迁出套数 ≥ 1</li>
</ol>
<p>不因是否催缺隐藏入口。</p>
${d("","工具栏启用条件（须全部满足）")}
<ol>
<li>至少勾选 1 行</li>
<li>行状态均为「已发订」或「处理中」</li>
<li>订户、资源类型、语种、采选方式相同（订户/采选方式取自关联订单）</li>
</ol>
<p>不要求同一订单号；启用时不校验验收状态或可迁出；提交时若某行可迁出 &lt; 1 则报错中止（不跳过）。</p>
${d("","新订单与原行")}
<ul>
<li>每次操作生成恰好 1 条待发订新订单；抬头继承关联订单，覆盖弹窗中的名称/供应商/预算/备注</li>
<li>行内：1 新行，套数 = 填写套数；批量：每勾选行 1 新行，套数 = 该行可迁出</li>
<li>新行状态待发订；是否催缺为「否」；书目字段自原行复制</li>
<li>原行撤订段累加迁出套数；原因 = 弹窗所选原因（不打开撤订原因弹窗）</li>
<li>若发订全部进入撤订 → 行状态「已撤订」；若仍有已收等 → 按更新后流转统计重算</li>
</ul>
${d("","与催缺更换供应商边界")}
${le(["入口","适用行","数量口径"],[["订单行列表行内 / 工具栏「更换供应商」","不按是否催缺排除","可迁出 = 发订 − 已收 − 已退 − 已换；行内可指定部分套数"],["催缺管理「更换供应商」/ 撤订","已催缺相关行","撤订套数 = max(催缺套数 − 到货套数, 0)"]])}
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>行不满足显示条件：操作列不展示入口</li>
<li>批量勾选范围不一致 / 行状态不符：工具栏按钮置灰</li>
<li>套数非法：字段提示「请填写合法套数（1～可迁出）」</li>
<li>缺订单名称 / 供应商 / 应填预算 / 原因：字段下方红色提示</li>
<li>某勾选行可迁出 = 0：提示该行无可迁出并中止（不部分成功）</li>
<li>未找到原订单 / 订单行不存在：提示无法生成</li>
<li>无可选撤订原因：下拉禁用并提示先在设置中配置</li>
</ul>
</div>`),_p={title:"非连续出版物订单",tabs:{"order-list":{label:"订单列表",itemIds:["5.2.5.1","5.2.5.2","5.2.5.3","5.2.5.4","5.2.5.5","5.2.5.6","5.2.5.7","5.2.5.8","5.2.5.9"]},"order-line":{label:"订单行列表",itemIds:["5.3.5.1","5.3.5.2","5.3.5.3","5.3.5.4","5.3.5.5","5.3.5.6","5.3.5.7","5.3.5.8","5.3.5.9","5.3.5.10","5.3.5.11","5.3.5.12"]}},items:[{id:"5.2.5.1",title:"筛选查询",tab:"order-list",htmlContent:Qd},{id:"5.2.5.2",title:"数据表格与行操作",tab:"order-list",htmlContent:Zd},{id:"5.2.5.3",title:"新建订单弹窗",tab:"order-list",htmlContent:ep},{id:"5.2.5.4",title:"编辑订单弹窗",tab:"order-list",htmlContent:tp},{id:"5.2.5.5",title:"发订",tab:"order-list",htmlContent:ip},{id:"5.2.5.6",title:"导入订单",tab:"order-list",htmlContent:np},{id:"5.2.5.7",title:"撤订与删除",tab:"order-list",htmlContent:sp},{id:"5.2.5.8",title:"批量导出",tab:"order-list",htmlContent:rp},{id:"5.2.5.9",title:"列展示配置",tab:"order-list",htmlContent:lp},{id:"5.3.5.1",title:"筛选查询",tab:"order-line",htmlContent:op},{id:"5.3.5.2",title:"数据表格与行操作",tab:"order-line",htmlContent:cp},{id:"5.3.5.3",title:"生成催缺单",tab:"order-line",htmlContent:ap},{id:"5.3.5.4",title:"查重操作入口",tab:"order-line",htmlContent:up},{id:"5.3.5.5",title:"查重配置弹窗",tab:"order-line",htmlContent:fp},{id:"5.3.5.6",title:"查重结果展示",tab:"order-line",htmlContent:dp},{id:"5.3.5.7",title:"编辑订单行",tab:"order-line",htmlContent:pp},{id:"5.3.5.8",title:"撤订",tab:"order-line",htmlContent:hp},{id:"5.3.5.9",title:"批量导出",tab:"order-line",htmlContent:gp},{id:"5.3.5.10",title:"实际关联书目记录号与书目详情浮动弹窗",tab:"order-line",htmlContent:mp},{id:"5.3.5.11",title:"列展示配置",tab:"order-line",htmlContent:vp},{id:"5.3.5.12",title:"更换供应商",tab:"order-line",htmlContent:bp}]};function Sp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-manage"]=_p}const yp=K("5.4.5.1","书目信息",`
<div id="overview">
${d("","功能描述")}
<p>页面顶部展示当前订单行书目信息，采用可折叠卡片布局，默认<strong>展开</strong>。左侧为封面占位区，右侧为<strong>三列网格</strong>展示书目字段；字段集合与顺序由<strong>资源类型 + 语种</strong>决定，全部字段均展示（值为空时显示空白）。</p>
${d("","页面要素")}
<ul>
<li><strong>折叠标题栏</strong>：左侧「书目信息」，右侧「收起/展开」文字链</li>
<li><strong>封面区</strong>：100×140px；有<strong>封面图地址</strong>（<code>coverUrl</code>）时展示图片，否则展示默认书籍 SVG 占位</li>
<li><strong>资源类型 / 语种</strong>：封面下方居中展示</li>
<li><strong>书目字段</strong>：三列网格；一般性附注、图书简介、备注、书评、作者简介、目次信息、馆藏信息等长文本字段占 3 列宽</li>
</ul>
</div>
<div id="fields">
${d("","字段展示规则（按资源类型 / 语种，顺序固定）")}
${d("","纸质书 · 中文")}
<p>正题名、ISBN、副题名、分卷号、分卷名、分类号、出版社、作者、出版年、定价、版本、丛编、主题词、读者对象、装帧形式、尺寸、正文语种、卷数、出版地、一般性附注、图书简介、备注</p>
${d("","纸质书 · 外文")}
<p>ISBN、学科大类、学科细分、中图分类号、中译名、题名、副题名、责任者、丛编、出版社、装帧形式、出版日期、版次、页数、币种、价格、主题词、读者对象、尺寸、语种、简介、精简装ISBN对照、馆藏信息、审读级别、获奖信息、目次信息、分卷号、分卷名、作者简介、书评、备注</p>
${d("","视听资料 · 中文")}
<p>ISBN、ISRC、题名、载体、出版社、版本/格式、著者、币种、码洋、彩胶颜色、限量编号、厂牌、系列名称、是否签名、是否老唱片、获奖信息、北京出版社、分类、盘号、老唱片品牌、剧种、年代、备注</p>
${d("","视听资料 · 外文")}
<p>ISRC、题名、载体、商品条码、目录号、外文原文题名、出版方、码洋、币种、备注、厂牌</p>
<blockquote>语种取自所属订单的<strong>语种</strong>字段（<code>language</code>，中文 / 外文）。</blockquote>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>点击标题栏任意区域切换展开/收起</li>
</ul>
</div>`),Cp=K("5.4.5.2","业务 Tab 页签",`
<div id="overview">
${d("","功能描述")}
<p>书目信息下方为业务 Tab 容器，用于切换查看订单行关联业务数据。Tab 顺序固定，默认激活<strong>相关订单行（N）</strong>。</p>
${d("","Tab 列表")}
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
${d("","交互逻辑")}
<ul>
<li>点击 Tab 按钮切换下方内容区，当前 Tab 高亮（底部蓝色边框）</li>
<li>切换 Tab 不刷新书目信息区；各 Tab 内分页状态独立保持</li>
</ul>
</div>`),Tp=K("5.4.5.3","相关订单行",`
<div id="overview">
${d("","功能描述")}
<p>展示与当前订单行<strong>书目匹配</strong>的其他订单行记录，<strong>包含当前订单行本身</strong>。数据范围限定为当前登录馆员<strong>关联订户可查看范围</strong>内的订单行，按发订时间倒序排列。</p>
${d("","表格列")}
<p>序号、订户、订单行号、采购方式、预算名称、供应商、折扣、发订人、发订时间</p>
</div>
<div id="rules">
${d("","书目匹配规则")}
${le(["资源类型","语种","匹配条件"],[["纸质书","—","资源标识（ISBN）<strong>且</strong> 正题名均相同"],["视听资料","中文","正题名 <strong>且</strong> 载体均相同"],["视听资料","外文","商品条码 <strong>且</strong> 目录号均相同"]])}
<ul>
<li>订户范围：取系统<strong>可查看订户范围</strong>配置（<code>viewableSubscribers</code>），仅展示馆员有权查看的订户订单行</li>
<li>发订人、发订时间为空时展示空白</li>
<li><strong>订单行号</strong>为普通文本，<strong>不可点击跳转</strong></li>
</ul>
</div>
<div id="interaction">
${d("","交互与分页")}
<ul>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
<li>无匹配数据时表格为空</li>
</ul>
</div>`),Rp=K("5.4.5.4","验收记录",`
<div id="overview">
${d("","功能描述")}
<p>展示当前订单行关联的验收汇总记录（按种维度）。从验收模块按订单行号匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段构造。</p>
${d("","表格列")}
<p>序号、订单行号、ISBN（视听为 ISBN/ISRC）、正题名、作者、定价、币种、发/收/换/退套数、最近一次验收时间、最近一次验收人</p>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>发/收/换/退套数格式：<code>发订/收货/换货/退货</code>，数据来源于验收模块</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>默认每页 50 条；有数据时显示分页，通常仅 1 条记录</li>
<li>表格不可勾选</li>
</ul>
</div>`),Ap=K("5.4.5.5","结算记录",`
<div id="overview">
${d("","功能描述")}
<p>展示当前订单行结算明细。从结算模块按<strong>订单行号</strong>（<code>orderLineNo</code>）匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段推算。</p>
${d("","表格列")}
<p>复用「已结算」列表字段：序号、订单行号、正题名、资源标识、作者、出版社、定价、币种、实洋、套内册数、结算套数、结算册数、结算金额等。</p>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>系统在结算模块已结算数据中，按订单行号精确查找当前行的结算记录</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>`),Ep=K("5.4.5.6","单件（N）",`
<div id="overview">
${d("","功能描述")}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询单件（馆藏件）并汇总展示。页签文案为 <strong>单件（N）</strong>，N 为合并后的单件总行数（表格一行计 1 条）。</p>
${d("","Tab 标签规则")}
<ul>
<li>页签文案为「单件（N）」，N 等于下方单件表格的总行数</li>
<li>编目无单件时显示 <strong>单件（0）</strong></li>
<li>切换订单行或编目数据变化时，N 随最新查询结果自动刷新</li>
</ul>
${d("","表格列")}
<p>序号（01 格式）、条码号、索书号、所属馆、所属馆藏地、所在馆藏地、借阅类型、卷册描述、登到日期</p>
</div>
<div id="rules">
${d("","单件查询逻辑")}
<ol>
<li>若订单行存在<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值），则逐条向编目系统查询单件，合并为一张表格（一般用于多卷书各卷记录）。</li>
<li>若不存在实际关联书目记录号，则使用<strong>书目记录号</strong>（<code>bibRecordNo</code>）作为唯一条件查询单件。</li>
<li>合并后的总行数即为页签 N，例如 10 行则显示「单件（10）」。</li>
</ol>
${d("","展示规则")}
<ul>
<li>所在馆藏地、卷册描述为空时单元格留空</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
<li>无单件数据时表格为空，页签仍为「单件（0）」</li>
</ul>
</div>
<div id="interaction">
${d("","交互与分页")}
<ul>
<li>切换至本 Tab 时按上述规则加载/刷新单件列表</li>
<li>分页切换不影响页签 N（N 为全部合并结果的总行数，非当前页条数）</li>
</ul>
</div>`),xp=K("5.4.5.7","MARC信息",`
<div id="overview">
${d("","功能描述")}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询 MARC 字段；无实际关联时回退<strong>书目记录号</strong>。列表上方提供书目记录号下拉框，默认选中第一个，切换后刷新 MARC 表格。</p>
${d("","页面要素")}
<ul>
<li><strong>书目记录号下拉框</strong>：位于 MARC 表格上方；选项为可查询的书目记录号列表</li>
<li><strong>MARC 表格</strong>：列「字段名」「指示符」「字段内容」，最大高度 480px 可滚动</li>
<li>无可用书目记录号或无 MARC 数据时居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="rules">
${d("","书目记录号下拉框规则")}
<ul>
<li>若存在<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）：下拉框列出其全部有效记录号，供切换查看各卷 MARC</li>
<li>若不存在实际关联书目记录号，但<strong>书目记录号</strong>（<code>bibRecordNo</code>）有值：下拉框仅含书目记录号一项</li>
<li>进入详情或切换订单行时，下拉框默认选中<strong>第一项</strong>，并据此刷新 MARC 表格</li>
</ul>
<blockquote>下拉框标签文案为「书目记录号」，选项值为实际用于查编目的记录号（含实际关联书目记录号）。</blockquote>
${d("","MARC 展示规则")}
<ul>
<li>切换下拉选项后，下方 MARC 表格即时刷新，无需额外确认</li>
<li>展示格式与书目查询页 MARC 详情一致（如 010、200、210 等 CNMARC 字段）</li>
<li>无可用记录号或无 MARC 数据时，居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>用户切换下拉选项即可查看对应记录号的 MARC 著录</li>
</ul>
</div>`),Ip={title:"订单行详情",tabs:{related:{label:"相关订单行（N）",itemIds:["5.4.5.1","5.4.5.2","5.4.5.3"]},acceptance:{label:"验收记录（N）",itemIds:["5.4.5.4"]},settlement:{label:"结算记录（N）",itemIds:["5.4.5.5"]},items:{label:"单件（N）",itemIds:["5.4.5.6"]},marc:{label:"MARC信息",itemIds:["5.4.5.7"]}},items:[{id:"5.4.5.1",title:"书目信息",tab:"related",htmlContent:yp},{id:"5.4.5.2",title:"业务 Tab 页签",tab:"related",htmlContent:Cp},{id:"5.4.5.3",title:"相关订单行",tab:"related",htmlContent:Tp},{id:"5.4.5.4",title:"验收记录",tab:"acceptance",htmlContent:Rp},{id:"5.4.5.5",title:"结算记录",tab:"settlement",htmlContent:Ap},{id:"5.4.5.6",title:"单件（N）",tab:"items",htmlContent:Ep},{id:"5.4.5.7",title:"MARC信息",tab:"marc",htmlContent:xp}]};function wp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-line-detail"]=Ip}const Np=K("5.5.5.1","关联订单行列表",`
<div id="overview">
${d("","功能描述")}
<p>在书目查询页下方单件区切换至<strong>关联订单行</strong>页签后，先校验当前登录馆员是否有关联订户；若已关联，则按当前选中书目的书目记录号（bibRecordNo）查询关联订单行——若订单行存在非空的实际关联书目记录号（actualBibRecordNos），则<strong>优先</strong>按实际关联书目记录号匹配，否则按书目记录号匹配——并仅展示当前馆员<strong>关联订户范围内</strong>、且行状态不为「已撤订」的结果，同时提供发/收/换/退/撤订数量汇总及「新建订单」「加入订单」入口。</p>
${d("","页面要素")}
<ul>
<li><strong>页签标题</strong>：关联订单行(N)，N 为当前书目在馆员关联订户范围内的关联订单行条数</li>
<li><strong>工具栏</strong>：新建订单、加入订单</li>
<li><strong>统计栏</strong>：发订数量、收货数量、换货数量、退货数量、撤订数量</li>
<li><strong>表格列</strong>：序号、订单号、馆址、订单行号、正题名、资源标识、载体、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、验收状态、结算状态、发订时间</li>
</ul>
${d("","交互逻辑")}
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
${d("","订户校验")}
<ul>
<li>若用户切换至「关联订单行」页签，则须校验当前登录馆员是否有关联订户</li>
<li>若当前登录馆员未关联任何订户，则弹窗提示「您没有关联订户，无法查看数据」，且不加载列表数据</li>
</ul>
${d("","数据范围")}
<ul>
<li>若当前登录馆员已关联订户，则以其关联订户作为本页数据范围</li>
<li>若用户选中书目且已通过订户校验，则按下列规则匹配订单行，且所属订单订户（subscriber）须落在馆员关联订户范围内，且行状态（lineStatus）不为「已撤订」：</li>
</ul>
<ol>
<li>若订单行的<strong>实际关联书目记录号</strong>（actualBibRecordNos）非空，则仅当其中任一条与当前选中书目的书目记录号（bibRecordNo）一致时纳入列表（<strong>不再</strong>按书目记录号匹配）</li>
<li>若实际关联书目记录号为空，则仅当订单行的书目记录号（bibRecordNo）与当前选中书目一致时纳入列表</li>
</ol>
${d("","行状态过滤")}
<ul>
<li>列表不展示行状态为「已撤订」的订单行</li>
</ul>
${d("","排序规则")}
<ol>
<li>若订单行无发订时间（issueTime），则排在列表<strong>最上方</strong></li>
<li>若订单行有发订时间，则按发订时间<strong>从新到旧</strong>排列</li>
<li>若发订时间相同，则按订单行号（orderLineNo）<strong>从小到大</strong>排列</li>
</ol>
<blockquote>上述排序规则与「非连续出版物订单-订单行列表」保持一致。</blockquote>
${d("","统计汇总")}
<p>发/收/换/退/撤订数量由各行流转统计（flowStats，格式为「发/收/换/退/撤」五段数字）分别累加得出。</p>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>若当前登录馆员未关联订户，则弹窗提示「您没有关联订户，无法查看数据」，列表展示相同空状态文案</li>
<li>若无书目选中，则展示空状态「请先选中书目」</li>
<li>若已选中书目但无符合范围的关联数据，则展示空状态「暂无关联订单行」</li>
</ul>
</div>`),$p=K("5.5.5.2","新建订单弹窗",`
<div id="overview">
${d("","功能描述")}
<p>在关联订单行页签点击<strong>新建订单</strong>，为当前选中书目创建订单。若用户选择多个馆址，则每个馆址各生成一个订单号。<strong>订户、资源类型、预算名称</strong>的可选范围受当前登录馆员关联订户约束。关闭弹窗后保留上次填写内容，再次打开时可恢复。</p>
${d("","表单字段")}
${le(["字段","必填","说明"],[["订单名称（orderName）","是","文本；最多 50 个字符；占位「请输入，50字符以内」"],["订户（subscriber）","是","下拉；可选范围为当前馆员关联订户（使用中）"],["资源类型（resourceType）","是","下拉；须先选订户；选项为所选订户主数据中的资源类型"],["采选方式（method）","是","下拉：捐赠/现采/交存/交换/拍卖"],["预算名称（budget）","条件","须先选订户；选项为所选订户主数据中的预算名称；交换或捐赠时非必填且不可选"],["语种（language）","是","下拉；打开时按书目 MARC 格式预填：CNMARC 为中文，否则为外文"],["供应商（supplier）","是","下拉；随采选方式联动，见业务规则"],["折扣（discount）","否","文本；选择供应商后默认带出，可修改；若填写则须大于 0 且小于等于 1，最多两位小数"],["馆址（sites）","是","多选；至少选一个馆址"]])}
</div>
<div id="rules">
${d("","订户与字段范围")}
<ul>
<li>若当前登录馆员未关联任何订户，则点击「新建订单」时提示「您没有关联订户，无法新建订单」，且不打开弹窗</li>
<li>订单名称（orderName）必填；最多 50 个字符；未填提示「请输入订单名称」，超长提示「订单名称不能超过50个字符」</li>
<li>订户（subscriber）下拉仅展示当前馆员关联订户（使用中）</li>
<li>若用户已选订户，则资源类型（resourceType）下拉仅展示该订户主数据中配置的资源类型；未选订户时下拉禁用，提示「请先选择订户」</li>
<li>若用户已选订户，则预算名称（budget）下拉仅展示该订户主数据中配置的预算名称；未选订户时下拉禁用（交换或捐赠采选方式下仍禁用预算）</li>
<li>若用户切换订户，且已选资源类型或预算不在新订户允许范围内，则清空对应字段</li>
<li>若书目 MARC 格式为 CNMARC，则预填语种「中文」；否则预填「外文」；无法解析 MARC 格式时不预填</li>
</ul>
${d("","供应商与采选方式")}
<ul>
<li>若未选择采选方式，则供应商下拉禁用，提示「请先选择采选方式」</li>
<li>若用户切换采选方式，且当前供应商不在新列表中，则清空供应商（supplier）与折扣（discount）</li>
</ul>
${le(["采选方式","可选供应商范围"],[["现采","代理商应用中类型为书商且状态为使用中的供应商"],["交存","出版社管理应用中状态为使用中的出版社"],["捐赠","个人管理中类型为捐赠的捐赠人，与资源商管理中类型为团体捐赠的单位，合并展示"],["交换","资源商管理应用中类型为交换且状态为使用中的单位"],["拍卖","代理商应用中类型为拍卖行且状态为使用中的供应商"]])}
${d("","预算名称")}
${le(["采选方式","预算名称（budget）"],[["交换 / 捐赠","非必填（隐藏必填星号）、下拉禁用；切换至该方式时清空已选值"],["其他采选方式","必填，可编辑"]])}
${d("","折扣")}
<ul>
<li>若用户选择供应商，则折扣（discount）默认取该供应商在主数据中配置的默认值</li>
<li>用户可手动修改折扣；若再次切换供应商，则折扣更新为新供应商的默认值</li>
<li>若用户填写折扣，则须为大于 0 且小于等于 1 的数值，最多两位小数；若不满足则提示并阻止提交</li>
<li>若从上次关闭时的缓存恢复表单，则保留用户已修改的折扣，不因恢复而覆盖</li>
<li>若供应商为捐赠类，则默认折扣可为空</li>
</ul>
${d("","提交与订单号")}
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
${d("","异常处理")}
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
${d("","功能描述")}
<p>将当前选中书目加入一个或多个<strong>待发订</strong>订单；一次提交为每条勾选订单各生成一条订单行（原型以提示框演示）。弹窗自上而下分三区：检索与订单列表、馆址分配、共用字段（币种 / 定价 / 套内册数 / 备注）。</p>
${d("","前置条件")}
<ul>
<li>用户已选中书目；未选中时提示「请先选中书目」</li>
<li>若当前登录馆员未关联任何订户，则提示「您没有关联订户，无法加入订单」，且不打开弹窗</li>
</ul>
</div>
<div id="candidates">
${d("","候选订单范围")}
<ul>
<li>仅包含订单状态为<strong>待发订</strong>、且订户（subscriber）落在馆员关联订户范围内的订单</li>
<li>若书目可映射出语种（language），则候选订单还须与映射语种一致；若无法映射语种，则不按语种过滤，默认展示上述范围内的全部待发订订单</li>
</ul>
</div>
<div id="search">
${d("","检索区")}
${le(["控件","规则"],[["订单号（orderId）","文本；占位「精确匹配」；若输入订单号，则与列表订单号做精确匹配（不区分大小写）；条件变更不自动检索，须点击「检索」"],["采选方式（method）","下拉：全部 / 捐赠 / 现采 / 交存 / 交换 / 拍卖（不含征订目录）"],["供应商（supplier）","下拉：全部，或当前候选订单列表中出现过的供应商"],["检索","点击后按上述条件过滤列表"],["重置","清空三个条件并恢复全量候选列表"]])}
<p>列表默认按订单创建时间（createTime）<strong>从新到旧</strong>排列。</p>
</div>
<div id="list">
${d("","订单列表（上区）")}
<ul>
<li>支持多选；选中行以浅黄色背景高亮</li>
<li>若勾选多条订单，则须为相同资源类型（resourceType）与语种（language）；否则提示「请勾选相同资源类型和语种的待发订订单」，且不勾选该订单</li>
<li>表头固定，列表区域可纵向滚动；列较多时可横向滚动</li>
<li>列表<strong>不含套数列</strong>；套数仅在中区馆址行填写</li>
</ul>
${le(["列","说明"],[["勾选","绑定订单号（orderId）"],["订单号（orderId）","只读展示"],["订单名称（orderName）","只读；过长时截断，悬停展示全文；为空时展示「—」"],["订户 / 馆址 / 采选方式 / 资源类型 / 语种 / 供应商","只读展示"],["预算名称（budget）","过长时截断，悬停展示全文"],["折扣（discount）","只读"],["发订状态","展示待发订等状态文案"],["创建时间（createTime）","只读；列表按此字段倒序"]])}
${d("","空状态")}
<ul>
<li>若无任何候选订单，则展示「暂无匹配的待发订订单」</li>
<li>若检索后无匹配结果，则展示「未找到符合条件的订单」</li>
</ul>
</div>
<div id="site">
${d("","馆址分配（中区）")}
<ul>
<li>若未勾选任何订单，则展示「请先在上方的列表中选择订单」</li>
<li>若勾选 N 条订单，则展示 N 行馆址行；馆址（site）只读，取自对应订单；下方灰色小字展示订单号（orderId）</li>
<li>套数（sets）为大于等于 0 的整数输入，默认 1，可修改；馆址行顺序与上方列表一致（按创建时间从新到旧）</li>
<li>若取消勾选某订单，则移除对应馆址行；若再次勾选，则套数优先从上次关闭时的缓存恢复</li>
</ul>
</div>
<div id="form">
${d("","共用表单（下区）")}
${le(["字段","必填","规则"],[["币种（currency）","条件","下拉选项取自【货币信息】中状态为「使用中」的货币代码（展示货币代码）；默认优先 CNY（若仍为使用中），否则取第一项使用中货币；若所选订单为纸质书且语种为外文，则必填；其他情况选填"],["定价（price）","条件","若所选订单为纸质书且语种为外文，则必填，须为有效数值且最多两位小数；其他情况选填，若填写则格式同上"],["套内册数（copiesInSet）","否","正整数，默认 1；若填写则须为正整数"],["备注（remark）","否","多行文本，最多 500 个字符"]])}
<p>币种、定价、套内册数、备注一次填写，作用于全部勾选订单中套数大于 0 的记录。</p>
</div>
<div id="cache">
${d("","缓存恢复")}
<ul>
<li>打开弹窗时恢复上次检索条件、勾选订单、馆址套数及共用字段</li>
<li>若缓存中的采选方式不在可选范围内（如含征订目录），则回退为「全部」</li>
<li>若缓存中的币种已停用或不存在，则回退为默认使用中货币代码</li>
<li>关闭弹窗时保存上述内容，供下次打开恢复</li>
</ul>
</div>
<div id="rules">
${d("","提交校验")}
<ol>
<li>若未勾选任何订单，则提示「请至少选择一个订单」</li>
<li>若勾选订单的资源类型或语种不一致，则提示「请勾选相同资源类型和语种的待发订订单」</li>
<li>若所选订单为纸质书且语种为外文，则币种（currency）与定价（price）必填；定价未填或格式无效时提示「请输入定价」或「定价须为有效数值，最多两位小数」；币种未选时提示「请选择币种」</li>
<li>若任一行套数（sets）不是大于等于 0 的整数，则提示「请为每个馆址填写有效套数」</li>
<li>若所有行套数均为 0，则提示「请至少为一个馆址填写大于0的套数」</li>
<li>若套内册数（copiesInSet）已填但不是正整数，则提示「套内册数须为正整数」</li>
<li>若备注（remark）超过 500 个字符，则提示「备注最多500个字符」</li>
</ol>
${d("","提交结果")}
<ul>
<li>校验通过后，为每条勾选且套数大于 0 的订单各生成一条关联订单行（当前原型以提示框演示）</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
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
</div>`),Pp={title:"书目查询",tabs:{"related-order":{label:"关联订单行",itemIds:["5.5.5.1","5.5.5.2","5.5.5.3"]}},items:[{id:"5.5.5.1",title:"关联订单行列表",tab:"related-order",htmlContent:Np},{id:"5.5.5.2",title:"新建订单弹窗",tab:"related-order",htmlContent:$p},{id:"5.5.5.3",title:"加入订单弹窗",tab:"related-order",htmlContent:Op}]};function kp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["bib-query"]=Pp}const Gr=K("5.6.5.1","验收单头信息",`
<div id="overview">
${d("","功能描述")}
<p>页面顶部展示当前验收单摘要信息，含基础属性与汇总指标。嵌入抽屉打开时布局与独立页一致（无面包屑）。</p>
${d("","页面要素")}
<ul>
<li>网格展示字段：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）、语种（language）、发货单号（shipNo）、供应商（supplier）</li>
<li>验收备注（acceptanceRemark）单独占满一行</li>
<li>汇总行：总种数（totalSpecies）、总册数（totalVolumes）、总码洋（totalListPrice）、总实洋（totalNetPrice）</li>
</ul>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li><strong>总种数</strong>（totalSpecies）：取当前验收单按种明细行数</li>
<li><strong>总册数 / 总码洋 / 总实洋</strong>：按资源类型展示（纸质书与视听资料分别有对应汇总值；原型阶段为按类型固定展示，与页面实现一致）</li>
<li>无验收单上下文时，头信息使用默认占位值</li>
</ul>
</div>
`),Wr=K("5.6.5.2","按种 / 按册页签",`
<div id="overview">
${d("","功能描述")}
<p>头信息下方提供「按种」「按册」两个页签，切换明细视角与导出配置。</p>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>默认进入<strong>按种</strong>；URL 带 <code>view=volume</code> 时进入按册</li>
<li>切换页签更新表格列、筛选字段、导出按钮文案与导出配置字段集；分页回到第 1 页</li>
<li>按册工具栏旁提示文案：「仅提供收货详情」</li>
</ul>
</div>
`),qr=K("5.6.5.3","筛选查询",`
<div id="overview">
${d("","功能描述")}
<p>按当前页签与资源类型展示检索条件；支持检索、重置与展开附加条件。</p>
</div>
<div id="fields">
${d("","按种 · 纸质书")}
<p>组合检索（ISBN / 作者 / 正题名 / 订单行号）+ 验收人 + 验收时间（开始/结束日期）</p>
${d("","按种 · 视听资料")}
<p>组合检索（ISBN/ISRC / 题名 / 作者 / 商品条码 / 目录号 / 载体 / 订单行号）+ 验收人 + 验收时间（开始/结束日期）</p>
${d("","按册 · 纸质书")}
<p>组合检索（条码号 / ISBN / 作者 / 正题名）+ 收货人 + 收货时间（开始/结束日期）</p>
${d("","按册 · 视听资料")}
<p>组合检索（条码号 / ISBN/ISRC / 题名 / 作者 / 商品条码 / 目录号 / 载体）+ 收货人 + 收货时间（开始/结束日期）</p>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>点击「检索」按条件过滤当前页签明细并回到第 1 页</li>
<li>点击「重置」清空条件并恢复当前页签全量明细</li>
</ul>
</div>
`),Mp=K("5.6.5.4","按种明细表格与操作",`
<div id="overview">
${d("","功能描述")}
<p>按种维度展示验收汇总行；验收单状态为<strong>进行中</strong>时可对行执行撤销收货 / 撤销换货 / 撤销退货。</p>
${d("","表格列（纸质书）")}
<p>序号、订单行号、ISBN、正题名、作者、定价、币种、发/收/换/退数、最近一次验收时间、最近一次验收人、换/退/撤销收货原因、操作</p>
${d("","表格列（视听资料）")}
<p>在纸质书基础上增加载体、商品条码、目录号、套内件数等视听字段（以页面列为准）</p>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>换/退/撤销原因为空或不可用时显示「—」；有内容时「查看」悬停展示全文</li>
<li>仅当验收单状态为进行中且页签为按种时显示操作：有收货套数可「撤销收货」；有换货套数可「撤销换货」；有退货套数可「撤销退货」；均无则「—」</li>
<li>撤销换货 / 退货：确认后清零对应套数并刷新原因文案</li>
<li>撤销收货：打开撤销收货弹窗（见 5.6.5.7）</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
`),Dp=K("5.6.5.5","按册明细表格",`
<div id="overview">
${d("","功能描述")}
<p>按册（收货单件）维度展示收货明细；本页签<strong>不提供</strong>撤销收货/换货/退货操作。</p>
${d("","表格列（纸质书）")}
<p>序号、条码号、ISBN、正题名、作者、定价、币种、实洋、单册定价、套内册数、收货人、收货时间</p>
${d("","表格列（视听资料）")}
<p>序号、条码号、ISBN/ISRC、载体、题名、商品条码、目录号、作者、定价、实洋、币种、套内件数、收货人、收货时间</p>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>操作列固定展示「—」</li>
<li>分页规则同按种</li>
</ul>
</div>
`),zr=K("5.6.5.6","导出明细与导出配置",`
<div id="overview">
${d("","功能描述")}
<p>工具栏下拉提供「导出明细」「导出配置」。按种按钮文案为「导出验收明细」，按册为「导出收货明细」。按种与按册为<strong>两套独立导出配置</strong>；配置弹窗仅展示<strong>当前验收单资源类型</strong>（纸质书或视听资料）对应字段，左侧类型标签不可切换另一类型。</p>
</div>
<div id="ui">
${d("","导出配置弹窗 UI")}
<ul>
<li>左侧：当前资源类型标签（高亮）</li>
<li>右侧：全选；上方为验收单头字段；分隔线下方为明细字段；六列网格勾选</li>
<li>打开时默认全选当前类型全部字段；确定保存勾选结果（原型提示已保存字段数）</li>
</ul>
</div>
<div id="header-fields">
${d("","共用头字段（按种 / 按册 · 纸质书 / 视听）")}
<p>验收单号、验收单名称、资源类型、语种、供应商、发货单号、总码洋、总实洋、折扣率、总种数、总册数、创建人、创建时间、验收备注</p>
</div>
<div id="species-detail">
${d("","按种 · 纸质书明细字段")}
<p>订单行号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、套内册数、发订套数、收货套数、<strong>收货册数</strong>、换货套数、退货套数</p>
${d("","按种 · 视听资料明细字段")}
<p>ISBN、ISRC、商品条码、目录号、载体、题名、著者、码洋、币种、实洋、出版社、版本/格式、彩胶颜色、厂牌、限量编号、套内件数、发订套数、收货套数、<strong>收货件数</strong>、换货套数、退货套数</p>
</div>
<div id="volume-detail">
${d("","按册 · 纸质书明细字段")}
<p>条码号、订单行号、订单号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、套内册数、单册定价、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、收货人、验收时间、收货备注</p>
${d("","按册 · 视听资料明细字段")}
<p>条码号、订单行号、载体、ISBN、ISRC、商品条码、目录号、题名、著者、码洋、币种、实洋、套内件数、单册定价、收货人、验收时间、验收备注</p>
</div>
<div id="rules">
${d("","导出计算规则")}
${le(["字段","资源类型","计算规则"],[["收货册数（receiveVolumes）","纸质书·按种","若套内册数（copiesInSet）为空，则收货册数为空；否则收货册数 = 收货套数（receiveSets） × 套内册数"],["收货件数（receivePieces）","视听资料·按种","若套内件数（piecesInSet）为空，则收货件数为空；否则收货件数 = 收货套数（receiveSets） × 套内件数"]])}
<ul>
<li>导出明细：若当前筛选结果为空，提示暂无可导出明细；否则提示已导出及文件名（验收单号_验收明细 / 收货明细）</li>
</ul>
</div>
`),Lp=K("5.6.5.7","撤销收货",`
<div id="overview">
${d("","功能描述")}
<p>按种明细在进行中状态下，对已收货行可打开「撤销收货」弹窗，填写原因后清零收货套数。</p>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>确认后更新该行发/收/换/退数中的收货套数为 0，记录撤销原因，刷新原因列，提示「撤销收货成功」</li>
<li>取消关闭弹窗不改数据</li>
</ul>
</div>
`),Bp={title:"验收单详情",tabs:{species:{label:"按种"},volume:{label:"按册"}},items:[{id:"5.6.5.1",title:"验收单头信息",tab:"species",htmlContent:Gr},{id:"5.6.5.2",title:"按种 / 按册页签",tab:"species",htmlContent:Wr},{id:"5.6.5.3",title:"筛选查询",tab:"species",htmlContent:qr},{id:"5.6.5.4",title:"按种明细表格与操作",tab:"species",htmlContent:Mp},{id:"5.6.5.6",title:"导出明细与导出配置",tab:"species",htmlContent:zr},{id:"5.6.5.7",title:"撤销收货",tab:"species",htmlContent:Lp},{id:"5.6.5.1",title:"验收单头信息",tab:"volume",htmlContent:Gr},{id:"5.6.5.2",title:"按种 / 按册页签",tab:"volume",htmlContent:Wr},{id:"5.6.5.3",title:"筛选查询",tab:"volume",htmlContent:qr},{id:"5.6.5.5",title:"按册明细表格",tab:"volume",htmlContent:Dp},{id:"5.6.5.6",title:"导出明细与导出配置",tab:"volume",htmlContent:zr}]};function Vp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["acceptance-detail"]=Bp}const Fp=K("5.7.5.1","筛选查询",`
<div id="overview">
${d("","功能描述")}
<p>提供多条件检索，帮助用户定位目标验收单。支持展开附加条件。</p>
${d("","页面要素")}
<ul>
<li><strong>默认显示</strong>：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）</li>
<li><strong>展开后追加</strong>：验收单状态（status）、供应商（supplier）、创建人（creator）、创建时间（createTime）</li>
<li>操作：「检索」过滤列表；「重置」清空条件并恢复全量</li>
</ul>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>资源类型（resourceType）选项：全部、纸质书、视听资料</li>
<li>验收单状态（status）选项：全部、未开始、进行中、已结束</li>
<li>供应商（supplier）选项：全部 + 列表中出现过的供应商</li>
<li>验收单号、验收单名称、创建人为文本包含匹配；创建时间按日期（yyyy-MM-dd）与创建时间（time）的日期部分精确匹配</li>
<li>各条件之间为 <strong>AND</strong> 关系；检索后分页回到第 1 页</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>无匹配时表格为空，分页显示 0 条</li>
</ul>
</div>
`),jp=K("5.7.5.2","列表表格与行操作",`
<div id="overview">
${d("","功能描述")}
<p>以表格展示验收单列表，支持多选、分页、设为当前工作验收单，并按验收单状态（status）展示行操作。</p>
${d("","表格列")}
<p>复选框、序号（no）、验收单号（acceptanceId）、设为验收单（defaultAccept）、验收单名称（name）、资源类型（type）、语种（lang）、采选方式（method）、供应商（supplier）、发货单号（shipNo）、验收单状态（status）、收/换/退书数（counts）、验收备注（remark）、分配条码（barcode）、创建时间（time）、创建人（creator）、结算状态（settlement）、操作</p>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>验收单号：蓝色链接，点击进入验收单详情（见 5.6）</li>
<li>设为验收单：单选；已结束（finished）行不可选。选中后将该单设为当前工作验收单（静默，无提示）</li>
<li>验收单状态色：${Ce("#6b7280")}未开始、${Ce("#0284c7")}进行中、${Ce("#4b5563")}已结束</li>
<li>结算状态色：${Ce("#6b7280")}未申请、${Ce("#d97706")}待结算、${Ce("#059669")}已结算</li>
<li>验收备注：有内容时蓝色「查看」悬停全文；无内容时灰色「查看」不可点</li>
<li>分页：默认 10 条/页；工具栏右侧展示已选条数</li>
</ul>
${d("","操作列规则")}
${le(["验收单状态","可用操作"],[["未开始（notStarted）","编辑、删除"],["进行中（inProgress）","编辑、结束验收"],["已结束（finished）","—"]])}
<ul>
<li>删除：确认文案「确定删除验收单「名称」？」；若该单为当前工作验收单则清除当前工作验收单</li>
<li>结束验收：确认后状态改为已结束；若为当前工作验收单则取消设为验收单并清除当前工作验收单</li>
</ul>
</div>
`),Hp=K("5.7.5.3","新增 / 编辑验收单弹窗",`
<div id="overview">
${d("","功能描述")}
<p>工具栏「新增验收单」或行内「编辑」打开表单弹窗，维护验收单头信息。</p>
${d("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 验收单名称（name）、资源类型（resourceType）、语种（language）、采选方式（method）、供应商（supplier）</li>
<li>发货单号（shipNo）、验收备注（remark）</li>
<li>勾选：设为当前工作验收单（setCurrent）；是否支持自动分配条码号（autoBarcode）</li>
<li>若开启自动分配条码：<span style="color:#ef4444">*</span> 条码号类型（barcodeType）、初始条码号（initialBarcode）</li>
</ul>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>新增默认勾选「设为当前工作验收单」「是否支持自动分配条码号」</li>
<li>新增条码号类型可选：小语种成人图书、地方文献、全部语种；编辑可选另含「成人视听」</li>
<li>若验收单状态为<strong>进行中</strong>，则资源类型、语种、采选方式、供应商、自动分配条码相关字段只读锁定；验收单名称、发货单号、备注、设为当前工作验收单仍可改</li>
<li>提交前校验必填；缺项提示「请填写{字段}」；开启自动条码但未填类型/初始号时提示「请填写条码号类型和初始条码号」</li>
<li>新增成功：生成验收单号（acceptanceId），状态为未开始，结算状态为未申请，收/换/退为 0/0/0；提示「验收单已创建」</li>
<li>编辑成功提示「验收单已保存」；勾选设为当前则写入当前工作验收单，取消勾选且原为当前则清除</li>
</ul>
</div>
`),Up=K("5.7.5.4","预验收向导",`
<div id="overview">
${d("","功能描述")}
<p>工具栏「预验收」打开<strong>四步</strong>向导：①上传文件 → ②字段映射 → ③数据解析 → ④数据入库。核对发货单与可收货订单行；通过行写入<strong>预验收草稿</strong>（验收单号 + 订单行号），<strong>不执行收货</strong>。真正收货在逐条收货处置弹窗确认。验收单管理工具栏<strong>已移除批验收</strong>。</p>
${d("","入口前置")}
<ul>
<li>须当前登录馆员已关联订户；否则提示「您没有关联订户，无操作权限」，不打开向导</li>
<li>须勾选<strong>恰好 1 条</strong>验收单状态为未开始或进行中的验收单；否则按钮禁用或提示「请先在列表中勾选一条未开始或进行中的验收单」</li>
<li>打开前将该验收单设为当前工作验收单</li>
</ul>
${d("","向导壳")}
<ul>
<li>标题：「预验收」；右上角关闭（校验/入库进度中禁用）</li>
<li>顶部步骤条：1 上传文件 → 2 字段映射 → 3 数据解析 → 4 数据入库（当前及已过步骤高亮）</li>
<li>底栏随步骤变化（见各步说明）</li>
</ul>
</div>

<div id="step1">
${d("","第 1 步：上传文件")}
${d("","页面要素")}
<ul>
<li><span style="color:#ef4444">*</span> 文件上传（file）：「上传文件」按钮；隐藏文件选择器，accept 为 .xls/.xlsx</li>
<li>已选文件：展示文件名（fileName）+ 清除（×）</li>
<li>提示：「支持类型：xls、xlsx」；校验失败时红色错误文案</li>
</ul>
${d("","交互逻辑")}
<ul>
<li>点「上传文件」打开系统文件选择；选中后校验扩展名并解析为矩阵（原型 Mock）</li>
<li>清除文件：清空已选文件与错误提示</li>
<li>底栏：「取消」关闭向导；主按钮文案「上传」——已选合法文件且解析成功后可点，进入第 2 步</li>
<li>进入第 2 步时<strong>不</strong>自动读取表头</li>
</ul>
${d("","业务规则")}
<ul>
<li>仅允许扩展名 xls、xlsx；其它格式提示「请上传 xls/xlsx 格式文件」，不可进入下一步</li>
</ul>
${d("","异常处理")}
<ul>
<li>未选文件或解析为空：主按钮不可用</li>
<li>类型非法：展示红色错误，不可进入下一步</li>
</ul>
</div>

<div id="step2">
${d("","第 2 步：字段映射")}
${d("","页面要素")}
<ul>
<li>工具栏<strong>同一行</strong>（可换行）：映射模板（下拉，默认「选择模板」）→ <span style="color:#ef4444">*</span> 表头行号（headerRow）→「读取表头」→「保存模板」→「删除模板」</li>
<li>表头错误/变更提示：无效行号红色；已读过又改行号未再读时琥珀色提示「表头行号已变更，请点击「读取表头」后继续」</li>
<li>说明文案：将文件列映射到系统标准字段（标 * 为必填；勾选「是否校验」的字段与订单行不等则失败）</li>
<li>未读表头时灰色提示：请填写表头行号后点击「读取表头」，再进行列映射</li>
<li>列映射表（读表头后出现）三列：文件列名、系统标准字段（下拉）、是否校验（复选框）</li>
</ul>
${d("","交互逻辑")}
<ul>
<li>「读取表头」：按表头行号（Excel <strong>物理行号</strong>，从 1 起）生成文件列名；无原始文件预览。首次读取可带出默认列映射并套用默认「是否校验」；已有映射时尽量保留能对上的列与勾选</li>
<li>映射变更：映射到默认可校验字段时默认勾选；「不映射」或不可校验字段时取消勾选并禁用复选框。同一标准字段多列映射时勾选状态同步</li>
<li>底栏：「取消」｜「上一步」（回第 1 步）｜「下一步」。下一步可用条件：已成功读取表头且行号未变更未再读、有解析行数据（不要求必填已映完）</li>
<li>点「下一步」时才校验必填标准字段是否已映射；未齐则提示（如「请映射「订单行号」字段」）并停留本步。点「下一步」<strong>不</strong>静默写模板</li>
</ul>
${d("","映射模板交互")}
${le(["操作","行为"],[["下拉默认","首项「选择模板」；其余为已保存模板名称"],["选用某一模板","若有表头行号（headerRow）则写入输入框并按该行重新读取表头；按文件列名对齐写入列映射（columnMapping）；标准字段按当前验收单资源类型×语种清洗；恢复是否校验（mustMatchFields，缺省用默认勾选集）"],["切回「选择模板」","清空列映射与是否校验（列名保留时各列改为不映射、不勾选）；不清空表头行号与已读列名"],["「保存模板」（未选）","须已读表头，否则「请先读取表头后再保存模板」。弹「请输入模板名称」；取消中止；空名提示「请输入模板名称」；重名确认是否覆盖；成功提示「模板已保存」并选中该名称"],["「保存模板」（已选）","须已读表头。覆盖当前模板的表头行号 + 列映射 + 是否校验列表；提示「模板已更新」（不再弹名称）"],["「删除模板」","未选时禁用。已选确认「确定删除模板「名称」？」；删除后下拉回到「选择模板」；不自动清空当前列映射"]])}
<p>模板落库字段：表头行号（headerRow）+ 列映射（columnMapping）+ 是否校验字段列表（mustMatchFields，标准字段 key）。</p>
${d("","业务规则")}
<ul>
<li>系统标准字段按验收单<strong>资源类型（resourceType）× 语种（language，中文/外文分档）</strong>四套；下拉扁平，必填项标签带 *</li>
<li><strong>纸质书必填*</strong>：订单行号（orderLine）、收货套数（receiveQty）、套内册数（volCount）、实洋（netPrice）、定价（price）</li>
<li><strong>视听必填*</strong>：订单行号、收货套数、套内件数（volCount）、实洋、码洋（listPrice）</li>
<li>订单行号、收货套数不可勾「是否校验」</li>
<li><strong>默认勾选「是否校验」</strong>：实洋、套内册数/件数、定价（纸质）/码洋（视听）；其余默认不勾</li>
<li>同一标准字段被多列映射时：任一列勾选即计入该字段须校验（按标准字段 key 去重）</li>
</ul>
${d("","异常处理")}
<ul>
<li>表头行号无效：提示「表头行号无效」，不生成列</li>
<li>行号已变更未再读：不可进入第 3 步；点下一步时提示先读取表头</li>
<li>未读表头就保存模板：提示「请先读取表头后再保存模板」</li>
<li>新建模板名称为空：「请输入模板名称」</li>
</ul>
</div>

<div id="step3">
${d("","第 3 步：数据解析")}
${d("","页面要素")}
<ul>
<li>进行中：文案「正在校验，请稍候…」+ 进度条 + 百分比</li>
<li>完成后：汇总「共校验到 N 条数据，其中 X 条成功，Y 条失败」（成功绿色、失败有值时红色）</li>
<li>橙色提示：「点击「下一步」按钮，只导入成功行，不导入失败行。」</li>
<li>失败数 &gt; 0 时展示「下载失败数据」按钮</li>
</ul>
${d("","交互逻辑")}
<ul>
<li>从第 2 步进入后自动开始校验（展示进度），完成后展示汇总</li>
<li>底栏（完成后）：「取消」｜「下一步」。成功条数 = 0 时「下一步」置灰</li>
<li>「下载失败数据」：仅导出失败行；Excel（.xls）= 原发货单全部列（原顺序）+ 失败原因</li>
<li>校验/入库进度中不可关闭向导</li>
</ul>
${d("","业务规则（校验）")}
<p>匹配池：当前馆员关联订户范围内的可收货订单行。若关联订户下当前无任何可匹配订单行，仍完成解析；各发货单行按<strong>未匹配</strong>计失败（失败原因「无对应可收货订单行」），不单独弹「无关联订户 / 无可收货订单行」类阻断提示。</p>
<p>按行判定顺序与结果类型：</p>
${le(["结果类型","判定条件","失败原因（示例）"],[["数据错误","订单行号为空；或必填金额未解析出有效值（纸质须定价或码洋、视听须码洋；且须实洋）；或收货套数 / 套内册数（件数）无法解析为有效数量","数据解析失败"],["未匹配","能解析出订单行号，但在关联订户可收货订单行中找不到该订单行号","无对应可收货订单行"],["验收单不匹配","找到对应订单行，但其资源类型、语种（中/外分档）、采选方式、供应商与当前验收单头不一致","如「资源类型不一致（验收单 …/订单行 …）」等，多条用「；」拼接"],["套数非法","已匹配且头属性一致后：收货套数 ≤0，或 ＞该订单行待收货套数","套数 ≤ 0 / 套数大于待收"],["不一致","仅对勾选「是否校验」且已映射的标准字段与订单行不等（收货套数不走本类）",'「"{字段}"订单行 …/发货单…」'],["通过","未命中以上失败；套数满足 0＜收货套数≤待收","—"]])}
<ul>
<li>允许部分成功：仅「通过」行可进入第 4 步入库</li>
<li>未勾选「是否校验」的已映射字段即使与订单行不同，也不记「不一致」</li>
</ul>
${d("","异常处理")}
<ul>
<li>全部失败（含全部未匹配）：仅可取消或下载失败数据，不可入库；「下一步」置灰</li>
</ul>
</div>

<div id="step4">
${d("","第 4 步：数据入库")}
${d("","页面要素")}
<ul>
<li>进行中：文案「正在入库，请稍候…」+ 进度条 + 百分比</li>
<li>成功：${Ce("#22c55e")}绿色圆标 ✓ + 文案「入库成功」（样式对齐订单导入向导）</li>
<li>失败：${Ce("#ef4444")}红色圆标 × + 文案「入库失败，请联系管理员」</li>
</ul>
${d("","交互逻辑")}
<ul>
<li>第 3 步点「下一步」后进入本步并自动写入通过行草稿（展示入库进度）</li>
<li>入库过程中不可关闭；完成后底栏仅「关闭」，退出向导</li>
<li>本步不可返回上一步改映射</li>
</ul>
${d("","业务规则（草稿）")}
<ul>
<li>维度：验收单号（acceptanceId）+ 订单行号（orderLine）</li>
<li>内容：通过行已映射发货单值（含未勾选「是否校验」的差异字段），供逐条收货带入</li>
<li>同订单行再次预验收成功入库 → <strong>覆盖已有草稿</strong>（不改订单行本身）</li>
<li>不改变验收单状态；不执行收货</li>
<li>逐条收货打开处置弹窗时带入收货套数、定价/码洋、实洋、套内册数/件数，收货区显示「已带入预验收数据」；确认收货成功后清除该行草稿</li>
</ul>
${d("","异常处理")}
<ul>
<li>入库失败（含无验收单号、写入条数为 0 等）：红色圆标结果页，不写或写不全草稿；用户可关闭后重试</li>
</ul>
</div>
`),Kp=K("5.7.5.5","批验收（已移除）",`
<div id="overview">
${d("","功能描述")}
<p>验收单管理工具栏「批验收」及导入即收货向导已移除；差异核对与草稿落库统一走「预验收」，真正收货在逐条收货中确认。</p>
</div>
`),Gp=K("5.7.5.6","申请结算",`
<div id="overview">
${d("","功能描述")}
<p>工具栏「申请结算」对勾选验收单提交结算申请。</p>
</div>
<div id="interaction">
${d("","交互逻辑")}
<ul>
<li>未勾选时提示「请先勾选验收单」</li>
<li>打开确认弹窗：「确认为所选 N 条验收单申请结算？」</li>
<li>确定后：所选行中结算状态为未申请（notApplied）的改为待结算（pending）；提示「已为 N 条验收单提交结算申请」</li>
</ul>
</div>
`),Wp=K("5.7.5.7","导出列表与导出配置",`
<div id="overview">
${d("","功能描述")}
<p>工具栏「导出列表」下拉提供「导出配置」「导出清单」。</p>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>导出配置：弹窗勾选列表导出字段；打开时基于配置字段集；确定后提示「导出配置已保存（N 个字段）」</li>
<li>可配置字段：验收单号、验收单名称、资源类型、语种、采选方式、供应商、发货单号、验收单状态、收/换/退书数、验收备注、分配条码、创建时间、创建人、结算状态</li>
<li>导出清单：原型阶段提示演示文案</li>
</ul>
</div>
`),qp={title:"验收单管理",items:[{id:"5.7.5.1",title:"筛选查询",htmlContent:Fp},{id:"5.7.5.2",title:"列表表格与行操作",htmlContent:jp},{id:"5.7.5.3",title:"新增 / 编辑验收单弹窗",htmlContent:Hp},{id:"5.7.5.4",title:"预验收向导",htmlContent:Up},{id:"5.7.5.5",title:"批验收（已移除）",htmlContent:Kp},{id:"5.7.5.6",title:"申请结算",htmlContent:Gp},{id:"5.7.5.7",title:"导出列表与导出配置",htmlContent:Wp}]};function zp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["acceptance-manage"]=qp}const Xp=K("5.8.5.1","当前工作验收单头信息",`
<div id="overview">
${d("","功能描述")}
<p>页面顶部展示当前工作验收单的头信息与本单累计收/换/退套数，并提供跳转验收单详情入口。</p>
${d("","页面要素")}
<ul>
<li>验收单号（acceptanceId）：有值时蓝色链接，点击进入验收单详情（按种视角）</li>
<li>验收单名称（name）、供应商（supplier）、语种（lang）、发货单号（shipNo）</li>
<li>总种数、总册数、总码洋、总实洋（随验收明细汇总刷新）</li>
<li>收货套数、换货套数、退货套数（本验收单按种累计）</li>
<li>若无当前工作验收单：对应字段显示「—」，并提示先在验收单管理设为当前工作验收单</li>
</ul>
</div>
<div id="rules">
${d("","业务规则")}
<ul>
<li>语种有值时以红色强调展示</li>
<li>头信息只读；切换当前工作验收单后本页检索结果与选中行清空</li>
</ul>
</div>
`),Jp=K("5.8.5.2","订单行检索",`
<div id="overview">
${d("","功能描述")}
<p>按当前验收单资源类型提供检索字段与馆址过滤，点击「检索」加载可处置的订单行。</p>
${d("","页面要素")}
<ul>
<li>检索字段下拉 + 关键字输入 + 「检索」按钮</li>
<li>馆址（location）下拉：含「全部」与使用中馆址选项</li>
<li>若资源类型为视听资料：额外展示载体（carrier）下拉</li>
</ul>
</div>
<div id="rules">
${d("","业务规则")}
${le(["资源类型","检索字段选项"],[["纸质书","ISBN（isbn）、订单行号（orderLine）、正题名（title）"],["视听资料","资源标识（resourceId）、订单行号（orderLine）、题名（title）"]])}
<ul>
<li>无当前工作验收单时：检索控件禁用，占位提示「请先选择验收单」；点击检索提示「请先在验收单管理中选择当前工作验收单」</li>
<li>检索后分页回到第 1 页；清空原选中行并关闭处置弹窗（除非结果仅 1 条，见 5.8.5.3）</li>
<li>各条件与馆址、载体为组合过滤（AND）</li>
</ul>
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>未检索前表格空态：「请输入检索条件后点击检索」</li>
<li>无当前验收单空态：「请先在验收单管理中选择当前工作验收单」</li>
<li>检索无数据：「暂无数据」</li>
</ul>
</div>
`),Yp=K("5.8.5.3","订单行列表与选行打开",`
<div id="overview">
${d("","功能描述")}
<p>以表格展示检索结果；选中一行即打开「逐条收货/换货/退货」处置弹窗。页面<strong>不再</strong>提供底栏独立「收货 / 换货 / 退货」按钮。</p>
${d("","表格列")}
<p><strong>纸质书</strong>：单选、馆址（location）、订单行号（orderLine）、正题名（title）、ISBN（isbn）、作者（author）、出版社（publisher）、版本（edition）、定价（price）、币种（currency）、套内册数（copies）、发/收/换/退/撤订（counts）、备注（remark）、发订人（orderer）、发订时间（orderTime）</p>
<p><strong>视听资料</strong>：单选、馆址、订单行号、载体（carrier）、ISBN、商品条码（barcode）、目录号（catalogNo）、题名（title）、版本/格式（format）、著者（author）、码洋（price）、币种、套内件数（copies）、发/收/换/退/撤订、备注、发订人、发订时间</p>
</div>
<div id="interaction">
${d("","交互逻辑")}
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
`),Qp=K("5.8.5.4","逐条收货/换货/退货处置弹窗",`
<div id="overview">
${d("","功能描述")}
<p>合并处置弹窗标题为「逐条收货/换货/退货」，<strong>无页签</strong>；内容区纵向三段「收货 → 换货 → 退货」可上下滚动；底栏统一「确定」，一次提交已填处置。弹窗固定高度，顶栏 / 统计条 / 底栏固定。</p>
${d("","壳与布局")}
<ul>
<li>顶栏：标题「逐条收货/换货/退货」+ 关闭（<strong>不含</strong>订单行号）</li>
<li>统计条（只读）：发订套数、已收货套数、已换货套数、已退货套数、<strong>待收货套数</strong>、订单行备注（过长截断，悬停全文）</li>
<li>内容区：分区标题「收货」「换货」「退货」；若存在预验收草稿，收货标题旁展示标签「已带入预验收数据」；窄屏表单单列</li>
<li>底栏：「关闭」+ 纸质且需分配条码时「预览」+ 统一「确定」</li>
<li>点遮罩或关闭：关弹窗，不提交草稿；行选中可保留，再次点该行可再打开</li>
</ul>
</div>
<div id="pending">
${d("","待收货套数与一次提交")}
<p><strong>待收货套数（pendingSets）</strong> = max(0, 发订套数 − 已收货套数 − 已退货套数)。<strong>不含</strong>已换货套数——已有换货仍可继续收货。</p>
<ul>
<li>点「确定」：数量为有效正数的区块参与提交；空或 0 跳过且不校验该块原因/收货必填</li>
<li>收、换、退均无有效数量 → 提示「请至少填写一种处置套数」，不写库、不关弹窗</li>
<li><strong>收货套数 + 换货数量 + 退货数量 ≤ 提交时刻待收货套数</strong>；否则提示「处置套数合计不能大于待收套数（当前待收 N）」</li>
<li>校验通过后按 <strong>收货 → 换货 → 退货</strong> 依次写库；成功提示「提交成功」，刷新列表与头信息后<strong>一律关闭弹窗</strong>（不按待收是否为 0 决定）</li>
</ul>
</div>
<div id="receive">
${d("","收货分区")}
<p>按当前验收单资源类型展示完整收货表单。</p>
${le(["资源类型","主要字段","必填要点（有收货套数时）"],[["纸质书","ISBN、作者、正题名、定价、币种、实洋、套内册数、收货套数、条码初始号、收货备注（receiveRemark）","正题名、定价、实洋、套内册数；若验收单开启自动分配条码则条码初始号必填"],["视听资料","ISBN、ISRC、商品条码、目录号、载体、版本/格式、题名、著者、码洋、币种、实洋、彩胶颜色、厂牌、限量编号、套内件数、收货套数、收货备注（receiveRemark）","载体、题名、码洋、实洋、套内件数"]])}
<ul>
<li>外文语种验收单：定价/码洋可带出原币价，币种默认外币；中文则按行内定价与币种预填</li>
<li>收货套数默认带出当前待收货套数（可改）</li>
<li><strong>收货备注</strong>为本面板唯一备注输入（纸质/视听均最多 <strong>500</strong> 字）；即使收货套数为空未参与提交，该输入框仍展示</li>
<li>若存在预验收草稿：打开时带入收货套数、定价/码洋、实洋、套内册数/件数；收货区标题旁显示「已带入预验收数据」；换货/退货不带入；本次含收货且收货写库成功后清除该行草稿</li>
</ul>
${d("","条码预览与分配结果（纸质 · 需分配条码时）")}
<ul>
<li>「预览」：根据条码初始号、收货套数、套内册数展示预分配/未分配区间；约 3 秒自动关闭，也可点「已知晓」提前关闭（不视为提交）</li>
<li>「确定」且本次含收货：先展示已分配/未分配结果；约 3 秒自动「已知晓」并完成整单确定，亦可手动点「已知晓」；若有空条码提示「注意：本次收货有空条码」</li>
</ul>
</div>
<div id="exchange-return">
${d("","换货分区")}
<p>换货数量与换货原因同一行展示；标签前带红色必填标识 <span style="color:#ef4444">*</span>；<strong>不展示</strong>换货备注输入框。</p>
${le(["字段","必填","说明"],[["换货数量（exchangeQty）","有换货数量时是","正数；与收/退合计 ≤ 待收货套数"],["换货原因（exchangeReason）","有换货数量时是","选项：换货、残缺损"],["换货备注","—","界面不展示；写库时取收货备注（receiveRemark）"]])}
${d("","退货分区")}
<p>退货数量与退货原因同一行展示；标签前带红色必填标识 <span style="color:#ef4444">*</span>；<strong>不展示</strong>退货备注输入框。</p>
${le(["字段","必填","说明"],[["退货数量（returnQty）","有退货数量时是","正数；与收/换合计 ≤ 待收货套数"],["退货原因（returnReason）","有退货数量时是","选项：退货、损坏退货"],["退货备注","—","界面不展示；写库时取收货备注（receiveRemark）"]])}
</div>
<div id="exception">
${d("","异常处理")}
<ul>
<li>三种处置均无有效数量：「请至少填写一种处置套数」</li>
<li>收货缺必填：对应提示（如「请填写正题名」「请选择载体」等）</li>
<li>换/退有数量缺原因：提示请选择换货/退货原因</li>
<li>合计超待收：「处置套数合计不能大于待收套数（当前待收 N）」；不写库、不关弹窗</li>
<li>单流套数无效或超过待收：「操作失败：套数无效」或「超过待收货套数（当前待收 N）」</li>
<li>预览前未填条码初始号/有效收货套数/套内册数：对应提示，不打开预览</li>
</ul>
</div>
`),Zp={title:"逐条收货",items:[{id:"5.8.5.1",title:"当前工作验收单头信息",htmlContent:Xp},{id:"5.8.5.2",title:"订单行检索",htmlContent:Jp},{id:"5.8.5.3",title:"订单行列表与选行打开",htmlContent:Yp},{id:"5.8.5.4",title:"逐条收货/换货/退货处置弹窗",htmlContent:Qp}]};function eh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["receive-by-item"]=Zp}Sp();wp();kp();Vp();zp();eh();const Bs=yu(ku);Bs.use(Ru());Bs.use(zo);Bs.mount("#app");export{Tn as $,uo as A,Ll as B,hs as C,mn as D,ki as E,Pe as F,Ps as G,Ya as H,oh as I,Bl as J,ch as K,bd as L,lh as M,Ah as N,Rh as O,Ge as P,Es as Q,fh as R,Ui as S,th as T,xi as U,Wf as V,Yc as W,uh as X,ah as Y,Ch as Z,Nu as _,Z as a,ih as a0,En as a1,Ho as a2,sd as a3,Eh as a4,zf as a5,dd as a6,pd as a7,xh as a8,Fo as a9,Ih as aa,Th as ab,Oh as ac,Ph as ad,kh as ae,wh as af,Nh as ag,$h as ah,hh as ai,Vo as aj,yh as ak,Mh as al,Dh as am,Lh as an,vh as ao,mh as ap,gh as aq,Sh as ar,_h as as,bh as at,ye as b,Le as c,me as d,dh as e,Rs as f,vu as g,lo as h,Fc as i,oo as j,hn as k,Be as l,Se as m,It as n,As as o,ph as p,Gf as q,Yn as r,si as s,ii as t,qf as u,sh as v,Ft as w,nh as x,rh as y,la as z};
