const parseName = async page => {
	try {
		return await page.$eval('h1', heading => heading.innerText);
	} catch (err) {
		console.log('Error parsing name', err);
	}
};

const parseImage = async page => {
	try {
		return await page.$eval('.image-thumbnail', image =>
			image.getAttribute('href')
		);
	} catch (err) {
		console.log('Error parsing image', err);
	}
};

const parseLocations = async page => {
	// Locations are not entered in a consistent structure on the wiki, some manual cleanup required
	try {
		return await page.$$eval('[data-source="source"] a', anchors =>
			anchors.map(location => location.innerText.replace(/[^a-zA-Z ]/g, '').trim())
		);
	} catch (err) {
		console.log('Error parsing locations', err);
	}
};

const parseSeasons = async page => {
	// Seasons are not entered in a consistent structure on the wiki, some manual cleanup required
	try {
		const seasons = await page.$$eval('[data-source="season"] div', divs =>
			divs.map(season => season.innerText.replace(/[^a-zA-Z ]/g, '').trim())
		);
		if (seasons.indexOf('All') !== -1 || seasons.indexOf('All Seasons') !== -1) {
			return ['Spring', 'Summer', 'Fall', 'Winter'];
		}
		return seasons;
	} catch (err) {
		console.log('Error parsing seasons', err);
	}
};

module.exports = { parseName, parseImage, parseLocations, parseSeasons };
