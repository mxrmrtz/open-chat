const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
require("dotenv").config();

console.log(process.env.DB_name);

const sequelize = new Sequelize(
	process.env.DB_name,
	process.env.DB_username,
	process.env.DB_password,
	{
		host: process.env.DB_host,
		port: process.env.DB_port,
		dialect: "postgres",
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	}
);

const MessageTable = sequelize.define("messages", {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
	},
	message: {
		type: DataTypes.TEXT,
	},
});

const UserTable = sequelize.define(
	"users",
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.TEXT,
		},
		password: {
			type: Sequelize.STRING,
		},
		refreshtoken: {
			type: DataTypes.STRING,
		},
	},
	{
		hooks: {
			beforeCreate: async (user) => {
				if (user.password) {
					const salt = await bcrypt.genSaltSync(10, "a");
					user.password = bcrypt.hashSync(user.password, salt);
				}
			},
		},
	}
);

UserTable.prototype.validPassword = async function (password) {
	return await bcrypt.compareSync(password, this.password);
};

UserTable.classMethods = {
	validPassword: async function (password, hash) {
		return await bcrypt.compareSync(password, hash);
	},
};

sequelize
	.sync()
	.then(() => {
		console.log("Model synced with database!");
	})
	.catch((error) => {
		console.error("Error syncing model with database:", error);
	});

module.exports = { MessageTable, UserTable };
