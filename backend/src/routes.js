const { Router } = require('express');
const routes = Router();

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Oministack10'});
});

module.exports = routes;
