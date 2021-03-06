import { createRouter, createWebHistory } from "vue-router";
import StartView from "@/views/StartView.vue";
import RegisterView from "@/views/RegisterView.vue";
import MessageOkView from "@/views/MessageOkView.vue";
import MessageFailView from "@/views/MessageFailView.vue";
import MessageCriticalView from "@/views/MessageCriticalView";

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
    path: "/message_ok",
    name: "Успех!",
    component: MessageOkView,
  },
  {
    path: "/message_fail",
    name: "Ошибка",
    component: MessageFailView,
  },
  {
    path: "/message_critical",
    name: "Критическая ошибка",
    component: MessageCriticalView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
