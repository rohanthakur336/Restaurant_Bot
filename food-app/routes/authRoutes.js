const express = require("express");
const router = express.Router();
const { registerController } = require("../controllers/authController");
//routes
//REGISTER || POST
router.post("/register", registerController);

module.exports = router;
