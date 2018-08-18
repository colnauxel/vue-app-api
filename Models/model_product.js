const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SchemaProduct=new Schema({
    name_product:{type:String,required:true},
    price_product:{type:Number,required:true},
    title_product:{type:String,required:true},
    productImage:{type:String},
    date:{type:Date,default:Date.now}
    
});

module.exports=Product=mongoose.model('product',SchemaProduct);    
