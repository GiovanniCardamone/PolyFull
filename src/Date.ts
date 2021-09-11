// eslint-disable-next-line @typescript-eslint/no-unused-vars
// declare interface DateConstructor {}

// ===================================================== //

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare interface Date {
	/**
	 * add milliseconds to Date
	 *
	 * @param ms milliseconds to add
	 */
	addMilliseconds(ms: number): void

	/**
	 * add seconds to Date
	 *
	 * @param s seconds to add
	 */
	addSeconds(s: number): void

	/**
	 * add minutes to Date
	 *
	 * @param m minutes to add
	 */
	addMinutes(m: number): void

	/**
	 * add hours to Date
	 *
	 * @param h hours to add
	 */
	addHours(h: number): void

	/**
	 * add days to Date
	 *
	 * @param d days to add
	 */
	addDate(d: number): void

	/**
	 * add months to Date
	 *
	 * @param m months to add
	 */
	addMonth(m: number): void

	/**
	 * add Years to Date
	 *
	 * @param y years to add
	 */
	addFullYear(y: number): void

	/**
	 * subtract milliseconds from Date
	 *
	 * @param ms milliseconds to subtract
	 */
	subMilliseconds(ms: number): void

	/**
	 * subtract seconds from date
	 *
	 * @param s seconds to subtract
	 */
	subSeconds(s: number): void

	/**
	 * subtract minutes from Date
	 *
	 * @param m minutes to subtract
	 */
	subMinutes(m: number): void

	/**
	 * subtract hours from Date
	 *
	 * @param h hours to subtract
	 */
	subHours(h: number): void

	/**
	 * subtract days from Date
	 * @param d days to subtract
	 */
	subDate(d: number): void

	/**
	 * subtract months from Date
	 *
	 * @param m months to subtract
	 */
	subMonth(m: number): void

	/**
	 * subtract years from Date
	 *
	 * @param y years to subtract
	 */
	subFullYear(y: number): void

	/**
	 * check if current date is before another
	 *
	 * @param date date to compare
	 */
	isBefore(date: Date): boolean

	/**
	 * check if current date is after another
	 *
	 * @param date date to compare
	 */
	isAfter(date: Date): boolean

	/**
	 * check if two date are the same
	 *
	 * @param date date to campare
	 */
	isSame(date: Date): boolean

	/**
	 * difference in ms between two dates
	 *
	 * @param date date to compare
	 */
	diff(date: Date): number
}

Date.prototype.addMilliseconds = function (this: Date, ms: number) {
	this.setMilliseconds(this.getMilliseconds() + ms)
}

Date.prototype.addSeconds = function (this: Date, s: number) {
	this.setSeconds(this.getSeconds() + s)
}

Date.prototype.addMinutes = function (this: Date, m: number) {
	this.setMinutes(this.getMinutes() + m)
}

Date.prototype.addHours = function (this: Date, h: number) {
	this.setHours(this.getHours() + h)
}

Date.prototype.addDate = function (this: Date, d: number) {
	this.setDate(this.getDate() + d)
}

Date.prototype.addMonth = function (this: Date, m: number) {
	this.setMonth(this.getMonth() + m)
}

Date.prototype.addFullYear = function (this: Date, y: number) {
	this.setFullYear(this.getFullYear() + y)
}

//

Date.prototype.subMilliseconds = function (this: Date, ms: number) {
	this.setMilliseconds(this.getMilliseconds() - ms)
}

Date.prototype.subSeconds = function (this: Date, s: number) {
	this.setSeconds(this.getSeconds() - s)
}

Date.prototype.subMinutes = function (this: Date, m: number) {
	this.setMinutes(this.getMinutes() - m)
}

Date.prototype.subHours = function (this: Date, h: number) {
	this.setHours(this.getHours() - h)
}

Date.prototype.subDate = function (this: Date, d: number) {
	this.setDate(this.getDate() - d)
}

Date.prototype.subMonth = function (this: Date, m: number) {
	this.setMonth(this.getMonth() - m)
}

Date.prototype.subFullYear = function (this: Date, y: number) {
	this.setFullYear(this.getFullYear() - y)
}

Date.prototype.isBefore = function (this: Date, other: Date): boolean {
	return this.getTime() < other.getTime()
}

Date.prototype.isAfter = function (this: Date, other: Date): boolean {
	return this.getTime() > other.getTime()
}

Date.prototype.isSame = function (this: Date, other: Date): boolean {
	return this.getTime() === other.getTime()
}

Date.prototype.diff = function (this: Date, other: Date): number {
	return other.getTime() - this.getTime()
}
