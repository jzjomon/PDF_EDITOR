const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        mongoose.connect(process.env.DB_URL+"PDF-EDITOR").then(response => {
            console.log("DB connected");
        }).catch(err => {
            console.log("DB not connected !");
        })
    } catch (error) {
        console.log("DB is not connected !");
    }
};

module.exports = dbConnect;