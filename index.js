const mongoose = require('mongoose');
const app=require("./app.js")
const connectDB=async ()=>{
   await mongoose.connect("mongodb://localhost:27017/ecommerceapi");
}
connectDB()
.then(()=>console.log("DB connected successfully"))
.catch((err)=>console.log("DB not connected"));


app.listen(3001,()=>{
    console.log("server is live...");
});