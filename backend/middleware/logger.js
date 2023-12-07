// Credit to Dave Gray's MERN Stack Tutorials for middleware logic: https://www.youtube.com/playlist?list=PL0Zuz27SZ-6P4dQUsoDatjEGpmBpcOW8V

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs/promises');

const logEvents = async (message, logFileName) => {
	const dateTime = format(new Date(), 'yyyMMdd\tHH:mm:ss');
	const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

	try {
		if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
			await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
		}
		await fsPromises.appendFile(
			path.join(__dirname, '..', 'logs', logFileName),
			logItem
		);
	} catch (err) {
		console.log(err);
	}
};

const logger = (req, res, next) => {
	logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log');
	console.log(`${req.method} ${req.path}`);
	next();
};

module.exports = { logger, logEvents };
