/**
 * @module
 *
 * Number
 */

/**
 * NumberConstructor
 */
declare interface NumberConstructor {
	/**
	 * generate a number between min-max (default -Infinity +Infinity)
	 *
	 * @param min min allowed number
	 * @param max max allowed number
	 */
	random(min?: number, max?: number): number
}

Number.random = function (
	min: number = Number.MIN_SAFE_INTEGER,
	max: number = Number.MAX_SAFE_INTEGER
) {
	return Math.random() * (max - min) + min
}

declare interface Number {
	/**
	 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
	 * For example, the absolute value of -5 is the same as the absolute value of 5.
	 */
	abs(): number

	/**
	 * Returns the arc cosine (or inverse cosine) of a number.
	 */
	acos(): number

	/**
	 * Returns the inverse hyperbolic cosine of a number.
	 */
	acosh(): number

	/**
	 * Returns the arcsine of a number.
	 */
	asin(): number

	/**
	 * Returns the inverse hyperbolic sine of a number.
	 */
	asinh(): number

	/**
	 * Returns the arctangent of a number.
	 */
	atan(): number

	/**
	 * Returns the angle (in radians) from the X axis to a point.
	 */
	atan2(n: number): number

	/**
	 * Returns the inverse hyperbolic tangent of a number.
	 */
	atanh(): number

	/**
	 * Returns an implementation-dependent approximation to the cube root of number.
	 */
	cbrt(): number

	/**
	 * Returns the smallest integer greater than or equal to its numeric argument.
	 */
	ceil(): number

	/**
	 * Returns the number of leading zero bits in the 32-bit binary representation of a number.
	 */
	clz32(): number

	/**
	 * Returns the cosine of a number.
	 */
	cos(): number

	/**
	 * Returns the hyperbolic cosine of a number.
	 */
	cosh(): number

	/**
	 * Returns e (the base of natural logarithms) raised to a power.
	 */
	exp(): number

	/**
	 * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
	 * subtracting 1 from the exponential function of x (e raised to the power of x, where e
	 * is the base of the natural logarithms).
	 */
	expm1(): number

	/**
	 * Returns the greatest integer less than or equal to its numeric argument.
	 */
	floor(): number

	/**
	 * Returns the nearest single precision float representation of a number.
	 */
	fround(): number

	/**
	 * Returns the result of 32-bit multiplication of two numbers.
	 *
	 * @param n Second number
	 */
	imul(n: number): number

	/**
	 * Returns the natural logarithm (base e) of a number.
	 */
	log(): number

	/**
	 * Returns the base 10 logarithm of a number.
	 */
	log10(): number

	/**
	 * Returns the natural logarithm of 1 + x.
	 */
	log1p(): number

	/**
	 * Returns the base 2 logarithm of a number.
	 */
	log2(): number

	/**
	 * Returns the value of a base expression taken to a specified power.
	 *
	 * @param n The exponent value of the expression.
	 */
	pow(n: number): number

	/**
	 * Returns a supplied numeric expression rounded to the nearest integer.
	 */
	round(): number

	/**
	 * Returns the sign of the x, indicating whether number is positive, negative or zero.
	 */
	sign(): number

	/**
	 * Returns the sine of a number.
	 */
	sin(): number

	/**
	 * Returns the hyperbolic sine of a number.
	 */
	sinh(): number

	/**
	 * Returns the square root of a number.
	 */
	sqrt(): number

	/**
	 * Returns the tangent of a number.
	 */
	tan(): number

	/**
	 * Returns the hyperbolic tangent of a number.
	 */
	tanh(): number

	/**
	 * Returns the integral part of the a numeric expression, x, removing any fractional digits.
	 * If x is already an integer, the result is x.
	 */
	trunc(): number

	/**
	 * Return true if number is even
	 */
	isEven(): boolean

	/**
	 * Return true if number is odd
	 */
	isOdd(): boolean

	/**
	 * Return true if number is prime
	 */
	isPrime(): boolean

	/**
	 * Return true if number divisible by other
	 *
	 * @param n other number
	 */
	isDivisibleBy(n: number): boolean

	/**
	 * Return golden long and short side ration of number
	 *
	 * @returns an array with [long side, short side]
	 */
	goldenRatio(): [number, number]

	/**
	 * Return percentage of number
	 *
	 * @param p percentage to get
	 */
	percentage(p: number): number
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

Number.prototype.goldenRatio = function (): [number, number] {
	return [
		(this as number) *
			0.61803398874989484820458683436563811772030917980576286214,
		(this as number) *
			0.38196601125010515179541316563436188227969082019423713786,
	]
}

Number.prototype.percentage = function (p: number): number {
	return ((this as number) * p) / 100
}
