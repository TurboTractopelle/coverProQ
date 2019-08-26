const path = require("path");
const imageRename = require("./imageRename");
const sharp = require("sharp");
const cpFile = require("cp-file");
const chalk = require("chalk");
const fs = require("fs");
const filesize = require("filesize");

async function image(imageName) {
	const newName = imageRename(imageName);

	const srcPath = path.join(__dirname, `../in/${imageName}`);
	const dstPath = path.join(__dirname, `../out/${newName}`);

	return new Promise(async (res, err) => {
		const stats = fs.statSync(srcPath);
		const filesize = Math.round(stats.size / (1024 * 1024));
		//const fileSizeInMb = filesize(stats.size, { round: 0 });

		if (filesize < 1) {
			console.log(chalk`{green ${imageName} is too small, just copied}`);
			const srcPath = path.join(__dirname, `../in/${imageName}`);
			await cpFile(srcPath, dstPath)
				.then(done => res(`${imageName} is too small, just copied`))
				.catch(errorCp => err(errorCp));
		} else {
			sharp(srcPath)
				.resize(1000)
				.toFile(dstPath, function(error) {
					if (error) {
						err(error);
					} else {
						console.log(chalk`{green ${imageName} was resized}`);
						res(`${imageName} was resized`);
					}
				});
		}
	});
}

module.exports = image;
