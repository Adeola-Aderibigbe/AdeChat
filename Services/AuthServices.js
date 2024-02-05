const GetUser = require("../Repositories/UserRepository").GetUser;
const CreateUser = require("../Repositories/UserRepository").CreateUser;
const PasswordVerification = require("../Services/PasswordService").VerifyPassword;

const LoginUser = (async(loginDto) =>
{
    var username = loginDto.username;

    var currentUser = await GetUser(username);
    if(!currentUser)
        return "Invalid username/password";

    var isAuthenticated = await PasswordVerification(loginDto.plainPassword,currentUser.password);
    if(isAuthenticated)
        return username;

    return "Invalid username/password"
});

const SignUp = (async(signUpDto) =>
{
    var username = signUpDto.username;

    var currentUser = await GetUser(username);
    if(currentUser)
     return "This username has been taken";

    return await CreateUser(signUpDto,done);
});

exports.LoginUser = LoginUser;
exports.SignUp = SignUp;
