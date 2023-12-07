const getForageData = require('./getForageData.js');
const getForageItemUrls = require('./getForageItemUrls.js');
const writeJsonFile = require('../util/writeJsonFile.js');
const downloadImg = require('../util/downloadImg.js');

const scrapeSveWiki = async page => {
	try {
		const allForage = [];
		// await page.goto('https://stardew-valley-expanded.fandom.com/wiki/Forage');
		// const wikiPageUrls = await getForageItemUrls(page);

		// Due to large errors on the /Forage site, it's more reliable to hard-code the individual page URLs like this
		const wikiPageUrls = [
			'wiki/Conch',
			'wiki/Ferngill_Primrose',
			'wiki/Four_Leaf_Clover',
			'wiki/Goldenrod',
			'wiki/Mushroom_Colony',
			'wiki/Poison_Mushroom',
			'wiki/Rafflesia',
			'wiki/Red_Baneberry',
			'wiki/Sand_Dollar',
			'wiki/Thistle',
			'wiki/Winter_Star_Rose',
			'wiki/Bearberry',
		];
		for (const url of wikiPageUrls) {
			const forageObj = await getForageData(page, url);
			allForage.push(forageObj);
		}
		await writeJsonFile('sveForage.json', allForage);
		// for (const forageObj of allForage) {
		// 	await downloadImg(page, forageObj);
		// }
		console.log('SVE Wiki scrape complete');
	} catch (err) {
		console.log('Error scraping the SVE Wiki', err);
	}
};

module.exports = scrapeSveWiki;
