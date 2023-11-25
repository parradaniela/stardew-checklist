const {
	parseNameAndUrl,
	parseImage,
	parseLocations,
} = require('./parseBasicData');
const updateSeasons = require('./updateSeasons');

const getForageData = async (row, i) => {
	try {
		const { name, url } = await parseNameAndUrl(row);
		const seasons = updateSeasons(i);
		const image = await parseImage(row);
		const locations = await parseLocations(row);
		console.log(`${name} scraped`);
		return {
			name: name,
			imgUrl: image,
			wikiUrl: `https://ridgeside.fandom.com${url}`,
			locations: locations,
			seasons: seasons,
			yearOneAvail: true,
			game: 'rsv',
		};
	} catch (err) {
		console.log('Error getting forage data: ', err);
	}
};

module.exports = getForageData;
