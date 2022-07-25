const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cards = require('./routes/cards');

const auth = require('./middlewares/auth');

const { login, createUser } = require('./controllers/users');

const NotFoundError = require('./error/NotFoundError');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', { useNewUrlParser: true });
app.use(express.json());

app.use('/', auth, users);
app.use('/', auth, cards);

app.post('/signin', login);
app.post('/signup', createUser);

app.use('*', (req, res, next) => {
  next(new NotFoundError('Данной страницы не существует'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
