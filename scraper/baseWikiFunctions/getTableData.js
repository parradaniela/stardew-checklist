const getForage = require('./getForage');

const getTableData = async (page, tableID) => {
	try {
		const forageArray = [];
		const seasonSpan = await page.$(`span#${tableID}`);
		// using ElementHandle.$x() with the XPath '..' to select the parent element
		const h3Parent = (seasonSpan && (await seasonSpan.$x('..')))[0];
		const dataTable =
			h3Parent && (await h3Parent.$x('following-sibling::table[1]'))[0];
		// Filter table rows to exclude nested trs
		const dataTableRows =
			(dataTable && (await dataTable.$$(`tbody > tr:not(:is(tr tr))`))) || [];
		// Loop through the rows for data
		let i = 0;
		if (tableID === 'Ginger_Island') {
			i = 1;
		}
		for (i; i < dataTableRows.length; i++) {
			const row = dataTableRows[i];
			const forageObj = await getForage(row, tableID);
			forageArray.push(forageObj);
		}
		return forageArray;
	} catch (err) {
		console.log('Error getting table data: ', err);
	}
};

module.exports = getTableData;
