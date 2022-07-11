const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cards = require('./routes/cards');
const { ERROR_CODE_404 } = require('./utils/error');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', { useNewUrlParser: true });
app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '62cab02cb75a1a08630e5334',
  };

  next();
});

app.use('/', users);
app.use('/', cards);

app.use((req, res) => {
  res.status(ERROR_CODE_404).send({ message: 'Данной страницы не существует' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
