/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.5.1 (2020-10-01)
 */

!function(){"use strict";var e,n,t,r,o,i,u,a=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=function(){},y=function(e){return function(){return e}},c=function(n){return function(e){return!n(e)}},f=y(!1),d=y(!0),l=function(){return m},m=(e=function(e){return e.isNone()},{fold:function(e,n){return e()},is:f,isSome:f,isNone:d,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:y(null),getOrUndefined:y(undefined),or:t,orThunk:n,map:l,each:s,bind:l,exists:f,forall:d,filter:l,equals:e,equals_:e,toArray:function(){return[]},toString:y("none()")}),p=function(t){var e=y(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:d,isNone:f,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return p(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:m},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(f,function(e){return n(t,e)})}};return o},g={some:p,none:l,from:function(e){return null===e||e===undefined?m:p(e)}},v=function(r){return function(e){return t=typeof(n=e),(null===n?"null":"object"==t&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":t)===r;var n,t}},h=function(n){return function(e){return typeof e===n}},S=v("string"),b=v("array"),C=h("boolean"),O=h("function"),N=h("number"),L=Array.prototype.slice,T=Array.prototype.push,D=function(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o];r[o]=n(i,o)}return r},k=function(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t)}},w=function(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r];n(i,r)&&t.push(i)}return t},x=function(e,n,t){return k(e,function(e){t=n(t,e)}),t},A=function(e,n,t){for(var r=0,o=e.length;r<o;r++){var i=e[r];if(n(i,r))return g.some(i);if(t(i,r))break}return g.none()},E=function(e,n){return A(e,n,f)},P=function(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!b(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e);T.apply(n,e[t])}return n}(D(e,n))},B=function(e){var n=L.call(e,0);return n.reverse(),n},I=function(e){return 0===e.length?g.none():g.some(e[0])},R=function(e){return 0===e.length?g.none():g.some(e[e.length-1])},M=function(){return(M=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},U=function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};var r=function(e){return Number(n.replace(t,"$"+e))};return F(r(1),r(2))},_=function(){return F(0,0)},F=function(e,n){return{major:e,minor:n}},H={nu:F,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?_():U(e,t)},unknown:_},$=function(e,n){var t=String(n).toLowerCase();return E(e,function(e){return e.search(t)})},j=function(e,t){return $(e,t).map(function(e){var n=H.detect(e.versionRegexes,t);return{current:e.name,version:n}})},q=function(e,t){return $(e,t).map(function(e){var n=H.detect(e.versionRegexes,t);return{current:e.name,version:n}})},K=function(e,n){return-1!==e.indexOf(n)},V=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,W=function(n){return function(e){return K(e,n)}},Q=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return K(e,"edge/")&&K(e,"chrome")&&K(e,"safari")&&K(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,V],search:function(e){return K(e,"chrome")&&!K(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return K(e,"msie")||K(e,"trident")}},{name:"Opera",versionRegexes:[V,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:W("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:W("firefox")},{name:"Safari",versionRegexes:[V,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(K(e,"safari")||K(e,"mobile/"))&&K(e,"applewebkit")}}],X=[{name:"Windows",search:W("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return K(e,"iphone")||K(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:W("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:W("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:W("linux"),versionRegexes:[]},{name:"Solaris",search:W("sunos"),versionRegexes:[]},{name:"FreeBSD",search:W("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:W("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],z={browsers:y(Q),oses:y(X)},Y="Edge",G="Chrome",J="Firefox",Z=function(e){var n=e.current,t=e.version,r=function(e){return function(){return n===e}};return{current:n,version:t,isEdge:r(Y),isChrome:r(G),isIE:r("IE"),isOpera:r("Opera"),isFirefox:r(J),isSafari:r("Safari")}},ee={unknown:function(){return Z({current:undefined,version:H.unknown()})},nu:Z,edge:y(Y),chrome:y(G),ie:y("IE"),opera:y("Opera"),firefox:y(J),safari:y("Safari")},ne="Windows",te="Android",re="Solaris",oe="FreeBSD",ie="ChromeOS",ue=function(e){var n=e.current,t=e.version,r=function(e){return function(){return n===e}};return{current:n,version:t,isWindows:r(ne),isiOS:r("iOS"),isAndroid:r(te),isOSX:r("OSX"),isLinux:r("Linux"),isSolaris:r(re),isFreeBSD:r(oe),isChromeOS:r(ie)}},ae={unknown:function(){return ue({current:undefined,version:H.unknown()})},nu:ue,windows:y(ne),ios:y("iOS"),android:y(te),linux:y("Linux"),osx:y("OSX"),solaris:y(re),freebsd:y(oe),chromeos:y(ie)},se=function(e,n){var t,r,o,i,u,a,s,c,f,d,l,m,p=z.browsers(),g=z.oses(),v=j(p,e).fold(ee.unknown,ee.nu),h=q(g,e).fold(ae.unknown,ae.nu);return{browser:v,os:h,deviceType:(r=v,o=e,i=n,u=(t=h).isiOS()&&!0===/ipad/i.test(o),a=t.isiOS()&&!u,s=t.isiOS()||t.isAndroid(),c=s||i("(pointer:coarse)"),f=u||!a&&s&&i("(min-device-width:768px)"),d=a||s&&!f,l=r.isSafari()&&t.isiOS()&&!1===/safari/i.test(o),m=!d&&!f&&!l,{isiPad:y(u),isiPhone:y(a),isTablet:y(f),isPhone:y(d),isTouch:y(c),isAndroid:t.isAndroid,isiOS:t.isiOS,isWebView:y(l),isDesktop:y(m)})}},ce=function(e){return window.matchMedia(e).matches},fe=(i=!(r=function(){return se(navigator.userAgent,ce)}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i||(i=!0,o=r.apply(null,e)),o}),de=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:e}},le={fromHtml:function(e,n){var t=(n||document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return de(t.childNodes[0])},fromTag:function(e,n){var t=(n||document).createElement(e);return de(t)},fromText:function(e,n){var t=(n||document).createTextNode(e);return de(t)},fromDom:de,fromPoint:function(e,n,t){return g.from(e.dom.elementFromPoint(n,t)).map(de)}},me=function(e,n){return e.dom===n.dom},pe=function(e,n){return t=e.dom,r=n.dom,o=t,i=r,u=Node.DOCUMENT_POSITION_CONTAINED_BY,0!=(o.compareDocumentPosition(i)&u);var t,r,o,i,u},ge=function(e,n){return fe().browser.isIE()?pe(e,n):(t=n,r=e.dom,o=t.dom,r!==o&&r.contains(o));var t,r,o},ve=function(e,n){var t=e.dom;if(1!==t.nodeType)return!1;var r=t;if(r.matches!==undefined)return r.matches(n);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(n);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(n);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")},he=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),ye=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),Se=tinymce.util.Tools.resolve("tinymce.util.VK"),be=Object.keys,Ce=function(e,n){for(var t=be(e),r=0,o=t.length;r<o;r++){var i=t[r];n(e[i],i)}},Oe=function(e,n){var t,r,o,i,u={};return t=n,i=u,r=function(e,n){i[n]=e},o=s,Ce(e,function(e,n){(t(e,n)?r:o)(e,n)}),u},Ne=("undefined"!=typeof window||Function("return this;")(),function(e){return e.dom.nodeName.toLowerCase()}),Le=(u=1,function(e){return e.dom.nodeType===u}),Te=function(e,n){var t=e.dom;Ce(n,function(e,n){!function(e,n,t){if(!(S(t)||C(t)||N(t)))throw console.error("Invalid call to Attribute.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(n,t+"")}(t,n,e)})},De=function(e){return x(e.dom.attributes,function(e,n){return e[n.name]=n.value,e},{})},ke=function(e){return g.from(e.dom.parentNode).map(le.fromDom)},we=function(e){return D(e.dom.childNodes,le.fromDom)},xe=function(e,n){var t=e.dom.childNodes;return g.from(t[n]).map(le.fromDom)},Ae=function(e){return xe(e,0)},Ee=function(e){return xe(e,e.dom.childNodes.length-1)},Pe=function(n,t){ke(n).each(function(e){e.dom.insertBefore(t.dom,n.dom)})},Be=function(e,n){e.dom.appendChild(n.dom)},Ie=function(n,e){k(e,function(e){Be(n,e)})},Re=function(e){var n=e.dom;null!==n.parentNode&&n.parentNode.removeChild(n)},Me=function(e){return n=e,t=!0,le.fromDom(n.dom.cloneNode(t));var n,t},Ue=function(e,n){var t,r,o,i,u=(t=e,r=n,o=le.fromTag(r),i=De(t),Te(o,i),o);Pe(e,u);var a=we(e);return Ie(u,a),Re(e),u},_e=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Fe=tinymce.util.Tools.resolve("tinymce.util.Tools"),He=function(n){return function(e){return e&&e.nodeName.toLowerCase()===n}},$e=function(n){return function(e){return e&&n.test(e.nodeName)}},je=function(e){return e&&3===e.nodeType},qe=$e(/^(OL|UL|DL)$/),Ke=$e(/^(OL|UL)$/),Ve=He("ol"),We=$e(/^(LI|DT|DD)$/),Qe=$e(/^(DT|DD)$/),Xe=$e(/^(TH|TD)$/),ze=He("br"),Ye=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},Ge=function(e,n){return e&&e.nodeName in n},Je=function(e,n,t){var r=e.isEmpty(n);return!(t&&0<e.select("span[data-mce-type=bookmark]",n).length)&&r},Ze=function(e,n){return e.isChildOf(n,e.getRoot())},en=function(e,n){var t,r,o,i,u=e.dom,a=e.schema.getBlockElements(),s=u.createFragment(),c=!1===(t=e.getParam("forced_root_block","p"))?"":!0===t?"p":t;if(c&&((o=u.create(c)).tagName===c.toUpperCase()&&u.setAttribs(o,e.getParam("forced_root_block_attrs",{})),Ge(n.firstChild,a)||s.appendChild(o)),n)for(;r=n.firstChild;){var f=r.nodeName;i||"SPAN"===f&&"bookmark"===r.getAttribute("data-mce-type")||(i=!0),Ge(r,a)?(s.appendChild(r),o=null):c?(o||(o=u.create(c),s.appendChild(o)),o.appendChild(r)):s.appendChild(r)}return c?i||o.appendChild(u.create("br",{"data-mce-bogus":"1"})):s.appendChild(u.create("br")),s},nn=_e.DOM,tn=function(n,t){ve(t,"dd")?Ue(t,"dt"):ve(t,"dt")&&ke(t).each(function(e){return function(e,n,t){var r=nn.select('span[data-mce-type="bookmark"]',n),o=en(e,t),i=nn.createRng();i.setStartAfter(t),i.setEndAfter(n);for(var u,a=i.extractContents(),s=a.firstChild;s;s=s.firstChild)if("LI"===s.nodeName&&e.dom.isEmpty(s)){nn.remove(s);break}e.dom.isEmpty(a)||nn.insertAfter(a,n),nn.insertAfter(o,n),Je(e.dom,t.parentNode)&&(u=t.parentNode,Fe.each(r,function(e){u.parentNode.insertBefore(e,t.parentNode)}),nn.remove(u)),nn.remove(t),Je(e.dom,n)&&nn.remove(n)}(n,e.dom,t.dom)})},rn=function(e){ve(e,"dt")&&Ue(e,"dd")},on=function(e,n){if(je(e))return{container:e,offset:n};var t=he.getNode(e,n);return je(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&je(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&je(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}},un=function(e){var n=e.cloneRange(),t=on(e.startContainer,e.startOffset);n.setStart(t.container,t.offset);var r=on(e.endContainer,e.endOffset);return n.setEnd(r.container,r.offset),n},an=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),sn=function(e,n){var t=n||e.selection.getStart(!0);return e.dom.getParent(t,"OL,UL,DL",dn(e,t))},cn=function(e){var n,t,r,o=sn(e),i=e.selection.getSelectedBlocks();return r=i,(t=o)&&1===r.length&&r[0]===t?(n=o,Fe.grep(n.querySelectorAll("ol,ul,dl"),function(e){return qe(e)})):Fe.grep(i,function(e){return qe(e)&&o!==e})},fn=function(e){var t,n,r,o=e.selection.getSelectedBlocks();return Fe.grep((t=e,n=o,r=Fe.map(n,function(e){var n=t.dom.getParent(e,"li,dd,dt",dn(t,e));return n||e}),an.unique(r)),function(e){return We(e)})},dn=function(e,n){var t=e.dom.getParents(n,"TD,TH");return 0<t.length?t[0]:e.getBody()},ln=function(e,n){var t=e.dom.getParents(n,"ol,ul",dn(e,n));return R(t)},mn=function(e){var n,t,r,o=(t=ln(n=e,n.selection.getStart()),r=w(n.selection.getSelectedBlocks(),Ke),t.toArray().concat(r));return pn(e,o)},pn=function(n,e){var t=D(e,function(e){return ln(n,e).getOr(e)});return an.unique(t)},gn=function(e,n,t){return e.isSome()&&n.isSome()?g.some(t(e.getOrDie(),n.getOrDie())):g.none()},vn=function(e,n,t){return e.fire("ListMutation",{action:n,element:t})},hn=function(e,n,t){if(!S(t))throw console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);var r;(r=e).style!==undefined&&O(r.style.getPropertyValue)&&e.style.setProperty(n,t)},yn=function(e,n){Be(e.item,n.list)},Sn=function(e,n,t){for(var r,o,i,u=[],a=0;a<t;a++)u.push((r=e,o=n.listType,i={list:le.fromTag(o,r),item:le.fromTag("li",r)},Be(i.list,i.item),i));return u},bn=function(e,n){for(var t,r,o,i,u=0;u<e.length-1;u++)t=e[u].item,r="list-style-type",o="none",i=t.dom,hn(i,r,o);R(e).each(function(e){Te(e.list,n.listAttributes),Te(e.item,n.itemAttributes),Ie(e.item,n.content)})},Cn=function(f,e,d){var n=e.slice(0,d.depth);return R(n).each(function(e){var n,t,r,o,i,u,a,s,c=(n=f,t=d.itemAttributes,r=d.content,o=le.fromTag("li",n),Te(o,t),Ie(o,r),o);u=c,Be((i=e).list,u),i.item=u,s=d,Ne((a=e).list)!==s.listType&&(a.list=Ue(a.list,s.listType)),Te(a.list,s.listAttributes)}),n},On=function(e,n,t){var r,o=Sn(e,t,t.depth-n.length);return function(e){for(var n=1;n<e.length;n++)yn(e[n-1],e[n])}(o),bn(o,t),r=o,gn(R(n),I(r),yn),n.concat(o)},Nn=function(e){return ve(e,"OL,UL")},Ln=function(e){return Ae(e).map(Nn).getOr(!1)},Tn=function(e){return 0<e.depth},Dn=function(e){return e.isSelected},kn=function(e){var n=we(e),t=Ee(e).map(Nn).getOr(!1)?n.slice(0,-1):n;return D(t,Me)},wn=function(a){return k(a,function(r,e){var n,t,o,i,u;o=(n=a)[t=e].depth,i=function(e){return e.depth===o&&!e.dirty},u=function(e){return e.depth<o},A(B(n.slice(0,t)),i,u).orThunk(function(){return A(n.slice(t+1),i,u)}).fold(function(){var e;r.dirty&&((e=r).listAttributes=Oe(e.listAttributes,function(e,n){return"start"!==n}))},function(e){return t=e,(n=r).listType=t.listType,void(n.listAttributes=M({},t.listAttributes));var n,t})}),a},xn=function(i,u,a,s){return Ae(s).filter(Nn).fold(function(){u.each(function(e){me(e.start,s)&&a.set(!0)});var n,t,r,e=(n=s,t=i,r=a.get(),ke(n).filter(Le).map(function(e){return{depth:t,dirty:!1,isSelected:r,content:kn(n),itemAttributes:De(n),listAttributes:De(e),listType:Ne(e)}}));u.each(function(e){me(e.end,s)&&a.set(!1)});var o=Ee(s).filter(Nn).map(function(e){return An(i,u,a,e)}).getOr([]);return e.toArray().concat(o)},function(e){return An(i,u,a,e)})},An=function(n,t,r,e){return P(we(e),function(e){return(Nn(e)?An:xn)(n+1,t,r,e)})},En=function(e,n){var t,r=(t=!1,{get:function(){return t},set:function(e){t=e}});return D(e,function(e){return{sourceList:e,entries:An(0,n,r,e)}})},Pn=function(i,e){var n=wn(e);return D(n,function(e){var n,t,r,o=(n=e.content,r=(t||document).createDocumentFragment(),k(n,function(e){r.appendChild(e.dom)}),le.fromDom(r));return le.fromDom(en(i,o.dom))})},Bn=function(e,n){var t,r,o=wn(n);return t=e.contentDocument,r=x(o,function(e,n){return(n.depth>e.length?On:Cn)(t,e,n)},[]),I(r).map(function(e){return e.list}).toArray()},In=function(a,e,s){var n,t=En(e,(n=D(fn(a),le.fromDom),gn(E(n,c(Ln)),E(B(n),c(Ln)),function(e,n){return{start:e,end:n}})));k(t,function(e){var n,t;n=e.entries,t=s,k(w(n,Dn),function(e){return function(e,n){switch(e){case"Indent":n.depth++;break;case"Outdent":n.depth--;break;case"Flatten":n.depth=0}n.dirty=!0}(t,e),0});var r,o,i,u=(r=a,o=e.entries,P(function(e,n){if(0===e.length)return[];for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var a=e[i],s=n(a);s!==t&&(r.push(o),o=[]),t=s,o.push(a)}return 0!==o.length&&r.push(o),r}(o,Tn),function(e){return(I(e).map(Tn).getOr(!1)?Bn:Pn)(r,e)}));k(u,function(e){vn(a,"Indent"===s?"IndentList":"OutdentList",e.dom)}),i=e.sourceList,k(u,function(e){Pe(i,e)}),Re(e.sourceList)})},Rn=function(e,n){var t,r,o=D(mn(e),le.fromDom),i=D(w(fn(e),Qe),le.fromDom),u=!1;return(o.length||i.length)&&(t=e.selection.getBookmark(),In(e,o,n),r=e,k(i,"Indent"===n?rn:function(e){return tn(r,e),0}),e.selection.moveToBookmark(t),e.selection.setRng(un(e.selection.getRng())),e.nodeChanged(),u=!0),u},Mn=function(e){return Rn(e,"Indent")},Un=function(e){return Rn(e,"Outdent")},_n=function(e){return Rn(e,"Flatten")},Fn=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),Hn=_e.DOM,$n=function(o){var i={},e=function(e){var n,t=o[e?"startContainer":"endContainer"],r=o[e?"startOffset":"endOffset"];1===t.nodeType&&(n=Hn.create("span",{"data-mce-type":"bookmark"}),t.hasChildNodes()?(r=Math.min(r,t.childNodes.length-1),e?t.insertBefore(n,t.childNodes[r]):Hn.insertAfter(n,t.childNodes[r])):t.appendChild(n),t=n,r=0),i[e?"startContainer":"endContainer"]=t,i[e?"startOffset":"endOffset"]=r};return e(!0),o.collapsed||e(),i},jn=function(o){function e(e){var n,t=n=o[e?"startContainer":"endContainer"],r=o[e?"startOffset":"endOffset"];t&&(1===t.nodeType&&(r=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t;1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(t),t=t.parentNode,Hn.remove(n),!t.hasChildNodes()&&Hn.isBlock(t)&&t.appendChild(Hn.create("br"))),o[e?"startContainer":"endContainer"]=t,o[e?"startOffset":"endOffset"]=r)}e(!0),e();var n=Hn.createRng();return n.setStart(o.startContainer,o.startOffset),o.endContainer&&n.setEnd(o.endContainer,o.endOffset),un(n)},qn=function(e){switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}},Kn=function(e){return/\btox\-/.test(e.className)},Vn=function(e,t,r){var n=function(e){var n=A(e.parents,qe,Xe).filter(function(e){return e.nodeName===t&&!Kn(e)}).isSome();r(n)},o=e.dom.getParents(e.selection.getNode());return n({parents:o}),e.on("NodeChange",n),function(){return e.off("NodeChange",n)}},Wn=function(t,e){Fe.each(e,function(e,n){t.setAttribute(n,e)})},Qn=function(e,n,t){var r,o,i,u,a,s,c;r=e,o=n,u=(i=t)["list-style-type"]?i["list-style-type"]:null,r.setStyle(o,"list-style-type",u),a=e,Wn(s=n,(c=t)["list-attributes"]),Fe.each(a.select("li",s),function(e){Wn(e,c["list-item-attributes"])})},Xn=function(e,n,t,r){var o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"];for(1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&ze(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(Ye(e,o))return o;if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o;o=o.parentNode}return o},zn=function(f,d,l){void 0===l&&(l={});var e,n=f.selection.getRng(),m="LI",t=dn(f,f.selection.getStart(!0)),p=f.dom;"false"!==p.getContentEditable(f.selection.getNode())&&("DL"===(d=d.toUpperCase())&&(m="DT"),e=$n(n),Fe.each(function(t,e,r){for(var o,i=[],u=t.dom,n=Xn(t,e,!0,r),a=Xn(t,e,!1,r),s=[],c=n;c&&(s.push(c),c!==a);c=c.nextSibling);return Fe.each(s,function(e){if(Ye(t,e))return i.push(e),void(o=null);if(u.isBlock(e)||ze(e))return ze(e)&&u.remove(e),void(o=null);var n=e.nextSibling;Fn.isBookmarkNode(e)&&(Ye(t,n)||!n&&e.parentNode===r)?o=null:(o||(o=u.create("p"),e.parentNode.insertBefore(o,e),i.push(o)),o.appendChild(e))}),i}(f,n,t),function(e){var n,t,r,o,i,u,a,s,c=e.previousSibling;c&&qe(c)&&c.nodeName===d&&(t=c,r=l,o=p.getStyle(t,"list-style-type"),i=r?r["list-style-type"]:"",o===(i=null===i?"":i))?(n=c,e=p.rename(e,m),c.appendChild(e)):(n=p.create(d),e.parentNode.insertBefore(n,e),n.appendChild(e),e=p.rename(e,m)),u=p,a=e,s=["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"],Fe.each(s,function(e){var n;return u.setStyle(a,((n={})[e]="",n))}),Qn(p,n,l),Gn(f.dom,n)}),f.selection.setRng(jn(e)))},Yn=function(e,n,t){return s=t,(a=n)&&s&&qe(a)&&a.nodeName===s.nodeName&&(i=n,u=t,(o=e).getStyle(i,"list-style-type",!0)===o.getStyle(u,"list-style-type",!0))&&(r=t,n.className===r.className);var r,o,i,u,a,s},Gn=function(e,n){var t,r=n.nextSibling;if(Yn(e,n,r)){for(;t=r.firstChild;)n.appendChild(t);e.remove(r)}if(r=n.previousSibling,Yn(e,n,r)){for(;t=r.lastChild;)n.insertBefore(t,n.firstChild);e.remove(r)}},Jn=function(u,e,n,a,s){var t;e.nodeName!==a||Zn(s)?(t=$n(u.selection.getRng(!0)),Fe.each([e].concat(n),function(e){var n,t,r,o,i;n=u,r=a,o=s,(t=e).nodeName!==r?(i=n.dom.rename(t,r),Qn(n.dom,i,o),vn(n,qn(r),i)):(Qn(n.dom,t,o),vn(n,qn(r),t))}),u.selection.setRng(jn(t))):_n(u)},Zn=function(e){return"list-style-type"in e},et=function(e,n,t){var r,o,i,u,a,s,c=sn(e),f=cn(e);t=t||{},c&&0<f.length?Jn(e,c,f,n,t):(i=n,u=t,(o=c)!==(r=e).getBody()&&(o?o.nodeName!==i||Zn(u)||Kn(o)?(a=$n(r.selection.getRng(!0)),Qn(r.dom,o,u),s=r.dom.rename(o,i),Gn(r.dom,s),r.selection.setRng(jn(a)),vn(r,qn(i),s)):_n(r):(zn(r,i,u),vn(r,qn(i),o))))},nt=_e.DOM,tt=function(i,e){Fe.each(Fe.grep(i.select("ol,ul",e)),function(e){var n,t,r,o;n=i,"LI"===(o=(t=e).parentNode).nodeName&&o.firstChild===t&&((r=o.previousSibling)&&"LI"===r.nodeName?(r.appendChild(t),Je(n,o)&&nt.remove(o)):nt.setStyle(o,"listStyleType","none")),qe(o)&&(r=o.previousSibling)&&"LI"===r.nodeName&&r.appendChild(t)})},rt=function(e,n,t,r){var o=n.startContainer,i=n.startOffset;if(je(o)&&(t?i<o.data.length:0<i))return o;var u=e.schema.getNonEmptyElements();1===o.nodeType&&(o=he.getNode(o,i));var a,s,c=new ye(o,r);for(t&&(a=e.dom,ze(s=o)&&a.isBlock(s.nextSibling)&&!ze(s.previousSibling)&&c.next());o=c[t?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o;if(u[o.nodeName])return o;if(je(o)&&0<o.data.length)return o}},ot=function(e,n){var t=n.childNodes;return 1===t.length&&!qe(t[0])&&e.isBlock(t[0])},it=function(e,n,t){var r,o,i,u=ot(e,t)?t.firstChild:t;if(ot(o=e,i=n)&&o.remove(i.firstChild,!0),!Je(e,n,!0))for(;r=n.firstChild;)u.appendChild(r)},ut=function(n,e,t){var r,o,i,u=e.parentNode;Ze(n,e)&&Ze(n,t)&&(qe(t.lastChild)&&(r=t.lastChild),u===t.lastChild&&ze(u.previousSibling)&&n.remove(u.previousSibling),(o=t.lastChild)&&ze(o)&&e.hasChildNodes()&&n.remove(o),Je(n,t,!0)&&n.$(t).empty(),it(n,e,t),r&&t.appendChild(r),i=ge(le.fromDom(t),le.fromDom(e))?n.getParents(e,qe,t):[],n.remove(e),k(i,function(e){Je(n,e)&&e!==n.getRoot()&&n.remove(e)}))},at=function(e,n,t,r){var o,i,u,a,s=e.dom;s.isEmpty(r)?(u=t,a=r,(i=e).dom.$(a).empty(),ut(i.dom,u,a),i.selection.setCursorLocation(a)):(o=$n(n),ut(s,t,r),e.selection.setRng(jn(o)))},st=function(n,t){var e=n.dom,r=n.selection,o=r.getStart(),i=dn(n,o),u=e.getParent(r.getStart(),"LI",i);if(u){var a=u.parentNode;if(a===n.getBody()&&Je(e,a))return!0;var s=un(r.getRng()),c=e.getParent(rt(n,s,t,i),"LI",i);if(c&&c!==u)return n.undoManager.transact(function(){var e;t?at(n,s,c,u):(e=u).parentNode.firstChild===e?Un(n):function(e,n,t,r){var o=$n(n);ut(e.dom,t,r);var i=jn(o);e.selection.setRng(i)}(n,s,u,c)}),!0;if(!c&&!t&&0===s.startOffset&&0===s.endOffset)return n.undoManager.transact(function(){_n(n)}),!0}return!1},ct=function(o,i){var u=o.dom,e=o.selection.getStart(),a=dn(o,e),s=u.getParent(e,u.isBlock,a);if(s&&u.isEmpty(s)){var n=un(o.selection.getRng()),c=u.getParent(rt(o,n,i,a),"LI",a);if(c)return o.undoManager.transact(function(){var e,n,t,r;n=s,t=a,r=(e=u).getParent(n.parentNode,e.isBlock,t),e.remove(n),r&&e.isEmpty(r)&&e.remove(r),Gn(u,c.parentNode),o.selection.select(c,!0),o.selection.collapse(i)}),!0}return!1},ft=function(e,n){return e.selection.isCollapsed()?st(i=e,u=n)||ct(i,u):(r=(t=e).selection.getStart(),o=dn(t,r),!!(t.dom.getParent(r,"LI,DT,DD",o)||0<fn(t).length)&&(t.undoManager.transact(function(){t.execCommand("Delete"),tt(t.dom,t.getBody())}),!0));var t,r,o,i,u},dt=function(t){var r=t.dom,e=sn(t);Ve(e)&&t.windowManager.open({title:"List Properties",body:{type:"panel",items:[{type:"input",name:"start",label:"Start list at number",inputMode:"numeric"}]},initialData:{start:r.getAttrib(e,"start")||"1"},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(e){var n=e.getData();t.undoManager.transact(function(){r.setAttrib(sn(t),"start","1"===n.start?"":n.start)}),e.close()}})},lt=function(n,t){return function(){var e=n.dom.getParent(n.selection.getStart(),"UL,OL,DL");return e&&e.nodeName===t}},mt=function(e){var n,t;e.getParam("lists_indent_on_tab",!0)&&(n=e).on("keydown",function(e){e.keyCode!==Se.TAB||Se.metaKeyPressed(e)||n.undoManager.transact(function(){(e.shiftKey?Un:Mn)(n)&&e.preventDefault()})}),(t=e).on("keydown",function(e){e.keyCode===Se.BACKSPACE?ft(t,!1)&&e.preventDefault():e.keyCode===Se.DELETE&&ft(t,!0)&&e.preventDefault()})};a.add("lists",function(e){var t,n,r,o,i,u;return!1===e.hasPlugin("rtc",!0)&&(mt(e),(t=e).on("BeforeExecCommand",function(e){var n=e.command.toLowerCase();"indent"===n?Mn(t):"outdent"===n&&Un(t)}),t.addCommand("InsertUnorderedList",function(e,n){et(t,"UL",n)}),t.addCommand("InsertOrderedList",function(e,n){et(t,"OL",n)}),t.addCommand("InsertDefinitionList",function(e,n){et(t,"DL",n)}),t.addCommand("RemoveList",function(){_n(t)}),t.addCommand("mceListProps",function(){dt(t)}),t.addQueryStateHandler("InsertUnorderedList",lt(t,"UL")),t.addQueryStateHandler("InsertOrderedList",lt(t,"OL")),t.addQueryStateHandler("InsertDefinitionList",lt(t,"DL"))),r=function(e){return function(){return n.execCommand(e)}},(n=e).hasPlugin("advlist")||(n.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:r("InsertOrderedList"),onSetup:function(e){return Vn(n,"OL",e.setActive)}}),n.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:r("InsertUnorderedList"),onSetup:function(e){return Vn(n,"UL",e.setActive)}})),i={text:"List properties...",icon:"ordered-list",onAction:function(){return dt(o)},onSetup:function(n){return Vn(o,"OL",function(e){return n.setDisabled(!e)})}},(o=e).ui.registry.addMenuItem("listprops",i),o.ui.registry.addContextMenu("lists",{update:function(e){var n=sn(o,e);return Ve(n)?["listprops"]:[]}}),u=e,{backspaceDelete:function(e){ft(u,e)}}})}();