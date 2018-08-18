<template>

    <div class="container">
        <h2>login</h2>
        <div class="alert"  role="alert">
             {{message}}
            </div>
        <form >
            <div class="form-group">
                <label>Username:</label>
                <input type="text" name="username" class="form-control" required v-model="username">
                  <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
             <div class="form-group" >
                <label>Password:</label>
                <input type="password" name="password" class="form-control" required v-model="password">
                  <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
             <div class="form-group">
               <button type="button" v-on:click="login()" :disabled="!checkFrom" class="btn btn-submit">Login</button>

            </div>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

export default {
     name: 'Login',
     data () {
         return {
        username:'',
        password:'',
        message:""
         }
     },
     computed:{
         checkFrom(){
          return this.username !=='' && this.password !=='' 
            
         }
     },
     methods: {
         login(){
             
             axios.post('http://localhost:3000/api/user/login',{
                 username:this.username,
                 password:this.password
             })
                .then(data=>{
                    this.message=data.data.message;
                    let token=data.data.token;
                    localStorage.setItem('token',token);
                     this.$router.push({path:'/admin'});
                })
         }
     },
     created() {
        
     },
}
</script>
