<template>

    <div class="container">
       <!-- The Modal -->
            <div class="modal fade" id="Test">
            <div class="modal-dialog" >
            <div class="modal-content">
            
                <!-- Modal Header -->
                <div class="modal-header">
                <h4 class="modal-title"> Product</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body" >
                    <form >
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="dataItem"  required placeholder="Name Pproduct">
                    </div>
                   
                </form>
                </div>
                
                <!-- Modal footer -->
                <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="addItem"  data-dismiss="modal">Save</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
        </div>
           <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#Test">
                    Add
            </button>
        <hr>
         <table class="table">
             <tbody>
                <tr v-for="(item,index) in items" :key="item.id">
                    <td>{{item.name}}</td>
                    <td><button class="btn btn-danger" @click="removeItem(index)"> x</button></td>
                </tr>
            </tbody>
         </table>
    </div>
   
</template>
<script>
    export default {
        name:'Test',
        data () {
            return {
                dataItem:'',
                items:[
                    {
                        name:"pc"
                    },
                    {
                        name:"laptop"
                    }
                ]
            }
        },
        methods: {
            addItem(){
         
                this.items.push({
                    name:this.dataItem
                })
            },
            removeItem(index){
                this.items.splice(index,1)
            }
        }
    }
</script>