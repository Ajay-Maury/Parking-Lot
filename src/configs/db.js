const mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect(
      "mongodb+srv://pata_nahi:bhool_gaya@cluster0.lsvn5.mongodb.net/parking-lot?retryWrites=true&w=majority"
    );
      
      
}
module.exports=connect;