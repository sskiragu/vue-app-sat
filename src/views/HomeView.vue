<template>
  <div class="home">
    <div class="counter">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
    <h1>{{ `Count: ${ count }` }}</h1>
  </div>
</template>

<script setup>
/**
 * Composition API
 */
import { ref } from 'vue'

  const count = ref(0)

  const increment = () => count.value++
  const decrement = () => count.value--

</script>

<!--
<script>
/*
Options API
*/

export default {
  data(){
    return{
      count: 0
    }
  },
  methods: {
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  }
}

</script>
-->

<style scoped>
.counter button{
  background-color: blue;
  margin: 14px;
  padding: 10px;
  color: white;
  font-size: 28px;
  border-style: none;
}
</style>>

