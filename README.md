# render-json-server

Hello everyone in this video you will learn to deploy your db.json file on **render.com** step by step.

**Step 1** -   Create git repository

**Step 2** - Clone it on your device

**Step 3** - Add package.json by using this command `npm init -y`

**Step 4** - Install some dependency by using this command `npm i json-server cors json-server-auth` and add ` "start": "node index.js" ` in script 

**Step 6** - Create index.js file copy the code under blew on it 

```javaScript
const express = require('express');
const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = express();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(auth);
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

```

**Step 7** - Add data.json which contain data  and add .gitignore file


After all this steps are completed use this command to push the code in your Github account.

`git add .`

`git commit -m "Your message"`

`git push origin main`


finnaly : you can deploy it and use
