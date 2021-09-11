/**
 * @internal
 */
type PlainObj = { [key: string]: unknown }

/**
 * @internal
 */
type PromisesMap<T extends PlainObj> = {
	[P in keyof T]: Promise<T[P]> | T[P]
}

declare interface PromiseConstructor {
	/**
	 * Creates an Object where Promise that are resolved in the same key of the passed Object, or rejected when any Promise is rejected.
	 *
	 * @param promisesMap an object with promises as values
	 * @returns object with same keys and resolved values
	 */
	allProperties<T extends PlainObj>(promisesMap: PromisesMap<T>): Promise<T>

	/**
	 * Creates an Object where Promise values that are resolved with an object of results when all of the provided Promises resolve or reject.
	 *
	 * @param promisesMap
	 */
	allPropertiesSettled<T extends PlainObj>(
		promisesMap: PromisesMap<T>
	): Promise<{ [key: string]: PromiseSettledResult<T> }>
}

Promise.allProperties = async function <T extends PlainObj>(
	promisesMap: PromisesMap<T>
) {
	if (
		promisesMap === null ||
		typeof promisesMap !== 'object' ||
		Array.isArray(promisesMap)
	) {
		return Promise.reject(
			new TypeError('The input argument must be a plain object')
		)
	}

	const keys = Object.keys(promisesMap)
	const promises = keys.map((key) => {
		return promisesMap[key]
	})

	return Promise.all(promises).then((results) => {
		return results.reduce((resolved, result, index) => {
			resolved[keys[index]] = result
			return resolved
		}, {} as any)
	})
}

/* istanbul ignore next */
if (typeof Promise.allSettled === 'function') {
	Promise.allPropertiesSettled = async function <T extends PlainObj>(
		promisesMap: PromisesMap<T>
	) {
		if (
			promisesMap === null ||
			typeof promisesMap !== 'object' ||
			Array.isArray(promisesMap)
		) {
			return Promise.reject(
				new TypeError('The input argument must be a plain object')
			)
		}

		const keys = Object.keys(promisesMap)
		const promises = keys.map((key) => {
			return promisesMap[key]
		})

		return Promise.allSettled(promises).then((results) => {
			return results.reduce((settled, result, index) => {
				settled[keys[index]] = result

				return settled
			}, {} as any)
		})
	}
}
