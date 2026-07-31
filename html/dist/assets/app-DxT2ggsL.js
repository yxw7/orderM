const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OrderManageView-BjvaoxM_.js","./SearchPanel-Czy9tC8_.js","./SearchExpandToggle-BXL9C65V.js","./DataTable-CpeMnMBs.js","./PaginationBar-2V0YHuvb.js","./DataTable-TwsiaAEU.css","./HoverTooltip-DlTp-rjz.js","./DropdownButton-DW6uQMZ4.js","./order-B1Tv_T9H.js","./order-line-detail-DnX_eI9A.js","./acquisition-methods-Qch6MY5a.js","./acceptance-detail-BnBp_YQj.js","./settled-list-BOMbvSXf.js","./marc-mapping-manage-C0qr4aln.js","./use-site-options-BP4T5LdD.js","./supplier-sources-Db8dQUbQ.js","./current-librarian-Bdm8qkeG.js","./association-vB9JPyFr.js","./subscriber-manage-Cw2ov30X.js","./SearchableSingleSelect-Bocl-Isp.js","./MarcTable-gVzCCjVE.js","./FormModal-CPFZqjGX.js","./shortage-DVwrX4-D.js","./import-template-manage-CqXZMuHR.js","./PrdSpecDrawer-C1NRusbB.js","./PrdSpecDrawer-Ci5ThT7X.css","./OrderManageView-Wo9hP_Z3.css","./OrderLineDetailView-BVLygfiE.js","./OrderLineDetailView-Dg9xnmTN.css","./BibQueryView-CipkTsVF.js","./currency-manage-C6gvmfle.js","./SiteMultiSelect-RMjy2ai-.js","./BibQueryView-d50iNJal.css","./NewBibView-D4rA2wKQ.js","./use-breadcrumb-back-BdS8T_fO.js","./Z3950QueryView-D2UCv5UW.js","./AcceptanceManageView-B7QzYPyY.js","./acceptance-list-eR948ub9.js","./AcceptanceSettlementModal-DKHZcx-6.js","./AcceptanceExportConfigModal-Dj-YMB8X.js","./delivery-import-B8fDUigb.js","./receive-by-item-BbWjglbO.js","./AcceptanceDetailView-tfEun4LL.js","./DeliveryImportTaskListView-BCLdaeI5.js","./delivery-import-tasks-Heou6Dbf.js","./DeliveryImportTaskListView-C8ix_IVu.css","./DeliveryImportTaskDetailView-BavMy7oo.js","./BarcodePreviewModal-Bscr73WU.js","./DeliveryImportTaskDetailView-BSuCGUyz.css","./ReceiveByItemView-CyXiuqc0.js","./BatchAcceptanceView-Bib-vCuD.js","./ExchangeManageView-BXrK_1R4.js","./ReturnManageView-D2gMwviT.js","./ShortageManageView-MYcRH8YV.js","./ShortageCancelModal-BPs3HZjB.js","./ShortageDetailView-CXpKvtRg.js","./PendingSettlementView-96FtbifS.js","./SettledView-DVl16IIh.js","./settled-DLVpEtTD.js","./SettlementDetailView-DOco5Vd_.js","./SettlementListView-CfuAScXZ.js","./FailSettlementView-h5tveFAx.js","./SubscriberListView-C4eDNdzB.js","./LibrarianListView-DgWM4TrW.js","./CurrencyInfoView-BNNBcuw8.js","./ImportTemplateConfigView-DC1DZuWu.js","./StatusToggle-BwTsBPBK.js","./ShortageConfigView-C-G_fKST.js","./BarcodeSupplierView-C9f75y6H.js","./MarcMappingView-B-oSAhyb.js","./LocationManageView-CLcVOZsJ.js","./ReasonParamsView-CDE1B998.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}const oe={},Jt=[],lt=()=>{},Xr=()=>!1,rn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ln=e=>e.startsWith("onUpdate:"),Te=Object.assign,ps=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},Xo=Object.prototype.hasOwnProperty,ie=(e,t)=>Xo.call(e,t),H=Array.isArray,Qt=e=>ui(e)==="[object Map]",ai=e=>ui(e)==="[object Set]",js=e=>ui(e)==="[object Date]",Yo=e=>ui(e)==="[object RegExp]",W=e=>typeof e=="function",ue=e=>typeof e=="string",je=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",Yr=e=>(se(e)||W(e))&&W(e.then)&&W(e.catch),zr=Object.prototype.toString,ui=e=>zr.call(e),zo=e=>ui(e).slice(8,-1),Jr=e=>ui(e)==="[object Object]",on=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_i=ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cn=e=>{const t=Object.create(null);return(i=>t[i]||(t[i]=e(i)))},Jo=/-\w/g,ke=cn(e=>e.replace(Jo,t=>t.slice(1).toUpperCase())),Qo=/\B([A-Z])/g,Pt=cn(e=>e.replace(Qo,"-$1").toLowerCase()),an=cn(e=>e.charAt(0).toUpperCase()+e.slice(1)),xn=cn(e=>e?`on${an(e)}`:""),rt=(e,t)=>!Object.is(e,t),Zt=(e,...t)=>{for(let i=0;i<e.length;i++)e[i](...t)},Qr=(e,t,i,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:i})},un=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Hs;const fn=()=>Hs||(Hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hs(e){if(H(e)){const t={};for(let i=0;i<e.length;i++){const n=e[i],s=ue(n)?ic(n):hs(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(ue(e)||se(e))return e}const Zo=/;(?![^(]*\))/g,ec=/:([^]+)/,tc=/\/\*[^]*?\*\//g;function ic(e){const t={};return e.replace(tc,"").split(Zo).forEach(i=>{if(i){const n=i.split(ec);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function It(e){let t="";if(ue(e))t=e;else if(H(e))for(let i=0;i<e.length;i++){const n=It(e[i]);n&&(t+=n+" ")}else if(se(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}const nc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sc=ds(nc);function Zr(e){return!!e||e===""}function rc(e,t){if(e.length!==t.length)return!1;let i=!0;for(let n=0;i&&n<e.length;n++)i=Nt(e[n],t[n]);return i}function Nt(e,t){if(e===t)return!0;let i=js(e),n=js(t);if(i||n)return i&&n?e.getTime()===t.getTime():!1;if(i=je(e),n=je(t),i||n)return e===t;if(i=H(e),n=H(t),i||n)return i&&n?rc(e,t):!1;if(i=se(e),n=se(t),i||n){if(!i||!n)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const l in e){const o=e.hasOwnProperty(l),c=t.hasOwnProperty(l);if(o&&!c||!o&&c||!Nt(e[l],t[l]))return!1}}return String(e)===String(t)}function gs(e,t){return e.findIndex(i=>Nt(i,t))}const el=e=>!!(e&&e.__v_isRef===!0),ii=e=>ue(e)?e:e==null?"":H(e)||se(e)&&(e.toString===zr||!W(e.toString))?el(e)?ii(e.value):JSON.stringify(e,tl,2):String(e),tl=(e,t)=>el(t)?tl(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[n,s],r)=>(i[In(n,r)+" =>"]=s,i),{})}:ai(t)?{[`Set(${t.size})`]:[...t.values()].map(i=>In(i))}:je(t)?In(t):se(t)&&!H(t)&&!Jr(t)?String(t):t,In=(e,t="")=>{var i;return je(e)?`Symbol(${(i=e.description)!=null?i:t})`:e};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class il{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&be&&(be.active?(this.parent=be,this.index=(be.scopes||(be.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].pause();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].resume();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].resume()}}run(t){if(this._active){const i=be;try{return be=this,t()}finally{be=i}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){if(this._on>0&&--this._on===0){if(be===this)be=this.prevScope;else{let t=be;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function nl(e){return new il(e)}function sl(){return be}function lc(e,t=!1){be&&be.cleanups.push(e)}let ae;const wn=new WeakSet;class rl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&(be.active?be.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wn.has(this)&&(wn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ol(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Us(this),cl(this);const t=ae,i=Xe;ae=this,Xe=!0;try{return this.fn()}finally{al(this),ae=t,Xe=i,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)bs(t);this.deps=this.depsTail=void 0,Us(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gn(this)&&this.run()}get dirty(){return Gn(this)}}let ll=0,Si,yi;function ol(e,t=!1){if(e.flags|=8,t){e.next=yi,yi=e;return}e.next=Si,Si=e}function ms(){ll++}function vs(){if(--ll>0)return;if(yi){let t=yi;for(yi=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;Si;){let t=Si;for(Si=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function cl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function al(e){let t,i=e.depsTail,n=i;for(;n;){const s=n.prevDep;n.version===-1?(n===i&&(i=s),bs(n),oc(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=i}function Gn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ul(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ul(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ii)||(e.globalVersion=Ii,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Gn(e))))return;e.flags|=2;const t=e.dep,i=ae,n=Xe;ae=e,Xe=!0;try{cl(e);const s=e.fn(e._value);(t.version===0||rt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ae=i,Xe=n,al(e),e.flags&=-3}}function bs(e,t=!1){const{dep:i,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let r=i.computed.deps;r;r=r.nextDep)bs(r,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function oc(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}let Xe=!0;const fl=[];function ct(){fl.push(Xe),Xe=!1}function at(){const e=fl.pop();Xe=e===void 0?!0:e}function Us(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=ae;ae=void 0;try{t()}finally{ae=i}}}let Ii=0;class cc{constructor(t,i){this.sub=t,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _s{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ae||!Xe||ae===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==ae)i=this.activeLink=new cc(ae,this),ae.deps?(i.prevDep=ae.depsTail,ae.depsTail.nextDep=i,ae.depsTail=i):ae.deps=ae.depsTail=i,dl(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=ae.depsTail,i.nextDep=void 0,ae.depsTail.nextDep=i,ae.depsTail=i,ae.deps===i&&(ae.deps=n)}return i}trigger(t){this.version++,Ii++,this.notify(t)}notify(t){ms();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{vs()}}}function dl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)dl(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subs=e}}const Wi=new WeakMap,Vt=Symbol(""),Wn=Symbol(""),wi=Symbol("");function xe(e,t,i){if(Xe&&ae){let n=Wi.get(e);n||Wi.set(e,n=new Map);let s=n.get(i);s||(n.set(i,s=new _s),s.map=n,s.key=i),s.track()}}function mt(e,t,i,n,s,r){const l=Wi.get(e);if(!l){Ii++;return}const o=c=>{c&&c.trigger()};if(ms(),t==="clear")l.forEach(o);else{const c=H(e),u=c&&on(i);if(c&&i==="length"){const a=Number(n);l.forEach((d,g)=>{(g==="length"||g===wi||!je(g)&&g>=a)&&o(d)})}else switch((i!==void 0||l.has(void 0))&&o(l.get(i)),u&&o(l.get(wi)),t){case"add":c?u&&o(l.get("length")):(o(l.get(Vt)),Qt(e)&&o(l.get(Wn)));break;case"delete":c||(o(l.get(Vt)),Qt(e)&&o(l.get(Wn)));break;case"set":Qt(e)&&o(l.get(Vt));break}}vs()}function ac(e,t){const i=Wi.get(e);return i&&i.get(t)}function Gt(e){const t=Q(e);return t===e?t:(xe(t,"iterate",wi),Fe(e)?t:t.map(Ye))}function dn(e){return xe(e=Q(e),"iterate",wi),e}function nt(e,t){return _t(e)?ni(ot(e)?Ye(t):t):Ye(t)}const uc={__proto__:null,[Symbol.iterator](){return Nn(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return Gt(this).concat(...e.map(t=>H(t)?Gt(t):t))},entries(){return Nn(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return dt(this,"every",e,t,void 0,arguments)},filter(e,t){return dt(this,"filter",e,t,i=>i.map(n=>nt(this,n)),arguments)},find(e,t){return dt(this,"find",e,t,i=>nt(this,i),arguments)},findIndex(e,t){return dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return dt(this,"findLast",e,t,i=>nt(this,i),arguments)},findLastIndex(e,t){return dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return $n(this,"includes",e)},indexOf(...e){return $n(this,"indexOf",e)},join(e){return Gt(this).join(e)},lastIndexOf(...e){return $n(this,"lastIndexOf",e)},map(e,t){return dt(this,"map",e,t,void 0,arguments)},pop(){return di(this,"pop")},push(...e){return di(this,"push",e)},reduce(e,...t){return Ks(this,"reduce",e,t)},reduceRight(e,...t){return Ks(this,"reduceRight",e,t)},shift(){return di(this,"shift")},some(e,t){return dt(this,"some",e,t,void 0,arguments)},splice(...e){return di(this,"splice",e)},toReversed(){return Gt(this).toReversed()},toSorted(e){return Gt(this).toSorted(e)},toSpliced(...e){return Gt(this).toSpliced(...e)},unshift(...e){return di(this,"unshift",e)},values(){return Nn(this,"values",e=>nt(this,e))}};function Nn(e,t,i){const n=dn(e),s=n[t]();return n!==e&&!Fe(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=i(r.value)),r}),s}const fc=Array.prototype;function dt(e,t,i,n,s,r){const l=dn(e),o=l!==e&&!Fe(e),c=l[t];if(c!==fc[t]){const d=c.apply(e,r);return o?Ye(d):d}let u=i;l!==e&&(o?u=function(d,g){return i.call(this,nt(e,d),g,e)}:i.length>2&&(u=function(d,g){return i.call(this,d,g,e)}));const a=c.call(l,u,n);return o&&s?s(a):a}function Ks(e,t,i,n){const s=dn(e),r=s!==e&&!Fe(e);let l=i,o=!1;s!==e&&(r?(o=n.length===0,l=function(u,a,d){return o&&(o=!1,u=nt(e,u)),i.call(this,u,nt(e,a),d,e)}):i.length>3&&(l=function(u,a,d){return i.call(this,u,a,d,e)}));const c=s[t](l,...n);return o?nt(e,c):c}function $n(e,t,i){const n=Q(e);xe(n,"iterate",wi);const s=n[t](...i);return(s===-1||s===!1)&&pn(i[0])?(i[0]=Q(i[0]),n[t](...i)):s}function di(e,t,i=[]){ct(),ms();const n=Q(e)[t].apply(e,i);return vs(),at(),n}const dc=ds("__proto__,__v_isRef,__isVue"),pl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(je));function pc(e){je(e)||(e=String(e));const t=Q(this);return xe(t,"has",e),t.hasOwnProperty(e)}class hl{constructor(t=!1,i=!1){this._isReadonly=t,this._isShallow=i}get(t,i,n){if(i==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(i==="__v_isReactive")return!s;if(i==="__v_isReadonly")return s;if(i==="__v_isShallow")return r;if(i==="__v_raw")return n===(s?r?Rc:bl:r?vl:ml).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const l=H(t);if(!s){let c;if(l&&(c=uc[i]))return c;if(i==="hasOwnProperty")return pc}const o=Reflect.get(t,i,pe(t)?t:n);if((je(i)?pl.has(i):dc(i))||(s||xe(t,"get",i),r))return o;if(pe(o)){const c=l&&on(i)?o:o.value;return s&&se(c)?Xn(c):c}return se(o)?s?Xn(o):ki(o):o}}class gl extends hl{constructor(t=!1){super(!1,t)}set(t,i,n,s){let r=t[i];const l=H(t)&&on(i);if(!this._isShallow){const u=_t(r);if(!Fe(n)&&!_t(n)&&(r=Q(r),n=Q(n)),!l&&pe(r)&&!pe(n))return u||(r.value=n),!0}const o=l?Number(i)<t.length:ie(t,i),c=Reflect.set(t,i,n,pe(t)?t:s);return t===Q(s)&&c&&(o?rt(n,r)&&mt(t,"set",i,n):mt(t,"add",i,n)),c}deleteProperty(t,i){const n=ie(t,i);t[i];const s=Reflect.deleteProperty(t,i);return s&&n&&mt(t,"delete",i,void 0),s}has(t,i){const n=Reflect.has(t,i);return(!je(i)||!pl.has(i))&&xe(t,"has",i),n}ownKeys(t){return xe(t,"iterate",H(t)?"length":Vt),Reflect.ownKeys(t)}}class hc extends hl{constructor(t=!1){super(!0,t)}set(t,i){return!0}deleteProperty(t,i){return!0}}const gc=new gl,mc=new hc,vc=new gl(!0);const qn=e=>e,Li=e=>Reflect.getPrototypeOf(e);function bc(e,t,i){return function(...n){const s=this.__v_raw,r=Q(s),l=Qt(r),o=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,u=s[e](...n),a=i?qn:t?ni:Ye;return!t&&xe(r,"iterate",c?Wn:Vt),Te(Object.create(u),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:o?[a(d[0]),a(d[1])]:a(d),done:g}}})}}function Bi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function _c(e,t){const i={get(s){const r=this.__v_raw,l=Q(r),o=Q(s);e||(rt(s,o)&&xe(l,"get",s),xe(l,"get",o));const{has:c}=Li(l),u=t?qn:e?ni:Ye;if(c.call(l,s))return u(r.get(s));if(c.call(l,o))return u(r.get(o));r!==l&&r.get(s)},get size(){const s=this.__v_raw;return!e&&xe(Q(s),"iterate",Vt),s.size},has(s){const r=this.__v_raw,l=Q(r),o=Q(s);return e||(rt(s,o)&&xe(l,"has",s),xe(l,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const l=this,o=l.__v_raw,c=Q(o),u=t?qn:e?ni:Ye;return!e&&xe(c,"iterate",Vt),o.forEach((a,d)=>s.call(r,u(a),u(d),l))}};return Te(i,e?{add:Bi("add"),set:Bi("set"),delete:Bi("delete"),clear:Bi("clear")}:{add(s){const r=Q(this),l=Li(r),o=Q(s),c=!t&&!Fe(s)&&!_t(s)?o:s;return l.has.call(r,c)||rt(s,c)&&l.has.call(r,s)||rt(o,c)&&l.has.call(r,o)||(r.add(c),mt(r,"add",c,c)),this},set(s,r){!t&&!Fe(r)&&!_t(r)&&(r=Q(r));const l=Q(this),{has:o,get:c}=Li(l);let u=o.call(l,s);u||(s=Q(s),u=o.call(l,s));const a=c.call(l,s);return l.set(s,r),u?rt(r,a)&&mt(l,"set",s,r):mt(l,"add",s,r),this},delete(s){const r=Q(this),{has:l,get:o}=Li(r);let c=l.call(r,s);c||(s=Q(s),c=l.call(r,s)),o&&o.call(r,s);const u=r.delete(s);return c&&mt(r,"delete",s,void 0),u},clear(){const s=Q(this),r=s.size!==0,l=s.clear();return r&&mt(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=bc(s,e,t)}),i}function Ss(e,t){const i=_c(e,t);return(n,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(ie(i,s)&&s in n?i:n,s,r)}const Sc={get:Ss(!1,!1)},yc={get:Ss(!1,!0)},Cc={get:Ss(!0,!1)};const ml=new WeakMap,vl=new WeakMap,bl=new WeakMap,Rc=new WeakMap;function Tc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ki(e){return _t(e)?e:ys(e,!1,gc,Sc,ml)}function _l(e){return ys(e,!1,vc,yc,vl)}function Xn(e){return ys(e,!0,mc,Cc,bl)}function ys(e,t,i,n,s){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=s.get(e);if(r)return r;const l=Tc(zo(e));if(l===0)return e;const o=new Proxy(e,l===2?n:i);return s.set(e,o),o}function ot(e){return _t(e)?ot(e.__v_raw):!!(e&&e.__v_isReactive)}function _t(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function pn(e){return e?!!e.__v_raw:!1}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Cs(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&Qr(e,"__v_skip",!0),e}const Ye=e=>se(e)?ki(e):e,ni=e=>se(e)?Xn(e):e;function pe(e){return e?e.__v_isRef===!0:!1}function hn(e){return Sl(e,!1)}function Ac(e){return Sl(e,!0)}function Sl(e,t){return pe(e)?e:new Ec(e,t)}class Ec{constructor(t,i){this.dep=new _s,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?t:Q(t),this._value=i?t:Ye(t),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(t){const i=this._rawValue,n=this.__v_isShallow||Fe(t)||_t(t);t=n?t:Q(t),rt(t,i)&&(this._rawValue=t,this._value=n?t:Ye(t),this.dep.trigger())}}function ye(e){return pe(e)?e.value:e}const xc={get:(e,t,i)=>t==="__v_raw"?e:ye(Reflect.get(e,t,i)),set:(e,t,i,n)=>{const s=e[t];return pe(s)&&!pe(i)?(s.value=i,!0):Reflect.set(e,t,i,n)}};function yl(e){return ot(e)?e:new Proxy(e,xc)}function Ic(e){const t=H(e)?new Array(e.length):{};for(const i in e)t[i]=Cl(e,i);return t}class wc{constructor(t,i,n){this._object=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=je(i)?i:String(i),this._raw=Q(t);let s=!0,r=t;if(!H(t)||je(this._key)||!on(this._key))do s=!pn(r)||Fe(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=ye(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&pe(this._raw[this._key])){const i=this._object[this._key];if(pe(i)){i.value=t;return}}this._object[this._key]=t}get dep(){return ac(this._raw,this._key)}}class Nc{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function $c(e,t,i){return pe(e)?e:W(e)?new Nc(e):se(e)&&arguments.length>1?Cl(e,t,i):hn(e)}function Cl(e,t,i){return new wc(e,t,i)}class Pc{constructor(t,i,n){this.fn=t,this.setter=i,this._value=void 0,this.dep=new _s(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return ol(this,!0),!0}get value(){const t=this.dep.track();return ul(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Oc(e,t,i=!1){let n,s;return W(e)?n=e:(n=e.get,s=e.set),new Pc(n,s,i)}const Vi={},qi=new WeakMap;let Mt;function kc(e,t=!1,i=Mt){if(i){let n=qi.get(i);n||qi.set(i,n=[]),n.push(e)}}function Dc(e,t,i=oe){const{immediate:n,deep:s,once:r,scheduler:l,augmentJob:o,call:c}=i,u=_=>s?_:Fe(_)||s===!1||s===0?vt(_,1):vt(_);let a,d,g,m,T=!1,S=!1;if(pe(e)?(d=()=>e.value,T=Fe(e)):ot(e)?(d=()=>u(e),T=!0):H(e)?(S=!0,T=e.some(_=>ot(_)||Fe(_)),d=()=>e.map(_=>{if(pe(_))return _.value;if(ot(_))return u(_);if(W(_))return c?c(_,2):_()})):W(e)?t?d=c?()=>c(e,2):e:d=()=>{if(g){ct();try{g()}finally{at()}}const _=Mt;Mt=a;try{return c?c(e,3,[m]):e(m)}finally{Mt=_}}:d=lt,t&&s){const _=d,D=s===!0?1/0:s;d=()=>vt(_(),D)}const I=sl(),P=()=>{a.stop(),I&&I.active&&ps(I.effects,a)};if(r&&t){const _=t;t=(...D)=>{const X=_(...D);return P(),X}}let b=S?new Array(e.length).fill(Vi):Vi;const y=_=>{if(!(!(a.flags&1)||!a.dirty&&!_))if(t){const D=a.run();if(_||s||T||(S?D.some((X,M)=>rt(X,b[M])):rt(D,b))){g&&g();const X=Mt;Mt=a;try{const M=[D,b===Vi?void 0:S&&b[0]===Vi?[]:b,m];b=D,c?c(t,3,M):t(...M)}finally{Mt=X}}}else a.run()};return o&&o(y),a=new rl(d),a.scheduler=l?()=>l(y,!1):y,m=_=>kc(_,!1,a),g=a.onStop=()=>{const _=qi.get(a);if(_){if(c)c(_,4);else for(const D of _)D();qi.delete(a)}},t?n?y(!0):b=a.run():l?l(y.bind(null,!0),!0):a.run(),P.pause=a.pause.bind(a),P.resume=a.resume.bind(a),P.stop=P,P}function vt(e,t=1/0,i){if(t<=0||!se(e)||e.__v_skip||(i=i||new Map,(i.get(e)||0)>=t))return e;if(i.set(e,t),t--,pe(e))vt(e.value,t,i);else if(H(e))for(let n=0;n<e.length;n++)vt(e[n],t,i);else if(ai(e)||Qt(e))e.forEach(n=>{vt(n,t,i)});else if(Jr(e)){for(const n in e)vt(e[n],t,i);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&vt(e[n],t,i)}return e}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Di(e,t,i,n){try{return n?e(...n):e()}catch(s){gn(s,t,i)}}function ze(e,t,i,n){if(W(e)){const s=Di(e,t,i,n);return s&&Yr(s)&&s.catch(r=>{gn(r,t,i)}),s}if(H(e)){const s=[];for(let r=0;r<e.length;r++)s.push(ze(e[r],t,i,n));return s}}function gn(e,t,i,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||oe;if(t){let o=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${i}`;for(;o;){const a=o.ec;if(a){for(let d=0;d<a.length;d++)if(a[d](e,c,u)===!1)return}o=o.parent}if(r){ct(),Di(r,null,10,[e,c,u]),at();return}}Mc(e,i,s,n,l)}function Mc(e,t,i,n=!0,s=!1){if(s)throw e;console.error(e)}const Pe=[];let it=-1;const ei=[];let Et=null,qt=0;const Rl=Promise.resolve();let Xi=null;function mn(e){const t=Xi||Rl;return e?t.then(this?e.bind(this):e):t}function Lc(e){let t=it+1,i=Pe.length;for(;t<i;){const n=t+i>>>1,s=Pe[n],r=Ni(s);r<e||r===e&&s.flags&2?t=n+1:i=n}return t}function Rs(e){if(!(e.flags&1)){const t=Ni(e),i=Pe[Pe.length-1];!i||!(e.flags&2)&&t>=Ni(i)?Pe.push(e):Pe.splice(Lc(t),0,e),e.flags|=1,Tl()}}function Tl(){Xi||(Xi=Rl.then(El))}function Bc(e){H(e)?ei.push(...e):Et&&e.id===-1?Et.splice(qt+1,0,e):e.flags&1||(ei.push(e),e.flags|=1),Tl()}function Gs(e,t,i=it+1){for(;i<Pe.length;i++){const n=Pe[i];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Pe.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Al(e){if(ei.length){const t=[...new Set(ei)].sort((i,n)=>Ni(i)-Ni(n));if(ei.length=0,Et){Et.push(...t);return}for(Et=t,qt=0;qt<Et.length;qt++){const i=Et[qt];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}Et=null,qt=0}}const Ni=e=>e.id==null?e.flags&2?-1:1/0:e.id;function El(e){try{for(it=0;it<Pe.length;it++){const t=Pe[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Di(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;it<Pe.length;it++){const t=Pe[it];t&&(t.flags&=-2)}it=-1,Pe.length=0,Al(),Xi=null,(Pe.length||ei.length)&&El()}}let Re=null,xl=null;function Yi(e){const t=Re;return Re=e,xl=e&&e.type.__scopeId||null,t}function Ts(e,t=Re,i){if(!t||e._n)return e;const n=(...s)=>{n._d&&en(-1);const r=Yi(t);let l;try{l=e(...s)}finally{Yi(r),n._d&&en(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function Vc(e,t){if(Re===null)return e;const i=yn(Re),n=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,l,o,c=oe]=t[s];r&&(W(r)&&(r={mounted:r,updated:r}),r.deep&&vt(l),n.push({dir:r,instance:i,value:l,oldValue:void 0,arg:o,modifiers:c}))}return e}function kt(e,t,i,n){const s=e.dirs,r=t&&t.dirs;for(let l=0;l<s.length;l++){const o=s[l];r&&(o.oldValue=r[l].value);let c=o.dir[n];c&&(ct(),ze(c,i,8,[e.el,o,e,t]),at())}}function Ui(e,t){if(we){let i=we.provides;const n=we.parent&&we.parent.provides;n===i&&(i=we.provides=Object.create(n)),i[e]=t}}function Ge(e,t,i=!1){const n=Ns();if(n||jt){let s=jt?jt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return i&&W(t)?t.call(n&&n.proxy):t}}function Fc(){return!!(Ns()||jt)}const jc=Symbol.for("v-scx"),Hc=()=>Ge(jc);function Ft(e,t,i){return Il(e,t,i)}function Il(e,t,i=oe){const{immediate:n,deep:s,flush:r,once:l}=i,o=Te({},i),c=t&&n||!t&&r!=="post";let u;if(Pi){if(r==="sync"){const m=Hc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=lt,m.resume=lt,m.pause=lt,m}}const a=we;o.call=(m,T,S)=>ze(m,a,T,S);let d=!1;r==="post"?o.scheduler=m=>{_e(m,a&&a.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(m,T)=>{T?m():Rs(m)}),o.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,a&&(m.id=a.uid,m.i=a))};const g=Dc(e,t,o);return Pi&&(u?u.push(g):c&&g()),g}function Uc(e,t,i){const n=this.proxy,s=ue(e)?e.includes(".")?wl(n,e):()=>n[e]:e.bind(n,n);let r;W(t)?r=t:(r=t.handler,i=t);const l=Mi(this),o=Il(s,r.bind(n),i);return l(),o}function wl(e,t){const i=t.split(".");return()=>{let n=e;for(let s=0;s<i.length&&n;s++)n=n[i[s]];return n}}const Tt=new WeakMap,Nl=Symbol("_vte"),Kc=e=>e.__isTeleport,Lt=e=>e&&(e.disabled||e.disabled===""),Gc=e=>e&&(e.defer||e.defer===""),Ws=e=>typeof SVGElement<"u"&&e instanceof SVGElement,qs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Yn=(e,t)=>{const i=e&&e.to;return ue(i)?t?t(i):null:i},Wc={name:"Teleport",__isTeleport:!0,process(e,t,i,n,s,r,l,o,c,u){const{mc:a,pc:d,pbc:g,o:{insert:m,querySelector:T,createText:S,createComment:I,parentNode:P}}=u,b=Lt(t.props);let{dynamicChildren:y}=t;const _=(M,B,V)=>{M.shapeFlag&16&&a(M.children,B,V,s,r,l,o,c)},D=(M=t)=>{const B=Lt(M.props),V=M.target=Yn(M.props,T),Y=zn(V,M,S,m);V&&(l!=="svg"&&Ws(V)?l="svg":l!=="mathml"&&qs(V)&&(l="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(V),B||(_(M,V,Y),gi(M,!1)))},X=M=>{const B=()=>{if(Tt.get(M)===B){if(Tt.delete(M),Lt(M.props)){const V=P(M.el)||i;_(M,V,M.anchor),gi(M,!0)}D(M)}};Tt.set(M,B),_e(B,r)};if(e==null){const M=t.el=S(""),B=t.anchor=S("");if(m(M,i,n),m(B,i,n),Gc(t.props)||r&&r.pendingBranch){X(t);return}b&&(_(t,i,B),gi(t,!0)),D()}else{t.el=e.el;const M=t.anchor=e.anchor,B=Tt.get(e);if(B){B.flags|=8,Tt.delete(e),X(t);return}t.targetStart=e.targetStart;const V=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,fe=Lt(e.props),Ae=fe?i:V,Ee=fe?M:Y;if(l==="svg"||Ws(V)?l="svg":(l==="mathml"||qs(V))&&(l="mathml"),y?(g(e.dynamicChildren,y,Ae,s,r,l,o),ws(e,t,!0)):c||d(e,t,Ae,Ee,s,r,l,o,!1),b)fe?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Fi(t,i,M,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const qe=Yn(t.props,T);qe&&(t.target=qe,Fi(t,qe,null,u,0))}else fe&&Fi(t,V,Y,u,1);gi(t,b)}},remove(e,t,i,{um:n,o:{remove:s}},r){const{shapeFlag:l,children:o,anchor:c,targetStart:u,targetAnchor:a,target:d,props:g}=e,m=Lt(g),T=r||!m,S=Tt.get(e);if(S&&(S.flags|=8,Tt.delete(e)),d&&(s(u),s(a)),r&&s(c),!S&&(m||d)&&l&16)for(let I=0;I<o.length;I++){const P=o[I];n(P,t,i,T,!!P.dynamicChildren)}},move:Fi,hydrate:qc};function Fi(e,t,i,{o:{insert:n},m:s},r=2){r===0&&n(e.targetAnchor,t,i);const{el:l,anchor:o,shapeFlag:c,children:u,props:a}=e,d=r===2;if(d&&n(l,t,i),!Tt.has(e)&&(!d||Lt(a))&&c&16)for(let g=0;g<u.length;g++)s(u[g],t,i,2);d&&n(o,t,i)}function qc(e,t,i,n,s,r,{o:{nextSibling:l,parentNode:o,querySelector:c,insert:u,createText:a}},d){function g(I,P){let b=P;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")t.targetStart=b;else if(b.data==="teleport anchor"){t.targetAnchor=b,I._lpa=t.targetAnchor&&l(t.targetAnchor);break}}b=l(b)}}function m(I,P){P.anchor=d(l(I),P,o(I),i,n,s,r)}const T=t.target=Yn(t.props,c),S=Lt(t.props);if(T){const I=T._lpa||T.firstChild;t.shapeFlag&16&&(S?(m(e,t),g(T,I),t.targetAnchor||zn(T,t,a,u,o(e)===T?e:null)):(t.anchor=l(e),g(T,I),t.targetAnchor||zn(T,t,a,u),d(I&&l(I),t,T,i,n,s,r))),gi(t,S)}else S&&t.shapeFlag&16&&(m(e,t),t.targetStart=e,t.targetAnchor=l(e));return t.anchor&&l(t.anchor)}const Zp=Wc;function gi(e,t){const i=e.ctx;if(i&&i.ut){let n,s;for(t?(n=e.el,s=e.anchor):(n=e.targetStart,s=e.targetAnchor);n&&n!==s;)n.nodeType===1&&n.setAttribute("data-v-owner",i.uid),n=n.nextSibling;i.ut()}}function zn(e,t,i,n,s=null){const r=t.targetStart=i(""),l=t.targetAnchor=i("");return r[Nl]=l,e&&(n(r,e,s),n(l,e,s)),l}const Pn=Symbol("_leaveCb");function vn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,vn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $l(e,t){return W(e)?Te({name:e.name},t,{setup:e}):e}function Pl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xs(e,t){let i;return!!((i=Object.getOwnPropertyDescriptor(e,t))&&!i.configurable)}const zi=new WeakMap;function Ci(e,t,i,n,s=!1){if(H(e)){e.forEach((S,I)=>Ci(S,t&&(H(t)?t[I]:t),i,n,s));return}if(wt(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ci(e,t,i,n.component.subTree);return}const r=n.shapeFlag&4?yn(n.component):n.el,l=s?null:r,{i:o,r:c}=e,u=t&&t.r,a=o.refs===oe?o.refs={}:o.refs,d=o.setupState,g=Q(d),m=d===oe?Xr:S=>Xs(a,S)?!1:ie(g,S),T=(S,I)=>!(I&&Xs(a,I));if(u!=null&&u!==c){if(Ys(t),ue(u))a[u]=null,m(u)&&(d[u]=null);else if(pe(u)){const S=t;T(u,S.k)&&(u.value=null),S.k&&(a[S.k]=null)}}if(W(c)){ct();try{Di(c,o,12,[l,a])}finally{at()}}else{const S=ue(c),I=pe(c);if(S||I){const P=()=>{if(e.f){const b=S?m(c)?d[c]:a[c]:T()||!e.k?c.value:a[e.k];if(s)H(b)&&ps(b,r);else if(H(b))b.includes(r)||b.push(r);else if(S)a[c]=[r],m(c)&&(d[c]=a[c]);else{const y=[r];T(c,e.k)&&(c.value=y),e.k&&(a[e.k]=y)}}else S?(a[c]=l,m(c)&&(d[c]=l)):I&&(T(c,e.k)&&(c.value=l),e.k&&(a[e.k]=l))};if(l){const b=()=>{P(),zi.delete(e)};b.id=-1,zi.set(e,b),_e(b,i)}else Ys(e),P()}}}function Ys(e){const t=zi.get(e);t&&(t.flags|=8,zi.delete(e))}fn().requestIdleCallback;fn().cancelIdleCallback;const wt=e=>!!e.type.__asyncLoader,Ol=e=>e.type.__isKeepAlive,Xc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const i=Ns(),n=i.ctx;if(!n.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const s=new Map,r=new Set;let l=null;const o=i.suspense,{renderer:{p:c,m:u,um:a,o:{createElement:d}}}=n,g=d("div");n.activate=(b,y,_,D,X)=>{const M=b.component;u(b,y,_,0,o),c(M.vnode,b,y,_,M,o,D,b.slotScopeIds,X),_e(()=>{M.isDeactivated=!1,M.a&&Zt(M.a);const B=b.props&&b.props.onVnodeMounted;B&&Ue(B,M.parent,b)},o)},n.deactivate=b=>{const y=b.component;Qi(y.m),Qi(y.a),u(b,g,null,1,o),_e(()=>{y.da&&Zt(y.da);const _=b.props&&b.props.onVnodeUnmounted;_&&Ue(_,y.parent,b),y.isDeactivated=!0},o)};function m(b){On(b),a(b,i,o,!0)}function T(b){s.forEach((y,_)=>{const D=ns(wt(y)?y.type.__asyncResolved||{}:y.type);D&&!b(D)&&S(_)})}function S(b){const y=s.get(b);y&&(!l||!Xt(y,l))?m(y):l&&On(l),s.delete(b),r.delete(b)}Ft(()=>[e.include,e.exclude],([b,y])=>{b&&T(_=>mi(b,_)),y&&T(_=>!mi(y,_))},{flush:"post",deep:!0});let I=null;const P=()=>{I!=null&&(Zi(i.subTree.type)?_e(()=>{s.set(I,ji(i.subTree))},i.subTree.suspense):s.set(I,ji(i.subTree)))};return As(P),Dl(P),Ml(()=>{s.forEach(b=>{const{subTree:y,suspense:_}=i,D=ji(y);if(b.type===D.type&&b.key===D.key){On(D);const X=D.component.da;X&&_e(X,_);return}m(b)})}),()=>{if(I=null,!t.default)return l=null;const b=t.default(),y=b[0];if(b.length>1)return l=null,b;if(!ri(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return l=null,y;let _=ji(y);if(_.type===ut)return l=null,_;const D=_.type,X=ns(wt(_)?_.type.__asyncResolved||{}:D),{include:M,exclude:B,max:V}=e;if(M&&(!X||!mi(M,X))||B&&X&&mi(B,X))return _.shapeFlag&=-257,l=_,y;const Y=_.key==null?D:_.key,fe=s.get(Y);return _.el&&(_=Ht(_),y.shapeFlag&128&&(y.ssContent=_)),I=Y,fe?(_.el=fe.el,_.component=fe.component,_.transition&&vn(_,_.transition),_.shapeFlag|=512,r.delete(Y),r.add(Y)):(r.add(Y),V&&r.size>parseInt(V,10)&&S(r.values().next().value)),_.shapeFlag|=256,l=_,Zi(y.type)?y:_}}},Yc=Xc;function mi(e,t){return H(e)?e.some(i=>mi(i,t)):ue(e)?e.split(",").includes(t):Yo(e)?(e.lastIndex=0,e.test(t)):!1}function zc(e,t){kl(e,"a",t)}function Jc(e,t){kl(e,"da",t)}function kl(e,t,i=we){const n=e.__wdc||(e.__wdc=()=>{let s=i;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(bn(t,n,i),i){let s=i.parent;for(;s&&s.parent;)Ol(s.parent.vnode)&&Qc(n,t,i,s),s=s.parent}}function Qc(e,t,i,n){const s=bn(t,e,n,!0);Ll(()=>{ps(n[t],s)},i)}function On(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ji(e){return e.shapeFlag&128?e.ssContent:e}function bn(e,t,i=we,n=!1){if(i){const s=i[e]||(i[e]=[]),r=t.__weh||(t.__weh=(...l)=>{ct();const o=Mi(i),c=ze(t,i,e,l);return o(),at(),c});return n?s.unshift(r):s.push(r),r}}const St=e=>(t,i=we)=>{(!Pi||e==="sp")&&bn(e,(...n)=>t(...n),i)},Zc=St("bm"),As=St("m"),ea=St("bu"),Dl=St("u"),Ml=St("bum"),Ll=St("um"),ta=St("sp"),ia=St("rtg"),na=St("rtc");function sa(e,t=we){bn("ec",e,t)}const Bl="components";function Es(e,t){return Fl(Bl,e,!0,t)||e}const Vl=Symbol.for("v-ndc");function ra(e){return ue(e)?Fl(Bl,e,!1)||e:e||Vl}function Fl(e,t,i=!0,n=!1){const s=Re||we;if(s){const r=s.type;{const o=ns(r,!1);if(o&&(o===t||o===ke(t)||o===an(ke(t))))return r}const l=zs(s[e]||r[e],t)||zs(s.appContext[e],t);return!l&&n?r:l}}function zs(e,t){return e&&(e[t]||e[ke(t)]||e[an(ke(t))])}function Jn(e,t,i,n){let s;const r=i,l=H(e);if(l||ue(e)){const o=l&&ot(e);let c=!1,u=!1;o&&(c=!Fe(e),u=_t(e),e=dn(e)),s=new Array(e.length);for(let a=0,d=e.length;a<d;a++)s[a]=t(c?u?ni(Ye(e[a])):Ye(e[a]):e[a],a,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r)}else if(se(e))if(e[Symbol.iterator])s=Array.from(e,(o,c)=>t(o,c,void 0,r));else{const o=Object.keys(e);s=new Array(o.length);for(let c=0,u=o.length;c<u;c++){const a=o[c];s[c]=t(e[a],a,c,r)}}else s=[];return s}function eh(e,t,i={},n,s){if(Re.ce||Re.parent&&wt(Re.parent)&&Re.parent.ce){const u=Object.keys(i).length>0;return t!=="default"&&(i.name=t),Se(),si(Oe,null,[me("slot",i,n&&n())],u?-2:64)}let r=e[t];r&&r._c&&(r._d=!1),Se();const l=r&&jl(r(i)),o=i.key||l&&l.key,c=si(Oe,{key:(o&&!je(o)?o:`_${t}`)+(!l&&n?"_fb":"")},l||(n?n():[]),l&&e._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function jl(e){return e.some(t=>ri(t)?!(t.type===ut||t.type===Oe&&!jl(t.children)):!0)?e:null}const Qn=e=>e?oo(e)?yn(e):Qn(e.parent):null,Ri=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qn(e.parent),$root:e=>Qn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ul(e),$forceUpdate:e=>e.f||(e.f=()=>{Rs(e.update)}),$nextTick:e=>e.n||(e.n=mn.bind(e.proxy)),$watch:e=>Uc.bind(e)}),kn=(e,t)=>e!==oe&&!e.__isScriptSetup&&ie(e,t),la={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:i,setupState:n,data:s,props:r,accessCache:l,type:o,appContext:c}=e;if(t[0]!=="$"){const g=l[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return s[t];case 4:return i[t];case 3:return r[t]}else{if(kn(n,t))return l[t]=1,n[t];if(s!==oe&&ie(s,t))return l[t]=2,s[t];if(ie(r,t))return l[t]=3,r[t];if(i!==oe&&ie(i,t))return l[t]=4,i[t];Zn&&(l[t]=0)}}const u=Ri[t];let a,d;if(u)return t==="$attrs"&&xe(e.attrs,"get",""),u(e);if((a=o.__cssModules)&&(a=a[t]))return a;if(i!==oe&&ie(i,t))return l[t]=4,i[t];if(d=c.config.globalProperties,ie(d,t))return d[t]},set({_:e},t,i){const{data:n,setupState:s,ctx:r}=e;return kn(s,t)?(s[t]=i,!0):n!==oe&&ie(n,t)?(n[t]=i,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:n,appContext:s,props:r,type:l}},o){let c;return!!(i[o]||e!==oe&&o[0]!=="$"&&ie(e,o)||kn(t,o)||ie(r,o)||ie(n,o)||ie(Ri,o)||ie(s.config.globalProperties,o)||(c=l.__cssModules)&&c[o])},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:ie(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}};function Js(e){return H(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}let Zn=!0;function oa(e){const t=Ul(e),i=e.proxy,n=e.ctx;Zn=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:l,watch:o,provide:c,inject:u,created:a,beforeMount:d,mounted:g,beforeUpdate:m,updated:T,activated:S,deactivated:I,beforeDestroy:P,beforeUnmount:b,destroyed:y,unmounted:_,render:D,renderTracked:X,renderTriggered:M,errorCaptured:B,serverPrefetch:V,expose:Y,inheritAttrs:fe,components:Ae,directives:Ee,filters:qe}=t;if(u&&ca(u,n,null),l)for(const q in l){const ee=l[q];W(ee)&&(n[q]=ee.bind(i))}if(s){const q=s.call(i,i);se(q)&&(e.data=ki(q))}if(Zn=!0,r)for(const q in r){const ee=r[q],ft=W(ee)?ee.bind(i,i):W(ee.get)?ee.get.bind(i,i):lt,Ct=!W(ee)&&W(ee.set)?ee.set.bind(i):lt,Qe=Be({get:ft,set:Ct});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:De=>Qe.value=De})}if(o)for(const q in o)Hl(o[q],n,i,q);if(c){const q=W(c)?c.call(i):c;Reflect.ownKeys(q).forEach(ee=>{Ui(ee,q[ee])})}a&&Qs(a,e,"c");function de(q,ee){H(ee)?ee.forEach(ft=>q(ft.bind(i))):ee&&q(ee.bind(i))}if(de(Zc,d),de(As,g),de(ea,m),de(Dl,T),de(zc,S),de(Jc,I),de(sa,B),de(na,X),de(ia,M),de(Ml,b),de(Ll,_),de(ta,V),H(Y))if(Y.length){const q=e.exposed||(e.exposed={});Y.forEach(ee=>{Object.defineProperty(q,ee,{get:()=>i[ee],set:ft=>i[ee]=ft,enumerable:!0})})}else e.exposed||(e.exposed={});D&&e.render===lt&&(e.render=D),fe!=null&&(e.inheritAttrs=fe),Ae&&(e.components=Ae),Ee&&(e.directives=Ee),V&&Pl(e)}function ca(e,t,i=lt){H(e)&&(e=es(e));for(const n in e){const s=e[n];let r;se(s)?"default"in s?r=Ge(s.from||n,s.default,!0):r=Ge(s.from||n):r=Ge(s),pe(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[n]=r}}function Qs(e,t,i){ze(H(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,i)}function Hl(e,t,i,n){let s=n.includes(".")?wl(i,n):()=>i[n];if(ue(e)){const r=t[e];W(r)&&Ft(s,r)}else if(W(e))Ft(s,e.bind(i));else if(se(e))if(H(e))e.forEach(r=>Hl(r,t,i,n));else{const r=W(e.handler)?e.handler.bind(i):t[e.handler];W(r)&&Ft(s,r,e)}}function Ul(e){const t=e.type,{mixins:i,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,o=r.get(t);let c;return o?c=o:!s.length&&!i&&!n?c=t:(c={},s.length&&s.forEach(u=>Ji(c,u,l,!0)),Ji(c,t,l)),se(t)&&r.set(t,c),c}function Ji(e,t,i,n=!1){const{mixins:s,extends:r}=t;r&&Ji(e,r,i,!0),s&&s.forEach(l=>Ji(e,l,i,!0));for(const l in t)if(!(n&&l==="expose")){const o=aa[l]||i&&i[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const aa={data:Zs,props:er,emits:er,methods:vi,computed:vi,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:vi,directives:vi,watch:fa,provide:Zs,inject:ua};function Zs(e,t){return t?e?function(){return Te(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function ua(e,t){return vi(es(e),es(t))}function es(e){if(H(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function vi(e,t){return e?Te(Object.create(null),e,t):t}function er(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:Te(Object.create(null),Js(e),Js(t??{})):t}function fa(e,t){if(!e)return t;if(!t)return e;const i=Te(Object.create(null),e);for(const n in t)i[n]=Ne(e[n],t[n]);return i}function Kl(){return{app:null,config:{isNativeTag:Xr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let da=0;function pa(e,t){return function(n,s=null){W(n)||(n=Te({},n)),s!=null&&!se(s)&&(s=null);const r=Kl(),l=new WeakSet,o=[];let c=!1;const u=r.app={_uid:da++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Ka,get config(){return r.config},set config(a){},use(a,...d){return l.has(a)||(a&&W(a.install)?(l.add(a),a.install(u,...d)):W(a)&&(l.add(a),a(u,...d))),u},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),u},component(a,d){return d?(r.components[a]=d,u):r.components[a]},directive(a,d){return d?(r.directives[a]=d,u):r.directives[a]},mount(a,d,g){if(!c){const m=u._ceVNode||me(n,s);return m.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),e(m,a,g),c=!0,u._container=a,a.__vue_app__=u,yn(m.component)}},onUnmount(a){o.push(a)},unmount(){c&&(ze(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(a,d){return r.provides[a]=d,u},runWithContext(a){const d=jt;jt=u;try{return a()}finally{jt=d}}};return u}}let jt=null;const ha=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ke(t)}Modifiers`]||e[`${Pt(t)}Modifiers`];function ga(e,t,...i){if(e.isUnmounted)return;const n=e.vnode.props||oe;let s=i;const r=t.startsWith("update:"),l=r&&ha(n,t.slice(7));l&&(l.trim&&(s=i.map(a=>ue(a)?a.trim():a)),l.number&&(s=i.map(un)));let o,c=n[o=xn(t)]||n[o=xn(ke(t))];!c&&r&&(c=n[o=xn(Pt(t))]),c&&ze(c,e,6,s);const u=n[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ze(u,e,6,s)}}const ma=new WeakMap;function Gl(e,t,i=!1){const n=i?ma:t.emitsCache,s=n.get(e);if(s!==void 0)return s;const r=e.emits;let l={},o=!1;if(!W(e)){const c=u=>{const a=Gl(u,t,!0);a&&(o=!0,Te(l,a))};!i&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!o?(se(e)&&n.set(e,null),null):(H(r)?r.forEach(c=>l[c]=null):Te(l,r),se(e)&&n.set(e,l),l)}function _n(e,t){return!e||!rn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Pt(t))||ie(e,t))}function tr(e){const{type:t,vnode:i,proxy:n,withProxy:s,propsOptions:[r],slots:l,attrs:o,emit:c,render:u,renderCache:a,props:d,data:g,setupState:m,ctx:T,inheritAttrs:S}=e,I=Yi(e);let P,b;try{if(i.shapeFlag&4){const _=s||n,D=_;P=st(u.call(D,_,a,d,m,g,T)),b=o}else{const _=t;P=st(_.length>1?_(d,{attrs:o,slots:l,emit:c}):_(d,null)),b=t.props?o:va(o)}}catch(_){Ti.length=0,gn(_,e,1),P=me(ut)}let y=P;if(b&&S!==!1){const _=Object.keys(b),{shapeFlag:D}=y;_.length&&D&7&&(r&&_.some(ln)&&(b=ba(b,r)),y=Ht(y,b,!1,!0))}return i.dirs&&(y=Ht(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(i.dirs):i.dirs),i.transition&&vn(y,i.transition),P=y,Yi(I),P}const va=e=>{let t;for(const i in e)(i==="class"||i==="style"||rn(i))&&((t||(t={}))[i]=e[i]);return t},ba=(e,t)=>{const i={};for(const n in e)(!ln(n)||!(n.slice(9)in t))&&(i[n]=e[n]);return i};function _a(e,t,i){const{props:n,children:s,component:r}=e,{props:l,children:o,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&c>=0){if(c&1024)return!0;if(c&16)return n?ir(n,l,u):!!l;if(c&8){const a=t.dynamicProps;for(let d=0;d<a.length;d++){const g=a[d];if(Wl(l,n,g)&&!_n(u,g))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===l?!1:n?l?ir(n,l,u):!0:!!l;return!1}function ir(e,t,i){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(Wl(t,e,r)&&!_n(i,r))return!0}return!1}function Wl(e,t,i){const n=e[i],s=t[i];return i==="style"&&se(n)&&se(s)?!Nt(n,s):n!==s}function Sa({vnode:e,parent:t,suspense:i},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=n,e=s),s===e)(e=t.vnode).el=n,t=t.parent;else break}i&&i.activeBranch===e&&(i.vnode.el=n)}const ql={},Xl=()=>Object.create(ql),Yl=e=>Object.getPrototypeOf(e)===ql;function ya(e,t,i,n=!1){const s={},r=Xl();e.propsDefaults=Object.create(null),zl(e,t,s,r);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);i?e.props=n?s:_l(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ca(e,t,i,n){const{props:s,attrs:r,vnode:{patchFlag:l}}=e,o=Q(s),[c]=e.propsOptions;let u=!1;if((n||l>0)&&!(l&16)){if(l&8){const a=e.vnode.dynamicProps;for(let d=0;d<a.length;d++){let g=a[d];if(_n(e.emitsOptions,g))continue;const m=t[g];if(c)if(ie(r,g))m!==r[g]&&(r[g]=m,u=!0);else{const T=ke(g);s[T]=ts(c,o,T,m,e,!1)}else m!==r[g]&&(r[g]=m,u=!0)}}}else{zl(e,t,s,r)&&(u=!0);let a;for(const d in o)(!t||!ie(t,d)&&((a=Pt(d))===d||!ie(t,a)))&&(c?i&&(i[d]!==void 0||i[a]!==void 0)&&(s[d]=ts(c,o,d,void 0,e,!0)):delete s[d]);if(r!==o)for(const d in r)(!t||!ie(t,d))&&(delete r[d],u=!0)}u&&mt(e.attrs,"set","")}function zl(e,t,i,n){const[s,r]=e.propsOptions;let l=!1,o;if(t)for(let c in t){if(_i(c))continue;const u=t[c];let a;s&&ie(s,a=ke(c))?!r||!r.includes(a)?i[a]=u:(o||(o={}))[a]=u:_n(e.emitsOptions,c)||(!(c in n)||u!==n[c])&&(n[c]=u,l=!0)}if(r){const c=Q(i),u=o||oe;for(let a=0;a<r.length;a++){const d=r[a];i[d]=ts(s,c,d,u[d],e,!ie(u,d))}}return l}function ts(e,t,i,n,s,r){const l=e[i];if(l!=null){const o=ie(l,"default");if(o&&n===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&W(c)){const{propsDefaults:u}=s;if(i in u)n=u[i];else{const a=Mi(s);n=u[i]=c.call(null,t),a()}}else n=c;s.ce&&s.ce._setProp(i,n)}l[0]&&(r&&!o?n=!1:l[1]&&(n===""||n===Pt(i))&&(n=!0))}return n}const Ra=new WeakMap;function Jl(e,t,i=!1){const n=i?Ra:t.propsCache,s=n.get(e);if(s)return s;const r=e.props,l={},o=[];let c=!1;if(!W(e)){const a=d=>{c=!0;const[g,m]=Jl(d,t,!0);Te(l,g),m&&o.push(...m)};!i&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!r&&!c)return se(e)&&n.set(e,Jt),Jt;if(H(r))for(let a=0;a<r.length;a++){const d=ke(r[a]);nr(d)&&(l[d]=oe)}else if(r)for(const a in r){const d=ke(a);if(nr(d)){const g=r[a],m=l[d]=H(g)||W(g)?{type:g}:Te({},g),T=m.type;let S=!1,I=!0;if(H(T))for(let P=0;P<T.length;++P){const b=T[P],y=W(b)&&b.name;if(y==="Boolean"){S=!0;break}else y==="String"&&(I=!1)}else S=W(T)&&T.name==="Boolean";m[0]=S,m[1]=I,(S||ie(m,"default"))&&o.push(d)}}const u=[l,o];return se(e)&&n.set(e,u),u}function nr(e){return e[0]!=="$"&&!_i(e)}const xs=e=>e==="_"||e==="_ctx"||e==="$stable",Is=e=>H(e)?e.map(st):[st(e)],Ta=(e,t,i)=>{if(t._n)return t;const n=Ts((...s)=>Is(t(...s)),i);return n._c=!1,n},Ql=(e,t,i)=>{const n=e._ctx;for(const s in e){if(xs(s))continue;const r=e[s];if(W(r))t[s]=Ta(s,r,n);else if(r!=null){const l=Is(r);t[s]=()=>l}}},Zl=(e,t)=>{const i=Is(t);e.slots.default=()=>i},eo=(e,t,i)=>{for(const n in t)(i||!xs(n))&&(e[n]=t[n])},Aa=(e,t,i)=>{const n=e.slots=Xl();if(e.vnode.shapeFlag&32){const s=t._;s?(eo(n,t,i),i&&Qr(n,"_",s,!0)):Ql(t,n)}else t&&Zl(e,t)},Ea=(e,t,i)=>{const{vnode:n,slots:s}=e;let r=!0,l=oe;if(n.shapeFlag&32){const o=t._;o?i&&o===1?r=!1:eo(s,t,i):(r=!t.$stable,Ql(t,s)),l=t}else t&&(Zl(e,t),l={default:1});if(r)for(const o in s)!xs(o)&&l[o]==null&&delete s[o]},_e=$a;function xa(e){return Ia(e)}function Ia(e,t){const i=fn();i.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:l,createText:o,createComment:c,setText:u,setElementText:a,parentNode:d,nextSibling:g,setScopeId:m=lt,insertStaticContent:T}=e,S=(f,h,v,R=null,E=null,C=null,$=void 0,N=null,w=!!h.dynamicChildren)=>{if(f===h)return;f&&!Xt(f,h)&&(R=A(f),De(f,E,C,!0),f=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:x,ref:U,shapeFlag:k}=h;switch(x){case Sn:I(f,h,v,R);break;case ut:P(f,h,v,R);break;case Ki:f==null&&b(h,v,R,$);break;case Oe:Ae(f,h,v,R,E,C,$,N,w);break;default:k&1?D(f,h,v,R,E,C,$,N,w):k&6?Ee(f,h,v,R,E,C,$,N,w):(k&64||k&128)&&x.process(f,h,v,R,E,C,$,N,w,F)}U!=null&&E?Ci(U,f&&f.ref,C,h||f,!h):U==null&&f&&f.ref!=null&&Ci(f.ref,null,C,f,!0)},I=(f,h,v,R)=>{if(f==null)n(h.el=o(h.children),v,R);else{const E=h.el=f.el;h.children!==f.children&&u(E,h.children)}},P=(f,h,v,R)=>{f==null?n(h.el=c(h.children||""),v,R):h.el=f.el},b=(f,h,v,R)=>{[f.el,f.anchor]=T(f.children,h,v,R,f.el,f.anchor)},y=({el:f,anchor:h},v,R)=>{let E;for(;f&&f!==h;)E=g(f),n(f,v,R),f=E;n(h,v,R)},_=({el:f,anchor:h})=>{let v;for(;f&&f!==h;)v=g(f),s(f),f=v;s(h)},D=(f,h,v,R,E,C,$,N,w)=>{if(h.type==="svg"?$="svg":h.type==="math"&&($="mathml"),f==null)X(h,v,R,E,C,$,N,w);else{const x=f.el&&f.el._isVueCE?f.el:null;try{x&&x._beginPatch(),V(f,h,E,C,$,N,w)}finally{x&&x._endPatch()}}},X=(f,h,v,R,E,C,$,N)=>{let w,x;const{props:U,shapeFlag:k,transition:j,dirs:G}=f;if(w=f.el=l(f.type,C,U&&U.is,U),k&8?a(w,f.children):k&16&&B(f.children,w,null,R,E,Dn(f,C),$,N),G&&kt(f,null,R,"created"),M(w,f,f.scopeId,$,R),U){for(const le in U)le!=="value"&&!_i(le)&&r(w,le,null,U[le],C,R);"value"in U&&r(w,"value",null,U.value,C),(x=U.onVnodeBeforeMount)&&Ue(x,R,f)}G&&kt(f,null,R,"beforeMount");const J=wa(E,j);J&&j.beforeEnter(w),n(w,h,v),((x=U&&U.onVnodeMounted)||J||G)&&_e(()=>{try{x&&Ue(x,R,f),J&&j.enter(w),G&&kt(f,null,R,"mounted")}finally{}},E)},M=(f,h,v,R,E)=>{if(v&&m(f,v),R)for(let C=0;C<R.length;C++)m(f,R[C]);if(E){let C=E.subTree;if(h===C||Zi(C.type)&&(C.ssContent===h||C.ssFallback===h)){const $=E.vnode;M(f,$,$.scopeId,$.slotScopeIds,E.parent)}}},B=(f,h,v,R,E,C,$,N,w=0)=>{for(let x=w;x<f.length;x++){const U=f[x]=N?gt(f[x]):st(f[x]);S(null,U,h,v,R,E,C,$,N)}},V=(f,h,v,R,E,C,$)=>{const N=h.el=f.el;let{patchFlag:w,dynamicChildren:x,dirs:U}=h;w|=f.patchFlag&16;const k=f.props||oe,j=h.props||oe;let G;if(v&&Dt(v,!1),(G=j.onVnodeBeforeUpdate)&&Ue(G,v,h,f),U&&kt(h,f,v,"beforeUpdate"),v&&Dt(v,!0),x&&(!f.dynamicChildren||f.dynamicChildren.length!==x.length)&&(w=0,$=!1,x=null),(k.innerHTML&&j.innerHTML==null||k.textContent&&j.textContent==null)&&a(N,""),x?Y(f.dynamicChildren,x,N,v,R,Dn(h,E),C):$||ee(f,h,N,null,v,R,Dn(h,E),C,!1),w>0){if(w&16)fe(N,k,j,v,E);else if(w&2&&k.class!==j.class&&r(N,"class",null,j.class,E),w&4&&r(N,"style",k.style,j.style,E),w&8){const J=h.dynamicProps;for(let le=0;le<J.length;le++){const re=J[le],ge=k[re],Ce=j[re];(Ce!==ge||re==="value")&&r(N,re,ge,Ce,E,v)}}w&1&&f.children!==h.children&&a(N,h.children)}else!$&&x==null&&fe(N,k,j,v,E);((G=j.onVnodeUpdated)||U)&&_e(()=>{G&&Ue(G,v,h,f),U&&kt(h,f,v,"updated")},R)},Y=(f,h,v,R,E,C,$)=>{for(let N=0;N<h.length;N++){const w=f[N],x=h[N],U=w.el&&(w.type===Oe||!Xt(w,x)||w.shapeFlag&198)?d(w.el):v;S(w,x,U,null,R,E,C,$,!0)}},fe=(f,h,v,R,E)=>{if(h!==v){if(h!==oe)for(const C in h)!_i(C)&&!(C in v)&&r(f,C,h[C],null,E,R);for(const C in v){if(_i(C))continue;const $=v[C],N=h[C];$!==N&&C!=="value"&&r(f,C,N,$,E,R)}"value"in v&&r(f,"value",h.value,v.value,E)}},Ae=(f,h,v,R,E,C,$,N,w)=>{const x=h.el=f?f.el:o(""),U=h.anchor=f?f.anchor:o("");let{patchFlag:k,dynamicChildren:j,slotScopeIds:G}=h;G&&(N=N?N.concat(G):G),f==null?(n(x,v,R),n(U,v,R),B(h.children||[],v,U,E,C,$,N,w)):k>0&&k&64&&j&&f.dynamicChildren&&f.dynamicChildren.length===j.length?(Y(f.dynamicChildren,j,v,E,C,$,N),(h.key!=null||E&&h===E.subTree)&&ws(f,h,!0)):ee(f,h,v,U,E,C,$,N,w)},Ee=(f,h,v,R,E,C,$,N,w)=>{h.slotScopeIds=N,f==null?h.shapeFlag&512?E.ctx.activate(h,v,R,$,w):qe(h,v,R,E,C,$,w):yt(f,h,w)},qe=(f,h,v,R,E,C,$)=>{const N=f.component=Ba(f,R,E);if(Ol(f)&&(N.ctx.renderer=F),Va(N,!1,$),N.asyncDep){if(E&&E.registerDep(N,de,$),!f.el){const w=N.subTree=me(ut);P(null,w,h,v),f.placeholder=w.el}}else de(N,f,h,v,E,C,$)},yt=(f,h,v)=>{const R=h.component=f.component;if(_a(f,h,v))if(R.asyncDep&&!R.asyncResolved){q(R,h,v);return}else R.next=h,R.update();else h.el=f.el,R.vnode=h},de=(f,h,v,R,E,C,$)=>{const N=()=>{if(f.isMounted){let{next:k,bu:j,u:G,parent:J,vnode:le}=f;{const et=to(f);if(et){k&&(k.el=le.el,q(f,k,$)),et.asyncDep.then(()=>{_e(()=>{f.isUnmounted||x()},E)});return}}let re=k,ge;Dt(f,!1),k?(k.el=le.el,q(f,k,$)):k=le,j&&Zt(j),(ge=k.props&&k.props.onVnodeBeforeUpdate)&&Ue(ge,J,k,le),Dt(f,!0);const Ce=tr(f),Ze=f.subTree;f.subTree=Ce,S(Ze,Ce,d(Ze.el),A(Ze),f,E,C),k.el=Ce.el,re===null&&Sa(f,Ce.el),G&&_e(G,E),(ge=k.props&&k.props.onVnodeUpdated)&&_e(()=>Ue(ge,J,k,le),E)}else{let k;const{el:j,props:G}=h,{bm:J,m:le,parent:re,root:ge,type:Ce}=f,Ze=wt(h);Dt(f,!1),J&&Zt(J),!Ze&&(k=G&&G.onVnodeBeforeMount)&&Ue(k,re,h),Dt(f,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(Ce,f.parent?f.parent.type:void 0);const et=f.subTree=tr(f);S(null,et,v,R,f,E,C),h.el=et.el}if(le&&_e(le,E),!Ze&&(k=G&&G.onVnodeMounted)){const et=h;_e(()=>Ue(k,re,et),E)}(h.shapeFlag&256||re&&wt(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&_e(f.a,E),f.isMounted=!0,h=v=R=null}};f.scope.on();const w=f.effect=new rl(N);f.scope.off();const x=f.update=w.run.bind(w),U=f.job=w.runIfDirty.bind(w);U.i=f,U.id=f.uid,w.scheduler=()=>Rs(U),Dt(f,!0),x()},q=(f,h,v)=>{h.component=f;const R=f.vnode.props;f.vnode=h,f.next=null,Ca(f,h.props,R,v),Ea(f,h.children,v),ct(),Gs(f),at()},ee=(f,h,v,R,E,C,$,N,w=!1)=>{const x=f&&f.children,U=f?f.shapeFlag:0,k=h.children,{patchFlag:j,shapeFlag:G}=h;if(j>0){if(j&128){Ct(x,k,v,R,E,C,$,N,w);return}else if(j&256){ft(x,k,v,R,E,C,$,N,w);return}}G&8?(U&16&&He(x,E,C),k!==x&&a(v,k)):U&16?G&16?Ct(x,k,v,R,E,C,$,N,w):He(x,E,C,!0):(U&8&&a(v,""),G&16&&B(k,v,R,E,C,$,N,w))},ft=(f,h,v,R,E,C,$,N,w)=>{f=f||Jt,h=h||Jt;const x=f.length,U=h.length,k=Math.min(x,U);let j;for(j=0;j<k;j++){const G=h[j]=w?gt(h[j]):st(h[j]);S(f[j],G,v,null,E,C,$,N,w)}x>U?He(f,E,C,!0,!1,k):B(h,v,R,E,C,$,N,w,k)},Ct=(f,h,v,R,E,C,$,N,w)=>{let x=0;const U=h.length;let k=f.length-1,j=U-1;for(;x<=k&&x<=j;){const G=f[x],J=h[x]=w?gt(h[x]):st(h[x]);if(Xt(G,J))S(G,J,v,null,E,C,$,N,w);else break;x++}for(;x<=k&&x<=j;){const G=f[k],J=h[j]=w?gt(h[j]):st(h[j]);if(Xt(G,J))S(G,J,v,null,E,C,$,N,w);else break;k--,j--}if(x>k){if(x<=j){const G=j+1,J=G<U?h[G].el:R;for(;x<=j;)S(null,h[x]=w?gt(h[x]):st(h[x]),v,J,E,C,$,N,w),x++}}else if(x>j)for(;x<=k;)De(f[x],E,C,!0),x++;else{const G=x,J=x,le=new Map;for(x=J;x<=j;x++){const Me=h[x]=w?gt(h[x]):st(h[x]);Me.key!=null&&le.set(Me.key,x)}let re,ge=0;const Ce=j-J+1;let Ze=!1,et=0;const fi=new Array(Ce);for(x=0;x<Ce;x++)fi[x]=0;for(x=G;x<=k;x++){const Me=f[x];if(ge>=Ce){De(Me,E,C,!0);continue}let tt;if(Me.key!=null)tt=le.get(Me.key);else for(re=J;re<=j;re++)if(fi[re-J]===0&&Xt(Me,h[re])){tt=re;break}tt===void 0?De(Me,E,C,!0):(fi[tt-J]=x+1,tt>=et?et=tt:Ze=!0,S(Me,h[tt],v,null,E,C,$,N,w),ge++)}const Bs=Ze?Na(fi):Jt;for(re=Bs.length-1,x=Ce-1;x>=0;x--){const Me=J+x,tt=h[Me],Vs=h[Me+1],Fs=Me+1<U?Vs.el||io(Vs):R;fi[x]===0?S(null,tt,v,Fs,E,C,$,N,w):Ze&&(re<0||x!==Bs[re]?Qe(tt,v,Fs,2):re--)}}},Qe=(f,h,v,R,E=null)=>{const{el:C,type:$,transition:N,children:w,shapeFlag:x}=f;if(x&6){Qe(f.component.subTree,h,v,R);return}if(x&128){f.suspense.move(h,v,R);return}if(x&64){$.move(f,h,v,F);return}if($===Oe){n(C,h,v);for(let k=0;k<w.length;k++)Qe(w[k],h,v,R);n(f.anchor,h,v);return}if($===Ki){y(f,h,v);return}if(R!==2&&x&1&&N)if(R===0)N.persisted&&!C[Pn]?n(C,h,v):(N.beforeEnter(C),n(C,h,v),_e(()=>N.enter(C),E));else{const{leave:k,delayLeave:j,afterLeave:G}=N,J=()=>{f.ctx.isUnmounted?s(C):n(C,h,v)},le=()=>{const re=C._isLeaving||!!C[Pn];C._isLeaving&&C[Pn](!0),N.persisted&&!re?J():k(C,()=>{J(),G&&G()})};j?j(C,J,le):le()}else n(C,h,v)},De=(f,h,v,R=!1,E=!1)=>{const{type:C,props:$,ref:N,children:w,dynamicChildren:x,shapeFlag:U,patchFlag:k,dirs:j,cacheIndex:G,memo:J}=f;if(k===-2&&(E=!1),N!=null&&(ct(),Ci(N,null,v,f,!0),at()),G!=null&&(h.renderCache[G]=void 0),U&256){h.ctx.deactivate(f);return}const le=U&1&&j,re=!wt(f);let ge;if(re&&(ge=$&&$.onVnodeBeforeUnmount)&&Ue(ge,h,f),U&6)Ot(f.component,v,R);else{if(U&128){f.suspense.unmount(v,R);return}le&&kt(f,null,h,"beforeUnmount"),U&64?f.type.remove(f,h,v,F,R):x&&!x.hasOnce&&(C!==Oe||k>0&&k&64)?He(x,h,v,!1,!0):(C===Oe&&k&384||!E&&U&16)&&He(w,h,v),R&&Ut(f)}const Ce=J!=null&&G==null;(re&&(ge=$&&$.onVnodeUnmounted)||le||Ce)&&_e(()=>{ge&&Ue(ge,h,f),le&&kt(f,null,h,"unmounted"),Ce&&(f.el=null)},v)},Ut=f=>{const{type:h,el:v,anchor:R,transition:E}=f;if(h===Oe){Kt(v,R);return}if(h===Ki){_(f);return}const C=()=>{s(v),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:$,delayLeave:N}=E,w=()=>$(v,C);N?N(f.el,C,w):w()}else C()},Kt=(f,h)=>{let v;for(;f!==h;)v=g(f),s(f),f=v;s(h)},Ot=(f,h,v)=>{const{bum:R,scope:E,job:C,subTree:$,um:N,m:w,a:x}=f;Qi(w),Qi(x),R&&Zt(R),E.stop(),C&&(C.flags|=8,De($,f,h,v)),N&&_e(N,h),_e(()=>{f.isUnmounted=!0},h)},He=(f,h,v,R=!1,E=!1,C=0)=>{for(let $=C;$<f.length;$++)De(f[$],h,v,R,E)},A=f=>{if(f.shapeFlag&6)return A(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=g(f.anchor||f.el),v=h&&h[Nl];return v?g(v):h};let L=!1;const O=(f,h,v)=>{let R;f==null?h._vnode&&(De(h._vnode,null,null,!0),R=h._vnode.component):S(h._vnode||null,f,h,null,null,null,v),h._vnode=f,L||(L=!0,Gs(R),Al(),L=!1)},F={p:S,um:De,m:Qe,r:Ut,mt:qe,mc:B,pc:ee,pbc:Y,n:A,o:e};return{render:O,hydrate:void 0,createApp:pa(O)}}function Dn({type:e,props:t},i){return i==="svg"&&e==="foreignObject"||i==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:i}function Dt({effect:e,job:t},i){i?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ws(e,t,i=!1){const n=e.children,s=t.children;if(H(n)&&H(s))for(let r=0;r<n.length;r++){const l=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=gt(s[r]),o.el=l.el),!i&&o.patchFlag!==-2&&ws(l,o)),o.type===Sn&&(o.patchFlag===-1&&(o=s[r]=gt(o)),o.el=l.el),o.type===ut&&!o.el&&(o.el=l.el)}}function Na(e){const t=e.slice(),i=[0];let n,s,r,l,o;const c=e.length;for(n=0;n<c;n++){const u=e[n];if(u!==0){if(s=i[i.length-1],e[s]<u){t[n]=s,i.push(n);continue}for(r=0,l=i.length-1;r<l;)o=r+l>>1,e[i[o]]<u?r=o+1:l=o;u<e[i[r]]&&(r>0&&(t[n]=i[r-1]),i[r]=n)}}for(r=i.length,l=i[r-1];r-- >0;)i[r]=l,l=t[l];return i}function to(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:to(t)}function Qi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function io(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?io(t.subTree):null}const Zi=e=>e.__isSuspense;function $a(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Bc(e)}const Oe=Symbol.for("v-fgt"),Sn=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Ki=Symbol.for("v-stc"),Ti=[];let Ve=null;function Se(e=!1){Ti.push(Ve=e?null:[])}function Pa(){Ti.pop(),Ve=Ti[Ti.length-1]||null}let $i=1;function en(e,t=!1){$i+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function no(e){return e.dynamicChildren=$i>0?Ve||Jt:null,Pa(),$i>0&&Ve&&Ve.push(e),e}function Le(e,t,i,n,s,r){return no(Z(e,t,i,n,s,r,!0))}function si(e,t,i,n,s){return no(me(e,t,i,n,s,!0))}function ri(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const so=({key:e})=>e??null,Gi=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||pe(e)||W(e)?{i:Re,r:e,k:t,f:!!i}:e:null);function Z(e,t=null,i=null,n=0,s=null,r=e===Oe?0:1,l=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&so(t),ref:t&&Gi(t),scopeId:xl,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return o?(tn(c,i),r&128&&e.normalize(c)):i&&(c.shapeFlag|=ue(i)?8:16),$i>0&&!l&&Ve&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ve.push(c),c}const me=Oa;function Oa(e,t=null,i=null,n=0,s=null,r=!1){if((!e||e===Vl)&&(e=ut),ri(e)){const o=Ht(e,t,!0);return i&&tn(o,i),$i>0&&!r&&Ve&&(o.shapeFlag&6?Ve[Ve.indexOf(e)]=o:Ve.push(o)),o.patchFlag=-2,o}if(Ua(e)&&(e=e.__vccOpts),t){t=ka(t);let{class:o,style:c}=t;o&&!ue(o)&&(t.class=It(o)),se(c)&&(pn(c)&&!H(c)&&(c=Te({},c)),t.style=hs(c))}const l=ue(e)?1:Zi(e)?128:Kc(e)?64:se(e)?4:W(e)?2:0;return Z(e,t,i,n,s,l,r,!0)}function ka(e){return e?pn(e)||Yl(e)?Te({},e):e:null}function Ht(e,t,i=!1,n=!1){const{props:s,ref:r,patchFlag:l,children:o,transition:c}=e,u=t?Da(s||{},t):s,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&so(u),ref:t&&t.ref?i&&r?H(r)?r.concat(Gi(t)):[r,Gi(t)]:Gi(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&vn(a,c.clone(a)),a}function ro(e=" ",t=0){return me(Sn,null,e,t)}function th(e,t){const i=me(Ki,null,e);return i.staticCount=t,i}function lo(e="",t=!1){return t?(Se(),si(ut,null,e)):me(ut,null,e)}function st(e){return e==null||typeof e=="boolean"?me(ut):H(e)?me(Oe,null,e.slice()):ri(e)?gt(e):me(Sn,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function tn(e,t){let i=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(H(t))i=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),tn(e,s()),s._c&&(s._d=!0));return}else{i=32;const s=t._;!s&&!Yl(t)?t._ctx=Re:s===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(W(t)){if(n&65){tn(e,{default:t});return}t={default:t,_ctx:Re},i=32}else t=String(t),n&64?(i=16,t=[ro(t)]):i=8;e.children=t,e.shapeFlag|=i}function Da(...e){const t={};for(let i=0;i<e.length;i++){const n=e[i];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=It([t.class,n.class]));else if(s==="style")t.style=hs([t.style,n.style]);else if(rn(s)){const r=t[s],l=n[s];l&&r!==l&&!(H(r)&&r.includes(l))?t[s]=r?[].concat(r,l):l:l==null&&r==null&&!ln(s)&&(t[s]=l)}else s!==""&&(t[s]=n[s])}return t}function Ue(e,t,i,n=null){ze(e,t,7,[i,n])}const Ma=Kl();let La=0;function Ba(e,t,i){const n=e.type,s=(t?t.appContext:e.appContext)||Ma,r={uid:La++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jl(n,s),emitsOptions:Gl(n,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:n.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ga.bind(null,r),e.ce&&e.ce(r),r}let we=null;const Ns=()=>we||Re;let nn,is;{const e=fn(),t=(i,n)=>{let s;return(s=e[i])||(s=e[i]=[]),s.push(n),r=>{s.length>1?s.forEach(l=>l(r)):s[0](r)}};nn=t("__VUE_INSTANCE_SETTERS__",i=>we=i),is=t("__VUE_SSR_SETTERS__",i=>Pi=i)}const Mi=e=>{const t=we;return nn(e),e.scope.on(),()=>{e.scope.off(),nn(t)}},sr=()=>{we&&we.scope.off(),nn(null)};function oo(e){return e.vnode.shapeFlag&4}let Pi=!1;function Va(e,t=!1,i=!1){t&&is(t);const{props:n,children:s}=e.vnode,r=oo(e);ya(e,n,r,t),Aa(e,s,i||t);const l=r?Fa(e,t):void 0;return t&&is(!1),l}function Fa(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,la);const{setup:n}=i;if(n){ct();const s=e.setupContext=n.length>1?Ha(e):null,r=Mi(e),l=Di(n,e,0,[e.props,s]),o=Yr(l);if(at(),r(),(o||e.sp)&&!wt(e)&&Pl(e),o){if(l.then(sr,sr),t)return l.then(c=>{rr(e,c)}).catch(c=>{gn(c,e,0)});e.asyncDep=l}else rr(e,l)}else co(e)}function rr(e,t,i){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=yl(t)),co(e)}function co(e,t,i){const n=e.type;e.render||(e.render=n.render||lt);{const s=Mi(e);ct();try{oa(e)}finally{at(),s()}}}const ja={get(e,t){return xe(e,"get",""),e[t]}};function Ha(e){const t=i=>{e.exposed=i||{}};return{attrs:new Proxy(e.attrs,ja),slots:e.slots,emit:e.emit,expose:t}}function yn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(yl(Cs(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in Ri)return Ri[i](e)},has(t,i){return i in t||i in Ri}})):e.proxy}function ns(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Ua(e){return W(e)&&"__vccOpts"in e}const Be=(e,t)=>Oc(e,t,Pi);function ao(e,t,i){try{en(-1);const n=arguments.length;return n===2?se(t)&&!H(t)?ri(t)?me(e,null,[t]):me(e,t):me(e,null,t):(n>3?i=Array.prototype.slice.call(arguments,2):n===3&&ri(i)&&(i=[i]),me(e,t,i))}finally{en(1)}}const Ka="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ss;const lr=typeof window<"u"&&window.trustedTypes;if(lr)try{ss=lr.createPolicy("vue",{createHTML:e=>e})}catch{}const uo=ss?e=>ss.createHTML(e):e=>e,Ga="http://www.w3.org/2000/svg",Wa="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,or=ht&&ht.createElement("template"),qa={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,n)=>{const s=t==="svg"?ht.createElementNS(Ga,e):t==="mathml"?ht.createElementNS(Wa,e):i?ht.createElement(e,{is:i}):ht.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,n,s,r){const l=i?i.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),i),!(s===r||!(s=s.nextSibling)););else{or.innerHTML=uo(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=or.content;if(n==="svg"||n==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,i)}return[l?l.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},Xa=Symbol("_vtc");function Ya(e,t,i){const n=e[Xa];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const sn=Symbol("_vod"),fo=Symbol("_vsh"),za={name:"show",beforeMount(e,{value:t},{transition:i}){e[sn]=e.style.display==="none"?"":e.style.display,i&&t?i.beforeEnter(e):pi(e,t)},mounted(e,{value:t},{transition:i}){i&&t&&i.enter(e)},updated(e,{value:t,oldValue:i},{transition:n}){!t!=!i&&(n?t?(n.beforeEnter(e),pi(e,!0),n.enter(e)):n.leave(e,()=>{pi(e,!1)}):pi(e,t))},beforeUnmount(e,{value:t}){pi(e,t)}};function pi(e,t){e.style.display=t?e[sn]:"none",e[fo]=!t}const Ja=Symbol(""),Qa=/(?:^|;)\s*display\s*:/;function Za(e,t,i){const n=e.style,s=ue(i);let r=!1;if(i&&!s){if(t)if(ue(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();i[o]==null&&bi(n,o,"")}else for(const l in t)i[l]==null&&bi(n,l,"");for(const l in i){l==="display"&&(r=!0);const o=i[l];o!=null?tu(e,l,!ue(t)&&t?t[l]:void 0,o)||bi(n,l,o):bi(n,l,"")}}else if(s){if(t!==i){const l=n[Ja];l&&(i+=";"+l),n.cssText=i,r=Qa.test(i)}}else t&&e.removeAttribute("style");sn in e&&(e[sn]=r?n.display:"",e[fo]&&(n.display="none"))}const cr=/\s*!important$/;function bi(e,t,i){if(H(i))i.forEach(n=>bi(e,t,n));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const n=eu(e,t);cr.test(i)?e.setProperty(Pt(n),i.replace(cr,""),"important"):e[n]=i}}const ar=["Webkit","Moz","ms"],Mn={};function eu(e,t){const i=Mn[t];if(i)return i;let n=ke(t);if(n!=="filter"&&n in e)return Mn[t]=n;n=an(n);for(let s=0;s<ar.length;s++){const r=ar[s]+n;if(r in e)return Mn[t]=r}return t}function tu(e,t,i,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ue(n)&&i===n}const ur="http://www.w3.org/1999/xlink";function fr(e,t,i,n,s,r=sc(t)){n&&t.startsWith("xlink:")?i==null?e.removeAttributeNS(ur,t.slice(6,t.length)):e.setAttributeNS(ur,t,i):i==null||r&&!Zr(i)?e.removeAttribute(t):e.setAttribute(t,r?"":je(i)?String(i):i)}function dr(e,t,i,n,s){if(t==="innerHTML"||t==="textContent"){i!=null&&(e[t]=t==="innerHTML"?uo(i):i);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,c=i==null?e.type==="checkbox"?"on":"":String(i);(o!==c||!("_value"in e))&&(e.value=c),i==null&&e.removeAttribute(t),e._value=i;return}let l=!1;if(i===""||i==null){const o=typeof e[t];o==="boolean"?i=Zr(i):i==null&&o==="string"?(i="",l=!0):o==="number"&&(i=0,l=!0)}try{e[t]=i}catch{}l&&e.removeAttribute(s||t)}function bt(e,t,i,n){e.addEventListener(t,i,n)}function iu(e,t,i,n){e.removeEventListener(t,i,n)}const pr=Symbol("_vei");function nu(e,t,i,n,s=null){const r=e[pr]||(e[pr]={}),l=r[t];if(n&&l)l.value=n;else{const[o,c]=lu(t);if(n){const u=r[t]=au(n,s);bt(e,o,u,c)}else l&&(iu(e,o,l,c),r[t]=void 0)}}const su=/(Once|Passive|Capture)$/,ru=/^on:?(?:Once|Passive|Capture)$/;function lu(e){let t,i;for(;(i=e.match(su))&&!ru.test(e);)t||(t={}),e=e.slice(0,e.length-i[1].length),t[i[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Pt(e.slice(2)),t]}let Ln=0;const ou=Promise.resolve(),cu=()=>Ln||(ou.then(()=>Ln=0),Ln=Date.now());function au(e,t){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;const s=i.value;if(H(s)){const r=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{r.call(n),n._stopped=!0};const l=s.slice(),o=[n];for(let c=0;c<l.length&&!n._stopped;c++){const u=l[c];u&&ze(u,t,5,o)}}else ze(s,t,5,[n])};return i.value=e,i.attached=cu(),i}const hr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uu=(e,t,i,n,s,r)=>{const l=s==="svg";t==="class"?Ya(e,n,l):t==="style"?Za(e,i,n):rn(t)?ln(t)||nu(e,t,i,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fu(e,t,n,l))?(dr(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fr(e,t,n,l,r,t!=="value")):e._isVueCE&&(du(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ue(n)))?dr(e,ke(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),fr(e,t,n,l))};function fu(e,t,i,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&hr(t)&&W(i));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hr(t)&&ue(i)?!1:t in e}function du(e,t){const i=e._def.props;if(!i)return!1;const n=ke(t);return Array.isArray(i)?i.some(s=>ke(s)===n):Object.keys(i).some(s=>ke(s)===n)}const $t=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?i=>Zt(t,i):t};function pu(e){e.target.composing=!0}function gr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const We=Symbol("_assign");function mr(e,t,i){return t&&(e=e.trim()),i&&(e=un(e)),e}const ih={created(e,{modifiers:{lazy:t,trim:i,number:n}},s){e[We]=$t(s);const r=n||s.props&&s.props.type==="number";bt(e,t?"change":"input",l=>{l.target.composing||e[We](mr(e.value,i,r))}),(i||r)&&bt(e,"change",()=>{e.value=mr(e.value,i,r)}),t||(bt(e,"compositionstart",pu),bt(e,"compositionend",gr),bt(e,"change",gr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:i,modifiers:{lazy:n,trim:s,number:r}},l){if(e[We]=$t(l),e.composing)return;const o=(r||e.type==="number")&&!/^0\d/.test(e.value)?un(e.value):e.value,c=t??"";if(o===c)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(n&&t===i||s&&e.value.trim()===c)||(e.value=c)}},nh={deep:!0,created(e,t,i){e[We]=$t(i),bt(e,"change",()=>{const n=e._modelValue,s=li(e),r=e.checked,l=e[We];if(H(n)){const o=gs(n,s),c=o!==-1;if(r&&!c)l(n.concat(s));else if(!r&&c){const u=[...n];u.splice(o,1),l(u)}}else if(ai(n)){const o=new Set(n);r?o.add(s):o.delete(s),l(o)}else l(po(e,r))})},mounted:vr,beforeUpdate(e,t,i){e[We]=$t(i),vr(e,t,i)}};function vr(e,{value:t,oldValue:i},n){e._modelValue=t;let s;if(H(t))s=gs(t,n.props.value)>-1;else if(ai(t))s=t.has(n.props.value);else{if(t===i)return;s=Nt(t,po(e,!0))}e.checked!==s&&(e.checked=s)}const sh={created(e,{value:t},i){e.checked=Nt(t,i.props.value),e[We]=$t(i),bt(e,"change",()=>{e[We](li(e))})},beforeUpdate(e,{value:t,oldValue:i},n){e[We]=$t(n),t!==i&&(e.checked=Nt(t,n.props.value))}},rh={deep:!0,created(e,{value:t,modifiers:{number:i}},n){const s=ai(t);bt(e,"change",()=>{const r=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>i?un(li(l)):li(l));e[We](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,mn(()=>{e._assigning=!1})}),e[We]=$t(n)},mounted(e,{value:t}){br(e,t)},beforeUpdate(e,t,i){e[We]=$t(i)},updated(e,{value:t}){e._assigning||br(e,t)}};function br(e,t){const i=e.multiple,n=H(t);if(!(i&&!n&&!ai(t))){for(let s=0,r=e.options.length;s<r;s++){const l=e.options[s],o=li(l);if(i)if(n){const c=typeof o;c==="string"||c==="number"?l.selected=t.some(u=>String(u)===String(o)):l.selected=gs(t,o)>-1}else l.selected=t.has(o);else if(Nt(li(l),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!i&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function li(e){return"_value"in e?e._value:e.value}function po(e,t){const i=t?"_trueValue":"_falseValue";return i in e?e[i]:t}const hu=["ctrl","shift","alt","meta"],gu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>hu.some(i=>e[`${i}Key`]&&!t.includes(i))},mu=(e,t)=>{if(!e)return e;const i=e._withMods||(e._withMods={}),n=t.join(".");return i[n]||(i[n]=((s,...r)=>{for(let l=0;l<t.length;l++){const o=gu[t[l]];if(o&&o(s,t))return}return e(s,...r)}))},vu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lh=(e,t)=>{const i=e._withKeys||(e._withKeys={}),n=t.join(".");return i[n]||(i[n]=(s=>{if(!("key"in s))return;const r=Pt(s.key);if(t.some(l=>l===r||vu[l]===r))return e(s)}))},bu=Te({patchProp:uu},qa);let _r;function _u(){return _r||(_r=xa(bu))}const Su=((...e)=>{const t=_u().createApp(...e),{mount:i}=t;return t.mount=n=>{const s=Cu(n);if(!s)return;const r=t._component;!W(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=i(s,!1,yu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t});function yu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Cu(e){return ue(e)?document.querySelector(e):e}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ho;const Cn=e=>ho=e,go=Symbol();function rs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ai;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ai||(Ai={}));function Ru(){const e=nl(!0),t=e.run(()=>hn({}));let i=[],n=[];const s=Cs({install(r){Cn(s),s._a=r,r.provide(go,s),r.config.globalProperties.$pinia=s,n.forEach(l=>i.push(l)),n=[]},use(r){return this._a?i.push(r):n.push(r),this},_p:i,_a:null,_e:e,_s:new Map,state:t});return s}const mo=()=>{};function Sr(e,t,i,n=mo){e.add(t);const s=()=>{e.delete(t)&&n()};return!i&&sl()&&lc(s),s}function Wt(e,...t){e.forEach(i=>{i(...t)})}const Tu=e=>e(),yr=Symbol(),Bn=Symbol();function ls(e,t){e instanceof Map&&t instanceof Map?t.forEach((i,n)=>e.set(n,i)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const i in t){if(!t.hasOwnProperty(i))continue;const n=t[i],s=e[i];rs(s)&&rs(n)&&e.hasOwnProperty(i)&&!pe(n)&&!ot(n)?e[i]=ls(s,n):e[i]=n}return e}const Au=Symbol();function Eu(e){return!rs(e)||!Object.prototype.hasOwnProperty.call(e,Au)}const{assign:At}=Object;function xu(e){return!!(pe(e)&&e.effect)}function Iu(e,t,i,n){const{state:s,actions:r,getters:l}=t,o=i.state.value[e];let c;function u(){o||(i.state.value[e]=s?s():{});const a=Ic(i.state.value[e]);return At(a,r,Object.keys(l||{}).reduce((d,g)=>(d[g]=Cs(Be(()=>{Cn(i);const m=i._s.get(e);return l[g].call(m,m)})),d),{}))}return c=vo(e,u,t,i,n,!0),c}function vo(e,t,i={},n,s,r){let l;const o=At({actions:{}},i),c={deep:!0};let u,a,d=new Set,g=new Set,m;const T=n.state.value[e];!r&&!T&&(n.state.value[e]={});let S;function I(B){let V;u=a=!1,typeof B=="function"?(B(n.state.value[e]),V={type:Ai.patchFunction,storeId:e,events:m}):(ls(n.state.value[e],B),V={type:Ai.patchObject,payload:B,storeId:e,events:m});const Y=S=Symbol();mn().then(()=>{S===Y&&(u=!0)}),a=!0,Wt(d,V,n.state.value[e])}const P=r?function(){const{state:V}=i,Y=V?V():{};this.$patch(fe=>{At(fe,Y)})}:mo;function b(){l.stop(),d.clear(),g.clear(),n._s.delete(e)}const y=(B,V="")=>{if(yr in B)return B[Bn]=V,B;const Y=function(){Cn(n);const fe=Array.from(arguments),Ae=new Set,Ee=new Set;function qe(q){Ae.add(q)}function yt(q){Ee.add(q)}Wt(g,{args:fe,name:Y[Bn],store:D,after:qe,onError:yt});let de;try{de=B.apply(this&&this.$id===e?this:D,fe)}catch(q){throw Wt(Ee,q),q}return de instanceof Promise?de.then(q=>(Wt(Ae,q),q)).catch(q=>(Wt(Ee,q),Promise.reject(q))):(Wt(Ae,de),de)};return Y[yr]=!0,Y[Bn]=V,Y},_={_p:n,$id:e,$onAction:Sr.bind(null,g),$patch:I,$reset:P,$subscribe(B,V={}){const Y=Sr(d,B,V.detached,()=>fe()),fe=l.run(()=>Ft(()=>n.state.value[e],Ae=>{(V.flush==="sync"?a:u)&&B({storeId:e,type:Ai.direct,events:m},Ae)},At({},c,V)));return Y},$dispose:b},D=ki(_);n._s.set(e,D);const M=(n._a&&n._a.runWithContext||Tu)(()=>n._e.run(()=>(l=nl()).run(()=>t({action:y}))));for(const B in M){const V=M[B];if(pe(V)&&!xu(V)||ot(V))r||(T&&Eu(V)&&(pe(V)?V.value=T[B]:ls(V,T[B])),n.state.value[e][B]=V);else if(typeof V=="function"){const Y=y(V,B);M[B]=Y,o.actions[B]=V}}return At(D,M),At(Q(D),M),Object.defineProperty(D,"$state",{get:()=>n.state.value[e],set:B=>{I(V=>{At(V,B)})}}),n._p.forEach(B=>{At(D,l.run(()=>B({store:D,app:n._a,pinia:n,options:o})))}),T&&r&&i.hydrate&&i.hydrate(D.$state,T),u=!0,a=!0,D}/*! #__NO_SIDE_EFFECTS__ */function Rn(e,t,i){let n;const s=typeof t=="function";n=s?i:t;function r(l,o){const c=Fc();return l=l||(c?Ge(go,null):null),l&&Cn(l),l=ho,l._s.has(e)||(s?vo(e,t,n,l):Iu(e,n,l)),l._s.get(e)}return r.$id=e,r}function oh(e){const t=Q(e),i={};for(const n in t){const s=t[n];s.effect?i[n]=Be({get:()=>e[n],set(r){e[n]=r}}):(pe(s)||ot(s))&&(i[n]=$c(e,n))}return i}const wu=(e,t)=>{const i=e.__vccOpts||e;for(const[n,s]of t)i[n]=s;return i},Nu={},$u={class:"h-full"};function Pu(e,t){const i=Es("RouterView");return Se(),Le("div",$u,[me(i)])}const Ou=wu(Nu,[["render",Pu]]),ku="modulepreload",Du=function(e,t){return new URL(e,t).href},Cr={},ne=function(t,i,n){let s=Promise.resolve();if(i&&i.length>0){let l=function(a){return Promise.all(a.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=l(i.map(a=>{if(a=Du(a,n),a in Cr)return;Cr[a]=!0;const d=a.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(!!n)for(let S=o.length-1;S>=0;S--){const I=o[S];if(I.href===a&&(!d||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${g}`))return;const T=document.createElement("link");if(T.rel=d?"stylesheet":ku,d||(T.as="script"),T.crossOrigin="",T.href=a,u&&T.setAttribute("nonce",u),document.head.appendChild(T),d)return new Promise((S,I)=>{T.addEventListener("load",S),T.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return s.then(l=>{for(const o of l||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Yt=typeof document<"u";function bo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Mu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&bo(e.default)}const te=Object.assign;function Vn(e,t){const i={};for(const n in t){const s=t[n];i[n]=Je(s)?s.map(e):e(s)}return i}const Ei=()=>{},Je=Array.isArray;function Rr(e,t){const i={};for(const n in e)i[n]=n in t?t[n]:e[n];return i}const _o=/#/g,Lu=/&/g,Bu=/\//g,Vu=/=/g,Fu=/\?/g,So=/\+/g,ju=/%5B/g,Hu=/%5D/g,yo=/%5E/g,Uu=/%60/g,Co=/%7B/g,Ku=/%7C/g,Ro=/%7D/g,Gu=/%20/g;function $s(e){return e==null?"":encodeURI(""+e).replace(Ku,"|").replace(ju,"[").replace(Hu,"]")}function Wu(e){return $s(e).replace(Co,"{").replace(Ro,"}").replace(yo,"^")}function os(e){return $s(e).replace(So,"%2B").replace(Gu,"+").replace(_o,"%23").replace(Lu,"%26").replace(Uu,"`").replace(Co,"{").replace(Ro,"}").replace(yo,"^")}function qu(e){return os(e).replace(Vu,"%3D")}function Xu(e){return $s(e).replace(_o,"%23").replace(Fu,"%3F")}function Yu(e){return Xu(e).replace(Bu,"%2F")}function Oi(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const zu=/\/$/,Ju=e=>e.replace(zu,"");function Fn(e,t,i="/"){let n,s={},r="",l="";const o=t.indexOf("#");let c=t.indexOf("?");return c=o>=0&&c>o?-1:c,c>=0&&(n=t.slice(0,c),r=t.slice(c,o>0?o:t.length),s=e(r.slice(1))),o>=0&&(n=n||t.slice(0,o),l=t.slice(o,t.length)),n=tf(n??t,i),{fullPath:n+r+l,path:n,query:s,hash:Oi(l)}}function Qu(e,t){const i=t.query?e(t.query):"";return t.path+(i&&"?")+i+(t.hash||"")}function Tr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Zu(e,t,i){const n=t.matched.length-1,s=i.matched.length-1;return n>-1&&n===s&&oi(t.matched[n],i.matched[s])&&To(t.params,i.params)&&e(t.query)===e(i.query)&&t.hash===i.hash}function oi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function To(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var i in e)if(!ef(e[i],t[i]))return!1;return!0}function ef(e,t){return Je(e)?Ar(e,t):Je(t)?Ar(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ar(e,t){return Je(t)?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function tf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const i=t.split("/"),n=e.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=i.length-1,l,o;for(l=0;l<n.length;l++)if(o=n[l],o!==".")if(o==="..")r>1&&r--;else break;return i.slice(0,r).join("/")+"/"+n.slice(l).join("/")}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let cs=(function(e){return e.pop="pop",e.push="push",e})({}),jn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function nf(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ju(e)}const sf=/^[^#]+#/;function rf(e,t){return e.replace(sf,"#")+t}function lf(e,t){const i=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-i.left-(t.left||0),top:n.top-i.top-(t.top||0)}}const Tn=()=>({left:window.scrollX,top:window.scrollY});function of(e){let t;if("el"in e){const i=e.el,n=typeof i=="string"&&i.startsWith("#"),s=typeof i=="string"?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!s)return;t=lf(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Er(e,t){return(history.state?history.state.position-t:-1)+e}const as=new Map;function cf(e,t){as.set(e,t)}function af(e){const t=as.get(e);return as.delete(e),t}function uf(e){return typeof e=="string"||e&&typeof e=="object"}function Ao(e){return typeof e=="string"||typeof e=="symbol"}let he=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Eo=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function ci(e,t){return te(new Error,{type:e,[Eo]:!0},t)}function pt(e,t){return e instanceof Error&&Eo in e&&(t==null||!!(e.type&t))}const ff=["params","query","hash"];function df(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const i of ff)i in e&&(t[i]=e[i]);return JSON.stringify(t,null,2)}function pf(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<i.length;++n){const s=i[n].replace(So," "),r=s.indexOf("="),l=Oi(r<0?s:s.slice(0,r)),o=r<0?null:Oi(s.slice(r+1));if(l in t){let c=t[l];Je(c)||(c=t[l]=[c]),c.push(o)}else t[l]=o}return t}function xr(e){let t="";for(let i in e){const n=e[i];if(i=qu(i),n==null){n!==void 0&&(t+=(t.length?"&":"")+i);continue}(Je(n)?n.map(s=>s&&os(s)):[n&&os(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+i,s!=null&&(t+="="+s))})}return t}function hf(e){const t={};for(const i in e){const n=e[i];n!==void 0&&(t[i]=Je(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return t}const gf=Symbol(""),Ir=Symbol(""),An=Symbol(""),Ps=Symbol(""),us=Symbol("");function hi(){let e=[];function t(n){return e.push(n),()=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)}}function i(){e=[]}return{add:t,list:()=>e.slice(),reset:i}}function xt(e,t,i,n,s,r=l=>l()){const l=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const u=g=>{g===!1?c(ci(he.NAVIGATION_ABORTED,{from:i,to:t})):g instanceof Error?c(g):uf(g)?c(ci(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(l&&n.enterCallbacks[s]===l&&typeof g=="function"&&l.push(g),o())},a=r(()=>e.call(n&&n.instances[s],t,i,u));let d=Promise.resolve(a);e.length<3&&(d=d.then(u)),d.catch(g=>c(g))})}function Hn(e,t,i,n,s=r=>r()){const r=[];for(const l of e)for(const o in l.components){let c=l.components[o];if(!(t!=="beforeRouteEnter"&&!l.instances[o]))if(bo(c)){const u=(c.__vccOpts||c)[t];u&&r.push(xt(u,i,n,l,o,s))}else{let u=c();r.push(()=>u.then(a=>{if(!a)throw new Error(`Couldn't resolve component "${o}" at "${l.path}"`);const d=Mu(a)?a.default:a;l.mods[o]=a,l.components[o]=d;const g=(d.__vccOpts||d)[t];return g&&xt(g,i,n,l,o,s)()}))}}return r}function mf(e,t){const i=[],n=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let l=0;l<r;l++){const o=t.matched[l];o&&(e.matched.find(u=>oi(u,o))?n.push(o):i.push(o));const c=e.matched[l];c&&(t.matched.find(u=>oi(u,c))||s.push(c))}return[i,n,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let vf=()=>location.protocol+"//"+location.host;function xo(e,t){const{pathname:i,search:n,hash:s}=t,r=e.indexOf("#");if(r>-1){let l=s.includes(e.slice(r))?e.slice(r).length:1,o=s.slice(l);return o[0]!=="/"&&(o="/"+o),Tr(o,"")}return Tr(i,e)+n+s}function bf(e,t,i,n){let s=[],r=[],l=null;const o=({state:g})=>{const m=xo(e,location),T=i.value,S=t.value;let I=0;if(g){if(i.value=m,t.value=g,l&&l===T){l=null;return}I=S?g.position-S.position:0}else n(m);s.forEach(P=>{P(i.value,T,{delta:I,type:cs.pop,direction:I?I>0?jn.forward:jn.back:jn.unknown})})};function c(){l=i.value}function u(g){s.push(g);const m=()=>{const T=s.indexOf(g);T>-1&&s.splice(T,1)};return r.push(m),m}function a(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(te({},g.state,{scroll:Tn()}),"")}}function d(){for(const g of r)g();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",a),document.removeEventListener("visibilitychange",a)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",a),document.addEventListener("visibilitychange",a),{pauseListeners:c,listen:u,destroy:d}}function wr(e,t,i,n=!1,s=!1){return{back:e,current:t,forward:i,replaced:n,position:window.history.length,scroll:s?Tn():null}}function _f(e){const{history:t,location:i}=window,n={value:xo(e,i)},s={value:t.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,a){const d=e.indexOf("#"),g=d>-1?(i.host&&document.querySelector("base")?e:e.slice(d))+c:vf()+e+c;try{t[a?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),i[a?"replace":"assign"](g)}}function l(c,u){r(c,te({},t.state,wr(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),n.value=c}function o(c,u){const a=te({},s.value,t.state,{forward:c,scroll:Tn()});r(a.current,a,!0),r(c,te({},wr(n.value,c,null),{position:a.position+1},u),!1),n.value=c}return{location:n,state:s,push:o,replace:l}}function Sf(e){e=nf(e);const t=_f(e),i=bf(e,t.state,t.location,t.replace);function n(r,l=!0){l||i.pauseListeners(),history.go(r)}const s=te({location:"",base:e,go:n,createHref:rf.bind(null,e)},t,i);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function yf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Sf(e)}let Bt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ve||{});const Cf={type:Bt.Static,value:""},Rf=/[a-zA-Z0-9_]/;function Tf(e){if(!e)return[[]];if(e==="/")return[[Cf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${i})/"${u}": ${m}`)}let i=ve.Static,n=i;const s=[];let r;function l(){r&&s.push(r),r=[]}let o=0,c,u="",a="";function d(){u&&(i===ve.Static?r.push({type:Bt.Static,value:u}):i===ve.Param||i===ve.ParamRegExp||i===ve.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Bt.Param,value:u,regexp:a,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&i!==ve.ParamRegExp){n=i,i=ve.EscapeNext;continue}switch(i){case ve.Static:c==="/"?(u&&d(),l()):c===":"?(d(),i=ve.Param):g();break;case ve.EscapeNext:g(),i=n;break;case ve.Param:c==="("?i=ve.ParamRegExp:Rf.test(c)?g():(d(),i=ve.Static,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case ve.ParamRegExp:c===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+c:i=ve.ParamRegExpEnd:a+=c;break;case ve.ParamRegExpEnd:d(),i=ve.Static,c!=="*"&&c!=="?"&&c!=="+"&&o--,a="";break;default:t("Unknown state");break}}return i===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),l(),s}const Nr="[^/]+?",Af={sensitive:!1,strict:!1,start:!0,end:!0};var $e=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})($e||{});const Ef=/[.+*?^${}()[\]/\\]/g;function xf(e,t){const i=te({},Af,t),n=[];let s=i.start?"^":"";const r=[];for(const u of e){const a=u.length?[]:[$e.Root];i.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let m=$e.Segment+(i.sensitive?$e.BonusCaseSensitive:0);if(g.type===Bt.Static)d||(s+="/"),s+=g.value.replace(Ef,"\\$&"),m+=$e.Static;else if(g.type===Bt.Param){const{value:T,repeatable:S,optional:I,regexp:P}=g;r.push({name:T,repeatable:S,optional:I});const b=P||Nr;if(b!==Nr){m+=$e.BonusCustomRegExp;try{`${b}`}catch(_){throw new Error(`Invalid custom RegExp for param "${T}" (${b}): `+_.message)}}let y=S?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(y=I&&u.length<2?`(?:/${y})`:"/"+y),I&&(y+="?"),s+=y,m+=$e.Dynamic,I&&(m+=$e.BonusOptional),S&&(m+=$e.BonusRepeatable),b===".*"&&(m+=$e.BonusWildcard)}a.push(m)}n.push(a)}if(i.strict&&i.end){const u=n.length-1;n[u][n[u].length-1]+=$e.BonusStrict}i.strict||(s+="/?"),i.end?s+="$":i.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const l=new RegExp(s,i.sensitive?"":"i");function o(u){const a=u.match(l),d={};if(!a)return null;for(let g=1;g<a.length;g++){const m=a[g]||"",T=r[g-1];d[T.name]=m&&T.repeatable?m.split("/"):m}return d}function c(u){let a="",d=!1;for(const g of e){(!d||!a.endsWith("/"))&&(a+="/"),d=!1;for(const m of g)if(m.type===Bt.Static)a+=m.value;else if(m.type===Bt.Param){const{value:T,repeatable:S,optional:I}=m,P=T in u?u[T]:"";if(Je(P)&&!S)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const b=Je(P)?P.join("/"):P;if(!b)if(I)g.length<2&&(a.endsWith("/")?a=a.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);a+=b}}return a||"/"}return{re:l,score:n,keys:r,parse:o,stringify:c}}function If(e,t){let i=0;for(;i<e.length&&i<t.length;){const n=t[i]-e[i];if(n)return n;i++}return e.length<t.length?e.length===1&&e[0]===$e.Static+$e.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$e.Static+$e.Segment?1:-1:0}function Io(e,t){let i=0;const n=e.score,s=t.score;for(;i<n.length&&i<s.length;){const r=If(n[i],s[i]);if(r)return r;i++}if(Math.abs(s.length-n.length)===1){if($r(n))return 1;if($r(s))return-1}return s.length-n.length}function $r(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wf={strict:!1,end:!0,sensitive:!1};function Nf(e,t,i){const n=xf(Tf(e.path),i),s=te(n,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function $f(e,t){const i=[],n=new Map;t=Rr(wf,t);function s(d){return n.get(d)}function r(d,g,m){const T=!m,S=Or(d);S.aliasOf=m&&m.record;const I=Rr(t,d),P=[S];if("alias"in d){const _=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of _)P.push(Or(te({},S,{components:m?m.record.components:S.components,path:D,aliasOf:m?m.record:S})))}let b,y;for(const _ of P){const{path:D}=_;if(g&&D[0]!=="/"){const X=g.record.path,M=X[X.length-1]==="/"?"":"/";_.path=g.record.path+(D&&M+D)}if(b=Nf(_,g,I),m?m.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),T&&d.name&&!kr(b)&&l(d.name)),wo(b)&&c(b),S.children){const X=S.children;for(let M=0;M<X.length;M++)r(X[M],b,m&&m.children[M])}m=m||b}return y?()=>{l(y)}:Ei}function l(d){if(Ao(d)){const g=n.get(d);g&&(n.delete(d),i.splice(i.indexOf(g),1),g.children.forEach(l),g.alias.forEach(l))}else{const g=i.indexOf(d);g>-1&&(i.splice(g,1),d.record.name&&n.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function o(){return i}function c(d){const g=kf(d,i);i.splice(g,0,d),d.record.name&&!kr(d)&&n.set(d.record.name,d)}function u(d,g){let m,T={},S,I;if("name"in d&&d.name){if(m=n.get(d.name),!m)throw ci(he.MATCHER_NOT_FOUND,{location:d});I=m.record.name,T=te(Pr(g.params,m.keys.filter(y=>!y.optional).concat(m.parent?m.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),d.params&&Pr(d.params,m.keys.map(y=>y.name))),S=m.stringify(T)}else if(d.path!=null)S=d.path,m=i.find(y=>y.re.test(S)),m&&(T=m.parse(S),I=m.record.name);else{if(m=g.name?n.get(g.name):i.find(y=>y.re.test(g.path)),!m)throw ci(he.MATCHER_NOT_FOUND,{location:d,currentLocation:g});I=m.record.name,T=te({},g.params,d.params),S=m.stringify(T)}const P=[];let b=m;for(;b;)P.unshift(b.record),b=b.parent;return{name:I,path:S,params:T,matched:P,meta:Of(P)}}e.forEach(d=>r(d));function a(){i.length=0,n.clear()}return{addRoute:r,resolve:u,removeRoute:l,clearRoutes:a,getRoutes:o,getRecordMatcher:s}}function Pr(e,t){const i={};for(const n of t)n in e&&(i[n]=e[n]);return i}function Or(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Pf(e){const t={},i=e.props||!1;if("component"in e)t.default=i;else for(const n in e.components)t[n]=typeof i=="object"?i[n]:i;return t}function kr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Of(e){return e.reduce((t,i)=>te(t,i.meta),{})}function kf(e,t){let i=0,n=t.length;for(;i!==n;){const r=i+n>>1;Io(e,t[r])<0?n=r:i=r+1}const s=Df(e);return s&&(n=t.lastIndexOf(s,n-1)),n}function Df(e){let t=e;for(;t=t.parent;)if(wo(t)&&Io(e,t)===0)return t}function wo({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Dr(e){const t=Ge(An),i=Ge(Ps),n=Be(()=>{const c=ye(e.to);return t.resolve(c)}),s=Be(()=>{const{matched:c}=n.value,{length:u}=c,a=c[u-1],d=i.matched;if(!a||!d.length)return-1;const g=d.findIndex(oi.bind(null,a));if(g>-1)return g;const m=Mr(c[u-2]);return u>1&&Mr(a)===m&&d[d.length-1].path!==m?d.findIndex(oi.bind(null,c[u-2])):g}),r=Be(()=>s.value>-1&&Ff(i.params,n.value.params)),l=Be(()=>s.value>-1&&s.value===i.matched.length-1&&To(i.params,n.value.params));function o(c={}){if(Vf(c)){const u=t[ye(e.replace)?"replace":"push"](ye(e.to)).catch(Ei);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:n,href:Be(()=>n.value.href),isActive:r,isExactActive:l,navigate:o}}function Mf(e){return e.length===1?e[0]:e}const Lf=$l({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Dr,setup(e,{slots:t}){const i=ki(Dr(e)),{options:n}=Ge(An),s=Be(()=>({[Lr(e.activeClass,n.linkActiveClass,"router-link-active")]:i.isActive,[Lr(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const r=t.default&&Mf(t.default(i));return e.custom?r:ao("a",{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:s.value},r)}}}),Bf=Lf;function Vf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ff(e,t){for(const i in t){const n=t[i],s=e[i];if(typeof n=="string"){if(n!==s)return!1}else if(!Je(s)||s.length!==n.length||n.some((r,l)=>r.valueOf()!==s[l].valueOf()))return!1}return!0}function Mr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lr=(e,t,i)=>e??t??i,jf=$l({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){const n=Ge(us),s=Be(()=>e.route||n.value),r=Ge(Ir,0),l=Be(()=>{let u=ye(r);const{matched:a}=s.value;let d;for(;(d=a[u])&&!d.components;)u++;return u}),o=Be(()=>s.value.matched[l.value]);Ui(Ir,Be(()=>l.value+1)),Ui(gf,o),Ui(us,s);const c=hn();return Ft(()=>[c.value,o.value,e.name],([u,a,d],[g,m,T])=>{a&&(a.instances[d]=u,m&&m!==a&&u&&u===g&&(a.leaveGuards.size||(a.leaveGuards=m.leaveGuards),a.updateGuards.size||(a.updateGuards=m.updateGuards))),u&&a&&(!m||!oi(a,m)||!g)&&(a.enterCallbacks[d]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,a=e.name,d=o.value,g=d&&d.components[a];if(!g)return Br(i.default,{Component:g,route:u});const m=d.props[a],T=m?m===!0?u.params:typeof m=="function"?m(u):m:null,I=ao(g,te({},T,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[a]=null)},ref:c}));return Br(i.default,{Component:I,route:u})||I}}});function Br(e,t){if(!e)return null;const i=e(t);return i.length===1?i[0]:i}const Hf=jf;function Uf(e){const t=$f(e.routes,e),i=e.parseQuery||pf,n=e.stringifyQuery||xr,s=e.history,r=hi(),l=hi(),o=hi(),c=Ac(Rt);let u=Rt;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=Vn.bind(null,A=>""+A),d=Vn.bind(null,Yu),g=Vn.bind(null,Oi);function m(A,L){let O,F;return Ao(A)?(O=t.getRecordMatcher(A),F=L):F=A,t.addRoute(F,O)}function T(A){const L=t.getRecordMatcher(A);L&&t.removeRoute(L)}function S(){return t.getRoutes().map(A=>A.record)}function I(A){return!!t.getRecordMatcher(A)}function P(A,L){if(L=te({},L||c.value),typeof A=="string"){const v=Fn(i,A,L.path),R=t.resolve({path:v.path},L),E=s.createHref(v.fullPath);return te(v,R,{params:g(R.params),hash:Oi(v.hash),redirectedFrom:void 0,href:E})}let O;if(A.path!=null)O=te({},A,{path:Fn(i,A.path,L.path).path});else{const v=te({},A.params);for(const R in v)v[R]==null&&delete v[R];O=te({},A,{params:d(v)}),L.params=d(L.params)}const F=t.resolve(O,L),z=A.hash||"";F.params=a(g(F.params));const f=Qu(n,te({},A,{hash:Wu(z),path:F.path})),h=s.createHref(f);return te({fullPath:f,hash:z,query:n===xr?hf(A.query):A.query||{}},F,{redirectedFrom:void 0,href:h})}function b(A){return typeof A=="string"?Fn(i,A,c.value.path):te({},A)}function y(A,L){if(u!==A)return ci(he.NAVIGATION_CANCELLED,{from:L,to:A})}function _(A){return M(A)}function D(A){return _(te(b(A),{replace:!0}))}function X(A,L){const O=A.matched[A.matched.length-1];if(O&&O.redirect){const{redirect:F}=O;let z=typeof F=="function"?F(A,L):F;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=b(z):{path:z},z.params={}),te({query:A.query,hash:A.hash,params:z.path!=null?{}:A.params},z)}}function M(A,L){const O=u=P(A),F=c.value,z=A.state,f=A.force,h=A.replace===!0,v=X(O,F);if(v)return M(te(b(v),{state:typeof v=="object"?te({},z,v.state):z,force:f,replace:h}),L||O);const R=O;R.redirectedFrom=L;let E;return!f&&Zu(n,F,O)&&(E=ci(he.NAVIGATION_DUPLICATED,{to:R,from:F}),Qe(F,F,!0,!1)),(E?Promise.resolve(E):Y(R,F)).catch(C=>pt(C)?pt(C,he.NAVIGATION_GUARD_REDIRECT)?C:Ct(C):ee(C,R,F)).then(C=>{if(C){if(pt(C,he.NAVIGATION_GUARD_REDIRECT))return M(te({replace:h},b(C.to),{state:typeof C.to=="object"?te({},z,C.to.state):z,force:f}),L||R)}else C=Ae(R,F,!0,h,z);return fe(R,F,C),C})}function B(A,L){const O=y(A,L);return O?Promise.reject(O):Promise.resolve()}function V(A){const L=Kt.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(A):A()}function Y(A,L){let O;const[F,z,f]=mf(A,L);O=Hn(F.reverse(),"beforeRouteLeave",A,L);for(const v of F)v.leaveGuards.forEach(R=>{O.push(xt(R,A,L))});const h=B.bind(null,A,L);return O.push(h),He(O).then(()=>{O=[];for(const v of r.list())O.push(xt(v,A,L));return O.push(h),He(O)}).then(()=>{O=Hn(z,"beforeRouteUpdate",A,L);for(const v of z)v.updateGuards.forEach(R=>{O.push(xt(R,A,L))});return O.push(h),He(O)}).then(()=>{O=[];for(const v of f)if(v.beforeEnter)if(Je(v.beforeEnter))for(const R of v.beforeEnter)O.push(xt(R,A,L));else O.push(xt(v.beforeEnter,A,L));return O.push(h),He(O)}).then(()=>(A.matched.forEach(v=>v.enterCallbacks={}),O=Hn(f,"beforeRouteEnter",A,L,V),O.push(h),He(O))).then(()=>{O=[];for(const v of l.list())O.push(xt(v,A,L));return O.push(h),He(O)}).catch(v=>pt(v,he.NAVIGATION_CANCELLED)?v:Promise.reject(v))}function fe(A,L,O){o.list().forEach(F=>V(()=>F(A,L,O)))}function Ae(A,L,O,F,z){const f=y(A,L);if(f)return f;const h=L===Rt,v=Yt?history.state:{};O&&(F||h?s.replace(A.fullPath,te({scroll:h&&v&&v.scroll},z)):s.push(A.fullPath,z)),c.value=A,Qe(A,L,O,h),Ct()}let Ee;function qe(){Ee||(Ee=s.listen((A,L,O)=>{if(!Ot.listening)return;const F=P(A),z=X(F,Ot.currentRoute.value);if(z){M(te(z,{replace:!0,force:!0}),F).catch(Ei);return}u=F;const f=c.value;Yt&&cf(Er(f.fullPath,O.delta),Tn()),Y(F,f).catch(h=>pt(h,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?h:pt(h,he.NAVIGATION_GUARD_REDIRECT)?(M(te(b(h.to),{force:!0}),F).then(v=>{pt(v,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!O.delta&&O.type===cs.pop&&s.go(-1,!1)}).catch(Ei),Promise.reject()):(O.delta&&s.go(-O.delta,!1),ee(h,F,f))).then(h=>{h=h||Ae(F,f,!1),h&&(O.delta&&!pt(h,he.NAVIGATION_CANCELLED)?s.go(-O.delta,!1):O.type===cs.pop&&pt(h,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),fe(F,f,h)}).catch(Ei)}))}let yt=hi(),de=hi(),q;function ee(A,L,O){Ct(A);const F=de.list();return F.length?F.forEach(z=>z(A,L,O)):console.error(A),Promise.reject(A)}function ft(){return q&&c.value!==Rt?Promise.resolve():new Promise((A,L)=>{yt.add([A,L])})}function Ct(A){return q||(q=!A,qe(),yt.list().forEach(([L,O])=>A?O(A):L()),yt.reset()),A}function Qe(A,L,O,F){const{scrollBehavior:z}=e;if(!Yt||!z)return Promise.resolve();const f=!O&&af(Er(A.fullPath,0))||(F||!O)&&history.state&&history.state.scroll||null;return mn().then(()=>z(A,L,f)).then(h=>h&&of(h)).catch(h=>ee(h,A,L))}const De=A=>s.go(A);let Ut;const Kt=new Set,Ot={currentRoute:c,listening:!0,addRoute:m,removeRoute:T,clearRoutes:t.clearRoutes,hasRoute:I,getRoutes:S,resolve:P,options:e,push:_,replace:D,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:l.add,afterEach:o.add,onError:de.add,isReady:ft,install(A){A.component("RouterLink",Bf),A.component("RouterView",Hf),A.config.globalProperties.$router=Ot,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),Yt&&!Ut&&c.value===Rt&&(Ut=!0,_(s.location).catch(F=>{}));const L={};for(const F in Rt)Object.defineProperty(L,F,{get:()=>c.value[F],enumerable:!0});A.provide(An,Ot),A.provide(Ps,_l(L)),A.provide(us,c);const O=A.unmount;Kt.add(A),A.unmount=function(){Kt.delete(A),Kt.size<1&&(u=Rt,Ee&&Ee(),Ee=null,c.value=Rt,Ut=!1,q=!1),O()}}};function He(A){return A.reduce((L,O)=>L.then(()=>V(O)),Promise.resolve())}return Ot}function Os(){return Ge(An)}function Kf(e){return Ge(Ps)}const xi={appName:"订单管理",institution:"北京市公共图书馆",currentLibrarianAccount:"BIBQUERY01",currentSubscriber:"ceshi",viewableSubscribers:["ceshi"],z3950Servers:["北京大学","华盛顿大学"],sidebarHighlightMap:{"/bib-query/z3950":"/bib-query","/bib-query/new-bib":"/bib-query","/acceptance/delivery-import":"/acceptance/delivery-import/tasks","/acceptance/detail":"/acceptance","/shortage/detail":"/shortage","/orders/line":"/orders","/orders/lines":"/orders","/settled/detail":"/settled","/settled/list":"/settled"},sidebar:[{id:"order-mgmt",label:"订单管理",expanded:!0,children:[{label:"非连续出版物订单",route:"/orders"},{label:"书目查询",route:"/bib-query"}]},{id:"acceptance",label:"采访验收",expanded:!0,children:[{label:"验收单管理",route:"/acceptance"},{label:"逐条收货",route:"/receive"},{label:"批量验收",route:"/batch-acceptance"},{label:"换货管理",route:"/exchange"},{label:"退货管理",route:"/return"},{label:"催缺管理",route:"/shortage"}]},{id:"settlement",label:"采访结算",expanded:!1,children:[{label:"待结算",route:"/pending-settlement"},{label:"已结算",route:"/settled"},{label:"结算失败处理",route:"/settlement-fail"}]},{id:"subscriber",label:"订户管理",expanded:!1,children:[{label:"订户列表",route:"/subscribers"},{label:"馆员列表",route:"/librarians"}]},{id:"currency",label:"货币管理",expanded:!1,children:[{label:"货币信息",route:"/currency"}]},{id:"settings",label:"设置",expanded:!1,children:[{label:"退换撤订原因参数",route:"/reason-params"},{label:"催缺配置",route:"/shortage-config"},{label:"条码号供应商代码",route:"/barcode-supplier"},{label:"订单与MARC类型映射关系",route:"/marc-mapping"},{label:"订单导入模板配置",route:"/import-template"},{label:"馆址管理",route:"/locations"}]}]},Vr={"/orders":"订单管理","/bib-query":"书目查询","/acceptance":"验收单管理","/receive":"逐条收货","/batch-acceptance":"批量验收","/exchange":"换货管理","/return":"退货管理","/shortage":"催缺管理","/shortage/detail":"催缺详情","/pending-settlement":"待结算","/settled":"已结算","/settled/detail":"结算详情","/settled/list":"结算清单","/settlement-fail":"结算失败处理","/subscribers":"订户列表","/librarians":"馆员列表","/currency":"货币信息","/reason-params":"退换撤订原因参数","/shortage-config":"催缺配置","/barcode-supplier":"条码号供应商代码","/marc-mapping":"订单与MARC类型映射关系","/import-template":"订单导入模板配置","/locations":"馆址管理","/bib-query/new-bib":"新建书目","/bib-query/z3950":"查Z3950","/acceptance/delivery-import":"导入任务","/acceptance/delivery-import/tasks":"导入任务","/acceptance/detail":"验收详情","/orders/line":"订单行详情"};function No(e){return Vr[e]?Vr[e]:e.startsWith("/acceptance/detail/")?"验收详情":e.startsWith("/shortage/detail/")?"催缺详情":e.startsWith("/acceptance/delivery-import/tasks/")?"导入任务详情":e.startsWith("/orders/line/")?"订单行详情":e.startsWith("/settled/detail/")?"结算详情":e.startsWith("/settled/list/")?"结算清单":e}function fs(e){if(xi.sidebarHighlightMap[e])return xi.sidebarHighlightMap[e];for(const[t,i]of Object.entries(xi.sidebarHighlightMap))if(e.startsWith(`${t}/`)||t!==e&&e.startsWith(t))return i;return e}const Fr="orderm_spa_tabs",En=Rn("app",{state:()=>({config:xi,tabs:[{route:"/orders",title:"订单管理"}],activeRoute:"/orders",expandedGroups:xi.sidebar.filter(e=>e.expanded).map(e=>e.id)}),getters:{highlightRoute:e=>fs(e.activeRoute),currentAcceptance:e=>e._currentAcceptance},actions:{initFromStorage(){try{const e=sessionStorage.getItem(Fr);if(!e)return;const t=JSON.parse(e);Array.isArray(t.tabs)&&t.tabs.length&&(this.tabs=t.tabs,this.activeRoute=t.activeRoute||this.tabs[0].route)}catch{}},persistTabs(){sessionStorage.setItem(Fr,JSON.stringify({tabs:this.tabs,activeRoute:this.activeRoute}))},openTab(e,t){const i=t||No(e),n=this.tabs.find(s=>s.route===e);n?n.title=i:this.tabs.push({route:e,title:i}),this.activeRoute=e,this.persistTabs()},switchTab(e){this.activeRoute=e,this.persistTabs()},closeTab(e){if(this.tabs.length<=1)return;const t=this.tabs.findIndex(i=>i.route===e);if(t!==-1){if(this.tabs.splice(t,1),this.activeRoute===e){const i=this.tabs[Math.max(0,t-1)]||this.tabs[0];this.activeRoute=i.route}this.persistTabs()}},toggleGroup(e){const t=this.expandedGroups.indexOf(e);t>=0?this.expandedGroups.splice(t,1):this.expandedGroups.push(e)},isGroupExpanded(e,t){if(this.expandedGroups.includes(e))return!0;const i=this.config.sidebar.find(n=>n.id===e);return i==null?void 0:i.children.some(n=>fs(t)===n.route)}}}),Un="orderm_current_acceptance",Kn="acceptanceDetailContext";function ch(e){return{no:e.no,id:e.acceptanceId,name:e.name,type:e.type,lang:e.lang,method:e.method,supplier:e.supplier,shipNo:e.shipNo,status:e.status,remarkText:e.remarkText||"",autoBarcode:e.autoBarcode,barcode:e.barcode}}const Gf=Rn("acceptance",{state:()=>({current:null,detailContext:null}),getters:{hasCurrent:e=>!!e.current},actions:{initFromStorage(){try{const e=localStorage.getItem(Un);this.current=e?JSON.parse(e):null}catch{this.current=null}this.loadDetailContext()},setCurrent(e){this.current=e,e?localStorage.setItem(Un,JSON.stringify(e)):localStorage.removeItem(Un)},clearCurrent(){this.setCurrent(null)},saveDetailContext(e){this.detailContext=e,sessionStorage.setItem(Kn,JSON.stringify(e))},loadDetailContext(){try{const e=sessionStorage.getItem(Kn);this.detailContext=e?JSON.parse(e):null}catch{this.detailContext=null}return this.detailContext},clearDetailContext(){this.detailContext=null,sessionStorage.removeItem(Kn)}}}),ah={exchange:"换货原因",return:"退货原因",cancel:"撤订原因",revokeReceive:"撤销收货原因"},jr={exchange:[{id:"ex-1",content:"换货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:41",remark:""},{id:"ex-2",content:"残缺损",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:45:18",remark:""}],return:[{id:"rt-1",content:"退货",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:48",remark:""},{id:"rt-2",content:"损坏退货",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:09",remark:""}],cancel:[{id:"ca-1",content:"撤订",status:"active",sort:1,creator:"赵付",created:"2026-05-22 08:55:56",remark:""},{id:"ca-2",content:"退订",status:"active",sort:2,creator:"李会申测试账号",created:"2026-05-21 09:46:27",remark:""}],revokeReceive:[{id:"rv-1",content:"录入错误",status:"active",sort:1,creator:"赵付",created:"2026-05-22 09:10:12",remark:""},{id:"rv-2",content:"重复收货",status:"active",sort:2,creator:"杨晓婉",created:"2026-05-22 09:11:05",remark:""},{id:"rv-3",content:"品相差",status:"active",sort:3,creator:"王二小",created:"2026-05-22 09:12:18",remark:""}]},uh=[{key:"content",label:"原因"},{key:"status",label:"状态",type:"select",options:["全部","使用中","已停用"]},{key:"createDate",label:"创建日期",type:"dateRange",startKey:"startDate",endKey:"endDate"},{key:"creator",label:"创建人",extra:!0}],fh={active:{text:"使用中",cls:"text-green-600"},disabled:{text:"已停用",cls:"text-red-500"}},Hr="orderm_reason_params",Wf=Rn("reasonParams",{state:()=>({data:structuredClone(jr)}),getters:{getByType:e=>t=>e.data[t]||[],getActiveByType:e=>t=>(e.data[t]||[]).filter(i=>i.status==="active").sort((i,n)=>(i.sort||0)-(n.sort||0))},actions:{initFromStorage(){try{const e=localStorage.getItem(Hr);e?this.data=JSON.parse(e):this.persist()}catch{this.data=structuredClone(jr)}},persist(){localStorage.setItem(Hr,JSON.stringify(this.data))},addReason(e,t){const i=this.data[e]||[];i.push({...t,id:`${e}-${Date.now()}`,status:"active",creator:t.creator||"赵付",created:t.created||new Date().toISOString().slice(0,19).replace("T"," ")}),this.data[e]=i,this.persist()},updateReason(e,t,i){const n=this.data[e]||[],s=n.findIndex(r=>r.id===t);s>=0&&(n[s]={...n[s],...i},this.persist())},toggleStatus(e,t){const i=(this.data[e]||[]).find(n=>n.id===t);i&&(i.status=i.status==="active"?"disabled":"active",this.persist())}}}),dh={active:{text:"使用中",cls:"text-green-600"},inactive:{text:"已停用",cls:"text-gray-500"}},qf=32,Xf=64,Yf=200,$o=32,ks=64,Po=200,Oo=32,Ds=64,ko=200,zf=["ST001_C1","ST001_C2","ST001_C3","ST001_C4","ST001_C5","ST002_C1","ST002_C2","ST003_C1"],Jf=["CL001","CL002","CL003","CL004","CL005","CL006","CL007","CL008","CL009","CL010","STD02","STE02","STG02","STK02","STB01","STC01"],Qf=["ST001","STD01","STE01","STEK1","STES1","STG01","STK01","STS01","STF01","ST029","ST002","ST003","ST004","ST005","ST006","ST007","ST008","ST009","ST010","ST011","ST012","ST013","ST014","ST015","ST018","ST019","ST020","ST021","ST024","ST025","ST026","ST030","ST031","ST032","ST033","ST034","ST044","ST047","STB01","STC01","STD02","STE02","STH01"],Zf={"site-1":["ST001","STD","STE","STG","STK","STS","STF"],"site-2":["ST029"],"site-3":["STB","STC"],"site-4":["ST002","ST003","ST004","ST005","ST006","ST007","ST008","ST009","ST010","ST011","ST012","ST013","ST014","ST015","ST018","ST019","ST020","ST021","ST024","ST025","ST026","ST030","ST031","ST032","ST033","ST034","ST044","ST047"]},Do=["馆址编码","馆址名称","状态","备注"],Mo=["馆址编码","馆址名称","分馆编码","分馆名称","状态","备注"],Lo=["馆址编码","馆址名称","分馆编码","分馆名称","馆藏地编码","馆藏地名称","状态","备注"],ed=[{id:"site-1",code:"ST001_C1",name:"首都华威桥馆",status:"active",remark:"首都图书馆主馆文献借阅区域"},{id:"site-2",code:"ST001_C2",name:"首都大兴机场分馆",status:"active",remark:""},{id:"site-3",code:"ST001_C3",name:"北京城市图书馆",status:"active",remark:""},{id:"site-4",code:"ST001_C4",name:"其他馆址（首都图书馆）",status:"active",remark:""},{id:"site-5",code:"",name:"测试停用馆址",status:"inactive",remark:"编码为空示例"}],td=[{id:"branch-6",siteId:"site-1",code:"ST001",name:"首都图书馆",status:"active",remark:""},{id:"branch-1",siteId:"site-1",code:"STD01",name:"首图地方文献",status:"active",remark:""},{id:"branch-2",siteId:"site-1",code:"STE01",name:"市少儿图书馆",status:"active",remark:""},{id:"branch-7",siteId:"site-1",code:"STEK1",name:"市少儿图书馆期刊分馆",status:"active",remark:""},{id:"branch-8",siteId:"site-1",code:"STES1",name:"市少儿图书馆视听分馆",status:"active",remark:""},{id:"branch-3",siteId:"site-1",code:"STG01",name:"首图古籍",status:"active",remark:""},{id:"branch-4",siteId:"site-1",code:"STK01",name:"首图期刊分馆",status:"active",remark:""},{id:"branch-9",siteId:"site-1",code:"STS01",name:"首图视听中心",status:"active",remark:""},{id:"branch-10",siteId:"site-2",code:"ST029",name:"首图大兴机场分馆",status:"active",remark:""},{id:"branch-11",siteId:"site-1",code:"STF01",name:"首图非遗文献分馆",status:"active",remark:""},{id:"branch-12",siteId:"site-4",code:"ST002",name:"首都图书馆月坛分馆",status:"active",remark:""},{id:"branch-13",siteId:"site-4",code:"ST003",name:"首都图书馆北工大分馆",status:"active",remark:""},{id:"branch-14",siteId:"site-4",code:"ST004",name:"首都图书馆东四分馆",status:"active",remark:""},{id:"branch-15",siteId:"site-4",code:"ST005",name:"首都图书馆小堡分馆",status:"active",remark:""},{id:"branch-16",siteId:"site-4",code:"ST006",name:"首都图书馆前门分馆",status:"active",remark:""},{id:"branch-17",siteId:"site-4",code:"ST007",name:"首都图书馆南邵分馆",status:"active",remark:""},{id:"branch-18",siteId:"site-4",code:"ST008",name:"首都图书馆东花市分馆",status:"active",remark:""},{id:"branch-19",siteId:"site-4",code:"ST009",name:"首都图书馆西长安街分馆",status:"active",remark:""},{id:"branch-20",siteId:"site-4",code:"ST010",name:"首都图书馆六里屯分馆",status:"active",remark:""},{id:"branch-21",siteId:"site-4",code:"ST011",name:"首都图书馆堡头分馆",status:"active",remark:""},{id:"branch-22",siteId:"site-4",code:"ST012",name:"首都图书馆首都机场分馆",status:"active",remark:""},{id:"branch-23",siteId:"site-4",code:"ST013",name:"首都图书馆西三旗分馆",status:"active",remark:""},{id:"branch-24",siteId:"site-4",code:"ST014",name:"首都图书馆社区活动",status:"active",remark:""},{id:"branch-25",siteId:"site-4",code:"ST015",name:"首都图书馆市财政局分馆",status:"active",remark:""},{id:"branch-26",siteId:"site-4",code:"ST018",name:"首都图书馆市人大分馆",status:"active",remark:""},{id:"branch-27",siteId:"site-4",code:"ST019",name:"亦庄开发区图书馆",status:"active",remark:""},{id:"branch-28",siteId:"site-4",code:"ST020",name:"北京市国际艺术学校分馆",status:"active",remark:""},{id:"branch-29",siteId:"site-4",code:"ST021",name:"国家图书馆",status:"active",remark:""},{id:"branch-30",siteId:"site-4",code:"ST024",name:"老干部局（怀柔）分馆",status:"active",remark:""},{id:"branch-31",siteId:"site-4",code:"ST025",name:"老干部局（东直门）分馆",status:"active",remark:""},{id:"branch-32",siteId:"site-4",code:"ST026",name:"首图耿丹学院分馆",status:"active",remark:""},{id:"branch-33",siteId:"site-4",code:"ST030",name:"首都图书馆酷车小镇分馆",status:"active",remark:""},{id:"branch-34",siteId:"site-4",code:"ST031",name:"首都图书馆天通苑分馆",status:"active",remark:""},{id:"branch-35",siteId:"site-4",code:"ST032",name:"首都图书馆体育分馆",status:"active",remark:""},{id:"branch-36",siteId:"site-4",code:"ST033",name:"首都图书馆南航分馆",status:"active",remark:""},{id:"branch-37",siteId:"site-4",code:"ST034",name:"首都图书馆火箭军分馆",status:"active",remark:""},{id:"branch-38",siteId:"site-4",code:"ST044",name:"首图北京政务中心分馆",status:"active",remark:""},{id:"branch-39",siteId:"site-4",code:"ST047",name:"首都图书馆沐林分馆",status:"active",remark:""},{id:"branch-5",siteId:"site-5",code:"",name:"测试停用分馆",status:"inactive",remark:""}],id=[{id:"col-1",branchId:"branch-1",code:"CL001",name:"北京地方文献阅览室",status:"active",remark:""},{id:"col-2",branchId:"branch-2",code:"CL002",name:"首少.少儿钢琴厂书库",status:"active",remark:""},{id:"col-3",branchId:"branch-3",code:"CL003",name:"历史文献阅览室",status:"active",remark:""},{id:"col-4",branchId:"branch-4",code:"CL004",name:"首图刊.中文报刊阅览室",status:"active",remark:""},{id:"col-5",branchId:"branch-5",code:"",name:"测试停用馆藏地",status:"inactive",remark:""}],ph=[{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态",type:"select",options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],hh=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],gh=[{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称",extra:!0},{key:"code",label:"馆藏地编码",extra:!0},{key:"name",label:"馆藏地名称",extra:!0},{key:"status",label:"状态",type:"select",extra:!0,options:[{value:"",label:"全部"},{value:"active",label:"使用中"},{value:"inactive",label:"已停用"}]}],mh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"code",label:"馆址编码"},{key:"name",label:"馆址名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],vh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"code",label:"分馆编码"},{key:"name",label:"分馆名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}],bh=[{key:"seq",label:"序号",minWidth:"w-14"},{key:"siteCode",label:"馆址编码"},{key:"siteName",label:"馆址名称"},{key:"branchCode",label:"分馆编码"},{key:"branchName",label:"分馆名称"},{key:"code",label:"馆藏地编码"},{key:"name",label:"馆藏地名称"},{key:"status",label:"状态"},{key:"remark",label:"备注"},{key:"actions",label:"操作",sticky:!0,minWidth:"min-w-[180px]"}];function Ke(e,t){return t?String(e||"").toLowerCase().includes(t.toLowerCase()):!0}function Bo(e,t){return e.find(i=>i.id===t)}function zt(e,t){return e.find(i=>i.code===t)}function nd(e,t){return e.find(i=>i.id===t)}function _h(e,t){return e.find(i=>i.id===t)}function sd(e,t){const i=Bo(t,e.siteId);return{...e,siteCode:(i==null?void 0:i.code)||"-",siteName:(i==null?void 0:i.name)||"-"}}function rd(e,t,i){const n=nd(t,e.branchId),s=n?Bo(i,n.siteId):null;return{...e,branchCode:(n==null?void 0:n.code)||"-",branchName:(n==null?void 0:n.name)||"-",siteCode:(s==null?void 0:s.code)||"-",siteName:(s==null?void 0:s.name)||"-"}}function Vo(e){return[...e].filter(t=>t.status==="active").sort((t,i)=>t.name.localeCompare(i.name,"zh-CN"))}function Fo(e){return Vo(e).map(t=>t.name)}function ld(e){return["全部",...Fo(e)]}const od=new Set(["site","location"]);function Sh(e,t){return e.map(i=>!od.has(i.key)||i.type!=="select"?i:{...i,options:[...t]})}function yh(e,t){return e.filter(i=>i.siteId===t&&i.status==="active").sort((i,n)=>i.name.localeCompare(n.name,"zh-CN"))}function jo(e){return[...e].filter(t=>t.status==="active"&&t.code).sort((t,i)=>t.code.localeCompare(i.code,"zh-CN"))}function cd(e){return e?e.code?`${e.code} | ${e.name}`:e.name||"":""}function ad(e){return jo(e).map(t=>({value:t.id,label:cd(t),code:t.code,name:t.name}))}function ud(e){return zf.includes(e.trim())}function Ho(e){return Jf.includes(e)}function Ms(e,t){if(!Qf.includes(e))return!1;const i=Zf[t];return i?i.some(n=>e.startsWith(n)):!0}function fd(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function dd(e,t,i=null){return e.some(n=>n.id!==i&&n.name===t)}function Uo(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function Ko(e,t,i,n=null){return e.some(s=>s.id!==n&&s.siteId===i&&s.name===t)}function Go(e,t,i=null){return e.some(n=>n.id!==i&&n.code===t)}function Wo(e,t,i,n=null){return e.some(s=>s.id!==n&&s.branchId===i&&s.name===t)}function Ch(e,t,i){const n={},s=e.siteId||null,r=e.code.trim(),l=e.name.trim(),o=e.remark||"";return i||(r?r.length>qf?n.code="馆址编码长度不能超过32个字符":ud(r)?fd(t,r,s)&&(n.code="馆址编码已存在，请修改"):n.code="馆址编码必须属于四级馆藏地现有编码":n.code="请输入馆址编码"),l?l.length>Xf?n.name="馆址名称长度不能超过64个字符":dd(t,l,s)&&(n.name="已存在同名馆址"):n.name="请输入馆址名称",o.length>Yf&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function Rh(e,t,i){const n={},s=e.branchId||null,r=e.siteId,l=e.code.trim(),o=e.name.trim(),c=e.remark||"";return r||(n.siteId="请选择所属馆址"),i||(l?l.length>$o?n.code="分馆编码长度不能超过32个字符":r&&!Ms(l,r)?n.code="分馆编码必须属于四级馆址编码范围内":Uo(t,l,s)&&(n.code="分馆编码已存在，请修改"):n.code="请输入分馆编码"),o?o.length>ks?n.name="分馆名称长度不能超过64个字符":r&&Ko(t,o,r,s)&&(n.name="该馆址下已存在同名分馆"):n.name="请输入分馆名称",c.length>Po&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function Th(e,t,i){const n={},s=e.collectionId||null,r=e.branchId,l=e.code.trim(),o=e.name.trim(),c=e.remark||"";return e.siteId||(n.siteId="请选择所属馆址"),r||(n.branchId="请选择所属分馆"),i||(l?l.length>Oo?n.code="馆藏地编码长度不能超过32个字符":Ho(l)?Go(t,l,s)&&(n.code="馆藏地编码已存在，请修改"):n.code="馆藏地编码必须属于四级馆藏地现有编码":n.code="请输入馆藏地编码"),o?o.length>Ds?n.name="馆藏地名称长度不能超过64个字符":r&&Wo(t,o,r,s)&&(n.name="该分馆下已存在同名馆藏地"):n.name="请输入馆藏地名称",c.length>ko&&(n.remark="备注长度不能超过200个字符"),{valid:Object.keys(n).length===0,errors:n}}function Ah(e,t){return e.filter(i=>!(!Ke(i.code,t.code)||!Ke(i.name,t.name)||t.status&&i.status!==t.status))}function Eh(e,t,i){return e.map(n=>sd(n,t)).filter(n=>!(!Ke(n.siteCode,i.siteCode)||!Ke(n.siteName,i.siteName)||!Ke(n.code,i.code)||!Ke(n.name,i.name)||i.status&&n.status!==i.status))}function xh(e,t,i,n){return e.map(s=>rd(s,t,i)).filter(s=>!(!Ke(s.siteCode,n.siteCode)||!Ke(s.siteName,n.siteName)||!Ke(s.branchCode,n.branchCode)||!Ke(s.branchName,n.branchName)||!Ke(s.code,n.code)||!Ke(s.name,n.name)||n.status&&s.status!==n.status))}function pd(e){return/\.(xls|xlsx)$/i.test(e)}function ti(e,t,i){const n=i.map(o=>o.map(c=>`"${String(c||"").replace(/"/g,'""')}"`).join(",")),s=`\uFEFF${t.join(",")}
${n.join(`
`)}
`,r=new Blob([s],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a");l.href=URL.createObjectURL(r),l.download=e,l.click(),URL.revokeObjectURL(l.href)}function Ih(e){e==="site"?ti("馆址导入模板.csv",Do,[["ST001_C5","示例馆址名称","使用中","示例备注"]]):e==="branch"?ti("分馆导入模板.csv",Mo,[["ST001_C1","首都华威桥馆","STF01","示例分馆名称","使用中","示例备注"]]):ti("馆藏地导入模板.csv",Lo,[["ST001_C1","首都华威桥馆","STD01","首图地方文献","CL005","示例馆藏地名称","使用中","示例备注"]])}function wh(e,t){if(!(t!=null&&t.length))return;const i=new Date().toISOString().replace(/[-:T]/g,"").slice(0,14);e==="site"?ti(`馆址导入解析错误文件_${i}.csv`,[...Do,"错误原因"],t.map(n=>[n.code,n.name,n.statusText,n.remark,n.errorReason])):e==="branch"?ti(`分馆导入解析错误文件_${i}.csv`,[...Mo,"错误原因"],t.map(n=>[n.siteCode,n.siteName,n.branchCode,n.branchName,n.statusText,n.remark,n.errorReason])):ti(`馆藏地导入解析错误文件_${i}.csv`,[...Lo,"错误原因"],t.map(n=>[n.siteCode,n.siteName,n.branchCode,n.branchName,n.collectionCode,n.collectionName,n.statusText,n.remark,n.errorReason]))}function hd(e,t,i,n){const s=String(e.siteCode||"").trim(),r=String(e.branchCode||"").trim(),l=String(e.branchName||"").trim(),o=String(e.remark||"");if(!s)return"馆址编码不能为空";if(!r)return"分馆编码不能为空";if(!l)return"分馆名称不能为空";if(r.length>$o)return"分馆编码长度不能超过32个字符";if(l.length>ks)return"分馆名称长度不能超过64个字符";if(o.length>Po)return"备注长度不能超过200个字符";const c=zt(i,s);return c?n.has(r)||Uo(t,r)?"分馆编码重复":Ms(r,c.id)?Ko(t,l,c.id)?"同馆址下已存在同名分馆":(n.add(r),null):"分馆编码不属于当前馆址编码":"馆址编码不存在"}function gd(e,t,i,n,s){const r=String(e.siteCode||"").trim(),l=String(e.branchCode||"").trim(),o=String(e.collectionCode||"").trim(),c=String(e.collectionName||"").trim(),u=String(e.remark||"");if(!r)return"馆址编码不能为空";if(!l)return"分馆编码不能为空";if(!o)return"馆藏地编码不能为空";if(!c)return"馆藏地名称不能为空";if(o.length>Oo)return"馆藏地编码长度不能超过32个字符";if(c.length>Ds)return"馆藏地名称长度不能超过64个字符";if(u.length>ko)return"备注长度不能超过200个字符";const a=zt(n,r);if(!a)return"馆址编码不存在";const d=i.find(g=>g.siteId===a.id&&g.code===l);return d?s.has(o)||Go(t,o)?"馆藏地编码重复":Ho(o)?Wo(t,c,d.id)?"同分馆下已存在同名馆藏地":(s.add(o),null):"馆藏地编码不属于四级馆藏地现有编码":"分馆编码不存在"}function Nh(e,t,{siteRows:i,branchRows:n,collectionRows:s}){const r=t.name.toLowerCase();if(!pd(t.name))return{ok:!1,message:"导入文件格式不符"};if(r.includes("header")||r.includes("表头"))return{ok:!1,message:"模板的表头更改了"};if(r.includes("2000")||r.includes("超限"))return{ok:!1,message:"数据记录超过2000条"};if(e==="site"){const g=new Set(i.map(y=>y.code).filter(Boolean)),m=new Set(i.map(y=>y.name));if(r.includes("success")||r.includes("全部成功")){const _=["ST002_C1","ST002_C2","ST003_C1"].filter(D=>!g.has(D)).map((D,X)=>({code:D,name:`批量导入馆址${X+1}`,status:"active",remark:""}));return{ok:!0,result:{total:_.length,success:_.length,fail:0,successRows:_,errorRows:[]}}}const T=100,S=10,I=["馆址编码重复","馆址编码不属于四级馆藏地现有编码","馆址名称长度不能超过64个字符","已存在同名馆址"],P=Array.from({length:S},(y,_)=>({code:_===0?"ST001_C1":`INVALID_${_}`,name:_===3?"首都华威桥馆":`失败馆址${_+1}`,statusText:"使用中",remark:"",errorReason:I[_%I.length]})),b=Array.from({length:T-S},(y,_)=>({code:`ST002_C${String(_+10).padStart(2,"0")}`,name:`导入馆址${_+1}`,status:"active",remark:_%4===0?"批量导入":""})).filter(y=>!g.has(y.code)&&!m.has(y.name));return{ok:!0,result:{total:T,success:T-S,fail:S,successRows:b,errorRows:P}}}if(e==="branch"){const g=new Set(n.map(b=>b.code).filter(Boolean));if(r.includes("success")||r.includes("全部成功")){const b=zt(i,"ST001_C1")||i.find(D=>D.code),_=["STF01","STH01","STD02"].filter(D=>!g.has(D)&&b&&Ms(D,b.id)).map((D,X)=>({siteCode:(b==null?void 0:b.code)||"ST001_C1",siteName:(b==null?void 0:b.name)||"首都华威桥馆",siteId:(b==null?void 0:b.id)||"site-1",branchCode:D,branchName:`批量导入分馆${X+1}`,status:"active",remark:""}));return{ok:!0,result:{total:_.length,success:_.length,fail:0,successRows:_,errorRows:[]}}}const m=100,T=10,S=["分馆编码重复","分馆编码不属于当前馆址编码","分馆名称长度不能超过64个字符","馆址编码不存在","同馆址下已存在同名分馆"],I=Array.from({length:T},(b,y)=>({siteCode:y===3?"INVALID_SITE":"ST001_C1",siteName:y===3?"不存在馆址":"首都华威桥馆",branchCode:y===0?"STD01":`INVALID_${y}`,branchName:y===2?"A".repeat(ks+1):y===4?"首图地方文献":`失败分馆${y+1}`,statusText:"使用中",remark:"",errorReason:S[y%S.length]})),P=Array.from({length:m-T},(b,y)=>{const _=zt(i,"ST001_C1")||i[0],D=`STF${String(y+10).padStart(2,"0")}`;return{siteCode:(_==null?void 0:_.code)||"ST001_C1",siteName:(_==null?void 0:_.name)||"首都华威桥馆",siteId:(_==null?void 0:_.id)||"site-1",branchCode:D,branchName:`导入分馆${y+1}`,status:"active",remark:y%4===0?"批量导入":""}}).filter(b=>!g.has(b.branchCode)&&hd(b,n,i,new Set)===null);return{ok:!0,result:{total:m,success:m-T,fail:T,successRows:P,errorRows:I}}}const l=new Set(s.map(g=>g.code).filter(Boolean));if(r.includes("success")||r.includes("全部成功")){const g=zt(i,"ST001_C1")||i[0],m=n.find(I=>I.siteId===(g==null?void 0:g.id)&&I.code==="STD01")||n[0],S=["CL005","CL006","CL007"].filter(I=>!l.has(I)).map((I,P)=>({siteCode:(g==null?void 0:g.code)||"ST001_C1",siteName:(g==null?void 0:g.name)||"首都华威桥馆",branchCode:(m==null?void 0:m.code)||"STD01",branchName:(m==null?void 0:m.name)||"首图地方文献",branchId:(m==null?void 0:m.id)||"branch-1",collectionCode:I,collectionName:`批量导入馆藏地${P+1}`,status:"active",remark:""}));return{ok:!0,result:{total:S.length,success:S.length,fail:0,successRows:S,errorRows:[]}}}const o=100,c=10,u=["馆藏地编码重复","馆藏地编码不属于四级馆藏地现有编码","馆藏地名称长度不能超过64个字符","馆址编码不存在","分馆编码不存在","同分馆下已存在同名馆藏地"],a=Array.from({length:c},(g,m)=>({siteCode:m===3?"INVALID_SITE":"ST001_C1",siteName:m===3?"不存在馆址":"首都华威桥馆",branchCode:m===4?"INVALID_BRANCH":"STD01",branchName:m===4?"不存在分馆":"首图地方文献",collectionCode:m===0?"CL001":`INVALID_${m}`,collectionName:m===2?"A".repeat(Ds+1):m===5?"北京地方文献阅览室":`失败馆藏地${m+1}`,statusText:"使用中",remark:"",errorReason:u[m%u.length]})),d=Array.from({length:o-c},(g,m)=>{const T=zt(i,"ST001_C1")||i[0],S=n.find(P=>P.siteId===(T==null?void 0:T.id)&&P.code==="STD01")||n[0],I=`CL${String(m+20).padStart(3,"0")}`;return{siteCode:(T==null?void 0:T.code)||"ST001_C1",siteName:(T==null?void 0:T.name)||"首都华威桥馆",branchCode:(S==null?void 0:S.code)||"STD01",branchName:(S==null?void 0:S.name)||"首图地方文献",branchId:(S==null?void 0:S.id)||"branch-1",collectionCode:I,collectionName:`导入馆藏地${m+1}`,status:"active",remark:m%4===0?"批量导入":""}}).filter(g=>!l.has(g.collectionCode)&&gd(g,s,n,i,new Set)===null);return{ok:!0,result:{total:o,success:o-c,fail:c,successRows:d,errorRows:a}}}function $h(e,t){t.forEach(i=>{e.some(n=>n.code===i.code)||e.unshift({id:`site-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,code:i.code,name:i.name,status:i.status,remark:i.remark||""})})}function Ph(e,t){t.forEach(i=>{e.some(n=>n.code===i.branchCode)||e.unshift({id:`branch-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,siteId:i.siteId,code:i.branchCode,name:i.branchName,status:i.status,remark:i.remark||""})})}function Oh(e,t){t.forEach(i=>{e.some(n=>n.code===i.collectionCode)||e.unshift({id:`col-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,branchId:i.branchId,code:i.collectionCode,name:i.collectionName,status:i.status,remark:i.remark||""})})}const Ur="orderm_location_data";function Hi(){return{siteRows:ed.map(e=>({...e})),branchRows:td.map(e=>({...e})),collectionRows:id.map(e=>({...e}))}}const md=Rn("location",{state:()=>({initialized:!1,siteRows:[],branchRows:[],collectionRows:[]}),getters:{activeSites(e){return Vo(e.siteRows)},activeSiteNames(e){return Fo(e.siteRows)},activeSiteFilterOptions(e){return ld(e.siteRows)},activeBranches(e){return jo(e.branchRows)},activeBranchSelectOptions(e){return ad(e.branchRows)}},actions:{initFromStorage(){if(!this.initialized){try{const e=localStorage.getItem(Ur);if(e){const t=JSON.parse(e);this.siteRows=Array.isArray(t.siteRows)?t.siteRows:Hi().siteRows,this.branchRows=Array.isArray(t.branchRows)?t.branchRows:Hi().branchRows,this.collectionRows=Array.isArray(t.collectionRows)?t.collectionRows:Hi().collectionRows}else this.resetToInitial()}catch{this.resetToInitial()}this.initialized=!0}},ensureInitialized(){this.initialized||this.initFromStorage()},resetToInitial(){const e=Hi();this.siteRows=e.siteRows,this.branchRows=e.branchRows,this.collectionRows=e.collectionRows,this.persist()},persist(){localStorage.setItem(Ur,JSON.stringify({siteRows:this.siteRows,branchRows:this.branchRows,collectionRows:this.collectionRows}))},replaceSiteRows(e){this.siteRows=e,this.persist()},replaceBranchRows(e){this.branchRows=e,this.persist()},replaceCollectionRows(e){this.collectionRows=e,this.persist()}}}),vd={class:"h-12 bg-slate-900 flex items-center justify-between px-4 shrink-0 z-20"},bd={class:"flex items-center gap-2"},_d={class:"text-white font-medium text-sm"},Sd={class:"flex items-center gap-3 shrink-0"},yd={class:"flex items-center gap-1 text-gray-300 text-xs"},Cd={class:"text-white"},Rd={__name:"AppHeader",setup(e){const t=En();return(i,n)=>(Se(),Le("header",vd,[Z("div",bd,[n[0]||(n[0]=Z("div",{class:"w-7 h-7 bg-sky-500 rounded flex items-center justify-center"},[Z("svg",{class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})])],-1)),Z("span",_d,ii(ye(t).config.appName),1)]),Z("div",Sd,[Z("div",yd,[n[1]||(n[1]=Z("span",null,"当前机构",-1)),Z("span",Cd,ii(ye(t).config.institution),1),n[2]||(n[2]=Z("svg",{class:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),n[3]||(n[3]=Z("div",{class:"w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center"},[Z("svg",{class:"w-5 h-5 text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])],-1))])]))}},Td={id:"sidebar-wrapper",class:"relative shrink-0 h-full"},Ad={class:"flex-1 py-2"},Ed=["onClick"],xd={__name:"AppSidebar",setup(e){const t=Os(),i=En(),n=hn(!1);function s(l){return fs(i.activeRoute)===l}function r(l,o){i.openTab(l,o),t.push(l)}return(l,o)=>{const c=Es("RouterLink");return Se(),Le("div",Td,[Z("aside",{id:"sidebar",class:It(["h-full bg-slate-800 flex flex-col overflow-y-auto transition-[width] duration-200",n.value?"w-0 overflow-hidden":"w-52"])},[Z("nav",Ad,[(Se(!0),Le(Oe,null,Jn(ye(i).config.sidebar,u=>(Se(),Le("div",{key:u.id,class:"sidebar-group"},[Z("button",{type:"button",class:"sidebar-toggle w-full flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-slate-700 transition-colors",onClick:a=>ye(i).toggleGroup(u.id)},[Z("span",null,ii(u.label),1),(Se(),Le("svg",{class:It(["w-4 h-4 transition-transform",{"rotate-180":ye(i).isGroupExpanded(u.id,ye(i).activeRoute)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...o[2]||(o[2]=[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],8,Ed),Z("div",{class:It(["sidebar-children overflow-hidden transition-all duration-200",ye(i).isGroupExpanded(u.id,ye(i).activeRoute)?"max-h-[500px]":"max-h-0"])},[(Se(!0),Le(Oe,null,Jn(u.children,a=>(Se(),si(c,{key:a.route,to:a.route,class:It(["block pl-10 pr-4 py-2 text-sm transition-colors",s(a.route)?"bg-sky-600 text-white":"text-gray-400 hover:text-white hover:bg-slate-700"]),onClick:d=>r(a.route,a.label)},{default:Ts(()=>[ro(ii(a.label),1)]),_:2},1032,["to","class","onClick"]))),128))],2)]))),128))]),Z("button",{type:"button",class:"p-3 border-t border-slate-700 text-gray-400 hover:text-white flex justify-center shrink-0",title:"收起菜单",onClick:o[0]||(o[0]=u=>n.value=!0)},[...o[3]||(o[3]=[Z("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})],-1)])])],2),Vc(Z("button",{type:"button",id:"sidebar-expand",class:"absolute bottom-0 left-0 z-10 w-10 p-3 border-t border-slate-700 bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 flex justify-center",title:"展开菜单",onClick:o[1]||(o[1]=u=>n.value=!1)},[...o[4]||(o[4]=[Z("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})],-1)])],512),[[za,n.value]])])}}},Id={id:"page-tab-bar",class:"bg-white border-b border-gray-200 px-4 flex items-center gap-2 h-10 shrink-0 overflow-x-auto"},wd=["onClick"],Nd=["onClick"],$d={__name:"TabBar",setup(e){const t=Os(),i=En();function n(r){i.switchTab(r),t.push(r)}function s(r){const l=i.activeRoute===r;i.closeTab(r),l&&t.push(i.activeRoute)}return(r,l)=>(Se(),Le("div",Id,[(Se(!0),Le(Oe,null,Jn(ye(i).tabs,o=>(Se(),Le("div",{key:o.route,class:It(["flex items-center gap-2 border rounded px-3 py-1 text-sm cursor-pointer whitespace-nowrap",o.route===ye(i).activeRoute?"bg-sky-50 border-sky-200 text-sky-700":"bg-white border-gray-200 text-gray-600 hover:bg-gray-50"]),onClick:c=>n(o.route)},[Z("span",null,ii(o.title),1),ye(i).tabs.length>1?(Se(),Le("button",{key:0,type:"button",class:"opacity-40 hover:opacity-100 text-xs leading-none",onClick:mu(c=>s(o.route),["stop"])},"×",8,Nd)):lo("",!0)],10,wd))),128))]))}},Pd={class:"flex flex-col h-screen overflow-hidden"},Od={class:"flex flex-1 overflow-hidden"},kd={class:"flex-1 flex flex-col overflow-hidden bg-gray-100"},Dd={class:"flex-1 min-h-0 overflow-hidden"},Md={class:"h-full min-h-0 overflow-hidden p-4 flex flex-col"},Ld={key:0,class:"flex flex-col flex-1 min-h-0 h-full overflow-hidden"},Bd={__name:"AppLayout",setup(e){const t=Kf();Os();const i=En(),n=Gf(),s=Wf(),r=md();As(()=>{i.initFromStorage(),n.initFromStorage(),s.initFromStorage(),r.initFromStorage(),l()}),Ft(()=>t.path,()=>l());function l(){const o=t.path,c=t.meta.title||No(o);i.openTab(o,c)}return(o,c)=>{const u=Es("RouterView");return Se(),Le("div",Pd,[me(Rd),Z("div",Od,[me(xd),Z("main",kd,[me($d),Z("div",Dd,[Z("div",Md,[me(u,null,{default:Ts(({Component:a,route:d})=>[a?(Se(),Le("div",Ld,[(Se(),si(Yc,{max:20},[(Se(),si(ra(a),{key:d.fullPath}))],1024))])):lo("",!0)]),_:1})])])])])])}}},Vd=[{path:"orders",name:"orders",component:()=>ne(()=>import("./OrderManageView-BjvaoxM_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url),meta:{title:"订单管理",module:"order"}},{path:"orders/lines",redirect:{path:"/orders",query:{tab:"order-line"}}},{path:"orders/line/:lineNo?",name:"order-line-detail",component:()=>ne(()=>import("./OrderLineDetailView-BVLygfiE.js"),__vite__mapDeps([27,3,4,5,9,10,11,12,13,20,24,25,28]),import.meta.url),meta:{title:"订单行详情",module:"order"}},{path:"bib-query",name:"bib-query",component:()=>ne(()=>import("./BibQueryView-CipkTsVF.js"),__vite__mapDeps([29,3,4,5,20,2,9,10,11,12,13,30,16,17,18,8,21,31,14,15,24,25,6,32]),import.meta.url),meta:{title:"书目查询",module:"order"}},{path:"bib-query/new-bib",name:"new-bib",component:()=>ne(()=>import("./NewBibView-D4rA2wKQ.js"),__vite__mapDeps([33,34]),import.meta.url),meta:{title:"新建书目",module:"order"}},{path:"bib-query/z3950",name:"z3950",component:()=>ne(()=>import("./Z3950QueryView-D2UCv5UW.js"),__vite__mapDeps([35,3,4,5,34]),import.meta.url),meta:{title:"查Z3950",module:"order"}}],Fd=[{path:"acceptance",name:"acceptance",component:()=>ne(()=>import("./AcceptanceManageView-B7QzYPyY.js"),__vite__mapDeps([36,1,2,3,4,5,7,24,25,21,37,10,38,39,40,41,16,17,18,6]),import.meta.url),meta:{title:"验收单管理",module:"acceptance"}},{path:"acceptance/detail/:acceptanceId",name:"acceptance-detail",component:()=>ne(()=>import("./AcceptanceDetailView-tfEun4LL.js"),__vite__mapDeps([42,1,2,3,4,5,7,6,39,21,37,10,24,25,11,34]),import.meta.url),meta:{title:"验收详情",module:"acceptance"}},{path:"acceptance/delivery-import",redirect:"/acceptance/delivery-import/tasks"},{path:"acceptance/delivery-import/tasks",name:"delivery-import-tasks",component:()=>ne(()=>import("./DeliveryImportTaskListView-BCLdaeI5.js"),__vite__mapDeps([43,3,4,5,40,41,44,37,10,6,45]),import.meta.url),meta:{title:"导入任务",module:"acceptance"}},{path:"acceptance/delivery-import/tasks/:id",name:"delivery-import-task-detail",component:()=>ne(()=>import("./DeliveryImportTaskDetailView-BavMy7oo.js"),__vite__mapDeps([46,4,34,40,41,47,6,21,37,10,44,48]),import.meta.url),meta:{title:"导入任务详情",module:"acceptance"}},{path:"receive",name:"receive",component:()=>ne(()=>import("./ReceiveByItemView-CyXiuqc0.js"),__vite__mapDeps([49,3,4,5,6,47,41,24,25,14,37,10,11]),import.meta.url),meta:{title:"逐条收货",module:"acceptance"}},{path:"batch-acceptance",name:"batch-acceptance",component:()=>ne(()=>import("./BatchAcceptanceView-Bib-vCuD.js"),__vite__mapDeps([50,1,2,3,4,5,6,21,37,10,38]),import.meta.url),meta:{title:"批量验收",module:"acceptance"}},{path:"exchange",name:"exchange",component:()=>ne(()=>import("./ExchangeManageView-BXrK_1R4.js"),__vite__mapDeps([51,3,4,5,7,2,21,41,14]),import.meta.url),meta:{title:"换货管理",module:"acceptance"}},{path:"return",name:"return",component:()=>ne(()=>import("./ReturnManageView-D2gMwviT.js"),__vite__mapDeps([52,3,4,5,7,2,14]),import.meta.url),meta:{title:"退货管理",module:"acceptance"}},{path:"shortage",name:"shortage",component:()=>ne(()=>import("./ShortageManageView-MYcRH8YV.js"),__vite__mapDeps([53,22,9,10,11,12,13,8,1,2,3,4,5,7,6,54,21,14]),import.meta.url),meta:{title:"催缺管理",module:"acceptance"}},{path:"shortage/detail/:shortageId",name:"shortage-detail",component:()=>ne(()=>import("./ShortageDetailView-CXpKvtRg.js"),__vite__mapDeps([55,1,2,3,4,5,6,54,21,22,9,10,11,12,13,8,34]),import.meta.url),meta:{title:"催缺详情",module:"acceptance"}}],jd=[{path:"pending-settlement",name:"pending-settlement",component:()=>ne(()=>import("./PendingSettlementView-96FtbifS.js"),__vite__mapDeps([56,1,2,3,4,5,21]),import.meta.url),meta:{title:"待结算",module:"settlement"}},{path:"settled",name:"settled",component:()=>ne(()=>import("./SettledView-DVl16IIh.js"),__vite__mapDeps([57,1,2,3,4,5,58]),import.meta.url),meta:{title:"已结算",module:"settlement"}},{path:"settled/detail/:settleId",name:"settlement-detail",component:()=>ne(()=>import("./SettlementDetailView-DOco5Vd_.js"),__vite__mapDeps([59,34,58]),import.meta.url),meta:{title:"结算详情",module:"settlement"}},{path:"settled/list/:settleId",name:"settlement-list",component:()=>ne(()=>import("./SettlementListView-CfuAScXZ.js"),__vite__mapDeps([60,1,2,3,4,5,7,34,12]),import.meta.url),meta:{title:"结算清单",module:"settlement"}},{path:"settlement-fail",name:"settlement-fail",component:()=>ne(()=>import("./FailSettlementView-h5tveFAx.js"),__vite__mapDeps([61,1,2,3,4,5]),import.meta.url),meta:{title:"结算失败处理",module:"settlement"}}],Hd=[{path:"subscribers",name:"subscribers",component:()=>ne(()=>import("./SubscriberListView-C4eDNdzB.js"),__vite__mapDeps([62,1,2,3,4,5,19,31,18,21,17]),import.meta.url),meta:{title:"订户列表",module:"subscriber"}},{path:"librarians",name:"librarians",component:()=>ne(()=>import("./LibrarianListView-DgWM4TrW.js"),__vite__mapDeps([63,1,2,3,4,5,21,17,18]),import.meta.url),meta:{title:"馆员列表",module:"subscriber"}}],Ud=[{path:"currency",name:"currency",component:()=>ne(()=>import("./CurrencyInfoView-BNNBcuw8.js"),__vite__mapDeps([64,1,2,3,4,5,30,21]),import.meta.url),meta:{title:"货币信息",module:"currency"}}],Kd=[{path:"import-template",name:"import-template",component:()=>ne(()=>import("./ImportTemplateConfigView-DC1DZuWu.js"),__vite__mapDeps([65,1,2,3,4,5,31,66,23,21]),import.meta.url),meta:{title:"订单导入模板配置",module:"import-template"}}],Gd=[{path:"shortage-config",name:"shortage-config",component:()=>ne(()=>import("./ShortageConfigView-C-G_fKST.js"),__vite__mapDeps([67,1,2,3,4,5,18,21]),import.meta.url),meta:{title:"催缺配置",module:"shortage-config"}}],Wd=[{path:"barcode-supplier",name:"barcode-supplier",component:()=>ne(()=>import("./BarcodeSupplierView-C9f75y6H.js"),__vite__mapDeps([68,1,2,3,4,5,66,21]),import.meta.url),meta:{title:"条码号供应商代码",module:"barcode-supplier"}}],qd=[{path:"marc-mapping",name:"marc-mapping",component:()=>ne(()=>import("./MarcMappingView-B-oSAhyb.js"),__vite__mapDeps([69,1,2,3,4,5,13]),import.meta.url),meta:{title:"订单与MARC类型映射关系",module:"marc-mapping"}}],Xd=[{path:"locations",name:"locations",component:()=>ne(()=>import("./LocationManageView-CLcVOZsJ.js"),__vite__mapDeps([70,1,2,3,4,5,66]),import.meta.url),meta:{title:"馆址管理",module:"location"}}],qo=Uf({history:yf(),routes:[{path:"/",component:Bd,redirect:"/orders",children:[...Vd,...Fd,...jd,...Hd,...Ud,...Kd,...Gd,...Wd,...qd,...Xd,{path:"reason-params",name:"reason-params",component:()=>ne(()=>import("./ReasonParamsView-CDE1B998.js"),__vite__mapDeps([71,1,2,3,4,5]),import.meta.url),meta:{title:"退换撤订原因参数"}},{path:"placeholder/:slug",name:"placeholder",component:()=>ne(()=>import("./PlaceholderView-DHPEk5rv.js"),[],import.meta.url),meta:{title:"待迁移"}}]}]});qo.beforeEach((e,t,i)=>{document.title=`${e.meta.title||"页面"} - 图书馆采选订单管理系统`,i()});function Yd(e,t){return`<div class="prd-spec-header"><div class="prd-spec-header-title">[${e}] ${t}</div></div>`}function p(e,t){return`<p class="prd-spec-section-title">${t}</p>`}function Ie(e){return`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e};margin-right:6px;"></span>`}function ce(e,t){const i=e.map(s=>`<th>${s}</th>`).join(""),n=t.map(s=>`<tr>${s.map(r=>`<td>${r}</td>`).join("")}</tr>`).join("");return`<table class="prd-spec-table"><thead><tr>${i}</tr></thead><tbody>${n}</tbody></table>`}function K(e,t,i){return`${Yd(e,t)}${i}`}const zd=K("5.2.5.1","筛选查询",`
<div id="overview">
${p("","功能描述")}
<p>提供多维度组合检索条件，帮助用户快速定位目标订单。支持展开/收起：默认显示首行 3 列检索项，展开后显示全部条件。</p>
${p("","页面要素")}
<ul>
<li><strong>默认显示</strong>：订单号（文本）、采选方式（下拉）、供应商（下拉）</li>
<li><strong>展开后追加</strong>：发订人、订单状态、结算状态、订户、语种、发订时间（日期范围）、预算名称、资源类型、馆址</li>
<li><strong>操作按钮</strong>：「检索」触发过滤；「重置」清空条件并恢复全量列表</li>
</ul>
</div>
<div id="rules">
${p("","业务规则")}
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
${p("","异常处理")}
<ul>
<li>无匹配数据时表格展示空列表，分页显示 0 条</li>
</ul>
</div>`),Jd=K("5.2.5.2","数据表格与行操作",`
<div id="overview">
${p("","功能描述")}
<p>以表格形式展示订单列表，支持分页、行勾选及按订单状态动态显示操作按钮。</p>
${p("","表格列")}
<p>复选框列（始终固定列首最左）、序号、订户、馆址、订单号、采选方式、资源类型、语种、供应商、订单时间、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订户、馆址、订单号；列尾 — 操作。列展示自定义规则见 <strong>5.2.5.9</strong>。</p>
${p("","交互逻辑")}
<ul>
<li>订单号列：蓝色文字链，点击切换至「订单行列表」页签并带入订单号筛选</li>
<li>发订备注：有内容时显示蓝色「查看」（悬浮 title 展示全文）；无内容时灰色「查看」</li>
<li>列较多时表格可横向滚动；纵向滚动时表头吸顶；固定列横向滚动时不透出底层字段</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.2.5.9）</li>
<li>订单状态带颜色标识：${Ie("#7c3aed")}待导入、${Ie("#d97706")}待发订、${Ie("#16a34a")}已发订、${Ie("#2563eb")}处理中、${Ie("#6b7280")}已撤订</li>
<li>分页：默认 10 条/页，底部显示总条数与页码切换</li>
</ul>
</div>
<div id="rules">
${p("","操作按钮规则（按订单状态）")}
${ce(["订单状态","可用操作"],[["待发订 pending","发订、删除"],["待导入 pendingImport","导入订单"],["已发订 ordered","编辑、导出订单、撤订"],["处理中 processing","导出订单"],["已撤订 cancelled","导出订单、删除"]])}
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>导出订单（单行）：原型阶段 alert 提示演示</li>
</ul>
</div>`),Qd=K("5.2.5.3","新建订单弹窗",`
<div id="overview">
${p("","功能描述")}
<p>通过工具栏「新建订单」按钮打开模态弹窗，填写订单头信息后创建新订单，初始状态为<strong>待导入</strong>。</p>
${p("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 订户、资源类型、采选方式、预算名称、语种、供应商、馆址（均为下拉，必填）</li>
<li>折扣（文本，非必填）</li>
</ul>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>提交前校验全部必填项，未填时在字段下方显示红色提示并 alert 首条错误</li>
<li>新建成功后订单号自动生成，格式 PG001B{yyyyMMdd}{3位流水}</li>
<li>新建订单默认：发订册数/种数 0，码洋/实洋 0.00，结算状态「未结算」，发订时间为空</li>
<li>馆址选项来源于系统馆址配置（仅启用状态）</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>必填项未填：阻止提交，提示「请选择{字段名}」</li>
</ul>
</div>`),Zd=K("5.2.5.4","编辑订单弹窗",`
<div id="overview">
${p("","功能描述")}
<p>已发订订单可通过操作列「编辑」打开弹窗，修改预算名称、供应商、发订备注。</p>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>预算名称、供应商为必填下拉</li>
<li>发订备注为多行文本，非必填</li>
<li>保存后更新列表对应行（原型 alert「订单已保存」）</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>预算或供应商未选：alert 提示对应字段</li>
</ul>
</div>`),ep=K("5.2.5.5","发订",`
<div id="overview">
${p("","功能描述")}
<p>待发订订单通过操作列「发订」打开发订备注弹窗，确认后将订单及下属待发订订单行置为已发订。</p>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>仅 <strong>待发订（pending）</strong> 状态订单可发订</li>
<li>发订后：订单状态 → 已发订；记录发订时间、发订人、发订备注</li>
<li>该订单下所有「待发订」订单行同步变为「已发订」，写入发订时间</li>
<li>发订备注弹窗：多行文本，可为空；标题「请填写发订备注：」</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>非待发订订单发订：alert「仅待发订状态的订单可发订」</li>
</ul>
</div>`),tp=K("5.2.5.6","导入订单",`
<div id="overview">
${p("","功能描述")}
<p>待导入订单通过「导入订单」打开三步向导弹窗：选择模板并上传 → 查看解析结果 → 入库。</p>
${p("","步骤说明")}
<ol>
<li><strong>选择模板并上传</strong>：按订单资源类型/语种/供应商匹配可用导入模板；支持 xls/xlsx；可下载模板</li>
<li><strong>解析结果</strong>：展示总条数、成功/失败数；可下载解析结果；解析全部成功才可入库</li>
<li><strong>入库</strong>：点击入库显示 loading，成功后展示「入库成功」，订单状态变为待发订并写入订单行</li>
</ol>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>模板列表按当前订单属性从「导入模板管理」模块过滤</li>
<li>仅 1 个可用模板时自动选中</li>
<li>上传前校验：必须选择模板且已选文件</li>
<li>解析存在失败行时「下一步」按钮置灰</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>无匹配模板：提示「暂无与当前订单匹配的导入模板」</li>
<li>未选模板或文件：上传区显示红色校验信息</li>
<li>入库失败：展示「入库失败，请联系管理员」</li>
</ul>
</div>`),ip=K("5.2.5.7","撤订与删除",`
<div id="overview">
${p("","功能描述")}
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」）、待发订/已撤订订单删除。</p>
</div>
<div id="rules">
${p("","撤订规则")}
<ul>
<li>撤订前弹出「请选择撤订原因」弹窗，原因来源于「设置 - 退换撤订原因参数」</li>
<li>订单撤订：订单状态 → 已撤订；其下所有订单行状态 → 已撤订，写入撤订原因至备注</li>
<li>批量撤订需先勾选订单，未勾选 alert「请先勾选要撤订的订单」</li>
</ul>
${p("","删除规则")}
<ul>
<li>仅<strong>待发订</strong>或<strong>已撤订</strong>订单可删除</li>
<li>删除前二次确认弹窗展示订单号</li>
<li>删除后移除订单及其全部订单行</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>未选择撤订原因：alert「请选择撤订原因」</li>
<li>无可用撤订原因：下拉为空并提示前往设置配置</li>
</ul>
</div>`),np=K("5.2.5.8","批量导出",`
<div id="overview">
${p("","功能描述")}
<p>工具栏「批量导出」下拉提供「导出配置」「导出订单」。导出配置弹窗支持全选/取消及字段勾选。</p>
</div>
<div id="rules">
${p("","可导出字段")}
<p>订户、馆址、订单号、采选方式、资源类型、语种、供应商、发订人、发订时间、发订册数、发订种数、预算名称、码洋、折扣、实洋、发订备注、订单状态、结算状态</p>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>「导出订单」：原型阶段 alert 演示</li>
</ul>
</div>`),sp=K("5.2.5.9","列展示配置",`
<div id="overview">
${p("","功能描述")}
<p>工具栏右侧齿轮按钮打开「列展示」面板，支持列显隐、分区内拖拽排序、固定在列首或列尾；配置即时生效并持久化至浏览器本地。</p>
${p("","页面要素")}
<ul>
<li><strong>入口</strong>：工具栏最右侧齿轮图标，悬浮提示「列展示」</li>
<li><strong>面板顶栏</strong>：「列展示」全选复选框 + 「重置」按钮</li>
<li><strong>三区列表</strong>（自上而下）：固定在列首 → 不固定 → 固定在列尾</li>
<li><strong>列项行</strong>：拖拽手柄、显隐复选框、列名；悬停显示固定操作图标</li>
</ul>
</div>
<div id="interaction">
${p("","交互逻辑")}
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
${p("","默认固定位置")}
${ce(["固定位置","默认列"],[["列首固定","序号、订户、馆址、订单号"],["列尾固定","操作"]])}
${p("","业务规则")}
<ul>
<li>复选框列<strong>不参与</strong>列展示配置，始终显示且始终固定于列首最左侧</li>
<li>横向滚动时列首/列尾固定列保持可见，表头与表体同步固定，背景不透明</li>
<li>纵向滚动时表头吸顶</li>
<li>本地存储异常时自动回退默认配置</li>
</ul>
</div>`),rp=K("5.3.5.1","筛选查询",`
<div id="overview">
${p("","功能描述")}
<p>支持基础条件 + 组合条件检索订单行，默认显示订单号、订单行号、行状态。</p>
${p("","页面要素")}
<ul>
<li><strong>默认行（收起可见）</strong>：订单号、订单行号、行状态（全部/待发订/已发订/处理中/已关闭）</li>
<li><strong>展开后</strong>：组合条件（资源标识/正题名/作者/出版社 + 且/或逻辑链）、载体、验收状态、结算状态、是否催缺、书目记录号、<strong>馆藏重复</strong>、<strong>订单重复</strong>（位于书目记录号之后）</li>
<li><strong>馆藏重复 / 订单重复</strong>：下拉选框，选项 <strong>全部 / 有 / 无</strong>，默认 <strong>全部</strong></li>
<li>从订单列表点击订单号跳转时，自动带入订单号筛选</li>
</ul>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>组合条件：同一链条内按 logicAfter（且/或）串联；字段值为空则跳过该条件</li>
<li>文本匹配为包含关系（includes）</li>
<li>验收状态「待验收」匹配行 acceptanceStatus 为「待验收」</li>
<li><strong>馆藏重复 / 订单重复</strong>：选「有」仅显示标识为有的行；选「无」仅显示标识为无的行；未查重（空白）不匹配「有」或「无」；两条件可同时使用（AND）</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<p>无匹配数据时展示空表格。</p>
</div>`),lp=K("5.3.5.2","数据表格与行操作",`
<div id="overview">
${p("","功能描述")}
<p>展示订单行明细，含序号列、馆藏/订单查重标识列及行级操作入口。</p>
${p("","主要列")}
<p>复选框列、序号、订单号、馆址、订单行号、书目记录号、正题名、资源标识、载体、作者、出版社、出版时间、分卷号、分卷名、定价、币种、套内册数、套数、行状态、验收状态、结算状态、是否催缺、发/收/换/退/撤订、发订时间、馆藏重复、订单重复、备注、操作</p>
<p><strong>默认固定</strong>：列首 — 序号、订单号、馆址、订单行号；列尾 — 操作。列展示规则见 <strong>5.3.5.11</strong>。</p>
${p("","书目记录号列")}
<ul>
<li>展示<strong>书目记录号</strong>（<code>bibRecordNo</code>）</li>
<li>若<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值）非空，且其中至少有一条与书目记录号不一致，则在旁显示「<strong>实</strong>」浅蓝徽章；规则详见 <strong>5.3.5.10</strong></li>
<li>悬停「实」：浮层逐条列出全部非空实际关联书目记录号，每条为可点击链接</li>
<li>若实际关联书目记录号为空，或全部与书目记录号相同，则不显示「实」标记</li>
</ul>
${p("","交互")}
<ul>
<li>订单行号：链接跳转订单行详情页 #/orders/line/{orderLineNo}</li>
<li>备注：有备注显示蓝色「查看」，否则「—」</li>
<li>列较多时可横向滚动；表头纵向吸顶；固定列不透底</li>
<li>工具栏右侧齿轮按钮打开「列展示」配置（见 5.3.5.11）</li>
<li>操作列：查重（条件显示）、编辑、撤订（<strong>不含详情按钮</strong>；详情通过订单行号列跳转）</li>
</ul>
</div>
<div id="rules">
${p("","分页")}
<p>默认 <strong>50</strong> 条/页，可选 <strong>50 / 100 / 200</strong> 条/页；底部显示总条数与页码切换；检索后分页重置为第 1 页。</p>
</div>`),op=K("5.3.5.3","生成催缺单",`
<div id="overview">
${p("","功能描述")}
<p>对勾选的订单行批量生成催缺单：按订单号（orderId）分组，自动过滤验收状态不允许催缺的行，生成成功后将对应订单行是否催缺（isShortage）更新为「是」，并提示是否立即查看催缺模块。</p>
${p("","页面要素")}
<ul>
<li><strong>生成催缺单按钮</strong>：订单行列表工具栏（与「更换供应商」「查重」「撤订」相邻）</li>
<li><strong>成功确认弹窗</strong>：文案「催缺单生成成功，已自动过滤已收货书目」「是否立即查看？」；按钮：取消 / 确定</li>
</ul>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ol>
<li>未满足启用条件时按钮置灰不可用</li>
<li>点击后按订单号分组生成催缺单，写入催缺管理列表</li>
<li>对本次实际纳入生成的订单行，将是否催缺（isShortage）更新为「是」</li>
<li>弹出成功确认框：取消关闭；确定则跳转至催缺单管理列表（不进入催缺详情）</li>
</ol>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li><strong>启用条件</strong>：至少勾选 1 行；行状态（lineStatus）均为「已发订」或「处理中」；验收状态（acceptanceStatus）均允许催缺</li>
<li><strong>允许催缺的验收状态</strong>：验收状态非空，且不为「收货完成」「已退货」（如待验收、部分收货、换货中等可参与）</li>
<li><strong>催缺套数</strong>：催缺单中每条订单行的催缺套数（shortageSets）= max(0, 发订套数 − 收货套数 − 退货套数 − 换货套数)，取自该行发/收/换/退/撤订（flowStats）；催缺套数为 0 的行不纳入催缺单</li>
<li><strong>分组</strong>：按订单号（orderId）分组，每组一张催缺单；催缺单套数合计为组内各行催缺套数之和</li>
<li><strong>过滤</strong>：生成时再次按验收状态与催缺套数过滤；若过滤后无可生成行，则提示无法生成</li>
<li><strong>是否催缺</strong>：生成成功后，纳入催缺的订单行是否催缺（isShortage）=「是」</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>未勾选或不满足启用条件：按钮置灰</li>
<li>过滤后均不可生成：提示「所选订单行均已收货或已退货，无法生成催缺单」</li>
</ul>
</div>`),cp=K("5.3.5.4","查重操作入口",`
<div id="overview">
${p("","功能描述")}
<p>提供批量查重与单行查重两种操作入口，触发后弹出查重配置弹窗（见 5.3.5.5）。</p>
${p("","批量查重按钮")}
<ul>
<li>位置：订单行列表工具栏（与「生成催缺单」「更换供应商」「撤订」「导出订单行」相邻），文案「查重」</li>
<li>默认状态：置灰不可用</li>
<li>启用条件：同时满足以下条件时按钮高亮可点击：
<ol>
<li>至少勾选一条订单行</li>
<li>所勾选订单行数量<strong>不超过 50 条</strong></li>
<li>所勾选订单行均为<strong>待发订</strong>（若所属订单状态为待发订，则其下订单行均视为待发订）</li>
<li>所勾选订单行属于<strong>相同资源类型</strong>（取自所属订单：纸质书 / 视听资料）</li>
<li>所勾选订单行属于<strong>相同语种分类</strong>（取自所属订单：中文 / 外文）</li>
</ol></li>
<li>点击后：打开查重配置弹窗</li>
</ul>
${p("","单个查重文字链")}
<ul>
<li>位置：订单行列表操作列</li>
<li>显示条件：仅当该行可查重时显示（行状态为待发订，或所属订单状态为待发订）</li>
<li>非待发订行：不显示查重文字链</li>
<li>点击后：以当前行为查重对象，打开查重配置弹窗（不受批量条数上限约束）</li>
</ul>
</div>
<div id="rules">
${p("","订单行状态（是否可查重）")}
${ce(["状态","说明","是否可查重"],[[`${Ie("#d97706")}待发订`,"订单/行尚未发订","是"],[`${Ie("#16a34a")}已发订`,"已发订","否"],[`${Ie("#2563eb")}处理中`,"处理中","否"],[`${Ie("#6b7280")}已关闭`,"已关闭","否"],[`${Ie("#6b7280")}已撤订`,"已撤订","否"]])}
${p("","批量查重按钮状态")}
${ce(["状态","说明"],[["不可用（置灰）","未勾选行，或勾选超过 50 条，或不满足待发订 / 同资源类型 / 同语种条件"],["可用（高亮）","勾选行均满足批量查重全部启用条件"]])}
${p("","业务规则")}
<ul>
<li>若订单行行状态不为待发订，且所属订单状态亦不为待发订，则不可查重</li>
<li>若所属订单状态为待发订，则其下订单行均视为可查重</li>
<li>若批量勾选数量大于 50 条，则批量「查重」按钮置灰，不可打开查重配置</li>
<li>若批量勾选行的资源类型或语种分类不一致，则批量「查重」按钮置灰</li>
<li>单行查重不受批量勾选数量与「同资源类型 / 同语种」限制，但目标行须满足可查重条件</li>
</ul>
${p("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已登录，且具备订单行列表查看权限</li>
<li><strong>后置</strong>：查重配置弹窗打开</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>若勾选超过 50 条仍触发批量查重，则提示「批量查重最多支持 50 条订单行」，不打开配置弹窗</li>
<li>若勾选含非待发订行仍触发批量查重，则提示「仅支持行状态为待发订的订单行进行查重」</li>
<li>若勾选不同资源类型或不同语种（中文/外文）混合仍触发批量查重，则提示「请勾选相同资源类型和语种（中文/外文）的待发订订单行进行查重」</li>
</ul>
</div>`),ap=K("5.3.5.5","查重配置弹窗",`
<div id="overview">
${p("","功能描述")}
<p>点击查重入口后弹出查重配置弹窗，用户选择重复类型、查重字段与查重范围后执行查重。</p>
${p("","页面要素")}
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
${ce(["资源类型","语种分类","可选查重字段","默认选中"],[["纸质书","中文","全部、题名、资源标识、作者、出版社、出版年","资源标识"],["纸质书","外文","全部、题名、资源标识、作者、出版社、出版年","资源标识"],["视听资料","中文","全部、题名、载体","题名、载体（默认全选）"],["视听资料","外文","全部、商品条码、目录号","商品条码、目录号（默认全选）"]])}
<ul>
<li><strong>查重范围</strong>（位于查重字段下方；<strong>仅当重复类型为「不限」或「馆藏查重」时显示</strong>；选择「订单查重」时隐藏且不提交范围）
<ul>
<li>标题旁标注：「（未选择时按不限范围查重）」</li>
<li>勾选系统预设的<strong>分馆编码前缀通配符</strong>；每项展示「通配符 | 馆名」（如 <code>ST* | 首都图书馆</code>）</li>
<li>支持多选；命中规则：分馆编码（branchCode）以通配符去掉 <code>*</code> 后的前缀开头（忽略大小写）；多模式取<strong>并集</strong></li>
<li>选项列表固定高度，超出时纵向滚动；<strong>不支持</strong>关键字搜索与自由输入</li>
<li>打开弹窗时<strong>默认不选</strong>；未选任何通配符时按<strong>不限范围</strong>查重</li>
<li>预设清单（展示顺序固定，<code>ST*</code> 置顶）见下表</li>
</ul></li>
</ul>
${ce(["通配符（branchPatterns）","展示文案"],[["ST*","ST* | 首都图书馆"],["CP*","CP* | 昌平区图书馆"],["CY*","CY* | 朝阳区图书馆"],["DC*","DC* | 东城区图书馆"],["CW*","CW* | 东城区图书馆"],["DX*","DX* | 大兴区图书馆"],["FS*","FS* | 房山区图书馆"],["YS*","YS* | 燕山区图书馆"],["FT*","FT* | 丰台区图书馆"],["HD*","HD* | 海淀区图书馆"],["HR*","HR* | 怀柔区图书馆"],["MT*","MT* | 门头沟区图书馆"],["MY*","MY* | 密云区图书馆"],["PG*","PG* | 平谷区图书馆"],["SJ*","SJ* | 石景山区图书馆"],["SY*","SY* | 顺义区图书馆"],["TZ*","TZ* | 通州区图书馆"],["XC*","XC* | 西城区图书馆"],["XW*","XW* | 西城区图书馆"],["YQ*","YQ* | 延庆区图书馆"]])}
<p>说明：<code>DC*</code>/<code>CW*</code> 同属东城区、<code>XC*</code>/<code>XW*</code> 同属西城区，作为两条独立预设保留。</p>
</div>
<div id="rules">
${p("","交互逻辑")}
<ul>
<li>选择重复类型后立即生效：切换为「订单查重」时隐藏查重范围；切换回「不限」或「馆藏查重」时重新显示（已选通配符保留）</li>
<li>若勾选「全部」，则选中全部字段；若取消「全部」，则全部取消；若字段勾选状态变化，则同步「全部」勾选状态</li>
<li>查重范围：仅可勾选上表预设通配符；未选通配符仍允许提交；仅「不限」「馆藏查重」提交查重范围通配符（branchPatterns），「订单查重」按空范围提交</li>
<li>若未选择任何查重字段，则点击「确定」阻止提交，并提示「请至少选择一个查重字段」</li>
<li>若已选查重字段在任一待查重订单行上为空，则点击「确定」阻止提交，并提示存在空字段的订单行号与字段名（请取消勾选空字段或补全数据后再查重）</li>
<li>点击「确定」：按钮进入<strong>加载中</strong>（「查重中...」+ 加载图标）；<strong>加载期间防抖</strong>，禁止重复点击，同时禁用取消、关闭及表单选项</li>
<li>查重完成后<strong>自动关闭弹窗</strong>，刷新列表馆藏重复（holdingDuplicate）、订单重复（orderDuplicate）标识列；若本轮含馆藏查重，则按自动关联规则同步更新书目记录号（bibRecordNo）（见 5.3.5.6）</li>
<li>点击「取消」或关闭：不执行查重（加载中不可关闭）</li>
</ul>
${p("","业务规则")}
<ul>
<li>所选字段采用 <strong>AND（且）</strong> 逻辑：若全部已选字段的值均非空且相等，则判定为重复</li>
<li>若比对字段为资源标识，则忽略大小写及连字符（<code>-</code>）</li>
<li>其他字段比对时忽略大小写</li>
<li>查重范围未选任何通配符时视为不限；已选通配符以查重范围通配符（branchPatterns）一并提交（如 <code>ST*</code>、<code>PG*</code>）</li>
<li>若某已选通配符未匹配到任何使用中分馆，仍允许提交，不弹错</li>
</ul>
${p("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：用户已通过查重操作入口进入弹窗</li>
<li><strong>后置</strong>：执行查重并更新列表标识（及可能的书目记录号），或取消关闭弹窗</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>未选择任何查重字段：阻止提交，提示「请至少选择一个查重字段」</li>
<li>已选查重字段在待查重订单行中存在空值：阻止提交，提示空字段所在订单行号与字段名</li>
<li>查重请求失败：提示「查重失败，请稍后重试」，弹窗保持打开，恢复可编辑与可关闭状态</li>
</ul>
</div>`),up=K("5.3.5.6","查重结果展示",`
<div id="overview">
${p("","功能描述")}
<p>查重完成后，在订单行列表展示重复标识；用户可点击「有」查看详细查重结果。</p>
${p("","列表重复标识列")}
<p>列表包含两列：<strong>馆藏重复</strong>（holdingDuplicate）、<strong>订单重复</strong>（orderDuplicate）。</p>
${ce(["状态","显示"],[["未查重","空白"],["无重复","「无」"],["有重复","蓝色文字链「有」，点击打开查重结果面板"]])}
${p("","查重结果面板（顶部下拉）")}
<ul>
<li>从页面<strong>顶部向下滑出</strong>，全宽展示；默认高度约视口 <strong>75%</strong>；馆藏查重「MARC信息」「单件」约 <strong>88%</strong>，提升小分辨率下内容区高度</li>
<li>面板结构：标题栏 → 摘要信息区 → 页签栏（仅馆藏查重）→ 结果内容区（可滚动）→ 分页栏（书目/订单；MARC / 单件不占位）</li>
<li>标题：馆藏查重显示「<strong>馆藏查重结果</strong>」；订单查重显示「<strong>订单查重结果</strong>」</li>
<li>摘要区<strong>一行横向展示</strong>：订单行号（orderLineNo）、查重字段、重复记录数；查重字段过长时截断，悬浮查看完整内容</li>
<li>摘要区<strong>不再</strong>提供订单行书目明细的展开/收起；订单行信息改在馆藏查重「MARC信息」页签左侧展示</li>
<li>切换至 MARC / 单件时面板略增高且不占位底部分页栏，以扩大内容区</li>
<li>点击遮罩或右上角 × 关闭面板</li>
</ul>
${p("","馆藏查重：有单件与无单件")}
<blockquote>馆藏查重比对馆藏书目库。若匹配到书目记录，则列表馆藏重复（holdingDuplicate）显示「有」，<strong>与单件数量是否为 0 无关</strong>。馆员既需确认书目著录是否已存在，也需通过「单件数量」判断是否有实体馆藏。</blockquote>
${ce(["维度","有单件（单件数量 &gt; 0）","无单件（单件数量 = 0）"],[["列表「馆藏重复」","有","有（书目著录已存在）"],["查重结果书目列表","展示","展示"],["单件数量列","蓝色徽章「N本」","灰色徽章「0本」"],["展开馆藏分布","四层馆藏树 + 未关联馆藏（如有）","「暂无馆藏分布」"],["「单件」页签","展示单件明细，行数与单件数量一致","「暂无单件信息」"],["MARC / 关联","可用","可用"]])}
<p><strong>单件数量</strong>与「单件」页签明细行数一致（已分配馆藏地 + 未关联馆藏）。未分配馆藏地的单件归入馆藏树「<strong>未关联馆藏</strong>」节点，徽章样式与馆藏地一致。</p>
${p("","馆藏查重结果 · 书目页签")}
<ul>
<li>表格列顺序：<strong>展开/收起</strong> → <strong>单件数量</strong> → 书目字段 → <strong>操作</strong></li>
<li>书目字段随查重订单行的<strong>资源类型 + 语种</strong>动态切换（见下表）</li>
<li>单件数量列：圆角徽章「N本」；&gt; 0 蓝色，= 0 灰色；数值与「单件」页签行数一致</li>
<li>若有单件，则展开展示馆藏树；若无单件，则展开展示「暂无馆藏分布」</li>
<li>默认<strong>折叠</strong>馆藏树；点击展开图标后展示馆藏分布</li>
<li>操作：「查看」切换 MARC；「单件」切换单件页签；「关联」/「取消关联」写入或清空订单行书目记录号（bibRecordNo）</li>
</ul>
${ce(["资源类型","语种","展示字段"],[["纸质书","中文","书目记录号、正题名、ISBN、作者、出版社、出版年、版本"],["纸质书","外文","书目记录号、题名、ISBN、责任者、出版社、出版日期、语种"],["视听资料","中文","书目记录号、题名、载体、ISBN/ISRC、出版社、版本/格式、著者"],["视听资料","外文","书目记录号、ISRC、题名、载体、商品条码、目录号、出版方"]])}
<p><em>馆藏树</em>：机构 → 馆区 → 分馆 → 馆藏地；分支可展开/收起；叶子节点及「未关联馆藏」以蓝色徽章「N本」展示单件数。</p>
${p("","馆藏查重结果 · MARC信息页签")}
<ul>
<li><strong>左右分栏</strong>（默认各 <strong>50%</strong> 宽度，中间分隔条可左右拖拽调整，左侧约 20%–80%）：左侧「订单行信息」，右侧「MARC信息」</li>
<li>左侧展示当前查重订单行书目明细（按资源类型 / 语种，规则与订单行详情一致）；空值显示「—」；可独立纵向滚动</li>
<li>右侧表格列：字段名、指示符（表头不换行）、字段内容；表头固定，内容区可独立纵向滚动</li>
<li>展示字段随查重订单行<strong>语种</strong>动态过滤（见下表）</li>
<li>过滤后无可用字段时右侧展示「暂无MARC信息」</li>
<li><strong>MARC 信息页签不显示底部分页栏</strong></li>
<li>直接点击页签：默认展示第一条书目 MARC 信息</li>
<li>书目页签点击「查看」：切换至本页签并展示对应书目 MARC 信息</li>
</ul>
${ce(["语种","展示 MARC 字段"],[["中文","010、2XX、3XX、6XX、7XX"],["外文","020、1XX、2XX、3XX、093"]])}
<p><em>说明</em>：2XX 等表示该百位段内全部三位数 tag（如 2XX = 200–299）。左侧字段清单：纸质书中文（正题名、ISBN…备注）、纸质书外文、视听中文/外文与订单行详情书目信息一致。</p>
${p("","馆藏查重结果 · 单件页签")}
<ul>
<li>表格列：条码号、索书号、所属馆、所属馆藏地、所在馆、所在馆藏地、借阅类型、卷册描述、登到时间</li>
<li>字段为空显示「—」；支持横向滚动；表头吸顶</li>
<li><strong>单件页签不显示底部分页栏</strong></li>
<li>直接点击页签：默认展示第一条书目关联的单件信息</li>
<li>书目页签点击「单件」：切换至本页签并展示对应书目单件</li>
<li>明细行数与书目列表「单件数量」一致；无单件时展示「暂无单件信息」</li>
</ul>
${p("","订单查重结果")}
<ul>
<li>表格字段：订单行号（orderLineNo）、馆址（site）、正题名（title）、作者（author）、出版社（publisher）、出版时间（publishTime）、定价（price）、币种（currency）、套内册数（copiesInSet）、套数（sets）、行状态（lineStatus）、发订时间（issueTime）</li>
<li>列较多时横向滚动；纵向滚动时表头吸顶</li>
<li>暂无操作列</li>
</ul>
${p("","交互与分页")}
<ul>
<li>分页控件：上一页、第 X/Y 页、下一页、每页条数；底部显示「共 N 条记录」</li>
<li><strong>馆藏查重 · 书目页签</strong>：默认 <strong>5</strong> 条/页，可选 5 / 10 / 20 / 50 条/页</li>
<li><strong>订单查重结果</strong>：默认 <strong>50</strong> 条/页，可选 50 / 100 / 200 条/页</li>
<li>馆藏查重 <strong>MARC 信息 / 单件</strong>页签不展示分页栏</li>
<li>打开面板时按查重类型重置第 1 页及对应默认每页条数</li>
<li>无重复记录时，内容区显示「暂无查重结果」</li>
</ul>
</div>
<div id="rules">
${p("","交互逻辑")}
<ul>
<li>若标识为「有」，则可点击打开对应类型结果面板；若为「无」或空白，则不响应</li>
<li>馆藏书目行与馆藏树节点均可独立展开/收起</li>
<li>若点击「查看」，则切换至 MARC 页签并滚回顶部</li>
<li>若点击「单件」，则切换至单件页签并滚回顶部</li>
<li>若点击「关联」，则写入书目记录号（bibRecordNo）；若点击「取消关联」，则清空书目记录号（bibRecordNo）；列表同步更新</li>
<li>MARC / 单件页签默认展示第一条书目信息</li>
<li>分页切换时保持当前页签；打开面板时重置第 1 页、书目页签，馆藏树默认全部折叠（馆藏每页条数重置为 5，订单查重置为 50）</li>
<li>打开结果面板时<strong>不再</strong>执行自动关联（自动关联仅在查重返回落库时处理）</li>
</ul>
${p("","业务规则")}
<ul>
<li><strong>订单查重</strong>比对范围：当前登录馆员<strong>关联订户</strong>下全部订单行（不含当前行）</li>
<li><strong>馆藏查重</strong>比对范围：馆藏书目库</li>
<li>若匹配到馆藏书目记录，则馆藏重复（holdingDuplicate）为「有」，与单件数量是否为 0 无关</li>
<li>单件数量与「单件」页签明细行数一致；若为 0，则展示灰色「0本」，展开区「暂无馆藏分布」，单件页签「暂无单件信息」</li>
<li>若单件数量 &gt; 0，则展示馆藏树与单件明细；若为 0，则书目仍列在结果中，可查看 MARC 与关联</li>
<li><strong>自动关联书目</strong>：若本轮执行馆藏查重，且订单行书目记录号（bibRecordNo）为空，且本行馆藏结果非空且第一条书目记录号有效，则静默写入结果第一条；若书目记录号已有值则不覆盖；批量逐行独立处理；仅订单查重或结果为空时不执行；打开结果面板不再重复自动关联；取消关联后再查重且有结果时将再次自动关联</li>
<li>重复标识按本次查重配置的重复类型分别更新（若选择「不限」，则同时更新两列）</li>
<li>馆藏书目表格字段与 MARC 展示字段均取自查重订单行所属订单的资源类型 / 语种</li>
</ul>
<blockquote>查重与查重结果均受订户数据隔离约束，仅比对当前用户所属订户可见范围内的订单行与馆藏数据。</blockquote>
${p("","前置/后置条件")}
<ul>
<li><strong>前置</strong>：已执行查重操作，列表标识列已更新</li>
<li><strong>后置</strong>：查重结果面板展示详细查重结果；列表书目记录号（bibRecordNo）已按自动关联规则刷新（若适用）</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>重复标识为「无」或未查重时，不响应「有」链接点击</li>
<li>结果为空时显示「暂无查重结果」，分页显示第 1/1 页</li>
<li>若点击「有」但后端数据异常，则提示「查重结果数据不存在」</li>
<li>书目展开后无馆藏单件（单件数量为 0）：展示「暂无馆藏分布」</li>
<li>单件页签无关联单件：展示「暂无单件信息」</li>
<li>MARC 页签无可用书目或过滤后无字段：展示「暂无MARC信息」</li>
</ul>
</div>`),fp=K("5.3.5.7","编辑订单行",`
<div id="overview">
${p("","功能描述")}
<p>操作列「编辑」打开宽屏弹窗，修改书目及订购信息字段。</p>
${p("","可编辑字段")}
<p>ISBN、正题名、出版社、定价、币种、正文语种、载体、商品条码、目录号、套数、套内册数、书目记录号、卷数、丛编、出版地、出版年、备注</p>
</div>
<div id="rules">
<ul>
<li>币种下拉：人民币/美元/欧元</li>
<li>正文语种：日文、德文、西文、法文、俄文、英文、中文等</li>
<li>保存后更新列表行（原型 alert 演示）</li>
</ul>
</div>`),dp=K("5.3.5.8","撤订",`
<div id="overview">
<p>支持单行撤订、批量撤订（勾选后点工具栏「撤订」），流程同订单撤订原因弹窗。</p>
</div>
<div id="rules">
<ul>
<li>撤订后行状态 → 已撤订，备注写入撤订原因</li>
<li>未勾选批量撤订：alert「请先勾选要撤订的订单行」</li>
</ul>
</div>`),pp=K("5.3.5.9","批量导出",`
<div id="overview">
<p>「导出订单行」下拉：导出配置 / 导出清单。导出配置字段含订单号、馆址、订单行号、正题名、ISBN、作者、出版社、行状态、验收状态、馆藏重复、订单重复等。</p>
</div>`),hp=K("5.3.5.10","实际关联书目记录号与书目详情浮动弹窗",`
<div id="overview">
${p("","功能描述")}
<p>当订单行的<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）与<strong>书目记录号</strong>（<code>bibRecordNo</code>）存在差异时，在「书目记录号」列通过「<strong>实</strong>」标记提供快捷入口：悬停浮层内点击某条记录号，以<strong>无遮罩可拖拽浮动弹窗</strong>展示该记录号的 MARC 与单件，支持多窗并排对比。</p>
</div>
<div id="ui">
${p("","「实」标记（书目记录号列旁）")}
${ce(["要素","规则"],[["展示位置","订单行列表「书目记录号」列，书目记录号（bibRecordNo）旁"],["显示条件","同时满足：① 实际关联书目记录号（actualBibRecordNos）去空后至少有一条；② 其中至少有一条与书目记录号（bibRecordNo）不一致"],["不显示","实际关联书目记录号为空或均为空字符串；或全部条目均与书目记录号相同（例如仅含一条且等于书目记录号）"],["样式","浅蓝色小徽章「实」"]])}
${p("","「实」标记悬停浮层")}
<ul>
<li><strong>显示前提</strong>：已满足「实」标记显示条件（见上表）</li>
<li><strong>标题</strong>：「实际关联书目记录号」</li>
<li><strong>记录号</strong>：逐条列出全部非空实际关联书目记录号；每条为蓝色可点击链接；<strong>不提供「复制全部」</strong></li>
<li><strong>收起</strong>：鼠标离开约 0.12 秒后收起；点击记录号后不立即关闭，便于连续打开多个弹窗</li>
</ul>
${p("","书目详情浮动弹窗")}
${ce(["要素","规则"],[["默认尺寸","宽 1024px × 高 520px"],["最小尺寸","宽 480px × 高 320px"],["遮罩","无；列表背景仍可操作"],["标题栏","书目记录号、订单行号（orderLineNo）、正题名（title）；可拖拽；× 关闭"],["Tab 顺序","<strong>MARC信息</strong>（默认）→ <strong>单件（N）</strong>"],["单件 Tab","N = 当前记录号在编目系统中的单件行数；无数据时为 单件（0）"],["调整尺寸","四边及四角共 8 个拖拽热区，可调整宽度与高度"]])}
</div>
<div id="interaction">
${p("","交互逻辑")}
<ol>
<li>悬停「实」→ 点击某条实际关联书目记录号 → 打开浮动弹窗，默认 MARC 页签</li>
<li>重复点击同一记录号：将已有弹窗置于最前并短暂高亮，不新建</li>
<li>同时最多 <strong>3</strong> 个不同记录号弹窗；第 4 个提示「最多同时打开 3 个书目详情弹窗，请先关闭部分弹窗」</li>
<li>每新开一窗，在上一窗基础上向右、向下各错开 32 像素</li>
<li>离开订单行列表页签时清空全部弹窗</li>
</ol>
</div>
<div id="rules">
${p("","业务规则")}
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
${p("","异常处理")}
<ul>
<li>编目无 MARC：MARC 页签展示「暂无 MARC 信息」</li>
<li>编目无单件：单件页签表格为空，Tab 为「单件（0）」</li>
<li>已有 3 个弹窗时再开新记录号：提示后拒绝新建</li>
</ul>
</div>`),gp=K("5.3.5.11","列展示配置",`
<div id="overview">
${p("","功能描述")}
<p>订单行列表工具栏右侧提供「列展示」配置，交互与订单列表一致（详见 <strong>5.2.5.9</strong>），默认固定列不同。</p>
</div>
<div id="rules">
${p("","默认固定位置")}
${ce(["固定位置","默认列"],[["列首固定","序号、订单号、馆址、订单行号"],["列尾固定","操作"]])}
${p("","业务规则")}
<ul>
<li>复选框列不参与列展示，始终固定列首最左</li>
<li>序号（no）为当前页内连续序号，随分页变化</li>
<li>重置后恢复上表默认顺序与固定位置</li>
<li>其余显隐、拖拽、固定、滚动遮挡规则同 5.2.5.9</li>
</ul>
</div>`),mp=K("5.3.5.12","更换供应商",`
<div id="overview">
${p("","功能描述")}
<p>将勾选订单行的<strong>未收货套数</strong>迁出，生成一条待发订新订单（可同时指定新供应商与预算）；原行未收货部分按固定原因「更换供应商」记入发/收/换/退/撤订（flowStats）的撤订段。已生成催缺的订单行不可走本入口（应在催缺管理处理）。</p>
${p("","页面要素")}
<ul>
<li><strong>更换供应商按钮</strong>：订单行列表工具栏；无行内操作入口</li>
<li><strong>弹窗</strong>：标题「更换供应商」；确认「生成新订单」</li>
<li><strong>订单名称</strong>（orderName）：必填；预填原订单名称 +「-1」，可改</li>
<li><strong>供应商</strong>（supplier）：必填；选项按原订单采选方式（method）过滤</li>
<li><strong>预算名称</strong>（budget）：采选方式为交换或捐赠时可空；其余必填</li>
<li><strong>备注</strong>：非必填</li>
<li><strong>成功确认</strong>：「已生成新订单 {订单号}，原行未收货已按更换供应商撤订，是否立即查看？」取消 / 确定</li>
</ul>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ol>
<li>未满足启用条件时按钮置灰；点击可提示首条不满足原因</li>
<li>打开弹窗预填订单名称，用户选择供应商、预算（按需）并可填备注</li>
<li>点击「生成新订单」：校验 → 创建待发订新订单及新行 → 回写原行撤订 → 关闭弹窗并清空勾选</li>
<li>成功确认：取消关闭；确定则切换至「订单列表」页签</li>
</ol>
</div>
<div id="rules">
${p("","启用条件（须全部满足）")}
<ol>
<li>至少勾选 1 行</li>
<li>所选行订单号（orderId）相同</li>
<li>行状态（lineStatus）为「已发订」或「处理中」</li>
<li>验收状态（acceptanceStatus）为「待验收」「部分收货」或「换货中」</li>
<li>是否催缺（isShortage）不为「是」</li>
</ol>
${p("","未收货套数")}
<blockquote>未收货套数 = max(0, 发订 − 已收 − 已换 − 已退)</blockquote>
<ul>
<li>已换套数不算未收货，不迁出</li>
<li>若全部未收货均为 0：禁止生成并提示「所选订单行没有可迁出的未收货套数」</li>
<li>同批中未收货为 0 的行：跳过（不迁、不改）</li>
</ul>
${p("","新订单与原行")}
<ul>
<li>始终生成恰好 1 条待发订新订单；抬头继承原单，覆盖弹窗中的名称/供应商/预算/备注</li>
<li>新订单行：套数 = 该行未收货；行状态待发订；是否催缺为「否」；书目字段自原行复制</li>
<li>原行撤订段累加未收货；原因固定「更换供应商」（不打开撤订原因弹窗）</li>
<li>若发订全部进入撤订 → 行状态「已撤订」；若仍有已收等 → 按更新后流转统计重算行状态与验收状态</li>
</ul>
${p("","与催缺更换供应商边界")}
${ce(["入口","适用行","数量口径"],[["订单行列表「更换供应商」","是否催缺 ≠「是」","未收货 = 发订 − 已收 − 已换 − 已退"],["催缺管理「更换供应商」/ 撤订","已催缺相关行","撤订套数 = max(催缺套数 − 到货套数, 0)"]])}
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>跨订单 / 状态不符 / 已催缺：按钮禁用或提示原因</li>
<li>全部未收货 = 0：提示无可迁出套数</li>
<li>缺订单名称 / 供应商 / 应填预算：表单校验提示</li>
</ul>
</div>`),vp={title:"非连续出版物订单",tabs:{"order-list":{label:"订单列表",itemIds:["5.2.5.1","5.2.5.2","5.2.5.3","5.2.5.4","5.2.5.5","5.2.5.6","5.2.5.7","5.2.5.8","5.2.5.9"]},"order-line":{label:"订单行列表",itemIds:["5.3.5.1","5.3.5.2","5.3.5.3","5.3.5.4","5.3.5.5","5.3.5.6","5.3.5.7","5.3.5.8","5.3.5.9","5.3.5.10","5.3.5.11","5.3.5.12"]}},items:[{id:"5.2.5.1",title:"筛选查询",tab:"order-list",htmlContent:zd},{id:"5.2.5.2",title:"数据表格与行操作",tab:"order-list",htmlContent:Jd},{id:"5.2.5.3",title:"新建订单弹窗",tab:"order-list",htmlContent:Qd},{id:"5.2.5.4",title:"编辑订单弹窗",tab:"order-list",htmlContent:Zd},{id:"5.2.5.5",title:"发订",tab:"order-list",htmlContent:ep},{id:"5.2.5.6",title:"导入订单",tab:"order-list",htmlContent:tp},{id:"5.2.5.7",title:"撤订与删除",tab:"order-list",htmlContent:ip},{id:"5.2.5.8",title:"批量导出",tab:"order-list",htmlContent:np},{id:"5.2.5.9",title:"列展示配置",tab:"order-list",htmlContent:sp},{id:"5.3.5.1",title:"筛选查询",tab:"order-line",htmlContent:rp},{id:"5.3.5.2",title:"数据表格与行操作",tab:"order-line",htmlContent:lp},{id:"5.3.5.3",title:"生成催缺单",tab:"order-line",htmlContent:op},{id:"5.3.5.4",title:"查重操作入口",tab:"order-line",htmlContent:cp},{id:"5.3.5.5",title:"查重配置弹窗",tab:"order-line",htmlContent:ap},{id:"5.3.5.6",title:"查重结果展示",tab:"order-line",htmlContent:up},{id:"5.3.5.7",title:"编辑订单行",tab:"order-line",htmlContent:fp},{id:"5.3.5.8",title:"撤订",tab:"order-line",htmlContent:dp},{id:"5.3.5.9",title:"批量导出",tab:"order-line",htmlContent:pp},{id:"5.3.5.10",title:"实际关联书目记录号与书目详情浮动弹窗",tab:"order-line",htmlContent:hp},{id:"5.3.5.11",title:"列展示配置",tab:"order-line",htmlContent:gp},{id:"5.3.5.12",title:"更换供应商",tab:"order-line",htmlContent:mp}]};function bp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-manage"]=vp}const _p=K("5.4.5.1","书目信息",`
<div id="overview">
${p("","功能描述")}
<p>页面顶部展示当前订单行书目信息，采用可折叠卡片布局，默认<strong>展开</strong>。左侧为封面占位区，右侧为<strong>三列网格</strong>展示书目字段；字段集合与顺序由<strong>资源类型 + 语种</strong>决定，全部字段均展示（值为空时显示空白）。</p>
${p("","页面要素")}
<ul>
<li><strong>折叠标题栏</strong>：左侧「书目信息」，右侧「收起/展开」文字链</li>
<li><strong>封面区</strong>：100×140px；有<strong>封面图地址</strong>（<code>coverUrl</code>）时展示图片，否则展示默认书籍 SVG 占位</li>
<li><strong>资源类型 / 语种</strong>：封面下方居中展示</li>
<li><strong>书目字段</strong>：三列网格；一般性附注、图书简介、备注、书评、作者简介、目次信息、馆藏信息等长文本字段占 3 列宽</li>
</ul>
</div>
<div id="fields">
${p("","字段展示规则（按资源类型 / 语种，顺序固定）")}
${p("","纸质书 · 中文")}
<p>正题名、ISBN、副题名、分卷号、分卷名、分类号、出版社、作者、出版年、定价、版本、丛编、主题词、读者对象、装帧形式、尺寸、正文语种、卷数、出版地、一般性附注、图书简介、备注</p>
${p("","纸质书 · 外文")}
<p>ISBN、学科大类、学科细分、中图分类号、中译名、题名、副题名、责任者、丛编、出版社、装帧形式、出版日期、版次、页数、币种、价格、主题词、读者对象、尺寸、语种、简介、精简装ISBN对照、馆藏信息、审读级别、获奖信息、目次信息、分卷号、分卷名、作者简介、书评、备注</p>
${p("","视听资料 · 中文")}
<p>ISBN、ISRC、题名、载体、出版社、版本/格式、著者、币种、码洋、彩胶颜色、限量编号、厂牌、系列名称、是否签名、是否老唱片、获奖信息、北京出版社、分类、盘号、老唱片品牌、剧种、年代、备注</p>
${p("","视听资料 · 外文")}
<p>ISRC、题名、载体、商品条码、目录号、外文原文题名、出版方、码洋、币种、备注、厂牌</p>
<blockquote>语种取自所属订单的<strong>语种</strong>字段（<code>language</code>，中文 / 外文）。</blockquote>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>点击标题栏任意区域切换展开/收起</li>
</ul>
</div>`),Sp=K("5.4.5.2","业务 Tab 页签",`
<div id="overview">
${p("","功能描述")}
<p>书目信息下方为业务 Tab 容器，用于切换查看订单行关联业务数据。Tab 顺序固定，默认激活<strong>相关订单行（N）</strong>。</p>
${p("","Tab 列表")}
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
${p("","交互逻辑")}
<ul>
<li>点击 Tab 按钮切换下方内容区，当前 Tab 高亮（底部蓝色边框）</li>
<li>切换 Tab 不刷新书目信息区；各 Tab 内分页状态独立保持</li>
</ul>
</div>`),yp=K("5.4.5.3","相关订单行",`
<div id="overview">
${p("","功能描述")}
<p>展示与当前订单行<strong>书目匹配</strong>的其他订单行记录，<strong>包含当前订单行本身</strong>。数据范围限定为当前登录馆员<strong>关联订户可查看范围</strong>内的订单行，按发订时间倒序排列。</p>
${p("","表格列")}
<p>序号、订户、订单行号、采购方式、预算名称、供应商、折扣、发订人、发订时间</p>
</div>
<div id="rules">
${p("","书目匹配规则")}
${ce(["资源类型","语种","匹配条件"],[["纸质书","—","资源标识（ISBN）<strong>且</strong> 正题名均相同"],["视听资料","中文","正题名 <strong>且</strong> 载体均相同"],["视听资料","外文","商品条码 <strong>且</strong> 目录号均相同"]])}
<ul>
<li>订户范围：取系统<strong>可查看订户范围</strong>配置（<code>viewableSubscribers</code>），仅展示馆员有权查看的订户订单行</li>
<li>发订人、发订时间为空时展示空白</li>
<li><strong>订单行号</strong>为普通文本，<strong>不可点击跳转</strong></li>
</ul>
</div>
<div id="interaction">
${p("","交互与分页")}
<ul>
<li>分页：默认 50 条/页，可选 10 / 20 / 50</li>
<li>无匹配数据时表格为空</li>
</ul>
</div>`),Cp=K("5.4.5.4","验收记录",`
<div id="overview">
${p("","功能描述")}
<p>展示当前订单行关联的验收汇总记录（按种维度）。从验收模块按订单行号匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段构造。</p>
${p("","表格列")}
<p>序号、订单行号、ISBN（视听为 ISBN/ISRC）、正题名、作者、定价、币种、发/收/换/退套数、最近一次验收时间、最近一次验收人</p>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>发/收/换/退套数格式：<code>发订/收货/换货/退货</code>，数据来源于验收模块</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>默认每页 50 条；有数据时显示分页，通常仅 1 条记录</li>
<li>表格不可勾选</li>
</ul>
</div>`),Rp=K("5.4.5.5","结算记录",`
<div id="overview">
${p("","功能描述")}
<p>展示当前订单行结算明细。从结算模块按<strong>订单行号</strong>（<code>orderLineNo</code>）匹配；<strong>无匹配时表格展示「暂无数据」</strong>，不使用订单行字段推算。</p>
${p("","表格列")}
<p>复用「已结算」列表字段：序号、订单行号、正题名、资源标识、作者、出版社、定价、币种、实洋、套内册数、结算套数、结算册数、结算金额等。</p>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>系统在结算模块已结算数据中，按订单行号精确查找当前行的结算记录</li>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>无匹配：表格展示「暂无数据」</li>
</ul>
</div>`),Tp=K("5.4.5.6","单件（N）",`
<div id="overview">
${p("","功能描述")}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询单件（馆藏件）并汇总展示。页签文案为 <strong>单件（N）</strong>，N 为合并后的单件总行数（表格一行计 1 条）。</p>
${p("","Tab 标签规则")}
<ul>
<li>页签文案为「单件（N）」，N 等于下方单件表格的总行数</li>
<li>编目无单件时显示 <strong>单件（0）</strong></li>
<li>切换订单行或编目数据变化时，N 随最新查询结果自动刷新</li>
</ul>
${p("","表格列")}
<p>序号（01 格式）、条码号、索书号、所属馆、所属馆藏地、所在馆藏地、借阅类型、卷册描述、登到日期</p>
</div>
<div id="rules">
${p("","单件查询逻辑")}
<ol>
<li>若订单行存在<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>，可多值），则逐条向编目系统查询单件，合并为一张表格（一般用于多卷书各卷记录）。</li>
<li>若不存在实际关联书目记录号，则使用<strong>书目记录号</strong>（<code>bibRecordNo</code>）作为唯一条件查询单件。</li>
<li>合并后的总行数即为页签 N，例如 10 行则显示「单件（10）」。</li>
</ol>
${p("","展示规则")}
<ul>
<li>所在馆藏地、卷册描述为空时单元格留空</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
<li>无单件数据时表格为空，页签仍为「单件（0）」</li>
</ul>
</div>
<div id="interaction">
${p("","交互与分页")}
<ul>
<li>切换至本 Tab 时按上述规则加载/刷新单件列表</li>
<li>分页切换不影响页签 N（N 为全部合并结果的总行数，非当前页条数）</li>
</ul>
</div>`),Ap=K("5.4.5.7","MARC信息",`
<div id="overview">
${p("","功能描述")}
<p>按<strong>实际关联书目记录号</strong>从编目系统查询 MARC 字段；无实际关联时回退<strong>书目记录号</strong>。列表上方提供书目记录号下拉框，默认选中第一个，切换后刷新 MARC 表格。</p>
${p("","页面要素")}
<ul>
<li><strong>书目记录号下拉框</strong>：位于 MARC 表格上方；选项为可查询的书目记录号列表</li>
<li><strong>MARC 表格</strong>：列「字段名」「指示符」「字段内容」，最大高度 480px 可滚动</li>
<li>无可用书目记录号或无 MARC 数据时居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="rules">
${p("","书目记录号下拉框规则")}
<ul>
<li>若存在<strong>实际关联书目记录号</strong>（<code>actualBibRecordNos</code>）：下拉框列出其全部有效记录号，供切换查看各卷 MARC</li>
<li>若不存在实际关联书目记录号，但<strong>书目记录号</strong>（<code>bibRecordNo</code>）有值：下拉框仅含书目记录号一项</li>
<li>进入详情或切换订单行时，下拉框默认选中<strong>第一项</strong>，并据此刷新 MARC 表格</li>
</ul>
<blockquote>下拉框标签文案为「书目记录号」，选项值为实际用于查编目的记录号（含实际关联书目记录号）。</blockquote>
${p("","MARC 展示规则")}
<ul>
<li>切换下拉选项后，下方 MARC 表格即时刷新，无需额外确认</li>
<li>展示格式与书目查询页 MARC 详情一致（如 010、200、210 等 CNMARC 字段）</li>
<li>无可用记录号或无 MARC 数据时，居中展示「暂无 MARC 信息」</li>
</ul>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>用户切换下拉选项即可查看对应记录号的 MARC 著录</li>
</ul>
</div>`),Ep={title:"订单行详情",tabs:{related:{label:"相关订单行（N）",itemIds:["5.4.5.1","5.4.5.2","5.4.5.3"]},acceptance:{label:"验收记录（N）",itemIds:["5.4.5.4"]},settlement:{label:"结算记录（N）",itemIds:["5.4.5.5"]},items:{label:"单件（N）",itemIds:["5.4.5.6"]},marc:{label:"MARC信息",itemIds:["5.4.5.7"]}},items:[{id:"5.4.5.1",title:"书目信息",tab:"related",htmlContent:_p},{id:"5.4.5.2",title:"业务 Tab 页签",tab:"related",htmlContent:Sp},{id:"5.4.5.3",title:"相关订单行",tab:"related",htmlContent:yp},{id:"5.4.5.4",title:"验收记录",tab:"acceptance",htmlContent:Cp},{id:"5.4.5.5",title:"结算记录",tab:"settlement",htmlContent:Rp},{id:"5.4.5.6",title:"单件（N）",tab:"items",htmlContent:Tp},{id:"5.4.5.7",title:"MARC信息",tab:"marc",htmlContent:Ap}]};function xp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["order-line-detail"]=Ep}const Ip=K("5.5.5.1","关联订单行列表",`
<div id="overview">
${p("","功能描述")}
<p>在书目查询页下方单件区切换至<strong>关联订单行</strong>页签后，先校验当前登录馆员是否有关联订户；若已关联，则按当前选中书目的书目记录号（bibRecordNo）查询关联订单行——若订单行存在非空的实际关联书目记录号（actualBibRecordNos），则<strong>优先</strong>按实际关联书目记录号匹配，否则按书目记录号匹配——并仅展示当前馆员<strong>关联订户范围内</strong>、且行状态不为「已撤订」的结果，同时提供发/收/换/退/撤订数量汇总及「新建订单」「加入订单」入口。</p>
${p("","页面要素")}
<ul>
<li><strong>页签标题</strong>：关联订单行(N)，N 为当前书目在馆员关联订户范围内的关联订单行条数</li>
<li><strong>工具栏</strong>：新建订单、加入订单</li>
<li><strong>统计栏</strong>：发订数量、收货数量、换货数量、退货数量、撤订数量</li>
<li><strong>表格列</strong>：序号、订单号、馆址、订单行号、正题名、资源标识、载体、作者、出版社、出版时间、定价、币种、套内册数、套数、行状态、验收状态、结算状态、发订时间</li>
</ul>
${p("","交互逻辑")}
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
${p("","订户校验")}
<ul>
<li>若用户切换至「关联订单行」页签，则须校验当前登录馆员是否有关联订户</li>
<li>若当前登录馆员未关联任何订户，则弹窗提示「您没有关联订户，无法查看数据」，且不加载列表数据</li>
</ul>
${p("","数据范围")}
<ul>
<li>若当前登录馆员已关联订户，则以其关联订户作为本页数据范围</li>
<li>若用户选中书目且已通过订户校验，则按下列规则匹配订单行，且所属订单订户（subscriber）须落在馆员关联订户范围内，且行状态（lineStatus）不为「已撤订」：</li>
</ul>
<ol>
<li>若订单行的<strong>实际关联书目记录号</strong>（actualBibRecordNos）非空，则仅当其中任一条与当前选中书目的书目记录号（bibRecordNo）一致时纳入列表（<strong>不再</strong>按书目记录号匹配）</li>
<li>若实际关联书目记录号为空，则仅当订单行的书目记录号（bibRecordNo）与当前选中书目一致时纳入列表</li>
</ol>
${p("","行状态过滤")}
<ul>
<li>列表不展示行状态为「已撤订」的订单行</li>
</ul>
${p("","排序规则")}
<ol>
<li>若订单行无发订时间（issueTime），则排在列表<strong>最上方</strong></li>
<li>若订单行有发订时间，则按发订时间<strong>从新到旧</strong>排列</li>
<li>若发订时间相同，则按订单行号（orderLineNo）<strong>从小到大</strong>排列</li>
</ol>
<blockquote>上述排序规则与「非连续出版物订单-订单行列表」保持一致。</blockquote>
${p("","统计汇总")}
<p>发/收/换/退/撤订数量由各行流转统计（flowStats，格式为「发/收/换/退/撤」五段数字）分别累加得出。</p>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>若当前登录馆员未关联订户，则弹窗提示「您没有关联订户，无法查看数据」，列表展示相同空状态文案</li>
<li>若无书目选中，则展示空状态「请先选中书目」</li>
<li>若已选中书目但无符合范围的关联数据，则展示空状态「暂无关联订单行」</li>
</ul>
</div>`),wp=K("5.5.5.2","新建订单弹窗",`
<div id="overview">
${p("","功能描述")}
<p>在关联订单行页签点击<strong>新建订单</strong>，为当前选中书目创建订单。若用户选择多个馆址，则每个馆址各生成一个订单号。<strong>订户、资源类型、预算名称</strong>的可选范围受当前登录馆员关联订户约束。关闭弹窗后保留上次填写内容，再次打开时可恢复。</p>
${p("","表单字段")}
${ce(["字段","必填","说明"],[["订单名称（orderName）","是","文本；最多 50 个字符；占位「请输入，50字符以内」"],["订户（subscriber）","是","下拉；可选范围为当前馆员关联订户（使用中）"],["资源类型（resourceType）","是","下拉；须先选订户；选项为所选订户主数据中的资源类型"],["采选方式（method）","是","下拉：捐赠/现采/交存/交换/拍卖"],["预算名称（budget）","条件","须先选订户；选项为所选订户主数据中的预算名称；交换或捐赠时非必填且不可选"],["语种（language）","是","下拉；打开时按书目 MARC 格式预填：CNMARC 为中文，否则为外文"],["供应商（supplier）","是","下拉；随采选方式联动，见业务规则"],["折扣（discount）","否","文本；选择供应商后默认带出，可修改；若填写则须大于 0 且小于等于 1，最多两位小数"],["馆址（sites）","是","多选；至少选一个馆址"]])}
</div>
<div id="rules">
${p("","订户与字段范围")}
<ul>
<li>若当前登录馆员未关联任何订户，则点击「新建订单」时提示「您没有关联订户，无法新建订单」，且不打开弹窗</li>
<li>订单名称（orderName）必填；最多 50 个字符；未填提示「请输入订单名称」，超长提示「订单名称不能超过50个字符」</li>
<li>订户（subscriber）下拉仅展示当前馆员关联订户（使用中）</li>
<li>若用户已选订户，则资源类型（resourceType）下拉仅展示该订户主数据中配置的资源类型；未选订户时下拉禁用，提示「请先选择订户」</li>
<li>若用户已选订户，则预算名称（budget）下拉仅展示该订户主数据中配置的预算名称；未选订户时下拉禁用（交换或捐赠采选方式下仍禁用预算）</li>
<li>若用户切换订户，且已选资源类型或预算不在新订户允许范围内，则清空对应字段</li>
<li>若书目 MARC 格式为 CNMARC，则预填语种「中文」；否则预填「外文」；无法解析 MARC 格式时不预填</li>
</ul>
${p("","供应商与采选方式")}
<ul>
<li>若未选择采选方式，则供应商下拉禁用，提示「请先选择采选方式」</li>
<li>若用户切换采选方式，且当前供应商不在新列表中，则清空供应商（supplier）与折扣（discount）</li>
</ul>
${ce(["采选方式","可选供应商范围"],[["现采","代理商应用中类型为书商且状态为使用中的供应商"],["交存","出版社管理应用中状态为使用中的出版社"],["捐赠","个人管理中类型为捐赠的捐赠人，与资源商管理中类型为团体捐赠的单位，合并展示"],["交换","资源商管理应用中类型为交换且状态为使用中的单位"],["拍卖","代理商应用中类型为拍卖行且状态为使用中的供应商"]])}
${p("","预算名称")}
${ce(["采选方式","预算名称（budget）"],[["交换 / 捐赠","非必填（隐藏必填星号）、下拉禁用；切换至该方式时清空已选值"],["其他采选方式","必填，可编辑"]])}
${p("","折扣")}
<ul>
<li>若用户选择供应商，则折扣（discount）默认取该供应商在主数据中配置的默认值</li>
<li>用户可手动修改折扣；若再次切换供应商，则折扣更新为新供应商的默认值</li>
<li>若用户填写折扣，则须为大于 0 且小于等于 1 的数值，最多两位小数；若不满足则提示并阻止提交</li>
<li>若从上次关闭时的缓存恢复表单，则保留用户已修改的折扣，不因恢复而覆盖</li>
<li>若供应商为捐赠类，则默认折扣可为空</li>
</ul>
${p("","提交与订单号")}
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
${p("","异常处理")}
<ul>
<li>若当前登录馆员未关联订户，则提示「您没有关联订户，无法新建订单」</li>
<li>若订单名称未填，则提示「请输入订单名称」</li>
<li>若订单名称超过 50 个字符，则提示「订单名称不能超过50个字符」</li>
<li>若缓存中的订户、资源类型或预算不在当前馆员允许范围内，则恢复时清空无效字段</li>
<li>若缓存中的供应商与当前采选方式不匹配，则恢复时清空供应商与折扣</li>
<li>若缓存中的采选方式为交换或捐赠，则恢复时清空预算名称</li>
</ul>
</div>`),Np=K("5.5.5.3","加入订单弹窗",`
<div id="overview">
${p("","功能描述")}
<p>将当前选中书目加入一个或多个<strong>待发订</strong>订单；一次提交为每条勾选订单各生成一条订单行（原型以提示框演示）。弹窗自上而下分三区：检索与订单列表、馆址分配、共用字段（币种 / 定价 / 套内册数 / 备注）。</p>
${p("","前置条件")}
<ul>
<li>用户已选中书目；未选中时提示「请先选中书目」</li>
<li>若当前登录馆员未关联任何订户，则提示「您没有关联订户，无法加入订单」，且不打开弹窗</li>
</ul>
</div>
<div id="candidates">
${p("","候选订单范围")}
<ul>
<li>仅包含订单状态为<strong>待发订</strong>、且订户（subscriber）落在馆员关联订户范围内的订单</li>
<li>若书目可映射出语种（language），则候选订单还须与映射语种一致；若无法映射语种，则不按语种过滤，默认展示上述范围内的全部待发订订单</li>
</ul>
</div>
<div id="search">
${p("","检索区")}
${ce(["控件","规则"],[["订单号（orderId）","文本；占位「精确匹配」；若输入订单号，则与列表订单号做精确匹配（不区分大小写）；条件变更不自动检索，须点击「检索」"],["采选方式（method）","下拉：全部 / 捐赠 / 现采 / 交存 / 交换 / 拍卖（不含征订目录）"],["供应商（supplier）","下拉：全部，或当前候选订单列表中出现过的供应商"],["检索","点击后按上述条件过滤列表"],["重置","清空三个条件并恢复全量候选列表"]])}
<p>列表默认按订单创建时间（createTime）<strong>从新到旧</strong>排列。</p>
</div>
<div id="list">
${p("","订单列表（上区）")}
<ul>
<li>支持多选；选中行以浅黄色背景高亮</li>
<li>若勾选多条订单，则须为相同资源类型（resourceType）与语种（language）；否则提示「请勾选相同资源类型和语种的待发订订单」，且不勾选该订单</li>
<li>表头固定，列表区域可纵向滚动；列较多时可横向滚动</li>
<li>列表<strong>不含套数列</strong>；套数仅在中区馆址行填写</li>
</ul>
${ce(["列","说明"],[["勾选","绑定订单号（orderId）"],["订单号（orderId）","只读展示"],["订单名称（orderName）","只读；过长时截断，悬停展示全文；为空时展示「—」"],["订户 / 馆址 / 采选方式 / 资源类型 / 语种 / 供应商","只读展示"],["预算名称（budget）","过长时截断，悬停展示全文"],["折扣（discount）","只读"],["发订状态","展示待发订等状态文案"],["创建时间（createTime）","只读；列表按此字段倒序"]])}
${p("","空状态")}
<ul>
<li>若无任何候选订单，则展示「暂无匹配的待发订订单」</li>
<li>若检索后无匹配结果，则展示「未找到符合条件的订单」</li>
</ul>
</div>
<div id="site">
${p("","馆址分配（中区）")}
<ul>
<li>若未勾选任何订单，则展示「请先在上方的列表中选择订单」</li>
<li>若勾选 N 条订单，则展示 N 行馆址行；馆址（site）只读，取自对应订单；下方灰色小字展示订单号（orderId）</li>
<li>套数（sets）为大于等于 0 的整数输入，默认 1，可修改；馆址行顺序与上方列表一致（按创建时间从新到旧）</li>
<li>若取消勾选某订单，则移除对应馆址行；若再次勾选，则套数优先从上次关闭时的缓存恢复</li>
</ul>
</div>
<div id="form">
${p("","共用表单（下区）")}
${ce(["字段","必填","规则"],[["币种（currency）","条件","下拉选项取自【货币信息】中状态为「使用中」的货币代码（展示货币代码）；默认优先 CNY（若仍为使用中），否则取第一项使用中货币；若所选订单为纸质书且语种为外文，则必填；其他情况选填"],["定价（price）","条件","若所选订单为纸质书且语种为外文，则必填，须为有效数值且最多两位小数；其他情况选填，若填写则格式同上"],["套内册数（copiesInSet）","否","正整数，默认 1；若填写则须为正整数"],["备注（remark）","否","多行文本，最多 500 个字符"]])}
<p>币种、定价、套内册数、备注一次填写，作用于全部勾选订单中套数大于 0 的记录。</p>
</div>
<div id="cache">
${p("","缓存恢复")}
<ul>
<li>打开弹窗时恢复上次检索条件、勾选订单、馆址套数及共用字段</li>
<li>若缓存中的采选方式不在可选范围内（如含征订目录），则回退为「全部」</li>
<li>若缓存中的币种已停用或不存在，则回退为默认使用中货币代码</li>
<li>关闭弹窗时保存上述内容，供下次打开恢复</li>
</ul>
</div>
<div id="rules">
${p("","提交校验")}
<ol>
<li>若未勾选任何订单，则提示「请至少选择一个订单」</li>
<li>若勾选订单的资源类型或语种不一致，则提示「请勾选相同资源类型和语种的待发订订单」</li>
<li>若所选订单为纸质书且语种为外文，则币种（currency）与定价（price）必填；定价未填或格式无效时提示「请输入定价」或「定价须为有效数值，最多两位小数」；币种未选时提示「请选择币种」</li>
<li>若任一行套数（sets）不是大于等于 0 的整数，则提示「请为每个馆址填写有效套数」</li>
<li>若所有行套数均为 0，则提示「请至少为一个馆址填写大于0的套数」</li>
<li>若套内册数（copiesInSet）已填但不是正整数，则提示「套内册数须为正整数」</li>
<li>若备注（remark）超过 500 个字符，则提示「备注最多500个字符」</li>
</ol>
${p("","提交结果")}
<ul>
<li>校验通过后，为每条勾选且套数大于 0 的订单各生成一条关联订单行（当前原型以提示框演示）</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
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
</div>`),$p={title:"书目查询",tabs:{"related-order":{label:"关联订单行",itemIds:["5.5.5.1","5.5.5.2","5.5.5.3"]}},items:[{id:"5.5.5.1",title:"关联订单行列表",tab:"related-order",htmlContent:Ip},{id:"5.5.5.2",title:"新建订单弹窗",tab:"related-order",htmlContent:wp},{id:"5.5.5.3",title:"加入订单弹窗",tab:"related-order",htmlContent:Np}]};function Pp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["bib-query"]=$p}const Kr=K("5.6.5.1","验收单头信息",`
<div id="overview">
${p("","功能描述")}
<p>页面顶部展示当前验收单摘要信息，含基础属性与汇总指标。嵌入抽屉打开时布局与独立页一致（无面包屑）。</p>
${p("","页面要素")}
<ul>
<li>网格展示字段：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）、语种（language）、发货单号（shipNo）、供应商（supplier）</li>
<li>验收备注（acceptanceRemark）单独占满一行</li>
<li>汇总行：总种数（totalSpecies）、总册数（totalVolumes）、总码洋（totalListPrice）、总实洋（totalNetPrice）</li>
</ul>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li><strong>总种数</strong>（totalSpecies）：取当前验收单按种明细行数</li>
<li><strong>总册数 / 总码洋 / 总实洋</strong>：按资源类型展示（纸质书与视听资料分别有对应汇总值；原型阶段为按类型固定展示，与页面实现一致）</li>
<li>无验收单上下文时，头信息使用默认占位值</li>
</ul>
</div>
`),Gr=K("5.6.5.2","按种 / 按册页签",`
<div id="overview">
${p("","功能描述")}
<p>头信息下方提供「按种」「按册」两个页签，切换明细视角与导出配置。</p>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>默认进入<strong>按种</strong>；URL 带 <code>view=volume</code> 时进入按册</li>
<li>切换页签更新表格列、筛选字段、导出按钮文案与导出配置字段集；分页回到第 1 页</li>
<li>按册工具栏旁提示文案：「仅提供收货详情」</li>
</ul>
</div>
`),Wr=K("5.6.5.3","筛选查询",`
<div id="overview">
${p("","功能描述")}
<p>按当前页签与资源类型展示检索条件；支持检索、重置与展开附加条件。</p>
</div>
<div id="fields">
${p("","按种 · 纸质书")}
<p>检索项（ISBN / 订单行号 / 正题名）+ 关键词、验收人；展开：开始日期、结束日期</p>
${p("","按种 · 视听资料")}
<p>检索项（ISBN/ISRC / 题名 / 订单行号 / 载体）+ 关键词、验收人；展开：开始日期、结束日期</p>
${p("","按册 · 纸质书")}
<p>检索项（条码号 / ISBN / 正题名）+ 关键词、收货人；展开：开始日期、结束日期</p>
${p("","按册 · 视听资料")}
<p>检索项（条码号 / ISBN/ISRC / 题名 / 载体）+ 关键词、收货人；展开：开始日期、结束日期</p>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>点击「检索」按条件过滤当前页签明细并回到第 1 页</li>
<li>点击「重置」清空条件并恢复当前页签全量明细</li>
</ul>
</div>
`),Op=K("5.6.5.4","按种明细表格与操作",`
<div id="overview">
${p("","功能描述")}
<p>按种维度展示验收汇总行；验收单状态为<strong>进行中</strong>时可对行执行撤销收货 / 撤销换货 / 撤销退货。</p>
${p("","表格列（纸质书）")}
<p>序号、订单行号、ISBN、正题名、作者、定价、币种、发/收/换/退数、最近一次验收时间、最近一次验收人、换/退/撤销收货原因、操作</p>
${p("","表格列（视听资料）")}
<p>在纸质书基础上增加载体、商品条码、目录号、套内件数等视听字段（以页面列为准）</p>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>换/退/撤销原因为空或不可用时显示「—」；有内容时「查看」悬停展示全文</li>
<li>仅当验收单状态为进行中且页签为按种时显示操作：有收货套数可「撤销收货」；有换货套数可「撤销换货」；有退货套数可「撤销退货」；均无则「—」</li>
<li>撤销换货 / 退货：确认后清零对应套数并刷新原因文案</li>
<li>撤销收货：打开撤销收货弹窗（见 5.6.5.7）</li>
<li>分页：默认 10 条/页，可选 10 / 20 / 50</li>
</ul>
</div>
`),kp=K("5.6.5.5","按册明细表格",`
<div id="overview">
${p("","功能描述")}
<p>按册（收货单件）维度展示收货明细；本页签<strong>不提供</strong>撤销收货/换货/退货操作。</p>
${p("","表格列（纸质书）")}
<p>序号、条码号、ISBN、正题名、作者、定价、币种、实洋、单册定价、套内册数、收货人、收货时间</p>
${p("","表格列（视听资料）")}
<p>序号、条码号、ISBN/ISRC、载体、题名、商品条码、目录号、作者、定价、实洋、币种、套内件数、收货人、收货时间</p>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>操作列固定展示「—」</li>
<li>分页规则同按种</li>
</ul>
</div>
`),qr=K("5.6.5.6","导出明细与导出配置",`
<div id="overview">
${p("","功能描述")}
<p>工具栏下拉提供「导出明细」「导出配置」。按种按钮文案为「导出验收明细」，按册为「导出收货明细」。按种与按册为<strong>两套独立导出配置</strong>；配置弹窗仅展示<strong>当前验收单资源类型</strong>（纸质书或视听资料）对应字段，左侧类型标签不可切换另一类型。</p>
</div>
<div id="ui">
${p("","导出配置弹窗 UI")}
<ul>
<li>左侧：当前资源类型标签（高亮）</li>
<li>右侧：全选；上方为验收单头字段；分隔线下方为明细字段；六列网格勾选</li>
<li>打开时默认全选当前类型全部字段；确定保存勾选结果（原型提示已保存字段数）</li>
</ul>
</div>
<div id="header-fields">
${p("","共用头字段（按种 / 按册 · 纸质书 / 视听）")}
<p>验收单号、验收单名称、资源类型、语种、供应商、发货单号、总码洋、总实洋、折扣率、总种数、总册数、创建人、创建时间、验收备注</p>
</div>
<div id="species-detail">
${p("","按种 · 纸质书明细字段")}
<p>订单行号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、套内册数、发订套数、收货套数、<strong>收货册数</strong>、换货套数、退货套数</p>
${p("","按种 · 视听资料明细字段")}
<p>ISBN、ISRC、商品条码、目录号、载体、题名、著者、码洋、币种、实洋、出版社、版本/格式、彩胶颜色、厂牌、限量编号、套内件数、发订套数、收货套数、<strong>收货件数</strong>、换货套数、退货套数</p>
</div>
<div id="volume-detail">
${p("","按册 · 纸质书明细字段")}
<p>条码号、订单行号、订单号、ISBN、正题名、副题名、作者、出版社、出版年、分类号、正文语种、丛编、定价、币种、实洋、套内册数、单册定价、装帧、尺寸、主题词、版本、读者对象、附注、图书简介、收货人、验收时间、收货备注</p>
${p("","按册 · 视听资料明细字段")}
<p>条码号、订单行号、载体、ISBN、ISRC、商品条码、目录号、题名、著者、码洋、币种、实洋、套内件数、单册定价、收货人、验收时间、验收备注</p>
</div>
<div id="rules">
${p("","导出计算规则")}
${ce(["字段","资源类型","计算规则"],[["收货册数（receiveVolumes）","纸质书·按种","若套内册数（copiesInSet）为空，则收货册数为空；否则收货册数 = 收货套数（receiveSets） × 套内册数"],["收货件数（receivePieces）","视听资料·按种","若套内件数（piecesInSet）为空，则收货件数为空；否则收货件数 = 收货套数（receiveSets） × 套内件数"]])}
<ul>
<li>导出明细：若当前筛选结果为空，提示暂无可导出明细；否则提示已导出及文件名（验收单号_验收明细 / 收货明细）</li>
</ul>
</div>
`),Dp=K("5.6.5.7","撤销收货",`
<div id="overview">
${p("","功能描述")}
<p>按种明细在进行中状态下，对已收货行可打开「撤销收货」弹窗，填写原因后清零收货套数。</p>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>确认后更新该行发/收/换/退数中的收货套数为 0，记录撤销原因，刷新原因列，提示「撤销收货成功」</li>
<li>取消关闭弹窗不改数据</li>
</ul>
</div>
`),Mp={title:"验收单详情",tabs:{species:{label:"按种"},volume:{label:"按册"}},items:[{id:"5.6.5.1",title:"验收单头信息",tab:"species",htmlContent:Kr},{id:"5.6.5.2",title:"按种 / 按册页签",tab:"species",htmlContent:Gr},{id:"5.6.5.3",title:"筛选查询",tab:"species",htmlContent:Wr},{id:"5.6.5.4",title:"按种明细表格与操作",tab:"species",htmlContent:Op},{id:"5.6.5.6",title:"导出明细与导出配置",tab:"species",htmlContent:qr},{id:"5.6.5.7",title:"撤销收货",tab:"species",htmlContent:Dp},{id:"5.6.5.1",title:"验收单头信息",tab:"volume",htmlContent:Kr},{id:"5.6.5.2",title:"按种 / 按册页签",tab:"volume",htmlContent:Gr},{id:"5.6.5.3",title:"筛选查询",tab:"volume",htmlContent:Wr},{id:"5.6.5.5",title:"按册明细表格",tab:"volume",htmlContent:kp},{id:"5.6.5.6",title:"导出明细与导出配置",tab:"volume",htmlContent:qr}]};function Lp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["acceptance-detail"]=Mp}const Bp=K("5.7.5.1","筛选查询",`
<div id="overview">
${p("","功能描述")}
<p>提供多条件检索，帮助用户定位目标验收单。支持展开附加条件。</p>
${p("","页面要素")}
<ul>
<li><strong>默认显示</strong>：验收单号（acceptanceId）、验收单名称（name）、资源类型（resourceType）</li>
<li><strong>展开后追加</strong>：验收单状态（status）、供应商（supplier）、创建人（creator）、创建时间（createTime）</li>
<li>操作：「检索」过滤列表；「重置」清空条件并恢复全量</li>
</ul>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>资源类型（resourceType）选项：全部、纸质书、视听资料</li>
<li>验收单状态（status）选项：全部、未开始、进行中、已结束</li>
<li>供应商（supplier）选项：全部 + 列表中出现过的供应商</li>
<li>验收单号、验收单名称、创建人为文本包含匹配；创建时间按日期（yyyy-MM-dd）与创建时间（time）的日期部分精确匹配</li>
<li>各条件之间为 <strong>AND</strong> 关系；检索后分页回到第 1 页</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>无匹配时表格为空，分页显示 0 条</li>
</ul>
</div>
`),Vp=K("5.7.5.2","列表表格与行操作",`
<div id="overview">
${p("","功能描述")}
<p>以表格展示验收单列表，支持多选、分页、设为当前工作验收单，并按验收单状态（status）展示行操作。</p>
${p("","表格列")}
<p>复选框、序号（no）、验收单号（acceptanceId）、设为验收单（defaultAccept）、验收单名称（name）、资源类型（type）、语种（lang）、采选方式（method）、供应商（supplier）、发货单号（shipNo）、验收单状态（status）、收/换/退书数（counts）、验收备注（remark）、分配条码（barcode）、创建时间（time）、创建人（creator）、结算状态（settlement）、操作</p>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>验收单号：蓝色链接，点击进入验收单详情（见 5.6）</li>
<li>设为验收单：单选；已结束（finished）行不可选。选中后将该单设为当前工作验收单（静默，无提示）</li>
<li>验收单状态色：${Ie("#6b7280")}未开始、${Ie("#0284c7")}进行中、${Ie("#4b5563")}已结束</li>
<li>结算状态色：${Ie("#6b7280")}未申请、${Ie("#d97706")}待结算、${Ie("#059669")}已结算</li>
<li>验收备注：有内容时蓝色「查看」悬停全文；无内容时灰色「查看」不可点</li>
<li>分页：默认 10 条/页；工具栏右侧展示已选条数</li>
</ul>
${p("","操作列规则")}
${ce(["验收单状态","可用操作"],[["未开始（notStarted）","编辑、删除"],["进行中（inProgress）","编辑、结束验收"],["已结束（finished）","—"]])}
<ul>
<li>删除：确认文案「确定删除验收单「名称」？」；若该单为当前工作验收单则清除当前工作验收单</li>
<li>结束验收：确认后状态改为已结束；若为当前工作验收单则取消设为验收单并清除当前工作验收单</li>
</ul>
</div>
`),Fp=K("5.7.5.3","新增 / 编辑验收单弹窗",`
<div id="overview">
${p("","功能描述")}
<p>工具栏「新增验收单」或行内「编辑」打开表单弹窗，维护验收单头信息。</p>
${p("","表单字段")}
<ul>
<li><span style="color:#ef4444">*</span> 验收单名称（name）、资源类型（resourceType）、语种（language）、采选方式（method）、供应商（supplier）</li>
<li>发货单号（shipNo）、验收备注（remark）</li>
<li>勾选：设为当前工作验收单（setCurrent）；是否支持自动分配条码号（autoBarcode）</li>
<li>若开启自动分配条码：<span style="color:#ef4444">*</span> 条码号类型（barcodeType）、初始条码号（initialBarcode）</li>
</ul>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>新增默认勾选「设为当前工作验收单」「是否支持自动分配条码号」</li>
<li>新增条码号类型可选：小语种成人图书、地方文献、全部语种；编辑可选另含「成人视听」</li>
<li>若验收单状态为<strong>进行中</strong>，则资源类型、语种、采选方式、供应商、自动分配条码相关字段只读锁定；验收单名称、发货单号、备注、设为当前工作验收单仍可改</li>
<li>提交前校验必填；缺项提示「请填写{字段}」；开启自动条码但未填类型/初始号时提示「请填写条码号类型和初始条码号」</li>
<li>新增成功：生成验收单号（acceptanceId），状态为未开始，结算状态为未申请，收/换/退为 0/0/0；提示「验收单已创建」</li>
<li>编辑成功提示「验收单已保存」；勾选设为当前则写入当前工作验收单，取消勾选且原为当前则清除</li>
</ul>
</div>
`),jp=K("5.7.5.4","预验收向导",`
<div id="overview">
${p("","功能描述")}
<p>工具栏「预验收」打开三步向导：上传文件 → 字段映射 → 数据校验。仅核对发货单与可收货订单行差异，<strong>不执行收货</strong>。</p>
${p("","入口前置")}
<ul>
<li>须当前登录馆员已关联订户；否则提示「您没有关联订户，无操作权限」，不打开向导</li>
<li>须勾选<strong>恰好 1 条</strong>验收单状态为未开始或进行中的验收单；否则按钮禁用或提示「请先在列表中勾选一条未开始或进行中的验收单」</li>
<li>打开前将该验收单设为当前工作验收单</li>
</ul>
${p("","步骤")}
<ol>
<li>上传文件（xls / xlsx）</li>
<li>字段映射（必填五字段 + 可选书目字段；支持映射模板）</li>
<li>数据校验（展示成功/失败条数；失败可下载校验结果）</li>
</ol>
</div>
<div id="mapping">
${p("","字段映射")}
<ul>
<li>提示文案：「将文件列映射到系统标准字段（标*字段为必填）」</li>
<li><strong>必填</strong>：订单行号（orderLine）、码洋（listPrice）、实洋（netPrice）、收货套数（receiveQty）、套内册数（volCount）</li>
<li>下拉选项扁平展示：不映射 + 必填字段 + 当前资源类型可选字段（无「通用（必填）」「纸质书」「视听资料」分组标签）</li>
<li><strong>纸质书可选</strong>（示例）：正题名/题名（title）、ISBN（isbn）、副题名、作者/责任者、出版社、出版年、定价/价格、币种、主题词、备注等（完整以页面字段池为准）</li>
<li><strong>视听资料可选</strong>（示例）：ISBN、ISRC、题名、载体、著者、厂牌、商品条码、目录号、备注等（完整以页面字段池为准）</li>
<li>映射模板与<strong>批验收共用</strong>同一套已保存模板；应用模板时自动清除当前资源类型不允许的映射值</li>
<li>未映射齐五字段不可进入下一步，提示「请映射「{字段}」字段」</li>
</ul>
</div>
<div id="validate">
${p("","校验规则（预验收）")}
<ul>
<li>可收货订单行范围：当前馆员关联订户下，且与所选验收单资源类型、语种、采选方式、供应商一致的可匹配订单行</li>
<li>每一行尽量收集全部适用失败类型（同行多种类型用「；」拼接）</li>
<li><strong>数据错误</strong>：订单行号为空，或码洋/实洋/收货套数/套内册数无法解析 → 失败原因「数据解析失败」</li>
<li><strong>验收单不匹配</strong>：订单行存在，但与所选验收单的资源类型（type）、语种（lang）、采选方式（method）、供应商（supplier）不完全一致 → 失败原因分别列出不一致项（如「资源类型不一致（验收单 纸质书/订单行 视听资料）」）。语种按中文/外文分档比对（西语与英文同属外文）</li>
<li><strong>未匹配</strong>：无对应可收货订单行 → 「无对应可收货订单行」</li>
<li><strong>套数非法</strong>：收货套数 ≤ 0 → 「套数 ≤ 0」；收货套数 ＞ 待收套数 → 「套数大于待收」</li>
<li><strong>不一致</strong>：已映射字段（除订单行号）与订单行比对不等则记入；含 0＜收货套数＜待收。若该行已因收货套数记「套数非法」，则收货套数不再重复记不一致</li>
<li>金额类按两位小数规范化后比对；数量类按数值比对</li>
<li>页面汇总：有任一失败类型计失败，无失败类型计成功（不拆分失败类型汇总）</li>
</ul>
${p("","下载校验结果")}
<p>导出 Excel（.xls）= <strong>原发货单全部列（原顺序）</strong> + 校验结果 + 失败原因。多种失败类型与原因均以「；」连接。</p>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>非 xls/xlsx：提示「请上传 xls/xlsx 格式文件」</li>
<li>无关联订户（解析阶段）：「您没有关联订户，无法查看数据」</li>
<li>关联订户下无可收货订单行：提示无法演示预验收</li>
</ul>
</div>
`),Hp=K("5.7.5.5","批验收向导",`
<div id="overview">
${p("","功能描述")}
<p>工具栏「批验收」打开四步向导：上传 → 字段映射 → 数据校验 → 确认验收。校验通过后按<strong>发货单已映射值</strong>写入收货；不因书目/金额不一致阻断校验。</p>
${p("","入口前置")}
<ul>
<li>须已关联订户；否则「您没有关联订户，无操作权限」</li>
<li>须勾选<strong>恰好 1 条</strong>验收单状态为未开始或进行中的验收单；否则按钮禁用或提示「请先在列表中勾选一条未开始或进行中的验收单」</li>
<li>打开前将该验收单设为当前工作验收单</li>
</ul>
${p("","步骤")}
<ol>
<li>上传文件（xls / xlsx）；本步<strong>无</strong>导入模板 / 下载模板</li>
<li>字段映射（规则与预验收相同，映射模板共用）</li>
<li>数据校验：须<strong>全部行通过</strong>才可进入确认；提示「全部校验成功，才可收货」</li>
<li>确认验收：展示总种数 / 总套数 / 总册数 / 总码洋 / 总实洋后确认写入</li>
</ol>
</div>
<div id="validate">
${p("","校验规则（批验收）")}
<ul>
<li>数据错误、未匹配、验收单不匹配、套数非法规则同预验收（≤0 或 ＞待收 → 套数非法）</li>
<li><strong>不做</strong>已映射字段与订单行的一致性比对</li>
<li>若 0＜收货套数≤待收且已匹配，则该行通过（允许部分收货）</li>
<li>下载校验结果格式同预验收（原列 + 校验结果 + 失败原因）</li>
</ul>
</div>
<div id="confirm">
${p("","确认验收")}
<ul>
<li>汇总按校验通过行、发货单映射值计算总种数、总套数、总册数、总码洋、总实洋</li>
<li>确认时验收单须仍为未开始/进行中；否则整单失败，提示「验收失败，请重新验收或联系管理员」</li>
<li>逐行：发货套数 ≤ <strong>实时</strong>待收套数则可写入成功；超出或套数非法则该行失败。允许部分成功</li>
<li>成功行：若验收单开启自动分配条码，展示已分配条码区间；有空条码时提示「注意：本次收货有空条码」</li>
<li>结果文案：「已成功验收 X 条数据，失败 X 条数据。」；失败行可「下载异常数据」（订单行号、失败原因）</li>
<li>若有成功写入且原状态为未开始，则验收单状态变为进行中</li>
</ul>
</div>
`),Up=K("5.7.5.6","申请结算",`
<div id="overview">
${p("","功能描述")}
<p>工具栏「申请结算」对勾选验收单提交结算申请。</p>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>未勾选时提示「请先勾选验收单」</li>
<li>打开确认弹窗：「确认为所选 N 条验收单申请结算？」</li>
<li>确定后：所选行中结算状态为未申请（notApplied）的改为待结算（pending）；提示「已为 N 条验收单提交结算申请」</li>
</ul>
</div>
`),Kp=K("5.7.5.7","导出列表与导出配置",`
<div id="overview">
${p("","功能描述")}
<p>工具栏「导出列表」下拉提供「导出配置」「导出清单」。</p>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>导出配置：弹窗勾选列表导出字段；打开时基于配置字段集；确定后提示「导出配置已保存（N 个字段）」</li>
<li>可配置字段：验收单号、验收单名称、资源类型、语种、采选方式、供应商、发货单号、验收单状态、收/换/退书数、验收备注、分配条码、创建时间、创建人、结算状态</li>
<li>导出清单：原型阶段提示演示文案</li>
</ul>
</div>
`),Gp={title:"验收单管理",items:[{id:"5.7.5.1",title:"筛选查询",htmlContent:Bp},{id:"5.7.5.2",title:"列表表格与行操作",htmlContent:Vp},{id:"5.7.5.3",title:"新增 / 编辑验收单弹窗",htmlContent:Fp},{id:"5.7.5.4",title:"预验收向导",htmlContent:jp},{id:"5.7.5.5",title:"批验收向导",htmlContent:Hp},{id:"5.7.5.6",title:"申请结算",htmlContent:Up},{id:"5.7.5.7",title:"导出列表与导出配置",htmlContent:Kp}]};function Wp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["acceptance-manage"]=Gp}const qp=K("5.8.5.1","当前工作验收单头信息",`
<div id="overview">
${p("","功能描述")}
<p>页面顶部展示当前工作验收单的头信息与本单累计收/换/退套数，并提供跳转验收单详情入口。</p>
${p("","页面要素")}
<ul>
<li>验收单号（acceptanceId）：有值时蓝色链接，点击进入验收单详情（按种视角）</li>
<li>验收单名称（name）、供应商（supplier）、语种（lang）、发货单号（shipNo）</li>
<li>总种数、总册数、总码洋、总实洋（随验收明细汇总刷新）</li>
<li>收货套数、换货套数、退货套数（本验收单按种累计）</li>
<li>若无当前工作验收单：对应字段显示「—」，并提示先在验收单管理设为当前工作验收单</li>
</ul>
</div>
<div id="rules">
${p("","业务规则")}
<ul>
<li>语种有值时以红色强调展示</li>
<li>头信息只读；切换当前工作验收单后本页检索结果与选中行清空</li>
</ul>
</div>
`),Xp=K("5.8.5.2","订单行检索",`
<div id="overview">
${p("","功能描述")}
<p>按当前验收单资源类型提供检索字段与馆址过滤，点击「检索」加载可处置的订单行。</p>
${p("","页面要素")}
<ul>
<li>检索字段下拉 + 关键字输入 + 「检索」按钮</li>
<li>馆址（location）下拉：含「全部」与使用中馆址选项</li>
<li>若资源类型为视听资料：额外展示载体（carrier）下拉</li>
</ul>
</div>
<div id="rules">
${p("","业务规则")}
${ce(["资源类型","检索字段选项"],[["纸质书","ISBN（isbn）、订单行号（orderLine）、正题名（title）"],["视听资料","资源标识（resourceId）、订单行号（orderLine）、题名（title）"]])}
<ul>
<li>无当前工作验收单时：检索控件禁用，占位提示「请先选择验收单」；点击检索提示「请先在验收单管理中选择当前工作验收单」</li>
<li>检索后分页回到第 1 页；清空原选中行并关闭处置弹窗（除非结果仅 1 条，见 5.8.5.3）</li>
<li>各条件与馆址、载体为组合过滤（AND）</li>
</ul>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>未检索前表格空态：「请输入检索条件后点击检索」</li>
<li>无当前验收单空态：「请先在验收单管理中选择当前工作验收单」</li>
<li>检索无数据：「暂无数据」</li>
</ul>
</div>
`),Yp=K("5.8.5.3","订单行列表与选行打开",`
<div id="overview">
${p("","功能描述")}
<p>以表格展示检索结果；选中一行即打开「逐条收货/换货/退货」处置弹窗。页面<strong>不再</strong>提供底栏独立「收货 / 换货 / 退货」按钮。</p>
${p("","表格列")}
<p><strong>纸质书</strong>：单选、馆址（location）、订单行号（orderLine）、正题名（title）、ISBN（isbn）、作者（author）、出版社（publisher）、版本（edition）、定价（price）、币种（currency）、套内册数（copies）、发/收/换/退/撤订（counts）、备注（remark）、发订人（orderer）、发订时间（orderTime）</p>
<p><strong>视听资料</strong>：单选、馆址、订单行号、载体（carrier）、ISBN、商品条码（barcode）、目录号（catalogNo）、题名（title）、版本/格式（format）、著者（author）、码洋（price）、币种、套内件数（copies）、发/收/换/退/撤订、备注、发订人、发订时间</p>
</div>
<div id="interaction">
${p("","交互逻辑")}
<ul>
<li>点击行或点行首单选：选中该行并<strong>自动打开</strong>处置弹窗（默认「收货」页签）</li>
<li>若检索结果<strong>仅 1 条</strong>：检索完成后自动选中并打开处置弹窗</li>
<li>订单行号：蓝色链接，点击跳转订单行详情（不触发行选中打开，使用 stop）</li>
<li>备注：有内容时蓝色「查看」悬停全文</li>
<li>分页：默认 <strong>10</strong> 条/页，可选 5 / 10 / 20</li>
<li>处置弹窗打开期间全屏遮罩，列表与检索区不可点；换行须先关闭弹窗再选另一行</li>
<li>再次检索或切换当前验收单导致选中行不在结果中：关闭弹窗并清空选中</li>
</ul>
</div>
`),zp=K("5.8.5.4","逐条收货/换货/退货处置弹窗",`
<div id="overview">
${p("","功能描述")}
<p>合并处置弹窗标题为「逐条收货/换货/退货」，以页签切换收货、换货、退货；各页签独立确认提交，互不捆绑。弹窗固定高度，切换页签高度不变。</p>
${p("","壳与统计条")}
<ul>
<li>顶栏：标题 + 订单行号（orderLine）+ 关闭</li>
<li>统计条（只读，提交成功后刷新）：发订套数、已收货套数、已换货套数、已退货套数、<strong>待收货套数</strong>、订单行备注（过长截断，悬停全文）</li>
<li>页签：收货 / 换货 / 退货；打开时默认「收货」；切换页签保留未提交草稿</li>
<li>底栏：「关闭」+ 当前页签确认按钮（收货页在需分配条码时可含「预览」）</li>
<li>点遮罩或关闭：关弹窗，不提交任何页签草稿；行选中可保留，再次点该行可再打开</li>
</ul>
</div>
<div id="pending">
${p("","待收货套数")}
<p><strong>待收货套数（pendingSets）</strong> = max(0, 发订套数 − 已收货套数 − 已退货套数)。<strong>不含</strong>已换货套数——已有换货仍可继续收货。</p>
<ul>
<li>收货 / 换货 / 退货本次套数须为正数，且不超过提交时刻的待收货套数</li>
<li>任一确认成功后：若待收货套数 = 0 → 自动关闭弹窗；若仍 &gt; 0 → 保持打开，刷新统计与行数据，并清空<strong>本次已提交</strong>页签表单</li>
</ul>
</div>
<div id="receive">
${p("","收货页签")}
<p>按当前验收单资源类型展示完整收货表单（与原独立收货弹窗字段一致）。</p>
${ce(["资源类型","主要字段","必填要点"],[["纸质书","ISBN、作者、正题名、定价、币种、实洋、套内册数、收货套数、条码初始号、收货备注","正题名、定价、实洋、套内册数；若验收单开启自动分配条码则条码初始号必填"],["视听资料","ISBN、ISRC、商品条码、目录号、载体、版本/格式、题名、著者、码洋、币种、实洋、彩胶颜色、厂牌、限量编号、套内件数、收货套数、收货备注","载体、题名、码洋、实洋、套内件数"]])}
<ul>
<li>外文语种验收单：定价/码洋可带出原币价，币种默认外币；中文则按行内定价与币种预填</li>
<li>收货套数默认带出当前待收货套数（可改）</li>
<li>确认收货成功提示「收货成功」，并写回验收详情按种明细与本行发/收/换/退统计</li>
</ul>
${p("","条码预览与分配结果（纸质 · 需分配条码时）")}
<ul>
<li>「预览」：根据条码初始号、收货套数、套内册数展示预分配/未分配区间；约 3 秒自动关闭，也可点「已知晓」提前关闭（不视为提交）</li>
<li>「确认收货」：先展示已分配/未分配结果；约 3 秒自动「已知晓」并完成收货确认，亦可手动点「已知晓」；若有空条码提示「注意：本次收货有空条码」</li>
</ul>
</div>
<div id="exchange-return">
${p("","换货页签")}
${ce(["字段","必填","说明"],[["换货数量（exchangeQty）","是","正数，且 ≤ 待收货套数"],["换货原因（exchangeReason）","是","选项：换货、残缺损"],["换货备注","否","最多 500 字"]])}
<p>确认成功提示「换货成功」。</p>
${p("","退货页签")}
${ce(["字段","必填","说明"],[["退货数量（returnQty）","是","正数，且 ≤ 待收货套数"],["退货原因（returnReason）","是","选项：退货、损坏退货"],["退货备注","否","最多 500 字"]])}
<p>确认成功提示「退货成功」。</p>
</div>
<div id="exception">
${p("","异常处理")}
<ul>
<li>收货缺必填：对应提示（如「请填写正题名」「请选择载体」等）</li>
<li>换/退未填数量或原因：提示请填写数量 / 请选择原因</li>
<li>套数无效或超过待收：「操作失败：套数无效」或「超过待收货套数（当前待收 N）」；不写库、不关弹窗</li>
<li>预览前未填条码初始号/有效收货套数/套内册数：对应提示，不打开预览</li>
</ul>
</div>
`),Jp={title:"逐条收货",items:[{id:"5.8.5.1",title:"当前工作验收单头信息",htmlContent:qp},{id:"5.8.5.2",title:"订单行检索",htmlContent:Xp},{id:"5.8.5.3",title:"订单行列表与选行打开",htmlContent:Yp},{id:"5.8.5.4",title:"逐条收货/换货/退货处置弹窗",htmlContent:zp}]};function Qp(){window.PRD_DATA_MAP=window.PRD_DATA_MAP||{},window.PRD_DATA_MAP["receive-by-item"]=Jp}bp();xp();Pp();Lp();Wp();Qp();const Ls=Su(Ou);Ls.use(Ru());Ls.use(qo);Ls.mount("#app");export{En as $,ao as A,Ml as B,hs as C,mn as D,ki as E,Oe as F,Os as G,rh as H,za as I,Ll as J,sh as K,Ge as L,Es as M,Ui as N,xi as O,Gf as P,zc as Q,ah as R,ch as S,Zp as T,lh as U,md as V,oh as W,Sh as X,Rn as Y,eh as Z,wu as _,Z as a,cd as a0,nd as a1,Ch as a2,qf as a3,ud as a4,fd as a5,Rh as a6,Vo as a7,Th as a8,yh as a9,Ih as aa,wh as ab,Nh as ac,Ah as ad,Eh as ae,xh as af,dh as ag,Bo as ah,_h as ai,$h as aj,Ph as ak,Oh as al,gh as am,hh as an,ph as ao,bh as ap,vh as aq,mh as ar,ye as b,Le as c,me as d,uh as e,Ts as f,mu as g,ro as h,Vc as i,lo as j,hn as k,Be as l,Se as m,It as n,As as o,fh as p,Kf as q,Jn as r,si as s,ii as t,Wf as u,ih as v,Ft as w,th as x,nh as y,ra as z};
