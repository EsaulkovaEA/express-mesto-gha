const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers, returnUserId, updateProfile, updateAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }),
}), returnUserId);
router.patch('/users/me', celebrate({
  body: {
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  },
}), updateProfile);
router.patch('/users/me/avatar', celebrate({
  body: {
    avatar: Joi.string().regex(/https?:\/\/\S+/),
  },
}), updateAvatar);

module.exports = router;
