const bcrypt = require('bcrypt');
const saltRounds = 10;

const HashPassword =  (async(plainPassword) =>
{
    const hashPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashPassword;
});

const VerifyPassword = (async(plainPassword, hashPassword) => 
{
    const isVerified = await bcrypt.compare(plainPassword,hashPassword);
    return isVerified;
});

exports.HashPassword = HashPassword;
exports.VerifyPassword = VerifyPassword;