const path = require('path')

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`

const testCommand = () => `jest`

module.exports = {
	'*.{ts,tsx}': [ buildEslintCommand, testCommand ],
}
