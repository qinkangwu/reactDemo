webpackJsonp([1],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(21),u=o(r),i=n(31),c=o(i),a=n(85),f=o(a),s=n(84),p=o(s),d=n(86),b=o(d),y={};y.foo="石",y.bar="国",c["default"].render(u["default"].createElement("div",null,u["default"].createElement(f["default"],l({foo:"shi",too:"guo"},y)),u["default"].createElement(p["default"],null),u["default"].createElement(b["default"],null)),document.getElementById("app"))},84:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(21),a=o(c),f={backgroundColor:"blue",fontSize:"50px",color:"red"},s=function(e){function t(e){l(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.onClick=function(){console.log("Hello2中的单击方法1")},n.state={loopsRemaining:n.props.maxLoops},n}return u(t,e),i(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount2")}},{key:"componentDidMount",value:function(){console.log("componentDidMount2")}},{key:"shouldComponentUpdate",value:function(){return console.log("shouldComponentUpdate2"),!0}},{key:"render",value:function(){return a["default"].createElement("div",null,a["default"].createElement("h1",{style:f,onClick:this.onClick},"Hello world 2"))}}]),t}(c.Component);s.defaultProps={autoPlay:!1,maxLoops:10},t["default"]=s},85:function(e,t,n){"use strict";n(88),n(87);var o=n(21),l={backgroundColor:"blue"},r=o.createClass({displayName:"Hello",getInitialState:function(){return console.log("getInitialState"),{liked:!1}},getDefaultProps:function(){console.log("getDefaultProps")},componentWillMount:function(){console.log("componentWillMount")},componentDidMount:function(){var e=this;setTimeout(function(){e.setState({liked:!0})},5e3),console.log("componentDidMount")},shouldComponentUpdate:function(){return console.log("shouldComponentUpdate"),!0},render:function(){return console.log("render"),o.createElement("div",null,o.createElement("h1",{style:l},"Hello world"),o.createElement("br",null),o.createElement("img",null))}});e.exports=r},86:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(21),a=o(c),f=(n(31),function(e){function t(e){l(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.state={liked:!1},n}return u(t,e),i(t,[{key:"handleClick",value:function(e,t,n,o){console.log(e),console.log(t),console.log(n),console.log(o),this.setState({liked:!this.state.liked})}},{key:"render",value:function(){var e=this.state.liked?"like":"haven't liked";return a["default"].createElement("p",{onClick:this.handleClick.bind(this,23,"dfdf",function(){})},"You ",e," this. Click to toggle.")}}]),t}(c.Component));t["default"]=f},87:function(e,t){},88:function(e,t){}});