const mongoose = require('mongoose');

const forageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	imgUrl: {
		type: String,
		required: true,
	},
	wikiUrl: {
		type: String,
		required: true,
	},
	locations: [
		{
			type: String,
			required: true,
		},
	],
	seasons: [
		{
			type: String,
			required: true,
		},
	],
	yearOneAvail: {
		type: Boolean,
		required: true,
	},
	game: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Forage', forageSchema, 'forage');
