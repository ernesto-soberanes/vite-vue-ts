// Add component to display profile from store
<template>
  <div>
    <h1>Profile</h1>
    <p>Name: <span data-test-id="view-name-value">{{ name }}</span></p>
    <p>Age: <span data-test-id="view-age-value">{{ age }}</span></p>
  </div>
</template>

<script setup lang="ts">
import { useProfileStore } from '../store/profile'
import { storeToRefs } from 'pinia'

const profileStore = useProfileStore()
const { name, age } = storeToRefs(profileStore)
</script>

<style scoped>
    div {
        border: 1px solid #444;
        padding: 1em;
        border-radius: 8px;
        max-width: 300px;
        margin: 1em auto;
        background-color: #333;
        color: #fff;
    }
    h1 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
        color: #fff;
    }
    p {
        margin: 0.25em 0;
        color: #ccc;
    }
</style>