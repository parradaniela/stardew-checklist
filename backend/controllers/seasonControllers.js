const Forage = require('../models/Forage');
const asyncHandler = require('express-async-handler');

//@desc Get all forage
//@route GET /forage/all/:season
//@access Public
const getAllForageInSeason = asyncHandler(async (req, res) => {
	const { season } = req.params;
	const forage = await Forage.find({ seasons: season })
		.collation({ locale: 'en', strength: 2 })
		.sort({ name: 1 })
		.lean();
	if (!forage?.length) {
		return res.status(400).json({ message: 'No forage found for this season' });
	}
	res.json(forage);
});

//@desc Get all forage
//@route GET /forage/:game/:season
//@access Public
const getForageByGameAndSeason = asyncHandler(async (req, res) => {
	const { game, season } = req.params;
	const forage = await Forage.find({ game, seasons: season })
		.collation({ locale: 'en', strength: 2 })
		.sort({ name: 1 })
		.lean();
	if (!forage?.length) {
		return res
			.status(400)
			.json({ message: 'No forage found for this game and season' });
	}
	res.json(forage);
});

module.exports = { getForageByGameAndSeason, getAllForageInSeason };
