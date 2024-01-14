import { createRouter, createWebHistory } from 'vue-router'
import App from '@/views/App.vue'
import AllUsers from '@/views/ListUsers.vue'
import ItemHierarchy from '@/views/Itemhierarchy.vue'
import User from '@/views/User.vue';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/allusers',
            name: "allUsers",
            component: AllUsers
        },
        {
            path: '/itemhierarchy',
            name: "itemhierarchy",
            component: ItemHierarchy
        },
        {
            path: '/user/{index}',
            name: 'user',
            component: User
        }
    ]
})

export default router