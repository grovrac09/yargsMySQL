const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");

const Music = sequelize.define("Music", {
    musicId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bands: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    albums: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    songs: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Music;

// const Bands = sequelize.define("Bands", {
//     bandsId: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     bandName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     }, 
//     memberCount: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     memberNames: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     memberRole: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     }
    
// });

// module.exports = Bands;