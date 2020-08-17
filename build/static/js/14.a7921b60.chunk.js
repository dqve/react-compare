(this["webpackJsonpdocs-compare"]=this["webpackJsonpdocs-compare"]||[]).push([[14],{127:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(1),o=a.n(c),l=a(51),s=a(82),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u=function(e){var t=e.to,a=e.exact,r=e.strict,c=e.location,o=e.activeClassName,u=e.className,m=e.activeStyle,f=e.style,y=e.isActive,h=e["aria-current"],b=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),d="object"===("undefined"===typeof t?"undefined":p(t))?t.pathname:t,v=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return n.a.createElement(l.a,{path:v,exact:a,strict:r,location:c,children:function(e){var a=e.location,r=e.match,c=!!(y?y(r,a):r);return n.a.createElement(s.a,i({to:t,className:c?[u,o].filter((function(e){return e})).join(" "):u,style:c?i({},f,m):f,"aria-current":c&&h||null},b))}})};u.propTypes={to:s.a.propTypes.to,exact:o.a.bool,strict:o.a.bool,location:o.a.object,activeClassName:o.a.string,className:o.a.string,activeStyle:o.a.object,style:o.a.object,isActive:o.a.func,"aria-current":o.a.oneOf(["page","step","location","date","time","true"])},u.defaultProps={activeClassName:"active","aria-current":"page"},t.a=u},180:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(127),o=(a(102),a(25)),l=a(80),s=a(59),i=a(103),p=a.n(i);t.default=function(e){return e.history,n.a.createElement(o.a,null,n.a.createElement(l.a,null),n.a.createElement("div",{className:"auth-wrapper"},n.a.createElement("div",{className:"auth-content"},n.a.createElement("div",{className:"auth-bg"},n.a.createElement("span",{className:"r"}),n.a.createElement("span",{className:"r s"}),n.a.createElement("span",{className:"r s"}),n.a.createElement("span",{className:"r"})),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("div",{className:"mb-4"},n.a.createElement("img",{className:"",style:{width:"50%"},src:p.a,alt:"activity-user"})),n.a.createElement("h3",{className:"mb-4"},"Sign up"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username"})),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email"})),n.a.createElement("div",{className:"input-group mb-4"},n.a.createElement("input",{type:"password",className:"form-control",placeholder:"password"})),n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("div",{className:"checkbox checkbox-fill d-inline"},n.a.createElement("input",{type:"checkbox",name:"checkbox-fill-2",id:"checkbox-fill-2"}),n.a.createElement("label",{htmlFor:"checkbox-fill-2",className:"cr"},"Send me the ",n.a.createElement("a",{href:s.a.BLANK_LINK}," Newsletter")," weekly."))),n.a.createElement("button",{className:"btn btn-primary shadow-2 mb-4"},"Sign up"),n.a.createElement("p",{className:"mb-0 text-muted"},"Allready have an account? ",n.a.createElement(c.a,{to:"/auth/signin-1"},"Login")))))))}},82:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(1),o=a.n(c),l=a(4),s=a.n(l),i=a(31),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var a,r;u(this,t);for(var n=arguments.length,c=Array(n),o=0;o<n;o++)c[o]=arguments[o];return a=r=m(this,e.call.apply(e,[this].concat(c))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,c=a.to;n?t.replace(c):t.push(c)}},m(r,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var c=this.context.router.history,o="string"===typeof t?Object(i.b)(t,null,null,c.location):t,l=c.createHref(o);return n.a.createElement("a",p({},r,{onClick:this.handleClick,href:l,ref:a}))},t}(n.a.Component);y.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=y}}]);
//# sourceMappingURL=14.a7921b60.chunk.js.map