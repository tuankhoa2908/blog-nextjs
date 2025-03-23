const mongoose = require('mongoose');

const options = {
    // serverSelectionTimeoutMS: 5000, // Timeout for selecting a primary server
    // socketTimeoutMS: 45000,        // Close socket after 45s of inactivity
    // maxPoolSize: 10,               // Max number of sockets in the connection pool
    // minPoolSize: 5,                // Min number of sockets in the connection pool
    // user: 'admin',  // Username for authentication.
    // pass: 'securepassword', // Password for authentication.
    // authSource: 'admin', // Database to authenticate against (e.g., "admin").
    // tls: true,  // Enables TLS/SSL for the connection.
    // tlsAllowInvalidCertificates: false, //Allows invalid TLS/SSL certificates.
};

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, options);
        console.log(`Connected to MongoDB successfully...`);
    } catch (error) {
        console.log("Connected to MongoDB Failed: ", error);
        process.exit(1);
    }
};

module.exports = dbConnect;

