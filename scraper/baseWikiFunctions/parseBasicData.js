const parseNameAnchor = async row => {
	try {
		const nameAndUrl = await row.$eval('td:nth-child(2) a', anchor => {
			if (!anchor) {
				console.error('Missing anchor in row:', row.outerHTML);
				return null;
			}
			return {
				name: anchor.innerText,
				url: anchor.getAttribute('href'),
			};
		});
		return nameAndUrl;
	} catch (err) {
		console.log('Error parsing name anchor: ', err);
	}
};

const parseImageSrc = async row => {
	try {
		const imgSrc = await row.$eval('img', image => {
			if (!image) {
				console.error('Missing image in row:', tr.outerHTML);
				return null;
			}
			return image.getAttribute('src');
		});
		return imgSrc;
	} catch (err) {
		console.log('Error parsing image src: ', err);
	}
};

module.exports = { parseNameAnchor, parseImageSrc };
