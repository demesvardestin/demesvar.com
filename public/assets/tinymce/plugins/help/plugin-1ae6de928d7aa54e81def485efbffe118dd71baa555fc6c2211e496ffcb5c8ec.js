/**
 * TinyMCE version 6.4.1 (2023-03-29)
 */

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");let t=0;const n=e=>{const n=(new Date).getTime(),a=Math.floor(1e9*Math.random());return t++,e+"_"+a+t+String(n)},a=e=>t=>t.options.get(e),o=a("help_tabs"),i=a("forced_plugins"),r=("string",e=>"string"===(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=a=e,(o=String).prototype.isPrototypeOf(n)||(null===(i=a.constructor)||void 0===i?void 0:i.name)===o.name)?"string":t;var n,a,o,i})(e));const s=(void 0,e=>undefined===e);const l=e=>"function"==typeof e,c=(!1,()=>false);class u{constructor(e,t){this.tag=e,this.value=t}static some(e){return new u(!0,e)}static none(){return u.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?u.some(e(this.value)):u.none()}bind(e){return this.tag?e(this.value):u.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:u.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return null==e?u.none():u.some(e)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}u.singletonNone=new u(!1);const m=Array.prototype.slice,h=Array.prototype.indexOf,p=(e,t)=>{const n=e.length,a=new Array(n);for(let o=0;o<n;o++){const n=e[o];a[o]=t(n,o)}return a},d=(e,t)=>{const n=[];for(let a=0,o=e.length;a<o;a++){const o=e[a];t(o,a)&&n.push(o)}return n},g=(e,t)=>{const n=m.call(e,0);return n.sort(t),n},y=Object.keys,b=Object.hasOwnProperty,k=(e,t)=>b.call(e,t);var v=tinymce.util.Tools.resolve("tinymce.Env");const f=e=>{const t=v.os.isMacOS()||v.os.isiOS(),n=t?{alt:"&#x2325;",ctrl:"&#x2303;",shift:"&#x21E7;",meta:"&#x2318;",access:"&#x2303;&#x2325;"}:{meta:"Ctrl ",access:"Shift + Alt "},a=e.split("+"),o=p(a,(e=>{const t=e.toLowerCase().trim();return k(n,t)?n[t]:e}));return t?o.join("").replace(/\s/,""):o.join("+")},w=[{shortcuts:["Meta + B"],action:"Bold"},{shortcuts:["Meta + I"],action:"Italic"},{shortcuts:["Meta + U"],action:"Underline"},{shortcuts:["Meta + A"],action:"Select all"},{shortcuts:["Meta + Y","Meta + Shift + Z"],action:"Redo"},{shortcuts:["Meta + Z"],action:"Undo"},{shortcuts:["Access + 1"],action:"Heading 1"},{shortcuts:["Access + 2"],action:"Heading 2"},{shortcuts:["Access + 3"],action:"Heading 3"},{shortcuts:["Access + 4"],action:"Heading 4"},{shortcuts:["Access + 5"],action:"Heading 5"},{shortcuts:["Access + 6"],action:"Heading 6"},{shortcuts:["Access + 7"],action:"Paragraph"},{shortcuts:["Access + 8"],action:"Div"},{shortcuts:["Access + 9"],action:"Address"},{shortcuts:["Alt + 0"],action:"Open help dialog"},{shortcuts:["Alt + F9"],action:"Focus to menubar"},{shortcuts:["Alt + F10"],action:"Focus to toolbar"},{shortcuts:["Alt + F11"],action:"Focus to element path"},{shortcuts:["Ctrl + F9"],action:"Focus to contextual toolbar"},{shortcuts:["Shift + Enter"],action:"Open popup menu for split buttons"},{shortcuts:["Meta + K"],action:"Insert link (if link plugin activated)"},{shortcuts:["Meta + S"],action:"Save (if save plugin activated)"},{shortcuts:["Meta + F"],action:"Find (if searchreplace plugin activated)"},{shortcuts:["Meta + Shift + F"],action:"Switch to or from fullscreen mode"}],A=()=>({name:"shortcuts",title:"Handy Shortcuts",items:[{type:"table",header:["Action","Shortcut"],cells:p(w,(e=>{const t=p(e.shortcuts,f).join(" or ");return[e.action,t]}))}]});var T=tinymce.util.Tools.resolve("tinymce.util.I18n");const x=p([{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"image",name:"Image"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"pagebreak",name:"Page Break"},{key:"preview",name:"Preview"},{key:"quickbars",name:"Quick Toolbars"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"},{key:"a11ychecker",name:"Accessibility Checker",type:"premium"},{key:"advcode",name:"Advanced Code Editor",type:"premium"},{key:"advtable",name:"Advanced Tables",type:"premium"},{key:"advtemplate",name:"Advanced Templates",type:"premium",slug:"advanced-templates"},{key:"casechange",name:"Case Change",type:"premium"},{key:"checklist",name:"Checklist",type:"premium"},{key:"editimage",name:"Enhanced Image Editing",type:"premium"},{key:"footnotes",name:"Footnotes",type:"premium"},{key:"typography",name:"Advanced Typography",type:"premium",slug:"advanced-typography"},{key:"mediaembed",name:"Enhanced Media Embed",type:"premium",slug:"introduction-to-mediaembed"},{key:"export",name:"Export",type:"premium"},{key:"formatpainter",name:"Format Painter",type:"premium"},{key:"inlinecss",name:"Inline CSS",type:"premium",slug:"inline-css"},{key:"linkchecker",name:"Link Checker",type:"premium"},{key:"mentions",name:"Mentions",type:"premium"},{key:"mergetags",name:"Merge Tags",type:"premium"},{key:"pageembed",name:"Page Embed",type:"premium"},{key:"permanentpen",name:"Permanent Pen",type:"premium"},{key:"powerpaste",name:"PowerPaste",type:"premium",slug:"introduction-to-powerpaste"},{key:"rtc",name:"Real-Time Collaboration",type:"premium",slug:"rtc-introduction"},{key:"tinymcespellchecker",name:"Spell Checker Pro",type:"premium",slug:"introduction-to-tiny-spellchecker"},{key:"autocorrect",name:"Spelling Autocorrect",type:"premium"},{key:"tableofcontents",name:"Table of Contents",type:"premium"},{key:"tinycomments",name:"Tiny Comments",type:"premium",slug:"introduction-to-tiny-comments"},{key:"tinydrive",name:"Tiny Drive",type:"premium",slug:"tinydrive-introduction"}],(e=>({...e,type:e.type||"opensource",slug:e.slug||e.key}))),C=e=>{const t=e=>`<a href="${e.url}" target="_blank" rel="noopener">${e.name}</a>`,n=(e,n)=>{return(a=x,o=e=>e.key===n,((e,t,n)=>{for(let a=0,o=e.length;a<o;a++){const o=e[a];if(t(o,a))return u.some(o);if(n(o,a))break}return u.none()})(a,o,c)).fold((()=>((e,n)=>{const a=e.plugins[n].getMetadata;if(l(a)){const e=a();return{name:e.name,html:t(e)}}return{name:n,html:n}})(e,n)),(e=>{const n="premium"===e.type?`${e.name}*`:e.name;return{name:n,html:t({name:n,url:`https://www.tiny.cloud/docs/tinymce/6/${e.slug}/`})}}));var a,o},a=e=>{const t=(e=>{const t=y(e.plugins),n=i(e);return s(n)?t:d(t,(e=>!(((e,t)=>h.call(e,t))(n,e)>-1)))})(e),a=g(p(t,(t=>n(e,t))),((e,t)=>e.name.localeCompare(t.name))),o=p(a,(e=>"<li>"+e.html+"</li>")),r=o.length,l=o.join("");return"<p><b>"+T.translate(["Plugins installed ({0}):",r])+"</b></p><ul>"+l+"</ul>"},o={type:"htmlpanel",presets:"document",html:[(e=>null==e?"":'<div data-mce-tabstop="1" tabindex="-1">'+a(e)+"</div>")(e),(()=>{const e=d(x,(({type:e})=>"premium"===e)),t=g(p(e,(e=>e.name)),((e,t)=>e.localeCompare(t))),n=p(t,(e=>`<li>${e}</li>`)).join("");return'<div data-mce-tabstop="1" tabindex="-1"><p><b>'+T.translate("Premium plugins:")+"</b></p><ul>"+n+'<li class="tox-help__more-link" "><a href="https://www.tiny.cloud/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" rel="noopener" target="_blank">'+T.translate("Learn more...")+"</a></li></ul></div>"})()].join("")};return{name:"plugins",title:"Plugins",items:[o]}};var M=tinymce.util.Tools.resolve("tinymce.EditorManager");const S=(e,t)=>()=>{const{tabs:a,names:i}=((e,t)=>{const a=A(),i={name:"keyboardnav",title:"Keyboard Navigation",items:[{type:"htmlpanel",presets:"document",html:"<h1>Editor UI keyboard navigation</h1>\n\n<h2>Activating keyboard navigation</h2>\n\n<p>The sections of the outer UI of the editor - the menubar, toolbar, sidebar and footer - are all keyboard navigable. As such, there are multiple ways to activate keyboard navigation:</p>\n<ul>\n  <li>Focus the menubar: Alt + F9 (Windows) or &#x2325;F9 (MacOS)</li>\n  <li>Focus the toolbar: Alt + F10 (Windows) or &#x2325;F10 (MacOS)</li>\n  <li>Focus the footer: Alt + F11 (Windows) or &#x2325;F11 (MacOS)</li>\n</ul>\n\n<p>Focusing the menubar or toolbar will start keyboard navigation at the first item in the menubar or toolbar, which will be highlighted with a gray background. Focusing the footer will start keyboard navigation at the first item in the element path, which will be highlighted with an underline. </p>\n\n<h2>Moving between UI sections</h2>\n\n<p>When keyboard navigation is active, pressing tab will move the focus to the next major section of the UI, where applicable. These sections are:</p>\n<ul>\n  <li>the menubar</li>\n  <li>each group of the toolbar </li>\n  <li>the sidebar</li>\n  <li>the element path in the footer </li>\n  <li>the wordcount toggle button in the footer </li>\n  <li>the branding link in the footer </li>\n  <li>the editor resize handle in the footer</li>\n</ul>\n\n<p>Pressing shift + tab will move backwards through the same sections, except when moving from the footer to the toolbar. Focusing the element path then pressing shift + tab will move focus to the first toolbar group, not the last.</p>\n\n<h2>Moving within UI sections</h2>\n\n<p>Keyboard navigation within UI sections can usually be achieved using the left and right arrow keys. This includes:</p>\n<ul>\n  <li>moving between menus in the menubar</li>\n  <li>moving between buttons in a toolbar group</li>\n  <li>moving between items in the element path</li>\n</ul>\n\n<p>In all these UI sections, keyboard navigation will cycle within the section. For example, focusing the last button in a toolbar group then pressing right arrow will move focus to the first item in the same toolbar group. </p>\n\n<h1>Executing buttons</h1>\n\n<p>To execute a button, navigate the selection to the desired button and hit space or enter.</p>\n\n<h1>Opening, navigating and closing menus</h1>\n\n<p>When focusing a menubar button or a toolbar button with a menu, pressing space, enter or down arrow will open the menu. When the menu opens the first item will be selected. To move up or down the menu, press the up or down arrow key respectively. This is the same for submenus, which can also be opened and closed using the left and right arrow keys.</p>\n\n<p>To close any active menu, hit the escape key. When a menu is closed the selection will be restored to its previous selection. This also works for closing submenus.</p>\n\n<h1>Context toolbars and menus</h1>\n\n<p>To focus an open context toolbar such as the table context toolbar, press Ctrl + F9 (Windows) or &#x2303;F9 (MacOS).</p>\n\n<p>Context toolbar navigation is the same as toolbar navigation, and context menu navigation is the same as standard menu navigation.</p>\n\n<h1>Dialog navigation</h1>\n\n<p>There are two types of dialog UIs in TinyMCE: tabbed dialogs and non-tabbed dialogs.</p>\n\n<p>When a non-tabbed dialog is opened, the first interactive component in the dialog will be focused. Users can navigate between interactive components by pressing tab. This includes any footer buttons. Navigation will cycle back to the first dialog component if tab is pressed while focusing the last component in the dialog. Pressing shift + tab will navigate backwards.</p>\n\n<p>When a tabbed dialog is opened, the first button in the tab menu is focused. Pressing tab will navigate to the first interactive component in that tab, and will cycle through the tab\u2019s components, the footer buttons, then back to the tab button. To switch to another tab, focus the tab button for the current tab, then use the arrow keys to cycle through the tab buttons.</p>"}]},s=C(e),l=(()=>{var e,t;const n='<a href="https://www.tiny.cloud/docs/tinymce/6/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" rel="noopener" target="_blank">TinyMCE '+(e=M.majorVersion,t=M.minorVersion,(0===e.indexOf("@")?"X.X.X":e+"."+t)+"</a>");return{name:"versions",title:"Version",items:[{type:"htmlpanel",html:"<p>"+T.translate(["You are using {0}",n])+"</p>",presets:"document"}]}})(),c={[a.name]:a,[i.name]:i,[s.name]:s,[l.name]:l,...t.get()};return u.from(o(e)).fold((()=>(e=>{const t=y(e),n=t.indexOf("versions");return-1!==n&&(t.splice(n,1),t.push("versions")),{tabs:e,names:t}})(c)),(e=>((e,t)=>{const a={},o=p(e,(e=>{var o;if(r(e))return k(t,e)&&(a[e]=t[e]),e;{const t=null!==(o=e.name)&&void 0!==o?o:n("tab-name");return a[t]=e,t}}));return{tabs:a,names:o}})(e,c)))})(e,t),s={type:"tabpanel",tabs:(e=>{const t=[],n=e=>{t.push(e)};for(let t=0;t<e.length;t++)e[t].each(n);return t})(p(i,(e=>{return k(t=a,n=e)?u.from(t[n]):u.none();var t,n})))};e.windowManager.open({title:"Help",size:"normal",body:s,buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{}})};e.add("help",(e=>{const t=(e=>{let t={};return{get:()=>t,set:e=>{t=e}}})(),a=(e=>({addTab:t=>{var a;const o=null!==(a=t.name)&&void 0!==a?a:n("tab-name"),i=e.get();i[o]=t,e.set(i)}}))(t);(e=>{(0,e.options.register)("help_tabs",{processor:"array"})})(e);const o=S(e,t);return((e,t)=>{e.ui.registry.addButton("help",{icon:"help",tooltip:"Help",onAction:t}),e.ui.registry.addMenuItem("help",{text:"Help",icon:"help",shortcut:"Alt+0",onAction:t})})(e,o),((e,t)=>{e.addCommand("mceHelp",t)})(e,o),e.shortcuts.add("Alt+0","Open help dialog","mceHelp"),a}))}();
