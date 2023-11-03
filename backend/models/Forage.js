const mongoose = require('mongoose');

const forageSchema = new mongoose.Schema({
	name: String,
	imgUrl: String,
	wikiUrl: String,
	locations: [String],
	seasons: [String],
	yearOneAvail: Boolean,
	game: String,
});

module.exports = mongoose.model('Forage', forageSchema);
