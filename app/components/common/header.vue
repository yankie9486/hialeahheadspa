<template>
  <header>
    <nav
      id="my-nav"
      :class="[
        'navbar navbar-expand-lg navbar-light rounded-bar sidemenu-nav',
        { 'fixed-menu': isFixedMenu },
      ]"
    >
      <div class="menu-btn" @click="openMenu">
        <span :class="{ color: isHome2Scrolled }" />
        <span :class="{ color: isHome2Scrolled }" />
        <span :class="{ color: isHome2Scrolled }" />
      </div>
    </nav>

    <div
      class="outer-wrapper"
      :class="[{ 'inner-wrapper': isMenuOpen, 'start-anm1': isMenuOpen, 'end-anm1': !isMenuOpen }]"
    >
      <div class="overlay">
        <a class="close-outerwindow" @click="closeMenu"><i class="las la-times" /></a>

        <nav class="navbar-1 w-100">
          <div class="row height small-nav">
            <div class="col-sm-12 col-md-5 d-flex justify-content-center align-items-center">
              <ul id="primary" class="navbar-nav">
                <li class="nav-item">
                  <NuxtLink class="nav-link active" to="/" @click="closeMenu">Home</NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" to="/#experiences" @click="closeMenu"
                    >Experiences
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-link"
                    to="https://hainescityheadspa.glossgenius.com"
                    @click="closeMenu"
                  >
                    Online Booking
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" to="/contact" @click="closeMenu">Contact</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const isFixedMenu = ref(false);
const isFixedMenu1 = ref(false);
const isMenuOpen = ref(false);
const isHome2Scrolled = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Toggle fixed classes based on scroll
  isFixedMenu.value = scrollTop > 250;
  isFixedMenu1.value = scrollTop > 250;

  const home2 = document.getElementById('home2');
  if (home2) {
    const home2Top = home2.offsetTop;
    isHome2Scrolled.value = scrollTop >= home2Top;
  }
};

const openMenu = () => {
  isMenuOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = 'visible';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
