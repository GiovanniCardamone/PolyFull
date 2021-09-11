declare interface String {
	/**
	 * reverse a string
	 */
	reverse(): string

	/**
	 * convert to base64
	 */
	toBase64(): string

	/**
	 * convert from base64
	 */
	fromBase64(): string

	/**
	 * make first letter of each word uppercase
	 */
	toTitleCase(): string

	/**
	 * make first letter uppercase
	 */
	ucFirst(): string

	/**
	 * check if string is valid numeric
	 */
	isNumeric(): boolean

	/**
	 * check if string is palindrome
	 */
	isPalindrome(): boolean

	/**
	 * check if string is equal to other ignoring case
	 *
	 * @param s other string
	 */
	equalsIgnoreCase(s: string): boolean
}

String.prototype.reverse = function (): string {
	return this.split('').reverse().join('')
}

String.prototype.toBase64 = function (): string {
	return Buffer.from(this).toString('base64')
}

String.prototype.fromBase64 = function (): string {
	return Buffer.from(this, 'base64').toString('ascii')
}

String.prototype.toTitleCase = function (): string {
	return this.split(' ')
		.map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
		.join(' ')
}

String.prototype.ucFirst = function (): string {
	return this[0].toUpperCase() + this.substring(1)
}

String.prototype.isNumeric = function (): boolean {
	// @ts-expect-error wrong annotation in @types/node
	return !isNaN(this)
}

String.prototype.isPalindrome = function (): boolean {
	return this.length > 0 && this === this.reverse()
}

String.prototype.equalsIgnoreCase = function (s: string): boolean {
	return this.toLowerCase() === s.toLowerCase()
}
