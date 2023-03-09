import mongoose from 'mongoose';

import config from '../config/config';

const dbConnection = async () => {
  try {
    console.log('Connecting to mongoDB...');
    await mongoose.connect(config.MONGO_URI);
    console.log(`MongoDB connection successful !`);
  } catch (error) {
    console.error(`MongoDB connection error ${error}`);
  }
};

export default dbConnection;
