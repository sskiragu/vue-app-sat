<template>
  <nav v-if="!store.state.isLoggedIn">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">Signup</router-link>
  </nav>
  <router-view/>
  {{ `The isLoggedIn: ${store.state.isLoggedIn}` }}
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

//Change isLoggedIn to true
store.commit('setIsLoggedIn')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 14px 28px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
