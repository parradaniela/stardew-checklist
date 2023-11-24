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
		let forageObj = {
			name: '',
			imgUrl: '',
			wikiUrl: completeUrl,
			locations: [],
			seasons: [],
			yearOneAvail: true,
			game: 'sve',
		};
		await page.goto(completeUrl);
		const name = await parseName(page);
		const image = await parseImage(page);
		const locations = await parseLocations(page);
		const seasons = await parseSeasons(page);
		forageObj.name = name;
		forageObj.imgUrl = image;
		forageObj.locations = forageObj.locations.concat(locations);
		forageObj.seasons = forageObj.seasons.concat(seasons);
		console.log(forageObj);
		return forageObj;
	} catch (err) {
		console.log('Error getting forage data from forage page ', completeUrl, err);
	}
};

module.exports = getForageData;
