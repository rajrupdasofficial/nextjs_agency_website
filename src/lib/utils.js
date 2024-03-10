const { default: mongoose } = require("mongoose");
const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("using an existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database", error);
  }
};
