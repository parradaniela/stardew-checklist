const express = require('express');
const router = express.Router();
const {
	getAllForage,
	createNewForage,
	updateForage,
	deleteForage,
} = require('../controllers/forageControllers');

router
	.route('/')
	.get(getAllForage)
	.post(createNewForage)
	.patch(updateForage)
	.delete(deleteForage);

module.exports = router;
