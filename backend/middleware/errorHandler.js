// Credit to Dave Gray's MERN Stack Tutorials for middleware logic: https://www.youtube.com/playlist?list=PL0Zuz27SZ-6P4dQUsoDatjEGpmBpcOW8V

const { logEvents } = require('./logger');

const errorHandler = (err, req, res, next) => {
	logEvents(
		`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
		'errLog.log'
	);
	console.log(err.stack);

	const status = res.statusCode ? res.statusCode : 500; //Server error
	res.status(status);
	res.json({ message: err.message });
};

module.exports = errorHandler;
