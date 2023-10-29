const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const getTableData = require('./baseWikiFunctions/getTableData');

const start = async () => {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();
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
		console.log(`${id} forage scraped`);
		allForage = allForage.concat(forageTable);
		console.log(`${id} table added to allForage.json`);
	}
	// The arguments "null" and "2" are for formatting the JSON output
	await fs.writeFile('allForage.json', JSON.stringify(allForage, null, 2));
	console.log('Scrape complete');
	await browser.close();
};

start();
