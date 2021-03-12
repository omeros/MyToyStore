 import { toysService } from '../services/toys.service.js'



export default {
    name: 'edit-toy',
         template:`
    <section class="add-bug">
   


    edit the toy
            <h2>My Toy</h2>


                   <table> 
                        <div>
                            <th class ="add">ID </th>
                            <th class = "add">Created At </th>
                            <th class = "add">Name</th>
                            <th class = "add">Price</th>
                            <th class = "add">Type</th>
                            <th class = "add">Is In Stock</th>
                        </div> 
                    </table>
            <div>
            <input class="add" type="text"  v-model="toyToEdit._id">
            <input class="add" type="text"  v-model="toyToEdit.createdAt">
            <input class="add" type="text"  v-model="toyToEdit.name"> 
            <input class="add" type="text" v-model="toyToEdit.price">
            <input  class="add" type="text" v-model="toyToEdit.type"> 
             <input class="add" type="text"  v-model="toyToEdit.inStock"> 
            <button class="add-bug-button" @click.prevent="savetoy()">save edit</button>
           </div>

      
    </section>
    `,
   data() {
    return {
       
        toyToEdit: null,
         
            
        }
    
},
created() {
    this.toyId= this.$route.params.toyId;
    if (this.toyId) {
        toysService.getById(this.toyId).then(toy =>{
            console.log('toys comming from server at edit toy',toy)
             this.toyToEdit = toy})
        

            
        
    } else {
         this.toyToEdit = toysService.getEmptyBug()
         console.log('toy comming from server at edit toy on else',toy)
    }
},

mounted(){

},

methods: {

    savetoy(){
        var toy  = { 
                _id : this.toyToEdit._id,
                name : this.toyToEdit.name,
                price : this.toyToEdit.price,
                type : this.toyToEdit.type,
                createdAt  : this.toyToEdit.createdAt,
                inStock : this.toyToEdit.inStock
          }
          console.log('update a toy !!', toy)
           toysService.save(toy)
      },
    

},



}

