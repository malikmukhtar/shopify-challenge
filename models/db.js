const mongoose = require('mongoose');

const db = process.env.MONGO_URL || 'mongodb://localhost:27017/pantaker';
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log('MongoDB connected to Shopify DataBase');
    } else {
      console.log('Error in connecting to DB' + err);
    }
  }
);

require('./image.model');
