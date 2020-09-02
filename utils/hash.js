const bcrypt = require("bcrypt");
class Hash {
  static async hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(parseInt("10"));
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (error) {
      return false;
    }
  }

  static async validatePassword(password, hashedPassword) {
    try {
      const result = await bcrypt.compare(password, hashedPassword);
      return result;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = Hash;