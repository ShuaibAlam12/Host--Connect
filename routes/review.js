const express=require("express");
const router=express.Router({mergeParams:true});
const asyncWrap = require("../utils/asyncWrap.js");
const {isLoggedIn,isReviewAuthor,validateReview}=require("../middleware.js")
const reviewController=require("../controllers/review.js");


//Post review Route
router.post("/",isLoggedIn, validateReview,asyncWrap(reviewController.postReview));


//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,asyncWrap(reviewController.destroyReview));

module.exports=router;