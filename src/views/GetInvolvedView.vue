<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    <GetInvolvedHero />
    <GetInvolvedQRCode />
    <GetInvolvedPathSection />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue'
import GetInvolvedHero from '@/components/get-involved/GetInvolvedHero.vue'
import GetInvolvedQRCode from '@/components/get-involved/GetInvolvedQRCode.vue'
import GetInvolvedPathSection from '@/components/get-involved/GetInvolvedPathSection.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>
