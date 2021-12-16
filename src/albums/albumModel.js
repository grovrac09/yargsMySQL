const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Album = sequelize.define("Album", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tracks: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Album;


