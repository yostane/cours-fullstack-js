<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

const items = ref([1, 2, 3, 4])

function addItem() {
  items.value.push(items.value.length)
}
</script>

<template>
  <p>Current count: {{ counter }}</p>
  <button @click="counter++">Incrémenter</button>
  <button @click="addItem()">Add Item</button>
  <ul>
    <li v-for="(item, index) in items" :key="index">Elemnt actuel: {{ item }}</li>
  </ul>
</template>
