import register from "../models/schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
class controller {
  static create = async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(15);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const user = new register({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        accessToken: " ",
      });
      await user.save();
      res.send("user created");
    } catch (err) {
      res.status(400).send(err);
    }
  };
  static login = async (req, res) => {
    try {
      const loged = {
        email: req.body.email,
        password: req.body.password,
      };
      const userValidation = await register.findOne({ email: req.body.email });
      if (!userValidation) return res.status(400).send("email or password invalid");
      const passValidation = await bcrypt.compare(
        req.body.password,
        userValidation.password
      );
      if (!passValidation) return res.status(400).send("email or password invalid");
      const accessToken = await jwt.sign(
        { _id: userValidation._id },
        process.env.accessToken,
        {
          expiresIn: "1h",
        }
      );

      const result = await register.updateOne(
        { _id: userValidation._id },
        {
          $set: {
            accessToken: accessToken,
          },
        }
      );
      res.send("loged in");
    } catch (error) {
      res.send(error);
    }
  };
  static logout=async(req,res)=>{
    try{
      const token = await register.findOne({ email: req.header('email') });
      const result = await register.updateOne(
        { _id:token._id },
        {
          $set: {
            accessToken:" ",
          },
        })
        if(result)return res.send('log out')
      
    }
    catch(error){
      res.send(error)
    }
  }
}
export default controller;
