const downloadImg = require('../util/downloadImg');
const writeJsonFile = require('../util/writeJsonFile');
const getForageData = require('./getForageData');

const scrapeRsvWiki = async page => {
	try {
		const allForage = [];
		await page.goto('https://ridgeside.fandom.com/wiki/Foraging', {
			timeout: 45000,
		});
		const allTables = await page.$$('#roundedborder > tbody');
		for (let i = 0; i < allTables.length; i++) {
			const currentTable = allTables[i];
			console.log('Table index', i);
			const tableRows = await currentTable.$$('tr:not(:is(tr tr))');
			for (const row of tableRows) {
				const forageObj = await getForageData(row, i);
				allForage.push(forageObj);
			}
		}
		writeJsonFile('rsvForage.json', allForage);
		// for (const forageObj of allForage) {
		// 	await downloadImg(page, forageObj);
		// }
		console.log('RSV Wiki scrape complete');
	} catch (err) {
		console.log('Error scraping the RSV Wiki Foraging page: ', err);
	}
};

module.exports = scrapeRsvWiki;
