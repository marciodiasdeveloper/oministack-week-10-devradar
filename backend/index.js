const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello Oministack10'});
});

// app.delete('/users/:id', (request, response) => {
//   console.log(request.params);
//   return response.json({ message: 'Hello OminiStack' });
// });

app.listen(3333);