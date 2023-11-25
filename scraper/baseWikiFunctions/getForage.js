const parseLocations = require('./parseLocations');
const { parseNameAnchor, parseImageSrc } = require('./parseBasicData');
const parseSeasons = require('./parseSeasons');

const getForage = async (row, tableID) => {
	try {
		const { name, url } = await parseNameAnchor(row);
		const image = await parseImageSrc(row);
		const locations = await parseLocations(row, tableID);
		const seasons = await parseSeasons(row, tableID);
		console.log(`Finished scraping ${name}`);
		return {
			name: name,
			imgUrl: image,
			wikiUrl: `https://stardewvalleywiki.com${url}`,
			locations: locations,
			seasons: seasons,
			yearOneAvail: true,
			game: 'base',
		};
	} catch (err) {
		console.log('Error getting forage object data: ', err);
	}
};

module.exports = getForage;
