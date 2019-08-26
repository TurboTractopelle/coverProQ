const chalk = require("chalk");
const browseFiles = require("./browseFiles");

console.log(chalk`{cyan Cover convertissor for Proquest}`);

async function convert() {
	const files = await browseFiles();
	console.log(files);
}

convert();
