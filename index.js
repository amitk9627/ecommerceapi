const mongoose = require('mongoose');
const cors = require('cors')
const app=require("./app.js")
app.use(cors);
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
const connectDB=async ()=>{
   await mongoose.connect("mongodb+srv://ramitgzp56:TUQcHFl9w21VGAeU@cluster0.tlwdfrq.mongodb.net/");
}
connectDB()
.then(()=>console.log("DB connected successfully"))
.catch((err)=>console.log("DB not connected"));


app.listen(3001,()=>{
    console.log("server is live...");
});