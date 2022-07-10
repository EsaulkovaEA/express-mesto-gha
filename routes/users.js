const router = require('express').Router();

const { getUsers, returnUserID, createUser } = require('../controllers/users');

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:userId', returnUserID);

module.exports = router;