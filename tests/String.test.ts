import { expect } from 'chai'

import '../src/String'

describe('String', () => {
	describe('reverse', () => {
		it('should return reversed string', (done) => {
			expect('hello'.reverse()).to.be.equal('olleh')
			done()
		})
	})

	describe('toBase64/fromBase64', () => {
		it('should return base64 of string', (done) => {
			expect('hello'.toBase64().fromBase64()).to.be.equal('hello')
			done()
		})
	})

	describe('toTitleCase', () => {
		it('single word', (done) => {
			expect('hello'.toTitleCase()).to.be.equal('Hello')
			done()
		})

		it('multiple words', (done) => {
			expect('hello world'.toTitleCase()).to.be.equal('Hello World')
			done()
		})
	})

	describe('ucFirst', () => {
		it('shold make first letter uppercase', (done) => {
			expect('hello world'.ucFirst()).to.be.equal('Hello world')
			expect('Hello world'.ucFirst()).to.be.equal('Hello world')
			done()
		})
	})

	describe('toKebabCase', () => {
		it('should split across Uppercase letters', (done) => {
			expect('HelloWorld'.toKebabCase()).to.be.equal('hello-world')
			expect('helloWorld'.toKebabCase()).to.be.equal('hello-world')
			done()
		})

		it('should split across spaces', (done) => {
			expect('hello world'.toKebabCase()).to.be.equal('hello-world')
			expect('Hello World'.toKebabCase()).to.be.equal('hello-world')
			expect(' hello   world '.toKebabCase()).to.be.equal('hello-world')
			done()
		})
	})

	describe('isNumeric', () => {
		it('number should be numeric', (done) => {
			expect('1'.isNumeric()).to.be.equal(true)
			expect('123'.isNumeric()).to.be.equal(true)
			expect('0123'.isNumeric()).to.be.equal(true)
			done()
		})

		it('hex should be numeric', (done) => {
			expect('0x123'.isNumeric()).to.be.equal(true)
			expect('0x0123'.isNumeric()).to.be.equal(true)
			done()
		})

		it('float should be numeric', (done) => {
			expect('1.1'.isNumeric()).to.be.equal(true)
			done()
		})

		it('letter to be not numeric', (done) => {
			expect('a'.isNumeric()).to.be.equal(false)
			expect('hello'.isNumeric()).to.be.equal(false)
			done()
		})

		it('NaN to be not numeric', (done) => {
			expect('NaN'.isNumeric()).to.be.equal(false)
			expect('nan'.isNumeric()).to.be.equal(false)
			done()
		})
	})

	describe('isPalindrome', () => {
		it('palindrome should be palindrome', (done) => {
			expect('racecar'.isPalindrome()).to.be.equal(true)
			done()
		})

		it('not palindrome should be not palindrome', (done) => {
			expect('hello'.isPalindrome()).to.be.equal(false)
			done()
		})

		it('single letter should be palindrome', (done) => {
			expect('a'.isPalindrome()).to.be.equal(true)
			done()
		})

		it('empty string should be not palindrome', (done) => {
			expect(''.isPalindrome()).to.be.equal(false)
			done()
		})
	})

	describe('equalsIgnoreCase', () => {
		it('should be equal when equals', (done) => {
			expect('hello'.equalsIgnoreCase('hello')).to.be.equal(true)
			done()
		})

		it('should be equal when is equal with different case', (done) => {
			expect('hello'.equalsIgnoreCase('HELLO')).to.be.equal(true)
			done()
		})
	})

	describe('unrepeat', () => {
		it('should suppress repetitions', (done) => {
			expect('ababab'.unrepeat('ab')).to.be.equal('ab')
			expect('hello ababab world'.unrepeat('ab')).to.be.equal('hello ab world')
			done()
		})

		it('should keep when no repetition', (done) => {
			expect('ab'.unrepeat('ab')).to.be.equal('ab')
			expect('hello ab world'.unrepeat('ab')).to.be.equal('hello ab world')
			done()
		})
	})

	describe('limit', () => {
		it('should return same string if smaller', (done) => {
			expect('hello'.limit(4)).to.be.equal('hello')
			expect('hello'.limit(5)).to.be.equal('hello')
			expect('hello'.limit(8, '...')).to.be.equal('hello')
			done()
		})

		it('should truncate string', (done) => {
			expect('hello'.limit(3)).to.be.equal('hell')
			expect('hello world'.limit(8, '...')).to.be.equal('hello ...')
			done()
		})
	})

	describe('pad', () => {
		it('shouldnt pad if length is greather', (done) => {
			expect('hello world'.pad(5)).to.be.equal('hello world')
			done()
		})

		it('should pad string', (done) => {
			expect('hello'.pad(9)).to.be.equal('  hello  ')
			expect('hello'.pad(9, '_')).to.be.equal('__hello__')
			done()
		})

		it('should prioritize left if not even', (done) => {
			expect('hello'.pad(8)).to.be.equal('  hello ')
			done()
		})
	})
})
