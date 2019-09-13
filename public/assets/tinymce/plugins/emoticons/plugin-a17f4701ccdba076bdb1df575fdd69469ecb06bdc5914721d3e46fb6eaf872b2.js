/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.15 (2019-09-02)
 */

!function(m){"use strict";var n,t,e,r,o,u,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(n){return function(){return n}},a=c(!1),l=c(!0),s=a,f=l,g=function(){return d},d=(r={fold:function(n,t){return n()},is:s,isSome:s,isNone:f,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:t,map:g,ap:g,each:function(){},bind:g,flatten:g,exists:s,forall:f,filter:g,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:c("none()")},Object.freeze&&Object.freeze(r),r),y=function(e){var n=function(){return e},t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:f,isNone:s,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return y(n(e))},ap:function(n){return n.fold(g,function(n){return y(n(e))})},each:function(n){n(e)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(e)?o:d},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(s,function(n){return t(e,n)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},p={some:y,none:g,from:function(n){return null===n||n===undefined?d:y(n)}},v=(o="function",function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"===t&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":t}(n)===o}),h=Array.prototype.slice,b=function(n,t){for(var e=0,r=n.length;e<r;e++){if(t(n[e],e,n))return p.some(e)}return p.none()},w=(v(Array.from)&&Array.from,function(n,t){return-1!==n.indexOf(t)}),O=function(n,t){return w(n.title.toLowerCase(),t)||(e=n.keywords,b(e,function(n){return w(n.toLowerCase(),t)}).isSome());var e},A=function(n,t,e){for(var r=[],o=t.toLowerCase(),i=e.fold(function(){return a},function(t){return function(n){return t<=n}}),u=0;u<n.length&&(0!==t.length&&!O(n[u],o)||(r.push({value:n[u]["char"],text:n[u].title,icon:n[u]["char"]}),!i(r.length)));u++);return r},j=function(n){var t=n,e=function(){return t};return{get:e,set:function(n){t=n},clone:function(){return j(e())}}},C=Object.prototype.hasOwnProperty,k=(u=function(n,t){return t},function(){for(var n=new Array(arguments.length),t=0;t<n.length;t++)n[t]=arguments[t];if(0===n.length)throw new Error("Can't merge zero objects");for(var e={},r=0;r<n.length;r++){var o=n[r];for(var i in o)C.call(o,i)&&(e[i]=u(e[i],o[i]))}return e}),T=Object.keys,_=Object.hasOwnProperty,P=function(n,t){for(var e=T(n),r=0,o=e.length;r<o;r++){var i=e[r];t(n[i],i,n)}},S=function(r,o){var i={};return P(r,function(n,t){var e=o(n,t,r);i[e.k]=e.v}),i},D=tinymce.util.Tools.resolve("tinymce.Resource"),x=tinymce.util.Tools.resolve("tinymce.util.Delay"),L=tinymce.util.Tools.resolve("tinymce.util.Promise"),N=function(n,t){return n.getParam("emoticons_database_url",t+"/js/emojis"+n.suffix+".js")},E=function(n){return n.getParam("emoticons_database_id","tinymce.plugins.emoticons","string")},F=function(n){return n.getParam("emoticons_append",{},"object")},q="All",z={symbols:"Symbols",people:"People",animals_and_nature:"Animals and Nature",food_and_drink:"Food and Drink",activity:"Activity",travel_and_places:"Travel and Places",objects:"Objects",flags:"Flags",user:"User Defined"},I=function(n,t){return e=n,r=t,_.call(e,r)?n[t]:t;var e,r},M=function(n){var r,t=F(n);return r=function(n){return k({keywords:[],category:"user"},n)},S(t,function(n,t,e){return{k:t,v:r(n,t,e)}})},U=function(r,o,n){var u=j(p.none()),c=j(p.none());r.on("init",function(){D.load(n,o).then(function(n){var t,o,i,e=M(r);t=k(n,e),o={},i=[],P(t,function(n,t){var e={title:t,keywords:n.keywords,"char":n["char"],category:I(z,n.category)},r=o[e.category]!==undefined?o[e.category]:[];o[e.category]=r.concat([e]),i.push(e)}),u.set(p.some(o)),c.set(p.some(i))},function(n){m.console.log("Failed to load emoticons: "+n),u.set(p.some({})),c.set(p.some([]))})});var e=function(){return c.get().getOr([])},i=function(){return u.get().isSome()&&c.get().isSome()};return{listCategories:function(){return[q].concat(T(u.get().getOr({})))},hasLoaded:i,waitForLoad:function(){return i()?L.resolve(!0):new L(function(n,t){var e=15,r=x.setInterval(function(){i()?(x.clearInterval(r),n(!0)):--e<0&&(m.console.log("Could not load emojis from url: "+o),x.clearInterval(r),t(!1))},100)})},listAll:e,listCategory:function(t){return t===q?e():u.get().bind(function(n){return p.from(n[t])}).getOr([])}}},R="pattern",B=function(o,u){var e,r,i,n={pattern:"",results:A(u.listAll(),"",p.some(300))},c=j(q),a=(e=function(n){var t,e,r,o,i;e=(t=n).getData(),r=c.get(),o=u.listCategory(r),i=A(o,e[R],r===q?p.some(300):p.none()),t.setData({results:i})},r=200,i=null,{cancel:function(){null!==i&&(m.clearTimeout(i),i=null)},throttle:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];null!==i&&m.clearTimeout(i),i=m.setTimeout(function(){e.apply(null,n),i=null},r)}}),t={label:"Search",type:"input",name:R},l={type:"collection",name:"results"},s=function(){return{title:"Emoticons",size:"normal",body:{type:"tabpanel",tabs:function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var i=n[o];r[o]=t(i,o,n)}return r}(u.listCategories(),function(n){return{title:n,name:n,items:[t,l]}})},initialData:n,onTabChange:function(n,t){c.set(t.newTabName),a.throttle(n)},onChange:a.throttle,onAction:function(n,t){var e,r;"results"===t.name&&(e=o,r=t.value,e.insertContent(r),n.close())},buttons:[{type:"cancel",text:"Close",primary:!0}]}},f=o.windowManager.open(s());f.focus(R),u.hasLoaded()||(f.block("Loading emoticons..."),u.waitForLoad().then(function(){f.redial(s()),a.throttle(f),f.focus(R),f.unblock()})["catch"](function(n){f.redial({title:"Emoticons",body:{type:"panel",items:[{type:"alertbanner",level:"error",icon:"warning",text:"<p>Could not load emoticons</p>"}]},buttons:[{type:"cancel",text:"Close",primary:!0}],initialData:{pattern:"",results:[]}}),f.focus(R),f.unblock()}))},G=function(n,t){var e=function(){return B(n,t)};n.ui.registry.addButton("emoticons",{tooltip:"Emoticons",icon:"emoji",onAction:e}),n.ui.registry.addMenuItem("emoticons",{text:"Emoticons...",icon:"emoji",onAction:e})};!function H(){i.add("emoticons",function(n,t){var r,o,e=N(n,t),i=E(n),u=U(n,e,i);G(n,u),o=u,(r=n).ui.registry.addAutocompleter("emoticons",{ch:":",columns:"auto",minChars:2,fetch:function(t,e){return o.waitForLoad().then(function(){var n=o.listAll();return A(n,t,p.some(e))})},onAction:function(n,t,e){r.selection.setRng(t),r.insertContent(e),n.hide()}})})}()}(window);