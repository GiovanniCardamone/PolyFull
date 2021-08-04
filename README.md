# polyfull

[![CI](https://github.com/GiovanniCardamone/polyfull/actions/workflows/npm-ci.yml/badge.svg)](https://github.com/GiovanniCardamone/polyfull/actions/workflows/npm-ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/GiovanniCardamone/polyfull/badge.svg?branch=main)](https://coveralls.io/github/GiovanniCardamone/polyfull?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/GiovanniCardamone/polyfull/badge.svg)](https://snyk.io/test/github/fastify/fastify)
[![NPM version](https://img.shields.io/npm/v/polyfull.svg?style=plastic)](https://www.npmjs.com/package/polyfull)
[![NPM downloads](https://img.shields.io/npm/dm/polyfull.svg?style=plastic)](https://www.npmjs.com/package/polyfull)


supercharge javascript with missing functions

## Documentation

[Documentation](https://giovannicardam.one/polyfull)

## Installation

```bash
  npm install polyfull
```

## Usage

in the index of your project import `polyfull` to have access to any of the functions

```javascript
import 'polyfull'
```

than use in any other files

```javascript
const myArray = [1, 2, 3]

myArray.remove(2)

console.log(myArray)

// [1, 3]
```

## License

[MIT](https://github.com/GiovanniCardamone/polyfull/blob/main/LICENSE)
