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
	/**
	 * shortcut for Math.abs
	 */
	abs(): number

	/**
	 * shortcut for Math.acos
	 */
	acos(): number

	/**
	 * shortcut for Math.acosh
	 */
	acosh(): number

	/**
	 * shortcut for Math.asin
	 */
	asin(): number

	/**
	 * shortcut for Math.asinh
	 */
	asinh(): number

	/**
	 * shortcut for Math.atan
	 */
	atan(): number

	/**
	 * shortcut for Math.atan2
	 */
	atan2(n: number): number

	/**
	 * shortcut for Math.atanh
	 */
	atanh(): number

	/**
	 * shortcut for Math.cbrt
	 */
	cbrt(): number

	/**
	 * shortcut for Math.ceil
	 */
	ceil(): number

	/**
	 * shortcut for Math.clz32
	 */
	clz32(): number

	/**
	 * shortcut for Math.cos
	 */
	cos(): number

	/**
	 * shortcut for Math.cosh
	 */
	cosh(): number

	/**
	 * shortcut for Math.exp
	 */
	exp(): number

	/**
	 * shortcut for Math.expm1
	 */
	expm1(): number

	/**
	 * shortcut for Math.floor
	 */
	floor(): number

	/**
	 * shortcut for Math.fround
	 */
	fround(): number

	/**
	 * shortcut for Math.hypot
	 */
	hypot(n: number): number

	/**
	 * shortcut for Math.imul
	 */
	imul(n: number): number

	/**
	 * shortcut for Math.log
	 */
	log(): number

	/**
	 * shortcut for Math.log10
	 */
	log10(): number

	/**
	 * shortcut for Math.log1p
	 */
	log1p(): number

	/**
	 * shortcut for Math.log2
	 */
	log2(): number

	/**
	 * shortcut for Math.pow
	 */
	pow(n: number): number

	/**
	 * shortcut for Math.round
	 */
	round(): number

	/**
	 * shortcut for Math.sign
	 */
	sign(): number

	/**
	 * shortcut for Math.sin
	 */
	sin(): number

	/**
	 * shortcut for Math.sinh
	 */
	sinh(): number

	/**
	 * shortcut for Math.sqrt
	 */
	sqrt(): number

	/**
	 * shortcut for Math.tan
	 */
	tan(): number

	/**
	 * shortcut for Math.tanh
	 */
	tanh(): number

	/**
	 * shortcut for Math.trunc
	 */
	trunc(): number

	/**
	 * check if number is even
	 */
	isEven(): boolean

	/**
	 * check if number is odd
	 */
	isOdd(): boolean

	/**
	 * check if number is prime
	 */
	isPrime(): boolean

	/**
	 * check if number is divisible by other number
	 *
	 * @param n other number
	 */
	isDivisibleBy(n: number): boolean
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

Number.prototype.round = function (): number {
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
	if ((this as number) < 2) {
		return false
	}

	for (let i = 2; i < (this as number); i++) {
		if ((this as number) % i === 0) {
			return false
		}
	}

	return true
}

Number.prototype.isEven = function (): boolean {
	return (this as number) % 2 === 0
}

Number.prototype.isOdd = function (): boolean {
	return (this as number) % 2 !== 0
}

Number.prototype.isDivisibleBy = function (n: number): boolean {
	return (this as number) % n === 0
}
