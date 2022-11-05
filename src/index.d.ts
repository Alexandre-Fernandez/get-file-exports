/**
 * @param path An absolute path to the file.
 */
declare function getFileExports<
	T extends Record<string, unknown> = {
		[key: string]: unknown
		default?: unknown
	},
>(path: string): Promise<T>

export default getFileExports
