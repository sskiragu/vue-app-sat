<template>
    <v-card
    class="mx-auto"
        max-width="500"
        elevation="0">
        <v-form v-on:submit.prevent="signup">
            <v-text-field type="text" aria-label="Username" variant="outlined" v-model="username"></v-text-field>
            <v-text-field type="email" aria-label="Email" variant="outlined" v-model="email"></v-text-field>
            <v-text-field type="password" aria-label="Password" variant="outlined" v-model="password"></v-text-field>
            <v-btn type="submit" variant="outlined">Signup</v-btn>
        </v-form>
        {{ username }}
    </v-card>
</template>

<script setup>
/**
 * Composition API
 */
import { ref } from 'vue';
import axios from 'axios'

const username = ref('')
const email = ref('')
const password = ref('')

const signup = async () => {
const response = await axios.post('http://127.0.0.1:8000/api/signup',{
    username: username.value,
    email: email.value,
    password: password.value
})
console.log(response);
}


</script>