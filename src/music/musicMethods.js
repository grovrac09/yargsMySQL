const Music = require("./musicModel");

exports.addMusic = async (musicObj) => {
    try {
        await Music.sync()
        await Music.create(musicObj)
        return `Successfully created ${musicObj.bands}.`
    } catch (error) {
        console.log(error)
    }
};

exports.listMusic = async () => {
    try {
        console.log(await Music.findAll({}))
    } catch (error) {
        console.log(error)
    }
};

exports.updateMusic = async (musicObj) => {
    try {
        await Music.update({ genre: "nu metal" }, {
            where: {
              genre: null
            }
        });
             `Successfully updated ${musicObj.genre}.`
        } catch (error) {
        console.log(error)
    } 
};

exports.deleteMusic = async () => {
    try {
        await Music.destroy({
            where: {
              genre: "pop"
            }
          })
    } catch (error) {
        console.log(error)
    }
};


//


// const Bands = require("./musicModel");

// exports.addBands = async (bandsObj) => {
//     try {
//         await Bands.sync()
//         await Bands.create(bandsObj)
//         return `Successfully created ${bandsObj.bandName}.`
//     } catch (error) {
//         console.log(error)
//     }
// };

// exports.listBands = async () => {
//     try {
//         console.log(await Bands.findAll({}))
//     } catch (error) {
//         console.log(error)
//     }
// };

// exports.updateBands = async (bandsObj) => {
//     try {
//         await Bands.update({ memberCount: "unknown" }, {
//             where: {
//               memberCount: null
//             }
//         });
//              `Successfully updated ${bandsObj.memberCount}.`
//         } catch (error) {
//         console.log(error)
//     } 
// };

// exports.deleteBands = async () => {
//     try {
//         await Bands.destroy({
//             where: {
//               bandName: "One Direction"
//             }
//           })
//     } catch (error) {
//         console.log(error)
//     }
// };