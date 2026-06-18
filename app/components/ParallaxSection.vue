<template>
  <div ref="parallaxRef" :class="computedClass" :style="computedStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  image?: string;
  color?: string;
  height?: string;
  customClass?: string;
}

const props = defineProps<Props>();

const parallaxRef = ref<HTMLElement | null>(null);

const computedClass = computed(() => {
  return props.customClass || 'parallax-section';
});

const computedStyle = computed(() => {
  return {
    backgroundImage: props.image ? `url(${props.image})` : undefined,
    backgroundColor: props.color,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    minHeight: props.height || '655px',
    // height: '100%',
  };
});
</script>

<style scoped>
.parallax-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
