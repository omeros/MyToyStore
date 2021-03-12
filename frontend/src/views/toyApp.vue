
<template>
  <div class="toy">
    <!-- <toy-list :todos="todosToShow" @remtodo=removeTodo /> -->
    <toy-filter @filtered="setFilter" />
    <toy-list :todos="toysToShow" @remtodo="removeTodo" />

    <!-- 
                         <h1>ToDos To DO</h1>   
            <todo-filter @filtered="setFilter" />
            <todo-list :todos="todosToShow" @remtodo=removeTodo />-->

    <h3>Add a Toy</h3>
    <div class="baba-g">
      <table>
        <div>
          <th class="edit-cell-title">Name</th>
          <th class="edit-cell-title">Price</th>
          <th class="edit-cell-title">Type</th>
        </div>
      </table>
    </div>

    <div class="baba-g">
      <input class="edit-cell" type="text" v-model="productToEdit.name" />
      <input class="edit-cell" type="text" v-model="productToEdit.price" />
      <input class="edit-cell" type="text" v-model="productToEdit.type" />
    </div>
    <form class="add-todo" @submit.prevent="addToy">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import toyList from "@/cmps/toy-list.vue";
import toyFilter from "@/cmps/toy-filter.vue";
import { toysService } from "@/services/toys.service.js";

export default {
  name: "toy-app",

  data() {
    return {
      productToEdit: {
        price: "willOveride",
        name: "willOveride",
        type: "willOveride",
      },
      todos: [],
      filterBy: null,
      productToEdit: toysService.getEmptyToy(),
    };
  },
  // creat toys when the first time when the App loads
  created() {
    console.log("Vue App was created!!!");
    this.$store.dispatch({ type: "loadToys" });
  },
  mounted() {
    this.todos = this.$store.state.toys;
  },
  computed: {
    toysToShow() {
      const toysToShow = this.$store.getters.getToysToShow;
      console.log("todos from toy App", toysToShow);
      return toysToShow;
    },
  },
  methods: {
    setFilter(filterBy) {
      console.log("set filter is running", filterBy);
      this.$store.commit({ type: "filterByChanged", strFilter: filterBy });
    },

    addToy() {
      console.log("Adding Toy...", this.productToEdit);
      this.$store.dispatch({
        type: "saveTodo",
        theToyToSave: this.productToEdit,
      });
      this.productToEdit = toysService.getEmptyToy();
    },
    removeTodo(todoId) {
      console.log("Removing...", todoId);
      this.$store.dispatch({ type: "removeTodo", todoId });
      this.productToEdit = toysService.getEmptyToy();
    },
  },

  components: {
    toyList,
    toyFilter,
  },
};
</script>




