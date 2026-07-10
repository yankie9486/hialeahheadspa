<template>
  <main>
    <HomeBanner>
      <div
        class="col-12 d-flex flex-column justify-content-center align-items-center text-center"
        style="background-color: #1e1e1e"
      >
        <NuxtImg
          src="/images/hialeah-head-spa-logo.png"
          alt="Hialeah Head Spa"
          class="img-fluid"
          width="439"
          height="463"
        />
        <div class="d-flex flex-column flex-md-row justify-content-center pt-4 mt-5 gap-4">
          <NuxtLink :to="bookingUrl" class="btn btn-main btn-lg fw-bold mb-sm-2 mb-md-0">
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
            v-for="(item, index) in packages?.meta?.body"
            :key="index"
            :heading="item?.heading || ''"
            :sub-heading="item?.subHeading"
            :price="item?.price"
            :list="item?.list"
            :description="item?.description"
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

              <NuxtLink :to="bookingUrl" class="btn btn-lg btn-outline-light-hover-bg"
                >Book Now</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: packages } = await useAsyncData(() => queryCollection('packages').first())

const config = useRuntimeConfig();

const bookingUrl = config.public.bookingUrl;

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

const serviceItemList = packages?.value?.meta?.body.map((item: any, index: number) => ({
  position: index + 1,
  '@type': 'Service',
  name: item?.heading || '',
  description: item?.description || '',
  serviceType: 'Head Spa Treatment',
  timeRequired: `PT${item.timeRequired}M`,
  offers: {
    '@type': 'Offer',
    price: item?.price || '',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${item?.heading} Includes`,
        itemListElement: item?.list.map( (listItem: any) => {
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

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schemaServiceObject),
    },
  ],
});

useSeoMeta({
  title: 'Hialeah Head Spa | Scalp Treatments in Hialeah | Miami',
  ogTitle: 'Hialeah Head Spa | Scalp Treatments in Hialeah | Miami',
  description:
    'Experience the ultimate scalp health and relaxation at Hialeah Head Spa. Serving Hialeah and Miami with deep cleaning and rejuvenation. Book your escape today!',
  ogDescription:
    'Experience the ultimate scalp health and relaxation at Hialeah Head Spa. Serving Hialeah and Miami with deep cleaning and rejuvenation. Book your escape today!',
});
</script>

<style scoped></style>
