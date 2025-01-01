const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBSession = require("connect-mongodb-session")(session);

const app = express();
require('dotenv').config()


mongoose.connect(process.env.MONGO_STRING)
.then(() => {
    // console.log("MongoDB Connected");
    app.listen(process.env.PORT || 8000, 
        console.log(`server is listening on port: ${process.env.PORT}`)
    )
})
.catch((err)=> {
    console.log("MongoDB connection failed!", err);
})


// app.use(session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: false
// }))

// app.get("/", (req, res)=> {
//     req.session.isAuth = true;
//     console.log(req.session);
//     res.send("Hello this is Session")
// })

