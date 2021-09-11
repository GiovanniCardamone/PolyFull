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
	 * make string in kebab case representation
	 */
	toKebabCase(): string

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

	/**
	 * replace multiple character/string repetition with single one
	 *
	 * @param s character/string to collapse
	 */
	unrepeat(s: string): string

	/**
	 * limit the length of the string
	 *
	 * @param chars number of characters
	 * @param append append substring (es: ...)
	 */
	limit(chars: number, append?: string): string

	/**
	 * Pads string left and right
	 *
	 * @param maxLength The length of the resulting string once the current string has been padded.
	 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
	 *
	 * @param fillString The string to pad the current string with.
	 *        If this string is too long, it will be truncated and the left-most part will be applied.
	 *        The default value for this parameter is " " (U+0020).
	 */
	pad(maxLength: number, fillString?: string): string
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

String.prototype.toKebabCase = function (): string {
	return this.trim()
		.replace(/[A-Z]/gm, '-$&')
		.replace(/ /gm, '-')
		.replace(/-+/gm, '-')
		.replace(/^-+/gm, '')
		.replace(/-+$/gm, '')
		.toLowerCase()
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

String.prototype.unrepeat = function (s: string): string {
	return this.replace(new RegExp(`(${s})+`, 'gm'), s)
}

String.prototype.limit = function (chars: number, append: string = ''): string {
	return this.length > chars
		? this.substr(0, chars + 1 - append.length) + append
		: (this as string)
}

String.prototype.pad = function (
	maxLength: number,
	fillString: string = ' '
): string {
	if (this.length > maxLength) {
		return this as string
	}

	const left = ((maxLength - this.length) / 2).ceil()
	const right = (maxLength - this.length) / 2

	return fillString.repeat(left) + (this as string) + fillString.repeat(right)
}
