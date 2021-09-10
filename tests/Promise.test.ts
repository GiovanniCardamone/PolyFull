import { expect } from 'chai'
import '../src/Promise'

describe('PromiseConstructor', () => {
	describe('allProperties', () => {
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
