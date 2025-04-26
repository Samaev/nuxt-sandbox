vue
<script setup>
 useHead({
  title: 'Test'
 })
 let counter = ref(1);
 const increaseCounter = () => {
  counter.value++
 }
onMounted(() => {
  setInterval(() => {
    increaseCounter();
  }, 1000)
 })
</script>
<template>
  <h2 class="text-center">Index</h2>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam doloremque dolores ea, eum id illum inventore libero magnam natus nisi non possimus quaerat quam recusandae repellendus sequi tempora unde?
<h3>Test</h3>
<p>{{ counter }}</p>
</template>
<style scoped>
</style>