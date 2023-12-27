import { createRouter, createWebHistory } from 'vue-router'
import Feed from '@/views/Feed.vue'

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            component: Feed
        },
        {
            path: '/item/:id',
            name: "item",
            component: Feed
        }
    ]
})

export default router