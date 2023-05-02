const express = require('express');
const router = express.Router();
const MessageTable = require("../model.js")

console.log(MessageTable)

router.get('/messages', (req, res) => {
  const data = {
    message: 'Hello from Express!'
  };
  console.log(data)
  res.json(data);
});

module.exports = router;