"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[971],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5192:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"doc6",title:"Pyinit_main error",sidebar_label:"Pyinit_main error"},l=void 0,p={unversionedId:"doc6",id:"doc6",isDocsHomePage:!1,title:"Pyinit_main error",description:"Se hai l'errore Fatal Python Error can't initialize time Questo \xe8 dovuto a un problema di dipendenza con libseccomp2. Assicurati che questo pacchetto sia aggiornato. Se si utilizza un raspberry pi o raspberry pi OS, utilizzare i comandi qui sotto per risolvere il problema.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/doc6.md",sourceDirName:".",slug:"/doc6",permalink:"/it/docs/doc6",editUrl:"https://translate.andrewstech.me/project/alpha-video/it",version:"current",frontMatter:{id:"doc6",title:"Pyinit_main error",sidebar_label:"Pyinit_main error"},sidebar:"someSidebar",previous:{title:"Invocation name",permalink:"/it/docs/doc5"},next:{title:"Aggiornamento automatico",permalink:"/it/docs/update"}},u=[],s={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Se hai l'errore ",(0,o.kt)("inlineCode",{parentName:"p"},"Fatal Python Error: pyinit_main: can't initialize time")," Questo \xe8 dovuto a un problema di dipendenza con libseccomp2. Assicurati che questo pacchetto sia aggiornato. Se si utilizza un raspberry pi o raspberry pi OS, utilizzare i comandi qui sotto per risolvere il problema."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wget http://ftp.us.debian.org/debian/pool/main/libs/libseccomp/libseccomp2_2.5.1-1_armhf.deb")," Questo scarica il pacchetto."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo dpkg -i libseccomp2_2.5.1-1_armhf.deb")," Questo installa il nuovo pacchetto."),(0,o.kt)("p",null,"Infine riavvia il tuo sistema con il comando ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo reboot"),". Ci\xf2 dovrebbe risolvere il problema"))}d.isMDXComponent=!0}}]);