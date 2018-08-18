const express=require('express');
const checkAuth=require('../../middleware/check-auth');
const router=express.Router();

const User_Controller=require('../../Controllers/controller_user');

router.get('/',User_Controller.get_users);
router.post('/',User_Controller.post_user);
router.delete('/:id',User_Controller.delete_user);
router.post('/login',User_Controller.login_user);

module.exports=router;