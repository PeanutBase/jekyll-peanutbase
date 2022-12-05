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
 */;var o;const l=window,h=l.trustedTypes,a=h?h.emptyScript:"",u=l.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=v){var e;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:c).toAttribute(i,s.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,n=e._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=e.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:c;this._$El=n,this[n]=r.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:p}),(null!==(o=l.reactiveElementVersions)&&void 0!==o?o:l.reactiveElementVersions=[]).push("1.4.2");const m=window,b=m.trustedTypes,g=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,k=`<${$}>`,w=document,_=(t="")=>w.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,C=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),E=/'/g,R=/"/g,N=/^(?:script|style|textarea|title)$/i,T=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),M=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),I=new WeakMap,P=w.createTreeWalker(w,129,null,!1),z=(t,i)=>{const s=t.length-1,e=[];let n,r=2===i?"<svg>":"",o=x;for(let i=0;i<s;i++){const s=t[i];let l,h,a=-1,u=0;for(;u<s.length&&(o.lastIndex=u,h=o.exec(s),null!==h);)u=o.lastIndex,o===x?"!--"===h[1]?o=j:void 0!==h[1]?o=C:void 0!==h[2]?(N.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=O):void 0!==h[3]&&(o=O):o===O?">"===h[0]?(o=null!=n?n:x,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?O:'"'===h[3]?R:E):o===R||o===E?o=O:o===j||o===C?o=x:(o=O,n=void 0);const c=o===O&&t[i+1].startsWith("/>")?" ":"";r+=o===x?s+k:a>=0?(e.push(l),s.slice(0,a)+"$lit$"+s.slice(a)+y+c):s+y+(-2===a?(e.push(void 0),i):c)}const l=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(l):l,e]};class D{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[h,a]=z(t,i);if(this.el=D.createElement(h,s),P.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=P.nextNode())&&l.length<o;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?q:"?"===i[1]?K:"@"===i[1]?W:H})}else l.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(N.test(e.tagName)){const t=e.textContent.split(y),i=t.length-1;if(i>0){e.textContent=b?b.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],_()),P.nextNode(),l.push({type:2,index:++n});e.append(t[i],_())}}}else if(8===e.nodeType)if(e.data===$)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(y,t+1));)l.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,i){const s=w.createElement("template");return s.innerHTML=t,s}}function F(t,i,s=t,e){var n,r,o,l;if(i===M)return i;let h=void 0!==e?null===(n=s._$Co)||void 0===n?void 0:n[e]:s._$Cl;const a=S(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,e)),void 0!==e?(null!==(o=(l=s)._$Co)&&void 0!==o?o:l._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=F(t,h._$AS(t,i.values),h,e)),i}class L{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:w).importNode(s,!0);P.currentNode=n;let r=P.nextNode(),o=0,l=0,h=e[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new B(r,r.nextSibling,this,t):1===h.type?i=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(i=new Z(r,this,t)),this.u.push(i),h=e[++l]}o!==(null==h?void 0:h.index)&&(r=P.nextNode(),o++)}return n}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class B{constructor(t,i,s,e){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=F(this,t,i),S(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==U&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=D.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(s);else{const t=new L(n,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let i=I.get(t.strings);return void 0===i&&I.set(t.strings,i=new D(t)),i}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new B(this.O(_()),this.O(_()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class H{constructor(t,i,s,e,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let r=!1;if(void 0===n)t=F(this,t,i,0),r=!S(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{const e=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=F(this,e[s+o],i,o),l===M&&(l=this._$AH[o]),r||(r=!S(l)||l!==this._$AH[o]),l===U?t=U:t!==U&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!e&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const J=b?b.emptyScript:"";class K extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class W extends H{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=F(this,t,i,0))&&void 0!==s?s:U)===M)return;const e=this._$AH,n=t===U&&e!==U||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==U&&(e===U||n);n&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const G=m.litHtmlPolyfillSupport;null==G||G(D,B),(null!==(f=m.litHtmlVersions)&&void 0!==f?f:m.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,V;class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,n;const r=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new B(i.insertBefore(_(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}X.finalized=!0,X._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.2");
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
 */var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;var ot=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let lt=class extends X{_submit(t){t.preventDefault(),t.stopPropagation();const i={detail:{data:new FormData(t.target)},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("submit",i))}render(){return T`<slot @submit="${this._submit}"></slot>`}};lt=ot([tt("lis-form-wrapper-element")],lt);var ht=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let at=class extends X{constructor(){super(...arguments),this.page=1,this.hasNext=!1}createRenderRoot(){return this}_previous(t){t.preventDefault(),this.page>1&&(this.page-=1,this._dispatchPageChange())}_next(t){t.preventDefault(),this.page+=1,this._dispatchPageChange()}_dispatchPageChange(){const t={detail:{page:this.page},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("pageChange",t))}_renderPreviousClass(){return this.page>1?"":"uk-disabled"}_renderNextClass(){return this.hasNext?"":"uk-disabled"}render(){const t=this._renderPreviousClass(),i=this._renderNextClass();return T`
      <ul class="uk-pagination">
          <li class="${t}"><a href="" @click=${this._previous}><span class="uk-margin-small-right" uk-pagination-previous></span> Previous</a></li>
          <li class="uk-active"><span>Page ${this.page}</span></li>
          <li class="uk-margin-auto-left ${i}"><a href="" @click=${this._next}>Next <span class="uk-margin-small-left" uk-pagination-next></span></a></li>
      </ul>
    `}};ht([st({type:Number})],at.prototype,"page",void 0),ht([st({type:Boolean})],at.prototype,"hasNext",void 0),at=ht([tt("lis-pagination-element")],at);var ut=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let ct=class extends X{constructor(){super(...arguments),this.legend="",this.input=""}createRenderRoot(){return this}_submit(t){t.preventDefault(),t.stopPropagation();const i=this._input.value.trim();this.input=i;const s={detail:{value:i},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("submit",s))}_getLegend(){return this.legend?T`<legend class="uk-legend">${this.legend}</legend>`:T``}render(){const t=this._getLegend();return T`
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
    `}};ut([st({type:String})],ct.prototype,"legend",void 0),ut([st({type:String})],ct.prototype,"input",void 0),ut([nt("input")],ct.prototype,"_input",void 0),ct=ut([tt("lis-search-element")],ct);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=2;class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt extends vt{constructor(t){if(super(t),this.it=U,t.type!==dt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||null==t)return this._t=void 0,this.it=t;if(t===M)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}pt.directiveName="unsafeHTML",pt.resultType=1;const ft=(t=>(...i)=>({_$litDirective$:t,values:i}))(pt);var mt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let bt=class extends X{constructor(){super(...arguments),this.caption="",this.dataAttributes=[],this.header={},this.data=[]}createRenderRoot(){return this}_objectToRow(t,i="td"){const s=`<${i}>`,e=`</${i}>`,n=this.dataAttributes.map((i=>{const n=t.hasOwnProperty(i)?t[i]:"";return s+n+e}));return T`<tr>${ft(n.join(""))}</tr>`}_getCaption(){return this.caption?T`<caption>${this.caption}</caption>`:T``}_getHeader(){if(!this.header)return T``;const t=this._objectToRow(this.header,"th");return T`<thead>${t}</thead>`}_getBody(){if(!this.data)return T``;const t=this.data.map((t=>this._objectToRow(t)));return T`<tbody>${t}</tbody>`}render(){const t=this._getCaption(),i=this._getHeader(),s=this._getBody();return T`
      <table class="uk-table uk-table-divider uk-table-small">
        ${t}
        ${i}
        ${s}
      </table>
    `}};mt([st({type:String})],bt.prototype,"caption",void 0),mt([st({type:Array})],bt.prototype,"dataAttributes",void 0),mt([st({type:Object})],bt.prototype,"header",void 0),mt([st({type:Array,attribute:!1})],bt.prototype,"data",void 0),bt=mt([tt("lis-simple-table-element")],bt);var gt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};const yt=t=>()=>{class i extends t{constructor(){super(...arguments),this.searchFunction=()=>Promise.reject(new Error("No search function provided")),this.resultAttributes=[],this.tableHeader={},this._data=void 0,this._alertMessage="",this._alertModifier="primary"}createRenderRoot(){return this}formToObject(t){return Object.fromEntries(t)}_updateData(t){t.preventDefault(),t.stopPropagation(),this._data=this.formToObject(t.detail.data),this._paginator.page=1,this._search()}_changePage(t){t.preventDefault(),t.stopPropagation(),this._search()}_search(){if(void 0!==this._data){const t=this._paginator.page,i=`<span uk-spinner></span> Loading page ${t}`;this._setAlert(i,"primary"),this.searchFunction(this._data,t).then((t=>this._searchSuccess(t)),(t=>this._searchFailure(t)))}}_searchSuccess(t){const{hasNext:i,results:s}={hasNext:Boolean(t.results.length),...t},e=1==s.length?"":"s",n=`${s.length} result${e} found`,r=s.length?"success":"warning";this._setAlert(n,r),this._table.data=s,this._paginator.hasNext=i}_searchFailure(t){throw this._setAlert("Search failed","danger"),t}_setAlert(t,i){this._alertMessage=t,this._alertModifier=i}_renderAlert(){return this._alertMessage?T`
      <div class="uk-alert uk-alert-${this._alertModifier}">
        <p>${ft(this._alertMessage)}</p>
      </div>
    `:T``}renderForm(){throw new Error("Method not implemented")}render(){const t=this.renderForm(),i=this._renderAlert();return T`

      <lis-form-wrapper-element @submit="${this._updateData}">
        ${t}
      </lis-form-wrapper-element>

      ${i}

      <lis-simple-table-element
        caption="Search Results"
        .dataAttributes=${this.resultAttributes}
        .header=${this.tableHeader}>
      </lis-simple-table-element>

      <lis-pagination-element @pageChange=${this._changePage}></lis-pagination-element>

    `}}return gt([st({type:Function,attribute:!1})],i.prototype,"searchFunction",void 0),gt([et()],i.prototype,"resultAttributes",void 0),gt([et()],i.prototype,"tableHeader",void 0),gt([et()],i.prototype,"_data",void 0),gt([et()],i.prototype,"_alertMessage",void 0),gt([et()],i.prototype,"_alertModifier",void 0),gt([nt("lis-simple-table-element")],i.prototype,"_table",void 0),gt([nt("lis-pagination-element")],i.prototype,"_paginator",void 0),i};var $t=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let kt=class extends(yt(X)()){constructor(){super(),this.resultAttributes=["name","description"],this.tableHeader={name:"Name",description:"Description"}}renderForm(){return T`
      <form>
        <fieldset class="uk-fieldset">
          <legend class="uk-legend">Gene search</legend>
          <div class="uk-margin">
            <input
              name="query"
              class="uk-input"
              type="text"
              placeholder="Input"
              aria-label="Input">
          </div>
          <div class="uk-margin">
            <button type="submit" class="uk-button uk-button-primary">Search</button>
          </div>
        </fieldset>
      </form>
    `}};kt=$t([tt("lis-gene-search-element")],kt);var wt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let _t=class extends(yt(X)()){constructor(){super(),this.resultAttributes=["name","description"],this.tableHeader={name:"Name",description:"Description"}}renderForm(){return T`
      <form>
        <fieldset class="uk-fieldset">
          <legend class="uk-legend">Trait search</legend>
          <div class="uk-margin">
            <input
              name="query"
              class="uk-input"
              type="text"
              placeholder="Input"
              aria-label="Input">
          </div>
          <div class="uk-margin">
            <button type="submit" class="uk-button uk-button-primary">Search</button>
          </div>
        </fieldset>
      </form>
    `}};_t=wt([tt("lis-trait-search-element")],_t);export{lt as LisFormWrapperElement,kt as LisGeneSearchElement,at as LisPaginationElement,ct as LisSearchElement,bt as LisSimpleTableElement,_t as LisTraitSearchElement};
