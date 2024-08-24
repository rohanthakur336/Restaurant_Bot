const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
//dot env config
dotenv.config();
//db connection
connectDb();
//rest object
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//route
app.use("/api/v1/test", require("./routes/testRoutes"));
//URL => http://localhost:8080/
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to Food Server</h1>");
});
//PORT
const PORT = process.env.PORT || 8080;
//Listen
app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`.bgCyan.red);
});
