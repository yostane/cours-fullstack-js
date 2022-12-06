<script setup>
import { appId, appKey } from "../api-infos";
</script>

<template>
  <main>
    <v-text-field label="query" v-model="query" />
    <v-btn v-on:click="search">Search</v-btn>
    <ul>
      <li v-for="recipe of recipes" :key="recipe.recipe.uri">
        <img :src="recipe.recipe.image" />
        <p>{{ recipe.recipe.label }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      recipes: [],
      query: "coffee",
    };
  },
  methods: {
    async search() {
      const basrUrl = "https://api.edamam.com/api/recipes/v2";
      const url = `${basrUrl}?type=public&q=${this.query}&app_id=${appId}&app_key=${appKey}`;
      const response = await fetch(url);
      const data = await response.json();
      this.recipes = data.hits;
    },
  },
};
</script>
