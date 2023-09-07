const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router/router");
const usersRouter = require("./router/usersRouter");
const authRouter = require("./router/authRouter");
const refreshRouter = require("./router/refreshRouter");
const logoutRouter = require("./router/logoutRouter");
const cookieParser = require("cookie-parser");
const Aiven = require("./aivenDatabase");
const credentials = require("./middleware/credentials");
// const verifyJWT = require("./middleware/verifyJWT");
const corsOptions = require("./config/corsOptions");

Aiven();
const app = express();
const port = 3001;

app.use(bodyParser.json());

//credentials
app.use(credentials);

//Cors
app.use(cors(corsOptions));

//cookie middleware
app.use(cookieParser());

app.use("/", router);
app.use("/", usersRouter);
// app.use(verifyJWT);
app.use("/", authRouter);
app.use("/", refreshRouter);
app.use("/", logoutRouter);

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
