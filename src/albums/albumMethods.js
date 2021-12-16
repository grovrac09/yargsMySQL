const Album = require("./albumModel");
const Band = require("../bands/bandModel");

exports.addAlbum = async (albumObj) => {
    try {
        const album = await Album.build(albumObj)
        album.save()
        console.log(`Successfully created ${album.title}.`)
    } catch (error) {
        console.log(error)
    }
};

exports.listAlbum = async () => {
    try {
        for (let album of await Album.findAll({})) {
            console.log(album.title)
        }
    } catch (error) {
        console.log(error)
    }
};

exports.updateAlbum = async (albumObj) => {
    try {
        await Album.update({ releaseDate: "unknown" }, {
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


