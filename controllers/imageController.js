const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
// const Upload = require('../models/image.model');
const Cat = mongoose.model('Cat', {
  name: String,
  price: String,
  image: Object,
  data: Object,
});

// Cloudinary Storage

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
//Define storage for the image
const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, 'uploads');
  },

  //add back extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameter for multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 1,
  },
});

router.get('/', (req, res) => {
  res.render('image/addOrEdit', {
    viewTitle: 'Create Image',
  });
});

router.post('/', upload.single('image'), async (req, res) => {
  //   var myImage = new Upload({
  //     name: req.body.name,
  //     price: req.body.price,
  //     image: req.file,
  //     data: {},
  //   });

  const kitty = new Cat({ name: req.body.name });
  kitty.save();
  res.send('kitty saved');

  //   console.log('hello', req.body);
  //   let data = await cloudinary.uploader
  //     .upload(req.file.path, function (err, result) {})
  //     .then((resp) => resp);

  //Adding data to upload object
  //   myImage.data = data;

  //Save into Database
  //   myImage.save();
  //   if (!err) res.redirect('/list');
  //   else {
  //     console.log('error during image insert' + err);
  //   }
});

router.get('/list', (req, res) => {
  res.json('From list');
});

module.exports = router;
