const User = require("../Models/user.js");

module.exports.renderSignupform = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.userSignup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        let alreadyUser=await User.find({email:email});
        console.log(alreadyUser);
        
        if(alreadyUser.length!==0){
            req.flash("error","Email Already Exist Please Login");
            return res.redirect("/login");
        }
        let newUser = new User({
            username, email
        })
        let registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to HostConnect!");
            res.redirect("/listings");
        })

    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}


module.exports.renderLoginform = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.userLogin = (req, res) => {
    req.flash("success", "You are logged in !");
    if (!res.locals.redirectUrl) {
        res.redirect("/listings");
    }
    res.redirect(res.locals.redirectUrl);
}

module.exports.userLogout = async(req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You Logged Out!");
        res.redirect("/listings");
    })

}