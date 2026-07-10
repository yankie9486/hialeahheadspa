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
    latitude: config.public.geo.latitude,
    longitude: config.public.geo.longitude,
  },
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "19:30"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "09:00",
    "closes": "16:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Sunday",
    "opens": "09:00",
    "closes": "14:00"
  }

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
