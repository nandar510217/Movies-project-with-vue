import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// step 1
const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')
const Movies = () => import('./pages/Movies.vue')
const Movie = () => import('./pages/Movie.vue')
const MovieOverview = () => import('./pages/MovieOverview.vue')
const MovieTrailer = () => import('./pages/MovieTrailer.vue')
const MovieArtist = () => import('./pages/MovieArtist.vue')


//step 2
const routes = [
    {
        path: '/',
        name:'home',
        component: Home
    },
    {
        path: '/about',
        name:'about',
        component: About    
    },
    {
        path: '/movies',
        name:'movies',
        component: Movies
    },

    //nested routes
    {
        path: '/movies/:id',
        name:'movie',
        component: Movie,
        children: [
            {
                path: '',
                name:'movieOverview',
                component: MovieOverview,
            },
            {
                path: 'trailer',
                name:'movieTrailer',
                component: MovieTrailer,
            },
            {
                path: 'artist',
                name:'movieArtist',
                component: MovieArtist,
            }
        ]
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
