(this["webpackJsonpdocs-compare"]=this["webpackJsonpdocs-compare"]||[]).push([[12],{188:function(e,t,n){"use strict";n.r(t);var a=n(29),s=n(0),r=n.n(s),i=n(187),o=n(127),c=n(86),l=n.n(c),u=n(30),p=(n(102),n(25)),d=n(80),m=n(103),f=n.n(m),E=n(3),h=n(7),b=n(57),v=n.n(b),x=n(72),N=n(73),O=n(58),g=n(87),C=n(1),k=n.n(C),j={label:k.a.string.isRequired,onClick:k.a.func},S=r.a.forwardRef((function(e,t){var n=e.label,a=e.onClick,s=e.className,i=Object(h.a)(e,["label","onClick","className"]);return r.a.createElement("button",Object(E.a)({ref:t,type:"button",className:v()("close",s),onClick:a},i),r.a.createElement("span",{"aria-hidden":"true"},"\xd7"),r.a.createElement("span",{className:"sr-only"},n))}));S.displayName="CloseButton",S.propTypes=j,S.defaultProps={label:"Close"};var y=S,w=n(65),T=n(69),L=n(78),R=Object(w.a)("h4");R.displayName="DivStyledAsH4";var D=Object(T.a)("alert-heading",{Component:R}),P=Object(T.a)("alert-link",{Component:L.a}),M={show:!0,transition:g.a,closeLabel:"Close alert"},A=r.a.forwardRef((function(e,t){var n=Object(x.a)(e,{show:"onClose"}),a=n.bsPrefix,s=n.show,i=n.closeLabel,o=n.className,c=n.children,l=n.variant,u=n.onClose,p=n.dismissible,d=n.transition,m=Object(h.a)(n,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),f=Object(O.a)(a,"alert"),b=Object(N.a)((function(e){u&&u(!1,e)})),C=!0===d?g.a:d,k=r.a.createElement("div",Object(E.a)({role:"alert"},C?m:void 0,{ref:t,className:v()(o,f,l&&f+"-"+l,p&&f+"-dismissible")}),p&&r.a.createElement(y,{onClick:b,label:i}),c);return C?r.a.createElement(C,Object(E.a)({unmountOnExit:!0},m,{ref:void 0,in:s}),k):s?k:null}));A.displayName="Alert",A.defaultProps=M,A.Link=P,A.Heading=D;var F=A;t.default=function(e){var t=Object(s.useState)(!1),n=Object(a.a)(t,2),c=n[0],m=n[1],E=Object(s.useState)(!1),h=Object(a.a)(E,2),b=h[0],v=h[1],x=Object(s.useState)(""),N=Object(a.a)(x,2),O=N[0],g=N[1],C=Object(s.useState)(""),k=Object(a.a)(C,2),j=k[0],S=k[1],y=Object(u.b)().setAuthTokens,w="";return w=e.location.state?e.location.state.referer||"/dashboard/default":"auth/signin",c?r.a.createElement(i.a,{to:w}):r.a.createElement(p.a,null,r.a.createElement(d.a,null),r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-content"},r.a.createElement("div",{className:"auth-bg"},r.a.createElement("span",{className:"r"}),r.a.createElement("span",{className:"r s"}),r.a.createElement("span",{className:"r s"}),r.a.createElement("span",{className:"r"})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("img",{className:"",style:{width:"50%"},src:f.a,alt:"activity-user"})),b&&r.a.createElement(F,{variant:"danger",dismissible:!0},"The username or password provided were incorrect!"),r.a.createElement("h3",{className:"mb-4"},"Login"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"email",className:"form-control",value:O,onChange:function(e){g(e.target.value)},placeholder:"Email"})),r.a.createElement("div",{className:"input-group mb-4"},r.a.createElement("input",{type:"password",className:"form-control",value:j,onChange:function(e){S(e.target.value)},placeholder:"password"})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("div",{className:"checkbox checkbox-fill d-inline"},r.a.createElement("input",{type:"checkbox",name:"checkbox-fill-1",id:"checkbox-fill-a1"}),r.a.createElement("label",{htmlFor:"checkbox-fill-a1",className:"cr"}," Save credentials"))),r.a.createElement("button",{className:"btn btn-primary shadow-2 mb-4",onClick:function(){l.a.post("https://243f611b-2817-48a5-886b-e4822a76ad68.mock.pstmn.io/users/login",{userName:O,password:j}).then((function(e){200===e.status?(y(e.data),m(!0),console.log(e)):v(!0)})).catch((function(e){v(!0)}))}},"Login"),r.a.createElement("p",{className:"mb-0 text-muted"},"Don\u2019t have an account? ",r.a.createElement(o.a,{to:"/auth/signup-1"},"Signup")))))))}},63:function(e,t,n){"use strict";var a=n(74);function s(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var r=/([A-Z])/g;var i=/^ms-/;function o(e){return function(e){return e.replace(r,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(o(t))||s(e).getPropertyValue(o(t));Object.keys(t).forEach((function(s){var r=t[s];r||0===r?!function(e){return!(!e||!c.test(e))}(s)?n+=o(s)+": "+r+";":a+=s+"("+r+") ":e.style.removeProperty(o(s))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(63),s=n(76);function r(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(s.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}function i(e,t,n,i){null==n&&(n=function(e){var t=Object(a.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=r(e,n,i),c=Object(s.a)(e,"transitionend",t);return function(){o(),c()}}},67:function(e,t,n){"use strict";function a(e){e.offsetHeight}n.d(t,"a",(function(){return a}))},68:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return f}));var a=n(7),s=n(14),r=(n(1),n(0)),i=n.n(r),o=n(27),c=n.n(o),l=!1,u=i.a.createContext(null),p="exited",d="entering",m="entered",f="exiting",E=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var s,r=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?r?(s=p,a.appearStatus=d):s=m:s=t.unmountOnExit||t.mountOnEnter?"unmounted":p,a.state={status:s},a.nextCallback=null,a}Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:p}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==m&&(t=d):n!==d&&n!==m||(t=f)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===d?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,s=this.props.nodeRef?[a]:[c.a.findDOMNode(this),a],r=s[0],i=s[1],o=this.getTimeouts(),u=a?o.appear:o.enter;!e&&!n||l?this.safeSetState({status:m},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,i),this.safeSetState({status:d},(function(){t.props.onEntering(r,i),t.onTransitionEnd(u,(function(){t.safeSetState({status:m},(function(){t.props.onEntered(r,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!l?(this.props.onExit(a),this.safeSetState({status:f},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:p},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:p},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=s[0],i=s[1];this.props.addEndListener(r,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,s=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(a.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(u.Provider,{value:null},"function"===typeof n?n(e,s):i.a.cloneElement(i.a.Children.only(n),s))},t}(i.a.Component);function h(){}E.contextType=u,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},E.UNMOUNTED="unmounted",E.EXITED=p,E.ENTERING=d,E.ENTERED=m,E.EXITING=f;t.e=E},87:function(e,t,n){"use strict";var a,s=n(3),r=n(7),i=n(57),o=n.n(i),c=n(66),l=n(0),u=n.n(l),p=n(68),d=n(67),m=((a={})[p.b]="show",a[p.a]="show",a),f=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,i=Object(r.a)(e,["className","children"]),f=Object(l.useCallback)((function(e){Object(d.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return u.a.createElement(p.e,Object(s.a)({ref:t,addEndListener:c.a},i,{onEnter:f}),(function(e,t){return u.a.cloneElement(a,Object(s.a)({},t,{className:o()("fade",n,a.props.className,m[e])}))}))}));f.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},f.displayName="Fade",t.a=f}}]);
//# sourceMappingURL=12.5f5da1b4.chunk.js.map