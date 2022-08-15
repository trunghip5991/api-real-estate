const userRouter = require('express').Router();
const UserController = require('../controllers/user.controller');

userRouter.post('/', UserController.add);
userRouter.put('/:id', UserController.update);

module.exports = userRouter;