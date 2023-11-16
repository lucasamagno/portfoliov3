(function(){"use strict";var e={9393:function(e,t,n){var i=n(9242),o=n(3396);function a(e,t,n,i,a,s){const l=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.j4)(l,{msg:"Welcome to Your Vue.js App"})}var s=n(4870),l=n(7139);const r=["href"],c={class:"left-column"},u={class:"dates"},p={class:"right-column"},d={class:"other-titles"},v={class:"description"},m={class:"skills"};var f={__name:"WorkExperienceCard",props:{experience:{type:Object,required:!0}},setup(e){const t=e,n=(0,s.iH)(!1);return(0,o.bv)((()=>{console.log(t.experience)})),(t,i)=>((0,o.wg)(),(0,o.iD)("a",{href:e.experience.url,target:"_blank",class:"experience-card-link"},[(0,o._)("div",{class:"experience-card",onMouseover:i[2]||(i[2]=e=>n.value=!0),onMouseleave:i[3]||(i[3]=e=>n.value=!1)},[(0,o._)("div",c,[(0,o._)("p",u,(0,l.zw)(e.experience.dates),1)]),(0,o._)("div",p,[(0,o._)("h3",{class:(0,l.C_)({highlight:n.value})},(0,l.zw)(e.experience.titles[0])+" • "+(0,l.zw)(e.experience.company),3),(0,o._)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.experience.titles.slice(1),((e,t)=>((0,o.wg)(),(0,o.iD)("p",{key:t,class:"additional-title"},"• "+(0,l.zw)(e),1)))),128))]),(0,o._)("p",v,(0,l.zw)(e.experience.description),1),(0,o._)("ul",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.experience.skills,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e,class:"skill-bubble",onMouseover:i[0]||(i[0]=e=>n.value=!0),onMouseleave:i[1]||(i[1]=e=>n.value=!1)},(0,l.zw)(e),33)))),128))])])],32)],8,r))}},g=n(89);const h=(0,g.Z)(f,[["__scopeId","data-v-2920e745"]]);var w=h;const _=[{id:1,titles:["Software Engineer"],company:"Sparen Homes",dates:"2023 - Present",description:"Developing and maintaining web applications with Vue.js and Django.",skills:["Jenkins","Django","Vue.js","AWS"],url:"https://www.sparenhomes.com/"},{id:2,titles:["DevOps Engineer","Release Engineer","Business Analyst/Scrum Master"],company:"United Wholesale Mortgage",dates:"2021 - 2023",description:"Factilitating and automating software devlivery processes.",skills:["Jenkins","Octopus","Groovy","Azure"],url:"https://www.uwm.com/"},{id:3,titles:["Software Developer"],company:"Auto-Owners Insurance",dates:"2020 - 2020",description:"Building web applications using Spring MVC, Angular, and React. ",skills:["Java","Spring MVC","Angular","React"],url:"https://www.auto-owners.com/"},{id:4,titles:["System Administrator (Tech Ops)","Mathematics Tutor"],company:"Central Michigan University",dates:"2017 - 2020",description:"Tier 2 tech support. Tutoring with calculus and statistics.",skills:["Calculus","Statistics","MacOS","Permissions"],url:"https://www.cmich.edu/"},{id:5,titles:["Intern","Campus Ambassador"],company:"United Wholesale Mortgage",dates:"2019 - 2020",description:"Marketing the company",skills:["Poop","and","BIGGER","POOP"],url:"https://www.uwm.com/"},{id:6,titles:["Help Desk Analyst"],company:"Apple",dates:"2018 - 2019",description:"Help dumb people",skills:["Poop","and","smaller","poop"],url:"https://www.apple.com/"}],b=[{id:1,title:"mohijazi.com",image:n(7526),description:"Portfolio website built for Regional Safety Manager at Bosch.",tools:["Vue","JavaScript","HTML","CSS","GitHub Pages"],url:"https://lucasamagno.github.io/mohijazi"},{id:2,title:"Affinity Strings",image:n(9115),description:"Website for violin studio and quartet based in Davison, Michigan.",tools:["WordPress","BlueHost"],url:"https://www.affinitystrings.com/"}],y=["href"],k={class:"left-column"},j=["src"],M={class:"right-column"},x={class:"description"},S={class:"tools"};var D={__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(e){const t=e,n=(0,s.iH)(!1);return(0,o.bv)((()=>{console.log(t.experience)})),(t,i)=>((0,o.wg)(),(0,o.iD)("a",{href:e.project.url,target:"_blank",class:"project-card-link"},[(0,o._)("div",{class:"project-card",onMouseover:i[2]||(i[2]=e=>n.value=!0),onMouseleave:i[3]||(i[3]=e=>n.value=!1)},[(0,o._)("div",k,[(0,o._)("img",{src:e.project.image,alt:"Project Image",class:"project-image"},null,8,j)]),(0,o._)("div",M,[(0,o._)("h3",{class:(0,l.C_)({highlight:n.value})},(0,l.zw)(e.project.title),3),(0,o._)("p",x,(0,l.zw)(e.project.description),1),(0,o._)("ul",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.project.tools,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e,class:"tool-bubble",onMouseover:i[0]||(i[0]=e=>n.value=!0),onMouseleave:i[1]||(i[1]=e=>n.value=!1)},(0,l.zw)(e),33)))),128))])])],32)],8,y))}};const H=(0,g.Z)(D,[["__scopeId","data-v-211eba6f"]]);var O=H,A=n(4294);const E=e=>((0,o.dD)("data-v-0d737afe"),e=e(),(0,o.Cn)(),e),C={class:"container"},P={class:"sidebar"},W=E((()=>(0,o._)("section",{id:"hero"},[(0,o._)("h1",null,"Lucas A. Magno"),(0,o._)("h3",null,"Software Engineer / DevOps Engineer"),(0,o._)("p",null,"I build user friendly software solutions and streamline development workflows.")],-1))),I={id:"contact"},z=E((()=>(0,o._)("h2",null,"Work with me",-1))),U=E((()=>(0,o._)("p",null,"Send me a message and lets chat!",-1))),V=["onSubmit"],q={class:"form-group"},T={class:"form-group"},Y={class:"form-group"},F=E((()=>(0,o._)("div",{class:"form-group"},[(0,o._)("button",{type:"submit"},"Send Message")],-1))),L=(0,o.uE)('<div class="social-media-links" data-v-0d737afe><a href="https://github.com/yourusername" target="_blank" class="icon-link" data-v-0d737afe><i class="fab fa-github" data-v-0d737afe></i></a><a href="https://www.linkedin.com/in/yourusername" target="_blank" class="icon-link" data-v-0d737afe><i class="fab fa-linkedin" data-v-0d737afe></i></a></div>',1),R={class:"content"},Z=E((()=>(0,o._)("section",{id:"about"},[(0,o._)("h2",null,"About Me"),(0,o._)("p",null,"In 2014, as I was developing new skills with Adobe Premiere, After Effects, and Cinema 4D, it felt like a natural progression to embark on my development journey with my first programming class in with C++. Fast-forward to today, and I’ve built a large and very diverse skill set while working at companies such as Apple, United Wholesale Mortgage, a start-up, and more."),(0,o._)("p",null,"My main focus these days is building Sparen Homes along with freelance work."),(0,o._)("p",null,"When I'm not on my computer, I'm usually outside, listening to music, or traveling with my girlfriend.")],-1))),B=E((()=>(0,o._)("hr",null,null,-1))),K={id:"experience"},G=E((()=>(0,o._)("h2",null,"Work Experience",-1))),J=E((()=>(0,o._)("div",{class:"experience-button"},[(0,o._)("a",{href:"https://drive.google.com/file/d/1EMLM_gmHWMIMxVqmUj3rH782DMLb7t9v/view?usp=sharing",target:"_blank",class:"resume-button"},"View Full Resume")],-1))),Q=E((()=>(0,o._)("hr",null,null,-1))),N={id:"projects"},X=E((()=>(0,o._)("h2",null,"Projects",-1)));var $={__name:"HelloWorld",setup(e){const t=(0,s.iH)(""),n=(0,s.iH)(""),a=(0,s.iH)("");function l(){A.ZP.send("service_izwy97u","template_3ke76hi",{from_name:t.value,subject:n.value,message:a.value}).then((e=>{console.log("SUCCESS!",e.status,e.text),t.value="",n.value="",a.value=""}),(e=>{console.error("EMAIL FAILED...",e)}))}const r=()=>{l(t.value,n.value,a.value)};return(e,l)=>((0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",P,[W,(0,o._)("section",I,[z,U,(0,o._)("form",{class:"contact-form",onSubmit:(0,i.iM)(r,["prevent"]),ref:"form"},[(0,o._)("div",q,[(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),placeholder:"Your Email",required:""},null,512),[[i.nr,t.value]])]),(0,o._)("div",T,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),placeholder:"Subject",required:""},null,512),[[i.nr,n.value]])]),(0,o._)("div",Y,[(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":l[2]||(l[2]=e=>a.value=e),placeholder:"Your Message",required:""},null,512),[[i.nr,a.value]])]),F],40,V)]),L]),(0,o._)("div",R,[Z,B,(0,o._)("section",K,[G,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(_),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(w,{experience:e},null,8,["experience"])])))),128)),J]),Q,(0,o._)("section",N,[X,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(b),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(O,{project:e},null,8,["project"])])))),128))])])]))}};const ee=(0,g.Z)($,[["__scopeId","data-v-0d737afe"]]);var te=ee,ne={name:"App",components:{HelloWorld:te}};const ie=(0,g.Z)(ne,[["render",a]]);var oe=ie;A.ZP.init("EnT3Qfe4jqEM4H-Fl"),(0,i.ri)(oe).mount("#app")},9115:function(e,t,n){e.exports=n.p+"img/affinitystrings.2caf999c.png"},7526:function(e,t,n){e.exports=n.p+"img/mohijazi.2f432ecf.png"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var s=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],a=e[u][2];for(var l=!0,r=0;r<i.length;r++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[r])}))?i.splice(r--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/portfoliov3/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,s=i[0],l=i[1],r=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(r)var u=r(n)}for(t&&t(i);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkportfoliov3"]=self["webpackChunkportfoliov3"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9393)}));i=n.O(i)})();
//# sourceMappingURL=app.5079d122.js.map