let express = require('express');
let router = express.Router();
let { getProduct, addProduct, deleteProduct, editProduct } = require('../controllers/product.controller');
const rolevalidator = require('../middleware/role');
const { addProductRoles } = require('../middleware/validator');
const  auth  = require('../middleware/auth')




router.get('/getProducts', getProduct);
router.post('/addProduct',auth,addProductRoles(),rolevalidator(["admin","vendeur"]),  addProduct);
router.delete('/deleteProduct/:id',auth,deleteProduct);
router.put('/editProduct/:id',auth,editProduct);

module.exports = router;