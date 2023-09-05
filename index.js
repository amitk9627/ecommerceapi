const mongoose = require('mongoose');
const cors = require('cors')
const app=require("./app.js")
app.use(cors({ origin: 'http://127.0.0.1:5173'}));
const connectDB=async ()=>{
   await mongoose.connect("mongodb+srv://ramitgzp56:TUQcHFl9w21VGAeU@cluster0.tlwdfrq.mongodb.net/");
}
connectDB()
.then(()=>console.log("DB connected successfully"))
.catch((err)=>console.log("DB not connected"));


app.listen(3001,()=>{
    console.log("server is live...");
});