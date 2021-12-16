const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Member = sequelize.define("Member", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Member;