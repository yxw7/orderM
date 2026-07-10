const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OrderManageView-BQb7QsMC.js","./SearchPanel-B_aKGX4v.js","./SearchExpandToggle-6q7QchHb.js","./DataTable-CCoc5che.js","./DataTable-CGSIGyar.css","./HoverTooltip-DSoIm6li.js","./DropdownButton-DHjCf0FQ.js","./supplier-sources-BoAsDk7Y.js","./orders-CX_FuB75.js","./acquisition-methods-mIrdFd1I.js","./use-site-options-DwLjRLvB.js","./PrdSpecDrawer-CVxbLFDb.js","./marc-mapping-manage-DxUrdRqc.js","./PrdSpecDrawer-K0VAWUv-.css","./order-line-detail-BQlfi28J.js","./acceptance-detail-BIWpYs8Y.js","./settled-list-BOMbvSXf.js","./shortage-DbLgcG1V.js","./FormModal-sTRefnFd.js","./import-template-manage-CqXZMuHR.js","./OrderManageView-CvWErycz.css","./OrderLineDetailView-GnWfsyUj.js","./OrderLineDetailView-DbbkSury.css","./BibQueryView-uszh99ox.js","./SiteMultiSelect-kL-XtVA3.js","./BibQueryView-gH21Z_CM.css","./Z3950QueryView-Ccr_kD-2.js","./AcceptanceManageView-CqcFBPq6.js","./acceptance-list-BUTL8q7L.js","./AcceptanceSettlementModal-acusVPpz.js","./AcceptanceExportConfigModal-DQWxNZE3.js","./AcceptanceDetailView-B-E9RfsY.js","./DeliveryImportView-U_sCIu65.js","./receive-by-item-DZaJGs9N.js","./DeliveryImportView-B4Tn3KBF.css","./ReceiveByItemView-D4zGNXV_.js","./BatchAcceptanceView-Cq-a5JOJ.js","./ExchangeManageView-BLtK5zek.js","./ReturnManageView-DCSZhx7I.js","./ShortageManageView-CNvyS5a5.js","./PendingSettlementView-awRHOTmR.js","./SettledView-NlM3LWD_.js","./settled-DLVpEtTD.js","./SettlementDetailView-OqoBDF1C.js","./SettlementListView-CGXG4YJx.js","./FailSettlementView-D_Bcr0W5.js","./SubscriberListView-Bj11-zqc.js","./subscriber-manage-B-2deZzk.js","./association-Fq_putFZ.js","./LibrarianListView-sfpYILws.js","./CurrencyInfoView-gvrhAprl.js","./ImportTemplateConfigView-2a6aJA_1.js","./StatusToggle-CBo3UqLq.js","./ShortageConfigView-BRxqpAGG.js","./BarcodeSupplierView-Cc0oEi1I.js","./MarcMappingView-BEzxOfbQ.js","./LocationManageView-Cxl_BRQa.js","./ReasonParamsView-CGlfpp5r.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Yt=[],ot=()=>{},Kr=()=>!1,ri=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),oi=e=>e.startsWith("onUpdate:"),Ae=Object.assign,hs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ul=Object.prototype.hasOwnProperty,te=(e,t)=>Ul.call(e,t),H=Array.isArray,Qt=e=>fn(e)==="[object Map]",un=e=>fn(e)==="[object Set]",js=e=>fn(e)==="[object Date]",Kl=e=>fn(e)==="[object RegExp]",G=e=>typeof e=="function",ae=e=>typeof e=="string",Fe=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",Gr=e=>(ne(e)||G(e))&&G(e.then)&&G(e.catch),Wr=Object.prototype.toString,fn=e=>Wr.call(e),Gl=e=>fn(e).slice(8,-1),qr=e=>fn(e)==="[object Object]",li=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ci=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Wl=/-\w/g,$e=ci(e=>e.replace(Wl,t=>t.slice(1).toUpperCase())),ql=/\B([A-Z])/g,Ht=ci(e=>e.replace(ql,"-$1").toLowerCase()),ai=ci(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ti=ci(e=>e?`on${ai(e)}`:""),st=(e,t)=>!Object.is(e,t),Zt=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Xr=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},ui=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Hs;const fi=()=>Hs||(Hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ps(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=ae(i)?Yl(i):ps(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ae(e)||ne(e))return e}const Xl=/;(?![^(]*\))/g,zl=/:([^]+)/,Jl=/\/\*[^]*?\*\//g;function Yl(e){const t={};return e.replace(Jl,"").split(Xl).forEach(n=>{if(n){const i=n.split(zl);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function It(e){let t="";if(ae(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const i=It(e[n]);i&&(t+=i+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ql="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zl=ds(Ql);function zr(e){return!!e||e===""}function ec(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=Nt(e[i],t[i]);return n}function Nt(e,t){if(e===t)return!0;let n=js(e),i=js(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=Fe(e),i=Fe(t),n||i)return e===t;if(n=H(e),i=H(t),n||i)return n&&i?ec(e,t):!1;if(n=ne(e),i=ne(t),n||i){if(!n||!i)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(l&&!c||!l&&c||!Nt(e[o],t[o]))return!1}}return String(e)===String(t)}function gs(e,t){return e.findIndex(n=>Nt(n,t))}const Jr=e=>!!(e&&e.__v_isRef===!0),nn=e=>ae(e)?e:e==null?"":H(e)||ne(e)&&(e.toString===Wr||!G(e.toString))?Jr(e)?nn(e.value):JSON.stringify(e,Yr,2):String(e),Yr=(e,t)=>Jr(t)?Yr(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],r)=>(n[Ii(i,r)+" =>"]=s,n),{})}:un(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ii(n))}:Fe(t)?Ii(t):ne(t)&&!H(t)&&!qr(t)?String(t):t,Ii=(e,t="")=>{var n;return Fe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class Qr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&_e&&(_e.active?(this.parent=_e,this.index=(_e.scopes||(_e.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=_e;try{return _e=this,t()}finally{_e=n}}}on(){++this._on===1&&(this.prevScope=_e,_e=this)}off(){if(this._on>0&&--this._on===0){if(_e===this)_e=this.prevScope;else{let t=_e;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zr(e){return new Qr(e)}function eo(){return _e}function tc(e,t=!1){_e&&_e.cleanups.push(e)}let ce;const wi=new WeakSet;class to{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_e&&(_e.active?_e.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wi.has(this)&&(wi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||io(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Us(this),so(this);const t=ce,n=qe;ce=this,qe=!0;try{return this.fn()}finally{ro(this),ce=t,qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)vs(t);this.deps=this.depsTail=void 0,Us(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gi(this)&&this.run()}get dirty(){return Gi(this)}}let no=0,Cn,Sn;function io(e,t=!1){if(e.flags|=8,t){e.next=Sn,Sn=e;return}e.next=Cn,Cn=e}function ms(){no++}function _s(){if(--no>0)return;if(Sn){let t=Sn;for(Sn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Cn;){let t=Cn;for(Cn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function so(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ro(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),vs(i),nc(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function Gi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(oo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function oo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===wn)||(e.globalVersion=wn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Gi(e))))return;e.flags|=2;const t=e.dep,n=ce,i=qe;ce=e,qe=!0;try{so(e);const s=e.fn(e._value);(t.version===0||st(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ce=n,qe=i,ro(e),e.flags&=-3}}function vs(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)vs(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function nc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let qe=!0;const lo=[];function ct(){lo.push(qe),qe=!1}function at(){const e=lo.pop();qe=e===void 0?!0:e}function Us(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let wn=0;class ic{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!qe||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new ic(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=i)}return n}trigger(t){this.version++,wn++,this.notify(t)}notify(t){ms();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_s()}}}function co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)co(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qn=new WeakMap,Vt=Symbol(""),Wi=Symbol(""),Nn=Symbol("");function Te(e,t,n){if(qe&&ce){let i=qn.get(e);i||qn.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new bs),s.map=i,s.key=n),s.track()}}function mt(e,t,n,i,s,r){const o=qn.get(e);if(!o){wn++;return}const l=c=>{c&&c.trigger()};if(ms(),t==="clear")o.forEach(l);else{const c=H(e),u=c&&li(n);if(c&&n==="length"){const a=Number(i);o.forEach((d,p)=>{(p==="length"||p===Nn||!Fe(p)&&p>=a)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Nn)),t){case"add":c?u&&l(o.get("length")):(l(o.get(Vt)),Qt(e)&&l(o.get(Wi)));break;case"delete":c||(l(o.get(Vt)),Qt(e)&&l(o.get(Wi)));break;case"set":Qt(e)&&l(o.get(Vt));break}}_s()}function sc(e,t){const n=qn.get(e);return n&&n.get(t)}function Gt(e){const t=Y(e);return t===e?t:(Te(t,"iterate",Nn),Be(e)?t:t.map(Xe))}function di(e){return Te(e=Y(e),"iterate",Nn),e}function nt(e,t){return bt(e)?sn(lt(e)?Xe(t):t):Xe(t)}const rc={__proto__:null,[Symbol.iterator](){return Ni(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return Gt(this).concat(...e.map(t=>H(t)?Gt(t):t))},entries(){return Ni(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return dt(this,"every",e,t,void 0,arguments)},filter(e,t){return dt(this,"filter",e,t,n=>n.map(i=>nt(this,i)),arguments)},find(e,t){return dt(this,"find",e,t,n=>nt(this,n),arguments)},findIndex(e,t){return dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return dt(this,"findLast",e,t,n=>nt(this,n),arguments)},findLastIndex(e,t){return dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Oi(this,"includes",e)},indexOf(...e){return Oi(this,"indexOf",e)},join(e){return Gt(this).join(e)},lastIndexOf(...e){return Oi(this,"lastIndexOf",e)},map(e,t){return dt(this,"map",e,t,void 0,arguments)},pop(){return hn(this,"pop")},push(...e){return hn(this,"push",e)},reduce(e,...t){return Ks(this,"reduce",e,t)},reduceRight(e,...t){return Ks(this,"reduceRight",e,t)},shift(){return hn(this,"shift")},some(e,t){return dt(this,"some",e,t,void 0,arguments)},splice(...e){return hn(this,"splice",e)},toReversed(){return Gt(this).toReversed()},toSorted(e){return Gt(this).toSorted(e)},toSpliced(...e){return Gt(this).toSpliced(...e)},unshift(...e){return hn(this,"unshift",e)},values(){return Ni(this,"values",e=>nt(this,e))}};function Ni(e,t,n){const i=di(e),s=i[t]();return i!==e&&!Be(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const oc=Array.prototype;function dt(e,t,n,i,s,r){const o=di(e),l=o!==e&&!Be(e),c=o[t];if(c!==oc[t]){const d=c.apply(e,r);return l?Xe(d):d}let u=n;o!==e&&(l?u=function(d,p){return n.call(this,nt(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const a=c.call(o,u,i);return l&&s?s(a):a}function Ks(e,t,n,i){const s=di(e),r=s!==e&&!Be(e);let o=n,l=!1;s!==e&&(r?(l=i.length===0,o=function(u,a,d){return l&&(l=!1,u=nt(e,u)),n.call(this,u,nt(e,a),d,e)}):n.length>3&&(o=function(u,a,d){return n.call(this,u,a,d,e)}));const c=s[t](o,...i);return l?nt(e,c):c}function Oi(e,t,n){const i=Y(e);Te(i,"iterate",Nn);const s=i[t](...n);return(s===-1||s===!1)&&hi(n[0])?(n[0]=Y(n[0]),i[t](...n)):s}function hn(e,t,n=[]){ct(),ms();const i=Y(e)[t].apply(e,n);return _s(),at(),i}const lc=ds("__proto__,__v_isRef,__isVue"),ao=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fe));function cc(e){Fe(e)||(e=String(e));const t=Y(this);return Te(t,"has",e),t.hasOwnProperty(e)}class uo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?vc:go:r?po:ho).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=H(t);if(!s){let c;if(o&&(c=rc[n]))return c;if(n==="hasOwnProperty")return cc}const l=Reflect.get(t,n,de(t)?t:i);if((Fe(n)?ao.has(n):lc(n))||(s||Te(t,"get",n),r))return l;if(de(l)){const c=o&&li(n)?l:l.value;return s&&ne(c)?Xi(c):c}return ne(l)?s?Xi(l):kn(l):l}}class fo extends uo{constructor(t=!1){super(!1,t)}set(t,n,i,s){let r=t[n];const o=H(t)&&li(n);if(!this._isShallow){const u=bt(r);if(!Be(i)&&!bt(i)&&(r=Y(r),i=Y(i)),!o&&de(r)&&!de(i))return u||(r.value=i),!0}const l=o?Number(n)<t.length:te(t,n),c=Reflect.set(t,n,i,de(t)?t:s);return t===Y(s)&&c&&(l?st(i,r)&&mt(t,"set",n,i):mt(t,"add",n,i)),c}deleteProperty(t,n){const i=te(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&mt(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!Fe(n)||!ao.has(n))&&Te(t,"has",n),i}ownKeys(t){return Te(t,"iterate",H(t)?"length":Vt),Reflect.ownKeys(t)}}class ac extends uo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const uc=new fo,fc=new ac,dc=new fo(!0);const qi=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function hc(e,t,n){return function(...i){const s=this.__v_raw,r=Y(s),o=Qt(r),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=s[e](...i),a=n?qi:t?sn:Xe;return!t&&Te(r,"iterate",c?Wi:Vt),Ae(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:l?[a(d[0]),a(d[1])]:a(d),done:p}}})}}function Bn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function pc(e,t){const n={get(s){const r=this.__v_raw,o=Y(r),l=Y(s);e||(st(s,l)&&Te(o,"get",s),Te(o,"get",l));const{has:c}=Vn(o),u=t?qi:e?sn:Xe;if(c.call(o,s))return u(r.get(s));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Te(Y(s),"iterate",Vt),s.size},has(s){const r=this.__v_raw,o=Y(r),l=Y(s);return e||(st(s,l)&&Te(o,"has",s),Te(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,c=Y(l),u=t?qi:e?sn:Xe;return!e&&Te(c,"iterate",Vt),l.forEach((a,d)=>s.call(r,u(a),u(d),o))}};return Ae(n,e?{add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear")}:{add(s){const r=Y(this),o=Vn(r),l=Y(s),c=!t&&!Be(s)&&!bt(s)?l:s;return o.has.call(r,c)||st(s,c)&&o.has.call(r,s)||st(l,c)&&o.has.call(r,l)||(r.add(c),mt(r,"add",c,c)),this},set(s,r){!t&&!Be(r)&&!bt(r)&&(r=Y(r));const o=Y(this),{has:l,get:c}=Vn(o);let u=l.call(o,s);u||(s=Y(s),u=l.call(o,s));const a=c.call(o,s);return o.set(s,r),u?st(r,a)&&mt(o,"set",s,r):mt(o,"add",s,r),this},delete(s){const r=Y(this),{has:o,get:l}=Vn(r);let c=o.call(r,s);c||(s=Y(s),c=o.call(r,s)),l&&l.call(r,s);const u=r.delete(s);return c&&mt(r,"delete",s,void 0),u},clear(){const s=Y(this),r=s.size!==0,o=s.clear();return r&&mt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hc(s,e,t)}),n}function ys(e,t){const n=pc(e,t);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(te(n,s)&&s in i?n:i,s,r)}const gc={get:ys(!1,!1)},mc={get:ys(!1,!0)},_c={get:ys(!0,!1)};const ho=new WeakMap,po=new WeakMap,go=new WeakMap,vc=new WeakMap;function bc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kn(e){return bt(e)?e:Cs(e,!1,uc,gc,ho)}function mo(e){return Cs(e,!1,dc,mc,po)}function Xi(e){return Cs(e,!0,fc,_c,go)}function Cs(e,t,n,i,s){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=s.get(e);if(r)return r;const o=bc(Gl(e));if(o===0)return e;const l=new Proxy(e,o===2?i:n);return s.set(e,l),l}function lt(e){return bt(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function bt(e){return!!(e&&e.__v_isReadonly)}function Be(e){return!!(e&&e.__v_isShallow)}function hi(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Ss(e){return!te(e,"__v_skip")&&Object.isExtensible(e)&&Xr(e,"__v_skip",!0),e}const Xe=e=>ne(e)?kn(e):e,sn=e=>ne(e)?Xi(e):e;function de(e){return e?e.__v_isRef===!0:!1}function pi(e){return _o(e,!1)}function yc(e){return _o(e,!0)}function _o(e,t){return de(e)?e:new Cc(e,t)}class Cc{constructor(t,n){this.dep=new bs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:Xe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Be(t)||bt(t);t=i?t:Y(t),st(t,n)&&(this._rawValue=t,this._value=i?t:Xe(t),this.dep.trigger())}}function Ce(e){return de(e)?e.value:e}const Sc={get:(e,t,n)=>t==="__v_raw"?e:Ce(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function vo(e){return lt(e)?e:new Proxy(e,Sc)}function Rc(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=bo(e,n);return t}class Ac{constructor(t,n,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Fe(n)?n:String(n),this._raw=Y(t);let s=!0,r=t;if(!H(t)||Fe(this._key)||!li(this._key))do s=!hi(r)||Be(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Ce(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&de(this._raw[this._key])){const n=this._object[this._key];if(de(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return sc(this._raw,this._key)}}class Ec{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function xc(e,t,n){return de(e)?e:G(e)?new Ec(e):ne(e)&&arguments.length>1?bo(e,t,n):pi(e)}function bo(e,t,n){return new Ac(e,t,n)}class Tc{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new bs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return io(this,!0),!0}get value(){const t=this.dep.track();return oo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ic(e,t,n=!1){let i,s;return G(e)?i=e:(i=e.get,s=e.set),new Tc(i,s,n)}const Fn={},Xn=new WeakMap;let kt;function wc(e,t=!1,n=kt){if(n){let i=Xn.get(n);i||Xn.set(n,i=[]),i.push(e)}}function Nc(e,t,n=le){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:c}=n,u=b=>s?b:Be(b)||s===!1||s===0?_t(b,1):_t(b);let a,d,p,g,A=!1,y=!1;if(de(e)?(d=()=>e.value,A=Be(e)):lt(e)?(d=()=>u(e),A=!0):H(e)?(y=!0,A=e.some(b=>lt(b)||Be(b)),d=()=>e.map(b=>{if(de(b))return b.value;if(lt(b))return u(b);if(G(b))return c?c(b,2):b()})):G(e)?t?d=c?()=>c(e,2):e:d=()=>{if(p){ct();try{p()}finally{at()}}const b=kt;kt=a;try{return c?c(e,3,[g]):e(g)}finally{kt=b}}:d=ot,t&&s){const b=d,k=s===!0?1/0:s;d=()=>_t(b(),k)}const I=eo(),P=()=>{a.stop(),I&&I.active&&hs(I.effects,a)};if(r&&t){const b=t;t=(...k)=>{const q=b(...k);return P(),q}}let v=y?new Array(e.length).fill(Fn):Fn;const C=b=>{if(!(!(a.flags&1)||!a.dirty&&!b))if(t){const k=a.run();if(b||s||A||(y?k.some((q,D)=>st(q,v[D])):st(k,v))){p&&p();const q=kt;kt=a;try{const D=[k,v===Fn?void 0:y&&v[0]===Fn?[]:v,g];v=k,c?c(t,3,D):t(...D)}finally{kt=q}}}else a.run()};return l&&l(C),a=new to(d),a.scheduler=o?()=>o(C,!1):C,g=b=>wc(b,!1,a),p=a.onStop=()=>{const b=Xn.get(a);if(b){if(c)c(b,4);else for(const k of b)k();Xn.delete(a)}},t?i?C(!0):v=a.run():o?o(C.bind(null,!0),!0):a.run(),P.pause=a.pause.bind(a),P.resume=a.resume.bind(a),P.stop=P,P}function _t(e,t=1/0,n){if(t<=0||!ne(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,de(e))_t(e.value,t,n);else if(H(e))for(let i=0;i<e.length;i++)_t(e[i],t,n);else if(un(e)||Qt(e))e.forEach(i=>{_t(i,t,n)});else if(qr(e)){for(const i in e)_t(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&_t(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dn(e,t,n,i){try{return i?e(...i):e()}catch(s){gi(s,t,n)}}function ze(e,t,n,i){if(G(e)){const s=Dn(e,t,n,i);return s&&Gr(s)&&s.catch(r=>{gi(r,t,n)}),s}if(H(e)){const s=[];for(let r=0;r<e.length;r++)s.push(ze(e[r],t,n,i));return s}}function gi(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||le;if(t){let l=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const a=l.ec;if(a){for(let d=0;d<a.length;d++)if(a[d](e,c,u)===!1)return}l=l.parent}if(r){ct(),Dn(r,null,10,[e,c,u]),at();return}}Oc(e,n,s,i,o)}function Oc(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const Oe=[];let tt=-1;const en=[];let xt=null,qt=0;const yo=Promise.resolve();let zn=null;function mi(e){const t=zn||yo;return e?t.then(this?e.bind(this):e):t}function Pc(e){let t=tt+1,n=Oe.length;for(;t<n;){const i=t+n>>>1,s=Oe[i],r=On(s);r<e||r===e&&s.flags&2?t=i+1:n=i}return t}function Rs(e){if(!(e.flags&1)){const t=On(e),n=Oe[Oe.length-1];!n||!(e.flags&2)&&t>=On(n)?Oe.push(e):Oe.splice(Pc(t),0,e),e.flags|=1,Co()}}function Co(){zn||(zn=yo.then(Ro))}function $c(e){H(e)?en.push(...e):xt&&e.id===-1?xt.splice(qt+1,0,e):e.flags&1||(en.push(e),e.flags|=1),Co()}function Gs(e,t,n=tt+1){for(;n<Oe.length;n++){const i=Oe[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Oe.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function So(e){if(en.length){const t=[...new Set(en)].sort((n,i)=>On(n)-On(i));if(en.length=0,xt){xt.push(...t);return}for(xt=t,qt=0;qt<xt.length;qt++){const n=xt[qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xt=null,qt=0}}const On=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ro(e){try{for(tt=0;tt<Oe.length;tt++){const t=Oe[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Dn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<Oe.length;tt++){const t=Oe[tt];t&&(t.flags&=-2)}tt=-1,Oe.length=0,So(),zn=null,(Oe.length||en.length)&&Ro()}}let Re=null,Ao=null;function Jn(e){const t=Re;return Re=e,Ao=e&&e.type.__scopeId||null,t}function As(e,t=Re,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&ti(-1);const r=Jn(t);let o;try{o=e(...s)}finally{Jn(r),i._d&&ti(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Mc(e,t){if(Re===null)return e;const n=Ci(Re),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,l,c=le]=t[s];r&&(G(r)&&(r={mounted:r,updated:r}),r.deep&&_t(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function $t(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let c=l.dir[i];c&&(ct(),ze(c,n,8,[e.el,l,e,t]),at())}}function Kn(e,t){if(Ie){let n=Ie.provides;const i=Ie.parent&&Ie.parent.provides;i===n&&(n=Ie.provides=Object.create(i)),n[e]=t}}function Ke(e,t,n=!1){const i=Ns();if(i||Ft){let s=Ft?Ft._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&G(t)?t.call(i&&i.proxy):t}}function kc(){return!!(Ns()||Ft)}const Dc=Symbol.for("v-scx"),Lc=()=>Ke(Dc);function Bt(e,t,n){return Eo(e,t,n)}function Eo(e,t,n=le){const{immediate:i,deep:s,flush:r,once:o}=n,l=Ae({},n),c=t&&i||!t&&r!=="post";let u;if($n){if(r==="sync"){const g=Lc();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=ot,g.resume=ot,g.pause=ot,g}}const a=Ie;l.call=(g,A,y)=>ze(g,a,A,y);let d=!1;r==="post"?l.scheduler=g=>{ve(g,a&&a.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(g,A)=>{A?g():Rs(g)}),l.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,a&&(g.id=a.uid,g.i=a))};const p=Nc(e,t,l);return $n&&(u?u.push(p):c&&p()),p}function Vc(e,t,n){const i=this.proxy,s=ae(e)?e.includes(".")?xo(i,e):()=>i[e]:e.bind(i,i);let r;G(t)?r=t:(r=t.handler,n=t);const o=Ln(this),l=Eo(s,r.bind(i),n);return o(),l}function xo(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const At=new WeakMap,To=Symbol("_vte"),Bc=e=>e.__isTeleport,Dt=e=>e&&(e.disabled||e.disabled===""),Fc=e=>e&&(e.defer||e.defer===""),Ws=e=>typeof SVGElement<"u"&&e instanceof SVGElement,qs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,zi=(e,t)=>{const n=e&&e.to;return ae(n)?t?t(n):null:n},jc={name:"Teleport",__isTeleport:!0,process(e,t,n,i,s,r,o,l,c,u){const{mc:a,pc:d,pbc:p,o:{insert:g,querySelector:A,createText:y,createComment:I,parentNode:P}}=u,v=Dt(t.props);let{dynamicChildren:C}=t;const b=(D,V,B)=>{D.shapeFlag&16&&a(D.children,V,B,s,r,o,l,c)},k=(D=t)=>{const V=Dt(D.props),B=D.target=zi(D.props,A),X=Ji(B,D,y,g);B&&(o!=="svg"&&Ws(B)?o="svg":o!=="mathml"&&qs(B)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(B),V||(b(D,B,X),mn(D,!1)))},q=D=>{const V=()=>{if(At.get(D)===V){if(At.delete(D),Dt(D.props)){const B=P(D.el)||n;b(D,B,D.anchor),mn(D,!0)}k(D)}};At.set(D,V),ve(V,r)};if(e==null){const D=t.el=y(""),V=t.anchor=y("");if(g(D,n,i),g(V,n,i),Fc(t.props)||r&&r.pendingBranch){q(t);return}v&&(b(t,n,V),mn(t,!0)),k()}else{t.el=e.el;const D=t.anchor=e.anchor,V=At.get(e);if(V){V.flags|=8,At.delete(e),q(t);return}t.targetStart=e.targetStart;const B=t.target=e.target,X=t.targetAnchor=e.targetAnchor,ue=Dt(e.props),Ee=ue?n:B,xe=ue?D:X;if(o==="svg"||Ws(B)?o="svg":(o==="mathml"||qs(B))&&(o="mathml"),C?(p(e.dynamicChildren,C,Ee,s,r,o,l),ws(e,t,!0)):c||d(e,t,Ee,xe,s,r,o,l,!1),v)ue?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):jn(t,n,D,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const We=zi(t.props,A);We&&(t.target=We,jn(t,We,null,u,0))}else ue&&jn(t,B,X,u,1);mn(t,v)}},remove(e,t,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:a,target:d,props:p}=e,g=Dt(p),A=r||!g,y=At.get(e);if(y&&(y.flags|=8,At.delete(e)),d&&(s(u),s(a)),r&&s(c),!y&&(g||d)&&o&16)for(let I=0;I<l.length;I++){const P=l[I];i(P,t,n,A,!!P.dynamicChildren)}},move:jn,hydrate:Hc};function jn(e,t,n,{o:{insert:i},m:s},r=2){r===0&&i(e.targetAnchor,t,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:a}=e,d=r===2;if(d&&i(o,t,n),!At.has(e)&&(!d||Dt(a))&&c&16)for(let p=0;p<u.length;p++)s(u[p],t,n,2);d&&i(l,t,n)}function Hc(e,t,n,i,s,r,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:a}},d){function p(I,P){let v=P;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")t.targetStart=v;else if(v.data==="teleport anchor"){t.targetAnchor=v,I._lpa=t.targetAnchor&&o(t.targetAnchor);break}}v=o(v)}}function g(I,P){P.anchor=d(o(I),P,l(I),n,i,s,r)}const A=t.target=zi(t.props,c),y=Dt(t.props);if(A){const I=A._lpa||A.firstChild;t.shapeFlag&16&&(y?(g(e,t),p(A,I),t.targetAnchor||Ji(A,t,a,u,l(e)===A?e:null)):(t.anchor=o(e),p(A,I),t.targetAnchor||Ji(A,t,a,u),d(I&&o(I),t,A,n,i,s,r))),mn(t,y)}else y&&t.shapeFlag&16&&(g(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}const Ah=jc;function mn(e,t){const n=e.ctx;if(n&&n.ut){let i,s;for(t?(i=e.el,s=e.anchor):(i=e.targetStart,s=e.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Ji(e,t,n,i,s=null){const r=t.targetStart=n(""),o=t.targetAnchor=n("");return r[To]=o,e&&(i(r,e,s),i(o,e,s)),o}const Pi=Symbol("_leaveCb");function _i(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_i(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Io(e,t){return G(e)?Ae({name:e.name},t,{setup:e}):e}function wo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Yn=new WeakMap;function Rn(e,t,n,i,s=!1){if(H(e)){e.forEach((y,I)=>Rn(y,t&&(H(t)?t[I]:t),n,i,s));return}if(wt(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rn(e,t,n,i.component.subTree);return}const r=i.shapeFlag&4?Ci(i.component):i.el,o=s?null:r,{i:l,r:c}=e,u=t&&t.r,a=l.refs===le?l.refs={}:l.refs,d=l.setupState,p=Y(d),g=d===le?Kr:y=>Xs(a,y)?!1:te(p,y),A=(y,I)=>!(I&&Xs(a,I));if(u!=null&&u!==c){if(zs(t),ae(u))a[u]=null,g(u)&&(d[u]=null);else if(de(u)){const y=t;A(u,y.k)&&(u.value=null),y.k&&(a[y.k]=null)}}if(G(c)){ct();try{Dn(c,l,12,[o,a])}finally{at()}}else{const y=ae(c),I=de(c);if(y||I){const P=()=>{if(e.f){const v=y?g(c)?d[c]:a[c]:A()||!e.k?c.value:a[e.k];if(s)H(v)&&hs(v,r);else if(H(v))v.includes(r)||v.push(r);else if(y)a[c]=[r],g(c)&&(d[c]=a[c]);else{const C=[r];A(c,e.k)&&(c.value=C),e.k&&(a[e.k]=C)}}else y?(a[c]=o,g(c)&&(d[c]=o)):I&&(A(c,e.k)&&(c.value=o),e.k&&(a[e.k]=o))};if(o){const v=()=>{P(),Yn.delete(e)};v.id=-1,Yn.set(e,v),ve(v,n)}else zs(e),P()}}}function zs(e){const t=Yn.get(e);t&&(t.flags|=8,Yn.delete(e))}fi().requestIdleCallback;fi().cancelIdleCallback;const wt=e=>!!e.type.__asyncLoader,No=e=>e.type.__isKeepAlive,Uc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Ns(),i=n.ctx;if(!i.renderer)return()=>{const v=t.default&&t.default();return v&&v.length===1?v[0]:v};const s=new Map,r=new Set;let o=null;const l=n.suspense,{renderer:{p:c,m:u,um:a,o:{createElement:d}}}=i,p=d("div");i.activate=(v,C,b,k,q)=>{const D=v.component;u(v,C,b,0,l),c(D.vnode,v,C,b,D,l,k,v.slotScopeIds,q),ve(()=>{D.isDeactivated=!1,D.a&&Zt(D.a);const V=v.props&&v.props.onVnodeMounted;V&&He(V,D.parent,v)},l)},i.deactivate=v=>{const C=v.component;Zn(C.m),Zn(C.a),u(v,p,null,1,l),ve(()=>{C.da&&Zt(C.da);const b=v.props&&v.props.onVnodeUnmounted;b&&He(b,C.parent,v),C.isDeactivated=!0},l)};function g(v){$i(v),a(v,n,l,!0)}function A(v){s.forEach((C,b)=>{const k=is(wt(C)?C.type.__asyncResolved||{}:C.type);k&&!v(k)&&y(b)})}function y(v){const C=s.get(v);C&&(!o||!Xt(C,o))?g(C):o&&$i(o),s.delete(v),r.delete(v)}Bt(()=>[e.include,e.exclude],([v,C])=>{v&&A(b=>_n(v,b)),C&&A(b=>!_n(C,b))},{flush:"post",deep:!0});let I=null;const P=()=>{I!=null&&(ei(n.subTree.type)?ve(()=>{s.set(I,Hn(n.subTree))},n.subTree.suspense):s.set(I,Hn(n.subTree)))};return Es(P),Po(P),$o(()=>{s.forEach(v=>{const{subTree:C,suspense:b}=n,k=Hn(C);if(v.type===k.type&&v.key===k.key){$i(k);const q=k.component.da;q&&ve(q,b);return}g(v)})}),()=>{if(I=null,!t.default)return o=null;const v=t.default(),C=v[0];if(v.length>1)return o=null,v;if(!on(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return o=null,C;let b=Hn(C);if(b.type===ut)return o=null,b;const k=b.type,q=is(wt(b)?b.type.__asyncResolved||{}:k),{include:D,exclude:V,max:B}=e;if(D&&(!q||!_n(D,q))||V&&q&&_n(V,q))return b.shapeFlag&=-257,o=b,C;const X=b.key==null?k:b.key,ue=s.get(X);return b.el&&(b=jt(b),C.shapeFlag&128&&(C.ssContent=b)),I=X,ue?(b.el=ue.el,b.component=ue.component,b.transition&&_i(b,b.transition),b.shapeFlag|=512,r.delete(X),r.add(X)):(r.add(X),B&&r.size>parseInt(B,10)&&y(r.values().next().value)),b.shapeFlag|=256,o=b,ei(C.type)?C:b}}},Kc=Uc;function _n(e,t){return H(e)?e.some(n=>_n(n,t)):ae(e)?e.split(",").includes(t):Kl(e)?(e.lastIndex=0,e.test(t)):!1}function Gc(e,t){Oo(e,"a",t)}function Wc(e,t){Oo(e,"da",t)}function Oo(e,t,n=Ie){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(vi(t,i,n),n){let s=n.parent;for(;s&&s.parent;)No(s.parent.vnode)&&qc(i,t,n,s),s=s.parent}}function qc(e,t,n,i){const s=vi(t,e,i,!0);Mo(()=>{hs(i[t],s)},n)}function $i(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Hn(e){return e.shapeFlag&128?e.ssContent:e}function vi(e,t,n=Ie,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{ct();const l=Ln(n),c=ze(t,n,e,o);return l(),at(),c});return i?s.unshift(r):s.push(r),r}}const yt=e=>(t,n=Ie)=>{(!$n||e==="sp")&&vi(e,(...i)=>t(...i),n)},Xc=yt("bm"),Es=yt("m"),zc=yt("bu"),Po=yt("u"),$o=yt("bum"),Mo=yt("um"),Jc=yt("sp"),Yc=yt("rtg"),Qc=yt("rtc");function Zc(e,t=Ie){vi("ec",e,t)}const ko="components";function xs(e,t){return Lo(ko,e,!0,t)||e}const Do=Symbol.for("v-ndc");function ea(e){return ae(e)?Lo(ko,e,!1)||e:e||Do}function Lo(e,t,n=!0,i=!1){const s=Re||Ie;if(s){const r=s.type;{const l=is(r,!1);if(l&&(l===t||l===$e(t)||l===ai($e(t))))return r}const o=Js(s[e]||r[e],t)||Js(s.appContext[e],t);return!o&&i?r:o}}function Js(e,t){return e&&(e[t]||e[$e(t)]||e[ai($e(t))])}function Yi(e,t,n,i){let s;const r=n,o=H(e);if(o||ae(e)){const l=o&&lt(e);let c=!1,u=!1;l&&(c=!Be(e),u=bt(e),e=di(e)),s=new Array(e.length);for(let a=0,d=e.length;a<d;a++)s[a]=t(c?u?sn(Xe(e[a])):Xe(e[a]):e[a],a,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,r)}else if(ne(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,r));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const a=l[c];s[c]=t(e[a],a,c,r)}}else s=[];return s}function Eh(e,t,n={},i,s){if(Re.ce||Re.parent&&wt(Re.parent)&&Re.parent.ce){const u=Object.keys(n).length>0;return t!=="default"&&(n.name=t),be(),rn(Pe,null,[ge("slot",n,i&&i())],u?-2:64)}let r=e[t];r&&r._c&&(r._d=!1),be();const o=r&&Vo(r(n)),l=n.key||o&&o.key,c=rn(Pe,{key:(l&&!Fe(l)?l:`_${t}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&e._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Vo(e){return e.some(t=>on(t)?!(t.type===ut||t.type===Pe&&!Vo(t.children)):!0)?e:null}const Qi=e=>e?sl(e)?Ci(e):Qi(e.parent):null,An=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qi(e.parent),$root:e=>Qi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Fo(e),$forceUpdate:e=>e.f||(e.f=()=>{Rs(e.update)}),$nextTick:e=>e.n||(e.n=mi.bind(e.proxy)),$watch:e=>Vc.bind(e)}),Mi=(e,t)=>e!==le&&!e.__isScriptSetup&&te(e,t),ta={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:c}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Mi(i,t))return o[t]=1,i[t];if(s!==le&&te(s,t))return o[t]=2,s[t];if(te(r,t))return o[t]=3,r[t];if(n!==le&&te(n,t))return o[t]=4,n[t];Zi&&(o[t]=0)}}const u=An[t];let a,d;if(u)return t==="$attrs"&&Te(e.attrs,"get",""),u(e);if((a=l.__cssModules)&&(a=a[t]))return a;if(n!==le&&te(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,te(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return Mi(s,t)?(s[t]=n,!0):i!==le&&te(i,t)?(i[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:r,type:o}},l){let c;return!!(n[l]||e!==le&&l[0]!=="$"&&te(e,l)||Mi(t,l)||te(r,l)||te(i,l)||te(An,l)||te(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ys(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Zi=!0;function na(e){const t=Fo(e),n=e.proxy,i=e.ctx;Zi=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:c,inject:u,created:a,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:y,deactivated:I,beforeDestroy:P,beforeUnmount:v,destroyed:C,unmounted:b,render:k,renderTracked:q,renderTriggered:D,errorCaptured:V,serverPrefetch:B,expose:X,inheritAttrs:ue,components:Ee,directives:xe,filters:We}=t;if(u&&ia(u,i,null),o)for(const W in o){const Z=o[W];G(Z)&&(i[W]=Z.bind(n))}if(s){const W=s.call(n,n);ne(W)&&(e.data=kn(W))}if(Zi=!0,r)for(const W in r){const Z=r[W],ft=G(Z)?Z.bind(n,n):G(Z.get)?Z.get.bind(n,n):ot,St=!G(Z)&&G(Z.set)?Z.set.bind(n):ot,Ye=Le({get:ft,set:St});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Me=>Ye.value=Me})}if(l)for(const W in l)Bo(l[W],i,n,W);if(c){const W=G(c)?c.call(n):c;Reflect.ownKeys(W).forEach(Z=>{Kn(Z,W[Z])})}a&&Qs(a,e,"c");function fe(W,Z){H(Z)?Z.forEach(ft=>W(ft.bind(n))):Z&&W(Z.bind(n))}if(fe(Xc,d),fe(Es,p),fe(zc,g),fe(Po,A),fe(Gc,y),fe(Wc,I),fe(Zc,V),fe(Qc,q),fe(Yc,D),fe($o,v),fe(Mo,b),fe(Jc,B),H(X))if(X.length){const W=e.exposed||(e.exposed={});X.forEach(Z=>{Object.defineProperty(W,Z,{get:()=>n[Z],set:ft=>n[Z]=ft,enumerable:!0})})}else e.exposed||(e.exposed={});k&&e.render===ot&&(e.render=k),ue!=null&&(e.inheritAttrs=ue),Ee&&(e.components=Ee),xe&&(e.directives=xe),B&&wo(e)}function ia(e,t,n=ot){H(e)&&(e=es(e));for(const i in e){const s=e[i];let r;ne(s)?"default"in s?r=Ke(s.from||i,s.default,!0):r=Ke(s.from||i):r=Ke(s),de(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Qs(e,t,n){ze(H(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Bo(e,t,n,i){let s=i.includes(".")?xo(n,i):()=>n[i];if(ae(e)){const r=t[e];G(r)&&Bt(s,r)}else if(G(e))Bt(s,e.bind(n));else if(ne(e))if(H(e))e.forEach(r=>Bo(r,t,n,i));else{const r=G(e.handler)?e.handler.bind(n):t[e.handler];G(r)&&Bt(s,r,e)}}function Fo(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let c;return l?c=l:!s.length&&!n&&!i?c=t:(c={},s.length&&s.forEach(u=>Qn(c,u,o,!0)),Qn(c,t,o)),ne(t)&&r.set(t,c),c}function Qn(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Qn(e,r,n,!0),s&&s.forEach(o=>Qn(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const l=sa[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const sa={data:Zs,props:er,emits:er,methods:vn,computed:vn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:vn,directives:vn,watch:oa,provide:Zs,inject:ra};function Zs(e,t){return t?e?function(){return Ae(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function ra(e,t){return vn(es(e),es(t))}function es(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function vn(e,t){return e?Ae(Object.create(null),e,t):t}function er(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Ae(Object.create(null),Ys(e),Ys(t??{})):t}function oa(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const i in t)n[i]=we(e[i],t[i]);return n}function jo(){return{app:null,config:{isNativeTag:Kr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let la=0;function ca(e,t){return function(i,s=null){G(i)||(i=Ae({},i)),s!=null&&!ne(s)&&(s=null);const r=jo(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:la++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ba,get config(){return r.config},set config(a){},use(a,...d){return o.has(a)||(a&&G(a.install)?(o.add(a),a.install(u,...d)):G(a)&&(o.add(a),a(u,...d))),u},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),u},component(a,d){return d?(r.components[a]=d,u):r.components[a]},directive(a,d){return d?(r.directives[a]=d,u):r.directives[a]},mount(a,d,p){if(!c){const g=u._ceVNode||ge(i,s);return g.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(g,a,p),c=!0,u._container=a,a.__vue_app__=u,Ci(g.component)}},onUnmount(a){l.push(a)},unmount(){c&&(ze(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(a,d){return r.provides[a]=d,u},runWithContext(a){const d=Ft;Ft=u;try{return a()}finally{Ft=d}}};return u}}let Ft=null;const aa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${$e(t)}Modifiers`]||e[`${Ht(t)}Modifiers`];function ua(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||le;let s=n;const r=t.startsWith("update:"),o=r&&aa(i,t.slice(7));o&&(o.trim&&(s=n.map(a=>ae(a)?a.trim():a)),o.number&&(s=n.map(ui)));let l,c=i[l=Ti(t)]||i[l=Ti($e(t))];!c&&r&&(c=i[l=Ti(Ht(t))]),c&&ze(c,e,6,s);const u=i[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ze(u,e,6,s)}}const fa=new WeakMap;function Ho(e,t,n=!1){const i=n?fa:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},l=!1;if(!G(e)){const c=u=>{const a=Ho(u,t,!0);a&&(l=!0,Ae(o,a))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(ne(e)&&i.set(e,null),null):(H(r)?r.forEach(c=>o[c]=null):Ae(o,r),ne(e)&&i.set(e,o),o)}function bi(e,t){return!e||!ri(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,Ht(t))||te(e,t))}function tr(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:a,props:d,data:p,setupState:g,ctx:A,inheritAttrs:y}=e,I=Jn(e);let P,v;try{if(n.shapeFlag&4){const b=s||i,k=b;P=it(u.call(k,b,a,d,g,p,A)),v=l}else{const b=t;P=it(b.length>1?b(d,{attrs:l,slots:o,emit:c}):b(d,null)),v=t.props?l:da(l)}}catch(b){En.length=0,gi(b,e,1),P=ge(ut)}let C=P;if(v&&y!==!1){const b=Object.keys(v),{shapeFlag:k}=C;b.length&&k&7&&(r&&b.some(oi)&&(v=ha(v,r)),C=jt(C,v,!1,!0))}return n.dirs&&(C=jt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&_i(C,n.transition),P=C,Jn(I),P}const da=e=>{let t;for(const n in e)(n==="class"||n==="style"||ri(n))&&((t||(t={}))[n]=e[n]);return t},ha=(e,t)=>{const n={};for(const i in e)(!oi(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function pa(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:l,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?nr(i,o,u):!!o;if(c&8){const a=t.dynamicProps;for(let d=0;d<a.length;d++){const p=a[d];if(Uo(o,i,p)&&!bi(u,p))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?nr(i,o,u):!0:!!o;return!1}function nr(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Uo(t,e,r)&&!bi(n,r))return!0}return!1}function Uo(e,t,n){const i=e[n],s=t[n];return n==="style"&&ne(i)&&ne(s)?!Nt(i,s):i!==s}function ga({vnode:e,parent:t,suspense:n},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=i,e=s),s===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const Ko={},Go=()=>Object.create(Ko),Wo=e=>Object.getPrototypeOf(e)===Ko;function ma(e,t,n,i=!1){const s={},r=Go();e.propsDefaults=Object.create(null),qo(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:mo(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function _a(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=Y(s),[c]=e.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let d=0;d<a.length;d++){let p=a[d];if(bi(e.emitsOptions,p))continue;const g=t[p];if(c)if(te(r,p))g!==r[p]&&(r[p]=g,u=!0);else{const A=$e(p);s[A]=ts(c,l,A,g,e,!1)}else g!==r[p]&&(r[p]=g,u=!0)}}}else{qo(e,t,s,r)&&(u=!0);let a;for(const d in l)(!t||!te(t,d)&&((a=Ht(d))===d||!te(t,a)))&&(c?n&&(n[d]!==void 0||n[a]!==void 0)&&(s[d]=ts(c,l,d,void 0,e,!0)):delete s[d]);if(r!==l)for(const d in r)(!t||!te(t,d))&&(delete r[d],u=!0)}u&&mt(e.attrs,"set","")}function qo(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(yn(c))continue;const u=t[c];let a;s&&te(s,a=$e(c))?!r||!r.includes(a)?n[a]=u:(l||(l={}))[a]=u:bi(e.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(r){const c=Y(n),u=l||le;for(let a=0;a<r.length;a++){const d=r[a];n[d]=ts(s,c,d,u[d],e,!te(u,d))}}return o}function ts(e,t,n,i,s,r){const o=e[n];if(o!=null){const l=te(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&G(c)){const{propsDefaults:u}=s;if(n in u)i=u[n];else{const a=Ln(s);i=u[n]=c.call(null,t),a()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Ht(n))&&(i=!0))}return i}const va=new WeakMap;function Xo(e,t,n=!1){const i=n?va:t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},l=[];let c=!1;if(!G(e)){const a=d=>{c=!0;const[p,g]=Xo(d,t,!0);Ae(o,p),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!r&&!c)return ne(e)&&i.set(e,Yt),Yt;if(H(r))for(let a=0;a<r.length;a++){const d=$e(r[a]);ir(d)&&(o[d]=le)}else if(r)for(const a in r){const d=$e(a);if(ir(d)){const p=r[a],g=o[d]=H(p)||G(p)?{type:p}:Ae({},p),A=g.type;let y=!1,I=!0;if(H(A))for(let P=0;P<A.length;++P){const v=A[P],C=G(v)&&v.name;if(C==="Boolean"){y=!0;break}else C==="String"&&(I=!1)}else y=G(A)&&A.name==="Boolean";g[0]=y,g[1]=I,(y||te(g,"default"))&&l.push(d)}}const u=[o,l];return ne(e)&&i.set(e,u),u}function ir(e){return e[0]!=="$"&&!yn(e)}const Ts=e=>e==="_"||e==="_ctx"||e==="$stable",Is=e=>H(e)?e.map(it):[it(e)],ba=(e,t,n)=>{if(t._n)return t;const i=As((...s)=>Is(t(...s)),n);return i._c=!1,i},zo=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Ts(s))continue;const r=e[s];if(G(r))t[s]=ba(s,r,i);else if(r!=null){const o=Is(r);t[s]=()=>o}}},Jo=(e,t)=>{const n=Is(t);e.slots.default=()=>n},Yo=(e,t,n)=>{for(const i in t)(n||!Ts(i))&&(e[i]=t[i])},ya=(e,t,n)=>{const i=e.slots=Go();if(e.vnode.shapeFlag&32){const s=t._;s?(Yo(i,t,n),n&&Xr(i,"_",s,!0)):zo(t,i)}else t&&Jo(e,t)},Ca=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=le;if(i.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:Yo(s,t,n):(r=!t.$stable,zo(t,s)),o=t}else t&&(Jo(e,t),o={default:1});if(r)for(const l in s)!Ts(l)&&o[l]==null&&delete s[l]},ve=xa;function Sa(e){return Ra(e)}function Ra(e,t){const n=fi();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:a,parentNode:d,nextSibling:p,setScopeId:g=ot,insertStaticContent:A}=e,y=(f,h,m,R=null,x=null,S=null,O=void 0,N=null,w=!!h.dynamicChildren)=>{if(f===h)return;f&&!Xt(f,h)&&(R=E(f),Me(f,x,S,!0),f=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:T,ref:U,shapeFlag:M}=h;switch(T){case yi:I(f,h,m,R);break;case ut:P(f,h,m,R);break;case Gn:f==null&&v(h,m,R,O);break;case Pe:Ee(f,h,m,R,x,S,O,N,w);break;default:M&1?k(f,h,m,R,x,S,O,N,w):M&6?xe(f,h,m,R,x,S,O,N,w):(M&64||M&128)&&T.process(f,h,m,R,x,S,O,N,w,F)}U!=null&&x?Rn(U,f&&f.ref,S,h||f,!h):U==null&&f&&f.ref!=null&&Rn(f.ref,null,S,f,!0)},I=(f,h,m,R)=>{if(f==null)i(h.el=l(h.children),m,R);else{const x=h.el=f.el;h.children!==f.children&&u(x,h.children)}},P=(f,h,m,R)=>{f==null?i(h.el=c(h.children||""),m,R):h.el=f.el},v=(f,h,m,R)=>{[f.el,f.anchor]=A(f.children,h,m,R,f.el,f.anchor)},C=({el:f,anchor:h},m,R)=>{let x;for(;f&&f!==h;)x=p(f),i(f,m,R),f=x;i(h,m,R)},b=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},k=(f,h,m,R,x,S,O,N,w)=>{if(h.type==="svg"?O="svg":h.type==="math"&&(O="mathml"),f==null)q(h,m,R,x,S,O,N,w);else{const T=f.el&&f.el._isVueCE?f.el:null;try{T&&T._beginPatch(),B(f,h,x,S,O,N,w)}finally{T&&T._endPatch()}}},q=(f,h,m,R,x,S,O,N)=>{let w,T;const{props:U,shapeFlag:M,transition:j,dirs:K}=f;if(w=f.el=o(f.type,S,U&&U.is,U),M&8?a(w,f.children):M&16&&V(f.children,w,null,R,x,ki(f,S),O,N),K&&$t(f,null,R,"created"),D(w,f,f.scopeId,O,R),U){for(const oe in U)oe!=="value"&&!yn(oe)&&r(w,oe,null,U[oe],S,R);"value"in U&&r(w,"value",null,U.value,S),(T=U.onVnodeBeforeMount)&&He(T,R,f)}K&&$t(f,null,R,"beforeMount");const J=Aa(x,j);J&&j.beforeEnter(w),i(w,h,m),((T=U&&U.onVnodeMounted)||J||K)&&ve(()=>{try{T&&He(T,R,f),J&&j.enter(w),K&&$t(f,null,R,"mounted")}finally{}},x)},D=(f,h,m,R,x)=>{if(m&&g(f,m),R)for(let S=0;S<R.length;S++)g(f,R[S]);if(x){let S=x.subTree;if(h===S||ei(S.type)&&(S.ssContent===h||S.ssFallback===h)){const O=x.vnode;D(f,O,O.scopeId,O.slotScopeIds,x.parent)}}},V=(f,h,m,R,x,S,O,N,w=0)=>{for(let T=w;T<f.length;T++){const U=f[T]=N?gt(f[T]):it(f[T]);y(null,U,h,m,R,x,S,O,N)}},B=(f,h,m,R,x,S,O)=>{const N=h.el=f.el;let{patchFlag:w,dynamicChildren:T,dirs:U}=h;w|=f.patchFlag&16;const M=f.props||le,j=h.props||le;let K;if(m&&Mt(m,!1),(K=j.onVnodeBeforeUpdate)&&He(K,m,h,f),U&&$t(h,f,m,"beforeUpdate"),m&&Mt(m,!0),T&&(!f.dynamicChildren||f.dynamicChildren.length!==T.length)&&(w=0,O=!1,T=null),(M.innerHTML&&j.innerHTML==null||M.textContent&&j.textContent==null)&&a(N,""),T?X(f.dynamicChildren,T,N,m,R,ki(h,x),S):O||Z(f,h,N,null,m,R,ki(h,x),S,!1),w>0){if(w&16)ue(N,M,j,m,x);else if(w&2&&M.class!==j.class&&r(N,"class",null,j.class,x),w&4&&r(N,"style",M.style,j.style,x),w&8){const J=h.dynamicProps;for(let oe=0;oe<J.length;oe++){const se=J[oe],pe=M[se],Se=j[se];(Se!==pe||se==="value")&&r(N,se,pe,Se,x,m)}}w&1&&f.children!==h.children&&a(N,h.children)}else!O&&T==null&&ue(N,M,j,m,x);((K=j.onVnodeUpdated)||U)&&ve(()=>{K&&He(K,m,h,f),U&&$t(h,f,m,"updated")},R)},X=(f,h,m,R,x,S,O)=>{for(let N=0;N<h.length;N++){const w=f[N],T=h[N],U=w.el&&(w.type===Pe||!Xt(w,T)||w.shapeFlag&198)?d(w.el):m;y(w,T,U,null,R,x,S,O,!0)}},ue=(f,h,m,R,x)=>{if(h!==m){if(h!==le)for(const S in h)!yn(S)&&!(S in m)&&r(f,S,h[S],null,x,R);for(const S in m){if(yn(S))continue;const O=m[S],N=h[S];O!==N&&S!=="value"&&r(f,S,N,O,x,R)}"value"in m&&r(f,"value",h.value,m.value,x)}},Ee=(f,h,m,R,x,S,O,N,w)=>{const T=h.el=f?f.el:l(""),U=h.anchor=f?f.anchor:l("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:K}=h;K&&(N=N?N.concat(K):K),f==null?(i(T,m,R),i(U,m,R),V(h.children||[],m,U,x,S,O,N,w)):M>0&&M&64&&j&&f.dynamicChildren&&f.dynamicChildren.length===j.length?(X(f.dynamicChildren,j,m,x,S,O,N),(h.key!=null||x&&h===x.subTree)&&ws(f,h,!0)):Z(f,h,m,U,x,S,O,N,w)},xe=(f,h,m,R,x,S,O,N,w)=>{h.slotScopeIds=N,f==null?h.shapeFlag&512?x.ctx.activate(h,m,R,O,w):We(h,m,R,x,S,O,w):Ct(f,h,w)},We=(f,h,m,R,x,S,O)=>{const N=f.component=$a(f,R,x);if(No(f)&&(N.ctx.renderer=F),Ma(N,!1,O),N.asyncDep){if(x&&x.registerDep(N,fe,O),!f.el){const w=N.subTree=ge(ut);P(null,w,h,m),f.placeholder=w.el}}else fe(N,f,h,m,x,S,O)},Ct=(f,h,m)=>{const R=h.component=f.component;if(pa(f,h,m))if(R.asyncDep&&!R.asyncResolved){W(R,h,m);return}else R.next=h,R.update();else h.el=f.el,R.vnode=h},fe=(f,h,m,R,x,S,O)=>{const N=()=>{if(f.isMounted){let{next:M,bu:j,u:K,parent:J,vnode:oe}=f;{const Ze=Qo(f);if(Ze){M&&(M.el=oe.el,W(f,M,O)),Ze.asyncDep.then(()=>{ve(()=>{f.isUnmounted||T()},x)});return}}let se=M,pe;Mt(f,!1),M?(M.el=oe.el,W(f,M,O)):M=oe,j&&Zt(j),(pe=M.props&&M.props.onVnodeBeforeUpdate)&&He(pe,J,M,oe),Mt(f,!0);const Se=tr(f),Qe=f.subTree;f.subTree=Se,y(Qe,Se,d(Qe.el),E(Qe),f,x,S),M.el=Se.el,se===null&&ga(f,Se.el),K&&ve(K,x),(pe=M.props&&M.props.onVnodeUpdated)&&ve(()=>He(pe,J,M,oe),x)}else{let M;const{el:j,props:K}=h,{bm:J,m:oe,parent:se,root:pe,type:Se}=f,Qe=wt(h);Mt(f,!1),J&&Zt(J),!Qe&&(M=K&&K.onVnodeBeforeMount)&&He(M,se,h),Mt(f,!0);{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(Se,f.parent?f.parent.type:void 0);const Ze=f.subTree=tr(f);y(null,Ze,m,R,f,x,S),h.el=Ze.el}if(oe&&ve(oe,x),!Qe&&(M=K&&K.onVnodeMounted)){const Ze=h;ve(()=>He(M,se,Ze),x)}(h.shapeFlag&256||se&&wt(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&ve(f.a,x),f.isMounted=!0,h=m=R=null}};f.scope.on();const w=f.effect=new to(N);f.scope.off();const T=f.update=w.run.bind(w),U=f.job=w.runIfDirty.bind(w);U.i=f,U.id=f.uid,w.scheduler=()=>Rs(U),Mt(f,!0),T()},W=(f,h,m)=>{h.component=f;const R=f.vnode.props;f.vnode=h,f.next=null,_a(f,h.props,R,m),Ca(f,h.children,m),ct(),Gs(f),at()},Z=(f,h,m,R,x,S,O,N,w=!1)=>{const T=f&&f.children,U=f?f.shapeFlag:0,M=h.children,{patchFlag:j,shapeFlag:K}=h;if(j>0){if(j&128){St(T,M,m,R,x,S,O,N,w);return}else if(j&256){ft(T,M,m,R,x,S,O,N,w);return}}K&8?(U&16&&je(T,x,S),M!==T&&a(m,M)):U&16?K&16?St(T,M,m,R,x,S,O,N,w):je(T,x,S,!0):(U&8&&a(m,""),K&16&&V(M,m,R,x,S,O,N,w))},ft=(f,h,m,R,x,S,O,N,w)=>{f=f||Yt,h=h||Yt;const T=f.length,U=h.length,M=Math.min(T,U);let j;for(j=0;j<M;j++){const K=h[j]=w?gt(h[j]):it(h[j]);y(f[j],K,m,null,x,S,O,N,w)}T>U?je(f,x,S,!0,!1,M):V(h,m,R,x,S,O,N,w,M)},St=(f,h,m,R,x,S,O,N,w)=>{let T=0;const U=h.length;let M=f.length-1,j=U-1;for(;T<=M&&T<=j;){const K=f[T],J=h[T]=w?gt(h[T]):it(h[T]);if(Xt(K,J))y(K,J,m,null,x,S,O,N,w);else break;T++}for(;T<=M&&T<=j;){const K=f[M],J=h[j]=w?gt(h[j]):it(h[j]);if(Xt(K,J))y(K,J,m,null,x,S,O,N,w);else break;M--,j--}if(T>M){if(T<=j){const K=j+1,J=K<U?h[K].el:R;for(;T<=j;)y(null,h[T]=w?gt(h[T]):it(h[T]),m,J,x,S,O,N,w),T++}}else if(T>j)for(;T<=M;)Me(f[T],x,S,!0),T++;else{const K=T,J=T,oe=new Map;for(T=J;T<=j;T++){const ke=h[T]=w?gt(h[T]):it(h[T]);ke.key!=null&&oe.set(ke.key,T)}let se,pe=0;const Se=j-J+1;let Qe=!1,Ze=0;const dn=new Array(Se);for(T=0;T<Se;T++)dn[T]=0;for(T=K;T<=M;T++){const ke=f[T];if(pe>=Se){Me(ke,x,S,!0);continue}let et;if(ke.key!=null)et=oe.get(ke.key);else for(se=J;se<=j;se++)if(dn[se-J]===0&&Xt(ke,h[se])){et=se;break}et===void 0?Me(ke,x,S,!0):(dn[et-J]=T+1,et>=Ze?Ze=et:Qe=!0,y(ke,h[et],m,null,x,S,O,N,w),pe++)}const Vs=Qe?Ea(dn):Yt;for(se=Vs.length-1,T=Se-1;T>=0;T--){const ke=J+T,et=h[ke],Bs=h[ke+1],Fs=ke+1<U?Bs.el||Zo(Bs):R;dn[T]===0?y(null,et,m,Fs,x,S,O,N,w):Qe&&(se<0||T!==Vs[se]?Ye(et,m,Fs,2):se--)}}},Ye=(f,h,m,R,x=null)=>{const{el:S,type:O,transition:N,children:w,shapeFlag:T}=f;if(T&6){Ye(f.component.subTree,h,m,R);return}if(T&128){f.suspense.move(h,m,R);return}if(T&64){O.move(f,h,m,F);return}if(O===Pe){i(S,h,m);for(let M=0;M<w.length;M++)Ye(w[M],h,m,R);i(f.anchor,h,m);return}if(O===Gn){C(f,h,m);return}if(R!==2&&T&1&&N)if(R===0)N.persisted&&!S[Pi]?i(S,h,m):(N.beforeEnter(S),i(S,h,m),ve(()=>N.enter(S),x));else{const{leave:M,delayLeave:j,afterLeave:K}=N,J=()=>{f.ctx.isUnmounted?s(S):i(S,h,m)},oe=()=>{const se=S._isLeaving||!!S[Pi];S._isLeaving&&S[Pi](!0),N.persisted&&!se?J():M(S,()=>{J(),K&&K()})};j?j(S,J,oe):oe()}else i(S,h,m)},Me=(f,h,m,R=!1,x=!1)=>{const{type:S,props:O,ref:N,children:w,dynamicChildren:T,shapeFlag:U,patchFlag:M,dirs:j,cacheIndex:K,memo:J}=f;if(M===-2&&(x=!1),N!=null&&(ct(),Rn(N,null,m,f,!0),at()),K!=null&&(h.renderCache[K]=void 0),U&256){h.ctx.deactivate(f);return}const oe=U&1&&j,se=!wt(f);let pe;if(se&&(pe=O&&O.onVnodeBeforeUnmount)&&He(pe,h,f),U&6)Pt(f.component,m,R);else{if(U&128){f.suspense.unmount(m,R);return}oe&&$t(f,null,h,"beforeUnmount"),U&64?f.type.remove(f,h,m,F,R):T&&!T.hasOnce&&(S!==Pe||M>0&&M&64)?je(T,h,m,!1,!0):(S===Pe&&M&384||!x&&U&16)&&je(w,h,m),R&&Ut(f)}const Se=J!=null&&K==null;(se&&(pe=O&&O.onVnodeUnmounted)||oe||Se)&&ve(()=>{pe&&He(pe,h,f),oe&&$t(f,null,h,"unmounted"),Se&&(f.el=null)},m)},Ut=f=>{const{type:h,el:m,anchor:R,transition:x}=f;if(h===Pe){Kt(m,R);return}if(h===Gn){b(f);return}const S=()=>{s(m),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(f.shapeFlag&1&&x&&!x.persisted){const{leave:O,delayLeave:N}=x,w=()=>O(m,S);N?N(f.el,S,w):w()}else S()},Kt=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},Pt=(f,h,m)=>{const{bum:R,scope:x,job:S,subTree:O,um:N,m:w,a:T}=f;Zn(w),Zn(T),R&&Zt(R),x.stop(),S&&(S.flags|=8,Me(O,f,h,m)),N&&ve(N,h),ve(()=>{f.isUnmounted=!0},h)},je=(f,h,m,R=!1,x=!1,S=0)=>{for(let O=S;O<f.length;O++)Me(f[O],h,m,R,x)},E=f=>{if(f.shapeFlag&6)return E(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),m=h&&h[To];return m?p(m):h};let L=!1;const $=(f,h,m)=>{let R;f==null?h._vnode&&(Me(h._vnode,null,null,!0),R=h._vnode.component):y(h._vnode||null,f,h,null,null,null,m),h._vnode=f,L||(L=!0,Gs(R),So(),L=!1)},F={p:y,um:Me,m:Ye,r:Ut,mt:We,mc:V,pc:Z,pbc:X,n:E,o:e};return{render:$,hydrate:void 0,createApp:ca($)}}function ki({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Mt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Aa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ws(e,t,n=!1){const i=e.children,s=t.children;if(H(i)&&H(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=gt(s[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ws(o,l)),l.type===yi&&(l.patchFlag===-1&&(l=s[r]=gt(l)),l.el=o.el),l.type===ut&&!l.el&&(l.el=o.el)}}function Ea(e){const t=e.slice(),n=[0];let i,s,r,o,l;const c=e.length;for(i=0;i<c;i++){const u=e[i];if(u!==0){if(s=n[n.length-1],e[s]<u){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,e[n[l]]<u?r=l+1:o=l;u<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Qo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qo(t)}function Zn(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Zo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Zo(t.subTree):null}const ei=e=>e.__isSuspense;function xa(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):$c(e)}const Pe=Symbol.for("v-fgt"),yi=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Gn=Symbol.for("v-stc"),En=[];let Ve=null;function be(e=!1){En.push(Ve=e?null:[])}function Ta(){En.pop(),Ve=En[En.length-1]||null}let Pn=1;function ti(e,t=!1){Pn+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function el(e){return e.dynamicChildren=Pn>0?Ve||Yt:null,Ta(),Pn>0&&Ve&&Ve.push(e),e}function De(e,t,n,i,s,r){return el(Q(e,t,n,i,s,r,!0))}function rn(e,t,n,i,s){return el(ge(e,t,n,i,s,!0))}function on(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const tl=({key:e})=>e??null,Wn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ae(e)||de(e)||G(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function Q(e,t=null,n=null,i=0,s=null,r=e===Pe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tl(t),ref:t&&Wn(t),scopeId:Ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return l?(ni(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),Pn>0&&!o&&Ve&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ve.push(c),c}const ge=Ia;function Ia(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===Do)&&(e=ut),on(e)){const l=jt(e,t,!0);return n&&ni(l,n),Pn>0&&!r&&Ve&&(l.shapeFlag&6?Ve[Ve.indexOf(e)]=l:Ve.push(l)),l.patchFlag=-2,l}if(Va(e)&&(e=e.__vccOpts),t){t=wa(t);let{class:l,style:c}=t;l&&!ae(l)&&(t.class=It(l)),ne(c)&&(hi(c)&&!H(c)&&(c=Ae({},c)),t.style=ps(c))}const o=ae(e)?1:ei(e)?128:Bc(e)?64:ne(e)?4:G(e)?2:0;return Q(e,t,n,i,s,o,r,!0)}function wa(e){return e?hi(e)||Wo(e)?Ae({},e):e:null}function jt(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:c}=e,u=t?Na(s||{},t):s,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&tl(u),ref:t&&t.ref?n&&r?H(r)?r.concat(Wn(t)):[r,Wn(t)]:Wn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&_i(a,c.clone(a)),a}function nl(e=" ",t=0){return ge(yi,null,e,t)}function xh(e,t){const n=ge(Gn,null,e);return n.staticCount=t,n}function il(e="",t=!1){return t?(be(),rn(ut,null,e)):ge(ut,null,e)}function it(e){return e==null||typeof e=="boolean"?ge(ut):H(e)?ge(Pe,null,e.slice()):on(e)?gt(e):ge(yi,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function ni(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ni(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Wo(t)?t._ctx=Re:s===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(G(t)){if(i&65){ni(e,{default:t});return}t={default:t,_ctx:Re},n=32}else t=String(t),i&64?(n=16,t=[nl(t)]):n=8;e.children=t,e.shapeFlag|=n}function Na(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=It([t.class,i.class]));else if(s==="style")t.style=ps([t.style,i.style]);else if(ri(s)){const r=t[s],o=i[s];o&&r!==o&&!(H(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!oi(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function He(e,t,n,i=null){ze(e,t,7,[n,i])}const Oa=jo();let Pa=0;function $a(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Oa,r={uid:Pa++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xo(i,s),emitsOptions:Ho(i,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:i.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ua.bind(null,r),e.ce&&e.ce(r),r}let Ie=null;const Ns=()=>Ie||Re;let ii,ns;{const e=fi(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ii=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),ns=t("__VUE_SSR_SETTERS__",n=>$n=n)}const Ln=e=>{const t=Ie;return ii(e),e.scope.on(),()=>{e.scope.off(),ii(t)}},sr=()=>{Ie&&Ie.scope.off(),ii(null)};function sl(e){return e.vnode.shapeFlag&4}let $n=!1;function Ma(e,t=!1,n=!1){t&&ns(t);const{props:i,children:s}=e.vnode,r=sl(e);ma(e,i,r,t),ya(e,s,n||t);const o=r?ka(e,t):void 0;return t&&ns(!1),o}function ka(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ta);const{setup:i}=n;if(i){ct();const s=e.setupContext=i.length>1?La(e):null,r=Ln(e),o=Dn(i,e,0,[e.props,s]),l=Gr(o);if(at(),r(),(l||e.sp)&&!wt(e)&&wo(e),l){if(o.then(sr,sr),t)return o.then(c=>{rr(e,c)}).catch(c=>{gi(c,e,0)});e.asyncDep=o}else rr(e,o)}else rl(e)}function rr(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=vo(t)),rl(e)}function rl(e,t,n){const i=e.type;e.render||(e.render=i.render||ot);{const s=Ln(e);ct();try{na(e)}finally{at(),s()}}}const Da={get(e,t){return Te(e,"get",""),e[t]}};function La(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Da),slots:e.slots,emit:e.emit,expose:t}}function Ci(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vo(Ss(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in An)return An[n](e)},has(t,n){return n in t||n in An}})):e.proxy}function is(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function Va(e){return G(e)&&"__vccOpts"in e}const Le=(e,t)=>Ic(e,t,$n);function ol(e,t,n){try{ti(-1);const i=arguments.length;return i===2?ne(t)&&!H(t)?on(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&on(n)&&(n=[n]),ge(e,t,n))}finally{ti(1)}}const Ba="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ss;const or=typeof window<"u"&&window.trustedTypes;if(or)try{ss=or.createPolicy("vue",{createHTML:e=>e})}catch{}const ll=ss?e=>ss.createHTML(e):e=>e,Fa="http://www.w3.org/2000/svg",ja="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,lr=pt&&pt.createElement("template"),Ha={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?pt.createElementNS(Fa,e):t==="mathml"?pt.createElementNS(ja,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{lr.innerHTML=ll(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=lr.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ua=Symbol("_vtc");function Ka(e,t,n){const i=e[Ua];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const si=Symbol("_vod"),cl=Symbol("_vsh"),Ga={name:"show",beforeMount(e,{value:t},{transition:n}){e[si]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):pn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),pn(e,!0),i.enter(e)):i.leave(e,()=>{pn(e,!1)}):pn(e,t))},beforeUnmount(e,{value:t}){pn(e,t)}};function pn(e,t){e.style.display=t?e[si]:"none",e[cl]=!t}const Wa=Symbol(""),qa=/(?:^|;)\s*display\s*:/;function Xa(e,t,n){const i=e.style,s=ae(n);let r=!1;if(n&&!s){if(t)if(ae(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&bn(i,l,"")}else for(const o in t)n[o]==null&&bn(i,o,"");for(const o in n){o==="display"&&(r=!0);const l=n[o];l!=null?Ja(e,o,!ae(t)&&t?t[o]:void 0,l)||bn(i,o,l):bn(i,o,"")}}else if(s){if(t!==n){const o=i[Wa];o&&(n+=";"+o),i.cssText=n,r=qa.test(n)}}else t&&e.removeAttribute("style");si in e&&(e[si]=r?i.display:"",e[cl]&&(i.display="none"))}const cr=/\s*!important$/;function bn(e,t,n){if(H(n))n.forEach(i=>bn(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=za(e,t);cr.test(n)?e.setProperty(Ht(i),n.replace(cr,""),"important"):e[i]=n}}const ar=["Webkit","Moz","ms"],Di={};function za(e,t){const n=Di[t];if(n)return n;let i=$e(t);if(i!=="filter"&&i in e)return Di[t]=i;i=ai(i);for(let s=0;s<ar.length;s++){const r=ar[s]+i;if(r in e)return Di[t]=r}return t}function Ja(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ae(i)&&n===i}const ur="http://www.w3.org/1999/xlink";function fr(e,t,n,i,s,r=Zl(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ur,t.slice(6,t.length)):e.setAttributeNS(ur,t,n):n==null||r&&!zr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Fe(n)?String(n):n)}function dr(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ll(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=zr(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function vt(e,t,n,i){e.addEventListener(t,n,i)}function Ya(e,t,n,i){e.removeEventListener(t,n,i)}const hr=Symbol("_vei");function Qa(e,t,n,i,s=null){const r=e[hr]||(e[hr]={}),o=r[t];if(i&&o)o.value=i;else{const[l,c]=tu(t);if(i){const u=r[t]=su(i,s);vt(e,l,u,c)}else o&&(Ya(e,l,o,c),r[t]=void 0)}}const Za=/(Once|Passive|Capture)$/,eu=/^on:?(?:Once|Passive|Capture)$/;function tu(e){let t,n;for(;(n=e.match(Za))&&!eu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Li=0;const nu=Promise.resolve(),iu=()=>Li||(nu.then(()=>Li=0),Li=Date.now());function su(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(H(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),l=[i];for(let c=0;c<o.length&&!i._stopped;c++){const u=o[c];u&&ze(u,t,5,l)}}else ze(s,t,5,[i])};return n.value=e,n.attached=iu(),n}const pr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ru=(e,t,n,i,s,r)=>{const o=s==="svg";t==="class"?Ka(e,i,o):t==="style"?Xa(e,n,i):ri(t)?oi(t)||Qa(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ou(e,t,i,o))?(dr(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fr(e,t,i,o,r,t!=="value")):e._isVueCE&&(lu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ae(i)))?dr(e,$e(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),fr(e,t,i,o))};function ou(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&pr(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pr(t)&&ae(n)?!1:t in e}function lu(e,t){const n=e._def.props;if(!n)return!1;const i=$e(t);return Array.isArray(n)?n.some(s=>$e(s)===i):Object.keys(n).some(s=>$e(s)===i)}const Ot=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Zt(t,n):t};function cu(e){e.target.composing=!0}function gr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ge=Symbol("_assign");function mr(e,t,n){return t&&(e=e.trim()),n&&(e=ui(e)),e}const Th={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[Ge]=Ot(s);const r=i||s.props&&s.props.type==="number";vt(e,t?"change":"input",o=>{o.target.composing||e[Ge](mr(e.value,n,r))}),(n||r)&&vt(e,"change",()=>{e.value=mr(e.value,n,r)}),t||(vt(e,"compositionstart",cu),vt(e,"compositionend",gr),vt(e,"change",gr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(e[Ge]=Ot(o),e.composing)return;const l=(r||e.type==="number")&&!/^0\d/.test(e.value)?ui(e.value):e.value,c=t??"";if(l===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(i&&t===n||s&&e.value.trim()===c)||(e.value=c)}},Ih={deep:!0,created(e,t,n){e[Ge]=Ot(n),vt(e,"change",()=>{const i=e._modelValue,s=ln(e),r=e.checked,o=e[Ge];if(H(i)){const l=gs(i,s),c=l!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const u=[...i];u.splice(l,1),o(u)}}else if(un(i)){const l=new Set(i);r?l.add(s):l.delete(s),o(l)}else o(al(e,r))})},mounted:_r,beforeUpdate(e,t,n){e[Ge]=Ot(n),_r(e,t,n)}};function _r(e,{value:t,oldValue:n},i){e._modelValue=t;let s;if(H(t))s=gs(t,i.props.value)>-1;else if(un(t))s=t.has(i.props.value);else{if(t===n)return;s=Nt(t,al(e,!0))}e.checked!==s&&(e.checked=s)}const wh={created(e,{value:t},n){e.checked=Nt(t,n.props.value),e[Ge]=Ot(n),vt(e,"change",()=>{e[Ge](ln(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e[Ge]=Ot(i),t!==n&&(e.checked=Nt(t,i.props.value))}},Nh={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=un(t);vt(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?ui(ln(o)):ln(o));e[Ge](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,mi(()=>{e._assigning=!1})}),e[Ge]=Ot(i)},mounted(e,{value:t}){vr(e,t)},beforeUpdate(e,t,n){e[Ge]=Ot(n)},updated(e,{value:t}){e._assigning||vr(e,t)}};function vr(e,t){const n=e.multiple,i=H(t);if(!(n&&!i&&!un(t))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],l=ln(o);if(n)if(i){const c=typeof l;c==="string"||c==="number"?o.selected=t.some(u=>String(u)===String(l)):o.selected=gs(t,l)>-1}else o.selected=t.has(l);else if(Nt(ln(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ln(e){return"_value"in e?e._value:e.value}function al(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const au=["ctrl","shift","alt","meta"],uu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>au.some(n=>e[`${n}Key`]&&!t.includes(n))},fu=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const l=uu[t[o]];if(l&&l(s,t))return}return e(s,...r)}))},du=Ae({patchProp:ru},Ha);let br;function hu(){return br||(br=Sa(du))}const pu=((...e)=>{const t=hu().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=mu(i);if(!s)return;const r=t._component;!G(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function gu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mu(e){return ae(e)?document.querySelector(e):e}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ul;const Si=e=>ul=e,fl=Symbol();function rs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var xn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(xn||(xn={}));function _u(){const e=Zr(!0),t=e.run(()=>pi({}));let n=[],i=[];const s=Ss({install(r){Si(s),s._a=r,r.provide(fl,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const dl=()=>{};function yr(e,t,n,i=dl){e.add(t);const s=()=>{e.delete(t)&&i()};return!n&&eo()&&tc(s),s}function Wt(e,...t){e.forEach(n=>{n(...t)})}const vu=e=>e(),Cr=Symbol(),Vi=Symbol();function os(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,i)=>e.set(i,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const i=t[n],s=e[n];rs(s)&&rs(i)&&e.hasOwnProperty(n)&&!de(i)&&!lt(i)?e[n]=os(s,i):e[n]=i}return e}const bu=Symbol();function yu(e){return!rs(e)||!Object.prototype.hasOwnProperty.call(e,bu)}const{assign:Et}=Object;function Cu(e){return!!(de(e)&&e.effect)}function Su(e,t,n,i){const{state:s,actions:r,getters:o}=t,l=n.state.value[e];let c;function u(){l||(n.state.value[e]=s?s():{});const a=Rc(n.state.value[e]);return Et(a,r,Object.keys(o||{}).reduce((d,p)=>(d[p]=Ss(Le(()=>{Si(n);const g=n._s.get(e);return o[p].call(g,g)})),d),{}))}return c=hl(e,u,t,n,i,!0),c}function hl(e,t,n={},i,s,r){let o;const l=Et({actions:{}},n),c={deep:!0};let u,a,d=new Set,p=new Set,g;const A=i.state.value[e];!r&&!A&&(i.state.value[e]={});let y;function I(V){let B;u=a=!1,typeof V=="function"?(V(i.state.value[e]),B={type:xn.patchFunction,storeId:e,events:g}):(os(i.state.value[e],V),B={type:xn.patchObject,payload:V,storeId:e,events:g});const X=y=Symbol();mi().then(()=>{y===X&&(u=!0)}),a=!0,Wt(d,B,i.state.value[e])}const P=r?function(){const{state:B}=n,X=B?B():{};this.$patch(ue=>{Et(ue,X)})}:dl;function v(){o.stop(),d.clear(),p.clear(),i._s.delete(e)}const C=(V,B="")=>{if(Cr in V)return V[Vi]=B,V;const X=function(){Si(i);const ue=Array.from(arguments),Ee=new Set,xe=new Set;function We(W){Ee.add(W)}function Ct(W){xe.add(W)}Wt(p,{args:ue,name:X[Vi],store:k,after:We,onError:Ct});let fe;try{fe=V.apply(this&&this.$id===e?this:k,ue)}catch(W){throw Wt(xe,W),W}return fe instanceof Promise?fe.then(W=>(Wt(Ee,W),W)).catch(W=>(Wt(xe,W),Promise.reject(W))):(Wt(Ee,fe),fe)};return X[Cr]=!0,X[Vi]=B,X},b={_p:i,$id:e,$onAction:yr.bind(null,p),$patch:I,$reset:P,$subscribe(V,B={}){const X=yr(d,V,B.detached,()=>ue()),ue=o.run(()=>Bt(()=>i.state.value[e],Ee=>{(B.flush==="sync"?a:u)&&V({storeId:e,type:xn.direct,events:g},Ee)},Et({},c,B)));return X},$dispose:v},k=kn(b);i._s.set(e,k);const D=(i._a&&i._a.runWithContext||vu)(()=>i._e.run(()=>(o=Zr()).run(()=>t({action:C}))));for(const V in D){const B=D[V];if(de(B)&&!Cu(B)||lt(B))r||(A&&yu(B)&&(de(B)?B.value=A[V]:os(B,A[V])),i.state.value[e][V]=B);else if(typeof B=="function"){const X=C(B,V);D[V]=X,l.actions[V]=B}}return Et(k,D),Et(Y(k),D),Object.defineProperty(k,"$state",{get:()=>i.state.value[e],set:V=>{I(B=>{Et(B,V)})}}),i._p.forEach(V=>{Et(k,o.run(()=>V({store:k,app:i._a,pinia:i,options:l})))}),A&&r&&n.hydrate&&n.hydrate(k.$state,A),u=!0,a=!0,k}/*! #__NO_SIDE_EFFECTS__ */function Ri(e,t,n){let i;const s=typeof t=="function";i=s?n:t;function r(o,l){const c=kc();return o=o||(c?Ke(fl,null):null),o&&Si(o),o=ul,o._s.has(e)||(s?hl(e,t,i,o):Su(e,i,o)),o._s.get(e)}return r.$id=e,r}function Oh(e){const t=Y(e),n={};for(const i in t){const s=t[i];s.effect?n[i]=Le({get:()=>e[i],set(r){e[i]=r}}):(de(s)||lt(s))&&(n[i]=xc(e,i))}return n}const Ru=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},Au={},Eu={class:"h-full"};function xu(e,t){const n=xs("RouterView");return be(),De("div",Eu,[ge(n)])}const Tu=Ru(Au,[["render",xu]]),Iu="modulepreload",wu=function(e,t){return new URL(e,t).href},Sr={},re=function(t,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(a){return Promise.all(a.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(a=>{if(a=wu(a,i),a in Sr)return;Sr[a]=!0;const d=a.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!i)for(let y=l.length-1;y>=0;y--){const I=l[y];if(I.href===a&&(!d||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${p}`))return;const A=document.createElement("link");if(A.rel=d?"stylesheet":Iu,d||(A.as="script"),A.crossOrigin="",A.href=a,u&&A.setAttribute("nonce",u),document.head.appendChild(A),d)return new Promise((y,I)=>{A.addEventListener("load",y),A.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const zt=typeof document<"u";function pl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&pl(e.default)}const ee=Object.assign;function Bi(e,t){const n={};for(const i in t){const s=t[i];n[i]=Je(s)?s.map(e):e(s)}return n}const Tn=()=>{},Je=Array.isArray;function Rr(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}const gl=/#/g,Ou=/&/g,Pu=/\//g,$u=/=/g,Mu=/\?/g,ml=/\+/g,ku=/%5B/g,Du=/%5D/g,_l=/%5E/g,Lu=/%60/g,vl=/%7B/g,Vu=/%7C/g,bl=/%7D/g,Bu=/%20/g;function Os(e){return e==null?"":encodeURI(""+e).replace(Vu,"|").replace(ku,"[").replace(Du,"]")}function Fu(e){return Os(e).replace(vl,"{").replace(bl,"}").replace(_l,"^")}function ls(e){return Os(e).replace(ml,"%2B").replace(Bu,"+").replace(gl,"%23").replace(Ou,"%26").replace(Lu,"`").replace(vl,"{").replace(bl,"}").replace(_l,"^")}function ju(e){return ls(e).replace($u,"%3D")}function Hu(e){return Os(e).replace(gl,"%23").replace(Mu,"%3F")}function Uu(e){return Hu(e).replace(Pu,"%2F")}function Mn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Ku=/\/$/,Gu=e=>e.replace(Ku,"");function Fi(e,t,n="/"){let i,s={},r="",o="";const l=t.indexOf("#");let c=t.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(i=t.slice(0,c),r=t.slice(c,l>0?l:t.length),s=e(r.slice(1))),l>=0&&(i=i||t.slice(0,l),o=t.slice(l,t.length)),i=zu(i??t,n),{fullPath:i+r+o,path:i,query:s,hash:Mn(o)}}function Wu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ar(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qu(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&cn(t.matched[i],n.matched[s])&&yl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function yl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Xu(e[n],t[n]))return!1;return!0}function Xu(e,t){return Je(e)?Er(e,t):Je(t)?Er(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Er(e,t){return Je(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function zu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let cs=(function(e){return e.pop="pop",e.push="push",e})({}),ji=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Ju(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gu(e)}const Yu=/^[^#]+#/;function Qu(e,t){return e.replace(Yu,"#")+t}function Zu(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Ai=()=>({left:window.scrollX,top:window.scrollY});function ef(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Zu(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function xr(e,t){return(history.state?history.state.position-t:-1)+e}const as=new Map;function tf(e,t){as.set(e,t)}function nf(e){const t=as.get(e);return as.delete(e),t}function sf(e){return typeof e=="string"||e&&typeof e=="object"}function Cl(e){return typeof e=="string"||typeof e=="symbol"}let he=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Sl=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function an(e,t){return ee(new Error,{type:e,[Sl]:!0},t)}function ht(e,t){return e instanceof Error&&Sl in e&&(t==null||!!(e.type&t))}const rf=["params","query","hash"];function of(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of rf)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function lf(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(ml," "),r=s.indexOf("="),o=Mn(r<0?s:s.slice(0,r)),l=r<0?null:Mn(s.slice(r+1));if(o in t){let c=t[o];Je(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function Tr(e){let t="";for(let n in e){const i=e[n];if(n=ju(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Je(i)?i.map(s=>s&&ls(s)):[i&&ls(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function cf(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Je(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const af=Symbol(""),Ir=Symbol(""),Ei=Symbol(""),Ps=Symbol(""),us=Symbol("");function gn(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=p=>{p===!1?c(an(he.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?c(p):sf(p)?c(an(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&i.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),l())},a=r(()=>e.call(i&&i.instances[s],t,n,u));let d=Promise.resolve(a);e.length<3&&(d=d.then(u)),d.catch(p=>c(p))})}function Hi(e,t,n,i,s=r=>r()){const r=[];for(const o of e)for(const l in o.components){let c=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(pl(c)){const u=(c.__vccOpts||c)[t];u&&r.push(Tt(u,n,i,o,l,s))}else{let u=c();r.push(()=>u.then(a=>{if(!a)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Nu(a)?a.default:a;o.mods[l]=a,o.components[l]=d;const p=(d.__vccOpts||d)[t];return p&&Tt(p,n,i,o,l,s)()}))}}return r}function uf(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(u=>cn(u,l))?i.push(l):n.push(l));const c=e.matched[o];c&&(t.matched.find(u=>cn(u,c))||s.push(c))}return[n,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ff=()=>location.protocol+"//"+location.host;function Rl(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let o=s.includes(e.slice(r))?e.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Ar(l,"")}return Ar(n,e)+i+s}function df(e,t,n,i){let s=[],r=[],o=null;const l=({state:p})=>{const g=Rl(e,location),A=n.value,y=t.value;let I=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}I=y?p.position-y.position:0}else i(g);s.forEach(P=>{P(n.value,A,{delta:I,type:cs.pop,direction:I?I>0?ji.forward:ji.back:ji.unknown})})};function c(){o=n.value}function u(p){s.push(p);const g=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return r.push(g),g}function a(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ee({},p.state,{scroll:Ai()}),"")}}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",a),document.removeEventListener("visibilitychange",a)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",a),document.addEventListener("visibilitychange",a),{pauseListeners:c,listen:u,destroy:d}}function wr(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?Ai():null}}function hf(e){const{history:t,location:n}=window,i={value:Rl(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,a){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:ff()+e+c;try{t[a?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[a?"replace":"assign"](p)}}function o(c,u){r(c,ee({},t.state,wr(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),i.value=c}function l(c,u){const a=ee({},s.value,t.state,{forward:c,scroll:Ai()});r(a.current,a,!0),r(c,ee({},wr(i.value,c,null),{position:a.position+1},u),!1),i.value=c}return{location:i,state:s,push:l,replace:o}}function pf(e){e=Ju(e);const t=hf(e),n=df(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ee({location:"",base:e,go:i,createHref:Qu.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function gf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),pf(e)}let Lt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var me=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(me||{});const mf={type:Lt.Static,value:""},_f=/[a-zA-Z0-9_]/;function vf(e){if(!e)return[[]];if(e==="/")return[[mf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=me.Static,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,c,u="",a="";function d(){u&&(n===me.Static?r.push({type:Lt.Static,value:u}):n===me.Param||n===me.ParamRegExp||n===me.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Lt.Param,value:u,regexp:a,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==me.ParamRegExp){i=n,n=me.EscapeNext;continue}switch(n){case me.Static:c==="/"?(u&&d(),o()):c===":"?(d(),n=me.Param):p();break;case me.EscapeNext:p(),n=i;break;case me.Param:c==="("?n=me.ParamRegExp:_f.test(c)?p():(d(),n=me.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case me.ParamRegExp:c===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+c:n=me.ParamRegExpEnd:a+=c;break;case me.ParamRegExpEnd:d(),n=me.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,a="";break;default:t("Unknown state");break}}return n===me.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const Nr="[^/]+?",bf={sensitive:!1,strict:!1,start:!0,end:!0};var Ne=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ne||{});const yf=/[.+*?^${}()[\]/\\]/g;function Cf(e,t){const n=ee({},bf,t),i=[];let s=n.start?"^":"";const r=[];for(const u of e){const a=u.length?[]:[Ne.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=Ne.Segment+(n.sensitive?Ne.BonusCaseSensitive:0);if(p.type===Lt.Static)d||(s+="/"),s+=p.value.replace(yf,"\\$&"),g+=Ne.Static;else if(p.type===Lt.Param){const{value:A,repeatable:y,optional:I,regexp:P}=p;r.push({name:A,repeatable:y,optional:I});const v=P||Nr;if(v!==Nr){g+=Ne.BonusCustomRegExp;try{`${v}`}catch(b){throw new Error(`Invalid custom RegExp for param "${A}" (${v}): `+b.message)}}let C=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(C=I&&u.length<2?`(?:/${C})`:"/"+C),I&&(C+="?"),s+=C,g+=Ne.Dynamic,I&&(g+=Ne.BonusOptional),y&&(g+=Ne.BonusRepeatable),v===".*"&&(g+=Ne.BonusWildcard)}a.push(g)}i.push(a)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=Ne.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const a=u.match(o),d={};if(!a)return null;for(let p=1;p<a.length;p++){const g=a[p]||"",A=r[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function c(u){let a="",d=!1;for(const p of e){(!d||!a.endsWith("/"))&&(a+="/"),d=!1;for(const g of p)if(g.type===Lt.Static)a+=g.value;else if(g.type===Lt.Param){const{value:A,repeatable:y,optional:I}=g,P=A in u?u[A]:"";if(Je(P)&&!y)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const v=Je(P)?P.join("/"):P;if(!v)if(I)p.length<2&&(a.endsWith("/")?a=a.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);a+=v}}return a||"/"}return{re:o,score:i,keys:r,parse:l,stringify:c}}function Sf(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===Ne.Static+Ne.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ne.Static+Ne.Segment?1:-1:0}function Al(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=Sf(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Or(i))return 1;if(Or(s))return-1}return s.length-i.length}function Or(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Rf={strict:!1,end:!0,sensitive:!1};function Af(e,t,n){const i=Cf(vf(e.path),n),s=ee(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ef(e,t){const n=[],i=new Map;t=Rr(Rf,t);function s(d){return i.get(d)}function r(d,p,g){const A=!g,y=$r(d);y.aliasOf=g&&g.record;const I=Rr(t,d),P=[y];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of b)P.push($r(ee({},y,{components:g?g.record.components:y.components,path:k,aliasOf:g?g.record:y})))}let v,C;for(const b of P){const{path:k}=b;if(p&&k[0]!=="/"){const q=p.record.path,D=q[q.length-1]==="/"?"":"/";b.path=p.record.path+(k&&D+k)}if(v=Af(b,p,I),g?g.alias.push(v):(C=C||v,C!==v&&C.alias.push(v),A&&d.name&&!Mr(v)&&o(d.name)),El(v)&&c(v),y.children){const q=y.children;for(let D=0;D<q.length;D++)r(q[D],v,g&&g.children[D])}g=g||v}return C?()=>{o(C)}:Tn}function o(d){if(Cl(d)){const p=i.get(d);p&&(i.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const p=If(d,n);n.splice(p,0,d),d.record.name&&!Mr(d)&&i.set(d.record.name,d)}function u(d,p){let g,A={},y,I;if("name"in d&&d.name){if(g=i.get(d.name),!g)throw an(he.MATCHER_NOT_FOUND,{location:d});I=g.record.name,A=ee(Pr(p.params,g.keys.filter(C=>!C.optional).concat(g.parent?g.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&Pr(d.params,g.keys.map(C=>C.name))),y=g.stringify(A)}else if(d.path!=null)y=d.path,g=n.find(C=>C.re.test(y)),g&&(A=g.parse(y),I=g.record.name);else{if(g=p.name?i.get(p.name):n.find(C=>C.re.test(p.path)),!g)throw an(he.MATCHER_NOT_FOUND,{location:d,currentLocation:p});I=g.record.name,A=ee({},p.params,d.params),y=g.stringify(A)}const P=[];let v=g;for(;v;)P.unshift(v.record),v=v.parent;return{name:I,path:y,params:A,matched:P,meta:Tf(P)}}e.forEach(d=>r(d));function a(){n.length=0,i.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:a,getRoutes:l,getRecordMatcher:s}}function Pr(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function $r(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:xf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function xf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function Mr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Tf(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function If(e,t){let n=0,i=t.length;for(;n!==i;){const r=n+i>>1;Al(e,t[r])<0?i=r:n=r+1}const s=wf(e);return s&&(i=t.lastIndexOf(s,i-1)),i}function wf(e){let t=e;for(;t=t.parent;)if(El(t)&&Al(e,t)===0)return t}function El({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function kr(e){const t=Ke(Ei),n=Ke(Ps),i=Le(()=>{const c=Ce(e.to);return t.resolve(c)}),s=Le(()=>{const{matched:c}=i.value,{length:u}=c,a=c[u-1],d=n.matched;if(!a||!d.length)return-1;const p=d.findIndex(cn.bind(null,a));if(p>-1)return p;const g=Dr(c[u-2]);return u>1&&Dr(a)===g&&d[d.length-1].path!==g?d.findIndex(cn.bind(null,c[u-2])):p}),r=Le(()=>s.value>-1&&Mf(n.params,i.value.params)),o=Le(()=>s.value>-1&&s.value===n.matched.length-1&&yl(n.params,i.value.params));function l(c={}){if($f(c)){const u=t[Ce(e.replace)?"replace":"push"](Ce(e.to)).catch(Tn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:Le(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}function Nf(e){return e.length===1?e[0]:e}const Of=Io({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:kr,setup(e,{slots:t}){const n=kn(kr(e)),{options:i}=Ke(Ei),s=Le(()=>({[Lr(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Lr(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Nf(t.default(n));return e.custom?r:ol("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Pf=Of;function $f(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Mf(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Je(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Dr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lr=(e,t,n)=>e??t??n,kf=Io({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Ke(us),s=Le(()=>e.route||i.value),r=Ke(Ir,0),o=Le(()=>{let u=Ce(r);const{matched:a}=s.value;let d;for(;(d=a[u])&&!d.components;)u++;return u}),l=Le(()=>s.value.matched[o.value]);Kn(Ir,Le(()=>o.value+1)),Kn(af,l),Kn(us,s);const c=pi();return Bt(()=>[c.value,l.value,e.name],([u,a,d],[p,g,A])=>{a&&(a.instances[d]=u,g&&g!==a&&u&&u===p&&(a.leaveGuards.size||(a.leaveGuards=g.leaveGuards),a.updateGuards.size||(a.updateGuards=g.updateGuards))),u&&a&&(!g||!cn(a,g)||!p)&&(a.enterCallbacks[d]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=s.value,a=e.name,d=l.value,p=d&&d.components[a];if(!p)return Vr(n.default,{Component:p,route:u});const g=d.props[a],A=g?g===!0?u.params:typeof g=="function"?g(u):g:null,I=ol(p,ee({},A,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[a]=null)},ref:c}));return Vr(n.default,{Component:I,route:u})||I}}});function Vr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Df=kf;function Lf(e){const t=Ef(e.routes,e),n=e.parseQuery||lf,i=e.stringifyQuery||Tr,s=e.history,r=gn(),o=gn(),l=gn(),c=yc(Rt);let u=Rt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=Bi.bind(null,E=>""+E),d=Bi.bind(null,Uu),p=Bi.bind(null,Mn);function g(E,L){let $,F;return Cl(E)?($=t.getRecordMatcher(E),F=L):F=E,t.addRoute(F,$)}function A(E){const L=t.getRecordMatcher(E);L&&t.removeRoute(L)}function y(){return t.getRoutes().map(E=>E.record)}function I(E){return!!t.getRecordMatcher(E)}function P(E,L){if(L=ee({},L||c.value),typeof E=="string"){const m=Fi(n,E,L.path),R=t.resolve({path:m.path},L),x=s.createHref(m.fullPath);return ee(m,R,{params:p(R.params),hash:Mn(m.hash),redirectedFrom:void 0,href:x})}let $;if(E.path!=null)$=ee({},E,{path:Fi(n,E.path,L.path).path});else{const m=ee({},E.params);for(const R in m)m[R]==null&&delete m[R];$=ee({},E,{params:d(m)}),L.params=d(L.params)}const F=t.resolve($,L),z=E.hash||"";F.params=a(p(F.params));const f=Wu(i,ee({},E,{hash:Fu(z),path:F.path})),h=s.createHref(f);return ee({fullPath:f,hash:z,query:i===Tr?cf(E.query):E.query||{}},F,{redirectedFrom:void 0,href:h})}function v(E){return typeof E=="string"?Fi(n,E,c.value.path):ee({},E)}function C(E,L){if(u!==E)return an(he.NAVIGATION_CANCELLED,{from:L,to:E})}function b(E){return D(E)}function k(E){return b(ee(v(E),{replace:!0}))}function q(E,L){const $=E.matched[E.matched.length-1];if($&&$.redirect){const{redirect:F}=$;let z=typeof F=="function"?F(E,L):F;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=v(z):{path:z},z.params={}),ee({query:E.query,hash:E.hash,params:z.path!=null?{}:E.params},z)}}function D(E,L){const $=u=P(E),F=c.value,z=E.state,f=E.force,h=E.replace===!0,m=q($,F);if(m)return D(ee(v(m),{state:typeof m=="object"?ee({},z,m.state):z,force:f,replace:h}),L||$);const R=$;R.redirectedFrom=L;let x;return!f&&qu(i,F,$)&&(x=an(he.NAVIGATION_DUPLICATED,{to:R,from:F}),Ye(F,F,!0,!1)),(x?Promise.resolve(x):X(R,F)).catch(S=>ht(S)?ht(S,he.NAVIGATION_GUARD_REDIRECT)?S:St(S):Z(S,R,F)).then(S=>{if(S){if(ht(S,he.NAVIGATION_GUARD_REDIRECT))return D(ee({replace:h},v(S.to),{state:typeof S.to=="object"?ee({},z,S.to.state):z,force:f}),L||R)}else S=Ee(R,F,!0,h,z);return ue(R,F,S),S})}function V(E,L){const $=C(E,L);return $?Promise.reject($):Promise.resolve()}function B(E){const L=Kt.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function X(E,L){let $;const[F,z,f]=uf(E,L);$=Hi(F.reverse(),"beforeRouteLeave",E,L);for(const m of F)m.leaveGuards.forEach(R=>{$.push(Tt(R,E,L))});const h=V.bind(null,E,L);return $.push(h),je($).then(()=>{$=[];for(const m of r.list())$.push(Tt(m,E,L));return $.push(h),je($)}).then(()=>{$=Hi(z,"beforeRouteUpdate",E,L);for(const m of z)m.updateGuards.forEach(R=>{$.push(Tt(R,E,L))});return $.push(h),je($)}).then(()=>{$=[];for(const m of f)if(m.beforeEnter)if(Je(m.beforeEnter))for(const R of m.beforeEnter)$.push(Tt(R,E,L));else $.push(Tt(m.beforeEnter,E,L));return $.push(h),je($)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),$=Hi(f,"beforeRouteEnter",E,L,B),$.push(h),je($))).then(()=>{$=[];for(const m of o.list())$.push(Tt(m,E,L));return $.push(h),je($)}).catch(m=>ht(m,he.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function ue(E,L,$){l.list().forEach(F=>B(()=>F(E,L,$)))}function Ee(E,L,$,F,z){const f=C(E,L);if(f)return f;const h=L===Rt,m=zt?history.state:{};$&&(F||h?s.replace(E.fullPath,ee({scroll:h&&m&&m.scroll},z)):s.push(E.fullPath,z)),c.value=E,Ye(E,L,$,h),St()}let xe;function We(){xe||(xe=s.listen((E,L,$)=>{if(!Pt.listening)return;const F=P(E),z=q(F,Pt.currentRoute.value);if(z){D(ee(z,{replace:!0,force:!0}),F).catch(Tn);return}u=F;const f=c.value;zt&&tf(xr(f.fullPath,$.delta),Ai()),X(F,f).catch(h=>ht(h,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?h:ht(h,he.NAVIGATION_GUARD_REDIRECT)?(D(ee(v(h.to),{force:!0}),F).then(m=>{ht(m,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!$.delta&&$.type===cs.pop&&s.go(-1,!1)}).catch(Tn),Promise.reject()):($.delta&&s.go(-$.delta,!1),Z(h,F,f))).then(h=>{h=h||Ee(F,f,!1),h&&($.delta&&!ht(h,he.NAVIGATION_CANCELLED)?s.go(-$.delta,!1):$.type===cs.pop&&ht(h,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),ue(F,f,h)}).catch(Tn)}))}let Ct=gn(),fe=gn(),W;function Z(E,L,$){St(E);const F=fe.list();return F.length?F.forEach(z=>z(E,L,$)):console.error(E),Promise.reject(E)}function ft(){return W&&c.value!==Rt?Promise.resolve():new Promise((E,L)=>{Ct.add([E,L])})}function St(E){return W||(W=!E,We(),Ct.list().forEach(([L,$])=>E?$(E):L()),Ct.reset()),E}function Ye(E,L,$,F){const{scrollBehavior:z}=e;if(!zt||!z)return Promise.resolve();const f=!$&&nf(xr(E.fullPath,0))||(F||!$)&&history.state&&history.state.scroll||null;return mi().then(()=>z(E,L,f)).then(h=>h&&ef(h)).catch(h=>Z(h,E,L))}const Me=E=>s.go(E);let Ut;const Kt=new Set,Pt={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:I,getRoutes:y,resolve:P,options:e,push:b,replace:k,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:fe.add,isReady:ft,install(E){E.component("RouterLink",Pf),E.component("RouterView",Df),E.config.globalProperties.$router=Pt,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(c)}),zt&&!Ut&&c.value===Rt&&(Ut=!0,b(s.location).catch(F=>{}));const L={};for(const F in Rt)Object.defineProperty(L,F,{get:()=>c.value[F],enumerable:!0});E.provide(Ei,Pt),E.provide(Ps,mo(L)),E.provide(us,c);const $=E.unmount;Kt.add(E),E.unmount=function(){Kt.delete(E),Kt.size<1&&(u=Rt,xe&&xe(),xe=null,c.value=Rt,Ut=!1,W=!1),$()}}};function je(E){return E.reduce((L,$)=>L.then(()=>B($)),Promise.resolve())}return Pt}function $s(){return Ke(Ei)}function Vf(e){return Ke(Ps)}const In={appName:"订单管理",institution:"北京市公共图书馆",currentSubscriber:"ceshi",viewableSubscribers:["ceshi"],z3950Servers:["北京大学","华盛顿大学"],sidebarHighlightMap:{"/bib-query/z3950":"/bib-query","/bib-query/new-bib":"/bib-query","/acceptance/delivery-import":"/acceptance","/acceptance/detail":"/acceptance","/orders/line":"/orders","/orders/lines":"/orders","/settled/detail":"/settled","/settled/list":"/settled"},sidebar:[{id:"order-mgmt",label:"订单管理",expanded:!0,children:[{label:"非连续出版物订单",route:"/orders"},{label:"书目查询",route:"/bib-query"}]},{id:"acceptance",label:"采访验收",expanded:!0,children:[{label:"验收单管理",route:"/acceptance"},{label:"逐条收货",route:"/receive"},{label:"批量验收",route:"/batch-acceptance"},{label:"换货管理",route:"/exchange"},{label:"退货管理",route:"/return"},{label:"催缺管理",route:"/shortage"}]},{id:"settlement",label:"采访结算",expanded:!1,children:[{label:"待结算",route:"/pending-settlement"},{label:"已结算",route:"/settled"},{label:"结算失败处理",route:"/settlement-fail"}]},{id:"subscriber",label:"订户管理",expanded:!1,children:[{label:"订户列表",route:"/subscribers"},{label:"馆员列表",route:"/librarians"}]},{id:"currency",label:"货币管理",expanded:!1,children:[{label:"货币信息",route:"/currency"}]},{id:"settings",label:"设置",expanded:!1,children:[{label:"退换撤订原因参数",route:"/reason-params"},{label:"催缺配置",route:"/shortage-config"},{label:"条码号供应商代码",route:"/barcode-supplier"},{label:"订单与MARC类型映射关系",route:"/marc-mapping"},{label:"订单导入模板配置",route:"/import-template"},{label:"馆址管理",route:"/locations"}]}]},Br={"/orders":"订单管理","/bib-query":"书目查询","/acceptance":"验收单管理","/receive":"逐条收货","/batch-acceptance":"批量验收","/exchange":"换货管理","/return":"退货管理","/shortage":"催缺管理","/pending-settlement":"待结算","/settled":"已结算","/settled/detail":"结算详情","/settled/list":"结算清单","/settlement-fail":"结算失败处理","/subscribers":"订户列表","/librarians":"馆员列表","/currency":"货币信息","/reason-params":"退换撤订原因参数","/shortage-config":"催缺配置","/barcode-supplier":"条码号供应商代码","/marc-mapping":"订单与MARC类型映射关系","/import-template":"订单导入模板配置","/locations":"馆址管理","/bib-query/new-bib":"新建书目","/bib-query/z3950":"查Z3950","/acceptance/delivery-import":"导入发货单","/acceptance/detail":"验收详情","/orders/line":"订单行详情"};function xl(e){return Br[e]?Br[e]:e.startsWith("/acceptance/detail/")?"验收详情":e.startsWith("/orders/line/")?"订单行详情":e.startsWith("/settled/detail/")?"结算详情":e.startsWith("/settled/list/")?"结算清单":e}function fs(e){if(In.sidebarHighlightMap[e])return In.sidebarHighlightMap[e];for(const[t,n]of Object.entries(In.sidebarHighlightMap))if(e.startsWith(`${t}/`)||t!==e&&e.startsWith(t))return n;return e}const Fr="orderm_spa_tabs",xi=Ri("app",{state:()=>({config:In,tabs:[{route:"/orders",title:"订单管理"}],activeRoute:"/orders",expandedGroups:In.sidebar.filter(e=>e.expanded).map(e=>e.id)}),getters:{highlightRoute:e=>fs(e.activeRoute),currentAcceptance:e=>e._currentAcceptance},actions:{initFromStorage(){try{const e=sessionStorage.getItem(Fr);if(!e)return;const t=JSON.parse(e);Array.isArray(t.tabs)&&t.tabs.length&&(this.tabs=t.tabs,this.activeRoute=t.activeRoute||this.tabs[0].route)}catch{}},persistTabs(){sessionStorage.setItem(Fr,JSON.stringify({tabs:this.tabs,activeRoute:this.activeRoute}))},openTab(e,t){const n=t||xl(e),i=this.tabs.find(s=>s.route===e);i?i.title=n:this.tabs.push({route:e,title:n}),this.activeRoute=e,this.persistTabs()},switchTab(e){this.activeRoute=e,this.persistTabs()},closeTab(e){if(this.tabs.length<=1)return;const t=this.tabs.findIndex(n=>n.route===e);if(t!==-1){if(this.tabs.splice(t,1),this.activeRoute===e){const n=this.tabs[Math.max(0,t-1)]||this.tabs[0];this.activeRoute=n.route}this.persistTabs()}},toggleGroup(e){const t=this.expandedGroups.indexOf(e);t>=0?this.expandedGroups.splice(t,1):this.expandedGroups.push(e)},isGroupExpanded(e,t){if(this.expandedGroups.includes(e))return!0;const n=this.config.sidebar.find(i=>i.id===e);return n==null?void 0:n.children.some(i=>fs(t)===i.route)}}}),Ui="orderm_current_acceptance",Ki="acceptanceDetailContext";function Ph(e){return{no:e.no,id:e.acceptanceId,name:e.name,type:e.type,lang:e.lang,method:e.method,supplier:e.supplier,shipNo:e.shipNo,status:e.status,remarkText:e.remarkText||""}}const Bf=Ri("acceptance",{state:()=>({current:null,detailContext:null}),getters:{hasCurrent:e=>!!e.current},actions:{initFromStorage(){try{const e=localStorage.getItem(Ui);this.current=e?JSON.parse(e):null}catch{this.current=null}this.loadDetailContext()},setCurrent(e){this.current=e,e?localStorage.setItem(Ui,JSON.stringify(e)):localStorage.removeItem(Ui)},clearCurrent(){this.setCurrent(null)},saveDetailContext(e){this.detailContext=e,sessionStorage.setItem(Ki,JSON.stringify(e))},loadDetailContext(){try{const e=sessionStorage.getItem(Ki);this.detailContext=e?JSON.parse(e):null}catch{this.detailContext=null}return this.detailContext},clearDetailContext(){this.detailContext=null,sessionStorage.removeItem(Ki)}}}),$h={exchange:"换货原因",return:"退货原因",cancel:"撤订原因",revokeReceive:"撤销收货原因"},jr={exchange:[{id:"ex-1",content:"换货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:41",remark:""},{id:"ex-2",content:"残缺损",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:45:18",remark:""}],return:[{id:"rt-1",content:"退货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:48",remark:""},{id:"rt-2",content:"损坏退货",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:09",remark:""}],cancel:[{id:"ca-1",content:"撤订",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:56",remark:""},{id:"ca-2",content:"退订",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:27",remark:""}],revokeReceive:[{id:"rv-1",content:"录入错误",status:"active",sort:1,creator:"赵付",created:"2026-05-22 09:10:12",remark:""},{id:"rv-2",content:"重复收货",status:"active",sort:2,creator:"杨晓婉",created:"2026-05-22 09:11:05",remark:""},{id:"rv-3",content:"品相差",status:"active",sort:3,creator:"王二小",created:"2026-05-22 09:12:18",remark:""}]},Mh=[{key:"content",label:"原因"},{key:"status",label:"状态",type:"select",options:["全部","使用中","已停用"]},{key:"createDate",label:"创建日期",type:"dateRange",startKey:"startDate",endKey:"endDate"},{key:"creator",label:"创建人",extra:!0}],kh={active:{text:"使用中",cls:"text-green-600"},disabled:{text:"已停用",cls:"text-red-500"}},Hr="orderm_reason_params",Ff=Ri("reasonParams",{state:()=>({data:structuredClone(jr)}),getters:{getByType:e=>t=>e.data[t]||[],getActiveByType:e=>t=>(e.data[t]||[]).filter(n=>n.status==="active").sort((n,i)=>(n.sort||0)-(i.sort||0))},actions:{initFromStorage(){try{const e=localStorage.getItem(Hr);e?this.data=JSON.parse(e):this.persist()}catch{this.data=structuredClone(jr)}},persist(){localStorage.setItem(Hr,JSON.stringify(this.data))},addReason(e,t){const n=this.data[e]||[];n.push({...t,id:`${e}-${Date.now()}`,status:"active",creator:t.creator||"赵付",created:t.created||new Date().toISOString().slice(0,19).replace("T"," ")}),this.data[e]=n,this.persist()},updateReason(e,t,n){const i=this.data[e]||[],s=i.findIndex(r=>r.id===t);s>=0&&(i[s]={...i[s],...n},this.persist())},toggleStatus(e,t){const n=(this.data[e]||[]).find(i=>i.id===t);n&&(n.status=n.status==="active"?"disabled":"active",this.persist())}}}),Dh={active:{text:"使用中",cls:"text-green-600"},inactive:{text:"已停用",cls:"text-gray-500"}},jf=32,Hf=64,Uf=200,Tl=32,Ms=64,Il=200,wl=32,ks=64,Nl=200,Kf=["ST001_C1","ST001_C2","ST001_C3","ST001_C4","ST001_C5","ST002_C1","ST002_C2","ST003_C1"],Gf=["CL001","CL002","CL003","CL004","CL005","CL006","CL007","CL008","CL009","CL010","STD02","STE02","STG02","STK02","STB01","STC01"],Wf=["STD01","STE01","STG01","STK01","STB01","STC01","STD02","STE02","STF01","STH01"],qf={"site-1":["STD","STE"],"site-2":["STG"],"site-3":["STK"],"site-4":["STB","STC"]},Ol=["馆址编码","馆址名称","状态","备注"],Pl=["馆址编码","馆址名称","分馆编码","分馆名称","状态","备注"],$l=["馆址编码","馆址名称","分馆编码","分馆名称","馆藏地编码","馆藏地名称","状态","备注"],Xf=[{id:"site-1",code:"ST001_C1",name:"首都华威桥馆",status:"active",remark:"首都图书馆主馆文献借阅区域"},{id:"site-2",code:"ST001_C2",name:"首都大兴机场分馆",status:"active",remark:""},{id:"site-3",code:"ST001_C3",name:"北京城市图书馆",status:"active",remark:""},{id:"site-4",code:"ST001_C4",name:"其他馆址（首都图书馆）",status:"active",remark:""},{id:"site-5",code:"",name:"测试停用馆址",status:"inactive",remark:"编码为空示例"}],zf=[{id:"branch-1",siteId:"site-1",code:"STD01",name:"首图地方文献",status:"active",remark:""},{id:"branch-2",siteId:"site-1",code:"STE01",name:"市少儿图书馆",status:"active",remark:""},{id:"branch-3",siteId:"site-2",code:"STG01",name:"首图古籍",status:"active",remark:""},{id:"branch-4",siteId:"site-3",code:"STK01",name:"首图期刊分馆",status:"active",remark:""},{id:"branch-5",siteId:"site-5",code:"",name:"测试停用分馆",status:"inactive",remark:""}],Jf=[{id:"col-1",branchId:"branch-1",code:"CL001",name:"北京地方文献阅览室",status:"active",remark:""},{id:"col-2",branchId:"branch-2",code:"CL002",name:"首少.少儿钢琴厂书库",status:"active",remark:""},{id:"col-3",branchId:"branch-3",code:"CL003",name:"历史文献阅览室",status:"active",remark:""},{id:"col-4",branchId:"branch-4",code:"CL004",name:"首图刊.中文报刊阅览室",status:"active",remark:""},{id:"col-5",branchId:"branch-5",code:"",name:"测试停用馆藏地",status:"inactive",remark:""}],Lh=[{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态",type:"select",options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],Vh=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],Bh=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称",extra:!0},{key:"code",label:"馆藏地编码",extra:!0},{key:"name",label:"馆藏地名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],Fh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],jh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],Hh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称"},{key:"code",label:"馆藏地编码"},{key:"name",label:"馆藏地名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}];function Ue(e,t){return t?String(e||"").toLowerCase().includes(t.toLowerCase()):!0}function Ml(e,t){return e.find(n=>n.id===t)}function Jt(e,t){return e.find(n=>n.code===t)}function Yf(e,t){return e.find(n=>n.id===t)}function Uh(e,t){return e.find(n=>n.id===t)}function Qf(e,t){const n=Ml(t,e.siteId);return{...e,siteCode:(n==null?void 0:n.code)||"-",siteName:(n==null?void 0:n.name)||"-"}}function Zf(e,t,n){const i=Yf(t,e.branchId),s=i?Ml(n,i.siteId):null;return{...e,branchCode:(i==null?void 0:i.code)||"-",branchName:(i==null?void 0:i.name)||"-",siteCode:(s==null?void 0:s.code)||"-",siteName:(s==null?void 0:s.name)||"-"}}function kl(e){return[...e].filter(t=>t.status==="active").sort((t,n)=>t.name.localeCompare(n.name,"zh-CN"))}function Dl(e){return kl(e).map(t=>t.name)}function ed(e){return["全部",...Dl(e)]}const td=new Set(["site","location"]);function Kh(e,t){return e.map(n=>!td.has(n.key)||n.type!=="select"?n:{...n,options:[...t]})}function Gh(e,t){return e.filter(n=>n.siteId===t&&n.status==="active").sort((n,i)=>n.name.localeCompare(i.name,"zh-CN"))}function nd(e){return Kf.includes(e.trim())}function Ll(e){return Gf.includes(e)}function Ds(e,t){if(!Wf.includes(e))return!1;const n=qf[t];return n?n.some(i=>e.startsWith(i)):!0}function id(e,t,n=null){return e.some(i=>i.id!==n&&i.code===t)}function sd(e,t,n=null){return e.some(i=>i.id!==n&&i.name===t)}function Vl(e,t,n=null){return e.some(i=>i.id!==n&&i.code===t)}function Bl(e,t,n,i=null){return e.some(s=>s.id!==i&&s.siteId===n&&s.name===t)}function Fl(e,t,n=null){return e.some(i=>i.id!==n&&i.code===t)}function jl(e,t,n,i=null){return e.some(s=>s.id!==i&&s.branchId===n&&s.name===t)}function Wh(e,t,n){const i={},s=e.siteId||null,r=e.code.trim(),o=e.name.trim(),l=e.remark||"";return n||(r?r.length>jf?i.code="馆址编码长度不能超过32个字符":nd(r)?id(t,r,s)&&(i.code="馆址编码已存在，请修改"):i.code="馆址编码必须属于四级馆藏地现有编码":i.code="请输入馆址编码"),o?o.length>Hf?i.name="馆址名称长度不能超过64个字符":sd(t,o,s)&&(i.name="已存在同名馆址"):i.name="请输入馆址名称",l.length>Uf&&(i.remark="备注长度不能超过200个字符"),{valid:Object.keys(i).length===0,errors:i}}function qh(e,t,n){const i={},s=e.branchId||null,r=e.siteId,o=e.code.trim(),l=e.name.trim(),c=e.remark||"";return r||(i.siteId="请选择所属馆址"),n||(o?o.length>Tl?i.code="分馆编码长度不能超过32个字符":r&&!Ds(o,r)?i.code="分馆编码必须属于四级馆址编码范围内":Vl(t,o,s)&&(i.code="分馆编码已存在，请修改"):i.code="请输入分馆编码"),l?l.length>Ms?i.name="分馆名称长度不能超过64个字符":r&&Bl(t,l,r,s)&&(i.name="该馆址下已存在同名分馆"):i.name="请输入分馆名称",c.length>Il&&(i.remark="备注长度不能超过200个字符"),{valid:Object.keys(i).length===0,errors:i}}function Xh(e,t,n){const i={},s=e.collectionId||null,r=e.branchId,o=e.code.trim(),l=e.name.trim(),c=e.remark||"";return e.siteId||(i.siteId="请选择所属馆址"),r||(i.branchId="请选择所属分馆"),n||(o?o.length>wl?i.code="馆藏地编码长度不能超过32个字符":Ll(o)?Fl(t,o,s)&&(i.code="馆藏地编码已存在，请修改"):i.code="馆藏地编码必须属于四级馆藏地现有编码":i.code="请输入馆藏地编码"),l?l.length>ks?i.name="馆藏地名称长度不能超过64个字符":r&&jl(t,l,r,s)&&(i.name="该分馆下已存在同名馆藏地"):i.name="请输入馆藏地名称",c.length>Nl&&(i.remark="备注长度不能超过200个字符"),{valid:Object.keys(i).length===0,errors:i}}function zh(e,t){return e.filter(n=>!(!Ue(n.code,t.code)||!Ue(n.name,t.name)||t.status&&n.status!==t.status))}function Jh(e,t,n){return e.map(i=>Qf(i,t)).filter(i=>!(!Ue(i.siteCode,n.siteCode)||!Ue(i.siteName,n.siteName)||!Ue(i.code,n.code)||!Ue(i.name,n.name)||n.status&&i.status!==n.status))}function Yh(e,t,n,i){return e.map(s=>Zf(s,t,n)).filter(s=>!(!Ue(s.siteCode,i.siteCode)||!Ue(s.siteName,i.siteName)||!Ue(s.branchCode,i.branchCode)||!Ue(s.branchName,i.branchName)||!Ue(s.code,i.code)||!Ue(s.name,i.name)||i.status&&s.status!==i.status))}function rd(e){return/\.(xls|xlsx)$/i.test(e)}function tn(e,t,n){const i=n.map(l=>l.map(c=>`"${String(c||"").replace(/"/g,'""')}"`).join(",")),s=`\uFEFF${t.join(",")}
${i.join(`
`)}
`,r=new Blob([s],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=e,o.click(),URL.revokeObjectURL(o.href)}function Qh(e){e==="site"?tn("馆址导入模板.csv",Ol,[["ST001_C5","示例馆址名称","使用中","示例备注"]]):e==="branch"?tn("分馆导入模板.csv",Pl,[["ST001_C1","首都华威桥馆","STF01","示例分馆名称","使用中","示例备注"]]):tn("馆藏地导入模板.csv",$l,[["ST001_C1","首都华威桥馆","STD01","首图地方文献","CL005","示例馆藏地名称","使用中","示例备注"]])}function Zh(e,t){if(!(t!=null&&t.length))return;const n=new Date().toISOString().replace(/[-:T]/g,"").slice(0,14);e==="site"?tn(`馆址导入解析错误文件_${n}.csv`,[...Ol,"错误原因"],t.map(i=>[i.code,i.name,i.statusText,i.remark,i.errorReason])):e==="branch"?tn(`分馆导入解析错误文件_${n}.csv`,[...Pl,"错误原因"],t.map(i=>[i.siteCode,i.siteName,i.branchCode,i.branchName,i.statusText,i.remark,i.errorReason])):tn(`馆藏地导入解析错误文件_${n}.csv`,[...$l,"错误原因"],t.map(i=>[i.siteCode,i.siteName,i.branchCode,i.branchName,i.collectionCode,i.collectionName,i.statusText,i.remark,i.errorReason]))}function od(e,t,n,i){const s=String(e.siteCode||"").trim(),r=String(e.branchCode||"").trim(),o=String(e.branchName||"").trim(),l=String(e.remark||"");if(!s)return"馆址编码不能为空";if(!r)return"分馆编码不能为空";if(!o)return"分馆名称不能为空";if(r.length>Tl)return"分馆编码长度不能超过32个字符";if(o.length>Ms)return"分馆名称长度不能超过64个字符";if(l.length>Il)return"备注长度不能超过200个字符";const c=Jt(n,s);return c?i.has(r)||Vl(t,r)?"分馆编码重复":Ds(r,c.id)?Bl(t,o,c.id)?"同馆址下已存在同名分馆":(i.add(r),null):"分馆编码不属于当前馆址编码":"馆址编码不存在"}function ld(e,t,n,i,s){const r=String(e.siteCode||"").trim(),o=String(e.branchCode||"").trim(),l=String(e.collectionCode||"").trim(),c=String(e.collectionName||"").trim(),u=String(e.remark||"");if(!r)return"馆址编码不能为空";if(!o)return"分馆编码不能为空";if(!l)return"馆藏地编码不能为空";if(!c)return"馆藏地名称不能为空";if(l.length>wl)return"馆藏地编码长度不能超过32个字符";if(c.length>ks)return"馆藏地名称长度不能超过64个字符";if(u.length>Nl)return"备注长度不能超过200个字符";const a=Jt(i,r);if(!a)return"馆址编码不存在";const d=n.find(p=>p.siteId===a.id&&p.code===o);return d?s.has(l)||Fl(t,l)?"馆藏地编码重复":Ll(l)?jl(t,c,d.id)?"同分馆下已存在同名馆藏地":(s.add(l),null):"馆藏地编码不属于四级馆藏地现有编码":"分馆编码不存在"}function ep(e,t,{siteRows:n,branchRows:i,collectionRows:s}){const r=t.name.toLowerCase();if(!rd(t.name))return{ok:!1,message:"导入文件格式不符"};if(r.includes("header")||r.includes("表头"))return{ok:!1,message:"模板的表头更改了"};if(r.includes("2000")||r.includes("超限"))return{ok:!1,message:"数据记录超过2000条"};if(e==="site"){const p=new Set(n.map(C=>C.code).filter(Boolean)),g=new Set(n.map(C=>C.name));if(r.includes("success")||r.includes("全部成功")){const b=["ST002_C1","ST002_C2","ST003_C1"].filter(k=>!p.has(k)).map((k,q)=>({code:k,name:`批量导入馆址${q+1}`,status:"active",remark:""}));return{ok:!0,result:{total:b.length,success:b.length,fail:0,successRows:b,errorRows:[]}}}const A=100,y=10,I=["馆址编码重复","馆址编码不属于四级馆藏地现有编码","馆址名称长度不能超过64个字符","已存在同名馆址"],P=Array.from({length:y},(C,b)=>({code:b===0?"ST001_C1":`INVALID_${b}`,name:b===3?"首都华威桥馆":`失败馆址${b+1}`,statusText:"使用中",remark:"",errorReason:I[b%I.length]})),v=Array.from({length:A-y},(C,b)=>({code:`ST002_C${String(b+10).padStart(2,"0")}`,name:`导入馆址${b+1}`,status:"active",remark:b%4===0?"批量导入":""})).filter(C=>!p.has(C.code)&&!g.has(C.name));return{ok:!0,result:{total:A,success:A-y,fail:y,successRows:v,errorRows:P}}}if(e==="branch"){const p=new Set(i.map(v=>v.code).filter(Boolean));if(r.includes("success")||r.includes("全部成功")){const v=Jt(n,"ST001_C1")||n.find(k=>k.code),b=["STF01","STH01","STD02"].filter(k=>!p.has(k)&&v&&Ds(k,v.id)).map((k,q)=>({siteCode:(v==null?void 0:v.code)||"ST001_C1",siteName:(v==null?void 0:v.name)||"首都华威桥馆",siteId:(v==null?void 0:v.id)||"site-1",branchCode:k,branchName:`批量导入分馆${q+1}`,status:"active",remark:""}));return{ok:!0,result:{total:b.length,success:b.length,fail:0,successRows:b,errorRows:[]}}}const g=100,A=10,y=["分馆编码重复","分馆编码不属于当前馆址编码","分馆名称长度不能超过64个字符","馆址编码不存在","同馆址下已存在同名分馆"],I=Array.from({length:A},(v,C)=>({siteCode:C===3?"INVALID_SITE":"ST001_C1",siteName:C===3?"不存在馆址":"首都华威桥馆",branchCode:C===0?"STD01":`INVALID_${C}`,branchName:C===2?"A".repeat(Ms+1):C===4?"首图地方文献":`失败分馆${C+1}`,statusText:"使用中",remark:"",errorReason:y[C%y.length]})),P=Array.from({length:g-A},(v,C)=>{const b=Jt(n,"ST001_C1")||n[0],k=`STF${String(C+10).padStart(2,"0")}`;return{siteCode:(b==null?void 0:b.code)||"ST001_C1",siteName:(b==null?void 0:b.name)||"首都华威桥馆",siteId:(b==null?void 0:b.id)||"site-1",branchCode:k,branchName:`导入分馆${C+1}`,status:"active",remark:C%4===0?"批量导入":""}}).filter(v=>!p.has(v.branchCode)&&od(v,i,n,new Set)===null);return{ok:!0,result:{total:g,success:g-A,fail:A,successRows:P,errorRows:I}}}const o=new Set(s.map(p=>p.code).filter(Boolean));if(r.includes("success")||r.includes("全部成功")){const p=Jt(n,"ST001_C1")||n[0],g=i.find(I=>I.siteId===(p==null?void 0:p.id)&&I.code==="STD01")||i[0],y=["CL005","CL006","CL007"].filter(I=>!o.has(I)).map((I,P)=>({siteCode:(p==null?void 0:p.code)||"ST001_C1",siteName:(p==null?void 0:p.name)||"首都华威桥馆",branchCode:(g==null?void 0:g.code)||"STD01",branchName:(g==null?void 0:g.name)||"首图地方文献",branchId:(g==null?void 0:g.id)||"branch-1",collectionCode:I,collectionName:`批量导入馆藏地${P+1}`,status:"active",remark:""}));return{ok:!0,result:{total:y.length,success:y.length,fail:0,successRows:y,errorRows:[]}}}const l=100,c=10,u=["馆藏地编码重复","馆藏地编码不属于四级馆藏地现有编码","馆藏地名称长度不能超过64个字符","馆址编码不存在","分馆编码不存在","同分馆下已存在同名馆藏地"],a=Array.from({length:c},(p,g)=>({siteCode:g===3?"INVALID_SITE":"ST001_C1",siteName:g===3?"不存在馆址":"首都华威桥馆",branchCode:g===4?"INVALID_BRANCH":"STD01",branchName:g===4?"不存在分馆":"首图地方文献",collectionCode:g===0?"CL001":`INVALID_${g}`,collectionName:g===2?"A".repeat(ks+1):g===5?"北京地方文献阅览室":`失败馆藏地${g+1}`,statusText:"使用中",remark:"",errorReason:u[g%u.length]})),d=Array.from({length:l-c},(p,g)=>{const A=Jt(n,"ST001_C1")||n[0],y=i.find(P=>P.siteId===(A==null?void 0:A.id)&&P.code==="STD01")||i[0],I=`CL${String(g+20).padStart(3,"0")}`;return{siteCode:(A==null?void 0:A.code)||"ST001_C1",siteName:(A==null?void 0:A.name)||"首都华威桥馆",branchCode:(y==null?void 0:y.code)||"STD01",branchName:(y==null?void 0:y.name)||"首图地方文献",branchId:(y==null?void 0:y.id)||"branch-1",collectionCode:I,collectionName:`导入馆藏地${g+1}`,status:"active",remark:g%4===0?"批量导入":""}}).filter(p=>!o.has(p.collectionCode)&&ld(p,s,i,n,new Set)===null);return{ok:!0,result:{total:l,success:l-c,fail:c,successRows:d,errorRows:a}}}function tp(e,t){t.forEach(n=>{e.some(i=>i.code===n.code)||e.unshift({id:`site-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,code:n.code,name:n.name,status:n.status,remark:n.remark||""})})}function np(e,t){t.forEach(n=>{e.some(i=>i.code===n.branchCode)||e.unshift({id:`branch-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,siteId:n.siteId,code:n.branchCode,name:n.branchName,status:n.status,remark:n.remark||""})})}function ip(e,t){t.forEach(n=>{e.some(i=>i.code===n.collectionCode)||e.unshift({id:`col-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,branchId:n.branchId,code:n.collectionCode,name:n.collectionName,status:n.status,remark:n.remark||""})})}const Ur="orderm_location_data";function Un(){return{siteRows:Xf.map(e=>({...e})),branchRows:zf.map(e=>({...e})),collectionRows:Jf.map(e=>({...e}))}}const cd=Ri("location",{state:()=>({initialized:!1,siteRows:[],branchRows:[],collectionRows:[]}),getters:{activeSites(e){return kl(e.siteRows)},activeSiteNames(e){return Dl(e.siteRows)},activeSiteFilterOptions(e){return ed(e.siteRows)}},actions:{initFromStorage(){if(!this.initialized){try{const e=localStorage.getItem(Ur);if(e){const t=JSON.parse(e);this.siteRows=Array.isArray(t.siteRows)?t.siteRows:Un().siteRows,this.branchRows=Array.isArray(t.branchRows)?t.branchRows:Un().branchRows,this.collectionRows=Array.isArray(t.collectionRows)?t.collectionRows:Un().collectionRows}else this.resetToInitial()}catch{this.resetToInitial()}this.initialized=!0}},ensureInitialized(){this.initialized||this.initFromStorage()},resetToInitial(){const e=Un();this.siteRows=e.siteRows,this.branchRows=e.branchRows,this.collectionRows=e.collectionRows,this.persist()},persist(){localStorage.setItem(Ur,JSON.stringify({siteRows:this.siteRows,branchRows:this.branchRows,collectionRows:this.collectionRows}))},replaceSiteRows(e){this.siteRows=e,this.persist()},replaceBranchRows(e){this.branchRows=e,this.persist()},replaceCollectionRows(e){this.collectionRows=e,this.persist()}}}),ad={class:"h-12 bg-slate-900 flex items-center justify-between px-4 shrink-0 z-20"},ud={class:"flex items-center gap-2"},fd={class:"text-white font-medium text-sm"},dd={class:"flex items-center gap-3 shrink-0"},hd={class:"flex items-center gap-1 text-gray-300 text-xs"},pd={class:"text-white"},gd={__name:"AppHeader",setup(e){const t=xi();return(n,i)=>(be(),De("header",ad,[Q("div",ud,[i[0]||(i[0]=Q("div",{class:"w-7 h-7 bg-sky-500 rounded flex items-center justify-center"},[Q("svg",{class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})])],-1)),Q("span",fd,nn(Ce(t).config.appName),1)]),Q("div",dd,[Q("div",hd,[i[1]||(i[1]=Q("span",null,"当前机构",-1)),Q("span",pd,nn(Ce(t).config.institution),1),i[2]||(i[2]=Q("svg",{class:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),i[3]||(i[3]=Q("div",{class:"w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center"},[Q("svg",{class:"w-5 h-5 text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])],-1))])]))}},md={id:"sidebar-wrapper",class:"relative shrink-0 h-full"},_d={class:"flex-1 py-2"},vd=["onClick"],bd={__name:"AppSidebar",setup(e){const t=$s(),n=xi(),i=pi(!1);function s(o){return fs(n.activeRoute)===o}function r(o,l){n.openTab(o,l),t.push(o)}return(o,l)=>{const c=xs("RouterLink");return be(),De("div",md,[Q("aside",{id:"sidebar",class:It(["h-full bg-slate-800 flex flex-col overflow-y-auto transition-[width] duration-200",i.value?"w-0 overflow-hidden":"w-52"])},[Q("nav",_d,[(be(!0),De(Pe,null,Yi(Ce(n).config.sidebar,u=>(be(),De("div",{key:u.id,class:"sidebar-group"},[Q("button",{type:"button",class:"sidebar-toggle w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-slate-700 transition-colors",onClick:a=>Ce(n).toggleGroup(u.id)},[Q("span",null,nn(u.label),1),(be(),De("svg",{class:It(["w-4 h-4 transition-transform",{"rotate-180":Ce(n).isGroupExpanded(u.id,Ce(n).activeRoute)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...l[2]||(l[2]=[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,vd),Q("div",{class:It(["sidebar-children overflow-hidden transition-all duration-200",Ce(n).isGroupExpanded(u.id,Ce(n).activeRoute)?"max-h-[500px]":"max-h-0"])},[(be(!0),De(Pe,null,Yi(u.children,a=>(be(),rn(c,{key:a.route,to:a.route,class:It(["block pl-10 pr-4 py-2 text-sm transition-colors",s(a.route)?"bg-sky-600 text-white":"text-gray-400 hover:text-white hover:bg-slate-700"]),onClick:d=>r(a.route,a.label)},{default:As(()=>[nl(nn(a.label),1)]),_:2},1032,["to","class","onClick"]))),128))],2)]))),128))]),Q("button",{type:"button",class:"p-3 border-t border-slate-700 text-gray-400 hover:text-white flex justify-center shrink-0",title:"收起菜单",onClick:l[0]||(l[0]=u=>i.value=!0)},[...l[3]||(l[3]=[Q("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})],-1)])])],2),Mc(Q("button",{type:"button",id:"sidebar-expand",class:"absolute bottom-0 left-0 z-10 w-10 p-3 border-t border-slate-700 bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex justify-center",title:"展开菜单",onClick:l[1]||(l[1]=u=>i.value=!1)},[...l[4]||(l[4]=[Q("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})],-1)])],512),[[Ga,i.value]])])}}},yd={id:"page-tab-bar",class:"bg-white border-b border-gray-200 px-4 flex items-center gap-2 h-10 shrink-0 overflow-x-auto"},Cd=["onClick"],Sd=["onClick"],Rd={__name:"TabBar",setup(e){const t=$s(),n=xi();function i(r){n.switchTab(r),t.push(r)}function s(r){const o=n.activeRoute===r;n.closeTab(r),o&&t.push(n.activeRoute)}return(r,o)=>(be(),De("div",yd,[(be(!0),De(Pe,null,Yi(Ce(n).tabs,l=>(be(),De("div",{key:l.route,class:It(["flex items-center gap-2 border rounded px-3 py-1 text-sm cursor-pointer whitespace-nowrap",l.route===Ce(n).activeRoute?"bg-sky-50 border-sky-200 text-sky-700":"bg-white border-gray-200 text-gray-600 hover:bg-gray-50"]),onClick:c=>i(l.route)},[Q("span",null,nn(l.title),1),Ce(n).tabs.length>1?(be(),De("button",{key:0,type:"button",class:"opacity-40 hover:opacity-100 text-xs leading-none",onClick:fu(c=>s(l.route),["stop"])},"×",8,Sd)):il("",!0)],10,Cd))),128))]))}},Ad={class:"flex flex-col h-screen overflow-hidden"},Ed={class:"flex flex-1 overflow-hidden"},xd={class:"flex-1 flex flex-col overflow-hidden bg-gray-100"},Td={class:"flex-1 min-h-0 overflow-hidden"},Id={class:"h-full min-h-0 overflow-hidden p-4 flex flex-col"},wd={key:0,class:"flex flex-col flex-1 min-h-0 h-full overflow-hidden"},Nd={__name:"AppLayout",setup(e){const t=Vf();$s();const n=xi(),i=Bf(),s=Ff(),r=cd();Es(()=>{n.initFromStorage(),i.initFromStorage(),s.initFromStorage(),r.initFromStorage(),o()}),Bt(()=>t.path,()=>o());function o(){const l=t.path,c=t.meta.title||xl(l);n.openTab(l,c)}return(l,c)=>{const u=xs("RouterView");return be(),De("div",Ad,[ge(gd),Q("div",Ed,[ge(bd),Q("main",xd,[ge(Rd),Q("div",Td,[Q("div",Id,[ge(u,null,{default:As(({Component:a,route:d})=>[a?(be(),De("div",wd,[(be(),rn(Kc,{max:20},[(be(),rn(ea(a),{key:d.fullPath}))],1024))])):il("",!0)]),_:1})])])])])])}}},Od=[{path:"orders",name:"orders",component:()=>re(()=>import("./OrderManageView-BQb7QsMC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url),meta:{title:"订单管理",module:"order"}},{path:"orders/lines",redirect:{path:"/orders",query:{tab:"order-line"}}},{path:"orders/line/:lineNo?",name:"order-line-detail",component:()=>re(()=>import("./OrderLineDetailView-GnWfsyUj.js"),__vite__mapDeps([21,3,4,14,15,16,11,12,13,8,9,22]),import.meta.url),meta:{title:"订单行详情",module:"order"}},{path:"bib-query",name:"bib-query",component:()=>re(()=>import("./BibQueryView-uszh99ox.js"),__vite__mapDeps([23,3,4,11,12,13,2,9,7,8,18,24,10,5,25]),import.meta.url),meta:{title:"书目查询",module:"order"}},{path:"bib-query/new-bib",name:"new-bib",component:()=>re(()=>import("./NewBibView-CZVqNR2e.js"),[],import.meta.url),meta:{title:"新建书目",module:"order"}},{path:"bib-query/z3950",name:"z3950",component:()=>re(()=>import("./Z3950QueryView-Ccr_kD-2.js"),__vite__mapDeps([26,3,4]),import.meta.url),meta:{title:"查Z3950",module:"order"}}],Pd=[{path:"acceptance",name:"acceptance",component:()=>re(()=>import("./AcceptanceManageView-CqcFBPq6.js"),__vite__mapDeps([27,1,2,3,4,6,18,28,9,29,30,5]),import.meta.url),meta:{title:"验收单管理",module:"acceptance"}},{path:"acceptance/detail/:acceptanceId",name:"acceptance-detail",component:()=>re(()=>import("./AcceptanceDetailView-B-E9RfsY.js"),__vite__mapDeps([31,1,2,3,4,6,5,30,18,28,9,15]),import.meta.url),meta:{title:"验收详情",module:"acceptance"}},{path:"acceptance/delivery-import",name:"delivery-import",component:()=>re(()=>import("./DeliveryImportView-U_sCIu65.js"),__vite__mapDeps([32,5,28,9,33,34]),import.meta.url),meta:{title:"导入发货单",module:"acceptance"}},{path:"receive",name:"receive",component:()=>re(()=>import("./ReceiveByItemView-D4zGNXV_.js"),__vite__mapDeps([35,3,4,5,31,1,2,6,30,18,28,9,15,33]),import.meta.url),meta:{title:"逐条收货",module:"acceptance"}},{path:"batch-acceptance",name:"batch-acceptance",component:()=>re(()=>import("./BatchAcceptanceView-Cq-a5JOJ.js"),__vite__mapDeps([36,1,2,3,4,5,18,28,9,29]),import.meta.url),meta:{title:"批量验收",module:"acceptance"}},{path:"exchange",name:"exchange",component:()=>re(()=>import("./ExchangeManageView-BLtK5zek.js"),__vite__mapDeps([37,3,4,6,2,18,33,10]),import.meta.url),meta:{title:"换货管理",module:"acceptance"}},{path:"return",name:"return",component:()=>re(()=>import("./ReturnManageView-DCSZhx7I.js"),__vite__mapDeps([38,3,4,6,2,10]),import.meta.url),meta:{title:"退货管理",module:"acceptance"}},{path:"shortage",name:"shortage",component:()=>re(()=>import("./ShortageManageView-CNvyS5a5.js"),__vite__mapDeps([39,17,8,9,1,2,3,4,6,5,18,10]),import.meta.url),meta:{title:"催缺管理",module:"acceptance"}}],$d=[{path:"pending-settlement",name:"pending-settlement",component:()=>re(()=>import("./PendingSettlementView-awRHOTmR.js"),__vite__mapDeps([40,1,2,3,4,18]),import.meta.url),meta:{title:"待结算",module:"settlement"}},{path:"settled",name:"settled",component:()=>re(()=>import("./SettledView-NlM3LWD_.js"),__vite__mapDeps([41,1,2,3,4,42]),import.meta.url),meta:{title:"已结算",module:"settlement"}},{path:"settled/detail/:settleId",name:"settlement-detail",component:()=>re(()=>import("./SettlementDetailView-OqoBDF1C.js"),__vite__mapDeps([43,42]),import.meta.url),meta:{title:"结算详情",module:"settlement"}},{path:"settled/list/:settleId",name:"settlement-list",component:()=>re(()=>import("./SettlementListView-CGXG4YJx.js"),__vite__mapDeps([44,1,2,3,4,6,16]),import.meta.url),meta:{title:"结算清单",module:"settlement"}},{path:"settlement-fail",name:"settlement-fail",component:()=>re(()=>import("./FailSettlementView-D_Bcr0W5.js"),__vite__mapDeps([45,1,2,3,4]),import.meta.url),meta:{title:"结算失败处理",module:"settlement"}}],Md=[{path:"subscribers",name:"subscribers",component:()=>re(()=>import("./SubscriberListView-Bj11-zqc.js"),__vite__mapDeps([46,1,2,3,4,24,10,47,18,48]),import.meta.url),meta:{title:"订户列表",module:"subscriber"}},{path:"librarians",name:"librarians",component:()=>re(()=>import("./LibrarianListView-sfpYILws.js"),__vite__mapDeps([49,1,2,3,4,18,48,47]),import.meta.url),meta:{title:"馆员列表",module:"subscriber"}}],kd=[{path:"currency",name:"currency",component:()=>re(()=>import("./CurrencyInfoView-gvrhAprl.js"),__vite__mapDeps([50,1,2,3,4,18]),import.meta.url),meta:{title:"货币信息",module:"currency"}}],Dd=[{path:"import-template",name:"import-template",component:()=>re(()=>import("./ImportTemplateConfigView-2a6aJA_1.js"),__vite__mapDeps([51,1,2,3,4,24,52,19,18]),import.meta.url),meta:{title:"订单导入模板配置",module:"import-template"}}],Ld=[{path:"shortage-config",name:"shortage-config",component:()=>re(()=>import("./ShortageConfigView-BRxqpAGG.js"),__vite__mapDeps([53,1,2,3,4,47,18]),import.meta.url),meta:{title:"催缺配置",module:"shortage-config"}}],Vd=[{path:"barcode-supplier",name:"barcode-supplier",component:()=>re(()=>import("./BarcodeSupplierView-Cc0oEi1I.js"),__vite__mapDeps([54,1,2,3,4,52,18]),import.meta.url),meta:{title:"条码号供应商代码",module:"barcode-supplier"}}],Bd=[{path:"marc-mapping",name:"marc-mapping",component:()=>re(()=>import("./MarcMappingView-BEzxOfbQ.js"),__vite__mapDeps([55,1,2,3,4,12]),import.meta.url),meta:{title:"订单与MARC类型映射关系",module:"marc-mapping"}}],Fd=[{path:"locations",name:"locations",component:()=>re(()=>import("./LocationManageView-Cxl_BRQa.js"),__vite__mapDeps([56,1,2,3,4,52]),import.meta.url),meta:{title:"馆址管理",module:"location"}}],Hl=Lf({history:gf(),routes:[{path:"/",component:Nd,redirect:"/orders",children:[...Od,...Pd,...$d,...Md,...kd,...Dd,...Ld,...Vd,...Bd,...Fd,{path:"reason-params",name:"reason-params",component:()=>re(()=>import("./ReasonParamsView-CGlfpp5r.js"),__vite__mapDeps([57,1,2,3,4]),import.meta.url),meta:{title:"退换撤订原因参数"}},{path:"placeholder/:slug",name:"placeholder",component:()=>re(()=>import("./PlaceholderView-BOT4PCt-.js"),[],import.meta.url),meta:{title:"待迁移"}}]}]});Hl.beforeEach((e,t,n)=>{document.title=`${e.meta.title||"页面"} - 图书馆采选订单管理系统`,n()});function jd(e,t){return`<div class="prd-spec-header"><div class="prd-spec-header-title">[${e}] ${t}</div></div>`}function _(e,t){return`<p class="prd-spec-section-title">${t}</p>`}function rt(e){return`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};margin-right:6px;"></span>`}function ye(e,t){const n=e.map(s=>`<th>${s}</th>`).join(""),i=t.map(s=>`<tr>${s.map(r=>`<td>${r}</td>`).join("")}</tr>`).join("");return`<table class="prd-spec-table"><thead><tr>${n}</tr></thead><tbody>${i}</tbody></table>`}function ie(e,t,n){return`${jd(e,t)}${n}`}const Hd=ie("5.2.5.1","筛选查询",`
<div id="overview">
${_("","功能描述")}
<p>提供多维度组合检索条件，帮助用户快速定位目标订单。支持展开/收起：默认显示首行 3 列检索项，展开后显示全部条件。</p>
${_("","页面要素")}
<ul>
<li><strong>默认显示</strong>：订单号（文本）、采选方式（下拉）、供应商（下拉）</li>
<li><strong>展开后追加</strong>：发订人、订单状态、结算状态、订户、语种、发订时间（日期范围）、预算名称、资源类型、馆址</li>
<li><strong>操作按钮</strong>：「检索」触发过滤；「重置」清空条件并恢复全量列表</li>
</ul>
</div>
<div id="rules">
${_("","业务规则")}
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
${_("","异常处理")}
<ul>
<li>无匹配数据时表格展示空列表，分页显示 0 条</li>
</ul>
</div>`),Ud=ie("5.2.5.2","数据表格与行操作",`
<div id="overview">
${_("","功能描述")}
<p>以表格形式展示订单列表，支持分页、行勾选及按订单状态动态显示操作按钮。</p>
${_("","表格列")}
<p>复选框列（始终固定列首最左）、序号、订户、馆址、订单号、采选方式、资源类型、语种、供应商、订单时间、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订户、馆址、订单号；列尾 — 操作。列展示自定义规则见 <strong>5.2.5.9</strong>。</p>
${_("","交互逻辑")}
<ul>
<li>订单号列：蓝色文字链，点击切换至「订单行列表」页签并带入订单号筛选</li>
<li>发订备注：有内容时显示蓝色「查看」（悬浮 title 展示全文）；无内容时灰色「查看」</li>
<li>列较多时表格可横向滚动；纵向滚动时表头吸顶；固定列横向滚动时不透出底层字段</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.2.5.9）</li>
<li>订单状态带颜色标识：${rt("#7c3aed")}待导入、${rt("#d97706")}待发订、${rt("#16a34a")}已发订、${rt("#2563eb")}处理中、${rt("#6b7280")}已撤订</li>
<li>分页：默认 10 条/页，底部显示总条数与页码切换</li>
</ul>
</div>
<div id="rules">
${_("","操作按钮规则（按订单状态）")}
${ye(["订单状态","可用操作"],[["待发订 pending","发订、删除"],["待导入 pendingImport","导入订单"],["已发订 ordered","编辑、导出订单、撤订"],["处理中 processing","导出订单"],["已撤订 cancelled","导出订单、删除"]])}
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>导出订单（单行）：原型阶段 alert 提示演示</li>
</ul>
</div>`),Kd=ie("5.2.5.3","新建订单弹窗",`
<div id="overview">
${_("","功能描述")}
<p>通过工具栏「新建订单」按钮打开模态弹窗，填写订单头信息后创建新订单，初始状态为<strong>待导入</strong>。</p>
${_("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 订户、资源类型、采选方式、预算名称、语种、供应商、馆址（均为下拉，必填）</li>
<li>折扣（文本，非必填）</li>
</ul>
</div>
<div id="rules">
${_("","业务规则")}
<ul>
<li>提交前校验全部必填项，未填时在字段下方显示红色提示并 alert 首条错误</li>
<li>新建成功后订单号自动生成，格式 PG001B{yyyyMMdd}{3位流水}</li>
<li>新建订单默认：发订册数/种数 0，码洋/实洋 0.00，结算状态「未结算」，发订时间为空</li>
<li>馆址选项来源于系统馆址配置（仅启用状态）</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>必填项未填：阻止提交，提示「请选择{字段名}」</li>
</ul>
</div>`),Gd=ie("5.2.5.4","编辑订单弹窗",`
<div id="overview">
${_("","功能描述")}
<p>已发订订单可通过操作列「编辑」打开弹窗，修改预算名称、供应商、发订备注。</p>
</div>
<div id="rules">
${_("","业务规则")}
<ul>
<li>预算名称、供应商为必填下拉</li>
<li>发订备注为多行文本，非必填</li>
<li>保存后更新列表对应行（原型 alert「订单已保存」）</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>预算或供应商未选：alert 提示对应字段</li>
</ul>
</div>`),Wd=ie("5.2.5.5","发订",`
<div id="overview">
${_("","功能描述")}
<p>待发订订单通过操作列「发订」打开发订备注弹窗，确认后将订单及下属待发订订单行置为已发订。</p>
</div>
<div id="rules">
${_("","业务规则")}
<ul>
<li>仅 <strong>待发订（pending）</strong> 状态订单可发订</li>
<li>发订后：订单状态 → 已发订；记录发订时间、发订人、发订备注</li>
<li>该订单下所有「待发订」订单行同步变为「已发订」，写入发订时间</li>
<li>发订备注弹窗：多行文本，可为空；标题「请填写发订备注：」</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>非待发订订单发订：alert「仅待发订状态的订单可发订」</li>
</ul>
</div>`),qd=ie("5.2.5.6","导入订单",`
<div id="overview">
${_("","功能描述")}
<p>待导入订单通过「导入订单」打开三步向导弹窗：选择模板并上传 → 查看解析结果 → 入库。</p>
${_("","步骤说明")}
<ol>
<li><strong>选择模板并上传</strong>：按订单资源类型/语种/供应商匹配可用导入模板；支持 xls/xlsx；可下载模板</li>
<li><strong>解析结果</strong>：展示总条数、成功/失败数；可下载解析结果；解析全部成功才可入库</li>
<li><strong>入库</strong>：点击入库显示 loading，成功后展示「入库成功」，订单状态变为待发订并写入订单行</li>
</ol>
</div>
<div id="rules">
${_("","业务规则")}
<ul>
<li>模板列表按当前订单属性从「导入模板管理」模块过滤</li>
<li>仅 1 个可用模板时自动选中</li>
<li>上传前校验：必须选择模板且已选文件</li>
<li>解析存在失败行时「下一步」按钮置灰</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>无匹配模板：提示「暂无与当前订单匹配的导入模板」</li>
<li>未选模板或文件：上传区显示红色校验信息</li>
<li>入库失败：展示「入库失败，请联系管理员」</li>
</ul>
</div>`),Xd=ie("5.2.5.7","撤订与删除",`
<div id="overview">
${_("","功能描述")}
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」）、待发订/已撤订订单删除。</p>
</div>
<div id="rules">
${_("","撤订规则")}
<ul>
<li>撤订前弹出「请选择撤订原因」弹窗，原因来源于「设置 - 退换撤订原因参数」</li>
<li>订单撤订：订单状态 → 已撤订；其下所有订单行状态 → 已撤订，写入撤订原因至备注</li>
<li>批量撤订需先勾选订单，未勾选 alert「请先勾选要撤订的订单」</li>
</ul>
${_("","删除规则")}
<ul>
<li>仅<strong>待发订</strong>或<strong>已撤订</strong>订单可删除</li>
<li>删除前二次确认弹窗展示订单号</li>
<li>删除后移除订单及其全部订单行</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>未选择撤订原因：alert「请选择撤订原因」</li>
<li>无可用撤订原因：下拉为空并提示前往设置配置</li>
</ul>
</div>`),zd=ie("5.2.5.8","批量导出",`
<div id="overview">
${_("","功能描述")}
<p>工具栏「批量导出」下拉提供「导出配置」「导出订单」。导出配置弹窗支持全选/取消及字段勾选。</p>
</div>
<div id="rules">
${_("","可导出字段")}
<p>订户、馆址、订单号、采选方式、资源类型、语种、供应商、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态</p>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>「导出订单」：原型阶段 alert 演示</li>
</ul>
</div>`),Jd=ie("5.2.5.9","列展示配置",`
<div id="overview">
${_("","功能描述")}
<p>工具栏右侧齿轮按钮打开「列展示」面板，支持列显隐、分区内拖拽排序、固定在列首或列尾；配置即时生效并持久化至浏览器本地。</p>
${_("","页面要素")}
<ul>
<li><strong>入口</strong>：工具栏最右侧齿轮图标，悬浮提示「列展示」</li>
<li><strong>面板顶栏</strong>：「列展示」全选复选框 + 「重置」按钮</li>
<li><strong>三区列表</strong>（自上而下）：固定在列首 → 不固定 → 固定在列尾</li>
<li><strong>列项行</strong>：拖拽手柄、显隐复选框、列名；悬停显示固定操作图标</li>
</ul>
</div>
<div id="interaction">
${_("","交互逻辑")}
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
${_("","默认固定位置")}
${ye(["固定位置","默认列"],[["列首固定","序号、订户、馆址、订单号"],["列尾固定","操作"]])}
${_("","业务规则")}
<ul>
<li>复选框列<strong>不参与</strong>列展示配置，始终显示且始终固定于列首最左侧</li>
<li>横向滚动时列首/列尾固定列保持可见，表头与表体同步固定，背景不透明</li>
<li>纵向滚动时表头吸顶</li>
<li>本地存储异常时自动回退默认配置</li>
</ul>
</div>`),Yd=ie("5.3.5.1","筛选查询",`
<div id="overview">
${_("","功能描述")}
<p>支持基础条件 + 组合条件检索订单行，默认显示订单号、订单行号、行状态。</p>
${_("","页面要素")}
<ul>
<li><strong>默认行（收起可见）</strong>：订单号、订单行号、行状态（全部/待发订/已发订/处理中/已关闭）</li>
<li><strong>展开后</strong>：组合条件（资源标识/正题名/作者/出版社 + 且/或逻辑链）、载体、验收状态、结算状态、是否催缺、书目记录号、<strong>馆藏重复</strong>、<strong>订单重复</strong>（位于书目记录号之后）</li>
<li><strong>馆藏重复 / 订单重复</strong>：下拉选框，选项 <strong>全部 / 有 / 无</strong>，默认 <strong>全部</strong></li>
<li>从订单列表点击订单号跳转时，自动带入订单号筛选</li>
</ul>
</div>
<div id="rules">
${_("","业务规则")}
<ul>
<li>组合条件：同一链条内按 logicAfter（且/或）串联；字段值为空则跳过该条件</li>
<li>文本匹配为包含关系（includes）</li>
<li>验收状态「待验收」匹配行 acceptanceStatus 为「待验收」</li>
<li><strong>馆藏重复 / 订单重复</strong>：选「有」仅显示标识为有的行；选「无」仅显示标识为无的行；未查重（空白）不匹配「有」或「无」；两条件可同时使用（AND）</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<p>无匹配数据时展示空表格。</p>
</div>`),Qd=ie("5.3.5.2","数据表格与行操作",`
<div id="overview">
${_("","功能描述")}
<p>展示订单行明细，含序号列、馆藏/订单查重标识列及行级操作入口。</p>
${_("","主要列")}
<p>复选框列、序号、订单号、馆址、订单行号、书目记录号、正题名、资源标识、载体、作者、出版社、出版时间、分卷号、分卷名、定价、币种、套内册数、套数、行状态、验收状态、结算状态、是否催缺、发/收/换/退/撤订、发订时间、馆藏重复、订单重复、备注、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订单号、馆址、订单行号；列尾 — 操作。列展示规则见 <strong>5.3.5.11</strong>。</p>
${_("","书目记录号列")}
<ul>
<li>展示<strong>书目记录号</strong>（<code>bibRecordNo</code>）</li>
<li>若<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值）非空，且其中至少有一条与书目记录号不一致，则在旁显示「<strong>实</strong>」浅蓝徽章；规则详见 <strong>5.3.5.10</strong></li>
<li>悬停「实」：浮层逐条列出全部非空实际关联书目记录号，每条为可点击链接</li>
<li>若实际关联书目记录号为空，或全部与书目记录号相同，则不显示「实」标记</li>
</ul>
${_("","交互")}
<ul>
<li>订单行号：链接跳转订单行详情页 #/orders/line/{orderLineNo}</li>
<li>备注：有备注显示蓝色「查看」，否则「—」</li>
<li>列较多时可横向滚动；表头纵向吸顶；固定列不透底</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.3.5.11）</li>
<li>操作列：查重（条件显示）、编辑、撤订（<strong>不含详情按钮</strong>；详情通过订单行号列跳转）</li>
</ul>
</div>
<div id="rules">
${_("","分页")}
<p>默认 <strong>50</strong> 条/页，可选 <strong>50 / 100 / 200</strong> 条/页；底部显示总条数与页码切换；检索后分页重置为第 1 页。</p>
</div>`),Zd=ie("5.3.5.3","生成催缺单",`
<div id="overview">
${_("","功能描述")}
<p>对已发订或处理中、且验收未完成/未退货的订单行批量生成催缺单。</p>
</div>
<div id="rules">
${_("","启用条件")}
<ul>
<li>至少勾选一条订单行</li>
<li>所勾选行均为「已发订」或「处理中」</li>
<li>验收状态不为「收货完成」「已退货」</li>
</ul>
${_("","生成逻辑")}
<ul>
<li>按订单号分组，过滤不符合条件的行</li>
<li>生成成功后更新订单行「是否催缺」为「是」</li>
<li>弹出成功弹窗，可跳转催缺单管理（单条直达详情，多条进列表）</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>所选行均已收货或已退货：alert 提示无法生成</li>
<li>未勾选：按钮置灰不可用</li>
</ul>
</div>`),eh=ie("5.3.5.4","查重操作入口",`
<div id="overview">
${_("","功能描述")}
<p>提供批量查重与单行查重两种操作入口，触发后弹出查重配置弹窗（见 5.3.5.5）。</p>
${_("","批量查重按钮")}
<ul>
<li>位置：订单行列表工具栏（与「生成催缺单」「撤订」「导出订单行」相邻）</li>
<li>默认状态：置灰不可用（<code>disabled</code>）</li>
<li>启用条件：同时满足以下条件时按钮高亮可点击：
<ol>
<li>至少勾选一条订单行</li>
<li>所勾选订单行均为<strong>待发订</strong>状态（所属订单状态为待发订时，其下所有订单行视为待发订）</li>
<li>所勾选订单行属于<strong>相同资源类型</strong>（从所属订单获取：纸质书 / 视听资料）</li>
<li>所勾选订单行属于<strong>相同语种分类</strong>（从所属订单获取：中文 / 外文）</li>
</ol></li>
<li>点击后：弹出查重配置弹窗</li>
</ul>
${_("","单个查重文字链")}
<ul>
<li>位置：订单行列表操作列</li>
<li>显示条件：仅当该行可进行查重时显示（行状态为待发订，或所属订单状态为待发订）</li>
<li>非待发订行：不显示查重文字链</li>
<li>点击后：以当前行为查重对象，弹出查重配置弹窗</li>
</ul>
</div>
<div id="rules">
${_("","订单行状态（是否可查重）")}
${ye(["状态","说明","是否可查重"],[[`${rt("#d97706")}待发订`,"订单/行尚未发订","是"],[`${rt("#16a34a")}已发订`,"已发订","否"],[`${rt("#2563eb")}处理中`,"处理中","否"],[`${rt("#6b7280")}已关闭`,"已关闭","否"],[`${rt("#6b7280")}已撤订`,"已撤订","否"]])}
${_("","批量查重按钮状态")}
${ye(["状态","说明"],[["不可用（置灰）","未勾选行，或勾选行不满足待发订 / 同资源类型 / 同语种条件"],["可用（高亮）","勾选行均满足批量查重全部启用条件"]])}
${_("","业务规则")}
<ul>
<li>仅<strong>待发订</strong>订单行允许查重；所属订单状态为待发订时，其下所有订单行视为待发订</li>
<li>批量查重要求勾选行资源类型一致、语种分类（中文/外文）一致，语种从所属订单获取</li>
<li>单行查重不受批量勾选限制，但目标行须满足待发订条件</li>
</ul>
${_("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已登录，且有订单行列表查看权限</li>
<li><strong>后置</strong>：查重配置弹窗打开</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>勾选非待发订行进行批量查重：按钮保持置灰；若通过其他方式触发，提示「仅支持行状态为待发订的订单行进行查重」</li>
<li>勾选不同资源类型或不同语种（中文/外文）混合：批量查重按钮置灰；若触发，提示「请勾选相同资源类型和语种（中文/外文）的待发订订单行进行查重」</li>
</ul>
</div>`),th=ie("5.3.5.5","查重配置弹窗",`
<div id="overview">
${_("","功能描述")}
<p>点击查重入口后弹出查重配置弹窗，用户选择重复类型与查重字段后执行查重。</p>
${_("","页面要素")}
<ul>
<li><strong>显示样式</strong>：居中模态弹窗，标题「查重」；底部按钮：「取消」「确定」；点击遮罩或右上角 × 关闭弹窗</li>
<li><strong>重复类型</strong>：单选，默认选中「<strong>不限</strong>」，可选值：
<ul>
<li><strong>不限</strong>：同时执行馆藏查重和订单查重</li>
<li><strong>订单查重</strong>：仅检查与其他订单行的重复</li>
<li><strong>馆藏查重</strong>：仅检查与馆藏书目的重复</li>
</ul></li>
<li><strong>查重字段</strong>：根据待查重订单行所属订单的<strong>资源类型</strong>和<strong>语种</strong>动态展示可选字段。顶部提供「<strong>全部</strong>」复选框，勾选/取消时联动全选/全不选所有字段项；各字段项变更时同步更新「全部」勾选状态。</li>
</ul>
${ye(["资源类型","语种","可选查重字段","默认选中"],[["纸质书","中文","全部、资源标识、题名、作者、出版社、出版年、语种","资源标识"],["纸质书","外文","全部、资源标识、题名、作者、出版社、出版年、语种","资源标识"],["视听资料","中文","全部、题名、载体、限量编号、出版社","题名、载体"],["视听资料","外文","全部、商品条码、目录号","商品条码、目录号"]])}
</div>
<div id="rules">
${_("","交互逻辑")}
<ul>
<li>选择重复类型后立即更新，无额外动作</li>
<li>查重字段「全部」勾选时，所有字段复选框被选中；取消时全部取消；任一字段复选框状态变化时同步更新「全部」状态</li>
<li>至少选择一个查重字段；未选时点击「确定」阻止提交，并提示「请至少选择一个查重字段」</li>
<li>点击「确定」：按钮进入<strong>加载中</strong>（「查重中...」+ 加载图标）；<strong>加载期间防抖</strong>，禁止重复点击，同时禁用取消、关闭及表单选项</li>
<li>查重完成后<strong>自动关闭弹窗</strong>，刷新列表「馆藏重复」「订单重复」标识列</li>
<li>点击「取消」或关闭：不执行查重（加载中不可关闭）</li>
</ul>
${_("","业务规则")}
<ul>
<li>所选字段采用 <strong>AND（且）</strong> 逻辑：所有已选字段的值均非空且相等时，判定为重复</li>
<li><strong>资源标识</strong>比对时忽略大小写及连字符（<code>-</code>）</li>
<li>其他字段比对时忽略大小写</li>
</ul>
${_("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已通过操作入口进入弹窗</li>
<li><strong>后置</strong>：执行查重并更新列表，或取消关闭弹窗</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>未选择任何查重字段：阻止提交，提示「请至少选择一个查重字段」</li>
<li>查重请求失败：提示「查重失败，请稍后重试」，弹窗保持打开</li>
</ul>
</div>`),nh=ie("5.3.5.6","查重结果展示",`
<div id="overview">
${_("","功能描述")}
<p>查重完成后，在订单行列表展示重复标识；用户可点击「有」查看详细查重结果。</p>
${_("","列表重复标识列")}
<p>列表包含两列：<strong>馆藏重复</strong>、<strong>订单重复</strong>。</p>
${ye(["状态","显示"],[["未查重","空白"],["无重复","「无」"],["有重复","蓝色文字链「有」，点击打开查重结果面板"]])}
${_("","查重结果面板（顶部下拉）")}
<ul>
<li>从页面<strong>顶部向下滑出</strong>，全宽展示，高度为视口高度的 <strong>60%</strong></li>
<li>面板结构：标题栏 → 摘要信息区 → 页签栏（仅馆藏查重）→ 结果内容区（可滚动）→ 分页栏</li>
<li>标题：馆藏查重显示「<strong>馆藏查重结果</strong>」；订单查重显示「<strong>订单查重结果</strong>」</li>
<li>摘要区<strong>一行横向展示</strong>：订单行号、查重字段、重复记录数；查重字段过长时截断，悬浮查看完整内容</li>
<li>切换馆藏查重页签时面板高度保持不变；MARC 页签隐藏分页栏时底栏仍占位</li>
<li>点击遮罩或右上角 × 关闭面板</li>
</ul>
${_("","馆藏查重：有单件与无单件")}
<blockquote>馆藏查重比对馆藏书目库。匹配到书目记录即视为馆藏重复，列表显示「有」，<strong>与单件数量是否为 0 无关</strong>。馆员既需确认书目著录是否已存在，也需通过「单件数量」判断是否有实体馆藏。</blockquote>
${ye(["维度","有单件（单件数量 &gt; 0）","无单件（单件数量 = 0）"],[["列表「馆藏重复」","有","有（书目著录已存在）"],["查重结果书目列表","展示","展示"],["单件数量列","蓝色徽章「N本」","灰色徽章「0本」"],["展开馆藏分布","四层馆藏树 + 未关联馆藏（如有）","「暂无馆藏分布」"],["MARC / 关联","可用","可用"]])}
<p><strong>单件数量</strong> = 已分配馆藏地单件数 + 未关联馆藏单件数。未分配馆藏地的单件归入馆藏树「<strong>未关联馆藏</strong>」节点，徽章样式与馆藏地一致。</p>
${_("","馆藏查重结果 · 书目页签")}
<ul>
<li>表格列顺序：<strong>展开/收起</strong> → <strong>单件数量</strong> → 书目字段 → <strong>操作</strong></li>
<li>书目字段随查重订单行的<strong>资源类型 + 语种</strong>动态切换（见下表）</li>
<li>单件数量列：圆角徽章「N本」；&gt; 0 蓝色，= 0 灰色</li>
<li>有单件时展开展示馆藏树；无单件时展开展示「暂无馆藏分布」</li>
<li>默认展开当前页第一条书目行</li>
<li>操作：「查看」切换 MARC；「关联」/「取消关联」写入或清空订单行书目记录号（bibRecordNo）</li>
</ul>
${ye(["资源类型","语种","展示字段"],[["纸质书","中文","书目记录号、正题名、ISBN、作者、出版社、出版年、版本"],["纸质书","外文","书目记录号、题名、ISBN、责任者、出版社、出版日期、语种"],["视听资料","中文","书目记录号、题名、载体、ISBN/ISRC、出版社、版本/格式、著者"],["视听资料","外文","书目记录号、ISRC、题名、载体、商品条码、目录号、出版方"]])}
<p><em>馆藏树</em>：机构 → 馆区 → 分馆 → 馆藏地；分支可展开/收起；叶子节点及「未关联馆藏」以蓝色徽章「N本」展示单件数。</p>
${_("","馆藏查重结果 · MARC信息页签")}
<ul>
<li>表格列：字段名、指示符（表头不换行）、字段内容</li>
<li>展示字段随查重订单行<strong>语种</strong>动态过滤（见下表）</li>
<li>过滤后无可用字段时展示「暂无MARC信息」</li>
<li><strong>MARC 信息页签不显示底部分页栏</strong></li>
<li>直接点击页签：默认展示第一条书目 MARC 信息</li>
<li>书目页签点击「查看」：切换至本页签并展示对应书目 MARC 信息</li>
</ul>
${ye(["语种","展示 MARC 字段"],[["中文","010、2XX、3XX、6XX、7XX"],["外文","020、1XX、2XX、3XX、093"]])}
<p><em>说明</em>：2XX 等表示该百位段内全部三位数 tag（如 2XX = 200–299）。</p>
${_("","订单查重结果")}
<ul>
<li>表格字段：订单行号、馆址、正题名、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、发订时间</li>
<li>列较多时横向滚动；纵向滚动时表头吸顶</li>
<li>暂无操作列（后续可开放「查看」跳转订单行详情）</li>
</ul>
${_("","交互与分页")}
<ul>
<li>分页控件：上一页、第 X/Y 页、下一页、每页条数；底部显示「共 N 条记录」</li>
<li><strong>馆藏查重 · 书目页签</strong>：默认 <strong>5</strong> 条/页，可选 5 / 10 / 20 / 50 条/页</li>
<li><strong>订单查重结果</strong>：默认 <strong>50</strong> 条/页，可选 50 / 100 / 200 条/页</li>
<li>馆藏查重 <strong>MARC 信息页签</strong>不展示分页栏</li>
<li>打开面板时按查重类型重置第 1 页及对应默认每页条数</li>
<li>无重复记录时，内容区显示「暂无查重结果」</li>
</ul>
</div>
<div id="rules">
${_("","交互逻辑")}
<ul>
<li>标识为「有」时方可点击打开结果面板；「无」或空白不响应</li>
<li>馆藏书目行与馆藏树节点均可独立展开/收起</li>
<li>切换至 MARC 页签后内容区滚回顶部；面板高度不变</li>
<li>书目页签「关联」写入书目记录号；「取消关联」清空书目记录号；列表同步更新</li>
<li>分页切换时保持当前页签；打开面板时重置第 1 页、书目页签，默认展开第一条书目行</li>
</ul>
${_("","业务规则")}
<ul>
<li><strong>订单查重</strong>比对范围：当前登录馆员<strong>关联订户</strong>下全部订单行（不含当前行）</li>
<li><strong>馆藏查重</strong>比对范围：馆藏书目库</li>
<li>若匹配到馆藏书目记录，则馆藏重复为「有」，与单件数量是否为 0 无关</li>
<li>单件数量 = 已分配馆藏地 + 未关联馆藏；为 0 时展示灰色「0本」，展开区「暂无馆藏分布」</li>
<li>有单件（&gt; 0）时展示馆藏树；无单件时书目仍列在结果中，可查看 MARC 与关联</li>
<li>重复标识按本次查重配置的重复类型分别更新（「不限」时同时更新两列）</li>
<li>馆藏书目表格字段与 MARC 展示字段均取自查重订单行的资源类型 / 语种</li>
</ul>
<blockquote>查重与查重结果均受订户数据隔离约束，仅比对当前用户所属订户可见范围内的订单行与馆藏数据。</blockquote>
${_("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：已执行查重操作，列表标识列已更新</li>
<li><strong>后置</strong>：查重结果面板展示详细查重结果</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>重复标识为「无」或未查重时，不响应「有」链接点击</li>
<li>结果为空时显示「暂无查重结果」，分页显示第 1/1 页</li>
<li>若点击「有」但后端数据异常，提示「查重结果数据不存在」</li>
<li>书目展开后无馆藏单件（单件数量为 0）：展示「暂无馆藏分布」</li>
<li>MARC 页签无可用书目或过滤后无字段：展示「暂无MARC信息」</li>
</ul>
</div>`),ih=ie("5.3.5.7","编辑订单行",`
<div id="overview">
${_("","功能描述")}
<p>操作列「编辑」打开宽屏弹窗，修改书目及订购信息字段。</p>
${_("","可编辑字段")}
<p>ISBN、正题名、出版社、定价、币种、正文语种、载体、商品条码、目录号、套数、套内册数、书目记录号、卷数、丛编、出版地、出版年、备注</p>
</div>
<div id="rules">
<ul>
<li>币种下拉：人民币/美元/欧元</li>
<li>正文语种：日文、德文、西文、法文、俄文、英文、中文等</li>
<li>保存后更新列表行（原型 alert 演示）</li>
</ul>
</div>`),sh=ie("5.3.5.8","撤订",`
<div id="overview">
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」），流程同订单撤订原因弹窗。</p>
</div>
<div id="rules">
<ul>
<li>撤订后行状态 → 已撤订，备注写入撤订原因</li>
<li>未勾选批量撤订：alert「请先勾选要撤订的订单行」</li>
</ul>
</div>`),rh=ie("5.3.5.9","批量导出",`
<div id="overview">
<p>「导出订单行」下拉：导出配置 / 导出清单。导出配置字段含订单号、馆址、订单行号、正题名、ISBN、作者、出版社、行状态、验收状态、馆藏重复、订单重复等。</p>
</div>`),oh=ie("5.3.5.10","实际关联书目记录号与书目详情浮动弹窗",`
<div id="overview">
${_("","功能描述")}
<p>当订单行的<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）与<strong>书目记录号</strong>（<code>bibRecordNo</code>）存在差异时，在「书目记录号」列通过「<strong>实</strong>」标记提供快捷入口：悬停浮层内点击某条记录号，以<strong>无遮罩可拖拽浮动弹窗</strong>展示该记录号的 MARC 与单件，支持多窗并排对比。</p>
</div>
<div id="ui">
${_("","「实」标记（书目记录号列旁）")}
${ye(["要素","规则"],[["展示位置","订单行列表「书目记录号」列，书目记录号（bibRecordNo）旁"],["显示条件","同时满足：① 实际关联书目记录号（actualBibRecordNos）去空后至少有一条；② 其中至少有一条与书目记录号（bibRecordNo）不一致"],["不显示","实际关联书目记录号为空或均为空字符串；或全部条目均与书目记录号相同（例如仅含一条且等于书目记录号）"],["样式","浅蓝色小徽章「实」"]])}
${_("","「实」标记悬停浮层")}
<ul>
<li><strong>显示前提</strong>：已满足「实」标记显示条件（见上表）</li>
<li><strong>标题</strong>：「实际关联书目记录号」</li>
<li><strong>记录号</strong>：逐条列出全部非空实际关联书目记录号；每条为蓝色可点击链接；<strong>不提供「复制全部」</strong></li>
<li><strong>收起</strong>：鼠标离开约 0.12 秒后收起；点击记录号后不立即关闭，便于连续打开多个弹窗</li>
</ul>
${_("","书目详情浮动弹窗")}
${ye(["要素","规则"],[["默认尺寸","宽 1024px × 高 520px"],["最小尺寸","宽 480px × 高 320px"],["遮罩","无；列表背景仍可操作"],["标题栏","书目记录号、订单行号（orderLineNo）、正题名（title）；可拖拽；× 关闭"],["Tab 顺序","<strong>MARC信息</strong>（默认）→ <strong>单件（N）</strong>"],["单件 Tab","N = 当前记录号在编目系统中的单件行数；无数据时为 单件（0）"],["调整尺寸","四边及四角共 8 个拖拽热区，可调整宽度与高度"]])}
</div>
<div id="interaction">
${_("","交互逻辑")}
<ol>
<li>悬停「实」→ 点击某条实际关联书目记录号 → 打开浮动弹窗，默认 MARC 页签</li>
<li>重复点击同一记录号：将已有弹窗置于最前并短暂高亮，不新建</li>
<li>同时最多 <strong>3</strong> 个不同记录号弹窗；第 4 个提示「最多同时打开 3 个书目详情弹窗，请先关闭部分弹窗」</li>
<li>每新开一窗，在上一窗基础上向右、向下各错开 32 像素</li>
<li>离开订单行列表页签时清空全部弹窗</li>
</ol>
</div>
<div id="rules">
${_("","业务规则")}
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
${_("","异常处理")}
<ul>
<li>编目无 MARC：MARC 页签展示「暂无 MARC 信息」</li>
<li>编目无单件：单件页签表格为空，Tab 为「单件（0）」</li>
<li>已有 3 个弹窗时再开新记录号：提示后拒绝新建</li>
</ul>
</div>`),lh=ie("5.3.5.11","列展示配置",`
<div id="overview">
${_("","功能描述")}
<p>订单行列表工具栏右侧提供「列展示」配置，交互与订单列表一致（详见 <strong>5.2.5.9</strong>），默认固定列不同。</p>
</div>
<div id="rules">
${_("","默认固定位置")}
${ye(["固定位置","默认列"],[["列首固定","序号、订单号、馆址、订单行号"],["列尾固定","操作"]])}
${_("","业务规则")}
<ul>
<li>复选框列不参与列展示，始终固定列首最左</li>
<li>序号（no）为当前页内连续序号，随分页变化</li>
<li>重置后恢复上表默认顺序与固定位置</li>
<li>其余显隐、拖拽、固定、滚动遮挡规则同 5.2.5.9</li>
</ul>
</div>`),ch={title:"非连续出版物订单",tabs:{"order-list":{label:"订单列表",itemIds:["5.2.5.1","5.2.5.2","5.2.5.3","5.2.5.4","5.2.5.5","5.2.5.6","5.2.5.7","5.2.5.8","5.2.5.9"]},"order-line":{label:"订单行列表",itemIds:["5.3.5.1","5.3.5.2","5.3.5.3","5.3.5.4","5.3.5.5","5.3.5.6","5.3.5.7","5.3.5.8","5.3.5.9","5.3.5.10","5.3.5.11"]}},items:[{id:"5.2.5.1",title:"筛选查询",tab:"order-list",htmlContent:Hd},{id:"5.2.5.2",title:"数据表格与行操作",tab:"order-list",htmlContent:Ud},{id:"5.2.5.3",title:"新建订单弹窗",tab:"order-list",htmlContent:Kd},{id:"5.2.5.4",title:"编辑订单弹窗",tab:"order-list",htmlContent:Gd},{id:"5.2.5.5",title:"发订",tab:"order-list",htmlContent:Wd},{id:"5.2.5.6",title:"导入订单",tab:"order-list",htmlContent:qd},{id:"5.2.5.7",title:"撤订与删除",tab:"order-list",htmlContent:Xd},{id:"5.2.5.8",title:"批量导出",tab:"order-list",htmlContent:zd},{id:"5.2.5.9",title:"列展示配置",tab:"order-list",htmlContent:Jd},{id:"5.3.5.1",title:"筛选查询",tab:"order-line",htmlContent:Yd},{id:"5.3.5.2",title:"数据表格与行操作",tab:"order-line",htmlContent:Qd},{id:"5.3.5.3",title:"生成催缺单",tab:"order-line",htmlContent:Zd},{id:"5.3.5.4",title:"查重操作入口",tab:"order-line",htmlContent:eh},{id:"5.3.5.5",title:"查重配置弹窗",tab:"order-line",htmlContent:th},{id:"5.3.5.6",title:"查重结果展示",tab:"order-line",htmlContent:nh},{id:"5.3.5.7",title:"编辑订单行",tab:"order-line",htmlContent:ih},{id:"5.3.5.8",title:"撤订",tab:"order-line",htmlContent:sh},{id:"5.3.5.9",title:"批量导出",tab:"order-line",htmlContent:rh},{id:"5.3.5.10",title:"实际关联书目记录号与书目详情浮动弹窗",tab:"order-line",htmlContent:oh},{id:"5.3.5.11",title:"列展示配置",tab:"order-line",htmlContent:lh}]};function ah(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-manage"]=ch}const uh=ie("5.4.5.1","书目信息",`
<div id="overview">
${_("","功能描述")}
<p>页面顶部展示当前订单行书目信息，采用可折叠卡片布局，默认<strong>展开</strong>。左侧为封面占位区，右侧为<strong>三列网格</strong>展示书目字段；字段集合与顺序由<strong>资源类型 + 语种</strong>决定，全部字段均展示（值为空时显示空白）。</p>
${_("","页面要素")}
<ul>
<li><strong>折叠标题栏</strong>：左侧「书目信息」，右侧「收起/展开」文字链</li>
<li><strong>封面区</strong>：100×140px；有<strong>封面图地址</strong>（<code>coverUrl</code>）时展示图片，否则展示默认书籍 SVG 占位</li>
<li><strong>资源类型 / 语种</strong>：封面下方居中展示</li>
<li><strong>书目字段</strong>：三列网格；一般性附注、图书简介、备注、书评、作者简介、目次信息、馆藏信息等长文本字段占 3 列宽</li>
</ul>
</div>
<div id="fields">
${_("","字段展示规则（按资源类型 / 语种，顺序固定）")}
${_("","纸质书 · 中文")}
<p>正题名、ISBN、副题名、分卷号、分卷名、分类号、出版社、作者、出版年、定价、版本、丛编、主题词、读者对象、装帧形式、尺寸、正文语种、卷数、出版地、一般性附注、图书简介、备注</p>
${_("","纸质书 · 外文")}
<p>ISBN、学科大类、学科细分、中图分类号、中译名、题名、副题名、责任者、丛编、出版社、装帧形式、出版日期、版次、页数、币种、价格、主题词、读者对象、尺寸、语种、简介、精简装ISBN对照、馆藏信息、审读级别、获奖信息、目次信息、分卷号、分卷名、作者简介、书评、备注</p>
${_("","视听资料 · 中文")}
<p>ISBN、ISRC、题名、载体、出版社、版本/格式、著者、币种、码洋、彩胶颜色、限量编号、厂牌、系列名称、是否签名、是否老唱片、获奖信息、北京出版社、分类、盘号、老唱片品牌、剧种、年代、备注</p>
${_("","视听资料 · 外文")}
<p>ISRC、题名、载体、商品条码、目录号、外文原文题名、出版方、码洋、币种、备注、厂牌</p>
<blockquote>语种取自所属订单的<strong>语种</strong>字段（<code>language</code>，中文 / 外文）。</blockquote>
</div>
<div id="interaction">
${_("","交互逻辑")}
<ul>
<li>点击标题栏任意区域切换展开/收起</li>
</ul>
</div>`),fh=ie("5.4.5.2","业务 Tab 页签",`
<div id="overview">
${_("","功能描述")}
<p>书目信息下方为业务 Tab 容器，用于切换查看订单行关联业务数据。Tab 顺序固定，默认激活<strong>相关订单行</strong>。</p>
${_("","Tab 列表")}
<ol>
<li><strong>相关订单行</strong>（默认）</li>
<li><strong>验收记录</strong></li>
<li><strong>结算记录</strong></li>
<li><strong>单件（N）</strong>：N 为合并后单件总行数，无数据时为 0</li>
<li><strong>MARC信息</strong></li>
</ol>
<p>其中「单件（N）」的 N 随单件表格总行数自动刷新；编目无单件时显示「单件（0）」。</p>
</div>
<div id="interaction">
${_("","交互逻辑")}
<ul>
<li>点击 Tab 按钮切换下方内容区，当前 Tab 高亮（底部蓝色边框）</li>
<li>切换 Tab 不刷新书目信息区；各 Tab 内分页状态独立保持</li>
</ul>
</div>`),dh=ie("5.4.5.3","相关订单行",`
<div id="overview">
${_("","功能描述")}
<p>展示与当前订单行<strong>书目匹配</strong>的其他订单行记录，<strong>包含当前订单行本身</strong>。数据范围限定为当前登录馆员<strong>关联订户可查看范围</strong>内的订单行，按发订时间倒序排列。</p>
${_("","表格列")}
<p>序号、订户、订单行号、采购方式、预算名称、供应商、折扣、发订人、发订时间</p>
</div>
<div id="rules">
${_("","书目匹配规则")}
${ye(["资源类型","语种","匹配条件"],[["纸质书","—","资源标识（ISBN）<strong>且</strong> 正题名均相同"],["视听资料","中文","正题名 <strong>且</strong> 载体均相同"],["视听资料","外文","商品条码 <strong>且</strong> 目录号均相同"]])}
<ul>
<li>订户范围：取系统<strong>可查看订户范围</strong>配置（<code>viewableSubscribers</code>），仅展示馆员有权查看的订户订单行</li>
<li>发订人、发订时间为空时展示空白</li>
<li><strong>订单行号</strong>为普通文本，<strong>不可点击跳转</strong></li>
</ul>
</div>
<div id="interaction">
${_("","交互与分页")}
<ul>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
<li>无匹配数据时表格为空</li>
</ul>
</div>`),hh=ie("5.4.5.4","验收记录",`
<div id="overview">
${_("","功能描述")}
<p>展示当前订单行关联的验收汇总记录（按种维度）。从验收模块按订单行号匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段构造。</p>
${_("","表格列")}
<p>序号、订单行号、ISBN（视听为 ISBN/ISRC）、正题名、作者、定价、币种、发/收/换/退套数、最近一次验收时间、最近一次验收人</p>
</div>
<div id="rules">
${_("","业务规则")}
<ul>
<li>发/收/换/退套数格式：<code>发订/收货/换货/退货</code>，数据来源于验收模块</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="interaction">
${_("","交互逻辑")}
<ul>
<li>默认每页 50 条；有数据时显示分页，通常仅 1 条记录</li>
<li>表格不可勾选</li>
</ul>
</div>`),ph=ie("5.4.5.5","结算记录",`
<div id="overview">
${_("","功能描述")}
<p>展示当前订单行结算明细。从结算模块按<strong>订单行号</strong>（<code>orderLineNo</code>）匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段推算。</p>
${_("","表格列")}
<p>复用「已结算」列表字段：序号、订单行号、正题名、资源标识、作者、出版社、定价、币种、实洋、套内册数、结算套数、结算册数、结算金额等。</p>
</div>
<div id="rules">
${_("","业务规则")}
<ul>
<li>系统在结算模块已结算数据中，按订单行号精确查找当前行的结算记录</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>`),gh=ie("5.4.5.6","单件（N）",`
<div id="overview">
${_("","功能描述")}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询单件（馆藏件）并汇总展示。页签文案为 <strong>单件（N）</strong>，N 为合并后的单件总行数（表格一行计 1 条）。</p>
${_("","Tab 标签规则")}
<ul>
<li>页签文案为「单件（N）」，N 等于下方单件表格的总行数</li>
<li>编目无单件时显示 <strong>单件（0）</strong></li>
<li>切换订单行或编目数据变化时，N 随最新查询结果自动刷新</li>
</ul>
${_("","表格列")}
<p>序号（01 格式）、条码号、索书号、所属馆、所属馆藏地、所在馆藏地、借阅类型、卷册描述、登到日期</p>
</div>
<div id="rules">
${_("","单件查询逻辑")}
<ol>
<li>若订单行存在<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值），则逐条向编目系统查询单件，合并为一张表格（一般用于多卷书各卷记录）。</li>
<li>若不存在实际关联书目记录号，则使用<strong>书目记录号</strong>（<code>bibRecordNo</code>）作为唯一条件查询单件。</li>
<li>合并后的总行数即为页签 N，例如 10 行则显示「单件（10）」。</li>
</ol>
${_("","展示规则")}
<ul>
<li>所在馆藏地、卷册描述为空时单元格留空</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
<li>无单件数据时表格为空，页签仍为「单件（0）」</li>
</ul>
</div>
<div id="interaction">
${_("","交互与分页")}
<ul>
<li>切换至本 Tab 时按上述规则加载/刷新单件列表</li>
<li>分页切换不影响页签 N（N 为全部合并结果的总行数，非当前页条数）</li>
</ul>
</div>`),mh=ie("5.4.5.7","MARC信息",`
<div id="overview">
${_("","功能描述")}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询 MARC 字段；无实际关联时回退<strong>书目记录号</strong>。列表上方提供书目记录号下拉框，默认选中第一个，切换后刷新 MARC 表格。</p>
${_("","页面要素")}
<ul>
<li><strong>书目记录号下拉框</strong>：位于 MARC 表格上方；选项为可查询的书目记录号列表</li>
<li><strong>MARC 表格</strong>：列「字段名」「指示符」「字段内容」，最大高度 480px 可滚动</li>
<li>无可用书目记录号或无 MARC 数据时居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="rules">
${_("","书目记录号下拉框规则")}
<ul>
<li>若存在<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）：下拉框列出其全部有效记录号，供切换查看各卷 MARC</li>
<li>若不存在实际关联书目记录号，但<strong>书目记录号</strong>（<code>bibRecordNo</code>）有值：下拉框仅含书目记录号一项</li>
<li>进入详情或切换订单行时，下拉框默认选中<strong>第一项</strong>，并据此刷新 MARC 表格</li>
</ul>
<blockquote>下拉框标签文案为「书目记录号」，选项值为实际用于查编目的记录号（含实际关联书目记录号）。</blockquote>
${_("","MARC 展示规则")}
<ul>
<li>切换下拉选项后，下方 MARC 表格即时刷新，无需额外确认</li>
<li>展示格式与书目查询页 MARC 详情一致（如 010、200、210 等 CNMARC 字段）</li>
<li>无可用记录号或无 MARC 数据时，居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="interaction">
${_("","交互逻辑")}
<ul>
<li>用户切换下拉选项即可查看对应记录号的 MARC 著录</li>
</ul>
</div>`),_h={title:"订单行详情",tabs:{related:{label:"相关订单行",itemIds:["5.4.5.1","5.4.5.2","5.4.5.3"]},acceptance:{label:"验收记录",itemIds:["5.4.5.4"]},settlement:{label:"结算记录",itemIds:["5.4.5.5"]},items:{label:"单件（N）",itemIds:["5.4.5.6"]},marc:{label:"MARC信息",itemIds:["5.4.5.7"]}},items:[{id:"5.4.5.1",title:"书目信息",tab:"related",htmlContent:uh},{id:"5.4.5.2",title:"业务 Tab 页签",tab:"related",htmlContent:fh},{id:"5.4.5.3",title:"相关订单行",tab:"related",htmlContent:dh},{id:"5.4.5.4",title:"验收记录",tab:"acceptance",htmlContent:hh},{id:"5.4.5.5",title:"结算记录",tab:"settlement",htmlContent:ph},{id:"5.4.5.6",title:"单件（N）",tab:"items",htmlContent:gh},{id:"5.4.5.7",title:"MARC信息",tab:"marc",htmlContent:mh}]};function vh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-line-detail"]=_h}const bh=ie("5.5.5.1","关联订单行列表",`
<div id="overview">
${_("","功能描述")}
<p>在书目查询页下方单件区切换至<strong>关联订单行</strong>页签后，展示当前选中书目关联的全部订单行，并提供发/收/换/退/撤订数量汇总及「新建订单」「加入订单」入口。</p>
${_("","页面要素")}
<ul>
<li><strong>页签标题</strong>：关联订单行(N)，N 为当前书目关联订单行条数</li>
<li><strong>工具栏</strong>：新建订单、加入订单</li>
<li><strong>统计栏</strong>：发订数量、收货数量、换货数量、退货数量、撤订数量</li>
<li><strong>表格列</strong>：序号、订单号、馆址、订单行号、正题名、资源标识、载体、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、验收状态、结算状态、发订时间</li>
</ul>
${_("","交互逻辑")}
<ul>
<li>若用户在书目列表切换选中行，则关联订单行列表随当前书目刷新</li>
<li>若未选中书目，则表格展示「请先选中书目」</li>
<li>若已选中书目但无关联行，则展示「暂无关联订单行」</li>
<li>若正题名、作者、出版社文本过长，则鼠标悬停展示全文</li>
<li>若发订时间（issueTime）为空，则单元格显示「—」</li>
</ul>
</div>
<div id="rules">
${_("","数据范围")}
<p>若用户选中书目，则仅展示书目记录号（bibRecordNo）与当前书目一致的订单行。</p>
${_("","排序规则")}
<ol>
<li>若订单行无发订时间（issueTime），则排在列表<strong>最上方</strong></li>
<li>若订单行有发订时间，则按发订时间<strong>从新到旧</strong>排列</li>
<li>若发订时间相同，则按订单行号（orderLineNo）<strong>从小到大</strong>排列</li>
</ol>
<blockquote>上述排序规则与「非连续出版物订单-订单行列表」保持一致。</blockquote>
${_("","统计汇总")}
<p>发/收/换/退/撤订数量由各行流转统计（flowStats，格式为「发/收/换/退/撤」五段数字）分别累加得出。</p>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>若无书目选中，则展示空状态「请先选中书目」</li>
<li>若无关联数据，则展示空状态「暂无关联订单行」</li>
</ul>
</div>`),yh=ie("5.5.5.2","新建订单弹窗",`
<div id="overview">
${_("","功能描述")}
<p>在关联订单行页签点击<strong>新建订单</strong>，为当前选中书目创建订单。若用户选择多个馆址，则每个馆址各生成一个订单号。关闭弹窗后保留上次填写内容，再次打开时可恢复。</p>
${_("","表单字段")}
${ye(["字段","必填","说明"],[["订户（subscriber）","是","下拉选择"],["资源类型（resourceType）","是","下拉；打开时若 MARC 可映射则自动预填"],["采选方式（method）","是","下拉：征订目录/捐赠/现采/交存/交换/拍卖"],["预算名称（budget）","条件","见业务规则；交换或捐赠时非必填且不可选"],["语种（language）","是","下拉；打开时若 MARC 可映射则自动预填"],["供应商（supplier）","是","下拉；随采选方式联动，见业务规则"],["折扣（discount）","否","文本；选择供应商后默认带出，可修改；若填写则须大于 0 且小于等于 1，最多两位小数"],["馆址（sites）","是","多选；至少选一个馆址"]])}
</div>
<div id="rules">
${_("","供应商与采选方式")}
<ul>
<li>若未选择采选方式，则供应商下拉禁用，提示「请先选择采选方式」</li>
<li>若用户切换采选方式，且当前供应商不在新列表中，则清空供应商（supplier）与折扣（discount）</li>
</ul>
${ye(["采选方式","可选供应商范围"],[["现采 / 征订目录","代理商应用中类型为书商且状态为使用中的供应商"],["交存","出版社管理应用中状态为使用中的出版社"],["捐赠","个人管理中类型为捐赠的捐赠人，与资源商管理中类型为团体捐赠的单位，合并展示"],["交换","资源商管理应用中类型为交换且状态为使用中的单位"],["拍卖","代理商应用中类型为拍卖行且状态为使用中的供应商"]])}
${_("","预算名称")}
${ye(["采选方式","预算名称（budget）"],[["交换 / 捐赠","非必填（隐藏必填星号）、下拉禁用；切换至该方式时清空已选值"],["其他采选方式","必填，可编辑"]])}
${_("","折扣")}
<ul>
<li>若用户选择供应商，则折扣（discount）默认取该供应商在主数据中配置的默认值</li>
<li>用户可手动修改折扣；若再次切换供应商，则折扣更新为新供应商的默认值</li>
<li>若用户填写折扣，则须为大于 0 且小于等于 1 的数值，最多两位小数；若不满足则提示并阻止提交</li>
<li>若从上次关闭时的缓存恢复表单，则保留用户已修改的折扣，不因恢复而覆盖</li>
<li>若供应商为捐赠类，则默认折扣可为空</li>
</ul>
${_("","提交与订单号")}
<ul>
<li>若采选方式为交换或捐赠，则提交时不校验预算名称（budget）</li>
<li>若馆址（sites）未选，则提示「请选择馆址」并阻止提交</li>
<li>若必填项缺失，则提示对应字段名称并阻止提交</li>
<li>提交成功后提示所生成的订单号列表并关闭弹窗；订单号格式为 PG001B+日期+流水号，多馆址各生成一单</li>
<li>新建订单默认状态为待发订；来源（source）标记为「元数据」</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>若 MARC 无法映射资源类型或语种，则仍允许手工选择，但不自动预填</li>
<li>若缓存中的供应商与当前采选方式不匹配，则恢复时清空供应商与折扣</li>
<li>若缓存中的采选方式为交换或捐赠，则恢复时清空预算名称</li>
</ul>
</div>`),Ch=ie("5.5.5.3","加入订单弹窗",`
<div id="overview">
${_("","功能描述")}
<p>将当前选中书目加入已有<strong>待发订</strong>订单。弹窗自上而下分三区：检索与订单列表、馆址分配、共用字段（币种/定价/套内册数/备注）。</p>
${_("","前置条件")}
<ul>
<li>用户已选中书目</li>
<li>若书目 MARC 类型无法映射出资源类型（resourceType）与语种（language），则提示「无法根据当前书目 MARC 类型匹配订单资源类型与语种」，且不打开弹窗</li>
<li>候选订单仅包含与当前书目 MARC 映射结果在资源类型、语种上一致，且订单状态为待发订的订单</li>
</ul>
</div>
<div id="search">
${_("","检索区")}
${ye(["控件","规则"],[["订单号（orderId）","若输入关键字，则对订单号做包含匹配（不区分大小写）"],["采选方式（method）","下拉：全部，或指定六种采选方式之一"],["供应商（supplier）","下拉：全部，或当前候选列表中出现过的供应商"],["检索","点击后按上述条件过滤列表"],["重置","清空三个条件并恢复全量候选列表"]])}
<p>列表默认按订单创建时间（createTime）<strong>从新到旧</strong>排列。</p>
</div>
<div id="list">
${_("","订单列表（上区）")}
<ul>
<li>支持多选；选中行以浅黄色背景高亮</li>
<li>表头固定，列表区域可纵向滚动；列较多时可横向滚动</li>
<li>列表<strong>不含套数列</strong>；套数仅在中区馆址行填写</li>
</ul>
${ye(["列","说明"],[["勾选","绑定订单号（orderId）"],["订单号 / 订户 / 馆址 / 采选方式 / 供应商","只读展示"],["预算名称（budget）","过长时截断，悬停展示全文"],["折扣（discount）","只读"],["发订状态","展示待发订、待导入等状态文案"],["创建时间（createTime）","只读；列表按此字段倒序"]])}
${_("","空状态")}
<ul>
<li>若无任何候选订单，则展示「暂无匹配的待发订订单」</li>
<li>若检索后无匹配结果，则展示「未找到符合条件的订单」</li>
</ul>
</div>
<div id="site">
${_("","馆址分配（中区）")}
<ul>
<li>若未勾选任何订单，则展示「请先在上方的列表中选择订单」</li>
<li>若勾选 N 条订单，则展示 N 行馆址行；馆址（site）只读，取自对应订单；下方灰色小字展示订单号（orderId）</li>
<li>套数（sets）为大于等于 0 的整数输入，默认 1，可修改；馆址行顺序与上方列表一致（按创建时间从新到旧）</li>
<li>若取消勾选某订单，则移除对应馆址行；若再次勾选，则套数优先从上次关闭时的缓存恢复</li>
</ul>
</div>
<div id="form">
${_("","共用表单（下区）")}
${ye(["字段","必填","规则"],[["币种（currency）","是","若书目语种为中文，则默认人民币；若为外文，则需用户选择"],["定价（price）","是","须为有效数值，最多两位小数；中文书目填定价，外文书目填原定价"],["套内册数（copiesInSet）","是","正整数，默认 1；输入时仅保留正整数"],["备注（remark）","否","多行文本，最多 500 个字符"]])}
</div>
<div id="rules">
${_("","提交校验")}
<ol>
<li>若未勾选任何订单，则提示「请至少选择一个订单」</li>
<li>若任一行套数（sets）不是大于等于 0 的整数，则提示「请为每个馆址填写有效套数」</li>
<li>若所有行套数均为 0，则提示「请至少为一个馆址填写大于0的套数」</li>
<li>若定价（price）未填或格式无效，则提示「请输入定价」或「定价须为有效数值，最多两位小数」</li>
<li>若套内册数（copiesInSet）不是正整数，则提示「套内册数须为正整数」</li>
<li>若币种未填，则提示「请填写必填项」</li>
<li>若备注（remark）超过 500 个字符，则提示「备注最多500个字符」</li>
</ol>
${_("","提交结果")}
<ul>
<li>校验通过后，为每条勾选的订单各生成一条关联订单行（当前原型以提示框演示）</li>
<li>关闭弹窗时保存检索条件、勾选订单、各馆址套数及共用字段，供下次打开恢复</li>
</ul>
</div>
<div id="exception">
${_("","异常处理")}
<ul>
<li>未选订单即提交：「请至少选择一个订单」</li>
<li>套数无效：「请为每个馆址填写有效套数」或「请至少为一个馆址填写大于0的套数」</li>
<li>套内册数无效：「套内册数须为正整数」</li>
<li>定价格式无效：「定价须为有效数值，最多两位小数」</li>
<li>备注超长：「备注最多500个字符」</li>
<li>共用字段缺失：「请填写必填项」</li>
</ul>
</div>`),Sh={title:"书目查询",tabs:{"related-order":{label:"关联订单行",itemIds:["5.5.5.1","5.5.5.2","5.5.5.3"]}},items:[{id:"5.5.5.1",title:"关联订单行列表",tab:"related-order",htmlContent:bh},{id:"5.5.5.2",title:"新建订单弹窗",tab:"related-order",htmlContent:yh},{id:"5.5.5.3",title:"加入订单弹窗",tab:"related-order",htmlContent:Ch}]};function Rh(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["bib-query"]=Sh}ah();vh();Rh();const Ls=pu(Tu);Ls.use(_u());Ls.use(Hl);Ls.mount("#app");export{jf as $,ol as A,$o as B,ps as C,mi as D,kn as E,Pe as F,$s as G,Nh as H,Ga as I,Mo as J,wh as K,Ke as L,xs as M,Kn as N,In as O,Ri as P,Bf as Q,$h as R,Ph as S,Ah as T,Eh as U,cd as V,Oh as W,Kh as X,Ml as Y,Wh as Z,Ru as _,Q as a,nd as a0,id as a1,qh as a2,kl as a3,Yf as a4,Xh as a5,Gh as a6,Qh as a7,Zh as a8,ep as a9,zh as aa,Jh as ab,Yh as ac,Dh as ad,Uh as ae,tp as af,np as ag,ip as ah,Bh as ai,Vh as aj,Lh as ak,Hh as al,jh as am,Fh as an,Ce as b,De as c,ge as d,Mh as e,As as f,fu as g,nl as h,Mc as i,il as j,pi as k,Le as l,be as m,It as n,Es as o,kh as p,Vf as q,Yi as r,rn as s,nn as t,Ff as u,Th as v,Bt as w,xh as x,Ih as y,ea as z};
