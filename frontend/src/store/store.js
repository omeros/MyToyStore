import Vue from 'vue'
import Vuex from 'vuex'

import { toysService } from '@/services/toys.service.js';
import { userStore } from '@/store/user.store.js';




Vue.use(Vuex)

export default new Vuex.Store({


  


// import { userService } from "../services/user.service.js";

//const options = {
    strict: true,
    state: {
        count: 0,
        filterBy: null,
        user: "",
        toys: [],
        //  userDetails : userService.getUserPreferences(),
       
    },
    getters: {
        countForDisplay(state) {
            return state.count.toLocaleString()
        },
    //   getUserDetails(state){
    //      return state.userDetails;
    //   },
       
        getTodoById: (state) => (id) => {
            var  todoToEdit=null
            state.toys.find(todo => {
                if (todo._id === id){
                    todoToEdit= todo;
                }

            }) 
            return todoToEdit
          },
          gettoys(state){
           return state.toys
          },

        getTodo({id}){
            toys.forEach(todo => {
                if(id===todo_id){
                    return todo;
                }
                
            });
        },
        getToysToShow(state) {
            console.log('gettoysToShow',state)
            if (!state.filterBy) return state.toys
            const searchStr = state.filterBy.toLowerCase()
            const toysToShow = state.toys.filter(toy => {
                return toy.name.toLowerCase().includes(searchStr)
            })
            return toysToShow
        },
    },


    mutations: {
        setToys(state,payload){
            console.log(' payload in setToys in store',payload.toys)
          state.toys = payload.toys;
        },
        // userTodo(state,payload){
        //    console.log(' update in stor in mutatione',payload.user)
        //    state.userDetails=payload.user
       
        // },
        filterByChanged(state,payload){
            console.log('filterByChanged is running',payload.strFilter.name)
            state.filterBy = payload.strFilter.name
            
        },
        incCount(state, payload) {
            console.log('Payload', payload);
            state.count += payload.val;
        },
        addTodo(state, payload) {
            console.log('add todo in store :', payload);
            state.toys.push(payload.toy);
        },
        updateTodo(state, payload){
            console.log(' after update toy in store',payload)
            const idx = state.toys.findIndex( p => p._id === payload.toy._id)
            state.toys.splice(idx,1,payload.toy)
        },
        removeTodo(state, {todoId}) {
            // toysService.remove(todoId)
            const idx = state.toys.findIndex( p => p._id === todoId)
            state.toys.splice(idx, 1)
        },
   
        saveTodo(state,payload){
        console.log('todo in stor to save',payload.theTodoToSave)
        //toysService.save(payload.theTodoToSave)
       // var newtoys =JSON.parse(JSON.stringify(state.toys));
         state.toys = payload.theTodoToSave;
        }
    },
    actions : {
  
        loadToys(context, payload)
        {
            console.log(' load toys from store')
            toysService.query()
            .then(toys=>{
                context.commit({type : 'setToys',  toys})
                console.log(' load toys from stoysServicetore',toys)
            })


        },
        saveTodo(context,payload){
            //TODO : support EDIT
            console.log(' theToyToSave in action in store ',payload.theToyToSave)
            const type =(payload.theToyToSave._id)? 'updateTodo': 'addTodo';
            //console.log('add from stor from action',payload.product)
            toysService.save(payload.theToyToSave)
            .then(savedToy=>{
                console.log('saved toy  in after save service,type  :',savedToy,type)
           //  context.commit({type : 'savetoys' , todo : savedTodo})
              context.commit({type , toy : savedToy})
            })
        },
        removeTodo(context,payload){
            toysService.remove(payload.todoId)
            .then(()=>{
                context.commit(payload)
            })
        },
    },
    modules :{
        userStore : userStore,
    },
//}



  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }


})
