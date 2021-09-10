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
3.0.pow(2) // => 6

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

<!-- POLYFULL-METHODS-TABLE:START - Do not remove or modify this section -->
### :arrow_forward:	ArrayConstructor

| Method | Description |
| ------ | ----------- |
| isNotArray | check if arguments is not array |

### :arrow_forward:	Array

| Method | Description |
| ------ | ----------- |
| first | get first element from array |
| last | get first element from array |
| insert | insert new element in specific position |
| remove | remove element from array |
| removeIndex | remove element from array at specified index |
| includesEvery | check if the other Array includes every element in Array |
| includesAny | check if the other Array includes any element in Array |

### :arrow_forward:	Date

| Method | Description |
| ------ | ----------- |
| addMilliseconds | add milliseconds to Date |
| addSeconds | add seconds to Date |
| addMinutes | add minutes to Date |
| addHours | add hours to Date |
| addDate | add days to Date |
| addMonth | add months to Date |
| addFullYear | add Years to Date |
| subMilliseconds | subtract milliseconds from Date |
| subSeconds | subtract seconds from date |
| subMinutes | subtract minutes from Date |
| subHours | subtract hours from Date |
| subDate | subtract days from Date |
| subMonth | subtract months from Date |
| subFullYear | subtract years from Date |

### :arrow_forward:	Number

| Method | Description |
| ------ | ----------- |
| abs | shortcut for Math.abs |
| acos | shortcut for Math.acos |
| acosh | shortcut for Math.acosh |
| asin | shortcut for Math.asin |
| asinh | shortcut for Math.asinh |
| atan | shortcut for Math.atan |
| atan2 | shortcut for Math.atan2 |
| atanh | shortcut for Math.atanh |
| cbrt | shortcut for Math.cbrt |
| ceil | shortcut for Math.ceil |
| clz32 | shortcut for Math.clz32 |
| cos | shortcut for Math.cos |
| cosh | shortcut for Math.cosh |
| exp | shortcut for Math.exp |
| expm1 | shortcut for Math.expm1 |
| floor | shortcut for Math.floor |
| fround | shortcut for Math.fround |
| hypot | shortcut for Math.hypot |
| imul | shortcut for Math.imul |
| log | shortcut for Math.log |
| log10 | shortcut for Math.log10 |
| log1p | shortcut for Math.log1p |
| log2 | shortcut for Math.log2 |
| pow | shortcut for Math.pow |
| round | shortcut for Math.round |
| sign | shortcut for Math.sign |
| sin | shortcut for Math.sin |
| sinh | shortcut for Math.sinh |
| sqrt | shortcut for Math.sqrt |
| tan | shortcut for Math.tan |
| tanh | shortcut for Math.tanh |
| trunc | shortcut for Math.trunc |
| isEven | check if number is even |
| isOdd | check if number is odd |
| isPrime | check if number is prime |
| isDivisibleBy | check if number is divisible by other number |
| goldenRatio | retrive the golden ratio of a number |

### :arrow_forward:	PromiseConstructor

| Method | Description |
| ------ | ----------- |
| allProperties | resolve an object of promises |

### :arrow_forward:	String

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
