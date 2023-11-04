const express = require('express');
const router = express.Router();
const {
	getAllForage,
	createNewForage,
	updateForage,
	deleteForage,
} = require('../controllers/forageControllers');

const getForageFromGame = require('../controllers/gameController');
const {
	getForageByGameAndSeason,
	getAllForageInSeason,
} = require('../controllers/seasonControllers');

router
	.route('/')
	.get(getAllForage)
	.post(createNewForage)
	.patch(updateForage)
	.delete(deleteForage);

router.route('/all/:season').get(getAllForageInSeason);
router.route('/:game').get(getForageFromGame);
router.route('/:game/:season').get(getForageByGameAndSeason);

module.exports = router;
