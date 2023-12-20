import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// step 1
const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')
const Movie = () => import('./pages/Movie.vue')


//step 2
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/movies/:id',
        component: Movie
    }
]

//step 3
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//step 4
createApp(App)
.use(router)
.mount('#app')
