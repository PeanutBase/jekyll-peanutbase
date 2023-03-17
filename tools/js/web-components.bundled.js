/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new WeakMap;class r{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new r(s,t,e)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window,a=h.trustedTypes,u=a?a.emptyScript:"",d=h.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},v=(t,i)=>i!==t&&(i==i||t==t),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=p){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const r=this[t];this[i]=s,this.requestUpdate(t,r,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=p){var s;const r=this.constructor._$Ep(t,e);if(void 0!==r&&!0===e.reflect){const n=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:c).toAttribute(i,e.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:c;this._$El=r,this[r]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.4.2");const b=window,g=b.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,k=`<${$}>`,_=document,S=(t="")=>_.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,x=/>/g,E=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),M=/'/g,N=/"/g,P=/^(?:script|style|textarea|title)$/i,R=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),T=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),L=new WeakMap,U=_.createTreeWalker(_,129,null,!1),q=(t,i)=>{const e=t.length-1,s=[];let r,n=2===i?"<svg>":"",o=C;for(let i=0;i<e;i++){const e=t[i];let l,h,a=-1,u=0;for(;u<e.length&&(o.lastIndex=u,h=o.exec(e),null!==h);)u=o.lastIndex,o===C?"!--"===h[1]?o=O:void 0!==h[1]?o=x:void 0!==h[2]?(P.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=E):void 0!==h[3]&&(o=E):o===E?">"===h[0]?(o=null!=r?r:C,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?E:'"'===h[3]?N:M):o===N||o===M?o=E:o===O||o===x?o=C:(o=E,r=void 0);const d=o===E&&t[i+1].startsWith("/>")?" ":"";n+=o===C?e+k:a>=0?(s.push(l),e.slice(0,a)+"$lit$"+e.slice(a)+w+d):e+w+(-2===a?(s.push(void 0),i):d)}const l=n+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,s]};class D{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[h,a]=q(t,i);if(this.el=D.createElement(h,e),U.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=U.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const e=a[n++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?Q:"@"===i[1]?W:B})}else l.push({type:6,index:r})}for(const i of t)s.removeAttribute(i)}if(P.test(s.tagName)){const t=s.textContent.split(w),i=t.length-1;if(i>0){s.textContent=g?g.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],S()),U.nextNode(),l.push({type:2,index:++r});s.append(t[i],S())}}}else if(8===s.nodeType)if(s.data===$)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)l.push({type:7,index:r}),t+=w.length-1}r++}}static createElement(t,i){const e=_.createElement("template");return e.innerHTML=t,e}}function F(t,i,e=t,s){var r,n,o,l;if(i===T)return i;let h=void 0!==s?null===(r=e._$Co)||void 0===r?void 0:r[s]:e._$Cl;const a=A(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,e,s)),void 0!==s?(null!==(o=(l=e)._$Co)&&void 0!==o?o:l._$Co=[])[s]=h:e._$Cl=h),void 0!==h&&(i=F(t,h._$AS(t,i.values),h,s)),i}class z{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:e},parts:s}=this._$AD,r=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:_).importNode(e,!0);U.currentNode=r;let n=U.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new G(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new K(n,this,t)),this.u.push(i),h=s[++l]}o!==(null==h?void 0:h.index)&&(n=U.nextNode(),o++)}return r}p(t){let i=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class G{constructor(t,i,e,s){var r;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cm=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=F(this,t,i),A(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==T&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==I&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===r)this._$AH.p(e);else{const t=new z(r,this),i=t.v(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let i=L.get(t.strings);return void 0===i&&L.set(t.strings,i=new D(t)),i}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const r of t)s===i.length?i.push(e=new G(this.O(S()),this.O(S()),this,this.options)):e=i[s],e._$AI(r),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class B{constructor(t,i,e,s,r){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=r,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const r=this.strings;let n=!1;if(void 0===r)t=F(this,t,i,0),n=!A(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const s=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=F(this,s[e+o],i,o),l===T&&(l=this._$AH[o]),n||(n=!A(l)||l!==this._$AH[o]),l===I?t=I:t!==I&&(t+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}n&&!s&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const J=g?g.emptyScript:"";class Q extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class W extends B{constructor(t,i,e,s,r){super(t,i,e,s,r),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=F(this,t,i,0))&&void 0!==e?e:I)===T)return;const s=this._$AH,r=t===I&&s!==I||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==I&&(s===I||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const V=b.litHtmlPolyfillSupport;null==V||V(D,G),(null!==(m=b.litHtmlVersions)&&void 0!==m?m:b.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,Y;class X extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,r;const n=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==e?void 0:e.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new G(i.insertBefore(S(),t),t,void 0,null!=e?e:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}X.finalized=!0,X._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");
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
 */}function rt(t){return st({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=({finisher:t,descriptor:i})=>(e,s)=>{var r;if(void 0===s){const s=null!==(r=e.originalKey)&&void 0!==r?r:e.key,n=null!=i?{kind:"method",placement:"prototype",key:s,descriptor:i(e.key)}:{...e,key:s};return null!=t&&(n.finisher=function(i){t(i,s)}),n}{const r=e.constructor;void 0!==i&&Object.defineProperty(e,s,i(s)),null==t||t(r,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ot(t,i){return nt({descriptor:e=>{const s={get(){var i,e;return null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;s.get=function(){var e,s;return void 0===this[i]&&(this[i]=null!==(s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==s?s:null),this[i]}}return s}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt;const ht=null!=(null===(lt=window.HTMLSlotElement)||void 0===lt?void 0:lt.prototype.assignedElements)?(t,i)=>t.assignedElements(i):(t,i)=>t.assignedNodes(i).filter((t=>t.nodeType===Node.ELEMENT_NODE));var at=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};let ut=class extends X{submit(){if(!this._forms.length)throw new Error("No form to submit");const t=this._forms[0],i=t.querySelector('[type="submit"]');null!==i?t.requestSubmit(i):t.requestSubmit()}_submit(t){t.preventDefault(),t.stopPropagation();const i={detail:{data:new FormData(t.target)},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("submit",i))}render(){return R`<slot @submit="${this._submit}"></slot>`}};ut.styles=n``,at([function(t){const{slot:i,selector:e}=null!=t?t:{};return nt({descriptor:s=>({get(){var s;const r="slot"+(i?`[name=${i}]`:":not([name])"),n=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(r),o=null!=n?ht(n,t):[];return e?o.filter((t=>t.matches(e))):o},enumerable:!0,configurable:!0})})}({selector:"form"})],ut.prototype,"_forms",void 0),ut=at([it("lis-form-wrapper-element")],ut);var dt=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};let ct=class extends X{constructor(){super(...arguments),this.page=1,this.hasNext=!1}createRenderRoot(){return this}previous(t){void 0!==t&&t.preventDefault(),this.page>1&&(this.page-=1,this._dispatchPageChange())}next(t){void 0!==t&&t.preventDefault(),this.page+=1,this._dispatchPageChange()}_dispatchPageChange(){const t={detail:{page:this.page},bubbles:!0,composed:!0},i=new CustomEvent("pageChange",t);this.dispatchEvent(i)}_renderPreviousClass(){return this.page>1?"":"uk-disabled"}_renderNextClass(){return this.hasNext?"":"uk-disabled"}render(){const t=this._renderPreviousClass(),i=this._renderNextClass();return R`
      <ul class="uk-pagination">
          <li class="${t}"><a href="" @click=${this.previous}><span class="uk-margin-small-right" uk-pagination-previous></span> Previous</a></li>
          <li class="uk-active"><span>Page ${this.page}</span></li>
          <li class="uk-margin-auto-left ${i}"><a href="" @click=${this.next}>Next <span class="uk-margin-small-left" uk-pagination-next></span></a></li>
      </ul>
    `}};ct.styles=n``,dt([st({type:Number,reflect:!0})],ct.prototype,"page",void 0),dt([st({type:Boolean})],ct.prototype,"hasNext",void 0),ct=dt([it("lis-pagination-element")],ct);
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
 */class ft extends pt{constructor(t){if(super(t),this.it=I,t.type!==vt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===I||null==t)return this._t=void 0,this.it=t;if(t===T)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}ft.directiveName="unsafeHTML",ft.resultType=1;const mt=(t=>(...i)=>({_$litDirective$:t,values:i}))(ft);var bt=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};let gt=class extends X{constructor(){super(...arguments),this.caption="",this.dataAttributes=[],this.header={},this.data=[]}createRenderRoot(){return this}_objectToRow(t,i="td"){const e=`<${i}>`,s=`</${i}>`,r=this.dataAttributes.map((i=>{const r=t.hasOwnProperty(i)?t[i]:"";return e+r+s}));return R`<tr>${mt(r.join(""))}</tr>`}_getCaption(){return this.caption?R`<caption>${this.caption}</caption>`:R``}_getHeader(){if(!this.header)return R``;const t=this._objectToRow(this.header,"th");return R`<thead>${t}</thead>`}_getBody(){if(!this.data)return R``;const t=this.data.map((t=>this._objectToRow(t)));return R`<tbody>${t}</tbody>`}render(){const t=this._getCaption(),i=this._getHeader(),e=this._getBody();return R`
      <table class="uk-table uk-table-divider uk-table-small">
        ${t}
        ${i}
        ${e}
        <slot></slot>
      </table>
    `}};gt.styles=n``,bt([st({type:String})],gt.prototype,"caption",void 0),bt([st({type:Array})],gt.prototype,"dataAttributes",void 0),bt([st({type:Object})],gt.prototype,"header",void 0),bt([st({type:Array,attribute:!1})],gt.prototype,"data",void 0),gt=bt([it("lis-simple-table-element")],gt);var yt=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};let wt=class extends X{constructor(){super(...arguments),this.modalId="lis-modal",this.heading=""}createRenderRoot(){return this}_getHeading(){return this.heading?R`<div class="uk-modal-header">${mt(this.heading)}</div>`:R``}_getContent(){return this.children?R`<div class="uk-modal-body" uk-overflow-auto>${Array.from(this.children)}</div>`:R``}render(){const t=this._getHeading(),i=this._getContent();return R`
    <div id="${this.modalId}" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
          ${t}
          ${i}
      </div>
    </div>
    `}};wt.styles=n``,yt([st({type:String})],wt.prototype,"modalId",void 0),yt([st({type:String})],wt.prototype,"heading",void 0),wt=yt([it("lis-modal-element")],wt);class $t{constructor(t){this._listeners=[],(this.host=t).addController(this),this._initialize()}hostConnected(){this._addEventListener()}hostDisconnected(){this.abortSignal.removeEventListener("abort",this._aborted.bind(this))}wrapPromise(t){const i=this._cancelState;return i.wrapCount+=1,Promise.race([t,i.promise])}addListener(t){this._listeners.push(t.bind(this.host))}cancel(){this._abortController.abort()}_addEventListener(){this.abortSignal.addEventListener("abort",this._aborted.bind(this),{once:!0})}_initialize(){this._abortController=new AbortController,this.abortSignal=this._abortController.signal,this._addEventListener();let t={abortSignal:this.abortSignal,wrapCount:0};t.promise=new Promise(((i,e)=>{t.abortSignal.addEventListener("abort",(t=>e(t)),{once:!0})})).catch((i=>{if(t.wrapCount>0)throw i})),this._cancelState=t}_aborted(t){this._initialize(),this.host.requestUpdate(),this.host.updateComplete.then((()=>{this._listeners.forEach((i=>{i(t)}))}))}}class kt{constructor(t){this._listeners=[],(this.host=t).addController(this)}hostConnected(){document.addEventListener("DOMContentLoaded",this._contentLoaded.bind(this))}hostDisconnected(){document.removeEventListener("DOMContentLoaded",this._contentLoaded.bind(this))}addListener(t){this._listeners.push(t.bind(this.host))}_contentLoaded(t){this.host.requestUpdate(),this.host.updateComplete.then((()=>{this._listeners.forEach((i=>{i(t)}))}))}}class _t{constructor(t){this._listeners=[],(this.host=t).addController(this)}hostConnected(){window.addEventListener("popstate",this._popState.bind(this))}hostDisconnected(){window.removeEventListener("popstate",this._popState.bind(this))}getParameter(t,i=""){const e=new URLSearchParams(window.location.search).get(t);return null!==e?e:i}setParameters(t){if(!this._differentValues(t))return;const i="?"+Object.entries(t).map((([t,i])=>`${t}=${i}`)).join("&");history.pushState(t,"",i)}addListener(t){this._listeners.push(t.bind(this.host))}_differentValues(t){const i=new URLSearchParams(window.location.search);return Object.entries(t).some((([t,e])=>e.toString()!==i.get(t)))}_popState(t){this.host.requestUpdate(),this.host.updateComplete.then((()=>{this._listeners.forEach((i=>{i(t)}))}))}}var St=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};const At=t=>()=>{class i extends t{constructor(...t){super(...t),this.queryStringController=new _t(this),this.domContentLoadedController=new kt(this),this.cancelPromiseController=new $t(this),this.searchFunction=()=>Promise.reject(new Error("No search function provided")),this.requiredQueryStringParams=[],this.resultAttributes=[],this.tableHeader={},this._data=void 0,this._alertMessage="",this._alertModifier="primary",this._searchPage=1,this.domContentLoadedController.addListener(this._queryStringSubmit),this.queryStringController.addListener(this._queryStringSubmit)}createRenderRoot(){return this}submit(){if(null===this._formWrapper)throw new Error("No form wrapper in the template");this._formWrapper.submit()}_queryStringSubmit(){this.requiredQueryStringParams.every((t=>Boolean(this.queryStringController.getParameter(t))))?(this._searchPage=Number(this.queryStringController.getParameter("page","1")),this.submit()):this._resetComponent()}_changePage(t){t.preventDefault(),t.stopPropagation(),this._search()}_search(){if(void 0!==this._data){const t=this._paginator.page,i=`<span uk-spinner></span> Loading page ${t}`;this._setAlert(i,"primary"),this.queryStringController.setParameters({page:t,...this._data}),this.cancelPromiseController.cancel();const e={abortSignal:this.cancelPromiseController.abortSignal},s=this.searchFunction(this._data,t,e);this.cancelPromiseController.wrapPromise(s).then((t=>this._searchSuccess(t)),(t=>{"abort"!==t.type&&this._searchFailure(t)}))}}_searchSuccess(t){this._searchPage=1;const{hasNext:i,results:e}={hasNext:Boolean(t.results.length),...t},s=1==e.length?"":"s",r=`${e.length} result${s} found`,n=e.length?"success":"warning";this._setAlert(r,n),this._table.data=e,this._paginator.hasNext=i}_searchFailure(t){throw this._setAlert("Search failed","danger"),t}formToObject(t){return Object.fromEntries(t)}_resetComponent(){this._data=void 0,this._setAlert("","primary"),this._table.data=[],this._paginator.page=1,this._paginator.hasNext=!1}_updateData(t){t.preventDefault(),t.stopPropagation(),this._data=this.formToObject(t.detail.data),this._paginator.page=this._searchPage,this._search()}_setAlert(t,i){this._alertMessage=t,this._alertModifier=i}renderForm(){throw new Error("Method not implemented")}_renderAlert(){return this._alertMessage?R`
      <div class="uk-alert uk-alert-${this._alertModifier}">
        <p>${mt(this._alertMessage)}</p>
      </div>
    `:R``}render(){const t=this.renderForm(),i=this._renderAlert();return R`

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

    `}}return St([st({type:Function,attribute:!1})],i.prototype,"searchFunction",void 0),St([rt()],i.prototype,"requiredQueryStringParams",void 0),St([rt()],i.prototype,"resultAttributes",void 0),St([rt()],i.prototype,"tableHeader",void 0),St([rt()],i.prototype,"_data",void 0),St([rt()],i.prototype,"_alertMessage",void 0),St([rt()],i.prototype,"_alertModifier",void 0),St([ot("lis-simple-table-element")],i.prototype,"_table",void 0),St([ot("lis-pagination-element")],i.prototype,"_paginator",void 0),St([ot("lis-form-wrapper-element")],i.prototype,"_formWrapper",void 0),i};var jt=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};let Ct=class extends(At(X)()){constructor(){super(),this.requiredQueryStringParams=["query"],this.resultAttributes=["name","description"],this.tableHeader={name:"Name",description:"Description"}}renderForm(){return R`
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
`}};Ct.styles=n``,Ct=jt([it("lis-gene-search-element")],Ct);var Ot=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};let xt=class extends(At(X)()){constructor(){super(),this.requiredQueryStringParams=["query"],this.resultAttributes=["name","identifier","description"],this.tableHeader={name:"Name",identifier:"Identifier",description:"Description"}}renderForm(){return R`
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
`}};xt.styles=n``,xt=Ot([it("lis-trait-search-element")],xt);var Et=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};let Mt=class extends(At(X)()){constructor(){super(),this.requiredQueryStringParams=["query"],this.resultAttributes=["trait_name","identifier","linkageGroup_geneticMap_identifier","linkageGroup_identifier","start","end","markerNames"],this.tableHeader={trait_name:"Trait",identifier:"QTL",linkageGroup_geneticMap_identifier:"Genetic Map",linkageGroup_identifier:"Linkage Group",start:"Start",end:"End",markerNames:"Markers"}}renderForm(){return R`
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
`}};Mt.styles=n``,Mt=Et([it("lis-qtl-search-element")],Mt);var Nt=function(t,i,e,s){for(var r,n=arguments.length,o=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(i,e,o):r(i,e))||o);return n>3&&o&&Object.defineProperty(i,e,o),o};let Pt=class extends(At(X)()){constructor(){super(),this.requiredQueryStringParams=["query"],this.resultAttributes=["year","title","journal","firstAuthor","doi","pubMedId"],this.tableHeader={year:"Year",title:"Title",journal:"Journal",firstAuthor:"First Author",doi:"DOI",pubMedId:"PubMed"}}renderForm(){return R`
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
`}};Pt.styles=n``,Pt=Nt([it("lis-publication-search-element")],Pt);export{ut as LisFormWrapperElement,Ct as LisGeneSearchElement,wt as LisModalElement,ct as LisPaginationElement,Pt as LisPublicationSearchElement,Mt as LisQTLSearchElement,gt as LisSimpleTableElement,xt as LisTraitSearchElement};
