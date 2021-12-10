const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");
const {Bands, bandId} = require("../bands/bandModel");

const Members = sequelize.define("Members", {
    bandId: {
        type: DataTypes.INTEGER,
        references: {
            model: Bands,
            key: bandId
        }
    },
    memberName: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    memberRole: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Members;