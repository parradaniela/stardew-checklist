const getForageData = require('./getForageData.js');
const getForageItemUrls = require('./getForageItemUrls.js');

const scrapeSveWiki = async page => {
	try {
		const allForage = [];
		// await page.goto('https://stardew-valley-expanded.fandom.com/wiki/Forage');
		// const wikiPageUrls = await getForageItemUrls(page);
		const wikiPageUrls = [
			'/wiki/Bearberry',
			'/wiki/Conch',
			'/wiki/Dulse_Seaweed',
			'/wiki/Ferngill_Primrose',
			'/wiki/Four_Leaf_Clover',
			'/wiki/Goldenrod',
			'/wiki/Mushroom_Colony',
			'/wiki/Poison_Mushroom',
			'/wiki/Rafflesia',
			'/wiki/Red_Baneberry',
			'/wiki/Sand_Dollar',
			'/wiki/Thistle',
			'/wiki/Winter_Star_Rose',
		];
		// console.log('Wiki Page Urls scraped');
		for (const url of wikiPageUrls) {
			const forageObj = await getForageData(page, url);
			// allForage.push(forageObj);
		}
	} catch (err) {
		console.log('Error scraping the SVE Wiki', err);
	}
};

module.exports = scrapeSveWiki;
