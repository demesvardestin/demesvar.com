/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.15 (2019-09-02)
 */

!function(m){"use strict";var o,i=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return i(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),g=tinymce.util.Tools.resolve("tinymce.util.Tools"),t=tinymce.util.Tools.resolve("tinymce.html.DomParser"),f=tinymce.util.Tools.resolve("tinymce.html.Node"),p=tinymce.util.Tools.resolve("tinymce.html.Serializer"),h=function(e){return e.getParam("fullpage_hide_in_source_view")},l=function(e){return e.getParam("fullpage_default_xml_pi")},a=function(e){return e.getParam("fullpage_default_encoding")},c=function(e){return e.getParam("fullpage_default_font_family")},s=function(e){return e.getParam("fullpage_default_font_size")},u=function(e){return e.getParam("fullpage_default_text_color")},d=function(e){return e.getParam("fullpage_default_title")},y=function(e){return e.getParam("fullpage_default_doctype","<!DOCTYPE html>")},v=function(e){return t({validate:!1,root_name:"#document"}).parse(e)},_=v,n=function(e,t){var n,i,r=v(t),l={};function o(e,t){return e.attr(t)||""}return l.fontface=c(e),l.fontsize=s(e),7===(n=r.firstChild).type&&(l.xml_pi=!0,(i=/encoding="([^"]+)"/.exec(n.value))&&(l.docencoding=i[1])),(n=r.getAll("#doctype")[0])&&(l.doctype="<!DOCTYPE"+n.value+">"),(n=r.getAll("title")[0])&&n.firstChild&&(l.title=n.firstChild.value),g.each(r.getAll("meta"),function(e){var t,n=e.attr("name"),i=e.attr("http-equiv");n?l[n.toLowerCase()]=e.attr("content"):"Content-Type"===i&&(t=/charset\s*=\s*(.*)\s*/gi.exec(e.attr("content")))&&(l.docencoding=t[1])}),(n=r.getAll("html")[0])&&(l.langcode=o(n,"lang")||o(n,"xml:lang")),l.stylesheets=[],g.each(r.getAll("link"),function(e){"stylesheet"===e.attr("rel")&&l.stylesheets.push(e.attr("href"))}),(n=r.getAll("body")[0])&&(l.langdir=o(n,"dir"),l.style=o(n,"style"),l.visited_color=o(n,"vlink"),l.link_color=o(n,"link"),l.active_color=o(n,"alink")),l},b=function(e,l,t){var o,n,i,a,r,c=e.dom;function s(e,t,n){e.attr(t,n||undefined)}function u(e){n.firstChild?n.insert(e,n.firstChild):n.append(e)}o=v(t),(n=o.getAll("head")[0])||(a=o.getAll("html")[0],n=new f("head",1),a.firstChild?a.insert(n,a.firstChild,!0):a.append(n)),a=o.firstChild,l.xml_pi?(r='version="1.0"',l.docencoding&&(r+=' encoding="'+l.docencoding+'"'),7!==a.type&&(a=new f("xml",7),o.insert(a,o.firstChild,!0)),a.value=r):a&&7===a.type&&a.remove(),a=o.getAll("#doctype")[0],l.doctype?(a||(a=new f("#doctype",10),l.xml_pi?o.insert(a,o.firstChild):u(a)),a.value=l.doctype.substring(9,l.doctype.length-1)):a&&a.remove(),a=null,g.each(o.getAll("meta"),function(e){"Content-Type"===e.attr("http-equiv")&&(a=e)}),l.docencoding?(a||((a=new f("meta",1)).attr("http-equiv","Content-Type"),a.shortEnded=!0,u(a)),a.attr("content","text/html; charset="+l.docencoding)):a&&a.remove(),a=o.getAll("title")[0],l.title?(a?a.empty():u(a=new f("title",1)),a.append(new f("#text",3)).value=l.title):a&&a.remove(),g.each("keywords,description,author,copyright,robots".split(","),function(e){var t,n,i=o.getAll("meta"),r=l[e];for(t=0;t<i.length;t++)if((n=i[t]).attr("name")===e)return void(r?n.attr("content",r):n.remove());r&&((a=new f("meta",1)).attr("name",e),a.attr("content",r),a.shortEnded=!0,u(a))});var d={};return g.each(o.getAll("link"),function(e){"stylesheet"===e.attr("rel")&&(d[e.attr("href")]=e)}),g.each(l.stylesheets,function(e){d[e]||((a=new f("link",1)).attr({rel:"stylesheet",text:"text/css",href:e}),a.shortEnded=!0,u(a)),delete d[e]}),g.each(d,function(e){e.remove()}),(a=o.getAll("body")[0])&&(s(a,"dir",l.langdir),s(a,"style",l.style),s(a,"vlink",l.visited_color),s(a,"link",l.link_color),s(a,"alink",l.active_color),c.setAttribs(e.getBody(),{style:l.style,dir:l.dir,vLink:l.visited_color,link:l.link_color,aLink:l.active_color})),(a=o.getAll("html")[0])&&(s(a,"lang",l.langcode),s(a,"xml:lang",l.langcode)),n.firstChild||n.remove(),(i=p({validate:!1,indent:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(o)).substring(0,i.indexOf("</body>"))},x=Object.prototype.hasOwnProperty,C=(o=function(e,t){return t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},i=0;i<e.length;i++){var r=e[i];for(var l in r)x.call(r,l)&&(n[l]=o(n[l],r[l]))}return n}),r=function(i,r){var l=n(i,r.get()),e=C({title:"",keywords:"",description:"",robots:"",author:"",docencoding:""},l);i.windowManager.open({title:"Metadata and Document Properties",size:"normal",body:{type:"panel",items:[{name:"title",type:"input",label:"Title"},{name:"keywords",type:"input",label:"Keywords"},{name:"description",type:"input",label:"Description"},{name:"robots",type:"input",label:"Robots"},{name:"author",type:"input",label:"Author"},{name:"docencoding",type:"input",label:"Encoding"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:e,onSubmit:function(e){var t=e.getData(),n=b(i,g.extend(l,t),r.get());r.set(n),e.close()}})},k=function(e,t){e.addCommand("mceFullPageProperties",function(){r(e,t)})},w=function(e,t){return g.each(e,function(e){t=t.replace(e,function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"})}),t},A=function(e){return e.replace(/<!--mce:protected ([\s\S]*?)-->/g,function(e,t){return unescape(t)})},P=g.each,T=function(e){return e.replace(/<\/?[A-Z]+/g,function(e){return e.toLowerCase()})},O=function(e){var t,n="",i="";if(l(e)){var r=a(e);n+='<?xml version="1.0" encoding="'+(r||"ISO-8859-1")+'" ?>\n'}return n+=y(e),n+="\n<html>\n<head>\n",(t=d(e))&&(n+="<title>"+t+"</title>\n"),(t=a(e))&&(n+='<meta http-equiv="Content-Type" content="text/html; charset='+t+'" />\n'),(t=c(e))&&(i+="font-family: "+t+";"),(t=s(e))&&(i+="font-size: "+t+";"),(t=u(e))&&(i+="color: "+t+";"),n+="</head>\n<body"+(i?' style="'+i+'"':"")+">\n"},D=function(l,o,a){l.on("BeforeSetContent",function(e){!function(e,t,n,i){var r,l,o,a,c="",s=e.dom;if(!(i.selection||(o=w(e.settings.protect,i.content),"raw"===i.format&&t.get()||i.source_view&&h(e)))){0!==o.length||i.source_view||(o=g.trim(t.get())+"\n"+g.trim(o)+"\n"+g.trim(n.get())),-1!==(r=(o=o.replace(/<(\/?)BODY/gi,"<$1body")).indexOf("<body"))?(r=o.indexOf(">",r),t.set(T(o.substring(0,r+1))),-1===(l=o.indexOf("</body",r))&&(l=o.length),i.content=g.trim(o.substring(r+1,l)),n.set(T(o.substring(l)))):(t.set(O(e)),n.set("\n</body>\n</html>")),a=_(t.get()),P(a.getAll("style"),function(e){e.firstChild&&(c+=e.firstChild.value)});var u=a.getAll("body")[0];u&&s.setAttribs(e.getBody(),{style:u.attr("style")||"",dir:u.attr("dir")||"",vLink:u.attr("vlink")||"",link:u.attr("link")||"",aLink:u.attr("alink")||""}),s.remove("fullpage_styles");var d=e.getDoc().getElementsByTagName("head")[0];c&&s.add(d,"style",{id:"fullpage_styles"}).appendChild(m.document.createTextNode(c));var f={};g.each(d.getElementsByTagName("link"),function(e){"stylesheet"===e.rel&&e.getAttribute("data-mce-fullpage")&&(f[e.href]=e)}),g.each(a.getAll("link"),function(e){var t=e.attr("href");if(!t)return!0;f[t]||"stylesheet"!==e.attr("rel")||s.add(d,"link",{rel:"stylesheet",text:"text/css",href:t,"data-mce-fullpage":"1"}),delete f[t]}),g.each(f,function(e){e.parentNode.removeChild(e)})}}(l,o,a,e)}),l.on("GetContent",function(e){var t,n,i,r;t=l,n=o.get(),i=a.get(),(r=e).selection||r.source_view&&h(t)||(r.content=A(g.trim(n)+"\n"+g.trim(r.content)+"\n"+g.trim(i)))})},E=function(e){e.ui.registry.addButton("fullpage",{tooltip:"Metadata and document properties",icon:"document-properties",onAction:function(){e.execCommand("mceFullPageProperties")}}),e.ui.registry.addMenuItem("fullpage",{text:"Metadata and document properties",icon:"document-properties",onAction:function(){e.execCommand("mceFullPageProperties")}})};!function z(){e.add("fullpage",function(e){var t=i(""),n=i("");k(e,t),E(e),D(e,t,n)})}()}(window);
