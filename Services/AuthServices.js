const GetUser = require("../Repositories/UserRepository").GetUser;
const CreateUser = require("../Repositories/UserRepository").CreateUser;
const PasswordVerification = require("../Services/PasswordService").VerifyPassword;

const AuthenticateUser = (loginDto, async(isAuthenticated) =>
{
    var username = loginDto.username;
    var currentUser = await GetUser(username);
    if(!currentUser)
        return "User doesn't exist";
    var isAuthenticated = await PasswordVerification(loginDto.plainPassword,currentUser.password);
    return isAuthenticated;
});

const SignUp = (signUpDto, async(done) =>
{
    var username = signUpDto.username;
    var currentUser = await GetUser(username);
    if(currentUser)
     return "This username has been taken";
 
    CreateUser(signUpDto,(err,data)=>{
        if(err)
            done(err);
        done(null,data);
    });
});