const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('../controllers');

app.use('/', express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.json());

app.post('/tasklist', controllers.addTaskListItem);
app.get('/tasklist', controllers.retrieveAllTasks);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
