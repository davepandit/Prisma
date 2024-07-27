//get the token from the method made
const { getJwtToken } = require("../helper/getJwtTokens");

const cookieToken = (user, res) => {
  const token = getJwtToken(user.id);
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    //means the cookie expires in 3 days the time is in msec
    //and the cookies can be modified by the server only
  };
  user.password = undefined;
  //yeh thoda sa bakchodi hai
  res.status(200).cookie("token", token, options).json({
    succes: true,
    token,
    user,
  });
};

module.exports = cookieToken;
