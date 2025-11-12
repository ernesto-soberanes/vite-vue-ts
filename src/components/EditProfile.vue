<template>
    <div>
        <h1>Edit Profile</h1>
        <label for="name" data-test-id="name-label">
            Name:
        </label>
        <input v-model="name" name="name" data-test-id="name-input" />
        <label for="age" data-test-id="age-label">
            Age:
        </label>
        <input type="number" v-model.number="age" name="age" data-test-id="age-input" />
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useProfileStore } from '../store/profile'
import { storeToRefs } from 'pinia'

const profileStore = useProfileStore()

const { name, age } = storeToRefs(profileStore)

// Sync changes back to the store
watch(name, (val) => profileStore.name = val)
watch(age, (val) => profileStore.age = val)
</script>

<style scoped>
    div {
        border: 1px solid #444;
        padding: 1em;
        border-radius: 8px;
        max-width: 300px;
        margin: 1em auto;
        background-color: #222;
        color: #fff;
    }
    h1 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
        color: #fff;
    }
    label {
        display: block;
        margin: 0.5em 0;
        color: #ccc;
    }
    input {
        margin-left: 0.5em;
        padding: 0.25em;
        border-radius: 4px;
        border: 1px solid #555;
        background-color: #333;
        color: #fff;
    }
</style>