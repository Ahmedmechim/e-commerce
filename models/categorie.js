let mongoose=require('mongoose')
let Schema=mongoose.Schema
let categorieSchema=new Schema({
    categorieName: String,
})
module.exports=mongoose.model("Categories",categorieSchema)