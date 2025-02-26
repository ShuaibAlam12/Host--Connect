const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap.js");
const Listing = require("../Models/listing.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({storage});

const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingControllers = require("../controllers/listing.js");

// we can use router.route for good structuring means which have same path we can combine them
router
    .route("/")
    .get( asyncWrap(listingControllers.index))
    .post(isLoggedIn,upload.single('Listing[image]'),  validateListing,
        
        asyncWrap(listingControllers.createListing)
    );
//New Listing Route
router.get("/new", isLoggedIn, asyncWrap(listingControllers.renderNewform));

//filter listing
router.route("/filter").get( asyncWrap(listingControllers.showFilterListings));

//
router.route("/search").get(asyncWrap(listingControllers.searchListing));


router.route("/:id")
.put( isLoggedIn, isOwner,upload.single('Listing[image]'), validateListing, asyncWrap(listingControllers.updateListing))
.delete( isLoggedIn, isOwner, asyncWrap(listingControllers.destroyListing))
.get( asyncWrap(listingControllers.showListings));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, asyncWrap(listingControllers.renderEditform));


module.exports = router;






//home route
// router.get("/",(req,res)=>{
//     res.send("Hello I am Root");
// })

// //Listing/Index Route 
// router.get("/", asyncWrap(listingControllers.index));



// //Create Route
//  router.post("/",isLoggedIn,validateListing, asyncWrap(listingControllers.createListing));


// //update route
// router.put("/:id", isLoggedIn, isOwner, validateListing, asyncWrap(listingControllers.updateListing));

// //delete
// router.delete("/:id", isLoggedIn, isOwner, asyncWrap(listingControllers.destroyListing));

// //Show Route for a particular id means when clicking on a link in listing
// router.get("/:id", asyncWrap(listingControllers.showListings));

