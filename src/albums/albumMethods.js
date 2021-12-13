const Album = require("./albumModel");

exports.addAlbum = async (albumObj) => {
    try {
        await Album.sync()
        await Album.create(albumObj)
        console.log(albumObj)
        return `Successfully created ${albumObj.albumTitle}.`
    } catch (error) {
        console.log(error)
    }
};

exports.listAlbum = async () => {
    try {
        console.log(await Album.findAll({}))
    } catch (error) {
        console.log(error)
    }
};

exports.updateAlbum = async (albumObj) => {
    try {
        await Album.update({releaseDate: "unknown"}, {
            where: {
              genre: null
            }
        });
        return `Successfully updated ${albumObj.releaseDate}.`
        } catch (error) {
        console.log(error)
    } 
};

exports.deleteAlbum = async () => {
    try {
        await Album.destroy({
            where: {
              releaseDate: "1995"
            }
          })
    } catch (error) {
        console.log(error)
    }
};


