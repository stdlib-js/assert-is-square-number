<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isSquareNumber

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a square number.

<section class="intro">

A **square number** is defined as an integer value which is the square of an integer.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-square-number
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var isSquareNumber = require( '@stdlib/assert-is-square-number' );
```

#### isSquareNumber( value )

Tests if a `value` is a square number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSquareNumber( 4.0 );
// returns true

bool = isSquareNumber( new Number( 4.0 ) );
// returns true

bool = isSquareNumber( 3.14 );
// returns false

bool = isSquareNumber( -5.0 );
// returns false

bool = isSquareNumber( NaN );
// returns false

bool = isSquareNumber( null );
// returns false
```

#### isSquareNumber.isPrimitive( value )

Tests if a `value` is a primitive square number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSquareNumber.isPrimitive( 4.0 );
// returns true

bool = isSquareNumber.isPrimitive( new Number( 4.0 ) );
// returns false
```

#### isSquareNumber.isObject( value )

Tests if a `value` is a `Number` object having a value which is a square number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isSquareNumber.isObject( 4.0 );
// returns false

bool = isSquareNumber.isObject( new Number( 4.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number-ctor' );
var isSquareNumber = require( '@stdlib/assert-is-square-number' );

var bool = isSquareNumber( 4.0 );
// returns true

bool = isSquareNumber( new Number( 4.0 ) );
// returns true

bool = isSquareNumber( 0.0 );
// returns true

bool = isSquareNumber( 1.0 );
// returns true

bool = isSquareNumber( 3.14 );
// returns false

bool = isSquareNumber( -5.0 );
// returns false

bool = isSquareNumber( NaN );
// returns false

bool = isSquareNumber( '0.5' );
// returns false

bool = isSquareNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-cube-number`][@stdlib/assert/is-cube-number]</span><span class="delimiter">: </span><span class="description">test if a value is a cube number.</span>
-   <span class="package-name">[`@stdlib/assert-is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert-is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert-is-triangular-number`][@stdlib/assert/is-triangular-number]</span><span class="delimiter">: </span><span class="description">test if a value is a triangular number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-square-number.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-square-number

[test-image]: https://github.com/stdlib-js/assert-is-square-number/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/assert-is-square-number/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-square-number/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-square-number?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-square-number.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-square-number/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-square-number/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-square-number/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-square-number/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-square-number/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-square-number/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-cube-number]: https://github.com/stdlib-js/assert-is-cube-number

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert-is-integer

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number

[@stdlib/assert/is-triangular-number]: https://github.com/stdlib-js/assert-is-triangular-number

<!-- </related-links> -->

</section>

<!-- /.links -->
