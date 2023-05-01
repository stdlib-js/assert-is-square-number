// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var a,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,e)||l.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=a):t[e]=c.value),p="get"in c,b="set"in c,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),b&&i&&i.call(t,e,c.set),t};function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",m=b()?function(t){var e,r,n,o,i;if(null==t)return y.call(t);r=t[_],i=_,e=null!=(o=t)&&s.call(o,i);try{t[_]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[_]=r:delete t[_],n}:function(t){return y.call(t)},v=Number,d=v.prototype.toString,j=b();function g(t){return"object"==typeof t&&(t instanceof v||(j?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function S(t){return f(t)||g(t)}a(S,"isPrimitive",f),a(S,"isObject",g);var h=Number.POSITIVE_INFINITY,O=v.NEGATIVE_INFINITY,T=Math.floor;function w(t){return t<h&&t>O&&T(e=t)===e;var e}function I(t){return f(t)&&w(t)}function N(t){return g(t)&&w(t.valueOf())}function P(t){return I(t)||N(t)}a(P,"isPrimitive",I),a(P,"isObject",N);var E=Math.sqrt;function V(t){var e;return!!I(t)&&(e=T(E(t)+.5))*e===t}function x(t){var e,r;return!!N(t)&&(r=t.valueOf(),(e=T(E(r)+.5))*e===r)}function A(t){return V(t)||x(t)}return a(A,"isPrimitive",V),a(A,"isObject",x),A},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isSquareNumber=e();
//# sourceMappingURL=index.js.map
