const express = require("express");
const usersRouter = express.Router();
const { UserTable } = require("../model.js");

// CREATE
usersRouter.post("/users", async (req, res) => {
	const { username, password } = req.body;
	const newUser = await UserTable.create({ username, password });
	res.send(newUser);
});

// READ
usersRouter.get("/users", async (req, res) => {
	const allUsers = userTable.findAll();
	res.send(allUsers);
});

module.exports = usersRouter;
