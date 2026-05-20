<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden min-h-screen">
    <HeroSection class="reveal" />
    <MissionVision class="reveal" />
    <ManagerQoute class="reveal" />
    <CoreValue class="reveal"/>
    <EvaluationOfPSS class="reveal" />
    <Policy class="reveal" />
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

import { onMounted, onUnmounted, nextTick } from 'vue';
let observer = null;

onMounted(async () => {
  // nextTick ensures the child components are fully rendered in the DOM
  await nextTick();

  const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the component is visible
    rootMargin: '0px 0px -100px 0px' // Offset to trigger slightly before it hits the bottom
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // OPTIONAL: Remove the comment below if you want the animation 
        // to repeat every time you scroll back up and down.
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll('.reveal');
  targets.forEach((el) => observer.observe(el));
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
/* Base state: Hidden and shifted down */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  /* Specify exact properties for better performance on mobile */
  transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), 
              transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform; /* Tells browser to optimize these */
}

/* Active state: Visible and at original position */
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Custom smooth scroll behavior for the whole page */
:global(html) {
  scroll-behavior: smooth;
}
</style>