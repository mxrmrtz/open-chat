const express = require("express");
const { UserTable } = require("../model.js");
const bcrypt = require("bcrypt");
const router = express.Router();

const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/auth", async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password)
		return res.status(400).json({
			message: `${username} ${password}username and password are required`,
		});
	const foundUser = await UserTable.findOne({ where: { username: username } });
	if (!foundUser)
		return res.status(401).json({ message: "wrong password or username" }); // unauthorized
	const match = await bcrypt.compare(password, foundUser.password);
	if (match) {
		// create JWTs
		const accessToken = jwt.sign(
			{ username: foundUser.username },
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "30s" } // make it like 5 min in production
		);
		const refreshToken = jwt.sign(
			{ username: foundUser.username },
			process.env.REFRESH_TOKEN_SECRET,
			{ expiresIn: "1d" }
		);

		try {
			foundUser.refreshtoken = refreshToken;
			await foundUser.save();
			console.log("Saved user:", foundUser);
		} catch (error) {
			console.error("Error saving user:", error);
		}
		res.cookie("jwt", refreshToken, {
			httpOnly: true,
			sameSite: "None",
			secure: true,
			maxAge: 24 * 60 * 60 * 1000,
		});
		res.json({
			accessToken,
		});
	} else {
		res.sendStatus(401); // unauthoreized
	}
});

module.exports = router;
