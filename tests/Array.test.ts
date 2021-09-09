import { expect } from 'chai'
import '../src/Array'

describe('Array', () => {
	describe('first', () => {
		it('should return first element', (done) => {
			const array = [1, 2, 3]

			expect(array.first()).to.be.equal(1)

			done()
		})

		it('should return undefined when empty', (done) => {
			const array: number[] = []

			expect(array.first()).to.be.equal(undefined)

			done()
		})

		it('should return offseted element when offset', (done) => {
			const array = [1, 2, 3]

			expect(array.first(1)).to.be.equal(2)

			done()
		})

		it('should return undefined when offsetted out of bound', (done) => {
			const array = [1, 2, 3]

			expect(array.first(3)).to.be.equal(undefined)

			done()
		})
	})

	describe('last', () => {
		it('should return last element', (done) => {
			const array = [1, 2, 3]

			expect(array.last()).to.be.equal(3)

			done()
		})

		it('should return undefined when empty', (done) => {
			const array: number[] = []

			expect(array.last()).to.be.equal(undefined)

			done()
		})

		it('should return offseted element when offset', (done) => {
			const array = [1, 2, 3]

			expect(array.last(-1)).to.be.equal(2)

			done()
		})

		it('should return undefined when offsetted out of bound', (done) => {
			const array = [1, 2, 3]

			expect(array.last(3)).to.be.equal(undefined)

			done()
		})
	})

	describe('insert', () => {})
	describe('remove', () => {})
	describe('removeIndex', () => {})
	describe('includesEvery', () => {})
	describe('includesAny', () => {})
})
