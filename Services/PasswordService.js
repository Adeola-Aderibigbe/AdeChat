const bcrypt = require('bcrypt');
const saltRounds = 10;

const HashPassword =  (saltRounds,plainPassword,async (hashPassword) =>
{
    const hashPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashPassword;
});

const VerifyPassword = (plainPassword, hashPassword, async (isVerified) => 
{
    const isVerified = await bcrypt.compare(plainPassword,hashPassword);
    return isVerified;
});

exports.HashPassword = HashPassword;
exports.VerifyPassword = VerifyPassword;