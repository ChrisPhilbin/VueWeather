import { createRouter, createWebHistory } from "vue-router";
import GetForecast from "../components/GetForecast.vue";
import TestComponent from "../components/TestComponent.vue";

const routes = [
  {
    path: "/",
    name: "Get Forecast",
    component: GetForecast,
  },
  {
    path: "/test",
    name: "Test Path",
    component: TestComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
