<template>
    <section class="reveal py-28 px-6 max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                {{ t('programs.selection.process_title') }}
            </h2>
            <p class="text-slate-500 text-lg max-w-4xl mx-auto leading-relaxed">
                {{ t('programs.selection.process_desc') }}
            </p>
        </div>

        <!-- Steps Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            <div
                v-for="step in steps"
                :key="step.id"
                class="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
                <!-- Step image area -->
                <div class="relative w-full h-44 bg-slate-50 overflow-hidden">
                    <img
                        v-if="step.image"
                        :src="step.image"
                        :alt="t(step.label)"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <!-- Placeholder when no image -->
                    <div v-else class="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-300">
                        <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M4.5 3h15A1.5 1.5 0 0121 4.5v15A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3z" />
                        </svg>
                        <span class="text-xs font-medium">Add image</span>
                    </div>

                    <!-- Step number badge -->
                    <div class="absolute top-3 left-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                        <span class="text-sm font-black text-[#00AEEF]">{{ step.number }}</span>
                    </div>
                </div>

                <!-- Content -->
                <div class="p-5 flex flex-col flex-1">
                    <p class="font-bold text-slate-800 text-base leading-snug group-hover:text-[#00AEEF] transition-colors">
                        {{ t(step.label) }}
                    </p>
                    <!-- Connector line on desktop -->
                    <div class="mt-auto pt-4 hidden lg:flex items-center gap-1" v-if="step.id < steps.length">
                    </div>
                </div>

                <!-- Bottom accent bar -->
                <div class="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00AEEF] to-[#F6A240] transition-all duration-500 rounded-b-2xl"></div>
            </div>
        </div>

        <!-- Bottom CTA / stat strip -->
        <div class="bg-slate-900 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#00AEEF] rounded-full opacity-10 blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F6A240] rounded-full opacity-10 blur-3xl pointer-events-none"></div>

            <div class="flex items-center gap-5 relative z-10">
                <div class="text-4xl font-black text-[#F6A240]">
                    {{ t('programs.selection.target_value') }}
                </div>
                <div class="w-px h-10 bg-white/10 hidden sm:block"></div>
                <div class="text-sm font-semibold text-slate-300 leading-tight max-w-[180px]">
                    {{ t('programs.selection.target_label') }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import STEP_1 from "@/assets/images/selections/STEP (1).png";
import STEP_2 from "@/assets/images/selections/STEP (2).png";
import STEP_3 from "@/assets/images/selections/STEP (3).png";
import STEP_4 from "@/assets/images/selections/STEP (4).png";
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const steps = [
    {
        id: 1,
        number: 1,
        label: 'programs.selection.step1',
        desc: 'programs.selection.step1_desc',
        image: STEP_1,
    },
    {
        id: 2,
        number: 2,
        label: 'programs.selection.step2',
        desc: 'programs.selection.step2_desc',
        image: STEP_2,
    },
    {
        id: 3,
        number: 3,
        label: 'programs.selection.step3',
        desc: 'programs.selection.step3_desc',
        image: STEP_3,
    },
    {
        id: 4,
        number: 4,
        label: 'programs.selection.step4',
        desc: 'programs.selection.step4_desc',
        image: STEP_4,
    },
]
</script>
