import chai, { expect, assert } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import '../src/Promise'

chai.use(chaiAsPromised)

describe('PromiseConstructor', () => {
	describe('allProperties', () => {
		it('should reject non object', async () => {
			expect(Promise.allProperties(1)).to.be.rejectedWith(TypeError)
			expect(Promise.allProperties('a')).to.be.rejectedWith(TypeError)
			expect(Promise.allProperties(null)).to.be.rejectedWith(TypeError)
			expect(Promise.allProperties([])).to.be.rejectedWith(TypeError)
		})

		it('should resolve promise in object values', async () => {
			const obj = {
				a: new Promise((resolve, reject) => resolve(1)),
				b: new Promise((resolve, reject) => resolve(2)),
			}

			expect(await Promise.allProperties(obj)).to.deep.equal({
				a: 1,
				b: 2,
			})
		})

		it('should reject promise a', async () => {
			const obj = {
				a: new Promise((resolve, reject) => reject(new Error('a'))),
				b: new Promise((resolve, reject) => resolve(new Error('b'))),
			}

			try {
				await Promise.allProperties(obj)
			} catch (err) {
				expect(err.message).to.equal('a')
			}
		})

		it('should reject promise b', async () => {
			const obj = {
				a: new Promise((resolve, reject) => resolve(new Error('a'))),
				b: new Promise((resolve, reject) => reject(new Error('b'))),
			}

			try {
				await Promise.allProperties(obj)
			} catch (err) {
				expect(err.message).to.equal('b')
			}
		})

		it('should reject first promise', async () => {
			const obj = {
				a: new Promise((resolve, reject) => reject(new Error('a'))),
				b: new Promise((resolve, reject) => reject(new Error('b'))),
			}

			try {
				await Promise.allProperties(obj)
			} catch (err) {
				expect(err.message).to.equal('a')
			}
		})
	})

	describe('allPropertiesSettled', async () => {})
})
