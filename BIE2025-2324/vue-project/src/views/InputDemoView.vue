<script setup lang="ts">
import { ref } from 'vue'

// https://vuejs.org/guide/essentials/forms.html

const login = ref<String>()
const password = ref<String>()

function authenticate() {
  console.log(login, password)
}
</script>

<template>
  <div>
    <div>Login: <input type="text" :value="login" /></div>
    <div>Password: <input type="text" :value="password" /></div>
    <input type="submit" value="Valider" />
  </div>
</template>
