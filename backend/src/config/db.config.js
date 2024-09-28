const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant");

exports.ConnectDB = async () => {
  try {
    const res = await mongoose.connect(PUBLIC_DATA.mongo_uri);
    console.log(res.connection.host);
  } catch (error) {
    mongoose.disconnect();
    process.exit(1);
  }
};
