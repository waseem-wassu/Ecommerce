const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/Shop'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
db.once('open', () => {
    console.log('Connected to MongoDB!');
  });

module.exports = db;