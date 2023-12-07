const Forage = require('../models/Forage');
const asyncHandler = require('express-async-handler');

//@desc Get all forage
//@route GET /forage
//@access Public
const getAllForage = asyncHandler(async (req, res) => {
	const forage = await Forage.find()
		.collation({ locale: 'en', strength: 2 })
		.sort({ name: 1 })
		.lean();
	if (!forage?.length) {
		return res.status(400).json({ message: 'No forage found' });
	}
	res.json(forage);
});

//@desc Create new forage object
//@route POST /forage
//@access Public
const createNewForage = asyncHandler(async (req, res) => {
	const { name, imgUrl, wikiUrl, locations, seasons, yearOneAvail, game } =
		req.body;
	//Confirm that all data is present
	// Do I want to split this into separate checks so that the return message is more helpful?
	if (
		!name ||
		!imgUrl ||
		!wikiUrl ||
		!Array.isArray(locations) ||
		!locations.length ||
		!Array.isArray(seasons) ||
		!seasons.length ||
		typeof yearOneAvail !== 'boolean' ||
		!game
	) {
		return res.status(400).json({ message: 'All fields are required' });
	}
	// Check for duplicates
	const duplicate = await Forage.findOne({ name }).lean().exec();
	if (duplicate) return res.status(400).json({ message: 'Duplicate name' });
	// Create and store new forage item
	const forageObj = {
		name,
		imgUrl,
		wikiUrl,
		locations,
		seasons,
		yearOneAvail,
		game,
	};
	const forage = await Forage.create(forageObj);
	if (forage) {
		res.status(201).json({ message: `New forage item ${name} created` });
	} else {
		res.status(400).json({ message: 'Invalid forage data received' });
	}
});

//@desc Update a forage object
//@route PATCH /forage
//@access Public
const updateForage = asyncHandler(async (req, res) => {
	const { name, imgUrl, wikiUrl, locations, seasons, yearOneAvail, game } =
		req.body;
	if (
		!name ||
		!imgUrl ||
		!wikiUrl ||
		!Array.isArray(locations) ||
		!locations.length ||
		!Array.isArray(seasons) ||
		!seasons.length ||
		typeof yearOneAvail !== 'boolean' ||
		!game
	) {
		return res.status(400).json({ message: 'All fields are required' });
	}
	const forage = await Forage.findOne({ name }).exec();
	if (!forage) {
		return res
			.status(400)
			.json({ message: 'No forage item with that name found' });
	}
	forage.imgUrl = imgUrl;
	forage.wikiUrl = wikiUrl;
	locations.forEach(location => {
		if (forage.locations.indexOf(location) === -1) {
			forage.locations.push(location);
		}
	});
	seasons.forEach(season => {
		if (forage.seasons.indexOf(season) === -1) {
			forage.seasons.push(season);
		}
	});
	forage.yearOneAvail = yearOneAvail;
	forage.game = game;
	const updatedForage = await forage.save();
	// const updatedName = updatedForage
	res.json({ message: `${updatedForage.name} updated` });
});

//@desc Delete a forage object
//@route DELETE /forage
//@access Public
const deleteForage = asyncHandler(async (req, res) => {
	const { name } = req.body;
	if (!name)
		return res.status(400).json({ message: 'Forage item name required' });
	const forage = await Forage.findOne({ name }).lean().exec();
	if (!forage)
		return res.status(400).json({ message: `Forage item ${name} not found` });
	await Forage.deleteOne({ name });
	res.json({ message: `Forage item ${name} deleted` });
});

module.exports = { getAllForage, createNewForage, updateForage, deleteForage };
