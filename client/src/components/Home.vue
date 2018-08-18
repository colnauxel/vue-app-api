
<template>
    <div class="container">
        <h1>Data</h1>
         <div class="alert"  role="alert">
             {{message}}
            </div>
     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Create">
                   Create
     </button>
         <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name Product</th>
                <!-- <th scope="col">Image</th> -->
                <th scope="col">Price Product</th>
                <th scope="col">Title Product</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,index) in products" :key="product._id">
                <th scope="row"></th>
                <td>{{product.name_product}}</td>
                <!-- <td><img height="100" :src="'http://localhost:3000/'+product.productImage" alt="" srcset=""></td> -->
                <td>{{product.price_product}}</td>
                <td>{{product.title_product}}</td>
                <td>
                   <button type="button" class="btn btn-primary" v-on:click="getProduct(product._id)" data-toggle="modal" data-target="#Edit">
                    Edit
                     </button>
                </td>
                 <td><button class="btn btn-danger" v-on:click="deleteProduct(product._id,index)">Delete</button></td>
                </tr>
            </tbody>
    </table>
             <!-- The Modal -->
            <div class="modal fade" id="Edit">
            <div class="modal-dialog" >
            <div class="modal-content">
            
                <!-- Modal Header -->
                <div class="modal-header">
                <h4 class="modal-title">Edit Product</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body" >
                    <form >
                    <div class="form-group">
                        <label>Name Product</label>
                        <input type="text" class="form-control" v-model="product.name_product" required aria-describedby="emailHelp" placeholder="Name Pproduct">
                    </div>
                    <div class="form-group">
                        <label >Price Product</label>
                        <input type="number" class="form-control"  v-model="product.price_product" required  placeholder="Price Product">
                    </div>
                     <div class="form-group">
                        <label >Title Product</label>
                        <input type="text" class="form-control" v-model="product.title_product" required placeholder="Title Product">
                    </div>
                    
                
                </form>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                <button type="button" class="btn btn-primary" v-on:click="editProduct(product)" data-dismiss="modal">Save</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
        </div>
            <!-- Create form -->
             <!-- The Modal -->
            <div class="modal fade" id="Create">
            <div class="modal-dialog"  >
            <div class="modal-content">
            
                <!-- Modal Header -->
                <div class="modal-header">
                <h4 class="modal-title">Edit Product</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body"  >
                    <form>
                    <div class="form-group">
                        <label>Name Product</label>
                        <input type="text" class="form-control"  v-model="name_product" required aria-describedby="emailHelp" placeholder="Name Pproduct">
                    </div>
                    <div class="form-group">
                        <label >Price Product</label>
                        <input type="number" class="form-control" v-model="price_product" required placeholder="Price Product">
                    </div>
                    
                     <div class="form-group">
                        <label >Title Product</label>
                        <input type="text" class="form-control" v-model="title_product"  required placeholder="Title Product">
                    </div>
                     
                
                </form>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="postProduct()" data-dismiss="modal">Save</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
        </div>
        
        </div>

            
       
</template>
<script>
import axios from 'axios';
export default {
    name: 'Home',
    data () {
        return {          
                name_product:"",
                price_product:"",
                title_product:"",
                productImage:""
                
            ,
            file:'',
            message:"",
            products:[],
            product:[]
        }

    },
    methods:{
          fetchProducts(){
             
            fetch('http://localhost:3000/api/product')
            .then(result=>result.json())
                .then(pro=>{
                    this.products=pro.result
                    
                    
                })
                
        },
        getProduct(id_product){
            axios.get('http://localhost:3000/api/product/'+id_product)
                .then(result=>{
                  this.product=result.data.result;
                    
                })

        },
        deleteProduct(id,index){
             fetch('http://localhost:3000/api/product/' + id,{
                 method:"DELETE"
             })
                .then(()=>{
                    this.products.splice(index,1);
                    
                })
               
        },
        editProduct(product){
            // console.log(this.product.name_product);
            
             axios.put('http://localhost:3000/api/product/' + product._id,{
                name_product:this.product.name_product,
                price_product:this.product.price_product,
                title_product:this.product.title_product,
               
             })
            .then((result)=>{
                
                this.message=result.data.message;
                 
                })
        },
        postProduct(){
             
            
               
            axios.post('http://localhost:3000/api/product/',{
                name_product:this.name_product,
                price_product:this.price_product,
                title_product:this.title_product,
               
             
              
              
            })
            .then(result=>{
                this.message=data.data.message;
                this.$router.push({path:'/'});
            
                
                
            })
        },
     

    },
    created:function(){
        this.fetchProducts()
    }
      
    
}
</script>
