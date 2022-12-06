<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useCurrentUser } from "vuefire";
const user = useCurrentUser();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> -
        <RouterLink to="/recipes">Recipes</RouterLink> -
        <RouterLink to="/about">About</RouterLink> -
        <RouterLink v-if="!user" to="/login">Login - Register</RouterLink>
        <v-btn
          v-if="user"
          variant="outlined"
          color="primary"
          v-on:click="logout"
          >Logout</v-btn
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
export default {
  methods: {
    async logout() {
      await signOut(getAuth());
    },
  },
};
</script>
