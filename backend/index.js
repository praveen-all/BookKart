const express = require("express");
const app = express();
const authRouter = require("./Routers/authRouter");
const bookRouter = require("./Routers/BookRouter");
const orderRouter=require('./Routers/OrderRouter');
const paymentRouter=require('./Routers/paymentRouter')
// body parser
app.use(express.json());

// all routers
app.use("/user", authRouter);
app.use("/books", bookRouter);
app.use('/orders',orderRouter)
app.use('/payments',paymentRouter);

app.listen(3000, () => {
  console.log("server started at 3000");
});
