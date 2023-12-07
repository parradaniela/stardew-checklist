const Forage = require('../models/Forage');
const asyncHandler = require('express-async-handler');

//@desc Get all forage
//@route GET /forage/:game
//@access Public
const getForageFromGame = asyncHandler(async (req, res) => {
	const { game } = req.params;
	const forage = await Forage.find({ game })
		.collation({ locale: 'en', strength: 2 })
		.sort({ name: 1 })
		.lean();
	if (!forage?.length) {
		return res.status(400).json({ message: 'No forage found for this game' });
	}
	res.json(forage);
});

module.exports = getForageFromGame;
