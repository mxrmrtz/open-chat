const express = require("express");
const usersRouter = express.Router();
const { UserTable } = require("../model.js");

// CREATE
usersRouter.post("/users", async (req, res) => {
	const { username, password } = req.body;
	const newUser = await UserTable.create({ username, password });
	res.send(newUser);
});

usersRouter.get("/users", async (req, res) => {
	const username = "whatecer";
	const password = "1234";
	const newUser = await UserTable.create({ username, password });
	res.send(newUser);
});

module.exports = usersRouter;
