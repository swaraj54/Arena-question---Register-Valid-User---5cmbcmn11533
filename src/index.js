const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require("fs");
const seedWithDummyData = require('./../seeder');

dotenv.config();

//connect to DB
const url = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017/users";
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
    // seedWithDummyData();
})


app.listen(3000, () => console.log('Server running......'));

