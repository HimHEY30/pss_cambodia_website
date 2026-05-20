<template>
  <section ref="heroSection" class="relative w-full h-screen overflow-hidden bg-[#003366]">
    <img 
      ref="heroBg"
      src="@/assets/images/bg_hero.jpg" 
      alt="Home Hero Background"
      class="absolute inset-0 w-full h-full object-cover scale-110"
    >
    
    <div class="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/40"></div>

    <div class="relative h-full px-2 sm:px-4 md:px-12 max-w-7xl mx-auto flex items-center">
      <div class="grid w-full">
        <div class="hero-content space-y-6 text-white z-10">
          
          <div class="overflow-hidden">
            <h1 class="hero-title text-shadow-lg text-5xl lg:text-7xl font-bold leading-tight opacity-0 translate-y-12">
              {{ t('home.hero.title') }}
            </h1>
          </div>

          <p class="hero-subtitle text-base sm:text-md md:text-lg leading-relaxed max-w-2xl opacity-0 translate-y-8">
            {{ t('home.hero.subtitle') }}
          </p>

          <div class="hero-cta opacity-0 translate-y-4 pt-2">
            <router-link 
              to="/get-involved" 
              class="inline-block px-8 py-4 bg-secondary text-white rounded-xl hover:bg-secondary/80 hover:scale-105 transition-all duration-300 font-bold shadow-lg shadow-secondary/20"
            >
              {{ t('home.hero.button') }}
            </router-link>
          </div>
        </div>
        
        <div class="hidden lg:block"></div>
      </div>
    </div>

    <div class="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0">
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
        <div class="w-1 h-2 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import gsap from 'gsap';

const { t } = useI18n();

const heroSection = ref(null);
const heroBg = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  // Ken Burns Effect
  gsap.to(heroBg.value, {
    scale: 1,
    duration: 10,
    ease: 'linear',
  });

  // Entrance Sequence
  tl.to('.hero-title', { opacity: 1, y: 0, duration: 1.2, delay: 0.5 })
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
    .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to('.hero-scroll', { opacity: 1, duration: 1 }, '-=0.2');
});
</script>