import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useGreetingStore } from './greeting'

const greeting = useGreetingStore()

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
    greeting.updateGreeting(`Hello, Pinia!! / count: ${count.value}`)
  }

  return { count, doubleCount, increment }
})
