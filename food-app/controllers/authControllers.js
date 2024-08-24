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

//login controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please fill all the fields /all details",
      });
    }
    //check user exists
    const user = await userModel.findOne({ email: email, password: password });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found or password missmatch",
      });
    }
    res.status(200).send({
      success: true,
      message: "User Logged in Successfully",
      user,
    });
  } catch (error) {
    console.log("Error in Login API", error);
    res.status(500).send({
      success: false,
      message: "Error in internal LOGIN API",
      error,
    });
  }
};

module.exports = { registerController, loginController };
