# PolyFull

![Logo](media/images/banner.png)

<div align="center">

![JavaScript](https://img.shields.io/badge/ES6-Supported-yellow.svg?style=for-the-badge&logo=JavaScript) ![TypeScript](https://img.shields.io/badge/TypeScript-Supported-blue.svg?style=for-the-badge&logo=Typescript)

[![CI](https://github.com/GiovanniCardamone/polyfull/actions/workflows/npm-ci.yml/badge.svg)](https://github.com/GiovanniCardamone/polyfull/actions/workflows/npm-ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/GiovanniCardamone/polyfull/badge.svg?branch=main)](https://coveralls.io/github/GiovanniCardamone/polyfull?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/GiovanniCardamone/polyfull/badge.svg)](https://snyk.io/test/github/GiovanniCardamone/polyfull)
[![NPM version](https://img.shields.io/npm/v/polyfull.svg?style=plastic)](https://www.npmjs.com/package/polyfull)
[![NPM downloads](https://img.shields.io/npm/dm/polyfull.svg?style=plastic)](https://www.npmjs.com/package/polyfull)

</div>

> :warning: THIS IS INTENDED TO USE ONLY IN FINAL APPLICATIONS.  
> if you use this in library, any other applications will have this injected as well

Polyfull is a library intended for augment javascript capability, somehow javascript
is still missing some of basic functionality that are usually provided throught other functions.

Polyfull aim to solve this problem injecting into the core component of the language the functionality
that are missing.

## :package: Installation

```bash
npm install polyfull
```

## :rocket: Usage

simply import `polyfull` to have access to supercharged functionality.

```javascript
import 'polyfull'
```

## :chart_with_upwards_trend: Examples

Some of functions that you might need to use.

```javascript
import 'polyfull'

// Array
[1, 2, 3].remove(2) // => [1, 3]
[1, 2, 3].removeIndex(2) // => [1, 2]
[1, 2, 3].first() // => 1
[1, 2, 3].last() // => 3

// Date
new Date(0).addHours(1) // => 1970-01-01T01:00:00.000Z

// Number
7.0.isPrime() // => true

// Promise
await Promise.allProperties({
  a: Promise.resolve(1),
  b: Promise.resolve(2),
}) // => { a: 1, b: 2 }

// String
'hello'.reverse() // => "olleh"
'racecar'.isPalindrome() // => true

// And Many Many Others!!
```

## :books: Documentation

[Full Documentation](https://giovannicardam.one/polyfull)

## :toolbox: Summary

<!-- POLYFULL-METHODS-TABLE:START - Do not remove or modify this section -->

<!-- POLYFULL-METHODS-TABLE:END -->

## :label: License

[MIT](https://github.com/GiovanniCardamone/polyfull/blob/main/LICENSE)
