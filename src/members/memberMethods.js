const Members = require("./memberModel");

exports.addMembers = async (memberObj) => {
    try {
        await Members.sync()
        await Members.create(memberObj)
        return `Successfully created ${memberObj.memberName}.`
    } catch (error) {
        console.log(error)
    }
};

exports.listMembers = async () => {
    try {
        console.log(await Members.findAll({}))
    } catch (error) {
        console.log(error)
    }
};

exports.updateMembers = async (memberObj) => {
    try {
        await Members.update({bandRole: "unknown"}, {
            where: {
                bandRole: null
            }
        });
             `Successfully updated ${memberObj.bandRole}.`
        } catch (error) {
        console.log(error)
    } 
};

exports.deleteMembers = async () => {
    try {
        await Members.destroy({
            where: {
              bandRole: "backup vocalist"
            }
          })
    } catch (error) {
        console.log(error)
    }
};