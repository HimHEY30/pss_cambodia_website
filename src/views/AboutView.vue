<template>
  <div
    class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden min-h-screen">
    <HeroSection class="reveal reveal-large" />
    <MissionVision class="reveal reveal-large" />
    <ManagerQoute class="reveal reveal-large" />
    <CoreValue class="reveal reveal-large" />
    <EvaluationOfPSS class="reveal reveal-large" />
    <Policy class="reveal reveal-large" />
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue';
import HeroSection from '@/components/about/HeroSection.vue';
import MissionVision from '@/components/about/Mission&Vision.vue';
import ManagerQoute from '@/components/about/ManagerQoute.vue';
import CoreValue from '@/components/about/CoreValue.vue';
import EvaluationOfPSS from '@/components/about/EvaluationOfPSS.vue';
import Policy from '@/components/about/Policy.vue';

import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal({
  options: {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
  },
  repeat: true,
})
</script>