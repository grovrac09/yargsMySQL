require("./db/connection");

const yargs = require("yargs");
const { addAlbum, listAlbum, deleteAlbum, updateAlbum } = require("./albums/albumMethods");
const { addBands, listBands, deleteBands, updateBands } = require("./bands/bandMethods");
const { addMembers, listMembers, deleteMembers, updateMembers } = require("./members/memberMethods");
const Band = require("./bands/bandModel");
const Album = require("./albums/albumModel");
const Member = require("./members/memberModel");

const app = async (args) => {
    await Band.sync({ alter: true })
    await Member.sync({ alter: true })
    await Album.sync({ alter: true })
    if (args.add && args.band) {
        await addBands({ name: args.name, memberCount: args.memberCount, genre: args.genre, country: args.country, comment: args.comment });
    } else if (args.list && args.band) {
        await listBands()
    } else if (args.delete && args.band) {
        await deleteBands()
    } else if (args.update && args.band) {
        await updateBands()
    } else if (args.add && args.album) {
        await addAlbum({ BandId: args.BandId, title: args.title, tracks: args.tracks, releaseDate: args.releaseDate });
    } else if (args.list && args.album) {
        await listAlbum()
    } else if (args.delete && args.album) {
        await deleteAlbum()
    } else if (args.update && args.album) {
        await updateAlbum()
    } else if (args.add && args.member) {
        await addMembers({ BandId: args.BandId, name: args.name, role: args.role });
    } else if (args.list && args.member) {
        await listMembers()
    } else if (args.delete && args.member) {
        await deleteMembers()
    } else if (args.update && args.member) {
        await updateMembers()
    } else {
        console.log("Incorrect command, please try again.");
    }
}

app(yargs.argv);





