const router = require('express').Router();
const pinsController = require('./../controllers/pins.controllers');

router.get('/', pinsController.hello);

module.exports = router;