import mongoose from "mongoose";
try {
    console.log(`${process.env.MONGODB_URI}`,"dg")
    mongoose.connect(`${process.env.MONGODB_URI}`).then((success)=>{
        console.log("database has connected and running")
    }).catch((err)=>{
        console.log(err,"Failed to connect to database")
    })
} catch (error) {
    console.log(error,"Error while connecting in database" )
}