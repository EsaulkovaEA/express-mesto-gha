const router = require('express').Router();

const { getUsers, returnUserID, createUser, updateProfile, updateAvatar } = require('../controllers/users');

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:userId', returnUserID);
router.patch('/me', updateProfile);
router.patch('/me/avatar', updateAvatar);

module.exports = router;