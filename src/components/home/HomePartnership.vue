<script setup>
// Ministry Partners Logos
import mini_1 from "@/assets/images/partners/ministries/MINISTORY (1).png";
import mini_2 from "@/assets/images/partners/ministries/MINISTORY (2).png";

// Donor Partners Logos
import donor_1 from "@/assets/images/partners/donors/DONOR (1).png";
import donor_2 from "@/assets/images/partners/donors/DONOR (2).png";
import donor_3 from "@/assets/images/partners/donors/DONOR (3).png";

// University Partners Logos
import uni_1 from "@/assets/images/partners/universities/UNI (1).png";
import uni_2 from "@/assets/images/partners/universities/UNI (2).png";
import uni_3 from "@/assets/images/partners/universities/UNI (3).png";
import uni_4 from "@/assets/images/partners/universities/UNI (4).png";
import uni_5 from "@/assets/images/partners/universities/UNI (5).png";

// Bank Corporate Partners Logos
import bank_1 from "@/assets/images/partners/banks/BANK (1).png";
import bank_2 from "@/assets/images/partners/banks/BANK (2).png";
import bank_3 from "@/assets/images/partners/banks/BANK (3).png";
import bank_4 from "@/assets/images/partners/banks/BANK (4).png";
import bank_5 from "@/assets/images/partners/banks/BANK (5).png";

// Companies partner logos
import com_1 from "@/assets/images/partners/companies/COMPANY (1).png";
import com_2 from "@/assets/images/partners/companies/COMPANY (2).png";
import com_3 from "@/assets/images/partners/companies/COMPANY (3).png";
import com_4 from "@/assets/images/partners/companies/COMPANY (4).png";
import com_5 from "@/assets/images/partners/companies/COMPANY (5).png";
import com_6 from "@/assets/images/partners/companies/COMPANY (6).png";
import com_7 from "@/assets/images/partners/companies/COMPANY (7).png";
import com_8 from "@/assets/images/partners/companies/COMPANY (8).png";
import com_9 from "@/assets/images/partners/companies/COMPANY (9).png";
import com_10 from "@/assets/images/partners/companies/COMPANY (10).png";
import com_11 from "@/assets/images/partners/companies/COMPANY (11).png";
import com_12 from "@/assets/images/partners/companies/COMPANY (12).png";
import com_13 from "@/assets/images/partners/companies/COMPANY (13).png";
import com_14 from "@/assets/images/partners/companies/COMPANY (14).png";
import com_15 from "@/assets/images/partners/companies/COMPANY (15).png";
import com_16 from "@/assets/images/partners/companies/COMPANY (16).png";
import com_17 from "@/assets/images/partners/companies/COMPANY (17).png";
import com_18 from "@/assets/images/partners/companies/COMPANY (18).png";
import com_19 from "@/assets/images/partners/companies/COMPANY (19).png";
import com_20 from "@/assets/images/partners/companies/COMPANY (20).png";

// NGOs and International Organizations Partners Logos
import ngo_1 from "@/assets/images/partners/ngos/NGO (1).png";
import ngo_2 from "@/assets/images/partners/ngos/NGO (2).png";
import ngo_3 from "@/assets/images/partners/ngos/NGO (3).png";
import ngo_4 from "@/assets/images/partners/ngos/NGO (4).png";
import ngo_5 from "@/assets/images/partners/ngos/NGO (5).png";
import ngo_6 from "@/assets/images/partners/ngos/NGO (6).png";
import ngo_7 from "@/assets/images/partners/ngos/NGO (7).png";
import ngo_8 from "@/assets/images/partners/ngos/NGO (8).png";
import ngo_9 from "@/assets/images/partners/ngos/NGO (9).png";
import ngo_10 from "@/assets/images/partners/ngos/NGO (10).png";
import ngo_11 from "@/assets/images/partners/ngos/NGO (11).png";
import ngo_12 from "@/assets/images/partners/ngos/NGO (12).png";
import ngo_13 from "@/assets/images/partners/ngos/NGO (13).png";
import ngo_14 from "@/assets/images/partners/ngos/NGO (14).png";
import ngo_15 from "@/assets/images/partners/ngos/NGO (15).png";
import ngo_16 from "@/assets/images/partners/ngos/NGO (16).png";
import ngo_17 from "@/assets/images/partners/ngos/NGO (17).png";
import ngo_18 from "@/assets/images/partners/ngos/NGO (18).png";
import ngo_19 from "@/assets/images/partners/ngos/NGO (19).png";
import ngo_20 from "@/assets/images/partners/ngos/NGO (20).png";
import ngo_21 from "@/assets/images/partners/ngos/NGO (21).png";
import ngo_22 from "@/assets/images/partners/ngos/NGO (22).png";
import ngo_23 from "@/assets/images/partners/ngos/NGO (23).png";

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const allLogos = [
  mini_1, mini_2,
  donor_1, donor_2, donor_3,
  uni_1, uni_2, uni_3, uni_4, uni_5,
  bank_1, bank_2, bank_3, bank_4, bank_5,
  com_1, com_2, com_3, com_4, com_5, com_6, com_7, com_8, com_9, com_10, com_11, com_12, com_13, com_14, com_15, com_16, com_17, com_18, com_19, com_20,
  ngo_1, ngo_2, ngo_3, ngo_4, ngo_5, ngo_6, ngo_7, ngo_8,
  ngo_9, ngo_10, ngo_11, ngo_12, ngo_13, ngo_14, ngo_15,
  ngo_16, ngo_17, ngo_18, ngo_19, ngo_20, ngo_21, ngo_22, ngo_23
];

// Split logos evenly across 3 rows
const rows = computed(() => {
  const size = Math.ceil(allLogos.length / 3);
  return [
    allLogos.slice(0, size),
    allLogos.slice(size, size * 2),
    allLogos.slice(size * 2),
  ];
});
</script>

<template>
  <section class="py-16 px-4 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ t('home.partner.title') }}
        </h2>
        <p class="mt-3 text-lg text-gray-500">
          {{ t('home.partner.subtitle') }}
        </p>
      </div>

      <!-- Three marquee rows, alternating direction -->
      <div class="flex flex-col gap-6">
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="marquee-wrapper"
        >
          <div
            class="marquee-track"
            :class="rowIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'"
          >
            <!-- Duplicate logos for seamless loop -->
            <template v-for="pass in 2" :key="pass">
              <div
                v-for="(logo, i) in row"
                :key="`${pass}-${i}`"
                class="logo-card"
              >
                <img :src="logo" alt="Partner logo" class="max-h-full max-w-full object-contain" />
              </div>
            </template>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  /* Fade edges for a polished look */
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.marquee-track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
  will-change: transform;
}

.logo-card {
  flex-shrink: 0;
  width: 220px;      /* was 160px */
  height: 140px;     /* was 100px */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;   /* was 1rem */
  background: #fff;
  border: 1px solid #f3f4f6;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.logo-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Scroll left (→ direction): row 1 & 3 */
@keyframes scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Scroll right (← direction): row 2 */
@keyframes scroll-right {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-scroll-left {
  animation: scroll-left 50s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 50s linear infinite;
}

/* Pause on hover for better UX */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}
</style>