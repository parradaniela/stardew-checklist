const writeJsonFile = require('../util/writeJsonFile');
const getTableData = require('./getTableData');

const scrapeBaseGameWiki = async page => {
	await page.goto('https://stardewvalleywiki.com/Foraging');
	const tableIDs = [
		'Spring',
		'Summer',
		'Fall',
		'Winter',
		'The_Beach',
		'Ginger_Island',
		'The_Desert',
		'The_Mines',
	];
	let allForage = [];
	for (const id of tableIDs) {
		const forageTable = await getTableData(page, id);
		allForage = allForage.concat(forageTable);
		console.log(`${id} forage scraped`);
	}
	// The arguments "null" and "2" are for formatting the JSON output
	await writeJsonFile('baseGameForage.json', allForage);
	console.log('Base game wiki scrape complete');
};

module.exports = scrapeBaseGameWiki;
