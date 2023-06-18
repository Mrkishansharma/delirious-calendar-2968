
require("dotenv").config()

const passport = require("passport");

const { UserInfo } = require("../Models/user.model");

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({

    clientID: process.env.googleclientid,
    clientSecret: process.env.googleclientsecret,
    callbackURL: "http://localhost:7500/user/auth/google/callback"

  },

  async function(accessToken, refreshToken, profile, cb) {

    try {

      let Email = profile._json.email

      const user = await UserInfo.findOne({email:Email})

      //console.log(user)

      if(!user){

        console.log("adding new user")

        let newuser = new UserInfo({
          email:Email,
          fname:profile._json.name,
          lname:"-",
          password:"12345678",
          userType:"customer"
        })

        await newuser.save()

        return cb(null, newuser)

      }
      
      else{

        console.log("user is present db")

        return cb(null, user)

      }
    } 
    catch (error) {

      console.log(error)

    }
    
    //console.log(profile)
    
  }

));




module.exports = {passport}
