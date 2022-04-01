// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;var l=e,f=function(r,t,e){var l,f,v,b;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(r,t)||c.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),v="get"in e,b="set"in e,f&&(v||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,e.get),b&&a&&a.call(r,t,e.set),r},v=t()?l:f;var b=function(r,t,e){v(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var p=function(r){return"number"==typeof r};var y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return y&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var j=function(r){return m.call(r)},d=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&d.call(r,t)},g="function"==typeof Symbol?Symbol.toStringTag:"",S=O,P=g,h=s;var w=j,I=function(r){var t,e,n;if(null==r)return h.call(r);e=r[P],t=S(r,P);try{r[P]=void 0}catch(t){return h.call(r)}return n=h.call(r),t?r[P]=e:delete r[P],n},N=_()?I:w,T=Number,E=T.prototype.toString;var V=N,A=T,F=function(r){try{return E.call(r),!0}catch(r){return!1}},G=_();var k=function(r){return"object"==typeof r&&(r instanceof A||(G?F(r):"[object Number]"===V(r)))},x=p,M=k;var Y=b,q=function(r){return x(r)||M(r)},C=k;Y(q,"isPrimitive",p),Y(q,"isObject",C);var z=q,B=Number.POSITIVE_INFINITY,D=T.NEGATIVE_INFINITY,H=Math.floor,J=H;var K=B,L=D,Q=function(r){return J(r)===r};var R=function(r){return r<K&&r>L&&Q(r)},U=z.isPrimitive,W=R;var X=function(r){return U(r)&&W(r)},Z=z.isObject,$=R;var rr=function(r){return Z(r)&&$(r.valueOf())},tr=X,er=rr;var nr=b,or=function(r){return tr(r)||er(r)},ir=rr;nr(or,"isPrimitive",X),nr(or,"isObject",ir);var ar=or,ur=Math.sqrt,cr=ar.isPrimitive,lr=ur,fr=H;var vr=function(r){var t;return!!cr(r)&&(t=fr(lr(r)+.5))*t===r},br=ar.isObject,pr=ur,yr=H;var _r=function(r){var t,e;return!!br(r)&&(e=r.valueOf(),(t=yr(pr(e)+.5))*t===e)},sr=vr,mr=_r;var jr=b,dr=function(r){return sr(r)||mr(r)},Or=vr,gr=_r;jr(dr,"isPrimitive",Or),jr(dr,"isObject",gr);var Sr=dr;export{Sr as default,gr as isObject,Or as isPrimitive};
//# sourceMappingURL=mod.js.map
