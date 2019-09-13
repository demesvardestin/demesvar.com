/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.15 (2019-09-02)
 */

!function(v){"use strict";var e,n,t,r,o=function(e){var n=e,t=function(){return n};return{get:t,set:function(e){n=e},clone:function(){return o(t())}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.util.Tools"),p=function(e){return function(){return e}},u=p(!1),c=p(!0),s=u,f=c,l=function(){return d},d=(r={fold:function(e,n){return e()},is:s,isSome:s,isNone:f,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:t,orThunk:n,map:l,ap:l,each:function(){},bind:l,flatten:l,exists:s,forall:f,filter:l,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:p("none()")},Object.freeze&&Object.freeze(r),r),m=function(t){var e=function(){return t},n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:f,isNone:s,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return m(e(t))},ap:function(e){return e.fold(l,function(e){return m(e(t))})},each:function(e){e(t)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(t)?o:d},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(s,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return o},y={some:m,none:l,from:function(e){return null===e||e===undefined?d:m(e)}};function h(e,n){return b(v.document.createElement("canvas"),e,n)}function g(e){var n=h(e.width,e.height);return w(n).drawImage(e,0,0),n}function w(e){return e.getContext("2d")}function b(e,n,t){return e.width=n,e.height=t,e}var E=window.Promise?window.Promise:function(){var i=function(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],f(e,r(o,this),r(a,this))},e=i.immediateFn||"function"==typeof window.setImmediate&&window.setImmediate||function(e){v.setTimeout(e,1)};function r(e,n){return function(){return e.apply(n,arguments)}}var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function u(r){var o=this;null!==this._state?e(function(){var e=o._state?r.onFulfilled:r.onRejected;if(null!==e){var n;try{n=e(o._value)}catch(t){return void r.reject(t)}r.resolve(n)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void f(r(n,e),r(o,this),r(a,this))}this._state=!0,this._value=e,c.call(this)}catch(t){a.call(this,t)}}function a(e){this._state=!1,this._value=e,c.call(this)}function c(){for(var e=0,n=this._deferreds;e<n.length;e++){var t=n[e];u.call(this,t)}this._deferreds=[]}function s(e,n,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.resolve=t,this.reject=r}function f(e,n,t){var r=!1;try{e(function(e){r||(r=!0,n(e))},function(e){r||(r=!0,t(e))})}catch(o){if(r)return;r=!0,t(o)}}return i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(t,r){var o=this;return new i(function(e,n){u.call(o,new s(t,r,e,n))})},i.all=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var c=Array.prototype.slice.call(1===e.length&&t(e[0])?e[0]:e);return new i(function(o,i){if(0===c.length)return o([]);var u=c.length;function a(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void t.call(e,function(e){a(n,e)},i)}c[n]=e,0==--u&&o(c)}catch(r){i(r)}}for(var e=0;e<c.length;e++)a(e,c[e])})},i.resolve=function(n){return n&&"object"==typeof n&&n.constructor===i?n:new i(function(e){e(n)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(o){return new i(function(e,n){for(var t=0,r=o;t<r.length;t++)r[t].then(e,n)})},i}();function O(e){var n=e.src;return 0===n.indexOf("data:")?I(n):function t(r){return new E(function(e,t){var n=new v.XMLHttpRequest;n.open("GET",r,!0),n.responseType="blob",n.onload=function(){200===this.status&&e(this.response)},n.onerror=function(){var e,n=this;t(0===this.status?((e=new Error("No access to download image")).code=18,e.name="SecurityError",e):new Error("Error "+n.status+" downloading image"))},n.send()})}(n)}function T(a){return new E(function(e,n){var t=v.URL.createObjectURL(a),r=new v.Image,o=function(){r.removeEventListener("load",i),r.removeEventListener("error",u)};function i(){o(),e(r)}function u(){o(),n("Unable to load data of type "+a.type+": "+t)}r.addEventListener("load",i),r.addEventListener("error",u),r.src=t,r.complete&&i()})}function I(t){return new E(function(e,n){(function g(e){var n=e.split(","),t=/data:([^;]+)/.exec(n[0]);if(!t)return y.none();for(var r=t[1],o=n[1],i=v.atob(o),u=i.length,a=Math.ceil(u/1024),c=new Array(a),s=0;s<a;++s){for(var f=1024*s,l=Math.min(f+1024,u),d=new Array(l-f),m=f,h=0;m<l;++h,++m)d[h]=i[m].charCodeAt(0);c[s]=new Uint8Array(d)}return y.some(new v.Blob(c,{type:r}))})(t).fold(function(){n("uri is not base64: "+t)},e)})}function N(e,r,o){return r=r||"image/png",v.HTMLCanvasElement.prototype.toBlob?new E(function(n,t){e.toBlob(function(e){e?n(e):t()},r,o)}):I(e.toDataURL(r,o))}function S(e){return T(e).then(function(e){!function t(e){v.URL.revokeObjectURL(e.src)}(e);var n=h(function r(e){return e.naturalWidth||e.width}(e),function o(e){return e.naturalHeight||e.height}(e));return w(n).drawImage(e,0,0),n})}function _(e,n,t){var r=n.type;function o(n,t){return e.then(function(e){return function r(e,n,t){return n=n||"image/png",e.toDataURL(n,t)}(e,n,t)})}return{getType:p(r),toBlob:function i(){return E.resolve(n)},toDataURL:function u(){return t},toBase64:function a(){return t.split(",")[1]},toAdjustedBlob:function c(n,t){return e.then(function(e){return N(e,n,t)})},toAdjustedDataURL:o,toAdjustedBase64:function s(e,n){return o(e,n).then(function(e){return e.split(",")[1]})},toCanvas:function f(){return e.then(g)}}}function x(n){return function e(t){return new E(function(e){var n=new v.FileReader;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}(n).then(function(e){return _(S(n),n,e)})}function R(n,e){return N(n,e).then(function(e){return _(E.resolve(n),e,n.toDataURL())})}function A(n,t){return n.toCanvas().then(function(e){return function a(e,n,t){var r=h(e.width,e.height),o=w(r),i=0,u=0;90!==(t=t<0?360+t:t)&&270!==t||b(r,r.height,r.width);90!==t&&180!==t||(i=r.width);270!==t&&180!==t||(u=r.height);return o.translate(i,u),o.rotate(t*Math.PI/180),o.drawImage(e,0,0),R(r,n)}(e,n.getType(),t)})}function C(n,t){return n.toCanvas().then(function(e){return function i(e,n,t){var r=h(e.width,e.height),o=w(r);"v"===t?(o.scale(1,-1),o.drawImage(e,0,-r.height)):(o.scale(-1,1),o.drawImage(e,-r.width,0));return R(r,n)}(e,n.getType(),t)})}var U=function(e){return x(e)},D=tinymce.util.Tools.resolve("tinymce.util.Delay"),j=tinymce.util.Tools.resolve("tinymce.util.Promise"),L=tinymce.util.Tools.resolve("tinymce.util.URI");var k,P={getImageSize:function mn(e){var n,t;function r(e){return/^[0-9\.]+px$/.test(e)}return n=e.style.width,t=e.style.height,n||t?r(n)&&r(t)?{w:parseInt(n,10),h:parseInt(t,10)}:null:(n=e.width,t=e.height,n&&t?{w:parseInt(n,10),h:parseInt(t,10)}:null)},setImageSize:function hn(e,n){var t,r;n&&(t=e.style.width,r=e.style.height,(t||r)&&(e.style.width=n.w+"px",e.style.height=n.h+"px",e.removeAttribute("data-mce-style")),t=e.width,r=e.height,(t||r)&&(e.setAttribute("width",n.w),e.setAttribute("height",n.h)))},getNaturalImageSize:function gn(e){return{w:e.naturalWidth,h:e.naturalHeight}}},M=(k="function",function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===k}),B=Array.prototype.slice,F=function(e,n){for(var t=0,r=e.length;t<r;t++){var o=e[t];if(n(o,t,e))return y.some(o)}return y.none()},z=(M(Array.from)&&Array.from,function(e){return null!==e&&e!==undefined}),H=function(e,n){var t;return t=n.reduce(function(e,n){return z(e)?e[n]:undefined},e),z(t)?t:null},q=function(n){return new j(function(t){var e=new v.FileReader;e.onload=function(e){var n=e.target;t(n.result)},e.readAsText(n)})},$=function(n,r,o){return new j(function(e){var t;(t=new v.XMLHttpRequest).onreadystatechange=function(){4===t.readyState&&e({status:t.status,blob:this.response})},t.open("GET",n,!0),t.withCredentials=o,a.each(r,function(e,n){t.setRequestHeader(n,e)}),t.responseType="blob",t.send()})},X=function(e){var n;try{n=JSON.parse(e)}catch(t){}return n},W=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],G=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],Y=function(n){return"ImageProxy HTTP error: "+F(W,function(e){return n===e.code}).fold(p("Unknown ImageProxy error"),function(e){return e.message})},V=function(e){var n=Y(e);return j.reject(n)},J=function(n){return F(G,function(e){return e.type===n}).fold(p("Unknown service error"),function(e){return e.message})},K=function(e,n){return q(n).then(function(e){var n,t,r=(n=X(e),"ImageProxy Service error: "+((t=H(n,["error","type"]))?J(t):"Invalid JSON in service error message"));return j.reject(r)})},Q=function(e,n){return 400===(t=e)||403===t||500===t?K(0,n):V(e);var t},Z=V,ee=function(e,n){var t,r,o,i={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":n};return $((t=e,r=n,o=-1===t.indexOf("?")?"?":"&",/[?&]apiKey=/.test(t)||!r?t:t+o+"apiKey="+encodeURIComponent(r)),i,!1).then(function(e){return e.status<200||300<=e.status?Q(e.status,e.blob):j.resolve(e.blob)})};var ne,te,re,oe=function(e,n,t){return n?ee(e,n):function r(e,n){return $(e,{},n).then(function(e){return e.status<200||300<=e.status?Z(e.status):j.resolve(e.blob)})}(e,t)},ie=function(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)},ue=function(e,n){return ie(e,n,v.Node.DOCUMENT_POSITION_CONTAINED_BY)},ae=function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};var r=function(e){return Number(n.replace(t,"$"+e))};return se(r(1),r(2))},ce=function(){return se(0,0)},se=function(e,n){return{major:e,minor:n}},fe={nu:se,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?ce():ae(e,t)},unknown:ce},le="Firefox",de=function(e,n){return function(){return n===e}},me=function(e){var n=e.current;return{current:n,version:e.version,isEdge:de("Edge",n),isChrome:de("Chrome",n),isIE:de("IE",n),isOpera:de("Opera",n),isFirefox:de(le,n),isSafari:de("Safari",n)}},he={unknown:function(){return me({current:undefined,version:fe.unknown()})},nu:me,edge:p("Edge"),chrome:p("Chrome"),ie:p("IE"),opera:p("Opera"),firefox:p(le),safari:p("Safari")},ge="Windows",ve="Android",pe="Solaris",ye="FreeBSD",we=function(e,n){return function(){return n===e}},be=function(e){var n=e.current;return{current:n,version:e.version,isWindows:we(ge,n),isiOS:we("iOS",n),isAndroid:we(ve,n),isOSX:we("OSX",n),isLinux:we("Linux",n),isSolaris:we(pe,n),isFreeBSD:we(ye,n)}},Ee={unknown:function(){return be({current:undefined,version:fe.unknown()})},nu:be,windows:p(ge),ios:p("iOS"),android:p(ve),linux:p("Linux"),osx:p("OSX"),solaris:p(pe),freebsd:p(ye)},Oe=function(e,n){var t=String(n).toLowerCase();return F(e,function(e){return e.search(t)})},Te=function(e,t){return Oe(e,t).map(function(e){var n=fe.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Ie=function(e,t){return Oe(e,t).map(function(e){var n=fe.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Ne=function(e,n){return-1!==e.indexOf(n)},Se=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,_e=function(n){return function(e){return Ne(e,n)}},xe=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Ne(e,"edge/")&&Ne(e,"chrome")&&Ne(e,"safari")&&Ne(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Se],search:function(e){return Ne(e,"chrome")&&!Ne(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Ne(e,"msie")||Ne(e,"trident")}},{name:"Opera",versionRegexes:[Se,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:_e("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:_e("firefox")},{name:"Safari",versionRegexes:[Se,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Ne(e,"safari")||Ne(e,"mobile/"))&&Ne(e,"applewebkit")}}],Re=[{name:"Windows",search:_e("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Ne(e,"iphone")||Ne(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:_e("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:_e("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:_e("linux"),versionRegexes:[]},{name:"Solaris",search:_e("sunos"),versionRegexes:[]},{name:"FreeBSD",search:_e("freebsd"),versionRegexes:[]}],Ae={browsers:p(xe),oses:p(Re)},Ce=function(e){var n,t,r,o,i,u,a,c,s,f,l,d=Ae.browsers(),m=Ae.oses(),h=Te(d,e).fold(he.unknown,he.nu),g=Ie(m,e).fold(Ee.unknown,Ee.nu);return{browser:h,os:g,deviceType:(t=h,r=e,o=(n=g).isiOS()&&!0===/ipad/i.test(r),i=n.isiOS()&&!o,u=n.isAndroid()&&3===n.version.major,a=n.isAndroid()&&4===n.version.major,c=o||u||a&&!0===/mobile/i.test(r),s=n.isiOS()||n.isAndroid(),f=s&&!c,l=t.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),{isiPad:p(o),isiPhone:p(i),isTablet:p(c),isPhone:p(f),isTouch:p(s),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:p(l)})}},Ue={detect:(re=!(ne=function(){var e=v.navigator.userAgent;return Ce(e)}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return re||(re=!0,te=ne.apply(null,e)),te})},De=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:p(e)}},je={fromHtml:function(e,n){var t=(n||v.document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw v.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return De(t.childNodes[0])},fromTag:function(e,n){var t=(n||v.document).createElement(e);return De(t)},fromText:function(e,n){var t=(n||v.document).createTextNode(e);return De(t)},fromDom:De,fromPoint:function(e,n,t){var r=e.dom();return y.from(r.elementFromPoint(n,t)).map(De)}},Le=(v.Node.ATTRIBUTE_NODE,v.Node.CDATA_SECTION_NODE,v.Node.COMMENT_NODE,v.Node.DOCUMENT_NODE,v.Node.DOCUMENT_TYPE_NODE,v.Node.DOCUMENT_FRAGMENT_NODE,v.Node.ELEMENT_NODE),ke=(v.Node.TEXT_NODE,v.Node.PROCESSING_INSTRUCTION_NODE,v.Node.ENTITY_REFERENCE_NODE,v.Node.ENTITY_NODE,v.Node.NOTATION_NODE,Le),Pe=(Ue.detect().browser.isIE(),"undefined"!=typeof v.window?v.window:Function("return this;")(),function(e,n){return t=function(e){return function(e,n){var t=e.dom();if(t.nodeType!==ke)return!1;var r=t;if(r.matches!==undefined)return r.matches(n);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(n);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(n);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")}(e,n)},F(e.dom().childNodes,function(e){return t(je.fromDom(e))}).map(je.fromDom);var t}),Me=0,Be=function(e){return Pe(je.fromDom(e),"img")},Fe=function(e,n){return e.dom.is(n,"figure")},ze=function(e,n){e.notificationManager.open({text:n,type:"error"})},He=function(e){var n=e.selection.getNode();return Fe(e,n)?Be(n):y.some(je.fromDom(n))},qe=function(e,n){var t=n.src;return 0===t.indexOf("data:")||0===t.indexOf("blob:")||new L(t).host===e.documentBaseURI.host},$e=function(e,n){return-1!==a.inArray(e.getParam("imagetools_cors_hosts",[],"string[]"),new L(n.src).host)},Xe=function(e,n){var t,r,o,i,u=n.src;return $e(e,n)?oe(n.src,null,(r=e,o=n,-1!==a.inArray(r.getParam("imagetools_credentials_hosts",[],"string[]"),new L(o.src).host))):qe(e,n)?O(n):(u=e.getParam("imagetools_proxy"),u+=(-1===u.indexOf("?")?"?":"&")+"url="+encodeURIComponent(n.src),t=(i=e).getParam("api_key",i.getParam("imagetools_api_key","","string"),"string"),oe(u,t,!1))},We=function(e,n){return(t=e,y.from(t.getParam("imagetools_fetch_image",null,"function"))).fold(function(){return Xe(e,n)},function(e){return e(n)});var t},Ge=function(e,n){var t;return(t=e.editorUpload.blobCache.getByUri(n.src))?j.resolve(t.blob()):We(e,n)},Ye=function(e){D.clearTimeout(e.get())},Ve=function(a,c,s,f,l,d){return c.toBlob().then(function(e){var n,t,r,o,i,u;return r=a.editorUpload.blobCache,n=l.src,a.getParam("images_reuse_filename",!1,"boolean")&&(t=(o=r.getByUri(n))?(n=o.uri(),o.name()):(i=a,(u=n.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?i.dom.encode(u[1]):null)),o=r.create({id:"imagetools"+Me++,blob:e,base64:c.toBase64(),uri:n,name:t}),r.add(o),a.undoManager.transact(function(){a.$(l).on("load",function r(){var e,n,t;a.$(l).off("load",r),a.nodeChanged(),s?a.editorUpload.uploadImagesAuto():(Ye(f),e=a,n=f,t=D.setEditorTimeout(e,function(){e.editorUpload.uploadImagesAuto()},e.getParam("images_upload_timeout",3e4,"number")),n.set(t))}),d&&a.$(l).attr({width:d.w,height:d.h}),a.$(l).attr({src:o.blobUri()}).removeAttr("data-mce-src")}),o})},Je=function(t,r,e,o){return function(){return He(t).fold(function(){ze(t,"Could not find selected image")},function(n){return t._scanForImages().then(function(){return Ge(t,n.dom())}).then(U).then(e).then(function(e){return Ve(t,e,!1,r,n.dom(),o)},function(e){ze(t,e)})})}},Ke=function(n,t,r){return function(){var e=He(n).fold(function(){return null},function(e){var n=P.getImageSize(e.dom());return n?{w:n.h,h:n.w}:null});return Je(n,t,function(e){return A(e,r)},e)()}},Qe=function(e,n,t){return function(){return Je(e,n,function(e){return C(e,t)})()}},Ze=function(t,e){var n=function(e){return n=e,t.dom.is(n,"img:not([data-mce-object],[data-mce-placeholder])")&&(qe(t,e)||$e(t,e)||t.settings.imagetools_proxy);var n};return Fe(t,e)?Be(e).map(function(e){return n(e.dom())?y.some(e.dom()):y.none()}):n(e)?y.some(e):y.none()},en=Ye,nn=Ge,tn=He,rn=function(t,r,o,i,u){return new j(function(e){var n;(n=u,T(n)).then(function(e){var n=P.getNaturalImageSize(e);return i.w===n.w&&i.h===n.h||P.getImageSize(o)&&P.setImageSize(o,n),v.URL.revokeObjectURL(e.src),u}).then(U).then(function(e){return Ve(t,e,!0,r,o)},function(){})})},on=p("save-state"),un=p("disable"),an=p("enable"),cn=function(i,u){return function(){var r=tn(i),o=r.map(function(e){return P.getNaturalImageSize(e.dom())});tn(i).each(function(n){Ze(i,n.dom()).each(function(e){nn(i,n.dom()).then(function(e){var n,t={blob:n=e,url:v.URL.createObjectURL(n)};i.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:t}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(e){var t=e.getData().imagetools.blob;r.each(function(n){o.each(function(e){rn(i,u,n.dom(),e,t)})}),e.close()},onCancel:function(){},onAction:function(e,n){switch(n.name){case on():n.value?e.enable("save"):e.disable("save");break;case un():e.disable("save"),e.disable("cancel");break;case an():e.enable("cancel")}}})})})})}},sn=function(t,e){a.each({mceImageRotateLeft:Ke(t,e,-90),mceImageRotateRight:Ke(t,e,90),mceImageFlipVertical:Qe(t,e,"v"),mceImageFlipHorizontal:Qe(t,e,"h"),mceEditImage:cn(t,e)},function(e,n){t.addCommand(n,e)})},fn=function(t,r,o){t.on("NodeChange",function(e){var n=o.get();n&&n.src!==e.element.src&&(en(r),t.editorUpload.uploadImagesAuto(),o.set(null)),Ze(t,e.element).each(o.set)})},ln=function(r){var n=function(e){return function(){return r.execCommand(e)}};r.ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:n("mceImageRotateLeft")}),r.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:n("mceImageRotateRight")}),r.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:n("mceImageFlipVertical")}),r.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:n("mceImageFlipHorizontal")}),r.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:n("mceEditImage"),onSetup:function(t){var e=function(){tn(r).each(function(e){var n=Ze(r,e.dom()).isNone();t.setDisabled(n)})};return r.on("NodeChange",e),function(){r.off("NodeChange",e)}}}),r.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image-options",onAction:n("mceImage")}),r.ui.registry.addContextMenu("imagetools",{update:function(e){return Ze(r,e).fold(function(){return[]},function(e){return[{text:"Edit image",icon:"edit-image",onAction:n("mceEditImage")}]})}})},dn=function(n){var e;n.ui.registry.addContextToolbar("imagetools",{items:(e=n,e.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions")),predicate:function(e){return Ze(n,e).isSome()},position:"node",scope:"node"})};!function vn(){i.add("imagetools",function(e){var n=o(0),t=o(null);sn(e,n),ln(e),dn(e),fn(e,n,t)})}()}(window);