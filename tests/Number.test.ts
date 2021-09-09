import { expect } from 'chai'

import '../src/Number'

describe('Number', () => {
	describe('abs', () => {
		it('should be 2 equals 2', (done) => {
			expect((2.0).abs()).to.equal(2)
			done()
		})

		it('should be -2 equals 2', (done) => {
			expect((-2.0).abs()).to.equal(2)
			done()
		})
	})

	describe('pow', () => {
		it('should be 2^3 equals 8', (done) => {
			expect((2.0).pow(3)).to.equal(8)
			done()
		})
	})

	describe('sqrt', () => {
		it('should be 9 equals 3', (done) => {
			expect((9.0).sqrt()).to.equal(3)
			done()
		})
	})

	describe('log', () => {
		it('should be Math.E equals 1', (done) => {
			expect(Math.E.log()).to.equal(1)
			done()
		})
	})

	describe('exp', () => {
		it('should be 0 equals 1', (done) => {
			expect((0.0).exp()).to.equal(1)
			done()
		})
	})

	describe('isDivisibleBy', () => {
		it('should be 4 divisible by 2', (done) => {
			expect((4.0).isDivisibleBy(2)).to.equal(true)
			done()
		})

		it('should be -4 divisible by 2', (done) => {
			expect((-4.0).isDivisibleBy(2)).to.equal(true)
			done()
		})

		it('should not be 5 divisible by 2', (done) => {
			expect((5.0).isDivisibleBy(2)).to.equal(false)
			done()
		})
	})

	describe('isEven', () => {
		it('should be 0 an even number', (done) => {
			expect((0.0).isEven()).to.equal(true)
			done()
		})

		it('should be 2 an even number', (done) => {
			expect((2.0).isEven()).to.equal(true)
			done()
		})

		it('should be -2 an even number', (done) => {
			expect((-2.0).isEven()).to.equal(true)
			done()
		})

		it('should not be 3 be an even number', (done) => {
			expect((3.0).isEven()).to.equal(false)
			done()
		})
	})
	describe('isOdd', () => {
		it('should be not 0 an odd number', (done) => {
			expect((0.0).isOdd()).to.equal(false)
			done()
		})

		it('should be not 2 an odd number', (done) => {
			expect((2.0).isOdd()).to.equal(false)
			done()
		})

		it('should be 1 an odd number', (done) => {
			expect((1.0).isOdd()).to.equal(true)
			done()
		})

		it('should be -1 an odd number', (done) => {
			expect((-1.0).isOdd()).to.equal(true)
			done()
		})
	})
})
