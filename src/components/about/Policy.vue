<template>
  <section class="bg-slate-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto">

      <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
        <h2 class="text-base font-semibold text-secondary tracking-wide uppercase">
          {{ t('about.policies.eyes_catching_title') }}
        </h2>
        <p class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          {{ t('about.policies.title') }}
        </p>
        <p class="text-lg text-slate-600 leading-relaxed">
          {{ t('about.policies.subtitle') }}
        </p>
      </div>

      <div class="space-y-12 lg:space-y-20">
        <div v-for="(policy, index) in policies" :key="policy.id"
          class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 lg:p-0 rounded-2xl lg:rounded-3xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 group"
          :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }">

          <div
            class="w-full lg:w-1/2 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl lg:rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-center p-6 select-none transition-transform duration-500 group-hover:scale-[1.01]">
            <img :src="policy.image" :alt="policy.title" class="w-full h-full object-cover rounded-xl lg:rounded-3xl" />
            <div
              class="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]">
            </div>
          </div>

          <div class="w-full lg:w-1/2 lg:p-12 space-y-4">
            <div class="inline-flex items-center justify-center p-3 rounded-xl bg-primary/20 text-primary">
              <span v-html="policy.icon" class="w-6 h-6"></span>
            </div>

            <h3
              class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors duration-300">
              {{ policy.title }}
            </h3>

            <p class="text-base text-slate-600 leading-relaxed">
              {{ policy.description }}
            </p>

            <div class="pt-2">
              <a :href="policy.link"
                class="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary transition-colors duration-200 group/btn"
                :aria-label="`Learn more about our ${policy.title} policy`" target="_blank">
                <span>{{ t('about.policies.cta') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform duration-200">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import SAFETY_WORKPLACE_IMAGE from '@/assets/images/policy/safety_workplace.png';
import SAFETY_WORKPLACE_DOC from '@/assets/doc/policies/PSS POLICY ON THE PREVENTION OF DISCRIMINATION AND HARASSMENT AT WORK.pdf';
import ANTI_FRAUD_IMAGE from '@/assets/images/policy/anti_fraud.png';
import ANTI_FRAUD_DOC from '@/assets/doc/policies/PSS POLICY ANTI FRAUD, CORRUPTION AND CONFLICTS OF INTEREST.pdf';
import DONOR_PRIVACY_IMAGE from '@/assets/images/policy/donation_safety.png';
import DONOR_PRIVACY_DOC from '@/assets/doc/policies/PSS Donation Acceptance and Donor Safety & Privacy Policy.pdf';
import CHILD_SAFETY_IMAGE from '@/assets/images/policy/child_protection.png';
import CHILD_SAFETY_DOC from '@/assets/doc/policies/PSS Child and young people safety policy.pdf';

const { t } = useI18n();

// Changed from ref() to computed() to capture runtime language changes automatically
const policies = computed(() => [
  {
    id: 'child-safety',
    title: t('about.policies.policy1_title'),
    description: t('about.policies.policy1_desc'),
    image: CHILD_SAFETY_IMAGE,
    aspectRatio: '4:3 (Desktop) / 16:9 (Mobile)',
    link: CHILD_SAFETY_DOC,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`
  },
  {
    id: 'safe-workplace',
    title: t('about.policies.policy2_title'),
    description: t('about.policies.policy2_desc'),
    image: SAFETY_WORKPLACE_IMAGE,
    aspectRatio: '4:3 (Desktop) / 16:9 (Mobile)',
    link: SAFETY_WORKPLACE_DOC,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
  },
  {
    id: 'anti-fraud',
    title: t('about.policies.policy3_title'),
    description: t('about.policies.policy3_desc'),
    image: ANTI_FRAUD_IMAGE,
    aspectRatio: '4:3 (Desktop) / 16:9 (Mobile)',
    link: ANTI_FRAUD_DOC,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>`
  },
  {
    id: 'donor-safety',
    title: t('about.policies.policy4_title'),
    description: t('about.policies.policy4_desc'),
    image: DONOR_PRIVACY_IMAGE,
    aspectRatio: '4:3 (Desktop) / 16:9 (Mobile)',
    link: DONOR_PRIVACY_DOC,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>`
  },
]);
</script>