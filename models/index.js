const { Item } = require('../database');

module.exports = {
  saveItem: (item) => {
    const listItem = new Item({
      name: item,
    });
    listItem.save((err) => {
      if (err) console.log(err);
    });
  },
};
