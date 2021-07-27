import { createWebHistory, createRouter } from "vue-router";
import Create from "../components/Create.vue";
import Update from "../components/Update.vue";

const history = createWebHistory();
const routes = [
  { path: "/create", component: Create },
  { path: "/update", component: Update },
];
const router = createRouter({
  history,
  routes,
});
export default router;
