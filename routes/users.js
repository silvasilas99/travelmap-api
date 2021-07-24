const router = require('express').Router();
const userController = require('./../controllers/users.controllers');

router.get('/', userController.hello);
router.post('/register', userController.createUser);
router.post('/login', userController.findUser);

module.exports = router;