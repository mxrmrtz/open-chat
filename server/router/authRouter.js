const express = require("express");
const { UserTable } = require("../model.js");
const bcrypt = require("bcrypt");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/auth", async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password)
		return res.status(400).json({
			message: `${username} ${password}username and password are required`,
		});
	const foundUser = await UserTable.findOne({ where: { username: username } });
	if (!foundUser) return res.status(401); // unauthorized
	const match = await bcrypt.compare(password, foundUser.password);
	if (match) {
		// create JWTs
		res.json({ success: `User ${username} is logged in` });
	} else {
		res.sendStatus(401); // unauthoreized
	}
});

module.exports = router;
