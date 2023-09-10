const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

const userRouter = require("./routes/users.js")
const productsRouter = require("./routes/products.js")
const cartRouter = require('./routes/cart.js');
const authMiddleware = require("./middleware/auth.js");

app.use(express.json());

app.use("/ecom/users", userRouter);
app.use("/ecom/products", productsRouter);
app.use("/ecom/cart", authMiddleware, cartRouter);

module.exports = app;