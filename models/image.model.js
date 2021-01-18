const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: Object,
    required: true,
  },
  price: {
    type: String,
  },
});

mongoose.model('Image', imageSchema);
