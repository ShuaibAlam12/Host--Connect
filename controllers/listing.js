const Listing = require("../Models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewform = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.createListing = async (req, res, next) => {
  let response=await  geocodingClient.forwardGeocode({
        query: req.body.Listing.location,
        limit: 2
      })
        .send()

    let url = req.file.path;
    let fileName = req.file.filename;
    const listing = req.body.Listing;
    const newListing = new Listing(listing);
    newListing.owner = req.user._id;
    newListing.image = { url, fileName };
    
    newListing.geometry=response.body.features[0].geometry;
    req.flash("success", "New Listing Created!");
    let newlisting=await newListing.save();
    // console.log(newlisting);
    
    res.redirect("listings");

}
module.exports.renderEditform = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    let newImageUrl=originalImageUrl.replace("/upload/","/upload/c_fill,h_200,w_200/");
    // console.log(newImageUrl);
    
    res.render("listings/edit.ejs", { listing,newImageUrl });
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.Listing });
    if (typeof(req.file) !== "undefined") {
        let url = req.file.path;
        let fileName = req.file.filename;
        listing.image = { url, fileName };
        // console.log(url,fileName);
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);

}


module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}

module.exports.showListings = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    // console.log(listing);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.showFilterListings = async (req, res) => {
    const { category } = req.query;
        const allListings = await Listing.find({ category: category });

        if (allListings.length === 0) {
            req.flash("error", "No listings found for this category!");
            return res.redirect("/listings");
        }
        res.render("listings/index.ejs", { allListings })
};

module.exports.searchListing=async(req,res)=>{
    const search=req.query.search;
    const allListings=await Listing.find({location:search});
    // console.log(allListings);
    
    if(allListings.length==0){
        req.flash("error","Place is not found for this location");
        return res.redirect("/listings");
    }
    res.render("listings/index.ejs",{allListings})
}