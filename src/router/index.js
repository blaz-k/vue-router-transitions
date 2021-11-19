import {createRouter, createWebHistory} from "vue-router"
import Guide from "../components/Guide.vue"
import Home from "../components/Home.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: "/",
        component: Home,
    },
    {
        path: "/guide",
        component: Guide
    }
]
})

export default router