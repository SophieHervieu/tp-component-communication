import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/userdata",
            name: "User Data",
            component: () => import("../views/UserData.vue")
        },
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'NotFound',
        //     component: () => import('../views/NotFoundView.vue')
        // },
        // {
        //     path: "/register",
        //     name: "Register",
        //     component: () => import("../components/RegisterPageView.vue")
        // },
    ]
});

export default router;