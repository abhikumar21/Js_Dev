const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBSession = require("connect-mongodb-session")(session);
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
require('dotenv').config()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "100kb"}))
app.use(express.urlencoded({extended: true, limit: "100kb"}))
app.use(express.static("public")) //to keep assets
app.use(cookieParser());


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

