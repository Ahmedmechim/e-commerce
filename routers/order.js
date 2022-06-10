let express=require('express')
const { addOrder } = require('../controllers/order.controller')
let router=express.Router()

router.post('/newOrder',auth,addOrder)

module.exports = router;