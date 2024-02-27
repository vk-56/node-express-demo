import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://vishanto95:6B9HGgcIFSkR4h56@flexicluster.ekmn2oz.mongodb.net/?retryWrites=true&w=majority');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } 
  catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}
export default connectDB;
