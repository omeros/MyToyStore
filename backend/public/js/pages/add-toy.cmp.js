 import { toysService } from '../services/toys.service.js'



export default {
         template:`
    <section class="add-bug">
   
                 <table> 
                        <div>
                            <!-- <th class ="add">ID </th> -->
                            <!-- <th class = "add">Created At </th> -->
                            <th class = "add">Name</th>
                            <th class = "add">Price</th>
                            <th class = "add">Type</th>
                            <th class = "add">created At</th>
                            <th class = "add">Is In Stock</th>
                        </div> 
                    </table>
            <div>
            <!-- <input class="add" type="text"  v-model="toyToEdit._id"> -->
            <input class="add" type="text"  v-model="myName"> 
            <input class="add" type="text" v-model="myPrice">
            <input  class="add" type="text" v-model="myType"> 
            <input class="add" type="text"  v-model="myCreatedAt">
             <input class="add" type="text"  v-model="isInStock"> 
            <button class="add-bug-button" @click.prevent="addToy()">save edit</button>
           </div>





      
    </section>
    `,
   data() {
    return {
        myName: null,
        myPrice : null,
        myType : null,
        myCreatedAt : null,
        isInStock : null,
    }
},
methods: {

    addToy(){
      var toy  = { 
            //_id : toysService.makeId(),
            name : this.myName,
            price : this.myPrice,
            type : this.myType,
            createdAt : this.myCreatedAt,
            inStock : this.isInStock,
        }
        console.log(' a new toy was added !!', toy)
         toysService.save(toy)
    },
    

},



}

