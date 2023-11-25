const parseNameAndUrl = async row => {
	return await row.$eval('td:nth-child(2) a', a => {
		return {
			name: a.innerText,
			url: a.getAttribute('href'),
		};
	});
};

const parseImage = async row => {
	return await row.$eval('td:first-child a', a => a.getAttribute('href'));
};

const parseLocations = async row => {
	return await row.$$eval('td:nth-child(3) a', anchors =>
		anchors.map(a => a.innerText)
	);
};

module.exports = { parseNameAndUrl, parseImage, parseLocations };
