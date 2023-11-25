const {
	parseName,
	parseImage,
	parseLocations,
	parseSeasons,
} = require('./parsePageData');

const getForageData = async (page, url) => {
	const completeUrl = `https://stardew-valley-expanded.fandom.com/${url}`;
	console.log('Scraping ', url);
	try {
		await page.goto(completeUrl, { timeout: 45000 });
		const name = await parseName(page);
		const image = await parseImage(page);
		const locations = await parseLocations(page);
		const seasons = await parseSeasons(page);
		console.log(`${name} scraped`);
		return {
			name: name,
			imgUrl: image,
			wikiUrl: completeUrl,
			locations: locations,
			seasons: seasons,
			yearOneAvail: true,
			game: 'sve',
		};
	} catch (err) {
		console.log(`Error getting forage data from ${completeUrl}: ${err}`);
	}
};

module.exports = getForageData;
