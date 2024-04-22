import { createRouter, createWebHistory } from 'vue-router'
import Language from "../views/Language.vue"
import LangChange from '../components/LangChange.vue'
const routes = [
        {path: '/', 
        name: 'home',
        component : ( ) => import('../views/Home.vue')
        },
        {
                path: '/language',
                name: 'language',
                component : ( ) => import('../views/Language.vue')
        },
]

const router = createRouter ({
        routes,
        history : createWebHistory(),
})

export default router;