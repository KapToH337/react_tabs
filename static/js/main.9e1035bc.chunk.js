(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),l=a.n(i),r=a(1),o=a(2),d=a(4),s=a(3),b=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.tabs,a=e.selectedTabId,n=e.onTabSelected;return c.a.createElement("div",{className:"tabs"},t.map((function(e){return c.a.createElement("div",{key:e.id,className:a.id===e.id?"block__select":"block",onClick:function(){n(e.id)}},c.a.createElement("h2",{className:a.id===e.id?"title__select":"title"},e.title),c.a.createElement("div",{className:"paragraph"},c.a.createElement("p",null,a.id===e.id&&e.content)))})))}}]),a}(c.a.Component),u=(a(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),m=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={tabSelected:u[0]},e.findSelected=function(e){return u.find((function(t){return t.id===e}))},e.onTabSelected=function(t){e.state.tabSelected.id!==t&&e.setState({tabSelected:e.findSelected(t)})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.tabSelected;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is\xa0",e.title),c.a.createElement(b,{tabs:u,selectedTabId:e,onTabSelected:this.onTabSelected}))}}]),a}(c.a.Component);l.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9e1035bc.chunk.js.map