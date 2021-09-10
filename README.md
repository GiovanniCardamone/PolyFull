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

## :toolbox: Summary

<style>
table {
  display: table!important;
  width: 100%!important;
}
table th:nth-child(1) {
  width: 10%!important;
}
</style>

<!-- POLYFULL-METHODS-TABLE:START - Do not remove or modify this section -->
### ArrayConstructor

| Method | Description |
| ------ | ----------- |
| isNotArray | check if arguments is not array |

### Array

| Method | Description |
| ------ | ----------- |
| first |  get first element |
| last | returns last element of array |
| insert | insert @e in position @index |
| remove | remove any occurrence of @t from array by value |
| removeIndex | remove element at index |
| includesEvery | all elements of @other array are in @this array |
| includesAny | this includes any of @other |

### Date

| Method | Description |
| ------ | ----------- |
| addMilliseconds |  |
| addSeconds |  |
| addMinutes |  |
| addHours |  |
| addDate |  |
| addMonth |  |
| addFullYear |  |
| subMilliseconds |  |
| subSeconds |  |
| subMinutes |  |
| subHours |  |
| subDate |  |
| subMonth |  |
| subFullYear |  |

### NumberConstructor

| Method | Description |
| ------ | ----------- |

### Number

| Method | Description |
| ------ | ----------- |
| abs |  |
| acos |  |
| acosh |  |
| asin |  |
| asinh |  |
| atan |  |
| atan2 |  |
| atanh |  |
| cbrt |  |
| ceil |  |
| clz32 |  |
| cos |  |
| cosh |  |
| exp |  |
| expm1 |  |
| floor |  |
| fround |  |
| hypot |  |
| imul |  |
| log |  |
| log10 |  |
| log1p |  |
| log2 |  |
| pow |  |
| round |  |
| sign |  |
| sin |  |
| sinh |  |
| sqrt |  |
| tan |  |
| tanh |  |
| trunc |  |
| isEven |  |
| isOdd |  |
| isPrime |  |
| isDivisibleBy |  |
| isPositive |  |

### PromiseConstructor

| Method | Description |
| ------ | ----------- |
| allProperties |  |

### String

| Method | Description |
| ------ | ----------- |
| reverse | reverse a string |
| toBase64 | convert to base64 |
| fromBase64 | convert from base64 |
| toTitleCase | make first letter of each word uppercase |
| isNumeric | check if string is valid numeric |
| isPalindrome | check if string is palindrome |
| equalsIgnoreCase | check if string is equal to other ignoring case |
<!-- POLYFULL-METHODS-TABLE:END -->

## :books: Documentation

[Full Documentation](https://giovannicardam.one/polyfull)

## :label: License

[MIT](https://github.com/GiovanniCardamone/polyfull/blob/main/LICENSE)
