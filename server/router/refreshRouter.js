const express = require("express");
const { UserTable } = require("../model.js");
const router = express.Router();

const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/refresh", async (req, res) => {
	console.log("request cookies", req.cookies);
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(401);
	const refreshToken = cookies.jwt;

	const foundUser = await UserTable.findOne({
		where: { refreshtoken: refreshToken },
	});
	if (!foundUser) return res.status("refreshTokenRouter 403"); // forbidden
	// evaluate JWTs
	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
		if (err || foundUser.username !== decoded.username)
			return res.sendStatus(403);
		const accessToken = jwt.sign(
			{ username: decoded.username },
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "5m" }
		);
		res.json({ accessToken });
	});
});

module.exports = router;
