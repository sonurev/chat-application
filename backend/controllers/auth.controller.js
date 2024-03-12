import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      res.status(400).json({
        error: "passwords do not match",
      });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        message: "user already exist",
      });
    }

    //hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //profile pic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      //generate JWT token here
       generateTokenAndSetCookie(newUser._id,res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(500).json({
        error: "invalid user data",
      });
    }
  } catch (error) {
    console.log("error in signup controller server", error.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};


export const login = async (req, res) => {
  try {
    const {username,password} = req.body;
    const user = await User.findOne({username});
    const isPasswrodCorrect = await bcrypt.compare(password,user?.password||"");

    if(!user||!isPasswrodCorrect){
      return res.status(400).json({
        error:"invalid username or password"
      })
    }

    generateTokenAndSetCookie(user._id,res);

    res.json({
      _id:user._id,
      username:user.username,
      fullName:user.fullName,
      profilePic:user.profilePic
    })

  } catch (error) {
    console.log("error in login controller server", error.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({
      message:"logged out successfully"
    });
  } catch (error) {
    console.log("error in logoutcontroller server", error.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
