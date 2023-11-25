const updateSeasons = i => {
	if (i === 0) return ['Spring', 'Summer', 'Fall', 'Winter'];
	if (i === 1) return ['Spring'];
	if (i === 2) return ['Summer'];
	if (i === 3) return ['Fall'];
	if (i === 4) return ['Winter'];
};

module.exports = updateSeasons;
