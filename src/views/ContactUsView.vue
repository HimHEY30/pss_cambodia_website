<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    <ContactHero />

    <section class="reveal py-8 md:py-12 px-6 max-w-7xl mx-auto mb-12 md:mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
        <ContactDetails />
        <ContactMap />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue'
import ContactHero from '@/components/contact/ContactHero.vue'
import ContactDetails from '@/components/contact/ContactDetails.vue'
import ContactMap from '@/components/contact/ContactMap.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>
