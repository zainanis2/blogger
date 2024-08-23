const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




const User = require("./models/user");

const app = express();

app.use(cors({credentials:true,origin:"http://localhost:5173"}));
app.use(express.json());

const mongo_url ="mongodb+srv://zain:CóANBLVXBbD8v5Q@blogger.uvofd.mongodb.net/?retryWrites=true&w=majority&appName=blogger";

try {
  mongoose.connect(mongo_url);
} catch (error) {}

secret="hfbuavghuvuvruavh328r782gvfq8qgrb"

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function (err, salt) {

    bcrypt.hash(password, salt, async function (err, hash) {

      try {

        const userDoc = await User.create({ username,password:hash });

      } 
      catch (error) 
      {
        res.status(400).json(error);
      }
    });
  });
});

app.post("/login",async (req,res)=>
{
    const {username,password}=req.body;
    
    const userDoc= await User.findOne({username});

    const passOK = bcrypt.compareSync(password,userDoc.password);
    
    if(passOK)
    {
        jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
            res.cookie("token",token).json("ok");
        })
    }
    else
    {
        res.status(400).json("wrong credentials");
    }

});

app.listen(4000);
