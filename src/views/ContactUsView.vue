<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    
    <section class="relative px-6 py-12 md:py-16 lg:py-24 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
        <span class="text-[#00AEEF] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
          {{ t("contact.hero.eye_catching_title") }}
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8 text-slate-900">
          {{ t("contact.hero.title_line1") }} <br/>
          <span class="text-[#00AEEF]">{{ t("contact.hero.title_line2") }}</span>
        </h1>
        <p class="text-base md:text-lg text-slate-600 leading-relaxed px-4 md:px-0">
          {{ t("contact.hero.subtitle") }}
        </p>
      </div>
    </section>

    <section class="reveal py-8 md:py-12 px-6 max-w-7xl mx-auto mb-12 md:mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
        
        <div class="lg:col-span-2 space-y-6 md:space-y-8 flex flex-col justify-between">
          <div class="space-y-6 md:space-y-8">
            
            <div class="bg-[#F6A240] p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white shadow-xl shadow-orange-100 group hover:-translate-y-2 transition-all duration-500">
              <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 class="text-xl md:text-2xl font-black mb-4">{{ t("contact.contact_info.title") }}</h3>
              <p class="text-orange-50 leading-relaxed text-sm md:text-base">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <strong class="block mb-1">{{ t("contact.contact_info.address_title") }}</strong>
                  BP {{ t("contact.contact_info.address") }}
                </a>
              </p>
            </div>

            <div class="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 space-y-6">
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group">
                <div class="w-12 h-12 flex-shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">{{ t("common.footer.contact.email_label") }}</p>
                  <p class="font-bold text-slate-700 text-sm md:text-base break-all">{{t("common.footer.contact.email")}}</p>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group">
                <div class="w-12 h-12 flex-shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">{{ t("common.footer.contact.phone_label") }}</p>
                  <p class="font-bold text-slate-700 text-sm md:text-base">{{t("common.footer.contact.phone")}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center lg:justify-start gap-4 pt-8 lg:pt-4">
            <a href="#" v-for="i in 4" :key="i" class="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#00AEEF] hover:border-[#00AEEF] transition-all">
              <component :is="socialIcons[i-1]" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div class="lg:col-span-3 h-[400px] md:h-[500px] lg:h-full">
          <div class="w-full h-full bg-slate-100 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative border-4 md:border-8 border-white shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15636.056184846157!2d104.8655748!3d11.5508499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPasserelles%20num%C3%A9riques%20Cambodia%20(PNC)!5e0!3m2!1sen!2skh!4v1778818129587!5m2!1sen!2skh" 
              class="w-full h-full" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue';
import { onMounted } from 'vue';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-vue-next';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const socialIcons = [Facebook, Instagram, Linkedin, Youtube];

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
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
</style>