export default {
   
    props:['toy'],
    template:`
    <section class="toy-preview">
            
  <tr>
      <td>{{toy._id}}</td>
      <td>{{toy.name}}</td>
      <td>{{toy.price}}</td>
      <td>{{toy.type}}</td>
      <td> {{toy.createdAt}} </td>
      <td>{{toy.inStock}}  </td>
    </tr>
    <button  @click.prevent="removeToy(toy._id)">X</button>

      
    </section>
    `,
created() {

  //  var x = JSON.parse(this.bug.creator.nikname)
   // console.log('on created in preview',this.toy)
},
methods: {
    removeToy(id){
    console.log('toy id delete,' ,id)
    this.$emit("deleteToy", id);
    
    }

},



}

