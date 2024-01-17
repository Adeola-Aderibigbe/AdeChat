require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
const secret = process.env['MONGO_URL'];
console.log(secret);
console.log('Connecting to MongoDB...');
mongoose.connect(secret, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Connected to MongoDB');

const { Schema } = mongoose.Schema;

exports.Schema = Schema;