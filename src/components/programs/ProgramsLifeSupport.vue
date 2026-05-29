<template>
    <section class="reveal py-28 px-6 bg-slate-50 border-y border-slate-100">
        <div class="max-w-7xl mx-auto">

            <!-- Section Header -->
            <div class="text-center mb-16">
                <span class="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#00AEEF] bg-[#00AEEF]/10 px-4 py-2 rounded-full mb-4">
                    {{ t('programs.life_support.desc') }}
                </span>
                <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                    {{ t('programs.life_support.title') }}
                </h2>
            </div>

            <!-- Cards Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="card in cards"
                    :key="card.id"
                    class="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                    <!-- Image area -->
                    <div class="relative w-full h-48 overflow-hidden shrink-0" :class="card.imageBg">
                        <img
                            v-if="card.image"
                            :src="card.image"
                            :alt="t(card.title)"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2" :class="card.placeholderColor">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M4.5 3h15A1.5 1.5 0 0121 4.5v15A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3z" />
                            </svg>
                            <span class="text-xs font-medium">Add image</span>
                        </div>

                        <!-- Subtle gradient fade into white card body -->
                        <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                    </div>

                    <!-- Card Body -->
                    <div class="p-7 flex flex-col flex-1">
                        <!-- Icon + Title row -->
                        <div class="flex items-start gap-4 mb-4">
                            <div class="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" :class="card.iconBg">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" :class="card.iconColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" :d="card.iconPath" />
                                </svg>
                            </div>
                            <h3 class="text-lg font-bold text-slate-900 leading-snug pt-1">
                                {{ t(card.title) }}
                            </h3>
                        </div>

                        <!-- Description -->
                        <p class="text-slate-500 text-sm leading-relaxed flex-1">
                            {{ t(card.description) }}
                        </p>

                        <!-- Bottom accent line on hover -->
                        <div class="mt-6 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500" :class="card.accentLine"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import SPORT from "@/assets/images/life_skills/LIFE-SKILL (1).png";
import MEAL from "@/assets/images/life_skills/LIFE-SKILL (2).png";
import HEALTH from "@/assets/images/life_skills/LIFE-SKILL (3).png";
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const cards = [
    {
        id: 'extra-course',
        title: 'programs.life_support.extra_course_title',
        description: 'programs.life_support.extra_course_desc',
        image: SPORT, // e.g. '/images/extra-course.jpg'
        imageBg: 'bg-orange-50',
        placeholderColor: 'text-orange-200',
        iconBg: 'bg-orange-50',
        iconColor: 'text-[#F6A240]',
        accentLine: 'bg-gradient-to-r from-[#F6A240] to-orange-300',
        iconPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
        id: 'subsistence',
        title: 'programs.life_support.subsistence_title',
        description: 'programs.life_support.subsistence_desc',
        image: MEAL, // e.g. '/images/subsistence.jpg'
        imageBg: 'bg-sky-50',
        placeholderColor: 'text-sky-200',
        iconBg: 'bg-sky-50',
        iconColor: 'text-[#00AEEF]',
        accentLine: 'bg-gradient-to-r from-[#00AEEF] to-sky-300',
        iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
        id: 'health',
        title: 'programs.life_support.health_title',
        description: 'programs.life_support.health_desc',
        image: HEALTH, // e.g. '/images/health.jpg'
        imageBg: 'bg-red-50',
        placeholderColor: 'text-red-200',
        iconBg: 'bg-red-50',
        iconColor: 'text-red-400',
        accentLine: 'bg-gradient-to-r from-red-400 to-red-300',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
]
</script>
