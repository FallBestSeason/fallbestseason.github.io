(function(){"use strict";var t={629:function(t,e,a){var n=a(751),r=a(641);function o(t,e,a,n,o,c){const i=(0,r.g2)("NavBar");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(i,{onNavButtonClick:c.navButtonClick},null,8,["onNavButtonClick"]),((0,r.uX)(),(0,r.Wv)((0,r.$y)(c.currentComponent)))],64)}var c=a(33);const i={class:"bg-dark text-white p-3 cNavBar"},s={class:"navBtnContainer"},u=["onClick"];function l(t,e,a,n,o,l){return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("button",{class:"cNavBarLabel",onClick:e[0]||(e[0]=t=>l.buttonClick(0))},"aut0's site"),(0,r.Lk)("div",s,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.buttons,((t,e)=>((0,r.uX)(),(0,r.CE)("button",{key:e,class:(0,c.C4)([{active:e===o.currentPage},"cNavBtnSpacing"]),onClick:t=>l.buttonClick(e)},(0,c.v_)(t.text),11,u)))),128))])])}var d={name:"NavBar",data(){return{currentPage:0,buttons:[{id:0,text:"home"},{id:0,text:"projects"},{id:0,text:"contact"}]}},methods:{buttonClick(t){this.currentPage=t,this.$emit("navButtonClick",t)}}},v=a(262);const h=(0,v.A)(d,[["render",l],["__scopeId","data-v-1ca42dd8"]]);var m=h;const b={class:"cCen text-light"};function p(t,e,a,n,o,c){return(0,r.uX)(),(0,r.CE)("div",b,e[0]||(e[0]=[(0,r.Lk)("img",{class:"cHeadshot bg-dark cBox",src:"/homeAssets/headshot.jpg",alt:"headshot loading..."},null,-1),(0,r.Lk)("p",{class:"bg-dark cBox cHomeText"},[(0,r.eW)(" hello! I'm autumn or aut0, a programmer / IT professional / massive bike nerd based out of southeast MI "),(0,r.Lk)("br"),(0,r.Lk)("br"),(0,r.eW)(" This site contains a portfolio of projects and contact information if you need to reach me. "),(0,r.Lk)("br"),(0,r.Lk)("br"),(0,r.eW)(" I wrote the site from scratch using vue.js"),(0,r.Lk)("br"),(0,r.eW)(" you can find out more about it under the projects tab. "),(0,r.Lk)("br"),(0,r.Lk)("br"),(0,r.eW)(" If you can read this I am looking for work! "),(0,r.Lk)("br"),(0,r.eW)(" Please check out the projects tab and grab my resume from the contact tab! ")],-1)]))}var f={name:"HomePage"};const g=(0,v.A)(f,[["render",p],["__scopeId","data-v-e3119b3a"]]);var k=g;function C(t,e,a,n,o,c){return(0,r.uX)(),(0,r.Wv)((0,r.$y)(c.currentProject),{onProjectTileClick:c.projectTileClick},null,40,["onProjectTileClick"])}const j={class:"cCen"},I=["onClick"],y=["src"],L={class:"hItem"};function P(t,e,a,n,o,i){return(0,r.uX)(),(0,r.CE)("div",j,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.cards,((t,e)=>((0,r.uX)(),(0,r.CE)("div",{key:e,onClick:t=>i.projectTileClick(e),class:"hContainer cTile bg-dark"},[(0,r.Lk)("img",{class:"cImage hItem",src:t.image,alt:"thumbnail loading..."},null,8,y),(0,r.Lk)("div",L,[(0,r.Lk)("h3",null,(0,c.v_)(t.title),1),(0,r.Lk)("p",null,(0,c.v_)(t.description),1)])],8,I)))),128))])}var B={name:"ProjectTiles",data(){return{cards:[{image:"/cardAssets/siteLogo.png",title:"This Website",description:"tech stack breakdown"},{image:"/cardAssets/fillerIcon.png",title:"More Coming Soon",description:""}]}},methods:{projectTileClick(t){this.$emit("projectTileClick",t)}}};const T=(0,v.A)(B,[["render",P],["__scopeId","data-v-69ded280"]]);var w=T;const x={class:"cNavBar"};function E(t,e,a,n,o,c){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",x,[e[1]||(e[1]=(0,r.Lk)("div",null,null,-1)),(0,r.Lk)("button",{class:"cBackBtn",onClick:e[0]||(e[0]=(...t)=>c.backButtonClick&&c.backButtonClick(...t))},"back to projects")]),e[2]||(e[2]=(0,r.Fv)('<div class="cCen cTextWrap" data-v-26aad852><p class="bg-dark cBox" data-v-26aad852> site is written in <a href="https://vuejs.org/" data-v-26aad852>vue.js</a> and deployed using <a href="https://pages.github.com/" data-v-26aad852>github pages</a><br data-v-26aad852><br data-v-26aad852> you can view the source code on my <a href="https://github.com/FallBestSeason/FallBestSeason.github.io" data-v-26aad852>github</a><br data-v-26aad852> it&#39;s free to use under the MIT license <br data-v-26aad852><br data-v-26aad852> I chose to use vue.js for my framework because of a few factors<br data-v-26aad852> I wanted to try keeping the whole site as a single page,<br data-v-26aad852> as I had not used this design paragdigm before.<br data-v-26aad852> Vue is an excellent choice for this, learning the design structure was<br data-v-26aad852> very easy because of the simplicity of the component system. <br data-v-26aad852><br data-v-26aad852> if you&#39;re looking to make a similar site,<br data-v-26aad852> I would strongly reccomend it </p></div>',1))],64)}var _={name:"ThisWebsitePage",methods:{backButtonClick(){this.$emit("projectTileClick",Number.MAX_SAFE_INTEGER)}}};const F=(0,v.A)(_,[["render",E],["__scopeId","data-v-26aad852"]]);var X=F,A={name:"ProjectsPage",components:{ProjectTiles:w,ThisWebsite:X},data(){return{currentPage:0,componentList:[w,X]}},computed:{currentProject(){return this.componentList[this.currentPage]}},methods:{projectTileClick(t){t>=this.componentList.length-1?this.currentPage=0:this.currentPage=t+1}}};const O=(0,v.A)(A,[["render",C]]);var W=O;const N={class:"cCen"};function S(t,e,a,n,o,c){return(0,r.uX)(),(0,r.CE)("div",N,e[0]||(e[0]=[(0,r.Fv)('<div class="text-light bg-dark c-bg-pad"><div class="cItem">Contact me:</div><div class="cItem">Email: <a href="mailto:024.aut@gmail.com">024.aut@gmail.com</a></div><div class="cItem">Github: <a href="https://github.com/FallBestSeason">FallBestSeason</a></div><div class="cItem hContainer">Resume: <div class="hItem"><a href="/resume2025-public.pdf" target="_blank" rel="noopener noreferrer">.PDF </a></div><div class="hItem"><a href="/resume2025-public.rtf" target="_blank" rel="noopener noreferrer">.RTF </a></div><div class="hItem"><a href="/resume2025-public.docx" target="_blank" rel="noopener noreferrer">.DOCX</a></div></div></div>',1)]))}var $={name:"ContactPage"};const H=(0,v.A)($,[["render",S]]);var K=H,M={name:"App",components:{NavBar:m,Home:k,Projects:W,Contact:K},data(){return{currentPage:0,componentList:[k,W,K]}},computed:{currentComponent(){return this.componentList[this.currentPage]}},methods:{navButtonClick(t){this.currentPage=t}}};const R=(0,v.A)(M,[["render",o]]);var D=R;(0,n.Ef)(D).mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,o){if(!n){var c=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],o=t[l][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||c>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[s])}))?n.splice(s--,1):(i=!1,o<c&&(c=o));if(i){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,r,o]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,c=n[0],i=n[1],s=n[2],u=0;if(c.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var l=s(a)}for(e&&e(n);u<c.length;u++)o=c[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},n=self["webpackChunkaut0"]=self["webpackChunkaut0"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(629)}));n=a.O(n)})();
//# sourceMappingURL=app.932ab815.js.map