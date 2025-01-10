(function(){"use strict";var n={4306:function(n,t,o){var e=o(5130),r=o(6768);function c(n,t,o,e,c,i){const u=(0,r.g2)("NavBar");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(u,{onNavButtonClick:i.navButtonClick},null,8,["onNavButtonClick"]),((0,r.uX)(),(0,r.Wv)((0,r.$y)(i.currentComponent)))],64)}const i={class:"bg-dark text-white p-3 c-navbar"},u={class:"right-section"};function a(n,t,o,e,c,a){return(0,r.uX)(),(0,r.CE)("div",i,[t[4]||(t[4]=(0,r.Lk)("button",{class:"c-navbar-label"},"aut0's site",-1)),(0,r.Lk)("div",u,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=n=>a.buttonClick(0)),class:"c-btn-spacing"},"home"),(0,r.Lk)("button",{onClick:t[1]||(t[1]=n=>a.buttonClick(1)),class:"c-btn-spacing"},"projects"),(0,r.Lk)("button",{onClick:t[2]||(t[2]=n=>a.buttonClick(2)),class:"c-btn-spacing"},"blog"),(0,r.Lk)("button",{onClick:t[3]||(t[3]=n=>a.buttonClick(3))},"contact")])])}var l={name:"NavBar",methods:{buttonClick(n){this.$emit("navButtonClick",n)}}},s=o(1241);const f=(0,s.A)(l,[["render",a],["__scopeId","data-v-f79dc464"]]);var v=f,p=o(4232);const d={key:0},h={key:1};function C(n,t,o,e,c,i){return(0,r.uX)(),(0,r.CE)(r.FK,null,[t[1]||(t[1]=(0,r.Lk)("h1",null,"home",-1)),c.fileContent?((0,r.uX)(),(0,r.CE)("div",d,[(0,r.Lk)("pre",null,(0,p.v_)(c.fileContent),1)])):((0,r.uX)(),(0,r.CE)("div",h,t[0]||(t[0]=[(0,r.Lk)("p",null,"Loading file content...",-1)])))],64)}var b={name:"HomePage",data(){return{fileContent:null}},mounted(){this.loadFileContent()},methods:{async loadFileContent(){try{const n=await fetch("/intro.txt");if(!n.ok)throw new Error("Failed to fetch file");const t=await n.text();this.fileContent=t}catch(n){console.error(n),this.fileContent="Error loading file."}}}};const g=(0,s.A)(b,[["render",C]]);var k=g;function m(n,t,o,e,c,i){return(0,r.uX)(),(0,r.CE)("h2",null,"projects")}var w={name:"ProjectsPage",props:{msg:String}};const y=(0,s.A)(w,[["render",m]]);var L=y;const E={class:"hello"};function O(n,t,o,e,c,i){return(0,r.uX)(),(0,r.CE)("div",E,t[0]||(t[0]=[(0,r.Lk)("h1",null,"blog",-1)]))}var P={name:"BlogPage",props:{msg:String}};const j=(0,s.A)(P,[["render",O],["__scopeId","data-v-f0e4ae30"]]);var B=j;function X(n,t,o,e,c,i){return(0,r.uX)(),(0,r.CE)("h2",null,"contact")}var x={name:"ContactPage",props:{msg:String}};const A=(0,s.A)(x,[["render",X]]);var F=A,_={name:"App",components:{NavBar:v,Home:k,Projects:L,Blog:B,Contact:F},data(){return{currentPage:0,componentList:[k,L,B,F]}},computed:{currentComponent(){return this.componentList[this.currentPage]}},methods:{navButtonClick(n){this.currentPage=n}}};const N=(0,s.A)(_,[["render",c]]);var S=N;(0,e.Ef)(S).mount("#app")}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var c=t[e]={exports:{}};return n[e].call(c.exports,c,c.exports,o),c.exports}o.m=n,function(){var n=[];o.O=function(t,e,r,c){if(!e){var i=1/0;for(s=0;s<n.length;s++){e=n[s][0],r=n[s][1],c=n[s][2];for(var u=!0,a=0;a<e.length;a++)(!1&c||i>=c)&&Object.keys(o.O).every((function(n){return o.O[n](e[a])}))?e.splice(a--,1):(u=!1,c<i&&(i=c));if(u){n.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}c=c||0;for(var s=n.length;s>0&&n[s-1][2]>c;s--)n[s]=n[s-1];n[s]=[e,r,c]}}(),function(){o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,{a:t}),t}}(),function(){o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,c,i=e[0],u=e[1],a=e[2],l=0;if(i.some((function(t){return 0!==n[t]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(a)var s=a(o)}for(t&&t(e);l<i.length;l++)c=i[l],o.o(n,c)&&n[c]&&n[c][0](),n[c]=0;return o.O(s)},e=self["webpackChunkvue1"]=self["webpackChunkvue1"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[504],(function(){return o(4306)}));e=o.O(e)})();
//# sourceMappingURL=app.244787bc.js.map