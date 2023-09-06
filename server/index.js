const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router/router");
const usersRouter = require("./router/usersRouter");
const authRouter = require("./router/authRouter");
const cookieParser = require("cookie-parser");
const Aiven = require("./aivenDatabase");
const verifyJWT = require("./middleware/verifyJWT");

Aiven();
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use(cookieParser());

app.use("/", router);
app.use("/", usersRouter);
// app.use(verifyJWT);
app.use("/", authRouter);

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
