(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g}),n(74);var a=n(20),r=n.n(a),o=n(0),i=n.n(o),c=n(248),l=n.n(c),u=n(232),s=n(252),d=n.n(s),p=n(245),m=n(247),f=n(231),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=d()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,a=this.props.pageContext,r=a.previous,o=a.next;return i.a.createElement(m.a,{location:this.props.location},i.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),i.a.createElement(p.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r&&i.a.createElement("li",null,i.a.createElement(u.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o&&i.a.createElement("li",null,i.a.createElement(u.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},t}(i.a.Component);t.default=h;var g="3804820323"},231:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var a=n(258),r=n.n(a),o=n(259),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a),l=c.rhythm,u=c.scale},232:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=n(230),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(233),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(51);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},233:function(e,t,n){var a;e.exports=(a=n(240))&&a.default||a},240:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=n(70),l=n(1),u=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:n})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},245:function(e,t,n){"use strict";var a=n(20),r=n.n(a),o=n(0),i=n.n(o),c=(n(256),n(257),n(246)),l=n.n(c),u=n(231),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},i.a.createElement("img",{src:l.a,alt:"Joaquín Bravo Contreras",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),i.a.createElement("p",null,"Soy un desarrollador mexicano. Soy fan del software libre, sobre todo aplicado al Internet. Juego futbol cada que puedo. Me gusta andar en bici y leer (cuando mis hijos me dejan). Todavía creo en la buena voluntad de las personas y todavía más con mi linda esposa Lix =)."))},t}(i.a.Component);t.a=s},246:function(e,t,n){e.exports=n.p+"static/gaceta_1-8317597491b9f25a784953e16a2a29cc.png"},247:function(e,t,n){"use strict";n(74);var a=n(20),r=n.n(a),o=n(0),i=n.n(o),c=n(232),l=n(231),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"La gaceta de la cabeza")):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"La gaceta de la cabeza")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,a)},t}(i.a.Component);t.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ef108bee0701d19308a7.js.map