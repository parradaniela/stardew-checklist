const fs = require('fs').promises;
const path = require('path');

const downloadImg = async (page, forageObj) => {
	const { name, imgUrl, game } = forageObj;
	const directory = `images/${game}`;
	const filePath = path.join(directory, `${name.replace(' ', '_')}.png`);

	try {
		let finalUrl;
		if (game === 'base') {
			finalUrl = `https://stardewvalleywiki.com${imgUrl}`;
		} else {
			finalUrl = imgUrl;
		}
		const imagePage = await page.goto(finalUrl);
		// Check if the directory exists, create it if it doesn't
		await fs.mkdir(directory, { recursive: true });
		// Write the image file in the specified directory
		await fs.writeFile(filePath, await imagePage.buffer());
		console.log(`Image for ${name} downloaded to ${filePath}`);
	} catch (err) {
		console.error('Error writing JSON file:', err);
	}
};

module.exports = downloadImg;
