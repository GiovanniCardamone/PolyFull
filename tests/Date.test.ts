import { expect } from 'chai'
import '../src/Date'

describe('DateConstuctor', () => {
	describe('current', () => {
		expect(Date.current()).to.be.instanceOf(Date)
	})
})

describe('Date', () => {
	describe('addMilliseconds', () => {
		it('should add milliseconds', (done) => {
			const date = new Date(0)
			date.addMilliseconds(1)

			expect(date.getTime()).to.equal(new Date(1).getTime())
			done()
		})
	})

	describe('addSeconds', () => {
		it('should add seconds', (done) => {
			const date = new Date(0)
			date.addSeconds(1)

			expect(date.getTime()).to.equal(new Date(1000).getTime())
			done()
		})
	})

	describe('addMinutes', () => {
		it('should add minutes', (done) => {
			const date = new Date(0)
			date.addMinutes(1)

			expect(date.getTime()).to.equal(new Date(60000).getTime())
			done()
		})
	})

	describe('addHours', () => {
		it('should add hours', (done) => {
			const date = new Date(0)
			date.addHours(1)

			expect(date.getTime()).to.equal(new Date(3600000).getTime())
			done()
		})
	})

	describe('addDate', () => {
		it('should add days', (done) => {
			const date = new Date(0)
			date.addDate(1)

			expect(date.getTime()).to.equal(new Date(86400000).getTime())
			done()
		})
	})

	describe('addMonth', () => {
		it('should add months', (done) => {
			const date = new Date(0)
			date.addMonth(1)

			expect(date.getTime()).to.equal(new Date(2678400000).getTime()) // 31 days genuary
			done()
		})
	})

	describe('addFullYear', () => {
		it('should add years', (done) => {
			const date = new Date(0)
			date.addFullYear(1)

			expect(date.getTime()).to.equal(new Date(31536000000).getTime())
			done()
		})
	})

	describe('subMilliseconds', () => {
		it('should sub milliseconds', (done) => {
			const date = new Date(1)
			date.subMilliseconds(1)

			expect(date.getTime()).to.equal(new Date(0).getTime())
			done()
		})
	})

	describe('subSeconds', () => {
		it('should sub seconds', (done) => {
			const date = new Date(1000)
			date.subSeconds(1)

			expect(date.getTime()).to.equal(new Date(0).getTime())
			done()
		})
	})

	describe('subMinutes', () => {
		it('should sub minutes', (done) => {
			const date = new Date(60000)
			date.subMinutes(1)

			expect(date.getTime()).to.equal(new Date(0).getTime())
			done()
		})
	})

	describe('subHours', () => {
		it('should sub hours', (done) => {
			const date = new Date(3600000)
			date.subHours(1)

			expect(date.getTime()).to.equal(new Date(0).getTime())
			done()
		})
	})

	describe('subDate', () => {
		it('should sub days', (done) => {
			const date = new Date(86400000)
			date.subDate(1)

			expect(date.getTime()).to.equal(new Date(0).getTime())
			done()
		})
	})

	describe('subMonth', () => {
		it('should sub months', (done) => {
			const date = new Date(2678400000) // 31 days genuary
			date.subMonth(1)

			expect(date.getTime()).to.equal(new Date(0).getTime())
			done()
		})
	})

	describe('subFullYear', () => {
		it('should sub years', (done) => {
			const date = new Date(31536000000)
			date.subFullYear(1)

			expect(date.getTime()).to.equal(new Date(0).getTime())
			done()
		})
	})

	describe('isBefore', () => {
		it('should be before', (done) => {
			expect(new Date(0).isBefore(new Date(1))).to.be.equal(true)
			done()
		})

		it('should not be before', (done) => {
			expect(new Date(1).isBefore(new Date(0))).to.be.equal(false)
			done()
		})
	})

	describe('isAfter', () => {
		it('should be after', (done) => {
			expect(new Date(1).isAfter(new Date(0))).to.be.equal(true)
			done()
		})

		it('should not be after', (done) => {
			expect(new Date(0).isAfter(new Date(1))).to.be.equal(false)
			done()
		})
	})

	describe('isSame', () => {
		it('should be the same', (done) => {
			expect(new Date(0).isSame(new Date(0))).to.be.equal(true)
			done()
		})

		it('should not be the same', (done) => {
			expect(new Date(0).isSame(new Date(1))).to.be.equal(false)
			done()
		})
	})

	describe('diff', () => {
		// new Date().
		it('diff should be 1ms', (done) => {
			expect(new Date(0).diff(new Date(1))).to.be.equal(1)
			done()
		})
	})
})
