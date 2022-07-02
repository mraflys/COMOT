const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const profileController = require('../controllers/profileController');
const postingController = require('../controllers/postingController');

//user
router.post('/users', usersController.postSignup); //input user
router.put('/users/:id', usersController.putUser); //update user
router.delete('/users/:id', usersController.deleteUser); //delete user
router.get('/users', usersController.getAllListUser); //show all
router.get('/users/:id', usersController.getSingleListUser); //show 1 user
router.get('/users-full/:id', usersController.getSingleListUserFull); //show 1 user with profile

//profile
router.get('/profiles', profileController.getAllListProfile);
router.post('/profiles', profileController.postProfile);
router.put('/profiles/:id', profileController.putProfile);
router.get('/confirm', usersController.getverif);
//peofile
router.post('/peofiles', profileController.postProfile);

//posting
router.post('/posting', postingController.postPosting); //input posting
router.put('/posting/:id', postingController.putPosting); //update posting
router.delete('/posting/:id', postingController.deletePosting); //delete posting
router.get('/posting', postingController.getAllListPosting); //show all posting
router.get('/posting/:id', postingController.getSingleListPosting); //show 1 posting

module.exports = router;