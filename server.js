const mongoose = require("mongoose")

const app = require("./app")

const port = 3000
console.log('hello')
mongoose
    .connect("mongodb://127.0.0.1:27017/grocery-shopper",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server connected on ${port}`)
            console.log("MongoDB Connected")
        })
    })
    .catch((e)=>{
        console.log(e)
    })