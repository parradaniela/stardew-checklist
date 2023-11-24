const fs = require('fs/promises');

const writeJsonFile = async (fileName, jsonData) => {
	await fs.writeFile(fileName, JSON.stringify(jsonData, null, 2));
};

module.exports = writeJsonFile;
