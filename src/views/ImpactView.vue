<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    
    <section class="relative px-6 py-16 lg:py-32 max-w-7xl mx-auto overflow-hidden">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="z-10 animate-fade-in-up">
          <span class="text-sky-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block animate-slide-in-left">Impact & Outcomes</span>
          <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-slate-900">
            Real Lives,<br/>
            <span class="text-[#00AEEF]">Real Change.</span>
          </h1>
          <p class="text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
            At PSS in partnership with PSS and others, we believe real impact is measured in real outcomes, skills gained, futures transformed, and communities strengthened.
          </p>
          <p class="text-slate-500 max-w-lg">
            Our program empowers young people especially those from rural and disadvantaged backgrounds with the technical expertise and professional support needed to thrive in the digital economy.
          </p>
        </div>
        <div class="relative animate-fade-in" style="animation-delay: 0.2s">
          <div class="rounded-[3rem] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Impact" 
              class="w-full h-full object-cover aspect-[4/5] group-hover:scale-110 transition-transform duration-1000"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#00AEEF]/40 to-transparent"></div>
          </div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-50 rounded-full -z-10 animate-float"></div>
          <div class="absolute top-10 -right-10 w-20 h-20 bg-orange-100 rounded-full -z-10 animate-float-delayed"></div>
        </div>
      </div>
    </section>

    <HomeImpact></HomeImpact>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div class="reveal">
          <h2 class="text-4xl font-extrabold text-slate-900 mb-6">Stories that show what’s possible</h2>
          <p class="text-sky-500 font-bold mb-6">Built on 20 years of PNC experience:</p>
          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            Every cohort brings new momentum. From students who begin with little to no experience, to graduates building real careers in web and software development—our impact is reflected in the daily progress of individuals and the long-term benefits for their families.
          </p>
          <p class="text-slate-600 leading-relaxed italic">
            Discover firsthand testimonies and updates from across PNC: training achievements, graduation moments, and milestones that demonstrate how education and opportunity create lasting change.
          </p>
        </div>
        <div class="reveal relative">
          <div class="aspect-video rounded-[3rem] bg-slate-200 overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Testimony" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="mt-32">
        <div class="text-center mb-16">
          <h3 class="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Voice of our Alumni</h3>
          <h2 class="text-4xl font-extrabold text-slate-900">Success Stories</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(testimonial, i) in alumni" :key="testimonial.name" 
               class="reveal bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#00AEEF] hover:shadow-2xl transition-all duration-500 group"
               :style="{ transitionDelay: `${i * 100}ms` }">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 rounded-full overflow-hidden ring-4 ring-sky-50 group-hover:ring-sky-100 transition-all">
                <img :src="testimonial.image" :alt="testimonial.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900">{{ testimonial.name }}</h4>
                <p class="text-[10px] uppercase font-black text-[#00AEEF] tracking-widest">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-slate-600 italic leading-relaxed">"{{ testimonial.quote }}"</p>
            <div class="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-300">CLASS OF {{ testimonial.year }}</span>
              <svg class="w-5 h-5 text-sky-100 group-hover:text-[#00AEEF] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.017 21H3.017Z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue';
import HomeImpact from '@/components/home/HomeImpact.vue';
import { onMounted } from 'vue';

const alumni = [
  {
    name: 'Sovanmony Rath',
    role: 'Senior Web Developer',
    year: '2016',
    image: 'https://ui-avatars.com/api/?name=Sovanmony+Rath&background=f1f5f9&color=00AEEF&bold=true',
    quote: 'Coming from a rural province, I never thought I would be leading a dev team at an international agency. PSS gave me more than just technical skills; they gave me a community.'
  },
  {
    name: 'Channary Kim',
    role: 'Cybersecurity Analyst',
    year: '2019',
    image: 'https://ui-avatars.com/api/?name=Channary+Kim&background=f1f5f9&color=00AEEF&bold=true',
    quote: 'Being a woman in tech was intimidating at first. But at PSS, I learned that my perspective is my strength. Today, I secure digital infrastructures for global companies.'
  },
  {
    name: 'Vibol Soun',
    role: 'IT Support Specialist',
    year: '2021',
    image: 'https://ui-avatars.com/api/?name=Vibol+Soun&background=f1f5f9&color=00AEEF&bold=true',
    quote: 'The full support system meant I could study without worrying about where my next meal would come from. This program truly changes the trajectory of your life.'
  }
];

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
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
.animate-fade-in { animation: fadeInUp 1.2s ease-out forwards; opacity: 0; }
.animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-delayed { animation: float 8s ease-in-out infinite 1s; }
</style>