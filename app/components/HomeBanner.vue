<template>
  <section class="booking-header">
    <div class="row g-0 img-area">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.booking-header,
.booking-header .img-area {
  height: 700px;
}
</style>
