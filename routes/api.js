const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const profileController = require('../controllers/profileController');

//user
router.post('/users', usersController.postSignup); //input user
router.put('/users/:id', usersController.putUser); //update user
router.delete('/users/:id', usersController.deleteUser); //delete user
router.get('/users', usersController.getAllListUser); //show all
router.get('/users/:id', usersController.getSingleListUser); //show 1 user
router.get('/users-full/:id', usersController.getSingleListUserFull); //show 1 user with profile

//peofile
router.post('/peofiles', profileController.postProfile);
module.exports = router;
