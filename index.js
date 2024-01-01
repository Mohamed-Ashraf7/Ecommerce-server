const express = require('express');
const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(auth);
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
