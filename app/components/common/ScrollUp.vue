<template>
    <button v-if="isVisible" class="scroll-up-btn rounded-5 d-flex justify-content-center align-items-center" @click="handleScrollToTop">
        <i class="las la-arrow-up la-2x" />
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  toTop: HTMLElement | null
}>();

const isVisible = ref(false);

const handleScrollToTop = () => {
   if (props.toTop) {
    // Smoothly scroll the targeted element into view
    props.toTop.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Fallback if the ref isn't available for some reason
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

const checkScrollPosition = () => {
  // Get total scrollable height of the document
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  // Get current scroll position from the top
  const currentScroll = window.scrollY;

  // If current scroll position is greater than half of total height, show button
  if (totalHeight > 0 && currentScroll >= totalHeight / 10) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition);
});

</script>

<style lang="css" scoped>
.scroll-up-btn {
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  z-index: 50;
  padding: 5px ;
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-color: var(--purple-500);
  color: var(--white);
  border: none;
  transition: all 150ms;
  background-image: var(--main-gradient)


}
.scroll-up-btn:hover {
    --spread: 3px;
    --blur: 4px;
    color: var(--purple-200);    
    box-shadow: 0px 0px var(--blur) var(--spread) var(--color-3);
    -webkit-box-shadow: 0px 0px var(--blur) var(--spread) var(--color-3);
    -moz-box-shadow:    0px 0px var(--blur) var(--spread) var(--color-3);
}
</style>