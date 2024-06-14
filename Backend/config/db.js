const mongoose = require('mongoose');

const connectDB = async () => {

    try {
       const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected to:', conn.connection.name);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;