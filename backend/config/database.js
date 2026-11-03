const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("Missing MongoDB connection string. Set MONGODB_URI.");
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
