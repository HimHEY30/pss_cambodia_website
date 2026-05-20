<template>
    <section class="reveal py-24 px-6 overflow-hidden">
        <div
        class="max-w-4xl mx-auto bg-white p-10 lg:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-sky-50 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[5rem] -z-0"></div>
        
        <div class="relative z-10">
            <svg class="text-sky-200 w-20 h-20 absolute -top-10 -left-10 opacity-50" fill="currentColor"
            viewBox="0 0 24 24">
            <path
            d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.017 21H3.017Z" />
        </svg>
        
                <h1 class="text-3xl font-bold text-primary mb-6 pt-10">{{ t('about.director_message.eye_catching_title') }}</h1>
                <p class="text-sm lg:text-lg font-medium text-slate-700 italic leading-relaxed mb-12 relative z-10">
                    "{{ t('about.director_message.message_line1') }}
                </p>
                <p class="text-sm lg:text-lg font-medium text-slate-700 italic leading-relaxed mb-12 relative z-10">
                    {{ t('about.director_message.message_line2') }}
                </p>
                <p class="text-sm lg:text-lg font-medium text-slate-700 italic leading-relaxed mb-12 relative z-10">
                    {{ t('about.director_message.message_line3') }}"
                </p>
                <div class="flex items-center gap-6">
                    <div class="relative">
                        <div class="w-20 h-20 rounded-full overflow-hidden ring-4 ring-sky-100 shadow-lg">
                            <img src="@/assets/images/staffs/BUNNA - SQAURE.png" alt="Director" />
                        </div>
                        <div
                            class="absolute -bottom-2 -right-2 bg-orange-400 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                            <Sparkles class="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-2xl text-slate-900">{{ t('about.director_message.director_name') }}
                        </h4>
                        <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">{{
                            t('about.director_message.signature') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>