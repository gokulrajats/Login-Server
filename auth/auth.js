const jwt = require("jsonwebtoken");
const SECRET = "GOKULRAJATS";

exports.Auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, SECRET); 
    next();
  } catch (err) {
    return unAuthorizedResponse(res);
  }
};