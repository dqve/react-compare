(this["webpackJsonpdocs-compare"]=this["webpackJsonpdocs-compare"]||[]).push([[0],{112:function(e,a,t){"use strict";var r=t(3),s=t(7),l=t(57),i=t.n(l),n=t(0),c=t.n(n),o=t(58),d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.noGutters,u=e.as,m=void 0===u?"div":u,f=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(o.a)(t,"row"),v=b+"-cols",p=[];return d.forEach((function(e){var a,t=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+v+r+"-"+a)})),c.a.createElement(m,Object(r.a)({ref:a},f,{className:i.a.apply(void 0,[l,b,n&&"no-gutters"].concat(p))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},116:function(e,a,t){"use strict";var r=t(3),s=t(7),l=t(57),i=t.n(l),n=t(0),c=t.n(n),o=t(58),d=t(65),u=t(64),m=t(67),f=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.variant,d=e.as,u=void 0===d?"img":d,m=Object(s.a)(e,["bsPrefix","className","variant","as"]),f=Object(o.a)(t,"card-img");return c.a.createElement(u,Object(r.a)({ref:a,className:i()(n?f+"-"+n:f,l)},m))}));f.displayName="CardImg",f.defaultProps={variant:null};var b=f,v=Object(u.a)("h5"),p=Object(u.a)("h6"),O=Object(d.a)("card-body"),j=Object(d.a)("card-title",{Component:v}),x=Object(d.a)("card-subtitle",{Component:p}),N=Object(d.a)("card-link",{Component:"a"}),y=Object(d.a)("card-text",{Component:"p"}),P=Object(d.a)("card-header"),h=Object(d.a)("card-footer"),E=Object(d.a)("card-img-overlay"),C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,d=e.bg,u=e.text,f=e.border,b=e.body,v=e.children,p=e.as,j=void 0===p?"div":p,x=Object(s.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),N=Object(o.a)(t,"card"),y=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return c.a.createElement(m.a.Provider,{value:y},c.a.createElement(j,Object(r.a)({ref:a},x,{className:i()(l,N,d&&"bg-"+d,u&&"text-"+u,f&&"border-"+f)}),b?c.a.createElement(O,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=b,C.Title=j,C.Subtitle=x,C.Body=O,C.Link=N,C.Text=y,C.Header=P,C.Footer=h,C.ImgOverlay=E;a.a=C},157:function(e,a,t){"use strict";var r=t(3),s=t(7),l=t(57),i=t.n(l),n=(t(73),t(0)),c=t.n(n),o=(t(2),t(88)),d=t(61),u=t(58),m=c.a.forwardRef((function(e,a){var t,l,o=e.bsPrefix,m=e.bsCustomPrefix,f=e.type,b=e.size,v=e.htmlSize,p=e.id,O=e.className,j=e.isValid,x=void 0!==j&&j,N=e.isInvalid,y=void 0!==N&&N,P=e.plaintext,h=e.readOnly,E=e.custom,C=e.as,w=void 0===C?"input":C,g=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(n.useContext)(d.a).controlId,F=E?[m,"custom"]:[o,"form-control"],k=F[0],R=F[1];if(o=Object(u.a)(k,R),P)(l={})[o+"-plaintext"]=!0,t=l;else if("file"===f){var V;(V={})[o+"-file"]=!0,t=V}else if("range"===f){var T;(T={})[o+"-range"]=!0,t=T}else if("select"===w&&E){var L;(L={})[o+"-select"]=!0,L[o+"-select-"+b]=b,t=L}else{var S;(S={})[o]=!0,S[o+"-"+b]=b,t=S}return c.a.createElement(w,Object(r.a)({},g,{type:f,size:v,ref:a,readOnly:h,id:p||I,className:i()(O,t,x&&"is-valid",y&&"is-invalid")}))}));m.displayName="FormControl",a.a=Object.assign(m,{Feedback:o.a})},176:function(e,a,t){"use strict";var r=t(7),s=t(3),l=t(57),i=t.n(l),n=t(0),c=t.n(n),o=t(65),d=t(58),u=Object(o.a)("input-group-append"),m=Object(o.a)("input-group-prepend"),f=Object(o.a)("input-group-text",{Component:"span"}),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.size,n=e.className,o=e.as,u=void 0===o?"div":o,m=Object(r.a)(e,["bsPrefix","size","className","as"]);return t=Object(d.a)(t,"input-group"),c.a.createElement(u,Object(s.a)({ref:a},m,{className:i()(n,t,l&&t+"-"+l)}))}));b.displayName="InputGroup";var v=Object(s.a)({},b,{Text:f,Radio:function(e){return c.a.createElement(f,null,c.a.createElement("input",Object(s.a)({type:"radio"},e)))},Checkbox:function(e){return c.a.createElement(f,null,c.a.createElement("input",Object(s.a)({type:"checkbox"},e)))},Append:u,Prepend:m});a.a=v},179:function(e,a,t){"use strict";var r=t(3),s=t(7),l=t(57),i=t.n(l),n=t(0),c=t.n(n),o=(t(73),t(88)),d=t(61),u=t(58),m=c.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,f=e.type,b=void 0===f?"checkbox":f,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,x=e.isStatic,N=e.as,y=void 0===N?"input":N,P=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),h=Object(n.useContext)(d.a),E=h.controlId,C=h.custom?[o,"custom-control-input"]:[l,"form-check-input"],w=C[0],g=C[1];return l=Object(u.a)(w,g),c.a.createElement(y,Object(r.a)({},P,{ref:a,type:b,id:t||E,className:i()(m,l,p&&"is-valid",j&&"is-invalid",x&&"position-static")}))}));m.displayName="FormCheckInput";var f=m,b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,m=e.htmlFor,f=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(n.useContext)(d.a),v=b.controlId,p=b.custom?[l,"custom-control-label"]:[t,"form-check-label"],O=p[0],j=p[1];return t=Object(u.a)(O,j),c.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:m||v,className:i()(o,t)}))}));b.displayName="FormCheckLabel";var v=b,p=c.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,m=e.bsCustomPrefix,b=e.inline,p=void 0!==b&&b,O=e.disabled,j=void 0!==O&&O,x=e.isValid,N=void 0!==x&&x,y=e.isInvalid,P=void 0!==y&&y,h=e.feedbackTooltip,E=void 0!==h&&h,C=e.feedback,w=e.className,g=e.style,I=e.title,F=void 0===I?"":I,k=e.type,R=void 0===k?"checkbox":k,V=e.label,T=e.children,L=e.custom,S=e.as,z=void 0===S?"input":S,M=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===R||L,G=A?[m,"custom-control"]:[l,"form-check"],_=G[0],q=G[1];l=Object(u.a)(_,q);var B=Object(n.useContext)(d.a).controlId,H=Object(n.useMemo)((function(){return{controlId:t||B,custom:A}}),[B,A,t]),J=null!=V&&!1!==V&&!T,D=c.a.createElement(f,Object(r.a)({},M,{type:"switch"===R?"checkbox":R,ref:a,isValid:N,isInvalid:P,isStatic:!J,disabled:j,as:z}));return c.a.createElement(d.a.Provider,{value:H},c.a.createElement("div",{style:g,className:i()(w,l,A&&"custom-"+R,p&&l+"-inline")},T||c.a.createElement(c.a.Fragment,null,D,J&&c.a.createElement(v,{title:F},V),(N||P)&&c.a.createElement(o.a,{type:N?"valid":"invalid",tooltip:E},C))))}));p.displayName="FormCheck",p.Input=f,p.Label=v;var O=p,j=c.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,f=e.isValid,b=e.isInvalid,v=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(n.useContext)(d.a),N=x.controlId,y=x.custom?[o,"custom-file-input"]:[l,"form-control-file"],P=y[0],h=y[1];return l=Object(u.a)(P,h),c.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||N,type:"file",lang:v,className:i()(m,l,f&&"is-valid",b&&"is-invalid")}))}));j.displayName="FormFileInput";var x=j,N=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,m=e.htmlFor,f=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(n.useContext)(d.a),v=b.controlId,p=b.custom?[l,"custom-file-label"]:[t,"form-file-label"],O=p[0],j=p[1];return t=Object(u.a)(O,j),c.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:m||v,className:i()(o,t),"data-browse":f["data-browse"]}))}));N.displayName="FormFileLabel";var y=N,P=c.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,m=e.bsCustomPrefix,f=e.disabled,b=void 0!==f&&f,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,N=e.feedbackTooltip,P=void 0!==N&&N,h=e.feedback,E=e.className,C=e.style,w=e.label,g=e.children,I=e.custom,F=e.lang,k=e["data-browse"],R=e.as,V=void 0===R?"div":R,T=e.inputAs,L=void 0===T?"input":T,S=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=I?[m,"custom"]:[l,"form-file"],M=z[0],A=z[1];l=Object(u.a)(M,A);var G=Object(n.useContext)(d.a).controlId,_=Object(n.useMemo)((function(){return{controlId:t||G,custom:I}}),[G,I,t]),q=null!=w&&!1!==w&&!g,B=c.a.createElement(x,Object(r.a)({},S,{ref:a,isValid:p,isInvalid:j,disabled:b,as:L,lang:F}));return c.a.createElement(d.a.Provider,{value:_},c.a.createElement(V,{style:C,className:i()(E,l,I&&"custom-file")},g||c.a.createElement(c.a.Fragment,null,I?c.a.createElement(c.a.Fragment,null,B,q&&c.a.createElement(y,{"data-browse":k},w)):c.a.createElement(c.a.Fragment,null,q&&c.a.createElement(y,null,w),B),(p||j)&&c.a.createElement(o.a,{type:p?"valid":"invalid",tooltip:P},h))))}));P.displayName="FormFile",P.Input=x,P.Label=y;var h=P,E=t(157),C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.children,m=e.controlId,f=e.as,b=void 0===f?"div":f,v=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.a)(t,"form-group");var p=Object(n.useMemo)((function(){return{controlId:m}}),[m]);return c.a.createElement(d.a.Provider,{value:p},c.a.createElement(b,Object(r.a)({},v,{ref:a,className:i()(l,t)}),o))}));C.displayName="FormGroup";var w=C,g=(t(2),t(85)),I=c.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,o=e.bsPrefix,m=e.column,f=e.srOnly,b=e.className,v=e.htmlFor,p=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(n.useContext)(d.a).controlId;o=Object(u.a)(o,"form-label");var j="col-form-label";"string"===typeof m&&(j=j+"-"+m);var x=i()(b,o,f&&"sr-only",m&&j);return v=v||O,m?c.a.createElement(g.a,Object(r.a)({as:"label",className:x,htmlFor:v},p)):c.a.createElement(l,Object(r.a)({ref:a,className:x,htmlFor:v},p))}));I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var F=I,k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,o=void 0===n?"small":n,d=e.muted,m=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.a)(t,"form-text"),c.a.createElement(o,Object(r.a)({},m,{ref:a,className:i()(l,t,d&&"text-muted")}))}));k.displayName="FormText";var R=k,V=c.a.forwardRef((function(e,a){return c.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=O.Input,V.Label=O.Label;var T=V,L=t(65),S=Object(L.a)("form-row"),z=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,n=e.className,o=e.validated,d=e.as,m=void 0===d?"form":d,f=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.a)(t,"form"),c.a.createElement(m,Object(r.a)({},f,{ref:a,className:i()(n,o&&"was-validated",l&&t+"-inline")}))}));z.displayName="Form",z.defaultProps={inline:!1},z.Row=S,z.Group=w,z.Control=E.a,z.Check=O,z.File=h,z.Switch=T,z.Label=F,z.Text=R;a.a=z},61:function(e,a,t){"use strict";var r=t(0),s=t.n(r).a.createContext({controlId:void 0});a.a=s},64:function(e,a,t){"use strict";var r=t(3),s=t(0),l=t.n(s),i=t(57),n=t.n(i);a.a=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(r.a)({},a,{ref:t,className:n()(a.className,e)}))}))}},67:function(e,a,t){"use strict";var r=t(0),s=t.n(r).a.createContext(null);s.displayName="CardContext",a.a=s},73:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var s=null;return a.forEach((function(e){if(null==s){var a=e.apply(void 0,t);null!=a&&(s=a)}})),s}return(0,l.default)(r)};var r,s=t(87),l=(r=s)&&r.__esModule?r:{default:r};e.exports=a.default},85:function(e,a,t){"use strict";var r=t(3),s=t(7),l=t(57),i=t.n(l),n=t(0),c=t.n(n),o=t(58),d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,u=void 0===n?"div":n,m=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(o.a)(t,"col"),b=[],v=[];return d.forEach((function(e){var a,t,r,s=m[e];if(delete m[e],"object"===typeof s&&null!=s){var l=s.span;a=void 0===l||l,t=s.offset,r=s.order}else a=s;var i="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+f+i:""+f+i+"-"+a),null!=r&&v.push("order"+i+"-"+r),null!=t&&v.push("offset"+i+"-"+t)})),b.length||b.push(f),c.a.createElement(u,Object(r.a)({},m,{ref:a,className:i.a.apply(void 0,[l].concat(b,v))}))}));u.displayName="Col",a.a=u},87:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,s,l,i){var n=s||"<<anonymous>>",c=i||r;if(null==t[r])return a?new Error("Required "+l+" `"+c+"` was not specified in `"+n+"`."):null;for(var o=arguments.length,d=Array(o>6?o-6:0),u=6;u<o;u++)d[u-6]=arguments[u];return e.apply(void 0,[t,r,n,l,c].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},88:function(e,a,t){"use strict";var r=t(3),s=t(7),l=t(57),i=t.n(l),n=t(0),c=t.n(n),o=t(1),d=t.n(o),u={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},m=c.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,n=e.className,o=e.type,d=void 0===o?"valid":o,u=e.tooltip,m=void 0!==u&&u,f=Object(s.a)(e,["as","className","type","tooltip"]);return c.a.createElement(l,Object(r.a)({},f,{ref:a,className:i()(n,d+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=u,a.a=m}}]);
//# sourceMappingURL=0.dfba16dc.chunk.js.map