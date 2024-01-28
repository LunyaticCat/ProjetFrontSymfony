import { createRouter, createWebHistory } from 'vue-router'
import AllUsers from '@/views/Users/AllUsers.vue'
import ItemHierarchy from '@/views/Items/ItemHierarchy.vue'
import User from '@/views/Users/BlocUser.vue';
import Login from '@/views/Users/Login.vue';
import AllItem from '@/views/Items/AllItems.vue';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/allusers',
            name: "allUsers",
            component: AllUsers
        },
        {
            path: '/itemhierarchy/:id',
            name: "itemhierarchy",
            component: ItemHierarchy
        },
        {
            path: '/user/:id',
            name: 'user',
            component: User
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: "/allitems",
            name: "allitems",
            component: AllItem
        }
    ]
})

export default router