import { toysService } from '../services/toys.service.js'
import toyList from '../cmps/toy-list.cmp.js'



export default {
    template: `
        <section class="bug-app">
         

            <toy-list :toys="toysToShow"  @remToy="removeToy"/>
   




</section>

    `,
    data() {
        return {
             toys: [],
            // toyToEdit: toysService.getEmptyToy()
        }
    },
    created() {
        this.loadToys()
    },
    methods: {
      
        loadToys() {
            toysService.query()
                .then(toys => {
                    console.log('toys from front ', toys)
                    this.toys = toys
                })
        },
        // toggleTodo(toy) {
        //     const todoToSave = { ...toy, completed: !toy.completed }
        //     this.saveToy(todoToSave)
        //         .then(() => {
        //             console.log('Saved your toggle')
        //         })
        // },
        // addTodo() {
        //     this.saveToy({ ...this.toyToEdit })
        //         .then(() => {
        //             this.toyToEdit = toysService.getEmptyTodo()
        //         })
        // },
        removeToy(toyId) {
            console.log('delete toy')
            toysService.remove(toyId)
                .then((toyId) => {
                    
                    console.log('toyId', toyId)
                    const idx = this.toys.findIndex(toy => toy._id === toyId)
                    this.toys.splice(idx, 1)
                })
        },
        // saveToy(toy) {
        //     return toysService.save({ ...toy })
        //         .then((savedToy) => {
        //             if (toy._id) {
        //                 const idx = this.todos.findIndex(currToy => currToy._id === toy._id)
        //                 this.toys.splice(idx, 1, savedToy)
        //             } else {
        //                 this.toys.unshift(savedToy)
        //             }
        //         })
        // },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        toysToShow() {
            // if (!this.filterBy) return this.cars
            // const searchStr = this.filterBy.byVendor.toLowerCase()
            // const carsToShow = this.cars.filter(car => {
            //     return car.vendor.toLowerCase().includes(searchStr)
            // })
            return this.toys
        }
    },

    components: {
        toyList,
    }

}