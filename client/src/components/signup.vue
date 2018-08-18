<template>

    <div class="container">
        <h2>Signup</h2>
        <div class="alert"  role="alert">
             {{message}}
            </div>
        <form>
            <div class="form-group">
                <label>Username:</label>
                <input type="text" name="username" class="form-control" required v-model="username">
                  <div class="invalid-feedback">
                    Please choose a username.
                    </div>
            </div>
             <div class="form-group" >
                <label>Password:</label>
                <input type="password" name="password" class="form-control" required v-model="password">
                 <div class="invalid-feedback">
                    Please choose a username.
                    </div>
            </div>
             <div class="form-group">
               <button type="button" v-on:click="Signup()"  class="btn btn-submit">Signup</button>

            </div>
        </form>
    </div>
</template>

<script>

import axios from 'axios';
export default {
     name: 'Signup',
     data () {
         return {
        username:'',
        password:'',
        message:''
         }
     },
     computed:{
          formIsValue(){
              return this.username !=='' && this.password !==''
          }
        
     },
     methods: {
         Signup(){
             if(this.username !=='' && this.password !==''){
                     axios.post('http://localhost:3000/api/user',{
                 username:this.username,
                 password:this.password
             })
                .then(data=>{
                     this.message=data.data.message;
                     
                    
                })
             }
             else{
                 this.message="error";
                 console.log(this.message);
                 
             }
           

         }
     },
     created() {
        
     },
}
</script>
