const chat = require("../Models/chat").chat;

const CreateChat = (newChat, done) =>
{
    chat.create(newChat,(err,data) => 
    {
        if(err) done(err);
        done(null,data);
    });
};

const GetChatsByRecipient = (userId,recipientId, done) => 
{
    chat.find({recipient_id: recipientId, user_id:userId},(err,data) =>
    {
        if(err) done(err);
        done(null,data);
    });
};

exports.CreateChat = CreateChat;
exports.GetChatsByRecipient = GetChatsByRecipient;