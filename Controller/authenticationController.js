const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

const signUp = require("../Services/AuthServices").SignUp;
const loginUser = require("../Services/AuthServices").LoginUser;


router.post('authentication/sign-up',async (req,res) =>
{
    var signUpDto = req.body;
    var result = await signUp(signUpDto);
    if(result)
        res.status(400).send(result);
    res.status(200).send("Hello ${signUpDto.username}, Welcome to AdeChat");
});

router.post('authentication/login',async (req,res)=>
{
    var loginDto = req.body;
    var result = await loginUser(loginDto);
    if(result == "Invalid username/password")
        res.status(400).send(result);

    res.status(200)
    .cookie("adechat",result,{maxAge:5000,signed:true,httpOnly:true})
    .send();
});