const mongoose=require("mongoose");
const Listing=require("../Models/listing.js");
const dataInit=require("./data.js");



main().then((res)=>{
    console.log("DB is connected");
    
}).catch((err)=>{
    console.log(err);
    
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/hostconnect");
}

const initDB=async ()=>{
   await Listing.deleteMany({});
   dataInit.data=dataInit.data.map((obj)=>({
    ...obj,
    owner:"67aed25ad1bdc03d95556441",
   }))
   await Listing.insertMany(dataInit.data);
   console.log("Data was initialized");
}

initDB();