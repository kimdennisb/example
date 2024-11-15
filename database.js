const mongoose = require('mongoose');

let connectionInstance;

const databaseConnection = () => {
    //singleton connection to mongoDB
    if (connectionInstance) {
        return connectionInstance;
    }
    mongoose
        .connect("mongodb://localhost:27017/nodepractise")
        .then(() => {
            console.log(`Successfully connected to MongoDB`);
        })
        .catch((error) => {
            console.log(`Connection to MongoDB error ${error}`);
            process.exit();
        });

    mongoose.connection.on(
        "error",
        console.error.bind(console, "connection error")
    );

    connectionInstance = mongoose.connection;

    return mongoose.connection;
};

module.exports = databaseConnection;