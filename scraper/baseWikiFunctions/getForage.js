const parseLocations = require('./parseLocations');
const { parseNameAnchor, parseImageSrc } = require('./parseBasicData');
const parseSeasons = require('./parseSeasons');

const getForage = async (row, tableID) => {
	try {
		let forageObj = {
			name: '',
			imgUrl: '',
			wikiUrl: '',
			locations: [],
			seasons: [],
			yearOneAvail: true,
			game: 'base',
		};

		const { name, url } = await parseNameAnchor(row);
		const imgSrc = await parseImageSrc(row);
		const itemLocations = await parseLocations(row, tableID);
		const itemSeasons = await parseSeasons(row, tableID);

		forageObj.name = name;
		forageObj.imgUrl = imgSrc;
		forageObj.wikiUrl = `https://stardewvalleywiki.com${url}`;
		forageObj.locations = forageObj.locations.concat(itemLocations);
		forageObj.seasons = forageObj.seasons.concat(itemSeasons);
		return forageObj;
	} catch (err) {
		console.log('Error getting forage object data: ', err);
	}
};

module.exports = getForage;