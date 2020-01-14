const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-tvrvs.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// MongoDB (não-relacional)

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello Oministack10'});
});

// app.delete('/users/:id', (request, response) => {
//   console.log(request.params);
//   return response.json({ message: 'Hello OminiStack' });
// });

app.listen(3333);