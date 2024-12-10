import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGreetingStore = defineStore('greeting', () => {
  const message = ref('Hello, Pinia!!')
  function updateGreeting(newMessage: string) {
    message.value = newMessage
  }

  return { message, updateGreeting }
})
