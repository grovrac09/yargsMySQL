const Band = require("./bandModel");

exports.addBands = async (bandsObj) => {
    try {
        const band = await Band.create(bandsObj)
        console.log(`Successfully created ${band.name} with ID ${band.id}.`)
    } catch (error) {
        console.log(error)
    }
};

exports.listBands = async () => {
    try {
        for (let band of await Band.findAll({})) {
            console.log(band.name)
        }
    } catch (error) {
        console.log(error)
    }
};

exports.updateBands = async (bandsObj) => {
    try {
        await Band.update({ comment: "test" },
            {
                where: {
                    comment: null
                }
            });
        console.log(`Successfully updated ${bandsObj.comment}.`)
    } catch (error) {
        console.log(error)
    }
};

exports.deleteBands = async () => {
    try {
        await Band.destroy({
            where: {
                name: "Rammstein"
            }
        })
        console.log(`Successfully deleted item(s).`)
    } catch (error) {
        console.log(error)
    }
};

