const userModel = require("../models/userModel");

//REGISTER
const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;
    //validation
    if (!username || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "Please fill all the fields",
      });
    }
    //check user exists
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Email already exists",
      });
    }
    //new user
    const user = await userModel.create({
      username,
      email,
      password,
      phone,
      address,
    });
    res.send(201).send({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.log("Error in Register API", error);
    res.status(500).send({
      success: false,
      message: "Error in internal API",
      error,
    });
  }
};

model.exports = { registerController };
