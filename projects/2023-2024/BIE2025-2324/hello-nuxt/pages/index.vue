<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();

const route = useRoute();

counter.count++;
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 });
// or using an action instead
counter.increment();
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <div>Current Count: {{ counter.count }}</div>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>
