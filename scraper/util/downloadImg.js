const fs = require('fs').promises; // Make sure to use the promises version of 'fs' for async/await
const path = require('path');

const downloadImg = async (page, forageObj, domainUrl) => {
	const { name, imgUrl, game } = forageObj;
	console.log(imgUrl);
	const directory = `images/${game}`;
	const filePath = path.join(directory, `${name.replace(' ', '_')}.png`);

	try {
		// Check if the directory exists, create it if it doesn't
		const imagePage = await page.goto(`${domainUrl}${imgUrl}`);
		await fs.mkdir(directory, { recursive: true });

		// Write the JSON data to a file in the specified directory
		await fs.writeFile(filePath, await imagePage.buffer());
		console.log(`Image for ${name} downloaded to ${filePath}`);
	} catch (err) {
		console.error('Error writing JSON file:', err);
	}
};

module.exports = downloadImg;
