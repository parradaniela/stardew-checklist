const puppeteer = require('puppeteer');

const scrapeBaseGameWiki = require('./baseWikiFunctions/scrapeBaseGameWiki');

const runScraper = async () => {
	try {
		const browser = await puppeteer.launch({ headless: 'new' });
		const page = await browser.newPage();
		await scrapeBaseGameWiki(page);
		await browser.close();
	} catch (err) {
		console.log('Error running scraper: ', err);
	}
};

runScraper();
