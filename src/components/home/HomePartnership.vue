<script setup>

// Ministry Partners Logos
import partner_1 from "@/assets/images/partners/ministries/1.png";
import partner_2 from "@/assets/images/partners/ministries/2.png";

// University Partners Logos
import partner_3 from "@/assets/images/partners/universities/UNIVERSITY (1).png";
import partner_4 from "@/assets/images/partners/universities/UNIVERSITY (2).png";
import partner_5 from "@/assets/images/partners/universities/UP.webp";
import partner_6 from "@/assets/images/partners/universities/UNIVERSITY (4).png";

// Companies Partners Logos
import partner_7 from "@/assets/images/partners/companies/COMPANY (1).png";
import partner_8 from "@/assets/images/partners/companies/COMPANY (2).png";
import partner_9 from "@/assets/images/partners/companies/COMPANY (3).png";
import partner_10 from "@/assets/images/partners/companies/COMPANY (4).png";
import partner_11 from "@/assets/images/partners/companies/COMPANY (5).png";
import partner_12 from "@/assets/images/partners/companies/COMPANY (6).png";
import partner_13 from "@/assets/images/partners/companies/COMPANY (7).png";
import partner_14 from "@/assets/images/partners/companies/COMPANY (8).png";
import partner_15 from "@/assets/images/partners/companies/COMPANY (9).png";
import partner_16 from "@/assets/images/partners/companies/COMPANY (10).png";
import partner_17 from "@/assets/images/partners/companies/COMPANY (11).png";
import partner_18 from "@/assets/images/partners/companies/COMPANY (12).png";
import partner_19 from "@/assets/images/partners/companies/COMPANY (13).png";
import partner_20 from "@/assets/images/partners/companies/COMPANY (14).png"; 

// NGOs Partners Logos
import partner_21 from "@/assets/images/partners/ngo/ngo (1).png";
import partner_22 from "@/assets/images/partners/ngo/ngo (2).png";
import partner_23 from "@/assets/images/partners/ngo/ngo (3).png";
import partner_24 from "@/assets/images/partners/ngo/ngo (4).png";
import partner_25 from "@/assets/images/partners/ngo/ngo (5).png";
import partner_26 from "@/assets/images/partners/ngo/ngo (6).png";
import partner_27 from "@/assets/images/partners/ngo/ngo (7).png";
import partner_28 from "@/assets/images/partners/ngo/ngo (8).png";
import partner_29 from "@/assets/images/partners/ngo/ngo (9).png";
import partner_30 from "@/assets/images/partners/ngo/ngo (10).png";
import partner_31 from "@/assets/images/partners/ngo/ngo (11).png";
import partner_32 from "@/assets/images/partners/ngo/ngo (12).png";
import partner_33 from "@/assets/images/partners/ngo/ngo (13).png";
import partner_34 from "@/assets/images/partners/ngo/ngo (14).png";
import partner_35 from "@/assets/images/partners/ngo/ngo (15).png";
import partner_36 from "@/assets/images/partners/ngo/ngo (16).png";
import partner_37 from "@/assets/images/partners/ngo/ngo (17).png";
import partner_38 from "@/assets/images/partners/ngo/ngo (18).png";
import partner_39 from "@/assets/images/partners/ngo/ngo (19).png";
import partner_40 from "@/assets/images/partners/ngo/ngo (20).png";
import partner_41 from "@/assets/images/partners/ngo/ngo (21).png";

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Simple Data Structure: Array of 20 Partner Objects
const partners = ref(
  [
    { id: 1, logo: partner_1 },
    { id: 2, logo: partner_2 },
    { id: 3, logo: partner_3 },
    { id: 4, logo: partner_4 },
    { id: 5, logo: partner_5 },
    { id: 6, logo: partner_6 },
    { id: 7, logo: partner_7 },
    { id: 8, logo: partner_8 },
    { id: 9, logo: partner_9 },
    { id: 10, logo: partner_10 },
    { id: 11, logo: partner_11 },
    { id: 12, logo: partner_12 },
    { id: 13, logo: partner_13 },
    { id: 14, logo: partner_14 },
    { id: 15, logo: partner_15 },
    { id: 16, logo: partner_16 },
    { id: 17, logo: partner_17 },
    { id: 18, logo: partner_18 },
    { id: 19, logo: partner_19 },
    { id: 20, logo: partner_20 },
    { id: 21, logo: partner_21 },
    { id: 22, logo: partner_22 },
    { id: 23, logo: partner_23 },
    { id: 24, logo: partner_24 },
    { id: 25, logo: partner_25 },
    { id: 26, logo: partner_26 },
    { id: 27, logo: partner_27 },
    { id: 28, logo: partner_28 },
    { id: 29, logo: partner_29 },
    { id: 30, logo: partner_30 },
    { id: 31, logo: partner_31 },
    { id: 32, logo: partner_32 },
    { id: 33, logo: partner_33 },
    { id: 34, logo: partner_34 },
    { id: 35, logo: partner_35 },
    { id: 36, logo: partner_36 },
    { id: 37, logo: partner_37 },
    { id: 38, logo: partner_38 },
    { id: 39, logo: partner_39 },
    { id: 40, logo: partner_40 },
    { id: 41, logo: partner_41 }
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
          <div class="h-32 w-full flex items-center justify-center mb-4">
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="max-h-full max-w-full object-contain"
            />
          </div>
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