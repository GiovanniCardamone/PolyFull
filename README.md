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
>
> if you use this in library, any other applications that use your library will have `polyfull` injected as well.

PolyFull is a library intended to augment JavaScript capabilities. Somehow JavaScript
is still missing some of the basic functionalities that are usually provided through other functions.

Its aim is to solve this issue by injecting the missing functionalities into the core components.

## :new: Submit request for functionality that are missing

Some nice feature are missing in Javascript? [Submit to me](https://github.com/GiovanniCardamone/polyfull/issues/new?assignees=GiovanniCardamone&labels=enhancement&template=feature_request.md&title=) and i will take care of it!

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

// ArrayConstructor
Array.zip([1, 2, 3], ['a', 'b', 'c']) // => [[1, 'a'], [2, 'b'], [3, 'c']]

// Array
[1, 2, 3].remove(2) // => [1, 3]
[1, 2, 3].removeIndex(2) // => [1, 2]
[1, 2, 3].first() // => 1
[1, 2, 3].last() // => 3

// Date
new Date(0).addHours(1) // => 1970-01-01T01:00:00.000Z
new Date(0).isBefore(new Date(Date.now())) // => true
new Date(0).isAfter(new Date(Date.now())) // => false
new Date(0).diff(new Date()) // => how many ms passed from 1970? :D

// Number
7.0.isPrime() // => true
3.0.pow(2) // => 6
40.0.goldenRation() // => [24.72~, 15.28~]
50.0.percentage(20) // => 10

// Promise
await Promise.allProperties({
  a: Promise.resolve(1),
  b: Promise.resolve(2),
}) // => { a: 1, b: 2 }

// String
'hello'.reverse() // => "olleh"
'racecar'.isPalindrome() // => true
'0x01'.isNumeric() // => true
'polyfull'.equalsIgnoreCase('POLYFULL') // => true

// And Many Many Others!!
```

## :toolbox: Summary

<!-- POLYFULL-METHODS-TABLE:START - Do not remove or modify this section -->
### :arrow_forward: ArrayConstructor

| Method | Description |
| ------ | ----------- |
| isNotArray | check if arguments is not array |
| zip | combine multiple array toghter by index |
| collapse | collapse multiple array into single array |

### :arrow_forward: Array

| Method | Description |
| ------ | ----------- |
| first | get first element from array |
| last | get first element from array |
| insert | insert new element in specific position |
| remove | remove element from array |
| removeIndex | remove element from array at specified index |
| prepend | prepend an element into the array |
| includesEvery | check if the other Array includes every element in Array |
| includesAny | check if the other Array includes any element in Array |
| chunk | split array in cunks of desired size |

### :arrow_forward: Date

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
| isBefore | check if current date is before another |
| isAfter | check if current date is after another |
| isSame | check if two date are the same |
| diff | difference in ms between two dates |

### :arrow_forward: NumberConstructor

| Method | Description |
| ------ | ----------- |
| random | generate a number between min-max (default: from Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER) |

### :arrow_forward: Number

| Method | Description |
| ------ | ----------- |
| abs | Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5. |
| acos | Returns the arc cosine (or inverse cosine) of a number. |
| acosh | Returns the inverse hyperbolic cosine of a number. |
| asin | Returns the arcsine of a number. |
| asinh | Returns the inverse hyperbolic sine of a number. |
| atan | Returns the arctangent of a number. |
| atan2 | Returns the angle (in radians) from the X axis to a point. |
| atanh | Returns the inverse hyperbolic tangent of a number. |
| cbrt | Returns an implementation-dependent approximation to the cube root of number. |
| ceil | Returns the smallest integer greater than or equal to its numeric argument. |
| clz32 | Returns the number of leading zero bits in the 32-bit binary representation of a number. |
| cos | Returns the cosine of a number. |
| cosh | Returns the hyperbolic cosine of a number. |
| exp | Returns e (the base of natural logarithms) raised to a power. |
| expm1 | Returns the result of (e^x - 1), which is an implementation-dependent approximation to subtracting 1 from the exponential function of x (e raised to the power of x, where e
is the base of the natural logarithms). |
| floor | Returns the greatest integer less than or equal to its numeric argument. |
| fround | Returns the nearest single precision float representation of a number. |
| imul | Returns the result of 32-bit multiplication of two numbers. |
| log | Returns the natural logarithm (base e) of a number. |
| log10 | Returns the base 10 logarithm of a number. |
| log1p | Returns the natural logarithm of 1 + x. |
| log2 | Returns the base 2 logarithm of a number. |
| pow | Returns the value of a base expression taken to a specified power. |
| round | Returns a supplied numeric expression rounded to the nearest integer. |
| sign | Returns the sign of the x, indicating whether number is positive, negative or zero. |
| sin | Returns the sine of a number. |
| sinh | Returns the hyperbolic sine of a number. |
| sqrt | Returns the square root of a number. |
| tan | Returns the tangent of a number. |
| tanh | Returns the hyperbolic tangent of a number. |
| trunc | Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x. |
| isEven | Return true if number is even |
| isOdd | Return true if number is odd |
| isPrime | Return true if number is prime |
| isDivisibleBy | Return true if number divisible by other |
| goldenRatio | Return golden long and short side ration of number |
| percentage | Return percentage of number |

### :arrow_forward: PromiseConstructor

| Method | Description |
| ------ | ----------- |
| allProperties | resolve an object of promises |

### :arrow_forward: String

| Method | Description |
| ------ | ----------- |
| reverse | reverse a string |
| toBase64 | convert to base64 |
| fromBase64 | convert from base64 |
| toTitleCase | make first letter of each word uppercase |
| ucFirst | make first letter uppercase |
| toKebabCase | make string in kebab case representation |
| isNumeric | check if string is valid numeric |
| isPalindrome | check if string is palindrome |
| equalsIgnoreCase | check if string is equal to other ignoring case |
| unrepeat | replace multiple character/string repetition with single one |
| limit | limit the length of the string |
| pad | Pads string left and right |
<!-- POLYFULL-METHODS-TABLE:END -->

## :books: Documentation

[Full Documentation](https://giovannicardam.one/polyfull)

## :label: License

[MIT](https://github.com/GiovanniCardamone/polyfull/blob/main/LICENSE)
