<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12">
    <div class="text-center max-w-lg">
      <div class="relative mb-8 flex justify-center">
        <h1 class="text-9xl font-extrabold text-primary tracking-widest animate-bounce">
          404
        </h1>
        <div class="bg-indigo-100 text-primary px-3 py-1 text-sm rounded rotate-12 absolute bottom-4 shadow-md font-semibold">
          {{ t('notFound.label') }}
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
        {{ t('notFound.title') }}
      </h2>
      <p class="text-gray-600 text-lg mb-8 leading-relaxed">
        {{ t('notFound.description') }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 shadow-sm"
        >
          {{ t('notFound.button') }}
        </router-link>
        
        <button
          @click="goBack"
          class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 shadow-sm"
        >
          {{ t('notFound.back_button') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const router = useRouter()

// Allows the user to return to their previous page
const goBack = () => {
  router.back()
}
</script>

<style scoped>
/* Optional: Custom smooth bounce animation tweak */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-bounce {
  animation: bounce 2s infinite;
}
</style>