<script setup>
import partner_1 from "@/assets/images/partners/1.png";
import partner_2 from "@/assets/images/partners/2.jpg";
import partner_3 from "@/assets/images/partners/3.png";
import partner_4 from "@/assets/images/partners/4.webp";
import partner_5 from "@/assets/images/partners/5.png";
import partner_6 from "@/assets/images/partners/6.png";
import partner_7 from "@/assets/images/partners/7.png";
import partner_8 from "@/assets/images/partners/8.jpg";
import partner_9 from "@/assets/images/partners/9.png";
import partner_10 from "@/assets/images/partners/10.png";
import partner_11 from "@/assets/images/partners/11.png";
import partner_12 from "@/assets/images/partners/12.jpg";
import partner_13 from "@/assets/images/partners/13.png";
import partner_14 from "@/assets/images/partners/14.jpg";
import partner_15 from "@/assets/images/partners/15.png";
import partner_16 from "@/assets/images/partners/16.jpg";
import partner_17 from "@/assets/images/partners/17.png";
import partner_19 from "@/assets/images/partners/19.png";
import partner_20 from "@/assets/images/partners/20.png";
import partner_21 from "@/assets/images/partners/21.png";
import partner_23 from "@/assets/images/partners/23.png";
import partner_24 from "@/assets/images/partners/24.png";
import partner_25 from "@/assets/images/partners/25.jpg";
import partner_26 from "@/assets/images/partners/26.jpg";
import partner_27 from "@/assets/images/partners/27.png";
import partner_28 from "@/assets/images/partners/28.png";
import partner_29 from "@/assets/images/partners/29.png";
import partner_30 from "@/assets/images/partners/30.png";
import partner_31 from "@/assets/images/partners/31.png";
import partner_32 from "@/assets/images/partners/32.jpeg";
import partner_33 from "@/assets/images/partners/33.jpeg";
import partner_34 from "@/assets/images/partners/34.jpeg";
import partner_35 from "@/assets/images/partners/35.jpg";
import partner_36 from "@/assets/images/partners/36.png";
import partner_37 from "@/assets/images/partners/37.png";
import partner_38 from "@/assets/images/partners/38.png";
import partner_39 from "@/assets/images/partners/39.png";
import partner_40 from "@/assets/images/partners/40.png";
import partner_41 from "@/assets/images/partners/41.jpg";
import partner_42 from "@/assets/images/partners/42.png";
import partner_43 from "@/assets/images/partners/43.png";
import partner_44 from "@/assets/images/partners/44.jpg";
import partner_45 from "@/assets/images/partners/45.png";
import partner_46 from "@/assets/images/partners/46.png";
import partner_47 from "@/assets/images/partners/47.png";
import partner_48 from "@/assets/images/partners/48.png";
import partner_49 from "@/assets/images/partners/49.png";
import partner_50 from "@/assets/images/partners/50.png";
import partner_51 from "@/assets/images/partners/51.jpeg";
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Simple Data Structure: Array of 20 Partner Objects
const partners = ref(
  [
    { id: 1, name: 'APD Bank', logo: partner_1 },
    { id: 2, name: 'bados komar', logo: partner_2 },
    { id: 3, name: 'biz solution', logo: partner_3 },
    { id: 4, name: 'bread bank', logo: partner_4 },
    { id: 5, name: 'add', logo: partner_5 },
    { id: 6, name: 'foundation amanjaya', logo: partner_6 },
    { id: 7, name: 'bikay', logo: partner_7 },
    { id: 8, name: 'aec - lataste', logo: partner_8 },
    { id: 9, name: 'amret', logo: partner_9 },
    { id: 10, name: 'codingate', logo: partner_10 },
    { id: 11, name: 'enfants du mekong', logo: partner_11 },
    { id: 12, name: 'esk', logo: partner_12 },
    { id: 13, name: 'le don du choeur', logo: partner_13 },
    { id: 14, name: 'unknow 1', logo: partner_14 },
    { id: 15, name: 'sustainable cambodia', logo: partner_15 },
    { id: 16, name: 'PNC Alumni Association', logo: partner_16 },
    { id: 17, name: 'Shelter of love', logo: partner_17 },
    { id: 19, name: 'isf cambodia', logo: partner_19 },
    { id: 20, name: 'enfants du mekong', logo: partner_20 },
    { id: 21, name: 'gymglish', logo: partner_21 },
    { id: 23, name: 'NTC', logo: partner_23 },
    { id: 24, name: 'PSE', logo: partner_24 },
    { id: 25, name: 'sipar', logo: partner_25 },
    { id: 26, name: 'SOURCEAMAX ASIA', logo: partner_26 },
    { id: 27, name: 'DAC FOUNDATION', logo: partner_27 },
    { id: 28, name: 'ENDEAVOUR', logo: partner_28 },
    { id: 29, name: 'FIRST CAMBODIA', logo: partner_29 },
    { id: 30, name: 'UNKNOW', logo: partner_30 },
    { id: 31, name: 'UNKNOW', logo: partner_31 },
    { id: 32, name: 'JAPAN HEART', logo: partner_32 },
    { id: 33, name: 'KAMPUCHEA BALOPP', logo: partner_33 },
    { id: 34, name: 'APD Bank', logo: partner_34 },
    { id: 35, name: 'APD Bank', logo: partner_35 },
    { id: 36, name: 'APD Bank', logo: partner_36 },
    { id: 37, name: 'APD Bank', logo: partner_37 },
    { id: 38, name: 'APD Bank', logo: partner_38 },
    { id: 39, name: 'APD Bank', logo: partner_39 },
    { id: 40, name: 'APD Bank', logo: partner_40 },
    { id: 41, name: 'APD Bank', logo: partner_41 },
    { id: 42, name: 'APD Bank', logo: partner_42 },
    { id: 43, name: 'APD Bank', logo: partner_43 },
    { id: 44, name: 'APD Bank', logo: partner_44 },
    { id: 45, name: 'APD Bank', logo: partner_45 },
    { id: 46, name: 'APD Bank', logo: partner_46 },
    { id: 47, name: 'APD Bank', logo: partner_47 },
    { id: 48, name: 'APD Bank', logo: partner_48 },
    { id: 49, name: 'APD Bank', logo: partner_49 },
    { id: 50, name: 'APD Bank', logo: partner_50 },
    { id: 51, name: 'APD Bank', logo: partner_51 },
  ]
);
</script>

<template>
  <section class="py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ t('home.partner.title') }}
        </h2>
        <p class="mt-3 text-lg text-gray-500">
          {{ t('home.partner.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="h-16 w-full flex items-center justify-center mb-4">
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="max-h-full max-w-full object-contain"
            />
          </div>

          <span class="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 text-center">
            {{ partner.name }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Standard CSS for fine-tuning letter spacing if needed */
span {
  font-family: 'Inter', sans-serif;
}
</style>