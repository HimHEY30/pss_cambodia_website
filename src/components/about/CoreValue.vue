<template>
    <section class="reveal py-20 max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
            <h3 class="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{{
                t('about.core_values.eye_catching_title') }}</h3>
            <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900">
                {{ t('about.core_values.title') }}
            </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(val, i) in value_icons" :key="i"
                class="p-10 rounded-[2.5rem] bg-white border border-slate-100 text-center hover:border-sky-300 hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,181,226,0.15)] group">
                <div
                    class="w-20 h-20 bg-sky-50 group-hover:bg-[#00AEEF] rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <component :is="val.icon" class="text-sky-500 group-hover:text-white w-10 h-10 transition-colors" />
                </div>
                <h4 class="text-2xl font-bold mb-4 text-slate-900">{{ t(`about.core_values.value${i + 1}_title`) }}</h4>
                <p class="text-slate-500 leading-relaxed">{{ t(`about.core_values.value${i + 1}_desc`) }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { Users, ShieldCheck, Heart, Sparkles } from 'lucide-vue-next';

const { t } = useI18n();
const value_icons = [
  { icon: ShieldCheck },
  { icon: Sparkles },
  { icon: Heart },
  { icon: Users }
];
</script>

<style lang="scss" scoped></style>