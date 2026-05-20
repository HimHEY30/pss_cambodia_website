<template>
    <section class="reveal py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
                <div>
                    <h2 class="text-4xl leading-14 font-extrabold text-slate-900 mb-6">
                        {{ t('programs.subject_support.english_pl') }}
                    </h2>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        {{ t('programs.subject_support.english_pl_desc') }}
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                        <h4 class="font-bold text-[#00AEEF] mb-2">{{ t('programs.subject_support.english_bage_title') }}
                        </h4>
                        <p class="text-xs text-slate-500">{{ t('programs.subject_support.english_bage_desc') }}</p>
                    </div>
                    <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                        <h4 class="font-bold text-[#F6A240] mb-2">{{ t('programs.subject_support.pl_bage_title') }}</h4>
                        <p class="text-xs text-slate-500">{{ t('programs.subject_support.pl_bage_desc') }}</p>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <div class="md:col-span-2 bg-[#1A1A1B] text-white p-10 rounded-[2.5rem] relative overflow-hidden group">
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold mb-4">{{ t('programs.subject_support.metoring_title') }}</h3>
                        <p class="text-slate-400 max-w-md leading-relaxed mb-6">
                            {{ t('programs.subject_support.metoring_desc') }}
                        </p>
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full bg-[#00AEEF]"></div>
                            <div class="w-8 h-8 rounded-full bg-white/20"></div>
                            <div class="w-8 h-8 rounded-full bg-white/10"></div>
                            <span class="text-xs font-bold uppercase tracking-widest ml-2 text-sky-400">
                                {{ t('programs.subject_support.metoring_highlight') }}
                            </span>
                        </div>
                    </div>
                    <div
                        class="absolute right-0 bottom-0 w-48 h-48 bg-[#00AEEF] opacity-10 rounded-tl-full group-hover:scale-110 transition-transform duration-700">
                    </div>
                </div>
                <div
                    class="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-center">
                    <h3 class="text-xl font-bold mb-3">{{ t('programs.subject_support.employment_title') }}</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        {{ t('programs.subject_support.employment_desc') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
