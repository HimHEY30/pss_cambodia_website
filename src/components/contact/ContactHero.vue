<template>
    <section class="relative px-6 py-12 md:py-16 lg:py-24 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
            <span class="text-[#00AEEF] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
                {{ t('contact.hero.eye_catching_title') }}
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8 text-slate-900">
                {{ t('contact.hero.title_line1') }} <br />
                <span class="text-[#00AEEF]">{{ t('contact.hero.title_line2') }}</span>
            </h1>
            <p class="text-base md:text-lg text-slate-600 leading-relaxed px-4 md:px-0">
                {{ t('contact.hero.subtitle') }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
