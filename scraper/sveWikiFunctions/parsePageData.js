const parseName = async page => {
	try {
		const name = await page.$eval('h1', heading => heading.innerText);
		return name;
	} catch (err) {
		console.log('Error parsing name', err);
	}
};

const parseImage = async page => {
	try {
		const image = await page.$eval('.image-thumbnail', image =>
			image.getAttribute('href')
		);
		return image;
	} catch (err) {
		console.log('Error parsing image', err);
	}
};

const parseLocations = async page => {
	// Lots of work to do in cleaning this up and getting the right data
	try {
		const locations = await page.$$eval('[data-source="source"] a', anchors =>
			anchors.map(location =>
				location.innerText.trim().replace(/[^a-zA-Z, ]/g, '')
			)
		);
		return locations;
	} catch (err) {
		console.log('Error parsing locations', err);
	}
};

const parseSeasons = async page => {
	// Need to add more logic for when All Seasons appear, or when different locations have different seasons
	try {
		const seasons = await page.$$eval('[data-source="season"] div', divs =>
			divs.map(season => season.innerText.trim().replace(/[^a-zA-Z,]/g, ''))
		);
		return seasons;
	} catch (err) {
		console.log('Error parsing seasons', err);
	}
};

module.exports = { parseName, parseImage, parseLocations, parseSeasons };
