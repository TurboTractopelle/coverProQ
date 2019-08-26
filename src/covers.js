const chalk = require("chalk");
const browseFiles = require("./browseFiles");
const imagesHandling = require("./imagesHandling");

console.log(chalk`{cyan Cover convertissor for Proquest}`);

async function convert() {
	const files = await browseFiles();
	imagesHandling(files)
		.then(res => console.log(chalk`{green.bold All files were processed}`))
		.catch(err => console.log(chalk`{red ${err}}`));
}

convert();
