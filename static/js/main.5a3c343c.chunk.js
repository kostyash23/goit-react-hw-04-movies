(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{19:function(e,t,n){e.exports={moreInfo:"MoviesInfo_moreInfo__Lqh3O",link:"MoviesInfo_link__zC2nN"}},31:function(e,t,n){e.exports={active:"Nav_active__BgdhK",nav:"Nav_nav__3T1bz"}},34:function(e,t,n){e.exports={cart:"MoviesPage_cart__3WkKO"}},35:function(e,t,n){e.exports={cast:"Cast_cast__2I6Jb"}},36:function(e,t,n){e.exports=n(65)},41:function(e,t,n){},42:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),i=n(5),l=n(7),u=(n(41),n(42),n(31)),s=n.n(u),m={color:"red"},p=function(){return r.a.createElement("ul",{className:s.a.nav},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/",exact:!0,activeStyle:m},"Home")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/movies",activeStyle:m},"Movies")))},h=n(9),v=n(10),f=n(12),d=n(11),E=n(13),b=n(14),g=n.n(b),y="04cb9f1be532535b42e85e3384d1506e",_=function(e){return g.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(y,"&language=en-US&query=").concat(e,"&page=1"))},k=Object(l.f)((function(e){var t=e.movies,n=void 0===t?[]:t,a=e.location;return r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(i.b,{to:{pathname:"/movies/".concat(e.id),state:{from:a}}},e.name?e.name:e.title))})))})),O=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},n}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(y)).then((function(e){return e.data})).then((function(e){return e.results})).then((function(t){return e.setState({movies:t})}))}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",null,r.a.createElement("h1",null,"Treanding today"),r.a.createElement(k,{movies:e}))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],query:""},n.handleChange=function(e){n.setState({query:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),_(n.state.query).then((function(e){return e.data})).then((function(e){return e.results})).then((function(e){return n.setState({movies:e})})),n.setState({query:""})},n}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.query,n=e.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"text",value:t,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Search")),r.a.createElement(k,{movies:n}))}}]),t}(a.Component),w=n(34),S=n.n(w),C=function(e){var t=e.overview,n=e.genres,a=e.name,c=e.title,o=e.poster_path,i=(e.release_date,e.vote_average);return r.a.createElement("article",{className:S.a.cart},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:a||c,align:"left"}),r.a.createElement("h1",null,c),r.a.createElement("p",null,"User score: ".concat(10*i,"%")),r.a.createElement("p",null,r.a.createElement("b",null,"Overview:"),t),r.a.createElement("p",null,r.a.createElement("b",null,"Genres:"),n?n.map((function(e){return e.name})).join(", "):"No information"))},x=n(35),N=n.n(x),I=function(e){var t=e.credits;return r.a.createElement("ul",{className:N.a.cast},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name}),r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Character: ",e.character))})))},q=function(e){var t=e.reviews;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,r.a.createElement("b",null,"Author: ",e.author)),r.a.createElement("p",null,e.content))})))},M=n(19),A=n.n(M),B=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={credits:[],reviews:[],movie:null},n.getIdFromProps=function(e){return e.match.params.id},n.handleGoBack=function(){var e=n.props,t=e.history,a=e.location;if(a.state)return t.push(a.state.from);t.push("/movies")},n}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.id,g.a.get("\nhttps://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(y,"&language=en-US"))).then((function(e){return e.data})).then((function(e){return t.setState({movie:e})})),function(e){return g.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(y))}(this.props.match.params.id).then((function(e){return e.data})).then((function(e){return e.cast})).then((function(e){return t.setState({credits:e})})),function(e){return g.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(y,"&language=en-US&page=1"))}(this.props.match.params.id).then((function(e){return e.data})).then((function(e){return e.results})).then((function(e){return t.setState({reviews:e})}))}},{key:"render",value:function(){var e=this.state,t=e.credits,n=e.reviews,a=e.movie,c=this.props.match;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.handleGoBack},"go back!"),r.a.createElement(C,a),r.a.createElement("div",{className:A.a.moreInfo},r.a.createElement("h3",null,"Additional information "),r.a.createElement(i.b,{className:A.a.link,to:{pathname:"/movies/".concat(c.params.id,"/cast"),state:{from:this.props.location}}},"Cast"),r.a.createElement(i.b,{to:{pathname:"/movies/".concat(c.params.id,"/review"),state:{from:this.props.location}}},"Review"),r.a.createElement(l.a,{path:"/movies/:id/cast",component:function(e){return r.a.createElement(I,Object.assign({},e,{credits:t}))}}),r.a.createElement(l.a,{path:"/movies/:id/review",component:function(e){return r.a.createElement(q,Object.assign({},e,{reviews:n}))}})))}}]),t}(a.Component),U=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:O}),r.a.createElement(l.a,{path:"/movies/:id",component:B}),r.a.createElement(l.a,{path:"/movies",exact:!0,component:j})))};o.a.render(r.a.createElement(i.a,{basename:"/goit-react-hw-04-movies"},r.a.createElement(l.a,{component:U})),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5a3c343c.chunk.js.map