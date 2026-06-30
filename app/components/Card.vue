<template>
  <div class="card box text-center">
    <div class="feature-icon text-center">
      <i :class="icon" class="las bg-feature-icon trans" />
    </div>
    <div class="card-body">
      <h2 class="card-title text-grey">{{ title }}</h2>
      <p class="card-text">
        <slot>{{ body }}</slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  body: string;
}>();
</script>

<style lang="css" scoped>
.feature-icon {
  font-size: 40px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #ffffff;
  background: transparent;
  margin: 0 132px;
}

.feature-icon .bg-feature-icon {
  background: var(--color-4);
  background: linear-gradient(
    150deg,
    var(--color-1) 0%,
    var(--color-2) 30%,
    var(--color-3) 70%,
    var(--color-4) 100%
  );
  padding: 13%;
  -webkit-transition: 0.8s ease;
  -o-transition: 0.8s ease;
  transition: 0.8s ease;
  border-radius: 30px;
}

.card-body .card-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: 500;
}

.card-body .card-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 300;
  margin-top: 20px;
}

.card .card-body {
  padding: 0 30px 20px 30px;
}

.card {
  border: 1px solid transparent;
  border-radius: 12px;
  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(
      150deg,
      var(--color-1) 0%,
      var(--color-2) 30%,
      var(--color-3) 70%,
      var(--color-4) 100%
    );

  background-origin: border-box;
  background-clip: padding-box, border-box;
  cursor: pointer;
  -webkit-transition: 0.8s ease;
  -o-transition: 0.8s ease;
  transition: 0.8s ease;
  height: 100%;
}

.card:hover {
  border: 1px solid transparent;
  border-radius: 12px;
  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(
      300deg,
      var(--color-1) 0%,
      var(--color-2) 30%,
      var(--color-3) 70%,
      var(--color-4) 100%
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.card:hover .card-btn {
  background-color: var(--color-3);
  border: 2px solid var(--color-4);
  color: var(--white);
}
</style>
