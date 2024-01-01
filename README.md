Step 1 - Create git repository

Step 2 - Clone it on your device

Step 3 - Add package.json by using this command npm init -y

Step 4 - Install some dependency by using this command npm i json-server cors json-serve-auth and add "start": "node index.js" in script

Step 6 - Create index.js file copy the code under blew on it 

const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const auth = require('json-server-auth');
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running');
});

Step 7 - Add db.json and add .gitignore file

After all this steps are completed use this command to push the code in your Github account.

git add .

git commit -m "Your message"

git push origin main 

finnaly : you can deploy it and use 
