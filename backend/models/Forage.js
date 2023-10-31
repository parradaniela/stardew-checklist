const mongoose = require('mongoose');

const forageSchema = new mongoose.Schema({
	game: String,
	name: String,
	wikiUrl: String,
});

module.exports = mongoose.model('Forage', forageSchema);
