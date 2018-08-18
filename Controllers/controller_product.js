const Product=require('../Models/model_product');


//-------------------------------

const get_products=(req,res,next)=>{
    Product.find()
        .then(result=>{
            res.status(200).json({
                count:result.length,
                result:result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
}
const get_product=(req,res,next)=>{
    const id_pr=req.params.id_pr;
    Product.findById({_id:id_pr})
        .then(result=>{
            res.status(200).json({
                result:result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
}
const post_product=(req,res,next)=>{
    console.log(req.file);
    
    const new_Product= new Product({
        name_product:req.body.name_product,
        price_product:req.body.price_product,
        title_product:req.body.title_product,
      
        
    })
    new_Product.save()
        .then(result=>{
            res.status(200).json({
                message:'Saved Product',
                result:result
            })
        })
        .catch()
  
    
}
const patch_product=(req,res,next)=>{
    const id_pr=req.params.id_pr;
    const update_pr={
        name_product:req.body.name_product,
        price_product:req.body.price_product,
        title_product:req.body.title_product,
      
    }
    Product.update({_id:id_pr},update_pr)
        .then(()=>{
          Product.findById({_id:id_pr})
            .then(result=>{
                res.status(200).json({
                    message:'updated Product',
                    result:result
                })
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
}
const delete_product=(req,res,next)=>{
    const id_pr=req.params.id_pr;
    Product.findById(id_pr).remove()
        .then(result=>{
            res.status(200).json({
                message:"Deleted product"
            })
        })
       
}
module.exports={
    get_products,get_product,post_product,patch_product,delete_product
}