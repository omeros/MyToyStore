<template>
  <div class="toy-preview">
   
                         <ul>
                          <li   @click=" myFilter"  v-bind:class="{checked : isActive}">{{test}}</li>
                      </ul>
                
                      <button @click="removeTodo(todo._id)">Delete </button>
                      <router-link class="edit-link" :to="'/toy-edit/'+todo._id">Edit  </router-link> 
                      <router-link class="details-link" :to="'/toy-details/'+todo._id"> Details  </router-link> 




  </div>
</template>

<script>

export default {
  name: 'toy-preview',
     props:['todo'],
             data() {
          return {
            isActive: false,
          }
      },
      mounted (){
         console.log('toys in preview',this.todo)
      },
          computed: {
      test(){
          return this.todo.name
      },
     },
     methods: {
  removeTodo(id){
    console.log('toy id delete from todo preview,' ,id)
    this.$emit("remotodo", id);
},
   myFilter() {
  this.isActive = !this.isActive;
},
     },
    

  components: {
  }
}
</script>
