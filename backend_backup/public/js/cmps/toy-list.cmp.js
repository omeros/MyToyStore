 import toyPreview from './toy-preview.cmp.js'
//  import bugList from '../cmps/bug-list.cmp.js'


export default {
    props: ['toys'],
    template: `

            <div class="btns-container">

           
            <router-link to="/add-toy">Add a Toy</router-link> 
            
                <table>   
                  <div>  
                     <th class = "cell"> ID </th>
                        <th class = "cell">Name  </th>
                        <th class = "cell">price</th>
                        <th class = "cell">Type</th>
                        <th class = "cell">Created At</th>
                        <th class = "cell">Is InStock</th>
                    </div>        
                    <div v-for="toy in toys" :key="toy._id"  >
                        <!-- |/// need to understant why is it not givving me an id in the link  -->
                        <router-link :to="'/edit-toy/'+toy._id">Edit the Toy</router-link> 
                    
                       <toy-preview :toy="toy" @deleteToy="dToy(toy._id)" />
                   </div>
                </table>
      
           

            </div>
     
    `,
    methods: {
        dToy(id){
            console.log('toy id delete from toy list,' ,id)
            this.$emit("remToy", id);
        },
        addBug(){

        }
    },
    components:{
        toyPreview
    }
}
