const { UserTable } = require("../model.js");
const bcrypt = require("bcrypt");

const handleLogin = async (res, req) => {
	const { username, pwd } = req.body;
	res.send(req.body);
	if (!username || !pwd)
		return res
			.status(400)
			.json({ message: "username and password are required" });
	const foundUser = UserTable.findAll({ where: { username: user } });
	if (!foundUser) return res.status(401); // unauthorized
	const match = await bcrypt.compare(pwd, foundUser.pwd);
	if (match) {
		// create JWTs
		res.json({ success: `User ${user} is logged in` });
	} else {
		res.sendStatus(401); // unauthoreized
	}
};

module.exports = { handleLogin };
