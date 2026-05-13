<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
        <span class="text-[#00AEEF] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{{
          t("ourTeam.hero.eye_catching_title") }}</span>
        <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-slate-900">
          {{ t("ourTeam.hero.title_line1") }} <br /><span class="text-[#00AEEF]">{{ t("ourTeam.hero.title_line2")
          }}</span>
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed">
          {{ t("ourTeam.hero.subtitle") }}
        </p>
      </div>
    </section>

    <section class="py-12 px-6 max-w-7xl mx-auto">
      <div class="flex items-center gap-4 mb-16">
        <h2 class="text-2xl font-extrabold text-slate-900">{{ t("ourTeam.executive_team.title") }}</h2>
        <div class="h-[2px] flex-1 bg-slate-100"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

          <div
            class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <img :src="BUNNA" alt="Director" class="w-full h-full object-cover" />
          </div>

          <div class="px-2">
            <h3 class="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
              t("ourTeam.executive_team.director_name") }}</h3>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px]">{{
              t("ourTeam.executive_team.director_role") }}</p>
          </div>
        </div>
        <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

          <div
            class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <img :src="SROS" alt="Director" class="w-full h-full object-cover" />
          </div>

          <div class="px-2">
            <h3 class="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
              t("ourTeam.executive_team.admin_director_name") }}</h3>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px]">{{
              t("ourTeam.executive_team.admin_director_role") }}</p>
          </div>
        </div>
        <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

          <div
            class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <img :src="SREYNICH" alt="Director" class="w-full h-full object-cover" />
          </div>

          <div class="px-2">
            <h3 class="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
              t("ourTeam.executive_team.ero_director_name") }}</h3>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px]">{{
              t("ourTeam.executive_team.ero_director_role") }}</p>
          </div>
        </div>
        <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

          <div
            class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <img :src="THAINA" alt="Director" class="w-full h-full object-cover" />
          </div>

          <div class="px-2">
            <h3 class="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
              t("ourTeam.executive_team.selection_director_name") }}</h3>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px]">{{
              t("ourTeam.executive_team.selection_director_role") }}</p>
          </div>
        </div>
        <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

          <div
            class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <img :src="LIHUY" alt="Director" class="w-full h-full object-cover" />
          </div>

          <div class="px-2">
            <h3 class="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
              t("ourTeam.executive_team.training_director_name") }}</h3>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px]">{{
              t("ourTeam.executive_team.training_director_role") }}</p>
          </div>
        </div>
        <div class="reveal group" :style="{ transitionDelay: `${i * 100}ms` }">

          <div
            class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            </div>

            <img :src="SIM" alt="Director" class="w-full h-full object-cover" />
          </div>

          <div class="px-2">
            <h3 class="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{
              t("ourTeam.executive_team.edu_director_name") }}</h3>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px]">{{
              t("ourTeam.executive_team.edu_director_role") }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal py-24 bg-slate-50 px-6 mt-20 border-y border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-extrabold text-slate-900 mb-4">{{ t("ourTeam.board.title") }}</h2>
          <p class="text-slate-500 max-w-2xl mx-auto italic">{{ t("ourTeam.board.desc") }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center gap-6">
              <div
                class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                <img :src="SOURSDEY" class="rounded-xl w-20 h-20" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-xl leading-tight">{{ t("ourTeam.board.member1_name") }}</h4>
                <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                  t("ourTeam.board.member1_role") }}</p>
              </div>
            </div>
          </div>
          <div
            class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center gap-6">
              <div
                class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                <img :src="SOURSDEY" class="rounded-xl w-20 h-20" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-xl leading-tight">{{ t("ourTeam.board.member2_name") }}</h4>
                <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                  t("ourTeam.board.member2_role") }}</p>
              </div>
            </div>
          </div>
          <div
            class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center gap-6">
              <div
                class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                <img :src="SOURSDEY" class="rounded-xl w-20 h-20" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-xl leading-tight">{{ t("ourTeam.board.member3_name") }}</h4>
                <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                  t("ourTeam.board.member3_role") }}</p>
              </div>
            </div>
          </div>
          <div
            class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center gap-6">
              <div
                class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                <img :src="SOURSDEY" class="rounded-xl w-20 h-20" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-xl leading-tight">{{ t("ourTeam.board.member4_name") }}</h4>
                <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                  t("ourTeam.board.member4_role") }}</p>
              </div>
            </div>
          </div>
          <div
            class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center gap-6">
              <div
                class="w-24 h-24 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                <img :src="SOURSDEY" class="rounded-xl w-20 h-20" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-xl leading-tight">{{ t("ourTeam.board.member5_name") }}</h4>
                <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px] mt-1">{{
                  t("ourTeam.board.member5_role") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import Footer from '@/components/common/Footer.vue';

import BUNNA from "@/assets/images/staffs/BUNNA.png";
import SROS from "@/assets/images/staffs/SROS.avif";
import SIM from "@/assets/images/staffs/SIM.png";
import SREYNICH from "@/assets/images/staffs/SREYNICH.png";
import LIHUY from "@/assets/images/staffs/LIHUY.png";
import THAINA from "@/assets/images/staffs/THAINA.png";
import SOURSDEY from "@/assets/images/staffs/SOURSDEY.jpg";

const { t } = useI18n();
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
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