import mongoose from 'mongoose';

const connectDB = async () => {
  const conn = await mongoose.connect(<string>process.env.DB_URI);
  if (conn) {
    console.log(`Database connected`);
  } else {
    console.log(`Database not connected`);
  }
};

export default connectDB;
