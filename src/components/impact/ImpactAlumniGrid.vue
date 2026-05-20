<template>
    <div class="mt-32">
        <div class="text-center mb-16">
            <h3 class="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-2">
                {{ t('impact.alumini.subtitle') }}
            </h3>
            <h2 class="text-4xl font-extrabold text-slate-900">{{ t('impact.alumini.title') }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="card in cards" :key="card.id"
                class="reveal bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#00AEEF] hover:shadow-xl transition-all duration-500 group flex flex-col justify-between h-full">
                <div>
                    <div class="flex items-center gap-4 mb-6">
                        <div
                            class="w-14 h-14 rounded-full overflow-hidden ring-4 ring-sky-50 group-hover:ring-sky-100 transition-all">
                            <img :src="card.image" alt="" class="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900">{{ t(card.name) }}</h4>
                            <p class="text-[10px] uppercase font-black text-[#00AEEF] tracking-widest">
                                {{ t(card.subLabel) }}
                            </p>
                        </div>
                    </div>

                    <template v-if="card.title">
                        <h3 class="text-xl font-bold italic mb-3">"{{ t(card.title) }}"</h3>
                    </template>
                    <p class="text-slate-600 text-sm leading-relaxed mb-2">{{ t(card.intro) }}</p>
                    <p class="text-slate-600 text-sm italic leading-relaxed">"{{ t(card.quote1) }}"</p>

                    <div class="grid transition-all duration-500 ease-in-out"
                        :class="expandedCards[card.id] ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'">
                        <div class="overflow-hidden space-y-4 text-sm text-slate-600 leading-relaxed">
                            <template v-if="card.body_1">
                                <p>{{ t(card.body_1) }}</p>
                            </template>
                            <template v-if="card.quote2">
                                <p class="italic">"{{ t(card.quote2) }}"</p>
                            </template>
                            <template v-if="card.body_2">
                                <p>{{ t(card.body_2) }}</p>
                            </template>
                            <template v-if="card.impact">
                                <p>{{ t(card.impact) }}</p>
                            </template>
                            <template v-if="card.closing_quote">
                                <p class="italic">"{{ t(card.closing_quote) }}"</p>
                            </template>
                        </div>
                    </div>

                    <button @click="toggle(card.id)"
                        class="mt-4 text-xs font-bold text-[#00AEEF] hover:text-sky-600 inline-flex items-center gap-1 transition-colors">
                        {{ expandedCards[card.id] ? t('impact.alumini.cta_read_less') :
                            t('impact.alumini.cta_read_more') }}
                        <svg class="w-3 h-3 transition-transform duration-300"
                            :class="{ 'rotate-180': expandedCards[card.id] }" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                <div class="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span class="text-[10px] font-bold text-slate-300">{{ t(card.classLabel) }}</span>
                    <svg class="w-5 h-5 text-sky-100 group-hover:text-[#00AEEF] transition-colors" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.017 21H3.017Z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import ChanutImage from '@/assets/images/students/CHANUT.jpg'
import PisethImage from '@/assets/images/students/PISETH.jpg'
import KuntheaImage from '@/assets/images/students/KUNTHEA.jpg'
import PartnerImage from '@/assets/images/dlkh-logo.jpeg'

const { t } = useI18n()
const expandedCards = reactive({ chanut: false, piseth: false, kunthea: false, partner: false })

const cards = [
    {
        id: 'chanut',
        image: ChanutImage,
        name: 'impact.alumini.alumini_1.name',
        subLabel: 'impact.alumini.alumini_1.location',
        title: 'impact.alumini.alumini_1.title',
        intro: 'impact.alumini.alumini_1.intro',
        quote1: 'impact.alumini.alumini_1.quote_1',
        body_1: 'impact.alumini.alumini_1.body_1',
        quote2: 'impact.alumini.alumini_1.quote_2',
        body_2: 'impact.alumini.alumini_1.body_2',
        impact: 'impact.alumini.alumini_1.impact',
        closing_quote: 'impact.alumini.alumini_1.closing_quote',
        classLabel: 'impact.alumini.alumini_1.class',
    },
    {
        id: 'piseth',
        image: PisethImage,
        name: 'impact.alumini.alumini_2.name',
        subLabel: 'impact.alumini.alumini_2.location',
        title: 'impact.alumini.alumini_2.title',
        intro: 'impact.alumini.alumini_2.intro',
        quote1: 'impact.alumini.alumini_2.quote_1',
        body_1: 'impact.alumini.alumini_2.body_1',
        quote2: 'impact.alumini.alumini_2.quote_2',
        body_2: 'impact.alumini.alumini_2.body_2',
        impact: 'impact.alumini.alumini_2.impact',
        closing_quote: 'impact.alumini.alumini_2.closing_quote',
        classLabel: 'impact.alumini.alumini_2.class',
    },
    {
        id: 'kunthea',
        image: KuntheaImage,
        name: 'impact.alumini.alumini_3.name',
        subLabel: 'impact.alumini.alumini_3.position',
        intro: 'impact.alumini.alumini_3.qoute_1',
        quote1: 'impact.alumini.alumini_3.qoute_2',
        quote2: 'impact.alumini.alumini_3.qoute_3',
        classLabel: 'impact.alumini.alumini_3.class',
    },
    {
        id: 'partner',
        image: PartnerImage,
        quote1: 'impact.alumini.partner.qoute_2',
        quote2: 'impact.alumini.partner.qoute_3',
        classLabel: 'impact.alumini.partner.work_at',
    },
]

function toggle(id) {
    expandedCards[id] = !expandedCards[id]
}
</script>
