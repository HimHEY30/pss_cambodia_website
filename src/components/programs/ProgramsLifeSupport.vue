<template>
    <section class="py-24 px-6 max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-extrabold text-slate-900 mb-4">{{ t('programs.life_support.title') }}</h2>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">{{ t('programs.life_support.desc') }}
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="card in cards" :key="card.id"
                class="reveal bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100"
                :style="card.style">
                <div :class="card.iconClass">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="card.iconPath" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-3">{{ t(card.title) }}</h3>
                <p class="text-slate-500 text-sm leading-relaxed">{{ t(card.description) }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const cards = [
    {
        id: 'extra-course',
        title: 'programs.life_support.extra_course_title',
        description: 'programs.life_support.extra_course_desc',
        iconClass: 'w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-[#F6A240]',
        iconPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
        id: 'subsistence',
        title: 'programs.life_support.subsistence_title',
        description: 'programs.life_support.subsistence_desc',
        iconClass: 'w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-[#00AEEF]',
        iconPath:
            'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
        id: 'health',
        title: 'programs.life_support.health_title',
        description: 'programs.life_support.health_desc',
        iconClass: 'w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-400',
        iconPath:
            'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
]
</script>
