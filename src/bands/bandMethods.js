const Bands = require("./bandModel");

exports.addBands = async (bandsObj) => {
    try {
        await Bands.sync()
        await Bands.create(bandsObj)
        console.log(`Successfully created ${bandsObj.bandName}.`)
    } catch (error) {
        console.log(error)
    }
};

exports.listBands = async () => {
    try {
        console.log(await Bands.findAll({}))
    } catch (error) {
        console.log(error)
    }
};

exports.updateBands = async (bandsObj) => {
    try {
        await Bands.update({ memberCount: "unknown" }, {
            where: {
              memberCount: null
            }
        });
             `Successfully updated ${bandsObj.memberCount}.`
        } catch (error) {
        console.log(error)
    } 
};

exports.deleteBands = async () => {
    try {
        await Bands.destroy({
            where: {
              bandName: "One Direction"
            }
          })
    } catch (error) {
        console.log(error)
    }
};