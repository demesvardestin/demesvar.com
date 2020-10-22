/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.5.1 (2020-10-01)
 */

!function(){"use strict";var t,e,n,r,o,a=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(r){return function(e){return n=typeof(t=e),(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n)===r;var t,n}},l=function(t){return function(e){return typeof e===t}},A=i("string"),s=i("object"),u=i("array"),m=function(e){return t===e},d=l("boolean"),g=l("number"),f=function(){},p=function(e){return function(){return e}},h=p(!1),b=p(!(t=null)),v=function(){return y},y=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:h,isSome:h,isNone:b,getOr:r=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:p(null),getOrUndefined:p(undefined),or:r,orThunk:n,map:v,each:f,bind:v,exists:h,forall:b,filter:v,equals:e,equals_:e,toArray:function(){return[]},toString:p("none()")}),D=function(n){var e=p(n),t=function(){return a},r=function(e){return e(n)},a={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:b,isNone:h,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return D(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?a:y},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(h,function(e){return t(n,e)})}};return a},S={some:D,none:v,from:function(e){return null===e||e===undefined?y:D(e)}},w=Array.prototype.push,x=function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!u(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);w.apply(t,e[n])}return t},T=("undefined"!=typeof window||Function("return this;")(),function(e,t,n){!function(e,t,n){if(!(A(n)||d(n)||g(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(e.dom,t,n)}),C=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:e}},U={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return C(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return C(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return C(n)},fromDom:C,fromPoint:function(e,t,n){return S.from(e.dom.elementFromPoint(t,n)).map(C)}},O=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),I=tinymce.util.Tools.resolve("tinymce.util.Promise"),N=tinymce.util.Tools.resolve("tinymce.util.XHR"),P=function(e){return e.getParam("image_dimensions",!0,"boolean")},_=function(e){return e.getParam("images_upload_url","","string")},L=function(e){return e.getParam("images_upload_handler",undefined,"function")},E=function(e,t){return Math.max(parseInt(e,10),parseInt(t,10))},M=function(e){return e=e&&e.replace(/px$/,"")},R=function(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e},z=function(e){if(e.margin){var t=String(e.margin).split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e},H=function(e){return"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder"))},k=O.DOM,j=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?M(e.style.marginLeft):""},B=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?M(e.style.marginTop):""},F=function(e){return e.style.borderWidth?M(e.style.borderWidth):""},G=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):""},W=function(e,t){return e.style[t]?e.style[t]:""},q=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},$=function(e,t,n){""===n?e.removeAttribute(t):e.setAttribute(t,n)},J=function(e){var t,n,r,a;q(e)?(a=(r=e).parentNode,k.insertAfter(r,a),k.remove(a)):(t=e,n=k.create("figure",{"class":"image"}),k.insertAfter(n,t),n.appendChild(t),n.appendChild(k.create("figcaption",{contentEditable:"true"},"Caption")),n.contentEditable="false")},X=function(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},V=function(e,r){return function(e,t,n){e.style[t]?(e.style[t]=R(n),X(e,r)):$(e,t,n)}},K=function(e,t){return e.style[t]?M(e.style[t]):G(e,t)},Z=function(e,t){var n=R(t);e.style.marginLeft=n,e.style.marginRight=n},Q=function(e,t){var n=R(t);e.style.marginTop=n,e.style.marginBottom=n},Y=function(e,t){var n=R(t);e.style.borderWidth=n},ee=function(e,t){e.style.borderStyle=t},te=function(e){return"FIGURE"===e.nodeName},ne=function(e){return 0===k.getAttrib(e,"alt").length&&"presentation"===k.getAttrib(e,"role")},re=function(){return{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}},ae=function(e,t){var n=document.createElement("img");return $(n,"style",t.style),!j(n)&&""===t.hspace||Z(n,t.hspace),!B(n)&&""===t.vspace||Q(n,t.vspace),!F(n)&&""===t.border||Y(n,t.border),!W(n,"borderStyle")&&""===t.borderStyle||ee(n,t.borderStyle),e(n.getAttribute("style"))},ie=function(e,t){return{src:G(t,"src"),alt:ne(n=t)?"":G(n,"alt"),title:G(t,"title"),width:K(t,"width"),height:K(t,"height"),"class":G(t,"class"),style:e(G(t,"style")),caption:q(t),hspace:j(t),vspace:B(t),border:F(t),borderStyle:W(t,"borderStyle"),isDecorative:ne(t)};var n},oe=function(e,t,n,r,a){n[r]!==t[r]&&a(e,r,n[r])},le=function(e,t,n){var r,a;n?(k.setAttrib(e,"role","presentation"),r=U.fromDom(e),T(r,"alt","")):(m(t)?(r=U.fromDom(e),a="alt",r.dom.removeAttribute(a)):(r=U.fromDom(e),T(r,"alt",t)),"presentation"===k.getAttrib(e,"role")&&k.setAttrib(e,"role",""))},se=function(r,a){return function(e,t,n){r(e,n),X(e,a)}},ue=function(e,t,n){var r,a,i,o=ie(e,n);oe(n,o,t,"caption",function(e,t,n){return J(e),0}),oe(n,o,t,"src",$),oe(n,o,t,"title",$),oe(n,o,t,"width",V(0,e)),oe(n,o,t,"height",V(0,e)),oe(n,o,t,"class",$),oe(n,o,t,"style",se(function(e,t){return $(e,"style",t),0},e)),oe(n,o,t,"hspace",se(Z,e)),oe(n,o,t,"vspace",se(Q,e)),oe(n,o,t,"border",se(Y,e)),oe(n,o,t,"borderStyle",se(ee,e)),r=n,a=o,(i=t).alt===a.alt&&i.isDecorative===a.isDecorative||le(r,i.alt,i.isDecorative)},ce=function(e,t){var n=e.dom.styles.parse(t),r=z(n),a=e.dom.styles.parse(e.dom.styles.serialize(r));return e.dom.styles.serialize(a)},me=function(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||H(t))?null:t},de=function(t,e){var n=t.dom,r=n.getParent(e.parentNode,function(e){return!!t.schema.getTextBlockElements()[e.nodeName]},t.getBody());return r?n.split(r,e):e},ge=function(t,e){var n=function(e,t){var n=document.createElement("img");if(ue(e,c(c({},t),{caption:!1}),n),le(n,t.alt,t.isDecorative),t.caption){var r=k.create("figure",{"class":"image"});return r.appendChild(n),r.appendChild(k.create("figcaption",{contentEditable:"true"},"Caption")),r.contentEditable="false",r}return n}(function(e){return ce(t,e)},e);t.dom.setAttrib(n,"data-mce-id","__mcenew"),t.focus(),t.selection.setContent(n.outerHTML);var r,a=t.dom.select('*[data-mce-id="__mcenew"]')[0];t.dom.setAttrib(a,"data-mce-id",null),te(a)?(r=de(t,a),t.selection.select(r)):t.selection.select(a)},fe=function(t,e){var n,r,a,i,o,l,s=me(t);ue(function(e){return ce(t,e)},e,s),n=s,t.dom.setAttrib(n,"src",n.getAttribute("src")),te(s.parentNode)?(r=s.parentNode,de(t,r),t.selection.select(s.parentNode)):(t.selection.select(s),a=t,i=e,l=function(){o.onload=o.onerror=null,a.selection&&(a.selection.select(o),a.nodeChanged())},(o=s).onload=function(){i.width||i.height||!P(a)||a.dom.setAttribs(o,{width:String(o.clientWidth),height:String(o.clientHeight)}),l()},o.onerror=l)},pe=Object.prototype.hasOwnProperty,he=(o=function(e,t){return s(e)&&s(t)?he(e,t):t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var a=e[r];for(var i in a)pe.call(a,i)&&(n[i]=o(n[i],a[i]))}return n}),be=tinymce.util.Tools.resolve("tinymce.util.Tools"),ve=function(e){return A(e.value)?e.value:""},ye=function(e,a){var i=[];return be.each(e,function(e){var t,n,r=A(e.text)?e.text:A(e.title)?e.title:"";e.menu!==undefined?(t=ye(e.menu,a),i.push({text:r,items:t})):(n=a(e),i.push({text:r,value:n}))}),i},De=function(t){return void 0===t&&(t=ve),function(e){return e?S.from(e).map(function(e){return ye(e,t)}):S.none()}},we=function(e,n){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n);if(r.isSome())return r}return S.none()}(e,function(e){return t=e,Object.prototype.hasOwnProperty.call(t,"items")?we(e.items,n):e.value===n?S.some(e):S.none();var t})},Ae=De,Se=function(e){return De(ve)(e)},xe=function(e,t){return e.bind(function(e){return we(e,t)})};function Te(o){var t=function(e,r,a,t){var i=new XMLHttpRequest;i.open("POST",o.url),i.withCredentials=o.credentials,i.upload.onprogress=function(e){t(e.loaded/e.total*100)},i.onerror=function(){a("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,t,n;i.status<200||300<=i.status?a("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?r((t=o.basePath,n=e.location,t?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):n)):a("Invalid JSON: "+i.responseText)};var n=new FormData;n.append("file",e.blob(),e.filename()),i.send(n)};return o=be.extend({credentials:!1,handler:t},o),{upload:function(e){return o.url||o.handler!==t?(r=e,a=o.handler,new I(function(e,t){try{a(r,e,t,f)}catch(n){t(n.message)}})):I.reject("Upload url missing from the settings.");var r,a}}}var Ce=function(e){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},Ue=function(r){var t,e,a=Ae(function(e){return r.convertURL(e.value||e.url,"src")}),n=new I(function(t){var n,e;n=function(e){t(a(e).map(function(e){return x([[{text:"None",value:""}],e])}))},"string"==typeof(e=r.getParam("image_list",!1))?N.send({url:e,success:function(e){n(JSON.parse(e))}}):"function"==typeof e?e(n):n(e)}),i=Se(r.getParam("image_class_list")),o=r.getParam("image_advtab",!1,"boolean"),l=r.getParam("image_uploadtab",!0,"boolean"),s=!!_(r),u=!!L(r),c=(e=me(t=r))?ie(function(e){return ce(t,e)},e):re(),m=r.getParam("image_description",!0,"boolean"),d=r.getParam("image_title",!1,"boolean"),g=P(r),f=r.getParam("image_caption",!1,"boolean"),p=r.getParam("a11y_advanced_options",!1,"boolean"),h=_(r),b=r.getParam("images_upload_base_path",undefined,"string"),v=r.getParam("images_upload_credentials",!1,"boolean"),y=L(r),D=r.getParam("automatic_uploads",!0,"boolean"),w=S.some(r.getParam("image_prepend_url","","string")).filter(function(e){return A(e)&&0<e.length});return n.then(function(e){return{image:c,imageList:e,classList:i,hasAdvTab:o,hasUploadTab:l,hasUploadUrl:s,hasUploadHandler:u,hasDescription:m,hasImageTitle:d,hasDimensions:g,hasImageCaption:f,url:h,basePath:b,credentials:v,handler:y,prependURL:w,hasAccessibilityOptions:p,automaticUploads:D}})},Oe=function(e){var t=e.imageList.map(function(e){return{name:"images",type:"listbox",label:"Image list",items:e}}),n={name:"alt",type:"input",label:"Alternative description",disabled:e.hasAccessibilityOptions&&e.image.isDecorative},r=e.classList.map(function(e){return{name:"classes",type:"listbox",label:"Class",items:e}});return x([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],t.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],e.hasDescription?[n]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:x([r.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])},Ie=function(e){return{title:"General",name:"general",items:Oe(e)}},Ne=Oe,Pe=function(e){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}},_e=function(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e["class"],caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}},Le=function(e,t){return{src:e.src.value,alt:0===e.alt.length&&t?null:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,"class":e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}},Ee=function(e,t){var n,r,a=t.getData();n=e,r=a.src.value,(/^(?:[a-zA-Z]+:)?\/\//.test(r)?S.none():n.prependURL.bind(function(e){return r.substring(0,e.length)!==e?S.some(e+r):S.none()})).each(function(e){t.setData({src:{value:e,meta:a.src.meta}})})},Me=function(e,t){var n,r,a,i,o=t.getData(),l=o.src.meta;l!==undefined&&(n=he({},o),a=n,i=l,(r=e).hasDescription&&A(i.alt)&&(a.alt=i.alt),r.hasAccessibilityOptions&&(a.isDecorative=i.isDecorative||a.isDecorative||!1),r.hasImageTitle&&A(i.title)&&(a.title=i.title),r.hasDimensions&&(A(i.width)&&(a.dimensions.width=i.width),A(i.height)&&(a.dimensions.height=i.height)),A(i["class"])&&xe(r.classList,i["class"]).each(function(e){a.classes=e.value}),r.hasImageCaption&&d(i.caption)&&(a.caption=i.caption),r.hasAdvTab&&(A(i.style)&&(a.style=i.style),A(i.vspace)&&(a.vspace=i.vspace),A(i.border)&&(a.border=i.border),A(i.hspace)&&(a.hspace=i.hspace),A(i.borderstyle)&&(a.borderstyle=i.borderstyle)),t.setData(n))},Re=function(e,t,n,r){var a,i,o,l,s,u,c,m,d,g,f,p;Ee(t,r),Me(t,r),a=e,i=t,o=n,s=(l=r).getData(),u=s.src.value,(c=s.src.meta||{}).width||c.height||!i.hasDimensions||a.imageSize(u).then(function(e){o.open&&l.setData({dimensions:e})}),m=t,d=n,f=(g=r).getData(),p=xe(m.imageList,f.src.value),d.prevImage=p,g.setData({images:p.map(function(e){return e.value}).getOr("")})},ze=function(e,t,n){var r,a,i,o,l,s=z(e(n.style)),u=he({},n);return u.vspace=(r=s)["margin-top"]&&r["margin-bottom"]&&r["margin-top"]===r["margin-bottom"]?M(String(r["margin-top"])):"",u.hspace=(a=s)["margin-right"]&&a["margin-left"]&&a["margin-right"]===a["margin-left"]?M(String(a["margin-right"])):"",u.border=(i=s)["border-width"]?M(String(i["border-width"])):"",u.borderstyle=(o=s)["border-style"]?String(o["border-style"]):"",u.style=(l=t)(e(l(s))),u},He=function(s,u,t,c){var e,n=c.getData();c.block("Uploading image"),(0===(e=n.fileinput).length?S.none():S.some(e[0])).fold(function(){c.unblock()},function(n){var r,a=URL.createObjectURL(n),i=Te({url:u.url,basePath:u.basePath,credentials:u.credentials,handler:u.handler}),o=function(){c.unblock(),URL.revokeObjectURL(a)},l=function(e){c.setData({src:{value:e,meta:{}}}),c.showTab("general"),Re(s,u,t,c)};r=n,new I(function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t(n.error.message)},n.readAsDataURL(r)}).then(function(e){var t=s.createBlobCache(n,a,e);u.automaticUploads?i.upload(t).then(function(e){l(e),o()})["catch"](function(e){o(),s.alertErr(e)}):(s.addToBlobCache(t),l(t.blobUri()),c.unblock())})})},ke=function(h,b,v){return function(e,t){var n,r,a,i,o,l,s,u,c,m,d,g,f,p;"src"===t.name?Re(h,b,v,e):"images"===t.name?(c=h,m=b,d=v,f=(g=e).getData(),(p=xe(m.imageList,f.images)).each(function(e){""===f.alt||d.prevImage.map(function(e){return e.text===f.alt}).getOr(!1)?""===e.value?g.setData({src:e,alt:d.prevAlt}):g.setData({src:e,alt:e.text}):g.setData({src:e})}),d.prevImage=p,Re(c,m,d,g)):"alt"===t.name?v.prevAlt=e.getData().alt:"style"===t.name?(o=h,s=(l=e).getData(),u=ze(o.parseStyle,o.serializeStyle,s),l.setData(u)):"vspace"===t.name||"hspace"===t.name||"border"===t.name||"borderstyle"===t.name?(n=h,r=e,a=he(_e(b.image),r.getData()),i=ae(n.normalizeCss,Le(a,!1)),r.setData({style:i})):"fileinput"===t.name?He(h,b,v,e):"isDecorative"===t.name&&(e.getData().isDecorative?e.disable("alt"):e.enable("alt"))}},je=function(i){return function(e){var t,n,r,a={prevImage:xe((t=e).imageList,t.image.src),prevAlt:t.image.alt,open:!0};return{title:"Insert/Edit Image",size:"normal",body:(r=e).hasAdvTab||r.hasUploadUrl||r.hasUploadHandler?{type:"tabpanel",tabs:x([[Ie(r)],r.hasAdvTab?[Ce(r)]:[],r.hasUploadTab&&(r.hasUploadUrl||r.hasUploadHandler)?[Pe(r)]:[]])}:{type:"panel",items:Ne(r)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:_e(e.image),onSubmit:i.onSubmit(e),onChange:ke(i,e,a),onClose:(n=a,function(){n.open=!1})}}},Be=function(t){return function(e){return a=t.documentBaseURI.toAbsolute(e),new I(function(t){var n=document.createElement("img"),r=function(e){n.parentNode&&n.parentNode.removeChild(n),t(e)};n.onload=function(){var e={width:E(n.width,n.clientWidth),height:E(n.height,n.clientHeight)};r(I.resolve(e))},n.onerror=function(){r(I.reject("Failed to get image dimensions for: "+a))};var e=n.style;e.visibility="hidden",e.position="fixed",e.bottom=e.left="0px",e.width=e.height="auto",document.body.appendChild(n),n.src=a}).then(function(e){return{width:String(e.width),height:String(e.height)}});var a}},Fe=function(e){var n,t,r,a,i,o,l,s={onSubmit:function(n){return function(e){var t=he(_e(n.image),e.getData());l.execCommand("mceUpdateImage",!1,Le(t,n.hasAccessibilityOptions)),l.editorUpload.uploadImagesAuto(),e.close()}},imageSize:Be(l=e),addToBlobCache:function(e){o.editorUpload.blobCache.add(e)},createBlobCache:function(e,t,n){return i.editorUpload.blobCache.create({blob:e,blobUri:t,name:e.name?e.name.replace(/\.[^\.]+$/,""):null,base64:n.split(",")[1]})},alertErr:function(e){a.windowManager.alert(e)},normalizeCss:function(e){return ce(r,e)},parseStyle:function(e){return t.dom.parseStyle(e)},serializeStyle:(n=t=r=a=i=o=e,function(e,t){return n.dom.serializeStyle(e,t)})};return{open:function(){Ue(e).then(je(s)).then(e.windowManager.open)}}},Ge=function(u){u.addCommand("mceImage",Fe(u).open),u.addCommand("mceUpdateImage",function(e,s){u.undoManager.transact(function(){return e=s,void((l=me(t=u))?(n=ie(function(e){return ce(t,e)},l),(r=c(c({},n),e)).src?fe(t,r):(a=t,(i=l)&&(o=a.dom.is(i.parentNode,"figure.image")?i.parentNode:i,a.dom.remove(o),a.focus(),a.nodeChanged(),a.dom.isEmpty(a.getBody())&&(a.setContent(""),a.selection.setCursorLocation())))):e.src&&ge(t,c(c({},re()),e)));var t,e,n,r,a,i,o,l})})},We=function(i){return function(e){for(var t,n=e.length,r=function(e){e.attr("contenteditable",i?"true":null)};n--;){var a=e[n];(t=a.attr("class"))&&/\bimage\b/.test(t)&&(a.attr("contenteditable",i?"false":null),be.each(a.getAll("figcaption"),r))}}};a.add("image",function(e){var t,n;(t=e).on("PreInit",function(){t.parser.addNodeFilter("figure",We(!0)),t.serializer.addNodeFilter("figure",We(!1))}),(n=e).ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:Fe(n).open,onSetup:function(e){return n.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",e.setActive).unbind}}),n.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:Fe(n).open}),n.ui.registry.addContextMenu("image",{update:function(e){return te(e)||"IMG"===e.nodeName&&!H(e)?["image"]:[]}}),Ge(e)})}();