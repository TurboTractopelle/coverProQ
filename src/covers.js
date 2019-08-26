const chalk = require("chalk");
const browseFiles = require("./browseFiles");
const imagesHandling = require("./imagesHandling");
console.log(chalk`{cyan Cover convertissor for Proquest}`);

async function convert() {
	const files = await browseFiles();
	imagesHandling(files)
		.then(res => console.log(res))
		.catch(err => console.log(err));
}

convert();
