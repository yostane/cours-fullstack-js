<script setup>
import { appId, appKey } from "../api-infos";
import { hardCodedRecipes } from "../assets/recipes";

import {
  useFirestore,
  getCurrentUser,
  useCollection,
  useCurrentUser,
} from "vuefire";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const user = useCurrentUser();
</script>

<template>
  <main>
    <v-text-field label="query" v-model="searchQuery" />
    <v-btn v-on:click="search">Search</v-btn>
    <div id="cards">
      <v-card
        v-for="recipe of recipes"
        :key="recipe.recipe.uri"
        class="mx-auto"
        max-width="344"
      >
        <v-img :src="recipe.recipe.image" height="200px" cover></v-img>
        <v-card-title> {{ recipe.recipe.label }} </v-card-title>
        <v-card-actions>
          <v-btn
            v-if="user"
            :icon="recipe.isFavorite ? 'mdi-star-check' : 'mdi-star'"
            color="primary"
            @click="toggleFavorite(recipe)"
          >
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      recipes: hardCodedRecipes,
      searchQuery: "coffee",
    };
  },
  methods: {
    async search() {
      const basrUrl = "https://api.edamam.com/api/recipes/v2";
      const url = `${basrUrl}?type=public&q=${this.searchQuery}&app_id=${appId}&app_key=${appKey}`;
      const response = await fetch(url);
      const data = await response.json();
      this.recipes = data.hits;
    },
    async isFavorite(recipe) {
      const db = getFirestore();
      const currentUser = await getCurrentUser();
      const collectionName = `favorties-${currentUser.uid}`;
      const q = query(
        collection(db, collectionName),
        where("uri", "==", recipe.recipe.uri)
      );
      // Exécution de la requête
      const querySnapshot = await getDocs(q);
      console.log("is Favorite: ", !querySnapshot.empty);
      return !querySnapshot.empty;
    },
    async toggleFavorite(recipe) {
      const db = getFirestore();
      const currentUser = await getCurrentUser();
      const collectionName = `favorties-${currentUser.uid}`;
      if (!recipe.isFavorite) {
        await addDoc(collection(db, collectionName), {
          uri: recipe.recipe.uri,
        });
      } else {
        const q = query(
          collection(db, collectionName),
          where("uri", "==", recipe.recipe.uri)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (document) => {
          await deleteDoc(doc(db, collectionName, document.id));
        });
      }
      recipe.isFavorite = !recipe.isFavorite;
    },
  },
  async mounted() {
    for (const recipe of this.recipes) {
      recipe.isFavorite = await this.isFavorite(recipe);
    }
    console.table(this.recipes);
  },
};
</script>

<style scoped>
#cards {
  display: flex;
}
</style>
