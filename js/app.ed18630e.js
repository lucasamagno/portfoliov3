(function(){"use strict";var e={8090:function(e,t,i){var n=i(9242),a=i(3396);function s(e,t,i,n,s,o){const r=(0,a.up)("HelloWorld");return(0,a.wg)(),(0,a.j4)(r,{msg:"Welcome to Your Vue.js App"})}var o=i(4870),r=i(7139);const l=["href"],c={class:"left-column"},u={class:"dates"},p={class:"right-column"},d={class:"other-titles"},v={class:"description"},m={class:"skills"};var g={__name:"WorkExperienceCard",props:{experience:{type:Object,required:!0}},setup(e){const t=e,i=(0,o.iH)(!1);return(0,a.bv)((()=>{console.log(t.experience)})),(t,n)=>((0,a.wg)(),(0,a.iD)("a",{href:e.experience.url,target:"_blank",class:"experience-card-link"},[(0,a._)("div",{class:"experience-card",onMouseover:n[2]||(n[2]=e=>i.value=!0),onMouseleave:n[3]||(n[3]=e=>i.value=!1)},[(0,a._)("div",c,[(0,a._)("p",u,(0,r.zw)(e.experience.dates),1)]),(0,a._)("div",p,[(0,a._)("h3",{class:(0,r.C_)({highlight:i.value})},(0,r.zw)(e.experience.titles[0])+" • "+(0,r.zw)(e.experience.company),3),(0,a._)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.experience.titles.slice(1),((e,t)=>((0,a.wg)(),(0,a.iD)("p",{key:t,class:"additional-title"},"• "+(0,r.zw)(e),1)))),128))]),(0,a._)("p",v,(0,r.zw)(e.experience.description),1),(0,a._)("ul",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.experience.skills,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"skill-bubble",onMouseover:n[0]||(n[0]=e=>i.value=!0),onMouseleave:n[1]||(n[1]=e=>i.value=!1)},(0,r.zw)(e),33)))),128))])])],32)],8,l))}},f=i(89);const h=(0,f.Z)(g,[["__scopeId","data-v-2920e745"]]);var w=h;const _=[{id:1,titles:["Software Engineer"],company:"Sparen Homes",dates:"2023 - Present",description:"Developing and maintaining web applications with Vue.js and Django.",skills:["Jenkins","Django","Vue.js","AWS"],url:"https://www.sparenhomes.com/"},{id:2,titles:["DevOps Engineer","Release Engineer","Business Analyst/Scrum Master"],company:"United Wholesale Mortgage",dates:"2021 - 2023",description:"Factilitating and automating software devlivery processes.",skills:["Jenkins","Octopus","Groovy","VMWare"],url:"https://www.uwm.com/"},{id:3,titles:["Software Developer"],company:"Auto-Owners Insurance",dates:"2020 - 2020",description:"Built web applications using Spring MVC, Angular, and React.",skills:["Java","Spring MVC","Angular","React"],url:"https://www.auto-owners.com/"},{id:4,titles:["System Administrator (Tech Ops)","Mathematics Tutor"],company:"Central Michigan University",dates:"2017 - 2020",description:"Maintained critical IT infrastructure and provided advanced technical support, ensuring optimal system performance and reliability. Assisted and taught students in calculus and statistics based courses.",skills:["Calculus","Statistics","MacOS","Active Directory","Printer Support"],url:"https://www.cmich.edu/"},{id:5,titles:["Intern","Campus Ambassador"],company:"United Wholesale Mortgage",dates:"2019 - 2020",description:"Fostered strong relationships between the company and the academic community, promoting UWM's culture and opportunities on campus while gaining valuable industry insights.",skills:[".NET","C#","MVC","Acceptance Criteria","Business Analysis","Recruiting"],url:"https://www.uwm.com/"},{id:6,titles:["Help Desk Analyst"],company:"Apple",dates:"2018 - 2019",description:"Delivered efficient technical support and problem-solving solutions for a diverse range of customer inquiries regarding Apple products and services.",skills:["Technical Troubleshooting","Customer Service","Communication","Detail-Oriented","Adaptable"],url:"https://www.apple.com/"}],b=[{id:1,title:"mohijazi.com",image:i(7526),description:"Portfolio website built for Regional Safety Manager at Bosch.",tools:["Vue","JavaScript","HTML","CSS","GitHub Pages"],url:"https://lucasamagno.github.io/mohijazi"},{id:2,title:"Affinity Strings",image:i(9115),description:"Website for violin studio and quartet based in Davison, Michigan.",tools:["WordPress","BlueHost"],url:"https://www.affinitystrings.com/"}],y=["href"],k={class:"left-column"},M=["src"],j={class:"right-column"},x={class:"description"},S={class:"tools"};var D={__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(e){const t=e,i=(0,o.iH)(!1);return(0,a.bv)((()=>{console.log(t.experience)})),(t,n)=>((0,a.wg)(),(0,a.iD)("a",{href:e.project.url,target:"_blank",class:"project-card-link"},[(0,a._)("div",{class:"project-card",onMouseover:n[2]||(n[2]=e=>i.value=!0),onMouseleave:n[3]||(n[3]=e=>i.value=!1)},[(0,a._)("div",k,[(0,a._)("img",{src:e.project.image,alt:"Project Image",class:"project-image"},null,8,M)]),(0,a._)("div",j,[(0,a._)("h3",{class:(0,r.C_)({highlight:i.value})},(0,r.zw)(e.project.title),3),(0,a._)("p",x,(0,r.zw)(e.project.description),1),(0,a._)("ul",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.tools,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"tool-bubble",onMouseover:n[0]||(n[0]=e=>i.value=!0),onMouseleave:n[1]||(n[1]=e=>i.value=!1)},(0,r.zw)(e),33)))),128))])])],32)],8,y))}};const A=(0,f.Z)(D,[["__scopeId","data-v-211eba6f"]]);var C=A,H=i(4294);const O=e=>((0,a.dD)("data-v-d81c5058"),e=e(),(0,a.Cn)(),e),W={class:"container"},E={class:"sidebar"},I=O((()=>(0,a._)("section",{id:"hero"},[(0,a._)("h1",null,"Lucas A. Magno"),(0,a._)("h3",null,"Software Engineer / DevOps Engineer"),(0,a._)("p",null,"I build user friendly software solutions and streamline development workflows.")],-1))),V={id:"contact"},z=O((()=>(0,a._)("h2",null,"Work with me",-1))),P=O((()=>(0,a._)("p",null,"Send me a message and lets chat!",-1))),U=["onSubmit"],T={class:"form-group"},q={class:"form-group"},Y={class:"form-group"},F=O((()=>(0,a._)("div",{class:"form-group"},[(0,a._)("button",{type:"submit"},"Send Message")],-1))),B=(0,a.uE)('<div class="social-media-links" data-v-d81c5058><a href="https://github.com/yourusername" target="_blank" class="icon-link" data-v-d81c5058><i class="fab fa-github" data-v-d81c5058></i></a><a href="https://www.linkedin.com/in/yourusername" target="_blank" class="icon-link" data-v-d81c5058><i class="fab fa-linkedin" data-v-d81c5058></i></a></div>',1),L={class:"content"},R=O((()=>(0,a._)("section",{id:"about"},[(0,a._)("h2",null,"About Me"),(0,a._)("p",null,"In 2014, as I was developing new skills with Adobe Premiere, After Effects, and Cinema 4D, it felt like a natural progression to embark on my development journey with my first programming class in with C++. Fast-forward to today, and I’ve built a large and very diverse skill set while working at companies such as Apple, United Wholesale Mortgage, a start-up, and more."),(0,a._)("p",null,"My main focus these days is building Sparen Homes along with freelance work."),(0,a._)("p",null,"When I'm not on my computer, I'm usually outside, listening to music, or traveling with my girlfriend.")],-1))),Z=O((()=>(0,a._)("hr",null,null,-1))),K={id:"experience"},J=O((()=>(0,a._)("h2",null,"Work Experience",-1))),G=O((()=>(0,a._)("div",{class:"experience-button"},[(0,a._)("a",{href:"https://drive.google.com/file/d/1EMLM_gmHWMIMxVqmUj3rH782DMLb7t9v/view?usp=sharing",target:"_blank",class:"resume-button"},"View Full Resume")],-1))),N=O((()=>(0,a._)("hr",null,null,-1))),Q={id:"projects"},X=O((()=>(0,a._)("h2",null,"Projects",-1))),$=O((()=>(0,a._)("div",{class:"experience-button"},[(0,a._)("a",{href:"https://lucasamagno.github.io/myblog",target:"_blank",class:"resume-button"},"View Blog")],-1)));var ee={__name:"HelloWorld",setup(e){const t=(0,o.iH)(""),i=(0,o.iH)(""),s=(0,o.iH)("");function r(){H.ZP.send("service_izwy97u","template_3ke76hi",{from_name:t.value,subject:i.value,message:s.value}).then((e=>{console.log("SUCCESS!",e.status,e.text),t.value="",i.value="",s.value=""}),(e=>{console.error("EMAIL FAILED...",e)}))}const l=()=>{r(t.value,i.value,s.value)};return(e,r)=>((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",E,[I,(0,a._)("section",V,[z,P,(0,a._)("form",{class:"contact-form",onSubmit:(0,n.iM)(l,["prevent"]),ref:"form"},[(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),placeholder:"Your Email",required:""},null,512),[[n.nr,t.value]])]),(0,a._)("div",q,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=e=>i.value=e),placeholder:"Subject",required:""},null,512),[[n.nr,i.value]])]),(0,a._)("div",Y,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":r[2]||(r[2]=e=>s.value=e),placeholder:"Your Message",required:""},null,512),[[n.nr,s.value]])]),F],40,U)]),B]),(0,a._)("div",L,[R,Z,(0,a._)("section",K,[J,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(_),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(w,{experience:e},null,8,["experience"])])))),128)),G]),N,(0,a._)("section",Q,[X,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(b),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(C,{project:e},null,8,["project"])])))),128)),$])])]))}};const te=(0,f.Z)(ee,[["__scopeId","data-v-d81c5058"]]);var ie=te,ne={name:"App",components:{HelloWorld:ie}};const ae=(0,f.Z)(ne,[["render",s]]);var se=ae;H.ZP.init("EnT3Qfe4jqEM4H-Fl"),(0,n.ri)(se).mount("#app")},9115:function(e,t,i){e.exports=i.p+"img/affinitystrings.2caf999c.png"},7526:function(e,t,i){e.exports=i.p+"img/mohijazi.2f432ecf.png"}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,a,s){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],s=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,a,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/portfoliov3/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(l)var u=l(i)}for(t&&t(n);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},n=self["webpackChunkportfoliov3"]=self["webpackChunkportfoliov3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(8090)}));n=i.O(n)})();
//# sourceMappingURL=app.ed18630e.js.map