const Forage = require('../models/Forage');
const asyncHandler = require('express-async-handler');

//@desc Get all forage
//@route GET /forage
//@access Public
const getAllForage = asyncHandler(async (req, res) => {
	const forage = await Forage.find().lean();
	if (!forage?.length) {
		return res.status(400).json({ message: 'No forage found' });
	}
	res.json(forage);
});

//@desc Create new forage object
//@route POST /forage
//@access Public
const createNewForage = asyncHandler(async (req, res) => {
	console.log('Created');
});

//@desc Update a forage object
//@route PATCH /forage
//@access Public
const updateForage = asyncHandler(async (req, res) => {
	console.log('Updated');
});

//@desc Delete a forage object
//@route DELETE /forage
//@access Public
const deleteForage = asyncHandler(async (req, res) => {
	console.log('Updated');
});

module.exports = { getAllForage, createNewForage, updateForage, deleteForage };
