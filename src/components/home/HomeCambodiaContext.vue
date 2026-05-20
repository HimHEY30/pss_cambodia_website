<template>
  <section ref="contextSection" class="py-20 bg-slate-50 font-sans overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <div class="mb-12 animate-item opacity-0">
        <div class="flex items-center gap-3 mb-3">
          <span class="h-px w-8 bg-secondary"></span>
          <h2 class="text-xs font-bold tracking-[0.2em] text-secondary uppercase">
            {{ t('home.context.eye_catching_title') }}
          </h2>
        </div>
        <h3 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {{ t('home.context.title') }}
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch">
        
        <div v-for="(item, index) in standardStats" :key="index" 
          class="stat-card group relative md:col-span-2 p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 opacity-0 flex flex-col justify-between overflow-hidden min-h-[200px]">
          
          <div>
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <component :is="item.icon" :size="24" stroke-width="1.5" />
            </div>
            <div class="text-4xl font-black text-slate-900 tracking-tighter mb-1">{{ t(item.value) }}</div>
            <p class="text-slate-600 text-sm font-semibold leading-snug max-w-[200px]">
              {{ t(item.label) }}
            </p>
          </div>

          <div class="absolute bottom-4 right-6 text-right">
            <span class="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
              {{ t(item.source) }}
            </span>
          </div>
        </div>

        <div class="stat-card group relative md:col-span-6 p-8 md:p-10 rounded-[2rem] bg-[#0F172A] shadow-2xl shadow-slate-900/20 opacity-0 flex flex-col lg:flex-row items-center gap-12 overflow-hidden border border-slate-800">
          
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-0"></div>

          <div class="relative z-10 flex-shrink-0 text-center lg:text-left">
            <div class="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-widest mb-4">
               {{t('home.context.s4_eyes_catching_title')}}
            </div>
            <div class="text-6xl font-black text-white tracking-tighter mb-2">{{ t('home.context.s4_value') }}</div>
            <div class="text-sm font-bold text-primary uppercase tracking-widest mb-4">{{ t('home.context.s4_title') }}</div>
            <p class="text-sm text-slate-400 max-w-[280px] leading-relaxed">
              {{ t('home.context.s4_label') }}
            </p>
          </div>

          <div class="relative z-10 flex-grow w-full bg-slate-800/40 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-md">
            <div class="flex flex-col gap-8">
              
              <div class="space-y-3">
                <div class="flex justify-between items-end">
                  <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ t('home.context.s4_men') }}</span>
                  <span class="text-xl font-black text-white">71%</span>
                </div>
                <div class="h-4 w-full bg-slate-700/50 rounded-full overflow-hidden">
                  <div class="h-full bg-secondary stem-bar-grow shadow-[0_0_20px_rgba(242,193,46,0.3)]" style="width: 71%"></div>
                </div>
              </div>

              <div class="relative h-px w-full bg-slate-700 flex items-center justify-center">
                <div class="absolute bg-[#1e293b] border border-slate-700 px-4 py-1 rounded-full text-[10px] font-black text-secondary uppercase tracking-tighter">
                   {{ t('home.context.s4_gap') }} 
                </div>
              </div>

              <div class="space-y-3">
                <div class="flex justify-between items-end">
                  <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ t('home.context.s4_women') }}</span>
                  <span class="text-xl font-black text-white">29%</span>
                </div>
                <div class="h-4 w-full bg-slate-700/50 rounded-full overflow-hidden">
                  <div class="h-full bg-primary stem-bar-grow shadow-[0_0_20px_rgba(59,130,246,0.3)]" style="width: 29%"></div>
                </div>
              </div>

            </div>
          </div>

          <div class="absolute bottom-4 right-8 z-10">
            <span class="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
              {{ t('home.context.s4_source') }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { MapPinIcon, TrendingDownIcon, GraduationCapIcon, MicroscopeIcon } from 'lucide-vue-next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const { t } = useI18n();
gsap.registerPlugin(ScrollTrigger);
const contextSection = ref(null);

const standardStats = [
  { icon: MapPinIcon, value: 'home.context.s1_value', label: 'home.context.s1_label', source: 'home.context.s1_source' },
  { icon: TrendingDownIcon, value: 'home.context.s2_value', label: 'home.context.s2_label', source: 'home.context.s2_source' },
  { icon: GraduationCapIcon, value: 'home.context.s3_value', label: 'home.context.s3_label', source: 'home.context.s3_source' }
];

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.to('.animate-item', {
      opacity: 1, y: 0, duration: 0.3,
      scrollTrigger: { trigger: '.animate-item', start: 'top 90%' }
    });

    gsap.to('.stat-card', {
      opacity: 1, duration: 0.3, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.stat-card', start: 'top 85%' }
    });

    gsap.from('.stem-bar-grow', {
      width: 0, duration: 0.5, stagger: 0.3, ease: 'expo.out',
      scrollTrigger: { trigger: '.stat-card', start: 'top 80%' }
    });
  }, contextSection.value);
});
</script>

<style scoped>
.stat-card {
  backface-visibility: hidden;
}
/* Smoother glow for the bars */
.bg-secondary {
  background-color: #F2C12E; /* Ensure this matches your secondary brand color */
}
</style>