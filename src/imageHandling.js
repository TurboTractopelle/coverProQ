const im = require("imagemagick");

function image(imageName) {
	const options = {
		srcPath: `${__dirname}/../in/imageName`,
		srcData: null,
		srcFormat: null,
		dstPath: undefined,
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

	console.log(options);

	//im.resize(options, callback(err, stdout, stderr))

	return "ok";
}

module.exports = image;
