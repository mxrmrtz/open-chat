const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	console.log(req.headers);
	if (!authHeader) return res.send(401);
	const token = authHeader;
	console.log(token);
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) return res.sendStatus(403); //invalid token, forbidden
		req.user = decoded.username;
		next();
	});
};

module.exports = verifyJWT;
