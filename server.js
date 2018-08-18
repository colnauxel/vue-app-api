const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');

const product=require('./routers/api/router_product');
const user=require('./routers/api/router_user');

const app=express();
//BodyParser Middleware
app.use(bodyParser.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use(express.static('uploads'));

app.use('/api/product',product);
app.use('/api/user',user);
//--CORS-------
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "Content-type,Origin,X-Requested-With,Accept,Authorization");
    
    if(req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
    
});



//DB Config
const db=require('./config/keys').mongoURL;
//Connect to Mongoose
mongoose.connect(db)
    .then(()=>{console.log('Connect db completed')})
    .catch(err=>console.log(err))

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server created port ${port}`);
    
    }
)