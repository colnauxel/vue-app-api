
<template>
  <div id="app">
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">System</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="btn btn-outline-primary"  href="/signup">Sign up</a>
      </nav>
      <a class="btn btn-outline-primary" v-if="{datacheck}" v-on:click="logout()"  href="/admin">Logout</a>
      <a class="btn btn-outline-danger" href="/login">Sign in</a>
    </div>
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return{
      datacheck:''
    }
  },
  computed:{
    // checkLogin(){
    //   if(localStorage.getItem('token')===null){
    //     return 
    //   }
    // }
  },
  methods: {
    logout(){
      localStorage.removeItem('token');
    },
    checkLogin(){
      if(localStorage.getItem('token')===null){
        this.datacheck=true
        
      }
    }
  },
  created: function(){
    this.checkLogin()
  }
  
}
</script>

<style>

</style>
