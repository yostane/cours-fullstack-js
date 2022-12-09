<script setup>
import IconCommunity from "../components/icons/IconCommunity.vue";
</script>

<template>
  <div class="about">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <h1><icon-community /> This is an about page</h1>
    <input type="text" v-model="userText" />
    <p>{{ userText }} - {{ userEmail }}</p>
    <p>{{ userAge }}</p>
    <button v-on:click="resetUserText()">Click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userText: "Hello",
      userAge: 22,
      userEmail: "hello@example.com",
    };
  },
  methods: {
    resetUserText() {
      this.userText = "Hello";
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
