const { Item } = require('../database');

module.exports = {
  saveItem: (item, cb) => {
    const listItem = new Item({
      name: item,
    });
    listItem.save((err) => {
      if (err) console.log(err);
    });
    cb();
  },
  getAllTasks: (cb) => {
    Item.find({}, cb);
  },
  deleteItem: (id, cb) => {
    Item.deleteOne({ _id: id }, cb);
  },
};
