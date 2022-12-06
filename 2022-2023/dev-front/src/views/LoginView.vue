<script setup>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
</script>

<template>
  <main>
    <v-text-field label="email" v-model="email" />
    <v-text-field type="password" label="password" v-model="password" />
    <div v-if="failed">
      <v-alert type="error">Operation failed</v-alert>
    </div>
    <v-btn v-on:click="login">Login</v-btn>
    <v-btn v-on:click="register">Register</v-btn>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      failed: false,
    };
  },
  methods: {
    async register() {
      this.failed = false;
      try {
        await createUserWithEmailAndPassword(
          getAuth(),
          this.email,
          this.password
        );
        console.log("register success");
        this.$router.push("/");
      } catch (error) {
        this.failed = true;
        console.error(
          "register failed",
          error.message,
          "info",
          this.email,
          this.password
        );
      }
    },
    async login() {
      this.failed = false;
      try {
        await signInWithEmailAndPassword(getAuth(), this.email, this.password);
        console.log("register success");
        this.$router.push("/");
      } catch (error) {
        this.failed = true;
        console.error("register failed", error.message);
      }
    },
  },
};
</script>
