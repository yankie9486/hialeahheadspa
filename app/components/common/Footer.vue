<template>
  <section id="footer" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <address>{{ `${config.public.address} ${config.public.address_2}, ${config.public.city}, ${config.public.state } ${config.public.zip}` }}</address>
          <p class="phone">
            <a :href="`tel:${config.public.phone}`">{{ config.public.phone }}</a>
          </p>

          <ul class="footer_ul">
            <li class="footer_list">
              <NuxtLink
                to="https://www.instagram.com/hainescity_headspa?igsh=MWg5aWloOGdtcDJ4dA=="
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  width="24px"
                  height="24px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"
                  />
                  <path
                    d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"
                  />
                </svg>
              </NuxtLink>
            </li>
            <li class="footer_list">
              <NuxtLink to="https://www.tiktok.com/@hainescityheadspa" target="_blank"
                ><svg fill="currentColor" height="20px" viewBox="0 0 448 512">
                  <path
                    d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
                  /></svg
              ></NuxtLink>
            </li>
          </ul>
          <p class="info footer_text">&copy;{{ currentYear }} Hialeah Head Spa</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const config = useRuntimeConfig();
const currentYear = new Date().getFullYear();

</script>

<style lang="css" scoped>
.footer {
  background-color: var(--footer-bg);
  padding-top: 125px;
}

.footer address,
.footer .phone a,
.footer .email {
  font-size: 1.25rem;
  color: var(--footer-text);
}

.footer .phone a:hover {
  text-decoration: underline;
  color: var(--footer-bg-hover);
}

ul.footer_ul {
  list-style: none;
  display: inline-block;
}

li.footer_list {
  display: inline-block;
  margin-right: 15px;
  font-size: 25px;
  color: var(--footer-text);
  cursor: pointer;
  width: 60px;
  height: 60px;
  text-align: center;
  background-color: transparent;
  border-radius: 50px;
  padding-top: 10px;
  -webkit-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  transition: 0.5s ease;
}

li.footer_list a {
  color: inherit;
}

li.footer_list:hover {
  color: var(--footer-text-hover);
  background-color: var(--footer-bg-hover);
  -webkit-animation: 0.8s ease;
  animation: 0.8s ease;
}

.footer_text {
  text-align: center;
  padding-bottom: 125px;
  color: var(--footer-text);
}

.footer_text:hover {
  color: var(--footer-bg-hover);
  cursor: pointer;
}
</style>
