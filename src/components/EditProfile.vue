<template>
    <div>
        <h1>Edit Profile</h1>
        <label>
            Name:
            <input v-model="name" />
        </label>
        <label>
            Age:
            <input type="number" v-model.number="age" />
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useProfileStore } from '../store/profile'

const profileStore = useProfileStore()
const name = ref<string>(profileStore.name)
const age = ref<number>(profileStore.age)

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