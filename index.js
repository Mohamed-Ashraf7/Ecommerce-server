const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();
const PORT = 3001;

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running: ${PORT}`);
});