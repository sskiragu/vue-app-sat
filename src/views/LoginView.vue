<template>
    <v-card class="mx-auto" max-width="500" elevation="0">
        <v-form v-on:submit.prevent="login">
            <v-text-field type="text" aria-label="Username" variant="outlined" v-model="username"></v-text-field>
            <v-text-field type="password" aria-label="Password" variant="outlined" v-model="password"></v-text-field>
            <v-btn type="submit" variant="outlined">Login</v-btn>
        </v-form>
    </v-card>
</template>

<script setup>
/**
 * Composition API
 */
import { ref } from 'vue';
import axios from 'axios'

import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const username = ref('')
const password = ref('')

const router = useRouter()
const store = useStore()

const login = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
            username: username.value,
            password: password.value
        })

        //save the token
        const authToken = response.data.token;
        localStorage.setItem('auth-token', authToken)

        //Change isLoggedIn to true
        store.commit('setIsLoggedIn')

        //redirect to dashboard
        router.push('/dashboard')
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


</script>