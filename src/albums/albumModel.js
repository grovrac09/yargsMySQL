const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");
const {Bands} = require("../bands/bandModel");

const Album = sequelize.define("Album", {
    albumId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bandId: {
        type: DataTypes.INTEGER,
        references: {
            model: Bands,
            key: "bandId"
        }
    },
    albumTitle: {
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


