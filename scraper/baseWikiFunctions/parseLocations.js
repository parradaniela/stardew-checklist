const parseLocations = async (row, tableID) => {
	try {
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
					return lis.map(li => li.textContent.replace(/\(.*$/, '').trim());
				} else {
					return [td.innerText.replace(/\(.*$/, '').trim()];
				}
			});
			return fourthColumn;
		} else {
			return [tableID.replace(/_/g, ' ')];
		}
	} catch (err) {
		console.log('Error parsing locations: ', err);
	}
};

module.exports = parseLocations;
