<template>
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
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>