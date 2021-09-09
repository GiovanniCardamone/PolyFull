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
	allProperties<T extends PlainObj>(promisesMap: PromisesMap<T>): Promise<T>
	// allPropertiesSettled<T extends PlainObj>(promisesMap: PromisesMap<T>): Promise<Partial<T>>
}


Promise.allProperties = async function<T extends PlainObj>(promisesMap: PromisesMap<T>) {
	if (promisesMap === null || typeof promisesMap !== 'object' || Array.isArray(promisesMap)) {
		return Promise.reject(new TypeError('The input argument must be a plain object'))
	}

	const keys = Object.keys(promisesMap)
	const promises = keys.map((key) => {
		return promisesMap[key]
	})

	return Promise.all(promises).then(results => {
		return results.reduce((resolved, result, index) => {
			resolved[keys[index]] = result
			return resolved
		}, {} as any)
	})
}

// Promise.allPropertiesSettled = async function<T extends PlainObj>(promisesMap: PromisesMap<T>) {
// 	if (promisesMap === null || typeof promisesMap !== 'object' || Array.isArray(promisesMap)) {
// 		return Promise.reject(new TypeError('The input argument must be a plain object'))
// 	}

// 	const keys = Object.keys(promisesMap)
// 	const promises = keys.map((key) => {
// 		return promisesMap[key]
// 	})

// 	return Promise.allSettled(promises).then(results => {
// 		return results.reduce((settled, result, index) => {
// 			if (result.status === 'fulfilled') {
// 				settled[keys[index]] = result.value
// 			}

// 			return settled
// 		}, {} as any)
// 	})
// }
