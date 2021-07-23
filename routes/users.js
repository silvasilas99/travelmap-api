const router = require('express').Router();
const userController = require('./../controllers/users.controllers');

router.get('/', userController.hello);

module.exports = router;