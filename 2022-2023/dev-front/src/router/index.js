import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import RecipesView from "../views/RecipesView.vue";
import { getCurrentUser, useCurrentUser } from "vuefire";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
  ],
});

// Ne pas permettre l'affichage de la vue login si on est déjà conneté
// ⚠ Ceci est juste esthétique
router.beforeEach(async (to) => {
  const currentUser = await getCurrentUser();
  if (to.name === "login" && currentUser) {
    return { name: "home" };
  }
});

export default router;
