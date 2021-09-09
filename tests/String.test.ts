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
})
