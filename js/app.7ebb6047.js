(function(){"use strict";var e={7671:function(e,t,i){var n=i(9242),o=i(3396);function a(e,t,i,n,a,s){const r=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.j4)(r,{msg:"Welcome to Your Vue.js App"})}var s=i(4870),r=i(7139);const l=["href"],c={class:"left-column"},u={class:"dates"},p={class:"right-column"},d={class:"other-titles"},m={class:"description"},g={class:"skills"};var v={__name:"WorkExperienceCard",props:{experience:{type:Object,required:!0}},setup(e){const t=e,i=(0,s.iH)(!1);return(0,o.bv)((()=>{console.log(t.experience)})),(t,n)=>((0,o.wg)(),(0,o.iD)("a",{href:e.experience.url,target:"_blank",class:"experience-card-link"},[(0,o._)("div",{class:"experience-card",onMouseover:n[2]||(n[2]=e=>i.value=!0),onMouseleave:n[3]||(n[3]=e=>i.value=!1)},[(0,o._)("div",c,[(0,o._)("p",u,(0,r.zw)(e.experience.dates),1)]),(0,o._)("div",p,[(0,o._)("h3",{class:(0,r.C_)({highlight:i.value})},(0,r.zw)(e.experience.titles[0])+" • "+(0,r.zw)(e.experience.company),3),(0,o._)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.experience.titles.slice(1),((e,t)=>((0,o.wg)(),(0,o.iD)("p",{key:t,class:"additional-title"},"• "+(0,r.zw)(e),1)))),128))]),(0,o._)("p",m,(0,r.zw)(e.experience.description),1),(0,o._)("ul",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.experience.skills,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e,class:"skill-bubble",onMouseover:n[0]||(n[0]=e=>i.value=!0),onMouseleave:n[1]||(n[1]=e=>i.value=!1)},(0,r.zw)(e),33)))),128))])])],32)],8,l))}},f=i(89);const h=(0,f.Z)(v,[["__scopeId","data-v-2920e745"]]);var w=h;const b=[{id:1,titles:["Software Engineer"],company:"Sparen Homes",dates:"2023 - Present",description:"Developing and maintaining web applications with Vue.js and Django.",skills:["Jenkins","Django","Vue.js","AWS"],url:"https://www.sparenhomes.com/"},{id:2,titles:["DevOps Engineer","Release Engineer","Business Analyst/Scrum Master"],company:"United Wholesale Mortgage",dates:"2021 - 2023",description:"Factilitating and automating software devlivery processes.",skills:["Jenkins","Octopus","Groovy","VMWare"],url:"https://www.uwm.com/"},{id:3,titles:["Software Developer"],company:"Auto-Owners Insurance",dates:"2020 - 2020",description:"Built web applications using Spring MVC, Angular, and React.",skills:["Java","Spring MVC","Angular","React"],url:"https://www.auto-owners.com/"},{id:4,titles:["System Administrator (Tech Ops)","Mathematics Tutor"],company:"Central Michigan University",dates:"2017 - 2020",description:"Maintained critical IT infrastructure and provided advanced technical support, ensuring optimal system performance and reliability. Assisted and taught students in calculus and statistics based courses.",skills:["Calculus","Statistics","MacOS","Active Directory","Printer Support"],url:"https://www.cmich.edu/"},{id:5,titles:["Intern","Campus Ambassador"],company:"United Wholesale Mortgage",dates:"2019 - 2020",description:"Fostered strong relationships between the company and the academic community, promoting UWM's culture and opportunities on campus while gaining valuable industry insights.",skills:[".NET","C#","MVC","Acceptance Criteria","Business Analysis","Recruiting"],url:"https://www.uwm.com/"},{id:6,titles:["Help Desk Analyst"],company:"Apple",dates:"2018 - 2019",description:"Delivered efficient technical support and problem-solving solutions for a diverse range of customer inquiries regarding Apple products and services.",skills:["Technical Troubleshooting","Customer Service","Communication","Detail-Oriented","Adaptable"],url:"https://www.apple.com/"}],_=[{id:1,title:"mohijazi.com",image:i(7526),description:"Portfolio website built for Regional Safety Manager at Bosch.",tools:["Vue","JavaScript","HTML","CSS","GitHub Pages"],url:"https://lucasamagno.github.io/mohijazi"},{id:2,title:"Affinity Strings",image:i(9115),description:"Website for violin studio and quartet based in Davison, Michigan.",tools:["WordPress","BlueHost"],url:"https://www.affinitystrings.com/"},{id:3,title:" Simple Valuation",image:i(6927),description:"Senior design project while obtaining my BS in Computer Science. The platform was designed to intake financial data and determine whether a stock was a good investment or not. (Not live anymore, checkout the github repo)",tools:[".NET","Azure"],url:"https://github.com/dylanrichards/simplevaluation"}],y=["href"],k={class:"left-column"},j=["src"],M={class:"right-column"},x={class:"description"},S={class:"tools"};var D={__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(e){const t=e,i=(0,s.iH)(!1);return(0,o.bv)((()=>{console.log(t.experience)})),(t,n)=>((0,o.wg)(),(0,o.iD)("a",{href:e.project.url,target:"_blank",class:"project-card-link"},[(0,o._)("div",{class:"project-card",onMouseover:n[2]||(n[2]=e=>i.value=!0),onMouseleave:n[3]||(n[3]=e=>i.value=!1)},[(0,o._)("div",k,[(0,o._)("img",{src:e.project.image,alt:"Project Image",class:"project-image"},null,8,j)]),(0,o._)("div",M,[(0,o._)("h3",{class:(0,r.C_)({highlight:i.value})},(0,r.zw)(e.project.title),3),(0,o._)("p",x,(0,r.zw)(e.project.description),1),(0,o._)("ul",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.project.tools,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e,class:"tool-bubble",onMouseover:n[0]||(n[0]=e=>i.value=!0),onMouseleave:n[1]||(n[1]=e=>i.value=!1)},(0,r.zw)(e),33)))),128))])])],32)],8,y))}};const A=(0,f.Z)(D,[["__scopeId","data-v-211eba6f"]]);var C=A,H=i(4294);const E=e=>((0,o.dD)("data-v-71762370"),e=e(),(0,o.Cn)(),e),O={class:"container"},W=E((()=>(0,o._)("div",{id:"cursor-gradient"},null,-1))),I={class:"sidebar"},V=E((()=>(0,o._)("section",{id:"hero"},[(0,o._)("h1",null,"Lucas A. Magno"),(0,o._)("h3",null,"Software Engineer / DevOps Engineer"),(0,o._)("p",null,"I build user friendly software solutions and streamline development workflows.")],-1))),z={id:"contact"},P=E((()=>(0,o._)("h2",null,"Work with me",-1))),T=E((()=>(0,o._)("p",null,"Send me a message and lets chat!",-1))),U=["onSubmit"],q={class:"form-group"},Y={class:"form-group"},B={class:"form-group"},F=E((()=>(0,o._)("div",{class:"form-group"},[(0,o._)("button",{type:"submit",class:"button-style"},"Send Message")],-1))),L=(0,o.uE)('<div class="social-media-links" data-v-71762370><a href="https://github.com/yourusername" target="_blank" class="icon-link" data-v-71762370><i class="fab fa-github" data-v-71762370></i></a><a href="https://www.linkedin.com/in/yourusername" target="_blank" class="icon-link" data-v-71762370><i class="fab fa-linkedin" data-v-71762370></i></a></div>',1),R={class:"content"},Z=E((()=>(0,o._)("section",{id:"about"},[(0,o._)("h2",null,"About Me"),(0,o._)("p",null,"In 2014, as I was developing new skills with Adobe Premiere, After Effects, and Cinema 4D, it felt like a natural progression to embark on my development journey with my first programming class in with C++. Fast-forward to today, and I’ve built a large and very diverse skill set while working at companies such as Apple, United Wholesale Mortgage, a start-up, and more."),(0,o._)("p",null,"My main focus these days is building Sparen Homes along with freelance work."),(0,o._)("p",null,"When I'm not on my computer, I'm usually outside, listening to music, or traveling with my girlfriend.")],-1))),K=E((()=>(0,o._)("hr",null,null,-1))),J={id:"experience"},N=E((()=>(0,o._)("h2",null,"Work Experience",-1))),G=E((()=>(0,o._)("div",{class:"experience-button"},[(0,o._)("a",{href:"https://drive.google.com/file/d/1EMLM_gmHWMIMxVqmUj3rH782DMLb7t9v/view?usp=sharing",target:"_blank",class:"resume-button"},"View Full Resume")],-1))),$=E((()=>(0,o._)("hr",null,null,-1))),Q={id:"projects"},X=E((()=>(0,o._)("h2",null,"Projects",-1))),ee=E((()=>(0,o._)("div",{class:"experience-button"},[(0,o._)("a",{href:"https://lucasamagno.github.io/myblog",target:"_blank",class:"resume-button"},"View Blog")],-1)));var te={__name:"HelloWorld",setup(e){const t=(0,s.iH)(""),i=(0,s.iH)(""),a=(0,s.iH)("");function r(){H.ZP.send("service_izwy97u","template_3ke76hi",{from_name:t.value,subject:i.value,message:a.value}).then((e=>{console.log("SUCCESS!",e.status,e.text),t.value="",i.value="",a.value=""}),(e=>{console.error("EMAIL FAILED...",e)}))}const l=()=>{r(t.value,i.value,a.value)};return document.addEventListener("mousemove",(e=>{const t=document.getElementById("cursor-gradient");t.style.left=`${e.clientX}px`,t.style.top=`${e.clientY}px`,t.style.display="block"})),(e,r)=>((0,o.wg)(),(0,o.iD)("div",O,[W,(0,o._)("div",I,[V,(0,o._)("section",z,[P,T,(0,o._)("form",{class:"contact-form",onSubmit:(0,n.iM)(l,["prevent"]),ref:"form"},[(0,o._)("div",q,[(0,o.wy)((0,o._)("input",{type:"email","onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),placeholder:"Your Email",required:""},null,512),[[n.nr,t.value]])]),(0,o._)("div",Y,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=e=>i.value=e),placeholder:"Subject",required:""},null,512),[[n.nr,i.value]])]),(0,o._)("div",B,[(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":r[2]||(r[2]=e=>a.value=e),placeholder:"Your Message",required:""},null,512),[[n.nr,a.value]])]),F],40,U)]),L]),(0,o._)("div",R,[Z,K,(0,o._)("section",J,[N,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(b),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(w,{experience:e},null,8,["experience"])])))),128)),G]),$,(0,o._)("section",Q,[X,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(_),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(C,{project:e},null,8,["project"])])))),128)),ee])])]))}};const ie=(0,f.Z)(te,[["__scopeId","data-v-71762370"]]);var ne=ie,oe={name:"App",components:{HelloWorld:ne}};const ae=(0,f.Z)(oe,[["render",a]]);var se=ae;H.ZP.init("EnT3Qfe4jqEM4H-Fl"),(0,n.ri)(se).mount("#app")},9115:function(e,t,i){e.exports=i.p+"img/affinitystrings.2caf999c.png"},7526:function(e,t,i){e.exports=i.p+"img/mohijazi.2f432ecf.png"},6927:function(e,t,i){e.exports=i.p+"img/simplevaluation.773ee4c2.png"}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,a){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,s=n[0],r=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(l)var u=l(i)}for(t&&t(n);c<s.length;c++)a=s[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self["webpackChunkportfoliov3"]=self["webpackChunkportfoliov3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7671)}));n=i.O(n)})();
//# sourceMappingURL=app.7ebb6047.js.map