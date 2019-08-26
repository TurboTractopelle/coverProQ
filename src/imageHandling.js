const im = require("imagemagick");
const path = require("path");
const imageRename = require("./imageRename");

function image(imageName) {
	const options = {
		srcPath: path.join(__dirname, `/../in/${imageName}`),
		srcData: null,
		srcFormat: null,
		dstPath: path.join(__dirname, `../out/${imageRename(imageName)}`),
		quality: 0.8,
		format: "jpg",
		progressive: false,
		width: 0,
		height: 0,
		strip: true,
		filter: "Lagrange",
		sharpening: 0.2,
		customArgs: []
	};

	console.log(options.srcPath);

	return new Promise((res, err) => {
		res(imageName);
	});
}

module.exports = image;
