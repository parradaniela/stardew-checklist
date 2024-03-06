const parseSeasons = require('./parseSeasons');
const {
	parseNameAndUrl,
	parseLocations,
	parseImage,
	getTimes,
	getWeather,
} = require('./parseFishData');

const getFish = async (row, i) => {
	try {
		const { name, url } = await parseNameAndUrl(row);
		const imgUrl = await parseImage(row);
		const locations =
			i == 1 ? ['Night Market submarine ride'] : await parseLocations(row);
		const seasons = await parseSeasons(row, i);
		return (fishObj = {
			name: name,
			imgUrl: imgUrl,
			imgId: `stardew-catalogue/${name}`.replace(/ /g, '_'),
			wikiUrl: `https://stardewvalleywiki.com${url}`,
			locations: locations,
			seasons: seasons,
			time: i == 1 ? ['5pm - 2am'] : await getTimes(row),
			weather: i == 1 ? 'Any' : await getWeather(row),
			yearOneAvail: true,
			game: 'base',
		});
	} catch (error) {
		console.error(`Error processing data for row: ${i}`);
	}
};

module.exports = getFish;
