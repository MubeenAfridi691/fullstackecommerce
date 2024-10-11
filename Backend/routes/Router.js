const express = require('express')
const router = express.Router()
// const userDetails = require('../controller/Auth')
const tokenverify = require('../middleware/Authtoken')
const userdata = require('../controller/userdata')
const userdetails = require('../controller/Auth')
const addProduct= require('../controller/Productcontroller')
const {updateproduct}=require('../controller/updateproduct')
const {usersignup,usersignin,} =require('../controller/Auth')
const logout = require('../controller/logout')
const getCategoryProduct=require('../controller/Getproductbycategory')
const addToCartViewProduct=require('../controller/Addtocartproductview')
const deleteAddToCartProduct =require('../controller/deleteaddtocartproduct')
// const userdata=require('../controller/userdata')
// const getCategoryProduct=require('../controller/Getproductbycategory')
const ProductDetails =require('../controller/ProductDetails')
const countdocument =require('../controller/Countdocument')
const searchproduct =require('../controller/Searchproduct')
const allusers =require('../controller/allusers')
const changeuserroll =require('../controller/Changeuserroll')
const {getProducts} = require('../controller/Getproducts')
const {deleteproducts} = require('../controller/Getproducts')
const getcategorywise =require('../controller/Getcategorywiseproduct')
const Getproductbycategory=require('../controller/Getproductbycategory')
const addtocart =require('../controller/Addtocart')
const updateAddToCartProduct=require('../controller/updateaddtocartproducts')


router.route('/signup').post(usersignup)
router.route('/signin').post(usersignin)
// router.route('/user').get(userdata)
router.route('/user-details').get(tokenverify,userdetails.userdetails)
router.route('/logout').get(logout)

// Admin Apis
router.route('/allusers').get(tokenverify,allusers)
router.route('/changeuserroll').put(tokenverify,changeuserroll)
// Product Apis
router.route('/addproduct').post(tokenverify,addProduct)
router.route('/getproducts').get(getProducts)
router.route('/deleteproduct/:id').delete(tokenverify,deleteproducts)
router.route('/updateproduct').put(updateproduct)
router.route('/getcategorywise').post(getcategorywise)
router.route('/getproductbycategory').get(Getproductbycategory)
router.route('/productdetails').post(ProductDetails)
router.route('/addtocart').post(tokenverify,addtocart)
router.route('/countdocument').get(countdocument)
router.route('/addtocartproducts').get(addToCartViewProduct)
router.route('/updateaddtocartproduct').post(updateAddToCartProduct)
router.route('/deleteaddtocartproduct').post(deleteAddToCartProduct)
router.route('/searchproduct').get(searchproduct)





module.exports = router