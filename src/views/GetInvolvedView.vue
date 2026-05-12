<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    
    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
        <span class="text-[#F6A240] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Support Our Mission</span>
        <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-slate-900">
          Empower a <br/><span class="text-[#00AEEF]">Future Leader.</span>
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed">
          Your contribution provides more than just an education—it provides a home, health security, and a direct path to a career in the digital economy for underprivileged youth.
        </p>
      </div>
    </section>

    <section class="reveal py-12 px-6 max-w-5xl mx-auto">
      <div class="bg-slate-900 rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
        <div class="absolute -top-20 -left-20 w-64 h-64 bg-[#00AEEF] rounded-full opacity-20 blur-3xl"></div>
        
        <div class="lg:w-1/2 relative z-10 text-center lg:text-left">
          <h2 class="text-3xl font-extrabold mb-6">Donate via <span class="text-[#00AEEF]">KHQR</span></h2>
          <p class="text-slate-400 mb-8 leading-relaxed">
            Scan the QR code with your mobile banking app to make a direct contribution. Every riel goes directly toward student scholarships and subsistence.
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div class="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <p class="text-sm font-medium">Safe & Instant Transfer</p>
            </div>
            <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div class="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p class="text-sm font-medium">No Transaction Fees</p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 flex flex-col items-center">
          <div class="bg-white p-6 rounded-[2rem] shadow-2xl relative group transition-transform hover:scale-105 duration-500">
            <div class="w-64 h-64 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=PSS_CAMBODIA_DONATION" alt="KHQR Code" class="w-full h-full opacity-80" />
            </div>
            <div class="mt-4 flex justify-center">
              <span class="text-slate-900 font-black tracking-tighter text-xl">KH<span class="text-red-600">QR</span></span>
            </div>
          </div>
          <p class="text-slate-500 text-xs mt-6 uppercase font-bold tracking-widest">Professional Skills Society (Cambodia)</p>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Where Your Money Goes</h2>
        <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">Transparency in Impact</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, i) in costBreakdown" :key="item.title" 
             class="reveal bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-xl transition-all group"
             :style="{ transitionDelay: `${i * 100}ms` }">
          <div class="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00AEEF] transition-colors">
            <component :is="item.icon" class="w-7 h-7 text-[#00AEEF] group-hover:text-white" />
          </div>
          <h3 class="text-xl font-bold mb-2 text-slate-900">{{ item.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ item.description }}</p>
          <div class="mt-6 pt-6 border-t border-slate-50">
            <span class="text-2xl font-black text-slate-900">{{ item.percent }}</span>
            <span class="text-xs font-bold text-slate-400 ml-2">OF BUDGET</span>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-sky-50 p-8 rounded-[2.5rem] text-center border border-sky-100 reveal">
        <p class="text-slate-700 font-medium">
          The total cost for one student is roughly <strong>$2,500 per year</strong>, covering everything from professional IT instruction to their daily three meals and healthcare.
        </p>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { BookOpen, Home, Heart, Monitor } from 'lucide-vue-next';
import Footer from '@/components/common/Footer.vue';

const costBreakdown = [
  { 
    title: 'IT & Soft Skills', 
    description: 'High-quality instruction, curriculum development, and English training.', 
    percent: '45%', 
    icon: BookOpen 
  },
  { 
    title: 'Food & Housing', 
    description: 'Secure dormitory living and three nutritious warm meals every day.', 
    percent: '30%', 
    icon: Home 
  },
  { 
    title: 'Tools & Tech', 
    description: 'Laptops, networking equipment, and high-speed campus internet.', 
    percent: '15%', 
    icon: Monitor 
  },
  { 
    title: 'Healthcare & Prep', 
    description: 'Fully covered medical costs and professional career orientation.', 
    percent: '10%', 
    icon: Heart 
  }
];

const otherWays = [
  { title: 'Mentorship', desc: 'Share your industry expertise by becoming a mentor to our 2nd-year students as they prepare for the workforce.' },
  { title: 'Partnerships', desc: 'Hire our graduates or provide internship opportunities to help bridge the employment gap in Cambodia.' },
  { title: 'Equipment', desc: 'Donate modern laptops or networking hardware to ensure our students train on industry-standard tools.' }
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

.animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float { animation: float 6s ease-in-out infinite; }
</style>