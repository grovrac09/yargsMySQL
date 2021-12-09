require("./db/connection");

const yargs = require("yargs");

const {addMusic, listMusic, deleteMusic, updateMusic, addBands, listBands, deleteBands, updateBands} = require("./music/musicMethods");

const app = async (args) => {
    switch (process.argv[2]) {
        case "addMusic":
            addMusic({bands: args.bands, albums: args.albums, songs: args.songs, genre: args.genre});
        break;
        case "listMusic":
            listMusic();
        break;
        case "deleteMusic":
            deleteMusic();
        break;
        case "updateMusic":
            updateMusic();
        break;
        // case "addBands":
        //     addBands({bandName: args.bandName, memberCount: args.memberCount, memberNames: args.memberNames, memberRole: args.memberRole});
        // break;
        // case "listBands":
        //     listBands();
        // break;
        // case "deleteBands":
        //     deleteBands();
        // break;
        // case "updateBands":
        //     updateBands();
        // break;
        default: 
            console.log("incorrect command");
    }
}

app(yargs.argv);





