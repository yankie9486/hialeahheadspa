<template>
  <main>
    <HomeBanner>
      <div
        class="col-12 d-flex flex-column justify-content-center align-items-center text-center"
        style="background-color: #222222"
      >
        <NuxtImg
          src="/images/haines-city-head-spa-logo.png"
          alt="Haines City Head Spa"
          width="439"
          height="463"
        />
        <div class="d-flex flex-column flex-md-row justify-content-center pt-4 mt-5 gap-4">
          <NuxtLink
            to="https://hainescityheadspa.glossgenius.com"
            class="btn main-btn btn-lg fw-bold mb-sm-2 mb-md-0"
          >
            Online Booking
          </NuxtLink>
          <NuxtLink
            to="contact"
            class="btn btn-outline-light btn-lg d-flex align-items-center justify-content-center"
          >
            More Information
          </NuxtLink>
        </div>
      </div>
    </HomeBanner>

    <section id="services" class="services bg-light-gray">
      <div class="container">
        <div class="row">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="col-sm-12 col-md-6 col-lg-4 mt-sm-0 mt-md-0 mt-lg-0 mb-5 mb-md-3 mb-lg-0"
          >
            <Card :icon="service.icon" :title="service.title" :body="service.body" />
          </div>
        </div>
      </div>
    </section>

    <section id="experiences" class="prices">
      <div class="container">
        <div class="row">
          <h2 class="heading">Experiences</h2>
          <div class="heading-underline">
            <div class="line" />
          </div>
        </div>
        <div class="row align-items-stretch">
          <ServiceBox
            v-for="(item, index) in packages"
            :key="index"
            :index="index"
            :heading="item.heading"
            :sub-heading="item.subHeading"
            :price="item.price"
            :list="item.list"
            :description="item.description"
            :image="item.image"
            :price-plus="item.pricePlus"
          />
        </div>
      </div>
    </section>
    <section id="booking" class="booking bg-purple">
      <div class="container">
        <div class="row">
          <div
            class="col-12 wow fadeInUp"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInUp"
          >
            <div class="booking_text text-center">
              <h6 class="heading">Ready to Unwind?</h6>
              <h2 class="main-heading mb-3">Book your personalized Head Spa Today!</h2>
              <p class="sub-heading">
                Discover a new level of care that leaves you glowing from inside out.
              </p>
              <NuxtLink to="/booking" class="btn btn-lg main-btn">Book Now</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components';

const services = [
  {
    icon: 'la-hand-holding-heart',
    title: '1. Scalp Analysis',
    body: 'We begin with a personalized scalp and hair evaluation using professional tools to understand your unique needs. This helps us identify build up , dryness, irritation, or imbalances.',
  },
  {
    icon: 'la-spa',
    title: '2. Treatment Plan',
    body: 'Based on your scalp condition, we create a tailored care routine using targeted, all-natural products and techniques. Every treatment is designed to restore balance and boost hair wellness.',
  },
  {
    icon: 'la-magic',
    title: '3. Head Spa Ritual',
    body: "Relax as we guide you through a luxurious, multi-step experience that nourishes and revitalizes your scalp and senses. You'll leave feeling refreshed, recharged, and glowing.",
  },
];

const packages = [
  {
    heading: 'Refresh Head Spa',
    subHeading: '45 minutes',
    price: 65,
    pricePlus: false,
    image: 'images/services/refresh-head-spa.jpg',
    list: [
      'Deep cleansing shampoo',
      'Relaxing scalp massage',
      'Hydrating Mask',
      'Neck and shoulder massage',
      'Herbal hot towel wrap',
    ],
    description:
      'Indulge in a refreshing head spa session including, deep cleansing shampoo, relaxing scalp massage, hydrating mask, neck and shoulder massage, and a herbal hot towel wrap. Perfect for first timers or those on short time. ',
  },
  {
    heading: 'Signature Head Spa',
    subHeading: '60 minutes',
    price: 85,
    pricePlus: false,
    image: 'images/services/signature-headspa.jpg',
    list: [
      'Includes all Refresh Head Spa services',
      'Advanced scalp exfoliation',
      'Custom aromatherapy oils',
      'Deep hair conditioning treatment',
    ],
    description:
      'Our most popular session Includes all Refresh Head Spa services Advanced scalp exfoliation Custom aromatherapy oils Deep hair conditioning treatment',
  },
  {
    heading: 'Luxury Head Spa',
    subHeading: '75 minutes',
    price: 130,
    pricePlus: false,
    image: 'images/services/luxury-headspa.jpg',
    list: [
      'Includes all Signature Head Spa services',
      'Warm essential oil scalp ritual',
      'Gentle facial message & jade rolling',
      'Silk hair serum finish',
      'Includes blow out ',
    ],
    description:
      'Unwind in absolut luxury Includes all Signature Head Spa services Warm essential oil scalp ritual Gentle facial massage & jade rolling Silk hair serum finish Includes blow out ',
  },
];

const schemaServiceObject = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Head Spa Services',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Refresh Head Spa',
      description: 'Perfect for first-timers or those short on time',
      serviceType: 'Head Spa Treatment',
      timeRequired: 'PT45M',
      offers: {
        '@type': 'Offer',
        price: '65',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Refresh Head Spa Includes',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep cleansing shampoo' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Relaxing scalp massage' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hydrating mask' } },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Neck and shoulder massage' },
          },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Herbal hot towel wrap' } },
        ],
      },
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Signature Head Spa',
      description: 'Our most popular treatment for total renewal',
      serviceType: 'Head Spa Treatment',
      timeRequired: 'PT60M',
      offers: {
        '@type': 'Offer',
        price: '85',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Signature Head Spa Includes',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'All Refresh Head Spa services' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Advanced scalp exfoliation' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Custom aromatherapy oils' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Deep hair conditioning treatment' },
          },
        ],
      },
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Luxury Head Spa',
      description: 'Unwind in absolute luxury',
      serviceType: 'Head Spa Treatment',
      timeRequired: 'PT75M',
      offers: {
        '@type': 'Offer',
        price: '130',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Luxury Head Spa Includes',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'All Signature Head Spa services' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Warm essential oil scalp ritual' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Gentle facial cleansing & jade rolling' },
          },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Silk hair serum finish' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blow out included' } },
        ],
      },
    },
  ],
};

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schemaServiceObject),
    },
  ],
});

useSeoMeta({
  title: 'Haines City Head Spa | Scalp Treatments in Davenport & Haines City',
  ogTitle: 'Haines City Head Spa | Scalp Treatments in Davenport & Haines City',
  description:
    'Experience the ultimate scalp health and relaxation at Haines City Head Spa. Serving Davenport and Haines City with deep cleaning and rejuvenation. Book your escape today!',
  ogDescription:
    'Experience the ultimate scalp health and relaxation at Haines City Head Spa. Serving Davenport and Haines City with deep cleaning and rejuvenation. Book your escape today!',
});
</script>

<style scoped></style>
