import { createRouter, createWebHistory } from 'vue-router'
import AllUsers from '@/views/Users/AllUsers.vue'
import ItemHierarchy from '@/views/Items/ItemHierarchy.vue'
import User from '@/views/Users/BlocUser.vue';
import Login from '@/views/Users/Login.vue';

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
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

export default router