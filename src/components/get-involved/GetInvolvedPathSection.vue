<template>
    <section class="py-24 px-6 max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-extrabold text-slate-900 mb-4">{{ t('getInvolved.path_of_donation.title') }}</h2>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">{{
                t('getInvolved.path_of_donation.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DonationPathCard v-for="card in cards" :key="card.id" :icon="card.icon" :title="card.title"
                :description="card.description" :value="card.value" :valueDesc="card.valueDesc" />
        </div>

        <div class="mt-12 bg-sky-50 p-8 rounded-[2.5rem] text-center border border-sky-100 reveal">
            <p class="text-slate-700 font-medium">{{ t('getInvolved.path_of_donation.total_budget') }}</p>
        </div>
    </section>
</template>

<script setup>
import { BookOpen, Home, Monitor, Heart } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import DonationPathCard from './DonationPathCard.vue'

const { t } = useI18n()

const cards = [
    {
        id: 'training',
        icon: BookOpen,
        title: 'getInvolved.path_of_donation.training.label',
        description: 'getInvolved.path_of_donation.training.desc',
        value: 'getInvolved.path_of_donation.training.value',
        valueDesc: 'getInvolved.path_of_donation.training.value_desc',
    },
    {
        id: 'food_house',
        icon: Home,
        title: 'getInvolved.path_of_donation.food_house.label',
        description: 'getInvolved.path_of_donation.food_house.desc',
        value: 'getInvolved.path_of_donation.food_house.value',
        valueDesc: 'getInvolved.path_of_donation.food_house.value_desc',
    },
    {
        id: 'tech_tools',
        icon: Monitor,
        title: 'getInvolved.path_of_donation.tech_tools.label',
        description: 'getInvolved.path_of_donation.tech_tools.desc',
        value: 'getInvolved.path_of_donation.tech_tools.value',
        valueDesc: 'getInvolved.path_of_donation.tech_tools.value_desc',
    },
    {
        id: 'health_support',
        icon: Heart,
        title: 'getInvolved.path_of_donation.health_support.label',
        description: 'getInvolved.path_of_donation.health_support.desc',
        value: 'getInvolved.path_of_donation.health_support.value',
        valueDesc: 'getInvolved.path_of_donation.health_support.value_desc',
    },
]
</script>
