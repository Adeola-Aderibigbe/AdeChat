const user = require("../Models/user").user;

const GetUser = (username,async (user) =>
{
    var user = await user.find({username:username});
    return  user;
});

const UpdateUser = (id,updatedUser,async (done) =>
{
    user.updateOne({_id:id},{$set : updatedUser},(err,data) => {
        if(err) done(err);
        done(null,data);
    });
});

const DeactivateUser = (id, done) =>
{
    user.updateOne({_id:id},{isDeactivated:true},(err,data)=>
    {
        if(err) done(err);
        done(null,data);
    });
};

const CreateUser = (newUser,done) => 
{
    user.create(newUser,(err,data) =>
    {
        if(err) done(err);
        done(null,data);
    });
};

exports.CreateUser = CreateUser;
exports.DeactivateUser = DeactivateUser;
exports.UpdateUser = UpdateUser;
exports.GetUser = GetUser;