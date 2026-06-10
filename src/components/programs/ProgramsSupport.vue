<template>
    <section class="reveal py-28 px-6 bg-white">
        <div class="max-w-7xl mx-auto">

            <!-- Section Header -->
            <div class="text-center mb-16">
               
                <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
                    {{ t('programs.subject_support.english_pl') }}
                </h2>
                <p class="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    {{ t('programs.subject_support.english_pl_desc') }}
                </p>
            </div>

            <!-- Top Row: Two Feature Badges -->
            <div class="grid sm:grid-cols-2 gap-5 mb-5">

                <!-- English Badge Card -->
                <div class="group relative bg-slate-900 rounded-2xl overflow-hidden flex flex-col min-h-[260px]">
                    <!-- Image area -->
                    <div class="relative w-full h-44 bg-slate-800 overflow-hidden shrink-0">
                        <img
                            v-if="englishImage"
                            :src="englishImage"
                            alt="English"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        />
                        <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-600">
                            <svg class="w-9 h-9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M4.5 3h15A1.5 1.5 0 0121 4.5v15A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3z" />
                            </svg>
                            <span class="text-xs font-medium">Add image</span>
                        </div>
                        <!-- Gradient overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                        <!-- Accent pill -->
                        <span class="absolute top-3 left-3 bg-[#00AEEF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            English
                        </span>
                    </div>
                    <!-- Text -->
                    <div class="p-6 flex flex-col flex-1">
                        <h4 class="font-bold text-white text-base mb-1">
                            {{ t('programs.subject_support.english_bage_title') }}
                        </h4>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            {{ t('programs.subject_support.english_bage_desc') }}
                        </p>
                    </div>
                </div>

                <!-- PL Badge Card -->
                <div class="group relative bg-slate-900 rounded-2xl overflow-hidden flex flex-col min-h-[260px]">
                    <!-- Image area -->
                    <div class="relative w-full h-44 bg-slate-800 overflow-hidden shrink-0">
                        <img
                            v-if="plImage"
                            :src="plImage"
                            alt="PL"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        />
                        <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-600">
                            <svg class="w-9 h-9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M4.5 3h15A1.5 1.5 0 0121 4.5v15A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 014.5 3z" />
                            </svg>
                            <span class="text-xs font-medium">Add image</span>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                        <span class="absolute top-3 left-3 bg-[#F6A240] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            PL
                        </span>
                    </div>
                    <!-- Text -->
                    <div class="p-6 flex flex-col flex-1">
                        <h4 class="font-bold text-white text-base mb-1">
                            {{ t('programs.subject_support.pl_bage_title') }}
                        </h4>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            {{ t('programs.subject_support.pl_bage_desc') }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bottom Row: Mentoring (wide) + Employment (narrow) -->
            <div class="grid md:grid-cols-3 gap-5">

                <!-- Mentoring Card — spans 2 cols -->
                <div class="group md:col-span-2 relative bg-[#0F172A] rounded-2xl overflow-hidden flex flex-col min-h-[320px]">
                    <!-- Image area -->
                    <div class="relative w-full h-52 bg-slate-800 overflow-hidden shrink-0">
                        <img
                            v-if="mentoringImage"
                            :src="mentoringImage"
                            alt="Mentoring"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                        />
                        <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-600">
                            <svg class="w-9 h-9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M4.5 3h15A1.5 1.5 0 0121 4.5v15A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 014.5 3z" />
                            </svg>
                            <span class="text-xs font-medium">Add image</span>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
                        <!-- Floating highlight pill over image -->
                        <div class="absolute bottom-4 left-6 flex items-center gap-2">
                            <div class="flex -space-x-2">
                                <div class="w-7 h-7 rounded-full bg-[#00AEEF] border-2 border-[#0F172A]"></div>
                                <div class="w-7 h-7 rounded-full bg-white/30 border-2 border-[#0F172A]"></div>
                                <div class="w-7 h-7 rounded-full bg-white/15 border-2 border-[#0F172A]"></div>
                            </div>
                            <span class="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                                {{ t('programs.subject_support.metoring_highlight') }}
                            </span>
                        </div>
                    </div>
                    <!-- Text -->
                    <div class="p-7 flex flex-col flex-1">
                        <h3 class="text-xl font-bold text-white mb-2">
                            {{ t('programs.subject_support.metoring_title') }}
                        </h3>
                        <p class="text-slate-400 text-sm leading-relaxed max-w-md">
                            {{ t('programs.subject_support.metoring_desc') }}
                        </p>
                    </div>
                </div>

                <!-- Employment Card -->
                <div class="group relative bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden flex flex-col min-h-[320px]">
                    <!-- Image area -->
                    <div class="relative w-full h-52 bg-slate-100 overflow-hidden shrink-0">
                        <img
                            v-if="employmentImage"
                            :src="employmentImage"
                            alt="Employment"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-300">
                            <svg class="w-9 h-9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M4.5 3h15A1.5 1.5 0 0121 4.5v15A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 014.5 3z" />
                            </svg>
                            <span class="text-xs font-medium">Add image</span>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/30 to-transparent"></div>
                    </div>
                    <!-- Text -->
                    <div class="p-7 flex flex-col flex-1">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">
                            {{ t('programs.subject_support.employment_title') }}
                        </h3>
                        <p class="text-slate-500 text-sm leading-relaxed">
                            {{ t('programs.subject_support.employment_desc') }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import englishImage from "@/assets/images/support_program/ENGLISH.png";
import plImage from "@/assets/images/support_program/SOFT-SKILL.png";
import mentoringImage from "@/assets/images/support_program/MENTORING.png";
import employmentImage from "@/assets/images/support_program/JOB.png";

</script>
