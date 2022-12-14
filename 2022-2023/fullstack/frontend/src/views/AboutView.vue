<template>
  <div class="about">
    <button @click="saveMessage">
      Set "message": "hello" in local storage
    </button>
    <h1>This is an about page</h1>
    <DishList />
  </div>
</template>

<script>
// @ is an alias to /src
import DishList from "@/components/DishList.vue";

export default {
  name: "HomeView",
  components: {
    DishList,
  },
  methods: {
    saveMessage() {
      const value = localStorage.getItem("message") ?? "Hello";
      localStorage.setItem("message", value === "Hello" ? "World" : "Hello");
    },
  },
};
</script>
