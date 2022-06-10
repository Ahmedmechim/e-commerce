let express=require('express')
const path=require('path')
let app=express()
let connectDB = require('./config/connectDB')
const product = require('./routers/product')
const user = require('./routers/user')
const categorie = require('./routers/categorie')
const order = require('./routers/order')
connectDB()
let PORT=process.env.PORT||666


app.use(express.json())
app.use('/product', product)
app.use('/user', user)
app.use('/categorie', categorie)
app.use('/order', order)


// app.use(express.static(path.resolve(__dirname, "./client/build")));
// app.get("*", (req, res) => {
//     console.log("reached");
//     res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
//   });

app.listen(PORT,(err)=>
err?console.log(err):console.log("server is started"))