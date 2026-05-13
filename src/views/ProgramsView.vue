<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">

    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
        <span class="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4 block">{{
          t("programs.hero.eye_catching_title") }}</span>
        <h1 class="text-4xl lg:text-6xl font-extrabold leading-tight mb-8 text-slate-900">
          {{ t("programs.hero.title_line1") }} <span class="text-[#00AEEF]">{{ t("programs.hero.title_line2") }}</span>
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed">
          {{ t("programs.hero.subtitle") }}
        </p>
      </div>
    </section>

    <section class="py-12 px-6 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-8">
        <div
          class="reveal group bg-white border border-slate-100 p-8 lg:p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-sky-200 transition-all duration-500">
          <div
            class="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00AEEF] transition-colors">
            <svg class="w-8 h-8 text-[#00AEEF] group-hover:text-white" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-extrabold text-slate-900 mb-6">{{ t("programs.majors.major1_title") }}</h2>
          <p class="text-slate-600 mb-8 leading-relaxed">
            {{ t("programs.majors.major1_desc") }}
          </p>
          <div class="space-y-3">
            <p class="text-xs font-black uppercase tracking-widest text-sky-500 mb-4">{{
              t("programs.majors.major1_career_path") }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-4 py-2 bg-slate-50 rounded-full text-sm font-semibold text-slate-700 border border-slate-100">
                {{ t("programs.majors.major1_career1") }}
              </span>
              <span
                class="px-4 py-2 bg-slate-50 rounded-full text-sm font-semibold text-slate-700 border border-slate-100">
                {{ t("programs.majors.major1_career2") }}
              </span>
              <span
                class="px-4 py-2 bg-slate-50 rounded-full text-sm font-semibold text-slate-700 border border-slate-100">
                {{ t("programs.majors.major1_career3") }}
              </span>
              <span
                class="px-4 py-2 bg-slate-50 rounded-full text-sm font-semibold text-slate-700 border border-slate-100">
                {{ t("programs.majors.major1_career4") }}
              </span>
              <a :href="WEB_PROGRAM" target="_blank"
                class="bg-[#F6A240] mt-12 hover:bg-orange-500 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1 active:scale-95">WEB
                Programming Curriculumn</a>
            </div>
          </div>
        </div>

        <div
          class="reveal group bg-[#00AEEF] p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-white hover:-translate-y-2 transition-all duration-500">
          <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01">
              </path>
            </svg>
          </div>
          <h2 class="text-3xl font-extrabold mb-6">{{ t("programs.majors.major2_title") }}</h2>
          <p class="text-sky-50 mb-8 leading-relaxed">
            {{ t("programs.majors.major2_desc") }}
          </p>
          <div class="space-y-3">
            <p class="text-xs font-black uppercase tracking-widest text-sky-200 mb-4">{{
              t("programs.majors.major2_career_path") }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20 backdrop-blur-md">
                {{ t("programs.majors.major2_career1") }}
              </span>
              <span
                class="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20 backdrop-blur-md">
                {{ t("programs.majors.major2_career2") }}
              </span>
              <span
                class="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20 backdrop-blur-md">
                {{ t("programs.majors.major2_career3") }}
              </span>
              <span
                class="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20 backdrop-blur-md">
                {{ t("programs.majors.major2_career4") }}
              </span>
              <span
                class="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20 backdrop-blur-md">
                {{ t("programs.majors.major2_career5") }}
              </span>
              <span
                class="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20 backdrop-blur-md">
                {{ t("programs.majors.major2_career6") }}
              </span>
              <a :href="SNAC_PROGRAM" target="_blank"
                class="bg-[#F6A240] mt-12 hover:bg-orange-500 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1 active:scale-95">WEB
                Programming Curriculumn</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 class="text-4xl leading-14 font-extrabold text-slate-900 mb-6">
              {{ t("programs.subject_support.english_pl") }}
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              {{ t("programs.subject_support.english_pl_desc") }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h4 class="font-bold text-[#00AEEF] mb-2">{{ t("programs.subject_support.english_bage_title") }}</h4>
              <p class="text-xs text-slate-500">{{ t("programs.subject_support.english_bage_desc") }}</p>
            </div>
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h4 class="font-bold text-[#F6A240] mb-2">{{ t("programs.subject_support.pl_bage_title") }}</h4>
              <p class="text-xs text-slate-500">{{ t("programs.subject_support.pl_bage_desc") }}</p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 bg-[#1A1A1B] text-white p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div class="relative z-10">
              <h3 class="text-2xl font-bold mb-4">{{ t("programs.subject_support.metoring_title") }}</h3>
              <p class="text-slate-400 max-w-md leading-relaxed mb-6">
                {{ t("programs.subject_support.metoring_desc") }}
              </p>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-[#00AEEF]"></div>
                <div class="w-8 h-8 rounded-full bg-white/20"></div>
                <div class="w-8 h-8 rounded-full bg-white/10"></div>
                <span class="text-xs font-bold uppercase tracking-widest ml-2 text-sky-400"> {{
                  t("programs.subject_support.metoring_highlight") }}</span>
              </div>
            </div>
            <div
              class="absolute right-0 bottom-0 w-48 h-48 bg-[#00AEEF] opacity-10 rounded-tl-full group-hover:scale-110 transition-transform duration-700">
            </div>
          </div>
          <div class="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-center">
            <h3 class="text-xl font-bold mb-3">{{ t("programs.subject_support.employment_title") }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              {{ t("programs.subject_support.employment_desc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal py-24 px-6 max-w-7xl mx-auto">
      <div class="bg-slate-900 rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#00AEEF] rounded-full opacity-20 blur-3xl"></div>
        <div class="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 class="text-4xl font-extrabold mb-6">{{ t("programs.selection.process_title") }}</h2>
            <p class="text-slate-400 text-lg mb-8 leading-relaxed">
              {{ t("programs.selection.process_desc") }}
            </p>
            <div class="inline-flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div class="text-3xl font-black text-[#F6A240]">{{ t("programs.selection.target_value") }}</div>
              <div class="text-sm font-bold leading-tight text-slate-300">{{ t("programs.selection.target_label") }}
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex items-center gap-6 group">
              <div
                class="w-12 h-12 rounded-full border-2 border-[#00AEEF] flex items-center justify-center font-black text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                1
              </div>
              <p class="text-xl font-bold">{{ t("programs.selection.step1") }}</p>
            </div>
            <div class="flex items-center gap-6 group">
              <div
                class="w-12 h-12 rounded-full border-2 border-[#00AEEF] flex items-center justify-center font-black text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                2
              </div>
              <p class="text-xl font-bold">{{ t("programs.selection.step2") }}</p>
            </div>
            <div class="flex items-center gap-6 group">
              <div
                class="w-12 h-12 rounded-full border-2 border-[#00AEEF] flex items-center justify-center font-black text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                3
              </div>
              <p class="text-xl font-bold">{{ t("programs.selection.step3") }}</p>
            </div>
            <div class="flex items-center gap-6 group">
              <div
                class="w-12 h-12 rounded-full border-2 border-[#00AEEF] flex items-center justify-center font-black text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                4
              </div>
              <p class="text-xl font-bold">{{ t("programs.selection.step4") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-slate-900 mb-4">{{ t("programs.life_support.title") }}</h2>
        <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">{{ t("programs.life_support.desc") }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="reveal bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
          <div class="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-[#F6A240]">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ t("programs.life_support.extra_course_title") }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ t("programs.life_support.extra_course_desc") }}</p>
        </div>

        <div class="reveal bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100"
          style="transition-delay: 100ms">
          <div class="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-[#00AEEF]">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ t("programs.life_support.subsistence_title") }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t("programs.life_support.subsistence_desc") }}</p>
        </div>

        <div class="reveal bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100"
          style="transition-delay: 200ms">
          <div class="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ t("programs.life_support.health_title") }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t("programs.life_support.health_desc") }}</p>
        </div>
      </div>
    </section>

    <section class="reveal py-20 px-6">
      <div class="max-w-4xl mx-auto bg-[#F6A240] p-12 rounded-[3rem] text-white text-center shadow-2xl">
        <h2 class="text-3xl font-extrabold mb-4">{{ t("programs.join_us.title") }}</h2>
        <p class="mb-8 opacity-90 text-lg">{{ t("programs.join_us.desc") }}</p>
        <router-link to="/contact"
          class="bg-white text-[#F6A240] px-10 py-4 rounded-md font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
          {{ t("programs.join_us.cta") }}
        </router-link>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue';
import WEB_PROGRAM from "@/assets/doc/PSS_2027_Curriculum_WEP.pdf";
import SNAC_PROGRAM from "@/assets/doc/PSS_2027_Curriculum_SNAC.pdf";
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

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

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}
</style>