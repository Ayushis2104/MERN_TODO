const router =require("express").Router();
const User = require("../models/user");
const bcrypt = require('bcryptjs');

//signup

router.post("/register", async (req, res) =>{
    try {
        const {email, username, password} =req.body;
        const hashpassword = bcrypt.hashSync(password);
        // const user = new User({ email, username, password});
        // await user.save().then(() => 
        //     res.status(200).json({ user: user})
        // )
        const user = new User({ email, username, password: hashpassword });
    await user
      .save()
      .then(() => res.status(200).json({ message: "Sign Up Successfull" }));
 
        if(await User.findOne({email}))
        { 
            res.json({ message: "User Already Exist"});
            return;
        } 
         user = await User.create({email, username, password: hashpassword});
        res.json(user);

  
    } catch (error) {
        res.status(200).json({ message: "something wrong"});
    }
})

//signin

router.post("/signin", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .json({ message: "User not found. Please Sign Up First" });
      }
  
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!isPasswordCorrect) {
        return res.status(200).json({ message: "Password is not correct" });
      }
  
      const { password, ...others } = user._doc;
      res.status(200).json({ user: others });
    } catch (error) {
      console.error(error);
      res.status(200).json({ message: "Internal Server Error" });
    }
})
module.exports = router; 