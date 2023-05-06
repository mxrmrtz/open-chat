const express = require("express");
const router = express.Router();
const {MessageTable, UserTable} = require("../model.js");


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

router.post("/message", async (req, res) => {
	const { username, message } = req.body;
	const newMessage = await MessageTable.create({
		username,
		message,
	});
	res.send(newMessage);
});

router.delete("/messages/:id", async (req, res) => {
	const { id } = req.params;
	console.log("sadsadasd", id);
	const deleteTask = await MessageTable.destroy({
		where: {
			id: id,
		},
	});
	res.end();
});

module.exports = router;
