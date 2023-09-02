const express=require("express");
const app= express();
const userRouter=require("./routes/users.js")
const productsRouter=require("./routes/products.js")

app.use(express.json());

app.use("/ecom/users",userRouter);
app.use("/ecom/products",productsRouter);

module.exports=app;