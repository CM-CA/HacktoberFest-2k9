/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Vistacarretera from "@/views/Vistacarretera";
import Mountainview from "@/views/Mountainview";

Vue.use(Router)


export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: 'home',
        component: Home
    },
    {
        path: "/road",
        name: 'road',
        component: Vistacarretera
    },
    {
        path: '/mountain',
        name: 'mountain',
        component: Mountainview
    }
    ]

});
