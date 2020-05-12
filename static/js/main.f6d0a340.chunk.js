(this["webpackJsonpcovi-dash"]=this["webpackJsonpcovi-dash"]||[]).push([[0],{194:function(t,e,a){},195:function(t,e,a){},196:function(t,e,a){},197:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(69),s=a.n(r),c=(a(78),a(6)),l=a(7),i=a(9),u=a(8),d=(a(79),a(80),a(21));var h=function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"COVI-DASH"),o.a.createElement(d.b,{to:"/country"},o.a.createElement("div",null,"See country specific data")))},m=a(3);a(85);var v=function(t){return o.a.createElement("div",{className:"figure"},o.a.createElement("div",{className:"number"},t.data),o.a.createElement("div",{className:"text"},t.text))},y=(a(86),a(23)),p=a.n(y),C=a(22),f=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={chartData:{}},n}return Object(l.a)(a,[{key:"setDataToChartData",value:function(){this.setState({chartData:{labels:Object.keys(this.props.dateWiseCases),datasets:[{label:"Cases",data:Object.values(this.props.dateWiseCases),backgroundColor:"rgba(125, 225, 232,0.6)",pointBackgroundColor:"rgba(0, 255, 234)",pointBorderColor:"rgba(91, 94, 91)"},{label:"Deaths",data:Object.values(this.props.dateWiseDeaths),backgroundColor:"rgba(247, 54, 54,0.6)",pointBackgroundColor:"rgba(247, 54, 54)"},{label:"Recovered",data:Object.values(this.props.dateWiseRecovered),backgroundColor:"rgba(44, 230, 65,0.6)",pointBackgroundColor:"rgba(0, 255, 81)",pointBorderColor:"rgba(91, 94, 91)"}]}})}},{key:"componentDidMount",value:function(){this.setDataToChartData()}},{key:"render",value:function(){return console.log("WORLD CHART",Object.keys(this.props.dateWiseCases)),o.a.createElement("div",{className:"world-chart"},o.a.createElement(C.a,{data:this.state.chartData}))}}]),a}(n.Component),g=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).state={overall:!1,dateWiseCases:!1,dateWiseDeaths:!1,dateWiseRecovered:!1},t}return Object(l.a)(a,[{key:"getOverallDetails",value:function(){var t=this;new Promise((function(t,e){p.a.get("https://disease.sh/v2/all").then((function(e){console.log("Res from axios world data",e),t(e.data)}))})).then((function(e){console.log("Promise data: overall",e),t.setState(Object(m.a)(Object(m.a)({},t.state),{},{overall:e}))}))}},{key:"getOverallHistoricalData",value:function(){var t=this;new Promise((function(t,e){p.a.get("https://disease.sh/v2/historical/all?lastdays=60").then((function(e){console.log("Res from axios world data date wise",e),t(e.data)}))})).then((function(e){console.log("Promise data: Overall - Date-wise",e),t.setState(Object(m.a)(Object(m.a)({},t.state),{},{dateWiseCases:e.cases,dateWiseDeaths:e.deaths,dateWiseRecovered:e.recovered}))}))}},{key:"componentDidMount",value:function(){this.getOverallDetails(),this.getOverallHistoricalData()}},{key:"calculateDate",value:function(t){return new Date(t).toUTCString()}},{key:"render",value:function(){var t=this.state.overall,e=t.cases,a=t.deaths,n=t.recovered,r=t.active,s=t.updated;return console.log("date wise cases",Object.keys(this.state.dateWiseCases)),o.a.createElement("div",{className:"world-dashboard"},o.a.createElement("div",{className:"world-count-wrapper"},this.state.overall?o.a.createElement("div",null,o.a.createElement("h1",null,"World Count"),o.a.createElement("div",{className:"world-figures"},o.a.createElement(v,{data:e,text:"Total Cases"}),o.a.createElement(v,{data:a,text:"Total Deaths"}),o.a.createElement(v,{data:n,text:"Recovered"}),o.a.createElement(v,{data:r,text:"Active Cases"})),o.a.createElement("div",{className:"timestamp"},"*Last Updated on: ",this.calculateDate(s))):o.a.createElement("div",null,o.a.createElement("h3",null,"Loading.."))),this.state.dateWiseCases?o.a.createElement(f,{dateWiseCases:this.state.dateWiseCases,dateWiseDeaths:this.state.dateWiseDeaths,dateWiseRecovered:this.state.dateWiseRecovered}):o.a.createElement("h3",null,"Loading.."))}}]),a}(n.Component);a(194);var b=function(t){return o.a.createElement("div",{className:"all-figures"},o.a.createElement("h2",null,t.country.country),o.a.createElement("div",{className:"figures"},o.a.createElement(v,{data:t.country.cases,text:"Total Cases"}),o.a.createElement(v,{data:t.country.deaths,text:"Total Deaths"}),o.a.createElement(v,{data:t.country.recovered,text:"Recovered"}),o.a.createElement(v,{data:t.country.active,text:"Active Cases"})),o.a.createElement("div",{className:"rates"},o.a.createElement(v,{data:t.country.todayCases,text:"Today Cases"}),o.a.createElement(v,{data:t.country.todayDeaths,text:"Today Deaths"}),o.a.createElement(v,{data:t.country.critical,text:"Critical"}),o.a.createElement(v,{data:t.country.tests,text:"Total Tests"})),o.a.createElement("div",{className:"timestamp"},"*Last Updated on: ",(e=t.country.updated,new Date(e).toUTCString())));var e},D=(a(195),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getDataOfSelectedCountry=function(){var e=document.getElementById("countrySelector"),a=e.options[e.selectedIndex].value;console.log("selectedCountry",a),t.props.countrySelectedCallbackFunction(a)},t}return Object(l.a)(a,[{key:"render",value:function(t){var e=this;return o.a.createElement("div",{className:"selector-wrapper"},o.a.createElement("div",{className:"selector"},o.a.createElement("select",{size:"1",id:"countrySelector",onChange:function(){return e.getDataOfSelectedCountry()}},this.props.countryList.map((function(t){return o.a.createElement("option",{key:t,className:"country-options",value:t},t)})))))}}]),a}(n.Component)),O=(a(196),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={chartData:{},chartOptions:{},selected:n.props.selectedCountry,historyData:!1},n}return Object(l.a)(a,[{key:"setDataToChartData",value:function(){console.log("setDataToChartData",this.state.historyData.map((function(t){return t.Confirmed}))),console.log("setDataToChartData",this.state.historyData.map((function(t){return t.Deaths}))),console.log("setDataToChartData",this.state.historyData.map((function(t){return t.Recovered}))),console.log("setDataToChartData",this.state.historyData.map((function(t){return t.Date.slice(0,10)}))),this.setState({chartData:{labels:this.state.historyData.map((function(t){return t.Date.slice(0,10)})),datasets:[{label:"Cases",data:this.state.historyData.map((function(t){return t.Confirmed})),backgroundColor:"rgba(125, 225, 232,0.6)",pointBackgroundColor:"rgba(0, 255, 234)",pointBorderColor:"rgba(91, 94, 91)"},{label:"Deaths",data:this.state.historyData.map((function(t){return t.Deaths})),backgroundColor:"rgba(247, 54, 54,0.6)",pointBackgroundColor:"rgba(247, 54, 54)"},{label:"Recovered",data:this.state.historyData.map((function(t){return t.Recovered})),backgroundColor:"rgba(44, 230, 65,0.6)",pointBackgroundColor:"rgba(0, 255, 81)",pointBorderColor:"rgba(91, 94, 91)"}]},chartOptions:{title:{display:!0,text:"Historical Data: ".concat(this.state.selected)}}})}},{key:"getCountryHistoricalData",value:function(t){var e=this;console.log("getCountryHistoricalData Called"),function(t){return new Promise((function(e,a){p.a.get("https://api.covid19api.com/total/country/".concat(t)).then((function(t){console.log("Res from axios country - date wise data"),e(t.data)}))}))}(t).then((function(t){console.log("Promise Data: getCountryHistoricalData",t),e.setState(Object(m.a)(Object(m.a)({},e.state),{},{historyData:t}),(function(){return e.setDataToChartData()}))}))}},{key:"componentDidMount",value:function(){this.getCountryHistoricalData(this.state.selected.toLowerCase())}},{key:"componentDidUpdate",value:function(t){var e=this;console.log("History Data",this.state.historyData),t.selectedCountry!==this.props.selectedCountry&&this.setState(Object(m.a)(Object(m.a)({},this.state),{},{selected:this.props.selectedCountry}),(function(){return e.getCountryHistoricalData(e.state.selected.toLowerCase())}))}},{key:"render",value:function(){return console.log("COUNTRY CHART PROPS 2",this.state.selected),o.a.createElement("div",{className:"country-chart"},o.a.createElement(C.a,{data:this.state.chartData,options:this.state.chartOptions,width:800,height:400}))}}]),a}(n.Component)),E=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).countrySelectedCallbackFunction=function(e){console.log("App",e);var a=t.state.allCountry.filter((function(t){return t.country===e}));console.log("App",a),t.setState(Object(m.a)(Object(m.a)({},t.state),{},{selected:e,selectedCountry:a[0]}))},t.state={allCountry:!1,selected:"Afghanistan",selectedCountry:{},countryList:[]},t}return Object(l.a)(a,[{key:"getAllCountry",value:function(){var t=this;new Promise((function(t,e){p.a.get("https://disease.sh/v2/countries").then((function(e){console.log(" Res from axios getAllCountry",e),t(e.data)}))})).then((function(e){console.log("Promise Data",e),t.setState(Object(m.a)(Object(m.a)({},t.state),{},{allCountry:e,selectedCountry:e[0],countryList:e.map((function(t){return t.country}))}))}))}},{key:"componentDidMount",value:function(){this.getAllCountry()}},{key:"render",value:function(){return console.log("COUNTRY CHART PROPS 1",this.state.selected),o.a.createElement("div",{className:"dashboard-wrapper"},o.a.createElement("div",null,"Select Country"),o.a.createElement(D,{countryList:this.state.countryList,countrySelectedCallbackFunction:this.countrySelectedCallbackFunction}),o.a.createElement("div",{className:"dashboard"},o.a.createElement(b,{country:this.state.selectedCountry}),o.a.createElement(O,{selectedCountry:this.state.selected})))}}]),a}(n.Component),j=a(14),k=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(h,null),o.a.createElement(j.c,null,o.a.createElement(j.a,{path:"/",exact:!0,component:g}),o.a.createElement(j.a,{path:"/country",exact:!0,component:E})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},73:function(t,e,a){t.exports=a(197)},78:function(t,e,a){},79:function(t,e,a){},80:function(t,e,a){},85:function(t,e,a){},86:function(t,e,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.f6d0a340.chunk.js.map