const parseLocations = async (row, tableID) => {
	// Add edge case for ginger island to include extra details?
	if (
		tableID === 'Spring' ||
		tableID === 'Summer' ||
		tableID === 'Fall' ||
		tableID === 'Winter'
	) {
		const fourthColumn = await row.$eval('td:nth-child(4)', td => {
			const ulElement = td.querySelector('ul');
			if (ulElement) {
				const lis = Array.from(ulElement.querySelectorAll('li'));
				return lis.map(li => li.textContent);
			} else {
				return [td.innerText];
			}
		});
		return fourthColumn;
	} else {
		return tableID.replace('_', ' ');
	}
};

module.exports = parseLocations;
