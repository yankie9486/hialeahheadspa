<template>
  <div>
    <div ref="topPage"></div>
    <CommonHeader />
    <div class="main-content">
      <slot />

      <CommonFooter />
      <CommonScrollUp :to-top="topPage" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const topPage = ref<HTMLElement | null>(null);
const config = useRuntimeConfig();
const schemaObject = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Hialeah Head Spa',
  image: 'https://hainescityheadspa.com/images/haines-city-head-spa-logo.png',
  url: 'https://hainescityheadspa.com',
  telephone: config.public.phoneNumber,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${config.public.address} ${config.public.address_2}` ,
    addressLocality: config.public.city,
    addressRegion: config.public.state,
    postalCode: config.public.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.156512,
    longitude: -81.6407979,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '18:00',
      byAppointmentOnly: true,
    },
  ],
  sameAs: [
    config.public.socialMedia.instagram,
    config.public.socialMedia.tiktok,
  ]
};
useHead({
  script: [
    {
      id: 'head-spa-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schemaObject),
    },
  ],
});
</script>

<style></style>
