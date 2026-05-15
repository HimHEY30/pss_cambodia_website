<template>
    <section class="py-24 bg-[#00AEEF] text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z" fill="white"></path>
            </svg>
        </div>

        <div class="max-w-5xl mx-auto px-6 relative z-10">
            <h2 class="text-4xl font-extrabold mb-20 text-center">{{ t('about.journey.title') }}</h2>
            <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
                <div class="reveal mb-16 relative pl-10">
                    <div
                        class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                        <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year1`) }}</span>
                        <h4 class="text-2xl font-bold">{{ t(`about.journey.event1_title`) }}</h4>
                    </div>
                    <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event1`) }}</p>
                </div>
            </div>
            <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
                <div class="reveal mb-16 relative pl-10">
                    <div
                        class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                        <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year2`) }}</span>
                        <h4 class="text-2xl font-bold">{{ t(`about.journey.event2_title`) }}</h4>
                    </div>
                    <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event2`) }}</p>
                </div>
            </div>
            <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
                <div class="reveal mb-16 relative pl-10">
                    <div
                        class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                        <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year3`) }}</span>
                        <h4 class="text-2xl font-bold underline"> <a :href="t(`about.journey.event3_link`)"
                                target="_blank"">{{ t(`about.journey.event3_title`) }}</a></h4>
            </div>
            <p class=" text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event3`) }}</p>
                    </div>
                </div>
                <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
                    <div class="reveal mb-16 relative pl-10">
                        <div
                            class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                            <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year4`) }}</span>
                            <h4 class="text-2xl font-bold">{{ t(`about.journey.event4_title`) }}</h4>
                        </div>
                        <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event4`) }}</p>
                    </div>
                </div>
                <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
                    <div class="reveal mb-16 relative pl-10">
                        <div
                            class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                            <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year5`) }}</span>
                            <h4 class="text-2xl font-bold">{{ t(`about.journey.event5_title`) }}</h4>
                        </div>
                        <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event5`) }}</p>
                    </div>
                </div>
                <div class="relative border-l-2 border-white/20 ml-6 md:ml-0 md:pl-0">
                    <div class="reveal mb-16 relative pl-10">
                        <div
                            class="absolute -left-[9px] top-2 w-4 h-4 bg-orange-400 rounded-full ring-4 ring-[#00AEEF] group-hover:scale-150 transition-transform">
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 md:items-center mb-2">
                            <span class="text-3xl font-black text-white/40">{{ t(`about.journey.year6`) }}</span>
                            <h4 class="text-2xl font-bold"> {{ t(`about.journey.event6_title`) }}</h4>
                        </div>
                        <p class="text-sky-50 text-lg max-w-3xl leading-relaxed">{{ t(`about.journey.event6`) }}</p>
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