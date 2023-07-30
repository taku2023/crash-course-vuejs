import * as Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import "./style.css";
import App from "@/App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: { name: "login" },
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

const app = Vue.createApp(App);
app.use(router);

app.mount("#app");
