const Schema = require("../Models/schema").Schema;

const chatSchema = new Schema({
    _id: Schema.Types.ObjectId,
    message: String,
    user_id: Schema.Types.ObjectId,
    recipient_id: Schema.Types.ObjectId
});

const chat = mongoose.model("Chat", chatSchema);

exports.chat = chat;