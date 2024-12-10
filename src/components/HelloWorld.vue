<script setup lang="ts">
import { useGreetingStore } from '@/stores/greeting'

defineProps<{
  msg: string
}>()

const greeting = useGreetingStore()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>

    <h4 style="text-align: center">
      Greeting Message: <strong style="font-weight: bold">{{ greeting.message }}</strong>
    </h4>

    <ul class="menu">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.menu {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.menu > li::after {
  content: '|';
  margin: 0 0.5rem;
  color: #ccc;
}

.menu > li:last-child::after {
  content: '';
  margin: 0;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
