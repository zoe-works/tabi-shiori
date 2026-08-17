(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Jh={};let ta="";function st(r,e){Jh[r]=e}function ve(r,e=!0,t=!1){if(ta===r&&!t)return;const n=Jh[r];if(!n){console.warn(`Route not found: ${r}`),ve("/");return}ta=r,e&&(window.location.hash=r);const s=document.getElementById("page-content");s&&(s.style.opacity="0",s.style.transform="translateY(8px)",setTimeout(async()=>{try{const i=await n.render();s.innerHTML=i,s.style.opacity="1",s.style.transform="translateY(0)",n.init&&n.init(),rg(r),window.scrollTo({top:0})}catch(i){console.error("Page render error:",i)}},150))}function rg(r){document.querySelectorAll(".nav-item").forEach(n=>{const s=n.getAttribute("data-route");n.classList.toggle("active",s===r)});const e={"/":"旅のしおり","/flashcard":"単語カード","/checklist":"持ち物チェック","/schedule":"スケジュール","/research":"リサーチノート","/budget":"費用メモ","/emergency":"緊急連絡先","/omiyage":"お土産リスト","/settings":"設定","/trip/new":"新しい旅行","/trip/edit":"旅行を編集","/share":"共有しおり"},t=document.querySelector(".header-title-text");t&&(t.textContent=e[r]||"旅のしおり")}function Jl(){return ta}window.addEventListener("hashchange",()=>{const r=window.location.hash.replace("#","")||"/";ve(r,!1)});var Yl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,T=h&63;l||(T=64,o||(y=64)),n.push(t[f],t[p],t[y],t[T])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Yh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):sg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new ig;const y=i<<2|c>>4;if(n.push(y),h!==64){const T=c<<4&240|h>>2;if(n.push(T),p!==64){const R=h<<6&192|p;n.push(R)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ig extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const og=function(r){const e=Yh(r);return Xh.encodeByteArray(e,!0)},gi=function(r){return og(r).replace(/\./g,"")},Zh=function(r){try{return Xh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=()=>ag().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof Yl>"u")return;const r=Yl.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ug=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Zh(r[1]);return e&&JSON.parse(e)},Oi=()=>{try{return cg()||lg()||ug()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ed=r=>{var e,t;return(t=(e=Oi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},hg=r=>{const e=ed(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},td=()=>{var r;return(r=Oi())===null||r===void 0?void 0:r.config},nd=r=>{var e;return(e=Oi())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[gi(JSON.stringify(t)),gi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function mg(){var r;const e=(r=Oi())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function _g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){const r=Ie();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function rd(){return!mg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sd(){try{return typeof indexedDB=="object"}catch{return!1}}function Ig(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="FirebaseError";class it extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Tg,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Eg(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new it(s,c,n)}}function Eg(r,e){return r.replace(wg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const wg=/\{\$([^}]+)}/g;function bg(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Xr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Xl(i)&&Xl(o)){if(!Xr(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Xl(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ag(r,e){const t=new Sg(r,e);return t.subscribe.bind(t)}class Sg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Rg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Lo),s.error===void 0&&(s.error=Lo),s.complete===void 0&&(s.complete=Lo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Lo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(r){return r&&r._delegate?r._delegate:r}class Ft{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new dg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kg(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(r){return r===nn?void 0:r}function kg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(J||(J={}));const xg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Vg=J.INFO,Ng={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Lg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Ng[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ja{constructor(e){this.name=e,this._logLevel=Vg,this._logHandler=Lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Og=(r,e)=>e.some(t=>r instanceof t);let Zl,eu;function Mg(){return Zl||(Zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jg(){return eu||(eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const id=new WeakMap,na=new WeakMap,od=new WeakMap,Oo=new WeakMap,Fa=new WeakMap;function Fg(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Lt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&id.set(t,r)}).catch(()=>{}),Fa.set(e,r),e}function Bg(r){if(na.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});na.set(r,e)}let ra={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return na.get(r);if(e==="objectStoreNames")return r.objectStoreNames||od.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ug(r){ra=r(ra)}function $g(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Mo(this),e,...t);return od.set(n,e.sort?e.sort():[e]),Lt(n)}:jg().includes(r)?function(...e){return r.apply(Mo(this),e),Lt(id.get(this))}:function(...e){return Lt(r.apply(Mo(this),e))}}function qg(r){return typeof r=="function"?$g(r):(r instanceof IDBTransaction&&Bg(r),Og(r,Mg())?new Proxy(r,ra):r)}function Lt(r){if(r instanceof IDBRequest)return Fg(r);if(Oo.has(r))return Oo.get(r);const e=qg(r);return e!==r&&(Oo.set(r,e),Fa.set(e,r)),e}const Mo=r=>Fa.get(r);function zg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Lt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Lt(o.result),l.oldVersion,l.newVersion,Lt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Gg=["get","getKey","getAll","getAllKeys","count"],Hg=["put","add","delete","clear"],jo=new Map;function tu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(jo.get(e))return jo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Hg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Gg.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return jo.set(e,i),i}Ug(r=>({...r,get:(e,t,n)=>tu(e,t)||r.get(e,t,n),has:(e,t)=>!!tu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Wg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Wg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sa="@firebase/app",nu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new ja("@firebase/app"),Qg="@firebase/app-compat",Jg="@firebase/analytics-compat",Yg="@firebase/analytics",Xg="@firebase/app-check-compat",Zg="@firebase/app-check",ey="@firebase/auth",ty="@firebase/auth-compat",ny="@firebase/database",ry="@firebase/data-connect",sy="@firebase/database-compat",iy="@firebase/functions",oy="@firebase/functions-compat",ay="@firebase/installations",cy="@firebase/installations-compat",ly="@firebase/messaging",uy="@firebase/messaging-compat",hy="@firebase/performance",dy="@firebase/performance-compat",fy="@firebase/remote-config",py="@firebase/remote-config-compat",my="@firebase/storage",gy="@firebase/storage-compat",yy="@firebase/firestore",_y="@firebase/vertexai-preview",vy="@firebase/firestore-compat",Iy="firebase",Ty="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="[DEFAULT]",Ey={[sa]:"fire-core",[Qg]:"fire-core-compat",[Yg]:"fire-analytics",[Jg]:"fire-analytics-compat",[Zg]:"fire-app-check",[Xg]:"fire-app-check-compat",[ey]:"fire-auth",[ty]:"fire-auth-compat",[ny]:"fire-rtdb",[ry]:"fire-data-connect",[sy]:"fire-rtdb-compat",[iy]:"fire-fn",[oy]:"fire-fn-compat",[ay]:"fire-iid",[cy]:"fire-iid-compat",[ly]:"fire-fcm",[uy]:"fire-fcm-compat",[hy]:"fire-perf",[dy]:"fire-perf-compat",[fy]:"fire-rc",[py]:"fire-rc-compat",[my]:"fire-gcs",[gy]:"fire-gcs-compat",[yy]:"fire-fst",[vy]:"fire-fst-compat",[_y]:"fire-vertex","fire-js":"fire-js",[Iy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map,wy=new Map,oa=new Map;function ru(r,e){try{r.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function fn(r){const e=r.name;if(oa.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,r);for(const t of yi.values())ru(t,r);for(const t of wy.values())ru(t,r);return!0}function Mi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ut(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new fs("app","Firebase",by);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=Ty;function ad(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ia,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(t||(t=td()),!t)throw Ot.create("no-options");const i=yi.get(s);if(i){if(Xr(t,i.options)&&Xr(n,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new Dg(s);for(const l of oa.values())o.addComponent(l);const c=new Ay(t,n,o);return yi.set(s,c),c}function cd(r=ia){const e=yi.get(r);if(!e&&r===ia&&td())return ad();if(!e)throw Ot.create("no-app",{appName:r});return e}function et(r,e,t){var n;let s=(n=Ey[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(c.join(" "));return}fn(new Ft(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="firebase-heartbeat-database",Ry=1,Zr="firebase-heartbeat-store";let Fo=null;function ld(){return Fo||(Fo=zg(Sy,Ry,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Zr)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ot.create("idb-open",{originalErrorMessage:r.message})})),Fo}async function Py(r){try{const t=(await ld()).transaction(Zr),n=await t.objectStore(Zr).get(ud(r));return await t.done,n}catch(e){if(e instanceof it)gt.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function su(r,e){try{const n=(await ld()).transaction(Zr,"readwrite");await n.objectStore(Zr).put(e,ud(r)),await n.done}catch(t){if(t instanceof it)gt.warn(t.message);else{const n=Ot.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(n.message)}}}function ud(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=1024,ky=30*24*60*60*1e3;class Dy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vy(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=iu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=ky}),this._storage.overwrite(this._heartbeatsCache))}catch(n){gt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=iu(),{heartbeatsToSend:n,unsentEntries:s}=xy(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gt.warn(t),""}}}function iu(){return new Date().toISOString().substring(0,10)}function xy(r,e=Cy){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ou(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ou(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Vy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?Ig().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Py(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ou(r){return gi(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(r){fn(new Ft("platform-logger",e=>new Kg(e),"PRIVATE")),fn(new Ft("heartbeat",e=>new Dy(e),"PRIVATE")),et(sa,nu,r),et(sa,nu,"esm2017"),et("fire-js","")}Ny("");var Ly="firebase",Oy="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(Ly,Oy,"app");var au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ln,hd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(E,w,A){for(var I=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)I[ot-2]=arguments[ot];return g.prototype[w].apply(E,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,_){_||(_=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(w=0;16>w;++w)E[w]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],w=v.g[2];var A=v.g[3],I=g+(A^_&(w^A))+E[0]+3614090360&4294967295;g=_+(I<<7&4294967295|I>>>25),I=A+(w^g&(_^w))+E[1]+3905402710&4294967295,A=g+(I<<12&4294967295|I>>>20),I=w+(_^A&(g^_))+E[2]+606105819&4294967295,w=A+(I<<17&4294967295|I>>>15),I=_+(g^w&(A^g))+E[3]+3250441966&4294967295,_=w+(I<<22&4294967295|I>>>10),I=g+(A^_&(w^A))+E[4]+4118548399&4294967295,g=_+(I<<7&4294967295|I>>>25),I=A+(w^g&(_^w))+E[5]+1200080426&4294967295,A=g+(I<<12&4294967295|I>>>20),I=w+(_^A&(g^_))+E[6]+2821735955&4294967295,w=A+(I<<17&4294967295|I>>>15),I=_+(g^w&(A^g))+E[7]+4249261313&4294967295,_=w+(I<<22&4294967295|I>>>10),I=g+(A^_&(w^A))+E[8]+1770035416&4294967295,g=_+(I<<7&4294967295|I>>>25),I=A+(w^g&(_^w))+E[9]+2336552879&4294967295,A=g+(I<<12&4294967295|I>>>20),I=w+(_^A&(g^_))+E[10]+4294925233&4294967295,w=A+(I<<17&4294967295|I>>>15),I=_+(g^w&(A^g))+E[11]+2304563134&4294967295,_=w+(I<<22&4294967295|I>>>10),I=g+(A^_&(w^A))+E[12]+1804603682&4294967295,g=_+(I<<7&4294967295|I>>>25),I=A+(w^g&(_^w))+E[13]+4254626195&4294967295,A=g+(I<<12&4294967295|I>>>20),I=w+(_^A&(g^_))+E[14]+2792965006&4294967295,w=A+(I<<17&4294967295|I>>>15),I=_+(g^w&(A^g))+E[15]+1236535329&4294967295,_=w+(I<<22&4294967295|I>>>10),I=g+(w^A&(_^w))+E[1]+4129170786&4294967295,g=_+(I<<5&4294967295|I>>>27),I=A+(_^w&(g^_))+E[6]+3225465664&4294967295,A=g+(I<<9&4294967295|I>>>23),I=w+(g^_&(A^g))+E[11]+643717713&4294967295,w=A+(I<<14&4294967295|I>>>18),I=_+(A^g&(w^A))+E[0]+3921069994&4294967295,_=w+(I<<20&4294967295|I>>>12),I=g+(w^A&(_^w))+E[5]+3593408605&4294967295,g=_+(I<<5&4294967295|I>>>27),I=A+(_^w&(g^_))+E[10]+38016083&4294967295,A=g+(I<<9&4294967295|I>>>23),I=w+(g^_&(A^g))+E[15]+3634488961&4294967295,w=A+(I<<14&4294967295|I>>>18),I=_+(A^g&(w^A))+E[4]+3889429448&4294967295,_=w+(I<<20&4294967295|I>>>12),I=g+(w^A&(_^w))+E[9]+568446438&4294967295,g=_+(I<<5&4294967295|I>>>27),I=A+(_^w&(g^_))+E[14]+3275163606&4294967295,A=g+(I<<9&4294967295|I>>>23),I=w+(g^_&(A^g))+E[3]+4107603335&4294967295,w=A+(I<<14&4294967295|I>>>18),I=_+(A^g&(w^A))+E[8]+1163531501&4294967295,_=w+(I<<20&4294967295|I>>>12),I=g+(w^A&(_^w))+E[13]+2850285829&4294967295,g=_+(I<<5&4294967295|I>>>27),I=A+(_^w&(g^_))+E[2]+4243563512&4294967295,A=g+(I<<9&4294967295|I>>>23),I=w+(g^_&(A^g))+E[7]+1735328473&4294967295,w=A+(I<<14&4294967295|I>>>18),I=_+(A^g&(w^A))+E[12]+2368359562&4294967295,_=w+(I<<20&4294967295|I>>>12),I=g+(_^w^A)+E[5]+4294588738&4294967295,g=_+(I<<4&4294967295|I>>>28),I=A+(g^_^w)+E[8]+2272392833&4294967295,A=g+(I<<11&4294967295|I>>>21),I=w+(A^g^_)+E[11]+1839030562&4294967295,w=A+(I<<16&4294967295|I>>>16),I=_+(w^A^g)+E[14]+4259657740&4294967295,_=w+(I<<23&4294967295|I>>>9),I=g+(_^w^A)+E[1]+2763975236&4294967295,g=_+(I<<4&4294967295|I>>>28),I=A+(g^_^w)+E[4]+1272893353&4294967295,A=g+(I<<11&4294967295|I>>>21),I=w+(A^g^_)+E[7]+4139469664&4294967295,w=A+(I<<16&4294967295|I>>>16),I=_+(w^A^g)+E[10]+3200236656&4294967295,_=w+(I<<23&4294967295|I>>>9),I=g+(_^w^A)+E[13]+681279174&4294967295,g=_+(I<<4&4294967295|I>>>28),I=A+(g^_^w)+E[0]+3936430074&4294967295,A=g+(I<<11&4294967295|I>>>21),I=w+(A^g^_)+E[3]+3572445317&4294967295,w=A+(I<<16&4294967295|I>>>16),I=_+(w^A^g)+E[6]+76029189&4294967295,_=w+(I<<23&4294967295|I>>>9),I=g+(_^w^A)+E[9]+3654602809&4294967295,g=_+(I<<4&4294967295|I>>>28),I=A+(g^_^w)+E[12]+3873151461&4294967295,A=g+(I<<11&4294967295|I>>>21),I=w+(A^g^_)+E[15]+530742520&4294967295,w=A+(I<<16&4294967295|I>>>16),I=_+(w^A^g)+E[2]+3299628645&4294967295,_=w+(I<<23&4294967295|I>>>9),I=g+(w^(_|~A))+E[0]+4096336452&4294967295,g=_+(I<<6&4294967295|I>>>26),I=A+(_^(g|~w))+E[7]+1126891415&4294967295,A=g+(I<<10&4294967295|I>>>22),I=w+(g^(A|~_))+E[14]+2878612391&4294967295,w=A+(I<<15&4294967295|I>>>17),I=_+(A^(w|~g))+E[5]+4237533241&4294967295,_=w+(I<<21&4294967295|I>>>11),I=g+(w^(_|~A))+E[12]+1700485571&4294967295,g=_+(I<<6&4294967295|I>>>26),I=A+(_^(g|~w))+E[3]+2399980690&4294967295,A=g+(I<<10&4294967295|I>>>22),I=w+(g^(A|~_))+E[10]+4293915773&4294967295,w=A+(I<<15&4294967295|I>>>17),I=_+(A^(w|~g))+E[1]+2240044497&4294967295,_=w+(I<<21&4294967295|I>>>11),I=g+(w^(_|~A))+E[8]+1873313359&4294967295,g=_+(I<<6&4294967295|I>>>26),I=A+(_^(g|~w))+E[15]+4264355552&4294967295,A=g+(I<<10&4294967295|I>>>22),I=w+(g^(A|~_))+E[6]+2734768916&4294967295,w=A+(I<<15&4294967295|I>>>17),I=_+(A^(w|~g))+E[13]+1309151649&4294967295,_=w+(I<<21&4294967295|I>>>11),I=g+(w^(_|~A))+E[4]+4149444226&4294967295,g=_+(I<<6&4294967295|I>>>26),I=A+(_^(g|~w))+E[11]+3174756917&4294967295,A=g+(I<<10&4294967295|I>>>22),I=w+(g^(A|~_))+E[2]+718787259&4294967295,w=A+(I<<15&4294967295|I>>>17),I=_+(A^(w|~g))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+w&4294967295,v.g[3]=v.g[3]+A&4294967295}n.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,E=this.B,w=this.h,A=0;A<g;){if(w==0)for(;A<=_;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<g;)if(E[w++]=v.charCodeAt(A++),w==this.blockSize){s(this,E),w=0;break}}else for(;A<g;)if(E[w++]=v[A++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var E=0;32>E;E+=8)v[_++]=this.g[g]>>>E&255;return v};function i(v,g){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function o(v,g){this.h=g;for(var _=[],E=!0,w=v.length-1;0<=w;w--){var A=v[w]|0;E&&A==g||(_[w]=A,E=!1)}this.g=_}var c={};function l(v){return-128<=v&&128>v?i(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return C(h(-v));for(var g=[],_=1,E=0;v>=_;E++)g[E]=v/_|0,_*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return C(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),E=p,w=0;w<v.length;w+=8){var A=Math.min(8,v.length-w),I=parseInt(v.substring(w,w+A),g);8>A?(A=h(Math.pow(g,A)),E=E.j(A).add(h(I))):(E=E.j(_),E=E.add(h(I)))}return E}var p=l(0),y=l(1),T=l(16777216);r=o.prototype,r.m=function(){if(x(this))return-C(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var E=this.i(_);v+=(0<=E?E:4294967296+E)*g,g*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(x(this))return"-"+C(this).toString(v);for(var g=h(Math.pow(v,6)),_=this,E="";;){var w=L(_,g).g;_=U(_,w.j(g));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=w,R(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function x(v){return v.h==-1}r.l=function(v){return v=U(this,v),x(v)?-1:R(v)?0:1};function C(v){for(var g=v.g.length,_=[],E=0;E<g;E++)_[E]=~v.g[E];return new o(_,~v.h).add(y)}r.abs=function(){return x(this)?C(this):this},r.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],E=0,w=0;w<=g;w++){var A=E+(this.i(w)&65535)+(v.i(w)&65535),I=(A>>>16)+(this.i(w)>>>16)+(v.i(w)>>>16);E=I>>>16,A&=65535,I&=65535,_[w]=I<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function U(v,g){return v.add(C(g))}r.j=function(v){if(R(this)||R(v))return p;if(x(this))return x(v)?C(this).j(C(v)):C(C(this).j(v));if(x(v))return C(this.j(C(v)));if(0>this.l(T)&&0>v.l(T))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<v.g.length;w++){var A=this.i(E)>>>16,I=this.i(E)&65535,ot=v.i(w)>>>16,mr=v.i(w)&65535;_[2*E+2*w]+=I*mr,$(_,2*E+2*w),_[2*E+2*w+1]+=A*mr,$(_,2*E+2*w+1),_[2*E+2*w+1]+=I*ot,$(_,2*E+2*w+1),_[2*E+2*w+2]+=A*ot,$(_,2*E+2*w+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new o(_,0)};function $(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function F(v,g){this.g=v,this.h=g}function L(v,g){if(R(g))throw Error("division by zero");if(R(v))return new F(p,p);if(x(v))return g=L(C(v),g),new F(C(g.g),C(g.h));if(x(g))return g=L(v,C(g)),new F(C(g.g),g.h);if(30<v.g.length){if(x(v)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,E=g;0>=E.l(v);)_=D(_),E=D(E);var w=N(_,1),A=N(E,1);for(E=N(E,2),_=N(_,2);!R(E);){var I=A.add(E);0>=I.l(v)&&(w=w.add(_),A=I),E=N(E,1),_=N(_,1)}return g=U(v,w.j(g)),new F(w,g)}for(w=p;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(_),I=A.j(g);x(I)||0<I.l(v);)_-=E,A=h(_),I=A.j(g);R(A)&&(A=y),w=w.add(A),v=U(v,I)}return new F(w,v)}r.A=function(v){return L(this,v).h},r.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)&v.i(E);return new o(_,this.h&v.h)},r.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)|v.i(E);return new o(_,this.h|v.h)},r.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)^v.i(E);return new o(_,this.h^v.h)};function D(v){for(var g=v.g.length+1,_=[],E=0;E<g;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new o(_,v.h)}function N(v,g){var _=g>>5;g%=32;for(var E=v.g.length-_,w=[],A=0;A<E;A++)w[A]=0<g?v.i(A+_)>>>g|v.i(A+_+1)<<32-g:v.i(A+_);return new o(w,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,hd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ln=o}).apply(typeof au<"u"?au:typeof self<"u"?self:typeof window<"u"?window:{});var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dd,Fr,fd,ri,aa,pd,md,gd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gs=="object"&&Gs];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(u,b)}}return function(){return a.apply(u,arguments)}}function y(a,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function T(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,P){for(var M=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)M[ie-2]=arguments[ie];return u.prototype[b].apply(m,M)}}function x(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function C(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const b=a.length||0,P=m.length||0;a.length=b+P;for(let M=0;M<P;M++)a[b+M]=m[M]}else a.push(m)}}class U{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var D=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function N(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function v(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let P=0;P<_.length;P++)d=_[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function w(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function I(){var a=uo;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ot{constructor(){this.h=this.g=null}add(u,d){const m=mr.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var mr=new U(()=>new Em,a=>a.reset());class Em{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let gr,yr=!1,uo=new ot,Jc=()=>{const a=c.Promise.resolve(void 0);gr=()=>{a.then(wm)}};var wm=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){A(d)}var u=mr;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}yr=!1};function It(){this.s=this.s,this.C=this.C}It.prototype.s=!1,It.prototype.ma=function(){this.s||(this.s=!0,this.N())},It.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var bm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function _r(a,u){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(D){e:{try{L(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Am[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_r.aa.h.call(this)}}R(_r,Ae);var Am={2:"touch",3:"pen",4:"mouse"};_r.prototype.h=function(){_r.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ss="closure_listenable_"+(1e6*Math.random()|0),Sm=0;function Rm(a,u,d,m,b){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=b,this.key=++Sm,this.da=this.fa=!1}function Rs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ps(a){this.src=a,this.g={},this.h=0}Ps.prototype.add=function(a,u,d,m,b){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var M=fo(a,u,m,b);return-1<M?(u=a[M],d||(u.fa=!1)):(u=new Rm(u,this.src,P,!!m,b),u.fa=d,a.push(u)),u};function ho(a,u){var d=u.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(m,b,1),P&&(Rs(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function fo(a,u,d,m){for(var b=0;b<a.length;++b){var P=a[b];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return b}return-1}var po="closure_lm_"+(1e6*Math.random()|0),mo={};function Yc(a,u,d,m,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)Yc(a,u[P],d,m,b);return null}return d=el(d),a&&a[Ss]?a.K(u,d,h(m)?!!m.capture:!1,b):Pm(a,u,d,!1,m,b)}function Pm(a,u,d,m,b,P){if(!u)throw Error("Invalid event type");var M=h(b)?!!b.capture:!!b,ie=yo(a);if(ie||(a[po]=ie=new Ps(a)),d=ie.add(u,d,m,M,P),d.proxy)return d;if(m=Cm(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)bm||(b=M),b===void 0&&(b=!1),a.addEventListener(u.toString(),m,b);else if(a.attachEvent)a.attachEvent(Zc(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Cm(){function a(d){return u.call(a.src,a.listener,d)}const u=km;return a}function Xc(a,u,d,m,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)Xc(a,u[P],d,m,b);else m=h(m)?!!m.capture:!!m,d=el(d),a&&a[Ss]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=fo(P,d,m,b),-1<d&&(Rs(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=yo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=fo(u,d,m,b)),(d=-1<a?u[a]:null)&&go(d))}function go(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ss])ho(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(Zc(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=yo(u))?(ho(d,a),d.h==0&&(d.src=null,u[po]=null)):Rs(a)}}}function Zc(a){return a in mo?mo[a]:mo[a]="on"+a}function km(a,u){if(a.da)a=!0;else{u=new _r(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&go(a),a=d.call(m,u)}return a}function yo(a){return a=a[po],a instanceof Ps?a:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function el(a){return typeof a=="function"?a:(a[_o]||(a[_o]=function(u){return a.handleEvent(u)}),a[_o])}function Se(){It.call(this),this.i=new Ps(this),this.M=this,this.F=null}R(Se,It),Se.prototype[Ss]=!0,Se.prototype.removeEventListener=function(a,u,d,m){Xc(this,a,u,d,m)};function Ve(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ae(u,a);else if(u instanceof Ae)u.target=u.target||a;else{var b=u;u=new Ae(m,a),E(u,b)}if(b=!0,d)for(var P=d.length-1;0<=P;P--){var M=u.g=d[P];b=Cs(M,m,!0,u)&&b}if(M=u.g=a,b=Cs(M,m,!0,u)&&b,b=Cs(M,m,!1,u)&&b,d)for(P=0;P<d.length;P++)M=u.g=d[P],b=Cs(M,m,!1,u)&&b}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Rs(d[m]);delete a.g[u],a.h--}}this.F=null},Se.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},Se.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Cs(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var M=u[P];if(M&&!M.da&&M.capture==d){var ie=M.listener,we=M.ha||M.src;M.fa&&ho(a.i,M),b=ie.call(we,m)!==!1&&b}}return b&&!m.defaultPrevented}function tl(a,u,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function nl(a){a.g=tl(()=>{a.g=null,a.i&&(a.i=!1,nl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Dm extends It{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:nl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vr(a){It.call(this),this.h=a,this.g={}}R(vr,It);var rl=[];function sl(a){N(a.g,function(u,d){this.g.hasOwnProperty(d)&&go(u)},a),a.g={}}vr.prototype.N=function(){vr.aa.N.call(this),sl(this)},vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vo=c.JSON.stringify,xm=c.JSON.parse,Vm=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Io(){}Io.prototype.h=null;function il(a){return a.h||(a.h=a.i())}function ol(){}var Ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function To(){Ae.call(this,"d")}R(To,Ae);function Eo(){Ae.call(this,"c")}R(Eo,Ae);var Wt={},al=null;function ks(){return al=al||new Se}Wt.La="serverreachability";function cl(a){Ae.call(this,Wt.La,a)}R(cl,Ae);function Tr(a){const u=ks();Ve(u,new cl(u))}Wt.STAT_EVENT="statevent";function ll(a,u){Ae.call(this,Wt.STAT_EVENT,a),this.stat=u}R(ll,Ae);function Ne(a){const u=ks();Ve(u,new ll(u,a))}Wt.Ma="timingevent";function ul(a,u){Ae.call(this,Wt.Ma,a),this.size=u}R(ul,Ae);function Er(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function wr(){this.g=!0}wr.prototype.xa=function(){this.g=!1};function Nm(a,u,d,m,b,P){a.info(function(){if(a.g)if(P)for(var M="",ie=P.split("&"),we=0;we<ie.length;we++){var ee=ie[we].split("=");if(1<ee.length){var Re=ee[0];ee=ee[1];var Pe=Re.split("_");M=2<=Pe.length&&Pe[1]=="type"?M+(Re+"="+ee+"&"):M+(Re+"=redacted&")}}else M=null;else M=P;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+u+`
`+d+`
`+M})}function Lm(a,u,d,m,b,P,M){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+u+`
`+d+`
`+P+" "+M})}function Cn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Mm(a,d)+(m?" "+m:"")})}function Om(a,u){a.info(function(){return"TIMEOUT: "+u})}wr.prototype.info=function(){};function Mm(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var M=1;M<b.length;M++)b[M]=""}}}}return vo(d)}catch{return u}}var Ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wo;function xs(){}R(xs,Io),xs.prototype.g=function(){return new XMLHttpRequest},xs.prototype.i=function(){return{}},wo=new xs;function Tt(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var fl={},bo={};function Ao(a,u,d){a.L=1,a.v=Os(at(u)),a.m=d,a.P=!0,pl(a,null)}function pl(a,u){a.F=Date.now(),Vs(a),a.A=at(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Pl(d.i,"t",m),a.C=0,d=a.j.J,a.h=new dl,a.g=Hl(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Dm(y(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(rl[0]=b.toString()),b=rl);for(var P=0;P<b.length;P++){var M=Yc(d,b[P],m||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Tr(),Nm(a.i,a.u,a.A,a.l,a.R,a.m)}Tt.prototype.ca=function(a){a=a.target;const u=this.M;u&&ct(a)==3?u.j():this.Y(a)},Tt.prototype.Y=function(a){try{if(a==this.g)e:{const Pe=ct(this.g);var u=this.g.Ba();const xn=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||Ll(this.g)))){this.J||Pe!=4||u==7||(u==8||0>=xn?Tr(3):Tr(2)),So(this);var d=this.g.Z();this.X=d;t:if(ml(this)){var m=Ll(this.g);a="";var b=m.length,P=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),br(this);var M="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==b-1)});m.length=0,this.h.g+=a,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,Lm(this.i,this.u,this.A,this.l,this.R,Pe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,we=this.g;if((ie=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(ie)){var ee=ie;break t}}ee=null}if(d=ee)Cn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ro(this,d);else{this.o=!1,this.s=3,Ne(12),Qt(this),br(this);break e}}if(this.P){d=!0;let We;for(;!this.J&&this.C<M.length;)if(We=jm(this,M),We==bo){Pe==4&&(this.s=4,Ne(14),d=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==fl){this.s=4,Ne(15),Cn(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else Cn(this.i,this.l,We,null),Ro(this,We);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||M.length!=0||this.h.h||(this.s=1,Ne(16),d=!1),this.o=this.o&&d,!d)Cn(this.i,this.l,M,"[Invalid Chunked Response]"),Qt(this),br(this);else if(0<M.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Vo(Re),Re.M=!0,Ne(11))}}else Cn(this.i,this.l,M,null),Ro(this,M);Pe==4&&Qt(this),this.o&&!this.J&&(Pe==4?$l(this.j,this):(this.o=!1,Vs(this)))}else tg(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),Qt(this),br(this)}}}catch{}finally{}};function ml(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jm(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?bo:(d=Number(u.substring(d,m)),isNaN(d)?fl:(m+=1,m+d>u.length?bo:(u=u.slice(m,m+d),a.C=m+d,u)))}Tt.prototype.cancel=function(){this.J=!0,Qt(this)};function Vs(a){a.S=Date.now()+a.I,gl(a,a.I)}function gl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Er(y(a.ba,a),u)}function So(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Tt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Om(this.i,this.A),this.L!=2&&(Tr(),Ne(17)),Qt(this),this.s=2,br(this)):gl(this,this.S-a)};function br(a){a.j.G==0||a.J||$l(a.j,a)}function Qt(a){So(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,sl(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ro(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Po(d.h,a))){if(!a.K&&Po(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)$s(d),Bs(d);else break e;xo(d),Ne(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Er(y(d.Za,d),6e3));if(1>=vl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Yt(d,11)}else if((a.K||d.g==a)&&$s(d),!$(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let ee=b[u];if(d.T=ee[0],ee=ee[1],d.G==2)if(ee[0]=="c"){d.K=ee[1],d.ia=ee[2];const Re=ee[3];Re!=null&&(d.la=Re,d.j.info("VER="+d.la));const Pe=ee[4];Pe!=null&&(d.Aa=Pe,d.j.info("SVER="+d.Aa));const xn=ee[5];xn!=null&&typeof xn=="number"&&0<xn&&(m=1.5*xn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const We=a.g;if(We){const zs=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zs){var P=m.h;P.g||zs.indexOf("spdy")==-1&&zs.indexOf("quic")==-1&&zs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Co(P,P.h),P.h=null))}if(m.D){const No=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(m.ya=No,ae(m.I,m.D,No))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var M=a;if(m.qa=Gl(m,m.J?m.ia:null,m.W),M.K){Il(m.h,M);var ie=M,we=m.L;we&&(ie.I=we),ie.B&&(So(ie),Vs(ie)),m.g=M}else Bl(m);0<d.i.length&&Us(d)}else ee[0]!="stop"&&ee[0]!="close"||Yt(d,7);else d.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?Yt(d,7):Do(d):ee[0]!="noop"&&d.l&&d.l.ta(ee),d.v=0)}}Tr(4)}catch{}}var Fm=class{constructor(a,u){this.g=a,this.map=u}};function yl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _l(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vl(a){return a.h?1:a.g?a.g.size:0}function Po(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Co(a,u){a.g?a.g.add(u):a.h=u}function Il(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}yl.prototype.cancel=function(){if(this.i=Tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return x(a.i)}function Bm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Um(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function El(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Um(a),m=Bm(a),b=m.length,P=0;P<b;P++)u.call(void 0,m[P],d&&d[P],a)}var wl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $m(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var P=a[d].substring(0,m);b=a[d].substring(m+1)}else P=a[d];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Jt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Jt){this.h=a.h,Ns(this,a.j),this.o=a.o,this.g=a.g,Ls(this,a.s),this.l=a.l;var u=a.i,d=new Rr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),bl(this,d),this.m=a.m}else a&&(u=String(a).match(wl))?(this.h=!1,Ns(this,u[1]||"",!0),this.o=Ar(u[2]||""),this.g=Ar(u[3]||"",!0),Ls(this,u[4]),this.l=Ar(u[5]||"",!0),bl(this,u[6]||"",!0),this.m=Ar(u[7]||"")):(this.h=!1,this.i=new Rr(null,this.h))}Jt.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Sr(u,Al,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Sr(u,Al,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Sr(d,d.charAt(0)=="/"?Gm:zm,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Sr(d,Km)),a.join("")};function at(a){return new Jt(a)}function Ns(a,u,d){a.j=d?Ar(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ls(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function bl(a,u,d){u instanceof Rr?(a.i=u,Wm(a.i,a.h)):(d||(u=Sr(u,Hm)),a.i=new Rr(u,a.h))}function ae(a,u,d){a.i.set(u,d)}function Os(a){return ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ar(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Sr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,qm),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Al=/[#\/\?@]/g,zm=/[#\?:]/g,Gm=/[#\?]/g,Hm=/[#\?@]/g,Km=/#/g;function Rr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Et(a){a.g||(a.g=new Map,a.h=0,a.i&&$m(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Rr.prototype,r.add=function(a,u){Et(this),this.i=null,a=kn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Sl(a,u){Et(a),u=kn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Rl(a,u){return Et(a),u=kn(a,u),a.g.has(u)}r.forEach=function(a,u){Et(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(u,b,m,this)},this)},this)},r.na=function(){Et(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const b=a[m];for(let P=0;P<b.length;P++)d.push(u[m])}return d},r.V=function(a){Et(this);let u=[];if(typeof a=="string")Rl(this,a)&&(u=u.concat(this.g.get(kn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return Et(this),this.i=null,a=kn(this,a),Rl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Pl(a,u,d){Sl(a,u),0<d.length&&(a.i=null,a.g.set(kn(a,u),x(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var b=P;M[m]!==""&&(b+="="+encodeURIComponent(String(M[m]))),a.push(b)}}return this.i=a.join("&")};function kn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Wm(a,u){u&&!a.j&&(Et(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(Sl(this,m),Pl(this,b,d))},a)),a.j=u}function Qm(a,u){const d=new wr;if(c.Image){const m=new Image;m.onload=T(wt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=T(wt,d,"TestLoadImage: error",!1,u,m),m.onabort=T(wt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=T(wt,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Jm(a,u){const d=new wr,m=new AbortController,b=setTimeout(()=>{m.abort(),wt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(b),P.ok?wt(d,"TestPingServer: ok",!0,u):wt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),wt(d,"TestPingServer: error",!1,u)})}function wt(a,u,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function Ym(){this.g=new Vm}function Xm(a,u,d){const m=d||"";try{El(a,function(b,P){let M=b;h(b)&&(M=vo(b)),u.push(m+P+"="+encodeURIComponent(M))})}catch(b){throw u.push(m+"type="+encodeURIComponent("_badmap")),b}}function Ms(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Ms,Io),Ms.prototype.g=function(){return new js(this.l,this.j)},Ms.prototype.i=function(a){return function(){return a}}({});function js(a,u){Se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(js,Se),r=js.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Cr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Pr(this):Cr(this),this.readyState==3&&Cl(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Pr(this))},r.Qa=function(a){this.g&&(this.response=a,Pr(this))},r.ga=function(){this.g&&Pr(this)};function Pr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Cr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(js.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function kl(a){let u="";return N(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function ko(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=kl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ae(a,u,d))}function he(a){Se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(he,Se);var Zm=/^https?$/i,eg=["POST","PUT"];r=he.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wo.g(),this.v=this.o?il(this.o):il(wo),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){Dl(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(eg,u,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of d)this.g.setRequestHeader(P,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nl(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Dl(this,P)}};function Dl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,xl(a),Fs(a)}function xl(a){a.A||(a.A=!0,Ve(a,"complete"),Ve(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ve(this,"complete"),Ve(this,"abort"),Fs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fs(this,!0)),he.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Vl(this):this.bb())},r.bb=function(){Vl(this)};function Vl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ct(a)!=4||a.Z()!=2)){if(a.u&&ct(a)==4)tl(a.Ea,0,a);else if(Ve(a,"readystatechange"),ct(a)==4){a.h=!1;try{const M=a.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=M===0){var b=String(a.D).match(wl)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),m=!Zm.test(b?b.toLowerCase():"")}d=m}if(d)Ve(a,"complete"),Ve(a,"success");else{a.m=6;try{var P=2<ct(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",xl(a)}}finally{Fs(a)}}}}function Fs(a,u){if(a.g){Nl(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Ve(a,"ready");try{d.onreadystatechange=m}catch{}}}function Nl(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function ct(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),xm(u)}};function Ll(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function tg(a){const u={};a=(a.g&&2<=ct(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if($(a[m]))continue;var d=w(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[b]||[];u[b]=P,P.push(d)}v(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Ol(a){this.Aa=0,this.i=[],this.j=new wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kr("baseRetryDelayMs",5e3,a),this.cb=kr("retryDelaySeedMs",1e4,a),this.Wa=kr("forwardChannelMaxRetries",2,a),this.wa=kr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yl(a&&a.concurrentRequestLimit),this.Da=new Ym,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ol.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){Ne(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Gl(this,null,this.W),Us(this)};function Do(a){if(Ml(a),a.G==3){var u=a.U++,d=at(a.I);if(ae(d,"SID",a.K),ae(d,"RID",u),ae(d,"TYPE","terminate"),Dr(a,d),u=new Tt(a,a.j,u),u.L=2,u.v=Os(at(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Hl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Vs(u)}zl(a)}function Bs(a){a.g&&(Vo(a),a.g.cancel(),a.g=null)}function Ml(a){Bs(a),a.u&&(c.clearTimeout(a.u),a.u=null),$s(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Us(a){if(!_l(a.h)&&!a.s){a.s=!0;var u=a.Ga;gr||Jc(),yr||(gr(),yr=!0),uo.add(u,a),a.B=0}}function ng(a,u){return vl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Er(y(a.Ga,a,u),ql(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Tt(this,this.j,a);let P=this.o;if(this.S&&(P?(P=g(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Fl(this,b,u),d=at(this.I),ae(d,"RID",a),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),Dr(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(kl(P)))+"&"+u:this.m&&ko(d,this.m,P)),Co(this.h,b),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",u),ae(d,"SID","null"),b.T=!0,Ao(b,d,null)):Ao(b,d,u),this.G=2}}else this.G==3&&(a?jl(this,a):this.i.length==0||_l(this.h)||jl(this))};function jl(a,u){var d;u?d=u.l:d=a.U++;const m=at(a.I);ae(m,"SID",a.K),ae(m,"RID",d),ae(m,"AID",a.T),Dr(a,m),a.m&&a.o&&ko(m,a.m,a.o),d=new Tt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Fl(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Co(a.h,d),Ao(d,m,u)}function Dr(a,u){a.H&&N(a.H,function(d,m){ae(u,m,d)}),a.l&&El({},function(d,m){ae(u,m,d)})}function Fl(a,u,d){d=Math.min(a.i.length,d);var m=a.l?y(a.l.Na,a.l,a):null;e:{var b=a.i;let P=-1;for(;;){const M=["count="+d];P==-1?0<d?(P=b[0].g,M.push("ofs="+P)):P=0:M.push("ofs="+P);let ie=!0;for(let we=0;we<d;we++){let ee=b[we].g;const Re=b[we].map;if(ee-=P,0>ee)P=Math.max(0,b[we].g-100),ie=!1;else try{Xm(Re,M,"req"+ee+"_")}catch{m&&m(Re)}}if(ie){m=M.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Bl(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;gr||Jc(),yr||(gr(),yr=!0),uo.add(u,a),a.v=0}}function xo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Er(y(a.Fa,a),ql(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Er(y(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Bs(this),Ul(this))};function Vo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ul(a){a.g=new Tt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=at(a.qa);ae(u,"RID","rpc"),ae(u,"SID",a.K),ae(u,"AID",a.T),ae(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ae(u,"TO",a.ja),ae(u,"TYPE","xmlhttp"),Dr(a,u),a.m&&a.o&&ko(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Os(at(u)),d.m=null,d.P=!0,pl(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Bs(this),xo(this),Ne(19))};function $s(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function $l(a,u){var d=null;if(a.g==u){$s(a),Vo(a),a.g=null;var m=2}else if(Po(a.h,u))d=u.D,Il(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=a.B;m=ks(),Ve(m,new ul(m,d)),Us(a)}else Bl(a);else if(b=u.s,b==3||b==0&&0<u.X||!(m==1&&ng(a,u)||m==2&&xo(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),b){case 1:Yt(a,5);break;case 4:Yt(a,10);break;case 3:Yt(a,6);break;default:Yt(a,2)}}}function ql(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Yt(a,u){if(a.j.info("Error code "+u),u==2){var d=y(a.fb,a),m=a.Xa;const b=!m;m=new Jt(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ns(m,"https"),Os(m),b?Qm(m.toString(),d):Jm(m.toString(),d)}else Ne(2);a.G=0,a.l&&a.l.sa(u),zl(a),Ml(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function zl(a){if(a.G=0,a.ka=[],a.l){const u=Tl(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Gl(a,u,d){var m=d instanceof Jt?at(d):new Jt(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ls(m,m.s);else{var b=c.location;m=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new Jt(null);m&&Ns(P,m),u&&(P.g=u),b&&Ls(P,b),d&&(P.l=d),m=P}return d=a.D,u=a.ya,d&&u&&ae(m,d,u),ae(m,"VER",a.la),Dr(a,m),m}function Hl(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new he(new Ms({eb:d})):new he(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kl(){}r=Kl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function qs(){}qs.prototype.g=function(a,u){return new $e(a,u)};function $e(a,u){Se.call(this),this.g=new Ol(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Dn(this)}R($e,Se),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Do(this.g)},$e.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=vo(a),a=d);u.i.push(new Fm(u.Ya++,a)),u.G==3&&Us(u)},$e.prototype.N=function(){this.g.l=null,delete this.j,Do(this.g),delete this.g,$e.aa.N.call(this)};function Wl(a){To.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}R(Wl,To);function Ql(){Eo.call(this),this.status=1}R(Ql,Eo);function Dn(a){this.g=a}R(Dn,Kl),Dn.prototype.ua=function(){Ve(this.g,"a")},Dn.prototype.ta=function(a){Ve(this.g,new Wl(a))},Dn.prototype.sa=function(a){Ve(this.g,new Ql)},Dn.prototype.ra=function(){Ve(this.g,"b")},qs.prototype.createWebChannel=qs.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,gd=function(){return new qs},md=function(){return ks()},pd=Wt,aa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ds.NO_ERROR=0,Ds.TIMEOUT=8,Ds.HTTP_ERROR=6,ri=Ds,hl.COMPLETE="complete",fd=hl,ol.EventType=Ir,Ir.OPEN="a",Ir.CLOSE="b",Ir.ERROR="c",Ir.MESSAGE="d",Se.prototype.listen=Se.prototype.K,Fr=ol,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,dd=he}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});const cu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new ja("@firebase/firestore");function Mn(){return pn.logLevel}function V(r,...e){if(pn.logLevel<=J.DEBUG){const t=e.map(Ba);pn.debug(`Firestore (${lr}): ${r}`,...t)}}function ge(r,...e){if(pn.logLevel<=J.ERROR){const t=e.map(Ba);pn.error(`Firestore (${lr}): ${r}`,...t)}}function es(r,...e){if(pn.logLevel<=J.WARN){const t=e.map(Ba);pn.warn(`Firestore (${lr}): ${r}`,...t)}}function Ba(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(r="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+r;throw ge(e),new Error(e)}function G(r,e){r||q()}function z(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends it{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class Fy{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string"),new My(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new ke(e)}}class By{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uy{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new By(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new $y(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=zy(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function W(r,e){return r<e?-1:r>e?1:0}function Wn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function _d(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ue(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new ue(0,0))}static max(){return new H(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,n){t===void 0?t=0:t>e.length&&q(),n===void 0?n=e.length-t:n>e.length-t&&q(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ts.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ts?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class te extends ts{construct(e,t,n){return new te(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new j(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new te(t)}static emptyPath(){return new te([])}}const Gy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends ts{construct(e,t,n){return new le(e,t,n)}static isValidIdentifier(e){return Gy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new j(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(t)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(te.fromString(e))}static fromName(e){return new B(te.fromString(e).popFirst(5))}static empty(){return new B(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new te(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function ca(r){return r.fields.find(e=>e.kind===2)}function rn(r){return r.fields.filter(e=>e.kind!==2)}_i.UNKNOWN_ID=-1;class si{constructor(e,t){this.fieldPath=e,this.kind=t}}class ns{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ns(0,Ke.min())}}function vd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(n===1e9?new ue(t+1,0):new ue(t,n));return new Ke(s,B.empty(),e)}function Id(r){return new Ke(r.readTime,r.key,-1)}class Ke{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ke(H.min(),B.empty(),-1)}static max(){return new Ke(H.max(),B.empty(),-1)}}function Ua(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(r.documentKey,e.documentKey),t!==0?t:W(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ed{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(r){if(r.code!==k.FAILED_PRECONDITION||r.message!==Td)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,n)=>{t(e)})}static reject(e){return new S((t,n)=>{n(e)})}static waitFor(e){return new S((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const n of e)t=t.next(s=>s?S.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new S((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new S((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new mt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new qr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=$a(n.target.error);this.V.reject(new qr(e,s))}}static open(e,t,n,s){try{return new ji(t,e.transaction(s,n))}catch(i){throw new qr(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ky(t)}}class Mt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Mt.S(Ie())===12.2&&ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),sn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!sd())return!1;if(Mt.v())return!0;const e=Ie(),t=Mt.S(e),n=0<t&&t<10,s=wd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new j(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new j(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new qr(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=ji.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),S.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function wd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Hy{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return sn(this.B.delete())}}class qr extends j{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function zt(r){return r.name==="IndexedDbTransactionError"}class Ky{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),sn(n)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),sn(this.store.add(e))}get(e){return sn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),sn(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),sn(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new S((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new S((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new S((n,s)=>{t.onerror=i=>{const o=$a(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new Hy(c),h=t(c.primaryKey,c.value,l);if(h instanceof S){const f=h.catch(p=>(l.done(),S.reject(p)));n.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>S.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function sn(r){return new S((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=$a(n.target.error);t(s)}})}let lu=!1;function $a(r){const e=Mt.S(Ie());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return lu||(lu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Wy{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){zt(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await qt(t)}await this.X(6e4)})}}class Qy{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return S.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=Id(i);Ua(o,n)>0&&(n=o)}),new Ke(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Be.oe=-1;function Fi(r){return r==null}function rs(r){return r===0&&1/r==-1/0}function bd(r){return typeof r=="number"&&Number.isInteger(r)&&!rs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=uu(e)),e=Jy(r.get(t),e);return uu(e)}function Jy(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function uu(r){return r+""}function Je(r){const e=r.length;if(G(e>=2),e===2)return G(r.charAt(0)===""&&r.charAt(1)===""),te.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&q(),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:q()}i=o+2}return new te(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(r,e){return[r,Me(e)]}function Ad(r,e,t){return[r,Me(e),t]}const Yy={},Xy=["prefixPath","collectionGroup","readTime","documentId"],Zy=["prefixPath","collectionGroup","documentId"],e_=["collectionGroup","readTime","prefixPath","documentId"],t_=["canonicalId","targetId"],n_=["targetId","path"],r_=["path","targetId"],s_=["collectionId","parent"],i_=["indexId","uid"],o_=["uid","sequenceNumber"],a_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],c_=["indexId","uid","orderedDocumentKey"],l_=["userId","collectionPath","documentId"],u_=["userId","collectionPath","largestBatchId"],h_=["userId","collectionGroup","largestBatchId"],Sd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],d_=[...Sd,"documentOverlays"],Rd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Pd=Rd,qa=[...Pd,"indexConfiguration","indexState","indexEntries"],f_=qa,p_=[...qa,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Ed{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Te(r,e){const t=z(r);return Mt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function bn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Cd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hs(this.root,e,this.comparator,!0)}}class Hs{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??be.RED,this.left=s??be.EMPTY,this.right=i??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new be(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,n,s,i){return this}insert(e,t,n){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fu(this.data.getIterator())}getIteratorFrom(e){return new fu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class fu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new se(le.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kd("Invalid base64 string: "+i):i}}(e);return new ye(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const m_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yt(r){if(G(!!r),typeof r=="string"){let e=0;const t=m_.exec(r);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ce(r.seconds),nanos:ce(r.nanos)}}function ce(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Bt(r){return typeof r=="string"?ye.fromBase64String(r):ye.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ga(r){const e=r.mapValue.fields.__previous_value__;return za(e)?Ga(e):e}function ss(r){const e=yt(r.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,n,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class mn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},oi={nullValue:"NULL_VALUE"};function gn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?za(r)?4:Dd(r)?9007199254740991:Bi(r)?10:11:q()}function nt(r,e){if(r===e)return!0;const t=gn(r);if(t!==gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ss(r).isEqual(ss(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yt(s.timestampValue),c=yt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return ce(s.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ce(s.integerValue)===ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ce(s.doubleValue),c=ce(i.doubleValue);return o===c?rs(o)===rs(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Wn(r.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(du(o)!==du(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!nt(o[l],c[l])))return!1;return!0}(r,e);default:return q()}}function is(r,e){return(r.values||[]).find(t=>nt(t,e))!==void 0}function Ut(r,e){if(r===e)return 0;const t=gn(r),n=gn(e);if(t!==n)return W(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ce(i.integerValue||i.doubleValue),l=ce(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return pu(r.timestampValue,e.timestampValue);case 4:return pu(ss(r),ss(e));case 5:return W(r.stringValue,e.stringValue);case 6:return function(i,o){const c=Bt(i),l=Bt(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=W(c[h],l[h]);if(f!==0)return f}return W(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=W(ce(i.latitude),ce(o.latitude));return c!==0?c:W(ce(i.longitude),ce(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return mu(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},y=o.fields||{},T=(c=p.value)===null||c===void 0?void 0:c.arrayValue,R=(l=y.value)===null||l===void 0?void 0:l.arrayValue,x=W(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:mu(T,R)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Vt.mapValue&&o===Vt.mapValue)return 0;if(i===Vt.mapValue)return 1;if(o===Vt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const y=W(l[p],f[p]);if(y!==0)return y;const T=Ut(c[l[p]],h[f[p]]);if(T!==0)return T}return W(l.length,f.length)}(r.mapValue,e.mapValue);default:throw q()}}function pu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return W(r,e);const t=yt(r),n=yt(e),s=W(t.seconds,n.seconds);return s!==0?s:W(t.nanos,n.nanos)}function mu(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ut(t[s],n[s]);if(i)return i}return W(t.length,n.length)}function Qn(r){return ua(r)}function ua(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=yt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Bt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return B.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ua(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${ua(t.fields[o])}`;return s+"}"}(r.mapValue):q()}function os(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ha(r){return!!r&&"integerValue"in r}function as(r){return!!r&&"arrayValue"in r}function gu(r){return!!r&&"nullValue"in r}function yu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ai(r){return!!r&&"mapValue"in r}function Bi(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function zr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return bn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=zr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Dd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const xd={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function y_(r){return"nullValue"in r?oi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?os(mn.empty(),B.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Bi(r)?xd:{mapValue:{}}:q()}function __(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?os(mn.empty(),B.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?xd:"mapValue"in r?Bi(r)?{mapValue:{}}:Vt:q()}function _u(r,e){const t=Ut(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function vu(r,e){const t=Ut(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ai(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(t)}setAll(e){let t=le.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=zr(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());ai(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];ai(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){bn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new De(zr(this.value))}}function Vd(r){const e=[];return bn(r.fields,(t,n)=>{const s=new le([t]);if(ai(n)){const i=Vd(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new de(e,0,H.min(),H.min(),H.min(),De.empty(),0)}static newFoundDocument(e,t,n,s){return new de(e,1,t,H.min(),n,s,0)}static newNoDocument(e,t){return new de(e,2,t,H.min(),H.min(),De.empty(),0)}static newUnknownDocument(e,t){return new de(e,3,t,H.min(),H.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this.position=e,this.inclusive=t}}function Iu(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=B.comparator(B.fromName(o.referenceValue),t.key):n=Ut(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Tu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!nt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function v_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{}class Y extends Nd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new I_(e,t,n):t==="array-contains"?new w_(e,n):t==="in"?new Bd(e,n):t==="not-in"?new b_(e,n):t==="array-contains-any"?new A_(e,n):new Y(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new T_(e,n):new E_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ut(t,this.value)):t!==null&&gn(this.value)===gn(t)&&this.matchesComparison(Ut(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Nd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ne(e,t)}matches(e){return Yn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yn(r){return r.op==="and"}function da(r){return r.op==="or"}function Ha(r){return Ld(r)&&Yn(r)}function Ld(r){for(const e of r.filters)if(e instanceof ne)return!1;return!0}function fa(r){if(r instanceof Y)return r.field.canonicalString()+r.op.toString()+Qn(r.value);if(Ha(r))return r.filters.map(e=>fa(e)).join(",");{const e=r.filters.map(t=>fa(t)).join(",");return`${r.op}(${e})`}}function Od(r,e){return r instanceof Y?function(n,s){return s instanceof Y&&n.op===s.op&&n.field.isEqual(s.field)&&nt(n.value,s.value)}(r,e):r instanceof ne?function(n,s){return s instanceof ne&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Od(o,s.filters[c]),!0):!1}(r,e):void q()}function Md(r,e){const t=r.filters.concat(e);return ne.create(t,r.op)}function jd(r){return r instanceof Y?function(t){return`${t.field.canonicalString()} ${t.op} ${Qn(t.value)}`}(r):r instanceof ne?function(t){return t.op.toString()+" {"+t.getFilters().map(jd).join(" ,")+"}"}(r):"Filter"}class I_ extends Y{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class T_ extends Y{constructor(e,t){super(e,"in",t),this.keys=Fd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class E_ extends Y{constructor(e,t){super(e,"not-in",t),this.keys=Fd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>B.fromName(n.referenceValue))}class w_ extends Y{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return as(t)&&is(t.arrayValue,this.value)}}class Bd extends Y{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&is(this.value.arrayValue,t)}}class b_ extends Y{constructor(e,t){super(e,"not-in",t)}matches(e){if(is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!is(this.value.arrayValue,t)}}class A_ extends Y{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!as(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>is(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function pa(r,e=null,t=[],n=[],s=null,i=null,o=null){return new S_(r,e,t,n,s,i,o)}function yn(r){const e=z(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>fa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Qn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Qn(n)).join(",")),e.ue=t}return e.ue}function ms(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!v_(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Od(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Tu(r.startAt,e.startAt)&&Tu(r.endAt,e.endAt)}function vi(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ii(r,e){return r.filters.filter(t=>t instanceof Y&&t.field.isEqual(e))}function Eu(r,e,t){let n=oi,s=!0;for(const i of Ii(r,e)){let o=oi,c=!0;switch(i.op){case"<":case"<=":o=y_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=oi}_u({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];_u({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function wu(r,e,t){let n=Vt,s=!0;for(const i of Ii(r,e)){let o=Vt,c=!0;switch(i.op){case">=":case">":o=__(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Vt}vu({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];vu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ud(r,e,t,n,s,i,o,c){return new ur(r,e,t,n,s,i,o,c)}function Ka(r){return new ur(r)}function bu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function $d(r){return r.collectionGroup!==null}function Gr(r){const e=z(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new se(le.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new cs(i,n))}),t.has(le.keyField().canonicalString())||e.ce.push(new cs(le.keyField(),n))}return e.ce}function Ge(r){const e=z(r);return e.le||(e.le=R_(e,Gr(r))),e.le}function R_(r,e){if(r.limitType==="F")return pa(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new cs(s.field,i)});const t=r.endAt?new Jn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Jn(r.startAt.position,r.startAt.inclusive):null;return pa(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ma(r,e){const t=r.filters.concat([e]);return new ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ga(r,e,t){return new ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ui(r,e){return ms(Ge(r),Ge(e))&&r.limitType===e.limitType}function qd(r){return`${yn(Ge(r))}|lt:${r.limitType}`}function jn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>jd(s)).join(", ")}]`),Fi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Qn(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Qn(s)).join(",")),`Target(${n})`}(Ge(r))}; limitType=${r.limitType})`}function gs(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Gr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=Iu(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,Gr(n),s)||n.endAt&&!function(o,c,l){const h=Iu(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,Gr(n),s))}(r,e)}function zd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Gd(r){return(e,t)=>{let n=!1;for(const s of Gr(r)){const i=P_(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function P_(r,e,t){const n=r.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Ut(l,h):q()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Cd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new oe(B.comparator);function qe(){return C_}const Hd=new oe(B.comparator);function Br(...r){let e=Hd;for(const t of r)e=e.insert(t.key,t);return e}function Kd(r){let e=Hd;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ye(){return Hr()}function Wd(){return Hr()}function Hr(){return new Gt(r=>r.toString(),(r,e)=>r.isEqual(e))}const k_=new oe(B.comparator),D_=new se(B.comparator);function Q(...r){let e=D_;for(const t of r)e=e.add(t);return e}const x_=new se(W);function Wa(){return x_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rs(e)?"-0":e}}function Qd(r){return{integerValue:""+r}}function V_(r,e){return bd(e)?Qd(e):Qa(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this._=void 0}}function N_(r,e,t){return r instanceof Xn?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&za(i)&&(i=Ga(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof Zn?Yd(r,e):r instanceof er?Xd(r,e):function(s,i){const o=Jd(s,i),c=Au(o)+Au(s.Pe);return ha(o)&&ha(s.Pe)?Qd(c):Qa(s.serializer,c)}(r,e)}function L_(r,e,t){return r instanceof Zn?Yd(r,e):r instanceof er?Xd(r,e):t}function Jd(r,e){return r instanceof ls?function(n){return ha(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Xn extends $i{}class Zn extends $i{constructor(e){super(),this.elements=e}}function Yd(r,e){const t=Zd(e);for(const n of r.elements)t.some(s=>nt(s,n))||t.push(n);return{arrayValue:{values:t}}}class er extends $i{constructor(e){super(),this.elements=e}}function Xd(r,e){let t=Zd(e);for(const n of r.elements)t=t.filter(s=>!nt(s,n));return{arrayValue:{values:t}}}class ls extends $i{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Au(r){return ce(r.integerValue||r.doubleValue)}function Zd(r){return as(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){this.field=e,this.transform=t}}function O_(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Zn&&s instanceof Zn||n instanceof er&&s instanceof er?Wn(n.elements,s.elements,nt):n instanceof ls&&s instanceof ls?nt(n.Pe,s.Pe):n instanceof Xn&&s instanceof Xn}(r.transform,e.transform)}class M_{constructor(e,t){this.version=e,this.transformResults=t}}class Oe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ci(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class qi{}function tf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new zi(r.key,Oe.none()):new hr(r.key,r.data,Oe.none());{const t=r.data,n=De.empty();let s=new se(le.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new vt(r.key,n,new Ue(s.toArray()),Oe.none())}}function j_(r,e,t){r instanceof hr?function(s,i,o){const c=s.value.clone(),l=Ru(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof vt?function(s,i,o){if(!ci(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ru(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(nf(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Kr(r,e,t,n){return r instanceof hr?function(i,o,c,l){if(!ci(i.precondition,o))return c;const h=i.value.clone(),f=Pu(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof vt?function(i,o,c,l){if(!ci(i.precondition,o))return c;const h=Pu(i.fieldTransforms,l,o),f=o.data;return f.setAll(nf(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return ci(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function F_(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Jd(n.transform,s||null);i!=null&&(t===null&&(t=De.empty()),t.set(n.field,i))}return t||null}function Su(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Wn(n,s,(i,o)=>O_(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class hr extends qi{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vt extends qi{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Ru(r,e,t){const n=new Map;G(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,L_(o,c,t[s]))}return n}function Pu(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,N_(i,o,e))}return n}class zi extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rf extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&j_(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Kr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Kr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Wd();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=tf(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,n)=>Su(t,n))&&Wn(this.baseMutations,e.baseMutations,(t,n)=>Su(t,n))}}class Ya{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){G(e.mutations.length===n.length);let s=function(){return k_}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Ya(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,Z;function U_(r){switch(r){default:return q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function sf(r){if(r===void 0)return ge("GRPC error has no .code"),k.UNKNOWN;switch(r){case _e.OK:return k.OK;case _e.CANCELLED:return k.CANCELLED;case _e.UNKNOWN:return k.UNKNOWN;case _e.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case _e.INTERNAL:return k.INTERNAL;case _e.UNAVAILABLE:return k.UNAVAILABLE;case _e.UNAUTHENTICATED:return k.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case _e.NOT_FOUND:return k.NOT_FOUND;case _e.ALREADY_EXISTS:return k.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return k.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case _e.ABORTED:return k.ABORTED;case _e.OUT_OF_RANGE:return k.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return k.UNIMPLEMENTED;case _e.DATA_LOSS:return k.DATA_LOSS;default:return q()}}(Z=_e||(_e={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new ln([4294967295,4294967295],0);function Cu(r){const e=$_().encode(r),t=new hd;return t.update(e),new Uint8Array(t.digest())}function ku(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ln([t,n],0),new ln([s,i],0)]}class Za{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ur(`Invalid padding: ${t}`);if(n<0)throw new Ur(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ln.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(ln.fromNumber(n)));return s.compare(q_)===1&&(s=new ln([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Cu(e),[n,s]=ku(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Za(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Cu(e),[n,s]=ku(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,_s.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ys(H.min(),s,new oe(W),qe(),Q())}}class _s{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new _s(n,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class of{constructor(e,t){this.targetId=e,this.me=t}}class af{constructor(e,t,n=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Du{constructor(){this.fe=0,this.ge=Vu(),this.pe=ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),n=Q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:q()}}),new _s(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Vu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class z_{constructor(e){this.Le=e,this.Be=new Map,this.ke=qe(),this.qe=xu(),this.Qe=new oe(W)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(vi(i))if(n===0){const o=new B(i.path);this.Ue(t,o,de.newNoDocument(o,H.min()))}else G(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Bt(n).toUint8Array()}catch(l){if(l instanceof kd)return es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Za(o,s,i)}catch(l){return es(l instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&vi(c.target)){const l=new B(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,de.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=Q();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ys(e,t,this.Qe,this.ke,n);return this.ke=qe(),this.qe=xu(),this.Qe=new oe(W),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Du,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new se(W),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Du),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function xu(){return new oe(B.comparator)}function Vu(){return new oe(B.comparator)}const G_={asc:"ASCENDING",desc:"DESCENDING"},H_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},K_={and:"AND",or:"OR"};class W_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ya(r,e){return r.useProto3Json||Fi(e)?e:{value:e}}function tr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Q_(r,e){return tr(r,e.toTimestamp())}function je(r){return G(!!r),H.fromTimestamp(function(t){const n=yt(t);return new ue(n.seconds,n.nanos)}(r))}function ec(r,e){return _a(r,e).canonicalString()}function _a(r,e){const t=function(s){return new te(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function lf(r){const e=te.fromString(r);return G(_f(e)),e}function Ti(r,e){return ec(r.databaseId,e.path)}function un(r,e){const t=lf(e);if(t.get(1)!==r.databaseId.projectId)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new B(df(t))}function uf(r,e){return ec(r.databaseId,e)}function hf(r){const e=lf(r);return e.length===4?te.emptyPath():df(e)}function va(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function df(r){return G(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Nu(r,e,t){return{name:Ti(r,e),fields:t.value.mapValue.fields}}function J_(r,e,t){const n=un(r,e.name),s=je(e.updateTime),i=e.createTime?je(e.createTime):H.min(),o=new De({mapValue:{fields:e.fields}}),c=de.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Y_(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string"),ye.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ye.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?k.UNKNOWN:sf(h.code);return new j(f,h.message||"")}(o);t=new af(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=un(r,n.document.name),i=je(n.document.updateTime),o=n.document.createTime?je(n.document.createTime):H.min(),c=new De({mapValue:{fields:n.document.fields}}),l=de.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new li(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=un(r,n.document),i=n.readTime?je(n.readTime):H.min(),o=de.newNoDocument(s,i),c=n.removedTargetIds||[];t=new li([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=un(r,n.document),i=n.removedTargetIds||[];t=new li([],i,s,null)}else{if(!("filter"in e))return q();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new B_(s,i),c=n.targetId;t=new of(c,o)}}return t}function Ei(r,e){let t;if(e instanceof hr)t={update:Nu(r,e.key,e.value)};else if(e instanceof zi)t={delete:Ti(r,e.key)};else if(e instanceof vt)t={update:Nu(r,e.key,e.data),updateMask:rv(e.fieldMask)};else{if(!(e instanceof rf))return q();t={verify:Ti(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof Xn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Zn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof er)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ls)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw q()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Q_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(r,e.precondition)),t}function Ia(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Oe.updateTime(je(i.updateTime)):i.exists!==void 0?Oe.exists(i.exists):Oe.none()}(e.currentDocument):Oe.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)G(c.setToServerValue==="REQUEST_TIME"),l=new Xn;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Zn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new er(f)}else"increment"in c?l=new ls(o,c.increment):q();const h=le.fromServerFormat(c.fieldPath);return new ef(h,l)}(r,s)):[];if(e.update){e.update.name;const s=un(r,e.update.name),i=new De({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Ue(h.map(f=>le.fromServerFormat(f)))}(e.updateMask);return new vt(s,i,o,t,n)}return new hr(s,i,t,n)}if(e.delete){const s=un(r,e.delete);return new zi(s,t)}if(e.verify){const s=un(r,e.verify);return new rf(s,t)}return q()}function X_(r,e){return r&&r.length>0?(G(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?je(s.updateTime):je(i);return o.isEqual(H.min())&&(o=je(i)),new M_(o,s.transformResults||[])}(t,e))):[]}function ff(r,e){return{documents:[uf(r,e.path)]}}function pf(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=uf(r,s);const i=function(h){if(h.length!==0)return yf(ne.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Fn(y.field),direction:ev(y.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ya(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function mf(r){let e=hf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){G(n===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const y=gf(p);return y instanceof ne&&Ha(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(y=>function(R){return new cs(Bn(R.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(p){let y;return y=typeof p=="object"?p.value:p,Fi(y)?null:y}(t.limit));let l=null;t.startAt&&(l=function(p){const y=!!p.before,T=p.values||[];return new Jn(T,y)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const y=!p.before,T=p.values||[];return new Jn(T,y)}(t.endAt)),Ud(e,s,o,i,c,"F",l,h)}function Z_(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Bn(t.unaryFilter.field);return Y.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Bn(t.unaryFilter.field);return Y.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bn(t.unaryFilter.field);return Y.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bn(t.unaryFilter.field);return Y.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(r):r.fieldFilter!==void 0?function(t){return Y.create(Bn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ne.create(t.compositeFilter.filters.map(n=>gf(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(r):q()}function ev(r){return G_[r]}function tv(r){return H_[r]}function nv(r){return K_[r]}function Fn(r){return{fieldPath:r.canonicalString()}}function Bn(r){return le.fromServerFormat(r.fieldPath)}function yf(r){return r instanceof Y?function(t){if(t.op==="=="){if(yu(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(gu(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yu(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(gu(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:tv(t.op),value:t.value}}}(r):r instanceof ne?function(t){const n=t.getFilters().map(s=>yf(s));return n.length===1?n[0]:{compositeFilter:{op:nv(t.op),filters:n}}}(r):q()}function rv(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _f(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,n,s,i=H.min(),o=H.min(),c=ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.ct=e}}function sv(r,e){let t;if(e.document)t=J_(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=B.fromSegments(e.noDocument.path),s=vn(e.noDocument.readTime);t=de.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const n=B.fromSegments(e.unknownDocument.path),s=vn(e.unknownDocument.version);t=de.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ue(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function Lu(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:wi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Ti(i,o.key),fields:o.data.value.mapValue.fields,updateTime:tr(i,o.version.toTimestamp()),createTime:tr(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:_n(e.version)};else{if(!e.isUnknownDocument())return q();n.unknownDocument={path:t.path.toArray(),version:_n(e.version)}}return n}function wi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function _n(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vn(r){const e=new ue(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function on(r,e){const t=(e.baseMutations||[]).map(i=>Ia(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>Ia(r.ct,i)),s=ue.fromMillis(e.localWriteTimeMs);return new Ja(e.batchId,s,t,n)}function $r(r){const e=vn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?vn(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return G(i.documents.length===1),Ge(Ka(hf(i.documents[0])))}(r.query):function(i){return Ge(mf(i))}(r.query),new ht(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,ye.fromBase64String(r.resumeToken))}function If(r,e){const t=_n(e.snapshotVersion),n=_n(e.lastLimboFreeSnapshotVersion);let s;s=vi(e.target)?ff(r.ct,e.target):pf(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:yn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Tf(r){const e=mf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ga(e,e.limit,"L"):e}function Bo(r,e){return new Xa(e.largestBatchId,Ia(r.ct,e.overlayMutation))}function Ou(r,e){const t=e.path.lastSegment();return[r,Me(e.path.popLast()),t]}function Mu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:_n(n.readTime),documentKey:Me(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{getBundleMetadata(e,t){return ju(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:vn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return ju(e).put(function(s){return{bundleId:s.id,createTime:_n(je(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Fu(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Tf(i.bundledQuery),readTime:vn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Fu(e).put(function(s){return{name:s.name,readTime:_n(je(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function ju(r){return Te(r,"bundles")}function Fu(r){return Te(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Gi(e,n)}getOverlay(e,t){return xr(e).get(Ou(this.userId,t)).next(n=>n?Bo(this.serializer,n):null)}getOverlays(e,t){const n=Ye();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new Xa(t,o);s.push(this.ht(e,c))}),S.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Me(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(xr(e).j("collectionPathOverlayIndex",c))}),S.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Ye(),i=Me(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return xr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=Bo(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=Ye();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return xr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const p=Bo(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return xr(e).put(function(s,i,o){const[c,l,h]=Ou(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ei(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function xr(r){return Te(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{Pt(e){return Te(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?ye.fromUint8Array(n):ye.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ce(e.integerValue));else if("doubleValue"in e){const n=ce(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),rs(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=yt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Bt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Dd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Bi(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):q()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(ce(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}an.vt=new an;function av(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Bu(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=av(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class cv{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=Bu(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=Bu(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class lv{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class uv{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Vr{constructor(){this.jt=new cv,this.Ht=new lv(this.jt),this.Jt=new uv(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new cn(this.indexId,this.documentKey,this.arrayValue,n)}}function bt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Uu(r.arrayValue,e.arrayValue),t!==0?t:(t=Uu(r.directionalValue,e.directionalValue),t!==0?t:B.comparator(r.documentKey,e.documentKey)))}function Uu(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.Xt=new se((t,n)=>le.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=ca(e);if(t!==void 0&&!this.sn(t))return!1;const n=rn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new se(le.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new si(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new si(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new si(n.field,n.dir==="asc"?0:1)));return new _i(_i.UNKNOWN_ID,this.collectionId,t,ns.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(r){var e,t;if(G(r instanceof Y||r instanceof ne),r instanceof Y){if(r instanceof Bd){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>Y.create(r.field,"==",i)))||[];return ne.create(s,"or")}return r}const n=r.filters.map(s=>Ef(s));return ne.create(n,r.op)}function hv(r){if(r.getFilters().length===0)return[];const e=wa(Ef(r));return G(wf(e)),Ta(e)||Ea(e)?[e]:e.getFilters()}function Ta(r){return r instanceof Y}function Ea(r){return r instanceof ne&&Ha(r)}function wf(r){return Ta(r)||Ea(r)||function(t){if(t instanceof ne&&da(t)){for(const n of t.getFilters())if(!Ta(n)&&!Ea(n))return!1;return!0}return!1}(r)}function wa(r){if(G(r instanceof Y||r instanceof ne),r instanceof Y)return r;if(r.filters.length===1)return wa(r.filters[0]);const e=r.filters.map(n=>wa(n));let t=ne.create(e,r.op);return t=bi(t),wf(t)?t:(G(t instanceof ne),G(Yn(t)),G(t.filters.length>1),t.filters.reduce((n,s)=>tc(n,s)))}function tc(r,e){let t;return G(r instanceof Y||r instanceof ne),G(e instanceof Y||e instanceof ne),t=r instanceof Y?e instanceof Y?function(s,i){return ne.create([s,i],"and")}(r,e):qu(r,e):e instanceof Y?qu(e,r):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),Yn(s)&&Yn(i))return Md(s,i.getFilters());const o=da(s)?s:i,c=da(s)?i:s,l=o.filters.map(h=>tc(h,c));return ne.create(l,"or")}(r,e),bi(t)}function qu(r,e){if(Yn(e))return Md(e,r.getFilters());{const t=e.filters.map(n=>tc(r,n));return ne.create(t,"or")}}function bi(r){if(G(r instanceof Y||r instanceof ne),r instanceof Y)return r;const e=r.getFilters();if(e.length===1)return bi(e[0]);if(Ld(r))return r;const t=e.map(s=>bi(s)),n=[];return t.forEach(s=>{s instanceof Y?n.push(s):s instanceof ne&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:ne.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.un=new nc}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Ke.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Ke.min())}updateCollectionGroup(e,t,n){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class nc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new se(te.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new se(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Uint8Array(0);class fv{constructor(e,t){this.databaseId=t,this.cn=new nc,this.ln=new Gt(n=>yn(n),(n,s)=>ms(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:Me(s)};return zu(e).put(i)}return S.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[_d(t),""],!1,!0);return zu(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(Je(o.parent))}return n})}addFieldIndex(e,t){const n=Nr(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Ln(e);return i.next(c=>{o.put(Mu(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Nr(e),s=Ln(e),i=Nn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Nr(e),n=Nn(e),s=Ln(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new $u(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Nn(e);let s=!0;const i=new Map;return S.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=Q();const c=[];return S.forEach(i,(l,h)=>{V("IndexedDbIndexManager",`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`}(l)} to execute ${yn(t)}`);const f=function(F,L){const D=ca(L);if(D===void 0)return null;for(const N of Ii(F,D.fieldPath))switch(N.op){case"array-contains-any":return N.value.arrayValue.values||[];case"array-contains":return[N.value]}return null}(h,l),p=function(F,L){const D=new Map;for(const N of rn(L))for(const v of Ii(F,N.fieldPath))switch(v.op){case"==":case"in":D.set(N.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return D.set(N.fieldPath.canonicalString(),v.value),Array.from(D.values())}return null}(h,l),y=function(F,L){const D=[];let N=!0;for(const v of rn(L)){const g=v.kind===0?Eu(F,v.fieldPath,F.startAt):wu(F,v.fieldPath,F.startAt);D.push(g.value),N&&(N=g.inclusive)}return new Jn(D,N)}(h,l),T=function(F,L){const D=[];let N=!0;for(const v of rn(L)){const g=v.kind===0?wu(F,v.fieldPath,F.endAt):Eu(F,v.fieldPath,F.endAt);D.push(g.value),N&&(N=g.inclusive)}return new Jn(D,N)}(h,l),R=this.In(l,h,y),x=this.In(l,h,T),C=this.Tn(l,h,p),U=this.En(l.indexId,f,R,y.inclusive,x,T.inclusive,C);return S.forEach(U,$=>n.G($,t.limit).next(F=>{F.forEach(L=>{const D=B.fromSegments(L.documentKey);o.has(D)||(o=o.add(D),c.push(D))})}))}).next(()=>c)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=hv(ne.create(e.filters,"and")).map(n=>pa(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const y=t?this.dn(t[p/h]):Ks,T=this.An(e,y,n[p%h],s),R=this.Rn(e,y,i[p%h],o),x=c.map(C=>this.An(e,y,C,!0));f.push(...this.createRange(T,R,x))}return f}An(e,t,n,s){const i=new cn(e,B.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new cn(e,B.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new $u(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return S.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new se(le.comparator),f=!1;for(const p of l.filters)for(const y of p.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:h=h.add(y.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new Vr;for(const s of rn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);an.vt.It(i,o)}return n.zt()}dn(e){const t=new Vr;return an.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Vr;return an.vt.It(os(this.databaseId,t),n.Yt(function(i){const o=rn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new Vr);let i=0;for(const o of rn(e)){const c=n[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&as(c))s=this.gn(s,o,c);else{const h=l.Yt(o.kind);an.vt.It(c,h)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new Vr;l.seed(c.zt()),an.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof Y&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Nr(e),s=Ln(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return S.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const y=p?new ns(p.sequenceNumber,new Ke(vn(p.readTime),new B(Je(p.documentKey)),p.largestBatchId)):ns.empty(),T=f.fields.map(([R,x])=>new si(le.fromServerFormat(R),x));return new _i(f.indexId,f.collectionGroup,T,y)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:W(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Nr(e),i=Ln(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,l=>i.put(Mu(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return S.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),S.forEach(c,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?S.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,n,s){return Nn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return Nn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=Nn(e);let i=new se(bt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{i=i.add(new cn(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let n=new se(bt);const s=this.Vn(t,e);if(s==null)return n;const i=ca(t);if(i!=null){const o=e.data.field(i.fieldPath);if(as(o))for(const c of o.arrayValue.values||[])n=n.add(new cn(t.indexId,e.key,this.dn(c),s))}else n=n.add(new cn(t.indexId,e.key,Ks,s));return n}bn(e,t,n,s,i){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,y){const T=l.getIterator(),R=h.getIterator();let x=Vn(T),C=Vn(R);for(;x||C;){let U=!1,$=!1;if(x&&C){const F=f(x,C);F<0?$=!0:F>0&&(U=!0)}else x!=null?$=!0:U=!0;U?(p(C),C=Vn(R)):$?(y(x),x=Vn(T)):(x=Vn(T),C=Vn(R))}}(s,i,bt,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),S.waitFor(o)}yn(e){let t=1;return Ln(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>bt(o,c)).filter((o,c,l)=>!c||bt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=bt(o,e),l=bt(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ks,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ks,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return bt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Gu)}getMinOffset(e,t){return S.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||q())).next(Gu)}}function zu(r){return Te(r,"collectionParents")}function Nn(r){return Te(r,"indexEntries")}function Nr(r){return Te(r,"indexConfiguration")}function Ln(r){return Te(r,"indexState")}function Gu(r){G(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Ua(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ke(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Fe{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(f,p,y)=>(c++,y.delete()));i.push(l.next(()=>{G(c===1)}));const h=[];for(const f of t.mutations){const p=Ad(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return S.waitFor(i).next(()=>h)}function Ai(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw q();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(41943040,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);class Hi{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Hi(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return At(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Un(e),o=At(e);return o.add({}).next(c=>{G(typeof c=="number");const l=new Ja(c,t,n,s),h=function(T,R,x){const C=x.baseMutations.map($=>Ei(T.ct,$)),U=x.mutations.map($=>Ei(T.ct,$));return{userId:R,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:C,mutations:U}}(this.serializer,this.userId,l),f=[];let p=new se((y,T)=>W(y.canonicalString(),T.canonicalString()));for(const y of s){const T=Ad(this.userId,y.key.path,c);p=p.add(y.key.path.popLast()),f.push(o.put(h)),f.push(i.put(T,Yy))}return p.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),S.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return At(e).get(t).next(n=>n?(G(n.userId===this.userId),on(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return At(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(G(c.batchId>=n),i=on(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return At(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return At(e).U("userMutationsIndex",t).next(n=>n.map(s=>on(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ii(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Un(e).J({range:s},(o,c,l)=>{const[h,f,p]=o,y=Je(f);if(h===this.userId&&t.path.isEqual(y))return At(e).get(p).next(T=>{if(!T)throw q();G(T.userId===this.userId),i.push(on(this.serializer,T))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se(W);const s=[];return t.forEach(i=>{const o=ii(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Un(e).J({range:c},(h,f,p)=>{const[y,T,R]=h,x=Je(T);y===this.userId&&i.path.isEqual(x)?n=n.add(R):p.done()});s.push(l)}),S.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ii(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new se(W);return Un(e).J({range:o},(l,h,f)=>{const[p,y,T]=l,R=Je(y);p===this.userId&&n.isPrefixOf(R)?R.length===s&&(c=c.add(T)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(At(e).get(i).next(o=>{if(o===null)throw q();G(o.userId===this.userId),n.push(on(this.serializer,o))}))}),S.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return bf(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Un(e).J({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=Je(i[1]);s.push(l)}else c.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return Af(e,this.userId,t)}Nn(e){return Sf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Af(r,e,t){const n=ii(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Un(r).J({range:i,H:!0},(c,l,h)=>{const[f,p,y]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function At(r){return Te(r,"mutations")}function Un(r){return Te(r,"documentMutations")}function Sf(r){return Te(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new In(0)}static kn(){return new In(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new In(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new ue(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>On(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(G(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return On(e).J((o,c)=>{const l=$r(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(i)).next(()=>s)}forEachTarget(e,t){return On(e).J((n,s)=>{const i=$r(s);t(i)})}qn(e){return Ku(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return Ku(e).put("targetGlobalKey",t)}Kn(e,t){return On(e).put(If(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=yn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return On(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const h=$r(c);ms(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Pt(e);return t.forEach(o=>{const c=Me(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),S.waitFor(s)}removeMatchingKeys(e,t,n){const s=Pt(e);return S.forEach(t,i=>{const o=Me(i.path);return S.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Pt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Pt(e);let i=Q();return s.J({range:n,H:!0},(o,c,l)=>{const h=Je(o[1]),f=new B(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=Me(t.path),s=IDBKeyRange.bound([n],[_d(n)],!1,!0);let i=0;return Pt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return On(e).get(t).next(n=>n?$r(n):null)}}function On(r){return Te(r,"targets")}function Ku(r){return Te(r,"targetGlobal")}function Pt(r){return Te(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu([r,e],[t,n]){const s=W(r,t);return s===0?W(e,n):s}class mv{constructor(e){this.Un=e,this.buffer=new se(Wu),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Wu(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class gv{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zt(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await qt(t)}await this.Hn(3e5)})}}class yv{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Be.oe);const n=new mv(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Hu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hu):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),Mn()<=J.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function _v(r,e){return new yv(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t){this.db=e,this.garbageCollector=_v(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return Ws(e,n)}removeReference(e,t,n){return Ws(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ws(e,t)}nr(e,t){return function(s,i){let o=!1;return Sf(s).Y(c=>Af(s,c,i).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),Pt(e).delete(function(p){return[0,Me(p.path)]}(o))))});s.push(l)}}).next(()=>S.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ws(e,t)}tr(e,t){const n=Pt(e);let s,i=Be.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Be.oe&&t(new B(Je(s)),i),i=h,s=l):i=Be.oe}).next(()=>{i!==Be.oe&&t(new B(Je(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ws(r,e){return Pt(r).put(function(n,s){return{targetId:0,path:Me(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.changes=new Gt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?S.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Xt(e).put(n)}removeEntry(e,t,n){return Xt(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],wi(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=de.newInvalidDocument(t);return Xt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Lr(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:de.newInvalidDocument(t)};return Xt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Lr(t))},(s,i)=>{n={document:this.ir(t,i),size:Ai(i)}}).next(()=>n)}getEntries(e,t){let n=qe();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=qe(),s=new oe(B.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);n=n.insert(i,c),s=s.insert(i,Ai(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return S.resolve();let s=new se(Yu);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Lr(s.first()),Lr(s.last())),o=s.getIterator();let c=o.getNext();return Xt(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const p=B.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Yu(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Lr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),wi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xt(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=qe();for(const p of h){const y=this.ir(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);y.isFoundDocument()&&(gs(t,y)||s.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=qe();const o=Ju(t,n),c=Ju(t,Ke.max());return Xt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.ir(B.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new Tv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Qu(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return Qu(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=sv(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return de.newInvalidDocument(e)}}function Pf(r){return new Iv(r)}class Tv extends Rf{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Gt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new se((i,o)=>W(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Lu(this.cr.serializer,o);s=s.add(i.path.popLast());const h=Ai(l);n+=h-c.size,t.push(this.cr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=Lu(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Qu(r){return Te(r,"remoteDocumentGlobal")}function Xt(r){return Te(r,"remoteDocumentsV14")}function Lr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ju(r,e){const t=e.documentKey.path.toArray();return[r,wi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Yu(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=W(t[i],n[i]),s)return s;return s=W(t.length,n.length),s||(s=W(t[t.length-2],n[n.length-2]),s||W(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Kr(n.mutation,s,Ue.empty(),ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Q()){const s=Ye();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Br();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Ye();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Q()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=qe();const o=Hr(),c=function(){return Hr()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof vt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Kr(f.mutation,h,f.mutation.getFieldMask(),ue.now())):o.set(h.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new Ev(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Hr();let s=new oe((o,c)=>o-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||Ue.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(s.get(c.batchId)||Q()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Wd();f.forEach(y=>{if(!i.has(y)){const T=tf(t.get(y),n.get(y));T!==null&&p.set(y,T),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return S.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$d(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):S.resolve(Ye());let c=-1,l=i;return o.next(h=>S.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?S.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{l=l.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Q())).next(f=>({batchId:c,changes:Kd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(n=>{let s=Br();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Br();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,l=>{const h=function(p,y){return new ur(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,de.newInvalidDocument(f)))});let c=Br();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Kr(f.mutation,h,Ue.empty(),ue.now()),gs(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:je(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Tf(s.bundledQuery),readTime:je(s.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.overlays=new oe(B.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ye();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),S.resolve()}getOverlaysForCollection(e,t,n){const s=Ye(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new oe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=Ye(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Ye(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return S.resolve(c)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Xa(t,n));let i=this.Ir.get(t);i===void 0&&(i=Q(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.Tr=new se(Ee.Er),this.dr=new se(Ee.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ee(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ee(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new B(new te([])),n=new Ee(t,e),s=new Ee(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new te([])),n=new Ee(t,e),s=new Ee(t,e+1);let i=Q();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ee(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ee{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||W(e.wr,t.wr)}static Ar(e,t){return W(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new se(Ee.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ja(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ee(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const c=this.Dr(o.wr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se(W);return t.forEach(s=>{const i=new Ee(s,0),o=new Ee(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{n=n.add(c.wr)})}),S.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;B.isDocumentKey(i)||(i=i.child(""));const o=new Ee(new B(i),0);let c=new se(W);return this.br.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),S.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return S.forEach(t.mutations,s=>{const i=new Ee(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ee(t,0),s=this.br.firstAfterOrEqual(n);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.Mr=e,this.docs=function(){return new oe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return S.resolve(n?n.document.mutableCopy():de.newInvalidDocument(t))}getEntries(e,t){let n=qe();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():de.newInvalidDocument(s))}),S.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=qe();const o=t.path,c=new B(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Ua(Id(f),n)<=0||(s.has(f.key)||gs(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,n,s){q()}Or(e,t){return S.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Pv(this)}getSize(e){return S.resolve(this.size)}}class Pv extends Rf{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.persistence=e,this.Nr=new Gt(t=>yn(t),ms),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new rc,this.targetCount=0,this.kr=In.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new In(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return S.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),S.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return S.resolve(n)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Be(0),this.Kr=!1,this.Kr=!0,this.$r=new Av,this.referenceDelegate=e(this),this.Ur=new Cv(this),this.indexManager=new dv,this.remoteDocumentCache=function(s){return new Rv(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new vf(t),this.Gr=new wv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Sv(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const s=new kv(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return S.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class kv extends Ed{constructor(e){super(),this.currentSequenceNumber=e}}class Ki{constructor(e){this.persistence=e,this.Jr=new rc,this.Yr=null}static Zr(e){return new Ki(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),S.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,n=>{const s=B.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.serializer=e}O(e,t,n,s){const i=new ji("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hu,{unique:!0}),l.createObjectStore("documentMutations")}(e),Xu(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=S.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Xu(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hu,{unique:!0});const p=h.store("mutations"),y=f.map(T=>p.put(T));return S.waitFor(y)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:l_});h.createIndex("collectionPathOverlayIndex",u_,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",h_,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:Xy});h.createIndex("documentKeyIndex",Zy),h.createIndex("collectionGroupIndex",e_)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:i_}).createIndex("sequenceNumberIndex",o_,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:a_}).createIndex("documentKeyIndex",c_,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Ai(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>S.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>S.forEach(c,l=>{G(l.userId===i.userId);const h=on(this.serializer,l);return bf(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,c)=>{const l=new te(o),h=function(p){return[0,Me(p)]}(l);i.push(t.get(h).next(f=>f?S.resolve():(p=>t.put({targetId:0,path:Me(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:s_});const n=t.store("collectionParents"),s=new nc,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Me(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new te(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=Je(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=$r(s),o=If(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new B(te.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):q()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>S.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=Pf(this.serializer),i=new kf(Ki.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:Q();on(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),S.forEach(c,(l,h)=>{const f=new ke(h),p=Gi.lt(this.serializer,f),y=i.getIndexManager(f),T=Hi.lt(f,this.serializer,y,i.referenceDelegate);return new Cf(s,T,p,y).recalculateAndSaveOverlaysForDocumentKeys(new la(t,Be.oe),l).next()})})}}function Xu(r){r.createObjectStore("targetDocuments",{keyPath:n_}).createIndex("documentTargetsIndex",r_,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",t_,{unique:!0}),r.createObjectStore("targetGlobal")}const Uo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sc{constructor(e,t,n,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=y=>Promise.resolve(),!sc.D())throw new j(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new vv(this,s),this.Ai=t+"main",this.serializer=new vf(l),this.Ri=new Mt(this.Ai,this.hi,new Dv(this.serializer)),this.$r=new ov,this.Ur=new pv(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Pf(this.serializer),this.Gr=new iv,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&ge("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(k.FAILED_PRECONDITION,Uo);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Be(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Qs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(zt(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Or(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return Qs(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Te(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return S.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):Or(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new j(k.FAILED_PRECONDITION,Uo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Qs(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new la(e,Be.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Qs(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Hi.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fv(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Gi.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){V("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?p_:l===16?f_:l===15?qa:l===14?Pd:l===13?Rd:l===12?d_:l===11?Sd:void q()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new la(c,this.Qr?this.Qr.next():Be.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(k.FAILED_PRECONDITION,Td);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Or(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new j(k.FAILED_PRECONDITION,Uo)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Or(e).put("owner",t)}static D(){return Mt.D()}bi(e){const t=Or(e);return t.get("owner").next(n=>this.vi(n)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ge(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;rd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ge("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ge("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Or(r){return Te(r,"owner")}function Qs(r){return Te(r,"clientMetadata")}function Df(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ic(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return rd()?8:wd(Ie())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xv;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(Mn()<=J.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(Mn()<=J.DEBUG&&V("QueryEngine","Query:",jn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Mn()<=J.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):S.resolve())}Yi(e,t){if(bu(t))return S.resolve(null);let n=Ge(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ga(t,null,"F"),n=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Q(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,ga(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,n,s){return bu(t)||s.isEqual(H.min())?S.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?S.resolve(null):(Mn()<=J.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jn(t)),this.rs(e,o,t,vd(s,-1)).next(c=>c))})}ts(e,t){let n=new se(Gd(e));return t.forEach((s,i)=>{gs(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return Mn()<=J.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",jn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ke.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new oe(W),this._s=new Gt(i=>yn(i),ms),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Vf(r,e,t,n){return new Vv(r,e,t,n)}async function Nf(r,e){const t=z(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=Q();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function Nv(r,e){const t=z(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,y=p.keys();let T=S.resolve();return y.forEach(R=>{T=T.next(()=>f.getEntry(l,R)).next(x=>{const C=h.docVersions.get(R);G(C!==null),x.version.compareTo(C)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Q();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Lf(r){const e=z(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Lv(r,e){const t=z(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const y=s.get(p);if(!y)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let T=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(ye.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,n)),s=s.insert(p,T),function(x,C,U){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(y,T,f)&&c.push(t.Ur.updateTargetData(i,T))});let l=qe(),h=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Ov(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!n.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return S.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function Ov(r,e,t){let n=Q(),s=Q();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=qe();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Mv(r,e){const t=z(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Si(r,e){const t=z(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,S.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new ht(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function nr(r,e,t){const n=z(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zt(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function ba(r,e,t){const n=z(r);let s=H.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=z(l),y=p._s.get(f);return y!==void 0?S.resolve(p.os.get(y)):p.Ur.getTargetData(h,f)}(n,o,Ge(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:H.min(),t?i:Q())).next(c=>(jf(n,zd(e),c),{documents:c,Ts:i})))}function Of(r,e){const t=z(r),n=z(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,e).next(o=>o?o.target:null))}function Mf(r,e){const t=z(r),n=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,vd(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(jf(t,e,s),s))}function jf(r,e,t){let n=r.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}function Zu(r,e){return`firestore_clients_${r}_${e}`}function eh(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function $o(r,e){return`firestore_targets_${r}_${e}`}class Ri{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Rs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new j(s.error.code,s.error.message))),o?new Ri(e,t,s.state,i):(ge("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new j(n.error.code,n.error.message))),i?new Wr(e,n.state,s):(ge("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Pi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Wa();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=bd(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Pi(e,i):(ge("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class oc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new oc(t.clientId,t.onlineState):(ge("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Aa{constructor(){this.activeTargetIds=Wa()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qo{constructor(e,t,n,s,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new oe(W),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Zu(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Aa),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const s=this.getItem(Zu(this.persistenceKey,n));if(s){const i=Pi.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem($o(this.persistenceKey,e));if(s){const i=Wr.Rs(e,s);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem($o(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(i){let o=Be.oe;if(i!=null)try{const c=JSON.parse(i);G(typeof c=="number"),o=c}catch(c){ge("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==Be.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const s=new Ri(this.currentUser,e,t,n),i=eh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=eh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const s=$o(this.persistenceKey,e),i=new Wr(e,t,n);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Pi.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ri.Rs(new ke(i),s,t)}Ys(e,t){const n=this.Ms.exec(e),s=Number(n[1]);return Wr.Rs(s,t)}Ls(e){return oc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Wa();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Ff{constructor(){this.so=new Aa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Aa,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js=null;function zo(){return Js===null?Js=function(){return 268435456+Math.round(2147483648*Math.random())}():Js++,"0x"+Js.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="WebChannelConnection";class Uv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const c=zo(),l=this.xo(t,n.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw es("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,n,s,i,o,c){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=Fv[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=zo();return new Promise((o,c)=>{const l=new dd;l.setWithCredentials(!0),l.listenOnce(fd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ri.NO_ERROR:const f=l.getResponseJson();V(Ce,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case ri.TIMEOUT:V(Ce,`RPC '${e}' ${i} timed out`),c(new j(k.DEADLINE_EXCEEDED,"Request time out"));break;case ri.HTTP_ERROR:const p=l.getStatus();if(V(Ce,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const T=y==null?void 0:y.error;if(T&&T.status&&T.message){const R=function(C){const U=C.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(U)>=0?U:k.UNKNOWN}(T.status);c(new j(R,T.message))}else c(new j(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(k.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{V(Ce,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);V(Ce,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,n,15)})}Bo(e,t,n){const s=zo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gd(),c=md(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");V(Ce,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let y=!1,T=!1;const R=new Bv({Io:C=>{T?V(Ce,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(y||(V(Ce,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),V(Ce,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),x=(C,U,$)=>{C.listen(U,F=>{try{$(F)}catch(L){setTimeout(()=>{throw L},0)}})};return x(p,Fr.EventType.OPEN,()=>{T||(V(Ce,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),x(p,Fr.EventType.CLOSE,()=>{T||(T=!0,V(Ce,`RPC '${e}' stream ${s} transport closed`),R.So())}),x(p,Fr.EventType.ERROR,C=>{T||(T=!0,es(Ce,`RPC '${e}' stream ${s} transport errored:`,C),R.So(new j(k.UNAVAILABLE,"The operation could not be completed")))}),x(p,Fr.EventType.MESSAGE,C=>{var U;if(!T){const $=C.data[0];G(!!$);const F=$,L=F.error||((U=F[0])===null||U===void 0?void 0:U.error);if(L){V(Ce,`RPC '${e}' stream ${s} received error:`,L);const D=L.status;let N=function(_){const E=_e[_];if(E!==void 0)return sf(E)}(D),v=L.message;N===void 0&&(N=k.INTERNAL,v="Unknown error status: "+D+" with message "+L.message),T=!0,R.So(new j(N,v)),p.close()}else V(Ce,`RPC '${e}' stream ${s} received:`,$),R.bo($)}}),x(c,pd.STAT_EVENT,C=>{C.stat===aa.PROXY?V(Ce,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===aa.NOPROXY&&V(Ce,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){return typeof window<"u"?window:null}function ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(r){return new W_(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,n,s,i,o,c,l){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Uf(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(ge(t.toString()),ge("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new j(k.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $v extends $f{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Y_(this.serializer,e),n=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?je(o.readTime):H.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=va(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=vi(l)?{documents:ff(i,l)}:{query:pf(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=cf(i,o.resumeToken);const h=ya(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=tr(i,o.snapshotVersion.toTimestamp());const h=ya(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=Z_(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=va(this.serializer),t.removeTarget=e,this.a_(t)}}class qv extends $f{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=X_(e.writeResults,e.commitTime),n=je(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=va(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ei(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,_a(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(k.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,_a(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(k.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Gv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ge(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{An(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=z(l);h.L_.add(4),await vs(h),h.q_.set("Unknown"),h.L_.delete(4),await Qi(h)}(this))})}),this.q_=new Gv(n,s)}}async function Qi(r){if(An(r))for(const e of r.B_)await e(!0)}async function vs(r){for(const e of r.B_)await e(!1)}function Ji(r,e){const t=z(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),lc(t)?cc(t):fr(t).r_()&&ac(t,e))}function rr(r,e){const t=z(r),n=fr(t);t.N_.delete(e),n.r_()&&qf(t,e),t.N_.size===0&&(n.r_()?n.o_():An(t)&&t.q_.set("Unknown"))}function ac(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fr(r).A_(e)}function qf(r,e){r.Q_.xe(e),fr(r).R_(e)}function cc(r){r.Q_=new z_({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),fr(r).start(),r.q_.v_()}function lc(r){return An(r)&&!fr(r).n_()&&r.N_.size>0}function An(r){return z(r).L_.size===0}function zf(r){r.Q_=void 0}async function Kv(r){r.q_.set("Online")}async function Wv(r){r.N_.forEach((e,t)=>{ac(r,e)})}async function Qv(r,e){zf(r),lc(r)?(r.q_.M_(e),cc(r)):r.q_.set("Unknown")}async function Jv(r,e,t){if(r.q_.set("Online"),e instanceof af&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(r,e)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ci(r,n)}else if(e instanceof li?r.Q_.Ke(e):e instanceof of?r.Q_.He(e):r.Q_.We(e),!t.isEqual(H.min()))try{const n=await Lf(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),qf(i,l);const p=new ht(f.target,l,h,f.sequenceNumber);ac(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await Ci(r,n)}}async function Ci(r,e,t){if(!zt(e))throw e;r.L_.add(1),await vs(r),r.q_.set("Offline"),t||(t=()=>Lf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Qi(r)})}function Gf(r,e){return e().catch(t=>Ci(r,t,e))}async function dr(r){const e=z(r),t=$t(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Yv(e);)try{const s=await Mv(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,Xv(e,s)}catch(s){await Ci(e,s)}Hf(e)&&Kf(e)}function Yv(r){return An(r)&&r.O_.length<10}function Xv(r,e){r.O_.push(e);const t=$t(r);t.r_()&&t.V_&&t.m_(e.mutations)}function Hf(r){return An(r)&&!$t(r).n_()&&r.O_.length>0}function Kf(r){$t(r).start()}async function Zv(r){$t(r).p_()}async function eI(r){const e=$t(r);for(const t of r.O_)e.m_(t.mutations)}async function tI(r,e,t){const n=r.O_.shift(),s=Ya.from(n,e,t);await Gf(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await dr(r)}async function nI(r,e){e&&$t(r).V_&&await async function(n,s){if(function(o){return U_(o)&&o!==k.ABORTED}(s.code)){const i=n.O_.shift();$t(n).s_(),await Gf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await dr(n)}}(r,e),Hf(r)&&Kf(r)}async function nh(r,e){const t=z(r);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const n=An(t);t.L_.add(3),await vs(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qi(t)}async function Sa(r,e){const t=z(r);e?(t.L_.delete(2),await Qi(t)):e||(t.L_.add(2),await vs(t),t.q_.set("Unknown"))}function fr(r){return r.K_||(r.K_=function(t,n,s){const i=z(t);return i.w_(),new $v(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:Kv.bind(null,r),Ro:Wv.bind(null,r),mo:Qv.bind(null,r),d_:Jv.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),lc(r)?cc(r):r.q_.set("Unknown")):(await r.K_.stop(),zf(r))})),r.K_}function $t(r){return r.U_||(r.U_=function(t,n,s){const i=z(t);return i.w_(),new qv(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zv.bind(null,r),mo:nI.bind(null,r),f_:eI.bind(null,r),g_:tI.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await dr(r)):(await r.U_.stop(),r.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new uc(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hc(r,e){if(ge("AsyncQueue",`${e}: ${r}`),zt(r))return new j(k.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(t,n)=>B.comparator(t.key,n.key),this.keyedMap=Br(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new qn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new qn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.W_=new oe(B.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class sr{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new sr(e,t,qn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ui(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class sI{constructor(){this.queries=sh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=z(t),i=s.queries;s.queries=sh(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new j(k.ABORTED,"Firestore shutting down"))}}function sh(){return new Gt(r=>qd(r),Ui)}async function iI(r,e){const t=z(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new rI,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=hc(o,`Initialization of query '${jn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&dc(t)}async function oI(r,e){const t=z(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function aI(r,e){const t=z(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(n=!0);o.z_=s}}n&&dc(t)}function cI(r,e,t){const n=z(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function dc(r){r.Y_.forEach(e=>{e.next()})}var Ra,ih;(ih=Ra||(Ra={})).ea="default",ih.Cache="cache";class lI{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new sr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ra.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.key=e}}class Qf{constructor(e){this.key=e}}class uI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Q(),this.mutatedKeys=Q(),this.Aa=Gd(e),this.Ra=new qn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new rh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const y=s.get(f),T=gs(this.query,p)?p:null,R=!!y&&this.mutatedKeys.has(y.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let C=!1;y&&T?y.data.isEqual(T.data)?R!==x&&(n.track({type:3,doc:T}),C=!0):this.ga(y,T)||(n.track({type:2,doc:T}),C=!0,(l&&this.Aa(T,l)>0||h&&this.Aa(T,h)<0)&&(c=!0)):!y&&T?(n.track({type:0,doc:T}),C=!0):y&&!T&&(n.track({type:1,doc:y}),C=!0,(l||h)&&(c=!0)),C&&(T?(o=o.add(T),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(T,R){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return x(T)-x(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new sr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Q(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Qf(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Wf(n))}),t}ba(e){this.Ta=e.Ts,this.da=Q();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return sr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class hI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class dI{constructor(e){this.key=e,this.va=!1}}class fI{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Gt(c=>qd(c),Ui),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(B.comparator),this.Na=new Map,this.La=new rc,this.Ba={},this.ka=new Map,this.qa=In.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pI(r,e,t=!0){const n=Yi(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Jf(n,e,t,!0),s}async function mI(r,e){const t=Yi(r);await Jf(t,e,!0,!1)}async function Jf(r,e,t,n){const s=await Si(r.localStore,Ge(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await fc(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Ji(r.remoteStore,s),c}async function fc(r,e,t,n,s){r.Ka=(p,y,T)=>async function(x,C,U,$){let F=C.view.ma(U);F.ns&&(F=await ba(x.localStore,C.query,!1).then(({documents:v})=>C.view.ma(v,F)));const L=$&&$.targetChanges.get(C.targetId),D=$&&$.targetMismatches.get(C.targetId)!=null,N=C.view.applyChanges(F,x.isPrimaryClient,L,D);return Pa(x,C.targetId,N.wa),N.snapshot}(r,p,y,T);const i=await ba(r.localStore,e,!0),o=new uI(e,i.Ts),c=o.ma(i.documents),l=_s.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);Pa(r,t,h.wa);const f=new hI(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function gI(r,e,t){const n=z(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!Ui(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await nr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&rr(n.remoteStore,s.targetId),ir(n,s.targetId)}).catch(qt)):(ir(n,s.targetId),await nr(n.localStore,s.targetId,!0))}async function yI(r,e){const t=z(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),rr(t.remoteStore,n.targetId))}async function _I(r,e,t){const n=yc(r);try{const s=await function(o,c){const l=z(o),h=ue.now(),f=c.reduce((T,R)=>T.add(R.key),Q());let p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=qe(),x=Q();return l.cs.getEntries(T,f).next(C=>{R=C,R.forEach((U,$)=>{$.isValidDocument()||(x=x.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,R)).next(C=>{p=C;const U=[];for(const $ of c){const F=F_($,p.get($.key).overlayedDocument);F!=null&&U.push(new vt($.key,F,Vd(F.value.mapValue),Oe.exists(!0)))}return l.mutationQueue.addMutationBatch(T,h,U,c)}).next(C=>{y=C;const U=C.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(T,C.batchId,U)})}).then(()=>({batchId:y.batchId,changes:Kd(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new oe(W)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,s.batchId,t),await Ht(n,s.changes),await dr(n.remoteStore)}catch(s){const i=hc(s,"Failed to persist write");t.reject(i)}}async function Yf(r,e){const t=z(r);try{const n=await Lv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?G(o.va):s.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await Ht(t,n,e)}catch(n){await qt(n)}}function oh(r,e,t){const n=z(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=z(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const y of p.j_)y.Z_(c)&&(h=!0)}),h&&dc(l)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function vI(r,e,t){const n=z(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new oe(B.comparator);o=o.insert(i,de.newNoDocument(i,H.min()));const c=Q().add(i),l=new ys(H.min(),new Map,new oe(W),o,c);await Yf(n,l),n.Oa=n.Oa.remove(i),n.Na.delete(e),gc(n)}else await nr(n.localStore,e,!1).then(()=>ir(n,e,t)).catch(qt)}async function II(r,e){const t=z(r),n=e.batch.batchId;try{const s=await Nv(t.localStore,e);mc(t,n,null),pc(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ht(t,s)}catch(s){await qt(s)}}async function TI(r,e,t){const n=z(r);try{const s=await function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(G(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);mc(n,e,t),pc(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ht(n,s)}catch(s){await qt(s)}}function pc(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function mc(r,e,t){const n=z(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function ir(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Xf(r,n)})}function Xf(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(rr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),gc(r))}function Pa(r,e,t){for(const n of t)n instanceof Wf?(r.La.addReference(n.key,e),EI(r,n)):n instanceof Qf?(V("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Xf(r,n.key)):q()}function EI(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(V("SyncEngine","New document in limbo: "+t),r.xa.add(n),gc(r))}function gc(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new B(te.fromString(e)),n=r.qa.next();r.Na.set(n,new dI(t)),r.Oa=r.Oa.insert(t,n),Ji(r.remoteStore,new ht(Ge(Ka(t.path)),n,"TargetPurposeLimboResolution",Be.oe))}}async function Ht(r,e,t){const n=z(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ic.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(l,h){const f=z(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(h,y=>S.forEach(y.$i,T=>f.persistence.referenceDelegate.addReference(p,y.targetId,T)).next(()=>S.forEach(y.Ui,T=>f.persistence.referenceDelegate.removeReference(p,y.targetId,T)))))}catch(p){if(!zt(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const T=f.os.get(y),R=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(y,x)}}}(n.localStore,i))}async function wI(r,e){const t=z(r);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const n=await Nf(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new j(k.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ht(t,n.hs)}}function bI(r,e){const t=z(r),n=t.Na.get(e);if(n&&n.va)return Q().add(n.key);{let s=Q();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function AI(r,e){const t=z(r),n=await ba(t.localStore,e.query,!0),s=e.view.ba(n);return t.isPrimaryClient&&Pa(t,e.targetId,s.wa),s}async function SI(r,e){const t=z(r);return Mf(t.localStore,e).then(n=>Ht(t,n))}async function RI(r,e,t,n){const s=z(r),i=await function(c,l){const h=z(c),f=z(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(y=>y?h.localDocuments.getDocuments(p,y):S.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await dr(s.remoteStore):t==="acknowledged"||t==="rejected"?(mc(s,e,n||null),pc(s,e),function(c,l){z(z(c).mutationQueue).On(l)}(s.localStore,e)):q(),await Ht(s,i)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function PI(r,e){const t=z(r);if(Yi(t),yc(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await ah(t,n.toArray());t.Qa=!0,await Sa(t.remoteStore,!0);for(const i of s)Ji(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const n=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(ir(t,o),nr(t.localStore,o,!0))),rr(t.remoteStore,o)}),await s,await ah(t,n),function(o){const c=z(o);c.Na.forEach((l,h)=>{rr(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new oe(B.comparator)}(t),t.Qa=!1,await Sa(t.remoteStore,!1)}}async function ah(r,e,t){const n=z(r),s=[],i=[];for(const o of e){let c;const l=n.Ma.get(o);if(l&&l.length!==0){c=await Si(n.localStore,Ge(l[0]));for(const h of l){const f=n.Fa.get(h),p=await AI(n,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Of(n.localStore,o);c=await Si(n.localStore,h),await fc(n,Zf(h),o,!1,c.resumeToken)}s.push(c)}return n.Ca.d_(i),s}function Zf(r){return Ud(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function CI(r){return function(t){return z(z(t).persistence).Qi()}(z(r).localStore)}async function kI(r,e,t,n){const s=z(r);if(s.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Mf(s.localStore,zd(i[0])),c=ys.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ye.EMPTY_BYTE_STRING);await Ht(s,o,c);break}case"rejected":await nr(s.localStore,e,!0),ir(s,e,n);break;default:q()}}async function DI(r,e,t){const n=Yi(r);if(n.Qa){for(const s of e){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){V("SyncEngine","Adding an already active target "+s);continue}const i=await Of(n.localStore,s),o=await Si(n.localStore,i);await fc(n,Zf(i),o.targetId,!1,o.resumeToken),Ji(n.remoteStore,o)}for(const s of t)n.Ma.has(s)&&await nr(n.localStore,s,!1).then(()=>{rr(n.remoteStore,s),ir(n,s)}).catch(qt)}}function Yi(r){const e=z(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vI.bind(null,e),e.Ca.d_=aI.bind(null,e.eventManager),e.Ca.$a=cI.bind(null,e.eventManager),e}function yc(r){const e=z(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=II.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TI.bind(null,e),e}class us{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Vf(this.persistence,new xf,e.initialUser,this.serializer)}Ga(e){return new kf(Ki.Zr,this.serializer)}Wa(e){return new Ff}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}us.provider={build:()=>new us};class ep extends us{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await yc(this.Ja.syncEngine),await dr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Vf(this.persistence,new xf,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new gv(n,e.asyncQueue,t)}Ha(e,t){const n=new Qy(t,this.persistence);return new Wy(e.asyncQueue,n)}Ga(e){const t=Df(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new sc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Bf(),ui(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Ff}}class xI extends ep{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof qo&&(this.sharedClientState.syncEngine={no:RI.bind(null,t),ro:kI.bind(null,t),io:DI.bind(null,t),Qi:CI.bind(null,t),eo:SI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await PI(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Bf();if(!qo.D(t))throw new j(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Df(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new qo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class hs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>oh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=wI.bind(null,this.syncEngine),await Sa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sI}()}createDatastore(e){const t=Wi(e.databaseInfo.databaseId),n=function(i){return new Uv(i)}(e.databaseInfo);return function(i,o,c,l){return new zv(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new Hv(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>oh(this.syncEngine,t,0),function(){return th.D()?new th:new jv}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new fI(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await vs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hs.provider={build:()=>new hs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ge("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=ke.UNAUTHENTICATED,this.clientId=yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=hc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Go(r,e){r.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Nf(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function ch(r,e){r.asyncQueue.verifyOperationInProgress();const t=await LI(r);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>nh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>nh(e.remoteStore,s)),r._onlineComponents=e}async function LI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Go(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;es("Error using user provided cache. Falling back to memory cache: "+t),await Go(r,new us)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Go(r,new us);return r._offlineComponents}async function tp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await ch(r,r._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await ch(r,new hs))),r._onlineComponents}function OI(r){return tp(r).then(e=>e.syncEngine)}async function MI(r){const e=await tp(r),t=e.eventManager;return t.onListen=pI.bind(null,e.syncEngine),t.onUnlisten=gI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yI.bind(null,e.syncEngine),t}function jI(r,e,t={}){const n=new mt;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new VI({next:y=>{f.Za(),o.enqueueAndForget(()=>oI(i,p)),y.fromCache&&l.source==="server"?h.reject(new j(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new lI(c,f,{includeMetadataChanges:!0,_a:!0});return iI(i,p)}(await MI(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(r,e,t){if(!t)throw new j(k.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function FI(r,e,t,n){if(e===!0&&n===!0)throw new j(k.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function uh(r){if(!B.isDocumentKey(r))throw new j(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function hh(r){if(B.isDocumentKey(r))throw new j(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Xi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":q()}function or(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new j(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xi(r);throw new j(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=np((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new jy;switch(n.type){case"firstParty":return new Uy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=lh.get(t);n&&(V("ComponentProvider","Removing Datastore"),lh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Sn(this.firestore,e,this._query)}}class He{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class jt extends Sn{constructor(e,t,n){super(e,t,Ka(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new B(e))}withConverter(e){return new jt(this.firestore,e,this._path)}}function Zi(r,e,...t){if(r=fe(r),rp("collection","path",e),r instanceof _c){const n=te.fromString(e,...t);return hh(n),new jt(r,null,n)}{if(!(r instanceof He||r instanceof jt))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(te.fromString(e,...t));return hh(n),new jt(r.firestore,null,n)}}function Is(r,e,...t){if(r=fe(r),arguments.length===1&&(e=yd.newId()),rp("doc","path",e),r instanceof _c){const n=te.fromString(e,...t);return uh(n),new He(r,null,new B(n))}{if(!(r instanceof He||r instanceof jt))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(te.fromString(e,...t));return uh(n),new He(r.firestore,r instanceof jt?r.converter:null,new B(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Uf(this,"async_queue_retry"),this.Vu=()=>{const n=ui();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ui();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new mt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!zt(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw ge("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=uc.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Ts extends _c{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new fh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fh(e),this._firestoreClient=void 0,await e}}}function BI(r,e,t){t||(t="(default)");const n=Mi(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Xr(i,e))return s;throw new j(k.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new j(k.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function sp(r){if(r._terminated)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||UI(r),r._firestoreClient}function UI(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,h,f){return new g_(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,np(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new NI(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(ye.fromBase64String(e))}catch(t){throw new j(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ar(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=/^__.*__$/;class qI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}}class ip{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function op(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Tc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ki(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(op(this.Cu)&&$I.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class zI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Wi(e)}Qu(e,t,n,s=!1){return new Tc({Cu:e,methodName:t,qu:n,path:le.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ec(r){const e=r._freezeSettings(),t=Wi(r._databaseId);return new zI(r._databaseId,!!e.ignoreUndefinedProperties,t)}function GI(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);bc("Data must be an object, but it was:",o,n);const c=ap(n,o);let l,h;if(i.merge)l=new Ue(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const y=Ca(e,p,t);if(!o.contains(y))throw new j(k.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);lp(f,y)||f.push(y)}l=new Ue(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new qI(new De(c),l,h)}class no extends to{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof no}}class wc extends to{_toFieldTransform(e){return new ef(e.path,new Xn)}isEqual(e){return e instanceof wc}}function HI(r,e,t,n){const s=r.Qu(1,e,t);bc("Data must be an object, but it was:",s,n);const i=[],o=De.empty();bn(n,(l,h)=>{const f=Ac(e,l,t);h=fe(h);const p=s.Nu(f);if(h instanceof no)i.push(f);else{const y=Es(h,p);y!=null&&(i.push(f),o.set(f,y))}});const c=new Ue(i);return new ip(o,c,s.fieldTransforms)}function KI(r,e,t,n,s,i){const o=r.Qu(1,e,t),c=[Ca(e,n,t)],l=[s];if(i.length%2!=0)throw new j(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)c.push(Ca(e,i[y])),l.push(i[y+1]);const h=[],f=De.empty();for(let y=c.length-1;y>=0;--y)if(!lp(h,c[y])){const T=c[y];let R=l[y];R=fe(R);const x=o.Nu(T);if(R instanceof no)h.push(T);else{const C=Es(R,x);C!=null&&(h.push(T),f.set(T,C))}}const p=new Ue(h);return new ip(f,p,o.fieldTransforms)}function WI(r,e,t,n=!1){return Es(t,r.Qu(n?4:3,e))}function Es(r,e){if(cp(r=fe(r)))return bc("Unsupported field value:",e,r),ap(r,e);if(r instanceof to)return function(n,s){if(!op(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=Es(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return V_(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ue.fromDate(n);return{timestampValue:tr(s.serializer,i)}}if(n instanceof ue){const i=new ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tr(s.serializer,i)}}if(n instanceof vc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ar)return{bytesValue:cf(s.serializer,n._byteString)};if(n instanceof He){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ec(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ic)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Qa(c.serializer,l)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${Xi(n)}`)}(r,e)}function ap(r,e){const t={};return Cd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(r,(n,s)=>{const i=Es(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function cp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ue||r instanceof vc||r instanceof ar||r instanceof He||r instanceof to||r instanceof Ic)}function bc(r,e,t){if(!cp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=Xi(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Ca(r,e,t){if((e=fe(e))instanceof eo)return e._internalPath;if(typeof e=="string")return Ac(r,e);throw ki("Field path arguments must be of type string or ",r,!1,void 0,t)}const QI=new RegExp("[~\\*/\\[\\]]");function Ac(r,e,t){if(e.search(QI)>=0)throw ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new eo(...e.split("."))._internalPath}catch{throw ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ki(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new j(k.INVALID_ARGUMENT,c+r+l)}function lp(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JI extends up{data(){return super.data()}}function Sc(r,e){return typeof e=="string"?Ac(r,e):e instanceof eo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new j(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rc{}class hp extends Rc{}function XI(r,e,...t){let n=[];e instanceof Rc&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof Cc).length,c=i.filter(l=>l instanceof Pc).length;if(o>1||o>0&&c>0)throw new j(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Pc extends hp{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Pc(e,t,n)}_apply(e){const t=this._parse(e);return dp(e._query,t),new Sn(e.firestore,e.converter,ma(e._query,t))}_parse(e){const t=Ec(e.firestore);return function(i,o,c,l,h,f,p){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new j(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){mh(p,f);const T=[];for(const R of p)T.push(ph(l,i,R));y={arrayValue:{values:T}}}else y=ph(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||mh(p,f),y=WI(c,o,p,f==="in"||f==="not-in");return Y.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Cc extends Rc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)dp(o,l),o=ma(o,l)}(e._query,t),new Sn(e.firestore,e.converter,ma(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kc extends hp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new kc(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new j(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cs(i,o)}(e._query,this._field,this._direction);return new Sn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ur(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ZI(r,e="asc"){const t=e,n=Sc("orderBy",r);return kc._create(n,t)}function ph(r,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new j(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$d(e)&&t.indexOf("/")!==-1)throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(te.fromString(t));if(!B.isDocumentKey(n))throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return os(r,new B(n))}if(t instanceof He)return os(r,t._key);throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xi(t)}.`)}function mh(r,e){if(!Array.isArray(r)||r.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dp(r,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class eT{convertValue(e,t="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return bn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>ce(o.doubleValue));return new Ic(i)}convertGeoPoint(e){return new vc(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ga(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ss(e));default:return null}}convertTimestamp(e){const t=yt(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=te.fromString(e);G(_f(n));const s=new mn(n.get(1),n.get(3)),i=new B(n.popFirst(5));return s.isEqual(t)||ge(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nT extends up{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Sc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class hi extends nT{data(e={}){return super.data(e)}}class rT{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new hi(this._firestore,this._userDataWriter,n.key,n,new Ys(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new hi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new hi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:sT(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class iT extends eT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function fp(r){r=or(r,Sn);const e=or(r.firestore,Ts),t=sp(e),n=new iT(e);return YI(r._query),jI(t,r._query).then(s=>new rT(e,n,r,s))}function pp(r,e,t,...n){r=or(r,He);const s=or(r.firestore,Ts),i=Ec(s);let o;return o=typeof(e=fe(e))=="string"||e instanceof eo?KI(i,"updateDoc",r._key,e,t,n):HI(i,"updateDoc",r._key,e),Dc(s,[o.toMutation(r._key,Oe.exists(!0))])}function mp(r){return Dc(or(r.firestore,Ts),[new zi(r._key,Oe.none())])}function gp(r,e){const t=or(r.firestore,Ts),n=Is(r),s=tT(r.converter,e);return Dc(t,[GI(Ec(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Oe.exists(!1))]).then(()=>n)}function Dc(r,e){return function(n,s){const i=new mt;return n.asyncQueue.enqueueAndForget(async()=>_I(await OI(n),s,i)),i.promise}(sp(r),e)}class oT{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=uT(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function aT(r){return new oT(r)}class cT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=hs.provider,this._offlineComponentProvider={build:t=>new ep(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class lT{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=hs.provider,this._offlineComponentProvider={build:t=>new xI(t,e==null?void 0:e.cacheSizeBytes)}}}function uT(r){return new cT(void 0)}function hT(){return new lT}function yp(){return new wc("serverTimestamp")}(function(e,t=!0){(function(s){lr=s})(wn),fn(new Ft("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new Ts(new Fy(n.getProvider("auth-internal")),new qy(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new j(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),et(cu,"4.7.3",e),et(cu,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="firebasestorage.googleapis.com",vp="storageBucket",dT=2*60*1e3,fT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends it{constructor(e,t,n=0){super(Ho(e),`Firebase Storage: ${t} (${Ho(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ho(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function Ho(r){return"storage/"+r}function xc(){const r="An unknown error occurred, please check the error payload for server response.";return new me(pe.UNKNOWN,r)}function pT(r){return new me(pe.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function mT(r){return new me(pe.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gT(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new me(pe.UNAUTHENTICATED,r)}function yT(){return new me(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _T(r){return new me(pe.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function vT(){return new me(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IT(){return new me(pe.CANCELED,"User canceled the upload/download.")}function TT(r){return new me(pe.INVALID_URL,"Invalid URL '"+r+"'.")}function ET(r){return new me(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function wT(){return new me(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vp+"' property when initializing the app?")}function bT(){return new me(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AT(){return new me(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ST(r){return new me(pe.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ka(r){return new me(pe.INVALID_ARGUMENT,r)}function Ip(){return new me(pe.APP_DELETED,"The Firebase app was deleted.")}function RT(r){return new me(pe.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qr(r,e){return new me(pe.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Mr(r){throw new me(pe.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=ze.makeFromUrl(e,t)}catch{return new ze(e,"")}if(n.path==="")return n;throw ET(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(L){L.path_=decodeURIComponent(L.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${s}/o${y}`,"i"),R={bucket:1,path:3},x=t===_p?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",U=new RegExp(`^https?://${x}/${s}/${C}`,"i"),F=[{regex:c,indices:l,postModify:i},{regex:T,indices:R,postModify:h},{regex:U,indices:{bucket:1,path:2},postModify:h}];for(let L=0;L<F.length;L++){const D=F[L],N=D.regex.exec(e);if(N){const v=N[D.indices.bucket];let g=N[D.indices.path];g||(g=""),n=new ze(v,g),D.postModify(n);break}}if(n==null)throw TT(e);return n}}class PT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(r,e,t){let n=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...C){h||(h=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,r(T,l())},C)}function y(){i&&clearTimeout(i)}function T(C,...U){if(h){y();return}if(C){y(),f.call(null,C,...U);return}if(l()||o){y(),f.call(null,C,...U);return}n<64&&(n*=2);let F;c===1?(c=2,F=0):F=(n+Math.random())*1e3,p(F)}let R=!1;function x(C){R||(R=!0,y(),!h&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,x(!0)},t),x}function kT(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(r){return r!==void 0}function xT(r){return typeof r=="object"&&!Array.isArray(r)}function Vc(r){return typeof r=="string"||r instanceof String}function gh(r){return Nc()&&r instanceof Blob}function Nc(){return typeof Blob<"u"}function yh(r,e,t,n){if(n<e)throw ka(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw ka(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(r,e,t){let n=e;return t==null&&(n=`https://${e}`),`${t}://${n}/v0${r}`}function Tp(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var hn;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(hn||(hn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,t,n,s,i,o,c,l,h,f,p,y=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,R)=>{this.resolve_=T,this.reject_=R,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new Xs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===hn.NO_ERROR,l=i.getStatus();if(!c||VT(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===hn.ABORT;n(!1,new Xs(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;n(!0,new Xs(h,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());DT(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=xc();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ip():IT();o(l)}else{const l=vT();o(l)}};this.canceled_?t(!1,new Xs(!1,null,!0)):this.backoffId_=CT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xs{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function LT(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function OT(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function MT(r,e){e&&(r["X-Firebase-GMPID"]=e)}function jT(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function FT(r,e,t,n,s,i,o=!0){const c=Tp(r.urlParams),l=r.url+c,h=Object.assign({},r.headers);return MT(h,e),LT(h,t),OT(h,i),jT(h,n),new NT(l,r.method,h,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function UT(...r){const e=BT();if(e!==void 0){const t=new e;for(let n=0;n<r.length;n++)t.append(r[n]);return t.getBlob()}else{if(Nc())return new Blob(r);throw new me(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $T(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(r){if(typeof atob>"u")throw ST("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ko{constructor(e,t){this.data=e,this.contentType=t||null}}function zT(r,e){switch(r){case Xe.RAW:return new Ko(Ep(e));case Xe.BASE64:case Xe.BASE64URL:return new Ko(wp(r,e));case Xe.DATA_URL:return new Ko(HT(e),KT(e))}throw xc()}function Ep(r){const e=[];for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=n,o=r.charCodeAt(++t);n=65536|(i&1023)<<10|o&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function GT(r){let e;try{e=decodeURIComponent(r)}catch{throw Qr(Xe.DATA_URL,"Malformed data URL.")}return Ep(e)}function wp(r,e){switch(r){case Xe.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Qr(r,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Xe.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Qr(r,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=qT(e)}catch(s){throw s.message.includes("polyfill")?s:Qr(r,"Invalid character found")}const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}class bp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Qr(Xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;n!=null&&(this.base64=WT(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function HT(r){const e=new bp(r);return e.base64?wp(Xe.BASE64,e.rest):GT(e.rest)}function KT(r){return new bp(r).contentType}function WT(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){let n=0,s="";gh(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(gh(this.data_)){const n=this.data_,s=$T(n,e,t);return s===null?null:new Ct(s)}else{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Ct(n,!0)}}static getBlob(...e){if(Nc()){const t=e.map(n=>n instanceof Ct?n.data_:n);return new Ct(UT.apply(null,t))}else{const t=e.map(o=>Vc(o)?zT(Xe.RAW,o).data:o.data_);let n=0;t.forEach(o=>{n+=o.byteLength});const s=new Uint8Array(n);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Ct(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(r){let e;try{e=JSON.parse(r)}catch{return null}return xT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function JT(r,e){const t=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?t:r+"/"+t}function Sp(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(r,e){return e}class Le{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||YT}}let Zs=null;function XT(r){return!Vc(r)||r.length<2?r:Sp(r)}function Rp(){if(Zs)return Zs;const r=[];r.push(new Le("bucket")),r.push(new Le("generation")),r.push(new Le("metageneration")),r.push(new Le("name","fullPath",!0));function e(i,o){return XT(o)}const t=new Le("name");t.xform=e,r.push(t);function n(i,o){return o!==void 0?Number(o):o}const s=new Le("size");return s.xform=n,r.push(s),r.push(new Le("timeCreated")),r.push(new Le("updated")),r.push(new Le("md5Hash",null,!0)),r.push(new Le("cacheControl",null,!0)),r.push(new Le("contentDisposition",null,!0)),r.push(new Le("contentEncoding",null,!0)),r.push(new Le("contentLanguage",null,!0)),r.push(new Le("contentType",null,!0)),r.push(new Le("metadata","customMetadata",!0)),Zs=r,Zs}function ZT(r,e){function t(){const n=r.bucket,s=r.fullPath,i=new ze(n,s);return e._makeStorageReference(i)}Object.defineProperty(r,"ref",{get:t})}function eE(r,e,t){const n={};n.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];n[o.local]=o.xform(n,e[o.server])}return ZT(n,r),n}function Pp(r,e,t){const n=Ap(e);return n===null?null:eE(r,n,t)}function tE(r,e,t,n){const s=Ap(e);if(s===null||!Vc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=r.bucket,p=r.fullPath,y="/b/"+o(f)+"/o/"+o(p),T=Lc(y,t,n),R=Tp({alt:"media",token:h});return T+R})[0]}function nE(r,e){const t={},n=e.length;for(let s=0;s<n;s++){const i=e[s];i.writable&&(t[i.server]=r[i.local])}return JSON.stringify(t)}class Cp{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(r){if(!r)throw xc()}function rE(r,e){function t(n,s){const i=Pp(r,s,e);return kp(i!==null),i}return t}function sE(r,e){function t(n,s){const i=Pp(r,s,e);return kp(i!==null),tE(i,s,r.host,r._protocol)}return t}function Dp(r){function e(t,n){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=yT():s=gT():t.getStatus()===402?s=mT(r.bucket):t.getStatus()===403?s=_T(r.path):s=n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}return e}function iE(r){const e=Dp(r);function t(n,s){let i=e(n,s);return n.getStatus()===404&&(i=pT(r.path)),i.serverResponse=s.serverResponse,i}return t}function oE(r,e,t){const n=e.fullServerUrl(),s=Lc(n,r.host,r._protocol),i="GET",o=r.maxOperationRetryTime,c=new Cp(s,i,sE(r,t),o);return c.errorHandler=iE(e),c}function aE(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function cE(r,e,t){const n=Object.assign({},t);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=aE(null,e)),n}function lE(r,e,t,n,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let F="";for(let L=0;L<2;L++)F=F+Math.random().toString().slice(2);return F}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=cE(e,n,s),f=nE(h,t),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+l+"--",T=Ct.getBlob(p,n,y);if(T===null)throw bT();const R={name:h.fullPath},x=Lc(i,r.host,r._protocol),C="POST",U=r.maxUploadRetryTime,$=new Cp(x,C,rE(r,t),U);return $.urlParams=R,$.headers=o,$.body=T.uploadData(),$.errorHandler=Dp(e),$}class uE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,s){if(this.sent_)throw Mr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hE extends uE{initXhr(){this.xhr_.responseType="text"}}function xp(){return new hE}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this._service=e,t instanceof ze?this._location=t:this._location=ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Tn(e,t)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Sp(this._location.path)}get storage(){return this._service}get parent(){const e=QT(this._location.path);if(e===null)return null;const t=new ze(this._location.bucket,e);return new Tn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RT(e)}}function dE(r,e,t){r._throwIfRoot("uploadBytes");const n=lE(r.storage,r._location,Rp(),new Ct(e,!0),t);return r.storage.makeRequestWithTokens(n,xp).then(s=>({metadata:s,ref:r}))}function fE(r){r._throwIfRoot("getDownloadURL");const e=oE(r.storage,r._location,Rp());return r.storage.makeRequestWithTokens(e,xp).then(t=>{if(t===null)throw AT();return t})}function pE(r,e){const t=JT(r._location.path,e),n=new ze(r._location.bucket,t);return new Tn(r.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(r){return/^[A-Za-z]+:\/\//.test(r)}function gE(r,e){return new Tn(r,e)}function Vp(r,e){if(r instanceof Oc){const t=r;if(t._bucket==null)throw wT();const n=new Tn(t,t._bucket);return e!=null?Vp(n,e):n}else return e!==void 0?pE(r,e):r}function yE(r,e){if(e&&mE(e)){if(r instanceof Oc)return gE(r,e);throw ka("To use ref(service, url), the first argument must be a Storage instance.")}else return Vp(r,e)}function _h(r,e){const t=e==null?void 0:e[vp];return t==null?null:ze.makeFromBucketSpec(t,r)}function _E(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:fg(s,r.app.options.projectId))}class Oc{constructor(e,t,n,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=_p,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dT,this._maxUploadRetryTime=fT,this._requests=new Set,s!=null?this._bucket=ze.makeFromBucketSpec(s,this._host):this._bucket=_h(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=_h(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tn(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new PT(Ip());{const o=FT(e,this._appId,n,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const vh="@firebase/storage",Ih="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="storage";function vE(r,e,t){return r=fe(r),dE(r,e,t)}function IE(r){return r=fe(r),fE(r)}function TE(r,e){return r=fe(r),yE(r,e)}function EE(r=cd(),e){r=fe(r);const n=Mi(r,Np).getImmediate({identifier:e}),s=hg("storage");return s&&wE(n,...s),n}function wE(r,e,t,n={}){_E(r,e,t,n)}function bE(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new Oc(t,n,s,e,wn)}function AE(){fn(new Ft(Np,bE,"PUBLIC").setMultipleInstances(!0)),et(vh,Ih,""),et(vh,Ih,"esm2017")}AE();function Mc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SE=Lp,Op=new fs("auth","Firebase",Lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new ja("@firebase/auth");function RE(r,...e){Di.logLevel<=J.WARN&&Di.warn(`Auth (${wn}): ${r}`,...e)}function di(r,...e){Di.logLevel<=J.ERROR&&Di.error(`Auth (${wn}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r,...e){throw Fc(r,...e)}function Qe(r,...e){return Fc(r,...e)}function jc(r,e,t){const n=Object.assign(Object.assign({},SE()),{[e]:t});return new fs("auth","Firebase",n).create(e,{appName:r.name})}function dn(r){return jc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mp(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&rt(r,"argument-error"),jc(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Op.create(r,...e)}function K(r,e,...t){if(!r)throw Fc(e,...t)}function dt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw di(e),new Error(e)}function _t(r,e){r||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function PE(){return Th()==="http:"||Th()==="https:"}function Th(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PE()||yg()||"connection"in navigator)?navigator.onLine:!0}function kE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=pg()||_g()}get(){return CE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(r,e){_t(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=new ws(3e4,6e4);function Uc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function pr(r,e,t,n,s={}){return Fp(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=ps(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},i);return gg()||(h.referrerPolicy="no-referrer"),jp.fetch()(Bp(r,r.config.apiHost,t,c),h)})}async function Fp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},DE),e);try{const s=new NE(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ei(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ei(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw ei(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jc(r,f,h);rt(r,f)}}catch(s){if(s instanceof it)throw s;rt(r,"network-request-failed",{message:String(s)})}}async function VE(r,e,t,n,s={}){const i=await pr(r,e,t,n,s);return"mfaPendingCredential"in i&&rt(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Bp(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Bc(r.config,s):`${r.config.apiScheme}://${s}`}class NE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Qe(this.auth,"network-request-failed")),xE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ei(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Qe(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(r,e){return pr(r,"POST","/v1/accounts:delete",e)}async function Up(r,e){return pr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OE(r,e=!1){const t=fe(r),n=await t.getIdToken(e),s=$c(n);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Jr(Wo(s.auth_time)),issuedAtTime:Jr(Wo(s.iat)),expirationTime:Jr(Wo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wo(r){return Number(r)*1e3}function $c(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return di("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zh(t);return s?JSON.parse(s):(di("Failed to decode base64 JWT payload"),null)}catch(s){return di("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Eh(r){const e=$c(r);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof it&&ME(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function ME({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jr(this.lastLoginAt),this.creationTime=Jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(r){var e;const t=r.auth,n=await r.getIdToken(),s=await ds(r,Up(t,{idToken:n}));K(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$p(i.providerUserInfo):[],c=BE(r.providerData,o),l=r.isAnonymous,h=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new xa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function FE(r){const e=fe(r);await xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BE(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function $p(r){return r.map(e=>{var{providerId:t}=e,n=Mc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(r,e){const t=await Fp(r,{},async()=>{const n=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=Bp(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",jp.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $E(r,e){return pr(r,"POST","/v2/accounts:revokeToken",Uc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=Eh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await UE(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new zn;return n&&(K(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r,e){K(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Mc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ds(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OE(this,e)}reload(){return FE(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await xi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await ds(this,LE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,T=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:L,isAnonymous:D,providerData:N,stsTokenManager:v}=t;K(F&&v,e,"internal-error");const g=zn.fromJSON(this.name,v);K(typeof F=="string",e,"internal-error"),St(p,e.name),St(y,e.name),K(typeof L=="boolean",e,"internal-error"),K(typeof D=="boolean",e,"internal-error"),St(T,e.name),St(R,e.name),St(x,e.name),St(C,e.name),St(U,e.name),St($,e.name);const _=new ft({uid:F,auth:e,email:y,emailVerified:L,displayName:p,isAnonymous:D,photoURL:R,phoneNumber:T,tenantId:x,stsTokenManager:g,createdAt:U,lastLoginAt:$});return N&&Array.isArray(N)&&(_.providerData=N.map(E=>Object.assign({},E))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,n=!1){const s=new zn;s.updateFromServerResponse(t);const i=new ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await xi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$p(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new zn;c.updateFromIdToken(n);const l=new ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Map;function pt(r){_t(r instanceof Function,"Expected a class definition");let e=wh.get(r);return e?(_t(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,wh.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qp.type="NONE";const bh=qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(r,e,t){return`firebase:${r}:${e}:${t}`}class Gn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=fi(this.userKey,s.apiKey,i),this.fullPersistenceKey=fi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Gn(pt(bh),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||pt(bh);const o=fi(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=ft._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Gn(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Gn(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qp(e))return"Blackberry";if(Jp(e))return"Webos";if(Gp(e))return"Safari";if((e.includes("chrome/")||Hp(e))&&!e.includes("edge/"))return"Chrome";if(Wp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function zp(r=Ie()){return/firefox\//i.test(r)}function Gp(r=Ie()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hp(r=Ie()){return/crios\//i.test(r)}function Kp(r=Ie()){return/iemobile/i.test(r)}function Wp(r=Ie()){return/android/i.test(r)}function Qp(r=Ie()){return/blackberry/i.test(r)}function Jp(r=Ie()){return/webos/i.test(r)}function qc(r=Ie()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function qE(r=Ie()){var e;return qc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zE(){return vg()&&document.documentMode===10}function Yp(r=Ie()){return qc(r)||Wp(r)||Jp(r)||Qp(r)||/windows phone/i.test(r)||Kp(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(r,e=[]){let t;switch(r){case"Browser":t=Ah(Ie());break;case"Worker":t=`${Ah(Ie())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(r,e={}){return pr(r,"GET","/v2/passwordPolicy",Uc(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=6;class WE{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:KE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sh(this),this.idTokenSubscription=new Sh(this),this.beforeStateQueue=new GE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Op,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Up(this,{idToken:e}),n=await ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(dn(this));const t=e?fe(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HE(this),t=new WE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await $E(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&RE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ro(r){return fe(r)}class Sh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ag(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JE(r){zc=r}function YE(r){return zc.loadJS(r)}function XE(){return zc.gapiScript}function ZE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(r,e){const t=Mi(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Xr(i,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function tw(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function nw(r,e,t){const n=ro(r);K(n._canInitEmulator,n,"emulator-config-failed"),K(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Zp(e),{host:o,port:c}=rw(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${i}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),sw()}function Zp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function rw(r){const e=Zp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Rh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Rh(o)}}}function Rh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function sw(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,t){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(r,e){return VE(r,"POST","/v1/accounts:signInWithIdp",Uc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="http://localhost";class En extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Mc(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new En(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Hn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Hn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hn(e,t)}buildRequest(){const e={requestUri:iw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ps(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends so{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends bs{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return lt.credential(t,n)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends bs{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends bs{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return xt.credential(t,n)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await ft._fromIdTokenResponse(e,n,s),o=Ph(n);return new cr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Ph(n);return new cr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Ph(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends it{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Vi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Vi(e,t,n,s)}}function tm(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vi._fromErrorAndOperation(r,i,e,n):i})}async function ow(r,e,t=!1){const n=await ds(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return cr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(r,e,t=!1){const{auth:n}=r;if(ut(n.app))return Promise.reject(dn(n));const s="reauthenticate";try{const i=await ds(r,tm(n,s,e,r),t);K(i.idToken,n,"internal-error");const o=$c(i.idToken);K(o,n,"internal-error");const{sub:c}=o;return K(r.uid===c,n,"user-mismatch"),cr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(r,e,t=!1){if(ut(r.app))return Promise.reject(dn(r));const n="signIn",s=await tm(r,n,e),i=await cr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function lw(r,e,t,n){return fe(r).onIdTokenChanged(e,t,n)}function uw(r,e,t){return fe(r).beforeAuthStateChanged(e,t)}function hw(r,e,t,n){return fe(r).onAuthStateChanged(e,t,n)}function dw(r){return fe(r).signOut()}const Ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=1e3,pw=10;class rm extends nm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);zE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pw):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rm.type="LOCAL";const mw=rm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sm.type="SESSION";const im=sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new io(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await gw(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}io.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Gc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function _w(r){tt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function vw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iw(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Tw(){return om()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firebaseLocalStorageDb",Ew=1,Li="firebaseLocalStorage",cm="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oo(r,e){return r.transaction([Li],e?"readwrite":"readonly").objectStore(Li)}function ww(){const r=indexedDB.deleteDatabase(am);return new As(r).toPromise()}function Va(){const r=indexedDB.open(am,Ew);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Li,{keyPath:cm})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Li)?e(n):(n.close(),await ww(),e(await Va()))})})}async function Ch(r,e,t){const n=oo(r,!0).put({[cm]:e,value:t});return new As(n).toPromise()}async function bw(r,e){const t=oo(r,!1).get(e),n=await new As(t).toPromise();return n===void 0?null:n.value}function kh(r,e){const t=oo(r,!0).delete(e);return new As(t).toPromise()}const Aw=800,Sw=3;class lm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Sw)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=io._getInstance(Tw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vw(),!this.activeServiceWorker)return;this.sender=new yw(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Iw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await Ch(e,Ni,"1"),await kh(e,Ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ch(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>bw(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oo(s,!1).getAll();return new As(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lm.type="LOCAL";const Rw=lm;new ws(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(r,e){return e?pt(e):(K(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pw(r){return cw(r.auth,new Kc(r),r.bypassAuthState)}function Cw(r){const{auth:e,user:t}=r;return K(t,e,"internal-error"),aw(t,new Kc(r),r.bypassAuthState)}async function kw(r){const{auth:e,user:t}=r;return K(t,e,"internal-error"),ow(t,new Kc(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pw;case"linkViaPopup":case"linkViaRedirect":return kw;case"reauthViaPopup":case"reauthViaRedirect":return Cw;default:rt(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new ws(2e3,1e4);async function xw(r,e,t){if(ut(r.app))return Promise.reject(Qe(r,"operation-not-supported-in-this-environment"));const n=ro(r);Mp(r,e,so);const s=Hc(n,t);return new Nt(n,"signInViaPopup",e,s).executeNotNull()}async function Vw(r,e,t){const n=fe(r);Mp(n.auth,e,so);const s=Hc(n.auth,t);return new Nt(n.auth,"linkViaPopup",e,s,n).executeNotNull()}class Nt extends um{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dw.get())};e()}}Nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="pendingRedirect",pi=new Map;class Lw extends um{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=pi.get(this.auth._key());if(!e){try{const n=await Ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}pi.set(this.auth._key(),e)}return this.bypassAuthState||pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ow(r,e){const t=Fw(e),n=jw(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Mw(r,e){pi.set(r._key(),e)}function jw(r){return pt(r._redirectPersistence)}function Fw(r){return fi(Nw,r.config.apiKey,r.name)}async function Bw(r,e,t=!1){if(ut(r.app))return Promise.reject(dn(r));const n=ro(r),s=Hc(n,e),o=await new Lw(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=10*60*1e3;class $w{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hm(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dh(e))}saveEventToCache(e){this.cachedEventUids.add(Dh(e)),this.lastProcessedEventTime=Date.now()}}function Dh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function hm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qw(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(r,e={}){return pr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hw=/^https?/;async function Kw(r){if(r.config.emulator)return;const{authorizedDomains:e}=await zw(r);for(const t of e)try{if(Ww(t))return}catch{}rt(r,"unauthorized-domain")}function Ww(r){const e=Da(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Hw.test(t))return!1;if(Gw.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new ws(3e4,6e4);function xh(){const r=tt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Jw(r){return new Promise((e,t)=>{var n,s,i;function o(){xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xh(),t(Qe(r,"network-request-failed"))},timeout:Qw.get()})}if(!((s=(n=tt().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const c=ZE("iframefcb");return tt()[c]=()=>{gapi.load?o():t(Qe(r,"network-request-failed"))},YE(`${XE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw mi=null,e})}let mi=null;function Yw(r){return mi=mi||Jw(r),mi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new ws(5e3,15e3),Zw="__/auth/iframe",eb="emulator/auth/iframe",tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rb(r){const e=r.config;K(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Bc(e,eb):`https://${r.config.authDomain}/${Zw}`,n={apiKey:e.apiKey,appName:r.name,v:wn},s=nb.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ps(n).slice(1)}`}async function sb(r){const e=await Yw(r),t=tt().gapi;return K(t,r,"internal-error"),e.open({where:document.body,url:rb(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tb,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Qe(r,"network-request-failed"),c=tt().setTimeout(()=>{i(o)},Xw.get());function l(){tt().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ob=500,ab=600,cb="_blank",lb="http://localhost";class Vh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ub(r,e,t,n=ob,s=ab){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},ib),{width:n.toString(),height:s.toString(),top:i,left:o}),h=Ie().toLowerCase();t&&(c=Hp(h)?cb:t),zp(h)&&(e=e||lb,l.scrollbars="yes");const f=Object.entries(l).reduce((y,[T,R])=>`${y}${T}=${R},`,"");if(qE(h)&&c!=="_self")return hb(e||"",c),new Vh(null);const p=window.open(e||"",c,f);K(p,r,"popup-blocked");try{p.focus()}catch{}return new Vh(p)}function hb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="__/auth/handler",fb="emulator/auth/handler",pb=encodeURIComponent("fac");async function Nh(r,e,t,n,s,i){K(r.config.authDomain,r,"auth-domain-config-required"),K(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:wn,eventId:s};if(e instanceof so){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",bg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof bs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${pb}=${encodeURIComponent(l)}`:"";return`${mb(r)}?${ps(c).slice(1)}${h}`}function mb({config:r}){return r.emulator?Bc(r,fb):`https://${r.authDomain}/${db}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="webStorageSupport";class gb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=im,this._completeRedirectFn=Bw,this._overrideRedirectResult=Mw}async _openPopup(e,t,n,s){var i;_t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nh(e,t,n,Da(),s);return ub(e,o,Gc())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Nh(e,t,n,Da(),s);return _w(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await sb(e),n=new $w(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qo,{type:Qo},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qo];o!==void 0&&t(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yp()||Gp()||qc()}}const yb=gb;var Lh="@firebase/auth",Oh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ib(r){fn(new Ft("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xp(r)},h=new QE(n,s,i,l);return tw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),fn(new Ft("auth-internal",e=>{const t=ro(e.getProvider("auth").getImmediate());return(n=>new _b(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Lh,Oh,vb(r)),et(Lh,Oh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=5*60,Eb=nd("authIdTokenMaxAge")||Tb;let Mh=null;const wb=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Eb)return;const s=t==null?void 0:t.token;Mh!==s&&(Mh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bb(r=cd()){const e=Mi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ew(r,{popupRedirectResolver:yb,persistence:[Rw,mw,im]}),n=nd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=wb(i.toString());uw(t,o,()=>o(t.currentUser)),lw(t,c=>o(c))}}const s=ed("auth");return s&&nw(t,`http://${s}`),t}function Ab(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}JE({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Qe("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Ab().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ib("Browser");const Sb={apiKey:"AIzaSyCh5zX-2AgcibKw-tCvXpsFuRA9POYFt-Y",authDomain:"my-trip-record.firebaseapp.com",projectId:"my-trip-record",storageBucket:"my-trip-record.firebasestorage.app",messagingSenderId:"656393008816",appId:"1:656393008816:web:307ff5f1ee6e509242ad75",measurementId:"G-8SQ1KTE1YP"},Wc=ad(Sb),Kt=BI(Wc,{localCache:aT({tabManager:hT()})}),Rb=EE(Wc),ao=bb(Wc);function Pb(){return new Promise(r=>{const e=hw(ao,t=>{e(),r(t)})})}const dm=new lt;async function fm(){return(await xw(ao,dm)).user}async function pm(){return(await Vw(ao.currentUser,dm)).user}async function Cb(){await dw(ao)}const Na={user:null,currentTrip:null,currentTripId:null,trips:[],isLoading:!1,language:localStorage.getItem("language")||"ja"},Yr=new Map;function re(){return{...Na}}function Ze(r){Object.assign(Na,r),Object.keys(r).forEach(e=>{Yr.has(e)&&Yr.get(e).forEach(t=>t(Na[e]))})}function Qc(r,e){Yr.has(r)||Yr.set(r,new Set),Yr.get(r).add(e)}function mm(r){localStorage.setItem("language",r),Ze({language:r})}const kb=Object.freeze(Object.defineProperty({__proto__:null,getState:re,setLanguage:mm,setState:Ze,subscribe:Qc},Symbol.toStringTag,{value:"Module"}));function co(){var e;return(e=re().user)==null?void 0:e.uid}async function La(r){const e=XI(Zi(Kt,"users",r,"trips"),ZI("createdAt","desc"));return(await fp(e)).docs.map(n=>({id:n.id,...n.data()}))}async function Db(r,e){const t={...e,createdAt:yp()},s=(await gp(Zi(Kt,"users",r,"trips"),t)).id;if(t.startDate&&t.endDate){const i=new Date(t.startDate),o=new Date(t.endDate),c=Math.ceil((o-i)/(1e3*60*60*24))+1;for(let l=1;l<=c;l++)l===1?(await $n(s,{day:1,time:"08:00",title:"出発",category:"transport",order:0}),await $n(s,{day:1,time:"15:00",title:"ホテル到着・チェックイン",category:"hotel",order:1})):l===c?(await $n(s,{day:l,time:"10:00",title:"ホテル出発・帰路へ",category:"transport",order:0}),await $n(s,{day:l,time:"18:00",title:"自宅到着",category:"other",order:1})):await $n(s,{day:l,time:"09:00",title:"観光スタート",category:"sightseeing",order:0})}return s}async function xb(r,e,t){const n=Is(Kt,"users",r,"trips",e);await pp(n,t)}async function Vb(r,e){await mp(Is(Kt,"users",r,"trips",e))}async function Rn(r,e){const t=co();return(await fp(Zi(Kt,"users",t,"trips",r,e))).docs.map(s=>({id:s.id,...s.data()}))}async function Pn(r,e,t){const n=co();return(await gp(Zi(Kt,"users",n,"trips",r,e),{...t,createdAt:yp()})).id}async function lo(r,e,t,n){const s=co();await pp(Is(Kt,"users",s,"trips",r,e,t),n)}async function gm(r,e,t){const n=co();await mp(Is(Kt,"users",n,"trips",r,e,t))}const Nb=r=>Rn(r,"flashcards"),Lb=(r,e)=>Pn(r,"flashcards",e),jh=r=>Rn(r,"checklist"),ym=(r,e)=>Pn(r,"checklist",e),Fh=(r,e,t)=>lo(r,"checklist",e,t),Ob=r=>Rn(r,"schedules"),$n=(r,e)=>Pn(r,"schedules",e),Mb=(r,e,t)=>lo(r,"schedules",e,t),Bh=r=>Rn(r,"research"),Uh=(r,e)=>Pn(r,"research",e),$h=(r,e,t)=>lo(r,"research",e,t),jb=(r,e)=>gm(r,"research",e),Fb=r=>Rn(r,"budget"),Bb=(r,e)=>Pn(r,"budget",e),Ub=r=>Rn(r,"emergency"),$b=(r,e)=>Pn(r,"emergency",e),qb=r=>Rn(r,"omiyage"),zb=(r,e)=>Pn(r,"omiyage",e),Gb=(r,e,t)=>lo(r,"omiyage",e,t),Hb=(r,e)=>gm(r,"omiyage",e),Kb={ja:{appTitle:"旅のしおり",menu:"メニュー",home:"ホーム",flashcard:"単語カード",checklist:"持ち物チェック",schedule:"スケジュール",research:"リサーチノート",budget:"費用メモ",emergency:"緊急連絡先",omiyage:"お土産リスト",switchTrip:"旅行を切り替え",createNewTrip:"新しい旅行を作成",googleLink:"Googleアカウントと連携",googleLinked:"Googleでログイン済み",share:"共有しおり",shareInfo:"🔗 しおりを共有",shareUrl:"共有URL",sharePassword:"パスワード",shareCopyBtn:"📋 URLをコピー",shareCopySuccess:"✅ コピーしました！",shareSetupText:"共有パスワードを設定して、仲間にURLを送りましょう！",shareCreateBtn:"🔗 共有リンクを作成",noTripAlert:"まず旅行を作成してください",loading:"よみこみ中... 🧸",welcomeTitle:"旅のしおりを作ろう！",welcomeDesc:"旅行の計画から記録まで、<br>みんなで楽しく作る旅のしおり 🌴",btnWelcomeCreate:"✨ 新しい旅行を作成",btnWelcomeGoogle:"🌐 Googleアカウントでログイン/引き継ぎ",untitledTrip:"無題の旅行",countdownBefore:"旅行まであと",countdownDays:"日！",countdownDuring:"🎉 旅行",countdownDuringDays:"日目！",countdownAfter:"✨ おつかれさまでした！",members:"👥 メンバー",btnEditTrip:"✏️ 旅行情報を編集",tripFormNewTitle:"✨ 新しい旅行",tripFormEditTitle:"✏️ 旅行を編集",tripTitlePlaceholder:"例: はじめての台湾旅行！",startDate:"出発日",endDate:"帰国日",destinations:"行き先",countryPlaceholder:"国 (例: 台湾)",cityPlaceholder:"都市 (例: 台北)",addDestination:"＋ 行き先を追加",membersLabel:"メンバー",memberNamePlaceholder:"名前 (例: たろう)",addMember:"＋ メンバーを追加",btnSave:"💾 保存する",btnSaving:"保存中...",btnSaveError:"❌ エラー。もう一度お試しください",authError:"ユーザー情報の読み込みに失敗しました。少し待ってから再度保存してください。",scheduleTitle:"スケジュール & ジャーナル",planMode:"📝 プラン",journalMode:"📖 ジャーナル",btnAddSchedule:"+",addScheduleModalTitle:"予定を追加",itemTitlePlaceholder:"場所・予定名",itemTransportPlaceholder:"移動手段 (例: タクシー)",itemMemoPlaceholder:"メモ",btnAdd:"追加する",addJournalModalTitle:"記録を追加",journalMood:"気分:",journalRating:"評価:",journalTextPlaceholder:"感想を書いてね",journalAddPhoto:"写真を追加:",noSchedule:"予定がありません。追加してみましょう！",btnEdit:"編集",btnAddJournal:"記録を追加",selectTripFirst:"旅行が選択されていません。",checklistTitle:"持ち物チェック 🎒",tabPersonal:"👤 個人用",tabShared:"👥 共有用",addItemPlaceholder:"新しい持ち物を追加...",noItems:"まだアイテムがありません",researchTitle:"リサーチノート",all:"全て",sightseeing:"観光",gourmet:"グルメ",shopping:"お土産",activity:"体験",budgetTitle:"費用メモ 💰",emergencyTitle:"緊急連絡先 📞",omiyageTitle:"お土産リスト 🎁",flashcardTitle:"🗣️ 単語帳",playAudio:"🔊 読み上げ",preparing:"準備中...",noTripSelected:"旅行が選択されていません。"},en:{appTitle:"Trip Itinerary",menu:"Menu",home:"Home",flashcard:"Flashcards",checklist:"Checklist",schedule:"Schedule",research:"Research",budget:"Budget",emergency:"Emergency",omiyage:"Souvenirs",switchTrip:"Switch Trip",createNewTrip:"Create New Trip",googleLink:"Link Google Account",googleLinked:"Logged in with Google",share:"Shared Itinerary",shareInfo:"🔗 Share Itinerary",shareUrl:"Share URL",sharePassword:"Password",shareCopyBtn:"📋 Copy URL",shareCopySuccess:"✅ Copied!",shareSetupText:"Set a password to share this itinerary with friends!",shareCreateBtn:"🔗 Create Share Link",noTripAlert:"Please create a trip first",loading:"Loading... 🧸",welcomeTitle:"Create an Itinerary!",welcomeDesc:"Plan and record your trips<br>together with everyone! 🌴",btnWelcomeCreate:"✨ Create New Trip",btnWelcomeGoogle:"🌐 Login/Link with Google",untitledTrip:"Untitled Trip",countdownBefore:"",countdownDays:"days to go!",countdownDuring:"🎉 Day",countdownDuringDays:" of the trip!",countdownAfter:"✨ Trip completed!",members:"👥 Members",btnEditTrip:"✏️ Edit Trip Info",tripFormNewTitle:"✨ New Trip",tripFormEditTitle:"✏️ Edit Trip",tripTitlePlaceholder:"e.g., First trip to Taiwan!",startDate:"Start Date",endDate:"End Date",destinations:"Destinations",countryPlaceholder:"Country (e.g., Taiwan)",cityPlaceholder:"City (e.g., Taipei)",addDestination:"＋ Add Destination",membersLabel:"Members",memberNamePlaceholder:"Name (e.g., Taro)",addMember:"＋ Add Member",btnSave:"💾 Save",btnSaving:"Saving...",btnSaveError:"❌ Error. Please try again",authError:"Failed to load user info. Please wait and try again.",scheduleTitle:"Schedule & Journal",planMode:"📝 Plan",journalMode:"📖 Journal",btnAddSchedule:"+",addScheduleModalTitle:"Add Schedule",itemTitlePlaceholder:"Place / Activity",itemTransportPlaceholder:"Transport (e.g., Taxi)",itemMemoPlaceholder:"Memo",btnAdd:"Add",addJournalModalTitle:"Add Journal",journalMood:"Mood:",journalRating:"Rating:",journalTextPlaceholder:"Write your thoughts",journalAddPhoto:"Add Photo:",noSchedule:"No schedules yet. Let's add some!",btnEdit:"Edit",btnAddJournal:"Add Journal",selectTripFirst:"No trip selected.",checklistTitle:"Checklist 🎒",tabPersonal:"👤 Personal",tabShared:"👥 Shared",addItemPlaceholder:"Add new item...",noItems:"No items yet",researchTitle:"Research Notes",all:"All",sightseeing:"Sightseeing",gourmet:"Food",shopping:"Shopping",activity:"Activity",budgetTitle:"Budget 💰",emergencyTitle:"Emergency 📞",omiyageTitle:"Souvenirs 🎁",flashcardTitle:"🗣️ Flashcards",playAudio:"🔊 Play",preparing:"Preparing...",noTripSelected:"No trip selected."},th:{appTitle:"แผนการเดินทาง",menu:"เมนู",home:"หน้าแรก",flashcard:"บัตรคำศัพท์",checklist:"รายการของ",schedule:"กำหนดการ",research:"ข้อมูลท่องเที่ยว",budget:"งบประมาณ",emergency:"ฉุกเฉิน",omiyage:"ของฝาก",switchTrip:"เปลี่ยนทริป",createNewTrip:"สร้างทริปใหม่",googleLink:"เชื่อมต่อบัญชี Google",googleLinked:"เข้าสู่ระบบด้วย Google แล้ว",share:"แชร์แผนการเดินทาง",shareInfo:"🔗 แชร์แผนการเดินทาง",shareUrl:"URL สำหรับแชร์",sharePassword:"รหัสผ่าน",shareCopyBtn:"📋 คัดลอก URL",shareCopySuccess:"✅ คัดลอกแล้ว!",shareSetupText:"ตั้งรหัสผ่านเพื่อแชร์ทริปนี้กับเพื่อน!",shareCreateBtn:"🔗 สร้างลิงก์สำหรับแชร์",noTripAlert:"กรุณาสร้างทริปก่อน",loading:"กำลังโหลด... 🧸",welcomeTitle:"สร้างแผนการเดินทาง!",welcomeDesc:"วางแผนและบันทึกการเดินทาง<br>ไปพร้อมกันทุกคน! 🌴",btnWelcomeCreate:"✨ สร้างทริปใหม่",btnWelcomeGoogle:"🌐 เข้าสู่ระบบ/เชื่อมโยง Google",untitledTrip:"ทริปที่ไม่มีชื่อ",countdownBefore:"อีก",countdownDays:"วันจะถึงทริป!",countdownDuring:"🎉 วันที่",countdownDuringDays:" ของทริป!",countdownAfter:"✨ จบทริปแล้ว!",members:"👥 สมาชิก",btnEditTrip:"✏️ แก้ไขข้อมูลทริป",tripFormNewTitle:"✨ ทริปใหม่",tripFormEditTitle:"✏️ แก้ไขทริป",tripTitlePlaceholder:"เช่น เที่ยวไต้หวันครั้งแรก!",startDate:"วันเดินทางไป",endDate:"วันเดินทางกลับ",destinations:"จุดหมายปลายทาง",countryPlaceholder:"ประเทศ (เช่น ไต้หวัน)",cityPlaceholder:"เมือง (เช่น ไทเป)",addDestination:"＋ เพิ่มจุดหมาย",membersLabel:"สมาชิก",memberNamePlaceholder:"ชื่อ (เช่น ทาโร่)",addMember:"＋ เพิ่มสมาชิก",btnSave:"💾 บันทึก",btnSaving:"กำลังบันทึก...",btnSaveError:"❌ เกิดข้อผิดพลาด กรุณาลองใหม่",authError:"ไม่สามารถโหลดข้อมูลผู้ใช้ได้ กรุณารอสักครู่แล้วลองอีกครั้ง",scheduleTitle:"กำหนดการ & บันทึก",planMode:"📝 แผน",journalMode:"📖 บันทึก",btnAddSchedule:"+",addScheduleModalTitle:"เพิ่มกำหนดการ",itemTitlePlaceholder:"สถานที่ / กิจกรรม",itemTransportPlaceholder:"การเดินทาง (เช่น แท็กซี่)",itemMemoPlaceholder:"บันทึก",btnAdd:"เพิ่ม",addJournalModalTitle:"เพิ่มบันทึก",journalMood:"อารมณ์:",journalRating:"คะแนน:",journalTextPlaceholder:"เขียนความรู้สึกของคุณ",journalAddPhoto:"เพิ่มรูปภาพ:",noSchedule:"ยังไม่มีกำหนดการ ลองเพิ่มดูสิ!",btnEdit:"แก้ไข",btnAddJournal:"เพิ่มบันทึก",selectTripFirst:"ไม่ได้เลือกทริป",checklistTitle:"รายการของ 🎒",tabPersonal:"👤 ส่วนตัว",tabShared:"👥 ส่วนรวม",addItemPlaceholder:"เพิ่มของใหม่...",noItems:"ยังไม่มีสิ่งของ",researchTitle:"ข้อมูลท่องเที่ยว",all:"ทั้งหมด",sightseeing:"สถานที่",gourmet:"อาหาร",shopping:"ช้อปปิ้ง",activity:"กิจกรรม",budgetTitle:"งบประมาณ 💰",emergencyTitle:"ติดต่อฉุกเฉิน 📞",omiyageTitle:"ของฝาก 🎁",flashcardTitle:"🗣️ บัตรคำศัพท์",playAudio:"🔊 เล่นเสียง",preparing:"กำลังเตรียม...",noTripSelected:"ไม่ได้เลือกทริป"}};function O(r){var n;const t=re().language||"ja";return((n=Kb[t])==null?void 0:n[r])||r}function Oa(){return re().language||"ja"}const Wb="modulepreload",Qb=function(r){return"/tabi-shiori/"+r},qh={},_m=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Qb(l),l in qh)return;qh[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Wb,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((y,T)=>{p.addEventListener("load",y),p.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Jb="https://script.google.com/macros/s/AKfycbwARwcfB8irhjuKvmaifTk-M0FePVPjzVohKRZTXaQtTAvpN1K4iX-cr5rdiAfYpATr/exec",Jo=new Map;async function xe(r){if(!r||typeof r!="string")return r;const{language:e}=re(),t=`${r}_${e}`;if(e==="ja")return r;if(Jo.has(t))return Jo.get(t);try{const n=new URL(Jb);n.searchParams.append("text",r),n.searchParams.append("target",e);const i=await(await fetch(n.toString(),{method:"GET"})).json();return i.success&&i.translatedText?(Jo.set(t,i.translatedText),i.translatedText):r}catch(n){return console.warn("Translation failed:",n),r}}const Yb={async render(){const{currentTrip:r,trips:e,user:t}=re();if(!r){let T="";return e&&e.length>0&&(T=`
          <div class="portal-trips" style="margin-top: 32px;">
            <h2 class="text-center mb-md" style="font-size: 1.2rem; color: var(--text-dark);">あなたの旅行</h2>
            <div class="trips-list" style="display: flex; flex-direction: column; gap: 12px; padding: 0 16px;">
              ${e.map(R=>`
                <div class="card portal-trip-card" data-trip-id="${R.id}" style="cursor: pointer; display: flex; align-items: center; padding: 16px;">
                  <span style="font-size: 24px; margin-right: 12px;">✈️</span>
                  <div style="flex: 1; min-width: 0;">
                    <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-dark); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${R.title||O("untitledTrip")}</h3>
                    <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--text-muted);">${R.startDate||""} ${R.endDate?"〜 "+R.endDate:""}</p>
                  </div>
                  <span style="color: var(--color-pink); font-weight: bold;">❯</span>
                </div>
              `).join("")}
            </div>
          </div>
        `),`
        <div class="page fade-in">
          <div class="welcome-section">
            <img src="/tabi-shiori/images/tabikuma.jpg" alt="たびくま" class="welcome-mascot" />
            <h1 class="welcome-title">${O("welcomeTitle")}</h1>
            <p class="welcome-text">${O("welcomeDesc")}</p>
            <button id="btn-create-trip" class="btn btn-primary">${O("btnWelcomeCreate")}</button>
            ${!t||t.isAnonymous?`
            <button id="btn-welcome-google" class="btn btn-secondary mt-md" style="width:100%; border:1px solid #ccc; background:#fff; color:#333; margin-top:16px;">
              <span style="margin-right:8px">🌐</span>${O("btnWelcomeGoogle")}
            </button>
            `:""}
          </div>
          ${T}
          <div class="text-center" style="margin-top: 40px; margin-bottom: 40px;">
            <span class="text-xs text-muted">Version 1.1.0</span>
          </div>
        </div>
      `}const n=new Date;n.setHours(0,0,0,0);const s=new Date(r.startDate),i=new Date(r.endDate);let o="";if(n<s){const T=Math.ceil((s-n)/864e5);o=`${O("countdownBefore")} <strong>${T}</strong> ${O("countdownDays")}`}else if(n>=s&&n<=i){const T=Math.ceil((n-s)/864e5)+1;o=`${O("countdownDuring")} <strong>${T}</strong> ${O("countdownDuringDays")}`}else o=O("countdownAfter");const c=T=>{if(!T)return"";const R=new Date(T);return`${R.getFullYear()}年${R.getMonth()+1}月${R.getDate()}日`},l=await xe(r.title)||O("untitledTrip"),h=(r.destinations||[]).map(async T=>{const R=await xe(T.country)||"",x=await xe(T.city)||"";return`<span class="chip">📍 ${R} ${x}</span>`}),f=await Promise.all(h),p=(r.members||[]).map(async T=>{const R=await xe(T.name)||"";return`
        <div class="member-avatar" title="${R}">
          <span class="member-emoji">${T.icon||"😊"}</span>
          <span class="member-name">${R}</span>
        </div>
      `}),y=await Promise.all(p);return`
      <div class="page fade-in">
        <div class="home-cover" style="background-image: url('${r.coverImage||"/tabi-shiori/images/tabikuma.jpg"}')">
          <div class="home-cover-overlay"></div>
          <h1 class="home-trip-title">${l}</h1>
          <p class="home-trip-dates">${c(r.startDate)} 〜 ${c(r.endDate)}</p>
        </div>

        <div class="home-content">
          <div class="countdown-card">
            ${o}
          </div>

          <div class="destinations-chips">
            ${f.join("")}
          </div>

          <div class="members-section">
            <h3>${O("members")}</h3>
            <div class="members-list">
              ${y.join("")}
            </div>
          </div>
          
          <div class="features-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
            <div class="feature-card" data-route="/flashcard">
              <span class="feature-icon">🗣️</span>
              <span class="feature-label">${O("flashcardTitle")}</span>
            </div>
            <div class="feature-card" data-route="/checklist">
              <span class="feature-icon">🎒</span>
              <span class="feature-label">${O("checklistTitle")}</span>
            </div>
            <div class="feature-card" data-route="/schedule">
              <span class="feature-icon">📅</span>
              <span class="feature-label">${O("scheduleTitle")}</span>
            </div>
            <div class="feature-card" data-route="/research">
              <span class="feature-icon">🔍</span>
              <span class="feature-label">${O("researchTitle")}</span>
            </div>
            <div class="feature-card" data-route="/budget">
              <span class="feature-icon">💰</span>
              <span class="feature-label">${O("budgetTitle")}</span>
            </div>
            <div class="feature-card" data-route="/omiyage">
              <span class="feature-icon">🎁</span>
              <span class="feature-label">${O("omiyageTitle")}</span>
            </div>
          </div>

        <button id="btn-edit-trip" class="btn btn-secondary btn-small w-full mt-md" style="margin-bottom: 16px;">
          ${O("btnEditTrip")}
        </button>

        <div class="text-center mt-lg" style="margin-bottom: 24px;">
          <span class="text-xs text-muted">Version 1.1.0</span>
        </div>
      </div>
    `},init(){var r,e,t;(r=document.getElementById("btn-create-trip"))==null||r.addEventListener("click",()=>ve("/trip/new")),(e=document.getElementById("btn-edit-trip"))==null||e.addEventListener("click",()=>ve("/trip/edit")),document.querySelectorAll(".portal-trip-card").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-trip-id"),{trips:i}=re(),o=i.find(c=>c.id===s);o&&_m(async()=>{const{setState:c}=await Promise.resolve().then(()=>kb);return{setState:c}},void 0).then(({setState:c})=>{c({currentTripId:s,currentTrip:o}),localStorage.setItem("currentTripId",s),ve("/",!0,!0)})})}),(t=document.getElementById("btn-welcome-google"))==null||t.addEventListener("click",async()=>{try{const{user:n}=re();n&&n.isAnonymous?await pm():await fm(),window.location.reload()}catch(n){n.code!=="auth/popup-closed-by-user"&&n.code!=="auth/cancelled-popup-request"&&alert("ログインに失敗しました: "+n.message)}}),document.querySelectorAll(".feature-card").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-route");s&&ve(s)})})}},Yo=[{id:"greeting",label:"挨拶",emoji:"👋"},{id:"thanks",label:"感謝",emoji:"🙏"},{id:"shopping",label:"買い物",emoji:"🛍️"},{id:"restaurant",label:"レストラン",emoji:"🍽️"},{id:"transport",label:"交通",emoji:"🚌"},{id:"emergency",label:"緊急",emoji:"🆘"},{id:"basic",label:"基本",emoji:"💬"}],ti={en:{greeting:[{phrase:"Hello",reading:"ハロー",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Good morning",reading:"グッド モーニング",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Good evening",reading:"グッド イブニング",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"Good night",reading:"グッド ナイト",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"How are you?",reading:"ハウ アー ユー？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Thank you",reading:"サンキュー",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Thanks a lot",reading:"サンクス ア ロット",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"You're welcome",reading:"ユア ウェルカム",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"No problem",reading:"ノー プロブレム",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"I appreciate it",reading:"アイ アプリシエイト イット",jp:"感謝します",th:"ฉันซาบซึ้ง",en:"I appreciate it"}],shopping:[{phrase:"How much is this?",reading:"ハウ マッチ イズ ディス？",jp:"これはいくらですか？",th:"อันนี้ราคาเท่าไหร่?",en:"How much is this?"},{phrase:"Can I pay by credit card?",reading:"キャン アイ ペイ バイ クレジット カード？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรเครดิตได้ไหม?",en:"Can I pay by credit card?"},{phrase:"I'll take this",reading:"アイル テイク ディス",jp:"これを買います",th:"ฉันเอาอันนี้",en:"I'll take this"},{phrase:"Can you give me a discount?",reading:"キャン ユー ギブ ミー ア ディスカウント？",jp:"安くしてもらえませんか？",th:"ลดราคาให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"Do you have this in a different color?",reading:"ドゥー ユー ハブ ディス イン ア ディファレント カラー？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in a different color?"}],restaurant:[{phrase:"Table for two, please",reading:"テーブル フォー トゥー プリーズ",jp:"2人です",th:"ขอโต๊ะสำหรับสองคนครับ/ค่ะ",en:"Table for two, please"},{phrase:"Can I have the menu?",reading:"キャン アイ ハブ ザ メニュー？",jp:"メニューを見せてください",th:"ขอเมนูหน่อยครับ/ค่ะ",en:"Can I have the menu?"},{phrase:"I'd like to order",reading:"アイド ライク トゥー オーダー",jp:"注文をお願いします",th:"ขอสั่งอาหารครับ/ค่ะ",en:"I'd like to order"},{phrase:"Check, please",reading:"チェック プリーズ",jp:"お会計をお願いします",th:"เช็คบิลด้วยครับ/ค่ะ",en:"Check, please"},{phrase:"Water, please",reading:"ウォーター プリーズ",jp:"お水をください",th:"ขอน้ำเปล่าครับ/ค่ะ",en:"Water, please"}],transport:[{phrase:"Where is the train station?",reading:"ウェア イズ ザ トレイン ステーション？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"I want to go here",reading:"アイ ウォント トゥー ゴー ヒア",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Does this bus go to the airport?",reading:"ダズ ディス バス ゴー トゥー ザ エアポート？",jp:"このバスは空港に行きますか？",th:"รถบัสคันนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Stop here, please",reading:"ストップ ヒア プリーズ",jp:"ここで降ろしてください",th:"จอดตรงนี้ครับ/ค่ะ",en:"Stop here, please"},{phrase:"How long does it take?",reading:"ハウ ロング ダズ イット テイク？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Help!",reading:"ヘルプ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Call an ambulance",reading:"コール アン アンビュランス",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลให้หน่อย",en:"Call an ambulance"},{phrase:"Call the police",reading:"コール ザ ポリス",jp:"警察を呼んでください",th:"เรียกตำรวจให้หน่อย",en:"Call the police"},{phrase:"I lost my passport",reading:"アイ ロスト マイ パスポート",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Where is the hospital?",reading:"ウェア イズ ザ ホスピタル？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Yes",reading:"イエス",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノー",jp:"いいえ",th:"ไม่",en:"No"},{phrase:"Excuse me",reading:"エクスキューズ ミー",jp:"すみません",th:"ขอโทษครับ/ค่ะ",en:"Excuse me"},{phrase:"Sorry",reading:"ソーリー",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"I don't understand",reading:"アイ ドント アンダースタンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},th:{greeting:[{phrase:"สวัสดี",reading:"サワディー",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"อรุณสวัสดิ์",reading:"アルンサワッ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"ราตรีสวัสดิ์",reading:"ラートリーサワッ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"สบายดีไหม",reading:"サバーイ ディー マイ",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"},{phrase:"แล้วพบกันใหม่",reading:"レーオ ポップ ガン マイ",jp:"また会いましょう",th:"แล้วพบกันใหม่",en:"See you again"}],thanks:[{phrase:"ขอบคุณ",reading:"コップクン",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"ขอบคุณมาก",reading:"コップクン マーク",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"ไม่เป็นไร",reading:"マイペンライ",jp:"どういたしまして/大丈夫です",th:"ไม่เป็นไร",en:"You're welcome/No problem"},{phrase:"ด้วยความยินดี",reading:"ドゥアイ クワーム インディー",jp:"喜んで",th:"ด้วยความยินดี",en:"With pleasure"},{phrase:"ขอบคุณสำหรับความช่วยเหลือ",reading:"コップクン サムラップ クワーム チュアイ ルア",jp:"助けてくれてありがとう",th:"ขอบคุณสำหรับความช่วยเหลือ",en:"Thank you for your help"}],shopping:[{phrase:"อันนี้ราคาเท่าไหร่",reading:"アンニー ラーカー タオライ",jp:"これはいくらですか？",th:"อันนี้ราคาเท่าไหร่?",en:"How much is this?"},{phrase:"ลดราคาให้หน่อยได้ไหม",reading:"ロット ラーカー ハイ ノイ ダイ マイ",jp:"安くしてもらえませんか？",th:"ลดราคาให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"เอาอันนี้",reading:"アオ アンニー",jp:"これを買います",th:"เอาอันนี้",en:"I'll take this"},{phrase:"มีสีอื่นไหม",reading:"ミー シー ウーン マイ",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in a different color?"},{phrase:"รับบัตรเครดิตไหม",reading:"ラップ バット クレディット マイ",jp:"クレジットカードは使えますか？",th:"รับบัตรเครดิตไหม?",en:"Do you accept credit cards?"}],restaurant:[{phrase:"ขอเมนูหน่อย",reading:"コー メニュー ノイ",jp:"メニューを見せてください",th:"ขอเมนูหน่อย",en:"Can I have the menu?"},{phrase:"เก็บเงินด้วย",reading:"ゲップ ングン ドゥアイ",jp:"お会計をお願いします",th:"เก็บเงินด้วย",en:"Check, please"},{phrase:"ไม่ใส่ผักชี",reading:"マイ サイ パクチー",jp:"パクチーを入れないでください",th:"ไม่ใส่ผักชี",en:"No coriander"},{phrase:"เผ็ดน้อย",reading:"ペット ノーイ",jp:"辛くしないでください",th:"เผ็ดน้อย",en:"Less spicy"},{phrase:"อร่อยมาก",reading:"アロイ マーク",jp:"とても美味しいです",th:"อร่อยมาก",en:"Very delicious"}],transport:[{phrase:"สถานีรถไฟอยู่ที่ไหน",reading:"サターニー ロッファイ ユー ティーナイ",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"ไปที่นี่",reading:"パイ ティーニー",jp:"ここに行ってください",th:"ไปที่นี่",en:"Go here, please"},{phrase:"จอดตรงนี้",reading:"ジョート トロンニー",jp:"ここで停めてください",th:"จอดตรงนี้",en:"Stop here"},{phrase:"ใช้เวลานานเท่าไหร่",reading:"チャイ ウェーラー ナーン タオライ",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"},{phrase:"เปิดมิเตอร์ด้วย",reading:"プート ミーター ドゥアイ",jp:"メーターを回してください",th:"เปิดมิเตอร์ด้วย",en:"Please turn on the meter"}],emergency:[{phrase:"ช่วยด้วย",reading:"チュアイ ドゥアイ",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"เรียกรถพยาบาลให้หน่อย",reading:"リアク ロッパヤバーン ハイ ノイ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลให้หน่อย",en:"Call an ambulance"},{phrase:"เรียกตำรวจให้หน่อย",reading:"リアク タムルワット ハイ ノイ",jp:"警察を呼んでください",th:"เรียกตำรวจให้หน่อย",en:"Call the police"},{phrase:"ทำพาสปอร์ตหาย",reading:"タム パスポート ハーイ",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"โรงพยาบาลอยู่ที่ไหน",reading:"ローンパヤバーン ユー ティーナイ",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"ใช่",reading:"チャイ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"ไม่ใช่",reading:"マイチャイ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"ขอโทษ",reading:"コートート",jp:"すみません/ごめんなさい",th:"ขอโทษ",en:"Excuse me / Sorry"},{phrase:"ไม่เข้าใจ",reading:"マイ カオジャイ",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"},{phrase:"พูดภาษาอังกฤษได้ไหม",reading:"プート パーサー アングリット ダイ マイ",jp:"英語を話せますか？",th:"พูดภาษาอังกฤษได้ไหม?",en:"Can you speak English?"}]},zh:{greeting:[{phrase:"你好",reading:"ニーハオ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"早上好",reading:"ザオシャンハオ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"晚上好",reading:"ワンシャンハオ",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"晚安",reading:"ワンアン",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"你好吗？",reading:"ニーハオマ？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"谢谢",reading:"シエシエ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"非常感谢",reading:"フェイチャンガンシエ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"不客气",reading:"ブーカーチー",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"没关系",reading:"メイグアンシー",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"辛苦了",reading:"シンクーラ",jp:"お疲れ様でした",th:"ขอบคุณสำหรับความเหนื่อยยาก",en:"Thank you for your hard work"}],shopping:[{phrase:"多少钱？",reading:"ドゥオシャオチエン？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"可以刷卡吗？",reading:"クーイシュアカーマ？",jp:"クレジットカードは使えますか？",th:"รูดบัตรได้ไหม?",en:"Can I use a credit card?"},{phrase:"我要这个",reading:"ウォーヤオジェイガ",jp:"これを買います",th:"เอาอันนี้",en:"I want this"},{phrase:"能便宜一点吗？",reading:"ノォンピエンイーイーディエンマ？",jp:"安くしてもらえませんか？",th:"ลดหน่อยได้ไหม?",en:"Can you make it cheaper?"},{phrase:"有别的颜色吗？",reading:"ヨウビエダユィエンスーマ？",jp:"他の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have other colors?"}],restaurant:[{phrase:"两个人",reading:"リャンガレン",jp:"2人です",th:"สองคน",en:"Two people"},{phrase:"请给我菜单",reading:"チンゲイウォツァイダン",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"Please give me the menu"},{phrase:"我要点餐",reading:"ウォーヤオディエンツァン",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I'd like to order"},{phrase:"买单",reading:"マイダン",jp:"お会計をお願いします",th:"เช็คบิล",en:"Check, please"},{phrase:"请给我水",reading:"チンゲイウォシュイ",jp:"お水をください",th:"ขอน้ำเปล่าหน่อย",en:"Water, please"}],transport:[{phrase:"火车站怎么走？",reading:"フオチャージャンゼンマゾウ？",jp:"駅へはどう行けばいいですか？",th:"ไปสถานีรถไฟยังไง?",en:"How to go to the train station?"},{phrase:"我要去这里",reading:"ウォーヤオチュージェーリー",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"这辆车去机场吗？",reading:"ジェリャンチャチュウジーチャンマ？",jp:"このバス/車は空港に行きますか？",th:"รถคันนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"在这里停",reading:"ザイジェリーティン",jp:"ここで停めてください",th:"จอดตรงนี้",en:"Stop here"},{phrase:"要多长时间？",reading:"ヤオドゥオチャンシージエン？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"救命！",reading:"ジウミン！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"叫救护车",reading:"ジャオジウフーチャー",jp:"救急車を呼んでください",th:"เรียกรถพยาบาล",en:"Call an ambulance"},{phrase:"报警",reading:"バオジン",jp:"警察を呼んでください",th:"แจ้งตำรวจ",en:"Call the police"},{phrase:"我护照丢了",reading:"ウォーフージャオディウラ",jp:"パスポートを無くしました",th:"พาสปอร์ตหาย",en:"I lost my passport"},{phrase:"医院在哪里？",reading:"イーユエンザイナーリー？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"是",reading:"シー",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"不是",reading:"ブーシー",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"不好意思",reading:"ブーハオイースー",jp:"すみません",th:"ขอโทษ (เรียกความสนใจ)",en:"Excuse me"},{phrase:"对不起",reading:"ドゥイブーチー",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"我听不懂",reading:"ウォーティンブードン",jp:"わかりません",th:"ฟังไม่เข้าใจ",en:"I don't understand"}]},ko:{greeting:[{phrase:"안녕하세요",reading:"アンニョンハセヨ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"안녕히 주무세요",reading:"アンニョンヒ ジュムセヨ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"잘 지내셨어요?",reading:"チャル ジネショッソヨ？",jp:"お元気でしたか？",th:"สบายดีไหม?",en:"How have you been?"},{phrase:"안녕히 계세요",reading:"アンニョンヒ ゲセヨ",jp:"さようなら（自分が去る時）",th:"ลาก่อน",en:"Goodbye"},{phrase:"반갑습니다",reading:"パンガプスムニ다",jp:"はじめまして",th:"ยินดีที่ได้รู้จัก",en:"Nice to meet you"}],thanks:[{phrase:"감사합니다",reading:"カムサハムニダ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"정말 감사합니다",reading:"チョンマル カムサハムニダ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"천만에요",reading:"チョンマネヨ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"괜찮아요",reading:"ケンチャナヨ",jp:"大丈夫です/結構です",th:"ไม่เป็นไร",en:"It's okay/No thanks"},{phrase:"수고하셨습니다",reading:"スゴハショッスムニダ",jp:"お疲れ様でした",th:"ขอบคุณที่เหนื่อยยาก",en:"Good job"}],shopping:[{phrase:"얼마예요?",reading:"オルマエヨ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"카드 되나요?",reading:"カドゥ テナヨ？",jp:"カードは使えますか？",th:"รับบัตรไหม?",en:"Can I use a card?"},{phrase:"이걸로 주세요",reading:"イゴルロ ジュセヨ",jp:"これをください",th:"เอาอันนี้",en:"I'll take this"},{phrase:"조금 깎아주세요",reading:"チョグム カッカジュセヨ",jp:"少し安くしてください",th:"ลดราคาให้หน่อย",en:"Please give me a discount"},{phrase:"다른 색상 있나요?",reading:"タルン セクサン インナヨ？",jp:"他の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have other colors?"}],restaurant:[{phrase:"두 명이요",reading:"トゥ ミョンイヨ",jp:"2人です",th:"สองคนค่ะ/ครับ",en:"Two people"},{phrase:"메뉴판 주세요",reading:"メニューパン ジュセヨ",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"Menu, please"},{phrase:"주문할게요",reading:"チュムナルケ요",jp:"注文します",th:"ขอสั่งอาหาร",en:"I will order"},{phrase:"계산서 주세요",reading:"ケサンソ ジュセヨ",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"Check, please"},{phrase:"물 좀 주세요",reading:"ムル チョム ジュセヨ",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"기차역이 어디예요?",reading:"キチャヨギ オディエヨ？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"여기로 가주세요",reading:"ヨギロ カジュセヨ",jp:"ここに行ってください",th:"ไปที่นี่",en:"Please go here"},{phrase:"이 버스 공항 가나요?",reading:"イ ボス コンハン カナヨ？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"여기서 세워주세요",reading:"ヨギソ セウォジュセヨ",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Please stop here"},{phrase:"얼마나 걸려요?",reading:"オルマ나 コルリョヨ？",jp:"どのくらいかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"도와주세요!",reading:"トワジュセヨ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"구급차 불러주세요",reading:"クグプチャ プルロジュセヨ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Please call an ambulance"},{phrase:"경찰 불러주세요",reading:"キョンチャル プルロジュセヨ",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Please call the police"},{phrase:"여권을 잃어버렸어요",reading:"ヨックォヌル イロボリョッソヨ",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"병원이 어디예요?",reading:"ピョンウォニ オディエヨ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"네",reading:"ネ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"아니요",reading:"アニヨ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"실례합니다",reading:"シルレハムニダ",jp:"すみません（尋ねる時）",th:"ขอโทษ",en:"Excuse me"},{phrase:"죄송합니다",reading:"チェソンハムニダ",jp:"ごめんなさい",th:"ขอโทษ",en:"I am sorry"},{phrase:"모르겠어요",reading:"モルゲッソヨ",jp:"わかりません",th:"ไม่รู้/ไม่เข้าใจ",en:"I don't know/understand"}]},es:{greeting:[{phrase:"Hola",reading:"オラ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Buenos días",reading:"ブエノス ディアス",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Buenas tardes",reading:"ブエナス タルデス",jp:"こんにちは/こんばんは",th:"สวัสดีตอนบ่าย",en:"Good afternoon"},{phrase:"Buenas noches",reading:"ブエナス ノチェス",jp:"こんばんは/おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"¿Cómo estás?",reading:"コモ エスタス？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Gracias",reading:"グラシアス",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Muchas gracias",reading:"ムチャス グラシアス",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"De nada",reading:"デ ナダ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"No hay problema",reading:"ノ アイ プロブレマ",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"Muy amable",reading:"ムイ アマブレ",jp:"ご親切に",th:"ใจดีมาก",en:"Very kind"}],shopping:[{phrase:"¿Cuánto cuesta?",reading:"クアント クエスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much does it cost?"},{phrase:"¿Puedo pagar con tarjeta?",reading:"プエド パガール コン タルヘタ？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรได้ไหม?",en:"Can I pay with a card?"},{phrase:"Me lo llevo",reading:"メ ロ ジェボ",jp:"これを買います",th:"เอาอันนี้",en:"I'll take it"},{phrase:"¿Puede hacerme un descuento?",reading:"プエデ アセルメ ウン デスクエント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"¿Tiene esto en otro color?",reading:"ティエネ エスト エン オトロ コロール？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in another color?"}],restaurant:[{phrase:"Una mesa para dos, por favor",reading:"ウナ メサ パラ ドス ポル ファボール",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"El menú, por favor",reading:"エル メニュー ポル ファボール",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Quisiera pedir",reading:"キシエラ ペディール",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"La cuenta, por favor",reading:"ラ クエンタ ポル ファボール",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Agua, por favor",reading:"アグア ポル ファボール",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"¿Dónde está la estación de tren?",reading:"ドンデ エスタ ラ エスタシオン デ トレン？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Quiero ir aquí",reading:"キエロ イール アキ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"¿Este autobús va al aeropuerto?",reading:"エステ アウトブス バ アル アエロプエルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Pare aquí, por favor",reading:"パレ アキ ポル ファボール",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"¿Cuánto tiempo tarda?",reading:"クアント ティエンポ タルダ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"¡Ayuda!",reading:"アユダ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Llame a una ambulancia",reading:"ジャメ ア ウナ アンブランシア",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Llame a la policía",reading:"ジャメ ア ラ ポリシア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"He perdido mi pasaporte",reading:"エ ペルディード ミ パサポルテ",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I have lost my passport"},{phrase:"¿Dónde está el hospital?",reading:"ドンデ エスタ エル オスピタル？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sí",reading:"シ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Disculpe",reading:"ディスクルペ",jp:"すみません",th:"ขอโทษ (เรียก)",en:"Excuse me"},{phrase:"Lo siento",reading:"ロ シエント",jp:"ごめんなさい",th:"ขอโทษ",en:"I'm sorry"},{phrase:"No entiendo",reading:"ノ エンティエンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},it:{greeting:[{phrase:"Ciao",reading:"チャオ",jp:"こんにちは / さようなら",th:"สวัสดี/ลาก่อน",en:"Hello/Goodbye"},{phrase:"Buongiorno",reading:"ブオンジョルノ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Buonasera",reading:"ブオナセーラ",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"Buonanotte",reading:"ブオナノッテ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"Come stai?",reading:"コメ スタイ？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Grazie",reading:"グラッツィエ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Mille grazie",reading:"ミッレ グラッツィエ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"Prego",reading:"プレーゴ",jp:"どういたしまして / どうぞ",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"Di nulla",reading:"ディ ヌッラ",jp:"とんでもない",th:"ไม่เป็นไร",en:"Not at all"},{phrase:"Nessun problema",reading:"ネッスン プロブレーマ",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"}],shopping:[{phrase:"Quanto costa?",reading:"クアント コスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"Posso pagare con la carta di credito?",reading:"ポッソ パガーレ コン ラ カルタ ディ クレディト？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรเครดิตได้ไหม?",en:"Can I pay with credit card?"},{phrase:"Prendo questo",reading:"プレンド クエスト",jp:"これを買います",th:"เอาอันนี้",en:"I'll take this"},{phrase:"Può farmi uno sconto?",reading:"プォ ファルミ ウノ スコント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"Avete questo in un altro colore?",reading:"アヴェーテ クエスト イン ウン アルトロ コローレ？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in another color?"}],restaurant:[{phrase:"Un tavolo per due, per favore",reading:"ウン ターヴォロ ペル ドゥーエ ペル ファヴォーレ",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"Il menù, per favore",reading:"イル メニュー ペル ファヴォーレ",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Vorrei ordinare",reading:"ヴォッレイ オルディナーレ",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"Il conto, per favore",reading:"イル コント ペル ファヴォーレ",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Acqua, per favore",reading:"アックア ペル ファヴォーレ",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"Dov'è la stazione ferroviaria?",reading:"ドヴェ ラ スタツィオーネ フェッロヴィアーリア？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Voglio andare qui",reading:"ヴォーリョ アンダーレ クイ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Questo autobus va all'aeroporto?",reading:"クエスト アウトブス ヴァ アッラエロポルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Si fermi qui, per favore",reading:"シ フェルミ クイ ペル ファヴォーレ",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"Quanto tempo ci vuole?",reading:"クアント テンポ チ ヴオーレ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Aiuto!",reading:"アユート！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Chiami un'ambulanza",reading:"キアーミ ウナンブランツァ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Chiami la polizia",reading:"キアーミ ラ ポリツィーア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"Ho perso il passaporto",reading:"オ ペルソ イル パッサポルト",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Dov'è l'ospedale?",reading:"ドヴェ ロスペダーレ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sì",reading:"スィ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Scusa",reading:"スクーザ",jp:"すみません",th:"ขอโทษ (เรียก)",en:"Excuse me"},{phrase:"Mi dispiace",reading:"ミ ディスピアチェ",jp:"ごめんなさい",th:"ขอโทษ",en:"I am sorry"},{phrase:"Non capisco",reading:"ノン カピスコ",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},pt:{greeting:[{phrase:"Olá",reading:"オラ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Bom dia",reading:"ボン ジーア",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Boa tarde",reading:"ボア タルヂ",jp:"こんにちは（午後）",th:"สวัสดีตอนบ่าย",en:"Good afternoon"},{phrase:"Boa noite",reading:"ボア ノイチ",jp:"こんばんは/おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"Tudo bem?",reading:"トゥド ベン？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Obrigado(a)",reading:"オブリガード（ダ）",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Muito obrigado(a)",reading:"ムイント オブリガード（ダ）",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"De nada",reading:"ジ ナダ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"Não há de quê",reading:"ナォン ア ジ ケ",jp:"とんでもないです",th:"ไม่เป็นไร",en:"Not at all"},{phrase:"Imagina",reading:"イマジナ",jp:"気にしないでください",th:"ช่างมันเถอะ",en:"Don't mention it"}],shopping:[{phrase:"Quanto custa?",reading:"クアント クスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much does it cost?"},{phrase:"Posso pagar com cartão?",reading:"ポッソ パガール コン カルタォン？",jp:"カードで払えますか？",th:"จ่ายด้วยบัตรได้ไหม?",en:"Can I pay with card?"},{phrase:"Vou levar este",reading:"ヴォウ レヴァール エスチ",jp:"これを買います",th:"เอาอันนี้",en:"I will take this"},{phrase:"Tem desconto?",reading:"テン デスコント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Is there a discount?"},{phrase:"Tem em outra cor?",reading:"テン エン オウトラ コール？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have it in another color?"}],restaurant:[{phrase:"Uma mesa para dois, por favor",reading:"ウマ メザ パラ ドイス ポル ファヴォール",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"O cardápio, por favor",reading:"オ カルダピオ ポル ファヴォール",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Gostaria de fazer o pedido",reading:"ゴスタリア ジ ファゼール オ ペジード",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"A conta, por favor",reading:"ア コンタ ポル ファヴォール",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Água, por favor",reading:"アグア ポル ファヴォール",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"Onde fica a estação de trem?",reading:"オンヂ フィカ ア エスタサォン ジ トレン？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Quero ir para cá",reading:"ケロ イール パラ カ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Este ônibus vai para o aeroporto?",reading:"エスチ オニブス ヴァイ パラ オ アエロポルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Pare aqui, por favor",reading:"パリ アキ ポル ファヴォール",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"Quanto tempo demora?",reading:"クアント テンポ デモラ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Socorro!",reading:"ソホーホ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Chame uma ambulância",reading:"シャミ ウマ アンブランシア",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Chame a polícia",reading:"シャミ ア ポリシア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"Perdi meu passaporte",reading:"ペルジ メウ パサポルチ",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Onde fica o hospital?",reading:"オンヂ フィカ オ オスピタウ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sim",reading:"シン",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"Não",reading:"ナォン",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Com licença",reading:"コン リセンサ",jp:"すみません",th:"ขออนุญาต/ขอโทษ",en:"Excuse me"},{phrase:"Desculpe",reading:"デスクウピ",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"Não entendo",reading:"ナォン エンテンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]}},zh={US:"en",GB:"en",AU:"en",CA:"en",NZ:"en",IE:"en",ZA:"en",IN:"en",PH:"en",SG:"en",TH:"th",CN:"zh",TW:"zh",HK:"zh",MO:"zh",KR:"ko",KP:"ko",ES:"es",MX:"es",AR:"es",CO:"es",PE:"es",CL:"es",EC:"es",GT:"es",CU:"es",BO:"es",DO:"es",HN:"es",PY:"es",SV:"es",NI:"es",CR:"es",PA:"es",UY:"es",VE:"es",IT:"it",SM:"it",VA:"it",CH:"it",PT:"pt",BR:"pt",MZ:"pt",AO:"pt",CV:"pt",GW:"pt",ST:"pt",JP:"ja"};function Xb(r){if(!r)return"en";const e=r.toUpperCase();if(zh[e])return zh[e];const t=r.toLowerCase();return t.includes("タイ")||t.includes("thai")?"th":t.includes("台湾")||t.includes("taiwan")||t.includes("中国")||t.includes("china")||t.includes("香港")||t.includes("hong")?"zh":t.includes("韓国")||t.includes("korea")?"ko":t.includes("スペイン")||t.includes("メキシコ")||t.includes("spain")||t.includes("mexico")?"es":t.includes("イタリア")||t.includes("italy")?"it":t.includes("ポルトガル")||t.includes("ブラジル")||t.includes("portugal")||t.includes("brazil")?"pt":t.includes("日本")||t.includes("japan")?"ja":"en"}function Gh(r){return{en:"🇺🇸",th:"🇹🇭",zh:"🇹🇼",ko:"🇰🇷",es:"🇪🇸",it:"🇮🇹",pt:"🇵🇹",ja:"🇯🇵"}[r]||"🏳️"}const Xo=[{code:"TW",name:{ja:"台湾",en:"Taiwan",th:"ไต้หวัน"},flag:"🇹🇼"},{code:"KR",name:{ja:"韓国",en:"South Korea",th:"เกาหลีใต้"},flag:"🇰🇷"},{code:"US",name:{ja:"アメリカ",en:"United States",th:"สหรัฐอเมริกา"},flag:"🇺🇸"},{code:"TH",name:{ja:"タイ",en:"Thailand",th:"ไทย"},flag:"🇹🇭"},{code:"CN",name:{ja:"中国",en:"China",th:"จีน"},flag:"🇨🇳"},{code:"HK",name:{ja:"香港",en:"Hong Kong",th:"ฮ่องกง"},flag:"🇭🇰"},{code:"SG",name:{ja:"シンガポール",en:"Singapore",th:"สิงคโปร์"},flag:"🇸🇬"},{code:"AU",name:{ja:"オーストラリア",en:"Australia",th:"ออสเตรเลีย"},flag:"🇦🇺"},{code:"GB",name:{ja:"イギリス",en:"United Kingdom",th:"สหราชอาณาจักร"},flag:"🇬🇧"},{code:"FR",name:{ja:"フランス",en:"France",th:"ฝรั่งเศส"},flag:"🇫🇷"},{code:"IT",name:{ja:"イタリア",en:"Italy",th:"อิตาลี"},flag:"🇮🇹"},{code:"ES",name:{ja:"スペイン",en:"Spain",th:"สเปน"},flag:"🇪🇸"},{code:"DE",name:{ja:"ドイツ",en:"Germany",th:"เยอรมนี"},flag:"🇩🇪"},{code:"CA",name:{ja:"カナダ",en:"Canada",th:"แคนาดา"},flag:"🇨🇦"},{code:"PH",name:{ja:"フィリピン",en:"Philippines",th:"ฟิลิปปินส์"},flag:"🇵🇭"},{code:"VN",name:{ja:"ベトナム",en:"Vietnam",th:"เวียดนาม"},flag:"🇻🇳"},{code:"MY",name:{ja:"マレーシア",en:"Malaysia",th:"มาเลเซีย"},flag:"🇲🇾"},{code:"ID",name:{ja:"インドネシア",en:"Indonesia",th:"อินโดนีเซีย"},flag:"🇮🇩"},{code:"PT",name:{ja:"ポルトガル",en:"Portugal",th:"โปรตุเกส"},flag:"🇵🇹"},{code:"BR",name:{ja:"ブラジル",en:"Brazil",th:"บราซิล"},flag:"🇧🇷"},{code:"MX",name:{ja:"メキシコ",en:"Mexico",th:"เม็กซิโก"},flag:"🇲🇽"},{code:"CH",name:{ja:"スイス",en:"Switzerland",th:"สวิตเซอร์แลนด์"},flag:"🇨🇭"},{code:"JP",name:{ja:"日本",en:"Japan",th:"ญี่ปุ่น"},flag:"🇯🇵"},{code:"OTHER",name:{ja:"その他 (自由入力)",en:"Other",th:"อื่นๆ"},flag:"🏳️"}];let X={activeLang:"en",activeCategory:"greeting",currentCardIndex:0,flashcards:[],customCards:[]};const Zb={render(){return`
      <div class="page flashcard-page">
        <header class="page-header">
          <button class="btn-back" id="btn-back">←</button>
          <h2 class="page-title">🗣️ ${O("flashcardTitle")||"トラベル単語帳"}</h2>
        </header>

        <div class="flashcard-language-selector" id="fc-target-langs">
          <!-- Dynamically populated flag buttons -->
        </div>

        <div class="tabs" id="fc-categories" style="margin-bottom: var(--space-lg); overflow-x: auto; white-space: nowrap;">
          <!-- Dynamically populated category tabs -->
        </div>

        <div class="flashcard-container">
          <div class="flashcard-scene" id="fc-card-wrapper">
            <div class="flashcard" id="fc-card">
              <div class="flashcard-face flashcard-front">
                <h3 id="fc-front-text" class="flashcard-phrase"></h3>
                <div class="swipe-hint">タップで裏返す 👆</div>
              </div>
              <div class="flashcard-face flashcard-back">
                <div style="display:flex; justify-content:center; align-items:center; gap: 12px; margin-bottom: 8px;">
                  <h3 id="fc-back-text" class="flashcard-translation" style="margin: 0;"></h3>
                  <button id="fc-play-btn" class="btn-icon" style="font-size: 1.5rem; background: var(--bg-soft); border-radius: 50%; width: 40px; height: 40px;">🔊</button>
                </div>
                <p id="fc-back-reading" class="flashcard-reading"></p>
                <div class="swipe-hint">タップで戻る 🔙</div>
              </div>
            </div>
          </div>
          
          <div class="flashcard-nav">
            <button id="fc-prev-btn" class="flashcard-nav-btn">◀</button>
            <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
              <span id="fc-counter" class="flashcard-counter">0 / 0</span>
              <div id="fc-fav-btn" class="flashcard-star">⭐</div>
            </div>
            <button id="fc-next-btn" class="flashcard-nav-btn">▶</button>
          </div>
        </div>

        <button class="fab" id="fc-add-btn">➕</button>

        <div id="fc-modal" class="modal-overlay">
          <div class="modal-content">
            <div class="modal-title">新しいフレーズを追加</div>
            <div class="form-group mt-md">
              <label class="form-label">調べたい言葉（あなたの言語）</label>
              <input type="text" id="fc-new-front" placeholder="例: こんにちは" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-label">現地での言い方</label>
              <input type="text" id="fc-new-back" placeholder="例: Hello" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-label">読み方メモ</label>
              <input type="text" id="fc-new-reading" placeholder="例: ハロー" class="form-input">
            </div>
            <button id="fc-modal-save" class="btn btn-primary w-full mt-lg">保存する</button>
            <button type="button" class="btn btn-secondary w-full mt-sm" id="fc-modal-close">キャンセル</button>
          </div>
        </div>
      </div>
    `},init(){var p,y,T,R,x,C,U,$,F,L;const r=re(),e=r.currentTrip,t=Oa(),n=t==="ja"?"jp":t;let s=["en"];if(e&&e.destinations){const D=e.destinations.map(N=>Xb(N.country)).filter(Boolean);D.length>0&&(s=[...new Set(D)])}X.activeLang=s[0]||"en";const i=document.getElementById("fc-target-langs");s.length>1?i.innerHTML=s.map(D=>`<button class="flag-btn ${D===X.activeLang?"active":""}" data-lang="${D}">
          ${Gh(D)}
        </button>`).join(""):s.length===1&&(i.innerHTML=`<div class="flag-btn active" style="pointer-events: none;">${Gh(s[0])}</div>`);const o=document.getElementById("fc-categories"),c=Yo?Yo.map(D=>D.id):["greeting"];c.length>0&&(X.activeCategory=c[0],o.innerHTML=Yo.map(D=>`<button class="tab ${D.id===X.activeCategory?"active":""}" data-cat="${D.id}">
          ${D.emoji} ${D.label}
        </button>`).join(""));const l=()=>{let D=[];ti&&ti[X.activeLang]&&ti[X.activeLang][X.activeCategory]&&(D=[...ti[X.activeLang][X.activeCategory]]);const N=X.customCards.filter(v=>v.category===X.activeCategory&&v.lang===X.activeLang);X.flashcards=[...D,...N],X.currentCardIndex=0,h()},h=()=>{const D=X.flashcards[X.currentCardIndex],N=document.getElementById("fc-card");if(!D){document.getElementById("fc-front-text").textContent="カードがありません",document.getElementById("fc-back-text").textContent="右下の➕から追加！",document.getElementById("fc-back-reading").textContent="",document.getElementById("fc-counter").textContent="0 / 0",N.classList.remove("flipped");return}const v=D.userFront||D[n]||D.en||D.phrase,g=D.targetBack||D.phrase||"",_=D.reading||"";document.getElementById("fc-front-text").textContent=v,document.getElementById("fc-back-text").textContent=g;const E=document.getElementById("fc-back-reading");t==="ja"&&_?(E.style.display="block",E.textContent=_):(E.style.display="none",E.textContent=""),document.getElementById("fc-counter").textContent=`${X.currentCardIndex+1} / ${X.flashcards.length}`,N.classList.remove("flipped");const A=JSON.parse(localStorage.getItem("tabi_shiori_fav_cards")||"[]").includes(D.id||v);document.getElementById("fc-fav-btn").textContent=A?"🌟":"⭐",document.getElementById("fc-fav-btn").classList.toggle("active",A)};e?Nb(e.id).then(D=>{X.customCards=D,l()}):l(),(p=document.getElementById("btn-back"))==null||p.addEventListener("click",()=>ve("/")),(y=document.getElementById("fc-card-wrapper"))==null||y.addEventListener("click",D=>{D.target.closest("#fc-play-btn")||document.getElementById("fc-card").classList.toggle("flipped")}),(T=document.getElementById("fc-play-btn"))==null||T.addEventListener("click",D=>{D.stopPropagation();const N=X.flashcards[X.currentCardIndex],v=(N==null?void 0:N.targetBack)||(N==null?void 0:N.phrase);if(v&&window.speechSynthesis){window.speechSynthesis.cancel();const g=new SpeechSynthesisUtterance(v),_={zh:"zh-CN",th:"th-TH",ko:"ko-KR",es:"es-ES",it:"it-IT",pt:"pt-PT",en:"en-US",ja:"ja-JP"};g.lang=_[X.activeLang]||X.activeLang,window.speechSynthesis.speak(g)}}),(R=document.getElementById("fc-prev-btn"))==null||R.addEventListener("click",D=>{D.stopPropagation(),X.currentCardIndex>0&&(X.currentCardIndex--,h())}),(x=document.getElementById("fc-next-btn"))==null||x.addEventListener("click",D=>{D.stopPropagation(),X.currentCardIndex<X.flashcards.length-1&&(X.currentCardIndex++,h())}),document.querySelectorAll(".flag-btn").forEach(D=>{D.addEventListener("click",N=>{const v=N.target.closest(".flag-btn");v.classList.contains("active")||(document.querySelectorAll(".flag-btn").forEach(g=>g.classList.remove("active")),v.classList.add("active"),X.activeLang=v.dataset.lang,l())})}),(C=document.getElementById("fc-categories"))==null||C.addEventListener("click",D=>{const N=D.target.closest(".tab");N&&!N.classList.contains("active")&&(document.querySelectorAll("#fc-categories .tab").forEach(v=>v.classList.remove("active")),N.classList.add("active"),X.activeCategory=N.dataset.cat,l())}),(U=document.getElementById("fc-fav-btn"))==null||U.addEventListener("click",D=>{D.stopPropagation();const N=X.flashcards[X.currentCardIndex];if(!N)return;const v=N.userFront||N[n]||N.phrase,g=N.id||v;let _=JSON.parse(localStorage.getItem("tabi_shiori_fav_cards")||"[]");_.includes(g)?_=_.filter(E=>E!==g):_.push(g),localStorage.setItem("tabi_shiori_fav_cards",JSON.stringify(_)),h()});const f=document.getElementById("fc-modal");($=document.getElementById("fc-add-btn"))==null||$.addEventListener("click",()=>{document.getElementById("fc-new-front").value="",document.getElementById("fc-new-back").value="",document.getElementById("fc-new-reading").value="",f.classList.add("active")}),(F=document.getElementById("fc-modal-close"))==null||F.addEventListener("click",()=>{f.classList.remove("active")}),f==null||f.addEventListener("click",D=>{D.target===f&&f.classList.remove("active")}),(L=document.getElementById("fc-modal-save"))==null||L.addEventListener("click",async()=>{const D=document.getElementById("fc-new-front").value.trim(),N=document.getElementById("fc-new-back").value.trim(),v=document.getElementById("fc-new-reading").value.trim();if(!(!D||!N)&&e&&r.user){const g={userFront:D,targetBack:N,reading:v,category:X.activeCategory,lang:X.activeLang};await Lb(e.id,g),X.customCards.push(g),l(),f.classList.remove("active")}})}},eA=[{category:"documents",items:["パスポート","航空券(予約確認書)","ホテル予約確認書","海外旅行保険証","クレジットカード"]},{category:"electronics",items:["スマホ充電器","モバイルバッテリー","変換プラグ","イヤホン","カメラ"]},{category:"clothing",items:["着替え","下着","靴下","パジャマ","上着/羽織り"]},{category:"toiletries",items:["歯ブラシ","歯磨き粉","シャンプー","日焼け止め","常備薬"]},{category:"other",items:["現金","エコバッグ","雨具","ガイドブック"]}],Hh={documents:{label:"📄 書類",color:"var(--color-yellow)"},electronics:{label:"🔌 電子機器",color:"var(--color-blue)"},clothing:{label:"👕 衣類",color:"var(--color-pink)"},toiletries:{label:"🧴 洗面用品",color:"var(--color-mint)"},other:{label:"📦 その他",color:"#e0c3fc"}},tA=["パスポート","航空券","航空券(予約確認書)"];let Kn=[];async function nA(){return`
    <div class="page checklist-page">
      <header class="page-header">
        <button class="back-btn" id="cl-back-btn">←</button>
        <h2>${O("checklistTitle")}</h2>
      </header>

      <div class="progress-container">
        <div class="progress-text" id="cl-progress-text">0/0 ${O("preparing")}</div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" id="cl-progress-fill"></div>
        </div>
      </div>

      <div class="checklist-container" id="cl-container">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `}async function rA(){if(!re().currentTrip){document.getElementById("cl-container").innerHTML=`<p class="empty-state">${O("noTripSelected")}</p>`;return}iA(),await Ma()}async function Ma(){const e=re().currentTrip;if(Kn=await jh(e.id),Kn.length===0){for(const t of eA)for(const n of t.items){const s={name:n,category:t.category,checked:!1,important:tA.includes(n),assignee:null};await ym(e.id,s)}Kn=await jh(e.id)}sA()}async function sA(){const r=document.getElementById("cl-container");r.innerHTML="";for(const e of Object.keys(Hh)){const t=Hh[e],n=Kn.filter(l=>l.category===e);if(n.length===0)continue;const s=document.createElement("div");s.className="checklist-section";const i=document.createElement("div");i.className="checklist-header",i.style.backgroundColor=t.color,i.innerHTML=`<h3>${t.label}</h3><span class="toggle-icon">▼</span>`,i.addEventListener("click",()=>{const l=s.querySelector(".checklist-items");l.classList.toggle("hidden"),i.querySelector(".toggle-icon").textContent=l.classList.contains("hidden")?"▶":"▼"}),s.appendChild(i);const o=document.createElement("div");o.className="checklist-items";for(const l of n){l.checked;const h=document.createElement("div");h.className=`checklist-item ${l.checked?"checked":""}`;const f=await xe(l.name)||l.name;h.innerHTML=`
        <div class="checkbox-custom" data-id="${l.id}">
          ${l.checked?"✓":""}
        </div>
        <div class="item-name">
          ${l.important?'<span class="important-mark">❗</span>':""}
          ${f}
        </div>
        <div class="assignee-badge" data-id="${l.id}">
          ${l.assignee?l.assignee.substring(0,1):"👤"}
        </div>
      `,h.querySelector(".checkbox-custom").addEventListener("click",p=>{l.checked=!l.checked;const y=p.currentTarget;y.innerHTML=l.checked?"✓":"",l.checked?h.classList.add("checked"):h.classList.remove("checked"),Zo();const T=re();Fh(T.currentTrip.id,l.id,{checked:l.checked}).catch(R=>{console.error("Failed to update checklist item:",R),l.checked=!l.checked,y.innerHTML=l.checked?"✓":"",h.classList.toggle("checked"),Zo()})}),h.querySelector(".assignee-badge").addEventListener("click",p=>{const y=prompt("担当者名を入力:",l.assignee||"");if(y!==null){const T=re();Fh(T.currentTrip.id,l.id,{assignee:y||null}).then(()=>Ma())}}),o.appendChild(h)}const c=document.createElement("div");c.className="add-item-container",c.innerHTML=`
      <input type="text" class="add-item-input" placeholder="+ アイテムを追加">
      <button class="add-item-btn">追加</button>
    `,c.querySelector(".add-item-btn").addEventListener("click",async()=>{const l=c.querySelector(".add-item-input");if(l.value.trim()){const h=re();await ym(h.currentTrip.id,{name:l.value.trim(),category:e,checked:!1,important:!1,assignee:null}),await Ma()}}),o.appendChild(c),s.appendChild(o),r.appendChild(s)}Zo()}function Zo(){const r=Kn.length,e=Kn.filter(s=>s.checked).length,t=document.getElementById("cl-progress-text"),n=document.getElementById("cl-progress-fill");if(r>0&&t&&n){const s=Math.round(e/r*100);n.style.width=`${s}%`,e===r?(t.textContent=`${e}/${r} 完璧！🎉`,n.style.backgroundColor="var(--color-mint)"):(t.textContent=`${e}/${r} 準備中...`,n.style.backgroundColor="var(--color-pink-deep)")}}function iA(){var r;(r=document.getElementById("cl-back-btn"))==null||r.addEventListener("click",()=>ve("home"))}const oA={render:nA,init:rA};async function aA(r,e,t){const n=Date.now(),s=TE(Rb,`trips/${r}/${e}/photos/${n}_${t.name}`);return await vE(s,t),await IE(s)}function cA(r,e=1200,t=.8){return new Promise((n,s)=>{const i=new FileReader;i.readAsDataURL(r),i.onload=o=>{const c=new Image;c.src=o.target.result,c.onload=()=>{const l=document.createElement("canvas");let h=c.width,f=c.height;h>e&&(f=Math.round(f*e/h),h=e),l.width=h,l.height=f,l.getContext("2d").drawImage(c,0,0,h,f),l.toBlob(y=>{n(y)},r.type||"image/jpeg",t)},c.onerror=l=>s(l)},i.onerror=o=>s(o)})}let ni=1,jr="plan",Zt=[];const ea={sightseeing:{icon:"🏛️",label:"観光"},meal:{icon:"🍽️",label:"食事"},transport:{icon:"🚌",label:"移動"},hotel:{icon:"🏨",label:"ホテル"},shopping:{icon:"🛒",label:"買い物"},activity:{icon:"🎭",label:"体験"},other:{icon:"✨",label:"その他"}},lA={render(){return`
      <div class="page schedule-page">
        <header class="page-header">
          <h2>${O("scheduleTitle")}</h2>
        </header>

        <div class="mode-toggle">
          <button class="mode-btn ${jr==="plan"?"active":""}" data-mode="plan">${O("planMode")}</button>
          <button class="mode-btn ${jr==="journal"?"active":""}" data-mode="journal">${O("journalMode")}</button>
        </div>

        <div class="day-tabs" id="dayTabs">
          <!-- タブがここに生成されます -->
        </div>

        <div class="timeline" id="timelineContainer">
          <!-- タイムラインがここに生成されます -->
        </div>

        <button class="fab" id="addScheduleBtn">+</button>

        <!-- 予定追加モーダル -->
        <div class="modal-overlay" id="scheduleModal">
          <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>予定を追加</h3>
            <form id="scheduleForm">
              <input type="time" id="itemTime" required>
              <input type="text" id="itemTitle" placeholder="場所・予定名" required>
              <select id="itemCategory">
                ${Object.entries(ea).map(([r,e])=>`<option value="${r}">${e.icon} ${e.label}</option>`).join("")}
              </select>
              <input type="text" id="itemTransport" placeholder="移動手段 (例: タクシー)">
              <textarea id="itemMemo" placeholder="メモ"></textarea>
              <button type="submit" class="btn primary">追加する</button>
            </form>
          </div>
        </div>

        <!-- ジャーナル記録モーダル -->
        <div class="modal-overlay" id="journalModal">
          <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>記録を追加</h3>
            <form id="journalForm">
              <input type="hidden" id="journalItemId">
              
              <div class="mood-selector">
                <label>気分:</label>
                <div class="mood-options">
                  ${["😆","😊","😴","🤩","😢","🤔"].map(r=>`<span class="mood-option" data-mood="${r}">${r}</span>`).join("")}
                </div>
                <input type="hidden" id="journalMood">
              </div>

              <div class="star-rating">
                <label>評価:</label>
                <div class="stars">
                  ${[1,2,3,4,5].map(r=>`<span class="star" data-rating="${r}">★</span>`).join("")}
                </div>
                <input type="hidden" id="journalRating" value="0">
              </div>

              <textarea id="journalText" placeholder="感想を書いてね"></textarea>
              
              <div class="photo-upload">
                <label>写真を追加:</label>
                <input type="file" id="journalPhotos" accept="image/*" capture="environment" multiple>
              </div>

              <button type="submit" class="btn primary">保存する</button>
            </form>
          </div>
        </div>
      </div>
    `},async init(){const e=re().currentTrip;if(!e){alert("旅行が選択されていません。"),ve("/");return}const t=new Date(e.startDate),n=new Date(e.endDate),s=Math.ceil((n-t)/(1e3*60*60*24))+1,i=document.getElementById("dayTabs");let o="";for(let h=1;h<=s;h++){const f=new Date(t);f.setDate(f.getDate()+(h-1));const p=`${f.getMonth()+1}/${f.getDate()}`;o+=`<button class="day-tab ${h===ni?"active":""}" data-day="${h}">Day ${h} (${p})</button>`}i.innerHTML=o,i.querySelectorAll(".day-tab").forEach(h=>{h.addEventListener("click",f=>{document.querySelectorAll(".day-tab").forEach(p=>p.classList.remove("active")),f.target.classList.add("active"),ni=parseInt(f.target.dataset.day),this.loadSchedules(e.id)})}),document.querySelectorAll(".mode-btn").forEach(h=>{h.addEventListener("click",f=>{document.querySelectorAll(".mode-btn").forEach(p=>p.classList.remove("active")),f.target.classList.add("active"),jr=f.target.dataset.mode,this.renderTimeline()})});const c=document.getElementById("scheduleModal"),l=document.getElementById("journalModal");document.getElementById("addScheduleBtn").addEventListener("click",()=>{c.classList.add("active")}),document.querySelectorAll(".close-modal").forEach(h=>{h.addEventListener("click",()=>{c.classList.remove("active"),l.classList.remove("active")})}),document.getElementById("scheduleForm").addEventListener("submit",async h=>{h.preventDefault();const f={tripId:e.id,day:ni,time:document.getElementById("itemTime").value,title:document.getElementById("itemTitle").value,category:document.getElementById("itemCategory").value,transport:document.getElementById("itemTransport").value,memo:document.getElementById("itemMemo").value,order:Zt.length};await $n(e.id,f),c.classList.remove("active"),h.target.reset(),this.loadSchedules(e.id)}),document.querySelectorAll(".mood-option").forEach(h=>{h.addEventListener("click",f=>{document.querySelectorAll(".mood-option").forEach(p=>p.classList.remove("selected")),f.target.classList.add("selected"),document.getElementById("journalMood").value=f.target.dataset.mood})}),document.querySelectorAll(".star").forEach(h=>{h.addEventListener("click",f=>{const p=parseInt(f.target.dataset.rating);document.getElementById("journalRating").value=p,document.querySelectorAll(".star").forEach(y=>{y.style.color=parseInt(y.dataset.rating)<=p?"gold":"#ccc"})})}),document.getElementById("journalForm").addEventListener("submit",async h=>{h.preventDefault();const f=document.getElementById("journalItemId").value,p=document.getElementById("journalMood").value,y=document.getElementById("journalRating").value,T=document.getElementById("journalText").value,R=document.getElementById("journalPhotos");let C=Zt.find(U=>U.id===f).journalPhotos||[];if(R.files.length>0)for(let U of R.files){const $=await cA(U),F=await aA($,`journal/${e.id}/${f}/${Date.now()}`);C.push(F)}await Mb(f,{journalText:T,journalMood:p,journalRating:parseInt(y),journalPhotos:C}),l.classList.remove("show"),this.loadSchedules(e.id)}),this.loadSchedules(e.id)},async loadSchedules(r){Zt=(await Ob(r)).filter(t=>t.day===ni),Zt.sort((t,n)=>t.time.localeCompare(n.time)),await this.renderTimeline()},async renderTimeline(){const r=document.getElementById("timelineContainer");if(Zt.length===0){r.innerHTML='<p class="empty-state">予定がありません。追加してみましょう！</p>';return}const e=Zt.map(async n=>{const s=ea[n.category]||ea.other,i=await xe(n.title)||n.title,o=n.memo?await xe(n.memo)||n.memo:"";let c="";if(jr==="journal")if(n.journalText||n.journalMood||n.journalPhotos&&n.journalPhotos.length>0){const h=n.journalPhotos?n.journalPhotos.map(p=>`<img src="${p}" class="journal-photo">`).join(""):"",f="★".repeat(n.journalRating||0)+"☆".repeat(5-(n.journalRating||0));c=`
            <div class="journal-entry">
              ${n.journalMood?`<span class="journal-mood">${n.journalMood}</span>`:""}
              ${n.journalRating?`<span class="journal-rating">${f}</span>`:""}
              ${n.journalText?`<p class="journal-text">${n.journalText}</p>`:""}
              ${h?`<div class="journal-photos">${h}</div>`:""}
              <button class="btn small edit-journal-btn" data-id="${n.id}">編集</button>
            </div>
          `}else c=`<button class="btn small journal-add-btn" data-id="${n.id}">記録を追加</button>`;return`
        <div class="timeline-item">
          <div class="timeline-time">${n.time}</div>
          <div class="timeline-dot" data-category="${n.category}">${s.icon}</div>
          <div class="timeline-card">
            <h4>${i}</h4>
            ${n.transport?`<p class="transport">🚌 ${n.transport}</p>`:""}
            ${o?`<p class="memo">${o}</p>`:""}
            ${c}
          </div>
        </div>
      `}),t=await Promise.all(e);r.innerHTML=t.join(""),jr==="journal"&&r.querySelectorAll(".journal-add-btn, .edit-journal-btn").forEach(n=>{n.addEventListener("click",s=>{const i=s.target.dataset.id,o=Zt.find(c=>c.id===i);document.getElementById("journalItemId").value=i,document.getElementById("journalText").value=o.journalText||"",document.getElementById("journalMood").value=o.journalMood||"",document.getElementById("journalRating").value=o.journalRating||0,document.querySelectorAll(".mood-option").forEach(c=>{c.classList.toggle("selected",c.dataset.mood===o.journalMood)}),document.querySelectorAll(".star").forEach(c=>{c.style.color=parseInt(c.dataset.rating)<=(o.journalRating||0)?"gold":"#ccc"}),document.getElementById("journalModal").classList.add("active")})})}};let en="",Rt=[];const Kh=["首都・人口・面積・公用語は？","現地通貨は？","現地の人の性格は？","食文化は？","コンビニなどの便利なお店は？","移動手段はどう違う？","家やトイレはどんな感じ？","実際に行きたい場所3つ","食べたいもの3つ"],uA={render(){return`
      <div class="page research-page">
        <header class="page-header">
          <button class="back-btn" id="rs-back-btn">←</button>
          <h2 class="page-title">${O("researchTitle")}</h2>
        </header>

        <div class="country-tabs" id="rs-country-tabs">
          <!-- Dynamically populated country tabs -->
        </div>

        <div class="research-list" id="rs-list">
          <div class="loading">よみこみ中... 🧸</div>
        </div>

        <button class="fab" id="rs-add-btn">➕</button>

        <!-- 質問追加・編集モーダル -->
        <div class="modal-overlay" id="rs-modal">
          <div class="modal-content">
            <div class="modal-title" id="rs-modal-title">項目の追加</div>
            <form id="rs-form">
              <input type="hidden" id="rs-note-id">
              <div class="form-group mt-md">
                <label class="form-label">調べる項目（質問）</label>
                <input type="text" id="rs-question" class="form-input" placeholder="例: おすすめのカフェは？" required>
              </div>
              <button type="submit" class="btn btn-primary w-full mt-lg">保存する</button>
              <button type="button" class="btn btn-secondary w-full mt-sm" id="rs-modal-close">キャンセル</button>
            </form>
          </div>
        </div>
      </div>
    `},async init(){var o;const e=re().currentTrip;if(!e){document.getElementById("rs-list").innerHTML='<p class="empty-state">旅行が選択されていません。</p>';return}const t=e.destinations||[],n=[...new Set(t.map(c=>c.country).filter(Boolean))];if(n.length===0){document.getElementById("rs-list").innerHTML='<p class="empty-state">行き先が設定されていません。<br>旅行の編集から行き先を追加してください。</p>';return}en=n[0];const s=document.getElementById("rs-country-tabs");s.innerHTML=n.map(c=>`<button class="tab ${c===en?"active":""}" data-country="${c}">${c}</button>`).join(""),s.addEventListener("click",c=>{c.target.classList.contains("tab")&&(document.querySelectorAll("#rs-country-tabs .tab").forEach(l=>l.classList.remove("active")),c.target.classList.add("active"),en=c.target.dataset.country,this.loadNotes(e.id))});const i=document.getElementById("rs-modal");document.getElementById("rs-add-btn").addEventListener("click",()=>{document.getElementById("rs-modal-title").textContent="項目の追加",document.getElementById("rs-note-id").value="",document.getElementById("rs-question").value="",i.classList.add("active")}),document.getElementById("rs-modal-close").addEventListener("click",()=>{i.classList.remove("active")}),i.addEventListener("click",c=>{c.target===i&&i.classList.remove("active")}),document.getElementById("rs-form").addEventListener("submit",async c=>{c.preventDefault();const l=document.getElementById("rs-question").value.trim(),h=document.getElementById("rs-note-id").value;l&&(h?await $h(e.id,h,{question:l}):await Uh(e.id,{country:en,question:l,answer:"",order:Rt.length}),i.classList.remove("active"),await this.loadNotes(e.id))}),(o=document.getElementById("rs-back-btn"))==null||o.addEventListener("click",()=>ve("/")),await this.loadNotes(e.id)},async loadNotes(r){if(Rt=(await Bh(r)).filter(t=>t.country===en),Rt.length===0){for(let n=0;n<Kh.length;n++)await Uh(r,{country:en,question:Kh[n],answer:"",order:n});Rt=(await Bh(r)).filter(n=>n.country===en)}Rt.sort((t,n)=>(t.order||0)-(n.order||0)),await this.renderNotes(r)},async renderNotes(r){const e=document.getElementById("rs-list");if(Rt.length===0){e.innerHTML='<p class="empty-state">項目がありません。</p>';return}const t=Rt.map(async i=>{const o=await xe(i.question)||i.question,c=i.answer?await xe(i.answer)||i.answer:"";return`
        <div class="rs-card" data-id="${i.id}">
          <div class="rs-card-header">
            <h3 class="rs-question">${o}</h3>
            <div class="rs-actions">
              <button class="btn-icon rs-edit-q" data-id="${i.id}">✏️</button>
              <button class="btn-icon rs-delete-q" data-id="${i.id}">✖</button>
            </div>
          </div>
          <div class="rs-card-body">
            <textarea class="rs-answer-input" data-id="${i.id}" placeholder="調べてわかったこと...">${i.answer||""}</textarea>
            ${c!==(i.answer||"")&&c?`<div class="rs-answer-translated">💡 翻訳: ${c}</div>`:""}
          </div>
        </div>
      `}),n=await Promise.all(t);e.innerHTML=n.join(""),e.querySelectorAll(".rs-edit-q").forEach(i=>{i.addEventListener("click",o=>{const c=o.target.closest(".rs-edit-q").dataset.id,l=Rt.find(h=>h.id===c);l&&(document.getElementById("rs-modal-title").textContent="項目の編集",document.getElementById("rs-note-id").value=l.id,document.getElementById("rs-question").value=l.question,document.getElementById("rs-modal").classList.add("active"))})}),e.querySelectorAll(".rs-delete-q").forEach(i=>{i.addEventListener("click",async o=>{const c=o.target.closest(".rs-delete-q").dataset.id;confirm("この項目を削除しますか？")&&(await jb(r,c),await this.loadNotes(r))})});let s;e.querySelectorAll(".rs-answer-input").forEach(i=>{i.addEventListener("input",o=>{clearTimeout(s);const c=o.target.dataset.id,l=o.target.value;s=setTimeout(async()=>{await $h(r,c,{answer:l})},1e3)})})}},Wh={food:{icon:"🍽️",label:"食事"},transport:{icon:"🚕",label:"交通"},shopping:{icon:"🛒",label:"買い物"},stay:{icon:"🏨",label:"宿泊"},activity:{icon:"🎭",label:"アクティビティ"},other:{icon:"📦",label:"その他"}},hA={render(){return`
            <div class="page page-budget">
                <header class="header">
                    <h2>${O("budgetTitle")}</h2>
                </header>
                <main class="content" id="budget-main">
                    <div class="loading">よみこみ中... 🧸</div>
                </main>
                <button class="fab" id="budget-fab">＋</button>
                
                <div id="budget-modal" class="modal hidden">
                    <div class="modal-content">
                        <h3>支出の追加 ✏️</h3>
                        <form id="budget-form">
                            <div class="form-group">
                                <label>金額 (必須)</label>
                                <input type="number" id="budget-amount" required>
                            </div>
                            <div class="form-group">
                                <label>用途</label>
                                <input type="text" id="budget-title" placeholder="例: ランチ代">
                            </div>
                            <div class="form-group">
                                <label>カテゴリ</label>
                                <select id="budget-category">
                                    ${Object.entries(Wh).map(([r,e])=>`<option value="${r}">${e.icon} ${e.label}</option>`).join("")}
                                </select>
                            </div>
                            <div class="form-group">
                                <label>支払った人</label>
                                <select id="budget-paid-by" required>
                                    <option value="">メンバーを選択</option>
                                </select>
                            </div>
                            <div class="modal-actions">
                                <button type="button" class="btn-cancel" id="budget-cancel">キャンセル</button>
                                <button type="submit" class="btn-primary">追加する ✨</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var y;const r=re(),e=r.currentTripId,t=document.getElementById("budget-main");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>旅行が選択されていません。</p>
                    <button class="btn-primary" onclick="window.location.hash='#'">ホームに戻る</button>
                </div>`;return}const n=((y=r.currentTrip)==null?void 0:y.members)||["自分","友人A","友人B"],s=document.getElementById("budget-paid-by");s.innerHTML=n.map(T=>`<option value="${T}">${T}</option>`).join("");let i=[];const o=async()=>{if(i.length===0){t.innerHTML=`
                    <div class="empty-state">
                        <div class="empty-icon">👛</div>
                        <p>まだ支出がありません。<br>右下の＋ボタンから追加しよう！</p>
                    </div>`;return}const T=i.reduce((L,D)=>L+Number(D.amount),0),R={};n.forEach(L=>R[L]=0),i.forEach(L=>{R[L.paidBy]!==void 0&&(R[L.paidBy]+=Number(L.amount))});const x=T/n.length,C=n.map(async L=>{const D=R[L]-x,N=await xe(L)||L;return D>0?`<li>✨ ${N}さんは <strong>¥${Math.round(D).toLocaleString()}</strong> もらいすぎ！ (いや、もらう側)</li>`:D<0?`<li>💸 ${N}さんは <strong>¥${Math.round(Math.abs(D)).toLocaleString()}</strong> 払う！</li>`:`<li>⚖️ ${N}さんは ぴったり！</li>`}),U=(await Promise.all(C)).join(""),$=i.map(async L=>{var v;const D=await xe(L.title)||"無題",N=await xe(L.paidBy)||L.paidBy;return`
                    <div class="budget-item card" data-id="${L.id}">
                        <div class="budget-icon">${((v=Wh[L.category])==null?void 0:v.icon)||"📦"}</div>
                        <div class="budget-details">
                            <div class="budget-title">${D}</div>
                            <div class="budget-meta">${N} が支払い</div>
                        </div>
                        <div class="budget-amount">¥${Number(L.amount).toLocaleString()}</div>
                    </div>
                `}),F=(await Promise.all($)).join("");t.innerHTML=`
                <div class="budget-summary card">
                    <h3>合計支出 💰</h3>
                    <div class="total-amount">¥${T.toLocaleString()}</div>
                </div>
                
                <div class="warikan-section card">
                    <h3>割り勘 ⚖️</h3>
                    <p class="warikan-subtitle">1人あたり: ¥${Math.round(x).toLocaleString()}</p>
                    <ul class="warikan-list">
                        ${U}
                    </ul>
                </div>

                <div class="budget-list">
                    <h3>支出リスト 📝</h3>
                    ${F}
                </div>
            `},c=async()=>{try{i=await Fb(e),await o()}catch(T){console.error(T),t.innerHTML="<p>エラーが発生しました😢</p>"}};await c();const l=document.getElementById("budget-modal"),h=document.getElementById("budget-fab"),f=document.getElementById("budget-cancel"),p=document.getElementById("budget-form");h.addEventListener("click",()=>{l.classList.remove("hidden")}),f.addEventListener("click",()=>{l.classList.add("hidden"),p.reset()}),p.addEventListener("submit",async T=>{T.preventDefault();const R={tripId:e,amount:Number(document.getElementById("budget-amount").value),title:document.getElementById("budget-title").value,category:document.getElementById("budget-category").value,paidBy:document.getElementById("budget-paid-by").value,date:new Date().toISOString(),currency:"JPY"};await Bb(R),l.classList.add("hidden"),p.reset(),await c()})}},tn={emergency:{icon:"🚨",label:"緊急連絡先"},hotel:{icon:"🏨",label:"ホテル情報"},flight:{icon:"✈️",label:"フライト情報"},insurance:{icon:"🛡️",label:"保険"}},dA={render(){return`
            <div class="page page-emergency">
                <header class="header">
                    <h2>${O("emergencyTitle")}</h2>
                </header>
                <main class="content" id="emergency-main">
                    <div class="loading">よみこみ中... 🧸</div>
                </main>
                
                <div id="emergency-modal" class="modal hidden">
                    <div class="modal-content">
                        <h3 id="modal-title">情報の追加 ✏️</h3>
                        <form id="emergency-form">
                            <input type="hidden" id="em-category">
                            <div class="form-group">
                                <label>タイトル (必須)</label>
                                <input type="text" id="em-title" required placeholder="例: ホテル電話番号">
                            </div>
                            <div class="form-group">
                                <label>電話番号</label>
                                <input type="tel" id="em-phone" placeholder="090-XXXX-XXXX">
                            </div>
                            <div class="form-group">
                                <label>メモ (内容)</label>
                                <textarea id="em-info" rows="3" placeholder="住所や予約番号など"></textarea>
                            </div>
                            <div class="modal-actions">
                                <button type="button" class="btn-cancel" id="em-cancel">キャンセル</button>
                                <button type="submit" class="btn-primary">保存する ✨</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){const e=re().currentTripId,t=document.getElementById("emergency-main");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>旅行が選択されていません。</p>
                </div>`;return}let n=[];const s=async()=>{if(n.length===0)t.innerHTML=Object.keys(tn).map(h=>`
                    <div class="emergency-section card">
                        <div class="section-header">
                            <h3>${tn[h].icon} ${tn[h].label}</h3>
                            <button class="btn-add-small" data-cat="${h}">＋ 追加</button>
                        </div>
                        <div class="empty-text">情報がありません。</div>
                    </div>
                `).join("");else{const h=Object.keys(tn).map(async p=>{const y=n.filter(x=>x.category===p),T=y.map(async x=>{const C=await xe(x.title)||x.title,U=x.info?await xe(x.info)||x.info:"";return`
                                    <div class="emergency-card">
                                        <h4>${C}</h4>
                                        ${U?`<p class="em-info">${U.replace(/\\n/g,"<br>")}</p>`:""}
                                        ${x.phone?`
                                            <a href="tel:${x.phone}" class="btn-tel">
                                                📞 電話をかける (${x.phone})
                                            </a>
                                        `:""}
                                    </div>
                        `}),R=(await Promise.all(T)).join("");return`
                        <div class="emergency-section card">
                            <div class="section-header">
                                <h3>${tn[p].icon} ${tn[p].label}</h3>
                                <button class="btn-add-small" data-cat="${p}">＋ 追加</button>
                            </div>
                            <div class="emergency-list">
                                ${y.length===0?'<div class="empty-text">情報がありません。</div>':R}
                            </div>
                        </div>
                    `}),f=await Promise.all(h);t.innerHTML=f.join("")}document.querySelectorAll(".btn-add-small").forEach(h=>{h.addEventListener("click",f=>{const p=f.target.getAttribute("data-cat");document.getElementById("em-category").value=p,document.getElementById("modal-title").innerText=`${tn[p].label}の追加 ✏️`,document.getElementById("emergency-modal").classList.remove("hidden")})})},i=async()=>{try{n=await Ub(e),await s()}catch(h){console.error(h),t.innerHTML="<p>エラーが発生しました😢</p>"}};await i();const o=document.getElementById("emergency-modal"),c=document.getElementById("em-cancel"),l=document.getElementById("emergency-form");c.addEventListener("click",()=>{o.classList.add("hidden"),l.reset()}),l.addEventListener("submit",async h=>{h.preventDefault();const f={tripId:e,title:document.getElementById("em-title").value,phone:document.getElementById("em-phone").value,info:document.getElementById("em-info").value,category:document.getElementById("em-category").value};await $b(f),o.classList.add("hidden"),l.reset(),await i()})}},fA={render(){return`
            <div class="page page-omiyage">
                <header class="header">
                    <h2>${O("omiyageTitle")}</h2>
                </header>
                <div class="progress-section card" id="omiyage-progress-container">
                    <!-- Progress injected here -->
                </div>
                <main class="content" id="omiyage-main">
                    <div class="loading">よみこみ中... 🧸</div>
                </main>
                <button class="fab" id="omiyage-fab">＋</button>
                
                <div id="omiyage-modal" class="modal hidden">
                    <div class="modal-content">
                        <h3>お土産の追加 ✏️</h3>
                        <form id="omiyage-form">
                            <div class="form-group">
                                <label>誰に渡す？ (必須)</label>
                                <input type="text" id="omi-recipient" required placeholder="例: 家族、職場、自分">
                            </div>
                            <div class="form-group">
                                <label>お土産名 / メモ</label>
                                <input type="text" id="omi-item" placeholder="例: ご当地クッキー">
                            </div>
                            <div class="form-group">
                                <label>予算目安</label>
                                <input type="number" id="omi-budget" placeholder="例: 1000">
                            </div>
                            <div class="modal-actions">
                                <button type="button" class="btn-cancel" id="omi-cancel">キャンセル</button>
                                <button type="submit" class="btn-primary">追加する ✨</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){const e=re().currentTripId,t=document.getElementById("omiyage-main"),n=document.getElementById("omiyage-progress-container");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>旅行が選択されていません。</p>
                </div>`,n.style.display="none";return}let s=[];const i=async()=>{if(s.length===0){n.innerHTML="<p>まだお土産リストがありません。</p>",t.innerHTML=`
                    <div class="empty-state">
                        <div class="empty-icon">🎁</div>
                        <p>右下の＋ボタンからお土産リストを追加しよう！</p>
                    </div>`;return}const p=s.length,y=s.filter(C=>C.purchased).length;n.innerHTML=`
                <h3>進捗状況 💪</h3>
                <div class="progress-text">${y} / ${p} 購入済み</div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${y/p*100}%"></div>
                </div>
            `;const T={};for(const C of s){const U=await xe(C.recipientName)||C.recipientName;T[U]||(T[U]=[]),T[U].push(C)}const R=Object.keys(T).map(async C=>{const U=T[C],$=U.reduce((D,N)=>D+Number(N.budget||0),0),F=U.map(async D=>{const N=await xe(D.itemName)||"未定";return`
                                <li class="omiyage-item ${D.purchased?"purchased":""}" data-id="${D.id}">
                                    <label class="checkbox-wrapper">
                                        <input type="checkbox" class="omiyage-check" data-id="${D.id}" ${D.purchased?"checked":""}>
                                        <span class="checkmark"></span>
                                        <div class="omiyage-details">
                                            <div class="omiyage-name">${N}</div>
                                            ${D.budget?`<div class="omiyage-budget">¥${Number(D.budget).toLocaleString()}</div>`:""}
                                        </div>
                                    </label>
                                    <button class="btn-delete" data-id="${D.id}">🗑️</button>
                                </li>
                    `}),L=await Promise.all(F);return`
                    <div class="omiyage-recipient card">
                        <div class="recipient-header">
                            <h3>👤 ${C}</h3>
                            <span class="recipient-budget">予算: ¥${$.toLocaleString()}</span>
                        </div>
                        <ul class="omiyage-list">
                            ${L.join("")}
                        </ul>
                    </div>
                `}),x=await Promise.all(R);t.innerHTML=x.join(""),document.querySelectorAll(".omiyage-check").forEach(C=>{C.addEventListener("change",async U=>{const $=U.target.getAttribute("data-id"),F=U.target.checked,L=s.find(D=>D.id===$);L&&(L.purchased=F,await Gb($,{purchased:F}),i())})}),document.querySelectorAll(".btn-delete").forEach(C=>{C.addEventListener("click",async U=>{if(confirm("本当に削除しますか？")){const $=U.target.getAttribute("data-id");await Hb($),await o()}})})},o=async()=>{try{s=await qb(e),await i()}catch(p){console.error(p),t.innerHTML="<p>エラーが発生しました😢</p>"}};await o();const c=document.getElementById("omiyage-modal"),l=document.getElementById("omiyage-fab"),h=document.getElementById("omi-cancel"),f=document.getElementById("omiyage-form");l.addEventListener("click",()=>{c.classList.remove("hidden")}),h.addEventListener("click",()=>{c.classList.add("hidden"),f.reset()}),f.addEventListener("submit",async p=>{p.preventDefault();const y={tripId:e,recipientName:document.getElementById("omi-recipient").value,itemName:document.getElementById("omi-item").value,budget:Number(document.getElementById("omi-budget").value)||0,purchased:!1};await zb(y),c.classList.add("hidden"),f.reset(),await o()})}},pA=["🐱","🐶","🐻","🐰","🦊","🐼","🐨","🦁","🐯","🐵","🐸","🦄","🌸","🌻","⭐","🌈","❤️","💎"];function Qh(r={},e={}){const t=r.country||"";let n=t!==""&&!Xo.some(c=>c.code===t||Object.values(c.name).includes(t)),s=n?"OTHER":t;const i=typeof Oa=="function"?Oa():re().language||"ja";if(!n&&t){const c=Xo.find(l=>l.code===t||Object.values(l.name).includes(t));c&&(s=c.code)}const o=Xo.map(c=>{const l=c.name[i]||c.name.ja;return`<option value="${c.code}" ${c.code===s?"selected":""}>${c.flag} ${l}</option>`}).join("");return`
    <div class="form-row destination-item mb-sm" style="gap: 4px;">
      <select class="form-input flex-1 dest-country-select" style="min-width: 0; padding: 12px 8px; margin-bottom: 0;">
        <option value="" disabled ${s?"":"selected"}>${e.country||"国を選択"}</option>
        ${o}
      </select>
      <input type="text" class="form-input flex-1 dest-country-other" placeholder="国名を入力" value="${n?t:""}" style="min-width: 0; padding: 12px 8px; margin-bottom: 0; ${n?"":"display:none;"}" />
      <input type="text" class="form-input flex-1 dest-city" placeholder="${e.city||"都市"}" value="${r.city||""}" style="min-width: 0; padding: 12px 8px; margin-bottom: 0;" />
      <button type="button" class="btn-icon btn-remove" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
    </div>
  `}const vm={render(){const r=Jl()==="/trip/edit",{currentTrip:e}=re(),t=r&&e?e:{title:"",startDate:"",endDate:"",destinations:[{country:"",city:""}],members:[{icon:"🐱",name:""}]};return`
      <div class="page fade-in">
        <header class="page-header">
          <button class="btn-back" id="btn-form-back">←</button>
          <h1 class="page-title">${O(r?"tripFormEditTitle":"tripFormNewTitle")}</h1>
        </header>

        <div class="form-content fade-in" style="animation-delay: 0.1s;">
          <div class="card mb-md">
            <input type="text" id="trip-title" class="form-input text-lg fw-bold" placeholder="${O("tripTitlePlaceholder")}" value="${t.title}" />
          </div>

          <div class="card mb-md">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div class="form-group" style="min-width: 0;">
                <label class="form-label">${O("startDate")}</label>
                <input type="date" id="trip-start" class="form-input" value="${t.startDate}" style="width: 100%; box-sizing: border-box;" />
              </div>
              <div class="form-group" style="min-width: 0;">
                <label class="form-label">${O("endDate")}</label>
                <input type="date" id="trip-end" class="form-input" value="${t.endDate}" style="width: 100%; box-sizing: border-box;" />
              </div>
            </div>
          </div>

          <div class="card mb-md" id="destinations-container">
            <label class="form-label">${O("destinations")}</label>
            <div id="destinations-list">
              ${t.destinations.map(n=>Qh(n,{country:O("countryPlaceholder"),city:O("cityPlaceholder")})).join("")}
            </div>
            <button class="btn btn-secondary btn-small w-full mt-sm" id="btn-add-dest">${O("addDestination")}</button>
          </div>

          <div class="card mb-md" id="members-container">
            <label class="form-label">${O("membersLabel")}</label>
            <div id="members-list">
              ${t.members.map((n,s)=>`
                <div class="form-row member-item mb-sm" style="align-items: center; gap: 4px;">
                  <button class="btn-emoji-picker" data-index="${s}" style="flex-shrink: 0;">${n.icon||"😊"}</button>
                  <input type="text" class="form-input flex-1 member-name" placeholder="${O("memberNamePlaceholder")}" value="${n.name||""}" style="min-width: 0;" />
                  <button class="btn-icon btn-remove-member" data-index="${s}" style="flex-shrink: 0; padding: 8px;">✖</button>
                </div>
              `).join("")}
            </div>
            <button class="btn btn-secondary btn-small w-full mt-sm" id="btn-add-member">${O("addMember")}</button>
          </div>
        </div>

        <div class="bottom-actions">
          <button class="btn btn-primary w-full text-lg mb-sm" id="btn-save-trip">${O("btnSave")}</button>
          ${r?`<button class="btn btn-secondary w-full" id="btn-delete-trip" style="color: var(--error);">🗑️ ${O("deleteTrip")||"この旅行を削除"}</button>`:""}
        </div>

        <!-- Emoji Picker Modal -->
        <div class="modal-overlay" id="emoji-modal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-title">アイコンを選ぶ</div>
            <div class="emoji-picker-grid">
              ${pA.map(n=>`<button type="button" class="emoji-option">${n}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `},init(){var o,c,l,h,f;const r=Jl()==="/trip/edit",{currentTrip:e}=re(),t=document.getElementById("destinations-list");(o=document.getElementById("btn-add-dest"))==null||o.addEventListener("click",()=>{const p=document.createElement("div");p.innerHTML=Qh({},{country:O("countryPlaceholder"),city:O("cityPlaceholder")}),t.appendChild(p.firstElementChild)}),t==null||t.addEventListener("click",p=>{p.target.classList.contains("btn-remove")&&t.querySelectorAll(".destination-item").length>1&&p.target.closest(".destination-item").remove()}),t==null||t.addEventListener("change",p=>{if(p.target.classList.contains("dest-country-select")){const T=p.target.closest(".destination-item").querySelector(".dest-country-other");p.target.value==="OTHER"?(T.style.display="block",T.focus()):(T.style.display="none",T.value="")}});const n=document.getElementById("members-list");(c=document.getElementById("btn-add-member"))==null||c.addEventListener("click",()=>{const p=document.createElement("div");p.className="form-row member-item mb-sm",p.style.alignItems="center",p.style.gap="4px",p.innerHTML=`
        <button class="btn-emoji-picker" style="flex-shrink: 0;">😊</button>
        <input type="text" class="form-input flex-1 member-name" placeholder="${O("memberNamePlaceholder")}" style="min-width: 0;" />
        <button class="btn-icon btn-remove-member" style="flex-shrink: 0; padding: 8px;">✖</button>
      `,n.appendChild(p)}),n==null||n.addEventListener("click",p=>{p.target.classList.contains("btn-remove-member")&&n.querySelectorAll(".member-item").length>1&&p.target.closest(".member-item").remove()});const s=document.getElementById("emoji-modal");let i=null;n==null||n.addEventListener("click",p=>{p.target.classList.contains("btn-emoji-picker")&&(i=p.target,s.classList.add("active"))}),s==null||s.addEventListener("click",p=>{p.target===s&&s.classList.remove("active")}),document.querySelectorAll(".emoji-option").forEach(p=>{p.addEventListener("click",()=>{i&&(i.textContent=p.textContent),s.classList.remove("active")})}),(l=document.getElementById("btn-form-back"))==null||l.addEventListener("click",()=>ve("/")),(h=document.getElementById("btn-save-trip"))==null||h.addEventListener("click",async p=>{const y=p.target;y.disabled=!0,y.textContent=O("btnSaving");const T=document.getElementById("trip-title").value,R=document.getElementById("trip-start").value,x=document.getElementById("trip-end").value,{user:C}=re();if(!C||!C.uid){alert(O("authError")),y.disabled=!1,y.textContent=O("btnSave");return}const U=Array.from(t.querySelectorAll(".destination-item")).map(L=>{const D=L.querySelector(".dest-country-select"),N=L.querySelector(".dest-country-other");return{country:D.value==="OTHER"?N.value:D.value,city:L.querySelector(".dest-city").value}}),$=Array.from(n.querySelectorAll(".member-item")).map(L=>({icon:L.querySelector(".btn-emoji-picker").textContent,name:L.querySelector(".member-name").value})),F={title:T,startDate:R,endDate:x,destinations:U,members:$};try{const L=setTimeout(()=>{var v;(v=document.getElementById("btn-save-trip"))!=null&&v.disabled&&ve("/")},1e4);r&&e?await xb(C.uid,e.id,F):await Db(C.uid,F);const D=await La(C.uid);Ze({trips:D});const N=r&&e&&D.find(v=>v.id===e.id)||D[0];Ze({currentTrip:N,currentTripId:N==null?void 0:N.id}),N&&localStorage.setItem("currentTripId",N.id),clearTimeout(L),ve("/")}catch(L){console.error("Error saving trip:",L),y.textContent="❌ エラー。もう一度お試しください",y.disabled=!1}}),r&&((f=document.getElementById("btn-delete-trip"))==null||f.addEventListener("click",async()=>{var p;if(confirm(`本当にこの旅行を削除しますか？
削除すると、すべてのデータ（単語帳、チェックリストなど）が消去され元に戻せません。`)){const{user:y}=re();try{await Vb(y.uid,e.id);const T=await La(y.uid);Ze({trips:T,currentTrip:T[0]||null,currentTripId:((p=T[0])==null?void 0:p.id)||null}),T.length>0?localStorage.setItem("currentTripId",T[0].id):localStorage.removeItem("currentTripId"),ve("/")}catch(T){console.error("Error deleting trip:",T),alert("削除に失敗しました。")}}}))}};function mA(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=r;let c,l;const h=async(p=!0)=>{await l};async function f(){if("serviceWorker"in navigator){if(c=await _m(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/tabi-shiori/sw.js",{scope:"/tabi-shiori/",type:"classic"})).catch(p=>{o==null||o(p)}),!c)return;c.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),c.addEventListener("installed",p=>{p.isUpdate||n==null||n()}),c.register({immediate:e}).then(p=>{i?i("/tabi-shiori/sw.js",p):s==null||s(p)}).catch(p=>{o==null||o(p)})}}return l=f(),h}st("/",Yb);st("/flashcard",Zb);st("/checklist",oA);st("/schedule",lA);st("/research",uA);st("/budget",hA);st("/emergency",dA);st("/omiyage",fA);st("/trip/new",vm);st("/trip/edit",vm);function gA(){const r=document.getElementById("app");r.innerHTML=`
    <!-- Header -->
    <header class="app-header" id="app-header">
      <div class="header-title">
        <img src="/tabi-shiori/images/tabikuma.jpg" alt="たびくま" class="header-mascot" />
        <span class="header-title-text">${O("appTitle")}</span>
      </div>
      <div class="header-actions">
        <button class="header-btn" id="btn-share" title="${O("share")}">🔗</button>
        <button class="header-btn" id="btn-menu" title="${O("menu")}">☰</button>
      </div>
    </header>

    <!-- Page Content -->
    <main id="page-content" class="page-transition"></main>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav" id="bottom-nav">
      <a class="nav-item active" data-route="/" href="#/">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">${O("home")}</span>
      </a>
      <a class="nav-item" data-route="/flashcard" href="#/flashcard">
        <span class="nav-icon">🗣️</span>
        <span class="nav-label">${O("flashcard")}</span>
      </a>
      <a class="nav-item" data-route="/checklist" href="#/checklist">
        <span class="nav-icon">🎒</span>
        <span class="nav-label">${O("checklist")}</span>
      </a>
      <a class="nav-item" data-route="/schedule" href="#/schedule">
        <span class="nav-icon">📅</span>
        <span class="nav-label">${O("schedule")}</span>
      </a>
      <a class="nav-item" data-route="/research" href="#/research">
        <span class="nav-icon">🔍</span>
        <span class="nav-label">${O("research")}</span>
      </a>
    </nav>

    <!-- Drawer Menu -->
    <div class="modal-overlay" id="drawer-overlay">
      <div class="modal-content drawer-content">
        <div class="modal-handle"></div>
        <div class="drawer-header">
          <img src="/tabi-shiori/images/tabikuma.jpg" alt="たびくま" class="drawer-mascot" />
          <h2>${O("menu")}</h2>
        </div>
        <nav class="drawer-nav" id="drawer-nav">
          <a class="drawer-item" id="btn-drawer-portal">🐻 TOPページ（旅行一覧）</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/">🏠 ${O("home")} (ダッシュボード)</a>
          <a class="drawer-item" data-route="/flashcard">${O("flashcardTitle")}</a>
          <a class="drawer-item" data-route="/checklist">${O("checklistTitle")}</a>
          <a class="drawer-item" data-route="/schedule">📅 ${O("scheduleTitle")}</a>
          <a class="drawer-item" data-route="/research">🔍 ${O("researchTitle")}</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/budget">${O("budgetTitle")}</a>
          <a class="drawer-item" data-route="/emergency">${O("emergencyTitle")}</a>
          <a class="drawer-item" data-route="/omiyage">${O("omiyageTitle")}</a>
          <hr class="drawer-divider" />
          <div class="drawer-trips" id="drawer-trips">
            <p class="drawer-section-title">${O("switchTrip")}</p>
          </div>
          <hr class="drawer-divider" id="drawer-logout-divider" style="display:none;" />
          <a class="drawer-item" id="btn-drawer-logout" style="display:none; color: var(--color-danger);">🚪 ${O("logout")||"ログアウト"}</a>
          <hr class="drawer-divider" />
          <div class="drawer-language" style="display:flex; justify-content:space-around; padding: 12px 16px;">
            <button class="btn-lang" data-lang="ja" style="font-size:24px; background:none; border:none; cursor:pointer;">🇯🇵</button>
            <button class="btn-lang" data-lang="en" style="font-size:24px; background:none; border:none; cursor:pointer;">🇺🇸</button>
            <button class="btn-lang" data-lang="th" style="font-size:24px; background:none; border:none; cursor:pointer;">🇹🇭</button>
          </div>
          <a class="drawer-item" id="btn-drawer-google">
            <span style="margin-right:4px">🌐</span>
            <span id="drawer-google-text">${O("googleLink")}</span>
          </a>
        </nav>
      </div>
    </div>

    <!-- Share Modal -->
    <div class="modal-overlay" id="share-overlay">
      <div class="modal-content">
        <div class="modal-handle"></div>
        <div class="modal-title">🔗 しおりを共有</div>
        <div id="share-content"></div>
      </div>
    </div>
  `}async function yA(){var s,i,o;"serviceWorker"in navigator&&mA({immediate:!0}),gA(),document.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault();const h=c.getAttribute("data-route");ve(h)})});const r=document.getElementById("drawer-overlay"),e=document.getElementById("share-overlay");document.getElementById("btn-menu").addEventListener("click",()=>{r.classList.add("active")}),document.getElementById("btn-share").addEventListener("click",()=>{e.classList.add("active"),_A()}),[r,e].forEach(c=>{c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")})}),document.querySelectorAll(".drawer-item[data-route]").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-route");r.classList.remove("active"),ve(l)})}),(s=document.getElementById("btn-drawer-google"))==null||s.addEventListener("click",async()=>{const{user:c}=re();if(!(c&&!c.isAnonymous))try{c&&c.isAnonymous?await pm():await fm(),window.location.reload()}catch(l){l.code!=="auth/popup-closed-by-user"&&l.code!=="auth/cancelled-popup-request"&&alert("ログインに失敗しました: "+l.message)}}),(i=document.getElementById("btn-drawer-logout"))==null||i.addEventListener("click",async()=>{try{await Cb(),window.location.reload()}catch(c){alert("ログアウトに失敗しました: "+c.message)}}),(o=document.getElementById("btn-drawer-portal"))==null||o.addEventListener("click",()=>{Ze({currentTripId:null,currentTrip:null}),document.getElementById("drawer-overlay").classList.remove("active"),ve("/",!0,!0)}),document.querySelectorAll(".btn-lang").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-lang");mm(l),window.location.reload()})});try{const c=await Pb();Ze({user:c});let l=[];c&&(l=await La(c.uid)),Ze({trips:l}),Ze({currentTripId:null,currentTrip:null}),Im(l)}catch(c){console.error("Initial data load failed:",c)}const t=document.getElementById("loading-screen");t&&t.classList.add("hidden");const n=window.location.hash.replace("#","")||"/";ve(n,!1)}function Im(r){var n;const e=document.getElementById("drawer-trips");if(!e)return;const t=re();e.innerHTML=`
    <p class="drawer-section-title">${O("switchTrip")}</p>
    ${r.map(s=>`
      <a class="drawer-trip-item ${s.id===t.currentTripId?"active":""}" data-trip-id="${s.id}">
        <span class="drawer-trip-emoji">✈️</span>
        <span class="drawer-trip-name">${s.title||O("untitledTrip")}</span>
      </a>
    `).join("")}
    <a class="drawer-trip-item drawer-trip-new" data-route="/trip/new">
      <span class="drawer-trip-emoji">➕</span>
      <span class="drawer-trip-name">${O("createNewTrip")}</span>
    </a>
  `,e.querySelectorAll(".drawer-trip-item[data-trip-id]").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-trip-id"),o=r.find(c=>c.id===i);o&&(Ze({currentTripId:i,currentTrip:o}),localStorage.setItem("currentTripId",i),document.getElementById("drawer-overlay").classList.remove("active"),ve("/",!0,!0))})}),(n=e.querySelector(".drawer-trip-new"))==null||n.addEventListener("click",()=>{document.getElementById("drawer-overlay").classList.remove("active"),ve("/trip/new")})}function _A(){var n;const r=re(),e=document.getElementById("share-content");if(!r.currentTrip){e.innerHTML=`<p class="empty-state-text">${O("noTripAlert")}</p>`;return}const t=r.currentTrip.shareId;if(t){const s=`${window.location.origin}/share/${t}`;e.innerHTML=`
      <div class="share-info">
        <div class="form-group">
          <label class="form-label">${O("shareUrl")}</label>
          <input type="text" value="${s}" readonly id="share-url-input" />
        </div>
        <div class="form-group">
          <label class="form-label">${O("sharePassword")}</label>
          <input type="text" value="${r.currentTrip.sharePassword||""}" readonly id="share-pw-input" />
        </div>
        <button class="btn btn-primary w-full" id="btn-copy-share">${O("shareCopyBtn")}</button>
      </div>
    `,(n=document.getElementById("btn-copy-share"))==null||n.addEventListener("click",()=>{navigator.clipboard.writeText(s+`
`+O("sharePassword")+": "+(r.currentTrip.sharePassword||"")),document.getElementById("btn-copy-share").textContent=O("shareCopySuccess")})}else e.innerHTML=`
      <div class="share-setup">
        <p class="text-sm text-muted mb-md">${O("shareSetupText")}</p>
        <div class="form-group">
          <label class="form-label">${O("sharePassword")}</label>
          <input type="text" id="share-password-input" placeholder="****" />
        </div>
        <button class="btn btn-primary w-full" id="btn-create-share">${O("shareCreateBtn")}</button>
      </div>
    `}function Tm(){const{currentTrip:r,user:e}=re(),t=document.getElementById("bottom-nav"),n=document.querySelector(".header-actions"),s=document.getElementById("btn-drawer-google"),i=document.getElementById("drawer-google-text"),o=document.getElementById("btn-drawer-logout"),c=document.getElementById("drawer-logout-divider");r?(t&&t.classList.remove("hidden"),n&&n.classList.remove("hidden")):(t&&t.classList.add("hidden"),n&&n.classList.add("hidden")),e&&(e.isAnonymous?(i&&(i.textContent=O("googleLink")),s&&(s.style.color="inherit"),o&&(o.style.display="none"),c&&(c.style.display="none")):(i&&(i.textContent=O("googleLinked")),s&&(s.style.color="var(--text-muted)"),o&&(o.style.display="flex"),c&&(c.style.display="block")))}Qc("trips",r=>{Im(r)});Qc("currentTrip",()=>{Tm()});document.addEventListener("DOMContentLoaded",()=>{yA().then(()=>Tm())});
