import VueRouter from "vue-router"
import Vue from "vue"
import HomePage from "@/views/HomePage";
import watchPage from "@/views/WatchPage";
import favoritesPage from "@/views/FavoritesPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes : [
        {name:"Home",path:"/",component:HomePage,props:true},
        {name:"Watch",path:"/Watch",component:watchPage},
        {name:"Favorites",path:"/Favorites/:userid",component:favoritesPage}
    ]
})

export default router;