const { Sequelize, DataTypes } = require("sequelize");
const { dotenv } = require("dotenv");
require("dotenv").config();

console.log(process.env.DB_name);

const sequelize = new Sequelize(
	process.env.DB_name,
	process.env.DB_username,
	process.env.DB_password,
	{  host: process.env.DB_host,
	port: process.env.DB_port,
	dialect: 'postgres',
	dialectOptions: {
	  ssl: {
		require: true,
		rejectUnauthorized: false
	  }
	}}
);

const MessageTable = sequelize.define("messages", {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
	},
	username: {
		type: DataTypes.TEXT,
	},
	message: {
		type: DataTypes.TEXT,
	},
});

sequelize
	.sync()
	.then(() => {
		console.log("Model synced with database!");
	})
	.catch((error) => {
		console.error("Error syncing model with database:", error);
	});

module.exports = MessageTable;
