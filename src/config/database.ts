import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    console.log('Connecting to mongoDB...');
    // mongodb+srv://dating:itsamatch@cluster0.0yoybxz.mongodb.net/?retryWrites=true&w=majority
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://rakeshrengaraj:itsamatch@cluster0.phjcbcc.mongodb.net/?retryWrites=true&w=majority');
    console.log(`MongoDB connection successful !`);
  } catch (error) {
    console.error(`MongoDB connection error ${error}`);
  }
};

export default dbConnection;
