let express=require('express')
const { addCategorie, getCategorie, deleteCategorie } = require('../controllers/categorie.controller')
const  auth  = require('../middleware/auth')
const rolevalidator = require('../middleware/role')
let router=express.Router()


router.post('/addCategorie',auth,rolevalidator(["admin"]),addCategorie)
router.get('/getCategories',getCategorie)
router.delete('/deleteCategorie/:id',auth,rolevalidator(["admin"]),deleteCategorie)

module.exports=router