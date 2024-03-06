const parseNameAndUrl = async row => {
	return await row.$eval('td:nth-child(2) a', a => {
		return {
			name: a.innerText,
			url: a.getAttribute('href'),
		};
	});
};

const parseImage = async row => {
	return await row.$eval('td:first-child img', img => img.getAttribute('src'));
};

const parseLocations = async row => {
	return await row.$eval('td:nth-child(7)', td => {
		return td.innerText.split(/\n|,/).map(s => s.trim());
	});
};

const getTimes = async row => {
	return await row.$eval('td:nth-child(8)', td => {
		return td.innerText.split(/\n/).map(s => s.trim());
	});
};

const getWeather = async row => {
	return await row.$eval('td:nth-child(10)', td => {
		return td.innerText.trim();
	});
};

module.exports = {
	parseNameAndUrl,
	parseImage,
	parseLocations,
	getTimes,
	getWeather,
};
