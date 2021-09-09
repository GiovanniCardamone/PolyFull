import { expect } from 'chai'
import '../src/Array'

describe('ArrayConstructor', () => {
	describe('isNotArray', () => {
		it('should array be false', (done) => {
			expect(Array.isNotArray([1, 2, 3])).to.be.equal(false)
			done()
		})

		it('should not an array be true', (done) => {
			expect(Array.isNotArray(1)).to.be.equal(true)
			expect(Array.isNotArray('a')).to.be.equal(true)
			expect(Array.isNotArray({})).to.be.equal(true)
			done()
		})
	})
})

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

	describe('insert', () => {
		it('should inser item in position', (done) => {
			const a = [1, 2, 3]

			a.insert(0, 0)
			expect(a).to.deep.equal([0, 1, 2, 3])

			const b = [1, 2, 3]
			b.insert(1, 42)
			expect(b).to.deep.equal([1, 42, 2, 3])
			done()
		})
	})

	describe('remove', () => {
		it('should remove found element', (done) => {
			const a = [1, 2, 3]

			a.remove(2)
			expect(a).to.deep.equal([1, 3])
			done()
		})

		it('shouldnt affect when removed unexistent', (done) => {
			const a = [1, 2, 3]

			a.remove(4)
			expect(a).to.deep.equal([1, 2, 3])
			done()
		})
	})

	describe('removeIndex', () => {
		it('should remove element at index', (done) => {
			const a = [1, 2, 3]

			a.removeIndex(0)
			expect(a).to.deep.equal([2, 3])
			done()
		})

		it('shouldnt affect when removed unexistent index', (done) => {
			const a = [1, 2, 3]

			a.removeIndex(3)
			expect(a).to.deep.equal([1, 2, 3])
			done()
		})
	})

	describe('includesEvery', () => {
		it('should return true when all elements are included', (done) => {
			expect([1, 2, 3].includesEvery([1, 2])).to.be.equal(true)
			done()
		})

		it('should return false when at least one elements are not included', (done) => {
			expect([1, 2, 3].includesEvery([1, 4])).to.be.equal(false)
			done()
		})
	})

	describe('includesAny', () => {
		it('should return true when at least one elements are included', (done) => {
			expect([1, 2, 3].includesAny([1, 4])).to.be.equal(true)
			done()
		})

		it('should return false when no elements are included', (done) => {
			expect([1, 2, 3].includesAny([4, 5])).to.be.equal(false)
			done()
		})
	})
})
