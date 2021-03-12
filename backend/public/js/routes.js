
import homePage from './pages/home-page.cmp.js'
import about from './pages/about.cmp.js'
import toyApp from './pages/toy-app.cmp.js'
import editToy from './pages/edit-toy.cmp.js'
import addToy from './pages/add-toy.cmp.js'
 

const aboutTeam = {
    template: `
        <section>
            <h2>Our Team is Amazing!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, porro odit minima vitae aspernatur, dolore explicabo eius ut ducimus numquam laborum repudiandae assumenda suscipit non perferendis obcaecati inventore vel est!</p>
        </section>
    `
}
const aboutServices = {
    template: `
        <section>
            <h2>Our Services are Awesome</h2>
            <p>Services are Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, porro odit minima vitae aspernatur, dolore explicabo eius ut ducimus numquam laborum repudiandae assumenda suscipit non perferendis obcaecati inventore vel est!</p>
            <h4>We are everywhere</h4>
            <input type="text" ref="loc" placeholder="Your location" />
        </section>
    `,
    mounted() {
        const el = this.$refs.loc;
        el.focus();
        el.scrollIntoView();
    }
}


const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/toy-app',
        component: toyApp,
    },
    {
        path: '/add-toy',
        component: addToy
    },
      {
        path: '/edit-toy/:toyId',
        component: editToy
    },
    {
        path: '/about',
        component: about,
    },


 
    
]

export const myRouter = new VueRouter({ routes })