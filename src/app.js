require("./db/connection");

const yargs = require("yargs");
const {addAlbum, listAlbum, deleteAlbum, updateAlbum} = require("./albums/albumMethods");
const {addBands, listBands, deleteBands, updateBands} = require("./bands/bandMethods");
const {addMembers, listMembers, deleteMembers, updateMembers} = require("./members/memberMethods");

const app = async (args) => {
    switch (process.argv[2]) {
        case "addBands":
            addBands({bandName: args.bandName, memberCount: args.memberCount, genre: args.genre, country: args.country});
        break;
        case "listBands":
            listBands();
        break;
        case "deleteBands":
            deleteBands();
        break;
        case "updateBands":
            updateBands();
        break;
        case "addAlbum":
            addAlbum({albumTitle: args.albumTitle, tracks: args.tracks, releaseDate: args.releaseDate});
        break;
        case "listAlbum":
            listAlbum();
        break;
        case "deleteAlbum":
            deleteAlbum();
        break;
        case "updateAlbum":
            updateAlbum();
        break;
        case "addMembers":
            addMembers({memberName: args.memberName, memberRole: args.memberRole});
        break;
        case "listMembers":
            listMembers();
        break;
        case "deleteMembers":
            deleteMembers();
        break;
        case "updateMembers":
            updateMembers();
        break;
        default: 
            console.log("incorrect command");
    }
}

app(yargs.argv);





