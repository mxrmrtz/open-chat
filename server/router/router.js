const express = require('express');
const router = express.Router();
const MessageTable = require("../model.js")

console.log(MessageTable)

router.get('/messages', async (req, res) => {
  // const data = {
  //   username:"happyTime",
  //   message: 'Hello from Express!'
  // };
  const list = await MessageTable.findAll();
	res.json(list);
});

module.exports = router;