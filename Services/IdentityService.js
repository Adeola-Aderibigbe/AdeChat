const Cryptr = require('cryptr');
const cryptr = process.env['CRYPTR'];

const Encrypt = (value) =>
{
    return cryptr.encrypt(value);
};

const Decrypt = (value) =>
{
  return cryptr.decrypt(value);
};

exports.Encrypt = Encrypt;
exports.Decrypt = Decrypt;