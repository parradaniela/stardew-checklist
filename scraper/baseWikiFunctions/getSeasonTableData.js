const getSeasonTableData = async (page, season) => {
	const forageArray = [];
	const seasonSpan = await page.$(`span#${season}`);
	// using ElementHandle.$x() with the XPath '..' to select the parent element
	const h3Parent = (seasonSpan && (await seasonSpan.$x('..')))[0];
	const seasonTable =
		h3Parent && (await h3Parent.$x('following-sibling::table[1]'))[0];
	// Filter table rows to exclude nested trs
	const seasonTableRows =
		(seasonTable && (await seasonTable.$$(`tbody > tr:not(:is(tr tr))`))) || [];
	// Loop through the rows for data
	for (const row of seasonTableRows) {
		let forageObj = {
			name: '',
			imgUrl: '',
			wikiUrl: '',
			locations: [],
			seasons: [],
			yearOneAvail: true,
		};

		const itemName = await row.evaluate(tr => {
			const anchorElement = tr.querySelector('td:nth-child(2) a');
			return anchorElement.innerText;
		});
		const wikiUrl = await row.evaluate(tr => {
			const anchorElement = tr.querySelector('td:nth-child(2) a');
			return anchorElement.getAttribute('href');
		});

		const imgSrc = await row.evaluate(tr => {
			const imgElement = tr.querySelector('img');
			return imgElement ? imgElement.getAttribute('src') : null;
		});

		const itemLocations = await row.$$eval('td ul li', locations => {
			return locations.map(location => location.textContent);
		});

		forageObj.name = itemName;
		forageObj.imgUrl = imgSrc;
		forageObj.wikiUrl = `https://stardewvalleywiki.com${wikiUrl}`;
		forageObj.locations = forageObj.locations.concat(itemLocations);
		if (forageObj.seasons.indexOf(season.toLowerCase()) === -1) {
			forageObj.seasons.push(season.toLowerCase());
		}
		forageArray.push(forageObj);
	}
	return forageArray;
};

module.exports = getSeasonTableData;
