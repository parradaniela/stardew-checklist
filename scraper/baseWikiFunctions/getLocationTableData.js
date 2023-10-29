const getLocationTableData = async (page, location) => {
	const forageArray = [];
	const locationSpan = await page.$(`span#${location}`);
	// using ElementHandle.$x() with the XPath '..' to select the parent element
	const h3Parent = (locationSpan && (await locationSpan.$x('..')))[0];
	const locationTable =
		h3Parent && (await h3Parent.$x('following-sibling::table[1]'))[0];
	// Filter table rows to exclude nested trs
	const locationTableRows =
		(locationTable && (await locationTable.$$(`tbody > tr:not(:is(tr tr))`))) ||
		[];
	// Loop through the rows for data
	for (const row of locationTableRows) {
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
		const imgSrc = await row.evaluate(tr => {
			const imgElement = tr.querySelector('img');
			return imgElement.getAttribute('src');
		});
		const wikiUrl = await row.evaluate(tr => {
			const anchorElement = tr.querySelector('td:nth-child(2) a');
			return anchorElement.getAttribute('href');
		});

		const itemLocation = location.replace('_', ' ');

		const itemSeasons = await row.evaluate(tr => {
			const season = tr.querySelector('td:nth-child(4)');
			const seasonText = season.innerText.replace(/\u00A0/g, '');
			if (seasonText === 'All') return ['Spring', 'Summer', 'Fall', 'Winter'];
			return seasonText;
		});

		forageObj.name = itemName;
		forageObj.imgUrl = imgSrc;
		forageObj.wikiUrl = `https://stardewvalleywiki.com${wikiUrl}`;
		forageObj.locations = forageObj.locations.concat(itemLocation);
		forageObj.seasons = forageObj.seasons.concat(itemSeasons);
		forageArray.push(forageObj);
	}
	return forageArray;
};

module.exports = getLocationTableData;
