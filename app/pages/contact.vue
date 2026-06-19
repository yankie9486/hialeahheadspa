<script setup lang="ts"></script>

<template>
  <main>
    <HomeBanner>
      <div
        class="col-12 d-flex flex-column justify-content-center align-items-center"
        style="background-color: #1e1e1e"
      >
      <NuxtImg
          src="/images/hialeah-head-spa-logo.png"
          alt="Hialeah Head Spa"
          class=" img-fluid"
          width="439"
          height="463"
        />
      </div>
    </HomeBanner>

    <section id="booking">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 form-outer ml-auto mr-auto mt-5">
            <h1 class="main-heading text-grey text-center">Contact</h1>
            <div class="col-12 d-flex flex-column justify-content-center align-items-center mt-4">
              <div class="col-12 col-md-6 col-lg-6">
                <AppForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact-content" class="contact-content">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 mt-sm-0 mt-md-0 mt-lg-0 mb-5 mb-md-3 mb-lg-0">
            <Card icon="la-map-marked" title="Where We Are" body="">
              <address class="card-text mb-3">
                3212 Nadine Rd Suite 4,<br />
                Davenport, FL 33837
              </address>
            </Card>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 mt-5 mt-md-0 mt-lg-0 mb-5 mb-md-0 mb-lg-0">
            <Card icon="la-envelope-open-text" title="Call" body="">
              <p class="card-text mb-3">
                <a href="tel:(863)326-2211">(863) 326-2211</a>
              </p>
            </Card>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4 mt-5 mt-md-5 mt-lg-0">
            <Card icon="la-history" title="Opening Hours" body="">
              <p class="card-text mb-3">By Appointment Only</p>
              <br />
            </Card>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
