<template>
    <div class="lg:col-span-2 space-y-6 md:space-y-8 flex flex-col justify-between">
        <div class="space-y-6 md:space-y-8">
            <div
                class="bg-[#F6A240] p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white shadow-xl shadow-orange-100 group hover:-translate-y-2 transition-all duration-500">
                <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-black mb-4">{{ t('contact.contact_info.title') }}</h3>
                <p class="text-orange-50 leading-relaxed text-sm md:text-base">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        <strong class="block mb-1">{{ t('contact.contact_info.address_title') }}</strong>
                        {{ t('contact.contact_info.address') }}
                    </a>
                </p>
            </div>

            <div class="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 space-y-6">
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group">
                    <div
                        class="w-12 h-12 flex-shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            {{ t('common.footer.contact.email_label') }}
                        </p>
                        <p class="font-bold text-slate-700 text-sm md:text-base break-all">
                            {{ t('common.footer.contact.email') }}
                        </p>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group">
                    <div
                        class="w-12 h-12 flex-shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            {{ t('common.footer.contact.phone_label') }}
                        </p>
                        <p class="font-bold text-slate-700 text-sm md:text-base">
                            {{ t('common.footer.contact.phone') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
