const getBaseWikiData = async (page, season) => {
	const tableSelector = `h3:has(span#${season}) + table tbody`;
	let forageObj = {
		name: '',
		imgUrl: '',
		wikiUrl: '',
		locations: [],
		seasons: [],
		yearOneAvail: true,
	};

	const itemImg = await page.$(`${tableSelector} tr:first-child img`);
	if (itemImg) {
		const srcHandle = await itemImg.getProperty('src');
		forageObj.imgUrl = await srcHandle.jsonValue();
	} else {
		console.log('Image not found');
	}

	const itemNameAnchor = await page.$(`${tableSelector} tr td:nth-child(2) a`);
	if (itemNameAnchor) {
		const wikiHref = await itemNameAnchor.getProperty('href');
		forageObj.wikiUrl = await wikiHref.jsonValue();
		forageObj.name = await itemNameAnchor.evaluate(node => node.innerText);
	} else {
		console.log('Item Name Anchor not found');
	}

	const itemLocations = await page.$$eval(
		`${tableSelector} tr:first-child ul li`,
		locations => {
			return locations.map(location => location.textContent);
		}
	);
	forageObj.locations = forageObj.locations.concat(itemLocations);

	if (forageObj.seasons.indexOf(season.toLowerCase()) === -1) {
		forageObj.seasons.push(season.toLowerCase());
	}
	console.log(forageObj);
	return forageObj;
};

module.exports = getBaseWikiData;
