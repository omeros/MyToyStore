<template>
  <div class="home">
   Toy To Edit
          <div class="toy-edit  ">

        <div  class="baba-g">

                    <table>  
                        <div>
                            <th class = "edit-cell-title">ID </th>
                            <th class = "edit-cell-title">Created At </th>
                            <th class = "edit-cell-title">Name</th>
                            <th class = "edit-cell-title">Price</th>
                            <th class = "edit-cell-title">Type</th>
                            <th class = "edit-cell-title">Is In Stock</th>
                        </div> 
                    </table>
        </div>
        <div class="baba-g">
            <input class="edit-cell" type="text"  v-model = "todoToEdit._id">
            <input class="edit-cell" type="text" v-model= "todoToEdit.createdAt">
            <input class="edit-cell" type="text" v-model= "todoToEdit.name">
            <input class="edit-cell" type="text"  v-model= "todoToEdit.price">
            <input class="edit-cell" type="text"  v-model= "todoToEdit.type">
            <input class="edit-cell" type="text"  v-model= "inStockTest">
        </div>
        
       <!-- <a  href="/toy#/toy" @click="saveToy()"> save </a> -->
   <button class="save-todo-button" href="/"  @click.prevent="saveToy()">save</button>
    <router-link to="/toy">Go Back</router-link> 

          </div>



  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/cmps/HelloWorld.vue'

export default {
  name: 'toy-edit',

     data() {
        return {
            todoId : 'null',
            todoToEdit : {
                _id : 'willOveride',
                createdAt : 'willOveride',
                price :'willOveride',
                name : 'willOveride',
                type :'willOveride',
            },
         
        }
   },
   mounted(){
    this.todoId= this.$route.params.todoId;
    var myJSON = JSON.stringify(this.$store.getters.getTodoById(this.todoId));
    this.todoToEdit = JSON.parse(myJSON);
    console.log('myJSON',myJSON)
    console.log('toysToEdit',this.todoToEdit)
    },
    methods: {

    
    saveToy(){
        console.log('saved in edit toy',this.todoToEdit)
        this.$store.dispatch({type: 'saveTodo',   theToyToSave: this.todoToEdit}) 
       // this.$store.dispatch({type :'loadTodos' })
       
    },
  
    

    },
     computed: {
        inStockTest (){

            if(this.todoToEdit.inStock){
                            return 'Yes'
            } else{
                    return  'No'
            }
         },
    },

    components: {
        
    }
}
</script>
