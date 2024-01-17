const Schema = require("../Models/schema").Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    phonenumber: String,
    username: String,
    password: String,
    isDeactivate:Boolean
});

const user = mongoose.model("User", userSchema);

exports.user = user;