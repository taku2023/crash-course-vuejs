import * as Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import "./style.css";
import App from "@/App.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: { path: "/home" },
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

const app = Vue.createApp(App);
app.use(router);

app.mount("#app");
