if(process.env.NODE_ENV!="production"){
    require('dotenv').config({ path: '../.env' });
}

const mongoose=require("mongoose");
const Listing=require("../Models/listing.js");
const dataInit=require("./data.js");
const dbUrl=process.env.ATLASDB_URL;


main().then((res)=>{
    console.log("DB is connected");
    
}).catch((err)=>{
    console.log(err);
    
})


async function main(){
    await mongoose.connect(dbUrl);
}

const initDB=async ()=>{
   await Listing.deleteMany({});
   dataInit.data=dataInit.data.map((obj)=>({
    ...obj,
    owner:"67bee93b9c8cdf4470915c09",
   }))
   await Listing.insertMany(dataInit.data);
   console.log("Data was initialized");
}

initDB();