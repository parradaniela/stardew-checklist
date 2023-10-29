const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const getSeasonTableData = require('./baseWikiFunctions/getSeasonTableData');
const getLocationTableData = require('./baseWikiFunctions/getLocationTableData');

const start = async () => {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();
	await page.goto('https://stardewvalleywiki.com/Foraging');

	// const springForage = await getSeasonTableData(page, 'Spring');
	// const summerForage = await getSeasonTableData(page, 'Summer');
	// const fallForage = await getSeasonTableData(page, 'Fall');
	// const winterForage = await getSeasonTableData(page, 'Winter');

	// const allForage = [
	// 	...springForage,
	// 	...summerForage,
	// 	...fallForage,
	// 	...winterForage,
	// ];
	const locationForage = await getLocationTableData(page, 'The_Beach');
	// The arguments "null" and "2" are for formatting the JSON output
	await fs.writeFile(
		'locationForage.json',
		JSON.stringify(locationForage, null, 2)
	);

	await browser.close();
};

start();
