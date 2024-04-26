import mongoose from "mongoose";

const Connection= async ()=>{
    const URL='mongodb+srv://Vibhu:Vibhu.10112%23@ecommerce.ktfmgqc.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce';
    try{
         await mongoose.connect(URL,{useunifiedTopology : true});
         console.log("database connected succesfully");
    } catch(error){
        console.log("error while connecting with db",error);
    }
}

export default Connection;