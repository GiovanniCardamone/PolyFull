declare interface Date {
	addMilliseconds(ms: number): void
	addSeconds(s: number): void
	addMinutes(m: number): void
	addHours(h: number): void
	addDate(d: number): void
	addMonth(m: number): void
	addFullYear(y: number): void

	subMilliseconds(ms: number): void
	subSeconds(s: number): void
	subMinutes(m: number): void
	subHours(h: number): void
	subDate(d: number): void
	subMonth(m: number): void
	subFullYear(y: number): void
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
