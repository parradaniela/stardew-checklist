const getForageItemUrls = async page => {
	try {
		const anchorHrefs = await page.$$eval('.mw-parser-output a', anchors => {
			return anchors.map(anchor => anchor.getAttribute('href'));
		});
		return anchorHrefs;
	} catch (err) {
		console.log('Error getting the forage item page href attributes', err);
	}
};

module.exports = getForageItemUrls;
