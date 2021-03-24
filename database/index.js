const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ToDoList', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const listSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model('List', listSchema);

module.exports = { Item };
