<template>
    <div class="reveal bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-xl transition-all group">
        <div :class="iconWrapper">
            <component :is="icon" class="w-7 h-7 text-[#00AEEF] group-hover:text-white" />
        </div>
        <h3 class="text-xl font-bold mb-2 text-slate-900">{{ t(title) }}</h3>
        <p class="text-slate-500 text-sm leading-relaxed">{{ t(description) }}</p>
        <div class="mt-6 pt-6 border-t border-slate-50">
            <span class="text-2xl font-black text-slate-900">{{ t(value) }}</span>
            <span class="text-xs font-bold text-slate-400 ml-2">{{ t(valueDesc) }}</span>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'
const props = defineProps({
    icon: Object,
    title: String,
    description: String,
    value: String,
    valueDesc: String,
})
const { t } = useI18n()
const iconWrapper = 'w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00AEEF] transition-colors'
</script>
