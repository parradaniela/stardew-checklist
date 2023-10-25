const puppeteer = require('puppeteer');

const start = async () => {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();
	await page.goto('https://stardewvalleywiki.com/Foraging');
	await page.screenshot({ path: 'test.png' });
	await browser.close();
};

start();
