<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import '~/assets/css/style.css';
</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
