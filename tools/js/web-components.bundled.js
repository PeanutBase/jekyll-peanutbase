/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class n{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const h=window,l=h.trustedTypes,a=l?l.emptyScript:"",u=h.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=v){var e;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:c).toAttribute(i,s.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,n=e._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=e.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:c;this._$El=n,this[n]=r.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:p}),(null!==(o=h.reactiveElementVersions)&&void 0!==o?o:h.reactiveElementVersions=[]).push("1.4.2");const g=window,m=g.trustedTypes,b=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,_=`<${$}>`,w=document,S=(t="")=>w.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,x=/>/g,E=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,R=/"/g,T=/^(?:script|style|textarea|title)$/i,M=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),N=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),P=new WeakMap,L=w.createTreeWalker(w,129,null,!1),z=(t,i)=>{const s=t.length-1,e=[];let n,r=2===i?"<svg>":"",o=C;for(let i=0;i<s;i++){const s=t[i];let h,l,a=-1,u=0;for(;u<s.length&&(o.lastIndex=u,l=o.exec(s),null!==l);)u=o.lastIndex,o===C?"!--"===l[1]?o=j:void 0!==l[1]?o=x:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=E):void 0!==l[3]&&(o=E):o===E?">"===l[0]?(o=null!=n?n:C,a=-1):void 0===l[1]?a=-2:(a=o.lastIndex-l[2].length,h=l[1],o=void 0===l[3]?E:'"'===l[3]?R:O):o===R||o===O?o=E:o===j||o===x?o=C:(o=E,n=void 0);const c=o===E&&t[i+1].startsWith("/>")?" ":"";r+=o===C?s+_:a>=0?(e.push(h),s.slice(0,a)+"$lit$"+s.slice(a)+y+c):s+y+(-2===a?(e.push(void 0),i):c)}const h=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(h):h,e]};class I{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,r=0;const o=t.length-1,h=this.parts,[l,a]=z(t,i);if(this.el=I.createElement(l,s),L.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=L.nextNode())&&h.length<o;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?J:"?"===i[1]?W:"@"===i[1]?Z:B})}else h.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(T.test(e.tagName)){const t=e.textContent.split(y),i=t.length-1;if(i>0){e.textContent=m?m.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],S()),L.nextNode(),h.push({type:2,index:++n});e.append(t[i],S())}}}else if(8===e.nodeType)if(e.data===$)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(y,t+1));)h.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,i){const s=w.createElement("template");return s.innerHTML=t,s}}function F(t,i,s=t,e){var n,r,o,h;if(i===N)return i;let l=void 0!==e?null===(n=s._$Co)||void 0===n?void 0:n[e]:s._$Cl;const a=k(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,e)),void 0!==e?(null!==(o=(h=s)._$Co)&&void 0!==o?o:h._$Co=[])[e]=l:s._$Cl=l),void 0!==l&&(i=F(t,l._$AS(t,i.values),l,e)),i}class D{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:w).importNode(s,!0);L.currentNode=n;let r=L.nextNode(),o=0,h=0,l=e[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new H(r,r.nextSibling,this,t):1===l.type?i=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(i=new q(r,this,t)),this.u.push(i),l=e[++h]}o!==(null==l?void 0:l.index)&&(r=L.nextNode(),o++)}return n}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class H{constructor(t,i,s,e){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=F(this,t,i),k(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==N&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==U&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=I.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(s);else{const t=new D(n,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new I(t)),i}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new H(this.O(S()),this.O(S()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class B{constructor(t,i,s,e,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let r=!1;if(void 0===n)t=F(this,t,i,0),r=!k(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const e=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=F(this,e[s+o],i,o),h===N&&(h=this._$AH[o]),r||(r=!k(h)||h!==this._$AH[o]),h===U?t=U:t!==U&&(t+=(null!=h?h:"")+n[o+1]),this._$AH[o]=h}r&&!e&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const K=m?m.emptyScript:"";class W extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Z extends B{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=F(this,t,i,0))&&void 0!==s?s:U)===N)return;const e=this._$AH,n=t===U&&e!==U||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==U&&(e===U||n);n&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const G=g.litHtmlPolyfillSupport;null==G||G(I,H),(null!==(f=g.litHtmlVersions)&&void 0!==f?f:g.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,V;class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,n;const r=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new H(i.insertBefore(S(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}X.finalized=!0,X._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function st(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):it(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function et(t){return st({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function nt(t,i){return(({finisher:t,descriptor:i})=>(s,e)=>{var n;if(void 0===e){const e=null!==(n=s.originalKey)&&void 0!==n?n:s.key,r=null!=i?{kind:"method",placement:"prototype",key:e,descriptor:i(s.key)}:{...s,key:e};return null!=t&&(r.finisher=function(i){t(i,e)}),r}{const n=s.constructor;void 0!==i&&Object.defineProperty(s,e,i(e)),null==t||t(n,e)}})({descriptor:s=>{const e={get(){var i,s;return null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof s?Symbol():"__"+s;e.get=function(){var s,e;return void 0===this[i]&&(this[i]=null!==(e=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(t))&&void 0!==e?e:null),this[i]}}return e}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=2;class ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends ht{constructor(t){if(super(t),this.it=U,t.type!==ot)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||null==t)return this._t=void 0,this.it=t;if(t===N)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}lt.directiveName="unsafeHTML",lt.resultType=1;const at=(t=>(...i)=>({_$litDirective$:t,values:i}))(lt);var ut=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let ct=class extends X{constructor(){super(...arguments),this.caption="",this.dataAttributes=[],this.header={},this.data=[]}createRenderRoot(){return this}_objectToRow(t,i="td"){const s=`<${i}>`,e=`</${i}>`,n=this.dataAttributes.map((i=>{const n=t.hasOwnProperty(i)?t[i]:"";return s+n+e}));return M`<tr>${at(n.join(""))}</tr>`}_getCaption(){return this.caption?M`<caption>${this.caption}</caption>`:M``}_getHeader(){if(!this.header)return M``;const t=this._objectToRow(this.header,"th");return M`<thead>${t}</thead>`}_getBody(){if(!this.data)return M``;const t=this.data.map((t=>this._objectToRow(t)));return M`<tbody>${t}</tbody>`}render(){const t=this._getCaption(),i=this._getHeader(),s=this._getBody();return M`
      <table class="uk-table uk-table-divider uk-table-small">
        ${t}
        ${i}
        ${s}
      </table>
    `}};ut([st({type:String})],ct.prototype,"caption",void 0),ut([st({type:Array})],ct.prototype,"dataAttributes",void 0),ut([st({type:Object})],ct.prototype,"header",void 0),ut([st({type:Array,attribute:!1})],ct.prototype,"data",void 0),ct=ut([tt("lis-simple-table-element")],ct);var dt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let vt=class extends X{constructor(){super(...arguments),this.legend="",this.input=""}createRenderRoot(){return this}_submit(t){t.preventDefault(),t.stopPropagation();const i=this._input.value.trim();this.input=i;const s={detail:{value:i},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("submit",s))}_getLegend(){return this.legend?M`<legend class="uk-legend">${this.legend}</legend>`:M``}render(){const t=this._getLegend();return M`
      <form @submit="${this._submit}">
        <fieldset class="uk-fieldset">
          ${t}
          <div class="uk-margin">
            <input
              class="uk-input"
              type="text"
              placeholder="Input"
              aria-label="Input"
              value="${this.input}">
          </div>
          <div class="uk-margin">
            <button type="submit" class="uk-button uk-button-primary">Search</button>
          </div>
        </fieldset>
      </form>
    `}};dt([st({type:String})],vt.prototype,"legend",void 0),dt([st({type:String})],vt.prototype,"input",void 0),dt([nt("input")],vt.prototype,"_input",void 0),vt=dt([tt("lis-search-element")],vt);var pt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let ft=class extends X{constructor(){super(...arguments),this.page=1}createRenderRoot(){return this}_previous(t){t.preventDefault(),this.page>1&&(this.page-=1,this._dispatchPageChange())}_next(t){t.preventDefault(),this.page+=1,this._dispatchPageChange()}_dispatchPageChange(){const t={detail:{page:this.page},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("pageChange",t))}render(){return M`
      <ul class="uk-pagination">
          <li><a href="" @click=${this._previous}><span class="uk-margin-small-right" uk-pagination-previous></span> Previous</a></li>
          <li class="uk-active"><span>Page ${this.page}</span></li>
          <li class="uk-margin-auto-left"><a href="" @click=${this._next}>Next <span class="uk-margin-small-left" uk-pagination-next></span></a></li>
      </ul>
    `}};pt([st({type:Number})],ft.prototype,"page",void 0),ft=pt([tt("lis-pagination-element")],ft);var gt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let mt=class extends X{constructor(){super(...arguments),this.searchFunction=()=>Promise.reject(new Error("No search function provided")),this._alertMessage="",this._alertModifier="primary",this._geneAttributes=["name","description"],this._tableHeader={name:"Name",description:"Description"}}createRenderRoot(){return this}_updateTerm(t){t.preventDefault(),t.stopPropagation(),this._paginator.page=1,this._geneSearch()}_changePage(t){t.preventDefault(),t.stopPropagation(),this._geneSearch()}_geneSearch(){if(this._search.input){const t=this._search.input,i=this._paginator.page,s=`<span uk-spinner></span> Loading page ${i} for "${t}"`;this._setAlert(s,"primary"),this.searchFunction(t,i).then((i=>this._searchSuccess(t,i)),(t=>this._searchFailure(t)))}}_searchSuccess(t,i){const s=1==i.length?"":"s",e=`${i.length} gene${s} found for "${t}"`,n=i.length?"success":"warning";this._setAlert(e,n),this._table.data=i}_searchFailure(t){throw this._setAlert("Gene search failed","danger"),t}_setAlert(t,i){this._alertMessage=t,this._alertModifier=i}_getAlert(){return this._alertMessage?M`
      <div class="uk-alert uk-alert-${this._alertModifier}">
        <p>${at(this._alertMessage)}</p>
      </div>
    `:M``}render(){const t=this._getAlert();return M`

      <lis-search-element
        legend="Search for genes by keyword"
        @submit="${this._updateTerm}">
      </lis-search-element>

      ${t}

      <lis-simple-table-element
        caption="Search Results"
        .dataAttributes=${this._geneAttributes}
        .header=${this._tableHeader}>
      </lis-simple-table-element>

      <lis-pagination-element @pageChange=${this._changePage}></lis-pagination-element>

    `}};gt([st({type:Function,attribute:!1})],mt.prototype,"searchFunction",void 0),gt([et()],mt.prototype,"_alertMessage",void 0),gt([et()],mt.prototype,"_alertModifier",void 0),gt([nt("lis-search-element")],mt.prototype,"_search",void 0),gt([nt("lis-simple-table-element")],mt.prototype,"_table",void 0),gt([nt("lis-pagination-element")],mt.prototype,"_paginator",void 0),mt=gt([tt("lis-gene-search-element")],mt);var bt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let yt=class extends X{constructor(){super(...arguments),this.searchFunction=()=>Promise.reject(new Error("No search function provided")),this._alertMessage="",this._alertModifier="primary",this._traitAttributes=["name","description"],this._tableHeader={name:"Name",description:"Description"}}createRenderRoot(){return this}_updateTerm(t){t.preventDefault(),t.stopPropagation(),this._paginator.page=1,this._traitSearch()}_changePage(t){t.preventDefault(),t.stopPropagation(),this._traitSearch()}_traitSearch(){if(this._search.input){const t=this._search.input,i=this._paginator.page,s=`<span uk-spinner></span> Loading page ${i} for "${t}"`;this._setAlert(s,"primary"),this.searchFunction(t,i).then((i=>this._searchSuccess(t,i)),(t=>this._searchFailure(t)))}}_searchSuccess(t,i){const s=1==i.length?"":"s",e=`${i.length} trait${s} found for "${t}"`,n=i.length?"success":"warning";this._setAlert(e,n),this._table.data=i}_searchFailure(t){throw this._setAlert("Trait search failed","danger"),t}_setAlert(t,i){this._alertMessage=t,this._alertModifier=i}_getAlert(){return this._alertMessage?M`
      <div class="uk-alert uk-alert-${this._alertModifier}">
        <p>${at(this._alertMessage)}</p>
      </div>
    `:M``}render(){const t=this._getAlert();return M`

      <lis-search-element
        legend="Search for traits by keyword"
        @submit="${this._updateTerm}">
      </lis-search-element>

      ${t}

      <lis-simple-table-element
        caption="Search Results"
        .dataAttributes=${this._traitAttributes}
        .header=${this._tableHeader}>
      </lis-simple-table-element>

      <lis-pagination-element @pageChange=${this._changePage}></lis-pagination-element>

    `}};bt([st({type:Function,attribute:!1})],yt.prototype,"searchFunction",void 0),bt([et()],yt.prototype,"_alertMessage",void 0),bt([et()],yt.prototype,"_alertModifier",void 0),bt([nt("lis-search-element")],yt.prototype,"_search",void 0),bt([nt("lis-simple-table-element")],yt.prototype,"_table",void 0),bt([nt("lis-pagination-element")],yt.prototype,"_paginator",void 0),yt=bt([tt("lis-trait-search-element")],yt);export{mt as LisGeneSearchElement,ft as LisPaginationElement,vt as LisSearchElement,ct as LisSimpleTableElement,yt as LisTraitSearchElement};
