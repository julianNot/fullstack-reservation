const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = process.env.MONGODB_URI;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
