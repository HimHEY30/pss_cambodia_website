<template>
  <Transition name="splash-fade">
    <div v-if="isLoading" class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 text-white">
      <div class="flex flex-col items-center space-y-6 animate-fade-in">
        <img :src="PSS_LOGO" alt="PSS Logo" class="w-84 h-84 object-contain" />
        <h1 class="text-2xl font-bold tracking-wider text-center">
          <span class="text-secondary">Promoting Skills for Success</span> <br>
          <span>Organization</span>
        </h1>
        <div class="flex flex-col items-center space-y-3">
          <div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p class="text-sm font-medium tracking-widest text-slate-400 uppercase animate-pulse">
            PSS WEBSITE IS LOADING...
          </p>
        </div>

      </div>
    </div>
  </Transition>

  <div v-if="!isLoading" class="min-h-screen bg-white">
    
    <header class="fixed w-full top-0 z-50 bg-primary shadow-md">
      <Navbar />
    </header>

    <main>
      <router-view />
    </main>

    <Transition name="fade">
      <button
        v-show="showButton"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </Transition>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/common/Navbar.vue';
import PSS_LOGO from "@/assets/images/pss_logo.png"; // Example logo import for splash screen

const showButton = ref(false);
const isLoading = ref(true); // Splash screen controls

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Simulates initial app loading/fetching (e.g., 2.5 seconds)
  // If you have real API calls, trigger this when those promises resolve.
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Main App Fade Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Splash Screen Fade Out Transition */
.splash-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.splash-fade-leave-to {
  opacity: 0;
  transform: scale(1.05); /* Slight zoom-out effect on exit */
}

/* Custom CSS Keyframe Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulseSlow {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulseSlow 2s ease-in-out infinite;
}
</style>