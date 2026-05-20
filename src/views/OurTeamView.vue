<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    <BoardDirector class="reveal reveal-large"></BoardDirector>
    <ExecutiveTeam class="reveal reveal-large"></ExecutiveTeam>
    <Footer></Footer>
  </div>
</template>

<script setup>

import ExecutiveTeam from '@/components/team/ExecutiveTeam.vue';
import BoardDirector from '@/components/team/BoardDirector.vue';
import Footer from '@/components/common/Footer.vue';

import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal({
  options: {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
  },
  repeat: true,
})
</script>