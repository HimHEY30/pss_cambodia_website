<template>
    <section class="py-24 px-6 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div class="reveal">
                <h2 class="text-4xl font-extrabold text-slate-900 mb-6">{{ t('impact.stories.title') }}</h2>
                <p class="text-primary font-bold mb-6">{{ t('impact.stories.subtitle') }}</p>
                <p class="text-lg text-slate-600 leading-relaxed mb-6">{{ t('impact.stories.desc_1') }}</p>
                <p class="text-slate-600 leading-relaxed italic">
                    <strong class="text-primary">{{ t('impact.stories.desc_2_line_1') }}</strong>
                    {{ t('impact.stories.desc_2_line_2') }}
                </p>
            </div>
            <div class="reveal relative">
                <div
                    class="aspect-video rounded-[3rem] bg-slate-200 overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                    <img src="@/assets/images/IMPACT_PIC.jpg" alt="Testimony" class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
