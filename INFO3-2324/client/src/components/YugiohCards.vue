<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([])

async function loadCards() {
  const response = await fetch('/cards')
  const responseCards = await response.json()
  cards.value = responseCards
}

loadCards()
</script>

<template>
  <h2>Cards</h2>
  <ul>
    <li v-for="(card, index) in cards" :key="index">Elemnt actuel: {{ card }}</li>
  </ul>
</template>
