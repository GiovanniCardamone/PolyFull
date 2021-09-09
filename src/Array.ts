
declare interface Array<T> {
	/**
	 * returns first element of array
	 */
	first(offset?: number): T | undefined

	/**
	 * returns last element of array
	 */
	last(offset?: number): T | undefined

	/**
	 * insert @e in position @index
	 */
	insert(index: number, e: T): void

	/**
	 * remove any occurrence of @t from array by value
	 */
	remove(t: T): void

	/**
	 * remove element at index
	 */
	removeIndex(t: number): T

	/**
	 * all elements of @other array are in @this array
	 */
	includesEvery(other: Array<T>): boolean

	/**
	 * this includes any of @other
	 */
	includesAny(other: Array<T>): boolean
}

Array.prototype.first = function(offset = 0) {
	return this[0 + offset]
}

Array.prototype.last = function (offset = 0) {
	return this[this.length - 1 + offset]
}

Array.prototype.insert = function <T>(this: Array<T>, index: number, element: T) {
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

Array.prototype.includesEvery = function<T>(this: Array<T>, other: Array<T>) {
	for (const e of this) {
		if (other.includes(e) === false) {
			return false
		}
	}

	return true
}
