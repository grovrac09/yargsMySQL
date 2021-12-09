const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");

const Music = sequelize.define("Music", {
    bands: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    albums: {
        type: DataTypes.STRING,
    },
    songs: {
        type: DataTypes.STRING
    }
});

module.exports = Music;