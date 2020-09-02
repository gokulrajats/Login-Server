const jwt = require("jsonwebtoken");
const SECRET = "GOKULRAJATS"
class Token {
  static genToken(id) {
    const token = jwt.sign(id, SECRET);
    return token;
  }
}

module.exports = Token;