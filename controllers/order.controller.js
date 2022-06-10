const Order = require("../models/order");
let jwt = require("jsonwebtoken");
const User = require("../models/user");
let config = require("config");
let secret = config.get("secret");

exports.addOrder = async (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userID = user.id;
  try {
    let theOrder = req.body;
    let anItems=[]
    for (let i = 0; i < theOrder.order.length; i++) {
      anItems.push({
        itemId:theOrder.order[i].id,
        itemName:theOrder.order[i].name,
        itemImage:theOrder.order[i].image,
        itemQuantity:theOrder.order[i].quantity,
        itemPrice:theOrder.order[i].prix,
        sellerID:theOrder.order[i].seller
      });
    }
    // console.log(userID)
    let newOrder = new Order({
      userId:userID,
      items:anItems,
    });
    newOrder.save();
    res.send(newOrder);
  } catch (error) {
    console.log(error.message);
  }
};
