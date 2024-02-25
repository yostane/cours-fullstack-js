<template>
  <p>{{ text }}</p>
  <v-btn color="primary" v-on:click="updateText()">Click me please</v-btn>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello VueJS data",
    };
  },
  methods: {
    updateText() {
      this.text =
        this.text === "Hello VueJS data" ? "Welcome" : "Hello VueJS data";
    },
  },
};
</script>
