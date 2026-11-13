<template>
  <div>
    <div ref="topPage"></div>
    <CommonHeader />
    <div class="main-content">
      <slot />

      <CommonFooter />
      <CommonScrollUp :to-top="topPage" />
    </div>
    <GiftCardModal />
  </div>
</template>

<script lang="ts" setup>
import packages from '../../content/packages.json';
import GiftCardModal from '~/components/modals/GiftCardModal.vue';

const topPage = ref<HTMLElement | null>(null);

const config = useRuntimeConfig();

const serviceItemList = packages.map((item: any, index: number) => ({
  '@type': 'Service',
  position: index + 1,
  name: item?.heading || '',
  description: item?.description || '',
  serviceType: 'Head Spa Treatment',
  offers: {
    '@type': 'Offer',
    price: item?.price || '',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${item?.heading} Includes`,
    itemListElement: item?.list.map((listItem: any) => {
      return { '@type': 'Offer', itemOffered: { '@type': 'Service', name: listItem } };
    })
  },

}));

const schemaServiceObject = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Head Spa Services',
  itemListElement: serviceItemList

};

const schemaObject = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Hialeah Head Spa',
  image: 'https://hialeahheadspa.com/images/hialeah-head-spa-logo.png',
  url: 'https://hialeahheadspa.com',
  telephone: config.public.phoneNumber,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${config.public.address} ${config.public.address_2}`,
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
  ],
  hasOfferCatalog: schemaServiceObject
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
