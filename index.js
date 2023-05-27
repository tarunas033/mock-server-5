const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(cors()); 
app.use(middlewares);
app.use(router);
app.listen(3001, () => {
  console.log('JSON Server is running');
});
