const image = require("./imageHandling");

function imagesHandling(imagesArr) {
	return new Promise((res, err) => {
		Promise.all([...imagesArr.map(im => image(im))])
			.then(res2 => res(res2))
			.catch(err2 => err(err2));
	});
}

module.exports = imagesHandling;
