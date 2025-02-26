const Listing=require("./Models/listing.js");
const {ListingSchema,reviewSchema}=require("./schema.js");
const expressError=require("./utils/expressError.js");
const Review=require("./Models/review.js")
module.exports.isLoggedIn=(req,res,next)=>{
    // console.log(req.path,"..",req.originalUrl);
    
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must logged in to create new listing");
        return res.redirect("/login");
    }
    next();
}

module.exports.savedRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
  const { id } = req.params;
  let listings=await Listing.findById(id);
  if(! listings.owner.equals(res.locals.currUser._id)){
     req.flash("error","You're not Owner of this listing");
     return res.redirect(`/listings/${id}`);
  }
  next();
}

module.exports.validateListing=(req,res,next)=>{
    let {error}=ListingSchema.validate(req.body);
  

    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }
    else{
        next();
    }
}

module.exports.isReviewAuthor=async(req,res,next)=>{
    const { reviewId,id } = req.params;
    let review=await Review.findById(reviewId);
    if(! review.author.equals(res.locals.currUser._id)){
       req.flash("error","You're not Owner of this listing");
       return res.redirect(`/listings/${id}`);
    }
    next();
  }

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errMsg);
    }
    else{
        next();
    }
}