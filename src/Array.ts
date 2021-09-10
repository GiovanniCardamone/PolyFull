declare interface ArrayConstructor {
	/**
	 * check if arguments is not array
	 *
	 * @param arg
	 * @returns true if not array
	 */
	isNotArray(arg: any): boolean

	/**
	 * combine multiple array toghter by index
	 *
	 * @param arrays arrays to combine
	 */
	zip(...arrays: Array<Array<any>>): Array<Array<any>>
}

declare interface Array<T> {
	/**
	 * get first element from array
	 *
	 * @param offset skip from first element
	 */
	first(offset?: number): T | undefined

	/**
	 * get first element from array
	 *
	 * @param offset skip from last element
	 */
	last(offset?: number): T | undefined

	/**
	 * insert new element in specific position
	 *
	 * @param index index to insert element
	 * @param e element to insert
	 */
	insert(index: number, e: T): void

	/**
	 * remove element from array
	 *
	 * @param e element to remove
	 */
	remove(e: T): void

	/**
	 * remove element from array at specified index
	 *
	 * @param index index to remove element
	 */
	removeIndex(index: number): T

	/**
	 * check if the other Array includes every element in Array
	 *
	 * @param other other array
	 */
	includesEvery(other: Array<T>): boolean

	/**
	 * check if the other Array includes any element in Array
	 *
	 * @param other other array
	 */
	includesAny(other: Array<T>): boolean

	/**
	 * split array in cunks of desired size
	 *
	 * @param size
	 */
	chunk(size: number): Array<Array<T>>
}

Array.isNotArray = function (args: any) {
	return !Array.isArray(args)
}

Array.zip = function (...args: Array<any>) {
	const min = Math.min.apply(
		null,
		args.map((a) => a.length)
	)

	const zip: Array<any> = []
	for (let i = 0; i < min; i++) {
		const tmp: Array<any> = []

		for (const arg of args) {
			tmp.push(arg[i])
		}

		zip.push(tmp)
	}

	return zip
}

Array.prototype.first = function (offset = 0) {
	return this[0 + offset]
}

Array.prototype.last = function (offset = 0) {
	return this[this.length - 1 + offset]
}

Array.prototype.insert = function <T>(
	this: Array<T>,
	index: number,
	element: T
) {
	this.splice(index, 0, element)
}

Array.prototype.remove = function <T>(this: Array<T>, element: T) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === element) {
			this.splice(i, 1)
			i--
		}
	}
}

Array.prototype.removeIndex = function <T>(this: Array<T>, index: number) {
	return this.splice(index, 1)[0]
}

Array.prototype.includesAny = function <T>(this: Array<T>, other: Array<T>) {
	for (const e of other) {
		if (this.includes(e)) {
			return true
		}
	}

	return false
}

Array.prototype.includesEvery = function <T>(this: Array<T>, other: Array<T>) {
	for (const e of other) {
		if (this.includes(e) === false) {
			return false
		}
	}

	return true
}

Array.prototype.chunk = function <T>(this: Array<T>, size: number) {
	if (size < 1) {
		throw new Error(`size must be > 0. got: ${size}`)
	}

	const arrays: Array<Array<T>> = []

	for (let i = 0; i < this.length; ) {
		const tmp: Array<T> = []
		for (let j = 0; j < size && i < this.length; i++, j++) {
			tmp.push(this[i])
		}

		arrays.push(tmp)
	}

	console.log(arrays)

	return arrays
}
