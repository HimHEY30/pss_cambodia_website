<template>
    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
            <span class="text-[#F6A240] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                {{ t('getInvolved.hero.eyes_catching_title') }}
            </span>
            <h1 class="text-5xl lg:text-7xl font-extrabold leading-24 mb-8 text-slate-900">
                {{ t('getInvolved.hero.title_line1') }} <br />
                <span class="text-[#00AEEF]">{{ t('getInvolved.hero.title_line2') }}</span>
            </h1>
            <p class="text-lg text-slate-600 leading-relaxed">
                {{ t('getInvolved.hero.subtitle') }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
