const express = require("express");
const { UserTable } = require("../model.js");
const router = express.Router();

router.get("/logout", async (req, res) => {
	// on client, also delete the access token

	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(204); //no content
	const refreshToken = cookies.jwt;

	//is refreshToken in DB?
	const foundUser = await UserTable.findOne({
		where: { refreshtoken: refreshToken },
	});
	if (!foundUser) {
		res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
		res.sendStatus(204);
	}

	//Delete refresh token in the DB
	try {
		foundUser.refreshtoken = "";
		await foundUser.save();
		console.log("Logged out user:", foundUser);
	} catch (error) {
		console.error("Error logging out user:", error);
	}

	res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true }); // secure: true
	res.sendStatus(204);
});

module.exports = router;
