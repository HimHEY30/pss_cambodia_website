<template>
    <section class="reveal py-20 px-6">
        <div class="max-w-4xl mx-auto bg-[#F6A240] p-12 rounded-[3rem] text-white text-center shadow-2xl">
            <h2 class="text-3xl font-extrabold mb-4">{{ t('programs.join_us.title') }}</h2>
            <p class="mb-8 opacity-90 text-lg">{{ t('programs.join_us.desc') }}</p>
            <router-link to="/contact"
                class="bg-white text-[#F6A240] px-10 py-4 rounded-md font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                {{ t('programs.join_us.cta') }}
            </router-link>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
