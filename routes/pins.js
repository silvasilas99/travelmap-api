const router = require('express').Router();
const pinsController = require('./../controllers/pins.controllers');

router.get('/', pinsController.hello);
router.post('/new', pinsController.createPin);
router.get('/allPins', pinsController.getPins);

module.exports = router;