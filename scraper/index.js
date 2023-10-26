const puppeteer = require('puppeteer');
const fs = require('fs/promises');

const start = async () => {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();
	await page.goto('https://stardewvalleywiki.com/Foraging');
	// await page.screenshot({ path: 'test.png', fullPage: true });

	let forageObj = {
		name: '',
		imgUrl: '',
		locations: [],
		seasons: [],
		yearOneAvail: true,
	};
	const itemImg = await page.$(
		`h3:has(span#Spring) + table tbody tr:first-child img`
	);
	let itemUrl = '';
	if (itemImg) {
		const srcHandle = await itemImg.getProperty('src');
		itemUrl = await srcHandle.jsonValue();
	} else {
		console.log('Image not found');
	}

	const itemName = await page.$eval(
		'h3:has(span#Spring) + table tbody tr td:nth-child(2) a',
		anchor => anchor.innerText
	);
	// console.log(itemName);

	const itemLocations = await page.$$eval(
		'h3:has(span#Spring) + table tbody tr:first-child ul li',
		locations => {
			return locations.map(location => location.textContent);
		}
	);

	// console.log(itemLocations);
	forageObj.name = itemName;
	forageObj.imgUrl = itemUrl;
	forageObj.locations = itemLocations;
	forageObj.seasons.push('spring');
	console.log(forageObj);
	// const tableDataSelector = 'h3:has(span#Spring) + table tbody td a';
	// const items = await page.$$eval(tableDataSelector, anchors => {
	// 	return anchors.map(anchor => anchor.textContent);
	// });
	// console.log(items);
	// const springTable = await page.waitForSelector('h3:has(span#Spring) + table > tbody');
	// const springTableRows = await springTable?.evaluate()
	// console.log(springTable);
	// console.log(headings);
	// await fs.writeFile('headings.txt', headings.join('\r\n'));
	await browser.close();
};

start();
