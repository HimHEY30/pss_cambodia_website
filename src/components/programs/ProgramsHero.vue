<template>
    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
            <span class="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                {{ t('programs.hero.eye_catching_title') }}
            </span>
            <h1 class="text-4xl lg:text-6xl font-extrabold leading-tight mb-8 text-slate-900">
                {{ t('programs.hero.title_line1') }}
                <span class="text-[#00AEEF]">{{ t('programs.hero.title_line2') }}</span>
            </h1>
            <p class="text-lg text-slate-600 leading-relaxed">
                {{ t('programs.hero.subtitle') }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
