/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new WeakMap;class n{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new n(s,t,e)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const l=window,a=l.trustedTypes,u=a?a.emptyScript:"",c=l.reactiveElementPolyfillSupport,d={toAttribute(t,i){switch(i){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},v=(t,i)=>i!==t&&(i==i||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=p){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=p){var s;const n=this.constructor._$Ep(t,e);if(void 0!==n&&!0===e.reflect){const r=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:d).toAttribute(i,e.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:d;this._$El=n,this[n]=r.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:f}),(null!==(h=l.reactiveElementVersions)&&void 0!==h?h:l.reactiveElementVersions=[]).push("1.4.2");const b=window,g=b.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,k=`<${$}>`,_=document,S=(t="")=>_.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,x=/>/g,E=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),M=/'/g,N=/"/g,P=/^(?:script|style|textarea|title)$/i,T=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),I=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),L=new WeakMap,U=_.createTreeWalker(_,129,null,!1),q=(t,i)=>{const e=t.length-1,s=[];let n,r=2===i?"<svg>":"",o=j;for(let i=0;i<e;i++){const e=t[i];let h,l,a=-1,u=0;for(;u<e.length&&(o.lastIndex=u,l=o.exec(e),null!==l);)u=o.lastIndex,o===j?"!--"===l[1]?o=O:void 0!==l[1]?o=x:void 0!==l[2]?(P.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=E):void 0!==l[3]&&(o=E):o===E?">"===l[0]?(o=null!=n?n:j,a=-1):void 0===l[1]?a=-2:(a=o.lastIndex-l[2].length,h=l[1],o=void 0===l[3]?E:'"'===l[3]?N:M):o===N||o===M?o=E:o===O||o===x?o=j:(o=E,n=void 0);const c=o===E&&t[i+1].startsWith("/>")?" ":"";r+=o===j?e+k:a>=0?(s.push(h),e.slice(0,a)+"$lit$"+e.slice(a)+w+c):e+w+(-2===a?(s.push(void 0),i):c)}const h=r+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(h):h,s]};class D{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,r=0;const o=t.length-1,h=this.parts,[l,a]=q(t,i);if(this.el=D.createElement(l,e),U.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=U.nextNode())&&h.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const e=a[r++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(e);h.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?Q:"@"===i[1]?W:B})}else h.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(P.test(s.tagName)){const t=s.textContent.split(w),i=t.length-1;if(i>0){s.textContent=g?g.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],S()),U.nextNode(),h.push({type:2,index:++n});s.append(t[i],S())}}}else if(8===s.nodeType)if(s.data===$)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)h.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,i){const e=_.createElement("template");return e.innerHTML=t,e}}function F(t,i,e=t,s){var n,r,o,h;if(i===I)return i;let l=void 0!==s?null===(n=e._$Co)||void 0===n?void 0:n[s]:e._$Cl;const a=A(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,e,s)),void 0!==s?(null!==(o=(h=e)._$Co)&&void 0!==o?o:h._$Co=[])[s]=l:e._$Cl=l),void 0!==l&&(i=F(t,l._$AS(t,i.values),l,s)),i}class z{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:e},parts:s}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:_).importNode(e,!0);U.currentNode=n;let r=U.nextNode(),o=0,h=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new G(r,r.nextSibling,this,t):1===l.type?i=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(i=new K(r,this,t)),this.u.push(i),l=s[++h]}o!==(null==l?void 0:l.index)&&(r=U.nextNode(),o++)}return n}p(t){let i=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class G{constructor(t,i,e,s){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=F(this,t,i),A(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==I&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(e);else{const t=new z(n,this),i=t.v(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let i=L.get(t.strings);return void 0===i&&L.set(t.strings,i=new D(t)),i}k(t){C(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const n of t)s===i.length?i.push(e=new G(this.O(S()),this.O(S()),this,this.options)):e=i[s],e._$AI(n),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class B{constructor(t,i,e,s,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const n=this.strings;let r=!1;if(void 0===n)t=F(this,t,i,0),r=!A(t)||t!==this._$AH&&t!==I,r&&(this._$AH=t);else{const s=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=F(this,s[e+o],i,o),h===I&&(h=this._$AH[o]),r||(r=!A(h)||h!==this._$AH[o]),h===R?t=R:t!==R&&(t+=(null!=h?h:"")+n[o+1]),this._$AH[o]=h}r&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const J=g?g.emptyScript:"";class Q extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class W extends B{constructor(t,i,e,s,n){super(t,i,e,s,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=F(this,t,i,0))&&void 0!==e?e:R)===I)return;const s=this._$AH,n=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==R&&(s===R||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const V=b.litHtmlPolyfillSupport;null==V||V(D,G),(null!==(m=b.litHtmlVersions)&&void 0!==m?m:b.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,Y;class X extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,n;const r=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new G(i.insertBefore(S(),t),t,void 0,null!=e?e:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}}X.finalized=!0,X._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function st(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):et(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function nt(t){return st({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=({finisher:t,descriptor:i})=>(e,s)=>{var n;if(void 0===s){const s=null!==(n=e.originalKey)&&void 0!==n?n:e.key,r=null!=i?{kind:"method",placement:"prototype",key:s,descriptor:i(e.key)}:{...e,key:s};return null!=t&&(r.finisher=function(i){t(i,s)}),r}{const n=e.constructor;void 0!==i&&Object.defineProperty(e,s,i(s)),null==t||t(n,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ot(t,i){return rt({descriptor:e=>{const s={get(){var i,e;return null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;s.get=function(){var e,s;return void 0===this[i]&&(this[i]=null!==(s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==s?s:null),this[i]}}return s}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;const lt=null!=(null===(ht=window.HTMLSlotElement)||void 0===ht?void 0:ht.prototype.assignedElements)?(t,i)=>t.assignedElements(i):(t,i)=>t.assignedNodes(i).filter((t=>t.nodeType===Node.ELEMENT_NODE));var at=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let ut=class extends X{submit(){if(!this._forms.length)throw new Error("No form to submit");const t=this._forms[0],i=t.querySelector('[type="submit"]');null!==i?t.requestSubmit(i):t.requestSubmit()}_submit(t){t.preventDefault(),t.stopPropagation();const i={detail:{data:new FormData(t.target)},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("submit",i))}render(){return T`<slot @submit="${this._submit}"></slot>`}};ut.styles=r``,at([function(t){const{slot:i,selector:e}=null!=t?t:{};return rt({descriptor:s=>({get(){var s;const n="slot"+(i?`[name=${i}]`:":not([name])"),r=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(n),o=null!=r?lt(r,t):[];return e?o.filter((t=>t.matches(e))):o},enumerable:!0,configurable:!0})})}({selector:"form"})],ut.prototype,"_forms",void 0),ut=at([it("lis-form-wrapper-element")],ut);var ct=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let dt=class extends X{constructor(){super(...arguments),this.page=1,this.hasNext=!1}createRenderRoot(){return this}previous(t){void 0!==t&&t.preventDefault(),this.page>1&&(this.page-=1,this._dispatchPageChange())}next(t){void 0!==t&&t.preventDefault(),this.page+=1,this._dispatchPageChange()}_dispatchPageChange(){const t={detail:{page:this.page},bubbles:!0,composed:!0},i=new CustomEvent("pageChange",t);this.dispatchEvent(i)}_renderPreviousClass(){return this.page>1?"":"uk-disabled"}_renderNextClass(){return this.hasNext?"":"uk-disabled"}render(){const t=this._renderPreviousClass(),i=this._renderNextClass();return T`
      <ul class="uk-pagination">
          <li class="${t}"><a href="" @click=${this.previous}><span class="uk-margin-small-right" uk-pagination-previous></span> Previous</a></li>
          <li class="uk-active"><span>Page ${this.page}</span></li>
          <li class="uk-margin-auto-left ${i}"><a href="" @click=${this.next}>Next <span class="uk-margin-small-left" uk-pagination-next></span></a></li>
      </ul>
    `}};dt.styles=r``,ct([st({type:Number,reflect:!0})],dt.prototype,"page",void 0),ct([st({type:Boolean})],dt.prototype,"hasNext",void 0),dt=ct([it("lis-pagination-element")],dt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt=2;class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ft extends pt{constructor(t){if(super(t),this.it=R,t.type!==vt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||null==t)return this._t=void 0,this.it=t;if(t===I)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}ft.directiveName="unsafeHTML",ft.resultType=1;const mt=(t=>(...i)=>({_$litDirective$:t,values:i}))(ft);var bt=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let gt=class extends X{constructor(){super(...arguments),this.caption="",this.dataAttributes=[],this.header={},this.data=[]}createRenderRoot(){return this}_objectToRow(t,i="td"){const e=`<${i}>`,s=`</${i}>`,n=this.dataAttributes.map((i=>{const n=t.hasOwnProperty(i)?t[i]:"";return e+n+s}));return T`<tr>${mt(n.join(""))}</tr>`}_getCaption(){return this.caption?T`<caption>${this.caption}</caption>`:T``}_getHeader(){if(!this.header)return T``;const t=this._objectToRow(this.header,"th");return T`<thead>${t}</thead>`}_getBody(){if(!this.data)return T``;const t=this.data.map((t=>this._objectToRow(t)));return T`<tbody>${t}</tbody>`}render(){const t=this._getCaption(),i=this._getHeader(),e=this._getBody();return T`
      <table class="uk-table uk-table-divider uk-table-small">
        ${t}
        ${i}
        ${e}
        <slot></slot>
      </table>
    `}};gt.styles=r``,bt([st({type:String})],gt.prototype,"caption",void 0),bt([st({type:Array})],gt.prototype,"dataAttributes",void 0),bt([st({type:Object})],gt.prototype,"header",void 0),bt([st({type:Array,attribute:!1})],gt.prototype,"data",void 0),gt=bt([it("lis-simple-table-element")],gt);class yt{constructor(t){this._listeners=[],(this.host=t).addController(this),this._initialize()}hostConnected(){this._addEventListener()}hostDisconnected(){this.abortSignal.removeEventListener("abort",this._aborted.bind(this))}wrapPromise(t){const i=this._cancelState;return i.wrapCount+=1,Promise.race([t,i.promise])}addListener(t){this._listeners.push(t.bind(this.host))}cancel(){this._abortController.abort()}_addEventListener(){this.abortSignal.addEventListener("abort",this._aborted.bind(this),{once:!0})}_initialize(){this._abortController=new AbortController,this.abortSignal=this._abortController.signal,this._addEventListener();let t={abortSignal:this.abortSignal,wrapCount:0};t.promise=new Promise(((i,e)=>{t.abortSignal.addEventListener("abort",(t=>e(t)),{once:!0})})).catch((i=>{if(t.wrapCount>0)throw i})),this._cancelState=t}_aborted(t){this._initialize(),this.host.requestUpdate(),this.host.updateComplete.then((()=>{this._listeners.forEach((i=>{i(t)}))}))}}class wt{constructor(t){this._listeners=[],(this.host=t).addController(this)}hostConnected(){document.addEventListener("DOMContentLoaded",this._contentLoaded.bind(this))}hostDisconnected(){document.removeEventListener("DOMContentLoaded",this._contentLoaded.bind(this))}addListener(t){this._listeners.push(t.bind(this.host))}_contentLoaded(t){this.host.requestUpdate(),this.host.updateComplete.then((()=>{this._listeners.forEach((i=>{i(t)}))}))}}class $t{constructor(t){this._listeners=[],(this.host=t).addController(this)}hostConnected(){window.addEventListener("popstate",this._popState.bind(this))}hostDisconnected(){window.removeEventListener("popstate",this._popState.bind(this))}getParameter(t,i=""){const e=new URLSearchParams(window.location.search).get(t);return null!==e?e:i}setParameters(t){if(!this._differentValues(t))return;const i="?"+Object.entries(t).map((([t,i])=>`${t}=${i}`)).join("&");history.pushState(t,"",i)}addListener(t){this._listeners.push(t.bind(this.host))}_differentValues(t){const i=new URLSearchParams(window.location.search);return Object.entries(t).some((([t,e])=>e.toString()!==i.get(t)))}_popState(t){this.host.requestUpdate(),this.host.updateComplete.then((()=>{this._listeners.forEach((i=>{i(t)}))}))}}var kt=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};const _t=t=>()=>{class i extends t{constructor(...t){super(...t),this.queryStringController=new $t(this),this.domContentLoadedController=new wt(this),this.cancelPromiseController=new yt(this),this.searchFunction=()=>Promise.reject(new Error("No search function provided")),this.requiredQueryStringParams=[],this.resultAttributes=[],this.tableHeader={},this._data=void 0,this._alertMessage="",this._alertModifier="primary",this._searchPage=1,this.domContentLoadedController.addListener(this._queryStringSubmit),this.queryStringController.addListener(this._queryStringSubmit)}createRenderRoot(){return this}submit(){if(null===this._formWrapper)throw new Error("No form wrapper in the template");this._formWrapper.submit()}_queryStringSubmit(){this.requiredQueryStringParams.every((t=>Boolean(this.queryStringController.getParameter(t))))?(this._searchPage=Number(this.queryStringController.getParameter("page","1")),this.submit()):this._resetComponent()}_changePage(t){t.preventDefault(),t.stopPropagation(),this._search()}_search(){if(void 0!==this._data){const t=this._paginator.page,i=`<span uk-spinner></span> Loading page ${t}`;this._setAlert(i,"primary"),this.queryStringController.setParameters({page:t,...this._data}),this.cancelPromiseController.cancel();const e={abortSignal:this.cancelPromiseController.abortSignal},s=this.searchFunction(this._data,t,e);this.cancelPromiseController.wrapPromise(s).then((t=>this._searchSuccess(t)),(t=>{"abort"!==t.type&&this._searchFailure(t)}))}}_searchSuccess(t){this._searchPage=1;const{hasNext:i,results:e}={hasNext:Boolean(t.results.length),...t},s=1==e.length?"":"s",n=`${e.length} result${s} found`,r=e.length?"success":"warning";this._setAlert(n,r),this._table.data=e,this._paginator.hasNext=i}_searchFailure(t){throw this._setAlert("Search failed","danger"),t}formToObject(t){return Object.fromEntries(t)}_resetComponent(){this._data=void 0,this._setAlert("","primary"),this._table.data=[],this._paginator.page=1,this._paginator.hasNext=!1}_updateData(t){t.preventDefault(),t.stopPropagation(),this._data=this.formToObject(t.detail.data),this._paginator.page=this._searchPage,this._search()}_setAlert(t,i){this._alertMessage=t,this._alertModifier=i}renderForm(){throw new Error("Method not implemented")}_renderAlert(){return this._alertMessage?T`
      <div class="uk-alert uk-alert-${this._alertModifier}">
        <p>${mt(this._alertMessage)}</p>
      </div>
    `:T``}render(){const t=this.renderForm(),i=this._renderAlert();return T`

      <lis-form-wrapper-element @submit="${this._updateData}">
        ${t}
      </lis-form-wrapper-element>

      ${i}

      <lis-simple-table-element
        caption="Search Results"
        .dataAttributes=${this.resultAttributes}
        .header=${this.tableHeader}>
      </lis-simple-table-element>

      <lis-pagination-element
        page=${this.queryStringController.getParameter("page","1")}
        @pageChange=${this._changePage}>
      </lis-pagination-element>

    `}}return kt([st({type:Function,attribute:!1})],i.prototype,"searchFunction",void 0),kt([nt()],i.prototype,"requiredQueryStringParams",void 0),kt([nt()],i.prototype,"resultAttributes",void 0),kt([nt()],i.prototype,"tableHeader",void 0),kt([nt()],i.prototype,"_data",void 0),kt([nt()],i.prototype,"_alertMessage",void 0),kt([nt()],i.prototype,"_alertModifier",void 0),kt([ot("lis-simple-table-element")],i.prototype,"_table",void 0),kt([ot("lis-pagination-element")],i.prototype,"_paginator",void 0),kt([ot("lis-form-wrapper-element")],i.prototype,"_formWrapper",void 0),i};var St=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let At=class extends(_t(X)()){constructor(){super(),this.requiredQueryStringParams=["query"],this.resultAttributes=["name","description"],this.tableHeader={name:"Name",description:"Description"}}renderForm(){return T`
<form>
<fieldset class="uk-fieldset">
<legend class="uk-legend">Gene description search (e.g. photosystem II)</legend>
<div class="uk-margin">
<input
name="query"
class="uk-input"
type="text"
placeholder="Input"
aria-label="Input"
.value=${this.queryStringController.getParameter("query")}>
</div>
<div class="uk-margin">
<button type="submit" class="uk-button uk-button-primary">Search</button>
</div>
</fieldset>
</form>
`}};At.styles=r``,At=St([it("lis-gene-search-element")],At);var Ct=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let jt=class extends(_t(X)()){constructor(){super(),this.requiredQueryStringParams=["query"],this.resultAttributes=["name","identifier","description"],this.tableHeader={name:"Name",identifier:"Identifier",description:"Description"}}renderForm(){return T`
<form>
<fieldset class="uk-fieldset">
<legend class="uk-legend">Trait name search (e.g. flower)</legend>
<div class="uk-margin">
<input
name="query"
class="uk-input"
type="text"
placeholder="Input"
aria-label="Input"
.value=${this.queryStringController.getParameter("query")}>
</div>
<div class="uk-margin">
<button type="submit" class="uk-button uk-button-primary">Search</button>
</div>
</fieldset>
</form>
`}};jt.styles=r``,jt=Ct([it("lis-trait-search-element")],jt);var Ot=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let xt=class extends(_t(X)()){constructor(){super(),this.requiredQueryStringParams=["query"],this.resultAttributes=["trait_name","identifier","linkageGroup_geneticMap_identifier","linkageGroup_identifier","start","end","markerNames"],this.tableHeader={trait_name:"Trait",identifier:"QTL",linkageGroup_geneticMap_identifier:"Genetic Map",linkageGroup_identifier:"Linkage Group",start:"Start",end:"End",markerNames:"Markers"}}renderForm(){return T`
<form>
<fieldset class="uk-fieldset">
<legend class="uk-legend">QTL trait name search (e.g. flower)</legend>
<div class="uk-margin">
<input
name="query"
class="uk-input"
type="text"
placeholder="Input"
aria-label="Input"
.value=${this.queryStringController.getParameter("query")}>
</div>
<div class="uk-margin">
<button type="submit" class="uk-button uk-button-primary">Search</button>
</div>
</fieldset>
</form>
`}};xt.styles=r``,xt=Ot([it("lis-qtl-search-element")],xt);var Et=function(t,i,e,s){for(var n,r=arguments.length,o=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,e,o):n(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let Mt=class extends(_t(X)()){constructor(){super(),this.requiredQueryStringParams=["query"],this.resultAttributes=["year","title","journal","firstAuthor","doi","pubMedId"],this.tableHeader={year:"Year",title:"Title",journal:"Journal",firstAuthor:"First Author",doi:"DOI",pubMedId:"PubMed"}}renderForm(){return T`
<form>
<fieldset class="uk-fieldset">
<legend class="uk-legend">Publication title search (e.g. expression)</legend>
<div class="uk-margin">
<input
name="query"
class="uk-input"
type="text"
placeholder="Input"
aria-label="Input"
.value=${this.queryStringController.getParameter("query")}>
</div>
<div class="uk-margin">
<button type="submit" class="uk-button uk-button-primary">Search</button>
</div>
</fieldset>
</form>
`}};Mt.styles=r``,Mt=Et([it("lis-publication-search-element")],Mt);export{ut as LisFormWrapperElement,At as LisGeneSearchElement,dt as LisPaginationElement,Mt as LisPublicationSearchElement,xt as LisQTLSearchElement,gt as LisSimpleTableElement,jt as LisTraitSearchElement};
