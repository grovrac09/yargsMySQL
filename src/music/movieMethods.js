const Music = require("./musicModel");

exports.addMusic = async (musicObj) => {
    try {
        await Music.sync()
        await Music.create(musicObj)
        return `Successfully created ${musicObj.title}.`
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