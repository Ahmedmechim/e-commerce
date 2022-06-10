let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let productSchema = new Schema({
  userID:String,
  productName: String,
  image: String,
  prix: String,
  discreption: String,
  quantity: String,
  categorie: String
});
module.exports = mongoose.model("Product", productSchema);
