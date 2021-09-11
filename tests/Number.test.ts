import { expect } from 'chai'

import '../src/Number'

describe('NumberConstructor', () => {
	describe('random', () => {
		it('should give a random number', (done) => {
			expect(typeof Number.random()).to.be.equal('number')
			done()
		})

		it('should give a random number with minimum', (done) => {
			for (let i = 0; i < 1000; i++) {
				expect(Number.random(0)).to.be.greaterThanOrEqual(0)
			}

			done()
		})

		it('should give a random number with minimum', (done) => {
			for (let i = 0; i < 1000; i++) {
				expect(Number.random(Number.MIN_SAFE_INTEGER, 0)).to.be.lessThanOrEqual(
					0
				)
			}

			done()
		})
	})
})

describe('Number', () => {
	// methods without parameter
	;[
		'abs',
		'acos',
		'acosh',
		'asin',
		'asinh',
		'atan',
		'atanh',
		'cbrt',
		'ceil',
		'clz32',
		'cos',
		'cosh',
		'exp',
		'expm1',
		'floor',
		'fround',
		'log',
		'log10',
		'log1p',
		'log2',
		'round',
		'sign',
		'sin',
		'sinh',
		'sqrt',
		'tan',
		'tanh',
		'trunc',
	].forEach((method) => {
		describe(method, () => {
			it(`should be equal to Math.${method}`, (done) => {
				expect((1)[method]()).to.equal(Math[method](1))
				done()
			})
		})
	})

	// method with one parameter
	;['atan2', 'imul', 'pow'].forEach((method) => {
		describe(method, () => {
			it(`should be equal to Math.${method}`, (done) => {
				expect((1)[method](2)).to.equal(Math[method](1, 2))
				done()
			})
		})
	})

	//

	describe('isPrime', () => {
		it('should be 0 not prime', (done) => {
			expect((0.0).isPrime()).to.be.equal(false)
			done()
		})

		it('should be 1 not prime', (done) => {
			expect((1.0).isPrime()).to.be.equal(false)
			done()
		})

		it('should be 2 prime', (done) => {
			expect((2.0).isPrime()).to.be.equal(true)
			done()
		})

		it('should be 4 not prime', (done) => {
			expect((4.0).isPrime()).to.be.equal(false)
			done()
		})

		it('should be 19 prime', (done) => {
			expect((19.0).isPrime()).to.be.equal(true)
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

	describe('goldenRatio', () => {
		it('should calculate golden ratio of number', (done) => {
			const [high, low] = (40.0).goldenRatio()
			expect(high).to.be.closeTo(24.72, 0.1)
			expect(low).to.be.closeTo(15.28, 0.1)

			done()
		})
	})

	describe('percentage', () => {
		it('should get percentage of number', (done) => {
			expect((100.0).percentage(20)).to.be.equal(20)
			expect((100.0).percentage(200)).to.be.equal(200)
			expect((100.0).percentage(-10)).to.be.equal(-10)

			done()
		})
	})
})
