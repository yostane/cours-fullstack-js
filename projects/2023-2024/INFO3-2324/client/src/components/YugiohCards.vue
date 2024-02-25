<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([])

async function loadCards() {
  const response = await fetch('/api/cards')
  const responseCards = await response.json()
  cards.value = responseCards
}

loadCards()

async function addCard() {
  const card = {
    name: 'Exodia Tête',
    attack: 500,
    type: 'attack'
  }
  const response = await fetch('/api/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(card)
  })
  await loadCards()
}
</script>

<template>
  <h2>Cards</h2>
  <button @click="addCard()">Add Card</button>
  <ul>
    <li v-for="(card, index) in cards" :key="index">Elemnt actuel: {{ card }}</li>
  </ul>
</template>
