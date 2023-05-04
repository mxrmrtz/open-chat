const express = require("express");
const router = express.Router();
const MessageTable = require("../model.js");

console.log(MessageTable);

router.get("/messages", async (req, res) => {
	// const data = {
	//   username:"happyTime",
	//   message: 'Hello from Express!'
	// };
	const list = await MessageTable.findAll();
	res.json(list);
});

router.post("/message", async (req, res) => {
	const { username, message } = req.body;
	const newMessage = await MessageTable.create({
		username,
		message,
	});
	res.send(newMessage);
});

module.exports = router;
