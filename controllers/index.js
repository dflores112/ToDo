// brings in models you can whatever you want ex models
// run those model function
// also responsible for the request and response

const models = require('../models/index.js');

module.exports = {
  addTaskListItem: (req, res) => {
  },
  retrieveAllTasks: (req, res) => {
    models.getAllTasks((err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send(data);
      }
    });
  },
};
