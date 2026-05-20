<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GRADUATE from "@/assets/images/impact/1.jpg";
import WORK from "@/assets/images/impact/2.jpg";
import VOLUNTEER from "@/assets/images/impact/3.PNG";
import GENDER from "@/assets/images/impact/4.JPG";
import { 
  GraduationCap, 
  Briefcase, 
  Clock, 
  Users,
  Pointer 
} from 'lucide-vue-next';

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const sectionRef = ref(null);

// Track the index of the active flipped card on mobile/tablet
const activeCardIndex = ref(null);

const stats = [
  { 
    value: t('home.impact.stat1_value'), 
    suffix: '+', 
    labelKey: 'home.impact.stat1_label', 
    subKey: 'home.impact.stat1_sub',
    icon: GraduationCap,
    image: GRADUATE
  },
  { 
    value: t('home.impact.stat2_value'), 
    suffix: '%', 
    labelKey: 'home.impact.stat2_label', 
    subKey: 'home.impact.stat2_sub',
    icon: Briefcase,
    image: WORK
  },
  { 
    value: t('home.impact.stat3_value'), 
    suffix: '%', 
    labelKey: 'home.impact.stat3_label', 
    subKey: 'home.impact.stat3_sub',
    icon: Clock,
    image: VOLUNTEER
  },
  { 
    value: t('home.impact.stat4_value'), 
    suffix: '%', 
    labelKey: 'home.impact.stat4_label', 
    subKey: 'home.impact.stat4_sub',
    icon: Users,
    image: GENDER
  }
];

// Reusable count-up animation function
const animateCounter = (counterElement, targetValue) => {
  if (!counterElement) return;
  const parsedValue = parseFloat(targetValue) || 0;

  gsap.killTweensOf(counterElement);
  counterElement.innerText = "0";

  gsap.to(counterElement, {
    innerText: parsedValue,
    duration: 1.5,
    delay: 0.15, 
    snap: { innerText: 1 },
    ease: "power2.out"
  });
};

// Handle Desktop Hover Actions
const handleCardHover = (event, stat) => {
  // Breakpoint matching Tailwind's 'lg' (1024px)
  if (window.innerWidth < 1024) return;
  
  const counterElement = event.currentTarget.querySelector('.counter');
  animateCounter(counterElement, stat.value);
};

// Handle Mobile/Tablet Tap Actions
const handleCardClick = (event, index, stat) => {
  // Ignore clicks if on desktop screen size
  if (window.innerWidth >= 1024) return;

  if (activeCardIndex.value === index) {
    activeCardIndex.value = null; // Toggle closed if clicked again
  } else {
    activeCardIndex.value = index;
    
    const counterElement = event.currentTarget.querySelector('.counter');
    animateCounter(counterElement, stat.value);
  }
};

onMounted(() => {
  const ctx = gsap.context(() => {
    // Header Intro Animation
    gsap.from(".animate-header", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 80%",
      }
    });

    // Grid Items Entrance Animation
    gsap.from(".flip-card-perspective", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 75%",
      }
    });
  }, sectionRef.value);
});
</script>

<template>
  <section 
    ref="sectionRef" 
    class="relative w-full py-20 px-6 lg:px-16 overflow-hidden"
    style="background-color: #22bbea;"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div class="animate-header space-y-6">
        <span class="block text-sm tracking-widest uppercase text-white leading-tight mb-4">
          {{ t('home.impact.eye_catching_title') }}
        </span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          {{ t('home.impact.title_line1') }} <br />
          <span class="text-blue-50">{{ t('home.impact.title_line2') }}</span>
        </h2>
        
        <p class="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
          {{ t('home.impact.description') }}
        </p>

        <div class="pt-4">
          <div class="inline-flex items-center p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
            <p class="text-white text-sm md:text-base italic">
              {{ t('home.impact.quote') }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="flip-card-perspective h-72 w-full group cursor-pointer"
          @mouseenter="handleCardHover($event, stat)"
          @click="handleCardClick($event, index, stat)"
        >
          <div 
            class="flip-card-inner relative w-full h-full duration-500 structures-3d"
            :class="{ 
              'lg:group-hover:rotate-y-180': true, 
              'is-flipped': activeCardIndex === index 
            }"
          >
            
            <div class="flip-card-front absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg">
              <img 
                :src="stat.image" 
                :alt="t(stat.labelKey)" 
                class="w-full h-full object-cover transform scale-100 lg:group-hover:scale-105 transition-transform duration-500"
              />
              
              <div class="absolute top-4 right-4 z-10 lg:hidden pointer-events-none flex items-center space-x-1.5 bg-black/50 backdrop-blur-md text-white text-xs px-2.5 py-1.5 rounded-full border border-white/20 shadow-sm animate-pulse-gentle">
                <span>{{ t('home.impact.tap_hint', 'Tap') }}</span>
                <component :is="Pointer" :size="13" class="animate-bounce-slight" />
              </div>

              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <div class="flex items-center space-x-3 text-white">
                  <div class="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    <component :is="stat.icon" :size="22" />
                  </div>
                  <h4 class="text-lg font-bold tracking-wide">{{ t(stat.labelKey) }}</h4>
                </div>
              </div>
            </div>

            <div class="flip-card-back absolute inset-0 backface-hidden bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between rotate-y-180">
              <div>
                <div class="mb-4 inline-block p-3 bg-blue-50 rounded-lg text-[#22bbea]">
                  <component :is="stat.icon" :size="28" />
                </div>
                
                <div class="flex items-baseline space-x-1">
                  <span class="counter text-4xl font-extrabold text-gray-900">0</span>
                  <span class="text-3xl font-bold text-gray-900">{{ stat.suffix }}</span>
                </div>
                
                <h4 class="text-xl font-bold text-gray-800 mt-2">{{ t(stat.labelKey) }}</h4>
              </div>
              
              <p class="text-gray-500 text-sm leading-snug">
                {{ t(stat.subKey) }}
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.counter {
  font-variant-numeric: tabular-nums;
}

/* 3D Flip System */
.flip-card-perspective {
  perspective: 1000px;
}

.flip-card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Toggled on Mobile click/tap via JavaScript state */
.flip-card-inner.is-flipped {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.structures-3d {
  transform-style: preserve-3d;
}

/* Touch Prompt Micro-Animations */
@keyframes pulseGentle {
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.03); }
}

@keyframes bounceSlight {
  0%, 100% { transform: translateY(0) rotate(-15deg); }
  50% { transform: translateY(-3px) rotate(-15deg); }
}

.animate-pulse-gentle {
  animation: pulseGentle 2s infinite ease-in-out;
}

.animate-bounce-slight {
  display: inline-block;
  animation: bounceSlight 1.4s infinite ease-in-out;
}
</style>