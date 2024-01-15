import { createRouter, createWebHistory } from 'vue-router'
import AllUsers from '@/views/ListUsers.vue'
import ItemHierarchy from '@/views/ItemHierarchy.vue'
import User from '@/views/User.vue';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
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