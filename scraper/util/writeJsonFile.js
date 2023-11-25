const fs = require('fs').promises; // Make sure to use the promises version of 'fs' for async/await
const path = require('path');

const writeJsonFile = async (fileName, jsonData) => {
	const directory = 'jsonOutput';
	const filePath = path.join(directory, fileName);

	try {
		// Check if the directory exists, create it if it doesn't
		await fs.mkdir(directory, { recursive: true });

		// Write the JSON data to a file in the specified directory
		await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
		console.log(`File written to ${filePath}`);
	} catch (err) {
		console.error('Error writing JSON file:', err);
	}
};

module.exports = writeJsonFile;
