const mongoose = require("mongoose");
const conn =async () => {
    try {
        await mongoose
        .connect(process.env.dbCompass)
        .then(() =>{
            console.log("connected");
        });
    }
     catch (error) {
        console.log(error.message);
        process.exit(1);
        }
};
module.exports = conn;