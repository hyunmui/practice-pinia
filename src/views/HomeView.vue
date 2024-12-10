<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>This is the home page</p>

    <div class="counter">
      <button @click="store.increment">Count: {{ store.count }}</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.counter > button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #00bd7e;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
