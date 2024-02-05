const user = require("../Models/user").user;

const GetUser = (async (username) =>
{
    var user = await user.find({username:username});
    return user;
});

const UpdateUser = (async (id, updatedUser) =>
{
    const user = await user.updateOne({_id:id},{$set : updatedUser});
    return user;
});

const DeactivateUser = (async(id) =>
{
   const user = await user.updateOne({_id:id},{isDeactivated:true});
   return user;
});

const CreateUser = (async (newUser) => 
{
    await user.create(newUser);
});

exports.CreateUser = CreateUser;
exports.DeactivateUser = DeactivateUser;
exports.UpdateUser = UpdateUser;
exports.GetUser = GetUser;