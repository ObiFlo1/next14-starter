const { default: mongoose } = require("mongoose");

//if the connection doesn't connect the first time, we have to make some cases for it to c
//make sure it connects. going to add the '//' above those lines
const connection = {};
// why we have to inistualze this empty obj ? - when it resets, and we don't have a connnection , we're going to create a new one . to ensure that if the first one fails, we connect anyway

export const connectToDb = async () => {
  try {
    //
    if (connection.isConnected) {
      console.log("using existing connection. Connected first try boy");
      return;
    }
    const connectDB = await mongoose.connect(process.env.MONGO);
    console.log("Connected to database. good job");
    //
    connection.isConnected = connectDB.connection[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// the reason we're using the isConnected is because when it connects, it refreshes everything
// which may cause it to not complete a connection, or reset action to try to connection
// so to PREVENT this , we added the isConnected ?
