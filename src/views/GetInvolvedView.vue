<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">

    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
        <span class="text-[#F6A240] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{{
          t("getInvolved.hero.eyes_catching_title") }}</span>
        <h1 class="text-5xl lg:text-7xl font-extrabold leading-24 mb-8 text-slate-900">{{
          t("getInvolved.hero.title_line1") }} <br /><span class="text-[#00AEEF]">{{ t("getInvolved.hero.title_line2")
            }}</span>
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed">
          {{ t("getInvolved.hero.subtitle") }}
        </p>
      </div>
    </section>

    <section class="reveal py-12 px-6 max-w-5xl mx-auto">
      <div
        class="bg-slate-900 rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
        <div class="absolute -top-20 -left-20 w-64 h-64 bg-[#00AEEF] rounded-full opacity-20 blur-3xl"></div>

        <div class="lg:w-1/2 relative z-10 text-center lg:text-left">
          <h2 class="text-3xl font-extrabold mb-6"> {{ t("getInvolved.qr.title") }}</h2>
          <p class="text-slate-400 mb-8 leading-relaxed">
            {{ t("getInvolved.qr.subtitle") }}
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div class="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p class="text-sm font-medium">{{ t("getInvolved.qr.confirm.option_1") }}</p>
            </div>
            <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div class="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-sm font-medium">{{ t("getInvolved.qr.confirm.option_2") }}</p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 flex flex-col items-center">
          <div
            class="bg-white p-6 rounded-[2rem] shadow-2xl relative group transition-transform hover:scale-105 duration-500">
            <div
              class="w-64 h-64 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
              <img src="@/assets/images/QR.png" alt="KHQR Code" class="w-full h-full opacity-80" />
            </div>
            <div class="mt-4 flex justify-center">
              <span class="text-slate-900 font-black tracking-tighter text-xl">PSS Cambodia KH<span
                  class="text-red-600">QR</span></span>
            </div>
          </div>
          <p class="text-slate-500 text-xs mt-6 uppercase font-bold tracking-widest">{{
            t("getInvolved.qr.account_number") }}</p>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-slate-900 mb-4">{{ t("getInvolved.path_of_donation.title") }}</h2>
        <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">{{
          t("getInvolved.path_of_donation.subtitle") }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="reveal bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-xl transition-all group"
          :style="{ transitionDelay: `${i * 100}ms` }">
          <div
            class="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00AEEF] transition-colors">
            <component :is="BookOpen" class="w-7 h-7 text-[#00AEEF] group-hover:text-white" />
          </div>
          <h3 class="text-xl font-bold mb-2 text-slate-900">{{ t("getInvolved.path_of_donation.training.label") }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t("getInvolved.path_of_donation.training.desc") }}</p>
          <div class="mt-6 pt-6 border-t border-slate-50">
            <span class="text-2xl font-black text-slate-900">{{ t("getInvolved.path_of_donation.training.value") }}</span>
            <span class="text-xs font-bold text-slate-400 ml-2">{{ t("getInvolved.path_of_donation.training.value_desc") }}</span>
          </div>
        </div>
        <div class="reveal bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-xl transition-all group"
          :style="{ transitionDelay: `${i * 100}ms` }">
          <div
            class="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00AEEF] transition-colors">
            <component :is="Home" class="w-7 h-7 text-[#00AEEF] group-hover:text-white" />
          </div>
          <h3 class="text-xl font-bold mb-2 text-slate-900">{{ t("getInvolved.path_of_donation.food_house.label") }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t("getInvolved.path_of_donation.food_house.desc") }}</p>
          <div class="mt-6 pt-6 border-t border-slate-50">
            <span class="text-2xl font-black text-slate-900">{{ t("getInvolved.path_of_donation.food_house.value") }}</span>
            <span class="text-xs font-bold text-slate-400 ml-2">{{ t("getInvolved.path_of_donation.food_house.value_desc") }}</span>
          </div>
        </div>
        <div class="reveal bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-xl transition-all group"
          :style="{ transitionDelay: `${i * 100}ms` }">
          <div
            class="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00AEEF] transition-colors">
            <component :is="Monitor" class="w-7 h-7 text-[#00AEEF] group-hover:text-white" />
          </div>
          <h3 class="text-xl font-bold mb-2 text-slate-900">{{ t("getInvolved.path_of_donation.tech_tools.label") }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t("getInvolved.path_of_donation.tech_tools.desc") }}</p>
          <div class="mt-6 pt-6 border-t border-slate-50">
            <span class="text-2xl font-black text-slate-900">{{ t("getInvolved.path_of_donation.tech_tools.value") }}</span>
            <span class="text-xs font-bold text-slate-400 ml-2">{{ t("getInvolved.path_of_donation.tech_tools.value_desc") }}</span>
          </div>
        </div>
        <div class="reveal bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-xl transition-all group"
          :style="{ transitionDelay: `${i * 100}ms` }">
          <div
            class="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00AEEF] transition-colors">
            <component :is="Heart" class="w-7 h-7 text-[#00AEEF] group-hover:text-white" />
          </div>
          <h3 class="text-xl font-bold mb-2 text-slate-900">{{ t("getInvolved.path_of_donation.health_support.label") }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t("getInvolved.path_of_donation.health_support.desc") }}</p>
          <div class="mt-6 pt-6 border-t border-slate-50">
            <span class="text-2xl font-black text-slate-900">{{ t("getInvolved.path_of_donation.health_support.value") }}</span>
            <span class="text-xs font-bold text-slate-400 ml-2">{{ t("getInvolved.path_of_donation.health_support.value_desc") }}</span>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-sky-50 p-8 rounded-[2.5rem] text-center border border-sky-100 reveal">
        <p class="text-slate-700 font-medium">
          {{ t("getInvolved.path_of_donation.total_budget") }}
        </p>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { onMounted } from 'vue';
import { BookOpen, Home, Heart, Monitor } from 'lucide-vue-next';
import Footer from '@/components/common/Footer.vue';




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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

.font-sans {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

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

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>