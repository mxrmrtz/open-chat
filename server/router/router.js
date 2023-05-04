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

router.put("/message", async (req, res) => {
	const { message, id } = req.body;
	const updatedMessage = await MessageTable.update(
		{ message: message },
		{
			where: {
				id: id,
			},
		}
	);
	res.send(updatedMessage);
});

module.exports = router;
