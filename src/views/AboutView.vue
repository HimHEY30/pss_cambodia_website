<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">

    <section class="relative px-6 py-8 lg:py-24 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="z-10 animate-fade-in-up">
          <span class="text-sky-500 font-bold uppercase tracking-wider text-sm mb-4 block animate-slide-in-left">{{
            t('about.hero.eyes_catching_title') }}</span>
          <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-[#00AEEF]">
            {{ t('about.hero.title_line_01') }} <br />
            <span class="text-slate-900">{{ t('about.hero.title_line_02') }}</span>
          </h1>
          <p class="text-lg text-slate-600 max-w-xl leading-relaxed mb-8 opacity-90">
            {{ t('about.hero.subtitle') }}
          </p>
          <div class="flex gap-4">
            <router-link to="/impact"
              class="bg-[#F6A240] hover:bg-orange-500 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1 active:scale-95">
              {{ t('about.hero.cta') }}
            </router-link>
          </div>
        </div>
        <div class="relative animate-fade-in" style="animation-delay: 0.3s">
          <div
            class="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform hover:rotate-0 rotate-3 transition-all duration-700 ease-out group">
            <img src="@/assets/images/home_about_pss.jpg" alt="Students learning"
              class="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-110 transition-transform duration-1000" />
          </div>
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-100 rounded-full -z-10 animate-float"></div>
          <div class="absolute -top-10 -left-10 w-20 h-20 bg-orange-50 rounded-full -z-10 animate-float-delayed"></div>
        </div>
      </div>
    </section>
    <section class="reveal py-20 bg-slate-50 border-y border-slate-100 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div class="relative group">
            <div
              class="absolute -top-10 -left-6 text-9xl font-black text-sky-100/50 select-none -z-0 group-hover:text-sky-200 transition-colors">
              01</div>
            <div class="relative z-10">
              <h2 class="text-3xl font-extrabold text-[#00AEEF] mb-6 flex items-center gap-3">
                <span class="w-8 h-[2px] bg-[#00AEEF]"></span>
                {{ t('about.mission_vision.vision_title') }}
              </h2>
              <p class="text-2xl lg:text-3xl font-bold text-slate-800 leading-snug">
                {{ t('about.mission_vision.vision_desc') }}

              </p>
            </div>
          </div>

          <div class="relative group">
            <div
              class="absolute -top-10 -left-6 text-9xl font-black text-sky-100/50 select-none -z-0 group-hover:text-sky-200 transition-colors">
              02</div>
            <div class="relative z-10">
              <h2 class="text-3xl font-extrabold text-[#00AEEF] mb-6 flex items-center gap-3">
                <span class="w-8 h-[2px] bg-[#00AEEF]"></span>
                {{ t('about.mission_vision.mission_title') }}
              </h2>
              <p class="text-lg text-slate-600 leading-relaxed mb-6">
                {{ t('about.mission_vision.mission_desc') }}
              </p>
              <div class="grid gap-3">
                <div
                  class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-sky-300 hover:translate-x-2 transition-all duration-300"
                  :style="{ transitionDelay: `${i * 100}ms` }">
                  <div class="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-slate-700">{{ t('about.mission_vision.mission_point1') }}</p>
                </div>
                <div
                  class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-sky-300 hover:translate-x-2 transition-all duration-300"
                  :style="{ transitionDelay: `${i * 100}ms` }">
                  <div class="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-slate-700">{{ t('about.mission_vision.mission_point2') }}</p>
                </div>
                <div
                  class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-sky-300 hover:translate-x-2 transition-all duration-300"
                  :style="{ transitionDelay: `${i * 100}ms` }">
                  <div class="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-slate-700">{{ t('about.mission_vision.mission_point3') }}</p>
                </div>
                <div
                  class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-sky-300 hover:translate-x-2 transition-all duration-300"
                  :style="{ transitionDelay: `${i * 100}ms` }">
                  <div class="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-slate-700">{{ t('about.mission_vision.mission_point4') }}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="reveal py-24 px-6 overflow-hidden">
      <div
        class="max-w-4xl mx-auto bg-white p-10 lg:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-sky-50 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[5rem] -z-0"></div>

        <div class="relative z-10">
          <svg class="text-sky-200 w-20 h-20 absolute -top-10 -left-10 opacity-50" fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.017 21H3.017Z" />
          </svg>

          <p class="text-2xl lg:text-4xl font-medium text-slate-700 italic leading-relaxed mb-12 relative z-10">
            {{ t('about.director_message.message') }}
          </p>
          <div class="flex items-center gap-6">
            <div class="relative">
              <div class="w-20 h-20 rounded-full overflow-hidden ring-4 ring-sky-100 shadow-lg">
                <img src="@/assets/images/staffs/BUNNA - SQAURE.png" alt="Director" />
              </div>
              <div
                class="absolute -bottom-2 -right-2 bg-orange-400 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                <Sparkles class="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h4 class="font-bold text-2xl text-slate-900">{{ t('about.director_message.director_name') }}</h4>
              <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">{{ t('about.director_message.signature') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal py-20 max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h3 class="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{{ t('about.core_values.eye_catching_title') }}</h3>
        <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900">
          {{ t('about.core_values.title') }}
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(val, i) in value_icons" :key="i"
          class="p-10 rounded-[2.5rem] bg-white border border-slate-100 text-center hover:border-sky-300 hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,181,226,0.15)] group">
          <div
            class="w-20 h-20 bg-sky-50 group-hover:bg-[#00AEEF] rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <component :is="val.icon" class="text-sky-500 group-hover:text-white w-10 h-10 transition-colors" />
          </div>
          <h4 class="text-2xl font-bold mb-4 text-slate-900">{{ t(`about.core_values.value${i + 1}_title`) }}</h4>
          <p class="text-slate-500 leading-relaxed">{{ t(`about.core_values.value${i + 1}_desc`) }}</p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#00AEEF] text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z" fill="white"></path>
        </svg>
      </div>

      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <h2 class="text-4xl font-extrabold mb-20 text-center">{{t('about.journey.title')}}</h2>
        <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
          <div class="reveal mb-16 relative pl-10">
            <div
              class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
              <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year1`) }}</span>
              <h4 class="text-2xl font-bold">{{ t(`about.journey.event1_title`) }}</h4>
            </div>
            <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event1`) }}</p>
          </div>
        </div>
        <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
          <div class="reveal mb-16 relative pl-10">
            <div
              class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
              <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year2`) }}</span>
              <h4 class="text-2xl font-bold">{{ t(`about.journey.event2_title`) }}</h4>
            </div>
            <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event2`) }}</p>
          </div>
        </div>
        <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
          <div class="reveal mb-16 relative pl-10">
            <div
              class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
              <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year3`) }}</span>
              <h4 class="text-2xl font-bold underline"> <a :href="t(`about.journey.event3_link`)" target="_blank"">{{ t(`about.journey.event3_title`) }}</a></h4>
            </div>
            <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event3`) }}</p>
          </div>
        </div>
        <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
          <div class="reveal mb-16 relative pl-10">
            <div
              class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
              <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year4`) }}</span>
              <h4 class="text-2xl font-bold">{{ t(`about.journey.event4_title`) }}</h4>
            </div>
            <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event4`) }}</p>
          </div>
        </div>
        <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
          <div class="reveal mb-16 relative pl-10">
            <div
              class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
              <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year5`) }}</span>
              <h4 class="text-2xl font-bold">{{ t(`about.journey.event5_title`) }}</h4>
            </div>
            <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event5`) }}</p>
          </div>
        </div>
        <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
          <div class="reveal mb-16 relative pl-10">
            <div
              class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
              <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year6`) }}</span>
              <h4 class="text-2xl font-bold"> {{ t(`about.journey.event6_title`) }}</h4>
            </div>
            <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event6`) }}</p>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue';
import { onMounted } from 'vue';
import { Users, ShieldCheck, Heart, Sparkles } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const value_icons = [
  { icon: ShieldCheck },
  { icon: Sparkles },
  { icon: Heart },
  { icon: Users }
];


// Simple Intersection Observer for scroll animations
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* Scroll Animation Styles */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Keyframe Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-fade-in {
  animation: fadeInUp 1.2s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 8s ease-in-out infinite 1s;
}

/* Custom smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>