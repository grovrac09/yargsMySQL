const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");

const Bands = sequelize.define("Bands", {
    bandId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bandName: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    memberCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Bands;



