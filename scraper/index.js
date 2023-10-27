const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const getBaseWikiData = require('./baseWikiFunctions/getBaseWikiData');

const start = async () => {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();
	await page.goto('https://stardewvalleywiki.com/Foraging');
	// await page.screenshot({ path: 'test.png', fullPage: true });

	await getBaseWikiData(page, 'Fall');

	await browser.close();
};

start();
