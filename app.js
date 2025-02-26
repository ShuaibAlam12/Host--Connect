if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}
// console.log(process.env.CLOUD_KEY);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressError=require("./utils/expressError.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./Models/user.js");
const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,'public')));

const sessionOptions={
    secret:"thisismysecretkey",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
}


const MONGO_URL = "mongodb://127.0.0.1:27017/hostconnect";
main().then((res) => {
    console.log("Connected to DB");

}).catch((err) => {
    console.log(err);

})
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.use(session(sessionOptions));
app.use(flash());

//Passport Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})
// app.get("/demouser",async (req,res)=>{
//     let fakeUser=new User({
//         email:"shuaib.alam@gmail.com",
//         username:"shuaib"
//     })
//     let registerUser= await User.register(fakeUser,"alam_1234");
//     res.send(registerUser);
// })

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);
//Error Handler
app.all("*",(req,res,next)=>{
    next(new expressError(402,"Page not found!"));
})

app.use((err, req, res, next) => {
    let {status=500,message="its wrong"}=err;
    res.status(status).render("error.ejs",{message});
});

let port = 3000;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);

})