const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },

  image: {
    type: String,
  },
  data: {
    type: Object,
  },
});

const Upload = mongoose.model('Upload', imageSchema);

module.exports.Upload = Upload;
