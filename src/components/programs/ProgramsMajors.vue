<template>
    <section class="py-12 px-6 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8">
            <div v-for="card in cards" :key="card.id" :class="card.wrapperClass">
                <div :class="card.iconWrapper">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                </div>
                <h2 :class="card.titleClass">{{ t(card.title) }}</h2>
                <p :class="card.descriptionClass">
                    {{ t(card.description) }}
                    <br />
                    <a :href="card.link" class="flex gap-2 px-4 py-2 border mt-4 rounded-lg" target="_blank">
                        <span class="icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </span>
                        <span class="text">{{ t('programs.majors.cta') }}</span>
                    </a>
                </p>
                <div class="space-y-3">
                    <p :class="card.ctaLabelClass">{{ t(card.careerTitle) }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="careerKey in card.careerKeys" :key="careerKey" :class="card.careerClass">
                            {{ t(careerKey) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const props = defineProps({
    webProgram: String,
    snacProgram: String,
})
const { t } = useI18n()

const cards = [
    {
        id: 'major1',
        title: 'programs.majors.major1_title',
        description: 'programs.majors.major1_desc',
        link: props.webProgram,
        wrapperClass:
            'reveal group bg-white border border-slate-100 p-8 lg:p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-sky-200 transition-all duration-500',
        iconWrapper:
            'w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00AEEF] transition-colors',
        titleClass: 'text-3xl font-extrabold text-slate-900 mb-6',
        descriptionClass: 'text-slate-600 mb-8 leading-relaxed',
        ctaLabelClass: 'text-xs font-black uppercase tracking-widest text-sky-500 mb-4',
        careerClass:
            'px-4 py-2 bg-slate-50 rounded-full text-sm font-semibold text-slate-700 border border-slate-100',
        careerTitle: 'programs.majors.major1_career_path',
        careerKeys: [
            'programs.majors.major1_career1',
            'programs.majors.major1_career2',
            'programs.majors.major1_career3',
            'programs.majors.major1_career4',
        ],
    },
    {
        id: 'major2',
        title: 'programs.majors.major2_title',
        description: 'programs.majors.major2_desc',
        link: props.snacProgram,
        wrapperClass:
            'reveal group bg-[#00AEEF] p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-white hover:-translate-y-2 transition-all duration-500',
        iconWrapper:
            'w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8',
        titleClass: 'text-3xl font-extrabold mb-6',
        descriptionClass: 'text-sky-50 mb-8 leading-relaxed',
        ctaLabelClass: 'text-xs font-black uppercase tracking-widest text-sky-200 mb-4',
        careerClass:
            'px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20 backdrop-blur-md',
        careerTitle: 'programs.majors.major2_career_path',
        careerKeys: [
            'programs.majors.major2_career1',
            'programs.majors.major2_career2',
            'programs.majors.major2_career3',
            'programs.majors.major2_career4',
            'programs.majors.major2_career5',
            'programs.majors.major2_career6',
        ],
    },
]
</script>
