const Member = require("./memberModel");
const Band = require("../bands/bandModel");

exports.addMembers = async (memberObj) => {
    try {
        const member = await Member.build(memberObj)
        member.save()
        console.log(`Successfully created ${member.name}.`)
    } catch (error) {
        console.log(error)
    }
};

exports.listMembers = async () => {
    try {
        for (let member of await Member.findAll({})) {
            console.log(member.name)
        }
    } catch (error) {
        console.log(error)
    }
};

exports.updateMembers = async (memberObj) => {
    try {
        await Member.update({ role: "unknown" }, {
            where: {
                role: null
            }
        });
        `Successfully updated ${memberObj.role} on ${memberObj.name}.`
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMembers = async () => {
    try {
        await Member.destroy({
            where: {
                bandRole: "backup vocalist"
            }
        })
    } catch (error) {
        console.log(error)
    }
};