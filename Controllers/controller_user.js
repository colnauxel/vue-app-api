const User=require('../Models/model_user');
const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');


const get_users=(req,res,next)=>{
    User.find()
        .then(user=>{
            res.status(200).json({
                users:user
            })
        })

}

const post_user=(req,res,next)=>{
    User.find({username:req.body.username})
        .then(user=>{
            if(user.length >= 1){
                return res.status(200).json({
                    message:"Username exists"
                });
            } else{
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err){
                        res.status(500).json({
                            error:err
                        })
                    }else{
                        const new_user= new User({
                            username:req.body.username,
                            password:hash
                        })
                        new_user.save()
                            .then(result=>{
                                res.status(200).json({
                                    message:"Created User",
                                    result:result
                                })
                            })
                            .catch(err=>{
                                res.status(500).json({
                                    error:err
                                })
                            })
                    }
                })
            }
        })

}
const login_user=(req,res,next)=>{
    User.find({username:req.body.username})
    .then(user=>{
        if(user.length<1){
            return res.status(404).json({
                message:"username exist"
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    message:"Auth failed"
                })
            }
            if(result){
                const token=jwt.sign({
                    username:user[0].username,
                    userId:user[0]._id
                },'secret',{
                    expiresIn:"1h"
                });
                return res.status(200).json({
                    message:"Auth successful",
                    token:token
              
            });
             }
        })
    })
    .catch()
}



const delete_user=(req,res,next)=>{
            const id_user=req.params.id;
            User.findById(id_user).remove()
                .then(result=>{
                    res.status(200).json({
                        message:'Deleted product'
                    })
                })
                .catch()
        }

    
module.exports={
    post_user,delete_user,login_user,get_users
}