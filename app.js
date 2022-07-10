// // запустите этот файл и перейдите
// // в браузере по адресу: http://localhost:3000

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200; // статус ответа
//   res.statusMessage = 'OK'; // сообщение ответа
//   res.setHeader('Content-Type', 'text/plain'); // добавить ответу заголовок

//   res.write('Hello, '); // отправить часть ответа — строку "Hello, "
//   res.write('world!'); // отправить часть ответа — строку "world!"

//   res.end(); // закончить отправку ответа
// });

// server.listen(3000);
const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cards = require('./routes/cards');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {useNewUrlParser: true});
app.use(express.json());

app.use('/', users);
app.use('/', cards);

app.use((req, res, next) => {
  req.user = {
    _id: '62cab02cb75a1a08630e5334',
  };

  next();
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
