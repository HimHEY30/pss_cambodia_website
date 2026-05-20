<template>
    <section class="relative px-6 py-8 lg:py-24 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="z-10 animate-fade-in-up">
          <span class="text-sky-500 font-bold uppercase tracking-wider text-sm mb-4 block animate-slide-in-left">{{ t('about.hero.eyes_catching_title') }}</span>
          <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-[#00AEEF]">
            {{ t('about.hero.title_line_01') }} <br/>
            <span class="text-slate-900">{{ t('about.hero.title_line_02') }}</span>
          </h1>
          <p class="text-lg text-slate-600 max-w-xl leading-relaxed mb-8 opacity-90">
           {{ t('about.hero.subtitle') }}
          </p>
          <div class="flex gap-4">
            <router-link to="/impact" class="bg-[#F6A240] hover:bg-orange-500 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1 active:scale-95">
              {{ t('about.hero.cta') }}
            </router-link>
          </div>
        </div>
        <div class="relative animate-fade-in" style="animation-delay: 0.3s">
          <div class="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform hover:rotate-0 rotate-3 transition-all duration-700 ease-out group">
            <img 
              src="@/assets/images/about.jpg" 
              alt="Students learning" 
              class="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-100 rounded-full -z-10 animate-float"></div>
          <div class="absolute -top-10 -left-10 w-20 h-20 bg-orange-50 rounded-full -z-10 animate-float-delayed"></div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>