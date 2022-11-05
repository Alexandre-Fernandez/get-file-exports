const { readFileSync, unlinkSync } = require("node:fs")
const { sep } = require("node:path")

module.exports = async function getFileExports(path) {
	const i = path?.lastIndexOf(sep)
	if (i === undefined) throw new Error("`path` must be of type `string`.")
	if (i < 0) throw new Error(`Invalid path (${path}).`)
	const outfile = `${path.slice(0, i)}/tmp.cjs`
	await require("esbuild").build({
		entryPoints: [path],
		bundle: true,
		format: "cjs",
		platform: "node",
		outfile,
	})
	const bundle = readFileSync(outfile, "utf8")
	unlinkSync(outfile)
	return require("node-eval")(bundle, outfile)
}
