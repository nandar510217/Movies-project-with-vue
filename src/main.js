import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// step 1
const Home = () => import('./pages/Home.vue')

//step 2
const routes = [
    {
        path: '/',
        component: Home
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
