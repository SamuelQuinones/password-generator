(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{43:function(e){e.exports=JSON.parse('{"app_title":"Secure Password Generator","generate_password":"Generate Password","footer":{"version":"Version","view_source":"View The Source Code","more_security":"For more information about security, please click"},"select_theme":"Select Theme","about":{"click_trigger":"About","modal_title":"About This App","p_1":"With the click of a button you can generate complex, secure, near impossible to guess passwords!","p_2":"For notes about security, please close this modal, scroll to the bottom and follow the instructions to open the security modal.","p_3":"For information about contributing to this project, please visit <a>the project\'s GitHub</a> and view <strong>CONTRIBUTING.md</strong>","p_4":"The logo / icon was made by Emily from <a>Em\'s Enchanted Emporium</a>","general_info":"General Info","how_it_works":"How It Works"},"form":{"password_length":"Length","settings_label":"Settings","include_uppercase":"Include Uppercase","include_lowercase":"Include Lowercase","include_numbers":"Include Numbers","include_symbols":"Include Symbols","advanced_settings":{"title":"Advanced Settings","max_length":"Max Length","similar_symbols":"Include Similar Symbols","ambiguous_symbols":"Include Ambiguous Symbols","save_for_next_time":"Save All Settings"}},"output":{"title":"Your New Password","click_prompt":"Click Generate","copy_to_clipboard":"Copy to Clipboard","copied":"Copied","reset_prompt":"Reset Password","saved_settings_card":{"heading":"Using Saved Settings","reset":"Reset"}},"security":{"click_trigger":"here","content_label":"Security and This App","modal_title":"About Security","p_1":"Everything about this app happens localized in your browser, on your device, during that session.","p_2":"None of passwords generated are transmitted any way. None of the <a>settings</a> with which you use to generate passwords are transmitted in any way. The color theme you use is not transmitted in any way.","p_3":"None of the passwords generated are saved in any way, to the device, to the browser, or otherwise.","p_4":"The <a>settings</a> you use to generate a password <strong><em>CAN</em></strong> be saved to the browser\'s <code>localStorage</code> <strong><em>PROVIDED THE USER OPTS IN TO THAT BEHAVIOR</em></strong> and <strong><em>CAN BE RESET / REMOVED AT ANY TIME</em></strong>","p_5":"This app uses different colored themes to make the experience more \'fun\' and customizable. In order to remember the theme chosen by the user the value of the theme is stored in the browser\'s <code>localStorage</code>.","p_6":"This app\'s code is <strong><em>Open Source</em></strong>, meaning it is available for anyone to see, contribute to, and somewhat unfortunately directly steal or copy.","p_7":"<strong>Please note that the only official version of this app will only ever be hosted at <u>passwordgenerator.samtheq.com</u> OR <u>samuelquinones.github.io/password-generator</u></strong>","p_8":"The above claims only hold true for the <strong>official version</strong> and I can not make the same claims for those who steal the code and redistribute it without my knowledge.","p_9":"If you do see that someone is hosting this app on another domain, please open an issue and let me know so that it can be dealt with.","settings":"Settings","clarify":"Settings refers to the configurable options on the app; which types of characters to include, password length, etc."}}')},44:function(e){e.exports=JSON.parse('{"app_title":"Generador de contrase\xf1as seguras","generate_password":"Creas Contrase\xf1a","footer":{"version":"Versi\xf3n","view_source":"Ver el C\xf3digo del Programa","more_security":"Para obtener informaci\xf3n sobre seguridad, haga clic en"},"select_theme":"Elegiste Color","about":{"click_trigger":"Acerca de","modal_title":"Acerca de esta Aplicaci\xf3n","p_1":"\xa1Con solo presionar un bot\xf3n, puede crear contrase\xf1as complejas, secretas y dif\xedciles de adivinar!","p_2":"","p_3":"","p_4":"","general_info":"","how_it_works":""},"form":{"password_length":"","settings_label":"","include_uppercase":"","include_lowercase":"","include_numbers":"","include_symbols":"","advanced_settings":{"title":"","max_length":"","similar_symbols":"","ambiguous_symbols":"","save_for_next_time":""}},"output":{"title":"Tu Nueva Contrase\xf1a","click_prompt":"Haga clic en Crear","copy_to_clipboard":"Copiar al Portapapeles","copied":"Esta Copiado","reset_prompt":"Restablecer la Contrase\xf1a","saved_settings_card":{"heading":"Usando la configuraci\xf3n guardada","reset":"Reiniciar"}},"security":{"click_trigger":"aqu\xed","content_label":"La seguridad de esta Aplicaci\xf3n","modal_title":"","p_1":"","p_2":"","p_3":"","p_4":"","p_5":"","p_6":"","p_7":"","p_8":"","p_9":"","settings":"","clarify":""}}')},53:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(11),c=(n(53),n(2)),i=n(1),o=function(e){var t=e.children,n=e.className;return Object(i.jsx)("div",{className:"".concat(n||""," card card-theme rounded-md shadow-md p-3"),children:t})},l=n(4),d=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){a(!0)}),[]),n},u=Object(r.forwardRef)((function(e,t){var n=e.label,r=e.htmlId,a=e.type,s=void 0===a?"skinny":a,c=e.name,o=e.disabled,l=void 0!==o&&o,u=e.value,b=e.onChange,m=d();return Object(i.jsxs)("label",{htmlFor:r,className:"flex justify-between items-center ".concat(l?"cursor-not-allowed":"cursor-pointer"),children:[Object(i.jsx)("div",{children:n}),Object(i.jsxs)("div",{className:"relative flex items-center",children:[Object(i.jsx)("input",{disabled:l,ref:t,type:"checkbox",name:c,id:r,className:"sr-only pwg-toggle",value:u,onChange:b}),m&&Object(i.jsx)(i.Fragment,{children:"skinny"===s?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"sw-line w-10 h-4 bg-gray-400 rounded-full shadow-inner transition"}),Object(i.jsx)("div",{className:"dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"sw-line block bg-gray-600 w-14 h-8 rounded-full transition"}),Object(i.jsx)("div",{className:"dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition"})]})})]})]})})),b=u;u.displayName="ToggleButton";var m=Object(r.forwardRef)((function(e,t){var n=e.min,r=e.max,a=e.step,s=e.htmlID,c=e.name,o=e.onChange;return Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("span",{className:"flex-grow-0 pr-2",children:n}),Object(i.jsx)("input",{ref:t,className:"flex-grow focus:outline-none",onChange:o,type:"range",name:c,id:s,min:n,max:r,step:a}),Object(i.jsx)("span",{className:"flex-grow-0 pl-2",children:r})]})})),h=m;m.displayName="Slider";var j,p=n(22),f=n(46),g=["children","className"],O=Object(r.forwardRef)((function(e,t){var n=e.children,r=e.className,a=Object(f.a)(e,g);return Object(i.jsx)("button",Object(c.a)(Object(c.a)({ref:t,className:"".concat(r||""," btn btn-theme rounded-md p-2 ")},a),{},{children:n}))})),v=O;O.displayName="Button";var y=["title","titleId"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _(e,t){var n=e.title,a=e.titleId,s=w(e,y);return r.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-caret-right-fill",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,j||(j=r.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})))}var N,S=r.forwardRef(_),C=(n.p,["title","titleId"]);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function I(e,t){var n=e.title,a=e.titleId,s=k(e,C);return r.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-caret-down-fill",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,N||(N=r.createElement("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})))}var T,P=r.forwardRef(I),L=(n.p,["title","titleId"]);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function M(e,t){var n=e.title,a=e.titleId,s=A(e,L);return r.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,T||(T=r.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))}var F,W=r.forwardRef(M),U=(n.p,["title","titleId"]);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function V(e,t){var n=e.title,a=e.titleId,s=B(e,U);return r.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-dash-lg",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,F||(F=r.createElement("path",{d:"M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"})))}var H,D=r.forwardRef(V),G=(n.p,["title","titleId"]);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J(e,t){var n=e.title,a=e.titleId,s=K(e,G);return r.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,H||(H=r.createElement("path",{d:"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"})))}var Q,Y=r.forwardRef(J),$=(n.p,["title","titleId"]);function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ee(e,t){var n=e.title,a=e.titleId,s=Z(e,$);return r.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-x-lg",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,Q||(Q=r.createElement("path",{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"})))}var te,ne=r.forwardRef(ee),re=(n.p,["title","titleId"]);function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ce(e,t){var n=e.title,a=e.titleId,s=se(e,re);return r.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-palette-fill",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,te||(te=r.createElement("path",{d:"M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})))}var ie,oe,le=r.forwardRef(ce),de=(n.p,["title","titleId"]);function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function me(e,t){var n=e.title,a=e.titleId,s=be(e,de);return r.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-check2-circle",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,ie||(ie=r.createElement("path",{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"})),oe||(oe=r.createElement("path",{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"})))}var he,je=r.forwardRef(me),pe=(n.p,["title","titleId"]);function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Oe(e,t){var n=e.title,a=e.titleId,s=ge(e,pe);return r.createElement("svg",fe({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-paint-bucket",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,he||(he=r.createElement("path",{d:"M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"})))}var ve=r.forwardRef(Oe),ye=(n.p,function(e){var t=e.children,n=e.label,a=Object(r.useState)(!1),s=Object(l.a)(a,2),c=s[0],o=s[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(v,{className:"dropdown-trigger w-full ".concat(c?"open":"closed"),onClick:function(){return o(!c)},type:"button",children:[c?Object(i.jsx)(P,{}):Object(i.jsx)(S,{}),Object(i.jsx)("span",{className:"ml-3",children:n})]}),Object(i.jsx)(p.UnmountClosed,{isOpened:c,children:t})]})}),xe=Object(r.forwardRef)((function(e,t){var n=e.htmlId,r=e.name,a=e.max,s=e.min,c=e.onChange,o=e.label,l=e.rightDisabled,d=void 0!==l&&l,u=e.leftDisabled,b=void 0!==u&&u,m=function(e){var t=document.querySelector("#".concat(n)),r=new Event("change",{bubbles:!0});null===t||void 0===t||t[e](),null===t||void 0===t||t.dispatchEvent(r)};return Object(i.jsxs)("label",{className:"flex justify-between cursor-pointer",htmlFor:n,children:[o,Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{disabled:b,type:"button",className:"relative num-input-btn rounded-l-md px-1 border btn btn-theme",onClick:function(){return m("stepDown")},children:Object(i.jsx)(D,{height:14,width:14,title:"Decrease"})}),Object(i.jsx)("input",{ref:t,className:"num-input-field text-center border-t border-b px-1",type:"number",onChange:c,id:n,name:r,max:a,min:s}),Object(i.jsx)("button",{disabled:d,type:"button",className:"relative num-input-btn rounded-r-md px-1 border btn btn-theme",onClick:function(){return m("stepUp")},children:Object(i.jsx)(Y,{height:14,width:14,title:"Increase"})})]})]})})),we=xe;xe.displayName="NumberInput";var _e=n(16),Ne=n(45),Se=function e(t){Object(_e.a)(this,e),this.maxLength=void 0,this.includeSimilarCharacters=void 0,this.includeAmbiguousSymbols=void 0,this.saveForNextTime=void 0,this.maxLength=(null===t||void 0===t?void 0:t.maxLength)||24,this.includeSimilarCharacters=(null===t||void 0===t?void 0:t.includeSimilarCharacters)||!1,this.includeAmbiguousSymbols=(null===t||void 0===t?void 0:t.includeAmbiguousSymbols)||!0,this.saveForNextTime=(null===t||void 0===t?void 0:t.saveForNextTime)||!1},Ce=function e(t){Object(_e.a)(this,e),this.passwordLength=void 0,this.includeUppercase=void 0,this.includeLowercase=void 0,this.includeNumbers=void 0,this.includeSymbols=void 0,this.advancedSettings=void 0,this.passwordLength=(null===t||void 0===t?void 0:t.passwordLength)||6,this.includeUppercase=(null===t||void 0===t?void 0:t.includeUppercase)||!1,this.includeLowercase=(null===t||void 0===t?void 0:t.includeLowercase)||!0,this.includeNumbers=(null===t||void 0===t?void 0:t.includeNumbers)||!0,this.includeSymbols=(null===t||void 0===t?void 0:t.includeSymbols)||!1,this.advancedSettings=new Se(null===t||void 0===t?void 0:t.advancedSettings)},Ee={passwordLength:6,includeUppercase:!1,includeLowercase:!0,includeNumbers:!0,includeSymbols:!1,advancedSettings:{maxLength:24,includeSimilarCharacters:!1,includeAmbiguousSymbols:!0,saveForNextTime:!1}},ke=function(){localStorage.removeItem("savedSettings")},Ie=n(21),Te=function(){return Object(Ie.b)()},Pe=Ie.c,Le=n(25),Re={generatedPW:void 0,theme:"pink",settingsSaved:!1},Ae=Object(Le.b)({name:"userState",initialState:Re,reducers:{reset:function(e){e.generatedPW=void 0,e.theme="pink",e.settingsSaved=!1},setTheme:function(e,t){e.theme=t.payload},setGeneratedPW:function(e,t){e.generatedPW=t.payload},setSettingsSaved:function(e,t){e.settingsSaved=t.payload},resetGeneratedPW:function(e){e.generatedPW=void 0}}}),Me=Ae.actions,Fe=Ae.reducer,We=n(5),Ue=function(e,t){for(var n=[],r=e;r<=t;r++)n.push(r);return n},ze=function(e,t,n){return n?Object(We.a)(e):e.filter((function(e){return!t.includes(e)}))},Be=[73,76,79],Ve=[105,108,111],He=[48,49],De=[34,39,40,41,44,46,47,58,59,60,62,91,92,93,96,123,124,125,126],Ge=Ue(65,90),qe=Ue(97,122),Ke=Ue(48,57),Je=Ue(33,47).concat(Ue(58,64)).concat(Ue(91,96)).concat(Ue(123,126)),Qe=n(82),Ye=function(){var e=Te(),t=Object(Ne.a)({defaultValues:Ee}),n=t.register,a=t.handleSubmit,s=t.watch,l=t.reset,d=Object(Qe.a)().t;Object(r.useEffect)((function(){var t=localStorage.getItem("savedSettings");t&&(l(function(e){try{var t=JSON.parse(e);return new Ce(t)}catch(n){return console.log("Stored Value was not an object"),console.log("Loading default values"),console.log("Also Removing Stored Value"),ke(),Ee}}(t)),e(Me.setSettingsSaved(!0)))}),[l,e]);var u=s(["advancedSettings.maxLength","passwordLength"]);return Object(i.jsxs)("form",{id:"password-form",className:"col-span-2 md:col-span-1",onSubmit:a((function(t){e(Me.setGeneratedPW(function(e){var t=e.includeLowercase,n=e.includeNumbers,r=e.includeUppercase,a=e.passwordLength,s=e.includeSymbols,c=e.advancedSettings,i=[],o=ze(qe,Ve,c.includeSimilarCharacters),l=ze(Ge,Be,c.includeSimilarCharacters),d=ze(Ke,He,c.includeSimilarCharacters),u=ze(Je,De,c.includeAmbiguousSymbols);t&&(i=i.concat(o)),r&&(i=i.concat(l)),n&&(i=i.concat(d)),s&&(i=i.concat(u));for(var b=[],m=0;m<a;m++){var h=i[Math.floor(Math.random()*i.length)];b.push(String.fromCharCode(h))}return b.join("")}(t))),t.advancedSettings.saveForNextTime&&(!function(e){var t=Object(c.a)({},e);t.advancedSettings.saveForNextTime=!1;var n=JSON.stringify(t);localStorage.setItem("savedSettings",n)}(t),e(Me.setSettingsSaved(!0)))})),children:[Object(i.jsxs)("label",{htmlFor:"characterNum",children:[d("form.password_length"),": ",u[1]]}),Object(i.jsx)(o,{className:"my-2",children:Object(i.jsx)(h,Object(c.a)({htmlID:"characterNum",min:6,max:u[0],step:1},n("passwordLength",{min:6,max:90})))}),Object(i.jsx)("div",{children:d("form.settings_label")}),Object(i.jsx)(o,{className:"my-2",children:Object(i.jsx)(b,Object(c.a)({htmlId:"uppercase",label:d("form.include_uppercase")},n("includeUppercase")))}),Object(i.jsx)(o,{className:"my-2",children:Object(i.jsx)(b,Object(c.a)({htmlId:"lowercase",label:d("form.include_lowercase")},n("includeLowercase")))}),Object(i.jsx)(o,{className:"my-2",children:Object(i.jsx)(b,Object(c.a)({htmlId:"numbers",label:d("form.include_numbers")},n("includeNumbers")))}),Object(i.jsx)(o,{className:"my-2",children:Object(i.jsx)(b,Object(c.a)({htmlId:"symbols",label:d("form.include_symbols")},n("includeSymbols")))}),Object(i.jsxs)(ye,{label:d("form.advanced_settings.title"),children:[Object(i.jsx)("div",{children:Object(i.jsx)(o,{children:Object(i.jsx)(we,Object(c.a)({leftDisabled:"24"===u[0].toString(),rightDisabled:"90"===u[0].toString(),label:d("form.advanced_settings.max_length"),htmlId:"maxLengthId",max:90,min:24},n("advancedSettings.maxLength",{min:24,max:90})))})}),Object(i.jsx)("div",{children:Object(i.jsxs)(o,{children:[Object(i.jsx)(b,Object(c.a)({htmlId:"similarChars",label:d("form.advanced_settings.similar_symbols")},n("advancedSettings.includeSimilarCharacters"))),Object(i.jsx)("small",{children:"( e.g. i, l, 1, L, o, 0, O )"})]})}),Object(i.jsx)("div",{children:Object(i.jsxs)(o,{children:[Object(i.jsx)(b,Object(c.a)({htmlId:"ambiguousSymbols",label:d("form.advanced_settings.ambiguous_symbols")},n("advancedSettings.includeAmbiguousSymbols"))),Object(i.jsx)("small",{children:"( { } [ ] ( ) / \\ ' \" ` ~ , | ; : . < > )"})]})}),Object(i.jsx)("div",{children:Object(i.jsx)(o,{children:Object(i.jsx)(b,Object(c.a)({htmlId:"saveForNextTime",label:d("form.advanced_settings.save_for_next_time")},n("advancedSettings.saveForNextTime")))})})]})]})},$e=n(40),Xe=n(83),Ze=function(e){var t=e.visible,n=e.hideCardFunc,a=Object(r.useRef)(null),s=d(),c=Object(Qe.a)().t;return s?Object(i.jsx)(Xe.a,{nodeRef:a,in:t,timeout:250,classNames:"fade",unmountOnExit:!0,children:Object(i.jsx)("div",{ref:a,children:Object(i.jsx)(o,{children:Object(i.jsxs)("div",{className:"flex justify-between items-center",children:[Object(i.jsx)("h3",{children:c("output.saved_settings_card.heading")}),Object(i.jsx)(v,{className:"ml-1 w-24 lg:w-48",onClick:n,children:c("output.saved_settings_card.reset")})]})})})}):Object(i.jsx)(i.Fragment,{})},et=function(e){return e.settings.generatedPW},tt=function(e){return e.settings.theme},nt=function(e){return e.settings.settingsSaved},rt=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Te(),c=Pe(et),d=Pe(nt),u=Object(Qe.a)().t;return Object(i.jsxs)("div",{className:"col-span-2 md:col-span-1 text-center",children:[Object(i.jsx)("p",{children:u("output.title")}),Object(i.jsxs)(o,{className:"my-2",children:[Object(i.jsx)("div",{className:"click-gen-header border-2 p-2 rounded-md",children:c?Object(i.jsx)("p",{children:c}):Object(i.jsx)("h3",{children:u("output.click_prompt")})}),Object(i.jsx)($e.CopyToClipboard,{onCopy:function(){return a(!0),void setTimeout((function(){return a(!1)}),2e3)},text:c||"",children:Object(i.jsx)(v,{disabled:!c,className:"mt-4 w-full",children:u("output.copy_to_clipboard")})}),Object(i.jsxs)("div",{children:[n?u("output.copied"):"","\xa0"]}),Object(i.jsx)(v,{onClick:function(e){s(Me.resetGeneratedPW()),e.currentTarget.blur(),a(!1)},className:"mt-4 w-full",children:u("output.reset_prompt")})]}),Object(i.jsx)(Ze,{visible:d,hideCardFunc:function(){s(Me.setSettingsSaved(!1)),ke()}})]})},at=n(29),st=n.n(at),ct=function(e,t,n){var r=document.querySelectorAll(e);r&&r.forEach((function(e){var r=e.style[t];r&&function(e,t,n){e.setAttribute("data-pw-".concat(t),n)}(e,t,r);var a=window.getComputedStyle(e)[t];e.style[t]="".concat(n(parseFloat(a)),"px")}))},it=function(e,t){var n=document.querySelectorAll(e);n&&n.forEach((function(e){var n=e.getAttribute("data-pw-".concat(t));null===n?e.style[t]="":(!function(e,t){e.removeAttribute("data-pw-".concat(t))}(e,t),e.style[t]=n)}))},ot="[class*='right-'].fixed",lt=function(){document.body.style.overflow="",it("body","paddingRight"),it(ot,"paddingRight")},dt=function(e){Object(r.useEffect)((function(){var t,n=function(){var e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}();return e?(t=n,document.body.style.overflow="hidden",t>0&&(ct("body","paddingRight",(function(e){return e+t})),ct(ot,"paddingRight",(function(e){return e+t})))):lt(),function(){return lt()}}),[e])};st.a.setAppElement("#root");var ut=function(e){var t=e.isOpen,n=e.children,r=e.contentLabel,a=e.header,s=e.wipeUrlHash,c=void 0!==s&&s,o=e.overlayRef,l=e.contentRef,d=e.onRequestClose;return dt(t),Object(i.jsxs)(st.a,{contentLabel:r,isOpen:t,overlayRef:o,contentRef:l,onRequestClose:d,overlayClassName:"MyModal__Overlay",className:"MyModal__Content",closeTimeoutMS:250,children:[Object(i.jsxs)("div",{className:"flex MyModal__Header relative",children:[a,Object(i.jsx)("button",{className:"MyModal__Close my-auto",onClick:function(e){d&&d(e),c&&window.history.replaceState(null,""," ")},children:Object(i.jsx)(ne,{title:"Close This Modal",height:18,width:18})})]}),Object(i.jsx)("div",{className:"MyModal__Body relative overflow-y-auto flex-auto",children:n})]})},bt=n(84),mt=function(){var e={target:"_blank",rel:"noopener noreferrer"},t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],o=function(){return s(!a)},d=Object(Qe.a)().t;return Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"MyModal__Trigger",onClick:o,children:d("about.click_trigger")}),Object(i.jsxs)(ut,{contentLabel:d("about.modal_title"),onRequestClose:o,isOpen:a,header:Object(i.jsx)("h2",{className:"text-center w-full",children:d("about.modal_title")}),children:[Object(i.jsx)("p",{className:"mb-4",children:d("about.p_1")}),Object(i.jsx)("p",{className:"mb-4",children:d("about.p_2")}),Object(i.jsx)("p",{className:"mb-4",children:Object(i.jsx)(bt.a,{i18nKey:"about.p_3",components:{a:Object(i.jsx)("a",Object(c.a)({href:"https://github.com/SamuelQuinones/password-generator"},e))}})}),Object(i.jsx)("p",{className:"mb-8",children:Object(i.jsx)(bt.a,{i18nKey:"about.p_4",components:{a:Object(i.jsx)("a",Object(c.a)({href:"https://www.instagram.com/em_enchanted_emporium/"},e))}})}),Object(i.jsx)("h2",{className:"mb-4",children:Object(i.jsx)("em",{children:d("about.general_info")})}),Object(i.jsx)("p",{className:"mb-8",children:"More info coming soon..."}),Object(i.jsx)("h2",{className:"mb-4",children:Object(i.jsx)("em",{children:d("about.how_it_works")})}),Object(i.jsx)("p",{className:"mb-4",children:"More info coming soon..."})]})]})},ht=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=function(){return a(!n)},o=Object(Qe.a)().t,d={strong:Object(i.jsx)("strong",{}),em:Object(i.jsx)("em",{}),code:Object(i.jsx)("code",{})};return Object(i.jsxs)("div",{className:"inline-block",children:[Object(i.jsx)("button",{className:"MyModal__Trigger",onClick:s,children:o("security.click_trigger")}),Object(i.jsxs)(ut,{wipeUrlHash:!0,contentLabel:o("security.content_label"),onRequestClose:s,isOpen:n,header:Object(i.jsx)("h2",{className:"text-center w-full",children:o("security.modal_title")}),children:[Object(i.jsx)("p",{className:"mb-4",children:o("security.p_1")}),Object(i.jsx)("p",{className:"mb-4",children:Object(i.jsx)(bt.a,{i18nKey:"security.p_2",components:{a:Object(i.jsx)("a",{href:"#settings"})}})}),Object(i.jsx)("p",{className:"mb-4",children:o("security.p_3")}),Object(i.jsx)("p",{className:"mb-4",children:Object(i.jsx)(bt.a,{i18nKey:"security.p_4",components:Object(c.a)({a:Object(i.jsx)("a",{href:"#settings"})},d)})}),Object(i.jsx)("p",{className:"mb-4",children:Object(i.jsx)(bt.a,{i18nKey:"security.p_5",components:d})}),Object(i.jsx)("p",{className:"mb-4",children:Object(i.jsx)(bt.a,{i18nKey:"security.p_6",components:d})}),Object(i.jsx)("p",{className:"mb-4",children:Object(i.jsx)(bt.a,{i18nKey:"security.p_7",components:Object(c.a)({u:Object(i.jsx)("u",{style:{overflowWrap:"break-word"}})},d)})}),Object(i.jsx)("p",{className:"mb-4",children:Object(i.jsx)(bt.a,{i18nKey:"security.p_8",components:d})}),Object(i.jsx)("p",{className:"mb-8",children:o("security.p_9")}),Object(i.jsx)("h2",{id:"settings",className:"mb-4",children:Object(i.jsx)("em",{children:o("security.settings")})}),Object(i.jsx)("p",{children:o("security.clarify")})]})]})},jt=function(){var e=Object(Qe.a)().t;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("main",{className:"flex-auto"}),Object(i.jsxs)("footer",{className:"footer p-3 text-center text-sm",children:[Object(i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 mb-2",children:[Object(i.jsxs)("div",{children:[e("footer.version")," ",Object(i.jsx)("strong",{children:"1.0.0"})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("a",{href:"https://github.com/SamuelQuinones/password-generator",target:"_blank",rel:"noopener noreferrer",children:[e("footer.view_source")," ",Object(i.jsx)(W,{})]})}),Object(i.jsx)(mt,{})]}),Object(i.jsxs)("p",{className:"mb-1",children:["Copytight \xa9 2021, all rights reserved. Any password generated on this site is ",Object(i.jsx)("strong",{children:"NOT"})," stored in any capacity."]}),e("footer.more_security")," ",Object(i.jsx)(ht,{}),"."]})]})},pt=function(e){var t=e.usingTheme,n=e.theme,a=Object(r.useRef)(null),s=Object(r.useRef)(null),o={classNames:t?"slide-down":"slide-up",timeout:250,unmountOnExit:!0};return Object(i.jsxs)("div",{className:"flex flex-col items-center justify-center changer-wrapper text-center overflow-hidden relative",children:[Object(i.jsx)(Xe.a,Object(c.a)(Object(c.a)({nodeRef:a,in:t},o),{},{children:Object(i.jsx)("div",{className:"absolute",ref:a,children:Object(i.jsx)(je,{className:"bi-no-va",title:"Using ".concat(n," Theme"),width:20,height:20})})})),Object(i.jsx)(Xe.a,Object(c.a)(Object(c.a)({nodeRef:s,in:!t},o),{},{children:Object(i.jsx)("div",{className:"absolute",ref:s,children:Object(i.jsx)(le,{className:"bi-no-va",title:"Switch to ".concat(n," Theme"),width:20,height:20})})}))]})},ft=["pink","red","blue","teal","cyan"],gt=function(e){switch(e){case"red":return"red";case"blue":return"blue";case"teal":return"teal";case"cyan":return"cyan";default:return"pink"}},Ot=function(){var e=Te(),t=Pe(tt),n=Object(Qe.a)().t,a=Object(r.useState)(!1),s=Object(l.a)(a,2),c=s[0],o=s[1],d=Object(r.useRef)(null),u=function(e){(function(e,t){if(!t)return!1;var n=e.target;return t.contains(n)})(e,d.current)||o(!1)};return Object(r.useEffect)((function(){return document.body.addEventListener("mousedown",u),function(){document.body.removeEventListener("mousedown",u)}}),[]),Object(r.useEffect)((function(){var t=localStorage.getItem("color-theme"),n=gt(t);e(Me.setTheme(n))}),[e]),Object(i.jsxs)("div",{ref:d,className:"fixed right-2 bottom-2 theme-changer-master",children:[Object(i.jsxs)("button",{className:"theme-toggle-button block ml-auto ".concat(c?"open":"closed"),onClick:function(){return o(!c)},children:[Object(i.jsx)("span",{className:"hidden md:inline-block",children:n("select_theme")}),Object(i.jsx)("span",{className:"inline-block md:hidden",children:Object(i.jsx)(ve,{title:n("select_theme"),height:20,width:20})})]}),Object(i.jsx)(p.UnmountClosed,{isOpened:c,children:ft.map((function(n,r){return Object(i.jsxs)("label",{htmlFor:"radio-".concat(n),children:[Object(i.jsx)("input",{className:"theme-changer-".concat(n," sr-only"),id:"radio-".concat(n),name:"theme",type:"radio",value:n,onChange:function(n){var r=function(e,t){var n=gt(e.currentTarget.value);if(n===t)return t;var r=document.body.classList;return r.add(n),r.remove(t),localStorage.setItem("color-theme",n),n}(n,t);e(Me.setTheme(r))},checked:t===n}),Object(i.jsx)(pt,{theme:n,usingTheme:t===n})]},r)}))})]})};var vt=function(){var e=Object(Qe.a)().t;return Object(r.useEffect)((function(){document.body.classList.add("animate-class")}),[]),Object(i.jsxs)("div",{className:"App container mx-auto",children:[Object(i.jsx)("h1",{className:"mb-10 text-center",children:e("app_title")}),Object(i.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[Object(i.jsx)(Ye,{}),Object(i.jsx)(rt,{}),Object(i.jsx)(v,{form:"password-form",type:"submit",className:"mt-3 col-span-2 text-lg",children:e("generate_password")})]}),Object(i.jsx)(Ot,{}),Object(i.jsx)(jt,{})]})},yt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var wt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},_t=Object(Le.a)({reducer:{settings:Fe},devTools:!1}),Nt=n(31),St=n(12),Ct=n(42),Et={en:{translation:n(43)},es:{translation:n(44)}};Nt.a.use(Ct.a).use(St.e).init({debug:!1,fallbackLng:"en",interpolation:{escapeValue:!1},resources:Et});Nt.a;var kt=document.getElementById("root"),It=Object(i.jsx)(Ie.a,{store:_t,children:Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(vt,{})})});kt.hasChildNodes()?Object(s.hydrate)(It,kt):Object(s.render)(It,kt),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");yt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):xt(t,e)}))}}(),wt()}},[[81,1,2]]]);