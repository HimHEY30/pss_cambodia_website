<template>
    <section class="py-24 px-6 max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-extrabold text-slate-900 mb-4">{{ t('getInvolved.path_of_donation.title') }}</h2>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">{{
                t('getInvolved.path_of_donation.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DonationPathCard v-for="card in cards" :key="card.id" :icon="card.icon" :title="card.title"
                :description="card.description" :value="card.value" :valueDesc="card.valueDesc" />
        </div>

        <div class="mt-12 bg-sky-50 p-8 rounded-[2.5rem] text-center border border-sky-100 reveal">
            <p class="text-slate-700 font-medium">{{ t('getInvolved.path_of_donation.total_budget') }}</p>
        </div>
    </section>
</template>

<script setup>
import { GraduationCap, HouseHeart, BookCheck, University, BriefcaseBusiness } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import DonationPathCard from './DonationPathCard.vue'

const { t } = useI18n()

const cards = [
    {
        id: 'training',
        icon: GraduationCap,
        title: 'getInvolved.path_of_donation.training.label',
        description: 'getInvolved.path_of_donation.training.desc',
        value: 'getInvolved.path_of_donation.training.value',
        valueDesc: 'getInvolved.path_of_donation.training.value_desc',
    },
    {
        id: 'social_support',
        icon: HouseHeart,
        title: 'getInvolved.path_of_donation.social_support.label',
        description: 'getInvolved.path_of_donation.social_support.desc',
        value: 'getInvolved.path_of_donation.social_support.value',
        valueDesc: 'getInvolved.path_of_donation.social_support.value_desc',
    },
    {
        id: 'selection',
        icon: BookCheck,
        title: 'getInvolved.path_of_donation.selection.label',
        description: 'getInvolved.path_of_donation.selection.desc',
        value: 'getInvolved.path_of_donation.selection.value',
        valueDesc: 'getInvolved.path_of_donation.selection.value_desc',
    },
    {
        id: 'education',
        icon: University,
        title: 'getInvolved.path_of_donation.education.label',
        description: 'getInvolved.path_of_donation.education.desc',
        value: 'getInvolved.path_of_donation.education.value',
        valueDesc: 'getInvolved.path_of_donation.education.value_desc',
    },
    {
        id: 'employment',
        icon: BriefcaseBusiness,
        title: 'getInvolved.path_of_donation.employment.label',
        description: 'getInvolved.path_of_donation.employment.desc',
        value: 'getInvolved.path_of_donation.employment.value',
        valueDesc: 'getInvolved.path_of_donation.employment.value_desc',
    },
]
</script>
