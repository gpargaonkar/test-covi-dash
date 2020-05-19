(this["webpackJsonpcovi-dash"]=this["webpackJsonpcovi-dash"]||[]).push([[0],{194:function(t,e,a){},195:function(t,e,a){},196:function(t,e,a){},197:function(t,e,a){},198:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),o=a(70),r=a.n(o),c=(a(79),a(6)),l=a(7),i=a(9),u=a(8),d=(a(80),a(81),a(17));var h=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"COVI-DASH"),n.a.createElement("div",{className:"nav-links"},n.a.createElement(d.b,{to:"/",className:"link"},n.a.createElement("div",null,"WORLD")),n.a.createElement(d.b,{to:"/country",className:"link"},n.a.createElement("div",null,"COUNTRY"))))},m=a(1);a(45);var v=function(t){return n.a.createElement("div",{className:"figure"},n.a.createElement("div",{className:"number"},t.data),n.a.createElement("div",{className:"text"},t.text))},y=(a(86),a(23)),p=a.n(y),C=a(22),f=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).state={chartData:{},chartOptions:{},dateWiseCases:Object.keys(s.props.dateWiseCases),dateWiseDeaths:Object.values(s.props.dateWiseDeaths),dateWiseRecovered:Object.values(s.props.dateWiseRecovered),lastNdays:s.props.lastNdays},s}return Object(l.a)(a,[{key:"setDataToChartData",value:function(){this.setState({chartData:{labels:this.state.dateWiseCases,datasets:[{label:"Cases",data:Object.values(this.props.dateWiseCases),backgroundColor:"rgba(125, 225, 232,0.6)",pointBackgroundColor:"rgba(0, 255, 234)",pointBorderColor:"rgba(91, 94, 91)"},{label:"Deaths",data:this.state.dateWiseDeaths,backgroundColor:"rgba(247, 54, 54,0.6)",pointBackgroundColor:"rgba(247, 54, 54)"},{label:"Recovered",data:this.state.dateWiseRecovered,backgroundColor:"rgba(44, 230, 65,0.6)",pointBackgroundColor:"rgba(0, 255, 81)",pointBorderColor:"rgba(91, 94, 91)"}]},chartOptions:{title:{display:!0,text:"Showing chart for last ".concat(this.state.lastNdays,"  days")}}})}},{key:"componentDidMount",value:function(){this.setDataToChartData()}},{key:"componentDidUpdate",value:function(t){var e=this;console.log("WORLD CHART: PRE PROPS",t.dateWiseCases),console.log("WORLD CHART: NEW PROPS",this.props.dateWiseCases),t.dateWiseCases!==this.props.dateWiseCases&&this.setState(Object(m.a)(Object(m.a)({},this.state),{},{dateWiseCases:Object.keys(this.props.dateWiseCases),dateWiseDeaths:Object.values(this.props.dateWiseDeaths),dateWiseRecovered:Object.values(this.props.dateWiseRecovered),lastNdays:this.props.lastNdays}),(function(){return e.setDataToChartData()}))}},{key:"render",value:function(){return console.log("WORLD CHART",Object.keys(this.props.dateWiseCases)),n.a.createElement("div",{className:"world-chart"},n.a.createElement(C.a,{data:this.state.chartData,options:this.state.chartOptions,width:800,height:400}))}}]),a}(s.Component);var b=function(t){return n.a.createElement("div",{className:"figure-hzt"},n.a.createElement("div",{className:"text-hzt"},t.text," ",n.a.createElement("span",{className:t.isNew?"isNew":"notNew"},"New")," "),n.a.createElement("div",{className:"number-hzt"},t.data))},D=function(t){console.log("ROC Z",t);for(var e=0,a=0,s=0;s<t.length-1;s++)a=(t[s+1]-t[s])/t[s+1]*100,console.log("iROC",a.toFixed(2)),e+=a,console.log("ROC",e.toFixed(2));return(e/(t.length-1)).toFixed(2)},g=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).state={overall:!1,dateWiseCases:!1,dateWiseDeaths:!1,dateWiseRecovered:!1,lastNdays:60},t}return Object(l.a)(a,[{key:"getOverallDetails",value:function(){var t=this;new Promise((function(t,e){p.a.get("https://disease.sh/v2/all").then((function(e){console.log("Res from axios world data",e),t(e.data)}))})).then((function(e){console.log("Promise data: overall",e),t.setState(Object(m.a)(Object(m.a)({},t.state),{},{overall:e}))}))}},{key:"getOverallHistoricalData",value:function(t){var e=this;(function(t){return new Promise((function(e,a){p.a.get("https://disease.sh/v2/historical/all?lastdays=".concat(t)).then((function(t){console.log("Res from axios world data date wise",t),e(t.data)}))}))})(t).then((function(t){console.log("XXXX Promise data: Overall - Date-wise",t.cases),e.setState(Object(m.a)(Object(m.a)({},e.state),{},{dateWiseCases:t.cases,dateWiseDeaths:t.deaths,dateWiseRecovered:t.recovered}))}))}},{key:"componentDidMount",value:function(){this.getOverallDetails(),this.getOverallHistoricalData(this.state.lastNdays)}},{key:"calculateDate",value:function(t){return new Date(t).toUTCString()}},{key:"setLastNDays",value:function(t){var e=this;this.setState(Object(m.a)(Object(m.a)({},this.state),{},{lastNdays:t}),(function(){return e.getOverallHistoricalData(e.state.lastNdays)}))}},{key:"render",value:function(){var t=this,e=this.state.overall,a=e.cases,s=e.deaths,o=e.recovered,r=e.active,c=e.updated,l=e.casesPerOneMillion,i=e.activePerOneMillion,u=e.affectedCountries,d=e.critical;return console.log("RENDER",Object.keys(this.state.dateWiseCases)),n.a.createElement("div",{className:"world-dashboard"},n.a.createElement("h2",null,"World Count"),this.state.overall&&this.state.dateWiseCases?n.a.createElement("div",null,n.a.createElement("div",{className:"world-count-wrapper"},n.a.createElement("div",null,n.a.createElement("div",{className:"world-figures"},n.a.createElement(v,{data:a,text:"Total Cases"}),n.a.createElement(v,{data:s,text:"Total Deaths"}),n.a.createElement(v,{data:o,text:"Recovered"}),n.a.createElement(v,{data:r,text:"Active Cases"})),n.a.createElement("div",{className:"timestamp"},"*Last Updated on: ",this.calculateDate(c)))),n.a.createElement("div",{className:"chart-and-other-stats"},n.a.createElement("div",{className:"other-stats"},n.a.createElement(b,{data:l,text:"Cases Per One Million"}),n.a.createElement(b,{data:i,text:"Active Per One Million"}),n.a.createElement(b,{data:u,text:"Affected Countries"}),n.a.createElement(b,{data:d,text:"Critical"}),n.a.createElement(b,{isNew:!0,data:D(Object.values(this.state.dateWiseCases))+"%",text:"Cases Rate"}),n.a.createElement(b,{isNew:!0,data:D(Object.values(this.state.dateWiseDeaths))+"%",text:"Death Rate"}),n.a.createElement(b,{isNew:!0,data:D(Object.values(this.state.dateWiseRecovered))+"%",text:"Recovery Rate"})),n.a.createElement("div",null,n.a.createElement(f,{dateWiseCases:this.state.dateWiseCases,dateWiseDeaths:this.state.dateWiseDeaths,dateWiseRecovered:this.state.dateWiseRecovered,lastNdays:this.state.lastNdays}),n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(30)}},"30"),n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(45)}},"45"),n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(60)}},"60"),n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(90)}},"90"))))):n.a.createElement("div",{className:"loading"}))}}]),a}(s.Component);a(194);var E=function(t){return n.a.createElement("div",{className:"all-figures"},n.a.createElement("h2",null,t.country.country),n.a.createElement("div",{className:"figures"},n.a.createElement(b,{data:t.country.cases,text:"Total Cases"}),n.a.createElement(b,{data:t.country.deaths,text:"Total Deaths"}),n.a.createElement(b,{data:t.country.recovered,text:"Recovered"}),n.a.createElement(b,{data:t.country.active,text:"Active Cases"}),n.a.createElement(b,{data:t.country.todayCases,text:"Today Cases"}),n.a.createElement(b,{data:t.country.todayDeaths,text:"Today Deaths"}),n.a.createElement(b,{data:t.country.critical,text:"Critical"}),n.a.createElement(b,{data:t.country.tests,text:"Total Tests"})),n.a.createElement("div",{className:"timestamp"},"*Last Updated on: ",(e=t.country.updated,new Date(e).toUTCString())));var e},N=(a(195),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).getDataOfSelectedCountry=function(){var e=document.getElementById("countrySelector"),a=e.options[e.selectedIndex].value;console.log("selectedCountry",a),t.props.countrySelectedCallbackFunction(a)},t}return Object(l.a)(a,[{key:"render",value:function(t){var e=this;return n.a.createElement("div",{className:"selector-wrapper"},n.a.createElement("div",{className:"selector"},n.a.createElement("select",{size:"1",id:"countrySelector",onChange:function(){return e.getDataOfSelectedCountry()}},this.props.countryList.map((function(t){return n.a.createElement("option",{key:t,className:"country-options",value:t},t)})))))}}]),a}(s.Component)),O=(a(196),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).prepareLastNdaysData=function(t,e){var a=t.length;return console.log("PPPP",t.slice(a-e,a)),t.slice(a-e,a)},s.setLastNDays=function(t){s.setState(Object(m.a)(Object(m.a)({},s.state),{},{lastNdays:t}),(function(){return s.setDataToChartData()}))},s.state={chartData:{},chartOptions:{},selected:s.props.selectedCountry,historyData:!1,lastNdays:30},s}return Object(l.a)(a,[{key:"setDataToChartData",value:function(){console.log("setDataToChartData",this.state.historyData.map((function(t){return t.Confirmed}))),console.log("setDataToChartData",this.state.historyData.map((function(t){return t.Deaths}))),console.log("setDataToChartData",this.state.historyData.map((function(t){return t.Recovered}))),console.log("setDataToChartData",this.state.historyData.map((function(t){return t.Date.slice(0,10)}))),this.setState({chartData:{labels:this.prepareLastNdaysData(this.state.historyData.map((function(t){return t.Date.slice(0,10)})),this.state.lastNdays),fontColor:"black",datasets:[{label:"Cases",data:this.prepareLastNdaysData(this.state.historyData.map((function(t){return t.Confirmed})),this.state.lastNdays),backgroundColor:"rgba(125, 225, 232,0.6)",pointBackgroundColor:"rgba(0, 255, 234)",pointBorderColor:"rgba(91, 94, 91)"},{label:"Deaths",data:this.prepareLastNdaysData(this.state.historyData.map((function(t){return t.Deaths})),this.state.lastNdays),backgroundColor:"rgba(247, 54, 54,0.6)",pointBackgroundColor:"rgba(247, 54, 54)"},{label:"Recovered",data:this.prepareLastNdaysData(this.state.historyData.map((function(t){return t.Recovered})),this.state.lastNdays),backgroundColor:"rgba(44, 230, 65,0.6)",pointBackgroundColor:"rgba(0, 255, 81)",pointBorderColor:"rgba(91, 94, 91)"}]},chartOptions:{title:{display:!0,text:"Historical Chart: ".concat(this.state.selected,"   Period:last ").concat(this.state.lastNdays," days"),fontColor:"black"},tooltips:{mode:"x"}}})}},{key:"getCountryHistoricalData",value:function(t){var e=this;console.log("getCountryHistoricalData Called"),function(t){return new Promise((function(e,a){p.a.get("https://api.covid19api.com/total/country/".concat(t)).then((function(t){console.log("Res from axios country - date wise data"),e(t.data)}))}))}(t).then((function(t){console.log("Promise Data: getCountryHistoricalData",t),e.setState(Object(m.a)(Object(m.a)({},e.state),{},{historyData:t}),(function(){return e.setDataToChartData()}))}))}},{key:"componentDidMount",value:function(){this.getCountryHistoricalData(this.state.selected.toLowerCase()),this.prepareLastNdaysData([1,2,3,4,5,6,7,8,9,10],5)}},{key:"componentDidUpdate",value:function(t){var e=this;console.log("History Data",this.state.historyData),console.log("*** PrevProps",t.selectedCountry),console.log("*** NewProps",this.props.selectedCountry),t.selectedCountry!==this.props.selectedCountry&&this.setState(Object(m.a)(Object(m.a)({},this.state),{},{selected:this.props.selectedCountry}),(function(){return e.getCountryHistoricalData(e.state.selected.toLowerCase())}))}},{key:"render",value:function(){var t=this;return console.log("COUNTRY CHART PROPS 2",this.state.selected),n.a.createElement("div",{className:"country-chart"},n.a.createElement(C.a,{data:this.state.chartData,options:this.state.chartOptions,width:800,height:400}),n.a.createElement("div",{className:"buttons"},n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(15)}},"15"),n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(30)}},"30"),n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(45)}},"45"),n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(60)}},"60"),n.a.createElement("div",{className:"button-item",onClick:function(){return t.setLastNDays(90)}},"90")))}}]),a}(s.Component)),k=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).countrySelectedCallbackFunction=function(e){console.log("App",e);var a=t.state.allCountry.filter((function(t){return t.country===e}));console.log("App",a),t.setState(Object(m.a)(Object(m.a)({},t.state),{},{selected:e,selectedCountry:a[0]}))},t.state={allCountry:!1,selected:"Afghanistan",selectedCountry:{},countryList:[]},t}return Object(l.a)(a,[{key:"getAllCountry",value:function(){var t=this;new Promise((function(t,e){p.a.get("https://disease.sh/v2/countries").then((function(e){console.log(" Res from axios getAllCountry",e),t(e.data)}))})).then((function(e){t.setState(Object(m.a)(Object(m.a)({},t.state),{},{allCountry:e,selectedCountry:e[0],countryList:e.map((function(t){return t.country}))}))}))}},{key:"componentDidMount",value:function(){this.getAllCountry()}},{key:"render",value:function(){return n.a.createElement("div",{className:"dashboard-wrapper"},n.a.createElement("div",null,"Select Country"),n.a.createElement(N,{countryList:this.state.countryList,countrySelectedCallbackFunction:this.countrySelectedCallbackFunction}),n.a.createElement("div",{className:"dashboard"},n.a.createElement(E,{country:this.state.selectedCountry}),n.a.createElement(O,{selectedCountry:"USA"===this.state.selected?"US":this.state.selected})))}}]),a}(s.Component),j=a(14);a(197);var W=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("h3",null,"Covi-Dash Project 1.1.0 "),n.a.createElement("div",null,n.a.createElement("a",{className:"ds",href:"https://github.com/NovelCOVID/API",target:"_blank"},"Data Source")))},R=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement(j.c,null,n.a.createElement(j.a,{path:"/",exact:!0,component:g}),n.a.createElement(j.a,{path:"/country",exact:!0,component:k})),n.a.createElement(W,null)))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},45:function(t,e,a){},74:function(t,e,a){t.exports=a(198)},79:function(t,e,a){},80:function(t,e,a){},81:function(t,e,a){},86:function(t,e,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.c0a8af99.chunk.js.map