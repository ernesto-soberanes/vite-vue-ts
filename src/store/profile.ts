// Create pinia store for profile
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const name = ref('John Doe')
  const age = ref(30)

  return { name, age }
})
