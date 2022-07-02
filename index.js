// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__,a=r,f=function(t,e,r){var a,f,b,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(c.call(t,e)||l.call(t,e)?(a=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=a):t[e]=r.value),b="get"in r,p="set"in r,f&&(b||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return b&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t},b=e()?a:f,p=function(t,e,r){b(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},y=function(t){return"number"==typeof t},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=function(){return s&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,d=m,v=function(t){return d.call(t)},j=Object.prototype.hasOwnProperty,g=function(t,e){return null!=t&&j.call(t,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",S=g,h=O,P=m,T=v,w=function(t){var e,r,n;if(null==t)return P.call(t);r=t[h],e=S(t,h);try{t[h]=void 0}catch(e){return P.call(t)}return n=P.call(t),e?t[h]=r:delete t[h],n},I=_()?w:T,N=Number,E=N.prototype.toString,V=I,x=N,A=function(t){try{return E.call(t),!0}catch(t){return!1}},F=_(),G=function(t){return"object"==typeof t&&(t instanceof x||(F?A(t):"[object Number]"===V(t)))},k=y,q=G,M=p,Y=function(t){return k(t)||q(t)},C=G;M(Y,"isPrimitive",y),M(Y,"isObject",C);var z=Y,B=Number.POSITIVE_INFINITY,D=N.NEGATIVE_INFINITY,H=Math.floor,J=H,K=B,L=D,Q=function(t){return J(t)===t},R=function(t){return t<K&&t>L&&Q(t)},U=z.isPrimitive,W=R,X=function(t){return U(t)&&W(t)},Z=z.isObject,$=R,tt=function(t){return Z(t)&&$(t.valueOf())},et=X,rt=tt,nt=p,ot=function(t){return et(t)||rt(t)},it=tt;nt(ot,"isPrimitive",X),nt(ot,"isObject",it);var ut=ot,ct=Math.sqrt;function lt(t){var e;return!!ut.isPrimitive(t)&&(e=H(ct(t)+.5))*e===t}function at(t){var e,r;return!!ut.isObject(t)&&(r=t.valueOf(),(e=H(ct(r)+.5))*e===r)}function ft(t){return lt(t)||at(t)}return p(ft,"isPrimitive",lt),p(ft,"isObject",at),ft},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isSquareNumber=e();
//# sourceMappingURL=index.js.map
