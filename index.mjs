// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";var i=t.isPrimitive,n=s,m=r;var a=function(e){var t;return!!i(e)&&(t=m(n(e)+.5))*t===e},d=t.isObject,o=s,l=r;var j=function(e){var t,s;return!!d(e)&&(s=e.valueOf(),(t=l(o(s)+.5))*t===s)},v=a,p=j;var c=e,f=function(e){return v(e)||p(e)},h=a,u=j;c(f,"isPrimitive",h),c(f,"isObject",u);var b=f;export{b as default,u as isObject,h as isPrimitive};
//# sourceMappingURL=index.mjs.map
