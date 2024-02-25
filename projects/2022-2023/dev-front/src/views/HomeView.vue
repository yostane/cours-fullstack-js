<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { useCurrentUser } from "vuefire";
const user = useCurrentUser();
</script>

<template>
  <main>
    <p v-if="user">Hello {{ user.email }}</p>

    <v-pagination length="6"></v-pagination>

    <the-welcome />
  </main>
</template>
