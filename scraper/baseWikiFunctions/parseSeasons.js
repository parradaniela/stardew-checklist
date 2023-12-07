const parseSeasons = async (row, tableID) => {
	try {
		let seasons;
		if (
			tableID === 'Spring' ||
			tableID === 'Summer' ||
			tableID === 'Fall' ||
			tableID === 'Winter'
		) {
			return [tableID];
		} else if (
			tableID === 'The_Desert' ||
			tableID === 'Ginger_Island' ||
			tableID === 'The_Mines'
		) {
			seasons = 'All';
		} else {
			// The Beach
			const fourthColumnText = await row.$eval('td:nth-child(4)', td => {
				return td.innerText.replace(/\u00A0/g, '');
			});
			seasons = fourthColumnText;
		}
		if (seasons === 'All') return ['Spring', 'Summer', 'Fall', 'Winter'];
		return seasons;
	} catch (err) {
		console.log('Error parsing seasons: ', err);
	}
};

module.exports = parseSeasons;
