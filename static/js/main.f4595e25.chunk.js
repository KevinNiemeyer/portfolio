(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,A,t){},128:function(e,A,t){},129:function(e,A,t){},130:function(e,A,t){},139:function(e,A,t){"use strict";t.r(A);var n=t(0),a=t.n(n),r=t(220),o=t(48);test("renders learn react link",(function(){var e=(0,Object(r.a)(a.a.createElement(o.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},182:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(35),l=t(3);t(11);function i(){var e=Object(n.a)(["\n\twidth: ",";\n\tpadding: ",";\n"]);return i=function(){return e},e}var c=l.a.img(i(),(function(e){return e.width}),(function(e){return e.padding}));A.default=function(e){return r.a.createElement("div",{className:"project"},r.a.createElement(o.b,{to:e.link},r.a.createElement("div",{className:"project-image"},r.a.createElement(c,{src:e.link,alt:"Project Image",width:e.width,padding:e.padding})),r.a.createElement("div",{className:"project-title"},e.title),r.a.createElement("div",{className:"project-category"},e.category)))}},183:function(e,A){},184:function(e,A,t){"use strict";t.r(A);t(531)},225:function(e,A,t){e.exports=t(50)},249:function(e,A,t){var n={".":50,"./":50,"./About":85,"./About.js":85,"./App":48,"./App.css":11,"./App.js":48,"./App.test":139,"./App.test.js":139,"./Contact":86,"./Contact.js":86,"./Footer":87,"./Footer.js":87,"./Header":34,"./Header.js":34,"./Home":49,"./Home.js":49,"./Logo":81,"./Logo.js":81,"./Nav":80,"./Nav.js":80,"./NotFound":88,"./NotFound.js":88,"./Project":30,"./Project.js":30,"./Projects":84,"./Projects.js":84,"./RandomQuote":83,"./RandomQuote.js":83,"./Skills":82,"./Skills.js":82,"./Thumbnail":182,"./Thumbnail.js":182,"./assets/images/calculator-preview.png":521,"./assets/images/developer-news-io-preview.png":522,"./assets/images/github-app-preview.png":523,"./assets/images/link-harvester.png":524,"./assets/images/photogram-preview.png":525,"./assets/images/tic-tac-toe-preview.png":526,"./assets/thumbnails/aboutThumb.png":527,"./assets/thumbnails/articleThumb.png":528,"./assets/thumbnails/projectThumb.png":529,"./index":50,"./index.css":128,"./index.js":50,"./logo.svg":530,"./notes":183,"./notes.js":183,"./random-quote-styles.css":130,"./serviceWorker":89,"./serviceWorker.js":89,"./setupTests":184,"./setupTests.js":184,"./skills-styles.css":129};function a(e){var A=r(e);return t(A)}function r(e){if(!t.o(n,e)){var A=new Error("Cannot find module '"+e+"'");throw A.code="MODULE_NOT_FOUND",A}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=249},30:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(3);t(11);function l(){var e=Object(n.a)(["\n  transition: all 0.5s linear;\n  width: 400px;\n  border: solid lightgrey 1px;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]);return l=function(){return e},e}function i(){var e=Object(n.a)(["\n  padding: 20px;\n  text-decoration: none;\n"]);return i=function(){return e},e}function c(){var e=Object(n.a)(["\n  display: flex;\n  list-style-type: none;\n"]);return c=function(){return e},e}function s(){var e=Object(n.a)(["\n  position: relative;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  width: 100%;\n"]);return s=function(){return e},e}var u=o.a.div(s()),g=o.a.ul(c()),m=o.a.li(i()),p=o.a.img(l());A.default=function(e){return r.a.createElement(u,null,r.a.createElement(g,null,r.a.createElement(m,null,r.a.createElement("h2",null,"Project:"," ",r.a.createElement("span",{style:{color:"orange"}},e.project_name)),r.a.createElement("h3",null,"Description:"," ",r.a.createElement("span",{style:{color:"cornflowerblue"}},e.description)),r.a.createElement("h3",null,"GitHub Repository:\xa0",r.a.createElement("a",{href:e.git_url},e.git_url)),r.a.createElement("a",{href:e.live_url},r.a.createElement("h3",null,"Live Demo:"),r.a.createElement(p,{src:t(249)("".concat(e.img_src)),alt:e.project_name})))))}},34:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(3);t(11);function l(){var e=Object(n.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: ","vw;\n\tmargin-left: ","%;\n\tcolor: #555555;\n\tpadding: 0;\n"]);return l=function(){return e},e}function i(){var e=Object(n.a)(["\n\tmargin-left: ","%;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: left;\n\tfont-family: 'Orbitron', sans-serif;\n\tfont-size: ","vw;\n\ttext-shadow: 1px 1px 3px #3f7fbf;\n\tmix-blend-mode: screen;\n\tanimation: fadeIn 2.5s linear forwards;\n\tanimation: color-change 30s infinite;\n\t@keyframes fadeIn {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t}\n\n\t\t100% {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t@keyframes color-change {\n\t\t15% {\n\t\t\tcolor: red;\n\t\t}\n\t\t30% {\n\t\t\tcolor: orange;\n\t\t}\n\t\t45% {\n\t\t\tcolor: yellow;\n\t\t}\n\t\t60% {\n\t\t\tcolor: green;\n\t\t}\n\t\t75% {\n\t\t\tcolor: blue;\n\t\t}\n\t\t75% {\n\t\t\tcolor: indigo;\n\t\t}\n\t\t75% {\n\t\t\tcolor: purple;\n\t\t}\n\t}\n"]);return i=function(){return e},e}function c(){var e=Object(n.a)(["\n\tmargin-left: 20px;\n\twidth: 100%;\n"]);return c=function(){return e},e}var s=o.a.div(c()),u=o.a.h1(i(),(function(e){return e.left}),(function(e){return e.scale})),g=o.a.h3(l(),(function(e){return e.scale/4}),(function(e){return 6*e.left}));A.default=function(e){return r.a.createElement(s,null,r.a.createElement(u,{left:e.left,top:e.top,scale:e.scale},e.name),r.a.createElement(g,{left:e.left,scale:e.scale},e.subheading))}},48:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(35),l=t(4),i=t(3),c=t(80),s=t(49),u=t(84),g=t(85),m=t(86),p=t(87),f=t(88);function d(){var e=Object(n.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  transition: all 0.3s;\n  max-height: 100vh;\n"]);return d=function(){return e},e}var v=i.a.div(d());A.default=function(){return r.a.createElement(o.a,null,r.a.createElement(v,null,r.a.createElement(c.default,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:s.default}),r.a.createElement(l.a,{exact:!0,path:"/home",component:s.default}),r.a.createElement(l.a,{exact:!0,path:"/portfolio",component:s.default}),r.a.createElement(l.a,{exact:!0,path:"/about",component:g.default}),r.a.createElement(l.a,{exact:!0,path:"/projects",component:u.default}),r.a.createElement(l.a,{exact:!0,path:"/contact",component:m.default}),r.a.createElement(l.a,{path:"/*",component:f.default})),r.a.createElement(p.default,null)))}},49:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(3),l=t(34),i=t(82),c=t(83);t(11);function s(){var e=Object(n.a)(["\n  display: flex;\n  width: 50%;\n"]);return s=function(){return e},e}function u(){var e=Object(n.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 5%;\n  align-items: flex-start;\n\n  height: 80vh;\n  width: 100%;\n"]);return u=function(){return e},e}var g=o.a.div(u()),m=o.a.div(s());A.default=function(e){return r.a.createElement(g,null,r.a.createElement(m,null,r.a.createElement(l.default,{name:"Kevin Niemeyer",subheading:"Developer / Musician / Human",top:"-3",left:"5",scale:"7"})),r.a.createElement(m,null,r.a.createElement(i.default,null)),r.a.createElement(m,null,r.a.createElement(c.default,null)))}},50:function(e,A,t){"use strict";t.r(A);var n=t(0),a=t.n(n),r=t(25),o=t.n(r),l=(t(128),t(48)),i=t(89);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.default,null)),document.getElementById("root")),i.unregister()},521:function(e,A,t){e.exports=t.p+"static/media/calculator-preview.b14b6c7b.png"},522:function(e,A,t){e.exports=t.p+"static/media/developer-news-io-preview.8777ab63.png"},523:function(e,A,t){e.exports=t.p+"static/media/github-app-preview.3e17eee3.png"},524:function(e,A,t){e.exports=t.p+"static/media/link-harvester.13f370c9.png"},525:function(e,A,t){e.exports=t.p+"static/media/photogram-preview.9862d452.png"},526:function(e,A,t){e.exports=t.p+"static/media/tic-tac-toe-preview.fe630a78.png"},527:function(e,A,t){e.exports=t.p+"static/media/aboutThumb.f688f77a.png"},528:function(e,A){e.exports="data:image/png;base64,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"},529:function(e,A,t){e.exports=t.p+"static/media/projectThumb.7721296a.png"},530:function(e,A,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},80:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(35),l=t(3),i=t(81);t(11);function c(){var e=Object(n.a)(["\n  text-decoration: none;\n  color: cornflowerblue;\n  font-weight: bold;\n  display: inline;\n  margin: 0.5em 0;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 1.25vw;\n  &:hover {\n    color: white;\n  }\n  padding: 0 10px;\n  transition: all 0.3s;\n"]);return c=function(){return e},e}function s(){var e=Object(n.a)(["\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  width: 100%;\n  margin: 0;\n  overflow: hidden;\n  padding: 5px;\n"]);return s=function(){return e},e}function u(){var e=Object(n.a)(["\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  background-color: #252525;\n"]);return u=function(){return e},e}var g=l.a.div(u()),m=l.a.ul(s()),p=Object(l.a)(o.b)(c());A.default=function(e){return r.a.createElement(g,null,r.a.createElement(i.default,{x:35,y:0,w:50,h:40})," ",r.a.createElement(m,{className:"navigation-sub"},r.a.createElement(p,{to:"/"},"Home"),r.a.createElement(p,{to:"/projects"},"Projects"),r.a.createElement(p,{to:"/about"},"About Me"),r.a.createElement(p,{to:"/contact"},"Contact")))}},81:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(3),l=t(35);t(11);function i(){var e=Object(n.a)(["\n  position: relative;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  width: 100%;\n  height: auto;\n"]);return i=function(){return e},e}var c=o.a.div(i());A.default=function(e){var A=e.w,t=e.h,n=5+e.x,a=105+e.y;return r.a.createElement(c,null,r.a.createElement(l.b,{style:{textDecoration:"none"},to:"/"},r.a.createElement("svg",{width:"250",height:"250",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("line",{style:{animation:"color_change 3s ease-in alternate infinite"},x1:n,x2:n,y1:a,y2:a+t,stroke:"cornflowerblue",strokeWidth:"5"},r.a.createElement("style",null,"\n            zIndex:'-1',\n            @keyframes color_change {\n              from { stroke: cornflowerblue; }\n              to { stroke: red; }\n            }\n        ")),r.a.createElement("line",{x1:n,x2:n,y1:a+t/2,y2:a+t,stroke:"red",strokeWidth:"5"}),r.a.createElement("line",{style:{animation:"color_change 3s 3s ease-in alternate infinite"},x1:n+A,x2:n+A,y1:a,y2:a+t,stroke:"red",strokeWidth:"5"},r.a.createElement("style",null,"\n            @keyframes color_change {\n              0% { stroke: cornflowerblue; }\n              100% { stroke: red; }\n            }\n      ")),r.a.createElement("line",{style:{animation:"color_change 3s ease-in alternate infinite"},x1:n,x2:n+A,y1:a+t/2,y2:a,stroke:"cornflowerblue",strokeWidth:"5"}," ",r.a.createElement("style",null,"\n            @keyframes color_change {\n              from { stroke: cornflowerblue; }\n              to { stroke: red; }\n            }\n        ")),r.a.createElement("line",{x1:n,x2:n+A,y1:a+t/2,y2:a+t,stroke:"red",strokeWidth:"5"}," "),r.a.createElement("circle",{cx:n,cy:a,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),r.a.createElement("circle",{cx:n,cy:a+t/2,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),r.a.createElement("circle",{cx:n,cy:a+t,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),r.a.createElement("circle",{cx:n+A,cy:a,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),r.a.createElement("circle",{cx:n+A,cy:a+t,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}))))}},82:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(3);t(11),t(129);function l(){var e=Object(n.a)(["\n  width: 35px;\n  margin-top: 20px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  font-family: 'Orbitron', sans-serif;\n  letter-spacing: 10px;\n  font-weight: bold;\n  color: darkgrey;\n"]);return l=function(){return e},e}function i(){var e=Object(n.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  margin-top: 15%;\n"]);return i=function(){return e},e}var c=o.a.div(i()),s=o.a.div(l()),u={height:"10px",transformOrigin:"center",transform:"rotate(-90deg)"};A.default=function(e){return r.a.createElement(c,null,r.a.createElement(s,null,r.a.createElement("div",{style:u},"Skills:")),r.a.createElement("div",{className:"perspective-text"},r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null),r.a.createElement("p",null,"React")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"React"),r.a.createElement("p",null,"JavaScript")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"JavaScript"),r.a.createElement("p",null,"CSS")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"CSS"),r.a.createElement("p",null,"HTML")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"HTML"),r.a.createElement("p",null))))}},83:function(e,A,t){"use strict";t.r(A);var n=t(125),a=t(2),r=t(0),o=t.n(r),l=t(3),i=(t(130),t(11),t(219)),c=t.n(i);function s(){var e=Object(a.a)(["\n  width: 80%;\n  font-size: 22px;\n  padding: 10px;\n"]);return s=function(){return e},e}var u=l.a.div(s());A.default=function(e){var A=Object(r.useState)([]),t=Object(n.a)(A,2),a=t[0],l=t[1],i=Object(r.useState)([]),s=Object(n.a)(i,2),g=s[0],m=s[1];return Object(r.useEffect)((function(){c.a.get("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json").then((function(e){l(e.data.quoteText),m(e.data.quoteAuthor)}))}),[]),o.a.createElement(u,null,o.a.createElement("blockquote",null,a,o.a.createElement("footer",null,o.a.createElement("cite",null,g))))}},84:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(34),l=t(30),i=t(3);t(11);function c(){var e=Object(n.a)(["\n  position: relative;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 10vh;\n"]);return c=function(){return e},e}var s=i.a.div(c());A.default=function(e){return r.a.createElement(s,null,r.a.createElement(o.default,{left:"3",top:"3",scale:"3",name:"Projects"}),r.a.createElement(l.default,{project_name:"Photogram",git_url:"https://github.com/KevinNiemeyer/photogram",live_url:"https://kevinniemeyer.github.io/photogram/",description:"Instagram clone that consumes the Unsplash API to display and search photos on Unsplash. Created with create-react-app using React Router, Hooks, Styled Components, Context, Link, and Infinite Scroll modules.",img_src:"./assets/images/photogram-preview.png"}),r.a.createElement(l.default,{project_name:"GitHub Profile App",git_url:"https://github.com/KevinNiemeyer/github-app",live_url:"https://kevinniemeyer.github.io/github-app/",description:"My first stab at a React.js app that uses Axios to retrieve API profile data on GitHub for two profiles and compares their stats.",img_src:"./assets/images/github-app-preview.png"}),r.a.createElement(l.default,{project_name:"Link Harvester",git_url:"https://github.com/KevinNiemeyer/link-harvester.git",live_url:"https://kevinniemeyer.github.io/link-harvester/",description:"jQuery app that harvests all links from a page's HTML code that you copy/paste in or upload from a file. Could be extended to harvest other useful information, such as metadata, tags, etc... ",img_src:"./assets/images/link-harvester.png"}),r.a.createElement(l.default,{project_name:"Tic Tac Toe",git_url:"https://github.com/KevinNiemeyer/tic-tac-toe.git",live_url:"https://kevinniemeyer.github.io/tic-tac-toe/",description:"Tic Tac Toe game app that uses jQuery and Sass/SCSS. Demonstrates my design and animation skills, along with my UI/UX and sound skills using Howler.js. All sounds/music are my own original creations",img_src:"./assets/images/tic-tac-toe-preview.png"}),r.a.createElement(l.default,{project_name:"DeveloperNews.io",live_url:"http://developers-io.herokuapp.com/",description:"News feed app that aggregates all articles and videos within the development ecosphere. This was a student project that I was involved with while at Bov Academy, and was written in Vue.js. I was responsible for all the frontend UI/UX design aspects, and this site showcases the Responsive Design skills I learned while at Bov.",img_src:"./assets/images/developer-news-io-preview.png"}),r.a.createElement(l.default,{project_name:"Calculator",git_url:"https://github.com/KevinNiemeyer/calculator",live_url:"https://kevinniemeyer.github.io/calculator/",description:"My first Bov Academy project using only HTML, CSS, and JavaScript. This was an attempt to clone the iPhone calculator.",img_src:"./assets/images/calculator.png"}))}},85:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(34),l=t(3);t(11);function i(){var e=Object(n.a)(["\n  position: relative;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]);return i=function(){return e},e}var c=l.a.div(i());A.default=function(e){return r.a.createElement(c,null,r.a.createElement(o.default,{left:"3",top:"3",scale:"3",name:"About Me"}),r.a.createElement("p",null,"Hello"),r.a.createElement("br",null),r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null),r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null),r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null))}},86:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(3);t(11);function l(){var e=Object(n.a)(["\n  height: 80vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n"]);return l=function(){return e},e}var i=o.a.div(l());A.default=function(e){return r.a.createElement(i,null)}},87:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(3);t(11);function l(){var e=Object(n.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 10%;\n  display: flex;\n  background-color: #252525;\n  font-size: 12px;\n  color: lightgrey;\n  overflow: auto;\n"]);return l=function(){return e},e}var i=o.a.div(l());A.default=function(e){return r.a.createElement(i,null,"@Kevin Niemeyer 2020")}},88:function(e,A,t){"use strict";t.r(A);var n=t(2),a=t(0),r=t.n(a),o=t(3);t(11);function l(){var e=Object(n.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n"]);return l=function(){return e},e}var i=o.a.div(l());A.default=function(e){return console.log(e),r.a.createElement(i,null,r.a.createElement("h1",null,e.location.pathname," Page Not Found "))}},89:function(e,A,t){"use strict";t.r(A),t.d(A,"register",(function(){return a})),t.d(A,"unregister",(function(){return o}));var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var A="".concat("/portfolio","/service-worker.js");n?(!function(e,A){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,A)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(A,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(A,e)}))}}function r(e,A){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),A&&A.onUpdate&&A.onUpdate(e)):(console.log("Content is cached for offline use."),A&&A.onSuccess&&A.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}},[[225,1,2]]]);
//# sourceMappingURL=main.f4595e25.chunk.js.map