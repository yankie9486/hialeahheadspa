<template>
  <div class="price-list col-12 col-md-6 ml-0">
    <div class="price-wrapper">
      <div class="rates d-flex justify-content-between">
        <div class="info d-flex flex-column justify-content-between">
          <div class="w-100 mb-3">
            <img :src="props.image" class="object-fit-cover w-100 rounded" />
          </div>
          <h3 class="main-heading text-grey font-weight-bold">
            {{ props.heading }}
          </h3>
          <h4 class="sub-heading text-grey fw-normal">
            {{ props.subHeading }}
          </h4>
          <ul v-if="props.list && props.list.length > 0" class="sub-heading text-grey">
            <li v-for="listItem in props.list" :key="listItem">
              {{ listItem }}
            </li>
          </ul>
          <p>{{ props.description }}</p>
          <p class="rate">${{ props.price }}<span v-if="pricePlus">&#43;</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  index: number;
  heading?: string;
  subHeading?: string;
  price?: number;
  pricePlus?: boolean;
  list?: Array<string>;
  description?: string;
  image?: string;
}
const props = defineProps<Props>();
</script>

<style lang="css" scoped>
.prices .price-list {
  padding: 16px 16px 16px 12px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(50%, var(--purple-50)),
    color-stop(50%, white)
  );
  background: -o-linear-gradient(left, var(--purple-50) 50%, white 50%);
  background: linear-gradient(to right, var(--purple-50) 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  -webkit-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.price-wrapper {
  height: 100%;
  border-bottom: 2px solid var(--purple-100);
}

.price-list:hover {
  background-position: left bottom;
}

.prices .price-list .info,
.prices .price-list .rates {
  height: 100%;
}

.prices .price-list .info .sub-heading {
  font-size: 16px;
}

.prices .price-list .info .main-heading {
  font-size: 32px;
}

.prices .price-list .rates .rate {
  font-size: 38px;
  margin-top: 15px;
  font-weight: 600;
}

.prices .addon {
  border-bottom: #dddddd solid 1px;
  width: calc(50% - 1rem);
  margin: 0 1rem 1rem 0;
  padding: 0 0 1rem 0;
}

.prices .addon span {
  margin-top: 0 !important;
}
</style>
