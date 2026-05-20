<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    <HomeImpact />
    <ImpactStories />
    <ImpactAlumniGrid />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue'
import HomeImpact from '@/components/home/HomeImpact.vue'
import ImpactStories from '@/components/impact/ImpactStories.vue'
import ImpactAlumniGrid from '@/components/impact/ImpactAlumniGrid.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>
