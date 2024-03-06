const parseSeasons = async (row, i) => {
	if (i == 1) return ['Winter'];
	const seasonColumnText = await row.$eval('td:nth-child(9)', td => {
		return td.innerText
			.replace(/\u00A0/g, '')
			.split(/\n/)
			.map(s => s.trim());
	});

	if (seasonColumnText[0] === 'All Seasons')
		return ['Spring', 'Summer', 'Fall', 'Winter'];
	return seasonColumnText;
};

module.exports = parseSeasons;
