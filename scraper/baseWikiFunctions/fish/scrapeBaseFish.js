const writeJsonFile = require('../../util/writeJsonFile');
const getFish = require('./getFish');
const downloadImg = require('../../util/downloadImg');

const scrapeBaseFish = async page => {
	await page.goto('https://stardewvalleywiki.com/Fish');
	let allFish = [];

	const allFishTables = await page.$$('.wikitable > tbody', { visible: true });
	for (let i = 0; i < 3; i++) {
		let currentTable = allFishTables[i];
		console.log('Table index', i);
		const tableRows = await currentTable.$$('tr:not(:is(tr tr))');
		for (const row of tableRows) {
			const fishObj = await getFish(row, i);
			allFish.push(fishObj);
		}
	}
	await writeJsonFile('baseGameFish.json', allFish);
	// for (const fish of allFish) {
	// 	await downloadImg(page, fish);
	// }
	console.log('Base game fish scrape complete');
};

module.exports = scrapeBaseFish;
