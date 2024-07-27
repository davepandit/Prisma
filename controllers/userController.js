//bring the prisma client means the contractor who us gonna interact with the database on our behalf and also bring the cookie Token
const { sign } = require("jsonwebtoken");
const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

//user sign up
// basically the user sends the email, number and what not from the frontend and that needs to be stored in the database and some other stufss

const signUp = async (req, res) => {
  try {
    //here we need to retrieve the info from the frontend and then process it
    const { name, email, password } = req.body;
    //the name attribute in the input field should be spelled like this only otherwise things might break
    if (!email || !name || password) {
      return res.status(500).json({
        success: false,
        message: "All details need to be provided",
      });
    } else {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
      //send a token to the frontend
      cookieToken(user, res);
    }
  } catch (error) {
    console.log("Something went wrong:", error);
    throw new Error(error);
  }
};

module.exports = {
  signUp,
};
