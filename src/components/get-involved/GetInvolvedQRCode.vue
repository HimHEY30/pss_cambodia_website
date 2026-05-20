<template>
    <section class="reveal py-12 px-6 max-w-5xl mx-auto">
        <div
            class="bg-slate-900 rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div class="absolute -top-20 -left-20 w-64 h-64 bg-[#00AEEF] rounded-full opacity-20 blur-3xl"></div>

            <div class="lg:w-1/2 relative z-10 text-center lg:text-left">
                <h2 class="text-3xl font-extrabold mb-6">{{ t('getInvolved.qr.title') }}</h2>
                <p class="text-slate-400 mb-8 leading-relaxed">{{ t('getInvolved.qr.subtitle') }}</p>
                <div class="space-y-4">
                    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <div class="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <p class="text-sm font-medium">{{ t('getInvolved.qr.confirm.option_1') }}</p>
                    </div>
                    <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <div class="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p class="text-sm font-medium">{{ t('getInvolved.qr.confirm.option_2') }}</p>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 flex flex-col items-center">
                <div
                    class="bg-white p-6 rounded-[2rem] shadow-2xl relative group transition-transform hover:scale-105 duration-500">
                    <div
                        class="w-64 h-64 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <img src="@/assets/images/QR.png" alt="KHQR Code" class="w-full h-full opacity-80" />
                    </div>
                    <div class="mt-4 flex justify-center">
                        <span class="text-slate-900 font-black tracking-24 text-sm uppercase">($) Promotting Skills
                            <br /> for Success Organization</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
