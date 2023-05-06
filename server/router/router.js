const express = require("express");
const router = express.Router();
const {MessageTable, UserTable} = require("../model.js");


// CREATE
router.post("/messages", async (req, res) => {
	const { username, message } = req.body;
	const newMessage = await MessageTable.create({
		username,
		message,
	});
	res.send(newMessage);
});

// READ
router.get("/messages", async (req, res) => {
	const list = await MessageTable.findAll();
	res.json(list);
});

// UPDATE
router.put("/messages/:id", async (req, res) => {
	const { id } = req.params;
	const { message } = req.body;
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

// DELETE
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
