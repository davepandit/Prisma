const cookieParser = require("cookie-parser");
const express = require("express");
//lets use the user router
const userRouter = require("./routes/userRoutes");

require("dotenv").config();

//make a server using express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Hi there its fine and good");
});

app.listen(8000, () => {
  console.log("Server is up and running at the port 8000");
});
