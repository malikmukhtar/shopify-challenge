const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Sapmle Text');
});

module.exports = router;
