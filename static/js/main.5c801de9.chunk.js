(this.webpackJsonpindodaxapi=this.webpackJsonpindodaxapi||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),i=c(18),s=c.n(i),l=(c(24),c(2)),j=c(3),d=c(5),b=c(4),o=(c(25),c(26),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h1",{children:"BTC to IDR"}),Object(a.jsx)("h2",{children:"Bitcoin Market"})]})}}]),c}(n.Component)),h=(c(27),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"credit",children:Object(a.jsxs)("div",{className:"credit-text",children:[Object(a.jsx)("p",{children:"Made with:"}),Object(a.jsx)("p",{children:"React JS"}),Object(a.jsx)("p",{children:"Axios API fetcher"}),Object(a.jsx)("p",{children:"HTML, CSS"})]})})}}]),c}(n.Component)),u=(c(28),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"watermark",children:[Object(a.jsxs)("p",{children:["API by"," ",Object(a.jsx)("a",{href:"https://indodax.com/market/BTCIDR",target:"blank",children:"Indodax.com/market"})," "]}),Object(a.jsx)("p",{children:"layout by Nijiko Suryadikara"})]})}}]),c}(n.Component)),O=c(9),p=c(7),x=c.n(p),m=(c(47),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).state={dataDepthBuy:[],dataDepthSell:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://indodax.com/api/depth/btcidr").then((function(t){console.log(t),e.setState({dataDepthBuy:t.data.buy,dataDepthSell:t.data.sell})}))}},{key:"render",value:function(){var e=this.state.dataDepthBuy.map((function(e,t){var c=Object(O.a)(e,2),n=c[0],r=c[1],i=n.toLocaleString("id-ID"),s=parseFloat(r).toString().replace(".",","),l=parseFloat(n*r).toLocaleString("id-ID");return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:s}),Object(a.jsx)("td",{children:l})]},t)})),t=this.state.dataDepthSell.map((function(e,t){var c=Object(O.a)(e,2),n=c[0],r=c[1],i=n.toLocaleString("id-ID"),s=parseFloat(r).toString().replace(".",","),l=(n*r).toLocaleString("id-ID");return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:s}),Object(a.jsx)("td",{children:l})]},t)}));return Object(a.jsxs)("div",{className:"main-table-wrapper",children:[Object(a.jsxs)("div",{className:"table-group-sell table-group",children:[Object(a.jsx)("p",{className:"table-title",children:"Market Jual"}),Object(a.jsxs)("div",{className:"table-table",children:[Object(a.jsx)("div",{className:"table-header",children:Object(a.jsxs)("div",{className:"table-row",children:[Object(a.jsx)("p",{children:"HARGA"}),Object(a.jsx)("p",{children:"BTC"}),Object(a.jsx)("p",{children:"IDR"})]})}),Object(a.jsx)("div",{className:"table-wrapper",ID:"scrollbar",children:Object(a.jsx)("table",{className:"table",children:Object(a.jsx)("tbody",{children:t})})})]})]}),Object(a.jsxs)("div",{className:"table-group-sell table-group",children:[Object(a.jsx)("p",{className:"table-title",children:"Market Jual"}),Object(a.jsxs)("div",{className:"table-table",children:[Object(a.jsx)("div",{className:"table-header",children:Object(a.jsxs)("div",{className:"table-row",children:[Object(a.jsx)("p",{children:"HARGA"}),Object(a.jsx)("p",{children:"BTC"}),Object(a.jsx)("p",{children:"IDR"})]})}),Object(a.jsx)("div",{className:"table-wrapper",ID:"scrollbar",children:Object(a.jsx)("table",{className:"table",children:Object(a.jsx)("tbody",{children:e})})})]})]})]})}}]),c}(n.Component)),v=(c(48),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).state={dataTicker:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://indodax.com/api/ticker/btcidr").then((function(t){console.log(t),e.setState({dataTicker:t.data.ticker})}))}},{key:"render",value:function(){var e=this.state.dataTicker.high,t=this.state.dataTicker.low,c=this.state.dataTicker.last,n=function(e){return e=(e=parseInt(e)).toLocaleString("id-ID")},r=n(e),i=n(t),s=n(c);return Object(a.jsxs)("div",{className:"ticker-wrapper",children:[Object(a.jsxs)("div",{className:"ticker-last ticker-item",children:[Object(a.jsx)("p",{className:"ticker-title",children:"Harga terakhir"}),Object(a.jsx)("p",{className:"ticker-number",children:s})]}),Object(a.jsxs)("div",{className:"ticker-low ticker-item",children:[Object(a.jsx)("p",{className:"ticker-title",children:"Harga terendah"}),Object(a.jsx)("p",{className:"ticker-number",children:i})]}),Object(a.jsxs)("div",{className:"ticker-high ticker-item",children:[Object(a.jsx)("p",{className:"ticker-title",children:"Harga tertinggi"}),Object(a.jsx)("p",{className:"ticker-number",children:r})]})]})}}]),c}(n.Component)),f=(c(49),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).state={dataTicker:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://indodax.com/api/ticker/btcidr").then((function(t){console.log(t),e.setState({dataTicker:t.data.ticker})}))}},{key:"render",value:function(){var e=this.state.dataTicker.vol_btc,t=Number(e).toFixed(2).toString().replace(".",",");return Object(a.jsxs)("div",{className:"vol-wrapper",children:[Object(a.jsx)("div",{className:"vol-title",children:Object(a.jsx)("p",{id:"voltitle",children:"Volume 24 hours"})}),Object(a.jsxs)("div",{className:"vol-text",children:[Object(a.jsx)("p",{className:"vol-number",children:t}),Object(a.jsx)("p",{children:"BTC"})]})]})}}]),c}(n.Component)),k=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-main",children:Object(a.jsxs)("div",{className:"container-child",children:[Object(a.jsx)(u,{}),Object(a.jsx)(o,{}),Object(a.jsx)(f,{}),Object(a.jsx)(v,{}),Object(a.jsx)(m,{}),Object(a.jsx)(h,{})]})})}}]),c}(n.Component),N=(c(50),c(51),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"circle-wrapper",children:[Object(a.jsx)("div",{className:"circle-one"}),Object(a.jsx)("div",{className:"circle-two"}),Object(a.jsx)("div",{className:"circle-three"})]})}}]),c}(n.Component)),g=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{}),Object(a.jsx)(k,{})]})}}]),c}(n.Component),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),y()}},[[52,1,2]]]);
//# sourceMappingURL=main.5c801de9.chunk.js.map