<template>
  <div class="home">
     <h2>toy datails </h2>
          {{todo}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/cmps/HelloWorld.vue'

export default {
  name: 'toy-details',
     data() {
    return {
        todoId : 'null',
        todo: null,
    }    
},
  mounted(){
    this.todoId= this.$route.params.todoId;
    // this.todoToEdit = this.$store.getters.getTodoById(this.todoId)
    var myJSON = JSON.stringify(this.$store.getters.getTodoById(this.todoId));
    this.todo = JSON.parse(myJSON);


    },
  components: {
    HelloWorld
  }
}
</script>
