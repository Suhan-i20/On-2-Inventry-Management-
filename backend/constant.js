const { config } = require("dotenv");

config({ path: "./.env" });

class PUBLIC_DATA {
  static port = process.env.PORT || 4000;
  static mongo_uri = process.env.DB_URI;
  static jwt_auth = process.env.JWT_AUTH || "@#$%^&*(@#$%^&*($%^))#$%^&";
}

module.exports = {
  PUBLIC_DATA,
};
