const fs = require("fs");
const chalk = require("chalk");

function openFiles() {
	console.log(chalk`{cyan Opening files}`);
	return new Promise((res, err) => {
		try {
			fs.readdir(`${__dirname}/../in`, (error, files) => {
				if (error) {
					err(error);
				} else {
					res(files);
				}
			});
		} catch (error) {
			err(error);
		}
	});
}

module.exports = openFiles;
