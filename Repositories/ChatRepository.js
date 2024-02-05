const chat = require("../Models/chat").chat;

const CreateChat = (async(newChat) =>
{
    await chat.create(newChat).save();
});

const GetChatsByRecipient = (async(userId,recipientId) => 
{
    var chat = chat.find({recipient_id: recipientId, user_id:userId});
    return chat;
});

exports.CreateChat = CreateChat;
exports.GetChatsByRecipient = GetChatsByRecipient;