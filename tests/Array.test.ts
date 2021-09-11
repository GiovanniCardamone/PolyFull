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

	describe('zip', () => {
		it('should combine multiple array togheter', (done) => {
			expect(Array.zip([1, 2, 3], ['a', 'b', 'c'])).to.deep.equal([
				[1, 'a'],
				[2, 'b'],
				[3, 'c'],
			])
			done()
		})

		it('should combine multiple to smallest', (done) => {
			expect(Array.zip([1, 2, 3], ['a', 'b'])).to.deep.equal([
				[1, 'a'],
				[2, 'b'],
			])
			done()
		})
	})

	describe('collapse', () => {
		it('should collapse multiple arrays', (done) => {
			expect(Array.collapse([1, 2, 3], [4, 5, 6], [7, 8, 9])).to.deep.equal([
				1, 2, 3, 4, 5, 6, 7, 8, 9,
			])
			done()
		})
	})

	describe('intersect', () => {
		it('should intersect array', (done) => {
			expect(Array.intersect([1, 2, 3])).to.be.deep.equal([1, 2, 3])
			expect(Array.intersect([1, 2, 3, 7], [4, 2, 6])).to.be.deep.equal([2])
			expect(Array.intersect([1, 2, 3, 7], [4, 2, 6], [2])).to.be.deep.equal([
				2,
			])
			done()
		})
	})

	describe('unique', () => {
		it('should return unique elements', (done) => {
			expect(Array.unique([1, 2], [2, 3], [3, 4])).to.be.deep.equal([
				1, 2, 3, 4,
			])
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
		it('should insert element at 0', (done) => {
			const a = []

			a.insert(0, 0)
			expect(a).to.be.deep.equal([0])
			done()
		})

		it('should insert element at array.length', (done) => {
			const a = [1, 2, 3]

			a.insert(a.length, 4)
			expect(a).to.be.deep.equal([1, 2, 3, 4])
			done()
		})

		it('should inser item in position', (done) => {
			const a = [1, 2, 3]

			a.insert(0, 0)
			expect(a).to.deep.equal([0, 1, 2, 3])

			const b = [1, 2, 3]
			b.insert(1, 42)
			expect(b).to.deep.equal([1, 42, 2, 3])
			done()
		})

		it('should insert element at end if index > array.length', (done) => {
			const a = [1, 2, 3]

			a.insert(a.length + 1, 5)
			expect(a).to.deep.equal([1, 2, 3, 5])
			done()
		})

		it('should insert element at length - i - index if index < 0', (done) => {
			const a = [1, 2, 4]

			a.insert(-1, 3)
			expect(a).to.deep.equal([1, 2, 3, 4])
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

			expect(a.removeIndex(0)).to.be.equal(1)
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

	describe('chunk', () => {
		it('should raise error on size < 1', (done) => {
			expect(() => [1, 2, 3].chunk(0)).to.throw(Error)
			expect(() => [1, 2, 3].chunk(-1)).to.throw(Error)
			done()
		})

		it('should chunk array', (done) => {
			expect([1, 2, 3].chunk(1)).to.deep.equal([[1], [2], [3]])
			expect([1, 2, 3].chunk(2)).to.deep.equal([[1, 2], [3]])

			done()
		})
	})

	describe('prepend', () => {
		it('should prepend element', (done) => {
			const a = [1, 2, 3]
			a.prepend(0)

			expect(a).to.deep.equal([0, 1, 2, 3])
			done()
		})
	})

	describe('random', () => {
		it('should extract a random element', (done) => {
			expect([1, 2, 3]).to.include([1, 2, 3].random())
			done()
		})
	})
})
