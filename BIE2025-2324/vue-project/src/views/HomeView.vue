<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, type User } from 'firebase/auth'

const userRef = ref<User>()

const auth = getAuth()
signInWithEmailAndPassword(auth, 'test@test.com', 'test00')
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user
    console.log(user)
    userRef.value = user
  })
  .catch((error) => {
    console.error(error)
  })
</script>

<template>
  <main>
    <p>{{ userRef?.email }} - {{ userRef?.uid }}</p>
    <TheWelcome />
  </main>
</template>
