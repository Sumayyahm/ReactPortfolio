(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{132:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var r=a(2),i=a(0),n=a.n(i),c=a(42),s=a.n(c),o=a(103),l=a(104),d=a(112),b=a(109),h=a(108),m=a(60),j={fontFamily:"Cambria",backgroundColor:"whitesmoke"},u=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={},e.handleItemClick=function(t,a){var r=a.name;return e.setState({activeItem:r})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return Object(r.jsxs)(h.a,{style:j,children:[Object(r.jsx)("h1",{style:{margin:10,fontFamily:"Cambria",color:"dimgray"},children:"Sumayyah Mariam"}),Object(r.jsx)(m.b,{to:"/reactportfolio/",children:Object(r.jsx)(h.a.Item,{style:{margin:10,fontFamily:"Cambria",color:"dimgray"},name:"About",active:"About"===e,onClick:this.handleItemClick})}),Object(r.jsx)(m.b,{to:"/portfolio",children:Object(r.jsx)(h.a.Item,{style:{margin:10,fontFamily:"Cambria",color:"dimgray"},name:"Portfolio",active:"Portfolio"===e,onClick:this.handleItemClick})})]})}}]),a}(i.Component),p=a(149),y=a(148),g={fontFamily:"Cambria",color:"dimgray"},x=function(e){return Object(r.jsx)(y.a.Group,{children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)("br",{}),Object(r.jsx)(y.a.Image,{size:"big",src:e.imageURL}),Object(r.jsxs)(y.a.Content,{children:[Object(r.jsx)("br",{}),Object(r.jsx)(y.a.Header,{style:g,children:e.name}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(y.a.Description,{style:g,children:[Object(r.jsx)("p",{children:e.description}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:e.deployed,target:"_blank",children:"Deployed Link"})}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:e.github,target:"_blank",children:"GitHub Link"})})]})]})]})})},O=a.p+"static/media/trimfit.99a21c73.png",f=a.p+"static/media/eatburger.43658d3f.png",k=a.p+"static/media/Esthete.f657b5bf.PNG",v=a.p+"static/media/weatherApp.3a83a452.PNG",w=a.p+"static/media/empdirectory.dde630fa.png",C=a.p+"static/media/budgettrackerImage.fbb218ef.png",I={margin:20,border:"solid",padding:35,backgroundColor:"whitesmoke",borderWidth:"1px",borderColor:"darkgray"},A=[{menuItem:"trim(fit)",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:O,name:"trim(fit)",description:"A fitness app that allows a user to schedule weekly workouts and search for workouts and save them using youtube API",deployed:"https://sumayyahm.github.io/trim-fit-/",github:"https://github.com/Sumayyahm/trim-fit-"})})}},{menuItem:"Esth\xe8te",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:k,name:"Esth\xe8te",description:"Esthete Gallery is an art gallery management system that allows an art gallery owner to maintain details of artists and paintings with great ease. With the help of this app, gallery owners can store, view, and maintain inventory.",deployed:"https://esthetegallery.herokuapp.com/",github:"https://github.com/Sumayyahm/Project2"})})}},{menuItem:"EatDaBurger",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:f,name:"Eat- Da Burger",description:"A burger logger app created with MYSQL, Node, Express, Handlebars and ORM that allows the user to log their favourite burger and then devour it!",deployed:"https://stormy-dawn-28068.herokuapp.com/",github:"https://github.com/Sumayyahm/EatDaBurger"})})}},{menuItem:"Weather Dashboard",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:v,name:"Weather Dashboard App",description:"A Weather dashboard that allows the user to display the current and future weather conditions for a searched city as well as display the last searched cities",deployed:"https://sumayyahm.github.io/WeatherDashboard/",github:"https://github.com/Sumayyahm/WeatherDashboard"})})}},{menuItem:"Employee Directory",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:w,name:"Employee Directory",description:"An employee directory that allows the user to view the entire employee directory,sort the employee names in descending or ascending order and search for employees by typing their name in the search box.",deployed:"https://ancient-coast-86756.herokuapp.com/",github:"https://github.com/Sumayyahm/employee-directory"})})}},{menuItem:"Budget Tracker",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:C,name:"Budget Tracker",description:"A budget tracker app that allows user to add expenses and deposits to their budget with or without a connection.",deployed:"https://still-ocean-73108.herokuapp.com/",github:"https://github.com/Sumayyahm/BudgetTracker"})})}}],S=function(){return Object(r.jsx)("div",{className:"ui mobile reversed equal width grid",children:Object(r.jsx)(p.a,{className:"column",style:I,menu:{fluid:!0,vertical:!0,tabular:!0},panes:A})})},E=a.p+"static/media/sumprofilepic.d9b6cfe3.jpg",P=(a(132),a(110)),D=a(147),F=a(150),L=a(57),R=a.p+"static/media/SumayyahMariamResume.27840ff7.pdf",M={fontFamily:"Cambria",color:"dimgray"};var N=function(){var e=n.a.useState(!1),t=Object(P.a)(e,2),a=t[0],i=t[1];return Object(r.jsxs)(D.a,{centered:!1,open:a,onClose:function(){return i(!1)},onOpen:function(){return i(!0)},trigger:Object(r.jsx)(F.a,{children:"Contact Me"}),children:[Object(r.jsx)(D.a.Header,{style:M,children:"Contact Information"}),Object(r.jsx)(D.a.Content,{children:Object(r.jsxs)(D.a.Description,{style:M,children:[Object(r.jsx)("p",{children:"Email Address: sumayyahmariam018@gmail.com"}),Object(r.jsx)("p",{children:"Phone Number: +1 (512) 888 4232"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("a",{href:R,target:"_blank",children:"Resume"}),"    \u2003     ",Object(r.jsxs)("a",{href:"https://github.com/Sumayyahm",target:"_blank",children:[Object(r.jsx)(L.a,{name:"github"}),"Github Profile"]}),"   \u2003      ",Object(r.jsxs)("a",{href:"https://www.linkedin.com/in/sumayyahmariam/",target:"_blank",children:[Object(r.jsx)(L.a,{name:"linkedin alternate"}),"LinkIn Profile"]})]})]})}),Object(r.jsx)(D.a.Actions,{children:Object(r.jsx)(F.a,{onClick:function(){return i(!1)},children:"OK"})})]})},W={margin:20,border:"solid",padding:35,backgroundColor:"whitesmoke",borderWidth:"1px",borderColor:"darkgray"},B={fontFamily:"Cambria",color:"dimgray"},U=function(){return Object(r.jsx)(y.a.Group,{style:W,children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)(y.a.Image,{size:"medium",src:E,circular:!0}),Object(r.jsxs)(y.a.Content,{children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(y.a.Header,{id:"about-header",style:B,children:"About Me"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(y.a.Description,{style:B,children:[Object(r.jsx)("p",{children:"My name is Sumayyah Mariam. I have a bachelors degree in Electronics and Communication Engineer from India. I am looking for a career in Web Development. I am currently taking classes at the Full Stack Coding Boot Camp at the University of Texas, Austin."}),Object(r.jsx)("p",{children:"Fun Facts: I was an elementary school teacher before I moved to Texas. I enjoy cooking and gardening. I am an avid Netflix viewer and I have a flair for learning languages. I live in Austin, Texas with my husband."}),Object(r.jsx)("br",{})]}),Object(r.jsx)(y.a.Extra,{children:Object(r.jsx)(N,{style:B})})]})]})})},G=a(10);var T=function(){return Object(r.jsxs)(m.a,{children:[Object(r.jsx)(u,{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(G.c,{children:[Object(r.jsx)(G.a,{exact:!0,path:"/reactportfolio/",children:Object(r.jsx)(U,{})}),Object(r.jsx)(G.a,{path:"/portfolio",children:Object(r.jsx)(S,{})})]})]})},H=a(146),_={fontFamily:"Cambria",color:"dimgray",backgroundColor:"whitesmoke",paddingTop:"12px",textAlign:"center"};var z=function(){return Object(r.jsx)(H.a,{children:Object(r.jsx)("div",{style:_,className:"ui fixed bottom sticky menu",children:"\xa9 2020 Site built by SumayyahMariam"})})};var J=function(){return Object(r.jsxs)("div",{className:"body",children:[Object(r.jsx)(T,{}),Object(r.jsx)(z,{})]})};a(133);s.a.render(Object(r.jsx)(J,{}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.9e331984.chunk.js.map