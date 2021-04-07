const models = require('../models/index.js');

module.exports = {
  addTaskListItem: (req, res) => {
    models.saveItem(req.body.name, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send('Saved');
      }
    });
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

  removeTaskItem: (req, res) => {
    models.deleteItem(req.body.id, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).send('deleted');
      }
    });
  },
};
