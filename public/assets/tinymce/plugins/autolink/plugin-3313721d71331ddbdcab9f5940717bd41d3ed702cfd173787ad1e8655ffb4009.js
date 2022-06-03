/**
 * TinyMCE version 6.0.3 (2022-05-25)
 */

!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=t=>e=>e.options.get(t),n=e("autolink_pattern"),o=e("link_default_target"),r=e("link_default_protocol"),i=("string",t=>"string"===(t=>{const e=typeof t;return null===t?"null":"object"===e&&Array.isArray(t)?"array":"object"===e&&(n=o=t,(r=String).prototype.isPrototypeOf(n)||(null===(i=o.constructor)||void 0===i?void 0:i.name)===r.name)?"string":e;var n,o,r,i})(t));const s=t=>/^[(\[{ \u00a0]$/.test(t),a=t=>3===t.nodeType,l=t=>1===t.nodeType,d=(t,e)=>{if(e<0&&(e=0),a(t)){const n=t.data.length;e>n&&(e=n)}return e},f=(t,e,n)=>{!l(e)||e.hasChildNodes()?t.setStart(e,d(e,n)):t.setStartBefore(e)},g=(t,e,n)=>{!l(e)||e.hasChildNodes()?t.setEnd(e,d(e,n)):t.setEndAfter(e)},c=(t,e)=>{let l,d,c,u,h,p,k;const C=n(t),y=o(t);if(null!==t.dom.getParent(t.selection.getNode(),"a[href]"))return;const m=t.selection.getRng().cloneRange();if(m.startOffset<5){if(h=m.endContainer.previousSibling,!h){if(!m.endContainer.firstChild||!m.endContainer.firstChild.nextSibling)return;h=m.endContainer.firstChild.nextSibling}if(p=h.length,f(m,h,p),g(m,h,p),m.endOffset<5)return;l=m.endOffset,d=h}else{if(d=m.endContainer,!a(d)&&d.firstChild){for(;!a(d)&&d.firstChild;)d=d.firstChild;a(d)&&(f(m,d,0),g(m,d,d.nodeValue.length))}l=1===m.endOffset?2:m.endOffset-1-e}const w=l;do{f(m,d,l>=2?l-2:0),g(m,d,l>=1?l-1:0),l-=1,k=m.toString()}while(!s(k)&&l-2>=0);var A;s(m.toString())?(f(m,d,l),g(m,d,w),l+=1):0===m.startOffset?(f(m,d,0),g(m,d,w)):(f(m,d,l),g(m,d,w)),u=m.toString(),A=u.charAt(u.length-1),/[?!,.;:]/.test(A)&&g(m,d,w-1),u=m.toString().trim();const S=u.match(C),_=r(t);if(S){let e=S[0];O="www.",(v=e).length>=O.length&&v.substr(0,0+O.length)===O?e=_+"://"+e:((t,e)=>-1!==t.indexOf("@"))(e)&&!(t=>/^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(t))(e)&&(e="mailto:"+e),c=t.selection.getBookmark(),t.selection.setRng(m),t.getDoc().execCommand("createlink",!1,e),i(y)&&t.dom.setAttrib(t.selection.getNode(),"target",y),t.selection.moveToBookmark(c),t.nodeChanged()}var v,O};t.add("autolink",(t=>{(t=>{const e=t.options.register;e("autolink_pattern",{processor:"regexp",default:new RegExp("^"+/(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-+~=.,%()\/\w]*[-+~=%()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g.source+"$","i")}),e("link_default_target",{processor:"string"}),e("link_default_protocol",{processor:"string",default:"https"})})(t),(t=>{t.on("keydown",(e=>{if(13===e.keyCode)return(t=>c(t,-1))(t)})),t.on("keypress",(e=>{if(41===e.keyCode||93===e.keyCode||125===e.keyCode)return(t=>c(t,-1))(t)})),t.on("keyup",(e=>{if(32===e.keyCode)return(t=>c(t,0))(t)}))})(t)}))}();
