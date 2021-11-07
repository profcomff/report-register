import { createRouter, createWebHistory } from "vue-router";
import StartView from "@/views/StartView.vue";
import RegisterView from "@/views/RegisterView.vue";
import MessageView from "@/views/MessageView.vue";


const routes = [
    {
      path: "/",
      name: "Начало",
      component: StartView,
    },
    {
      path: "/register",
      name: "Регистрация",
      component: RegisterView,
    },
    {
      path: "/notification",
      name: "Сообщение",
      component: MessageView,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
