

<template>
  <div class="toy-list">
                <!-- <toy-preview :todo="todo"   @remotodo=removeTodo /> -->
                
            <div v-for="todo in todos" :key="todo._id"  >
                <toy-preview :todo="todo"  @remotodo=removeTodo  />

            </div>
    toy list
  </div>
</template>

<script>
  import toyPreview from '@/cmps/toy-preview.vue'

export default {
     name: 'toy-list',
        props: ['todos'],
    methods: {
        removeTodo(id){
            console.log('bug id delete from bug list,' ,id)
            this.$emit("remtodo", id);
        },
        addBug(){

        }
    },
       mounted (){
         console.log('toys in toy-list',this.todos)
      },

    components:{
    toyPreview,
    }
}
</script>
