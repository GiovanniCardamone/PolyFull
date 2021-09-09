/**
 * @module
 *
 * Number
 */

/**
 * NumberConstructor
 */
declare interface NumberConstructor {
	// new(value?: any): number;
}

declare interface Number {
	abs(): number
	acos(): number
	acosh(): number
	asin(): number
	asinh(): number
	atan(): number
	atan2(n: number): number
	atanh(): number
	cbrt(): number
	ceil(): number
	clz32(): number
	cos(): number
	cosh(): number
	exp(): number
	expm1(): number
	floor(): number
	fround(): number
	hypot(n: number): number
	imul(n: number): number
	log(): number
	log10(): number
	log1p(): number
	log2(): number
	max(n: number): number
	min(n: number): number
	pow(n: number): number
	round(): number
	sign(): number
	sin(): number
	sinh(): number
	sqrt(): number
	tan(): number
	tanh(): number
	trunc(): number
	/////////////////////////////////////
	isEven(): boolean
	isOdd(): boolean
	isPrime(): boolean
	isDivisibleBy(n: number): boolean
	isPositive(): boolean
}

Number.prototype.abs = function (): number {
	return Math.abs(this as number)
}

Number.prototype.acos = function (): number {
	return Math.acos(this as number)
}

Number.prototype.acosh = function (): number {
	return Math.acosh(this as number)
}

Number.prototype.asin = function (): number {
	return Math.asin(this as number)
}

Number.prototype.asinh = function (): number {
	return Math.asinh(this as number)
}

Number.prototype.atan = function (): number {
	return Math.atan(this as number)
}

Number.prototype.atan2 = function (n: number): number {
	return Math.atan2(this as number, n)
}

Number.prototype.atanh = function (): number {
	return Math.atanh(this as number)
}

Number.prototype.cbrt = function (): number {
	return Math.cbrt(this as number)
}

Number.prototype.ceil = function (): number {
	return Math.ceil(this as number)
}

Number.prototype.clz32 = function (): number {
	return Math.clz32(this as number)
}

Number.prototype.cos = function (): number {
	return Math.cos(this as number)
}

Number.prototype.cosh = function (): number {
	return Math.cosh(this as number)
}

Number.prototype.exp = function (): number {
	return Math.exp(this as number)
}

Number.prototype.expm1 = function (): number {
	return Math.expm1(this as number)
}

Number.prototype.floor = function (): number {
	return Math.floor(this as number)
}

Number.prototype.fround = function (): number {
	return Math.fround(this as number)
}

Number.prototype.hypot = function (n: number): number {
	return Math.hypot(this as number, n)
}

Number.prototype.imul = function (n: number): number {
	return Math.imul(this as number, n)
}

Number.prototype.log = function (): number {
	return Math.log(this as number)
}

Number.prototype.log10 = function (): number {
	return Math.log10(this as number)
}

Number.prototype.log1p = function (): number {
	return Math.log1p(this as number)
}

Number.prototype.log2 = function (): number {
	return Math.log2(this as number)
}

Number.prototype.pow = function (n: number): number {
	return Math.pow(this as number, n)
}

Number.prototype.round = function(): number {
	return Math.round(this as number)
}

Number.prototype.sign = function (): number {
	return Math.sign(this as number)
}

Number.prototype.sin = function (): number {
	return Math.sin(this as number)
}

Number.prototype.sinh = function (): number {
	return Math.sinh(this as number)
}

Number.prototype.sqrt = function (): number {
	return Math.sqrt(this as number)
}

Number.prototype.tan = function (): number {
	return Math.tan(this as number)
}

Number.prototype.tanh = function (): number {
	return Math.tanh(this as number)
}

Number.prototype.trunc = function (): number {
	return Math.trunc(this as number)
}

Number.prototype.isPrime = function (): boolean {
	for (let i = 2; i < (this as number); i++) {
		if (this as number % i === 0) {
			return false
		}
	}

	return true
}

Number.prototype.isDivisibleBy = function (n: number): boolean {
	return this as number % n === 0
}

Number.prototype.isEven = function (): boolean {
	return (this as number) % 2 === 0
}

Number.prototype.isOdd = function (): boolean {
	return (this as number) % 2 !== 0
}
