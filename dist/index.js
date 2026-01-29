"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(y,n){
var f=require('@stdlib/assert-is-integer/dist').isPrimitive,m=require('@stdlib/math-base-special-sqrt/dist'),b=require('@stdlib/math-base-special-floor/dist');function O(e){var r;return f(e)?(r=b(m(e)+.5),r*r===e):!1}n.exports=O
});var u=t(function(R,q){
var x=require('@stdlib/assert-is-integer/dist').isObject,j=require('@stdlib/math-base-special-sqrt/dist'),p=require('@stdlib/math-base-special-floor/dist');function P(e){var r,i;return x(e)?(i=e.valueOf(),r=p(j(i)+.5),r*r===i):!1}q.exports=P
});var c=t(function(h,v){
var N=s(),S=u();function g(e){return N(e)||S(e)}v.exports=g
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=c(),l=s(),I=u();o(a,"isPrimitive",l);o(a,"isObject",I);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
