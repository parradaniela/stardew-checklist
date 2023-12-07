const puppeteer = require('puppeteer');

const scrapeBaseGameWiki = require('./baseWikiFunctions/scrapeBaseGameWiki');
const scrapeSveWiki = require('./sveWikiFunctions/scrapeSveWiki');
const scrapeRsvWiki = require('./rsvWikiFunctions/scrapeRsvWiki');

const runScraper = async () => {
	try {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		await scrapeBaseGameWiki(page);
		// await scrapeSveWiki(page);
		// await scrapeRsvWiki(page);
		await browser.close();
	} catch (err) {
		console.log('Error running scraper: ', err);
	}
};

runScraper();
