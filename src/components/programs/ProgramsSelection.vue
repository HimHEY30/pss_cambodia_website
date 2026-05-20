<template>
    <section class="reveal py-24 px-6 max-w-7xl mx-auto">
        <div class="bg-slate-900 rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden">
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#00AEEF] rounded-full opacity-20 blur-3xl"></div>
            <div class="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 class="text-4xl font-extrabold mb-6">{{ t('programs.selection.process_title') }}</h2>
                    <p class="text-slate-400 text-lg mb-8 leading-relaxed">
                        {{ t('programs.selection.process_desc') }}
                    </p>
                    <div class="inline-flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <div class="text-3xl font-black text-[#F6A240]">{{ t('programs.selection.target_value') }}</div>
                        <div class="text-sm font-bold leading-tight text-slate-300">
                            {{ t('programs.selection.target_label') }}
                        </div>
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="flex items-center gap-6 group" v-for="step in steps" :key="step.id">
                        <div
                            class="w-12 h-12 rounded-full border-2 border-[#00AEEF] flex items-center justify-center font-black text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                            {{ step.number }}
                        </div>
                        <p class="text-xl font-bold">{{ t(step.label) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const steps = [
    { id: 1, number: 1, label: 'programs.selection.step1' },
    { id: 2, number: 2, label: 'programs.selection.step2' },
    { id: 3, number: 3, label: 'programs.selection.step3' },
    { id: 4, number: 4, label: 'programs.selection.step4' },
]
</script>
