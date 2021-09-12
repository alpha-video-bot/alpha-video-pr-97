"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[610],{3146:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(7294),r=a(6010),n=a(3905),s=a(4973),i=a(6742),m=a(9306),c=a(7933),o=a(1217),d=a(6146),u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,E=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=e.children,v=e.frontMatter,f=e.metadata,N=e.truncated,_=e.isBlogPostPage,k=void 0!==_&&_,Z=f.date,T=f.formattedDate,w=f.permalink,P=f.tags,M=f.readingTime,I=f.title,L=f.editUrl,x=v.author,y=v.image,U=v.keywords,A=v.author_url||v.authorURL,C=v.author_title||v.authorTitle,R=v.author_image_url||v.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(o.Z,{keywords:U,image:y}),l.createElement("article",{className:k?void 0:"margin-bottom--xl"},(p=k?"h1":"h2",l.createElement("header",null,l.createElement(p,{className:u},k?I:l.createElement(i.Z,{to:w},I)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:Z},T),M&&l.createElement(l.Fragment,null," \xb7 ",E(M))),l.createElement("div",{className:"avatar margin-vert--md"},R&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:A},l.createElement("img",{src:R,alt:x})),l.createElement("div",{className:"avatar__intro"},x&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:A},x)),l.createElement("small",{className:"avatar__subtitle"},C)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:c.Z},b)),(P.length>0||N)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[h]=k,t))},P.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return l.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),k&&L&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:L})),!k&&N&&l.createElement("div",{className:"col text--right"},l.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+I},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(7294),r=a(6010),n=a(6742),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",c="sidebarItem_2UVv",o="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",u=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:c},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},9404:function(e,t,a){a.r(t);var l=a(7294),r=a(6402),n=a(3146),s=a(6742),i=a(5601),m=a(4973),c=a(9306);t.default=function(e){var t,a=e.metadata,o=e.items,d=e.sidebar,u=a.allTagsPath,g=a.name,h=a.count,p=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(h),tagName:g});return l.createElement(r.Z,{title:E,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("aside",{className:"col col--3"},l.createElement(i.Z,{sidebar:d})),l.createElement("main",{className:"col col--7"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(s.Z,{href:u},l.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return l.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},l.createElement(t,null))}))))))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(7294),r=a(4973),n=a(7462),s=a(3366),i=a(6010),m="iconEdit_2_ui",c=["className"],o=function(e){var t=e.className,a=(0,s.Z)(e,c);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.createElement(o,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);