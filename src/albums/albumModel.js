const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");
const {Bands} = require("../bands/bandModel");

const Album = sequelize.define("Album", {
    bandId: {
        type: DataTypes.INTEGER,
        references: {
            model: Bands,
            key: "bandId"
        }
    },
    albumId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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


