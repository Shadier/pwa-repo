(window["webpackJsonppokedex-app"]=window["webpackJsonppokedex-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/LOGO.eb219d0d.png"},31:function(e,t,a){e.exports=a.p+"static/media/loading.a4f2cb80.gif"},34:function(e,t,a){e.exports=a(67)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),o=a.n(s),i=(a(39),a(40),a(41),a(42),a(43),a(44),a(14)),l=a(11),c=a(5),u=a(6),m=a(8),d=a(7),h=a(9),p=a(29),f=a.n(p),b=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"black"},r.a.createElement("img",{src:f.a,alt:"Brand logo",width:"300"}),r.a.createElement("h4",null,"NET TV")))}}]),t}(r.a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("h4",null,"2019 All Rights Reserved. Developed By Ra\xfal Moreno."))}}]),t}(r.a.Component),v=a(30),y=a.n(v);var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addLike=function(){a.setState({likes:a.state.likes+1})},a.state={likes:0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,className:"movie"},r.a.createElement("img",{className:"cover",src:this.props.img,alt:this.props.alt,width:"120"}),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"title"},this.props.name),r.a.createElement("p",{className:"release"},this.props.release),r.a.createElement("span",{className:"status ".concat(this.props.status.toLowerCase())},this.props.status),r.a.createElement("div",{className:"summary",dangerouslySetInnerHTML:(e=this.props.summary,{__html:e})})),r.a.createElement("button",{className:"btn-seemore",onClick:this.addLike},this.state.likes," LIKES"));var e}}]),t}(r.a.Component),k=a(31),w=a.n(k),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],status:null},a.getMovies=function(){y.a.get("https://api.tvmaze.com/shows?page=4").then((function(e){a.setState({movies:e.data,status:"success"})}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.getMovies()}},{key:"render",value:function(){if(this.state.movies.length>=1){var e=this.state.movies.map((function(e){if(console.log(e.id+" "+e.name),null!=e.image&&""!=e.summary&&1064!=e.id)return r.a.createElement(E,{key:e.id,id:e.id,img:e.image.medium,name:e.name,release:e.premiered,status:e.status,genres:e.genres,summary:e.summary})}));return r.a.createElement("div",{className:"body-container"},r.a.createElement("div",null,e))}return 0===this.state.movies.length&&"success"===this.state.status?r.a.createElement("p",null,"No Hay contenido de peliculas"):r.a.createElement("div",{className:"loading-space"},r.a.createElement("img",{src:w.a,alt:"loading animation"}),r.a.createElement("p",null,"Cargando"))}}]),t}(r.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutus"},r.a.createElement("h2",null,"About US"),r.a.createElement("p",null,"We are NET TV, we are a simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),r.a.createElement("p",null,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'),r.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),r.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."))}}]),t}(r.a.Component);function L(){return r.a.createElement(j,null)}function I(){return r.a.createElement(O,null)}var N=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Top Series")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about-us"},"About us")))),r.a.createElement(b,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/about-us"},r.a.createElement(I,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(L,null))),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.6a0c9971.chunk.js.map