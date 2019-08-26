const imageRename = require("./imageRename");

describe("imageRename", () => {
	it("returns the correct name", () => {
		const inName = "1234-5678.jpg";
		const outName = "12345678.jpg";
		expect(imageRename(inName)).toBe(outName);
	});

	it("works with png too", () => {
		const inName = "1234-5678.png";
		const outName = "12345678.png";
		expect(imageRename(inName)).toBe(outName);
	});
});
