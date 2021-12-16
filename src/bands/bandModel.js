const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Album = require("../albums/albumModel");
const Member = require("../members/memberModel");


const Band = sequelize.define("Band", {
    name: {
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
    },
    comment: {
        type: DataTypes.STRING,
    }
});

Band.hasMany(Member);
Band.hasMany(Album);

module.exports = Band;



