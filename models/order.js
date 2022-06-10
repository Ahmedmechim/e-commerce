let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let orderSchema = new Schema({
  userId: String,
  items: [
     {itemId: String ,
     itemName: String ,
     itemImage: String ,
     itemQuantity: String ,
     itemPrice: String ,
     sellerID: String ,
    }
  ],
});
module.exports = mongoose.model("Order", orderSchema);
