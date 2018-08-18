const express=require('express');
const checkAuth=require('../../middleware/check-auth');

const upload=require('../../middleware/upload_file').upload;
const router=express.Router();
const Controller_Product=require('../../Controllers/controller_product');


router.get('/',Controller_Product.get_products);
router.get('/:id_pr',Controller_Product.get_product);
router.post('/',upload.single('productImage'),Controller_Product.post_product);
router.put('/:id_pr',Controller_Product.patch_product);
router.delete('/:id_pr',Controller_Product.delete_product);


module.exports=router;