module.exports = async function getFileExports(path) {
	if (typeof path !== "string") {
		throw new Error("`path` must be of type `string`.")
	}
	const output = await require("esbuild").build({
		entryPoints: [path],
		bundle: true,
		external: ["esbuild"],
		format: "cjs",
		platform: "node",
		write: false,
	})
	const bundle = new TextDecoder().decode(output.outputFiles[0]?.contents)
	if (!bundle) return {}
	return require("node-eval")(bundle, path.replace(/.[a-zA-Z]{2,3}$/, ".cjs"))
}
