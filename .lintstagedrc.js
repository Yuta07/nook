module.exports = {
	'src/**/*.{js, jsx, ts, tsx}': (filenames) => [
		`next lint --fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
		`yarn prettier --write --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
	],
	'**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
}
