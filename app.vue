<template>
  <div>
    <NuxtLayout>
      <header class="d-flex w-100 mt-2">
        <NuxtLink to="/"><button class="btn btn-secondary mx-5">Home</button></NuxtLink>
        <NuxtLink to="/events"><button class="btn btn-secondary mx-5">Events</button></NuxtLink>
      </header>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
</script>