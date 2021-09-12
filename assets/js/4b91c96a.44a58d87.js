"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5980:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={id:"doc4",title:"Alexa console",sidebar_label:"Alexa console"},l=void 0,s={unversionedId:"doc4",id:"doc4",isDocsHomePage:!1,title:"Alexa console",description:"Now we have the domain we can head over to the Alexa developer console. We can access it by clicking here.",source:"@site/docs/doc4.md",sourceDirName:".",slug:"/doc4",permalink:"/docs/doc4",editUrl:"https://github.com/unofficial-skills/alpha-video/edit/setup/docs/doc4.md",version:"current",lastUpdatedBy:"andrewstech",lastUpdatedAt:1631463283,formattedLastUpdatedAt:"9/12/2021",frontMatter:{id:"doc4",title:"Alexa console",sidebar_label:"Alexa console"},sidebar:"someSidebar",previous:{title:"Install",permalink:"/docs/doc3"},next:{title:"Invocation name",permalink:"/docs/doc5"}},d=[],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now we have the domain we can head over to the Alexa developer console. We can access it by clicking ",(0,r.kt)("a",{parentName:"p",href:"https://developer.amazon.com/alexa/console/ask"},"here"),".\nMake sure to sign in with the amazon account you use with alexa. Once signed in click the blue create skill button. Enter a skill name this can be anything. Make sure custom model and Provision your own are selected."),(0,r.kt)("p",null,"On the next page choose start from scratch.  On the left side click on endpoints. Now scroll down and click on https. Now in the Default Region box paste your domain. Make sure it starts with https. Add /api to the end of the domain. "),(0,r.kt)("p",null,"The domain should now look like this ",(0,r.kt)("inlineCode",{parentName:"p"},"https://pretty-mayfly-37.loca.lt/api")," . In the dropdown box below make sure to select  ",(0,r.kt)("inlineCode",{parentName:"p"},"My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority"),".\nOnce done click the save endpoints button. Now on the left click on interfaces. On the interfaces page turn on audio player and video app then the save interfaces button at the top."),(0,r.kt)("p",null,"Now on the left click Interaction Model this will open a small menu on the side. Click JSON Editor this will take you to the Editor page. "),(0,r.kt)("p",null,"We now need to upload our interaction.json file, currently only English, German, Italian and Spanish are avalible. Click in the box and delete all the text."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using windows you can press CTRL + A to select all the text the delete key to remove it."))),(0,r.kt)("p",null,"Now lets copy the new interaction.json file. Click ",(0,r.kt)("a",{parentName:"p",href:"https://download.andrewstech.me/projects/alpha-video/"},"here")," to view and copy the new code. Once copyed go back to the JSON Editor and paste it in. Once you have pasted it in scroll to the top and click save model."))}u.isMDXComponent=!0}}]);